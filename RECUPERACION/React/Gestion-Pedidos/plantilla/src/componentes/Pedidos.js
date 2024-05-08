import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

function Pedidos({ pedidos, onButtonAction }) {
  // Dividir los pedidos en grupos de tres
  const gruposDeTresPedidos = [];
  for (let i = 0; i < pedidos.length; i += 3) {
    gruposDeTresPedidos.push(pedidos.slice(i, i + 3));
  }

  return (
    <div>
      <h2>Pedidos</h2>
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
                <Button color="primary" onClick={() => onButtonAction(pedido.id_pedido)}>Acción</Button>
              </CardBody>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Pedidos;
