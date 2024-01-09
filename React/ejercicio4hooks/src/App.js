
import  React ,{ useState } from 'react';

import User from './componentes/User';
import UserForm from './componentes/UserForm';

function App() {
  const[nombre, setNombre]=useState();
  const[correo, setCorreo]=useState();
  
  return (
    <div className="App">
      <h1>Ejercicio 4 con hooks</h1>
      <UserForm/>
    </div>
  );
}

export default App;
