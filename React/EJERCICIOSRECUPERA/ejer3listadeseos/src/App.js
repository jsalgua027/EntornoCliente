import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class DesireList extends Component{
render(){
  return(
    <ul>
      {this.props.datodeestado}
    </ul>
  );
}
}

class Desire extends Component{
  render(){
    return(
      <form onSubmit={this.props.onAddDeseo}>{/*onAddDeseo es etiqueta de Desire y se llama asi cuando lo rendericemos en la APP */}
        <input type="text" placeholder="Escribe tu deseo" name="deseo"/>
      </form>
    );
  }


}






class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      deseos:["GAMBAS","JAMON","DINERO"]
    }
  }
  handleAniadirDeseo(event){
    event.preventDefault();
    var aux=[];
    /*Controlo que la lista tenga deseos o no sea undefine*/
    if(this.state.deseos && this.state.deseos!=="null" && this.state.deseos!=="undefined" )
    aux=this.state.deseos.slice();/*hago copia del estado*/
    aux.push(event.target.deseo.value);/*Añado el valor recibidor del evento a la lista*/
    this.setState({deseos:aux}) /*cambio el estado */



  }
  render() {
    return (
      <div className="App">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Lista de deseos</h2>
        </div>
        <div>
          <p>
            <strong>Añade tu regalo favorito</strong>
          </p>
          <DesireList datodeestado={this.state.deseos}/>
          <Desire onAddDeseo={this.handleAniadirDeseo.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
