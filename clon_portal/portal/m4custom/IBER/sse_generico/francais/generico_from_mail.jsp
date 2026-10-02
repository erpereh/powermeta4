<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ page  import="com.meta4.properties.*" %>
<%@ page import="com.meta4.configuration.*" %>

<%@ include file="../../sse_generico/francais/generico_invisible.jsp" %>


<title>Call KnownetLight</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>	
</head>
<body onload="goto_local_servlet()">

<!-- Recogemos la tarea de Knownet que vamos a ejecutar con sus parametros -->
<%
String Knownet_task = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Knownet_task");
Knownet_task = URLDecoder.decode(Knownet_task);
Knownet_task= "/servlet/CheckSecurity/JSP/" + Knownet_task;
%>

<m4:startpage m4task="SESSION"/>

<script Language="JavaScript">
function goto_local_servlet(){
document.forms.call_local_servlet.action='<m4:crosslink uri="<%=Knownet_task%>" idprovider="<%=aux_provider%>"/>';
document.forms.call_local_servlet.submit();
}
</script>
<form name="call_local_servlet" method="POST">
<input type="hidden" name = "_URL"  value="">
</form>
</body>
<m4:endpage/>
</html>



