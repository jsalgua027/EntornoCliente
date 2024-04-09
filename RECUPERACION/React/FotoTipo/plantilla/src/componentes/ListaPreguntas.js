import Pregunta from "./Pregunta";

const ListaPreguntas = (props) => {
    return (
    
     props.lista.map((p,index) => 
      <Pregunta texto={p.texto} respuestas={p.respuestas}  clicar={(e,v)=>props.clicar(e,v)} indice={index} ></Pregunta>
     )
        
     
    );
  };
  export default ListaPreguntas
;