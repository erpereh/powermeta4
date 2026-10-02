$(document).ready(function(){	
	
	var tipo 	 = "";	
	var cantidad = 0;
	var valor 	 = "";
	var numErrores = 0;
	
	function number_format(number, decimals, dec_point, thousands_sep) {
       var n = !isFinite(+number) ? 0 : +number, 
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        toFixedFix = function (n, prec) {
            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            var k = Math.pow(10, prec);
            return Math.round(n * k) / k;
        },
        s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
		if (s[0].length > 3) {
			s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
		}
		if ((s[1] || '').length < prec) {
			s[1] = s[1] || '';
			s[1] += new Array(prec - s[1].length + 1).join('0');
		}
		return s.join(dec);
	}
	
	function formateoFecha (fecha) {
		
		var anio 			= "";
		var dia  			= "";
		var mes  			= "";
		var sep	 			= "-";
		var fechaFormateada = "";
		
		
		anio  = fecha.substring(0,fecha.indexOf(sep));
		fecha = fecha.substring(fecha.indexOf(sep)+1,fecha.length);
		mes   = fecha.substring(0,fecha.indexOf(sep));
		fecha = fecha.substring(fecha.indexOf(sep)+1,fecha.length);
		dia   = fecha.substring(0,fecha.indexOf(" "));
		sep   = "/";
		
		fechaFormateada = dia + sep + mes + sep + anio;
		
		if(fechaFormateada=="01/01/4000") {fechaFormateada = ""}
		
		return fechaFormateada;
		
	}
	
	function formateoCantidad (cantidad) {
		
		var valor = cantidad;
		valor 	  = number_format(cantidad, 2, ',', '.');
		
		return valor;
	
	}
	function formateoNumero (numero) {
		
		var valor = numero;
		valor 	  = number_format(numero, 0, ',', '.');
		
		return valor;
	
	}	
	
	function formateListado (listado) {
		var sep	  		= "#";
		var lista 		= '<table><tr><td style = "TEXT-ALIGN: top;BACKGROUND-COLOR: #e7e8ec;COLOR: #404040;FONT-SIZE: 13px">';
		var contador 	= 0;
		var cambioCol 	= 0;		
		
		cambioCol 		= (listado.match(/#/g)||[]).length;
		cambioCol 		= Math.floor(cambioCol / 3);
		//alert(cambioCol);
		
		while (listado.length > 1) {
			lista  	= lista  + listado.substring(0,listado.indexOf(sep)) + ",</BR>";
			listado = listado.substring(listado.indexOf(sep)+1,listado.length);
			contador += 1;
			
			if (contador == cambioCol + 1){
				lista 	 = lista + '</td><td style = "TEXT-ALIGN: top;BACKGROUND-COLOR: #e7e8ec;COLOR: #404040;FONT-SIZE: 13px">';
				contador = 0;
			}
		}
	
		for (i = contador; i <= cambioCol; i++) { 
			lista  = lista + '&nbsp;' + "</BR>";
		}
		
		lista  = lista + "</tr></table>";
		
		
		return lista;
	}
	
	function mostrardivoculto(id) {			
        //alert('Mostrando el div de errores ' + id);						
		div 				= document.getElementById(id);
		div.style.display 	= "";				
	}
	
	/* function DisplayFormValues(formulario)
    {
        //alert('Mostrando campos del formulario : ' + formulario);
		var str = '';
        var elem = document.getElementById(formulario).elements;
		//alert(elem);
		alert(elem.length);
        for(var i = 0; i < elem.length; i++)
        {
            str += "<b>Type:</b>" + elem[i].type + "&nbsp&nbsp";
            str += "<b>Name:</b>" + elem[i].name + "&nbsp;&nbsp;";
            str += "<b>Value:</b><i>" + elem[i].value + "</i>&nbsp;&nbsp;";
            str += "<BR>";
        } 
        return str;
    } */
	
	function comprobarValoracion(formulario){
		
		var errores 	= "";
		var curso   	= "";
		var elem 		= document.getElementById(formulario).elements;		
		
	    for(var i = 0; i < elem.length; i++)
        {
			
            if ((elem[i].type=='hidden')&&(elem[i].id=='CSP_ID_DEV_SUBPRODUCT')){
				curso 	= 	elem[i].value;
				errores += 	'<b>Errores detectados en la valoraci&oacute;n del curso :' + curso + '</b></br><ul>'; 
			}
			
			if((elem[i].type=='text') &&(elem[i].value=="")){
				
				if (elem[i].id=='CSP_ACCIONES_DESEMPENADAS') 	{
					errores +='<li>El campo Acciones desempe&ntilde;adas es obligario.' 	+ '</li>'; 
					numErrores += 1;
				}
				//if (elem[i].id=='CSP_OBSERVACIONES')			{errores +='<li>El campo Observaciones es obligario.' 					+ '</li>';}
				
			}
			
			if((elem[i].type=='select-one')	&&(elem[i].options[elem[i].selectedIndex].id=='00')) {
				errores +='<li>Debe seleccionar una opci&oacute;n de Valoraci&oacute;n Responsable.' 	+ '</li>';
				numErrores += 1;
			}						
		} 
		
		errores += '</ul>'
		
		return errores;
	}
	
	function rellenarFormularioDatos (formularioDatos, datos){		
		var elemDatos	= document.getElementById(formularioDatos).elements
		//alert(elemDatos.length);
		elemDatos[elemDatos.length - 1].value += datos + '#'; 
		//alert(elemDatos[elemDatos.length - 1].value);
	}
	
	//Formateo de los valores	
	$(this).find('td').each (function() {
		
		tipo  = $(this).attr('id');
		valor = $(this).html();
		
		if(tipo=="fecha") 		{$(this).html(formateoFecha(valor));}
		if(tipo=="horas") 		{$(this).html(formateoCantidad(valor));}
		if(tipo=="cantidad")	{$(this).html(formateoCantidad(valor));}
		if(tipo=="numero")		{$(this).html(formateoNumero(valor));}
		if(tipo=="listado") 	{$(this).html(formateListado(valor));}
		
	});
	
	//Controles de click de los botones
	$(":button" ).click(function() {
		
		//Existen dos botones en la página
		//- El botón btnFormX que envía el formulario X
		//- El botón btnTodos que envía todos los formularios.
		//Para ambos el proceso es:
		// 1 - Validar el/los formulario/s
		// 2 - Enviar el/los formulario/s
		
		var boton           = $(this).attr("id");
		var mensajesError 	= "";
		var formulario 		= "";
		
		if(boton=='btnTodos'){
			$("form[id^='envio']").each(function(){
				formulario 		= $(this).attr("id");
				numErrores	    = 0;
				mensajesError 	+= comprobarValoracion(formulario);
			});
			
			if (numErrores>0) {
				
				$("#chkrespuestas").html(mensajesError); 
				mostrardivoculto('chkrespuestas');
			}
			if (numErrores==0) {
				/* $("form[id^='envio']").each(function(){
					$(this).submit();				
				}); */
				
				$("form[id^='envio']").each(function () {
					
					var form = $(this);
					rellenarFormularioDatos('datos',form.serialize());
					$("#datos").submit();
				});
				
				//alert("Enviamos todos los formularios");
			}
		}else{
			formulario = boton.replace("btnForm","envio");
			numErrores	    = 0;
			mensajesError 	+= comprobarValoracion(formulario);
			
			//alert("Envio del formulario " +  formulario +" con el botón " + boton);
			
			if (numErrores>0) {
				
				$("#chkrespuestas").html(mensajesError); 
				mostrardivoculto('chkrespuestas');
			}
			if (numErrores==0) {
				//$('#' + formulario).submit();
				//alert("Enviamos el formulario " + formulario);
				var form = $('#' + formulario);
				rellenarFormularioDatos('datos',form.serialize());
				$("#datos").submit();
			}
		
		}
	});
	
	$( "[id^='valoracion']" ).change(function() {
		
		var formulario 		= "";
		var seleccionado	= "";		
		
		formulario 		= $(this).attr("id").replace("valoracion","envio");
		seleccionado	= $('#' + formulario +' option:selected').attr("id");
		
		$('#' + formulario +' :hidden').each(
			function(index){  				
				if ($(this).attr("id")=='CSP_ID_ANSWER_VALUE'){
					$(this).val(seleccionado);					
				}			
				
		});		
		
	});
	
});