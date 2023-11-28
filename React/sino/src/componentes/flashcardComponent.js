import {
    Button,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";


const Flashcard = (props) => {
    return (
      <>
        {" "}
        <div class="row">
          <Card>
            <CardBody></CardBody>
            <CardTitle tag5="h5">{props.Titulo}</CardTitle>
            <div class="cold-md8 col-lg-4">
              <CardImg src={props.imagen}></CardImg>
            </div>
            <CardText>{props.texto}</CardText>
          </Card>
        </div>
      </>);
  }

  export default Flashcard;