import React, { useState } from "react";
import { Button } from "reactstrap";

const SelectorMinas = (props) => {
  const [numeroMinas, setNumeroMinas] = useState(10);
  const estilos = {
    border: "1px solid black",
    backgroundColor: "rgb(210, 207, 204)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "180px",
    height: "auto",
    margin: "10px",
    borderRadius: "5%",
  };
  const estiloB = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
    padding: "10px",
  };

  const estiloBA = {
    marginBottom: "10px",
  };
  const estiloBB = {};

  return (
    <div style={estilos}>
      <p>Número Minas: </p>
      <p id="numeroMinas">{props.numero}</p>
      <div style={estiloB}>
        <Button style={estiloBA} onClick={props.clickSubir}>
          +
        </Button>
        <Button style={estiloBB} onClick={props.clickBajar}>
          -
        </Button>
      </div>
    </div>
  );
};
export default SelectorMinas;
