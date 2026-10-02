// LIBRERIA DE M4FUNCIONES DEL SSE
//***************************
//FUNCION: m4luz
//FECHA: 28/07/2000
//PARAMETROS DE ENTRADA: objeto
//***************************
function m4luz(objeto){
	objeto.style.filter= "light(enabled=1)";
	objeto.filters.light.addAmbient(200,200,200,100);
	objeto.filters.light.addPoint(50,40,40,0,40,100,100);
}
//***************************
//FUNCION: m4oscuridad
//FECHA: 28/07/2000
//PARAMETROS DE ENTRADA: objeto
//***************************
function m4oscuridad(objeto){
	objeto.style.filter="light(enabled=0)";
	objeto.style.filter="shadow(enabled=0)";
}
//***************************
//FUNCION: m4luzgenerico
//FECHA: 28/07/2000
//PARAMETROS DE ENTRADA: objeto,R,G,B,X,Y,Z
//X -->  Coordena x del punto de luz 
//Y -->  Coordena y del punto de luz
//Z -->  Coordena z del punto de luz
//R -->  rojo (0-255)
//G -->  verde (0-255)
//B -->  azul (0-255)
//***************************
function m4luzgenerico(objeto,R,G,B,X,Y,Z){
	objeto.style.filter= "light(enabled=1)";
	objeto.filters.light.addAmbient(130,255,255,100);
	objeto.filters.light.addPoint(X,Y,Z,R,G,B,255);
}
//***************************
//FUNCION: m4sombra
//FECHA: 28/07/2000
//PARAMETROS DE ENTRADA:objeto
//***************************
function m4sombra(objeto){
	objeto.style.filter="shadow(color=#BBDDFF,direction=90,enabled=1)";
}	
//***************************
//FUNCION: m4luznoname
//FECHA: 28/07/2000
//PARAMETROS DE ENTRADA:objeto
//***************************
function m4luznoname(objeto){
	objeto.style.filter= "light(enabled=1)";
	objeto.filters.light.addAmbient(255,255,255,100);
	objeto.filters.light.addPoint(50,40,40,0,40,100,100);
}
//***************************
//FUNCION: m4ambientegenerico
//FECHA: 28/07/2000
//PARAMETROS DE ENTRADA: objeto,R,G,B,I
//***************************
function m4ambientegenerico(objeto,R,G,B,I){
	objeto.style.filter= "light(enabled=1)";
	objeto.filters.light.addAmbient(R,G,B,I);
	objeto.filters.light.addPoint(50,40,40,0,40,100,100);
}

