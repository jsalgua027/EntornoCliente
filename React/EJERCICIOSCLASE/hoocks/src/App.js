
import {useState,useEffect,useContext,createContext} from 'react';

 //useContext createContext
 const UserContext=createContext();



const App=()=>{
  // creo el hook con el nombre que quiera con su setter y lo igualo al useState. se puede poner un valos por defecto useState("Nacho salcedo")
  const[nombre,setNombre]=useState("Nacho Salcedo");
 
  return(
    <UserContext.Provider value={nombre}>
    <div>
    <h1>{nombre}</h1>
    <Componente2 />
    </div>
    </UserContext.Provider>
  );

}
const Componente2=()=>{
 const n=useContext(UserContext)
  return(
    <div>
    <h1> Componente2: {n}</h1>
   <Componente3 nombre={n}/>
    </div>
  
  )
}
const Componente3=(props)=>{

  return(
    <div>
    <h1> Componente3:{props.nombre}</h1>
    <Componente4 nombre={props.nombre}/>
    </div>
  )

}
const Componente4=(props)=>{
  return(
        <h1> Componente4:{props.nombre}</h1>
   
  )

}


export default App;
/*
HOOCKS BASICOS
function App() {
  const[contador,setContador]=useState(0);
  const[doble,setDoble]=useState(0);

  const aumenta=()=>{
    setContador(contador+1)
    setDoble((contador+1)*(contador+1))
  }
  useEffect(//cada renderizado llama al useEffect
    ()=>{
      console.log("Modificado")
    }
  );
  return (
    <div className="App">
      <h1>Has clicado {contador} veces</h1>
      <h1>El doble es: {doble} veces</h1>
      <button onClick={()=>aumenta()}>Dale</button>
    </div>
  );
}

export default App;



*/ 