// VentanaPedidos.js
import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function VentanaPedidos(props) {
  const { listaProductos, ver, cerrarModal} = props;

 

  return (
    <Modal isOpen={ver} toggle={cerrarModal}>
      <ModalHeader toggle={cerrarModal} style={{ textAlign: "center" }}>Su pedido Realizado</ModalHeader>
      <ModalBody>
        <ul>
          {/* Mapea los productos y muestra cada uno en una lista */}
          {listaProductos.map((producto, index) => (
            <ol key={index}>
              <img src={`/images/2/${producto.portadaFoto}`} alt={producto.producto} style={{ marginRight: '5px', width: '50px', height: '50px' }} />
              {producto.producto} 
            </ol>
          ))}
        </ul>
      </ModalBody>
      <ModalFooter>
        <Button color="success" >Hacer le pedido</Button>
        <Button color="danger" onClick={cerrarModal}>Cerrar</Button>
      </ModalFooter>
    </Modal>
  );
}

export default VentanaPedidos;
