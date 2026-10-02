<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>

<%
//Recogemos los parametros recibidos por POST

String valoraciones   = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"valoraciones");
valoraciones   		  = valoraciones.replace("&","@");

%>

<%

	String zredireccion = "/servlet/CheckSecurity/JSP/mss_g3/mss_g3_val_efi.jsp";
	String zerror = "N";
	
	String zsubsesion   = "CSP_MNG_VALORA_EFICA";
	String zmeta4object = "CSP_MNG_VALORA_EFICA";
	String znodo 	    = "CSP_MNG_VALORA_EFICA";
	String zmetodo 		= zsubsesion + "!" + znodo + ".CSP_M_RESPUESTAS_MSS"; 
	String zoutputdef 	= zsubsesion + "!" + znodo + "[*]";
	
	zredireccion 		= com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zredireccion);	
	
	
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
	<m4:datadef 	m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	<%
	try { 
			M4Operations q 	= new M4Operations(request);		
			q.setItem(zsubsesion,zsubsesion,"","CSP_P_RESPUESTAS_MSS",valoraciones);
		} catch(Exception e) {}
	%>
	<m4:exec 		m4method="<%=zmetodo%>"></m4:exec>	
	<m4:outputdef 	m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
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