<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<%
   String zurl="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_editar_links.jsp";
%>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<meta http-equiv='refresh' content="0; URL=<%=zurl%>" />
<title>Eliminar favoritos</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>	
<%
	M4SessionCl zsesion = M4Context.getM4SessionCl(request);
	String zidenl = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_enl");
	String zregistroactual = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"actual");   	

// Errores

	String zerror = "N";   	

// Declaración de variables. -->

   String zsubsesion = "SSE_ENLACES";
   String zmeta4object = "SSE_ENLACES";
   String znodo = "SSE_ENLACES";

// No se modifica en general.

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zlectura = zsubsesion + "!" + znodo;
   String zraiz = zsubsesion + "!" + znodo + ".";
   String zmove = znodo + ":" + znodo + "[FIRST]";

// Metodo de carga del Meta4Object generico

   String zmetodo = zsubsesion + "!SSE_ENLACES.SSE_ELIMINAR";
   
%>
</head>
<body>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="ID_ENLACE_ARG" value="<%=zidenl%>"/></m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
 try {
		zsesion.removeBagEntries("key" + zregistroactual);
	    } catch(Exception e) {}
%>
<%@include file="../../sse_generico/espanol/generico_actualizar_cuerpo.jsp"%>
<m4:endpage/>
</body>