//********************************************************
//FUNCION: m4luztotal
//FECHA: 20/10/2000
//PARAMETROS DE ENTRADA: objeto,ra,ga,ba,xp,yp,zp,rp,gp,bp
//********************************************************
function m4luztotal (objeto,ra,ga,ba,xp,yp,zp,rp,gp,bp){
  if(document.all){  
     var num_arg = m4luztotal.arguments.length;
     var color_amb = false;
     var coord_punto = false;
     var color_punto = false;
     var RA = 255;
     var GA = 255;
     var BA = 255;
     var IA = 100;
     var XP = 50;
     var YP = 40;
     var ZP = 40;
     var RP = 0;
     var GP = 40;
     var BP = 100;
     var IP = 100;
   if (num_arg == 0) {
        alert ("Debe seleccionar un objeto de tipo imagen, en la llamada a la funcion") }
    else if (num_arg == 1) {
        objeto.style.filter = "light(enabled=1)";
        objeto.filters.light.addAmbient(RA,GA,BA,IA);
         objeto.filters.light.addPoint(XP,YP,ZP,RP,GP,BP,IP);
       }
  else if (num_arg > 1) {
              if ((typeof(ra)!= "string") && (typeof(ga)!= "string") && (typeof(ba) != "string")) { color_amb =true};
              if ((typeof(xp)!= "string") && (typeof(yp)!= "string") && (typeof(zp)!= "string")) { coord_punto = true};
			  if ((typeof(rp)!= "string") && (typeof(gp)!= "string") && (typeof(bp)!= "string")) { color_punto = true};
	}
    if (color_amb == true) {
         if ((coord_punto == false) && (color_punto == false)) {
                objeto.style.filter = "light(enabled=1)";
                objeto.filters.light.addAmbient(ra,ga,ba,IA);
                objeto.filters.light.addPoint(XP,YP,ZP,RP,GP,BP,IP);
              }
               if ((coord_punto == false) && (color_punto == true)) {
                  objeto.style.filter = "light(enabled=1)";
                  objeto.filters.light.addAmbient(ra,ga,ba,IA);
                  objeto.filters.light.addPoint(XP,YP,ZP,rp,gp,bp,IP);
                  }
                    if ((coord_punto == true) && (color_punto == false)) {
                      objeto.style.filter = "light(enabled=1)";
                      objeto.filters.light.addAmbient(ra,ga,ba,IA);
                      objeto.filters.light.addPoint(xp,yp,zp,RP,GP,BP,IP);
                      }
                        if ((coord_punto == true) && (color_punto == true)) {
                          objeto.style.filter = "light(enabled=1)";
                          objeto.filters.light.addAmbient(ra,ga,ba,IA);
                          objeto.filters.light.addPoint(xp,yp,zp,rp,gp,bp,IP);
                          }
           }
      else if (color_amb == false) {
               if ((coord_punto == false) && (color_punto == true)) {
                  objeto.style.filter = "light(enabled=1)";
                  objeto.filters.light.addAmbient(RA,GA,BA,IA);
                  objeto.filters.light.addPoint(XP,YP,ZP,rp,gp,bp,IP);
                  }
                    if ((coord_punto == true) && (color_punto == false)) {
                      objeto.style.filter = "light(enabled=1)";
                      objeto.filters.light.addAmbient(RA,GA,BA,IA);
                      objeto.filters.light.addPoint(xp,yp,zp,RP,GP,BP,IP);
                      }
                          if ((coord_punto == true) && (color_punto == true)) {
                         objeto.style.filter = "light(enabled=1)";
                         objeto.filters.light.addAmbient(RA,GA,BA,IA);
                         objeto.filters.light.addPoint(xp,yp,zp,rp,gp,bp,IP);
                          }
           }
      }
}   
//***************************
//Clase m4dialogwin
//***************************
function m4dialogwin(objname,objeto){
this.objeto = objeto;
this.objname = objname;
this.returnedValue = "";
this.url = "";
this.width = 0;
this.height = 0;
this.left = 0;
this.top = 0;
this.m4y2k = m4y2k;
var now = new Date();
this.name = (now).getSeconds().toString();
this.month = now.getMonth();
this.year = this.m4y2k(now.getYear());
this.win = "";
this.m4opendialog = m4opendialog;
this.m4returnfunc = m4returnfunc;
}
function m4opendialog(url, width, height) {
	
		
			// Inicializacion de las propiedades del Objeto de dialogo
				this.url = url;
				this.width = width;
				this.height = height;
				
			// Centrado en la ventana principal (la que me crea)
				this.left = window.screenX + ((window.outerWidth - this.width) / 2); 
				this.top = window.screenY + ((window.outerHeight - this.height) / 2);
				var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=" + this.width + ",height=" + this.height;
			// Genero el dialogo y me aseguro de que tiene el foco
				this.win= window.open(this.url, this.name, attr);

		
}
function m4returnfunc(){
this.objeto.value = this.returnedValue;
}
function m4y2k(number)    { return (number < 1000) ? number + 1900 : number; }



