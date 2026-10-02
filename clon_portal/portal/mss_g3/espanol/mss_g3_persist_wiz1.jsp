<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<%
   String zurl="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_wiz1.jsp?estado=31&OpcAct=1&ztipopersist=wizx";
%>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<meta http-equiv='refresh' content="0; URL=<%=zurl%>" />
<title>Eliminar favoritos</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>	
<%
	M4SessionCl zsesion = M4Context.getM4SessionCl(request);
	//String zidenl = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_enl");  // 
	String zregistroactual = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"actual");   
		

// Errores

	String zerror = "N";   	

// Declaración de variables. -->

    String zsubsesion = "SSM_VACANT";
    String zmeta4object = "SSM_VACANT";
    String znodo2 = "SSM_JOB_POST";

// No se modifica en general.

	String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";
	String zlectura = zsubsesion + "!" + znodo2;
	String zraiz = zsubsesion + "!" + znodo2 + ".";
	String zmove = znodo2 + ":" + znodo2 + "[FIRST]";
	String ziterator = znodo2 + ":" + zsubsesion + "!" + znodo2;

// Metodo de carga del Meta4Object generico

   String zmetodo = zsubsesion + "!SSM_JOB_POST.ACEPTAR_VACANTE";
   String zmetodopersist = "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR";
   
%>
</head>
<body>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%@ include file="../../mss_g3/espanol/persist.jsp" %>
<m4:exec m4method="<%=zmetodopersist%>"><m4:param name="TIPO_GRABAR" value="<%=ztipopersist%>"/></m4:exec>
<m4:exec m4method="<%=zmetodo%>"></m4:exec>	
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
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
