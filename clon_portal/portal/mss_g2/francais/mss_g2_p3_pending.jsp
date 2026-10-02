<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Titulo1-1")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />

</head>
<body>

<script language="JavaScript" xml:space="preserve">
</script>

<%
   String ctrl_mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"CTRL");
   String zsubsesion = "SSM_SALARY_REVIEW_PROCESS";
   String sal_plan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_SAL_PL");

%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>

  <m4:exec node="SSM_H_HR_SREV_GENERIC_PROP" method="CR_SET_VALUES_FOR_SCREEN" m4object="<%=zsubsesion%>">
    <m4:param name="ARG_SAL_PLAN" value='<%= (sal_plan)%>'/>
  </m4:exec>

<m4:outputdef node="SSM_H_HR_SREV_GENERIC_PROP" m4alias="GENERAL" m4object="<%=zsubsesion%>"/>

<m4:endjob/>

<table class="tablaestados" width="100%" cellspacing="0" border="1">

  <table class="tablaestados" width="100%" cellspacing="0" border="0">
    <tr class="tablaestadosceldatitulo">
      <td colspan="9"><%=Mss_cr.getProperty("msscr.Tit-12")%></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.ID16-3")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="SAL_PLAN_NAME_SCREEN" htmlsafe="true" outputdef="GENERAL"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.Tipo-12")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="SAL_PLAN_TYPE_NAME_SCREEN" htmlsafe="true" outputdef="GENERAL"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.Inicio-12")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="DT_START_SCREEN" htmlsafe="true" outputdef="GENERAL"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.Fin-12")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="DT_END_SCREEN" htmlsafe="true" outputdef="GENERAL"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.Fecha-12")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="REVIEW_DATE_SCREEN" htmlsafe="true" outputdef="GENERAL"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.Cantidad-12")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="SAL_PLAN_TOTAL_VALUE" htmlsafe="true" outputdef="GENERAL"/>&nbsp;<m4:item item="CURRENCY_SCREEN" htmlsafe="true" outputdef="GENERAL"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.Cantidad2-12")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="PREVIOUS_AMOUNT_SCREEN" htmlsafe="true" outputdef="GENERAL"/>&nbsp;<m4:item item="CURRENCY_SCREEN" htmlsafe="true" outputdef="GENERAL"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.Cantidad3-12")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="INCREASE_AMOUNT_SCREEN" htmlsafe="true" outputdef="GENERAL"/>&nbsp;<m4:item item="CURRENCY_SCREEN" htmlsafe="true" outputdef="GENERAL"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.Porcentaje-12")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="INCREASE_PERCENTAGE_SCREEN" htmlsafe="true" outputdef="GENERAL"/>&nbsp;%</td>
    </tr>
    <tr>
      <td class="fuenteboton" colspan="10"><a href="javascript:window.close()" title="<%=Mss_cr.getProperty("msscr.Pop1-12")%>"><img src="/iconos/entrar_blanco.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop1-12")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>
    </tr>
  </table>
</table>
</body>
<m4:endpage/>
