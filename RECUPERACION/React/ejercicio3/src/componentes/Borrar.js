const Borrar=(props)=>{
    return(
        <button className="borrar" deseo={props.deseo} 
            onClick={(deseo)=>props.quitar(props.deseo)}>

                Borrar{props.deseo}

        </button>

    )

}
export default Borrar;