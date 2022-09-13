import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ItemListContainer.css"

const Item = ({ product }) => {
  
    return (
      <>
        <Card className="botonCarrito" style={{ width: '18rem' }}>
          <Card.Img  className='imgCard' variant="top" src={product.imagen} />
          <Card.Body>
            <Card.Title className='nombre'>{product.nombre}</Card.Title>
            <Card.Text className='precio'>
              Precio: {product.precio}
            </Card.Text>
            <Button variant="dark">Agregar al carrito</Button>
          </Card.Body>
        </Card>
      </>
      );
}

export default Item