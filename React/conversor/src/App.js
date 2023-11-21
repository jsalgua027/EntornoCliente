import './App.css';
import {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      euros:0,
      factor:1.1,
    }
  }
  aumentar(){
    let auxeuro= this.state.euros+1;
    this.setState({euros:auxeuro})

  }
  disminuir(){
    let auxeuro= this.state.euros-1;
    this.setState({euros:auxeuro})

  }
  render(){
    return (
      <div className="App">
        {this.state.euros} Euros equivalen a  {this.state.euros*this.state.factor} dólares
        <button onClick={()=>this.aumentar()}>+</button> 
         <button  onClick={()=>this.disminuir()}>-</button>
      </div>
    
    );
  }
  }
  

export default App;