//***************************
//FUNCION: m4calendario
//FECHA:
//PARAMETROS DE ENTRADA: objeto: es el "objeto" en el que el calendario va a retornar la fecha.
//COMENTARIOS: Valida para ie y ns 
//***************************	
function m4calendar(objeto) 
   {
     if (!document.all) {
		 if (typeof(ventana) != "object"){
			ventana = new m4dialogwin("ventana",objeto);
		 }
			ventana.objeto = objeto;
			ventana.m4opendialog("/servlet/CheckSecurity/JSP/sse_generico/calendario.jsp",430,240);
	 }
	else{
	  fecha = showModalDialog('/servlet/CheckSecurity/JSP/sse_generico/calendario.jsp', objeto.value,'dialogWidth=330pt;dialogHeight=212pt;maximize=no;minimize=no;border=thin;center=yes;help=no;');
	  objeto.value = fecha;
    }
}	
//***************************
//FUNCION: m4fechaingles
//FECHA:
//PARAMETROS DE ENTRADA:esp
//COMENTARIOS: Función para cambiar el formato de las fechas de inglés a español
//***************************	
function m4fechaingles(esp){   
	var dia=esp.substring(0,2);
	var mes=esp.substring(3,5);
	var ano=esp.substring(6,10);	
	ing = ano + "-" + mes +"-"+ dia;	
return(ing);
}
//***************************
//FUNCION: m4navegar
//FECHA:22/09/2000
//PARAMETROS DE ENTRADA:URL,parametros,valores 
//***************************	
function m4navegar(URL,parametros,valores){
if (m4navegar.arguments.lenght == 0){
alert("Debe pasar el parametro URL al menos");
}
else{
if ((typeof(parametros) != "undefined") && (typeof(valores) != "undefined")){ 
var salida = "";
var cadena = "";
for (i=0;i < parametros.length-1; i++){
cadena = cadena + parametros[i] + "=" + valores[i] + "&";
}
cadena = cadena +  parametros[parametros.length-1] + "=" + valores[parametros.length-1];
if ((parametros.length !=0) && (valores.length !=0) && (valores.length == parametros.length)){
salida = "/servlet/CheckSecurity/JSP/"+ URL + "?" + cadena;}
else{
salida = "/servlet/CheckSecurity/JSP/"+ URL;}
//alert(salida);
location.href=salida;
}
else{ location.href= "/servlet/CheckSecurity/JSP/"+ URL;}
}
}
//***************************
//FUNCION: m4url
//FECHA: 25/09/2000
//COMENTARIOS: Devuelve la dirección de la página actual.
//***************************	
function m4url() {
var zURL = location.href;
return zURL;
}
//***************************
//FUNCION: m4titulo
//FECHA: 25/09/2000
//COMENTARIOS: Devuelve el título de la página actual.
//***************************	
function m4titulo() {
var ztitulo = document.title;
return (ztitulo);
}
function m4date_usu(dianumero,mesnumero,anio){
var oreM = /M/i;
var oreD = /D/i;
var strdianumero = new String(dianumero); 
if (strdianumero.length != 2){strdianumero = '0' + strdianumero;}
var strmesnumero = new String(mesnumero);
if (strmesnumero.length != 2){strmesnumero = '0' + strmesnumero;}

	var scaracterinicial = sformatofechas.substring(0,1);
		if (scaracterinicial =="D" || scaracterinicial =="d"){
			if (sformatofechas.search(oreM) == 3 ) {
			var sfechasec = strdianumero + g_ssepfechas + strmesnumero + g_ssepfechas+ anio;
			}else{var sfechasec = strdianumero + g_ssepfechas + anio + g_ssepfechas + strmesnumero;}
		}
		if (scaracterinicial =="M"|| scaracterinicial =="m"){
			if (sformatofechas.search(oreD) == 3 ){
			var sfechasec = strmesnumero + g_ssepfechas + strdianumero + g_ssepfechas+ anio;
			}else{var sfechasec = strmesnumero + g_ssepfechas+ anio + g_ssepfechas + strdianumero;}
		}
		if (scaracterinicial =="Y" || scaracterinicial =="y"){
			if (sformatofechas.search(oreD) == 5 ){
			var sfechasec = anio + g_ssepfechas + strdianumero + g_ssepfechas + strmesnumero;
			}else{var sfechasec = anio + g_ssepfechas + strmesnumero + g_ssepfechas + strdianumero;}
		}
	return sfechasec;
}

