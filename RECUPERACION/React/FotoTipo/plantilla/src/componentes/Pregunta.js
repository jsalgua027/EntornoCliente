
import React, { useState } from 'react';
import { Button } from 'reactstrap';

const Pregunta = (props) => {
  const [botonSeleccionado, setBotonSeleccionado] = useState(null);

  const cambiarColorBoton = (indice) => {
    setBotonSeleccionado(indice); // Cambia el color del botón
  };

  return (
    <>
      <p>{props.texto}</p>
      <p>
        {props.respuestas.map((respuesta, index) => (
          <Button
            color={botonSeleccionado === index ? "success" : "primary"}
            onClick={() => {
              props.clicar(respuesta.puntos, props.indice); // Ejecuta la función clicar
              cambiarColorBoton(index); // Cambia el color del botón
            }}
            key={index}
          >
            {respuesta.valor}
          </Button>
        ))}
      </p>
    </>
  );
};

export default Pregunta;









