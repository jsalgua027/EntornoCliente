import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import TablaProductos from "./TablaProductos";

function TablaCategorias(props) {
  const [selectedCategoria, setSelectedCategoria] = useState(4);
  const [productosCategoria, setProductosCategoria] = useState([]);

  // me traigo todo el JSON
  const listaProductos = props.lista;

  // Función para obtener los productos de una categoría específica
  const obtenerProductosPorCategoria = (categoriaId) => {
    // Convierte el objeto de categorías a un array de categorías
    const categoriasArray = Object.values(listaProductos);
    // Busca la categoría en el array de listaProductos
    const categoria = categoriasArray.find(
      (cat) => cat.id_categoria === categoriaId
    );
    // Si se encuentra la categoría, actualiza el estado de productosCategoria
    if (categoria) {
      setProductosCategoria(categoria.productos);
    } else {
      // Si no se encuentra la categoría, establece productosCategoria como un array vacío
      setProductosCategoria([]);
    }
  };

  // UseEffect para llamar a obtenerProductosPorCategoria cada vez que selectedCategoria cambie
  useEffect(() => {
    obtenerProductosPorCategoria(selectedCategoria);
  }, [selectedCategoria]);

  console.log("Los productos por categoria son: " + productosCategoria);

  console.log("La categoria seleccionada es: " + selectedCategoria);
  return (
    <div className='contenedor'>
      
          <Container className="tCat">
        <Row>
          {Object.keys(listaProductos).map((key) => (
            <Col key={key}>
              <Card
                className="my-2"
                style={{
                  backgroundColor:
                    selectedCategoria === listaProductos[key].id_categoria
                      ? "blue"
                      : "white",
                  color:
                    selectedCategoria === listaProductos[key].id_categoria
                      ? "white"
                      : "black",
                }}
                onClick={() =>
                  setSelectedCategoria(listaProductos[key].id_categoria)
                }
              >
                <CardBody>
                  <CardTitle tag="h5">{listaProductos[key].categoria}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <TablaProductos  productosSeleccionados={productosCategoria} categoria={selectedCategoria}/>
      
  </div>
   
  );
}

export default TablaCategorias;
