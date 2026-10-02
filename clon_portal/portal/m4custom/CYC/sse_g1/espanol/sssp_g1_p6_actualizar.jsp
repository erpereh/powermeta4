<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html>
<html><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%
   String nombre = "";
   String valor = "";
	
	Hashtable zhash = new Hashtable(20);
	Enumeration oenum = request.getParameterNames();
	   while(oenum.hasMoreElements ()){
			 nombre = (String) oenum.nextElement();
			 valor =  request.getParameter(nombre);
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
	
   String zsubsesion = "SSE_MOD_SITIRPF";
   String zmeta4object = zsubsesion;
   String znodo = "SSE_MOD_SITIRPF";
   String zmetodo = zsubsesion + "!" + znodo + ".SSE_GESTION_ACCION";
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>">
	 <m4:param name="ARG_CADENA" value="<%=zparametro%>"/>
</m4:exec>	
<m4:endjob/>
<%
	String zerror = "S";
	String zredireccion = "/servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit.jsp";
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
</html>