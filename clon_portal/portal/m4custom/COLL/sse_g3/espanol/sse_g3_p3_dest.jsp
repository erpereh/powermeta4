<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
 <!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<%
//no cache
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store"); 
  response.setDateHeader("Expires", -1); 
  response.setContentType("text/html;charset=ISO-8859-1");
  request.setCharacterEncoding("UTF8");

%>
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
	<title>Destinatarios</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
	<%
	String destinatarios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"destinatarios");
	if ((destinatarios==null)||(destinatarios.equals(""))){destinatarios = "Todos los empleados.";}
	%>
</head>
<body>
<table class="TablaEstados" cellspacing="0" width="100%">
	<tr>
		<td class="tablaestadosceldatitulo">Destinatarios</td>
	<tr>
	<tr>
		<td class="fuentevalor"> <%=destinatarios%> </td>
	</tr>
</table>
</body>
</html>