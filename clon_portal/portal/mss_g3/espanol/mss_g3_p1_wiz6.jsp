<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Idiomas</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript">
var ztipopersist="wiz6";
var zRequerido="0";
var vOpcionActiva;
function navegar(_valor,_url){
	var parametros = new Array("estado","OpcAct","ztipopersist");
			var valores = new Array("31",_valor,"wizx");
			m4navegar(_url, parametros, valores);
	}
function comprobar(_valor,_url){
	var falta_valor=0;
	var val_check = m4objeto("SCO_CHECK","NombreFormulario");
	if (val_check.checked){zRequerido="1"}
	var vOpcionActiva;vOpcionActiva=_valor;
	var URL;URL=_url;
	var mensaje = "Se han encontrado los siguientes errores: " + "\n";
	
	var val_lang = m4select(m4objeto("STD_ID_LANGUAGE","NombreFormulario"),"value");
	if ((null==val_lang) || (''==val_lang)){
		mensaje+=" * Idioma, campo obligatorio" + "\n";
		falta_valor=1;
	}
	
	if (1==falta_valor){alert(mensaje)}	
	if (0==falta_valor){
	var vIdioma =m4select(m4objeto("STD_ID_LANGUAGE","NombreFormulario"),"value");
	var vNivelRead =m4select(m4objeto("STD_ID_READ_LEVEL","NombreFormulario"),"value");
	var vNivelWrite =m4select(m4objeto("STD_ID_WRITE_LEVEL","NombreFormulario"),"value");
	var vNivelSpeak =m4select(m4objeto("STD_ID_SPEAK_LEVEL","NombreFormulario"),"value");
	
		var parametros = new Array("estado","Idioma","nRead","nWrite","nSpeak","Req","OpcAct","ztipopersist");
		var valores = new Array("31",vIdioma,vNivelRead,vNivelWrite,vNivelSpeak,zRequerido,vOpcionActiva,ztipopersist);
		m4navegar(URL, parametros, valores);
}}

</script>
<%
	// estado:	Determina la barra de localizacion.

        String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
		String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
		if ((estado==null)||(estado.equals(""))){
			estado="0";
		}
		if ((zinicios==null)||(zinicios.equals(""))){
			zinicios = "1";
		}
	
	// Determina la fuente activa del wizard
	int OpcionActiva=6;
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
		String znodo1 = "SSM_LU_LANGUAGE";
		String znodo2 = "SSM_LU_LANG_LEVEL";
		String znodo3 = "SSM_JOB_POST_LANG";
		String ztipocarga = "wiz6";   

/// Se parametriza el tamano que se desea para la ventana

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
		String zraiz3a = zsubsesion + "!" + znodo3 + ".";
		String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
		String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
		String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;
		
// Metodo de carga del Meta4Object generico

		String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA";
		String zmetodopersist = "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

		String zSTDIDLANGUAGE = zraiz1 + "STD_ID_LANGUAGE";
		String zSTDNLANGUAGE = zraiz1 + "STD_N_LANGUAGE";
		
		String zSTDIDLANGLEVEL= zraiz2 + "STD_ID_LANG_LEVEL";
		String zSTDNLANGLEVEL = zraiz2 + "STD_N_LANG_LEVEL";
		
		String zREQUERIDO = zraiz3 + "REQUERIDO";
		String zNOMBREIDIOMA = zraiz3 + "NOMBRE_IDIOMA";
		String zNIVELLECTURA = zraiz3 + "NIVEL_LECTURA";
		String zNIVELESCRITURA = zraiz3 + "NIVEL_ESCRITURA";
		String zNIVELCONVERSACION = zraiz3 + "NIVEL_CONVERSACION";
		String zSTDIDLANGUAGE2 = zraiz3 + "STD_ID_LANGUAGE";
		
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%@ include file="../../mss_g3/espanol/persist.jsp" %>
<m4:exec m4method="<%=zmetodopersist%>"><m4:param name="TIPO_GRABAR" value="<%=ztipopersist%>"/></m4:exec>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<%
		
		int  zcount3 = 0;
		int  zcounti3 = 0;	
		try {
			M4Operations m = new M4Operations(request);
			zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
			zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
		} catch(Exception e) {}
		String	zcountv3 = String.valueOf(zcounti3);
	
%>

<table width="100%">
<tr>
	<td class="titulofuncional" colspan="3">&nbsp;Idiomas</td>
</tr>
<tr>
     <td><img alt="Solicita una vacante" src="/iconos/noname_solicitar_vacantes_210_100.gif" width="100" height="100" /></td>
	<td><div class="descripcionfuncional">&nbsp;&nbsp;A&ntilde;ade los idiomas requeridos para esta 
	vacante. Aseg&uacute;rate de a&ntilde;adir los datos al &nbsp;&nbsp;finalizar el formulario.</div></td>
