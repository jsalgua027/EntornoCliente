import React, { Component } from "react";
import Flashcard from "./componentes/FlashComponent";
import GODOS from "./datos/Reyes";

function DisplayGodos(props) {
  const losreyes = props.reyes;
  const lista = losreyes.map((rey) => (
    <Flashcard
      key={rey.id.toString()}
      imagen={rey.imagen}
      titulo={rey.nombre}
      texto={rey.texto}
    />
  ));
  return <ul>{lista}</ul>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      godos: GODOS,
    };
  }

  render() {
    return (
      <div className="App">
         <DisplayGodos reyes={this.state.godos} /> 
        {/* Flashcard
          imagen={GODOS[2].imagen}
          titulo={GODOS[2].nombre}
          texto={GODOS[2].texto}
        /> */}
        
      </div>
    );
  }
}

export default App;
