import React from 'react';
import ProductosPorCategoria from './componentes/ProductosPorCategoria';


function App() {
  return (
    <div>
      <h1>Productos por Categoría</h1>
      <ProductosPorCategoria idCategoria={4} /> {/* Cambia el ID de la categoría según sea necesario */}
    </div>
  );
}

export default App;

