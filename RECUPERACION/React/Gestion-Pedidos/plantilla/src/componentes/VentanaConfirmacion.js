import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function VentanaConfirmacion(props) {
  const { ver, cerrarModal } = props;

  const reiniciarApp = () => {
    window.location.reload(); // Esto recarga la página
  };

  return (
    <Modal isOpen={ver} toggle={cerrarModal} size="lg">
      <ModalHeader toggle={cerrarModal} style={{ textAlign: "center" }}>
      <h3>¡Su pedido ha sido confirmado con éxito!</h3>
      </ModalHeader>
      <ModalBody>
      <img
                src={`/images/iconos/buenProvecho4.jpg`}
                alt="logo"
                style={{ marginLeft: "25%", width: "400px", height: "400px" }}
              />
        <h3  style={{ marginLeft: "25%"}}>¡Gracias por su compra!</h3>
        </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={() => { cerrarModal(); reiniciarApp(); }}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default VentanaConfirmacion;