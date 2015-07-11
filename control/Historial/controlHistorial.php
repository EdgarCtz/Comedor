<?php

include_once '../../modelo/Historial/modeloHistorial.php';

$param = array();
session_start();
<<<<<<< HEAD
$param['codigo']='4';//codigo del comensal
$param['param_opcion']=$_SESSION['idUsuario'];//metodo de listar
=======
$param['codigo']=$_SESSION['idUsuario'];//codigo del comensal
$param['param_opcion']='';//metodo de listar
>>>>>>> e15e9606e047fd45f96ba8f22aad4d72b57e8cfa



if (isset($_POST['param_opcion']))
    $param['param_opcion'] = $_POST['param_opcion'];
if (isset($_POST['pag']))
    $param['pag'] = $_POST['pag'];
if (isset($_POST['inicio']))
    $param['inicio'] = $_POST['inicio'];
if (isset($_POST['fin']))
    $param['fin'] = $_POST['fin'];
/*
if (isset($_POST['codigo']))
    $param['codigo'] = $_POST['codigo'];
*/

$Historial=new ModeloHistorial();
echo $Historial->gestionar($param);
?>

