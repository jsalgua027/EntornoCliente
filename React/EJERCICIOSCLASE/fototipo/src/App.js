import logo from "./logo.svg";
import "./App.css";
import { Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import preguntasRespuestas from "./datos/preguntasRespuestas.json";

const ListaPreguntas = (props) => {
 

  return props.lista.map((elemento) => {
    return <div className="pregunta">
      <Pregunta  arrayRespuesas={elemento.respuestas} textoPregunta={elemento.pregunta} arrayValores={elemento.valorRespuesta}/>
    </div> 
  });
};

const Pregunta = (props) => {
  console.log(props.pre);
  return (
    <>
      <h2>{props.textoPregunta}</h2>
      {props.arrayRespuesas.map((elemento, indice) => {
        return <Button color="primary" valor={props.arrayValores[indice]} outline>{elemento} </Button>;
      })}
    </>
  );
}

const fotoTipoResultado=(props)=>{


}


function recojoDatos(event){
console.log(event+"--------Entra")

}

function App() {
  const listaPre = preguntasRespuestas.preguntas;

  

  return (
    <div className="App">
      <h1>Descubre tu fototipo</h1>
      <ListaPreguntas lista={listaPre} />
    </div>
  );
}

export default App;
