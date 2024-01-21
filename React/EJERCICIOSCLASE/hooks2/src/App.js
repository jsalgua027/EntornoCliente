
import React, { useState , useEffect, createContext, useContext} from 'react';
import './App.css';

function App() {
  {/*declaración [nombre, setter] = useState(valor inicial)*/ }
  const [contador, setContador] = useState(0)
  const aumenta=()=>{setContador(contador + 1)}

  useEffect(
      //vamos a darle una funcion y mostramos en el title de la pagina 
    ()=>{
      document.title="Hemos hecho click"+contador+"veces"
    }
  );
  // variable de CONTEXTO
  const UserContext=createContext();

  //pasar props a los componentes

  const[texto,seTexto]=useState("Alboran")

  const Componente2=(props)=>{
    return(
      <> 
       <h2>{props.texto}</h2>
       <Componente3 texto={props.texto}/>
      </>
    )

  };
  const Componente3=(props)=>{
    return(
      <> 
       <h2>{props.texto}</h2>
       <Componente4 texto={props.texto}/>
      </>
    )
  }
  const Componente4=()=>{
    const t=useContext(UserContext)
    return(
      <h2>Componente 4: {t}</h2>
    )

  }

  return (
    <div className="App">
      {/*Así se ponen comentarios*/}
      <h1>Hooks useState , useEffect</h1>
      <h2>Has hecho click {contador} veces</h2>
      <button onClick={() => aumenta()}>Clícame!</button>
      <button onClick={() => setContador(0)}>Reset</button>
      <br/>
      <UserContext.Provider value={texto}>
      <h1>Segunda parte</h1>
      <Componente2 texto={texto}/>
       </UserContext.Provider>



    </div>
  );
}

export default App;