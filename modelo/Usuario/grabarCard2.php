<?php
//La siguiente linea configura el modo de conexion a el com3 y 9600 baudios
<<<<<<< HEAD
exec("mode COM66 BAUD=9600 PARITY=N data=8 stop=1 xon=off");
$codigo=$_REQUEST["codigo"];
$fp = @fopen ("COM66", "r+");
if (!$fp) {
   $status = "No conectado";
} else {
   $status = "Conectado";
}
echo $status;
	@fwrite($fp,"n9999999999");
=======
exec("mode COM5 BAUD=9600 PARITY=N data=8 stop=1 xon=off");
$codigo=$_REQUEST["codigo"];
$fp = @fopen ("COM5", "r+");
if (!$fp) {
   $status = "No conectado";
} else {
   $status = "Pasar la targeta por el dispositivo!";
}
echo $status;
	@fwrite($fp,"n".$codigo);
>>>>>>> e15e9606e047fd45f96ba8f22aad4d72b57e8cfa
?>
