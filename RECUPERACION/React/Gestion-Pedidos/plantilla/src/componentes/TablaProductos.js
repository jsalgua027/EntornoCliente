import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import React, { useState, useEffect } from "react";
import TablaCategorias from "./TablaCategorias";

function TablaProductos(props) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      // Cuando los productos seleccionados cambian, actualiza el estado
      setProductos(props.productosSeleccionados.map(producto => ({
        id_producto: producto.id_producto,
        producto: producto.producto,
        precio: producto.precio,
        id_categoria: producto.id_categoria,
        portadaFoto: producto.portadaFoto
      })));
    }, [props.productosSeleccionados]);
    
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
    <Container className="tProd">
      {productosChunked.map((rowProductos, index) => (
        <Row key={index}>
          {rowProductos.map((producto,indice) => (
            <Col key={producto.id_producto} md={4}>
              <Card>
             
                <CardImg
                  top
                  width="20%"
                  src={`/images/${props.categoria}/${producto.portadaFoto}`}
                  alt={producto.producto}
                />
                 {console.log("++++++++++++++++++++++"+producto.precio)}
                <CardBody>
                  <CardTitle>{producto.producto}</CardTitle>
                  <CardSubtitle>
                    <strong>Precio: {producto.precio}</strong>
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default TablaProductos;
