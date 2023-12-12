import React, { useState } from "react";
import { Button, Row, Col } from "reactstrap";
import Casilla from "./Casilla";

const Tablero = (props) => {

  const campo = props.campo;
  const tablero = [];
  

  for (let i = 0; i < props.campo.length; i++) {
    let fila = [];
    for (let j = 0; j < props.campo[i].length; j++) {
      if(props.robot.f==i&&props.robot.c==j){
        fila.push(<Casilla valor={props.campo[i][j]} color="info"/>);
      }else{
        fila.push(<Casilla valor={0}/>);
      }      
    }
    tablero.push(<Row ><Col xs="auto">{fila}</Col></Row>);
  }
 
  return <>{tablero}</>;
};
export default Tablero;

