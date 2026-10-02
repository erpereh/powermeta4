
function m4tit(){
var acc = m4valor("NombreFormulario","ACC","","get");
if (acc=="UPD"){
	
	var msg = m4getmessage("_setlog_act");

}else{
	var msg = m4getmessage("_setlog_new");
}
var ocell = m4elemento("m4tit");
if ( ocell.hasChildNodes() == true) { ocell.removeChild(ocell.firstChild);}			
var textocelda = document.createTextNode(msg);
ocell.appendChild(textocelda);
 m4foc();
}
function m4del(){
var oobjeto = document.forms["NombreFormulario"].elements["ACC"];
oobjeto.value = "DEL";
m4submit("NombreFormulario");
}

function m4act(){
var oobjeto = document.forms["NombreFormulario"].elements["ACC"];
oobjeto.value = "UPD";

m4tit();
m4cambiopk("0");

}

function m4limp(){

var celementos = document.forms["NombreFormulario"].elements;
var sidelement = "";
var sresult="";
var sexcepcionelements = "";

var oExceptionRegExp = new RegExp(sexcepcionelements);
for (var ni = 0; ni < celementos.length; ni++){
  sidelement =  celementos[ni].id
  sresult=sidelement.match(oExceptionRegExp);
  if  (sresult == null || sresult ==""){
	if (celementos[ni].tagName == "INPUT"){
		var stype = celementos[ni].getAttribute("type");
		if ((stype.toUpperCase() == "TEXT") || (stype.toUpperCase() == "PASSWORD")){
		celementos[ni].setAttribute("value","");
		}
		if (stype.toUpperCase() == "CHECKBOX"){
		celementos[ni].setAttribute("checked","");
		}
	}
	else if (celementos[ni].tagName == "SELECT"){
		celementos[ni].setAttribute("selectedIndex",-1);
	}
	else if (celementos[ni].tagName == "TEXTAREA"){
		celementos[ni].setAttribute("value","");
	}
  }	
}
m4valor("NombreFormulario","ACC","INS","set");
m4tit();
m4cambiopk("1");
}

function m4cambiopk(varcam){
	var celementos = document.forms["NombreFormulario"].elements;
	if (varcam=="0"){cam="i_read_only"}else{cam="i_normal"}
	for (var ni = 0; ni < celementos.length; ni++){
		sidelement =  celementos[ni].id;
		sidelement1 = sidelement.substr(0,1);
		if (sidelement1=="X"){
   			if (varcam=="0"){
		 		sDisabled = m4change('NombreFormulario',sidelement,'disabled','','get');
		 		sReadOnly = m4change('NombreFormulario',sidelement,'readOnly','','get');							if (sDisabled == false && sReadOnly == false){
						m4change('NombreFormulario',sidelement,'className',cam,'set');
						m4change('NombreFormulario',sidelement,'readOnly','readOnly','set');
				}	
			}else{
			
		 		sReadOnly = m4change('NombreFormulario',sidelement,'readOnly','','get');
				if ( sReadOnly == true){
						m4change('NombreFormulario',sidelement,'className',cam,'set');
						m4change('NombreFormulario',sidelement,'readOnly','','set');
				}
			}
		}
}
	
}

function m4change(sidform,sidobjeto,satributo,vvalor,smodo){
var oobjeto = document.forms[sidform].elements[sidobjeto];

switch(smodo){
case "set" :


		if ((oobjeto.length >0) && ( oobjeto[0].tagName == "INPUT" && oobjeto[0].getAttribute("type").toUpperCase() =="RADIO")){
   			for (i=0; i<oobjeto.length; i++) {
   		
   				eval("oobjeto[i]."+ satributo+ "="+ "'" + vvalor + "';");	
			}
		}else{


			eval("oobjeto."+ satributo+ "="+ "'" + vvalor + "';");		
		}
	
	break;
case "get" :

	if (oobjeto.length >0){ // Si es radiobutton tomar el activo
		if ((oobjeto[0].tagName == "INPUT")&& (oobjeto[0].getAttribute("type").toUpperCase() == "RADIO")){
		    var bexisteactivo = false;
			for (i=0; i<oobjeto.length; i++) if (oobjeto[i].checked == true){
			   oobjeto=oobjeto[i];
			   bexisteactivo = true;
			 }
			 
		}	     
	}	
	
		
		eval(" sreturn = oobjeto."+ satributo);
		return (sreturn);
	
	
	break;		
default : 
		return null;
}

}
function m4foc(){
	var celementos = document.forms["NombreFormulario"].elements;

for (var ni = 0; ni < celementos.length; ni++){
	var sindex = celementos[ni].getAttribute("tabindex");
	if (sindex == 1){
		celementos[ni].focus();
		break;
	}
}
}