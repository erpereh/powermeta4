<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>

<%
//Recogemos los parametros recibidos por POST

String empleado 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado");
String uniraiz 			= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"uniraiz");


%>

<%

	String zredireccion = "/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp?empleado=" + empleado + "&uniraiz=" + uniraiz;
	String zerror = "N";

	String zsubsesion   = "CSP_QUIEN_ES_QUIEN";
	
	zredireccion 		= com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zredireccion);	
	
	
%>

<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">

<head>
<title>Actualizacion</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />	
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
</head>	
<body>	
<%@include file="generico_actualizar_cuerpo.jsp"%>
<m4:endpage/>
</body>
</html>