import React from "react";
import { Button,Row,Col } from "reactstrap";

const Campo = (props) => {
  let tablero = [];
  
  props.campo.map((f) => {
    let fila = [];
    f.map((c) => {
      fila.push(<Col  className="bg-light border" xs="auto"><Button>{c}</Button></Col>);
    });
    tablero.push(<Row  noGutters>{fila}</Row>);
  });
  
  return (<>{tablero}</>);
};
export default Campo;
