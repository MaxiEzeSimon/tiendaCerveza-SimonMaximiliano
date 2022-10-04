import { useState } from "react"
import "./itemCount.css"
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
   return (
    <>
        <div className="itemCount">
            
            <div className="cantidades cantidadFlex">
                <div className="contadorFlex">
                <p className="quantity">Cantidad</p>
                <Button className="botonResta" onClick={restar} variant="dark">-</Button>
                <p className="numero">{count}</p>
                <Button className="botonSuma" onClick={sumar} variant="dark">+</Button>
                </div>
                <hr />
                <Button className="cartButton" onClick={() => onAdd(count)} variant="dark">AGREGAR AL CARRITO</Button>
            </div>
            
        </div>
    </>)
}
export default ItemCount