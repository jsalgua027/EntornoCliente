import React,{Component}from "react";
class EntraDatos extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

        <form  onSubmit={this.props.valores}>
            <p>
            <label>Cantidad</label>
            <input type="text" name="cantidad"></input>
            </p>
            <p>
            <label>Interes</label>
            <input type="text" name="interes"></input>
            </p>
            <p>
            <label>A devolver</label><br></br>
            <input type="text" name="anios"></input>
            <label>años</label>
            <input type="text" name="meses"></input>
            <label>meses</label>
            </p>
            <button>Calcular</button>  
        </form>
          
        );

    }
}
export default EntraDatos;