<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<%
   String zurl="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_wiz5.jsp?estado=31&OpcAct=5&ztipopersist=wizx";
%>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<meta http-equiv='refresh' content="0; URL=<%=zurl%>" />
<title>Delete Favourites</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/english/menu_ess.jsp" %>	
<%
	M4SessionCl zsesion = M4Context.getM4SessionCl(request); 
	String zidenl = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_enl");
	String zregistroactual = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"actual");   	

// Errors

	String zerror = "N";   	

// Variable declaration. -->

    String zsubsesion = "SSM_VACANT";
    String zmeta4object = "SSM_VACANT";
    String znodo = "SSM_R_JOB_POST_DUT";

// Normally not modified.

	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zlectura = zsubsesion + "!" + znodo;
	String zraiz = zsubsesion + "!" + znodo + ".";
	String zmove = znodo + ":" + znodo + "[FIRST]";   
	String ziterator = znodo + ":" + zsubsesion + "!" + znodo;

// Generic Meta4Object load method

   String zmetodo = zsubsesion + "!SSM_R_JOB_POST_DUT.ELIMINAR_VALOR";
   
%>
</head>
<body>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="PARAMETRO" value="<%=zidenl%>"/></m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
 try {
		zsesion.removeBagEntries("key" + zregistroactual);
	    } catch(Exception e) {}
%>
<%@include file="../../sse_generico/english/generico_actualizar_cuerpo.jsp"%>
<m4:endpage/>
</body>
