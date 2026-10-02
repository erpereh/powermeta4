<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>

<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>

<title><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />

<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>

<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
	

<%     
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = zobjtabla.m4paramvalor("estado");
String zinicios = zobjtabla.m4paramvalor("zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>

</head>
<body>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%@ include file="../ssco_g1_p3_mod6.jsp" %>
<%@include file="../../sse_generico/portugues/generico_ventanas_post.jsp"%>
<%}%>	
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
