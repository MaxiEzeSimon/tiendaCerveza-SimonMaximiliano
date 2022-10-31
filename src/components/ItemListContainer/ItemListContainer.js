import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import { useParams, Link } from "react-router-dom";
import cargando from "../../assets/cargando.webp"
import { baseDatos } from "../firebase/firebase"
import {getDocs, collection, query, where} from "firebase/firestore"
import {buscador} from "../buscador/Buscador"
import { useContext } from "react";


const ItemListContainer = ({greeting}) => {

    /* Uso context del buscador (inputBuscador), que trae lo ingresado por el usuario en el buscador por marca */
    const {inputBuscador} = useContext(buscador)

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    
    let { Categoria } = useParams();
    let { Busqueda } = useParams();

    useEffect(()=> {

        const productsCollection = collection(baseDatos, "productos")

        /* Queries tanto para categoria (querie) como para el buscador (querieBusqueda) */
        const querie = query(productsCollection, where("categoria", "==", Categoria === undefined ? "categoria" : Categoria))
        const querieBusqueda = query(productsCollection, where("marca", "==", inputBuscador.toLowerCase()))
        const q = Categoria !== undefined ? querie : querieBusqueda
        
        getDocs((Categoria === undefined) && (Busqueda === undefined) ? productsCollection : q)
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
        
        }, [Categoria, Busqueda, inputBuscador])
      
    return (
        <>
            <h2 className="productos">{greeting}</h2>
            <hr />
            
            {!loading ? 
            <>
            {/* Renderizado condicional del buscador si es que no hay resultados */}
            
            {   productList.length === 0 ?
                <h6 className="sinResultados">Su busqueda no tiene resultados. Volver al <Link to="/">Home.</Link></h6>:
                <div id="detalleProducto"><ItemList productList={productList} /></div>
            }
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