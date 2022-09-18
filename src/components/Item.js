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
            <div className='botonFlex'>
            <Button className="boton1" variant="dark">Agregar al carrito</Button>
            <Button className="boton1" variant="dark">Detalle</Button>
            </div>
          </Card.Body>
        </Card>
      </>
      );
}

export default Item