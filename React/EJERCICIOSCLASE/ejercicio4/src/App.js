import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import UserList from "./componentes/UserList";
import User from "./componentes/User";
import UserForm from "./componentes/UserForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: 1, name: "perico", email: "perico@myfpschool.com" },
        { id: 2, name: "juanico", email: "juanico@myfpschool.com" },
        { id: 3, name: "andrés", email: "andrés@myfpschool.com" },
      ],
    };
  }
  handleOnAddUser(event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value,
    };
    let tmp = this.state.users;
    tmp.push(user);
    this.setState({
      users: tmp,
    });
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
          </p>
          <UserList users={this.state.users} />
          <UserForm onAddUser={(e)=>this.handleOnAddUser(e)} />
        </div>
      </div>
    );
  }
}

export default App;
