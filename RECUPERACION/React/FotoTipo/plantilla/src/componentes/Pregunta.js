import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const Pregunta = (props) => {
  return (
    <>
      <p>{props.texto}</p>

      <p>
        {props.respuestas.map((p) => (
          <Button color="primary" onClick={()=>props.clicar(p.puntos, props.indice)}>
           {p.valor}
          </Button>
        ))}
      </p>
    </>
  );
};
export default Pregunta;

/*
const Pregunta = (props) => {
  const [botonSeleccionado, setBotonSeleccionado] = useState(null);

  const handleButtonClick = (valor, indice) => {
    setBotonSeleccionado(indice);
    props.clicar(valor, indice);
  };

  return (
    <>
      <p>{props.texto}</p>
      <p>
        {props.respuestas.map((respuesta, index) => (
          <Button
            color={botonSeleccionado === index ? "success" : "primary"}
            onClick={() => handleButtonClick(respuesta.valor, index)}
            key={index}
          >
            {respuesta.valor}
          </Button>
        ))}
      </p>
    </>
  );
};

*/


