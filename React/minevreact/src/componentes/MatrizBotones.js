import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Botoncito from './Botoncito';


const MatrizBotones =({matrizAux})=>{

  return(
    <div>
      {matrizAux.map((fila, indexFila) => (
        <div key={indexFila} style={{ display: 'flex' }}>
          {fila.map((elemento, indexElemento) => (
            <Botoncito key={indexElemento} />
          ))}
        </div>
      ))}
    </div>
  );
};


export default MatrizBotones;