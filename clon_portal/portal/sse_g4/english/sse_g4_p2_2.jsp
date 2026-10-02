<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Holidays</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"  language="Javascript1.2"></script>
<%@ include file="../../sse_generico/english/sse_lang_in.jsp" %>
<script type="text/javascript" src="/libreria/clasecalendario.js"  language="Javascript1.2"></script>
<script type="text/javascript" src="/libreria/dom1.js"  language="Javascript1.2"></script>
<script type="text/javascript" language="Javascript1.2">
fecha_actual = new Date();
var mes = fecha_actual.getMonth();
omes0 = new clasecalendario("omes0",0,fecha_actual.getYear(),"hidden",true,0,10,1);
omes1 = new clasecalendario("omes1",1,fecha_actual.getYear(),"hidden",true,34,10,1);
omes2 = new clasecalendario("omes2",2,fecha_actual.getYear(),"hidden",true,68,10,1);
omes3 = new clasecalendario("omes3",3,fecha_actual.getYear(),"hidden",true,0,54,1);
omes4 = new clasecalendario("omes4",4,fecha_actual.getYear(),"hidden",true,34,54,1);
omes5 = new clasecalendario("omes5",5,fecha_actual.getYear(),"hidden",true,68,54,1);
omes6 = new clasecalendario("omes6",6,fecha_actual.getYear(),"hidden",true,68,54,1);
omes7 = new clasecalendario("omes7",7,fecha_actual.getYear(),"hidden",true,68,54,1);
omes8 = new clasecalendario("omes8",8,fecha_actual.getYear(),"hidden",true,68,54,1);
omes9 = new clasecalendario("omes9",9,fecha_actual.getYear(),"hidden",true,68,54,1);
omes10 = new clasecalendario("omes10",10,fecha_actual.getYear(),"hidden",true,68,54,1);
omes11 = new clasecalendario("omes11",11,fecha_actual.getYear(),"hidden",true,68,54,1);
omes12 = new clasecalendario("omes12",12,fecha_actual.getYear()+1,"hidden",true,68,54,1);
</script>
<%
    String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
	String zSCO_ID_INCIDENCE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_INCIDENCE");
	
		if ((zSCO_ID_INCIDENCE==null)||(zSCO_ID_INCIDENCE.equals(""))){
		zSCO_ID_INCIDENCE="ALL";
	}
%>
</head>
<body>
<%
   String zsubsesion = "SSE_HOLYDAYS";
   String zmeta4object = "SSE_HOLYDAYS";
   String znodo = "SSE_CARGA_FESTIVOS";
   String zlectura = zsubsesion + "!" + znodo;
   String zraiz = zsubsesion + "!" + znodo + ".";
   String zmetodocarga1 =zsubsesion  + "!SSE_CARGA_FESTIVOS.CARGA";
   String zmetodocarga2 =zsubsesion  + "!SSE_PRINCIPAL.CARGA";
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String znodo3 = "SSE_INCIDENCE";
   
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   String zSCOIDINCIDENCE = zcomun3 + "SCO_ID_INCIDENCE";
   String zSCONMINCIDENCE = zcomun3 + "SCO_NM_INCIDENCE";
   
   String ztipocarga = "ALL";
	String zf0 ="";
	String zpa0 = "";
	String zpc0 = "";
	String za0 = "";
	String zf1 ="";
	String zpa1 = "";
	String zpc1 = "";
	String za1 = "";
	String zf2 ="";
	String zpa2 = "";
	String zpc2 = "";
	String za2 = "";
	String zf3 ="";
	String zpa3 = "";
	String zpc3 = "";
	String za3 = "";
	String zf4 ="";
	String zpa4 = "";
	String zpc4 = "";
	String za4 = "";
	String zf5 ="";
	String zpa5 = "";
	String zpc5 = "";
	String za5 = "";
	String zf6 ="";
	String zpa6 = "";
	String zpc6 = "";
	String za6 = "";
	String zf7 ="";
	String zpa7 = "";
	String zpc7 = "";
	String za7 = "";
	String zf8 ="";
	String zpa8 = "";
	String zpc8 = "";
	String za8 = "";
	String zf9 ="";
	String zpa9 = "";
	String zpc9 = "";
	String za9 = "";
	String zf10 ="";
	String zpa10 = "";
	String zpc10 = "";
	String za10 = "";
	String zf11 ="";
	String zpa11 = "";
	String zpc11 = "";
	String za11 = "";
	String zf12 ="";
	String zpa12 = "";
	String zpc12 = "";
	String za12 = "";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	M4Operations m = new M4Operations(request);
	m.setItem(zsubsesion,znodo,"","SSE_INCIDENCE",zSCO_ID_INCIDENCE);  
			
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga1%>"/>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<%
	int zcount3 = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);

	} catch(Exception e) {}
	String	zcountv3 = String.valueOf(zcount3);
	
