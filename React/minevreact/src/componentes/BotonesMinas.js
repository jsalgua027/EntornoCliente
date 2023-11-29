import React , { useState }from "react";
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

  

  const sumar = () => {
    setNumeroMinas(numeroMinas + 1);
  };

  const restar = () => {
    if (numeroMinas > 0) {
      setNumeroMinas(numeroMinas - 1);
    }
  };

  return (
    <div style={estilos}>
        <p>Número Minas: {numeroMinas}</p>
      <div style={estiloB}>
        <Button style={estiloBA}onClick={sumar}>+</Button>
        <Button style={estiloBB}onClick={restar}>-</Button>
      </div>
    </div>
  );
};
export default SelectorMinas;
