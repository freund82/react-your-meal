import "./deliveryModal.css";
import { useState, useContext } from "react";
import { ItemsContext } from "../Cart/Cart";
import Cake from "../../assets/icons/cake.png";
import Close from "../../assets/icons/close.png";



function DeliveryModal({closeModal, selectedItems}) {
  
const {itemCounts} = useContext(ItemsContext);

const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [selectedValue, setSelectedValue] = useState("Delivery");
const [address, setAddress] = useState("");
const [floor, setFloor] = useState("");
const [housePhone, setHousePhone] = useState("");



   

const handleNameChange=(e)=>{
    setName(e.target.value)
}

const handlePhoneChange=(e)=>{
    setPhone(e.target.value)
}
const handleRadioChange=(e)=>{
    setSelectedValue(e.target.value)
   
   }

const handleAddressChange=(e)=>{
    setAddress(e.target.value)
}

const handleFloorChange=(e)=>{
    setFloor(e.target.value)
}

const handleHousePhoneChange=(e)=>{
    setHousePhone(e.target.value)
}

const collectCartData = () => {
    const cartItems = selectedItems.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: itemCounts[item.id] || 1,
    }));
    const totalSum = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return { cartItems, totalSum };
  };
  

 const handleSubmitData=(e)=>{
    e.preventDefault()
   const formData={
    name,
    phone,
    deliveryType: selectedValue,
    address,
    floor,
    housePhone
   }
   const cartData = collectCartData();
   const dataToSend = { ...formData, ...cartData };
   fetch('php/data.php',{
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }

   }
   ).then(response => response.json()).then(data => console.log(data))
   .catch(error => console.log(error))
    closeModal()
    }
    
    return (
        <div  className="deliveryModal">
            <img className="deliveryModal__closeBtn" src={Close} alt="" onClick={closeModal}/>
            <div className="deliveryModal__item">
                <img src={Cake} alt=""/>
            </div>
            <form  className="deliveryModal__form">
               <label className="deliveryModal__label" >Доставка</label>
                    <input className="deliveryModal__input" type="text" value={name} onChange={handleNameChange} placeholder="Ваше имя" required/>
                    <input className="deliveryModal__input" type="phone" value={phone} onChange={handlePhoneChange} placeholder="Телефон" required/>
                <div>
                    <input type="radio" name="group1" value="Yourself" checked={selectedValue === "Yourself"} onChange={handleRadioChange}/>
                    <label htmlFor="Yourself">Самовывоз</label>
                </div>
                <div>
                    <input type="radio" name="group1" value="Delivery" checked={selectedValue === "Delivery"} onChange={handleRadioChange}/>
                    <label htmlFor="Delivery">Доставка</label>
                </div>
                {
                    selectedValue === "Delivery" &&
                    <div className="deliveryModal__adress">
                     <input className="deliveryModal__input" type="text" value={address} onChange={handleAddressChange} placeholder="Улица, дом, квартира"/>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <input className="deliveryModal__input adress" type="text" value={floor} onChange={handleFloorChange} placeholder="Этаж"/> 
                            <input className="deliveryModal__input adress" type="text" value={housePhone} onChange={handleHousePhoneChange} placeholder="Домофон"/>
                        </div> 
                </div>
                }
               
                    <button className="deliveryModal__btn" type="submit" onClick={handleSubmitData}>Оформить</button>
                
            </form>
        </div>
    )

}

export default DeliveryModal
