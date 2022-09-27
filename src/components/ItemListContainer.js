import ItemList from "./ItemList"
import { productos } from "../utils/productos"
import { promise } from "../utils/promise"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    
    let { Categoria } = useParams();
    

    useEffect(()=> {
        setLoading(true)
        promise(Categoria == undefined ? productos : productos.filter(data => { return Categoria == data.categoria}))
            .then(res => {
                setLoading(false)
                setProductList(res)
            })
        }, [Categoria])
    return (
        <>
            <h1 className="productos">{greeting}</h1>
            <hr />
            {!loading ? 
            <>
                <div id="detalleProducto"><ItemList productList={productList} /></div>
                <div className="slogan">
                    <h3>Tus cervezas favoritas te esperan en Tienda de cerveza!</h3>
                    <p>Encontrá todo lo que buscas en un solo lugar</p>
                </div>
            </> : 
            <div className="carga"><Spinner animation="border" role="status"></Spinner></div>} 
        </>)
    

}
export default ItemListContainer