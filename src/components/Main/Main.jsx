import "./main.css"
import { useContext, useState} from "react"
import { CardContext } from "../../App"
import DescriptionModal from "../DescriptionModal/DescriptionModal"




function Main({categorieType, showDescriptionModal, handleShowDescriptionModal, handleCloseDescriptionModal}) {

    const {data, selectedItems, setSelectedItems} = useContext(CardContext)
    

    let mealType=data.filter((meal) => meal.type === categorieType)

 const handleSelectedItems=(item)=>{
    const isItemAlreadySelected = selectedItems.some(selectedItem => selectedItem.id === item.id);
    if (!isItemAlreadySelected) {
      setSelectedItems([...selectedItems, item]);
    }
 }

    return (
    <div className="mainSection">
            <h2 id={categorieType} className="main__title">{categorieType}</h2>
            {mealType.length > 0 ? mealType.map((item) => (
                    <div key={item.id} className="main__card">
                        <div className="main__card--item">
                        <img className="main__card--img" src={item.image} alt="meat" width="276px" height="220px" onClick={()=>handleShowDescriptionModal(item.id)}/>
                        {showDescriptionModal === item.id && <DescriptionModal  item={item} closeModal={handleCloseDescriptionModal} handleSelectedItems={handleSelectedItems}/>}
                                <h3 className="main__card--price">{item.price}₽</h3>
                            <p className="main__card--text">{item.name}</p>
                            <span className="main__card--weight">{item.weight} г</span>
                            <button type="button" className="main__card--btn" onClick={() => handleSelectedItems(item)} disabled={selectedItems.includes(item)}>Добавить</button>
                        </div>
                    </div> 
            )):(<p className="main__text">Блюд пока нет</p>)}
        </div>
    )
}

export default Main