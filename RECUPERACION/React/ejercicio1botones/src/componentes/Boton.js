import React from 'react';
import {
    Button,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";


  const Boton = (props) => {
    return (
      <>
       <Button  color={props.color} size="lg" onClick={()=>props.cambia()} outline>{props.color}</Button>
      </>
    );
  };
  export default Boton;