<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ page import="com.meta4.session.*, com.meta4.m4operations.* " %>
<title>Definici&oacute;n de la vacante</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_g3_trans.jsp"%>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript">
var vOpcionActiva;
function navegar(_valor,_url){
	var parametros = new Array("estado","OpcAct","ztipopersist");
			var valores = new Array(31,_valor,"wizx");
			m4navegar(_url, parametros, valores);
			  
}
function ver_detalles()
	{
		var puesto = m4select(m4objeto("STD_ID_JOB_CODE","NombreFormulario"),"value");
		
	if ((null==puesto) || (''==puesto)){
			mensaje = m4getmessage("_sl_co_mss_vac_2");
			alert(mensaje)
		return };
		
		this.url = "/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_desc.jsp?zVis=0&zSJOB=" + puesto;
		var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=750,height=650";
		this.win= window.open(this.url, this.name, attr);
	}
function NullValue(){}
function comprobar(_valor,_url){
	var ztipopersist="wiz1";
	var mensaje = "Se han encontrado los siguientes errores: " + "\n";
	var falta_valor;
	var zmovnac="0";
	var zmovint="0";
	var znompuesto = m4select(m4objeto("STD_ID_JOB_CODE","NombreFormulario"),"text");
	var znomunidadorg = m4select(m4objeto("STD_ID_WORK_UNIT","NombreFormulario"),"text");
	var zfechaincorp = m4valor("NombreFormulario","SCO_DT_START","","get")
	var zfechalimite = m4valor("NombreFormulario","SCO_DT_LIMIT","","get")
	var movnac = m4objeto("SCO_CHK_MOV_NAC","NombreFormulario");
	var movint = m4objeto("SCO_CHK_MOV_INT","NombreFormulario");
	var zconsiderations = m4valor("NombreFormulario","SCO_CONSIDERATIONS","","get");
	if ((null==znompuesto) || (''==znompuesto)){
		mensaje+="* Puesto, campo obligatorio" + "\n";
		falta_valor=1;
	}
	if ((null==znomunidadorg) || (''==znomunidadorg)){
		mensaje+=m4getmessage("_sl_co_mss_vac") + "\n";
		falta_valor=1;
	}
	if ((null==zconsiderations) || (''==zconsiderations)){
		mensaje+=m4getmessage("_sl_co_mss_vac_1") + "\n";
		falta_valor=1;
	}
	var numvac = parseInt(m4valor("NombreFormulario","SSE_NUM_VAC","","get"));
	var edadmin = parseInt(m4valor("NombreFormulario","SCO_MIN_AGE","","get"));
	var edadmax = parseInt(m4valor("NombreFormulario","SCO_MAX_AGE","","get"));
	var salariomin = parseInt(m4valor("NombreFormulario","SCO_MIN_SALARY","","get"));
	var salariomax = parseInt(m4valor("NombreFormulario","SCO_MAX_SALARY","","get"));
	smax = new m4objvalidacion('_num',1,10,'','',false);
	smin = new m4objvalidacion('_num',1,10,'','',false);
	emax = new m4objvalidacion('_num',1,2,'','',false);
	emin = new m4objvalidacion('_num',1,2,'','',false);
	obj1 = m4objeto("SCO_MAX_SALARY","NombreFormulario");
	obj2 = m4objeto("SCO_MIN_SALARY","NombreFormulario");
	obj3 = m4objeto("SCO_MAX_AGE","NombreFormulario")
	obj4 = m4objeto("SCO_MIN_AGE","NombreFormulario")
	smax.m4validar(m4objeto("SCO_MAX_SALARY","NombreFormulario"));
	smin.m4validar(m4objeto("SCO_MIN_SALARY","NombreFormulario"));
	emax.m4validar(m4objeto("SCO_MAX_AGE","NombreFormulario"));
	emin.m4validar(m4objeto("SCO_MIN_AGE","NombreFormulario"));
	if (obj1.value != ''){
		if (smax.resultado==false){
		mensaje+=" * Sueldo máximo, el campo debe ser numérico" + "\n";
		falta_valor=1;
	}}
	if (obj2.value != ''){
		if (smin.resultado==false){
		mensaje+=" * Sueldo mínimo, el campo debe ser numérico" + "\n";
		falta_valor=1;
	}}	
	if (obj3.value != ''){
		if (emax.resultado==false){
		mensaje+=" * Edad máxima, el campo debe ser numérico" + "\n";
		falta_valor=1;
	}}
	if (obj4.value != ''){
		if (emin.resultado==false){
		mensaje+=" * Edad mínima, el campo debe ser numérico" + "\n";
		falta_valor=1;
	}}
	v1 = new m4objvalidacion('_num',1,2,'','',false);
	v1.m4validar(m4objeto("SSE_NUM_VAC","NombreFormulario"));
	if (v1.resultado==false || numvac==0) {
		mensaje+="* Número de vacantes, campo obligatorio numérico distinto de cero" + "\n";
		falta_valor=1;
	}
	if ( edadmax < edadmin ){
		mensaje+="* La edad máxima debe ser superior a la edad mínima" + "\n";
		falta_valor=1;	
	} 
	if ( salariomax < salariomin ){
		mensaje+="* El sueldo máximo debe ser superior al sueldo mínimo" + "\n";
		falta_valor=1;
	}
	
	if (zfechaincorp != ''){
		if (""==m4fechacomprobacion(m4objeto('SCO_DT_START','NombreFormulario'),false)){
			mensaje+="* El formato de la fecha de incorporación es invalido, debe ser "+'<%=zsgcoParamDate%>'+"" + "\n";
			falta_valor=1;
		}	
	}
	if (zfechalimite != ''){
		if (""==m4fechacomprobacion(m4objeto('SCO_DT_LIMIT','NombreFormulario'),false)){
			mensaje+="* El formato de la fecha de límite de incorporación es invalido, debe ser "+'<%=zsgcoParamDate%>'+"" + "\n";
			falta_valor=1;
		}
		
	}	
	if (m4compfechas(m4objeto('SCO_DT_START','NombreFormulario'),'>',m4objeto('SCO_DT_LIMIT','NombreFormulario'))){
		mensaje+="* La fecha límite de incorporación debe ser mayor o igual a la fecha de incorporación" + "\n";
		falta_valor=1;
	}
	if (movint.checked){var zmovint = "1"}
	if (movnac.checked){var zmovnac = "1"}
	if (1==falta_valor){
		alert(mensaje)
		return };
	if (1!=falta_valor){
		var zworkunit = m4select(m4objeto("STD_ID_WORK_UNIT","NombreFormulario"),"value");
		var znomworkunit = m4select(m4objeto("STD_ID_WORK_UNIT","NombreFormulario"),"text");
		var zlocation = m4select(m4objeto("STD_ID_WORK_LOCAT","NombreFormulario"),"value");
		var znomlocation = m4select(m4objeto("STD_ID_WORK_LOCAT","NombreFormulario"),"text");
		var zpuesto = m4select(m4objeto("STD_ID_JOB_CODE","NombreFormulario"),"value");
		var znumvac = m4valor("NombreFormulario","SSE_NUM_VAC","","get");
		var zsalmin = m4valor("NombreFormulario","SCO_MIN_SALARY","","get");
		var zsalmax = m4valor("NombreFormulario","SCO_MAX_SALARY","","get");
		var ztiposal =  m4select(m4objeto("ID_CURRENCY","NombreFormulario"),"value");
		var znomtiposal = m4select(m4objeto("ID_CURRENCY","NombreFormulario"),"text"); 
		var zedadmin = m4valor("NombreFormulario","SCO_MIN_AGE","","get");
		var zedadmax = m4valor("NombreFormulario","SCO_MAX_AGE","","get");
		m4valor("NombreFormulario","ztipopersist",ztipopersist,"set");
		m4valor("NombreFormulario","znumvac",znumvac,"set");
		m4valor("NombreFormulario","znompuesto",znompuesto,"set");
		m4valor("NombreFormulario","zpuesto",zpuesto,"set");
		m4valor("NombreFormulario","zmovnac",zmovnac,"set");
		m4valor("NombreFormulario","zmovint",zmovint,"set");
		m4valor("NombreFormulario","zfechaincorp",zfechaincorp,"set");
		m4valor("NombreFormulario","zfechalimite",zfechalimite,"set");
		m4valor("NombreFormulario","zedadmin",zedadmin,"set");
		m4valor("NombreFormulario","zedadmax",zedadmax,"set");
		m4valor("NombreFormulario","zworkunit",zworkunit,"set");
		m4valor("NombreFormulario","znomworkunit",znomworkunit,"set");
		m4valor("NombreFormulario","zlocation",zlocation,"set");
		m4valor("NombreFormulario","znomlocation",znomlocation,"set");
		m4valor("NombreFormulario","zsalmin",zsalmin,"set");
		m4valor("NombreFormulario","zsalmax",zsalmax,"set");
		m4valor("NombreFormulario","ztiposal",ztiposal,"set");
		m4valor("NombreFormulario","znomtiposal",znomtiposal,"set");
		m4valor("NombreFormulario","zconsiderations",zconsiderations,"set");
		
		var f = document.forms['NombreFormulario']
		if (_valor==1){f.action="/servlet/CheckSecurity/JSP/" + _url + "?estado=31"}
		if (_valor==0){f.action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_persist_wiz1.jsp?estado=31"}
		m4submit("NombreFormulario");
	}
}
</script>
<%
	
	String znumvac2 = "";String znompuesto2 = "";String zpuesto2 = "";
	String zmovnac2 = "";String zmovint2 = "";String zfechaincorp2 = "";
	String zfechalimite2 = "";String zedadmin2 = "";String zedadmax2 = "";
	String zworkunit2 = "";String znomworkunit2 = ""; 
	String zlocation2 = "";String znomlocation2 = "";String zsalmin2 = ""; 
	String zsalmax2 = "";String ztiposal2 = "";String znomtiposal2 = ""; 
	String zconsiderations2 = "";
	String disabled = ""; 
				
	// estado:	Determina la barra de localizacion.

        String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
		String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
		if ((estado==null)||(estado.equals(""))){
			estado="0";
		}
		if ((zinicios==null)||(zinicios.equals(""))){
			zinicios = "1";
		}
	
	// Determina la fuente activa del wizard -->
	
	int OpcionActiva=1;
	
		
%>
</head>
<body>
<%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
<%
	String zsubsesion = "SSM_VACANT";
	String zmeta4object = "SSM_VACANT";
	String znodo = "SSM_VACANT";
	String znodo1 = "SSM_WORK_LOCATION";
	String znodo2 = "SSM_JOB";
	String znodo3 = "SSM_JOB_POST";
	String znodo4 = "SSM_CURRENCY";
	String znodo5 = "SSM_WORK_UNITS";
	String ztipocarga = "wiz1";   

/// Se parametriza el tamano que se desea para la ventana

		String zventanas = "10";
		int zvuelta = 5;

// No se modifica en general.

		String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
		String zlectura1 = zsubsesion + "!" + znodo1;
		String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
		String zraiz1 = zsubsesion + "!" + znodo1 + ".";
		String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;
		
		String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
		String zlectura2 = zsubsesion + "!" + znodo2;
		String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
		String zraiz2 = zsubsesion + "!" + znodo2 + ".";
		String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;
		
		String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
		String zlectura3 = zsubsesion + "!" + znodo3;
		String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
		String zraiz3 = zsubsesion + "!" + znodo3 + ".";
		String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;
		
		String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
		String zlectura4 = zsubsesion + "!" + znodo4;
		String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
		String zraiz4 = zsubsesion + "!" + znodo4 + ".";
		String ziterator4 = znodo4 + ":" + zsubsesion + "!" + znodo4;
		
		String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
		String zlectura5 = zsubsesion + "!" + znodo5;
		String zmove5 = znodo5 + ":" + znodo5 + "[FIRST]";
		
		String zraiz5= zsubsesion + "!" + znodo5 + ".";
		String ziterator5 = znodo5 + ":" + zsubsesion + "!" + znodo5;
		
		
// Metodo de carga del Meta4Object generico

		String zmetodocarga = zsubsesion + "!SSM_VACANT.CARGA";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

		String zSTDIDWORKUNIT = zraiz5 + "STD_ID_WORK_UNIT_CHILD";
		String zSTDNWORKUNIT = zraiz5 + "STD_N_WORK_UNIT";
		
		String zSTDIDWORKLOCATION = zraiz1 + "STD_ID_WORK_LOCATION";
		String zSTDNWORKLOCATION = zraiz1 + "STD_N_WORK_LOCATION";
		
		String zSTDIDJOBCODE = zraiz2 + "STD_ID_JOB_CODE";
		String zSTDNJOBCODE = zraiz2 + "STD_N_JOB_CODE";
		
		String zIDCURRENCY = zraiz4 + "ID_CURRENCY";
		String zNMCURRENCY = zraiz4 + "NM_CURRENCY";
		
// Variables del outputdef

			
		
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>

<%
		
	int zcount3 = 0;
	int zcounti3 = 0;
	try {
		M4Operations m = new M4Operations(request);
		zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
	} catch(Exception e) {}
	try {
		M4Operations m = new M4Operations(request);
		zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
	} catch(Exception e) {}
	String	zcountv3 = String.valueOf(zcounti3);

%>
<div id="capa_link" style="position:absolute; left:1%; top:3%; width:20%; height:0%; z-index:1">
<%@ include file="../../mss_g3/espanol/mss_g3_links_wizzard.jsp" %>
</div>
<div id="capa_cuerpo" style="position:relative; left:21%; top:1%; width:78%; z-index:2">
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="3">Solicita una vacante</td></tr>
<tr>
    <td><img alt="Solicita una vacante" title="Solicita una vacante" src="/iconos/noname_solicitar_vacantes_210_100.gif" width="100" height="100" /></td>
	<td>&nbsp;</td>
	<td><div class="descripcionfuncional">Define el puesto que solicitas.</div></td>
</tr>
</table>
<form action="" method="post" name="NombreFormulario" id="NombreFormulario" >
	<input type="hidden" id="ztipopersist" name="ztipopersist"  value="" />
	<input type="hidden" id="znumvac" name="znumvac"  value="" />
	<input type="hidden" id="znompuesto" name="znompuesto"  value="" />
	<input type="hidden" id="zpuesto" name="zpuesto"  value="" />
	<input type="hidden" id="zmovnac" name="zmovnac"  value="" />
	<input type="hidden" id="zmovint" name="zmovint"  value="" />
	<input type="hidden" id="zfechaincorp" name="zfechaincorp"  value="" />
	<input type="hidden" id="zfechalimite" name="zfechalimite"  value="" />
	<input type="hidden" id="zedadmin" name="zedadmin"  value="" />
	<input type="hidden" id="zedadmax" name="zedadmax"  value="" />
	<input type="hidden" id="zworkunit" name="zworkunit"  value="" />
	<input type="hidden" id="znomworkunit" name="znomworkunit"  value="" />
	<input type="hidden" id="zlocation" name="zlocation"  value="" />
	<input type="hidden" id="znomlocation" name="znomlocation"  value="" />
	<input type="hidden" id="zsalmin" name="zsalmin"  value="" />
	<input type="hidden" id="zsalmax" name="zsalmax"  value="" />
	<input type="hidden" id="ztiposal" name="ztiposal"  value="" />
	<input type="hidden" id="znomtiposal" name="znomtiposal"  value="" />
	<input type="hidden" id="zconsiderations" name="zconsiderations"  value="" />
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo"><td colspan="4">Nueva Vacante</td></tr>
<%	 
if (zcount3 != 0) {
try {
	M4Operations m = new M4Operations(request);
	disabled = "disabled";
	znumvac2=m.getItem(znodo3,zsubsesion,znodo3,"","NUM_VACANTES");
	zmovnac2=m.getItem(znodo3,zsubsesion,znodo3,"","MOVNAC");
	if ((zmovnac2==null)||(zmovnac2.equals(""))){zmovnac2 = "";}
	zmovint2=m.getItem(znodo3,zsubsesion,znodo3,"","MOVINT");
	if ((zmovint2==null)||(zmovint2.equals(""))){zmovint2 = "";}
	zedadmin2 = m.getItem(znodo3,zsubsesion,znodo3,"","EDAD_MINIMA");
	if ((zedadmin2==null)||(zedadmin2.equals(""))){zedadmin2 = "";}
	zedadmax2 = m.getItem(znodo3,zsubsesion,znodo3,"","EDAD_MAXIMA");
	if ((zedadmax2==null)||(zedadmax2.equals(""))){zedadmax2="";}
	
	zsalmin2 = m.getItem(znodo3,zsubsesion,znodo3,"","SUELDO_MINIMO");
	if ((zsalmin2==null)||(zsalmin2.equals(""))){zsalmin2="";}
	zsalmax2 = m.getItem(znodo3,zsubsesion,znodo3,"","SUELDO_MAXIMO");
	if ((zsalmax2==null)||(zsalmax2.equals(""))){zsalmax2="";}


	
		%>
		<m4:item item="SCO_DT_INCORPORATE" var="zfechaincorp2" htmlsafe="true" outputdef="<%=znodo3%>"/>
		<m4:item item="SCO_DT_LIMIT" var="zfechalimite2" htmlsafe="true" outputdef="<%=znodo3%>"/>
		<m4:item item="SCO_ID_WORK_UNIT" var="zworkunit2" htmlsafe="true" outputdef="<%=znodo3%>"/>
		<m4:item item="SCO_ID_WORK_LOCAT" var="zlocation2" htmlsafe="true" outputdef="<%=znodo3%>"/>
		<m4:item item="SCO_ID_JOB" var="zpuesto2" htmlsafe="true" outputdef="<%=znodo3%>"/>
		<m4:item item="SCO_SALX_CURTYP" var="ztiposal2" htmlsafe="true" outputdef="<%=znodo3%>"/>
		<m4:item item="SCO_CONSIDERATIONS" var="zconsiderations2" htmlsafe="true" outputdef="<%=znodo3%>"/>
	
		<%
}catch(Exception e){}
} else 
{
	disabled = "";
	znumvac2 = "1";	
}
%>	
<tr>
	<td class="fuentecampo" colspan="1">&nbsp;*&nbsp;N&uacute;mero de vacantes</td>
	<td class="fuentevalor" colspan="1"><input class="fuenteformulario" type="text" id="SSE_NUM_VAC" name="SSE_NUM_VAC" size="3" maxlength="2" title="Escribe el número de vacantes pedidas" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(znumvac2)%>" /></td>
	<td class="fuentecampo" colspan="1"><input title="Marca la necesidad de movilidad internacional" id="SCO_CHK_MOV_INT" type="checkbox" name="SCO_CHK_MOV_INT" <%=zmovint2%> />&nbsp;Movilidad internacional</td>
    <td class="fuentecampo" colspan="1"><input title="Marca la necesidad de movilidad nacional" id="SCO_CHK_MOV_NAC" type="checkbox" name="SCO_CHK_MOV_NAC" <%=zmovnac2%> />&nbsp;Movilidad nacional</td>		
</tr>
<tr>
	<td class="fuentecampo">&nbsp;*&nbsp;Puesto</td>
	<td class="fuentecampo">
		<select id="STD_ID_JOB_CODE" class="fuenteformulario200" name="STD_ID_JOB_CODE" title="Selecciona el puesto de trabajo" <%=disabled%>>
			<option value=""></option>
			<m4:iterator m4rows="*" m4node="<%=ziterator2%>">
			<m4:param name="m4item0" value="<%=zSTDIDJOBCODE%>"/>
			<m4:param name="m4item1" value="<%=zSTDNJOBCODE%>"/>
			<option value="$M4ITEM0$">$M4ITEM1$</option>
			</m4:iterator>
   		</select>
   		<td class="fuentecampo" colspan="2">
		<a  href= "javascript:ver_detalles()"> <img src="/iconos/lu_nor_more_32.png" width="24" height="24" alt="<%=mss_g3.getProperty("Label.mss_g3_p1_wiz1DetPuesto")%>" title="<%=mss_g3.getProperty("Label.mss_g3_p1_wiz1DetPuesto")%>" />  </a>			
	</td>
	</td>
</tr>
<script type="text/javascript" language="Javascript1.5"><!--
if ('<%=zpuesto2%>'!= ""){
	m4searchoptioness('NombreFormulario','STD_ID_JOB_CODE','<%=zpuesto2%>');
}
--></script>
<tr>
	<td class="fuentecampo">&nbsp;*&nbsp;<m4:label  item="STD_ID_WORK_UNIT_CHILD" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
	<td class="fuentecampo" colspan="3">
		<select id="STD_ID_WORK_UNIT" class="fuenteformulario200" name="STD_ID_WORK_UNIT" title="<%=mss_g3.getProperty("Label.mss_g3_p1_wiz1WUSel")%>">				
			<option value=""></option>
			<m4:dataloop outputdef="<%=znodo5%>">
			<option value="<m4:item  item="STD_ID_WORK_UNIT_CHILD" htmlsafe="true" outputdef="<%=znodo5%>"/>"><m4:item  item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="<%=znodo5%>"/></option>
			</m4:dataloop>
   		</select>

	</td>
</tr>
<script type="text/javascript" language="Javascript1.5"><!--
if ('<%=zworkunit2%>'!= ""){
	m4searchoptioness('NombreFormulario','STD_ID_WORK_UNIT','<%=zworkunit2%>');
}
--></script>
<tr>
	<td class="fuentecampo">&nbsp;Lugar de trabajo</td>
	<td class="fuentecampo" colspan="3">
		<select id="STD_ID_WORK_LOCAT" class="fuenteformulario200" name="STD_ID_WORK_LOCAT" title="Selecciona el lugar de trabajo">				
			<option value=""></option>
			<m4:iterator m4rows="*" m4node="<%=ziterator1%>">
			<m4:param name="m4item0" value="<%=zSTDIDWORKLOCATION%>"/>
			<m4:param name="m4item1" value="<%=zSTDNWORKLOCATION%>"/>
			<option value="$M4ITEM0$">$M4ITEM1$</option>
			</m4:iterator>
   		</select>
	</td>
</tr>
<script type="text/javascript" language="Javascript1.5"><!--
if ('<%=zlocation2%>'!= ""){
	m4searchoptioness('NombreFormulario','STD_ID_WORK_LOCAT','<%=zlocation2%>');
}
--></script>
<tr>
	<td class="fuentecampo">&nbsp;Salario (min/max)</td>
	<td class="fuentecampo" colspan="3">
		<input class="fuenteformulario" type="text" name="SCO_MIN_SALARY" id="SCO_MIN_SALARY" title="escribe el sueldo mínimo" maxlength="10" size="10" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zsalmin2)%>" />&nbsp;		
		<input class="fuenteformulario" type="text" name="SCO_MAX_SALARY" id="SCO_MAX_SALARY" title="escribe el sueldo máximo" maxlength="10" size="10" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zsalmax2)%>" />&nbsp;
		<select id="ID_CURRENCY" class="fuenteformulario" name="ID_CURRENCY" title="Selecciona el tipo de divisa">
			<option value=""></option>		    				
			<m4:iterator m4rows="*" m4node="<%=ziterator4%>">
			<m4:param name="m4item0" value="<%=zIDCURRENCY%>"/>
			<m4:param name="m4item1" value="<%=zNMCURRENCY%>"/>
			<option value="$M4ITEM0$">$M4ITEM1$</option>
			</m4:iterator>
		</select>
	</td>
