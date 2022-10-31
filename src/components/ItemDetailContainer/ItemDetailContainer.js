import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom"
import cargando from "../../assets/cargando.webp"
import { baseDatos } from "../firebase/firebase"
import {getDoc, doc, collection} from "firebase/firestore"

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])
    const [cargaDetalle, setCargaDetalle] = useState(true)
    
    const {IdProducto} = useParams()
   
    

    useEffect(() => {

        const productCollection = collection(baseDatos, "productos")
        
        const refDoc = doc(productCollection, IdProducto)
        
        getDoc(refDoc)
         .then((res) => {
            setCargaDetalle(false)
            setProductDetail({
                id: res.id,
                ...res.data()
                

            })
         })
    })
    
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
                </div>
        }
    </>)
}
export default ItemDetailContainer