%>
<%
	try {
	  	M4Operations m = new M4Operations(request);
		
		zf0= m.getItem(znodo,zmeta4object,znodo,"","ENERO");
		zpa0 = m.getItem(znodo,zmeta4object,znodo,"","ENERO_PA");
		zpc0 = m.getItem(znodo,zmeta4object,znodo,"","ENERO_PC");
	    za0 = m.getItem(znodo,zmeta4object,znodo,"","ENERO_A");
		zf1 = m.getItem(znodo,zmeta4object,znodo,"","FEBRERO");
		zpa1 = m.getItem(znodo,zmeta4object,znodo,"","FEBRERO_PA");
		zpc1 = m.getItem(znodo,zmeta4object,znodo,"","FEBRERO_PC");
	    za1 = m.getItem(znodo,zmeta4object,znodo,"","FEBRERO_A");
		zf2 = m.getItem(znodo,zmeta4object,znodo,"","MARZO");
		zpa2 = m.getItem(znodo,zmeta4object,znodo,"","MARZO_PA");
		zpc2 = m.getItem(znodo,zmeta4object,znodo,"","MARZO_PC");
	    za2 = m.getItem(znodo,zmeta4object,znodo,"","MARZO_A");
		zf3 = m.getItem(znodo,zmeta4object,znodo,"","ABRIL");
		zpa3 = m.getItem(znodo,zmeta4object,znodo,"","ABRIL_PA");
		zpc3 = m.getItem(znodo,zmeta4object,znodo,"","ABRIL_PC");
	    za3 = m.getItem(znodo,zmeta4object,znodo,"","ABRIL_A");
		zf4 = m.getItem(znodo,zmeta4object,znodo,"","MAYO");
		zpa4 = m.getItem(znodo,zmeta4object,znodo,"","MAYO_PA");
		zpc4 = m.getItem(znodo,zmeta4object,znodo,"","MAYO_PC");
	    za4 = m.getItem(znodo,zmeta4object,znodo,"","MAYO_A");
		zf5 = m.getItem(znodo,zmeta4object,znodo,"","JUNIO");
		zpa5 = m.getItem(znodo,zmeta4object,znodo,"","JUNIO_PA");
		zpc5 = m.getItem(znodo,zmeta4object,znodo,"","JUNIO_PC");
	    za5 = m.getItem(znodo,zmeta4object,znodo,"","JUNIO_A");
		zf6 = m.getItem(znodo,zmeta4object,znodo,"","JULIO");
		zpa6 = m.getItem(znodo,zmeta4object,znodo,"","JULIO_PA");
		zpc6 = m.getItem(znodo,zmeta4object,znodo,"","JULIO_PC");
	    za6 = m.getItem(znodo,zmeta4object,znodo,"","JULIO_A");
		zf7 = m.getItem(znodo,zmeta4object,znodo,"","AGOSTO");
		zpa7 = m.getItem(znodo,zmeta4object,znodo,"","AGOSTO_PA");
		zpc7 = m.getItem(znodo,zmeta4object,znodo,"","AGOSTO_PC");
	    za7 = m.getItem(znodo,zmeta4object,znodo,"","AGOSTO_A");
		zf8 = m.getItem(znodo,zmeta4object,znodo,"","SEPTIEMBRE");
		zpa8 = m.getItem(znodo,zmeta4object,znodo,"","SEPTIEMBRE_PA");
		zpc8 = m.getItem(znodo,zmeta4object,znodo,"","SEPTIEMBRE_PC");
	    za8 = m.getItem(znodo,zmeta4object,znodo,"","SEPTIEMBRE_A");
		zf9 = m.getItem(znodo,zmeta4object,znodo,"","OCTUBRE");
		zpa9 = m.getItem(znodo,zmeta4object,znodo,"","OCTUBRE_PA");
		zpc9 = m.getItem(znodo,zmeta4object,znodo,"","OCTUBRE_PC");
	    za9 = m.getItem(znodo,zmeta4object,znodo,"","OCTUBRE_A");
		zf10 = m.getItem(znodo,zmeta4object,znodo,"","NOVIEMBRE");
		zpa10 = m.getItem(znodo,zmeta4object,znodo,"","NOVIEMBRE_PA");
		zpc10 = m.getItem(znodo,zmeta4object,znodo,"","NOVIEMBRE_PC");
	    za10 = m.getItem(znodo,zmeta4object,znodo,"","NOVIEMBRE_A");
		zf11 = m.getItem(znodo,zmeta4object,znodo,"","DICIEMBRE");
        zpa11 = m.getItem(znodo,zmeta4object,znodo,"","DICIEMBRE_PA");
		zpc11 = m.getItem(znodo,zmeta4object,znodo,"","DICIEMBRE_PC");
	    za11 = m.getItem(znodo,zmeta4object,znodo,"","DICIEMBRE_A");
        zf12 = m.getItem(znodo,zmeta4object,znodo,"","NAVIDAD");
        zpa12 = m.getItem(znodo,zmeta4object,znodo,"","NAVIDAD_PA");
		zpc12 = m.getItem(znodo,zmeta4object,znodo,"","NAVIDAD_PC");
	    za12 = m.getItem(znodo,zmeta4object,znodo,"","NAVIDAD_A");


} catch(Exception e) {}
%>
<script type="text/javascript">
omes0.festivos = new Array(<%=zf0%>);
omes0.cancelados =  new Array(<%=zpc0%>);
omes0.aceptados =  new Array(<%=za0%>);
omes0.pendientes =  new Array(<%=zpa0%>);
omes1.festivos = new Array(<%=zf1%>);
omes1.cancelados =  new Array(<%=zpc1%>);
omes1.aceptados =  new Array(<%=za1%>);
omes1.pendientes =  new Array(<%=zpa1%>);
omes2.festivos = new Array(<%=zf2%>);
omes2.cancelados =  new Array(<%=zpc2%>);
omes2.aceptados =  new Array(<%=za2%>);
omes2.pendientes =  new Array(<%=zpa2%>);
omes3.festivos = new Array(<%=zf3%>);
omes3.cancelados =  new Array(<%=zpc3%>);
omes3.aceptados =  new Array(<%=za3%>);
omes3.pendientes =  new Array(<%=zpa3%>);
omes4.festivos = new Array(<%=zf4%>);
omes4.cancelados =  new Array(<%=zpc4%>);
omes4.aceptados =  new Array(<%=za4%>);
omes4.pendientes =  new Array(<%=zpa4%>);
omes5.festivos = new Array(<%=zf5%>);
omes5.cancelados =  new Array(<%=zpc5%>);
omes5.aceptados =  new Array(<%=za5%>);
omes5.pendientes =  new Array(<%=zpa5%>);
omes6.festivos = new Array(<%=zf6%>);
omes6.cancelados =  new Array(<%=zpc6%>);
omes6.aceptados =  new Array(<%=za6%>);
omes6.pendientes =  new Array(<%=zpa6%>);
omes7.festivos = new Array(<%=zf7%>);
omes7.cancelados =  new Array(<%=zpc7%>);
omes7.aceptados =  new Array(<%=za7%>);
omes7.pendientes =  new Array(<%=zpa7%>);
omes8.festivos = new Array(<%=zf8%>);
omes8.cancelados =  new Array(<%=zpc8%>);
omes8.aceptados =  new Array(<%=za8%>);
omes8.pendientes =  new Array(<%=zpa8%>);
omes9.festivos = new Array(<%=zf9%>);
omes9.cancelados =  new Array(<%=zpc9%>);
omes9.aceptados =  new Array(<%=za9%>);
omes9.pendientes =  new Array(<%=zpa9%>);
omes10.festivos = new Array(<%=zf10%>);
omes10.cancelados =  new Array(<%=zpc10%>);
omes10.aceptados =  new Array(<%=za10%>);
omes10.pendientes =  new Array(<%=zpa10%>);
omes11.festivos = new Array(<%=zf11%>);
omes11.cancelados =  new Array(<%=zpc11%>);
omes11.aceptados =  new Array(<%=za11%>);
omes11.pendientes =  new Array(<%=zpa11%>);
omes12.festivos = new Array(<%=zf12%>);
omes12.cancelados =  new Array(<%=zpc12%>);
omes12.aceptados =  new Array(<%=za12%>);
omes12.pendientes =  new Array(<%=zpa12%>);
var coleccionmeses = new Array();
coleccionmeses[0] = omes0;
coleccionmeses[1] = omes1;
coleccionmeses[2] = omes2;
coleccionmeses[3] = omes3;
coleccionmeses[4] = omes4;
coleccionmeses[5] = omes5;
coleccionmeses[6] = omes6;
coleccionmeses[7] = omes7;
coleccionmeses[8] = omes8;
coleccionmeses[9] = omes9;
coleccionmeses[10] = omes10;
coleccionmeses[11] = omes11;
coleccionmeses[12] = omes12;
//if (screen.width == 1024){
//	var posiciones = new Array("0,110","22,110","44,110","66,110",
//	"0,275","22,275","44,275","66,275",
//	"0,440","22,340","44,340","66,340",
//	"0,465");
	