</tr>
</table>
<form action="javascript:comprobar()" method="get" name="NombreFormulario" id="NombreFormulario">
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo" colspan="4">&nbsp;Idioma</td>
</tr>
<tr>
	<td class="fuentecampo"  width="220">&nbsp;*&nbsp;Idioma</td>
	<td class="fuentecampo">
		<select id="STD_ID_LANGUAGE" name="STD_ID_LANGUAGE" title="Seleccionar idioma" class="fuenteformulario100">
	   	<option value=""></option>
	   	<m4:iterator m4rows="*" m4node="<%=ziterator1%>">
		<m4:param name="m4item0" value="<%=zSTDIDLANGUAGE%>"/>
		<m4:param name="m4item1" value="<%=zSTDNLANGUAGE%>"/>
		<option value="$M4ITEM0$">$M4ITEM1$</option>
		</m4:iterator>
		</select>
	</td>
	<td class="fuentecampo">&nbsp;<input id="SCO_CHECK" type="checkbox" name="SCO_CHECK" />&nbsp;Requerido</td>
</tr>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<tr>
	<td class="fuentecampo">&nbsp;Nivel lectura</td>
	<td class="fuentecampo" colspan="2">
		<select id="STD_ID_READ_LEVEL" name="STD_ID_READ_LEVEL" title="Seleccionar nivel de lectura" class="fuenteformulario200">
	   	<m4:iterator m4rows="*" m4node="<%=ziterator2%>">
		<m4:param name="m4item0" value="<%=zSTDIDLANGLEVEL%>"/>
		<m4:param name="m4item1" value="<%=zSTDNLANGLEVEL%>"/>
		<option value="$M4ITEM0$">$M4ITEM1$</option>
		</m4:iterator>
		</select>
	</td>
</tr>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<tr>
	<td class="fuentecampo">&nbsp;Nivel escritura</td>
	<td class="fuentecampo" colspan="2">
		<select id="STD_ID_WRITE_LEVEL" name="STD_ID_WRITE_LEVEL" title="Seleccionar nivel de escritura" class="fuenteformulario200">
		<m4:iterator m4rows="*" m4node="<%=ziterator2%>">
		<m4:param name="m4item0" value="<%=zSTDIDLANGLEVEL%>"/>
		<m4:param name="m4item1" value="<%=zSTDNLANGLEVEL%>"/>
		<option value="$M4ITEM0$">$M4ITEM1$</option>
		</m4:iterator>
	   	</select>
	</td>
</tr>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<tr>
	<td class="fuentecampo">&nbsp;Nivel conversaci&oacute;n</td>
	<td class="fuentecampo" colspan="2">
		<select id="STD_ID_SPEAK_LEVEL" name="STD_ID_SPEAK_LEVEL" title="Seleccionar nivel de conversación" class="fuenteformulario200">
		<m4:iterator m4rows="*" m4node="<%=ziterator2%>">
		<m4:param name="m4item0" value="<%=zSTDIDLANGLEVEL%>"/>
		<m4:param name="m4item1" value="<%=zSTDNLANGLEVEL%>"/>
		<option value="$M4ITEM0$">$M4ITEM1$</option>
		</m4:iterator>
		</select>
	</td>
</tr>
<tr>
	<td align="center" class="fuenteboton" colspan="4">
		<a href="javascript:navegar(5,'mss_g3/mss_g3_p1_wiz5.jsp');" ><img alt="Anterior" title="Anterior" src="/iconos/icono_anterior_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
		<a href="javascript:comprobar(6,'mss_g3/mss_g3_p1_wiz6.jsp');" ><img alt="A&ntilde;adir idioma a la vacante" title="A&ntilde;adir idioma a la vacante" src="/iconos/icono_aceptar_mss_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
		<a href="javascript:navegar(7,'mss_g3/mss_g3_p1_wiz7.jsp');" ><img alt="Siguiente" title="Siguiente" src="/iconos/icono_siguiente_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
	</td>
</tr>
</table>
<%	 
if (zcount3 > 0) {
%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Idioma</td>
	<td class="tablaestadosceldatitulo">&nbsp;Nivel lectura</td>
	<td class="tablaestadosceldatitulo">&nbsp;Nivel escritura</td>
	<td class="tablaestadosceldatitulo">&nbsp;Nivel conversaci&oacute;n</td>
	<td class="tablaestadosceldatitulo" colspan="2">&nbsp;Requerido</td>
</tr>

<%
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>

<m4:loop from="0" to="<%=new Integer(new Integer(zcounti3).intValue()-1).toString()%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
%>
<%if (zcontrol==0){%>
 <tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zNOMBREIDIOMA%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zNIVELLECTURA%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zNIVELESCRITURA%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zNIVELCONVERSACION%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zREQUERIDO%>" htmlsafe="true"/></td>
	<td class="fuentevalor"><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz6.jsp?id_enl=<m4:item m4name="<%=zSTDIDLANGUAGE2%>" htmlsafe="true"/>"><img align="right" alt="Eliminar registro" title="Eliminar registro" border="0" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
 
 <%}else{%>
 <tr>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zNOMBREIDIOMA%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zNIVELLECTURA%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zNIVELESCRITURA%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zNIVELCONVERSACION%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zREQUERIDO%>" htmlsafe="true"/></td>
	<td class="fuentevalor2"><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz6.jsp?id_enl=<m4:item m4name="<%=zSTDIDLANGUAGE2%>" htmlsafe="true"/>"><img align="right" alt="Eliminar registro" title="Eliminar registro" border="0" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
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


