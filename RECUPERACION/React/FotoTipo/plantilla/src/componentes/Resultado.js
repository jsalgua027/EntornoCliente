import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap';
import { Component,useState,useEffect } from "react";

const Resultado = (props) => {

    let resultado = props.lista;
   
    return (
            <Card
        body
        color="warning"
        outline
        style={{
          width: '18rem'
        }}
      >
        <img
          alt={resultado.tipo_piel}
          src={resultado.imagen}
        />
        <CardBody>
          <CardTitle tag="h5">
            {resultado.tipo_piel}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
          Has obtenido una puntuación de: {props.puntos} puntos
          </CardSubtitle>
          <CardText>
            {resultado.descripcion}
          </CardText>
          
        </CardBody>
      </Card>);
        
    
   
  }
  export default Resultado;