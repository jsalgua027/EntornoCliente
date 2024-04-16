
import React, { useState } from 'react';

import { Chart } from "react-google-charts";

const Grafica = (props) => {
    let estadisticas = props.lectura || "";
   
 let numerosFinales = estadisticas.split("||").map(valor => parseInt(valor, 10));
 console.log(numerosFinales+" esto son los datos dspus del split")

  const data = [
    ["Tipo", "Valor"],
    ["tipo1", numerosFinales[0]],
    ["tipo2", numerosFinales[1]],
    ["tipo3", numerosFinales[2]],
    ["tipo4", numerosFinales[3]],
    ["tipo5", numerosFinales[4]],
    ["tipo6", numerosFinales[5]],
  ];
   const options = {
    title: "FOTOTIPOS",
    is3D: true,
  };
  

  return (
    <>
    <Chart
     chartType="PieChart"
     data={data}
     options={options}
     width={"100%"}
     height={"400px"}
    />
    </>
  );
};

export default Grafica;









