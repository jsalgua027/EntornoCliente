// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Component,useState } from "react";
import FOTOTIPO from './componentes/FOTOTIPO';

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
  <h4 className="alert-heading">{props.bloquePregunta.orden}-{props.bloquePregunta.texto}</h4>  
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

class App extends Component{
  constructor(props){
    super(props);
      this.state={
        fototipo:FOTOTIPO,
        totalPoints:0,
        bloquear:false,
        
        arrayPuntos:[],//almaceno los puntos acumulados

      };
    }
    componentDidMount(){
      this.crearArray();
    }

    crearArray(){
       //array con el tamaño
       let tam=this.state.fototipo.length;
     //  console.log("tam: "+ tam)
       let array=Array(tam).fill(-1);
    //   console.log(array)
      //  for (let i = 0; i < tam; i++) {
      //    array[i]=-1;
      //  }
       //console.log(array)
       this.setState({arrayPuntos:array})
       return array;
    }
//debo crear un array con el tamaño de las preguntas
    puntuar(p,numPreg){ 
      //quito 1 a la pregunta para poder rellenarla. 
      numPreg=numPreg-1;
     console.log("Recibo puntos:"+ p);
     console.log("Num preg "+ numPreg);
  
    const nuevoArray=this.state.arrayPuntos;
    console.log("Viejo array: "+ nuevoArray)

    //busco si algún valor ha quedado sin rellenar.
    //me devuelve, si existe algun
    let testCompleto=(nuevoArray.filter((v)=>v==-1).length)<1;
    console.log("existe algun valor -1?"+ testCompleto);

    if(!testCompleto){

 //si el valor que sustituye es -1 puedo
      if(nuevoArray[numPreg]==-1){
        nuevoArray[numPreg]=p;
        //console.log("sutituyo")
         //guardo el estado en el array
     this.setState({arrayPuntos:nuevoArray})
      }else{
        console.log("valor distinto, puede sustituir")
        nuevoArray[numPreg]=p;
       this.setState({arrayPuntos:nuevoArray})

      }
     console.log("nuevo array: "+ nuevoArray)


    }else{
      console.log("Has rellenado todas las preguntas")
     console.log("nuevo array: "+ nuevoArray)
     let sumaTotal=0;
     for (let i = 0; i < nuevoArray.length; i++) {
      sumaTotal+=nuevoArray[i];
       
     }
     console.log("puntos totales: "+ sumaTotal)
     
    }
     
    }
    /*
    deberes, quito el if y hago la condicion de buscar en el boton 
    */

    obtenerPuntuacionFinal(){
      let array=this.setState.arrayPuntos;
      console.log("tam"+ array.length)
      let sumaTotal=0;
      for (let i = 0; i < array.length-1; i++) {
       sumaTotal+=array[i];
        
      }
      console.log("puntos totales: "+ sumaTotal)
      return sumaTotal;
    }
  render(){
    return (
    <div className="App">

      {/* Componente bavBar, alert y carta final */}
     {this.state.fototipo.map((p,index)=>(
      <Alert key={index} 
      bloquePregunta={p} 
      puntuaje={(p,numPreg)=>this.puntuar(p,numPreg)}/>
     ))}

<Button color="warning">Obtener resultado</Button>
    </div>
   
  );
  }
  
}

export default App;


