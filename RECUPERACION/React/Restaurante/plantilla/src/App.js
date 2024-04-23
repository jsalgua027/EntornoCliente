import React, { useState , useEffect} from 'react';
import ProductosPorCategoria from './componentes/ProductosPorCategoria';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablaProductos from './componentes/TablaProductos';
import Inicio from './componentes/Inicio';
import TablaCategorias from './componentes/TablaCategorias';
import "./App.css";
import axios from 'axios';
function App() {

  const [idCategoriaSeleccionada, setIdCategoriaSeleccionada] = useState(1);
  const [productosPorCategoria, setProductosPorCategoria] = useState([]);
  
  useEffect(() => {
    // Función para obtener los productos por categoría desde PHP
    const obtenerProductosPorCategoria = async () => {
      try {
        const response = await axios.get('http://localhost/Proyectos/Curso23_24PHP/Curso23_24PHP/Restaurante/API2.php');
        setProductosPorCategoria(response.data);
      } catch (error) {
        console.error('Error al obtener productos por categoría:', error);
      }
    };

    // Llama a la función para obtener los productos por categoría al montar el componente
    obtenerProductosPorCategoria();
  }, []); // Se ejecuta solo una vez al montar el componente

console.log(productosPorCategoria);

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

