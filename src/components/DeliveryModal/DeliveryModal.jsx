import "./deliveryModal.css";
import {useContext, useState} from "react";
import { CardContext } from "../../App";
import Cake from "../../assets/icons/cake.png";
import Close from "../../assets/icons/close.png";


function DeliveryModal() {

const [selectedValue, setSelectedValue] = useState("Delivery");

const {closeModal, setCloseModal} = useContext(CardContext);

const handleCloseModal = () => {
        setCloseModal(true);
    };

   
const handleRadioChange=(e)=>{
    setSelectedValue(e.target.value)
}

    return (
        <div  className={`deliveryModal ${closeModal ? "closed" : ""}`}>
            <img className="deliveryModal__closeBtn" src={Close} alt="" onClick={handleCloseModal}/>
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
