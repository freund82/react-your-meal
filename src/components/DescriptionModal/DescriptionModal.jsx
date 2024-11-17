import "./descriptionModal.css";
import Close from "../../assets/icons/close.png";



function DescriptionModal({closeModal, item, handleSelectedItems}){


    


    return(
        <div className="descriptionModal">
            <div className="descriptionModal__inner">
                <div style={{textAlign:"right"}}>
                <img className="descriptionModal__closeBtn" src={Close} alt="" onClick={closeModal} width="30px" height="30px" />
                </div>
                <h2 style={{fontSize:"4rem", marginBottom:"2.4rem", marginTop:"-2rem"}}>{item.name}</h2>
                <div className="descriptionModal__content">
                    <div style={{display:"flex", gap:"2.4rem"}}>
                    <div>
                        <img src={item.image} alt="" />
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
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <div>
                        <button className="cart__button descriptionButton" onClick={()=>handleSelectedItems(item)}>Добавить</button>
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