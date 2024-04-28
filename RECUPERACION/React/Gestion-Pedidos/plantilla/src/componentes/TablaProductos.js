import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import React, { useState, useEffect } from "react";


function TablaProductos(props) {
  const [productos, setProductos] = useState([]);
  const [contPedidos, setContPedidos] = useState(1);
  const [listaPedidos, setListaPedidos]=useState([])

  useEffect(() => {
    // Cuando los productos seleccionados cambian, actualiza el estado
    setProductos(
      props.productosSeleccionados.map((producto) => ({
        id_producto: producto.id_producto,
        producto: producto.producto,
        precio: producto.precio,
        id_categoria: producto.id_categoria,
        portadaFoto: producto.portadaFoto,
      }))
    );
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

  const handeclick = (producto) => {
    let listaux = [...listaPedidos]; // Creo una copia de la lista de pedidos existente
    listaux.push(producto); // Agregar el nuevo producto a la lista
    setListaPedidos(listaux); // Actualizar el estado con la nueva lista
    setContPedidos(contPedidos + 1); // contador de pedidos
    
  };
  console.log("se hace clic en un producto: " + listaPedidos);
  return (
    <Container className="tProd">
      {productosChunked.map((rowProductos, index) => (
        <Row key={index}>
          {rowProductos.map((producto, indice) => (
            <Col key={producto.id_producto} md={4}>
              <Card className="cardPro" onClick={() => handeclick(producto)}>
                <CardImg
                  top
                  width="20%"
                  src={`/images/${props.categoria}/${producto.portadaFoto}`}
                  alt={producto.producto}
                  className="card-img-top"
                />

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
      <div className="boton">
      <Button color="success" size='mg'>
        Pulse para confirmar pedido<br/>
        <span style={{ marginRight: '10px' }}> {/* Espacio adicional a la derecha del icono */}
          <img src="/images/iconos/carro.svg" alt="Icono" className="icono-svg" /> 
        </span>
        : {contPedidos-1}
      </Button>
      </div>
    </Container>
  );
}
{
  /* <img src="/images/iconos/carro.svg" alt="Icono" /> Pulsar para Pedido:{contPedidos-1}*/
}
export default TablaProductos;