//***************************
//FUNCION: m4fechahoy
//FECHA:
//COMENTARIOS: Devuelve la fecha de hoy en dd-mm-yyyy
//***************************	
function m4fechahoy(){	
	 var d = new Date();	
	 var stoday = m4date_usu(d.getDate(),d.getMonth() + 1,d.getFullYear());
	 return stoday;
}
//***************************
//FUNCION: m4sustituiramp
//FECHA: 2/10/2000
//COMENTARIOS: Sustituye el & de la cadena por el caracter que se le pase.
//NOTA: YA NO SE USA.
//***************************	
function m4sustituiramp (cadena, sustituto) {
var zamp = /&/g;
var zcadena_sin_amps = cadena.replace (zamp, sustituto);
return (zcadena_sin_amps);
}
//***************************************************************
//FUNCION: m4select
//FECHA: 2/10/2000
//PARAMETROS: idselect (String), modo (String) (valores posibles text,value)
//COMENTARIOS: Funcion que captura el valor de una select, retorna el text 
//o el value del option seleccionado, o el String "vacio" si no hay seleccionado ninguno
//***************************************************************
function m4select(select,idform,modo){
	if (m4select.arguments.length == 3){
	 var oselect = document.forms[idform].elements[select];
	}
	else {
	 var oselect = select;
	 modo = m4select.arguments[1];
	 
	}	
	if (typeof(oselect) == "object"){
		var objselect = oselect;		
		switch(modo)
		{
		case "text" :
			//alert(objselect.options[objselect.selectedIndex].text);
			return objselect.options[objselect.selectedIndex].text;
		case "value" :
			//alert(objselect.options[objselect.selectedIndex].value);
			return objselect.options[objselect.selectedIndex].value;
		case "id" :
	
			return objselect.options[objselect.selectedIndex].id;

		default :
			alert("Modo no valido en m4select");
			return "vacio";
		}
	}
	else
	{
	alert("Objeto select no definido");
	}
}
//***************************************************************
//FUNCION: m4focus
//FECHA: 10/10/2000
//***************************************************************
function m4focus(idform,idobjeto){
if (typeof(document.forms[idform].elements[idobjeto]) != "undefined")
{
document.forms[idform].elements[idobjeto].focus();
}
else
{
alert("El objeto referenciado no existe");
}
}
//***************************************************************
//FUNCION: m4valor
//FECHA: 10/10/2000
//***************************************************************
function m4valor(idform,idobjeto,valor,modo)
{
	var objeto = document.forms[idform].elements[idobjeto];
	if (typeof(objeto) != "undefined"){
		switch(modo)
		{
		case "set" :
			objeto.value = valor;
		case "get" :
			return objeto.value;
		default : 
		alert("Modo de m4valor no valido");
		}
	}
	else
	{
	alert("El objeto referenciado no existe");
	return "Objeto no definido \nObjeto.value no definido";
	}
}
//***************************************************************
//FUNCION: m4write
//FECHA: 10/10/2000
//***************************************************************
function m4write(text,elemento,tipo,id,idobjetopadre)
{
if ((m4write.arguments.length > 1) && (document.all)){
   var parentElem = document.all["capa_cuerpo"];
   var oNewElement=document.createElement(elemento);
   if(tipo){
      oNewElement.type=tipo;
      oNewElement.value=text;
      oNewElement.id=id;
   }
   if(text){
      if(elemento.toLowerCase()!="input"){
         var oNewText=document.createTextNode(text);
         oNewElement.appendChild(oNewText);
      }
      
   }
   if(idobjetopadre){
	 var objPadre = document.all[idobjetopadre];
     objPadre.appendChild(oNewElement);
   }
   else{
      parentElem.appendChild(oNewElement);
   }
	//alert(document.all[id].value);
}
else 
{
if (typeof(text) == "string"){
document.write(text);
}
else
{
alert("El parametro text debe ser un String");
} 
}
}

//********************************************************
//FUNCION: m4compfechas
//FECHA: 15/10/2000
//PARAMETROS DE ENTRADA: fec1, comp, fec2
//COMENTARIOS: Compara la fecha 'fec1', con la fecha 'fec2'.
//********************************************************
function m4compfechas (fec1, comp, fec2)  {
vcoClassDatescomp =new m4class_val("_date","","","");
vcoClassDatescomp.m4met_com(fec1.value,fec2.value,comp,"_date");
return vcoClassDatescomp.m4met_com(fec1.value,fec2.value,comp,"_date");
}
 
