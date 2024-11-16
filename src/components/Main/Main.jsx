import "./main.css"
import { useContext} from "react"
import {Link } from "react-router-dom"
import { CardContext } from "../../App"




function Main({categorieType}) {

    const {data, selectedItems, setSelectedItems} = useContext(CardContext)
    let mealType=data.filter((meal) => meal.type === categorieType)

    
 

    return (
    <>
            <h2 id={categorieType} className="main__title">{categorieType}</h2>
            {mealType.length > 0 ? mealType.map((item) => (
                    <div key={item.id} className="main__card">
                        <div className="main__card--item">
                        <Link to="/react-your-meal/descriptionModal" ><img className="main__card--img" src={item.image} alt="meat" width="276px" height="220px" style={{borderRadius:"2.5rem"}}/> </Link>
                                <h3 className="main__card--price">{item.price}₽</h3>
                            <p className="main__card--text">{item.name}</p>
                            <span className="main__card--weight">{item.weight} г</span>
                            <button type="button" className="main__card--btn" onClick={() => setSelectedItems([...selectedItems, item])} disabled={selectedItems.includes(item)}>Добавить</button>
                        </div>
                    </div> 
            )):(<p className="main__text">Блюд пока нет</p>)}
        </>
    )
}

export default Main