<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Error</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
</head>
<body>
<% String stError = (String)request.getAttribute("error"); 
   if (stError == null){
	stError = "";
   }
%>
<div id="capa_cuerpo" style="position:relative; left:1%; width:100%; height:100%; z-index:2">
<table width="100%" cellspacing="0">
<tr>
	<td class="titulofuncional" colspan="2">Mensaje de error</td>
	<td><a href="javascript:history.go(-1);" title="Volver"><img alt="Volver" src="/iconos/noname_volver_52_44.gif" height="44" width="52" onmouseover=" m4sombra(this)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
	<td><a href="javascript:history.go(-1);"><img alt="Herramientas" src="/iconos/noname_configuracion_98_125.gif" width="98" height="125" onmouseover="m4luznoname(this)" onmouseout="m4oscuridad(this)" /></a></td>
	<td><div class="fuentedescripcion"><%=stError%></div></td>
</tr>
</table>
</div>
</body>
</html>