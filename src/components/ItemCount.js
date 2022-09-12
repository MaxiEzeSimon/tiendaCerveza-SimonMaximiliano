import { useState } from "react"
import "./itemCount.css"
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';

const ItemCount = ({initial, stock, onAdd}) => {

   const [count, setCount] = useState(initial)
   
   const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
        
   }
   const restar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
   }
   const agregarCarrito = () => {
    swal("Has comprado " + count + " producto/s.");
    setCount(1)
   }
   
   return (
    <>
        <div className="itemCount">
            <div>
                <p className="descripcion">Andes Ipa x6u.</p>
            </div>
            <div className="cantidades cantidadFlex">
                <Button onClick={restar}variant="dark">-</Button>
                <p className="numero">{count}</p>
                <Button onClick={sumar}variant="dark">+</Button>
            </div>
            <Button onClick={agregarCarrito} className="cantidades" variant="dark">Agregar al carrito</Button>
        </div>
    </>)
}
export default ItemCount