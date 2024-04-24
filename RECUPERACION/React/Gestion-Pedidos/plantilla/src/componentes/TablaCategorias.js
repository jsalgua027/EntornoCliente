import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

function TablaCategorias(props) {
    const [selectedCategoria, setSelectedCategoria] = useState(1);
  
    // Verificar si props.lista es un objeto antes de iterar sobre sus propiedades
    const listaProductos = props.lista;

    return (
      <Container className="tCat">
        <Row>
          {Object.keys(listaProductos).map((key) => (
            <Col key={key}>
              <Card
                className="my-2"
                style={{
                  backgroundColor:
                    selectedCategoria === listaProductos[key].id_categoria ? 'blue' : 'white',
                  color:
                    selectedCategoria === listaProductos[key].id_categoria ? 'white' : 'black',
                }}
                onClick={() => setSelectedCategoria(listaProductos[key].id_categoria)}
              >
                <CardBody>
                  <CardTitle tag="h5">{listaProductos[key].categoria}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  
  export default TablaCategorias;
  