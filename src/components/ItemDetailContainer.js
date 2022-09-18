import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { getItem } from "../utils/getItem"
import Spinner from 'react-bootstrap/Spinner';
import {productos} from "../utils/productos"

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([])
    const [cargaDetalle, setCargaDetalle] = useState(true)

    useEffect(() => {
        setCargaDetalle(true)
        getItem(productos[0])
         .then(res => {
            setCargaDetalle(false)
            setProductDetail(res)
         })
    }, [])
    return (
    <>
    {!cargaDetalle ? 
    <div className="detalleProducto"><ItemDetail productDetail={productDetail} /></div> :
    <div className="carga"><Spinner animation="border" role="status"></Spinner></div>}
    </>)
}
export default ItemDetailContainer