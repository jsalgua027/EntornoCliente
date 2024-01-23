import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{Component} from 'react';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      imagen:"/imagenes/si.png"
    }
  }
  si(){
    this.setState({imagen:"/imagenes/si.png"});
  }
  si(){
    this.setState({imagen:"/imagenes/no.png"});
  }


  render(){
    return (
      <div className="App">
       <Button>¿Funcionara?</Button>
      </div>
    );
  }
  
}

export default App;
