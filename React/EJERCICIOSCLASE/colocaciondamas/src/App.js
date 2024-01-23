import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Botonera(props){
//COMPONENTE QUE RENDERIZA EL TABLERO
}
class App extends Component {
constructor(props) {//DAMAS. EXAMEN REACTJS.
super(props);
this.state = {
//DEFINE EL ESTADO DE TU COMPONENTE PRINCIPAL
//Recuerda que si defines una tabla 8x8 tu estado será inválido.
listadoBotones:Array[8]

};
}
componentWillMount() {
//ESTE MÉTODO SE EJECUTARÁ AL PRINCIPIO DE LA APLICACIÓN. ANTES DE RENDERIZAR.
console.log("hola")
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 4; j++) {
   
    
  }
  
}

}
render() {
return (
<div className="App">
<header className="App-header">
<Botonera lista={this.state.listadoBotones}/>
</header>
</div>
);
}
}
export default App;