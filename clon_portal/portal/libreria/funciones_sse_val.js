// ****************************************************************************************
// LIBRERIA DE M4FUNCIONES DEL SSE
// ****************************************************************************************

/* Aqui vamos a ir añadiendo todas las funciones genericas JS de las paginas de validacion*/

//***************************
//FUNCION: m4activar
//FECHA: 
//
//PARAMETROS DE ENTRADA:
//COMENTARIOS: 
//***************************

function m4activar(){

	if ((activada != 1) && (null != document.all["aceptar"].length)){
	
		for (var n = 0; n < document.all["aceptar"].length; n++){
			matriz1[n]="Ac"+(2*n);
		}
		for (var j = 0; j < document.all["aceptar"].length; j++){
			document.all["aceptar"].item(j).name=matriz1[j];
		}
		for (var m = 0; m < document.all["cancelar"].length; m++){
			matriz2[m]="Ca"+(2*m+1);
		}
		for (var k = 0; k < document.all["cancelar"].length; k++){
			document.all["cancelar"].item(k).name=matriz2[k];
		}
		activada=1;
	}
}

//***************************
//FUNCION: m4desmarcar
//FECHA: 
//
//PARAMETROS DE ENTRADA:
//COMENTARIOS: 
//***************************
	
function m4desmarcar(){

	if (null == document.all["aceptar"].length){
		document.all["aceptar"].checked = 0;
	}
	else{
		for (var i = 0; i < document.all["aceptar"].length; i++){		
					document.all["aceptar"].item(i).checked = 0 }
		}
		
		if (null == document.all["cancelar"].length){
		document.all["cancelar"].checked = 0;
		}
		else{
		for (var j = 0; j < document.all["cancelar"].length; j++){		
					document.all["cancelar"].item(j).checked = 0}
		}
}

//***************************
//FUNCION: m4marcaraceptar
//FECHA: 
//
//PARAMETROS DE ENTRADA:
//COMENTARIOS: 
//***************************

function m4marcaraceptar(){

	m4activar();
	m4desmarcar();
	if (null == document.all["aceptar"].length){
		document.all["aceptar"].checked=1;
	}		
	for (var i = 0; i < document.all["aceptar"].length; i++){		
		document.all["aceptar"].item(i).checked=1;
		//alert(document.all.cancelar.tags("INPUT").length);
	}
}
	
//***************************
//FUNCION: m4marcarcancelar
//FECHA: 
//
//PARAMETROS DE ENTRADA:
//COMENTARIOS: 
//***************************
function m4marcarcancelar(){
		
	m4activar();
	m4desmarcar();
	//alert(activada);
	//for (var i = 0; i < document.all.length; i++){
	//for (var l = 0; l < matriz2.length; l++){
	//if (document.all.item(i).tagName == "INPUT"){
	//if (document.all.item(i).name == matriz2[l]){
	
	if (null == document.all["cancelar"].length){
		document.all["cancelar"].checked=1;
	}		

	for (var i = 0; i < document.all["cancelar"].length; i++){
		document.all["cancelar"].item(i).checked=1;
		//alert(document.all["cancelar"].item(i).name);
	}
}
	
//***************************
//FUNCION: m4validar
//FECHA: 
//
//PARAMETROS DE ENTRADA:
//COMENTARIOS: 
//***************************
function m4validar(){

	m4activar();
	
	if ("INPUT" == event.srcElement.tagName){
		ElementoActual = event.srcElement;
	  	cadena = ElementoActual.name;
	    indice = ElementoActual.name;
		cadena1 = cadena.substring(2,0);
		indice1 = indice.substring(2,6);
			
		if (document.all["aceptar"].name == ElementoActual.name) {
	
			if (document.all["cancelar"].checked == 1){
				document.all["cancelar"].checked = 0;
			}
		}
		if (document.all["cancelar"].name == ElementoActual.name) {
	
			if (document.all["aceptar"].checked == 1){
				document.all["aceptar"].checked = 0;
			}
		}  
	 
		if (cadena1 == "Ac") {
			nombreasoc = "Ca"+(parseInt(indice1)+1)
			for (var i = 0; i < document.all["cancelar"].length; i++){
				if (document.all["cancelar"].item(i).name == nombreasoc) {
				
					if (document.all["cancelar"].item(i).checked == 1){
						document.all["cancelar"].item(i).checked = 0;
					}
				}
			}
		}
		if (cadena1 == "Ca") {
			nombreasoc = "Ac"+(parseInt(indice1)-1)
			for (var j = 0; j < document.all["aceptar"].length; j++){
				if (document.all["aceptar"].item(j).name == nombreasoc) {
					if (document.all["aceptar"].item(j).checked == 1){
						document.all["aceptar"].item(j).checked = 0;
					}
				}
			}
		}
	}
}
//***************************
//FUNCION: m4sincro
//FECHA: 
//
//PARAMETROS DE ENTRADA:
//COMENTARIOS: 
//***************************
function m4sincro(){

	if (null == document.all["motivo"].length){
		document.all["motivo"].value = motivog.value;
	}
	
	for (var i = 0; i < document.all["motivo"].length; i++){
	
		document.all["motivo"].item(i).value = motivog.value;
	}
	
}