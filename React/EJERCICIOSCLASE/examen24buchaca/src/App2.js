import React, { Component } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MapaBotones = (props) => {
  let lista = JSON.parse(JSON.stringify(props.listaBotones));
  let tablero = [];
  for (let i = 0; i < lista.length; i++) {
    let fila = [];
    for (let j = 0; j < lista[0].length; j++) {
      //relleno de botones
      fila.push(
        <Button
          key={i + 100 * j}
          outline={props.listaBotones[i][j].outline}
          color={props.listaBotones[i][j].col}
          onClick={() => props.hacerClick(i, j)}
        />
      );
    }
    tablero.push(fila);

    tablero.push(<br />);
    console.log(tablero);
  }
  return tablero;
};

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
      // no se puede modificar el state
    };
  }

  clica(x, y) {
    // x se supone que la columna, y la fila
    if (x !== 0) return; //si es fila diferente a cero no funciona
    //hago copia en profundidad
    let aux = JSON.parse(JSON.stringify(this.state.listaBotones));
    let tam = aux.length - 1;
    let esValido = false;
    //mientras sea falso o el tamaño mayor o cero
    while (!esValido && tam >= 0) {
      //mientras que la fila este por dentro del tamaño
      if (aux[tam][y].outline === true) {
        //relleno del color
        aux[tam][y] = { col: "primary", outline: false };
        //si es ok, cambia
        esValido = true;
      }
      //resta para que sepa cual es la fila ultima donde hay casilla
      tam--;
    }
    this.setState({ listaBotones: aux });
  }
  componentWillMount() {
    // aquí es donde creo las nueve columnas con los datos iniciales.
    //si hago copia con JSON.parse falla no se porque
    let lista = this.state.listaBotones;
    let tam = 9;
    for (let i = 0; i < 9; i++) {
      //relleno la lista
      lista[i] = Array(9).fill({ outline: true });
    }
    this.setState({ listabotones: lista });
  }

  //comienza de nuevo
  reset() {
    //hago copia en profundidad de la lista
    let lista = JSON.parse(JSON.stringify(this.state.listaBotones));
    for (let i = 0; i < 9; i++) {
      //relleno con casillas vacias
      lista[i] = Array(9).fill({ outline: true });
    }
    //actualizo
    this.setState({ listaBotones: lista });
  }

  render() {
    return (
      <div className="App">
        <h1> BUCHACA </h1>
        <MapaBotones
          listaBotones={this.state.listaBotones}
          hacerClick={(x, y) => this.clica(x, y)}
        />
        <Button onClick={() => this.reset()}>Reset</Button>
      </div>
    );
  }
}

export default App2;
