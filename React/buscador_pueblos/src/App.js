import {useState} from 'react';
import './App.css';
import ListadoPueblos from './Componentes/ListadoPueblos';
import LisPueblos from './Componentes/ListadoPueblos';
import Buscador from './Componentes/Buscador';
function App() {
  const [listadoPueblos, setListadoPueblos]=useState([
    {
      "nombre": "Alicante",
      "habitantes": 30000
    },
    {
      "nombre": "Albacete",
      "habitantes": 25000
    },
    {
      "nombre": "Almería",
      "habitantes": 28000
    },
    {
      "nombre": "Barcelona",
      "habitantes": 500000
    },
    {
      "nombre": "Burgos",
      "habitantes": 18000
    },
    {
      "nombre": "Cáceres",
      "habitantes": 22000
    },
    {
      "nombre": "Cádiz",
      "habitantes": 35000
    },
    {
      "nombre": "Castellón",
      "habitantes": 27000
    },
    {
      "nombre": "Córdoba",
      "habitantes": 30000
    },
    {
      "nombre": "Cuenca",
      "habitantes": 16000
    },
    {
      "nombre": "Girona",
      "habitantes": 23000
    },
    {
      "nombre": "Granada",
      "habitantes": 32000
    },
    {
      "nombre": "Guadalajara",
      "habitantes": 19000
    },
    {
      "nombre": "Huelva",
      "habitantes": 26000
    },
    {
      "nombre": "Jaén",
      "habitantes": 28000
    },
    {
      "nombre": "León",
      "habitantes": 21000
    },
    {
      "nombre": "Lleida",
      "habitantes": 24000
    },
    {
      "nombre": "Logroño",
      "habitantes": 17000
    },
    {
      "nombre": "Lugo",
      "habitantes": 20000
    },
    {
      "nombre": "Madrid",
      "habitantes": 700000
    }
  ]
  )
  return (
    <div className="App">
      <h1>Buscador de pueblos</h1>
   <LisPueblos poblacion={listadoPueblos}></LisPueblos>
   <Buscador></Buscador>
    </div>
  );
}

export default App;
