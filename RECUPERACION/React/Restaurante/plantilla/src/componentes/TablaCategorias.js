import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
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
        console.log(response)
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
      }
    };

    fetchData();
  }, []);
  console.log(categorias)
  return (
    <Container>
      <Row>
        {/* Mapear sobre las categorías y renderizar cada una en un Col */}
        {categorias.map((categoria) => (
          <Col key={categoria.id_categoria} xs={12} sm={6} md={4} lg={3}>
            {categoria.categoria}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TablaCategorias;
