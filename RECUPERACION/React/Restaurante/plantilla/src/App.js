import React, { useState } from 'react';
import ProductosPorCategoria from './componentes/ProductosPorCategoria';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablaProductos from './componentes/TablaProductos';
import Inicio from './componentes/Inicio';
import "./App.css";

function App() {
 
  return (
    <div className='App'>
     
       {/*<Inicio/>*/} 
     {/*<TablaProductos idCategoria={4}/>*/} 
     <TablaProductos idCategoria={4}/>
    </div>
  );
}

export default App;

