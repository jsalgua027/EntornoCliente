import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle,CardHeader, CardText } from 'reactstrap';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function TablaCategorias() {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  //solicitud
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/Proyectos/Curso23_24PHP/Restaurante/categorias.php"
        );
        setCategorias(response.data);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
      }
    };

    fetchData();
  }, []);
  console.log(categorias);
  return (
    <Container className="tCat">
    <Row>
      {/* Mapear sobre las categorías y renderizar cada una en un Col */}
      {categorias.map((categoria) => (
        <Col key={categoria.id_categoria}>
          <Card className="my-2" color="primary" inverse>
            <CardBody>
              <CardTitle tag="h5">{categoria.categoria}</CardTitle>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);
}

export default TablaCategorias;
