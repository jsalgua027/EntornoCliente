import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import React, { Component } from 'react'

const Boton = (props) => {
  const estilo={
   border: '1px solid black' // Borde negro sólido
  }
   return (
     <Button color={props.color} style={estilo}></Button>
   );
 }
 


const Tablero = (props) => {
  const tablero = [];
  for (let i = 0; i < props.filas; i++) {
    const fila = [];
    for (let c = 0; c < props.columnas; c++) {
      let color;
      if (i === 0) {
        color = props.jugador[0]; // Color gris para la fila 0
      } else {
        color = color = "transparent"; // Color del jugador para las otras filas
      }
      fila.push(<Boton key={c} color={color} />);
    }
    tablero.push(<div key={i}>{fila}</div>);
  }
  return (
    <div>
      {tablero}
    </div>
  );
}




 class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      filas:7,
      columnas:7,
      vacio:true, //true vacio
      jugador:["secondary","primary","warning"], //  jugador 1 azul, jugador 2 amarillo
      ganador:true

    }
  }
  
  render() {
    return (
      <div className='juego'>
        <h1>4 EN RAYA</h1>
       <Button color={this.state.jugador[1]}>Es el turno del jugador</Button>
        <Tablero filas={this.state.filas} columnas={this.state.columnas}  vacio={this.state.vacio} jugador={this.state.jugador}/>
      </div>
    )
  }
}




export default App;
