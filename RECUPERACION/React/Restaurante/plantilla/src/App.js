import React, { useState } from 'react';
import ProductosPorCategoria from './componentes/ProductosPorCategoria';
import 'bootstrap/dist/css/bootstrap.min.css';
import productos from './componentes/Productos';
import Tabla from './componentes/Tabla';

function App() {
 
  return (
    <div>
      <h1>Productos por Categoría</h1>
      <ProductosPorCategoria idCategoria={5} /> 
      <h2>Aqui pruebas con la tabla</h2>
      <Tabla lista={productos}></Tabla>
    </div>
  );
}

export default App;

