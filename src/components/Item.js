import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, NavLink } from 'react-router-dom';
import "./ItemListContainer.css"

const Item = ({ product }) => {
    return (
      <>
        <Card className="botonCarrito" style={{ width: '181px' }}>
          <Card.Img  className='imgCard' variant="top" src={product.imagen} />
          <Card.Body className='cardBody'>
            <Card.Title className='nombre'>{product.nombre}</Card.Title>
            <Card.Text className='nombre'>
              x6u.
            </Card.Text>
            <Card.Text className='precio'>
              Precio: {product.precio}
            </Card.Text>
            <div className='botonFlex'>
            <Button className="boton1" variant="dark">AGREGAR AL CARRITO</Button>
            <Link className='boton2' to={`/productos/${product.id}`}><Button variant="dark">DETALLE</Button></Link>
            </div>
          </Card.Body>
        </Card>
      </>
      );
}

export default Item