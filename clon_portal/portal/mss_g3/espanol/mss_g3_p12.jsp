<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>

<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<meta http-equiv='refresh' content="0; URL=<%=zurl%>" />
<title>Solicitudes pendientes</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<%
	String zordinal = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"REC");
	String zerror = "N";   	
	String zsubsesion = "SSE_INVENTARIO";
	String zmeta4object = "SSE_INVENTARIO";
	String znodo = "SSE_INVENTARIO";

// No se modifica en general.

   String zraiz = zsubsesion + "!" + znodo + ".";
   String zmetodo = zsubsesion + "!SSE_INVENTARIO.BORRADOR";
%>
</head>
<body>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="ORDINAL" value="<%=zordinal%>"/></m4:exec>	
<m4:endjob/>
<%@include file="../../sse_generico/espanol/generico_actualizar_cuerpo.jsp"%>
<m4:endpage/>
</body>
