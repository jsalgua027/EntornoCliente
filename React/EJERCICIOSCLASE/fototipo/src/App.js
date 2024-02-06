import logo from './logo.svg';
import './App.css';
import preguntasRespuestas from "./datos/preguntasRespuestas.json";
 
const PreguntasCompleta=(props)=>{
               
 return(
  <>
   {props.lista.map(e=>(<h2>{e.pregunta}</h2>))}


  </>
 ) 
  }




function App() {
  const listaPre=preguntasRespuestas.preguntas

  
  return (
    <div className="App">
   
<PreguntasCompleta lista={listaPre}/>
    </div>
  );
}

export default App;
