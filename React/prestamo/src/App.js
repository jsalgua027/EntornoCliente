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
    const cantidad = parseFloat(event.target.cantidad.value);
    const tasaAnual = parseFloat(event.target.interes.value) / 100;  // Convertir a decimal
    const anios = parseInt(event.target.anios.value, 10);
    const meses = parseInt(event.target.meses.value, 10);
    const tiempoTotal = (anios * 12) + meses;
  
    console.log("Cantidad:", cantidad);
    console.log("Tasa Anual:", tasaAnual);
    console.log("Años:", anios);
    console.log("Meses:", meses);
    console.log("Tiempo Total:", tiempoTotal);
  
    const tasaPorPeriodo = tasaAnual / 12;  // Dividir por 12 para obtener la tasa por mes
  
    const numerador = Math.pow(1 + tasaPorPeriodo, tiempoTotal) * tasaPorPeriodo;
    const denominador = Math.pow(1 + tasaPorPeriodo, tiempoTotal) - 1;
  
    console.log("Numerador:", numerador);
    console.log("Denominador:", denominador);
  
    const resultado = cantidad * (numerador / denominador);
    console.log("Cuota del préstamo:", resultado);
  
    this.setState({ cuota: resultado });
   
    


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
