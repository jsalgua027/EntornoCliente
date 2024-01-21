
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import React,{useState,useEffect} from "react";

//Componente funcional ItenLista
const ItemList=(props)=>{
  return(
    <ul>
      {props.listaItems.map((d,index)=>(
        <li key={index}>
         {d} 
        {/* <Borrar deseo={d} quitar={(e)=>props.quitar(e)}/> */}
        <Button onClick={()=>props.quitar(d)} color="danger">X</Button>
        </li>
      )
      )}
    </ul>
  );

}

//Componente funcional de boton Borrar
const Borrar=(props)=>{
 return(
  <Button onClick={()=>props.quitar(props.deseo)} color="danger">X</Button>
 );
}

//Componente funcional deseo
const Input=(props)=>{
  const[item,setItem]= useState("");
  const handleInputChange=(event)=>{
    setItem(event.target.value);
  };
  return(
    <form onSubmit={(e)=>props.onAddItem(e,item)}>
      <input 
      type="text" placeholder="Escribe aquí tu deseo" name="deseo"
      value={item} onChange={(e)=>handleInputChange(e)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}



//Componente funcional App
function App () {
  const[listaItems,setListaItems]=useState(["GAMBAS","JAMÓN"]);
  const[mensaje,setMensaje]=useState("");

  function quitar(element){
    let aux=listaItems.filter((i)=>i !==element);
    setListaItems(aux);
    console.log("Item borrado: "+ aux);
  };

  const handleAddItem=(event,nuevo)=>{
    event.preventDefault();
    const aux=[...listaItems];

    let repetido=aux.filter((e)=>e===nuevo).length>0;

    if(repetido){
      console.log("item rep");
      setMensaje("item repetido");
    }
    else if(nuevo.trim() ===""){
      setMensaje("campo vacío");
    }else{
      aux.push(nuevo);
      setListaItems(aux);
      setMensaje("");
    }
  };

    return (
      <div className="App">
        <header className="App-header">
        <h1>Lista de listaItems-hooks</h1>
         <img src={logo} className="App-logo" alt="logo"/>
        {/* imagen del logo de react */}
         <div>
         <p>Añade tu regalo: </p>
         <ItemList listaItems={listaItems}
         quitar={(e)=>quitar(e)} />
         <Input onAddItem={(e,deseo)=>handleAddItem(e,deseo)}/>
         <p>{mensaje}</p>

         </div>
          
        </header>
      </div>
    );
  }


export default App;
