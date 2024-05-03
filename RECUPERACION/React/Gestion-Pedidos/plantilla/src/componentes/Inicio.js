import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function Inicio({ onCardClick }) {
  return (
    <div className="inicio">
      <h1 className="centro">¿QUÉ DESEA?</h1>
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