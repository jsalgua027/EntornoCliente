import React, { Component } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const MapaBotones = (props) => {};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tamanio: 9,
      listaColores: ["primary", "danger"],
      tablero: [],
      ganar: false,
      perder: false,
      // tendrás que añadir más atributos al state como el turno...
    };
  }
  componentWillMount() {
    let tamanio = this.state.tamanio;
    let table = this.state.tablero;
    let tableroBotones = [];

    console.log(tamanio + "-----------------");
    for (let i = 0; i < tamanio; i++) {
      let fila = [];
      for (let j = 0; j < tamanio; j++) {
        fila.push(<Button></Button>);
      }
      tableroBotones.push(fila);
      tableroBotones.push(<br />);
    }
    return <>{tableroBotones}</>;
  }

  render() {
    return (
      <div className="App">
        <h1>tablero</h1>
        <MapaBotones />
      </div>
    );
  }
}
export default App;
