import "./Categories.css"
import {useState} from "react"
import {HashLink} from "react-router-hash-link"

function Categories({categories, showDescriptionModal}) {
   
    const [activeCategory, setActiveCategory] = useState(0)

    const handleChangeCategory=(index)=>{
        setActiveCategory(index)
    }

    return (
        <div className={`categories ${showDescriptionModal ? 'change-position' : ''}`}>
            <div className="categories__inner">
                  {categories.map((item, index) => (
                    <HashLink key={index} to={`#${item.type}`} smooth>
                    <div  onClick={()=>handleChangeCategory(index)} className={activeCategory === index ? "categories__item active" : "categories__item"}>
                    <img className="categories__img" src={item.image} alt="meat" width="24" height="24"/>
                    <p className="categories__text">{item.type}</p>
                    </div>
                    </HashLink>
                   ))}
                </div>
        </div>
            )
    }

export default Categories