<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<title></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />

</head>
<body>

<script language="JavaScript" xml:space="preserve">
</script>

<%
   String zsubsesion = "SSM_SALARY_REVIEW_PROCESS";
   String employee = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HR");
   String role = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HR_ROLE");
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_LOCATE_EMP_FOR_GENERAL_DATA" m4object="<%=zsubsesion%>">
  <m4:param name="ARG_EMPLOYEE" value='<%= (employee)%>'/>
  <m4:param name="ARG_EMPLOYEE_ROLE" value='<%= (role)%>'/>
</m4:exec>
<m4:outputdef node="SSM_SALARY_REVIEW_PROCESS" m4alias="EMPLEADO" m4object="<%=zsubsesion%>"/>

<m4:endjob/>
<table class="tablaestados" width="100%" cellspacing="0" border="1">
  <m4:item item="GEN_INFO_GEN_INFO" outputdef="EMPLEADO"/>
  <tr>
    <td class="fuenteboton" colspan="10"><a href="javascript:window.close()" title="<%=Mss_cr.getProperty("msscr.Pop1-12")%>"><img src="/iconos/entrar_blanco.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop1-12")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>
  </tr>
</table>
</body>
<m4:endpage/>
