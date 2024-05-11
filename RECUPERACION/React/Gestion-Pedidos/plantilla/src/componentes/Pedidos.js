import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Row,Col } from 'reactstrap';
import HistoricoPedidos from './HistoricoPedidos';


function Pedidos({ pedidos }) {
  const [pedidosList, setPedidosList] = useState(pedidos);

  const handleButtonAction = (idPedido) => {
    // Configuración de la solicitud POST
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id_pedido: idPedido })
    };

    // Realizar la llamada a la API para actualizar el estado de entrega del pedido
    fetch('http://localhost/Proyectos/Curso23_24PHP/Restaurante/estadoPedidoAPI.php', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log("Respuesta de la API:", data);
        // Actualizar el estado local de los pedidos para que el pedido entregado desaparezca
        setPedidosList(prevPedidos => prevPedidos.filter(pedido => pedido.id_pedido !== idPedido));
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
      });
  };

 // Método para agrupar los pedidos en pares
 const groupPedidosInPairs = (pedidos) => {
  const groupedPedidos = [];
  for (let i = 0; i < pedidos.length; i += 3) {
    groupedPedidos.push(pedidos.slice(i, i + 3));
  }
  return groupedPedidos;
};


return (
  <div>
    <h1>Pedidos</h1>
    {groupPedidosInPairs(pedidosList).map((fila, filaIndex) => (
      <Row key={filaIndex} className="mb-3">
        {fila.map((pedido, colIndex) => (
          // Verificar si el pedido está entregado antes de mostrarlo
          pedido.entregado === 1 && (
            <Col md="6" key={colIndex}>
              <Card className="mb-3" style={{ minWidth: '200px', maxWidth: '400px' }}>
                <CardBody>
                  <CardTitle tag="h5">Pedido #{pedido.id_pedido}</CardTitle>
                  <CardText>
                    <strong>Fecha:</strong> {pedido.fecha} <br />
                    <strong>Hora:</strong> {pedido.hora} <br />
                    <strong>Entregado:</strong> {pedido.entregado ? 'No' : 'Si'} <br />
                    <strong>Productos:</strong>
                    <ul>
                      {pedido.productos.map((producto, index) => (
                        <li key={index}>
                          {producto.producto} - Cantidad: {producto.cantidad} - Precio: {producto.precio}€
                        </li>
                      ))}
                    </ul>
                  </CardText>
                  <Button color="primary" onClick={() => handleButtonAction(pedido.id_pedido)}>ENTREGAR</Button>
                </CardBody>
              </Card>
            </Col>
          )
        ))}
      </Row>
    ))}
    <HistoricoPedidos pedidos={pedidosList} />
  </div>
);
}

export default Pedidos;