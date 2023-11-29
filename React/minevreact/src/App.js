import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Botoncito from "./componentes/Botoncito";
import Campo from "./componentes/Campo";
import Botonera from "./componentes/Botonera";



let minas = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      campo:minas,
      valor:12,
    }
  }
 
  render(){
  return (
    <div className="App">
     
     <Campo valor={this.state.valor} campo={this.state.campo}></Campo>
    </div>
  )
  }
}

export default App;
/*
 {<MatrizBotones matrizAux={minas}></MatrizBotones>}
 <Campo campo={this.state.campo} />
 [[1,1],[2,2],['s','s'],['c','c']]

*/