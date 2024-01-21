import React from 'react';
class Conversor extends React.Component {
    constructor(props){
      super(props);
      this.state={
        euros:0,
        factorCambio:1.1,
  
      }
    }
    subir(){
      let aux= this.state.euros+1
      this.setState({euros:aux})
    }
    bajar(){
      let aux= this.state.euros-1
      this.setState({euros:aux})
    }
  
    render(){
      return (
        <div className="App">
         <h1>Conversor</h1>
         {this.state.euros} equivalen a {this.state.euros*this.state.factorCambio} 
         <br/>
         <button onClick={()=>this.subir()}>Aumentar</button>
         <button  onClick={()=>this.bajar()}>Disminuir</button>
           
        </div>
      );
    }
    
  }
  
  
  export default Conversor;
  