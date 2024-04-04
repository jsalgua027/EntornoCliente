// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Component } from "react";
  //Esto es una prueba para subir el ejercicio del semaforo

class App extends Component{
  constructor(props){
    super(props);
      this.state={

      };
    }
  render(){
    return (
    <div className="App">
      <Botoncito/>
    </div>
  );
  }
  
}

export default App;


