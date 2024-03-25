import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import React, { Component } from 'react'



const Tablero=(props)=>{
  const tablero=[];
  for (let i = 0; i < props.filas; i++) {
    const fila=[]
    for (let c = 0; c < props.columnas; c++) {
      fila.push(<Boton jugador={props.jugador}/>)
      
    }
    tablero.push(<div>{fila}</div>);
  }
return(
  <div>
    {tablero}
  </div>
)

}

const Boton=(props)=>{

  return(
    <>
    <Button estado={props.vacio} color={props.jugador} ></Button>
    </>
  )
}



 class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      filas:7,
      columnas:7,
      vacio:true, //true vacio
      jugador:["primary","warning"], // jugador 1 azul, jugador 2 amarillo
      ganador:true

    }
  }
  
  render() {
    return (
      <div className='juego'>
        <h1>4 EN RAYA</h1>
       <Button color={this.state.jugador[0]}>Es el turno del jugador</Button>
        <Tablero filas={this.state.filas} columnas={this.state.columnas}  vacio={this.state.vacio} jugador={this.state.jugador[1]}/>
      </div>
    )
  }
}




export default App;
