<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<%
   String zurl="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_p1.jsp?estado=01";
%>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<meta http-equiv='refresh' content="0; URL=<%=zurl%>" />
<title>Supprimer des favoris</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%
	String zordinal = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"REC");
	String zIdPerson = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdPerson");	
	String zerror = "N";   	
	String zsubsesion = "SSE_INVENTARIO";
	String zmeta4object = "SSE_INVENTARIO";
	String znodo = "SSE_INVENTARIO";

// No se modifica en general.

   String zraiz = zsubsesion + "!" + znodo + ".";
   String zmetodo = "CARGA:" + zsubsesion + "!SSE_INVENTARIO.INSERTAR";
%>
</head>
<body>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="ORDINAL" value="<%=zordinal%>"/><m4:param name="ID_HR" value="<%=zIdPerson%>"/></m4:exec>	
<m4:endjob/>
<%@include file="../../sse_generico/francais/generico_actualizar_cuerpo.jsp"%>
<m4:endpage/>
</body>
