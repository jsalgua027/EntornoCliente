import React, { useState } from 'react';
import ProductosPorCategoria from './componentes/ProductosPorCategoria';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablaProductos from './componentes/TablaProductos';
import Inicio from './componentes/Inicio';
import TablaCategorias from './componentes/TablaCategorias';
import "./App.css";

function App() {

  const [idCategoriaSeleccionada, setIdCategoriaSeleccionada] = useState(1);

  const handleCategoriaSelect = (id_categoria) => {
    setIdCategoriaSeleccionada(id_categoria);
  };

  console.log("la categoria seleccionada es:" + idCategoriaSeleccionada)
  return (
    <div className='App'>
     
     
     <div className='contenedor'> 
     <TablaCategorias  onCategoriaSelect={handleCategoriaSelect}/>
     <TablaProductos idCategoria={idCategoriaSeleccionada} />
     </div>
     
    
    </div>
  );
}

export default App;

