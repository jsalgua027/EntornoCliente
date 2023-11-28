import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Botoncito from "./componentes/Botoncito";
import MatrizBotones from "./componentes/MatrizBotones";



function App() {
  let minas = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0]
];


  return (
    <div className="App">
     <MatrizBotones matrizAux={minas}></MatrizBotones>
    </div>
  );
}

export default App;
