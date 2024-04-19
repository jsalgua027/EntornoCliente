import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImgOverlay,
  CardText
} from "reactstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function Inicio() {

  return (
    <div className="inicio">
      <h1 className="centro">¿QUE DESEA?</h1>
     <Card inverse className="izq">
    <CardImg
      alt="Card image cap"
      src={"./images/iconos/Comer_Aqui.jpg"}
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h3" className="texto-negro" >
        COMER AQUÍ
      </CardTitle>
    </CardImgOverlay>
  </Card>

  <Card inverse className="izq">
    <CardImg
      alt="Card image cap"
      src={"./images/iconos/Comida_Llevar3.jpg"}
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h3"  className="texto-negro" >
       TAKE AWAY
      </CardTitle>
    </CardImgOverlay>
  </Card>
    </div>
    
  );
}

export default Inicio;
