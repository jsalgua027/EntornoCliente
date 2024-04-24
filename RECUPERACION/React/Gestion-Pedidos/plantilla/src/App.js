
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import Inicio from './componentes/Inicio';
import TablaCategorias from './componentes/TablaCategorias';

function App() {
  const [productosPorCategoria, setProductosPorCategoria] = useState([]);

  useEffect(() => {
    // Función para obtener los productos por categoría desde PHP
    const obtenerProductosPorCategoria = async () => {
      try {
        const response = await axios.get('http://localhost/Proyectos/Curso23_24PHP/Curso23_24PHP/Restaurante/API2.php');
        setProductosPorCategoria(response.data);
        console.log("JSON recibido:", response.data);
      } catch (error) {
        console.error('Error al obtener productos por categoría:', error);
      }
    };

    // Llama a la función para obtener los productos por categoría al montar el componente
    obtenerProductosPorCategoria();
  }, []); // Se ejecuta solo una vez al montar el componente

 

  return (
    <div className="App">
      {/*<Inicio />*/}
      <TablaCategorias lista={productosPorCategoria} />
    </div>
  );
}

export default App;
