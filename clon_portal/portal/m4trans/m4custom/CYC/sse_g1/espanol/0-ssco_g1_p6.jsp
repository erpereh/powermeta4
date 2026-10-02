

<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<?xml version="1.0" encoding="iso-8859-1" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*"%> 
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-menu_ess.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_g1/0-sse_g1_trans.jsp" %>


<html>
	<head>
		<title><%=sse_g1Ess.getProperty("Title.ssco_g1_p6")%></title>
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
		<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>

<%

String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_g1/0-ssco_g1_p6.jsp" %>
<%@include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_ventanas.jsp"%>	
<%}else{%>
	<div class="fuentenodatos"><%=sse_g1Ess.getProperty("Label.ssco_g1_p6NoData")%></div>
<%}%>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>


