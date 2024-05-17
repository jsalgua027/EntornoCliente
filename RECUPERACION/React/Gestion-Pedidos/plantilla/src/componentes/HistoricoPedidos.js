import React from 'react';

function HistoricoPedidos({ lista }) {
  console.log("ESTAMOS EN EL COMPONENTE HISTORICO DE PEDIDOS:", JSON.stringify(lista, null, 2));

  if (!Array.isArray(lista)) {
    console.error("La lista no es un array:", lista);
    return <p>Error: la lista no es un array.</p>;
  }

  const pedidosEntregados = lista.filter(pedido => {
    console.log(`Verificando pedido: ${pedido.id_pedido}, entregado: ${pedido.entregado}`);
    return pedido.entregado === "2";
  });
  
  console.log("Pedidos entregados:", JSON.stringify(pedidosEntregados, null, 2));

  return (
    <div className='historicoPedidos'>
      <h1>Historial de Pedidos Entregados</h1>
      <ul>
        {pedidosEntregados.length > 0 ? (
          pedidosEntregados.map(pedido => (
            <li key={pedido.id_pedido}>
              <strong>Número de Pedido:</strong> {pedido.id_pedido} - 
              <strong>Fecha:</strong> {pedido.fecha} - 
              <strong>Hora:</strong> {pedido.hora}
            </li>
          ))
        ) : (
          <p>No hay pedidos entregados para mostrar.</p>
        )}
      </ul>
    </div>
  );
}

export default HistoricoPedidos;
