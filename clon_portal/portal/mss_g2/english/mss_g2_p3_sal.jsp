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
   String idx_salary_Encr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_SAL_PL");
   String idx_salary = "";  
   if (idx_salary_Encr == null || idx_salary_Encr.equals("")) {idx_salary="";}
   else {idx_salary = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", idx_salary_Encr);}
   
%>

<script language="JavaScript" xml:space="preserve">
</script>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_VIEW_INCREASE_METHODOLOGY" m4object="<%=zsubsesion%>">
  <m4:param name="ARG_ID_SAL_PLAN" value='<%= (idx_salary)%>'/>
</m4:exec>
<m4:outputdef node="SSM_SALARY_REVIEW_PROCESS" m4alias="GENERAL" m4object="<%=zsubsesion%>"/>

<m4:endjob/>

<table class="tablaestados" width="100%" cellspacing="0" border="1">
  
    <m4:item item="HTML_CODE" outputdef="GENERAL"/>

  <tr>
    <td class="fuentecampo" colspan="10">&nbsp;
  </tr>
  <tr>
    <td class="fuenteboton" align="center" width="100%" colspan="10"></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="javascript:window.close()" title="<%=Mss_cr.getProperty("msscr.Pop1-12")%>"><img src="/iconos/entrar_blanco.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop1-12")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>
  </tr>
</table>

</body>
<m4:endpage/>
