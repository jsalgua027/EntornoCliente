import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle,CardHeader, CardText } from 'reactstrap';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function TablaCategorias({ onCategoriaSelect }) {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategoria, setSelectedCategoria] = useState(1);

  //solicitud
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/Proyectos/Curso23_24PHP/Restaurante/categorias.php"
        //  "http://localhost/Proyectos/Curso23_24PHP/Curso23_24PHP/Restaurante/categorias.php"
        );
        setCategorias(response.data);
        //console.log(response);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
      }
    };

    fetchData();
  }, []);

   // Función para manejar el clic en el Card
   const handleCardClick = (id) => {
    setSelectedCategoria(id);
    onCategoriaSelect(id); // Llamamos a la función de devolución de llamada con la categoría seleccionada
  };


 // console.log("en la tabla categorias estoy enviando: " + selectedCategoria);
  return (
    <Container className="tCat">
    <Row>
      {/* Mapear sobre las categorías y renderizar cada una en un Col */}
      {categorias.map((categoria) => (
        <Col key={categoria.id_categoria}>
          <Card   className="my-2"
              style={{ backgroundColor: selectedCategoria === categoria.id_categoria ? 'blue' : 'white' ,
               color: selectedCategoria === categoria.id_categoria ? 'white' : 'black'}}
              onClick={() => handleCardClick(categoria.id_categoria)}>
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
