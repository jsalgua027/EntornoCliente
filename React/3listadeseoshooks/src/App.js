import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


//Componente funcional UserList
const UserList=(props)=>{
 return(
   <div>
     {props.listaUsuarios.map((u)=>{
       return(
         <p key={u.id}>
           <span>{u.name} - {u.email}</span>
           <Button color='danger' 
           onClick={()=>props.f(u.id)}>Borrar</Button>

         </p>
       )
     })}
   </div>
 );
}

//Componente funcional formulario
const UserForm=(props)=>{
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");

 const handleClick = () => {
     props.f(name, email);
 }

 return (
     <div>
         <input placeholder='nombre' type='text' id='name' name='name' 
         onChange={event => setName(event.target.value)} />
         <input placeholder='email' type='text' id='email' name='email' 
         onChange={event =>setEmail(event.target.value)}/>
         <Button color='primary' onClick={handleClick}>Guardar</Button>
            </div>
 );
}




function App(){
 const[usuarios,setUsuarios]=useState([
   {id:1, name:"perico", email:"perico@gmail.com"},
   {id:2, name:"juanico", email:"juanico@gmail.com"},
   {id:3, name:"andres", email:"andres@gmail.com"},
   
 ]);




 const handleOnAddUser=(name,email)=>{
   let lista=[...usuarios];
   // let id=lista.length > 0 ? Math.max(...l.map(o => o.id)) + 1 : 1;
   let id=lista.length>0 ? (lista.length+1):1;

   let obj={id:id, name:name, email:email}

   lista.push(obj);
   console.log("Insertado: " + id);
   setUsuarios(lista);

 }

   const deleteUser=(id)=>{
     let lista=[...usuarios];
     lista=lista.filter(o => o.id !==id);
     console.log("Borrado: "+ id);

     setUsuarios(lista);
   }


   return (
   <div className="App">
      <header className="App-header">
       <h1>Lista de usuarios-hooks</h1>
        <img src={logo} className="App-logo" alt="logo"/>
       {/* imagen del logo de react */}
        <div>
        <p>Añade tu usuario: </p>
         <UserList listaUsuarios={usuarios} f={deleteUser}/>
         <UserForm f={(x,y)=>handleOnAddUser(x,y)}/>
        </div>
         
       </header>
   </div>
 );
 
 
}

export default App;



