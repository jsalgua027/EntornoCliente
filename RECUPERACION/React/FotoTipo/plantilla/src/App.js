import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FOTOTIPO from './componentes/Fototipos';
import PUNTUAJE from './componentes/Puntuacion';
import { Component } from "react";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cambio: true,
      contador: 0
    };
  }

  clicar = () => {
    let { contador } = this.state;
    contador++;
    if (contador ==7) {
      this.setState({ cambio: false });
    } else {
      this.setState({ contador });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.cambio ? (
          FOTOTIPO.map(e => (
            <>
              <p>{e.texto}</p>
              <p>
                {e.respuestas.map(p => (
                  <Button color="primary" onClick={()=>this.clicar()}>{p.valor}</Button>
                ))}
              </p>
            </>
          ))
        ) : (
          <h1>respuesta</h1>
        )}
      </div>
    );
  }
}

export default App;
