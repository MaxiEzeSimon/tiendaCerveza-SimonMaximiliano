import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";
import cargando from "../assets/cargando.webp"
import { baseDatos } from "../components/firebase/firebase"
import {getDocs, collection, query, where} from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    
    let { Categoria } = useParams();
   

    useEffect(()=> {
        const productsCollection = collection(baseDatos, "productos")

        const querie = query(productsCollection, where("categoria", "==", Categoria === undefined ? "categoria" : Categoria))
        
        getDocs(Categoria === undefined ? productsCollection : querie)
            .then ((res) => {
                
                const listaProductos = res.docs.map((producto) => {
                    return {
                        ...producto.data(),
                        id: producto.id
                    }
                  
            })
            setProductList(listaProductos)
            setLoading(false)
         })
        
        }, [Categoria])
    return (
        <>
            <h2 className="productos">{greeting}</h2>
            <hr />
            
            {!loading ? 
            <>
                <div id="detalleProducto"><ItemList productList={productList} /></div>
                <div className="slogan">
                    <h3>Tus cervezas favoritas te esperan en Tienda de cerveza!</h3>
                    <p>Encontrá todo lo que buscas en un solo lugar</p>
                </div>
            </> : 
            <div className="carga">
                <img src={cargando} alt="" />
                <div className="spinner">
                    <Spinner animation="border" role="status"></Spinner>
                    <span>Cargando</span>
                </div>
            </div>}
        </>)
    

}
export default ItemListContainer