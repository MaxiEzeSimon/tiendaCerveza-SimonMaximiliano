import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import "../src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Cart} from "./components/Cart"

const App = ()=> {
  return (
  <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Nuestros Productos"/>} />
        <Route path="/carrito" element={<Cart/>}/>
        <Route path="/categoria/:Categoria" element={<ItemListContainer greeting="Nuestros Productos"/>} />
        <Route path="/productos/:IdProducto" element={<ItemDetailContainer />} />
        <Route path="/contacto" />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  )
}
export default App