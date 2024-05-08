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
        Confirmado  Pedido
      </ModalHeader>
      <ModalBody>
        <p>¡Su pedido ha sido confirmado con éxito!</p>
        <p>¡Gracias por su compra!</p>
      
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