
import  React ,{ useState } from 'react';

import User from './componentes/User';
import UserForm from './componentes/UserForm';

function App() {
  const[nombre, setNombre]=useState([
    { id: 1, nombre: "perico", correo: "perico@myfpschool.com" },
    { id: 2, name: "juanico", email: "juanico@myfpschool.com" },
    { id: 3, name: "andrés", email: "andrés@myfpschool.com" },
  ]);
  const[correo, setCorreo]=useState();
  

  return (
    <div className="App">
      <h1>Ejercicio 4 con hooks</h1>
      <UserForm/>
    </div>
  );
}

export default App;
