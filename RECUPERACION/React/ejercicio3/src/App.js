import logo from "./logo.svg";
import "./App.css";
import "./componentes/Deseo";
import React, { Component } from "react";
import Deseo from "./componentes/Deseo";
import ListaDeseos from "./componentes/ListaDeseos";
import PrintDeseo from "./componentes/PrintDeseo";
import Borrar from "./componentes/Borrar";


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    deseos:["-olas", "-jamón"]

   }

   aniadoDeseo(event){
    event.preventDefault();
    // varriable donde guardar el deseo
    var aux=[];
    if(this.state.deseos && this.state.deseos !== "null" && this.state.deseos !== "undefined"){
      // si existe deseos y no esta en null ni undefined
     // copiamnos el estado en la variable axuiliar
     aux=this.state.deseos.slice();
    }
    // añado a aux el deseo del componente
    aux.push(event.target.deseo.value); // OJO usamos el name del imput para el (*event.target.deseo.value*)
    // modifico el estado
    this.setState({deseos:aux});
   }

   quitar(elemento){
    var aux = [];
    if (this.state.deseos && this.state.deseos !== "null" &&
    this.state.deseos !== "undefined"){
    aux = this.state.deseos.slice();
    }
    aux = aux.filter(item => item !== elemento)
    this.setState({
    deseos: aux
    });
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
        <ListaDeseos lista={this.state.deseos} quitar={(elemento)=>this.quitar(elemento)}/>
        <Deseo reciboDeseo={(e)=>this.aniadoDeseo(e)}/>
      </div>
    );
  }
}
export default App;



