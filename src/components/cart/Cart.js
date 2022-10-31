import {useContext, useState} from "react"
import {Carrito} from "../CartContext/CartContext"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { baseDatos } from "../firebase/firebase";
import {serverTimestamp, addDoc, collection} from "firebase/firestore";
import Swal from 'sweetalert2';
import Spinner from 'react-bootstrap/Spinner'; 


export const Cart = () => {

    const {cart, precioTotal, reset, borrarProducto} = useContext(Carrito)
    const [procesarCompra, setProcesarCompra] = useState(true)

    const datosComprador = {
        nombre: "Profe",
        email: "profe@gmail.com"
    }

    const finalizarCompra = () => {
        setProcesarCompra(false)
        const ventasCollection = collection(baseDatos, "ventas")
        addDoc(ventasCollection, {
            comprador: datosComprador,
            items: cart,
            fecha: serverTimestamp(),
            total: precioTotal
        })
    
        .then(res => {
            
            Swal.fire({
                title: 'Compra realizada con exito!',
                text: "Id de la compra: " + res.id,
                icon: 'success',
                confirmButtonText: 'Cerrar'
            })
            reset()
          
        })
    
    }
    
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
            precioTotal === 0 ?
            
            <p className="productos carritoVacio">Tu carrito esta vacio!. Volver al <Link to="/">Home</Link>.</p> :

            <div className="totalFinal">
                <div>
                    <hr/>
                    <Link to="/"><Button className="botonContinuar" variant="dark">CONTINUAR COMPRANDO</Button></Link>
                    {   procesarCompra ?
                        <Button className="botonFinalizar" onClick={finalizarCompra} variant="dark">FINALIZAR COMPRA</Button> :
                        <Button className="botonFinalizar" variant="dark"> <Spinner animation="border" role="status"></Spinner> </Button>
                    }
                    <Button className="botonResetear" onClick={reset} variant="dark">BORRAR TODO</Button>
                    
                </div>
                <p>Total: ${precioTotal},00 </p>
                <hr />
                
            </div> 
       
        }
        
    </>)
}