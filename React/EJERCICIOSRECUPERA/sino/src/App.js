import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{Component} from 'react';
import { Button } from 'reactstrap';

class App extends Component {

  render(){
    return (
      <div className="App">
       <Button>¿Funcionara?</Button>
      </div>
    );
  }
  
}

export default App;
