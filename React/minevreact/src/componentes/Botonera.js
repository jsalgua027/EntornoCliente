import React from 'react';
import { Button } from 'reactstrap';



const Botonera=(props)=>{

    const estilos={
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        backgroundColor: 'rgb(210, 207, 204)',
        alignItems:"center",
        width: "150px",
        margin:"10px",
        borderRadius:"10%",
        paddingTop:"0.5rem"
        
    };
    const Bestilos = {
        marginBottom: "8px", // Ajusta el valor según el espacio deseado
        
      
      };
     const estiloB={
      marginRight: "30px",
     } ;
    

    return(
        <div style={estilos}>
            <div style={Bestilos} ><Button onClick={props.clickArriba}> W</Button></div>
            <div style={Bestilos} > 
                <Button onClick={props.clickIzquierda}>A</Button>
                <Button onClick={props.clickAbajo}>S</Button>
                <Button onClick={props.clickDerecha}>D</Button>
               
            </div>
            <div style={Bestilos}></div>
        </div>

    )

}

export default Botonera;