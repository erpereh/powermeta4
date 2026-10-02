<!-- Plantilla base del SSE -->
<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<!-- Librerias Java. Obligatorio -->
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Titulo</title>
<!-- Hoja de Estilo general. Obligatorio-->
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<!-- Librerias JavaScript. Obligatorio -->
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<!-- Recuperacion de parametros. -->
<!-- estado:	Determina la barra de localizacion. -->
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
if ((estado==null)||(estado.equals(""))){estado="0";}
%>
</head>
<body>
<!-- Encabezado y barra izquierda-->
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<!-- Tabla de Descripcion. Obligatoria. Siempre una 3*2: un titulo de la pagina + un icono + una descripcion + opciones -->
<table width="100%">
<tr>
	<!-- Titulo funcional de la pagina -->
	<td class="titulofuncional" colspan="2">Titulo</td>
</tr>
<tr>
	<!-- Al insertar el icono no olvides anadir su tamano exacto -->
	<td><img alt="*.gif 10k" src="\iconos\*.gif" width="20" height="60" /></td>
	<!-- Descripcion -->
	<td><div class="descripcionfuncional">Descripcion funcional de la pagina.</div></td>
	<!-- Enlaces a otras páginas -->
	<ul class="enlacefuncional">
		<li><a>Opcion1</a></li></ul>
	</td>		
</tr>
</table>
<!-- Fin de Tabla de descripcion. -->
<!-- ********************************************************************* -->
<!-- Pie de pagina -->	
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
</body>