function m4fechacomprobacion(fec,mensaje){
vcoClassDates =new m4class_val("_date","","","");
vcoClassDates.m4met_val(fec);
return vcoClassDates.m4prop_bresultval;
                     
}
//***************************************************************************************************
//FUNCION: m4sustituir
//FECHA: 18/12/2000
//PARAMETROS DE ENTRADA: cadena
//COMENTARIOS: Sustituye el carácter coma, si lo hubiera, por el punto en la cadena de números de entrada. 
//***************************************************************************************************   
function m4sustituir(cadena) {
   var pos1 = 0;
   var pos2 = 0;
   var sl1 = '';
   var sl2 = '';
   var cont1 = 0;
   var cont2 = 0;
   var aux = '';
   var result = '';
   var vfinal='';
   var expresion = false;
   var pos_aux = 0;
   var cad_aux = '';
   var ceros = 0;
   var long_aux = 0;
   var punt = 0;
   var pos_aux2 = 0;
   var cad_aux2 = '';
   var aux2 = 0;
   var ceros2 = 0;
   var long_aux2 = 0;
   var punt2 = 0;
   var ant = 0;
   var derecha = '';
   var izqda2 = '';
   var seguir=false;
   var validar=false;
   var continuar= false;
   var coma=/,/g;
   var punto=/\./g;
   var zero=/0/g;
   var longitud = cadena.length;   
   var primero = cadena.substring(0,1);
   var ultimo = cadena.substring(longitud-1,longitud);   
   var objeto = new RegExp("^\\d{" + 1 +"," + 20 + "}$");
      if ((primero==".") || (primero==",") || (ultimo==".") || (ultimo==",")) {
           continuar = false;
      }
      else {continuar = true;}
      if (continuar) {
          cont1=0;
          pos1 = cadena.search(coma);
          sl1 = cadena.slice(pos1+1);
          while ((cont1<2) && (pos1!=-1)) {
                  cont1 = cont1+1;
                  pos1=sl1.search(coma);
                  sl1=sl1.slice(pos1+1);
          }
          cont2=0;
          pos2 = cadena.search(punto);
          sl2 = cadena.slice(pos2+1);
          while ((cont2<2) && (pos2!=-1)) {
                  cont2 = cont2+1;
                  pos2 =sl2.search(punto);
                  sl2=sl2.slice(pos2+1);
          }
          if ((cont1>1) || (cont2>1) || ((cont1+cont2)>1)) {
               seguir=false;
          }
          else {seguir=true;}
          if (seguir) {
              aux = cadena.replace(coma,'');
              result = aux.replace(punto,'');
          }
          validar=objeto.test(result);
          if (validar) {
              vfinal = cadena.replace(coma,".");
          }
       }
       if ((validar) && (seguir)) {
            pos_aux=vfinal.search(punto);
            cad_aux = vfinal.slice(pos_aux + 1);
            long_aux = cad_aux.length;
            aux = long_aux;
            punt = cad_aux.substring(long_aux-1,long_aux);
            ceros = 0;
            while ((punt == 0) && (ceros< long_aux)) { 
                    ceros = ceros + 1;
                    aux = aux -1;
                    if (aux != 0) { punt=cad_aux.substring(aux-1,aux); }
            }
            if ((ceros == long_aux) && (pos_aux != -1)){
                 derecha = cad_aux.replace(zero,'');                                                                              
            }
            if ((ceros < long_aux) && (pos_aux != -1)){
                 derecha =vfinal.slice(pos_aux); 
            }
            if (pos_aux == -1) {
                derecha = vfinal.slice(pos_aux+1);
            }
	        pos_aux2=vfinal.search(punto);
            cad_aux2=vfinal.substring(0,pos_aux2);
            long_aux2=cad_aux2.length;
            aux2=0;
            ant=0;
            ceros2=0;
            punt2=cad_aux2.substring(aux2,aux2+1);
            if (punt2 == 0) {
                 ant=punt2;
                 aux2=aux2+1;
                 ceros2=ceros2+1;
                 punt2=cad_aux2.substring(aux2,aux2+1);
                 izqda2=cad_aux2.substring(aux2,long_aux2);
                 while ((aux2< long_aux2) && (punt2==0)) {
                    if (ant == 0){         
                          aux2=aux2+1;
                          ceros2=ceros2+1;
                          ant=punt2;
                          punt2=cad_aux2.substring(aux2,aux2+1);
                          izqda2=cad_aux2.substring(aux2,long_aux2);
                    }
                 }
                 if (ceros2==long_aux2) {
                     izqda2=0;}
                 }
                 else { izqda2 = vfinal.substring(0,pos_aux2);}
         final2=izqda2+derecha;
       }
  expresion = ((continuar==true) && (seguir==true) && (validar==true));
  switch (expresion){
    case true:
         return(final2);
         break;
    case false:
         return(false);
         break;
  }
}
//***************************************************************************************************
//FUNCION: m4submit
//FECHA: 19/12/2000
//PARAMETROS DE ENTRADA: id del formulario (String)
//COMENTARIOS: Hace un submit del formulario en cuestión
//*************************************************************************************************** 
function m4submit(id){
	if (typeof(document.forms[id]) != "undefined"){
		document.forms[id].submit();
	}
	else{
		alert("Formulario no definido");
	}
}
//******************************************************************************************
//FUNCION: m4sust_general
//FECHA: 22/12/2000
//PARAMETROS DE ENTRADA: cadena, asustituir, sustituto
//COMENTARIOS: 
//*************************************************************************************
function m4sust_general(cadena,asustituir,sustituto){
    if ((asustituir == "*")||(asustituir == ".")||(asustituir == "n")||(asustituir == "f")||(asustituir == "r")||(asustituir == "t")||(asustituir == "v")||(asustituir == "?")||(asustituir == "+")||(asustituir == "|")||(asustituir == "{")||(asustituir =="}")||(asustituir == "[")||(asustituir == "]")||(asustituir == "(")||(asustituir == ")")){
       var comodin = new RegExp("\\"+asustituir);
    }
    else {
        var comodin = new RegExp(asustituir); 
    }  
   if (typeof(cadena) == "string") {
             result=cadena.replace(comodin,sustituto);
             return(result);
    }
}


