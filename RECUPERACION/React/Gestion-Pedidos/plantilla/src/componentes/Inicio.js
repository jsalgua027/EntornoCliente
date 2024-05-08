
import { Card, CardImg, CardImgOverlay, CardTitle, Button } from 'reactstrap';
import ObtenerPedidos from './ObtenerPedidos.js';
import React, { useState } from 'react';
import Pedidos from './Pedidos.js'

function Inicio({ onCardClick }) {
 
  return (
    <div className="inicio">
      <h1 className="centro">BIENVENIDO A HAMBURGUESAS URANGA</h1>
      <Card inverse className="izq" onClick={onCardClick}>
        <CardImg
          alt="Comer Aquí"
          src={"./images/iconos/Comer_Aqui.jpg"}
          style={{ height: 270 }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h3" className="texto-negro">
            COMER AQUÍ
          </CardTitle>
        </CardImgOverlay>
      </Card>

      <Card inverse className="izq" onClick={onCardClick}>
        <CardImg
          alt="Comida para llevar"
          src={"./images/iconos/Comida_Llevar3.jpg"}
          style={{ height: 270 }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h3" className="texto-negro">
            TAKE AWAY
          </CardTitle>
        </CardImgOverlay>
      </Card>
     
    </div>
  );
}

export default Inicio;