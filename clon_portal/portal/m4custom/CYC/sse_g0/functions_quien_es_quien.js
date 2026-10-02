// En este script se recogen todas las funciones necesarias
// para el Quien es Quien de Crédito y Caución

$(document).ready(function(){
	alert("Cargamos");
	// Ocultamos ciertos elementos en la carga inicial
	$(function() {
		
		$("#Direcciones option").each(function(i){
			//En el select de direcciones ocultamos todas las unidades que no sean direcciones
			if($(this).val().substring(2,3) != "D")  {						
				$(this).hide();
			}		
			if($(this).val()=="00")  {						
				$(this).show();
			}
		});
		$("#Areas option").each(function(i){
			//En la select de Areas ocultamos todas las unidades en la carga inicial, cambia al cambiar de dirección.		
			if($(this).val() != "") {$(this).hide();}
		});

		$("#CentrosTrabajo option").each(function(i){
			if($(this).val().indexOf("1") > 0) {$(this).hide();}
		});
		
		//Ocultamos los resultados, solo mostramos los que se elija en los filtros
		 $("#resultados").hide();
		
		$("table#tablaresultados tr").each(function(i){
			$(this).hide();
		}); 
		
		$("#sinresultados").hide();
		
		$( "#Direcciones" ).change(function () {
			// Cuando se selecciona un dirección
			var str = "";
			var largo = 0;
			
			$( "#Direcciones option:selected" ).each(function() {
				//Mostramos las áreas que tienen como unidad padre a esa dirección
				largo 	= $( this ).val().length;
				str 	= $( this ).val().substring(5,largo);
				$("#Areas option").each(function(i){
					//Ocultamos todas antes de mostrar las de la seleccion
					if($(this).val() != "") {
						$(this).hide();
					}else{
						$(this).show();
						$(this).attr("selected", "selected");
					}
				});
				$("#Areas option").each(function(i){										
						if($(this).val().substring(5,largo) == str) {						
							$(this).show();
						}
					});
			});   
		}); 	
		
		
		$( "#btnbusqueda" ).click(function() {
		
		   //Ocultamos los resultados, solo mostramos los que se elija en los filtros
		   $("#resultados").hide();
			
		   $("table#tablaresultados tr").each(function(i){
				$(this).hide();
		   }); 
		  
		  //var nombre 			= $( "#nombre").val();
		  //var apellido  		= $( "#apellido_1").val();
		  //var segundoApellido = $( "#apellido_2").val();
		  var nombre 			= $( "#Empleados      option:selected" ).val();
		  var direccion 		= $( "#Direcciones 	  option:selected" ).val();
		  var centro			= $( "#CentrosTrabajo option:selected" ).val();
		  var area 				= $( "#Areas 		  option:selected" ).val();
		  var puesto			= $( "#puestos 		  option:selected" ).val();
		  var direccionbusqueda = direccion.substring(direccion.indexOf('-')+1,direccion.length);
		  var centrobusqueda    = centro.substring(centro.indexOf('-')+1,centro.length);
		  
		  
		  
		  var parametrosBusqueda = ""
		  
		  parametrosBusqueda =  parametrosBusqueda + "Nombre 	: " 		+ nombre 			+ "\n"; 
		  parametrosBusqueda =  parametrosBusqueda + "Direccion : " 		+ direccion 		+ "\n";
		  parametrosBusqueda =  parametrosBusqueda + "Centro	: " 		+ centro			+ "\n";
		  parametrosBusqueda =  parametrosBusqueda + "Area		: " 		+ area				+ "\n";
		  parametrosBusqueda =  parametrosBusqueda + "Puesto	: " 		+ puesto			+ "\n"; 
		  parametrosBusqueda =  parametrosBusqueda + "direccionbusqueda	: " + direccionbusqueda	+ "\n"; 
		  parametrosBusqueda =  parametrosBusqueda + "centrobusqueda	: " + centrobusqueda	+ "\n"; 
		  
		  //alert(parametrosBusqueda);	  
		  
				function filtrarColumna(nombre){
					var visibles = $("table#tablaresultados tr:visible").length;
					var id 		 =  "";	
					
					if ((nombre) && (nombre!="00")){
						
						if(visibles){
							
							$('table#tablaresultados tr:visible').each(function(){			
							
								id = $(this).attr('id');
								
								if (id.indexOf(nombre) > 0){							
									$(this).show();					
								} else {
									$(this).hide();							
								}
								
							});	
						}else{
							
							$('table#tablaresultados tr').each(function(){			
							
								id = $(this).attr('id');
							
								if (id.indexOf(nombre) > 0){													
									$(this).show();														
								}else {
									$(this).hide();							
								}
							});
						}
					}
					
					
					visibles = $("table#tablaresultados tr:visible").length;
					
					if(visibles > 0) {
						
						$("#resultados").show();
						$("#sinresultados").hide();
						
					} else {
						
						$("#sinresultados").show();
					}			
				
				}
		  
		  //alert(direccionbusqueda);
		  //aplicamos los filtros que se hayan metido

		  if(nombre){filtrarColumna(nombre);}
		  //if(apellido){filtrarColumna(apellido);}
		  //if(segundoApellido){filtrarColumna(segundoApellido);}
		  if(direccion){filtrarColumna(direccion.substring(direccion.indexOf('-')+1,direccion.length));}
		  if(centro){filtrarColumna(centrobusqueda);}
		  if(area){filtrarColumna(area);}
		  if(puesto){filtrarColumna(puesto);}
		  
		});
	  
	});
});
