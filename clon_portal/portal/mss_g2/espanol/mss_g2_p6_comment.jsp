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
   employee = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", employee);
%>

<script language="JavaScript" xml:space="preserve">
</script>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>

<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="SSM_VIEW_COMMENTS_FOR_EMLOYEE" m4object="<%=zsubsesion%>">
  <m4:param name="ARG_EMPLOYEE" value='<%= (employee)%>'/>
</m4:exec>

<m4:outputdef node="SSM_SALARY_REVIEW_COMMENTS" m4alias="GENERAL" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_SALARY_REVIEW_COMMENTS" alias="count" method="Count" m4object="<%=zsubsesion%>"/>

<m4:endjob/>

<table class="tablaestados" width="100%" cellspacing="0" border="1">

<% String count; %>
<% int icount = 0; %>
  <m4:outputexec var="count" alias="count"/>
  <% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%>

<%if (icount > 0) {%>

  <table class="tablaestados" width="100%" cellspacing="0" border="0">
    <tr class="tablaestadosceldatitulo">
      <td><%=Mss_cr.getProperty("msscr.Comentarios-13")%></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
    </tr>


<m4:dataloop outputdef="GENERAL">
  <% Integer current; %>
  <m4:current var="current" outputdef="GENERAL"/>


    <tr>
      <td class="fuenteleyenda"><%=Mss_cr.getProperty("msscr.Comentarios2-13")%> <%=current%></td>
    </tr>
    <tr>
      <td class="fuentevalor"><m4:item item="HCO_CR_COMMENT" outputdef="GENERAL"/></td>
    </tr>
    <tr>
      <td class="fuentevalor"><hr class="barramenu" /></td>
    </tr>

</m4:dataloop>    



<%}else{%>
  <div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.Nohay-13")%><br><br>
  </div>
<%}%> 

  <table width="100%"> 
    <tr>
      <td colspan="2">&nbsp;</td>
    </tr>
    <tr>
      <td align=center colspan="2"><a href="javascript:window.close()" title="<%=Mss_cr.getProperty("msscr.Pop1-12")%>"><img src="/iconos/entrar_blanco.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop1-12")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>
    </tr>
  </table>
</table>
</body>
<m4:endpage/>
