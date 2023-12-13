import logo from "./logo.svg";
import "./App.css";
import React, { Component } from 'react';
import UserList from './componentes/UserList';
import User from "./componentes/User";

class App extends React.Component {
  constructor(){

    super();
    this.state = {
    users: [
    {id: 1, name: "perico", email: "perico@myfpschool.com"},
    {id: 2, name: "juanico", email: "juanico@myfpschool.com"},
    {id: 3, name: "andrés", email: "andrés@myfpschool.com"}
    ]
    };
  }
  render(){
    return (
      <div className="App">
        <div className="App-header">
                <h2>Me mola Myfpschool</h2>
        </div>
        <div>
          <p>
            <strong>Añade usuarios</strong>
          </p>
        </div>
      </div>
    );
  }
 
}

export default App;
