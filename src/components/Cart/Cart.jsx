import "./cart.css";
import {createContext, useContext, useState } from "react";
import {CardContext} from "../../App";
import Delivery from "../../assets/icons/delivery.png";
import CartItem from "../CartItem/CartItem";
import DeliveryModal from "../DeliveryModal/DeliveryModal";

export const ItemsContext = createContext({});

function Cart() {

    const [itemCounts, setItemCounts] = useState({});

    const {selectedItems} = useContext(CardContext)

    const [showModal, setShowModal] = useState(false);

    const [total, setTotal] = useState(0);

    const handleTotalChange = (total) => {
        setTotal(total);
      };

    const handleShowModal = () => {
        setShowModal(true);
      };

      const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <ItemsContext.Provider value={{itemCounts, setItemCounts}}>
        <div className="cart">
            <div className="cart__header">
                <h3 className="cart__title">Корзина</h3>
                <span className="cart__count">{selectedItems.length}</span>
            </div>
           {(selectedItems.length) ?  <div className="cart__content">
                <CartItem onTotalChange={handleTotalChange}/>
                <div className="cart__total">
                    <div>
                        <p>Итого</p>
                    </div>
                    <div>
                        <p>{total}₽</p>
                    </div>
                </div>
                <div>
                    <button type="button" className="cart__button" onClick={handleShowModal}>Оформить заказ</button>
                </div>
                {showModal && <DeliveryModal closeModal={handleCloseModal} selectedItems={selectedItems} />}
                <div className="cart__delivery">
                <img src={Delivery} alt="delivery" />
                <p>Бесплатная доставка</p>
                </div>
            </div>:<span style={{fontSize:"1.6rem"}}>Тут пока пусто :(</span>}
        </div>
        </ItemsContext.Provider>
    );
}

export default Cart;