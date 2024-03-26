import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import React, { Component } from "react";

const Tablero = (props) => {
  const estilo = {
    border: "1px solid black", // Borde negro sólido
  };
  console.log(props.tabla);
  const tablero = [];
  for (let i = 0; i < props.filas; i++) {
    const fila = [];
    for (let c = 0; c < props.columnas; c++) {
      if (props.tabla[i][c]) {
        fila.push(
          <Button
            outline
            style={estilo}
            onClick={() => props.pulsar(i, c)}
          ></Button>
        );
      } else {
        fila.push(
          <Button
            color={props.jugador}
            estado={props.vacio}
            style={estilo}
            onClick={() => props.pulsar(i, c)}
          ></Button>
        );
      }
    }
    tablero.push(<div key={i}>{fila}</div>);
  }
  return <div>{tablero}</div>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: JSON.parse(
        JSON.stringify(Array(9).fill(Array(9).fill("x")))
      ),
      filas: 9,
      columnas: 9,
      jugador: ["secondary", "primary", "warning"], //  jugador 1 azul, jugador 2 amarillo
      ganador: true,
      turno: 1,
    };
  }

  clicar(i, c) {
    console.log(i, c);
    let listaAux = this.state.listaBotones;
    if (i == 0) {
      if (this.state.turno == 1) {
        // si es turno del jugador uno
        let posicion = this.encontrarVacio(c);
        if (posicion > 0) {
          listaAux[posicion][c] = "R";
          this.setState({ listaBotones: listaAux });
        }
        this.setState({ turno: 2 });
        //uso el metodo de encontrarrrrrrr
      } else {
        let posicion = this.encontrarVacio(c);
        if (posicion > 0) {
          listaAux[posicion][c] = "R";
          this.setState({ listaBotones: listaAux });
        }
        // si es turno del jugador 2
        this.setState({ turno: 1 });
      }
    } else {
      console.log("nada");
    }
  }
  encontrarVacio(c) {
    let lista = this.state.listaBotones;
    for (let i = 0; i < 9; i++) {
      if (lista[i][c] != "x") return i - 1;
    }
    return 8;
  }

  render() {
    return (
      <div className="juego">
        <h1>4 EN RAYA</h1>
        <Button color={this.state.jugador[1]}>
          Es el turno del jugador {this.state.turno}
        </Button>
        <Tablero
          tabla={this.state.listaBotones}
          filas={this.state.filas}
          columnas={this.state.columnas}
          jugador={this.state.jugador}
          pulsar={(i, c) => this.clicar(i, c)}
        />
      </div>
    );
  }
}

export default App;
