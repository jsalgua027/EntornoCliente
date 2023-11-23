import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button,Spinner } from 'reactstrap';

const Circulo=(props)=>{
return(
<Spinner color={props.color} type="grow" onClick={()=>props.cambia()}/>
)
}

function Boton(props) {
return (
<Button color={props.color} onClick={()=>props.cambia()} outline>
{props.color}
</Button>
)
}
class App extends React.Component {
constructor(props) {
super(props);
this.state = {
letrero:"ninguno",
color: "secondary",
}
}
cambiaSecondary() {
this.setState({color:"secondary"})
}
cambiaDanger() {
this.setState({color:"danger"})
}
cambiaPrimary() {
this.setState({color:"primary"})
}
cambiaLetrero(){
this.setState({letrero:this.state.color})
}

render() {
return (
<div className="App">
<h1>{this.state.color}</h1>
<Circulo color={this.state.color} cambia={()=>this.cambiaLetrero()}/>
<Boton color="secondary" cambia={()=>this.cambiaSecondary()}/>
<Boton color="danger" cambia={()=>this.cambiaDanger()}/>
<Boton color="primary" cambia={()=>this.cambiaPrimary()}/>
</div>
);
}
}

export default App;