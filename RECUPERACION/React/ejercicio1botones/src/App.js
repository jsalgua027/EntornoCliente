import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button , Spinner} from 'reactstrap'
import React, { Component } from "react";import Boton from './componentes/Boton';
;





class app  extends Component {
  constructor(props) {
    super(props);
   this.state={
    color:"secondary",
    index:1
   }
  }
  cambiaSecondary(){  
      this.setState({color:"secondary",
    index:2})
  }
  cambiaDanger() {
    this.setState({color:"danger", index:6})
    }
    cambiaPrimary() {
    this.setState({color:"primary", index:1})
    }

    cambiaSuccess() {
      this.setState({color:"success", index:3})
      }


      cambiaInfo() {
        this.setState({color:"info", index:4})
        }

        cambiaWarning() {
          this.setState({color:"warning", index:5})
          }
  

  render() { 
    return (   
      <>
        
        <Boton  color= "primary"  cambia={()=>this.cambiaPrimary()} ></Boton>
        <Boton  color= "secondary" cambia={()=>this.cambiaSecondary()}  ></Boton>
        <Boton color= "success" cambia={()=>this.cambiaSuccess()} ></Boton>
        <Boton  color= "info"  cambia={()=>this.cambiaInfo()}></Boton>
        <Boton  color= "warning" cambia={()=>this.cambiaWarning()}></Boton>
        <Boton   color= "danger"  cambia={()=>this.cambiaDanger()}></Boton> 
        <div> <Spinner color={this.state.color} type="grow" /></div>
        <h1>El ultimo pulsado es: {this.state.index}</h1>
       
      </>
    );
  }
}
 
export default app;
