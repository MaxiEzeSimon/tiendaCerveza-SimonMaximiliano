import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import "../src/App.css"

const App = ()=> {
  return (
  <>
    <NavBar/>
    <ItemListContainer greeting="Nuestros Productos"/>
  </>
  )
}
export default App