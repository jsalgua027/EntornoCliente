import React, { useState } from "react";
import { Button, Row, Col } from "reactstrap";

const Campo = (props) => {
  let tablero = [];
  console.log(props.campo);
  for (let i = 0; i < props.campo.length; i++) {
    let fila = [];
    for (let j = 0; j < props.campo[i].length; j++) {
      if(props.robot.f==i&&props.robot.c==j){
        fila.push(<Button color="info"/>);
      }else{
        fila.push(<Button />);
      }      
    }
    tablero.push(<Row ><Col xs="auto">{fila}</Col></Row>);
  }
  console.log(tablero);
  return <>{tablero}</>;
};
export default Campo;
