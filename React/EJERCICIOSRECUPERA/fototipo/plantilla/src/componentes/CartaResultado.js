import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap';
import { Component,useState,useEffect } from "react";
import axios from 'axios';

import {PHPCONEXION} from './Datos';


function Grafico(props){
  const [data,setData]=useState(null);
  useEffect(()=>{
    //funcion para realizar la solicitud GET
    const fetchData=async ()=>{
      try {
        const responde = await axios.get({PHPCONEXION});
        console.log(responde.data);
        setData(responde.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    //llamada a la funcion para realizar la solicitud cuando el componente se monta
    fetchData();
  },[]);
}



const Carta=(props)=>{
  let lista=props.puntuaje;
  console.log(lista);
  let puntos=props.puntos;
  console.log("Puntos: "+puntos);
  //Me vas a buscar y a mostrar sólo el que coincida.
  // Buscar y mostrar solo el resultado que coincide.
  let resultado = lista.find((x) => puntos >= x.rangoInicio && (puntos <= x.rangoFin || x.rangoFin === null));
  // if (resultado) {
  //   console.log(resultado.tipo_piel);
  //   // Aquí puedes devolver o mostrar el resultado como necesites.
  //   return resultado.tipo_piel;
  // }
    let nombre=resultado.imagen;
    //esto es el dato que tengo que sobreescribir en el txt
  console.log(resultado.ID);

  
   //TEMA AXIOS
   //funcion para conectar con el archivo de PHP y enviar el resultado del cuestionario
   const conectar=()=>{
    //const PHPCONEXION=PHPCONEXION;
 //Funcion que envia los datos
  const data={
    vsamgar940:resultado.ID
  };

  //Realizo la solicitud POST usando Axios
  axios.post(PHPCONEXION, data)
  .then(response=>{
    //manejo la respuesta en el servidor si es necesario,
    console.log("respuesta enviada: "+response.data);
  })
  .catch(error=>{
  // manejo los errores si la solicitud falla
  console.error('Error al conectar con el servidor:', error);
  });

   };

   //llamo a la función conexion cuando se monte el componente
   React.useEffect(() => {
    conectar();
   // [] se lo paos como segundo argumento
   //sirve para que se ejecute 1 sola vez al montar el componente
  }, []); 

 

 return (<Card
  body
  color="warning"
  outline
  style={{
    width: '18rem'
  }}
>
  <img
    alt={resultado.tipo_piel}
    src={resultado.imagen}
  />
  <CardBody>
    <CardTitle tag="h5">
      {resultado.tipo_piel}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    Has obtenido una puntuación de: {puntos} puntos
    </CardSubtitle>
    <CardText>
      {resultado.descripcion}
    </CardText>
    
  </CardBody>
</Card>);
}

export default Carta;