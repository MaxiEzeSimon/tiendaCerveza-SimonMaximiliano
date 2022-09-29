import logo from "../assets/logo.png"
import CartWidget from "./CartWidget"
import "./NavBar.css"
import Buscador from "./Buscador"
import {Link, NavLink} from "react-router-dom"

const NavBar = ()=> {
    return (
    <>
    <div className="header">
    <Link to="/"><img className="logo" src={logo}></img></Link>
    <CartWidget/>
    
    </div>
    <nav>
        <ul className="menuFlex">
            <Link to="/">Home</Link> 
            <Link to="/categoria/ipa">Ipa</Link>
            <Link to="/categoria/original">Original</Link>
            <Link to="/categoria/roja">Roja</Link>
        </ul>
        <div>
            <Buscador/>
        </div>
    </nav>
    
    </>
    )
}
export default NavBar