import "./header.css"
import Logo from "../../assets/icons/logoWithIcons.png"
import BurgerImg from "../../assets/icons/burger.png"

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="header__inner">
                    <img className="header__burgerImg" src={BurgerImg} alt="burger"/>
                <div className="header__title">
                    <h1 style={{ color:"var(--white-color)"}}>Только самые <span style={{color: "var(--orange-color)"}}>сочные бургеры!</span></h1>
                    <div className="header__subtitle">
                        <p style={{ color:"var(--white-color)"}}>Бесплатная доставка от 599₽</p>
                     </div>
                </div>
                </div>
        </header>
    )
}

export default Header