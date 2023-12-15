import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import EntraDatos from './componentes/EntraDatos';

class App extends React.Component {
    constructor(){
      super();
      this.state={
        cuota:0,
      }
    }
  handleOnAddUser(event){
    event.preventDefault();
    const cantidad= event.target.cantidad.value;
    const interes=event.target.interes.value;
    const anios=event.target.anios.value;
    const meses=event.target.meses.value;
    const tiempoTotal= (anios*12)+meses;
    console.log(cantidad);
    console.log(interes);
    console.log(anios);
    console.log(meses);
    console.log(tiempoTotal);
    

    
      const resultado = cantidad*((Math.pow((1+interes),tiempoTotal)*interes)/((Math.pow((1+interes),tiempoTotal))-1));
      console.log(resultado)
      this.setState({cuota:resultado})
    
   
    


  }
  
  render(){
    return (
      <div>
        <h1>Calculamos tu cuota</h1>
      <EntraDatos valores={(e)=>this.handleOnAddUser(e)}/>
      <h2>La cuota mensual es: {this.state.cuota}</h2>
      </div>
              
    );
  }
  
}

export default App;
