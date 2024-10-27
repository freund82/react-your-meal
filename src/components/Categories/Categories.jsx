import "./Categories.css"
import {useState} from "react"

function Categories({categories}) {
   
    const [activeCategory, setActiveCategory] = useState(0)

    const handleChangeCategory=(index)=>{
        setActiveCategory(index)
    }

    return (
        <div className="categories">
            <div className="categories__inner">
                  {categories.map((item, index) => (
                    <div key={item.id} onClick={()=>handleChangeCategory(index)} className={activeCategory === index ? "categories__item active" : "categories__item"}>
                    <img className="categories__img" src={item.image} alt="meat" width="24" height="24"/>
                    <p className="categories__text">{item.name}</p>
                    </div>
                   ))}
                </div>
        </div>
            )
    }

export default Categories