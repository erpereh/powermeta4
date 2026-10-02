<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<%
   String zurl="/servlet/CheckSecurity/JSP/sse_generico/sse_javasript.jsp?estado=31";
%>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<meta http-equiv='refresh' content="0; URL=<%=zurl%>" />

<title>Eliminar registros</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>	
<%
	
		
	
	String ziden1 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_en1");  
	String ziden2 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_en2");
	
// Errores

	String zerror = "N";   
	
// Declaración de variables. -->

   String zsubsesion = "SAS";
   String zmeta4object = "SAS";
   String znodo = "SAS";
  

// No se modifica en general.

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String zmove = znodo + ":" +znodo + "[FIRST]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
  
 

// Metodo de carga del Meta4Object generico

    String zmetodoborrado = zsubsesion + "!SAS.BORRAR_DATOS";
   
%>
</head>
<body>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<m4:exec m4method="<%=zmetodoborrado%>">
	<m4:param name="ARG_1" value="<%=ziden1%>"/>
	<m4:param name="ARG_2" value="<%=ziden2%>"/>
</m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<P><%=ziden1%><%=ziden2%></P>
<m4:endpage/>
</body>
