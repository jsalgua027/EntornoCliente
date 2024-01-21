import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

class Mi_primera_App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      saludo: "Esta aplicacion saluda en varios idiomas",
    };
  }
  mensajeIngles(){
    this.setState({saludo:"Hello"})
  }
  mensajeAleman(){
    this.setState({saludo:"Hallo"})
  }
  mensajeSueco(){
    this.setState({saludo:"Hej"})
  }
  mensajeEspanol(){
    this.setState({saludo:"Hola"})
  }


  render() {
    return (
      <div className="App">
          <br/>
          <br/>
        <h1>Mi primera APP traductor</h1>
        <br/>
        <Button onClick={()=>this.mensajeIngles()} color="primary" outline >
          Inglés
        </Button> {' '}
        <Button onClick={()=>this.mensajeAleman()} color="info" outline >
          Alemán
        </Button> {' '}
        <Button onClick={()=>this.mensajeSueco()} color="warning" outline >
          Sueco
        </Button> {' '}
        <Button onClick={()=>this.mensajeEspanol()} color="danger" outline >
          Español
        </Button>
        <br/>
        <br/>
        <br/>
        <h3>{this.state.saludo}</h3>
      </div>
    );
  }
}

export default Mi_primera_App;