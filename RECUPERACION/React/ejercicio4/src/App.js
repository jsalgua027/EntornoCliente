import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import ListaUsuarios from "./componentes/ListaUsuarios";
import FormUsers from "./componentes/FormUsers";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "nacho", email: "nacho@gmail.com" },
        { id: 2, name: "sandro", email: "sandro@gmail.com" },
        { id: 3, name: "pepe", email: "pepe@gmail.com" },
      ],
    };
  }

  anadirUser(event){
    console.log("entra")
    event.preventDefault();
    let user={
      name:event.target.nombre.value,
      email:event.target.email.value
    };

    let aux=this.state.users;
    aux.push(user);
   
    this.setState({
      users:aux
    })

  }

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Me mola Myfpschool</h1>
          </header>
        </div>
        <div className="usuarios">
          <h2>Añade Usuarios</h2>

          <ListaUsuarios lista={this.state.users} />
          <FormUsers anadir={(e)=>this.anadirUser(e)} />
        </div>
      </>
    );
  }
}

export default App;
