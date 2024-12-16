import "./descriptionModal.css";
import {useState, useContext } from "react";
import Close from "../../assets/icons/close.png";
import { CardContext } from "../../App";



function DescriptionModal({closeModal, item, handleSelectedItems}){

   const [isButtonDisabled, setIsButtonDisabled] = useState(false);
   const handleButtonClick = () => {
    handleSelectedItems(item);
    setIsButtonDisabled(true);
   }

   const [count, setCount] = useState(1);
   const { selectedItems, setSelectedItems } = useContext(CardContext);
 
   const handleIncrement = () => {
     setCount(prev => prev + 1);
   };
 
   const handleDecrement = () => {
     if (count > 1) {
       setCount(prev => prev - 1);
     }
   };
 
   const handleAddToCart = () => {
     const existingItemIndex = selectedItems.findIndex(
       selectedItem => selectedItem.id === item.id
     );
 
     if (existingItemIndex !== -1) {
       // Если товар уже есть в корзине, обновляем его количество
       const updatedItems = [...selectedItems];
       updatedItems[existingItemIndex] = {
         ...updatedItems[existingItemIndex],
         count: updatedItems[existingItemIndex].count + count
       };
       setSelectedItems(updatedItems);
     } else {
       // Если товара нет в корзине, добавляем новый
       setSelectedItems([...selectedItems, { ...item, count }]);
     }
     closeModal();
   };
 
    


    return(
        <div className="descriptionModal">
        <div className="descriptionModal__inner">
            <div style={{textAlign:"right"}}>
                <img className="descriptionModal__closeBtn" src={Close} alt="" onClick={closeModal} width="30px" height="30px" />
            </div>
            <h2 className="descriptionModal__title">{item.name}</h2>
            <div className="descriptionModal__content">
                <div className="descriptionModal__contentBlock">
                    <div>
                        <img src={item.image} alt="" width="276px" height="220px" style={{borderRadius:"2.5rem"}} />
                    </div>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                        <p style={{margin:0}}>{item.description}</p>
                        {item.ingridients && <span style={{marginBottom:"0.4rem", fontSize:"1.2rem"}}>Состав:</span>}
                        {item.ingridients && item.ingridients.map((ingridient, index)=>
                            <li key={index} style={{listStyle:"none", fontSize:"1.2rem", lineHeight:"1.86rem"}}>{ingridient}</li> 
                        )}
                        <div>
                            <span style={{fontSize:"1.2rem", color:"var(--dark-gray-color)", fontWeight:"400"}}>{item.weight}г, </span>
                            <span style={{fontSize:"1.2rem", color:"var(--dark-gray-color)", fontWeight:"400"}}>ккал {item.calories}</span>
                        </div>
                    </div>
                </div>
                <div className="counter">
                    <button onClick={handleDecrement}>-</button>
                    <span>{count}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <div className="descriptionModal__buttonBlock">
                    <button onClick={handleAddToCart}>Добавить в корзину ({item.price * count}₽)</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default DescriptionModal;