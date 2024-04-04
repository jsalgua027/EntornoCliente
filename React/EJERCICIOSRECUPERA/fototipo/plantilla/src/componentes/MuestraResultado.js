import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap';
import { Component,useState } from "react";

//Recibe la puntuación y busca en puntuaje cual está en ese rango, lo muestra en una carta.
const MuestraResultado=(props)=>{
let lista=props.puntuaje;
console.log(lista);
let puntos=props.puntos;
console.log(puntos);
//Me vas a buscar y a mostrar sólo el que coincida.
// Buscar y mostrar solo el resultado que coincide.
let resultado = lista.find((x) => puntos >= x.rangoInicio && (puntos <= x.rangoFin || x.rangoFin === null));
if (resultado) {
  console.log(resultado.tipo_piel);
  // Aquí puedes devolver o mostrar el resultado como necesites.
  return resultado.tipo_piel;
} else {
  console.log("No se encontró ningún resultado para los puntos dados.");
  // Aquí puedes manejar el caso en el que no se encuentre ningún resultado.
  return null;
}

}

export default MuestraResultado;