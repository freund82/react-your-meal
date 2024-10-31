import { useState, useEffect } from "react"
import Header from "./components/Header/Header"
import Categories from "./components/Categories/Categories"
import Main from "./components/Main/Main"
import Cart from "./components/Cart/Cart"


import Burgers from "./assets/icons/burger.png"
import Startes from "./assets/icons/startes.png"
import HotDogs from "./assets/icons/hotDogs.png"
import Combo from "./assets/icons/combo.png"
import Shaurma from "./assets/icons/shaurma.png"
import Pizza from "./assets/icons/pizza.png"
import Wok from "./assets/icons/wok.png"
import Desserts from "./assets/icons/desserts.png"
import Souces from "./assets/icons/souces.png"



function App() {
  const [data, setData] = useState([])

  const categories = [
    { id: 1, type: "Бургеры", image: Burgers},
    { id: 2, type: "Закуски", image: Startes},
    { id: 3, type: "Хот-доги", image: HotDogs},
    { id: 4, type: "Комбо", image: Combo},
    { id: 5, type: "Шаурма", image: Shaurma},
    { id: 6, type: "Пицца", image: Pizza},
    { id: 7, type: "Вок", image: Wok},
    { id: 8, type: "Десерты", image: Desserts},
    { id: 9, type: "Соусы", image: Souces},
  ]

useEffect(() => {
  fetch("http://localhost:5173/data.json")
    .then(response => response.json())
    .then(data => setData(data))
}, [data])
  

  return (
    <>
      <Header />
      <Categories categories={categories}/>
    <section className="main">
        <div className="cart__block">
          <Cart/>
        </div>
        <div className="main__block">
          {categories.map((categorieType) => (<Main key={categorieType.id} categorieType={categorieType.type} data={data}/>))}
        </div>
    </section>
    </>
  )
}

export default App
