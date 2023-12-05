import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Campo from "./componentes/Campo";
import Botonera from "./componentes/Botonera";
import SelectorMinas from "./componentes/SelectorMinas";
import Jugar from "./componentes/Jugar";
import "./App.css";

let minas = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filas:10,
      columnas:10,
      numeMinas:10,
      robot: { f: 0, c: 0 },
      campo: [],
      finalizado:false
    };
  }
  //jugar
  jugar(){
    let tabla=[]
    for (let i=0;i<this.state.filas;i++){
      let fila=[]
      for (let j=0;j<this.state.columnas;j++){
        fila.push(999)
      }
      tabla.push(fila)
    }
    //funcion de las minas
    // funcion distancia
    console.log(tabla)
    this.generarMinas(tabla);
    this.setState({campo:tabla})
  }
//gestiono la cantidad de minas
  aleatorio(min,max){
    var horquilla=max-min;
    return Math.floor(Math.random()*horquilla+min)

  }
  generarMinas(campo){
    let campito= JSON.parse(JSON.stringify(campo));
    let m =this.state.minas;
    while(m){
      let f= this.aleatorio(0,this.state.filas-1);
      let c= this.aleatorio(0,this.state.columnas-1)
      if(!(f==0&&c==0) && !(f==this.state.filas-1 && c==this.state.columnas-1)&& campito[f][c]){
        campito[f][c]=0;
        m--;
      }

    }
    
  }
  sumMina(){
    let p=document.getElementById("numeroMinas");
     let num= p.innerHTML
      num++;
      p.innerHTML=num;
      
    console.log(num);
  }
  resMina(){
    let p=document.getElementById("numeroMinas");
    let num= p.innerHTML
     num--;
     p.innerHTML=num;

  }
// gestiono el movimiento 

arriba(){
  console.log("arriba")
  let r = this.state.robot
  if(r.f>0) // controlo que no se salga del tablero
  r.f=r.f-1
  this.setState({robot:r})
}
abajo(){
  console.log("abajo")
  let a =this.state.robot
  if(a.f<this.state.campo.length-1) 
  a.f=a.f+1 //
  this.setState({robot:a})
}
izquierda(){
  console.log("izquierda")
  let i =this.state.robot
  if(i.c>0)
  i.c=i.c-1
  this.setState({robot:i})
}
derecha(){
  console.log("derecha")
  let d= this.state.robot
  if(d.c<this.state.campo[d.c].length-1)
  d.c=d.c+1
  this.setState({robot:d})
}


  render() {
    return (
      <div className="App">
        <h1>MineVancic</h1>
        <p>{this.state.robot.f}</p>
        <p>{this.state.robot.c}</p>
        <div className="confJuego"> 
        <SelectorMinas clickSubir={()=>this.sumMina()} clickBajar={()=>this.resMina()}></SelectorMinas>
        <Jugar jugar={()=>this.jugar()}/>
        </div>
       
        <Campo robot={this.state.robot} campo={this.state.campo} filas={this.state.filas} columnas={this.state.columnas}></Campo>
        <Botonera clickArriba={()=>this.arriba()} clickAbajo={()=>this.abajo()} clickIzquierda={()=>this.izquierda()} clickDerecha={()=>this.derecha()} ></Botonera>
      </div>
    );
  }
}

export default App;
