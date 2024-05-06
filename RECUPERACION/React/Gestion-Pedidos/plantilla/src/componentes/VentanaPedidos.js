import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function VentanaPedidos(props) {
  const { ver, cerrarModal } = props;
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    // Asignar props.listaProductos a listaProductos una vez que esté disponible
    if (props.listaProductos) {
      setListaProductos(props.listaProductos);
    }
  }, [props.listaProductos]);

  // Función para calcular la cantidad de cada producto en la lista
  const calcularCantidad = (producto) => {
    return listaProductos.filter((p) => p.producto === producto).length;
  };
  //console.log("las lista de productos en la ventana es: " + listaProductos);
  // Función para obtener una lista de productos únicos con su cantidad
  const obtenerListaUnica = () => {
    const productosUnicos = [];
    listaProductos.forEach((producto) => {
      const cantidad = calcularCantidad(producto.producto);
      if (!productosUnicos.some((p) => p.producto === producto.producto)) {
        //some me devulve true si cumple la condición
        productosUnicos.push({ ...producto, cantidad });
      }
    });
    return productosUnicos;
  };

  // Función para aumentar la cantidad de un producto en la lista

  const sumarCantidad = (producto) => {
    // Creo una nueva lista de productos con el producto agregado
    const nuevosProductos = [...listaProductos, producto];
    // Actualizo estado
    setListaProductos(nuevosProductos);
    props.actualizarProductos(nuevosProductos,nuevosProductos.length);
    //console.log(nuevosProductos+""+nuevosProductos.length)
  };

  // Función para disminuir la cantidad de un producto en la lista

  const restarCantidad = (producto) => {
    // Encuento  el índice del primer producto que coincida con producto.producto
    const index = listaProductos.findIndex(
      (p) => p.producto === producto.producto
    );
    // Si se encontró un producto con el mismo nombre
    if (index !== -1) {
      // Creo una nueva lista de productos excluyendo el producto en el índice encontrado
      const nuevosProductos = [
        ...listaProductos.slice(0, index),
        ...listaProductos.slice(index + 1),
      ];
      // Actualizar el estado con la nueva lista de productos
      setListaProductos(nuevosProductos);
      props.actualizarProductos(nuevosProductos,nuevosProductos.length);
    }
  };

  return (
    <Modal isOpen={ver} toggle={cerrarModal} size="lg">
      <ModalHeader toggle={cerrarModal} style={{ textAlign: "center" }}>
        Estos es su selección de productos:
      </ModalHeader>
      <ModalBody>
        <ul>
          {obtenerListaUnica().map((producto, index) => (
            <ol key={index}>
              <img
                src={`/images/${producto.categoria}/${producto.portadaFoto}`}
                alt={producto.producto}
                style={{ marginRight: "5px", width: "50px", height: "50px" }}
              />
              <span>{producto.producto} </span>
              <Button
                color="primary"
                size="sm"
                outline
                onClick={() => restarCantidad(producto)}
              >
                -
              </Button>
              <span className="spanCantidad">{producto.cantidad}</span>
              <Button
                color="primary"
                style={{ marginleft: "10px" }}
                size="sm"
                outline
                onClick={() => sumarCantidad(producto)}
              >
                +
              </Button>
              <span style={{ marginLeft: "10px" }}>
                <strong>Total PVP:</strong>{" "}
                {(producto.cantidad * producto.precio).toFixed(2)}€
              </span>
            </ol>
          ))}
        </ul>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={props.confirmarPedido}>Confirmar Pedido</Button>
        <Button color="danger" onClick={cerrarModal}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default VentanaPedidos;
