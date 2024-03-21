import PrintDeseo from "./PrintDeseo";
import Borrar from "./Borrar";
const ListaDeseos=(props)=>{
    return(

        <ul>
           {props.lista.map(d=>{

            return(
                <li>
                   {d}&nbsp;
                <Borrar deseo={d} quitar={(d)=> this.props.quitar(d)}/>
                </li>
                
            )
           })}

        </ul>

    );


}
export default  ListaDeseos;