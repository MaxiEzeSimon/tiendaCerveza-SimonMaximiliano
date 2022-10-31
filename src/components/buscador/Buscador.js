import { useState, createContext} from "react"

/* Context del buscador para llevar la informacion del navbar al ItemListContainer */ 

export const buscador = createContext()
export const BuscadorContext = ({children}) => {

    const [inputBuscador, setInputBuscador] = useState("")
    
    return (
    <>
        <buscador.Provider value={{setInputBuscador, inputBuscador}}>{children}</buscador.Provider>
    </>
    )

}
