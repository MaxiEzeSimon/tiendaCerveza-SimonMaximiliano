import {getDocs, collection} from "firebase/firestore"
import { baseDatos } from "../firebase/firebase"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const MisCompras = () => {

    const [comprasRealizadas, setComprasRealizadas] = useState([])

    /* useEffect que trae las compras del usuario para mostrar en Mis Compras */

    useEffect(()=> {
        const ventasCollection = collection(baseDatos,"ventas")
        getDocs(ventasCollection)
        .then((res) => {
            const compras = res.docs.map((venta) => {
                return {
                    ...venta.data(),
                    id: venta.id
                }  
            })
            
            setComprasRealizadas(compras) 
        })  
        
    }, [])
    
    return (
        <>
            <h2 className="productos">Mis compras</h2>
            <hr />
            {/* Renderizado condicional del apartado mis compras, en tanto haya o no compras */}
            { comprasRealizadas.length !== 0 ?
                <div className="margenCompras">
                    <div className="misCompras">
                        <p>Id Compra</p>
                        <p>Precio</p>
                        <p>Fecha</p>
                    </div>
        
        {comprasRealizadas.map((venta)=> {
        /* Aca traigo la fecha del firestore, fue la unica forma que encontre */
        const fecha = venta.fecha.toDate().toString().replace("GMT-0300 (hora estándar de Argentina)", "")
    
    
            return (
                <div key={venta.id}>  
                    <div  className="datosCompra">
                        <p className="tamanioCaja">{venta.id}</p>
                        <p>${venta.total}</p>
                        <p>{fecha}</p>
                    </div>
                    <hr />
                </div>
        
            )
        })}

        </div> : 
        <p className="productos carritoVacio">Todavia no has comprado nada. Volver al <Link to="/">Home</Link>.</p>
}
        </>
    
    )
}

export default MisCompras