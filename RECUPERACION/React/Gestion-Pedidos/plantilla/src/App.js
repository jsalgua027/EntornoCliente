import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Inicio from "./componentes/Inicio";
import TablaCategorias from "./componentes/TablaCategorias";
import Pedidos from "./componentes/Pedidos";
import ObtenerDatos from "./componentes/ObtenerDatos";
import ObtenerPedidos from "./componentes/ObtenerPedidos";

function App() {
  const productosPorCategoria = ObtenerDatos();
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [mostrarPedidos, setMostrarPedidos] = useState(false);
  const pedidos = ObtenerPedidos();

  const handleMostrarPedidos = () => {
    setMostrarPedidos(true);
  };
  const handleVolver = () => {
    setMostrarPedidos(false);
  };

  const handleClickInicio = () => {
    setMostrarTabla(true);
  };

  return (
    <div className="App">
      {/* Renderizo el componente de Pedidos solo si mostrarPedidos es true */}
      {mostrarPedidos ? (
        <Pedidos pedidos={pedidos} onVolver={handleVolver} />
      ) : mostrarTabla ? (
        <TablaCategorias lista={productosPorCategoria} />
      ) : (
        <Inicio onCardClick={handleClickInicio} />
      )}
      {/* Botón para mostrar el componente de Pedidos */}
      {!mostrarPedidos && !mostrarTabla && (
        <Button
          className="btnPedidos"
          color="danger"
          onClick={handleMostrarPedidos}
        >
          Gestionar Pedidos
        </Button>
      )}
    </div>
  );
}

export default App;
