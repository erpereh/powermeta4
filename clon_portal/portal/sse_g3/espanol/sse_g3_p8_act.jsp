<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%
   String nombre = "";
   String valor = "";
	
	Hashtable zhash = new Hashtable(20);
	Enumeration oenum = request.getParameterNames();
	   while(oenum.hasMoreElements ()){
			 nombre = (String) oenum.nextElement();
			 valor =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,nombre);
			zhash.put (nombre,valor);
	}
	String zparametro = "";
	
	String key =""; 
	Enumeration enumhash = zhash.keys ();
	while(enumhash.hasMoreElements ()){
			 key = (String) enumhash.nextElement();
			    valor = (String) zhash.get(key);
			    zhash.remove(key); 
				zparametro	+= key + "=" + valor + "{" ;
			}	
	
   String zsubsesion = "SSE_TRAINING_EVAL";
   String zmeta4object = zsubsesion;
   String znodo = "SSE_EVEN_EVAL_SHEET";
   String zmetodo = zsubsesion + "!" + znodo + ".GUARDA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="PARAMETROS_ARG" value="<%=zparametro%>"/></m4:exec>	
<m4:endjob/>
<%
	String zerror = "N"; 
	String zredireccion = "sse_g3_p8.jsp";

	if ((zredireccion==null)){
	   zredireccion = "ERROR";
	}else{
%>

<%
}
%>
<head>
<title>Actualizacion</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>"/>
</head>	
<body>	
	<%@include file="../../sse_generico/espanol/generico_actualizar_cuerpo.jsp"%>
<m4:endpage/>
</body>
