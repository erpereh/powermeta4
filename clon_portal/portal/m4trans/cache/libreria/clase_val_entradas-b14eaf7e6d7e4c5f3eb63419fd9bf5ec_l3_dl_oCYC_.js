function m4validar(obj){

    //alert(this.tipo);
	//alert (obj.value);
var defecto = true;
this.mensaje = "";

if (this.tipo == "_fechaing"){
		var defecto = false;
		var objeto = /(^\d{4}-(0[13578]{1}|1[02]{1})-(0[1-9]{1}|[12]{1}\d{1}|30|31)$)|(^\d{4}-(0[469]{1}|11)-(0[1-9]{1}|[12]{1}\d{1}|30)$)|(^\d{4}-02-(0[1-9]{1}|1[0-9]{1}|2[0-8]{1})$)/;
		this.resultado = objeto.test(obj.value);
}
if (this.tipo == "_fechaesp"){
		var defecto = false;
		var objeto = /(^(0[1-9]{1}|[12]{1}\d{1}|30|31)-(0[13578]{1}|1[02]{1})-\d{4}$)|(^(0[1-9]{1}|[12]{1}\d{1}|30)-(0[469]{1}|11)-\d{4}$)|(^(0[1-9]{1}|1[0-9]{1}|2[0-8]{1})-02-\d{4}$)/;
		//var objeto =/^(0[1-9]{1}|[12]{1}\d{1}|30|31)-(0[13578]{1}|1[02]{1})-\d{4}$/;
		//var objeto =/^(0[1-9]{1}|[12]{1}\d{1}|30)-(0[469]{1}|11)-\d{4}$/;
		//var objeto =/^(0[1-9]{1}|1[0-9]{1}|2[0-8]{1})-02-\d{4}$/; 
		this.resultado = objeto.test(obj.value);
}
if (this.tipo == "_email"){
		var defecto = false;
		var objeto = /^[a-z0-9]([a-z0-9_\-\.]*)@([a-z0-9_\-\.]*)(\.[a-z]{2,3}(\.[a-z]{2}){0,2})$/i;
		this.resultado = objeto.test(obj.value);
}
if (this.tipo == "_cp"){
		var defecto = false;
		//var objeto = /^\d{5}$/;
		var objeto = /^[A-Za-z0-9\-]+$/;
		this.resultado = objeto.test(obj.value);		
}
if (this.tipo == "_nif"){
		var defecto = false;
		var objeto = /^\d{1,8}[a-zA-Z]{1}$/;
		this.resultado = objeto.test(obj.value);		
}
if (this.tipo == "_str"){
		var defecto = false;
		if (this.parametro1 != "" && this.parametro2 != ""){
		var objeto = new RegExp("^[ a-zA-Z.,áéíóúÁÉÍÓÚÜü]{" + this.parametro1 +"," + this.parametro2 + "}$");
		this.resultado = objeto.test(obj.value);
		}
		else {
		alert("parametros no definidos");
		}		
}
if (this.tipo == "_num"){
		var defecto = false;
		if (this.parametro1 != "" && this.parametro2 != ""){
		var objeto = new RegExp("^\\d{" + this.parametro1 +"," + this.parametro2 + "}$");
		this.resultado = objeto.test(obj.value);
		}
		else {
		alert("parametros no definidos");
		}		
}
if (this.tipo == "_alfanum"){
		var defecto = false;
		if (this.parametro1 != "" && this.parametro2 != ""){
		var objeto = new RegExp("^[ a-zA-Z0-9.,ãÃõÕàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛáéíóúÁÉÍÓÚäëïöüÄËÏÖÜæÆœŒñÑçÇªº@%ŠšŸƒÅÏĞÖ×ØİŞßåğøışÿ‰¢,_,\\-,:,\\,,\(,\),\',&,^,`,´,\",/,\$,€,£,\\\\]{" + this.parametro1 +"," + this.parametro2 + "}$");

		this.resultado = objeto.test(obj.value);
		}
		else {
		alert("parametros no definidos");
		}		
}
if (this.tipo == "_decimal"){
		var defecto = false;
		if (this.parametro1 != ""){
		//var objeto = new RegExp("(^[1-9]{1}[0-9]*\\.\\d{" + this.parametro1 + "}$)|(^0\\.\\d{" + this.parametro1 + "}$)");
		var objeto = new RegExp("(^[1-9]{1}[0-9]*\\.\\d{" + this.parametro1 + "}$)|(^0\\.\\d{" + this.parametro1 + "}$)|(^\\d{" + this.parametro1 +"," + this.parametro2 + "})$");	
		this.resultado = objeto.test(obj.value);
		}
		else {
		alert("numero de decimales (parametro1) no definido");
		}		
}
if (this.tipo == "_decimal2"){
		var defecto = false;
		if (this.parametro1 != ""){
		var objeto = new RegExp("(^[1-9])|(^[1-9]{1}[0-9]*\\.\\d{" + this.parametro1 + "}$)|(^0\\.\\d{" + this.parametro1 + "}$)|(^\\d{" + this.parametro1 +"," + this.parametro2 + "})$");	                         	
		this.resultado = objeto.test(obj.value);
		}
		else {
		alert("numero de decimales (parametro1) no definido");
		}		
}
if (this.tipo == "_num_decimal"){
		//parametro 1 : partie entiere
		//parametro 2 : partie decimale
		var defecto = false;
		if (this.parametro1 != ""){
		var objeto = new RegExp("^\\d{1,"+ this.parametro1 +"}(?:[\\.,]\\d{1,"+ this.parametro2 +"})?$");
                      	
		this.resultado = objeto.test(obj.value);
		}
		else {
			alert("Arguments missing");
		}		
}
if (this.tipo == "_telef"){
		var defecto = false;
		var objeto = /^[0-9\(\)-\\+\/ ]{9,16}$/;
		this.resultado = objeto.test(obj.value);		
}

if (this.tipo == "_hours_minutes"){
		//parametro 1 : hours
		//parametro 2 : minutes
		var defecto = false;
		if (this.parametro1 != ""){
		var objeto = new RegExp("^\\d{1,"+ this.parametro1 +"}(?:[\\:]\\d{1,"+ this.parametro2 +"})?$");
                      	
		this.resultado = objeto.test(obj.value);
		}
		else {
			alert("Arguments missing");
		}		
}



//alert(this.resultado);
if (defecto == true){
alert("Tipo de validacion no definido");
return;
}

if (this.resultado == false){
		if ((this.validanook != "") && (this.me == true)){
			this.mensaje = this.validanook;
			alert(this.validanook);
		}
		else{
			if (this.me == true){
			alert("La cadena no pasa la validacion");
			}
		}
}
}			

function m4objvalidacion(tipo,parametro1,parametro2,validanook,me){
this.tipo = tipo;
this.parametro1 = parametro1;
this.parametro2 = parametro2;
this.validanook = validanook;
this.me = me;
this.resultado = false;
this.mensaje = "";
this.m4validar = m4validar;
}	 
