import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { Component, useState, useEffect } from "react";
import axios from "axios";
import { PHPCONEXION } from "./Ruta";
import Grafica from "./Grafica";
//https://youtu.be/d_Ldw7z8kqc?si=1G4MkkjQA7pa4dGM --> enlace a un canal con una libreria interesante




const Resultado = (props) => {
  const [final,setfinal]=useState();
  let resultado = props.lista; // todas la lista de puntuación la copio
  let puntosAbuscar = props.puntos; // puntos de la encuesta

  // encuentro los puntos resultado de la encuesta entre los rangos
  
  let cardFinal = resultado.find(
    (c) =>
      puntosAbuscar >= c.rangoInicio &&
      (puntosAbuscar < c.rangoFin || c.ranfoFin === null)
  );
    //esto es el dato que tengo que sobreescribir en el txt
    console.log(resultado.ID);
  //TEMA AXIOS
  //funcion para conectar con el archivo de PHP y enviar el resultado del cuestionario
  const conectar = () => {
    //const PHPCONEXION=PHPCONEXION;
    //Funcion que envia los datos
    const data = {
      nachoFoto: cardFinal.ID,
    };

    //Realizo la solicitud POST usando Axios
    axios
      .post(PHPCONEXION, data)
      .then((response) => {
        //manejo la respuesta en el servidor si es necesario,
        console.log("respuesta enviada: " + response.data);
        setfinal(response.data);
      })
      .catch((error) => {
        // manejo los errores si la solicitud falla
        console.error("Error al conectar con el servidor:", error);
      });
   
  };

  //llamo a la función conexion cuando se monte el componente
  React.useEffect(() => {
    conectar();
    // [] se lo paos como segundo argumento
    //sirve para que se ejecute 1 sola vez al montar el componente
  }, []);

  
  

 console.log(final+"los datos del php")


  if (cardFinal) {
    return ( 
      <div>
        
      
      <Card
        className="card"
        body
        color="success"
        outline
        style={{
          width: "18rem",
        }}
      >
        <img alt={cardFinal.tipo_piel} src={cardFinal.imagen} />
        <CardBody>
          <CardTitle tag="h5">{cardFinal.tipo_piel}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Has obtenido una puntuación de: {props.puntos} puntos
          </CardSubtitle>
          <CardText>{cardFinal.descripcion}</CardText>
        </CardBody>
      </Card>

      <Grafica lectura={final}/>

      </div>
    );
  } else {
    return <p>No se encontró ningún resultado para los puntos dados </p>;
  }
};
export default Resultado;
