/*
	@(#)FileVersion: 811.000.008
	@(#)FileDescription: Funciones genericas de javascript
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: m4gen.js
	@(#)Date: 23/03/2002 
*/

function m4rewritecell(sidcell,stexto){
try{
	if ( m4rewritecell.arguments.length < 2) throw (new m4class_numparametrosincorrecto("m4rewritecell", m4rewritecell.arguments.length,2)); 
	var ocell = m4elemento(sidcell);
	if ( ocell.hasChildNodes() == true) { ocell.removeChild(ocell.firstChild);}			
	var textocelda = document.createTextNode(stexto);
	ocell.appendChild(textocelda);
}
catch(excepcion){m4err_gen(excepcion);}
}

function m4select(vidform,vselect,smodo){
try{
	if (m4select.arguments.length < 2) throw (new m4class_numparametrosincorrecto("m4select",m4select.arguments.length,2)); 
	if (m4select.arguments.length == 3){
		if (typeof(document.forms[vidform]) == "undefined" || typeof(document.forms[vidform].elements[vselect]) == "undefined") throw (new m4class_noexisteelemento("m4select",vidform,vselect)); 
		var oselect = document.forms[vidform].elements[vselect];
	}
	if (m4select.arguments.length == 2){
		if (typeof(m4select.arguments[0]) != "object") throw (new m4class_noexisteobjeto("m4select"));
		var oselect = m4select.arguments[0];
		smodo = m4select.arguments[1];
	}
	if (oselect.tagName != "SELECT") throw (new m4class_objetotipoincorrecto("m4select",oselect.id));
	if (smodo!="text" && smodo!="value" && smodo!="id") throw (new m4class_modonodefinido("m4select",smodo));	
	if (oselect.selectedIndex == -1) return null;
		switch(smodo)
		{
		case "text" :
			return oselect.options[oselect.selectedIndex].text;
		case "value" :
			return oselect.options[oselect.selectedIndex].value;
		case "id" :
			return oselect.options[oselect.selectedIndex].id;
		default : 
		}
}
catch(excepcion){m4err_gen(excepcion);return null;}
}
function m4genoption(oselect,sid,svalue,stext){
try{
	if (m4genoption.arguments.length < 4) throw (new m4class_numparametrosincorrecto("m4genoption",m4genoption.arguments.length,4)); 
	if (typeof(oselect) != "object") throw (new m4class_noexisteobjeto("m4genoption"));
	if (oselect.tagName != "SELECT") throw (new m4class_objetotipoincorrecto("m4select",oselect.id));
	var ooption = new Option();
	ooption.id = sid;
	ooption.value = svalue;
	ooption.text = stext;
	oselect.options[oselect.options.length] = ooption;	
}
catch(excepcion){m4err_gen(excepcion);}
}
function m4searchoption(oselect,sidoption){
try{
    
	if (m4searchoption.arguments.length < 2) throw (new m4class_numparametrosincorrecto("m4searchoption",m4searchoption.arguments.length,2)); 
	if (typeof(oselect) != "object") throw (new m4class_noexisteobjeto("m4genoption"));
	if (oselect.tagName != "SELECT") throw (new m4class_objetotipoincorrecto("m4select",oselect.id));
	for(var ni=0; ni< oselect.options.length; ni++){    
		if (oselect.options[ni].id == sidoption){
		oselect.selectedIndex = ni; 
		break;
		}
	}	
}
catch(excepcion){m4err_gen(excepcion);}
}
function m4class_dialogwin(sobjname,aobjeto,sidpage){
try{
if (m4class_dialogwin.arguments.length < 2) throw (new m4class_numparametrosincorrecto("m4class_dialogwin",m4class_dialogwin.arguments.length,2));
if (typeof(aobjeto) != "object") throw (new m4class_tipoerroneo("m4class_dialogwin","aobjeto",typeof(aobjeto),"object"));
this.m4prop_sidpage = sidpage;
this.m4prop_sobjname = sobjname;
this.m4prop_areturnedValue = aobjeto;
this.m4prop_surl = "";
this.m4prop_nwidth = 0;
this.m4prop_nheight = 0;
this.m4prop_nleft = 0;
this.m4prop_ntop = 0;
this.m4prop_resizable = "yes";
this.m4prop_scrollbars = "yes";
this.m4prop_usewindowid = false;
this.m4prop_status = "no";
var dnow = new Date();
this.m4prop_sname = (dnow).getSeconds().toString();
this.m4prop_owin = "";
this.m4met_m4opendialog = m4opendialog;
this.m4prop_afterclosewindowmet ="";
}
catch(excepcion){m4err_gen(excepcion);}
}
function m4opendialog(surl, nwidth, nheight){
try{
	
	if (m4opendialog.arguments.length < 3) throw (new m4class_numparametrosincorrecto("m4opendialog",m4opendialog.arguments.length,3));
	// Inicializacion de las propiedades del Objeto de dialogo
				this.m4prop_surl = surl;
				this.m4prop_nwidth = nwidth;
				this.m4prop_nheight = nheight;
				
	// Centrado en la ventana principal (la que me crea)
				this.m4prop_nleft = (screen.availWidth -this.m4prop_nwidth)/2;
				this.m4prop_ntop =(screen.availHeight - this.m4prop_nheight)/2;
				//var attr = "screenX=" + this.m4prop_nleft + ",screenY=" + this.m4prop_ntop + ",resizable=" + this.m4prop_resizable + ",scrollbars=" + this.m4prop_scrollbars + ",width=" + this.m4prop_nwidth + ",height=" + this.m4prop_nheight;
				var attr = "left=" + this.m4prop_nleft + ",top=" + this.m4prop_ntop + ",resizable=" + this.m4prop_resizable + ",scrollbars=" + this.m4prop_scrollbars + ",width=" + this.m4prop_nwidth + ",height=" + this.m4prop_nheight + ",status=" + this.m4prop_status;
	// Genero el dialogo
 	            var sidwindow = (this.m4prop_usewindowid == true)?this.m4prop_sidpage:this.m4prop_sname;
				this.m4prop_owin= window.open(this.m4prop_surl, sidwindow, attr);
}
catch(excepcion){m4err_gen(excepcion);}
}
function m4window(sidpag,spag,ar,sidform){
try{
if (m4window.arguments.length < 4) throw (new m4class_numparametrosincorrecto("m4window",m4window.arguments.length,4));
var oparam=new Array();
for (var i=0; i < ar.length; i++){
if (typeof(document.forms[sidform]) == "undefined" || typeof(document.forms[sidform].elements[ar[i]]) == "undefined") throw (new m4class_noexisteelemento("m4window",sidform,ar[i]));
oparam[i]= document.forms[sidform].elements[ar[i]];
}
if (typeof(m4window.arguments[4]) == "undefined"){
var nx = 800;
}else{ var nx = m4window.arguments[4];}
if (typeof(m4window.arguments[5]) == "undefined"){
var ny = 600;
}else{ var ny = m4window.arguments[5];} 
closelastwindowifdiferent(sidpag);
oventana = new m4class_dialogwin("ventana",oparam,sidpag);
if (typeof(m4window.arguments[6]) != "undefined"){oventana.m4prop_resizable = m4window.arguments[6];} 
if (typeof(m4window.arguments[7]) != "undefined"){ oventana.m4prop_scroolbars= m4window.arguments[7];} 
if (typeof(m4window.arguments[8]) != "undefined"){ oventana.m4prop_usewindowid= m4window.arguments[8];}
if (typeof(m4window.arguments[9]) != "undefined"){ oventana.m4prop_status= m4window.arguments[9];}
oventana.m4met_m4opendialog(spag,nx,ny);
}catch(excepcion){m4err_gen(excepcion);};
}
function m4windowcallback(sidpag,spag,ar,sidform,sfunction){
try{
if (m4windowcallback.arguments.length < 5) throw (new m4class_numparametrosincorrecto("m4windowcallback",m4windowcallback.arguments.length,5));
var oparam=new Array();
for (var i=0; i < ar.length; i++){
if (typeof(document.forms[sidform]) == "undefined" || typeof(document.forms[sidform].elements[ar[i]]) == "undefined") throw (new m4class_noexisteelemento("m4window",sidform,ar[i]));
oparam[i]= document.forms[sidform].elements[ar[i]];
}
if (typeof(m4windowcallback.arguments[5]) == "undefined"){
var nx = 800;
}else{ var nx = m4windowcallback.arguments[5];}
if (typeof(m4windowcallback.arguments[6]) == "undefined"){
var ny = 600;
}else{ var ny = m4windowcallback.arguments[6];} 
closelastwindowifdiferent(sidpag);
oventana = new m4class_dialogwin("ventana",oparam,sidpag);
if (typeof(m4windowcallback.arguments[7]) != "undefined"){oventana.m4prop_resizable = m4windowcallback.arguments[7];} 
if (typeof(m4windowcallback.arguments[8]) != "undefined"){ oventana.m4prop_scroolbars= m4windowcallback.arguments[8];} 
if (typeof(m4windowcallback.arguments[9]) != "undefined"){ oventana.m4prop_usewindowid= m4windowcallback.arguments[9];}
if (typeof(m4windowcallback.arguments[10]) != "undefined"){ oventana.m4prop_status= m4windowcallback.arguments[10];}
oventana.m4prop_afterclosewindowmet =sfunction;
oventana.m4met_m4opendialog(spag,nx,ny);
}catch(excepcion){m4err_gen(excepcion);};
}
function m4returnvalues(ar){
try{
if (m4returnvalues.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4returnvalues",m4returnvalues.arguments.length,1));
if (typeof(opener.oventana) == "object"){
for (var i=0; i < opener.oventana.m4prop_areturnedValue.length; i++){
  if (typeof(ar[i]) != "undefined"){
   opener.oventana.m4prop_areturnedValue[i].value =  ar[i];
  }
}}
if (typeof(opener.oventana) == "object"){   
   if (opener.oventana.m4prop_afterclosewindowmet != ""){ 
   		eval('opener.'+opener.oventana.m4prop_afterclosewindowmet);
   }
   opener.oventana = "";
}
window.close();
if (typeof(opener.oventana) == "object"){ 
   eval('opener.'+opener.oventana.m4prop_afterclosewindowmet);
}
}catch(excepcion){m4err_gen(excepcion);};
}
function m4window_extension(){
try{
if (m4window_extension.arguments.length == 0) throw (new m4class_numparametrosincorrecto("m4window_extension",m4window_extension.arguments.length,1));
var aargcollection = m4window_extension.arguments; 
for (var ni = 0; ni < aargcollection.length; ni++){
eval("m4class_dialogwin.prototype.m4prop_" + aargcollection[ni] + "= document.getElementById(aargcollection[ni]);");
}
eval("m4class_dialogwin.prototype.m4prop_aidscollection = aargcollection");
}catch(excepcion){m4err_gen(excepcion);};
}
function m4window_extension_return(sidobjectinmotherwindow){
try{
if (m4window_extension_return.arguments.length == 0) throw (new m4class_numparametrosincorrecto("m4window_extension_return",m4window_extension_return.arguments.length,1));
var oretorno = null;
if (typeof(sidobjectinmotherwindow) != "number"){
eval("oretorno = opener.oventana.m4prop_" + sidobjectinmotherwindow);
}else{
if (opener.oventana.m4prop_aidscollection[sidobjectinmotherwindow] != "undefined"){
eval("oretorno = opener.oventana.m4prop_" + opener.oventana.m4prop_aidscollection[sidobjectinmotherwindow]);}
}
return oretorno;
}catch(excepcion){m4err_gen(excepcion);};
}
function m4focus(sidform,sidinput){
try{
	if (m4focus.arguments.length < 2) throw (new m4class_numparametrosincorrecto("m4focus",m4focus.arguments.length,2));
	if (typeof(document.forms[sidform]) == "undefined" || typeof(document.forms[sidform].elements[sidinput]) == "undefined") throw (new m4class_noexisteelemento("m4focus",sidform,sidinput));
	var oobjeto = document.forms[sidform].elements[sidinput];
	if (m4prop(sidform,sidinput,'disabled','','get',false)== false){
		oobjeto.focus();
	}else{throw (new m4class_noexisteelemento("m4focus",sidform,sidinput));}
}catch (excepcion) {m4err_gen(excepcion);};
}
function m4checkradio(sidform,sidobjeto,vvalor){
try{
	if (m4checkradio.arguments.length < 3) throw (new m4class_numparametrosincorrecto("m4checkradio", m4checkradio.arguments.length,3));
	if (typeof(document.forms[sidform]) == "undefined" || typeof(document.forms[sidform].elements[sidobjeto]) == "undefined") throw (new m4class_noexisteelemento(" m4checkradio",sidform,sidobjeto));
	var oobjeto = document.forms[sidform].elements[sidobjeto];
	if (oobjeto.length >0){
		for (i=0; i<oobjeto.length; i++) {
   		  if (oobjeto[i].value == vvalor) oobjeto = oobjeto[i];
   		} 
	}
    oobjeto.checked =true;
}catch (excepcion) {m4err_gen(excepcion);};
}
function m4valor(sidform,sidinput,vvalor,smodo){
try{	
	if (m4valor.arguments.length < 4) throw (new m4class_numparametrosincorrecto("m4valor",m4valor.arguments.length,4));
	if (typeof(document.forms[sidform]) == "undefined" || typeof(document.forms[sidform].elements[sidinput]) == "undefined") throw (new m4class_noexisteelemento("m4valor",sidform,sidinput));
	var bmultipleobjects = false;
	var oobjeto = document.forms[sidform].elements[sidinput];
	//if (oselect.tagName == "SELECT") throw (new m4class_objetotipoincorrecto("m4select",oselect.id));
	if (smodo != "set" && smodo != "get") throw (new m4class_modonodefinido("m4valor",smodo));
	if (oobjeto.length >0){
	    if ( oobjeto[0].tagName != "OPTION"){ //En un futuro cambiar
			var bmultipleobjects = true;
			var bexistactive = false;
			if ((oobjeto[0].tagName == "INPUT")&& (oobjeto[0].getAttribute("type").toUpperCase() == "RADIO")){
				for (i=0; i<oobjeto.length; i++) {
   					if (oobjeto[i].checked == true){
   						oobjeto = oobjeto[i];
   						bexistactive = true;
   					}
   				}  
   				if ( bexistactive == false)  throw (new m4class_elementoduplicado("m4valor",sidform,sidinput));	
		     }else throw (new m4class_elementoduplicado("m4valor",sidform,sidinput));	
		 }
	}
	switch(smodo){
		case "set" :
		oobjeto.value = vvalor;
		break;
		case "get" :
		return oobjeto.value;
		break;
		default : 
		return null;
	}
}catch (excepcion) {m4err_gen(excepcion);};
}
function closelastwindowifdiferent(ai_sIdNewWIndow){
   if ((typeof(oventana) == "object")&& (oventana.m4prop_sidpage != ai_sIdNewWIndow)){oventana.m4prop_owin.close();}
}
function m4calendar(oobjeto,sfunction){
try{
    var sidpag = "Calendar";
    if (typeof(oobjeto) != "object") throw (new m4class_tipoerroneo("m4calendar","oobjeto",typeof(oobjeto),"object"));
    closelastwindowifdiferent(sidpag);
    oventana = new m4class_dialogwin("ventana",oobjeto,sidpag);
    var oarcalendar = new Array(oobjeto);
	oventana.m4prop_areturnedValue = oarcalendar;
    oventana.m4prop_resizable = "no";
    oventana.m4prop_scroolbars= "no"; 
    if (m4calendar.arguments[1] != "undefined"){
	    oventana.m4prop_afterclosewindowmet =m4calendar.arguments[1];
    }
	oventana.m4met_m4opendialog("/servlet/CheckSecurity/JSP/shco_g0/shco_gen_calendar.jsp",530,275);
	
}catch (excepcion) {m4err_gen(excepcion);};
}	
function m4navegar(URL,parametros,valores){
try{
if (m4navegar.arguments.length == 0){
throw (new m4class_numparametrosincorrecto("m4navegar",m4navegar.arguments.length,1));
}
else{
//Cadena de seguridad a añadir a la URL. Si ya viene en la URL no se añade.
var securityString =  "/servlet/CheckSecurity/JSP/";
if(URL.indexOf(securityString ) !=-1) {securityString ="";}
if ((typeof(parametros) != "undefined") && (typeof(valores) != "undefined")){ 
var salida = "";
var cadena = "";
for (i=0;i < parametros.length-1; i++){
cadena = cadena + parametros[i] + "=" + valores[i] + "&";
}
cadena = cadena +  parametros[parametros.length-1] + "=" + valores[parametros.length-1];
if ((parametros.length !=0) && (valores.length !=0) && (valores.length == parametros.length)){
   if (URL.indexOf("?")==-1){
       salida = securityString + URL + "?" + cadena;
   }else{
       salida = securityString + URL + "&" + cadena;
   }
}else{salida = securityString + URL;}
location.href=salida;
}
else{ location.href= securityString + URL;}
}
}catch (excepcion) {m4err_gen(excepcion);};
}
function m4url() {
var surl = location.href;
return surl;
}
function m4titulo() {
var stitulo = document.title;
return (stitulo);
}
function m4settitle(stitle){
document.title = stitle;
}
function m4write(stext,stag,stype,sid,sidobjetopadre){
try{
if (m4write.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4write",m4write.arguments.length,1));
if (m4write.arguments.length > 1){
      var onuevoElemento=document.createElement(stag);
      onuevoElemento.type=stype;
      onuevoElemento.value=stext;
      onuevoElemento.id=sid;
	  var objPadre = document.getElementById[sidobjetopadre];
      objPadre.appendChild(onuevoElemento);
}
else{
if (typeof(stext) != "string") throw (new m4class_tipoerroneo("m4write","stext",typeof(stext),"string"));
document.write(text);
}
}catch(excepcion){m4err_gen(excepcion);};
}
function m4objeto(sidform,sidelemento){
try{
if (m4objeto.arguments.length < 2) throw (new m4class_numparametrosincorrecto("m4objeto",m4objeto.arguments.length,2));
if (typeof(document.forms[sidform]) == "undefined" || typeof(document.forms[sidform].elements[sidelemento]) == "undefined") throw (new m4class_noexisteelemento("m4objeto",sidform,sidelemento));
return document.forms[sidform].elements[sidelemento];
}catch(excepcion){m4err_gen(excepcion);};
}
function m4submit(sidform){
try{
	if (m4submit.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4submit",m4submit.arguments.length,1));
	if (typeof(document.forms[sidform]) == "undefined") throw (new m4class_noexisteobjeto("m4submit"));
	document.forms[sidform].submit();
}catch(excepcion){m4err_gen(excepcion);};  
}

function m4settarget(sidform,starget){
try{
	if (m4settarget.arguments.length < 2) throw (new m4class_numparametrosincorrecto("m4settarget",m4settarget.arguments.length,2));
	if (typeof(document.forms[sidform]) == "undefined") throw (new m4class_noexisteobjeto("m4settarget"));
	document.forms[sidform].target = starget ;
}catch(excepcion){m4err_gen(excepcion);};  
}

//Construir la fecha en formato usuario
function m4builtdate(dianumero,mesnumero,anio){

var oreM = /M/i;
var oreD = /D/i;


	//Correccion para el dia y mes con una sola cifra, ejemplo: 1=01
    var strdianumero = new String(dianumero); 
	if (strdianumero.length != 2){strdianumero = '0' + strdianumero;}
	var strmesnumero = new String(mesnumero);
	if (strmesnumero.length != 2){strmesnumero = '0' + strmesnumero;}
	//Construccion de la fecha segun el formato
 
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
//Fecha de hoy en formato usuario
function m4today(){	
	 var d = new Date();	
	 var stoday = m4builtdate(d.getDate(),d.getMonth() + 1,d.getFullYear());
	 return stoday;
}
//Formatear el tiempo sobre el valor de un input. como separador puede tener :,.  Se transforma en :
function m4buildtime(sidform,sidinput){
try{
	if (m4buildtime.arguments.length < 2) throw (new m4class_numparametrosincorrecto("m4buildtime",m4buildtime.arguments.length,2));
	if (typeof(document.forms[sidform]) == "undefined" || typeof(document.forms[sidform].elements[sidinput]) == "undefined") throw (new m4class_noexisteelemento("m4buildtime",sidform,sidinput));
	var bwithseconds=(typeof(m4buildtime.arguments[2])!= "undefined")? m4buildtime.arguments[2] : false;
	var stime = document.forms[sidform].elements[sidinput].value;  
    var oregularexpHour = /^(\d+)$/;
    var oregularexpHourMinute = /^(\d+)[:\,\.](\d+)$/;
    var oregularexpHourSeconds = /^(\d+)[:\,\.](\d+)[:\,\.](\d+)$/;
    var shours = "00";
    var sminutes = "00";
    var sseconds = "00";
    if( oregularexpHour.test(stime)){shours = stime}
    else{if( oregularexpHourMinute.test(stime)){
		    var arrresult = oregularexpHourMinute.exec(stime);
		    shours = arrresult[1];
		    sminutes = arrresult[2];
        } else{if( oregularexpHourSeconds.test(stime)){
				var arrresult = oregularexpHourSeconds.exec(stime);
				shours = arrresult[1];
				sminutes = arrresult[2];
				sseconds = arrresult[3];
				
			 }
		}
	}
	if (bwithseconds == true){
		document.forms[sidform].elements[sidinput].value= m4formattime(shours,sminutes,sseconds);
	}else document.forms[sidform].elements[sidinput].value= m4formattime(shours,sminutes);
}catch(excepcion){m4err_gen(excepcion);};
}
//Formateo del tiempo para conseguir formato hh:mm:ss
function m4formattime(shours,sminutes,sseconds){
   
   if (m4formattime.arguments.length < 2) throw (new m4class_numparametrosincorrecto("m4formattime",m4formattime.arguments.length,2));
   var bwithseconds=(typeof(m4formattime.arguments[2])!= "undefined")?true : false;
   if (shours.length < 2){shours = '0' + shours;}
   if (sminutes.length < 2){sminutes = '0' + sminutes;}
   if (bwithseconds == true){
      if (sseconds.length < 2){sseconds = '0' + sseconds;}
      var stime = shours + ":" + sminutes + ":" + sseconds;
   }else{
      var stime = shours + ":" + sminutes;
   }
  return stime;

}
function m4formatdatetoISO(sDate){
if (m4formatdatetoISO.arguments.length <1) throw (new m4class_numparametrosincorrecto("m4formatdatetoISO",m4formatdatetoISO.arguments.length,1));
var adateinfo = new Array(3);
m4splitdate(sDate,adateinfo);
smonth = "" + adateinfo[1];
if (smonth.length <2) { smonth = '0' +smonth;}
sday = "" + adateinfo[0];
if (sday.length <2) { sday = '0' +sday;}
return adateinfo[2] + "-" + smonth+"-" + sday;   
}

function m4ISOTimeStamp(oDate){
 var sTime = m4formattime(oDate.getHours()+"",oDate.getMinutes()+"",oDate.getSeconds()+"");
 var smonth = (oDate.getMonth()+1 )+"";
 if (smonth.length < 2){smonth = '0' + smonth;}
 var sday =oDate.getDate()+"";
 if (sday.length < 2){sday = '0' + sday;}
 var sDate = oDate.getFullYear()+ g_ssepfechas + smonth + g_ssepfechas + sday ;
 var sISOTimeStamp =sDate + " " + sTime;
 return sISOTimeStamp;
}

function m4now(){	
	 var d = new Date();	
	 var snow = m4formattime(d.getHours()+"",d.getMinutes()+"",d.getSeconds()+"");
	 return snow;
}
function m4textodentrotd(objtd,poner,valor){
	if (poner==true){
		if (objtd.hasChildNodes() == true){ 
			if (objtd.childNodes.item(0).nodeType == 3){
				var nodotexto = document.createTextNode(valor);
				objtd.removeChild(objtd.firstChild);
				objtd.appendChild(nodotexto);
			}
		}
		else{
				var nodotexto = document.createTextNode(valor);
				objtd.appendChild(nodotexto);
		}
	
	}
	else{
		if (objtd.hasChildNodes() == true){ 
			if (objtd.childNodes.item(0).nodeType == 3){
				//alert(objtd.childNodes.item(0).nodeValue);
				return objtd.childNodes.item(0).nodeValue;
			}
		}
	}
}
function m4elemento(sidelem){
try{	
	var oobjeto = document.getElementById(sidelem);
	if (oobjeto == null) throw (new m4class_noexisteobjeto("m4elemento"));
	return oobjeto;
}catch(excepcion){m4err_gen(excepcion); return null};
}
function m4tabfocus(sidform,ntabindex){
try{
if (m4tabfocus.arguments.length < 2) throw (new m4class_numparametrosincorrecto("m4tabfocus",m4tabfocus.arguments.length,2));
if (typeof(document.forms[sidform]) == "undefined") throw (new m4class_noexisteobjeto("m4tabfocus"));
var celementos = document.forms[sidform].elements;
for (var ni = 0; ni < celementos.length; ni++){
	var sindex = celementos[ni].getAttribute("tabindex");
	if (sindex == ntabindex){
		celementos[ni].focus();
		break;
	}
}
}catch(excepcion){m4err_gen(excepcion);};
}
function m4lock(sidform,sidobjeto,smodolock,smodolockunlock,sclassname){
try{	
if (m4lock.arguments.length < 4) throw (new m4class_numparametrosincorrecto("m4lock",m4lock.arguments.length,4));
if (typeof(document.forms[sidform]) == "undefined") throw (new m4class_noexisteobjeto("m4lock"));
var oobjeto1 = document.forms[sidform].elements[sidobjeto];
if (oobjeto1 == null){ //mirar si es un anchor
	if (document.all) oobjeto1 = document.all(sidobjeto);
	else if (document.anchors) oobjeto1 = document.anchors[sidobjeto];
}
if (oobjeto1 == null) throw (new m4class_noexisteobjeto("m4lock"));
if (smodolockunlock.toUpperCase()!= "LOCK" && smodolockunlock.toUpperCase()!= "UNLOCK")  throw (new m4class_modonodefinido("m4lock2",smodolockunloc));
var blockvalue = (smodolockunlock.toUpperCase()== "LOCK")? true :"";
if (oobjeto1.length >0) oobjeto1 = oobjeto1[0];
if (oobjeto1.tagName != "A"){ //Los Anchor no se permite poner el disabled
	switch(smodolock.toUpperCase()){
		case "DISABLED":
	        m4prop(sidform,sidobjeto,'disabled',blockvalue,'set');
			break;
		case "READONLY":	
		    if ((oobjeto1.tagName ==	"INPUT" && oobjeto1.getAttribute("type").toUpperCase() =="TEXT" ) ||(oobjeto1.tagName ==	"TEXTAREA")){
		        m4prop(sidform,sidobjeto,'readOnly',blockvalue,'set');
			}else throw (new m4class_modonodefinido("m4lock",smodo));
			break;
		default:   throw (new m4class_modonodefinido("m4lock",smodolock));
	}
}
//cambiar la clase si viene
if (typeof(m4lock.arguments[4]) != "undefined"){
	m4prop(sidform,sidobjeto,'className',sclassname,'set',false);
}
}catch(excepcion){m4err_gen(excepcion);};
}
function m4prop(sidform,sidobjeto,satributo,vvalor,smodo,bstyleattribute){
var bstyle = false;
try{	
if (m4prop.arguments.length < 5) throw (new m4class_numparametrosincorrecto("m4prop",m4prop.arguments.length,5));
if (typeof(document.forms[sidform]) == "undefined") throw (new m4class_noexisteobjeto("m4prop"));
var oobjeto = document.forms[sidform].elements[sidobjeto];
if (oobjeto == null){ //mirar si es un anchor
	if (document.all) oobjeto = document.all(sidobjeto);
	else if (document.anchors) oobjeto = document.anchors[sidobjeto];
}
if (oobjeto == null) throw (new m4class_noexisteobjeto("m4prop"));
if (typeof(m4prop.arguments[5]) != "undefined"){bstyle=bstyleattribute;}
switch(smodo){
case "set" :
	if(bstyle == true){
	    if (oobjeto.length >0){
   			for (i=0; i<oobjeto.length; i++) {
				eval("oobjeto[i].style."+ satributo+ "="+ "'" + vvalor + "';");		
				
			}
		}else{eval("oobjeto.style."+ satributo+ "="+ "'" + vvalor + "';");}
	}else{
		if ((oobjeto.length >0) && ( oobjeto[0].tagName == "INPUT" && oobjeto[0].getAttribute("type").toUpperCase() =="RADIO")){
   			for (i=0; i<oobjeto.length; i++) {
   				if (oobjeto[i].getAttribute(satributo)==null) throw (new m4class_atributonodefinido("m4prop",sidobjeto,satributo));
   				eval("oobjeto[i]."+ satributo+ "="+ "'" + vvalor + "';");	
			}
		}else{
			if (oobjeto.getAttribute(satributo)==null) throw (new m4class_atributonodefinido("m4prop",sidobjeto,satributo));
			eval("oobjeto."+ satributo+ "="+ "'" + vvalor + "';");		
		}
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
			 if (  bexisteactivo == false)  throw (new m4class_elementoduplicado("m4prop",sidform,sidobjeto));	
		}	     
	}	
	if(bstyle == true){
		if (document.defaultView){//Netscape 
		     eval("sresult = oobjeto.style."+ satributo);
		     if ((sresult == "") || (sresult == null)){
				sresult = document.defaultView.getComputedStyle(oobjeto,null).getPropertyValue(satributo);
			 }
			return sresult;	
		}else if (oobjeto.currentStyle){
			if (oobjeto.style.getAttribute(satributo)==null) throw (new m4class_atributonodefinido("m4prop",sidobjeto,satributo));
			return  eval('oobjeto.currentStyle.' + satributo);
		}else return null;
	}else{	
		if (oobjeto.getAttribute(satributo)==null) throw (new m4class_atributonodefinido("m4prop",sidobjeto,satributo));
		eval(" sreturn = oobjeto."+ satributo);
		return (sreturn);
	}
	
	break;		
default : 
		return null;
}
}catch(excepcion){m4err_gen(excepcion);};
}

function m4nothing(){
}
function m4clearform(sidform){
try{
if (m4clearform.arguments.length == 0) throw (new m4class_numparametrosincorrecto("m4clearform",m4clearform.arguments.length,1));
if (typeof(document.forms[sidform]) == "undefined") throw (new m4class_noexisteobjeto("m4clearform"));
var celementos = document.forms[sidform].elements;
var sidelement = "";
var sresult="";
var sexcepcionelements = "";
for (var nj=1; nj<m4clearform.arguments.length; nj++){
   sexcepcionelements = sexcepcionelements + "\\b" + m4clearform.arguments[nj] + "\\b";
   if (nj != m4clearform.arguments.length-1) {sexcepcionelements = sexcepcionelements + "|";}
}
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
}catch(excepcion){m4err_gen(excepcion);};
}
function m4currency(sidform,squantity,sidcurrency,sidexchangetype,sexchagedate,sdecnumber,sitd){
try{
if (m4currency.arguments.length < 6) throw (new m4class_numparametrosincorrecto("m4currency",m4currency.arguments.length,6));
var scur = "/servlet/CheckSecurity/JSP/shco_g0/shco_gen_currency.jsp";
scur = scur +"?IDCUR="+  m4valor(sidform,sidcurrency,'','get') +"&CANT="+ m4valor(sidform,squantity,'','get') 
            +"&EXTYPE="+  m4valor(sidform,sidexchangetype,'','get')+"&EXDATE="+m4valor(sidform,sexchagedate,'','get');
var oarcur = new Array();
for(var nt=0; nt <= 4; nt++){
	oarcur[nt] = m4currency.arguments[nt+1];
}
if (typeof(m4currency.arguments[7]) != "undefined"){ //Caso especial 
   oarcur[nt] = m4currency.arguments[7];
}
if (sitd) m4window_extension(sitd);
m4window("pagecurrency",scur,oarcur,sidform,450,230,"no","no");
}catch(excepcion){m4err_gen(excepcion);};
}
function m4currencysetdefaultvalues(sidform,sinputcant,sinputidcur,sinputncur,sinputdec,sinputexchtype,sinputexchdate,zidcur, zncur,zndec,zexchtype){
try{
if (m4currencysetdefaultvalues.arguments.length <9) throw (new m4class_numparametrosincorrecto("m4currencysetdefaultvalues",m4currencysetdefaultvalues.arguments.length,9));
if (typeof(document.forms[sidform]) == "undefined" || typeof(document.forms[sidform].elements[sinputcant]) == "undefined") throw (new m4class_noexisteelemento("m4currencysetdefaultvalues",sidform,sinputcant));
if( typeof(document.forms[sidform].elements[sinputidcur]) == "undefined") throw (new m4class_noexisteelemento("m4currencysetdefaultvalues",sidform,sinputidcur));
if( typeof(document.forms[sidform].elements[sinputncur]) == "undefined" && typeof(m4elemento(sinputidcur)) =="undefined") throw (new m4class_noexisteelemento("m4currencysetdefaultvalues",sidform,sinputncur));
if( typeof(document.forms[sidform].elements[sinputdec]) == "undefined") throw (new m4class_noexisteelemento("m4currencysetdefaultvalues",sidform,sinputdec));
if( typeof(document.forms[sidform].elements[sinputexchtype]) == "undefined") throw (new m4class_noexisteelemento("m4currencysetdefaultvalues",sidform,sinputexchtype));
if( typeof(document.forms[sidform].elements[sinputexchdate]) == "undefined") throw (new m4class_noexisteelemento("m4currencysetdefaultvalues",sidform,sinputexchdate));
m4valor(sidform,sinputcant,'','set');
m4valor(sidform,sinputexchdate,m4today(),'set');
m4valor(sidform,sinputidcur,zidcur,'set');
if( typeof(document.forms[sidform].elements[sinputncur]) == "undefined"){
   m4rewritecell(sinputncur,zncur);
}else{m4valor(sidform,sinputncur,zncur,'set');}
m4valor(sidform,sinputdec,zndec,'set');
m4valor(sidform,sinputexchtype,zexchtype,'set');
}catch(excepcion){m4err_gen(excepcion);};
}



function m4splitdate(sdate,adateinfo){
if (m4splitdate.arguments.length <2) throw (new m4class_numparametrosincorrecto("m4splitdate",m4splitdate.arguments.length,2));
var oreM = /M/i;var oreD = /D/i;var oreY = /Y/i;var oresep = g_ssepfechas;  
var ap= new Array();
var ny = sformatofechas.search(oreY);
var nm = sformatofechas.search(oreM);
var nd = sformatofechas.search(oreD);
ap[ny] = "Y";ap[nm] = "M";ap[nd] = "D";
var max = Math.max(Math.max(ny,nm),nd);
if (max == ny) {var med= Math.max(nm,nd);var min=Math.min(nm,nd);}
if (max == nm) {var med= Math.max(ny,nd);var min=Math.min(ny,nd);}
if (max == nd) {var med= Math.max(ny,nm);var min=Math.min(ny,nm);}  
var ocadena = new String(sdate);
var atrozos = ocadena.split(oresep);
var sday = "";

if (ap[min] == "Y"){
    syear = atrozos[0].toString();
	if (ap[med] == "M"){smonth =  atrozos[1].toString(); sday = atrozos[2].toString();}
	if (ap[med] == "D"){smonth =  atrozos[2].toString();sday = atrozos[1].toString();} 
}
if (ap[min] == "M"){
	smonth = atrozos[0].toString();
	if (ap[med] == "D"){sday = atrozos[1].toString(); syear =atrozos[2].toString();}
	if (ap[med] == "Y"){sday = atrozos[2].toString();  syear =atrozos[1].toString();} 
} 
if (ap[min] == "D"){
	sday = atrozos[0].toString();
	if (ap[med] == "Y"){syear =atrozos[1].toString();smonth =  atrozos[2].toString();}
	if (ap[med] == "M"){syear =atrozos[2].toString();smonth =  atrozos[1].toString();} 
}
   adateinfo[0] = m4parseInt(sday);
   adateinfo[1] = m4parseInt(smonth);
   adateinfo[2] = m4parseInt(syear);
}

function m4getyear(sdate){
if (m4getyear.arguments.length <1) throw (new m4class_numparametrosincorrecto("m4getyear",m4getyear.arguments.length,1));
var adateinfo = new Array(3);
m4splitdate(sdate,adateinfo);
return adateinfo[2];
}

function m4daydiff(sinitdate,slastdate){
if (m4daydiff.arguments.length <2) throw (new m4class_numparametrosincorrecto("m4daydiff",m4daydiff.arguments.length,2));
var adateinfo = new Array(3);
var dinitdate;
var dlastdate;
var initdatems;
var lastdatems;
var differenciams;
try{
	m4splitdate(sinitdate,adateinfo);
	dinitdate = new Date(adateinfo[2],adateinfo[1]-1,adateinfo[0]);
	m4splitdate(slastdate,adateinfo);
	dlastdate = new Date(adateinfo[2],adateinfo[1]-1,adateinfo[0]);
	initdatems = Date.parse( dinitdate ) ;
	lastdatems = Date.parse( dlastdate) ;
	differenciams = lastdatems-initdatems ;
	dday = m4changePointToDecimalSep(differenciams / 86400000);
	return m4parseInt(dday);  // no usar m4parseInt pq el valor que llega puede ser decimal (.)siempre
}catch(excepcion){m4err_gen(excepcion);};
}
function m4changePointToDecimalSep(sval,bCurrencyType){
try{
    if ( m4changePointToDecimalSep.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4changePointToDecimalSep",m4changePointToDecimalSep.arguments.length,1));
	if (typeof(bCurrencyType) == "undefined"){bCurrencyType=false;}	 
    var ssepdec = (bCurrencyType==true)?g_ssepdecimal_cur :g_ssepdecimal;
	sval=sval +""; //convert to string
	sval = sval.replace(new RegExp("\\.","g"),ssepdec); //change "." to decimal separator
	return(sval);
 }catch(excepcion){m4err_gen(excepcion);};
}
function m4changeDecimalSepToPoint(sval,bCurrencyType){
try{
    if ( m4changeDecimalSepToPoint.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4changeDecimalSepToPoint", m4changeDecimalSepToPoint.arguments.length,1));
	if (typeof(bCurrencyType) == "undefined"){bCurrencyType=false;}	 
    var ssepdec = (bCurrencyType==true)?g_ssepdecimal_cur :g_ssepdecimal;
	sval=sval +""; //convert to string
	sval = sval.replace(new RegExp("\\"+ssepdec,"g"),'.'); //change decimal separator to point
	return(sval);
 }catch(excepcion){m4err_gen(excepcion);};
}
function m4formatNum(sValue,bValueFromInput,bCurrencyType,iNumDecAllowed){
try{
   if ( m4formatNum.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4formatNum", m4formatNum.arguments.length,1));
   if (typeof(bValueFromInput) == "undefined" || bValueFromInput == ""){bValueFromInput=false;}
   if (typeof(bCurrencyType) == "undefined"){bCurrencyType=false;}
   if (typeof(iNumDecAllowed) == "undefined"){iNumDecAllowed = bCurrencyType?g_strailingzeros_cur:g_strailingzeros;} 
   if (sValue != ""){
    if (bValueFromInput == true) { sValue = m4parseFloat(sValue,true,bCurrencyType);} //convert to javascript
    sValue =  m4changePointToDecimalSep (sValue,bCurrencyType);
    var ssepdig = (bCurrencyType==true)?g_ssepdig_cur :g_ssepdig;
    var ssepdec = (bCurrencyType==true)?g_ssepdecimal_cur :g_ssepdecimal;
    var atrozos = sValue.split(ssepdec);
	var sSign ="";
 	var sEnt = atrozos[0]; var sEntAux=""; var sDec="";
	if (sEnt.substr(0,1) == "-"){ sSign = "-"; sEnt = sEnt.substr(1,sEnt.length-1)}
    if (sEnt.length >3){
	   for (i=sEnt.length; i>3; i-=3){sEntAux = ssepdig + sEnt.substr(i-3,3) +sEntAux; sEnt=sEnt.substr(0,i-3);}
       if (atrozos.length > 1){sDec=ssepdec +atrozos[1];}
       sValue = sSign+sEnt + sEntAux +sDec;
    }
	if ((bCurrencyType == true && g_strailingzeros_cur > 0 && iNumDecAllowed > 0)){ //Trailing zeros for currency values
	    atrozos = sValue.split(ssepdec);
	    if (atrozos.length > 1){sDec=atrozos[1];}else{sValue = sValue + ssepdec}
		if (g_strailingzeros_cur < iNumDecAllowed ) { iNumDecAllowed = g_strailingzeros_cur;}
	    if(sDec.length < iNumDecAllowed){ 
	     for (i=sDec.length; i<iNumDecAllowed; i++){sValue = sValue + "0"}
		} 
	}
   }return(sValue);	 
 }catch(excepcion){m4err_gen(excepcion);};
}

function m4parseInt(sValue,sbase,bValueFromInput,bCurrencyType){
try{
  var iBase = 10;
  if ( m4parseInt.arguments.length< 1) throw (new m4class_numparametrosincorrecto("m4parseInt", m4parseInt.arguments.length,1));
  if (typeof(sbase) != "undefined" && sbase!=""){iBase= m4parseInt(sbase);}
  if (typeof(bValueFromInput) == "undefined" || bValueFromInput == ""){bValueFromInput=false;}
  if (typeof(bCurrencyType) == "undefined" || bCurrencyType == ""){bCurrencyType=false;}
  if (bValueFromInput == true) {//take out digit separator before parseInt
  	 var ssepdig = (bCurrencyType==true)?g_ssepdig_cur :g_ssepdig;
  	 if (ssepdig != ""){ sValue = sValue + ""; sValue = sValue.replace(new RegExp("\\"+ssepdig,"g"),'');} 
  }
  var iValue = parseInt(sValue,iBase);
  return iValue;
 }catch(excepcion){m4err_gen(excepcion);};
}

function m4parseFloat(sValue,bValueFromInput,bCurrencyType){
try{
  if (m4parseFloat.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4parseFloat", m4parseFloat.arguments.length,1));
  if (typeof(bValueFromInput) == "undefined" || bValueFromInput == ""){bValueFromInput=false;}
  if (typeof(bCurrencyType) == "undefined" || bCurrencyType == ""){bCurrencyType=false;}
  if (bValueFromInput == true) {//take out digit separator before parseInt && change decimal separator to point
   var ssepdig = (bCurrencyType==true)?g_ssepdig_cur :g_ssepdig;
   if (ssepdig != ""){ sValue = sValue + ""; sValue = sValue.replace(new RegExp("\\"+ssepdig,"g"),'');}
   sValue = m4changeDecimalSepToPoint(sValue,bCurrencyType);
  } 
  sValue = parseFloat(sValue); //take out left/right ceros. Only works with . as decimal separator
  return(sValue);
 }catch(excepcion){m4err_gen(excepcion);};
}
function m4takeoutsepdig(sValue,bCurrencyType){
try{
   if ( m4takeoutsepdig.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4takeoutsepdig", m4takeoutsepdig.arguments.length,1));
   var ssepdig = (bCurrencyType==true)?g_ssepdig_cur :g_ssepdig;
   if (ssepdig != ""){ sValue = sValue + ""; sValue = sValue.replace(new RegExp("\\"+ssepdig,"g"),'');}
   return(sValue);
}catch(excepcion){m4err_gen(excepcion);};
}
function m4help_oldversion(slangfolder,shelpfolder,sfilehelp){
try{
if (m4help_oldversion.arguments.length <1) throw (new m4class_numparametrosincorrecto("m4help_oldversion",m4help_oldversion.arguments.length,1));
var sfilehelparg = "";
if (typeof(shelpfolder) == "undefined") {shelpfolder="help";}
if ((typeof(sfilehelp) != "undefined") && (sfilehelp != "")){  sfilehelparg = "?href=" + sfilehelp;}
openWinHelpPres("/" + shelpfolder + "/"+slangfolder+"/output/wwhelp/js/html/frames.htm" +sfilehelparg);

}catch(excepcion){m4err_gen(excepcion);};
}
function m4help(slangfolder,shelpfolder,sfilehelp){
try{
if (m4help.arguments.length <1) throw (new m4class_numparametrosincorrecto("m4help",m4help.arguments.length,1));
var sfilehelparg = "";
if (typeof(shelpfolder) == "undefined") {shelpfolder="help";}
if ((typeof(sfilehelp) != "undefined") && (sfilehelp != "")){  sfilehelparg = "?href=" + sfilehelp;}
openWinHelpPres("/" + shelpfolder + "/"+slangfolder+"/output/wwhelp/wwhimpl/js/html/frames.htm" +sfilehelparg);
}catch(excepcion){m4err_gen(excepcion);};
}

function m4markobject(){
try{
   if ( m4markobject.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4markobject", m4markobject.arguments.length,1));
   for (var ni=0; ni < m4markobject.arguments.length; ni++){
     if (typeof( m4markobject.arguments[ni]) == "undefined") throw (new m4class_noexisteobjeto("m4markobject"));
     m4markobject.arguments[ni].style.background = "yellow";
  }
}catch(excepcion){m4err_gen(excepcion);};
}

function m4dismarkobject(){
try{
   if ( m4dismarkobject.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4dismarkobject", m4dismarkobject.arguments.length,1));
   for (var ni=0; ni < m4dismarkobject.arguments.length; ni++){
     if (typeof( m4dismarkobject.arguments[ni]) == "undefined") throw (new m4class_noexisteobjeto("m4dismarkobject"));
     m4dismarkobject.arguments[ni].style.background = "#FFFFFF";
  }
}catch(excepcion){m4err_gen(excepcion);};
}
function m4pageparams(zIdXML,swidth,sheight){
  if (m4pageparams.arguments.length <1) throw (new m4class_numparametrosincorrecto("m4pageparams",m4pageparams.arguments.length,1));
  var urlParams = "/servlet/CheckSecurity/JSP/shco_g0/shco_gen_param_page_maker.jsp?zIdPageXML=" + zIdXML;
  if (typeof(swidth) =="undefined"){swidth="700";}
  if (typeof(sheight) =="undefined"){sheight="500";}
  //msgWindow = window.open(urlParams,"Parámetros","width="+swidth+";height="+sheight+",resizable,scrollbars,status");
  m4window("Parameters",urlParams,"","",swidth,sheight,"no","no",false,"yes"); 
}
function m4dynfilter(ssub,sm4o,sm4oalias,sapplymode,sretmode,sretpage,sretpagewidth,sretpageheight,sreturnform,scallbackfunction){
try{  
  if (m4dynfilter.arguments.length <5) throw (new m4class_numparametrosincorrecto("m4dynfilter",m4dynfilter.arguments.length,5));
  m4valor("frmcalldynfilter","zdf_sub",ssub,"set");
  m4valor("frmcalldynfilter","zdf_m4o",sm4o,"set");
  m4valor("frmcalldynfilter","zdf_m4oalias",sm4oalias,"set");
  m4valor("frmcalldynfilter","zdf_applymode",sapplymode,"set");
  m4valor("frmcalldynfilter","zdf_retmode",sretmode,"set");
  if (typeof(sretpage) =="undefined"){sretpage="";}
  m4valor("frmcalldynfilter","zdf_retpage","/servlet/CheckSecurity/JSP/"+sretpage,"set");
  if (typeof(sretpagewidth) =="undefined"){sretpagewidth="";}
  m4valor("frmcalldynfilter","zdf_retpagewidth",sretpagewidth,"set");
  if (typeof(sretpageheight) =="undefined"){sretpageheight="";}
  m4valor("frmcalldynfilter","zdf_retpageheight",sretpageheight,"set");
  
   
  var swindow = "dynfilterwindow";
  var oarfil=new Array;
  for(t=10;t<m4dynfilter.arguments.length;t++){
	oarfil[t-10]=m4dynfilter.arguments[t];
  }
  switch(sretmode){
    case "2":	  
      m4window(swindow,"",oarfil,sreturnform,"800","350","no","no",true);
	  break;
    case "3": 
	  if (m4dynfilter.arguments.length <10) throw (new m4class_numparametrosincorrecto("m4dynfilter",m4dynfilter.arguments.length,11));
	  m4windowcallback(swindow,"",oarfil,sreturnform,scallbackfunction,"800","350","no","no",true);
	  break;
    case "4": //use submit (do not open another window) 
	  break;	  
	default:
 	  m4window(swindow,"","","","800","350","no","no",true); 
	  break;
  }	
  if (sretmode != "4"){document.forms["frmcalldynfilter"].target= swindow;}
  document.forms["frmcalldynfilter"].action= "/servlet/CheckSecurity/JSP/shco_g0/shco_gen_dynfilter.jsp";
  m4submit("frmcalldynfilter");	
}catch(excepcion){m4err_gen(excepcion);};
}  
function m4AddMonthsOracle(sDate,sMonths,sType){
   var adateinfo = new Array(3);
   var iMonths =0;
   if (sMonths != "") {iMonths = m4parseInt(sMonths);}
   m4splitdate(sDate,adateinfo);
   var dDate = new Date(adateinfo[2],adateinfo[1]-1,adateinfo[0]);   
   dSavedDayOfMonth = dDate.getDate();
   var iDaysOfMonth = m4DaysOfMonthFromDate(dDate);
   bLastDayOfTheMonth= ( iDaysOfMonth == dSavedDayOfMonth);
   dDate.setDate(1);
   dDate.setMonth(dDate.getMonth() + iMonths);
   iDaysOfMonth =  m4DaysOfMonthFromDate(dDate);
   if (bLastDayOfTheMonth){dDate.setDate (iDaysOfMonth);	
   }else{dDate.setDate(Math.min(dSavedDayOfMonth, iDaysOfMonth));}
   sDate = m4builtdate(dDate.getDate(),dDate.getMonth()+1,dDate.getFullYear());
   return sDate; 
}

function m4AddMonths(sDate,sMonths,sMode){
try{
   if (m4AddMonths.arguments.length <3)throw (new m4class_numparametrosincorrecto("m4AddMonths",m4AddMonths.arguments.length,3));
   
   var adateinfo = new Array(3);
   var iMonths =0;
   if (sMonths != "") {iMonths = m4parseInt(sMonths);}
   m4splitdate(sDate,adateinfo);
   var dDate = new Date(adateinfo[2],adateinfo[1]-1,adateinfo[0]);
   
   dSavedDayOfMonth = dDate.getDate();
   bLastDayOfTheMonth= ( m4DaysOfMonthFromDate(dDate) == dSavedDayOfMonth);
      
        
   switch(sMode){
    case "LN4": // LN4
	    dDate.setDate(1);
        dDate.setMonth(dDate.getMonth()+iMonths);   
		iDaysOfMonth = m4DaysOfMonthFromDate(dDate);
	    dDate.setDate(Math.min(dSavedDayOfMonth, iDaysOfMonth));
    	break;
	case "ORACLE": //ORACLE
         dDate.setDate(1);
         dDate.setMonth(dDate.getMonth()+iMonths);
		 iDaysOfMonth = m4DaysOfMonthFromDate(dDate);   
		 if (bLastDayOfTheMonth){dDate.setDate (iDaysOfMonth);	
		 }else{dDate.setDate(Math.min(dSavedDayOfMonth, iDaysOfMonth));}   
	     break;		 		 
	case "JAVASCRIPT":  //JAVASCRIPT
		dDate.setMonth(dDate.getMonth()+iMonths);
		break;
	default:
       throw (new m4class_modonodefinido("m4AddMonths",sMode));	
	    
    }   
   sDate = m4builtdate(dDate.getDate(),dDate.getMonth()+1,dDate.getFullYear());
   return sDate;
 }catch(excepcion){m4err_gen(excepcion);};   		
}

function m4AddDays(sDate,sDays){
try{
  if (m4AddDays.arguments.length <2) throw (new m4class_numparametrosincorrecto("m4AddDays",m4AddDays.arguments.length,2));
  var adateinfo = new Array(3);
  var iDays =0;   
  if (sDays != "") {iDays = m4parseInt(sDays);}
  m4splitdate(sDate,adateinfo);
  var dDate = new Date(adateinfo[2],adateinfo[1]-1,adateinfo[0]);
  dDate.setDate(dDate.getDate() + iDays);  
  sDate = m4builtdate(dDate.getDate(),dDate.getMonth()+1,dDate.getFullYear());
  return sDate;
}catch(excepcion){m4err_gen(excepcion);};    
}

function m4DaysOfMonth(sDate) {
try{
  if (m4DaysOfMonth.arguments.length <1) throw (new m4class_numparametrosincorrecto("m4DaysOfMonth",m4DaysOfMonth.arguments.length,1));
  var adateinfo = new Array(3);
  m4splitdate(sDate,adateinfo);
  var dDate = new Date(adateinfo[2],adateinfo[1]-1,adateinfo[0]);
  return m4DaysOfMonthFromMonth(dDate);
 }catch(excepcion){m4err_gen(excepcion);};
}

function m4DaysOfMonthFromDate(dDate){
try{
  if (m4DaysOfMonthFromDate.arguments.length <1) throw (new m4class_numparametrosincorrecto("m4DaysOfMonthFromDate",m4DaysOfMonthFromDate.arguments.length,1));
  var iDays = 28;
  var iMonth = dDate.getMonth();
  var dDateAux = new Date(dDate);
  do {
    iDays++;
    dDateAux.setDate(iDays);
  } while (dDateAux.getMonth() == iMonth);
  return iDays - 1;
   }catch(excepcion){m4err_gen(excepcion);};
}

function m4GMTInMinutes(){
    var dRightNow=new Date();
    var iDiffInMinutes = dRightNow.getTimezoneOffset() * -1;
	return iDiffInMinutes;
}
