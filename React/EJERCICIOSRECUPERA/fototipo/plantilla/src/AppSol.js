// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Component, useState } from "react";
import FOTOTIPO from './componentes/Fototipos';
import PUNTUAJE from './componentes/Puntuaje';
import {PHPCONEXION} from './componentes/Datos';
import axios from 'axios';

// import Alert from './componentes/Cuestionario';
import Carta from './componentes/CartaResultado';
import MuestraResultado from './componentes/MuestraResultado';

const Alert=(props)=>{
  const [seleccionado,setSeleccionado]=useState('');
  //const [contestado,setContestado]=useState(false);
  
  //le paso el index y los puntos
  const enviar=(puntos)=>{
    let numPreg=props.bloquePregunta.orden;

//console.log("pregunta nº: "+numPreg)
    //if(contestado==false){}
setSeleccionado(puntos);
//console.log("entra en metodo enviar ->" + puntos)
    props.puntuaje(puntos,numPreg);
    //setContestado(true);
  }
  return(
    <>
  <h6 className="alert-heading">{props.bloquePregunta.orden}-{props.bloquePregunta.texto}</h6>  
  <hr />
  <p className="mb-0">
    {/* Recorro con un map el bloque preguntas */}
    {props.bloquePregunta.respuestas.map((resp,index)=>(
      <Button key={index} 
      color={seleccionado === resp.puntos ? "danger": "outline-danger"}
      onClick={()=>enviar(resp.puntos)}
     >
     {resp.valor}
    </Button>
    ))}
   
  </p>
</>
  );
}


const EnviarCuestionario = (props) => {
  let array = props.arrayPuntos;
  console.log("Recibo: " + array)
  //busco si existe algún valor sin rellenar. 
  let testCompleto = array.filter((v) => v == -1).length == 0;
  console.log("¿test completo?" + testCompleto)

  return (<>
    <Button color="warning">Enviar cuestionario</Button>
    <span>{props.mensaje}</span>
  </>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fototipo: FOTOTIPO,
      puntosTotales: 0,
      //si esta a false, se visualiza el test, cuando
      //esta full a true
      testCompletado: false,
      arrayPuntos: Array(FOTOTIPO.length).fill(-1),//almaceno los puntos acumulados
      mensaje: '',
      puntuaje: PUNTUAJE,

    };
  }

  //debo crear un array con el tamaño de las preguntas
  puntuar(p, numPreg) {
    //quito 1 a la pregunta para poder rellenarla. 
    numPreg = numPreg - 1;
    //  console.log("Recibo puntos:"+ p);
    //  console.log("Num preg "+ numPreg);

    const nuevoArray = this.state.arrayPuntos;
    // console.log("Viejo array: "+ nuevoArray)

    //busco si algún valor ha quedado sin rellenar.
    //me devuelve, si existe algun
    let testCompleto = (nuevoArray.filter((v) => v == -1).length) < 1;
    // console.log("se ha completado el cuestionario?, no hay -1"+ testCompleto);

    //si o si, permito que se pueda cambiar la respuesta,
    // solo al darle al botón enviar se enviará la respuesta para tramitarla.
    nuevoArray[numPreg] = p;
    //actualizo
    this.setState({ arrayPuntos: nuevoArray });


  }

  //boton enviar mira si están todas las respuestas para enviarlas a los resultados
  comprobarCompletado() {
    let array = this.state.arrayPuntos;
    console.log("Recibo: " + array)
    //busco si existe algún valor sin rellenar. 
    let testCompleto = array.filter((v) => v == -1).length == 0;

    //console.log("¿test completo?"+ testCompleto)
    //si no es 0, el test le quedan preguntas por contestar
    if (!testCompleto) {
      let aux = "Quedan preguntas sin contestar";
      this.setState({ mensaje: aux });
    } else {
      // let puntosTotales=this.obtenerPuntuacionFinal();
      // console.log("Puntos pasados:"+ puntosTotales)
      let sumaTotal = 0;
      for (let i = 0; i < array.length; i++) {
        sumaTotal += array[i];
      }
      console.log("Puntos totales: " + sumaTotal)
      this.setState({
        mensaje: "Enviando..",
        testCompletado: true,
        puntosTotales: sumaTotal
      });
    }


  }
 


  render() {
    let obj = <>
      {this.state.fototipo.map((p, index) => (
        <Alert key={index}
          bloquePregunta={p}
          puntuaje={(p, numPreg) => this.puntuar(p, numPreg)} />
      ))}
      {" "}
      <Button color="warning" onClick={() => this.comprobarCompletado()}>Enviar cuestionario</Button>
      <span>{this.state.mensaje}</span>
    </>;
    if (this.state.testCompletado == true) {
      obj = <>
        <MuestraResultado
          puntuaje={this.state.puntuaje}
          puntos={this.state.puntosTotales}
        />
        <Carta puntuaje={this.state.puntuaje}
          puntos={this.state.puntosTotales} />
      </>;
    }
    return (
      <div className="App">
        {obj}
      </div>

    );
  }

}

export default App;


