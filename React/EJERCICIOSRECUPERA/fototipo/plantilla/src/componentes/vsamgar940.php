<?php
header('Access-Control-Allow-Origin: *');
$_POST=json_decode(file_get_contents("php://input"),true);
if(!isset($_POST["vsamgar940"])){
    return;
}

//Se abre el fichero donde están almacenados los datos
$fichero="resultados.txt";
$contenido= file($fichero);
//Colocamos el contenido en un array y lo almacenamos en cuatro variables por equipos
$array=explode("||",$contenido[0]);
$uno=$array[0];
$dos=$array[1];
$tres=$array[2];
$cuatro=$array[3];
$cinco=$array[4];
$seis=$array[5];

//extraemos el voto de los participantes
$voto=$_POS["vsamgar940"];

//actualizo los votos añadiendo el recibido a los anteriores
if($voto==0){
    $uno=$uno+1;
}
if($voto==1){
    $dos=$dos+1;
}
if($voto==2){
    $tres=$tres+1;
}
if($voto==3){
    $cuatro=$cuatro+1;
}
if($voto==4){
    $cinco=$cinco+1;
}
if($voto==5){
    $seis=$seis+1;
}

//creamos la cadena que se va a insertar en el fichero
$insertvoto=$uno."||".$dos."||".$tres."||".$cuatro."||".$cinco."||".$seis;

//se abre el fichero como escritura y se escriben los votos actualizados
$fp=fopen($fichero,"w");
fputs($fp,$insertvoto);
fclose($fp);
$respuesta["mensaje"]="OK";
echo json_encode($respuesta);



?>