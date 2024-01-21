import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import AppLogin from "./componentes/AppLogin";
import Menu from "./componentes/Menu";
import React from "react";

class App extends React.Component {
  //si logged es falso muestro el menu sino muestro el otro
  constructor(props) {
    super(props);
    this.state = {
      menuItem: "DOS" ,
      logged:false,
    
    };
  }

  cambiarMenu(e) {
    this.setState({menuItem:e})
  
 };
 //si metemos los datos correctos logge lo pasamos a true y mostramos el menu de botones
 userLogin(telefono, password){
  if(telefono=="admin" && password=="1234"){
    this.setState({logged:true})
  }

 }
  render() {
     let obj=<> <Menu menuItem={this.state.menuItem}  changeMenu={(e)=>this.cambiarMenu(e)}/></>
     if(!this.state.logged){
      obj=<AppLogin userLogin={(telefono,password)=>this.userLogin(telefono,password)}/>
     }
    return (
      <div className="App">
       {obj}
        
      </div>
    );
  }
}

export default App;
