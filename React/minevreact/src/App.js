import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Campo from "./componentes/Campo";
import Botonera from "./componentes/Botonera";
import SelectorMinas from "./componentes/SelectorMinas";
import Jugar from "./componentes/Jugar";
import "./App.css";
import Tablero from "./componentes/Campo";
import { Button } from "reactstrap";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tamanio: 10,
      numeMinas: 10,
      robot: { f: 0, c: 0 },
      campo: [[]],
      ganar: false,
      perder:false,
    };
  }
  //jugar/**/
  jugar() {

    let resultad = this.minas();
       this.setState({ campo: resultad });

 
  }
  premio(){
    if(this.state.robot.f==9 && this.state.robot.c==9){

      return <Button>Has ganado</Button>
     
    }

  }
  perder(){
    let x=this.state.robot.f;
    let y=this.state.robot.c;
    let valor=this.state.campo[x][y];
    console.log(valor);
    if(valor==1){

      return <Button>Has perdido</Button>
     
    }


  }
  
  sumMina() {
   
    let r = this.state.numeMinas + 1;
    this.setState({ numeMinas: r });
    
  }
  resMina() {
   
    let r = this.state.numeMinas - 1;
    this.setState({ numeMinas: r });
  }
 
minas() {
    let matriz=[];
    let contadorMinas=0;
    for (let x = 0; x < 10; x++) {
        matriz.push([]);
        for (let y = 0; y < 10; y++) {
            matriz[x].push(0);
        }
    }

    while (contadorMinas<this.state.numeMinas) {
        let x=Math.floor(Math.random()*10);
        let y=Math.floor(Math.random()*10);
        if(matriz[x][y]==0 && !(x==0 && y==0)){
            matriz[x][y]=1;
            contadorMinas++;
        }
        
    }
    let r=this.distancias(matriz)
    return r;
}

 distancias(matriz) {
    /*PLANTEAMIENTO: pregunto si la posi es 0, si lo es la distancia minima es 1
  y voy sumando distancias y preguntando si es 1 con la variable encontrado false. */
  //devo de crear una nueva matriz vacÃ­a para pasarle los nuevos valores
  let newmatriz = [];
  for (let fila = 0; fila < matriz.length; fila++) {
     //designo cols 
  
     newmatriz[fila] = [];
     for (let col = 0; col < matriz[fila].length; col++) {
         if (matriz[fila][col] == 1) {
             newmatriz[fila][col] = 1;
         } else {
             newmatriz[fila][col] = 0;
         }
     }
  }
  //recorro fila y columna
  for (let fila = 0; fila < matriz.length; fila++) {
     for (let col = 0; col < matriz[fila].length; col++) {
         //si el valor es 0
         if (matriz[fila][col] == 0) {
             let encontrado = false;
             let dist = 1;
             //X sea distinto de resultado, me lo ejecuta
              while (!encontrado) {
                 //con for me voy moviendo menos la distancia y hasta la distancia    
                 for (let k = fila - dist; k <= fila + dist; k++) {
                     for (let l = col - dist; l <= col + dist; l++) {
                         //Control no salirme****
                         if (k >= 0 && k < matriz.length && l >= 0 && l < matriz[fila].length) {
                             if (matriz[k][l] == 1) {
                                 newmatriz[fila][col] = dist + 1;
                                 encontrado = true;
                             }
                         }
                     }
                 }
                 dist++;
             }
         }
     }
  }
  return newmatriz;
  }
  // gestiono el movimiento

  arriba() {
    console.log("arriba");
    let r = this.state.robot;
    if (r.f > 0)
      // controlo que no se salga del tablero
      r.f = r.f - 1;
    this.setState({ robot: r });
  }
  abajo() {
    console.log("abajo");
    let a = this.state.robot;
    if (a.f < this.state.campo.length - 1) a.f = a.f + 1; //
    this.setState({ robot: a });
  }
  izquierda() {
    console.log("izquierda");
    let i = this.state.robot;
    if (i.c > 0) i.c = i.c - 1;
    this.setState({ robot: i });
  }
  derecha() {
    console.log("derecha");
    let d = this.state.robot;
    if (d.c < this.state.campo[d.c].length - 1) d.c = d.c + 1;
    this.setState({ robot: d });
  }

  render() {
    return (
      <div className="App">
        <h1>MineVancic</h1>
        <p>{this.state.robot.f}</p>
        <p>{this.state.robot.c}</p>
        <div className="confJuego">
          <SelectorMinas
            clickSubir={() => this.sumMina()}
            clickBajar={() => this.resMina()}
            numero={this.state.numeMinas}
          ></SelectorMinas>
          <Jugar jugar={() => this.jugar()} />
        </div>

        <Tablero
          robot={this.state.robot}
          campo={this.state.campo}
        ></Tablero>
        <Botonera
          clickArriba={() => this.arriba()}
          clickAbajo={() => this.abajo()}
          clickIzquierda={() => this.izquierda()}
          clickDerecha={() => this.derecha()}
        ></Botonera>
        {this.premio()};
        {this.perder()};
      </div>
    );
  }
}

export default App;
