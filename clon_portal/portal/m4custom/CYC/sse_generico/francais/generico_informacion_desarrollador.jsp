<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Informations</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<script type="text/javascript" src="/libreria/menu.js"></script>
</head>	
<body>
<%
   String zsubsesion = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_M4TAGLET");
   String zmeta4object = zsubsesion;
   String znodo2 = "SSE_COMUNICACION";
   String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";
   String zraiz = zsubsesion + "!" + znodo2 + ".";
   String zTEXTOERRORES = znodo2 + ":" + zraiz + "TEXTO_ERRORES";
 %>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<table>
<tr>
	<td class="fuentetitulomenu">
		Informations relatives au d&eacute;roulement du processus&nbsp;:
	</td>
</tr>
<tr>
	<td class="fuentetitulo">
		<m4:item m4name="<%=zTEXTOERRORES%>" />	
	</td>
</tr>
</table>
<m4:endpage/>
</body>

