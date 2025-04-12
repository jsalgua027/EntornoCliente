import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Button } from "reactstrap";

const MapaBotones = (props) => {
  let lista = [];
  for (let i = 0; i < props.listaBotones.length; i++) {
    let fila = [];
    for (let j = 0; j < props.listaBotones[i].length; j++) {
      if (props.listaBotones[i][j] === "-") {
        fila.push(
          <Button   className="boton" key={i + 100 + j} outline onClick={() => props.clica(i, j)}></Button>
        );
      } else {
        fila.push(
          <Button
            key={i + 100 + j}
              className="boton"
            color={props.listaBotones[i][j]}
            onClick={() => props.clica(i, j)}
          />
        );
      }
    }
    fila.push(<br />);
    lista.push(fila);
  }
  return lista;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: JSON.parse(
        JSON.stringify(Array(9).fill(Array(9).fill("-")))
      ),
      listaColores: ["primary", "danger"],
      titulo: "Azules",
      turno: true,
      jugable: true,
    };
  }

  findPos(y) {
    for (let i = 0; i < 9; i++) {
      if (this.state.listaBotones[i][y] != "-") return i - 1;
    }
    return 8;
  }

  ganador() {
    let l = this.state.listaBotones;
    //compruebo ganador horizontal
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9 - 3; j++) {
        if (
          l[i][j] != "-" &&
          l[i][j + 1] == l[i][j] &&
          l[i][j + 2] == l[i][j] &&
          l[i][j + 3] == l[i][j]
        ) {
          //ganador
          if (l[i][j] == "primary")
            this.setState({ titulo: "GANAN LOS AZULES", jugable: false });
          else this.setState({ titulo: "GANAN LOS ROJOS", jugable: false });
        }
      }
    }
    // compruebo ganador vertical
    for (let i = 0; i < 9 - 3; i++) {
      for (let j = 0; j < 9; j++) {
        if (
          l[i][j] != "-" &&
          l[i + 1][j] == l[i][j] &&
          l[i + 2][j] == l[i][j] &&
          l[i + 3][j] == l[i][j]
        ) {
          //ganador
          if (l[i][j] == "primary")
            this.setState({ titulo: "GANAN LOS AZULES", jugable: false });
          else this.setState({ titulo: "GANAN LOS ROJOS", jugable: false });
        }
      }
    }
  }

  clica(x, y) {
    if (!this.state.jugable) return;
    if (x !== 0) return;

    let l = this.state.listaBotones;
    let p = this.findPos(y);
    if (p >= 0) {
      if (this.state.turno) l[p][y] = this.state.listaColores[0];
      if (!this.state.turno) l[p][y] = this.state.listaColores[1];
    } else {
      return;
    }

    // cambiar turno
    let t = "Azules";
    if (this.state.turno) t = "Rojos";
    this.setState({ listaBotones: l, turno: !this.state.turno, titulo: t });
    this.ganador();
  }

  render() {
    return (
      <div className="App">
        <h1>BIENVENIDO A CONECTA 4</h1>
        <h2>Turno {this.state.titulo}</h2>
        <div className="tablero">
          <MapaBotones
            listaBotones={this.state.listaBotones}
            clica={(x, y) => this.clica(x, y)}
          />
        </div>
      </div>
    );
  }
}

export default App;