//	}
//else {
	var posiciones = new Array(	"0,99","25,99","50,99","75,99",
	"0,250","25,250","50,250","75,250",
	"0,400","25,400","50,400","75,400",
	"0,550");
//}
function buscar(cadena){
var re = /,/;
var r = cadena.search(re);
return(r);
}
var numcalen = 0;
function mostrarcalendarios(paso,mes,pos,coleccionobj,posiciones){
//alert(posiciones);
if ((paso == 0) || (mes == 13)){
return;
}
else{
var x = 0;
var y = 0;
numcalen = numcalen + 1;
coleccionobj[mes].pintacalendario();
x = posiciones[pos].substr(0,buscar(posiciones[pos]));
y = posiciones[pos].substr(buscar(posiciones[pos])+1,posiciones[pos].length);
coleccionobj[mes].mover(x,y);
coleccionobj[mes].mostrar(true);
mostrarcalendarios(paso - 1,mes + 1,pos +1,coleccionobj,posiciones);
}
}

function m4buscaroption(oselect,sidoption){
var l=oselect.options.length;
for(var ni=0; ni< l; ni++){  
if (oselect.options[ni].value == sidoption){
	oselect.selectedIndex = ni; 
	break;
	}
}
}
</script>
<div id="capa_cuerpo" style="position:relative; left:1%; top:1px; width:100%; z-index:2">
<form action="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2_2.jsp" method="post" name="NombreFormulario" id="NombreFormulario" >
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" >Legend:</td></tr>
<tr>
<td>
	<ul>
		<li class="acep"><div class="enlacefuncional">Days Approved</div></li>
		<li class="pend"><div class="enlacefuncional">Days Pending Approval</div></li>
		<li class="cance"><div class="enlacefuncional">Days Pending Rejection</div></li>
		<li class="fest"><div class="enlacefuncional">Bank Holidays</div></li>
	</ul>
	</td>	
</tr>
<tr>
	<td class="fuentecampo" colspan="4">&nbsp;Holiday Type&nbsp;
	<select id="SCO_ID_INCIDENCE" class="fuenteformulario150" name="SCO_ID_INCIDENCE" title="Select the Holiday Type" onchange="javacript:m4submit('NombreFormulario');">
	<option value="ALL">All</option>
	
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSCOIDINCIDENCE%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONMINCIDENCE%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
</tr>
</table>
</form>
<script type="text/javascript" language="Javascript1.2">
mostrarcalendarios((13-mes),mes,0,coleccionmeses,posiciones);
m4buscaroption(m4objeto('SCO_ID_INCIDENCE','NombreFormulario'),'<%=zSCO_ID_INCIDENCE%>')
</script>

</div>
<br /><br /><br />
<m4:endpage/>
</body>
