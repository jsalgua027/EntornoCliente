import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function Inicio() {

  return (
    <div className="inicio">
    <Card className="izq">
      <CardImg
        top
        width="50%"
        src={""}
        alt={""}
      />
      <CardBody>
        <CardTitle>Comer Aquí</CardTitle>
        <CardSubtitle></CardSubtitle>
        {/* Agrega más información del producto si es necesario */}
      </CardBody>
    </Card>

    <Card className="der">
      <CardImg
        top
        width="50%"
        src={""}
        alt={""}
      />
      <CardBody>
        <CardTitle>Para Llevar</CardTitle>
        <CardSubtitle></CardSubtitle>
        {/* Agrega más información del producto si es necesario */}
      </CardBody>
    </Card>

    </div>
    
  );
}

export default Inicio;
