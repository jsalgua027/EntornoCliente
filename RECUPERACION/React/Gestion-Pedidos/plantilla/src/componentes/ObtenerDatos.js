import React, { useEffect, useState } from "react";
import axios from "axios";

const ObtenerDatos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          //'http://localhost/Proyectos/Curso23_24PHP/Curso23_24PHP/Restaurante/obtenerProductosAPI.php'//clase
          //'http://localhost/Proyectos/Curso23_24PHP/Restaurante/obtenerProductosAPI.php'//casa

          "https://thematic-learning.com/2DAW2024/JOSEIGNACIO/Restaurante/obtenerProductosAPI.php" // despliegue
        );
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default ObtenerDatos;
