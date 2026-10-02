<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<%
   String zurl="/servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp";
%>
<meta http-equiv='refresh' content="0; URL=<%=zurl%>" />
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<title>A&ntilde;adir a favoritos</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>	
<%
//	Recuperacion de parametros.

	Generatablaparametros Parametros = new Generatablaparametros (request);
	String ztitle = Parametros.m4paramvalor ("TIT");
	String zURL = Parametros.m4paramvalor ("URL");

	

/*	String zURL = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"URL");
	zURL = "/" + zURL;
    String ztitle = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"title"); */
    
	M4SessionCl zsesion = M4Context.getM4SessionCl(request);
	String zIDPERSON = zsesion.getBagEntries("zIdPerson");

// Errores

   String zerror = "N";   	
   String zsubsesion = "SSE_ENLACES";
   String zmeta4object = "SSE_ENLACES";
   String znodo = "SSE_ENLACES";

// No se modifica en general.

   String zraiz = zsubsesion + "!" + znodo + ".";
   
// Metodo de carga del Meta4Object generico

   String zmetodo = zsubsesion + "!SSE_ENLACES.SSE_INSERTAR";
   
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="URL_ARG" value="<%=zURL%>"/><m4:param name="TITLE_ARG" value="<%=ztitle%>"/><m4:param name="ID_PERSON_ARG" value="<%=zIDPERSON%>"/></m4:exec>	
<m4:endjob/>
</head>
<body>
<%@include file="../../sse_generico/espanol/generico_actualizar_cuerpo.jsp"%>
<m4:endpage/>
</body>
