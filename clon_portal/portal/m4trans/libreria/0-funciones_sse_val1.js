/* Aqui vamos a ir añadiendo todas las funciones genericas JavaScript de las paginas de validacion*/


function validar(checkboxclick,checkboxnoclick){
//var cadena= checkbox.value.substring(2,0);
//var indice= checkbox.value.substring(8,2);
//var nindice = parseInt(indice);
//alert(cadena);
//alert(indice);
//alert(checkboxclick.checked);
if (checkboxclick.checked ==true){
if (checkboxnoclick.checked==true){ 
checkboxnoclick.checked = false;
}
}
}

function m4marcaraceptar(){
	
	if (typeof(document.forms['a0']) != "undefined"){
		m4desmarcar();
		//var i= 0;
		//var hola = "a" + i;
		//alert(hola);
		
		var numregistros = parseInt(document.forms['a0'].elements[1].name);
		//alert(numregistros);
		
		for (var i = 0; i < numregistros; i++){
			
			var formulario = "b" + i;
			document.forms[formulario].elements[0].checked = true;
		}
	}
}

function m4desmarcar(){
if (typeof(document.forms['a0']) != "undefined"){
var numregistros = parseInt(document.forms['a0'].elements[1].name);
for (var i = 0; i < numregistros; i++){
			
			var formulario = "b" + i;
			document.forms[formulario].elements[0].checked = false;
			document.forms[formulario].elements[1].checked = false;
		
}
}
}
function m4marcarcancelar(){
	if (typeof(document.forms['a0']) != "undefined"){		
		m4desmarcar();
		//var i= 0;
		//var hola = "a" + i;
		//alert(hola);
		//var pepe = document.forms[hola].elements[1].name;
		var numregistros = parseInt(document.forms['a0'].elements[1].name);
		//alert(numregistros);
		//alert(pepe);
		for (var i = 0; i < numregistros; i++){
			
			var formulario = "b" + i;
			document.forms[formulario].elements[1].checked = true;
			
		
		}
	}
}


function m4sincro(){
	if (typeof(document.forms['a0']) != "undefined"){
		var numregistros = parseInt(document.forms['a0'].elements[1].name);
		//alert(numregistros);
		if (null == numregistros){
		return;
		}
		else{
	
		for (var i = 0; i < numregistros; i++){
		var formulario = "c" + i;
		document.forms[formulario].elements[0].value = document.forms["motivo"].elements[0].value;
		}
		}
	}	
}