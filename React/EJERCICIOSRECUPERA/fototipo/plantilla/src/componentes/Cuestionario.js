// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap';
import { Component,useState } from "react";

const Alert=(props)=>{
  const [seleccionado,setSeleccionado]=useState('');
  //const [contestado,setContestado]=useState(false);
  
  //le paso el index y los puntos
  const enviar=(puntos)=>{
    let numPreg=props.bloquePregunta.orden;

//console.log("pregunta nº: "+numPreg)
    //if(contestado==false){}
setSeleccionado(puntos);
//console.log("entra en metodo enviar ->" + puntos)
    props.puntuaje(puntos,numPreg);
    //setContestado(true);
  }
  return(
    <>
  <h6 className="alert-heading">{props.bloquePregunta.orden}-{props.bloquePregunta.texto}</h6>  
  <hr />
  <p className="mb-0">
    {/* Recorro con un map el bloque preguntas */}
    {props.bloquePregunta.respuestas.map((resp,index)=>(
      <Button key={index} 
      color={seleccionado === resp.puntos ? "danger": "outline-danger"}
      onClick={()=>enviar(resp.puntos)}
     >
     {resp.valor}
    </Button>
    ))}
   
  </p>
</>
  );
}

export default Alert;