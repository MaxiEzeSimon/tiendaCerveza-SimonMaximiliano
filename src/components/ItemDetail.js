import "./detalle.css"
import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"
import {Carrito} from "./CartContext"

const ItemDetail = ({productDetail}) => {
    const [fotoDetalle, setFotoDetalle] = useState(productDetail.imagen)
    const [addProduct, setAddProduct] = useState(false)

    const { añadirProducto } = useContext(Carrito)

    const cambiarFoto = () => {
        setFotoDetalle(productDetail.imagen)
    }
    const cambiarFoto1 = () => {
        setFotoDetalle(productDetail.imagen2)
    }
    const cambiarFoto2 = () => {
        setFotoDetalle(productDetail.imagen3)
    }
    const cambiarFoto3 = () => {
        setFotoDetalle(productDetail.imagen4)
    }
    const onAdd = (count) => {
        setAddProduct(true)
        añadirProducto(productDetail, count)
    }
    return (
        <>
            <div className="especificaciones">
            <div className="descripcion">
                <div className="miniaturaFoto">
                <img onClick={cambiarFoto} className="estiloFoto" src={productDetail.imagen} width="60px" height="60px" alt="" />
                <img onClick={cambiarFoto1} className="estiloFoto" src={productDetail.imagen2} width="60px" height="60px" alt="" />
                <img onClick={cambiarFoto2} className="estiloFoto" src={productDetail.imagen3} width="60px" height="60px" alt="" />
                <img onClick={cambiarFoto3} className="estiloFoto" src={productDetail.imagen4} width="60px" height="60px" alt="" />
                </div>
            <img className="imgDetalle" src={fotoDetalle}  alt="" />
            <div className="resumen">
            <p className="tituloNombre">{productDetail.nombre} x6u.</p>
            <p className="categoria">Categoria: {productDetail.categoria.toUpperCase()}</p>
            <p className="price">{productDetail.precio}</p>
            <p className="stock">Stock: {productDetail.stock}u.</p>
            {
                addProduct ?
                <Link to="/carrito" className="noMargin">
                    <Button className="cartButton" variant="dark">Finalizar Compra</Button>
                </Link> :
                <ItemCount initial={1} stock={50} onAdd={onAdd}/>
            }
            
            
            </div>
            </div>
            <div>
                <hr />
                <h4>Especificaciones</h4>
                <div className="lista">
                    <span>Contenido:</span>
                    <span>473cm3</span>
                </div>
                <div className="lista2">
                    <span>Variedad:</span>
                    <span>{productDetail.categoria.toUpperCase()}</span>
                </div>
                <div className="lista">
                    <span>Presentacion:</span>
                    <span>Lata</span>
                </div>
                <div className="lista2">
                    <span>Cantidad:</span>
                    <span>Pack x6</span>
                </div>
                
            </div>

             </div>   
            
            
        </>
    )
}
export default ItemDetail