
import "./App.css";
import { Button, Input, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component, useState } from "react";
import ReactDOM from "react-dom";
function DesireList(props) {
  return (
    <ul>
      {props.deseos.map((d) => (
        <Row>
          <Col sm={{ offset: 1, size: 1 }}>
            <PrintDeseo deseo={d} />
          </Col>
          <Col sm={{ offset: 1, size: 2 }}>
            <Borrar deseo={d} quitar={(elemento) => props.quitar(elemento)} />
          </Col>
        </Row>
      ))}
    </ul>
  );
}
function Desire(props) {
  return (
    <form onSubmit={props.onAddDeseo}>
      <Input type="text" placeholder="Escribe tu deseo" name="deseo" />
    </form>
  );
}
function PrintDeseo(props) {
  return <li>{props.deseo}</li>;
}
function Borrar(props) {
  return (
    <Button onClick={(deseo) => props.quitar(props.deseo)}>
      Borrar {props.deseo}
    </Button>
  );
}
function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}

function App(props) {
  const [deseos, setDeseos] = useState(["GAMBAS", "JAMÓN"]);

  const quitar = (elemento) => {
    setDeseos(deseos.filter((d) => d != elemento));
  };

  let forceUpdate = useForceUpdate();
  
  const handleAniadirDeseo = (event) => {
    event.preventDefault();
    let d = deseos;
    d.push(event.target.deseo.value);
    setDeseos(d);
    forceUpdate();
  };

  return (
    <div className="App">
      <h1> AÑADE TU REGALO FAVORITO </h1>
      <DesireList quitar={(elemento) => quitar(elemento)} deseos={deseos} />
      <Desire onAddDeseo={handleAniadirDeseo} />
    </div>
  );
}

export default App;
