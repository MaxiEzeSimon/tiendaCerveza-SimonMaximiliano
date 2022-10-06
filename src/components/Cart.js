import {useContext} from "react"
import {Carrito} from "./CartContext"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const Cart = () => {

    const {cart, precioTotal, reset, borrarProducto} = useContext(Carrito)

    
    return (
    <>
        <h2 className="productos">Carrito</h2>
        <hr />
        {cart.map((producto) => {

            const replacePrecio = parseInt(producto.precio.replace("$", ""))
            const cantidad = parseInt(producto.cantidad)
            const subTotal = replacePrecio * cantidad

            return (
                
                
                <div className="carritoFlex" key={producto.id}>
                    <img src={producto.imagen} className="imgCart" alt="" />
                    <div className="datosUno">
                        <h4>{producto.nombre} Pack x6u.</h4>
                        <h5>Precio: {producto.precio}</h5>
                    </div>
                    <div className="datosDos">
                        <p>Cantidad: {producto.cantidad}</p>
                    </div>
                    <div className="datosTres">
                        <p>SubTotal: ${subTotal},00</p>
                    </div>
                    <div className="botonBorrarProducto">
                        <Button  onClick={()=> borrarProducto(producto.id)} variant="dark">X</Button>
                    </div>
                </div>
            )
        })}
        
        {
            precioTotal==0 ?

            <p className="productos carritoVacio">Tu carrito esta vacio!. Volver al <Link to="/">Home</Link>.</p> :

            <div className="totalFinal">
                <div>
                    <hr/>
                    <Link to="/"><Button className="botonContinuar" variant="dark">CONTINUAR COMPRANDO</Button></Link>
                    <Button className="botonFinalizar" onClick={reset} variant="dark">FINALIZAR COMPRA</Button>
                    <Button className="botonResetear" onClick={reset} variant="dark">BORRAR TODO</Button>
                </div>
                <p>Total: ${precioTotal},00 </p>
                <hr />
            </div> 
       
        }
    </>)
}