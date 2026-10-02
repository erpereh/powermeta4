
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
Hashtable zhash = zobjtabla.getTablaHash();
String zcom = (String) zhash.get("SCO_EMPLOYEE_COMM");
String zv = (String) zhash.get("SCO_EMPLOYEE_AGREE");
   
String zsubsesion = "SSE_EVALUATOR_E";
String zmeta4object = "SSE_EVALUATOR_E";
String znodo = "SSE_EVALUATOR_E";
String znodo2 = "SSE_COMUNICACION";
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]"; 
String zmetodo = "CARGA:"+ zsubsesion + "!" + znodo + ".SSE_GRABAR";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="ARG" value="<%=zcom%>"/><m4:param name="AGR" value="<%=zv%>"/></m4:exec>
<m4:exec m4method="<%=zmetodo%>"/>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<%
	String zerror = "0";
	String zredireccion = "";
	try {
	    M4Operations m = new M4Operations(request);
	    zerror = m.getItem("",zsubsesion,znodo2,"","TIPO_DEBUG");
	    zredireccion = m.getItem("",zsubsesion,znodo2,"","JSP_REDIRECCION");	    
	} catch(Exception e) {}

	if ((zredireccion==null)){
	   zredireccion = "ERROR";
	}
%>
	


<head>
<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">
<title>Actualizacion</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/english/menu_ess.jsp" %>
</head>	
<body>
<%@ include file="../../sse_generico/english/generico_actualizar_cuerpo.jsp" %>
<m4:endpage/>
</body>
