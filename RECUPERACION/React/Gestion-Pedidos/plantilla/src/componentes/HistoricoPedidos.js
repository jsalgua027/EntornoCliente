import React from 'react';
import ObtenerDatos from './ObtenerDatos';

function HistoricoPedidos({ pedidos }) {

 
    
  return (
    <div  style={{ background: 'red' }}>
      <h1>Historial de Pedidos Entregados</h1>
      <ul>
        {pedidos.map(pedido => (
          pedido.entregado === 2 && (
            <li key={pedido.id_pedido}>
              <strong>Número de Pedido:</strong> {pedido.id_pedido} - 
              <strong>Fecha:</strong> {pedido.fecha} - 
              <strong>Hora:</strong> {pedido.hora}
            </li>
          )
        ))}
      </ul>
    </div>
  );
}

export default HistoricoPedidos;
