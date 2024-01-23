
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{Component} from 'react';
import { Button } from 'reactstrap';
import Sino from './Sino';


class SinoApp extends Component {
  constructor(props){
    super(props);
    this.state={
      imagen:"./imagenes/si.png"
    }
  }
  si(){
    this.setState({imagen:"./imagenes/si.png"});
  }
  no(){
    this.setState({imagen:"./imagenes/no.png"});
  }


  render(){
    return (
      <div className="App">
       
       <Sino
       imagen={this.state.imagen}
       titulo="Si o No"
       textobotonSi="Oh Si"
       textobotonNo="Oh No"
       onClickSi={()=>this.si()}
       onClickNo={()=>this.no()}
       />
         
      </div>
    );
  }
  
}

export default SinoApp;
