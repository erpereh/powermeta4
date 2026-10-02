<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html>
<html><head><%@ include file="/m4trans/sse_generico/0-sse_generico_taglib_2.jsp" %>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-menu_ess.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_g1/0-sse_g1_trans.jsp" %>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <link rel="stylesheet" href="/calendario/jquery-ui.css">
  <script src="/calendario/jquery-1.12.4.js"></script>
  <script src="/calendario/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#STD_DT_START" ).datepicker({dateFormat: "dd-mm-yy", changeMonth: true, changeYear: true});
  } );
  $( function() {
    $( "#STD_DT_EARNED_EXPE" ).datepicker({dateFormat: "dd-mm-yy", changeMonth: true, changeYear: true});
  } );
  </script>
<title><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod7Des")%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>


<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="11";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_g1/0-ssco_g1_p3_mod7.jsp" %>
<%@include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_ventanas_post.jsp"%>
<%}%>	
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
