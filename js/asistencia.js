function registrarAsistencia(){
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
      document.getElementById("content").innerHTML=xmlhttp.responseText;      
      }
    }
  xmlhttp.open("GET","vista/view_asistencia.php",true);
  xmlhttp.send();
}

function registrarAsistenciaComensal() {
    codigo=$('#codigo').val();     
      $.ajax({
          type: "POST",
          data: {codigo,param_opcion:'registrar'},
          url: "control/asistencia/controlAsistencia.php",
          success: function(datos) {
              if (datos == '') {
                  alert(datos+"Comensal no registrado");
              } else {
                  $("#datosAsistencia").html(datos);
              }
          },
          error: function(datos) {
              alert( datos+" Error Fatal");
          }
      });
}

///////////////////////////////////////////////////////////////////////////////////////////////

function tipoComensal(){
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
      document.getElementById("content").innerHTML=xmlhttp.responseText;      
      }
    }
  xmlhttp.open("GET","vista/view_registrarTipoComensal.php",true);
  xmlhttp.send();
}

function registrarTipoComensal() {
    tipoComensal=$('#nombreTC').val();     
      $.ajax({
          type: "POST",
          data: {tipoComensal,param_opcion:'registrar'},
          url: "control/tipocomensal/controlTipoComensal.php",
          success: function(datos) {
              if (datos == '') {
                  alert(datos+"Tipo Comensal no registrado");
              } else {
                  $("#registrosComensal").html(datos);
              }
          },
          error: function(datos) {
              alert( datos+" Error Fatal");
          }
      });
}