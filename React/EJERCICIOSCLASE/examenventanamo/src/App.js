import React, { useState, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Alert,
  Row,
  Col,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
} from "reactstrap";
import { FARMACOS } from "./componentes/datos";

const VentanaModalDiccionario = (props) => {
  const { className } = props;
  /**hook para recojer los datos flitrados */
  const [filtro, setFiltro] = useState("");
  /** Hook para mostrar la opción seccionada*/
  const [datossel, setDatossel] = useState(undefined);
  /** */
  const handleChange = (event) => {
    if (event.target.name == "filtro") {
      setFiltro(event.target.value.toUpperCase());
    }
    if (event.target.name == "selectMulti") {
      setDatossel(event.target.value);
    }
  };
  /** getData lo usamos para realizar el filtro en la ventana modalDiccionario */
  const getData = () => {
    if (props.diccionario == "FARMACOS") {
      if (filtro != "") {
        return FARMACOS.filter((f) => f.descATC.search(filtro) >= 0).map(
          (e) => (
            <option>
              {e.codATC}|{e.descATC}
            </option>
          )
        );
      }
      return FARMACOS.map((e) => (
        <option>
          {e.codATC}|{e.descATC}
        </option>
      ));
    }
  };

  return (
    <div>
      <Modal
        isOpen={props.mostrar}
        toggle={props.toggle}
        className={className}
        onEntering={() => {
          setFiltro("");
          getData();
          setDatossel(undefined);
        }}
      >
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>

        <ModalBody>
          <FormGroup row>
            <Label sm={2}> Filtrar: </Label>
            <Col sm={10}>
              <Input
                onChange={handleChange}
                id="filtro"
                name="filtro"
                type="Text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input
                onChange={handleChange}
                onClick={handleChange}
                id="selectMulti"
                name="selectMulti"
                type="select"
              >
                {getData()}
              </Input>
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          {datossel != undefined ? datossel + " " : ""}
          <Button
            color="primary"
            onClick={() => {
              props.add(datossel);
              setFiltro("");
              setDatossel("");
            }}
          >
            {props.aceptar}
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ModalFooter>
      </Modal>
    </div>
  );
};

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      diccionario: "FARMACOS",
      donde: "",
      rxseleccionar: "",
      rxenmascarar: "",
    };
  }
  /* dependiendo de a quien lo clicke cambia el estado de seleccionar o mascarar*/
  handleChange = (event) => {
    const target = event.target;
    if (target.name == "rxseleccionar") {
      this.setRxseleccionar(target.value);
    }
    if (target.name == "rxenmascarar") {
      this.setRxenmascarar(target.value);
    }
  };
  /**para saber de que ventana te llega, la azul o la roja */
  /**me sirve para usarlo en el clear y saber de donde me llega el onclik() */
  setRxseleccionar(d) {
    if (d == undefined) return;
    this.setState({ rxseleccionar: d });
  }
  setRxenmascarar(d) {
    if (d == undefined) return;
    this.setState({ rxenmascarar: d });
  }
  /**para saber de que ventana te llega, la azul o la roja */
  setDonde(d) {
    if (d == undefined) return;
    this.setState({ donde: d });
  }
  /**fincion que se pone en el onlcik del botton add  */
  add(datos) {
    /*si lo que recibo viene de la ventana y no es undefine y no esta vacio*/
    if (
      this.state.donde == "RXSELECCIONAR" &&
      datos != undefined &&
      datos.length > 0
    ) {
      let d = datos.split("|");

      this.state.rxseleccionar.length == 0
        ? this.setRxseleccionar(d[0])
        : this.setRxseleccionar(this.state.rxseleccionar + "," + d[0]);
    }
    if (
      this.state.donde == "RXENMASCARAR" &&
      datos != undefined &&
      datos.length > 0
    ) {
      let d = datos.split("|");
      this.state.rxenmascarar.length == 0
        ? this.setRxenmascarar(d[0])
        : this.setRxenmascarar(this.state.rxenmascarar + "," + d[0]);
    }
    this.toggleModal();
  }

  setIsOpen(d) {
    if (d == undefined) return;
    this.setState({ isOpen: d });
  }
  toggleModal() {
    this.setIsOpen(!this.state.isOpen);
  }

  render() {
    return (
      <>
        <div>
          <UncontrolledAccordion defaultOpen={["1"]} stayOpen>
            <AccordionItem>
              <AccordionHeader targetId="1">
                GESTION DE FARMACOS
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <Row>
                  <Col>
                    <Alert color="info">
                      Incluir X Medicamentos:
                      <Input
                        type="textarea"
                        name="rxseleccionar"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.rxseleccionar}
                      />
                      <Button
                        onClick={() => {
                          this.setDonde("RXSELECCIONAR");
                          this.toggleModal();
                        }}
                        color="info"
                      >
                        Add
                      </Button>{" "}
                      <Button
                        color="info"
                        onClick={() => this.setRxseleccionar("")}
                      >
                        Clear
                      </Button>
                    </Alert>
                  </Col>
                  <Col>
                    <Alert color="danger">
                      Excluir X Medicamentos:
                      <Input
                        type="textarea"
                        name="rxenmascarar"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.rxenmascarar}
                      />
                      <Button
                        onClick={() => {
                          this.setDonde("RXENMASCARAR");
                          this.toggleModal();
                        }}
                        color="danger"
                      >
                        Add
                      </Button>{" "}
                      <Button
                        color="danger"
                        onClick={() => this.setRxenmascarar("")}
                      >
                        Clear
                      </Button>
                    </Alert>
                  </Col>
                </Row>
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </div>
        <VentanaModalDiccionario
          diccionario={this.state.diccionario}
          add={(datos) => this.add(datos)}
          mostrar={this.state.isOpen}
          aceptar={"Añadir"}
          toggle={() => this.toggleModal()}
          titulo={"Add " + this.state.diccionario}
        />

        <br />
      </>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Filter />
      </div>
    );
  }
}
export default App;
