import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Inicio from "./componentes/Inicio";
import TablaCategorias from "./componentes/TablaCategorias";
import Pedidos from "./componentes/Pedidos";
import ObtenerDatos from "./componentes/ObtenerDatos";
import ObtenerPedidos from "./componentes/ObtenerPedidos";

//https://react-slick.neostack.com/docs/get-started slider basico para react

function App() {
  const productosPorCategoria = ObtenerDatos();
  const [mostrarTabla, setMostrarTabla] = useState(false);
  //-------------------------------------------
  const [mostrarPedidos, setMostrarPedidos] = useState(false);
  const pedidos = ObtenerPedidos();

  const handleMostrarPedidos = () => {
    // Hacer la función async para esperar la obtención de los pedidos
    // Esperar a que se obtengan los pedidos

    setMostrarPedidos(true);
  };
  const handleVolver = () => {
    setMostrarPedidos(false);
  };
  console.log("LOS PEDIODS: " + pedidos);
  //----------------------------------------------

  const handleClickInicio = () => {
    setMostrarTabla(true);
  };

  return (
    <div className="App">
      {/* Renderizar el componente de Pedidos solo si mostrarPedidos es true */}
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
