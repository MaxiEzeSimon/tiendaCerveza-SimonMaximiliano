import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import { productos } from "../utils/productos"
import { useParams } from "react-router-dom"
import { promise } from "../utils/promise"
import cargando from "../assets/cargando.webp"


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([])
    const [cargaDetalle, setCargaDetalle] = useState(true)
    
    const {IdProducto} = useParams()
   
    

    useEffect(() => {
        setCargaDetalle(true)
        promise(productos)
         .then(res => {
            setCargaDetalle(false)
            setProductDetail(res.find(data => data.id === parseInt(IdProducto)))
         })
    }, [])
    return (
    <>
    {!cargaDetalle ? 
    <div className="detalleProducto"><ItemDetail productDetail={productDetail} /></div> :
    <div className="carga" id="carga1">
                <img src={cargando} alt="" />
                <div className="spinner">
                    <Spinner animation="border" role="status"></Spinner>
                    <span>Cargando</span>
                </div>
    </div>}
    </>)
}
export default ItemDetailContainer