</tr>
<script type="text/javascript" language="Javascript1.5"><!--
if ('<%=ztiposal2%>'!= ""){
	m4searchoptioness('NombreFormulario','ID_CURRENCY','<%=ztiposal2%>');
}
--></script>
<tr>
	<td class="fuentecampo">&nbsp;Fecha incorporaci&oacute;n</td>    
	<td class="fuentecampo" colspan="3"><input class="fuenteformulario" type="text" name="SCO_DT_START" id="SCO_DT_START" title="Escribe la fecha de incorporaci&oacute;n" maxlength="10" size="10" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfechaincorp2)%>"  />
		<a href="javascript:m4calendario(m4objeto('SCO_DT_START','NombreFormulario'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Selecciona la fecha de incorporaci&oacute;n" title="Selecciona la fecha de incorporaci&oacute;n" /></a>
	</td>

</tr>
<tr>
	<td class="fuentecampo">&nbsp;Fecha l&iacute;mite de incorporaci&oacute;n</td>
	<td class="fuentecampo" colspan="3"><input class="fuenteformulario" type="text" name="SCO_DT_LIMIT" id="SCO_DT_LIMIT" title="Escribe la fecha l&iacute;mite de incorporaci&oacute;n" maxlength="10" size="10" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfechalimite2)%>"  />
		<a href="javascript:m4calendario(m4objeto('SCO_DT_LIMIT','NombreFormulario'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Selecciona la fecha l&iacute;mite de incorporaci&oacute;n" title="Selecciona la fecha l&iacute;mite de incorporaci&oacute;n" /></a>
	</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;Edad (min/max)</td>
	<td class="fuentecampo" colspan="3">
		<input class="fuenteformulario" type="text" name="SCO_MIN_AGE" id="SCO_MIN_AGE" title="escribe la edad mínima" maxlength="2" size="3" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zedadmin2)%>" />&nbsp;		
		<input class="fuenteformulario" type="text" name="SCO_MAX_AGE" id="SCO_MAX_AGE" title="escribe la edad máxima" maxlength="2" size="3" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zedadmax2)%>" />
	</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;*&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_wiz1Consid")%></td>
	<td class="fuentecampo" colspan="3">
		<textarea class="fuentetextarea" name="SCO_CONSIDERATIONS" id="SCO_CONSIDERATIONS" title="<%=mss_g3.getProperty("Label.mss_g3_p1_wiz1WriteConsid")%>" cols="40" rows="3"  /><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zconsiderations2)%></textarea>		
	</td>
</tr>
<tr>
	<td class="fuenteboton" align="center" colspan="4">&nbsp;<a href="javascript:comprobar(1,'mss_g3/mss_g3_p1_wiz2.jsp');" ><img alt="Definir vacante" title="Definir vacante" src="/iconos/icono_siguiente_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>
</form>
<%@ include file="../../mss_generico/espanol/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
