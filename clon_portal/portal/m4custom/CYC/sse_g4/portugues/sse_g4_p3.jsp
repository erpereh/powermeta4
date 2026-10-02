<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Calend&aacute;rio de feriados</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
<%@ include file="../../sse_generico/portugues/sse_lang_in.jsp" %>
<script type="text/javascript" src="/libreria/clasecalendario.js"></script>
<script type="text/javascript" src="/libreria/dom1.js"></script>
<script type="text/javascript" language="Javascript1.2">
fecha_actual = new Date();
var mes = fecha_actual.getMonth();
omes0 = new clasecalendario("omes0",0,fecha_actual.getFullYear(),"hidden",false,0,10);
omes1 = new clasecalendario("omes1",1,fecha_actual.getFullYear(),"hidden",false,34,10);
omes2 = new clasecalendario("omes2",2,fecha_actual.getFullYear(),"hidden",false,68,10);
omes3 = new clasecalendario("omes3",3,fecha_actual.getFullYear(),"hidden",false,0,54);
omes4 = new clasecalendario("omes4",4,fecha_actual.getFullYear(),"hidden",false,34,54);
omes5 = new clasecalendario("omes5",5,fecha_actual.getFullYear(),"hidden",false,68,54);
omes6 = new clasecalendario("omes6",6,fecha_actual.getFullYear(),"hidden",false,68,54);
omes7 = new clasecalendario("omes7",7,fecha_actual.getFullYear(),"hidden",false,68,54);
omes8 = new clasecalendario("omes8",8,fecha_actual.getFullYear(),"hidden",false,68,54);
omes9 = new clasecalendario("omes9",9,fecha_actual.getFullYear(),"hidden",false,68,54);
omes10 = new clasecalendario("omes10",10,fecha_actual.getFullYear(),"hidden",false,68,54);
omes11 = new clasecalendario("omes11",11,fecha_actual.getFullYear(),"hidden",false,68,54);
omes12 = new clasecalendario("omes12",12,fecha_actual.getFullYear()+1,"hidden",false,68,54);
</script>
</head>
<body>

<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_CARGA_FESTIVOS";
   String zmeta4object = "SSE_CARGA_FESTIVOS";
   String znodo = "SSE_FESTIVOS";
   String zlectura = zsubsesion + "!" + znodo;
   String zraiz = zsubsesion + "!" + znodo + ".";
   String zmetodocarga =zsubsesion  + "!SSE_FESTIVOS.CARGA";
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zf0 ="";
   String zf1 ="";
   String zf2 ="";
   String zf3 ="";
   String zf4 ="";
   String zf5 ="";
   String zf6 ="";
   String zf7 ="";
   String zf8 ="";
   String zf9 ="";
   String zf10 ="";
   String zf11 ="";
   String zf12 ="";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"/>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<%
	try {
	  	M4Operations m = new M4Operations(request);
		zf0= m.getItem("",zmeta4object,znodo,"","ENERO");
		zf1 = m.getItem("",zmeta4object,znodo,"","FEBRERO");
		zf2 = m.getItem("",zmeta4object,znodo,"","MARZO");
		zf3 = m.getItem("",zmeta4object,znodo,"","ABRIL");
		zf4 = m.getItem("",zmeta4object,znodo,"","MAYO");
		zf5 = m.getItem("",zmeta4object,znodo,"","JUNIO");
		zf6 = m.getItem("",zmeta4object,znodo,"","JULIO");
		zf7 = m.getItem("",zmeta4object,znodo,"","AGOSTO");
		zf8 = m.getItem("",zmeta4object,znodo,"","SEPTIEMBRE");
		zf9 = m.getItem("",zmeta4object,znodo,"","OCTUBRE");
		zf10 = m.getItem("",zmeta4object,znodo,"","NOVIEMBRE");
		zf11 = m.getItem("",zmeta4object,znodo,"","DICIEMBRE");
        zf12 = m.getItem("",zmeta4object,znodo,"","NAVIDAD");
} catch(Exception e) {}
%>
<script type="text/javascript">
omes0.festivos = new Array(<%=zf0%>);
omes1.festivos = new Array(<%=zf1%>);
omes2.festivos = new Array(<%=zf2%>);
omes3.festivos = new Array(<%=zf3%>);
omes4.festivos = new Array(<%=zf4%>);
omes5.festivos = new Array(<%=zf5%>);
omes6.festivos = new Array(<%=zf6%>);
omes7.festivos = new Array(<%=zf7%>);
omes8.festivos = new Array(<%=zf8%>);
omes9.festivos = new Array(<%=zf9%>);
omes10.festivos = new Array(<%=zf10%>);
omes11.festivos = new Array(<%=zf11%>);
omes12.festivos = new Array(<%=zf12%>);
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
function buscar(cadena){
	var re = /,/;
	var r = cadena.search(re);
	return(r);
}
function mostrarcalendarios(paso,mes,pos,coleccionobj){
if ((paso == 0) || (mes == 13)){
	return;
}else{
	coleccionobj[mes].pintacalendario();
	coleccionobj[mes].mostrar(true);
	mostrarcalendarios(paso - 1,mes + 1,pos +1,coleccionobj);
	}
}
</script>
<table width="100%" cellspacing = "0">
<tr>
	<td class="titulofuncional" colspan="2">Calend&aacute;rio de feriados</td>
	
</tr>
<tr>
	<td><img src="/iconos/noname_calendario_123_100.gif" width="100" height="100" alt="Calend&aacute;rio de feriados"></td>
	<td><div class="descripcionfuncional">Consulte os dias feriados do seu centro de trabalho.</div></td>
</tr>			
<tr><td colspan ="2">
<table width="600px" align= "center">
<tr><td>
<script type="text/javascript">
mostrarcalendarios(12,0,0,coleccionmeses);
</script>	
</td></tr>
</table>
</td></tr></table>

</div>
<div id="capa_disclaimer" style="position:relative; width:100%; height:100%; z-index:0">
<%@include file="../../sse_generico/portugues/generico_disclaimer.jsp"%>
</div>
<script type="text/javascript">
</script>
<m4:endpage/>
</body>