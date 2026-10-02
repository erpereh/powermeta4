<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp"%>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>	
<%@ include file="/sse_g3/sse_g3_trans.jsp"%>
<title><%=sse_g3Ess.getProperty("Title.ssco_g3_pdev")%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />


<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
estado="31";
%>

</head>
<body>

	<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
	<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>

<%@ include file="../ssco_g3_pdev_body.jsp" %>

	<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>

<m4:endpage/>
</body>
</html>



