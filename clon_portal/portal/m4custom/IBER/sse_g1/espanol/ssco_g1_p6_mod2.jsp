<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html><head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>


<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
if ((estado==null)||(estado.equals(""))){estado="31";}
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
String zfiltrogroup = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltrogroup");
if ((zfiltrogroup==null)|| (""==zfiltrogroup)){zfiltrogroup = "";} 



%>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>	

<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>

<title><%=sse_g1Ess.getProperty("Title.ssco_g1_p6")%></title>

</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%@ include file="../ssco_g1_p6_mod2.jsp"%>	
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>



