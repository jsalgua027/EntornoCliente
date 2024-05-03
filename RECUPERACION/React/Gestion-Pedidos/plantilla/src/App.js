
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import Inicio from './componentes/Inicio';
import TablaCategorias from './componentes/TablaCategorias';
import ObtenerDatos from './componentes/ObtenerDatos';
//https://react-slick.neostack.com/docs/get-started slider basico para react

function App() {
 const productosPorCategoria = ObtenerDatos();
const [mostrarTabla, setMostrarTabla] = useState(false);

  const handleClickInicio = () => {
    setMostrarTabla(true);
  };
 
  return (
    <div className="App">
      {mostrarTabla ? (
        <TablaCategorias lista={productosPorCategoria} />
      ) : (
        <Inicio onCardClick={handleClickInicio} />
      )}
    </div>
  );
}

export default App;
