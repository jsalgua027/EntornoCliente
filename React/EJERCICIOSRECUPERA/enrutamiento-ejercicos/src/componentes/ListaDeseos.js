import React, { Component } from "react";

import UserList from "./UserList";
import UserForm from "./UserForm";
class ListaDeseos extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: 1, name: "perico", email: "perico@gmail.com" },
        { id: 2, name: "nacho", email: "nacho@gmail.com" },
        { id: 1, name: "juan", email: "juan@gmail.com" },
      ],
    };
  }
  handleOnAddUser(event) {
    event.preventDefault(); // evito que el navegador se refresque
    console.log("entra");
    let user = {
      // creo un usuario y le paso los datos que recibe del formulario por el event
      name: event.target.name.value,
      email: event.target.email.value,
    };
    console.log(user);
    // copio la lista de usuarios del estado
    let tmp = this.state.users;
    tmp.push(user); // le meto el nuevo usuario a la copia de la lista
    // cambio el estado y le añado la nueva lista
    this.setState({ users: tmp, });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
         
          <h2>Me mola Myfpschool</h2>
        </div>
        <div>
          <p>
            <strong>Añade usuarios</strong>
            <UserList users={this.state.users} />
            <UserForm onAddUser={(e) => this.handleOnAddUser(e)} />
            {/** conecto el formulario con el metodo que recibe los datos*/}
          </p>
        </div>
      </div>
    );
  }
}
export default ListaDeseos;
