<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%
  Generatablaparametros zobjtabla = new Generatablaparametros(request);
  Hashtable zhash = zobjtabla.getTablaHash();
	
   String zparametro = (String)zhash.get("param");
   String zsubsesion = (String)zhash.get("TAG");
   
   
   String zmeta4object = zsubsesion;
   String znodo = "SSE_PRINCIPAL";
   String znodo2 = "SSE_COMUNICACION";
   String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";
   String zmetodo = zsubsesion + "!" + znodo + ".GESTION";
   String zraiz = zsubsesion + "!" + znodo2 + ".";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="GESTION_ARG" value="<%=zparametro%>"/></m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<%
	String zerror = "0";
	String zredireccion = "";
	try {
	    M4Operations m = new M4Operations(request);
	    zerror = m.getItem(znodo,zsubsesion,znodo2,"","TIPO_DEBUG");
	    zredireccion = m.getItem(znodo,zsubsesion,znodo2,"","JSP_REDIRECCION");	    
	} catch(Exception e) {}

	if ((zredireccion==null)){
	   zredireccion = "ERROR";
	}else{
%>
<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">
<%
}
%>
<head>
<title>Actualiza&ccedil;&atilde;o</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
</head>	
<body>
<%@include file="generico_actualizar_cuerpo.jsp"%>
<m4:endpage/>
</body>
</html>
