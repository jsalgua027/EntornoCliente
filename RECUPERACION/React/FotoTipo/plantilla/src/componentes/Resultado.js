import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap';
import { Component,useState,useEffect } from "react";

const Resultado = (props) => {

    let resultado = props.lista; // todas la lista de puntuación la copio
    let puntosAbuscar=props.puntos; // puntos de la encuesta
    // encuentro los puntos resultado de la encuesta entre los rangos
    let cardFinal=resultado.find((c)=>puntosAbuscar >= c.rangoInicio && (puntosAbuscar < c.rangoFin || c.ranfoFin ===null));
   
    return (
            <Card className='card'
        body
        color="success"
        outline
        style={{
          width: '18rem'
        }}
      >
        <img
          alt={cardFinal.tipo_piel}
          src={cardFinal.imagen}
        />
        <CardBody>
          <CardTitle tag="h5">
            {cardFinal.tipo_piel}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
          Has obtenido una puntuación de: {props.puntos} puntos
          </CardSubtitle>
          <CardText>
            {cardFinal.descripcion}
          </CardText>
          
        </CardBody>
      </Card>);
        
    
   
  }
  export default Resultado;