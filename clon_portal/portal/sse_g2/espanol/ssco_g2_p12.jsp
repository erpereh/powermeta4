<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<?xml version="1.0" encoding="iso-8859-1" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*"%> 
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<%@ include file="../../sse_g2/ssco_g2_trans.jsp" %>


<html>
	<head>
		<title><%=ssco_g2Ess.getProperty("Title.sse_g2_p12")%></title>
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
		<script type="text/javascript" src="/libreria/menu_sse.js"></script>
		<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<%

String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%@ include file="../ssco_g2_p12.jsp" %>
<%@include file="../../sse_generico/espanol/generico_ventanas.jsp"%>	
<%}else{%>
	<div class="fuentenodatos"><%=ssco_g2Ess.getProperty("Label.sse_g2_p12NoData")%></div>
<%}%>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>
