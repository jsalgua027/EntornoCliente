import React from "react";

function HistoricoPedidos({ lista }) {
  if (!Array.isArray(lista)) {
    console.error("La lista no es un array:", lista);
    return <p>Error: la lista no es un array.</p>;
  }
  // filtrado de pedidos solo quiero los entregados
  const pedidosEntregados = lista.filter((pedido) => {
    return pedido.entregado === "2";
  });

  return (
    <div className="historicoPedidos">
      <h1>Historial de Pedidos Entregados</h1>
      <ul>
        {pedidosEntregados.length > 0 ? (
          pedidosEntregados.map((pedido) => (
            <li key={pedido.id_pedido}>
              <strong>Número de Pedido:</strong> {pedido.id_pedido} -
              <strong>Fecha:</strong> {pedido.fecha} -<strong>Hora:</strong>{" "}
              {pedido.hora}
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
