import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FOTOTIPO from './componentes/Fototipos';
import PUNTUAJE from './componentes/Puntuacion';
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

function App() {
  return (
    <div className="App">
    {FOTOTIPO.map(e=>{

    return(
      <>
      <p>{e.texto}</p>
      <p>{e.respuestas.map(p=>{
        return(<Button>{p.valor}</Button>)
      })}</p>
      </>
   
   
  
  )  

    })}
    </div>
  );
}

export default App;
