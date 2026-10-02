// En este script se recogen todas las funciones necesarias
// para el Quien es Quien de Crédito y Caución

$(document).ready(function(){	
	
	// Filtro de direcciones para cargar el desplegable de areas
	$("#Direcciones" ).change(function () {	
		
		var seleccionado = $("#Direcciones option:selected").val();
		
		$("#direccionArea").val(seleccionado);		
		$("#filtroAreas").submit(); 
	}); 
	
	// Filtrado de los resultados según las opciones elegidas.
	$( "#btnbusqueda" ).click(function() {
	  
	  var nombre 			= $( "#nombre" ).val();
	  var direccion 		= $( "#Direcciones 	  option:selected" ).val();
	  var idcentro			= $( "#CentrosTrabajo option:selected" ).val();
	  var centro			= $( "#CentrosTrabajo option:selected" ).text();
	  var area 				= $( "#Areas 		  option:selected" ).val();
	  var puesto			= $( "#puestos 		  option:selected" ).val();
	  var idCentroFun		= $( "#CentrosTrabajoFun option:selected" ).val();
	  var centroFun			= $( "#CentrosTrabajoFun option:selected" ).text();
	  
	  var direccionbusqueda = direccion;
	  //var centrobusqueda    = centro.substring(centro.indexOf('-') + 1,centro.length);
	  
	  var parametrosBusqueda = ""
	  
	  parametrosBusqueda =  parametrosBusqueda + " -- PARAMETROS PARA ENVIAR AL META4OBJECT -- " + "\n";
	  parametrosBusqueda =  parametrosBusqueda + "Nombre 	: " 		+ nombre 			+ "\n"; 
	  parametrosBusqueda =  parametrosBusqueda + "Direccion : " 		+ direccion 		+ "\n";
	  parametrosBusqueda =  parametrosBusqueda + "Centro	: " 		+ centro			+ "\n";
	  parametrosBusqueda =  parametrosBusqueda + "CentroFun	: " 		+ centroFun			+ "\n";
	  parametrosBusqueda =  parametrosBusqueda + "Area		: " 		+ area				+ "\n";
	  parametrosBusqueda =  parametrosBusqueda + "Puesto	: " 		+ puesto			+ "\n"; 
	  parametrosBusqueda =  parametrosBusqueda + "direccionbusqueda	: " + direccionbusqueda	+ "\n"; 
	  //parametrosBusqueda =  parametrosBusqueda + "centrobusqueda	: " + centrobusqueda	+ "\n"; 
	  
	  //alert(parametrosBusqueda);	  
	  
	  if(direccionbusqueda != "00"){$("#direccion").val(direccionbusqueda);}
	  
	  $("#nombreCompleto").val(nombre);
	  if(area != "00"){$("#area").val(area);}
	  if(puesto != "00"){$("#puesto").val(puesto);}
	  if(idcentro != "00"){$("#centro").val(centro);}
	  if(idcentro != "00"){$("#idcentro").val(idcentro);}
	  if(idCentroFun != "00"){$("#CentroFun").val(idCentroFun);}
	  //if(idCentroFun != "00"){$("#idCentroFun").val(idCentroFun);}
	  $("#filtroBusqueda").submit(); 
	  
	});		  
	
});

