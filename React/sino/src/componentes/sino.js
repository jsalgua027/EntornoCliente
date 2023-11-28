
import {
    Button,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";

const Sino = (props) => {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <CardImg src={props.imagen} />
          <CardBody>
            <CardTitle tag="h5">{props.Titulo}</CardTitle>
            <Button onClick={() => props.onClick(props.imagenSi)}>
              {props.textobotonSI}
            </Button>
            <Button onClick={() => props.onClick(props.imagenNo)}>
              {props.textobotonNO}
            </Button>
          </CardBody>
        </Card>
      </>
    );
  };
  export default Sino;
  
  