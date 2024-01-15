import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import { Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const MapaBotones = (props) => {
  // este componente pinta el tablero 9x9 con las props que le paso.
 
  let tablero=[]


  for (let i = 0; i < props.listaBotones.length; i++) {
    let fila=[]
      for (let j = 0; j < props.listaBotones.length; j++) {
    fila.push(<Button outline />)
    
   }
    tablero.push(<Col>{fila}</Col>)
  }
  console.log(tablero);
  return tablero;
 
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
      // no se puede modificar el state
    };
  }
  clica(x, y) {
    let color="primary"
    // x se supone que la columna, y la fila
    if((x===0 && y===0) || (x===1 && y===0) || (x===2 && y===0)  
    || (x===3 && y===0) (x===4 && y===0) ||(x===5 && y===0) ||(x===6 && y===0) ||(x===7 && y===0)||
    (x===8 && y===0)|| (x===9 && y===0)){
      
      
    }else{
     
    }
    
  }
  componentWillMount() {
    // aquí es donde creo las nueve columnas con los datos iniciales.
    let tableroAux=[]
    for (let i = 0; i < 9; i++) {
       let filaAux=[]
     for (let j = 0; j < 9; j++) {
            filaAux.push(<Button onClick={(i,j)=>this.clica(i,j)}/>)
     }
      tableroAux.push(<Col>{filaAux}</Col>)
  }
  this.setState({
    listaBotones:tableroAux,
  })
}
  render() {
    return (
      <div className="App">
        <h1> BUCHACA </h1>
        <MapaBotones listaBotones={this.state.listaBotones}/>
      </div>
    );
  }
}
export default App;