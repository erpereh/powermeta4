<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Titulo1-1")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>

</head>
<body>

<%
   String zsubsesion = "SSM_SALARY_REVIEW_PROCESS";
   String employee = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HR");
   employee = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", employee);
   String role = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HR_ROLE");
   role = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", role);
%>

<script language="JavaScript" xml:space="preserve">

</script>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<m4:exec node="SSM_CR_H_HR_SAL_REV_EMP" method="LOAD_EMPLOYEE_HISTORY" m4object="<%=zsubsesion%>">
  <m4:param name="ARG_EMPLOYEE" value='<%= (employee)%>'/>
  <m4:param name="ARG_EMPLOYEE_ROLE" value='<%= (role)%>'/>
</m4:exec>
<m4:outputdef node="SSM_CR_H_HR_SAL_REV_EMP" m4alias="EMP_HIST" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_CR_H_HR_SAL_REV_EMP" alias="emp_count" method="Count" m4object="<%=zsubsesion%>"/>
<m4:endjob/>

<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td  colspan="8"><%=Mss_cr.getProperty("msscr.Text1")%></td>
</tr>
</table>

<% String count; %>
<% int icount = 0; %>
  <m4:outputexec var="count" alias="emp_count"/>
  <% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%>

<%if (icount > 0) {%>

<m4:dataloop outputdef="EMP_HIST">

<m4:item m4varname="employee_id" item="SCO_ID_HR" htmlsafe="true" outputdef="EMP_HIST"/>
<m4:item m4varname="idx_this_rec" item="IDX_REG" htmlsafe="true" outputdef="EMP_HIST"/>
<m4:item m4varname="employee_name" item="SCO_GB_NAME" htmlsafe="true" outputdef="EMP_HIST"/>      

<% if(!employee_name.equals("")) { %>
  <table class="tablaestados" width="100%" cellspacing="0">
    <tr>
      <td class="fuentecampo" colspan="8">&nbsp</td>
    </tr>

    <% if(!idx_this_rec.equals("0")) { %>
      <tr>
        <td colspan="7" class="fuentevalor"><hr class="barramenu" /></td>
      </tr>
    <%}%>
    <tr>
      <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Tabla2-2")%></td>
      <td class="fuentevalor" colspan="8"><b><m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="EMP_HIST"/> - <m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="EMP_HIST"/> - <m4:item item="SCO_N_ROLE" htmlsafe="true" outputdef="EMP_HIST"/></b></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp</td>
      <td class="fuentecampo" colspan="2"><%=Mss_cr.getProperty("msscr.Titulo4-2")%></td>
      <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Titulo5-2")%></td>
      <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Titulo6-2")%></td>
      <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Titulo7-2")%></br><%=Mss_cr.getProperty("msscr.Porcen")%></td>
      <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Periodo")%></td>
      <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Titulo12-5")%></br><%=Mss_cr.getProperty("msscr.Fecha")%></td>
    </tr>
    <tr>
      <td class="fuentecampo" colspan="8">&nbsp</td>
    </tr>
<%}else{%>
  <tr>
    <td class="fuentevalor_2">&nbsp;</td>
    <td class="fuentevalor" colspan="2"><m4:item item="HCO_CR_SALARY_P_NM" htmlsafe="true" outputdef="EMP_HIST"/> - <m4:item item="HCO_CR_SPLAN_TP_NM" htmlsafe="true" outputdef="EMP_HIST"/></td>
    <td class="fuentevalor"><m4:item item="HCO_CR_SAL_REV_VALUE" htmlsafe="true" outputdef="EMP_HIST"/>&nbsp;<m4:item item="ID_CURRENCY" htmlsafe="true" outputdef="EMP_HIST"/></td>
    <td class="fuentevalor_2"><m4:item item="PREVIOUS_AMOUNT" htmlsafe="true" outputdef="EMP_HIST"/>&nbsp;<m4:item item="ID_CURRENCY" htmlsafe="true" outputdef="EMP_HIST"/></td>
    <td class="fuentevalor_2"><m4:item item="INCREASE_AMOUNT" htmlsafe="true" outputdef="EMP_HIST"/>&nbsp;<m4:item item="ID_CURRENCY" htmlsafe="true" outputdef="EMP_HIST"/></br>(<m4:item item="HCO_CR_INC_PERCENTAGE" htmlsafe="true" outputdef="EMP_HIST"/>%)</td>
    <td class="fuentevalor"><b><%=Mss_cr.getProperty("msscr.valor_inicio")%>&nbsp;</b><m4:item item="DT_START" htmlsafe="true" outputdef="EMP_HIST"/></br><b><%=Mss_cr.getProperty("msscr.valor_fin")%>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><m4:item item="DT_END" htmlsafe="true" outputdef="EMP_HIST"/></td>
    <td class="fuentevalor"><m4:item item="STD_ID_HR_MANAGER" htmlsafe="true" outputdef="EMP_HIST"/> - <m4:item item="SCO_GB_NAME_MANAGER" htmlsafe="true" outputdef="EMP_HIST"/></br><m4:item item="HCO_CR_REVIEW_DATE" htmlsafe="true" outputdef="EMP_HIST"/></td>

  </tr>
  <tr>
    <td colspan="8" class="fuentevalor">&nbsp;</td>
  </tr>
<%}%>
</m4:dataloop>    
  <tr>
    <td class="fuenteboton" colspan="8"><a href="javascript:window.close()" title="<%=Mss_cr.getProperty("msscr.Pop1-12")%>"><img src="/iconos/entrar_blanco.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop1-12")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>
  </tr>

</table>
<%
}else{%>
<div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.Nohay")%><br><br><a href="javascript:window.close()" title="<%=Mss_cr.getProperty("msscr.Pop1-12")%>"><img src="/iconos/entrar_blanco.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop1-12")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a>
</div>
<%}%> 
</body>
<m4:endpage/>
