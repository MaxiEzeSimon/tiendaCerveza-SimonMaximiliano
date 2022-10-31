import carrito from "../../assets/carrito.png"
import {Link} from "react-router-dom"
import {Carrito} from "../CartContext/CartContext"
import { useContext } from "react"

const CartWidget = () => {

    /* Uso del context del carrito con la cantidad total (CartContext) */

    const {cantidadTotal} = useContext(Carrito)
    
    return (
        <Link to="/carrito" className="cartFlex">
            <div className="divCart">
                <img src={carrito} className="carrito" alt=""/>
                <div>
                    <p>{cantidadTotal}</p>
                </div>
            </div>
        </Link> 
    )}

export default CartWidget