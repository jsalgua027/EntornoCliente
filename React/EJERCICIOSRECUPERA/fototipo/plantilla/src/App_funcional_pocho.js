// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap';
import { Component,useState } from "react";
import FOTOTIPO from './componentes/Fototipos';
import PUNTUAJE from './componentes/Puntuaje';

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
  <h6 className="alert-heading">{props.bloquePregunta.orden}-{props.bloquePregunta.texto}</h6>  
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

const Carta=(props)=>{
  let lista=props.puntuaje;
  console.log(lista);
  let puntos=props.puntos;
  console.log(puntos);
  //Me vas a buscar y a mostrar sólo el que coincida.
  // Buscar y mostrar solo el resultado que coincide.
  let resultado = lista.find((x) => puntos >= x.rangoInicio && (puntos <= x.rangoFin || x.rangoFin === null));
  // if (resultado) {
  //   console.log(resultado.tipo_piel);
  //   // Aquí puedes devolver o mostrar el resultado como necesites.
  //   return resultado.tipo_piel;
  // }
    

 return (<Card
  body
  color="warning"
  outline
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      {resultado.tipo_piel}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    Has obtenido una puntuación de: {puntos} puntos
    </CardSubtitle>
    <CardText>
      {resultado.descripcion}
    </CardText>
    
  </CardBody>
</Card>);
}
//Recibe la puntuación y busca en puntuaje cual está en ese rango, lo muestra en una carta.
const MuestraResultado=(props)=>{
let lista=props.puntuaje;
console.log(lista);
let puntos=props.puntos;
console.log(puntos);
//Me vas a buscar y a mostrar sólo el que coincida.
// Buscar y mostrar solo el resultado que coincide.
let resultado = lista.find((x) => puntos >= x.rangoInicio && (puntos <= x.rangoFin || x.rangoFin === null));
if (resultado) {
  console.log(resultado.tipo_piel);
  // Aquí puedes devolver o mostrar el resultado como necesites.
  return resultado.tipo_piel;
} else {
  console.log("No se encontró ningún resultado para los puntos dados.");
  // Aquí puedes manejar el caso en el que no se encuentre ningún resultado.
  return null;
}

}

const EnviarCuestionario=(props)=>{
  let array=props.arrayPuntos;
  console.log("Recibo: "+ array)
  //busco si existe algún valor sin rellenar. 
  let testCompleto=array.filter((v)=>v==-1).length==0;
  console.log("¿test completo?"+ testCompleto)


 return(<>
 <Button color="warning">Enviar cuestionario</Button>
 <span>{props.mensaje}</span>
 </>
 );
}

class App extends Component{
  constructor(props){
    super(props);
      this.state={
        fototipo:FOTOTIPO,
        puntosTotales:0,
        bloquear:false,
        arrayPuntos:Array(FOTOTIPO.length).fill(-1),//almaceno los puntos acumulados
        mensaje:'',
        puntuaje:PUNTUAJE,
      };
    }
    
//debo crear un array con el tamaño de las preguntas
    puntuar(p,numPreg){ 
      //quito 1 a la pregunta para poder rellenarla. 
      numPreg=numPreg-1;
    //  console.log("Recibo puntos:"+ p);
    //  console.log("Num preg "+ numPreg);
  
    const nuevoArray=this.state.arrayPuntos;
    // console.log("Viejo array: "+ nuevoArray)

    //busco si algún valor ha quedado sin rellenar.
    //me devuelve, si existe algun
    let testCompleto=(nuevoArray.filter((v)=>v==-1).length)<1;
    // console.log("se ha completado el cuestionario?, no hay -1"+ testCompleto);

    //si o si, permito que se pueda cambiar la respuesta,
    // solo al darle al botón enviar se enviará la respuesta para tramitarla.
    nuevoArray[numPreg]=p;
    //actualizo
    this.setState({arrayPuntos:nuevoArray});

     
    }
    /*
    deberes, quito el if y hago la condicion de buscar en el boton 
    */
   //boton enviar mira si están todas las respuestas para enviarlas a los resultados
   comprobarCompletado(){
    let array=this.state.arrayPuntos;
    console.log("Recibo: "+ array)
    //busco si existe algún valor sin rellenar. 
    let testCompleto=array.filter((v)=>v==-1).length==0;
    
    //console.log("¿test completo?"+ testCompleto)
    //si no es 0, el test le quedan preguntas por contestar
    if(!testCompleto){
      let aux="Quedan preguntas sin contestar";
      this.setState({mensaje:aux});
    }else{
      // let puntosTotales=this.obtenerPuntuacionFinal();
      // console.log("Puntos pasados:"+ puntosTotales)
      
      let sumaTotal=0;
      for (let i = 0; i < array.length; i++) {
       sumaTotal+=array[i];
      }
      console.log("Puntos totales: "+ sumaTotal)
      this.setState({mensaje:"Enviando..",
    puntosTotales:sumaTotal});
    }
  
  
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

   {/* <EnviarCuestionario 
   arrayPuntos={this.state.arrayPuntos}
   mensaje={this.state.mensaje}/> */}
   {" "}
   <Button color="warning" onClick={()=>this.comprobarCompletado()}>Enviar cuestionario</Button>
   
   <span>{this.state.mensaje}</span>
  
   <MuestraResultado 
   puntuaje={this.state.puntuaje}
   puntos={this.state.puntosTotales}
   />
   <Carta puntuaje={this.state.puntuaje}
   puntos={this.state.puntosTotales} />
    </div>
   
  );
  }
  
}

export default App;


