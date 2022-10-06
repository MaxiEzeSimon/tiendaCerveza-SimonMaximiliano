import carrito from "../assets/carrito.png"
import {Link} from "react-router-dom"
import {Carrito} from "./CartContext"
import { useContext } from "react"

const CartWidget = () => {

    const {cantidadTotal} = useContext(Carrito)
    
    return (
        <Link to="/carrito" className="cartFlex">
            <div className="divCart">
                <img src={carrito} className="carrito"/>
                <div>
                    <p>{cantidadTotal}</p>
                </div>
            </div>
        </Link> 
    )}

export default CartWidget