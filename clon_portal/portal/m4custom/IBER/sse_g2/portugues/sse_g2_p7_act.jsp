<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Strict//EN""DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>	
<%@ include file="/sse_g2/sse_bft_trans.jsp"%>
<%
   String nombre = "";
   String valor = "";
	
	Hashtable zhash = new Hashtable(50);
	Enumeration oEnum = request.getParameterNames();
	   while(oEnum.hasMoreElements ()){
			 nombre = (String) oEnum.nextElement();
			 valor =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,nombre);
			zhash.put (nombre,valor);
	}
   String zparametro = "";
   String zsubsesion = (String)zhash.get("TAG");
	zhash.remove("TAG");
	zparametro	+="TAG"+ "=" + (zsubsesion) + "{"; 
	zparametro	+="REC"+ "=" + ((String)zhash.get("REC")) + "{"; 
	zhash.remove("REC");
	zparametro	+="ACC"+ "=" + ((String)zhash.get("ACC")) + "{";
	zhash.remove("ACC"); 
	zparametro	+="NOD"+ "=" + ((String)zhash.get("NOD")) + "{";
	zhash.remove("NOD");
	zparametro	+="PK_PLAN"+ "=" + ((String)zhash.get("PK_PLAN")) + "{";
	zhash.remove("PK_PLAN");
   
   String zmeta4object = zsubsesion;
   String znodo = "SSE_H_EE_IN_BNFT";
   String znodo2 = "SSE_COMUNICACION";
   String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";   
   String zmetodo = zsubsesion + "!" + znodo + ".SSE_GESTION";
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
<title><%=TranEss.getProperty("bft_ess.SolicBenef")%></title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
</head>	
<body>
<%@include file="../../sse_generico/portugues/generico_actualizar_cuerpo.jsp"%>
<m4:endpage/>
</body>
