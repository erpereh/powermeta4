// En este script se recogen todas las funciones necesarias
// para el Quien es Quien de Crédito y Caución

$(document).ready(function(){	
	
	// Filtrado de los resultados según las opciones elegidas.
	$( "#btnbusqueda" ).click(function() {	  
	  
	  /* Recogemos los valores seleccionados en los desplegables */
	  var unidad 		= $("#unidades option:selected").val();
	  var puesto 		= $("#puestos option:selected").val();
	  var responsable 	= $("#responsables option:selected").val();
	  var tipo 			= $("#tipos option:selected").val();
	  
	  /* var nombre 			= $( "#nombre" ).val();*/
	  	  
	  var parametrosBusqueda = ""
	  
	  parametrosBusqueda =  parametrosBusqueda + " -- PARAMETROS PARA ENVIAR AL META4OBJECT -- " + "\n";
	  parametrosBusqueda =  parametrosBusqueda + "unidad 		: " 		+ unidad 		+ "\n"; 
	  parametrosBusqueda =  parametrosBusqueda + "puesto 		: " 		+ puesto 		+ "\n";
	  parametrosBusqueda =  parametrosBusqueda + "responsable 	: " 		+ responsable	+ "\n";
	  parametrosBusqueda =  parametrosBusqueda + "tipo 			: " 		+ tipo			+ "\n";	   
	  
	  //alert(parametrosBusqueda);
	  
	  $("#unidad").val(unidad);
	  $("#puesto").val(puesto);
	  $("#responsable").val(responsable);
	  $("#tipo").val(tipo);
	  
	  
	  $("#filtroBusqueda").submit(); 
	  
	});		  
	
});

function getVersion(indice){
	navVersion = navigator.appVersion.slice(0, 1);
	var formulario = document.forms[indice].version.value;
	document.forms[indice].version.value = navVersion;
}
