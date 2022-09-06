import logo from "../assets/logo.png"
import "./NavBar.css"
import carrito from "../assets/carrito.png"
const NavBar = ()=> {
    return (
    <>
    <div class="header">
    <img src={logo}></img>
    <img src={carrito} class="carrito"></img>
    
    </div>
    <nav>
        <ul class="menuFlex">
            <a href="">Home</a>
            <a href="">Productos</a>
            <a href="">Ofertas</a>
            <a href="">Contacto</a>
        </ul>
    </nav>
    </>
    )
}
export default NavBar