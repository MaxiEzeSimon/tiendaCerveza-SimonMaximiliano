import ItemList from "./ItemList"
import { productos } from "../utils/productos"
import { promise } from "../utils/promise"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';


const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=> {
        setLoading(true)
        promise(productos)
            .then(res => {
                setLoading(false)
                setProductList(res)
            })
        }, [])
    return (
        <>
            <h1 className="productos">{greeting}</h1>
            {!loading ? 
            <div id="detalleProducto"><ItemList productList={productList} /></div> : 
            <div className="carga"><Spinner animation="border" role="status"></Spinner></div>} 
        </>)
    

}
export default ItemListContainer