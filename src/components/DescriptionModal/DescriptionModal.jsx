import "./descriptionModal.css";
import {useState } from "react";
import Close from "../../assets/icons/close.png";



function DescriptionModal({closeModal, item, handleSelectedItems}){

   const [isButtonDisabled, setIsButtonDisabled] = useState(false);
   const handleButtonClick = () => {
    handleSelectedItems(item);
    setIsButtonDisabled(true);
   }

    


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
                    <div className="descriptionModal__buttonBlock" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <div>
                        <button className="cart__button descriptionButton" onClick={handleButtonClick} disabled={isButtonDisabled}>Добавить</button>
                        </div>
                        <div>
                            <span>{item.price} руб.</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default DescriptionModal;