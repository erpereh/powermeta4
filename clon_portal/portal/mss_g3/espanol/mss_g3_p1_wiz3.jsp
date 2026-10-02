<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Certificados y Licencias</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<script type="text/javascript">
var vOpcionActiva;
function navegar(_valor,_url){
	var parametros = new Array("estado","OpcAct","ztipopersist");
			var valores = new Array("31",_valor,"wizx");
			m4navegar(_url, parametros, valores);
	}
function comprobar(_valor,_url){
	var ztipopersist="wiz3";
	var vRequerido="0";
	var mensaje = "Se han encontrado los siguientes errores: " + "\n"
	var falta_valor = 0;
	var val_certif = m4select(m4objeto("STD_ID_CERTIFICATION_TYPE","NombreFormulario"),"value");
	if ((null==val_certif) || (''==val_certif)){
		mensaje+=" * Tipo certificado, campo obligatorio" + "\n";
		falta_valor=1;
	}
	var scocheck = m4objeto("SCO_CHECK","NombreFormulario");
	if (scocheck.checked){
		vRequerido="1";
	}
	if (1==falta_valor){alert(mensaje)}	
	if (0==falta_valor){
		var vOpcionActiva;
		var URL;
		vOpcionActiva=_valor;
		URL=_url;
		var vTipoCert= m4select(m4objeto("STD_ID_CERTIFICATION_TYPE","NombreFormulario"),"value");
		var vEntidad= m4select(m4objeto("SCO_ID_ISSUE_ENTIT","NombreFormulario"),"value");
		var vPais= m4select(m4objeto("STD_ID_COUNTRY","NombreFormulario"),"value");
		var parametros = new Array("estado","TipoCert","Entidad","Pais","Req","OpcAct","ztipopersist");
		var valores = new Array("31",vTipoCert,vEntidad,vPais,vRequerido,vOpcionActiva,ztipopersist);
		m4navegar(URL, parametros, valores);
	}
}
</script>
<%
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
	if ((zinicios==null)||(zinicios.equals(""))){
		zinicios = "1";
	}

	// Determina la fuente activa del wizard

	int OpcionActiva=3;
%>
</head>
<body>
<div id="capa_link" style="position:absolute; left:1%; top:3%; width:20%; height:0%; z-index:1">
	<%@ include file="../../mss_g3/espanol/mss_g3_links_wizzard.jsp" %>
</div>
<%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
<div id="capa_cuerpo" style="position:relative; left:21%; top:1%; width:78%; z-index:2">
<%
	String zsubsesion = "SSM_VACANT";
	String zmeta4object = "SSM_VACANT";
	String znodo1 = "SSM_COUNTRY";
	String znodo2 = "SSM_LU_ISSU_ENT";
	String znodo3 = "SSM_LU_CERTIFICATION_TYPE";        
	String znodo4 = "SSM_JOB_POST_CERTIFICATION_LIC";
	String ztipocarga = "wiz3";   

	// Se parametriza el tamano que se desea para la ventana

	String zventanas = "10";
	int zvuelta = 5;

	// No se modifica en general.

	String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
	String zlectura1 = zsubsesion + "!" + znodo1;
	String zraiz1 = zsubsesion + "!" + znodo1 + ".";
	String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
	String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;
	
	String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
	String zlectura2 = zsubsesion + "!" + znodo2;
	String zraiz2 = zsubsesion + "!" + znodo2 + ".";
	String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
	String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;
	
	String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
	String zlectura3 = zsubsesion + "!" + znodo3;
	String zraiz3 = zsubsesion + "!" + znodo3 + ".";
	String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
	String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;
		
	String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
	String zlectura4 = zsubsesion + "!" + znodo4;
	String zraiz4a = zsubsesion + "!" + znodo4 + ".";
	String zraiz4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";
	String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
	String ziterator4 = znodo4 + ":" + zsubsesion + "!" + znodo4;
	
	// Metodo de carga del Meta4Object generico

	String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA";
	String zmetodopersist = "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR";
   
	// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

	String zSTDIDCOUNTRY = zraiz1 + "STD_ID_COUNTRY";
	String zSTDNCOUNTRY = zraiz1 + "STD_N_COUNTRY";
	
	String zSCOIDISSUEENTIT = zraiz2 + "SCO_ID_ISSUE_ENTIT";
	String zSCONISSUEENTIT = zraiz2 + "SCO_N_ISSUE_ENTIT";
		
	String zSTDIDCERTIFICATIONTYPE = zraiz3 + "STD_ID_CERTIFICATION_TYPE";
	String zSTDNCERTIFICATIONTYPE = zraiz3 + "STD_N_CERTIFICATION_TYPE";
		
	String zREQUERIDO = zraiz4 + "REQUERIDO";
	String zENTIDADEMISORA = zraiz4 + "ENTIDAD_EMISORA";
	String zPAIS = zraiz4 + "PAIS";
	String zTIPOCERTIFICADO = zraiz4 + "TIPO_CERTIFICADO";
	String zSCOORCERTIFLIC = zraiz4 + "SCO_OR_CERTIF_LIC";
	
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%@ include file="../../mss_g3/espanol/persist.jsp" %>
<m4:exec m4method="<%=zmetodopersist%>"><m4:param name="TIPO_GRABAR" value="<%=ztipopersist%>"/></m4:exec>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<%
	int  zcount4 = 0;
	int  zcounti4 = 0;	
	try {
		M4Operations m = new M4Operations(request);
		zcount4 = m.getCount(znodo4,zsubsesion,znodo4);
	} catch(Exception e) {}
	try {
		M4Operations m = new M4Operations(request);
		zcounti4 = m.getCountInClient(znodo4,zsubsesion,znodo4);
	} catch(Exception e) {}
	String	zcountv4 = String.valueOf(zcounti4);
