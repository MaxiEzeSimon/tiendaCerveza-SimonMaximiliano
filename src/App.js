import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "../src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Cart} from "./components/cart/Cart"
import {CustomProvider} from "./components/CartContext/CartContext"
import {BuscadorContext} from "./components/buscador/Buscador"
import MisCompras from "./components/MisCompras/MisCompras";

const App = ()=> {
  return (
  <>
   
    <BrowserRouter>
    <CustomProvider>
      <BuscadorContext>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Nuestros Productos"/>} />
        <Route path="/carrito" element={<Cart/>}/>
        <Route path="/categoria/:Categoria" element={<ItemListContainer greeting="Nuestros Productos"/>} />
        <Route path="/productos/:IdProducto" element={<ItemDetailContainer />} />
        <Route path="/contacto" />
        <Route path="/:Busqueda"  element={<ItemListContainer greeting="Tu Busqueda"/>}/>
        <Route path="/miscompras" element={<MisCompras/>}/>
      </Routes>
      <Footer/>
      </BuscadorContext>
      </CustomProvider>
    </BrowserRouter>
  </>
  )
}
export default App