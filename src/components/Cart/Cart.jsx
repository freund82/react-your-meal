import "./cart.css";
import {createContext, useContext, useState } from "react";
import {CardContext} from "../../App";
import Delivery from "../../assets/icons/delivery.png";
import CartItem from "../CartItem/CartItem";
import DeliveryModal from "../DeliveryModal/DeliveryModal";

export const ItemsContext = createContext({});

function Cart() {
    const { selectedItems, setSelectedItems } = useContext(CardContext);

    const updateItemCount = (itemId, newCount) => {
      if (newCount < 1) {
        // Удаляем товар если количество меньше 1
        setSelectedItems(selectedItems.filter(item => item.id !== itemId));
      } else {
        setSelectedItems(
          selectedItems.map(item =>
            item.id === itemId ? { ...item, count: newCount } : item
          )
        );
      }
    };
  
    return (
      <div className="cart">
        {selectedItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="counter">
              <button onClick={() => updateItemCount(item.id, item.count - 1)}>
                -
              </button>
              <span>{item.count}</span>
              <button onClick={() => updateItemCount(item.id, item.count + 1)}>
                +
              </button>
            </div>
            <p>Цена: {item.price * item.count}₽</p>
          </div>
        ))}
        <div className="cart-total">
          Итого: {selectedItems.reduce((sum, item) => sum + item.price * item.count, 0)}₽
        </div>
      </div>
  
    );
}

export default Cart;