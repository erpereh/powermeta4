<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ include file="/m4trans/sse_generico/0-sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<%@ include file="/m4trans/m4custom/CYC/sse_g1/0-sse_g1_trans.jsp" %>
<title><%=sse_g1Ess.getProperty("Title.ssco_g1_p6")%></title>
<%
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	String zPos = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPos");
	
%>

</head>
<body>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_g1/0-ssco_g1_p6_mod.jsp" %>
<%@include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_ventanas.jsp"%>
<%}%>	
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>









	