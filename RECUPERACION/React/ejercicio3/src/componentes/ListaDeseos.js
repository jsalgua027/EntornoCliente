import PrintDeseo from "./PrintDeseo";
import Borrar from "./Borrar";
const ListaDeseos=(props)=>{
    return(

        <ul>
           {props.lista.map(d=>{

            return(
                <li>
                   {d}&nbsp;
                <Borrar deseo={d} quitar={(elemento)=> this.props.quitar(elemento)}/>
                </li>
                
            )
           })}

        </ul>

    );


}
export default  ListaDeseos;