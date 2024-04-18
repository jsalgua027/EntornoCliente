import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function ProductosPorCategoria({ idCategoria }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nombreCategoria, setNombreCategoria] = useState("");
  //solicitud
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/Proyectos/Curso23_24PHP/Restaurante/productos.php?id_categoria=' + idCategoria);

      //  console.log(response.data); 
        setProductos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchData();
  }, [idCategoria]);

  useEffect(() => {
    
// en vez de realizar una conexion como tengo la id de la categoria  usada , genero un array de objetos para sacar el nombre
    const categorias = [
      { id_categoria: 1, nombre: "Hamburguesas" },
      { id_categoria: 2, nombre: "Bebidas" },
      { id_categoria: 3, nombre: "Complementos" },
      { id_categoria: 4, nombre: "Ensaladas" },
      { id_categoria: 5, nombre: "Postres" }
      
    ];
    // encuentro la categoria
    const categoriaEncontrada = categorias.find(categoria => categoria.id_categoria === idCategoria);
    if (categoriaEncontrada) {
      setNombreCategoria(categoriaEncontrada.nombre);
    }
  }, [idCategoria]);



  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div>
     <h2>{nombreCategoria}</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id_producto}>{producto.producto}
              <img src={`./images/${producto.id_categoria.toString()}/${producto.portadaFoto}`} alt={producto.producto}   style={{ width: '200px', height: 'auto' }}/>
            <strong>{producto.precio}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductosPorCategoria;
