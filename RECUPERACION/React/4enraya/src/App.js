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
      if (props.tabla[i][c] === "x") {
        fila.push(
          <Button
            outline
            style={estilo}
            onClick={() => props.pulsar(i, c)}
          ></Button>
        );
      }
      if (props.tabla[i][c] === "1") {
        fila.push(
          <Button
            color={props.colores[0]}
            style={estilo}
            onClick={() => props.pulsar(i, c)}
          ></Button>
        );
      }
      if (props.tabla[i][c] === "2") {
        fila.push(
          <Button
            color={props.colores[1]}
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
      colores: ["primary", "warning"], //  jugador 1 azul, jugador 2 amarillo
      ganador: true,
      turno: 1,
      jugando: true,
      titulo:""
    };
  }

  clicar(i, c) {
    console.log(i, c);
    if(!this.state.jugando) return;
    let listaAux = this.state.listaBotones;
    if (i == 0) {
      if (this.state.turno == 1) {
        // si es turno del jugador uno
        let posicion = this.encontrarVacio(c);
        if (posicion > 0) {
          listaAux[posicion][c] = "1";
        }
        this.setState({ turno: 2 }); // cambio de turno al 2
      } else {
        let posicion = this.encontrarVacio(c);
        if (posicion > 0) {
          listaAux[posicion][c] = "2";
        }
        // cambio de turno al 1
        this.setState({ turno: 1 });
      }
      // actualizo el estado de la lista
      this.setState({ listaBotones: listaAux });
      // aqui vou a llamar al metodo ganador
      this.quienGana();
    } else {
      //si cliclo fiera de la fila 0
      console.log("nada");
    }
  }

  quienGana() {
    let mapaGanador = this.state.listaBotones;
    //gandor en horizontal
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9 - 3; j++) {
        if (
          mapaGanador[i][j] != "x" &&
          mapaGanador[i][j] == mapaGanador[i][j + 1] &&
          mapaGanador[i][j] == mapaGanador[i][j + 2] &&
          mapaGanador[i][j] == mapaGanador[i][j + 3]
        ) {
          if (mapaGanador[i][j] == "1") {
            this.setState({ titulo: "Ganan los azules", jugando: false });
          } else {
            this.setState({ titulo: "Ganan los amarillos", jugando: false });
          }
        }
      }
    }

    //ganador en vertical
    for (let i = 0; i < 9 - 3; i++) {
      for (let j = 0; j < 9; j++) {
        if (
         mapaGanador[i][j] != "x" &&
         mapaGanador[i][j] ==mapaGanador[i + 1][j] &&
         mapaGanador[i][j] ==mapaGanador[i + 2][j] &&
         mapaGanador[i][j] ==mapaGanador[i + 3][j]
        ) {
          if (mapaGanador[i][j] == "1") {
            this.setState({ titulo: "Ganan los azules", jugando: false });
          } else {
            this.setState({ titulo: "Ganan los amarillos", jugando: false });
          }
        }
      }
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
        <Button color={this.state.colores[this.state.turno - 1]}>
          Es el turno del jugador {this.state.turno}
        </Button>
        <Tablero
          tabla={this.state.listaBotones}
          filas={this.state.filas}
          columnas={this.state.columnas}
          jugador={this.state.turno} // Pasamos el número de turno
          pulsar={(i, c) => this.clicar(i, c)}
          colores={this.state.colores} //paso los colores
        />
        <h2>El ganador es: {this.state.titulo}</h2>
      </div>
    );
  }
}

export default App;
