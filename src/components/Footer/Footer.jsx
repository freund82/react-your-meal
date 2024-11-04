import "./footer.css"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"
import Logo from "../../assets/icons/footerLogo.png"
import Call from "../../assets/icons/Call.png"
import vkOrange from "../../assets/icons/vkOrange.png"
import Telegram from "../../assets/icons/telegram.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div className="footer__links">
                    <div>
                        <h2 className="footer__title">Номер для заказа</h2>
                        <div className="footer__call">
                            <img src={Call} alt="logo" />
                            <HashLink to="tel:+79308333811">+7(930)833-38-11</HashLink>
                        </div>
                    </div>
                     <div>
                         <h2 className="footer__title">Мы в соцсетях</h2>
                          <div className="footer__socials">
                            <img src={vkOrange} alt="logo" />
                            <img src={Telegram} alt="logo" />
                          </div>
                     </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; YouMeal, 2022</p>
                <p>Design: Anastasia Ilina</p>
            </div>
        </footer>

    )
}

export default Footer