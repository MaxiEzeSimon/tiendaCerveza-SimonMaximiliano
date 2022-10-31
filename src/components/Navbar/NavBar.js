import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import { useState, useContext } from "react"
import {Link, useNavigate} from "react-router-dom"
import {buscador} from "../buscador/Buscador"

const NavBar = ()=> {

    /* useState que guarda lo ingresado por el usuario */
    const [inputSubmit, setInputSubmit] = useState("")

    /* Uso del context del buscador */
    const {setInputBuscador} = useContext(buscador)

    const navigate = useNavigate()

    /* Esta funcion maneja el form del buscador, setea lo ingresado por el usuario y pone como param el input */
    const handleSubmit = (e) => {
        e.preventDefault()
        setInputBuscador(inputSubmit)
        navigate(inputSubmit)
    }
    
    const handleDown = (e) => {
        setInputSubmit(e.target.value)
    }

    return (
<>
  
    <div className="header">
        <Link to="/"><img className="logo" src={logo} alt=""></img></Link>
        <CartWidget/>
    </div>
    <nav>
        <ul className="menuFlex">
            <Link to="/">Home</Link> 
            <Link to="/categoria/ipa">Ipa</Link>
            <Link to="/categoria/original">Original</Link>
            <Link to="/categoria/roja">Roja</Link>
            <Link to="/miscompras">Mis Compras</Link>
        </ul>
        <div>
            <form onSubmit={handleSubmit}>
                <input className="buscador" type="search" onKeyDown={handleDown} placeholder="Buscar por marca..." />
            </form>
        </div>
    </nav>
</>
    )
}
export default NavBar