%>
<table width="100%">
<tr>
	<td class="titulofuncional" colspan="3">Certificados y Licencias</td>
</tr>
<tr><td><img alt="Solicita una vacante" src="/iconos/noname_solicitar_vacantes_210_100.gif" width="100" height="100" /></td>
	<td>&nbsp;</td>
	<td><div class="descripcionfuncional">A&ntilde;ade las certificaciones y las licencias necesarias para la vacante.Aseg&uacute;rate de a&ntilde;adir los datos al finalizar el formulario.</div></td>
</tr>
</table>
<form action="javascript:comprobar()" method="get" name="NombreFormulario" id="NombreFormulario">
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo" colspan="3">Certificados y licencias</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;*&nbsp;Tipo certificado</td>
	<td class="fuentecampo">
	<select id="STD_ID_CERTIFICATION_TYPE" class="fuenteformulario200" name="STD_ID_CERTIFICATION_TYPE" title="Tipo certificado">
	<option></option>		
	<m4:iterator m4rows="*" m4node="<%=ziterator3%>">
	<m4:param name="m4item0" value="<%=zSTDIDCERTIFICATIONTYPE%>"/>
	<m4:param name="m4item1" value="<%=zSTDNCERTIFICATIONTYPE%>"/>
	<option value="$M4ITEM0$">$M4ITEM1$</option>
	</m4:iterator>
	</select>
	</td>
	<td class="fuentecampo">
	<input id="SCO_CHECK" type="checkbox" name="SCO_CHECK"  />Requerido
	</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;Entidad emisora</td>
	<td class="fuentecampo" colspan="4">
	<select id="SCO_ID_ISSUE_ENTIT" class="fuenteformulario200" name="SCO_ID_ISSUE_ENTIT" title="Entidad emisora">
	<option></option>
	<m4:iterator m4rows="*" m4node="<%=ziterator2%>">
	<m4:param name="m4item0" value="<%=zSCOIDISSUEENTIT%>"/>
	<m4:param name="m4item1" value="<%=zSCONISSUEENTIT%>"/>
	<option value="$M4ITEM0$">$M4ITEM1$</option>
	</m4:iterator>
	</select>
	</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;Pa&iacute;s</td>
	<td class="fuentecampo" colspan="2">
	<select id="STD_ID_COUNTRY" class="fuenteformulario200" name="STD_ID_COUNTRY" title="Pais">
	<option></option>
	<m4:iterator m4rows="*" m4node="<%=ziterator1%>">
	<m4:param name="m4item0" value="<%=zSTDIDCOUNTRY%>"/>
	<m4:param name="m4item1" value="<%=zSTDNCOUNTRY%>"/>
	<option value="$M4ITEM0$">$M4ITEM1$</option>
	</m4:iterator>
	</select>
	</td>
</tr>
<tr>
	<td class="fuenteboton" align="center" colspan="3">&nbsp;
		<a href="javascript:navegar(2,'mss_g3/mss_g3_p1_wiz2.jsp');" ><img alt="Anterior" title="Anterior" src="/iconos/icono_anterior_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
		<a href="javascript:comprobar(3,'mss_g3/mss_g3_p1_wiz3.jsp');" ><img alt="A&ntilde;adir un idioma a la vacante" title="A&ntilde;adir certificado o licencia a la vacante" src="/iconos/icono_aceptar_mss_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
		<a href="javascript:navegar(4,'mss_g3/mss_g3_p1_wiz4.jsp');" ><img alt="Siguiente" title="Siguiente" src="/iconos/icono_siguiente_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
	</td>
</tr>
</table>
<%	 
if (zcount4 > 0) {
%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Tipo certificado</td>
	<td class="tablaestadosceldatitulo">&nbsp;Entidad emisora</td>
	<td class="tablaestadosceldatitulo">&nbsp;Pa&iacute;s</td>
	<td class="tablaestadosceldatitulo" colspan="2">&nbsp;Requerido</td>
</tr>
	
<%
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>

<m4:loop from="0" to="<%=new Integer(new Integer(zcounti4).intValue()-1).toString()%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;

if (zcontrol==0){%>
 <tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zTIPOCERTIFICADO%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zENTIDADEMISORA%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zPAIS%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zREQUERIDO%>" htmlsafe="true"/></td>
	<td class="fuentevalor"><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz3.jsp?id_enl=<m4:item m4name="<%=zSCOORCERTIFLIC%>" htmlsafe="true"/>"><img align="right" title="Eliminar registro" alt="Eliminar registro" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
 
 <%}else{%>
 <tr>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zTIPOCERTIFICADO%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zENTIDADEMISORA%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zPAIS%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zREQUERIDO%>" htmlsafe="true"/></td>
	<td class="fuentevalor2"><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz3.jsp?id_enl=<m4:item m4name="<%=zSCOORCERTIFLIC%>" htmlsafe="true"/>"><img align="right" title="Eliminar registro" alt="Eliminar registro" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
 <%}%>
</m4:loop>	
</table>
<%
}
%>			
</form>
<%@ include file="../../mss_generico/espanol/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>


