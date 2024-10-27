import Header from "./components/Header/Header"
import Categories from "./components/Categories/Categories"

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

  const categories = [
    { id: 1, name: "Бургеры", image: Burgers},
    { id: 2, name: "Закуски", image: Startes},
    { id: 3, name: "Хот-доги", image: HotDogs},
    { id: 4, name: "Комбо", image: Combo},
    { id: 5, name: "Шаурма", image: Shaurma},
    { id: 6, name: "Пицца", image: Pizza},
    { id: 7, name: "Вок", image: Wok},
    { id: 8, name: "Десерты", image: Desserts},
    { id: 9, name: "Соусы", image: Souces},
  ]

  return (
    <>
      <Header />
      <Categories categories={categories}/>
    </>
  )
}

export default App
