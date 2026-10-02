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
   String zsubsesion = "SSM_SALARY_REVIEW_PROCESS";

%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_INFO_COMES_FROM_ROLE" m4alias="EMPLEADO" m4object="<%=zsubsesion%>"/>

<m4:endjob/>

<table class="tablaestados" width="100%" cellspacing="0" border="1">

  <table class="tablaestados" width="100%" cellspacing="0" border="0">
    <tr class="tablaestadosceldatitulo">
      <td colspan="9"><%=Mss_cr.getProperty("msscr.Prop-10")%> <m4:item item="SALARY_GRADE_NAME" htmlsafe="true" outputdef="EMPLEADO"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.Estruc-10")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="SALARY_STRUCTURE_ID" htmlsafe="true" outputdef="EMPLEADO"/> - <m4:item item="SALARY_STRUCTURE_NAME" htmlsafe="true" outputdef="EMPLEADO"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.ID10-3")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="SALARY_GRADE_ID" htmlsafe="true" outputdef="EMPLEADO"/> - <m4:item item="SALARY_GRADE_NAME" htmlsafe="true" outputdef="EMPLEADO"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.Salario-10")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="SALARY_GRADE_MAX_SALARY" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<m4:item item="SALARY_STRUCTURE_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.Punto-10")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="SALARY_GRADE_MIDPOINT" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<m4:item item="SALARY_STRUCTURE_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.SalarioMi-10")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="SALARY_GRADE_MIN_SALARY" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<m4:item item="SALARY_STRUCTURE_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.Comp-10")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="COMPARATIO" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;%</td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<%=Mss_cr.getProperty("msscr.Posicion-10")%></td>
      <td class="fuentevalor" colspan="1"><m4:item item="GRADE_PENETRATION" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;%</td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;25th %ile</td>
      <td class="fuentevalor" colspan="1"><m4:item item="PERCENTIL_25" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<m4:item item="SALARY_STRUCTURE_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></td>
    </tr>

    <tr>
      <td class="fuentecampo">&nbsp;75th %ile</td>
      <td class="fuentevalor" colspan="1"><m4:item item="PERCENTIL_75" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<m4:item item="SALARY_STRUCTURE_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></td>
    </tr>
    <tr>
      <td class="fuenteboton" colspan="10"><a href="javascript:window.close()" title="<%=Mss_cr.getProperty("msscr.Pop1-12")%>"><img src="/iconos/entrar_blanco.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop1-12")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>
    </tr>
  </table>
</table>
</body>
<m4:endpage/>
