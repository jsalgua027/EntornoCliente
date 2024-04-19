import React, { useState } from 'react';
import ProductosPorCategoria from './componentes/ProductosPorCategoria';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablaConectada from './componentes/TablaConectada';
import Inicio from './componentes/Inicio';
import "./App.css";

function App() {
 
  return (
    <div>
      <h1>Productos por Categoría</h1>
        <Inicio/>
     {/*<TablaConectada idCategoria={4}/>*/} 
    </div>
  );
}

export default App;

