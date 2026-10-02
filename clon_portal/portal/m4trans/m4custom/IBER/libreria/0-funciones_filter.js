function opendialog(surl, nwidth, nheight){
	this.m4prop_surl = surl;
	this.m4prop_nwidth = nwidth;
	this.m4prop_nheight = nheight;
// Centrado en la ventana principal (la que me crea)
	this.m4prop_nleft = (screen.availWidth -this.m4prop_nwidth)/2;
	this.m4prop_ntop =(screen.availHeight - this.m4prop_nheight)/2;
	var attr = "left=" + this.m4prop_nleft + ",top=" + this.m4prop_ntop + ",resizable=" + this.m4prop_resizable + ",scrollbars=" + this.m4prop_scrollbars + ",width=" + this.m4prop_nwidth + ",height=" + this.m4prop_nheight + ",status=" + this.m4prop_status;
// Genero el dialogo
   var sidwindow = (this.m4prop_usewindowid == true)?this.m4prop_sidpage:this.m4prop_sname;
	this.m4prop_owin= window.open(this.m4prop_surl, sidwindow, attr);

}

function class_dialogwin(aobjeto,sidpage){
this.m4prop_sidpage = sidpage;
this.m4prop_sobjname = "ventana";
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
this.m4met_m4opendialog =opendialog;
this.m4prop_afterclosewindowmet ="";
}

function miwindow(sidpag,spag,ar,sidform){
	var oparam=new Array();
	for (var i=0; i < ar.length; i++){
		oparam[i]= document.forms[sidform].elements[ar[i]];
	}
	if (typeof(miwindow.arguments[4]) == "undefined"){
		var nx = 700;
	}else{ var nx = miwindow.arguments[4];}
	if (typeof(miwindow.arguments[5]) == "undefined"){
		var ny = 500;
	}else{ var ny = miwindow.arguments[5];} 
	oventana = new class_dialogwin(oparam,sidpag);
	oventana.m4met_m4opendialog(spag,nx,ny); 
}

function filtro(spage){
	

var sfil = "/servlet/CheckSecurity/JSP/mss_generico/shco_mt_list_person.jsp?zcss"+spage;
var ni = filtro.arguments.length; 
var oparam=new Array;
for(t=0;t < ni-1;t++){
	oparam[t]=filtro.arguments[t+1];
}

		miwindow(sfil,sfil,oparam,"NombreFormulario",700,500);
}

function sse_filtro(spage){
	
var sfil="/servlet/CheckSecurity/JSP/sse_g0/sse_hr_period.jsp";
var sfor = sse_filtro.arguments[0];
var ni = sse_filtro.arguments.length; 
var oparam=new Array;
for(t=0;t < ni-1;t++){
	oparam[t]=sse_filtro.arguments[t+1];
}

		miwindow(sfil,sfil,oparam,sfor,700,500);
}

function ssco_filter_responsibles(spage){
	
var sfil="/servlet/CheckSecurity/JSP/sse_g0/ssco_list_responsibles.jsp";
var sfor = ssco_filter_responsibles.arguments[0];
var ni = ssco_filter_responsibles.arguments.length; 
var oparam=new Array;
for(t=0;t < ni-1;t++){
	oparam[t]=ssco_filter_responsibles.arguments[t+1];
}
	
		miwindow(sfil,sfil,oparam,sfor,700,500);
}


function returnvalues(ar){
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
}
