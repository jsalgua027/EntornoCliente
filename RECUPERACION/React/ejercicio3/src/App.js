import logo from "./logo.svg";
import "./App.css";
import "./componentes/Deseo";
import React, { Component } from "react";
import Deseo from "./componentes/Deseo";
import ListaDeseos from "./componentes/ListaDeseos";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    deseos:["olas ", " jamón"]

   }

  
  render() {
    return (
      <div className="App">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Lista de deseos.</h2>
        </div>
        <div>
          <p>
            <strong>Añade tu regalo favorito</strong>
          </p>
        </div>
        <ListaDeseos lista={this.state.deseos}/>
        <Deseo/>
      </div>
    );
  }
}
export default App;



