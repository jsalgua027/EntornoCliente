
import React, { useState } from 'react';

import { Chart } from "react-google-charts";

const Grafica = (props) => {
    let estadisticas = props.lectura || "";
   
 let numerosFinales = estadisticas.split("||").map(valor => parseInt(valor, 10));
 console.log(numerosFinales+" esto son los datos dspus del split")

  const data = [
    ["Tipo", "Valor"],
    ["Tipo de piel I : Sensible a la luz solar ", numerosFinales[0]],
    ["Tipo de piel II : Sensible a la luz solar", numerosFinales[1]],
    ["Tipo de piel III : Sensibilidad normal a la luz solar ", numerosFinales[2]],
    ["Tipo de piel IV : La piel tiene tolerancia a la luz solar ", numerosFinales[3]],
    ["Tipo de piel V : La piel es oscura. Alta tolerancia ", numerosFinales[4]],
    ["Tipo de piel VI : La piel es negra. Altísima tolerancia ", numerosFinales[5]],
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









