<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<title>Editar favoritos</title><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>	
<%  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
%>
</head>
<body>
<%@include file="../../sse_generico/espanol/generico_menusup.jsp"%>
<%@include file="../../sse_generico/espanol/generico_links.jsp"%>
<%
   String zsubsesion = "SSE_ENLACES";
   String zmeta4object = "SSE_ENLACES";
   String znodo = "SSE_ENLACES";

// No se modifica en general.

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zraiz = zsubsesion + "!" + znodo + ".";
   String zmove = znodo + ":" + znodo + "[FIRST]";
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;

// Metodo de carga del Meta4Object generico

   String zMETODOCARGA = zsubsesion + "!SSE_ENLACES.CARGA";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zENLACE = "ENLACE";
   String zORDINAL = "ORDINAL";
   String zNENLACE = "N_ENLACE";

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zMETODOCARGA%>"></m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
	<%
		int  zcounti  = 0;	
		try {
			M4Operations m = new M4Operations(request);
			zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		} catch(Exception e) {}
	%>
<table width="100%">
<tr>
	<td class="titulofuncional" colspan="2">Editar favoritos</td>
</tr>
<tr>
	<td><div class="descripcionfuncional">Lista de tus enlaces de favoritos. Elimina aquellos que ya no utilices. Los cambios se verán reflejados la próxima vez que nos visites.</div></td>
</tr>
</table>
<% 
if (zcounti > 0) {
%>		
<table width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Nombre</td>
	<td colspan="2" class="tablaestadosceldatitulo">&nbsp;Direcci&oacute;n URL</td>
</tr>
<m4:iterator m4rows="*" m4node="<%=ziterator%>">
<m4:param name="m4item0" value="<%=zNENLACE%>"/>
<m4:param name="m4item1" value="<%=zENLACE%>"/>
<m4:param name="m4item2" value="<%=zORDINAL%>"/>
<tr>
	<td class="fuentecampo">&nbsp;$M4ITEM0$</td>
	<td class="fuentevalor">&nbsp;$M4ITEM1$</td>
	<td class="fuentevalor"><a href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_eliminar_links.jsp?id_enl=$M4ITEM2$"><img align="right" alt="Eliminar enlace" border="0" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</m4:iterator>
</table>
<%}else{%>
<div class="fuentenodatos">Actualmente no tienes ning&uacute;n enlace.</div>
<%}%>		
<%@include file="../../sse_generico/espanol/generico_disclaimer.jsp"%>
</div>
<m4:endpage/>
</body>