//******************************************************************************************
//FUNCION: ocultarElemento
//FECHA: 19/04/2001
//PARAMETROS DE ENTRADA: tipo de objeto
//COMENTARIOS: Oculta los elementos del tipo indicado en el argumento 
//*************************************************************************************
function ocultarElemento(tipoObjeto,capa)
{
	var currentMenu;
	currentMenu = document.all[capa];
	currentMenuLeft   = currentMenu.offsetLeft;
	currentMenuTop    = currentMenu.offsetTop;
	currentMenuParent = currentMenu.offsetParent;
	while (currentMenuParent.tagName.toUpperCase() != "BODY")
		{
			currentMenuLeft  += currentMenuParent.offsetLeft;
			currentMenuTop   += currentMenuParent.offsetTop;
			currentMenuParent = currentMenuParent.offsetParent;
		}
	for (i = 0; i < document.all.tags(tipoObjeto).length; i++)
	{
		obj = document.all.tags(tipoObjeto)[i];
		objLeft   = obj.offsetLeft;
		objTop    = obj.offsetTop;
		objParent = obj.offsetParent;

		while (objParent.tagName.toUpperCase() != "BODY")
		{
			objLeft  += objParent.offsetLeft;
			objTop   += objParent.offsetTop;
			objParent = objParent.offsetParent;
		}
		if (objLeft > (currentMenuLeft + currentMenu.offsetWidth) || currentMenuLeft > (objLeft + obj.offsetWidth))
			;
		else if(objTop > (currentMenuTop + currentMenu.offsetHeight))
			;
		else
			obj.style.visibility = "hidden";
		
	}
}


//******************************************************************************************
//FUNCION: mostrarElemento
//FECHA: 19/04/2001
//PARAMETROS DE ENTRADA: tipo de objeto
//COMENTARIOS: muestra los elementos del tipo indicado en el argumento 
//*************************************************************************************
function mostrarElemento(tipoObjeto)
{
	for (i = 0; i < document.all.tags(tipoObjeto).length; i++)
	{
		obj = document.all.tags(tipoObjeto)[i];
		obj.style.visibility = "";
	}
}


//******************************************************************************************
//FUNCION: m4checknumber
//FECHA: 11/01/2006
//PARAMETROS DE ENTRADA: Valor, cantidad de enteros, cantidad de decimales
//COMENTARIOS: Verifica que el valor sea numérico y que se encuentre dentro de los enteros y decimales permitidos
//*************************************************************************************
function m4checknumber(value,intAllowed,decAllowed) {

	if (isNaN(value) || value == "") {
		return false
	} else {
		if (value.indexOf('.') == -1) value += ".";
		
		var dectext = value.substring(value.indexOf('.')+1, value.length);
		var intext = value.substring(0,value.indexOf('.'))
		if (intext.length > intAllowed)
			return false;

		if (dectext.length > decAllowed)
		{
			return false;
		} else {
			return true;
		}
	}
}













