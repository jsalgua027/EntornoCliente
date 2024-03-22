import Usuario from "./Usuario";

const ListaUsuarios=(props)=>{
return(

<ul>
    {props.lista.map(u=>{
        return(

            <Usuario key={u.id}
            name={u.name}
            email={u.email}
            />

        )

    })}
</ul>

)

}

export default ListaUsuarios;