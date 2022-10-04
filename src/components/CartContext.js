import { createContext, useState, useEffect } from "react"

export const Carrito = createContext()
export const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const añadirProducto = (productDetail, count) => {
    if (estaEnLaLista(productDetail.id)) {
        const newCarrito = cart.map(producto => {
            if (producto.id == productDetail.id) {
                const newCantidad = producto.cantidad + count
                return {...producto, cantidad: newCantidad }
            }else {
                return producto
            }
        })
        setCart(newCarrito)
    }else {
            const newCarritoCompras = {...productDetail, cantidad: count}
            setCart([...cart, newCarritoCompras])   
        }
     
    }
    

    const borrarProducto = (id) => setCart(cart.filter(producto => producto.id != id))
    
    const estaEnLaLista = (id) => {
      return cart.some(producto => producto.id == id)
    }

    const reset = () => {
        setCart([])
    }

    useEffect(()=> {
        console.log(cart)
    }, [cart])

    return (
        <>
            <Carrito.Provider value={{cart, añadirProducto, borrarProducto, reset}}>
                {children}
            </Carrito.Provider>
        </>
    )
}