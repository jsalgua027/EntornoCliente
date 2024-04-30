import React, { useState, useEffect } from "react";
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Col } from "reactstrap";


function VentanaPedidos(props) {
    const [mostrar, setMostrar] = useState(false); // Utiliza `mostrar` en lugar de `setMostar`

   // Se ejecuta cada vez que la prop 'mostrar' cambia
   useEffect(() => {
    setMostrar(props.mostrar); // Actualiza el estado interno 'mostrar' con el valor de la prop 'mostrar'
}, [props.mostrar]);

// Función para cerrar la modal
const cerrarModal = () => {
    setMostrar(false);
};


    return (
        <Modal isOpen={mostrar} toggle={cerrarModal}>
            <ModalHeader toggle={cerrarModal} style={{ textAlign: "center" }}
                        >Su pedido Realizado</ModalHeader>
            <ModalBody>
                <ul>
                    {/* Mapea los productos y muestra cada uno en una lista */}
                    {props.listaProductos.map((producto, index) => (
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
