import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FOTOTIPO from './componentes/Fototipos';
import PUNTUAJE from './componentes/Puntuacion';
import ListaPreguntas from './componentes/ListaPreguntas';
import Resultado from './componentes/Resultado';
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
      cambio: true, // variable para mostrar preguntas o la respuesta
      contador: 0,//contador para la función cliclar
      puntos: 0, // puntos totales obtenidos de la encuesta
      indicesUnicos:[],//array para limitar el uso de los botones
      puntuacion:PUNTUAJE // la uso para pasarle al componente Resultado toda la lista de puntos de Puntuacion.js
    };
  }

  clicar = (valor, indice) => {
    let { contador, indicesUnicos,puntos } = this.state;
  
    // Verificar si el índice ya está en la lista de índices únicos
    if (!indicesUnicos.includes(indice)) {
      // Si el índice no está en la lista, lo añadimos
      indicesUnicos.push(indice);
  
      // Actualizamos el estado con la lista actualizada de índices únicos
      this.setState({ indicesUnicos });
  
      // Incrementar el contador solo si el índice no está repetido
      contador++;
      puntos += valor;
  
      if (contador === 7) {
        this.setState({ cambio: false });
      } else {
        this.setState({ contador,puntos });
      }
    }
  
    console.log(valor + "-" + indice);  //comprobación de que valores recibo
  };
  

  render() {
    return (
      <div className="App">
        {this.state.cambio ? (
                    
       
        <p>
         <ListaPreguntas lista={FOTOTIPO} clicar={(e,v)=>this.clicar(e,v)}/>
        </p>
        
        ) : (
          <div className='respuesta'>
             <h1>Respuesta</h1>
              <Resultado className="card" lista={this.state.puntuacion} puntos={this.state.puntos}></Resultado>
         </div>
         
        )}
      </div>
    );
  }
}

export default App;
