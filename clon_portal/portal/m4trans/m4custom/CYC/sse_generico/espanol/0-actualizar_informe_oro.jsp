<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>

<%
//Recogemos los parametros recibidos por POST


String direccion 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion");
String puesto 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto");
String informe 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"informe");
String pagina 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina");
String area 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area");

%>

<%

	String zredireccion = "/servlet/CheckSecurity/JSP/mss_g1/mss_g1_mostrar_informe_oro.jsp?direccion=" + direccion + "&area=" + area + "&puesto=" + puesto + "&informe=" + informe + "&pagina=" + pagina ;
	String zerror = "N";

	String zsubsesion   = "CSP_RP_ORO_MSS";
	
	zredireccion 		= com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zredireccion);	
	
	
%>

<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">

<head>
<title>Actualizacion</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />	
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
</head>	
<body>	
<%@include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_actualizar_cuerpo.jsp"%>
<m4:endpage/>
</body>
</html>