<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <link rel="stylesheet" href="/calendario/jquery-ui.css">
  <script src="/calendario/jquery-1.12.4.js"></script>
  <script src="/calendario/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#SCO_DT_ISSUE" ).datepicker({dateFormat: "dd-mm-yy", changeMonth: true, changeYear: true});
  } );
  $( function() {
    $( "#SCO_DT_EXPIRED" ).datepicker({dateFormat: "dd-mm-yy", changeMonth: true, changeYear: true});
  } );
  </script>

<title><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4")%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	

<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%@ include file="../ssco_g1_p3_mod4.jsp" %>
<%@include file="../../sse_generico/espanol/generico_ventanas_post.jsp"%>
<%}%>	
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>

	