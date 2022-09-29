import carrito from "../assets/carrito.png"
import {Link} from "react-router-dom"

const CartWidget = () => {
    return (
    <div className="divCart"><Link to="/carrito" className="ImgCart"><img src={carrito} className="carrito"></img></Link></div> )
}
export default CartWidget