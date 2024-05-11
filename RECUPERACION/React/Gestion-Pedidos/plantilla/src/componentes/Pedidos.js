import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import axios from 'axios';

function Pedidos({ pedidos }) {
/*
  // Función para manejar la acción del botón
  const handleButtonAction = (idPedido) => {
     console.log("El dato que estoy enviando es:" +idPedido)
    // Realizar la llamada a la API para actualizar el estado de entrega del pedido
    axios.post( 'http://localhost/Proyectos/Curso23_24PHP/Restaurante/estadoPedidoAPI.php'//casa
    // 'http://localhost/Proyectos/Curso23_24PHP/Curso23_24PHP/Restaurante/estadoPedidoAPI.php'//clase
    ,{ id_pedido: idPedido } )
   
      .then(response => {
        console.log("esoooooooooo:"+response.data);
        // Aquí puedes actualizar el estado local si es necesario
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
      });
  };

*/
  const handleButtonAction = (idPedido) => {
  //  console.log("El dato que estoy enviando es:" + idPedido);
  
    // Configuración de la solicitud POST
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id_pedido: idPedido })
    };
    console.log("El dato que estoy enviando es:" +{ id_pedido: idPedido });
    // Realizar la llamada a la API para actualizar el estado de entrega del pedido
    fetch('http://localhost/Proyectos/Curso23_24PHP/Restaurante/estadoPedidoAPI.php', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log("esoooooooooo:", data);
        // Aquí puedes actualizar el estado local si es necesario
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
      });
  };


  // Dividir los pedidos en grupos de tres
  const gruposDeTresPedidos = [];
  for (let i = 0; i < pedidos.length; i += 3) {
    gruposDeTresPedidos.push(pedidos.slice(i, i + 3));
  }

  return (
    <div>
      <h1>Pedidos</h1>
      {gruposDeTresPedidos.map((grupo, index) => (
        <div key={index} className="d-flex justify-content-between flex-wrap">
          {grupo.map((pedido, innerIndex) => (
            <Card key={innerIndex} className="mb-3" style={{ width: '30%', minWidth: '200px' }}>
              <CardBody>
                <CardTitle tag="h5">Pedido #{pedido.id_pedido}</CardTitle>
                <CardText>
                  <strong>Fecha:</strong> {pedido.fecha} <br />
                  <strong>Hora:</strong> {pedido.hora} <br />
                  <strong>Entregado:</strong> {pedido.entregado ? 'No' : 'Si'} <br />
                  <strong>Productos:</strong>
                  <ul>
                    {pedido.productos.map((producto, index) => (
                      <ol key={index}>
                        {producto.producto} - Cantidad: {producto.cantidad} - Precio: {producto.precio}€
                      </ol>
                    ))}
                  </ul>
                </CardText>
                <Button color="primary" onClick={() => handleButtonAction(pedido.id_pedido)}>Acción</Button>
              </CardBody>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Pedidos;
