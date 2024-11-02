import "./cart.css";
import { useContext } from "react";
import { CardContext } from "../../App";
import Delivery from "../../assets/icons/delivery.png";

function Cart() {
    const {selectedItems} = useContext(CardContext)
    {console.log(selectedItems)}
    return (
        <div className="cart">
            <div className="cart__header">
                <h3 className="cart__title">Корзина</h3>
                <span className="cart__count">{selectedItems.length}</span>
            </div>
            <div className="cart__content">
                {/*Начало item*/}
                <div className="cart__item">
                    <div className="cart__item--info">
                        <div>
                            <img style={{borderRadius:"0.8rem"}} src="/images/burgers/alltimeClassic.png" alt="Классика" width="64px" height="52px" />
                        </div>
                        <div className="cart__item--text">
                            <span>Супер сырный</span>
                            <span style={{color:"var(--dark-gray-color)"}}>512г</span>
                            <span>550₽</span>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="cart__item--count">
                        <span style={{cursor:"pointer"}}>-</span>
                        <span>1</span>
                        <span style={{cursor:"pointer"}}>+</span>
                    </div>
                </div>
                {/*Окончание item*/}
                  {/*Начало item*/}
                  <div className="cart__item">
                    <div className="cart__item--info">
                        <div>
                            <img style={{borderRadius:"0.8rem"}} src="/images/burgers/alltimeClassic.png" alt="Классика" width="64px" height="52px" />
                        </div>
                        <div className="cart__item--text">
                            <span>Супер сырный</span>
                            <span style={{color:"var(--dark-gray-color)"}}>512г</span>
                            <span>550₽</span>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="cart__item--count">
                        <span style={{cursor:"pointer"}}>-</span>
                        <span>1</span>
                        <span style={{cursor:"pointer"}}>+</span>
                    </div>
                </div>
                {/*Окончание item*/}
                  {/*Начало item*/}
                  <div className="cart__item">
                    <div className="cart__item--info">
                        <div>
                            <img style={{borderRadius:"0.8rem"}} src="/images/burgers/alltimeClassic.png" alt="Классика" width="64px" height="52px" />
                        </div>
                        <div className="cart__item--text">
                            <span>Супер сырный</span>
                            <span style={{color:"var(--dark-gray-color)"}}>512г</span>
                            <span>550₽</span>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="cart__item--count">
                        <span style={{cursor:"pointer"}}>-</span>
                        <span>1</span>
                        <span style={{cursor:"pointer"}}>+</span>
                    </div>
                </div>
                {/*Окончание item*/}
                <div className="cart__total">
                    <div>
                        <p>Итого</p>
                    </div>
                    <div>
                        <p>1100₽</p>
                    </div>
                </div>
                <div>
                    <button type="button" className="cart__button">Оформить заказ</button>
                </div>
                <div className="cart__delivery">
                <img src={Delivery} alt="delivery" />
                <p>Бесплатная доставка</p>
                </div>
            </div>
        </div>
    );
}

export default Cart;