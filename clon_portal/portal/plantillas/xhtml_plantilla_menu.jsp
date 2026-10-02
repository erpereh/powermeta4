<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Titulo</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>	
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	
<%      
    String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	if ((estado==null)||(estado.equals(""))){estado="0";}
%>
</head>
<body>
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
<br />
<!-- Inicio de Tabla de Menu -->
<!-- ********************************************************************* -->
<table width="100%" cellspacing="0">			
<tr>
	<td class="tablamenuleft">
	<!-- Inicio de Tabla izquierda -->
	<!-- ********************************************************************* -->
	<table width="70%" cellspacing="0">
	<tr>
		<td colspan="2" class="fuentetitulomenu">Vacaciones</td>
	</tr>
	<tr>
		<td colspan="2" class="tablamenuleft"><hr class="barramenu" /></td>
	</tr>
	<tr>
		<td><img src="/iconos/nombre.gif" width="" height="" alt="" /></td>
		<td><div class="fuentedescripcion">Texto</div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="1" title="" href="/servlet/CheckSecurity/JSP/pagina.jsp">Enlace</a></li>
		</ul>
		</td>
	</tr>
	</table>
	</td>
</tr>	
<tr>
	<td class="tablamenuright">
	<!-- Inicio de Tabla derecha -->
	<!-- ********************************************************************* -->
	<table width="70%" cellspacing="0">
	<tr><td colspan="2" class="fuentetitulomenu" class="tablamenuleft">Titulo</td></tr>
	<tr><td colspan="2" class="tablamenuleft" width="70%"><hr class="barramenu" /></td></tr>
	<tr>
		<td><div class="fuentedescripcion">Texto</div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="2" title="Enlace" href="/servlet/CheckSecurity/JSP/pagina.jsp">Enlace</a></li>
		</ul>
		</td>
		<td><img src="/iconos/nombre.gif" width="" height="" alt="" /></td>
	</tr>
	</table>
	</td>
</tr>
</table>	
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
