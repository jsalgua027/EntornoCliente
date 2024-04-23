
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function TablaProductos
({idCategoria}) {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
   
    //solicitud
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost/Proyectos/Curso23_24PHP/Restaurante/productos.php?id_categoria=' + idCategoria);// casa
        // const response = await axios.get('http://localhost/Proyectos/Curso23_24PHP/Curso23_24PHP/Restaurante/productos.php?id_categoria=' + idCategoria);//clase
  
        //  console.log(response.data); 
          setProductos(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error al obtener productos:', error);
        }
      };
  
      fetchData();
    }, [idCategoria]);

  


 // let productos = props.lista;

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
    <Container  className="tProd">
      {productosChunked.map((rowProductos, index) => (
        <Row key={index}>
          {rowProductos.map((producto) => (
            <Col key={producto.id_producto} md={4}>
              <Card>
                <CardImg top width="20%"src={`./images/${producto.id_categoria.toString()}/${producto.portadaFoto}`}alt={producto.producto} />
                <CardBody>
                  <CardTitle>{producto.producto}</CardTitle>
                  <CardSubtitle><strong>Precio: {producto.precio}</strong></CardSubtitle>
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

export default TablaProductos
;