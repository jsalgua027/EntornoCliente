import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Campo from "./componentes/Campo";
import Botonera from "./componentes/Botonera";
import SelectorMinas from "./componentes/BotonesMinas";
import Jugar from "./componentes/Jugar";
import "./App.css";

let minas = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campo: minas,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>MineVancic</h1>
        <div className="confJuego"> 
        <SelectorMinas></SelectorMinas>
        <Jugar></Jugar>
        </div>
       
        <Campo campo={this.state.campo}></Campo>
        <Botonera></Botonera>
      </div>
    );
  }
}

export default App;
