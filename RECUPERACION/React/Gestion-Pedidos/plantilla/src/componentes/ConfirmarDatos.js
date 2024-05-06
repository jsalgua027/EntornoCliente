import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ConfirmarDatos = (productos, setconfirmarDatos) => {
    // Preparamos los datos del pedido para enviarlos al servidor
    const datosPedido = {
      productos: productos,
    };
  
    // Realizamos la solicitud POST al servidor
    fetch("URL_DE_TU_API", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosPedido),
    })
      .then((response) => response.json())
      .then((data) => {
        // Si la solicitud es exitosa, mostramos el ID del pedido, la fecha y el total del precio
        console.log("ID del Pedido:", data.id_pedido);
        console.log("Fecha:", data.fecha);
        console.log("Total del Precio:", data.total_precio);
        // Cambiamos el estado para mostrar la confirmación del pedido
        setconfirmarDatos(true);
      })
      .catch((error) => {
        // Si hay un error, lo mostramos en la consola
        console.error("Error al confirmar el pedido:", error);
      });
  };
  
  export default ConfirmarDatos;