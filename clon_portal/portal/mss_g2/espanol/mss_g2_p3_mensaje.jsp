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

<%
   String zsubsesion = "SSM_SALARY_REVIEW_PROCESS";
   String employee = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HR");
   String job = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HR_JOB");
   String sal_base = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"BASE");
   String error_text = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TEXT");
   String id_salary_plan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"salary_plan");
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>

<% if(employee==null) { %>
<m4:outputdef node="SSM_INFO_COMES_FROM_ROLE" m4alias="GENERAL" m4object="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_SALARY_REVIEW_PROCESS" m4alias="GENERAL_2" m4object="<%=zsubsesion%>"/>

  <% if(id_salary_plan!=null) { %>
  <m4:exec node="SSM_EMPLOYEE_SALARY_PLANS" method="CR_SHOW_FUTURE_INFORMATION" m4object="<%=zsubsesion%>">
    <m4:param name="ARG_SAL_PLAN" value='<%= (id_salary_plan)%>'/>
  </m4:exec>

  <m4:outputdef node="SSM_EMPLOYEE_SALARY_PLANS" m4alias="GENERAL_3" m4object="<%=zsubsesion%>"/>
  <%}%>

<%}else{%>
  <m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_SHOW_USEFUL_INFORMATION" m4object="<%=zsubsesion%>">
    <m4:param name="ARG_HR" value='<%= (employee)%>'/>
    <m4:param name="ARG_JOB" value='<%= (job)%>'/>
  </m4:exec>

  <m4:outputdef node="SSM_SALARY_REVIEW_PROCESS" m4alias="GENERAL" m4object="<%=zsubsesion%>"/>
<%}%>

<m4:endjob/>

<table class="tablaestados" width="100%" cellspacing="0" border="1">

  <table class="tablaestados" width="100%" cellspacing="0" border="0">
    <tr class="tablaestadosceldatitulo">
      <td><%=Mss_cr.getProperty("msscr.Mens-11")%></td>
    </tr>
    <tr>

<% if(sal_base==null) { %>
      <td class="fuentevalor"><m4:item item="PROCESS_USEFUL_INFORMATION" outputdef="GENERAL" /></td>

<%}else{%>

  <% if(sal_base.equals("1")) { %>
      <td class="fuentevalor"><m4:item item="EMPLOYEE_BASE_SALARY_NOT_FOUND" outputdef="GENERAL" /></td><%}%>
  <% if(sal_base.equals("2")) { %>
      <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Aviso-11")%></td><%}%>
  <% if(sal_base.equals("3")) { %>
      <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Aviso2-11")%></td><%}%>
  <% if(sal_base.equals("5")) { %>
      <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Aviso3-11")%></td><%}%>
  <% if(sal_base.equals("6")) { %>
      <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Aviso5-11")%></td><%}%>
  <% if(sal_base.equals("7")) { %>
      <td class="fuentevalor"><m4:item item="FUTURE_REVIEWS_INFORMATION_SCR" outputdef="GENERAL_3" /></td><%}%>
  <% if(sal_base.equals("4")) { %>
      <td class="fuentevalor">&nbsp;</td>
    </tr>
    <tr>
      <td class="fuentevalor"><%=Mss_cr.getProperty("msscr.Aviso4-11")%></td>
    </tr>
    <tr>
      <td class="fuentevalor">&nbsp;</td>
    </tr>

    <tr>
      <td class="fuentevalor"><m4:item item="HTML_SAL_PLANS_NOT_SELECTED" outputdef="GENERAL_2" /></td><%}%>
    </tr>
    <tr>
      <td class="fuentevalor">&nbsp;</td>
<%}%>
    </tr>
    <tr>
      <td class="fuenteboton"><a href="javascript:window.close()" title="<%=Mss_cr.getProperty("msscr.Pop1-12")%>"><img src="/iconos/entrar_blanco.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop1-12")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>
    </tr>
  </table>
</table>
</body>
<m4:endpage/>
