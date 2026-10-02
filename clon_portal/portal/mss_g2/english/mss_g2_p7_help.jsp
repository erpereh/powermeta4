<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Titulo1-3")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />

</head>
<body>

<%
   String help_cod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"COD");
%>

<table class="tablaestados" width="100%" cellspacing="0" border="1">

  <table class="tablaestados" width="100%" cellspacing="0" border="0">
    <tr class="tablaestadosceldatitulo">
      <td><%=Mss_cr.getProperty("msscr.help1-3")%></td>
    </tr>
    <tr>
      <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Titulo2-3")%><br><br></td>
    </tr>
<% if(help_cod.equals("1")) { %>
    <tr>
      <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info1-3")%></br><br></td>
<%}

if(help_cod.equals("2")) { %>
    <tr>
      <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info2-3")%></br><br></td>
<%}

if(help_cod.equals("3")) { %>
    <tr>
      <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info3-3")%></br><br></td>
<%}
if(help_cod.equals("4")) { %>
    <tr>
      <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info4-3")%></br><br></td>
<%}
if(help_cod.equals("5")) { %>
    <tr>
      <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info55-3")%></br><br></td>
<%}
if(help_cod.equals("6")) { %>
    <tr>
      <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info65-3")%></br><br></td>

<%}
if(help_cod.equals("7")) { %>
    <tr>
      <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info73-3")%></br><br></td>

<%}%>
    </tr>

<tr>
  <td class="fuentevalor">
    <table class="tablaestados" width="100%"cellspacing="0"border="1">
      <tr class="tablaestadosceldatitulo">
        <td rowspan="2" align=center width="20%">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla1-3")%></td>
        <td colspan="10"align=center>&nbsp;<%=Mss_cr.getProperty("msscr.Tabla2-3")%></td>
      </tr>
      <tr>
        <td class="fuentecampocenter" width="20%"><%=Mss_cr.getProperty("msscr.Tabla3-3")%></td>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Tabla4-3")%></td>
      </tr>
<% if(help_cod.equals("1")) { %>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID1-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID2-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info5-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID3-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID2-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info6-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID4-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID5-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info7-3")%>&nbsp;<b><%=Mss_cr.getProperty("msscr.Tabla7")%>&nbsp; </b><%=Mss_cr.getProperty("msscr.Info7-2-3")%></td></tr>
<%}

if(help_cod.equals("2")) { %>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID6-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID2-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info8-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><img src="/iconos/advertencia_rojo.gif"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID2-4")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info8-4")%></td></tr>
      <tr>

      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID8-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info9-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID9-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info10-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID10-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info11-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID11-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info12-3")%><b>&nbsp;<%=Mss_cr.getProperty("msscr.Info64-3")%>&nbsp;</b><%=Mss_cr.getProperty("msscr.Info12-2-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID12-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID13-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info13-3")%><img src="/iconos/advertencia_rojo.gif"/><%=Mss_cr.getProperty("msscr.Info13-2-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><img src="/iconos/ic_lis_36_36_2.gif" width="36" height="36"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID14-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info14-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><img src="/iconos/icono_siguiente_36_36.gif" width="36" height="36"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID14-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info15-3")%></td></tr>


<%}

if(help_cod.equals("3")) { %>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID10-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID2-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info16-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID15-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info17-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID16-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID17-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info18-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID18-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info19-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID19-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info20-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID20-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info21-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID21-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID13-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info22-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID22-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID23-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info23-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><img src="/iconos/ic_lis_36_36_2.gif" width="36" height="36"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID14-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info24-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><img src="/iconos/icono_siguiente_36_36.gif" width="36" height="36"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID14-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info25-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><img src="/iconos/user_2_next_32.gif" width="36" height="36"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID14-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info26-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><img src="/iconos/group_next_32.gif" width="36" height="36"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID14-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info27-3")%></td></tr>
<%}

if(help_cod.equals("4")) { %>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID24-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID25-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info28-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID26-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID27-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info29-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID28-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID29-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info30-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID30-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID29-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info31-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID31-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID29-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info32-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID32-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID29-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info33-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID33-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID29-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info34-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID34-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID29-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info34-3")%></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Auxiliar")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID29-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info34-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID35-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID36-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info35-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID37-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID36-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info36-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID38-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID36-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info37-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID39-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID36-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info37-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID40-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID27-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info38-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID41-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID25-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info39-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID43-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID27-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info40-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID44-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID27-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info41-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID45-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID27-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info42-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID46-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID27-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info43-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID47-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID36-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info44-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID48-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID36-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info45-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID49-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID36-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info46-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID50-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID36-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info47-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID51-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID25-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info48-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Info19-20")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID27-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info50-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID52-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID27-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info49-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID53-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID27-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info51-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID54-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID27-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info52-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><img src="/iconos/ic_lis_36_36_2.gif" width="36" height="36"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID14-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info24-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><img src="/iconos/icono_anterior_36_36.gif" width="36" height="36"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID14-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info53-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><img src="/iconos/icono_siguiente_36_36.gif" width="36" height="36"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID14-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info54-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><img src="/iconos/eliminar_usu.gif" width="36" height="36"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID14-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info26-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><img src="/iconos/icono_actualizar_mss_36_36.gif" width="36" height="36"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID14-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info27-3")%></td></tr>
<%}
if(help_cod.equals("5")) { %>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.ID6-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info56-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Rendimiento-14")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info57-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Texto-14")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info58-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Texto-14")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.Texto2-14")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info59-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Texto3-14")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.Texto2-14")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info60-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Texto5-14")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID13-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info62-3")%></td></tr>

      <tr>
        <td class="fuentecampocenter"><img src="/iconos/ic_lis_36_36_2.gif" width="36" height="36"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID14-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info24-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><img src="/iconos/icono_siguiente_36_36.gif" width="36" height="36"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID14-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info63-3")%></td></tr>
<%}
if(help_cod.equals("6")) { %>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Info10-1")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID23-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info80-3")%></td></tr>
      <tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Tabla2-2")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info66-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Titulo4-2")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info67-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Titulo5-2")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info68-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Titulo6-2")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info69-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Titulo7-2")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info70-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Titulo8-2")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID7-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info71-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Titulo3-2")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID2-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info72-3")%></td></tr>

<%}
if(help_cod.equals("7")) { %>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Val3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID36-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info75-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Info74-3")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID36-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info76-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Tabla11")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID23-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info77-3")%></td></tr>
      <tr>
        <td class="fuentecampocenter"><%=Mss_cr.getProperty("msscr.Tabla12")%></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID13-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info78-3")%></td></tr>
      <tr>
              <td class="fuentecampocenter"><img src="/iconos/icono_crear_mss_36_36.gif" width="36" height="36"/></td>
        <td class="fuentevalor_2"><%=Mss_cr.getProperty("msscr.ID14-3")%></td>
        <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Info79-3")%></td>
        
          </tr>

<%}%>

    </table>
  </td>
</tr>
      <tr>
        <td class="fuentevalor">&nbsp;</td>
      </tr>

    <tr>
      <td class="fuenteboton"><a href="javascript:window.close()" title="Close"><img src="/iconos/entrar_blanco.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop1-12")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>
    </tr>
  </table>
</table>
</body>

