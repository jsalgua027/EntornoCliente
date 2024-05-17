import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import VentanaConfirmacion from "./VentanaConfirmacion";

function VentanaPedidos(props) {
  const { ver, cerrarModal } = props;
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    // Asigna props.listaProductos a listaProductos una vez que esté disponible
    if (props.listaProductos) {
      setListaProductos(props.listaProductos);
    }
  }, [props.listaProductos]);

  // Función para calcular la cantidad de cada producto en la lista
  const calcularCantidad = (producto) => {
    return listaProductos.filter((p) => p.producto === producto).length;
  };

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
    props.actualizarProductos(nuevosProductos, nuevosProductos.length);
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
      props.actualizarProductos(nuevosProductos, nuevosProductos.length);
    }
  };

  // Función para calcular el importe total de los pedidos
  const calcularTotalPedido = () => {
    let total = 0;
    obtenerListaUnica().forEach((producto) => {
      total += producto.cantidad * producto.precio;
    });
    console.log("el total es:" + total);
    return total.toFixed(2); // Redondear el total a dos decimales
  };

  // Función para realizar una solicitud a la API para enviar los datos del pedido
  const realizarPedidoAPI = (datosPedido) => {
    fetch(
      // 'http://localhost/Proyectos/Curso23_24PHP/Restaurante/confirmaPedidosAPI.php'//casa
      //"http://localhost/Proyectos/Curso23_24PHP/Curso23_24PHP/Restaurante/confirmaPedidosAPI.php" //clase
      "https://thematic-learning.com/2DAW2024/JOSEIGNACIO/Restaurante/confirmaPedidosAPI.php", // despliegue
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: datosPedido,
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error al enviar el pedido a la API");
        }
      })
      .then((data) => {
        // Manejar la respuesta de la API si es necesario
        console.log(data);
      });
  };

  // Función para confirmar el pedido y abrir la ventana de confirmación
  // tambien voy a gestionar la solictuda de la api y para ello obtengo los valores de la funcion lista unica
  const confirmarPedido = () => {
    const totalPedido = calcularTotalPedido();
    props.confirmarPedido(totalPedido);
    const datosPedido = obtenerListaUnica();
    // intento trabajar el json para el envio de datos
    const datosPedidoJSON = JSON.stringify({ datosPedido });
    realizarPedidoAPI(datosPedidoJSON);
  };

  // Calcular el total del pedido
  const totalPedido = calcularTotalPedido();
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
                src={`./images/${producto.categoria}/${producto.portadaFoto}`}
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
        <p className="totalPedido">
          <strong>El importe total del pedido es:</strong> {totalPedido}€
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={() => confirmarPedido()}>
          Confirmar Pedido
        </Button>
        <Button color="danger" onClick={cerrarModal}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default VentanaPedidos;
