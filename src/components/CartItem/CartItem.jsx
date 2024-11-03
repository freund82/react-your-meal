import "./cartItem.css";
import {useContext, useState, useEffect} from "react";
import { CardContext } from "../../App";


function CartItem({onTotalChange}){

    const {selectedItems} = useContext(CardContext);
    
    const [itemCounts, setItemCounts] = useState({});

    const handleCountChange = (itemId, increment) => {
        setItemCounts((prevCounts) => {
          const newCounts = { ...prevCounts };
          newCounts[itemId] = (newCounts[itemId] || 1) + increment;
          return newCounts;
        });
      };
 const total = selectedItems.reduce((acc, item) => {
        const count = itemCounts[item.id] || 1;
        return acc + item.price * count;
      }, 0);

      useEffect(() => {
        onTotalChange(total);
      }, [total]);

    return (
        <>
                  {selectedItems.map((item, index)=>(
                    <div key={index}  className="cart__item">
                    <div key={item.id} className="cart__item--info">
                    <div>
                        <img style={{borderRadius:"0.8rem"}} src={item.image} alt="Классика" width="64px" height="52px" />
                    </div>
                    <div className="cart__item--text">
                        <span>{item.name}</span>
                        <span style={{color:"var(--dark-gray-color)"}}>{item.weight}г</span>
                        <span>{item.price}₽</span>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="cart__item--count">
                    <span style={{cursor:"pointer"}}  onClick={() => handleCountChange(item.id, -1)}>-</span>
                    <span>{itemCounts[item.id] || 1}</span>
                    <span style={{cursor:"pointer"}}  onClick={() => handleCountChange(item.id, 1)}>+</span>
                </div>
                </div>
                  ))}
        </>       
    )
}

export default CartItem