import React, { Component } from "react";
import Sino from "./componentes/sino";
import Flashcard from "./componentes/flashcardComponent";
import "bootstrap/dist/css/bootstrap.min.css";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagen: "/assets/images/surf1.jpg",
    };
  }

  f(param) {
    this.setState({ imagen: param });
  }

  render() {
    const lista =GODOS.map(
      (rey)=> <Flashcard 
                  key={rey.id}
                  imagen={rey.imagen}
                  titulo={rey.nombre}
                  texto={rey.texto}
               />
    );
    return (
      <div className="App">
       {lista}
      </div>
    );
  }
}

export default App;
/*
Para que funcione sino
<div className="App">
        <Sino
          imagen={this.state.imagen}
          imagenSi="/assets/images/surf1.jpg"
          imagenNo="/assets/images/surf2.jpg"
          Titulo="Yes or Not"
          textobotonSI="Oh yes!"
          textobotonNO="Oh no!"
          onClick={(x) => this.f(x)}
        />
      </div>
    );*/
