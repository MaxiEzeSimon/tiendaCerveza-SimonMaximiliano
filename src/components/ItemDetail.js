import "./detalle.css"
import ItemCount from "./ItemCount"
import { useState } from "react"

const ItemDetail = ({productDetail}) => {
    const [fotoDetalle, setFotoDetalle] = useState("assets/ipa.jpg")
    const cambiarFoto = () => {
        setFotoDetalle("assets/ipa.jpg")
    }
    const cambiarFoto1 = () => {
        setFotoDetalle("assets/ipa-andes.jpg")
    }
    const cambiarFoto2 = () => {
        setFotoDetalle("assets/ip-andes-3.jpg")
    }
    const cambiarFoto3 = () => {
        setFotoDetalle("assets/andes-latas.jpg")
    }
    return (
        <>
            <div className="especificaciones">
            <div className="descripcion">
                <div className="miniaturaFoto">
                <img onClick={cambiarFoto} className="estiloFoto" src="assets/ipa.jpg" width="60px" height="60px" alt="" />
                <img onClick={cambiarFoto1} className="estiloFoto" src="assets/ipa-andes.jpg" width="60px" height="60px" alt="" />
                <img onClick={cambiarFoto2} className="estiloFoto" src="assets/ip-andes-3.jpg" width="60px" height="60px" alt="" />
                <img onClick={cambiarFoto3} className="estiloFoto" src="assets/andes-latas.jpg" width="60px" height="60px" alt="" />
                </div>
            <img src={fotoDetalle}  height="256px" alt="" />
            <div className="resumen">
            <p className="tituloNombre">{productDetail.nombre}</p>
            <p className="categoria">Categoria: {productDetail.categoria.toUpperCase()}</p>
            <p className="price">{productDetail.precio}</p>
            <p className="stock">Stock: {productDetail.stock}u.</p>
            <ItemCount initial={1} stock={50} onAdd={() =>{}}/>
            
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