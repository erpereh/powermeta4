<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>	
<%@ include file="/sse_g0/sgco_gen_trans.jsp"%>
<title><%= Transgco_gen.getProperty("sgco_gen.JobMap")%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
if ((estado==null)||(estado.equals(""))){estado="31";}
%>
</head>
<body>


<%@ include file="../sgco_job_map.jsp" %>


</div>
<m4:endpage/>
</body>
</html>


