import ItemCount from "./ItemCount"
const ItemListContainer = ({greeting}) => {
    return <><h1 className="productos">{greeting}</h1>
    <ItemCount initial={1} stock={10} onAdd={() =>{}}/></>
    
}
export default ItemListContainer