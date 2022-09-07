import logo from "../assets/logo.png"
import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = ()=> {
    return (
    <>
    <div className="header">
    <img src={logo}></img>
    <CartWidget/>
    
    </div>
    <nav>
        <ul className="menuFlex">
            <a href="">Home</a>
            <a href="">Productos</a>
            <a href="">Ofertas</a>
            <a href="">Contacto</a>
        </ul>
    </nav>
    <hr />
    </>
    )
}
export default NavBar