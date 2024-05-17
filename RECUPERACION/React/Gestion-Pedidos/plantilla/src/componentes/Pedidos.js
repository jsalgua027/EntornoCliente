import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
  Spinner ,
} from "reactstrap";
import HistoricoPedidos from "./HistoricoPedidos";

function Pedidos({ pedidos }) {
  const [pedidosList, setPedidosList] = useState(pedidos);
  const [loading, setLoading] = useState(true);
  const [pedidosNoEntregados, setPedidosNoEntregados] = useState([]);

  useEffect(() => {
    // Simulando una llamada a la API con un temporizador de 1 segundo
    setTimeout(() => {
      setPedidosList(pedidos);
      setLoading(false);
    }, 1000);
  }, [pedidos]);
  // realizo el filtrado aprovechando la simulación
  useEffect(() => {
    if (!loading) {
      const noEntregados = pedidosList.filter(
        (pedido) => pedido.entregado === "1"
      );
      setPedidosNoEntregados(noEntregados);
      console.log("Pedidos no entregados:", noEntregados);
    }
  }, [loading, pedidosList]);

  //console.log("Pedidos recibidos por props:", pedidos);

  const handleButtonAction = (idPedido) => {
    // Configuración de la solicitud POST
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_pedido: idPedido }),
    };

    //  llamada a la API para actualizar el estado de entrega del pedido
    fetch(
      //'http://localhost/Proyectos/Curso23_24PHP/Restaurante/estadoPedidoAPI.php'//casa
      //'http://localhost/Proyectos/Curso23_24PHP/Curso23_24PHP/Restaurante/estadoPedidoAPI.php'//clase
      "https://thematic-learning.com/2DAW2024/JOSEIGNACIO/Restaurante/estadoPedidoAPI.php", // despliegue
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta de la API:", data);
        // Actualizar el estado local de los pedidos para que el pedido entregado desaparezca
        setPedidosList((prevPedidos) =>
          prevPedidos.filter((pedido) => pedido.id_pedido !== idPedido)
        );
      })
      .catch((error) => {
        console.error("Error al llamar a la API:", error);
      });
  };

  const reiniciarApp = () => {
    window.location.reload(); // Esto recarga la página
  };

  return (
    <div className="pedidos-container">
      <h1 className="h1pedidos">PEDIDOS</h1>
      {loading ? (
         <div className="text-center">
           <p>Cargando pedidos...</p>
         <Spinner color="primary" />
        </div>
       
      ) : (
        <Row xs="1" sm="2" md="3">
          {pedidosNoEntregados.map((pedido, index) => (
            <Col key={index} className="mb-3">
              <Card
                className="mb-3"
                style={{ minWidth: "200px", maxWidth: "400px" }}
              >
                <CardBody>
                  <CardTitle tag="h5">Pedido #{pedido.id_pedido}</CardTitle>
                  <CardText>
                    <strong>Fecha:</strong> {pedido.fecha} <br />
                    <strong>Hora:</strong> {pedido.hora} <br />
                    <strong>Entregado:</strong>{" "}
                    {pedido.entregado === "1" ? "No" : "Sí"} <br />
                    <strong>Productos:</strong>
                    <ul>
                      {pedido.productos.map((producto, index) => (
                        <li key={index}>
                          {producto.producto} - Cantidad: {producto.cantidad} -
                          Precio: {producto.precio}€
                        </li>
                      ))}
                    </ul>
                  </CardText>
                  <Button
                    color="primary"
                    onClick={() => handleButtonAction(pedido.id_pedido)}
                  >
                    ENTREGAR
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <HistoricoPedidos lista={pedidosList} />
      <Button color="danger" onClick={() => reiniciarApp()}>
        SALIR
      </Button>
    </div>
  );
}

export default Pedidos;
