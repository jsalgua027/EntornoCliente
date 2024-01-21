import React, { useState } from "react";
import { Button, Row, Col } from "reactstrap";

const Casilla = (props) => {
    let col="primary";
    if(props.valor==1){
        col="danger";
    }
    if(props.valor==2){
        col="success";
    }
    if(props.valor==3){
        col="secondary";
    }
    if(props.valor==4){
        col="warning";
    }
    if(props.valor==5){
        col="info";
    }
    return <Button  color={col}>{props.valor}</Button>
  
};
export default Casilla;
