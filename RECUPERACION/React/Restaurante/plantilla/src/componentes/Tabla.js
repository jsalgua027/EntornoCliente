import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function Tabla(props) {
  let productos = props.lista;

  // Función para dividir los productos en grupos de tres
  const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  // Dividir los productos en grupos de tres
  const productosChunked = chunkArray(productos, 3);

  return (
    <Container>
      {productosChunked.map((rowProductos, index) => (
        <Row key={index}>
          {rowProductos.map((producto) => (
            <Col key={producto.id_producto} md={4}>
              <Card>
                <CardImg top width="50%"src={`./images/${producto.id_categoria.toString()}/${producto.portadaFoto}`}alt={producto.producto} />
                <CardBody>
                  <CardTitle>{producto.producto}</CardTitle>
                  <CardSubtitle>Precio: {producto.precio}</CardSubtitle>
                  {/* Agrega más información del producto si es necesario */}
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default Tabla;