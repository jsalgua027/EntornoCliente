import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import React, { useState, useEffect } from "react";
import VentanaPedidos from "./VentanaPedidos";
import VentanaConfirmacion from "./VentanaConfirmacion";

function TablaProductos(props) {
  const [productos, setProductos] = useState([]);
  const [contPedidos, setContPedidos] = useState(0);
  const [listaPedidos, setListaPedidos] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false); // para mostar la modal
  const [mostrarModalConfirmacion, setMostrarModalConfirmacion] =
    useState(false); //ventana confirmacion mostar modal
  useEffect(() => {
    console.log(listaPedidos + "---" + contPedidos);
    setContPedidos(listaPedidos.length);
  }, [listaPedidos]);

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
    let listaux = [...listaPedidos];
    // Crear un nuevo objeto que contenga el producto y su categoría
    let productoConCategoria = {
      ...producto,
      categoria: props.categoria, // le añado la categoria usando  props.categoria contiene la categoría actual
    };
    listaux.push(productoConCategoria); // Agrego el nuevo objeto a la lista
    setListaPedidos(listaux); // Actualizo el estado con la nueva lista
    setContPedidos(contPedidos + 1); // contador de pedidos
  };
  // Función para abrir la ventana modal
  const abrirModal = () => {
    setMostrarModal(true);
  };

  // Función para cerrar la ventana modal
  const cerrarModal = () => {
    let aux = 1;
    setMostrarModal(false);
    /***esta comentado es si quiero que el cliente al dar cerrar se reinicie el pedido****/
    //setContPedidos(aux);
    //setListaPedidos([]);
  };

  const actualizarProductos = (_listaPedidos, _contPedidos) => {
    setContPedidos(_contPedidos);
    setListaPedidos(_listaPedidos);
    console.log(listaPedidos + "-------" + contPedidos);
  };

  // cerrar Ventana confimacion
  const cerrarModalConfirmacion = () => {
    setMostrarModalConfirmacion(false);
  };

  const confirmarPedido = () => {
    setMostrarModal(false);
    setMostrarModalConfirmacion(true);
  };

  //console.log("se hace clic en un producto: " + listaPedidos);
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
                  src={`./images/${props.categoria}/${producto.portadaFoto}`}
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
        <Button color="success" size="mg" onClick={abrirModal}>
          Pulse para confirmar pedido
          <br />
          <span style={{ marginRight: "10px" }}>
            {" "}
            {/* Espacio adicional a la derecha del icono */}
            <img
              src="./images/iconos/carro.svg"
              alt="Icono"
              className="icono-svg"
            />
          </span>
          : {contPedidos}
        </Button>
      </div>
      <VentanaPedidos
        listaProductos={listaPedidos}
        ver={mostrarModal}
        cerrarModal={cerrarModal}
        actualizarProductos={actualizarProductos}
        confirmarPedido={confirmarPedido}
      />
      <VentanaConfirmacion
        ver={mostrarModalConfirmacion}
        cerrarModal={cerrarModalConfirmacion}
      />
    </Container>
  );
}

export default TablaProductos;
