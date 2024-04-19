import React, { useState } from 'react';
import ProductosPorCategoria from './componentes/ProductosPorCategoria';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablaProductos from './componentes/TablaProductos';
import Inicio from './componentes/Inicio';
import TablaCategorias from './componentes/TablaCategorias';
import "./App.css";

function App() {
 
  return (
    <div className='App'>
     
       {/*<Inicio/>*/} 
     {/*<TablaProductos idCategoria={4}/>*/} 
     
     <TablaCategorias/>
    </div>
  );
}

export default App;

