import React, { Component } from "react";
function LisPueblos(props) {
   // console.log(props.poblacion)
  let obj = props.poblacion.map((e) => {
        return <ol>{e.nombre}</ol>
      }
   );
   //console.log(obj)
  return <><ul>{obj}</ul></>;
}

export default LisPueblos;
