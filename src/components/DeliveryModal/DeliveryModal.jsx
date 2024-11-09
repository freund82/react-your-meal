import "./deliveryModal.css";
import {useState} from "react";
import Cake from "../../assets/icons/cake.png";
import Close from "../../assets/icons/close.png";


function DeliveryModal({closeModal}) {

const [selectedValue, setSelectedValue] = useState("Delivery");


   
const handleRadioChange=(e)=>{
    setSelectedValue(e.target.value)
}

    return (
        <div  className="deliveryModal">
            <img className="deliveryModal__closeBtn" src={Close} alt="" onClick={closeModal}/>
            <div className="deliveryModal__item">
                <img src={Cake} alt=""/>
            </div>
            <form  className="deliveryModal__form">
               <label className="deliveryModal__label" >Доставка</label>
                    <input className="deliveryModal__input" type="text" placeholder="Ваше имя"/>
                    <input className="deliveryModal__input" type="phone" placeholder="Телефон"/>
                <div>
                    <input type="radio" name="group1"value="Yourself" checked={selectedValue === "Yourself"} onChange={handleRadioChange}/>
                    <label htmlFor="Yourself">Самовывоз</label>
                </div>
                <div>
                    <input type="radio" name="group1" value="Delivery" checked={selectedValue === "Delivery"} onChange={handleRadioChange}/>
                    <label htmlFor="Delivery">Доставка</label>
                </div>
                {
                    selectedValue === "Delivery" &&
                    <div className="deliveryModal__adress">
                     <input className="deliveryModal__input" type="text" placeholder="Улица, дом, квартира"/>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <input className="deliveryModal__input adress" type="text" placeholder="Этаж"/> 
                            <input className="deliveryModal__input adress" type="text" placeholder="Домофон"/>
                        </div> 
                </div>
                }
               
                    <button className="deliveryModal__btn" type="submit">Оформить</button>
                
            </form>
        </div>
    )

}

export default DeliveryModal
