<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title><%=Mss_cr.getProperty("msscr.Link2")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String load_filtered = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"filter"); 
String idx_emp = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"emp_for_filter"); 
idx_emp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", idx_emp);

estado="112";

String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>

<%
   String zsubsesion = "SSM_SALARY_REVIEW_PROCESS";
   String idx_wu = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"wu");
%>
<!-- Añadimos la función show_help y le pasamos el parámetro correspondiente-->
<script language="JavaScript" xml:space="preserve">

function view_comment(employee)
{
  this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6_comment.jsp?HR=" + employee;
  var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=400,height=350";
  this.win= window.open(this.url, 'popup', attr);
}

function show_help(cod_help)
  {
    this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=" + cod_help;
    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=600";
    this.win= window.open(this.url, 'popup', attr);
  }

function comprobar_filtro()
{
  var form = document.forms["sel_rev"];
  var selected_item = form.EMPLOYEE_FILTER.options.selectedIndex;
  if (selected_item != 0)
  {
    var form_1 = document.forms["load_with_filter"];
    form_1.emp_for_filter.value = form.EMPLOYEE_FILTER.options[selected_item].value;
    form_1.submit();
  }
}

function deshacer_filtro()
{
  var form = document.forms["load_with_filter"];
  var form_1 = document.forms["load_without_filter"];
  
  var employee_already_filtered = "<%=idx_emp%>";
  if (employee_already_filtered != "null")
    form_1.submit()

}

</script>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<% if(load_filtered==null) { %>
  <m4:exec node="SSM_H_HR_SAL_REVIEW_INS" method="CR_LOAD_SALARY_REVIEW_PETITION" m4object="<%=zsubsesion%>"/>
<%}else{%>

<m4:exec node="SSM_H_HR_SAL_REVIEW_INS" method="CR_LOAD_SAL_REVIEW_PET_FILTER" m4object="<%=zsubsesion%>">
  <m4:param name="ARG_EMPL_FILTER" value='<%= (idx_emp)%>'/>
</m4:exec>
<%}%>
<m4:outputdef node="SSM_H_HR_SAL_REVIEW_INS" m4alias="EMPLEADOS" m4object="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_H_HR_SAL_REVIEW_ONLY_EMP" m4alias="EMPLEADOS_ONLY" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_H_HR_SAL_REVIEW_INS" alias="emp_count" method="Count" m4object="<%=zsubsesion%>"/>
<m4:endjob/>

<form name="load_with_filter" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=21" method="get" enctype="application/x-www-form-urlencoded">
  <input name="emp_for_filter" type="hidden" value=""/>
  <input name="filter" type="hidden" value="1"/>
  
</form>

<form name="load_without_filter" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=21" method="get" enctype="application/x-www-form-urlencoded">
</form>

<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=Mss_cr.getProperty("msscr.Link2")%></td>
<td><a href="javascript:show_help(6)" title="<%=Mss_cr.getProperty("msscr.help1-1")%>"><img alt="<%=Mss_cr.getProperty("msscr.help1-1")%>" src="/iconos/ic_help_25_31_0.gif" alt="Accepter les modifications" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>
<tr>
  <td><img alt="Donn&eacute;es de r&eacute;mun&eacute;ration" src="/iconos/noname_salariales_mss_58_100.gif" width="100" height="100" /></td>
  <td><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.Info1-2")%></div></td>
  
</tr>
</table>

<% String count; %>
<% int icount = 0; %>
  <m4:outputexec var="count" alias="emp_count"/>
  <% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%>

<%if (icount > 0) {%>

<table class="tablaestados" width="100%" cellspacing="0">

<form name="sel_rev" action="" method="post" enctype="application/x-www-form-urlencoded">
  <tr class="tablaestadosceldatitulo">
    <td  colspan="8"><%=Mss_cr.getProperty("msscr.Tabla1-4")%></td>
  </tr>
  <tr>
    <td class="fuentecampo" colspan="8">&nbsp;<%=Mss_cr.getProperty("msscr.Info10-1")%>&nbsp;&nbsp;&nbsp;&nbsp;
      <select id="EMPLOYEE_FILTER" class="fuenteformulario200" name="EMPLOYEE_FILTER"
        title="<%=Mss_cr.getProperty("msscr.Info10-1")%>">      
        <option value="0"><%=Mss_cr.getProperty("msscr.Confirm_ad10-1")%></option>                
        <m4:dataloop outputdef="EMPLEADOS_ONLY">
          <m4:item item="EMPLOYEE_HR_ID" htmlsafe="true" outputdef="EMPLEADOS_ONLY" m4varname="sIdHrEnc"/>
          <%sIdHrEnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHrEnc);%>
          <option value='<%=sIdHrEnc%>'><m4:item item="EMPLOYEE_HR_ID" htmlsafe="true" outputdef="EMPLEADOS_ONLY"/> - <m4:item item="EMPLOYEE_NAME" htmlsafe="true" outputdef="EMPLEADOS_ONLY"/></option>               
        </m4:dataloop>    
      </select>
    </td>
  </tr>
  <tr>
    <td class="fuentevalor_2" colspan="8" width="30%">
      <a style="cursor:hand" href="javascript:comprobar_filtro();" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>">  
        <img alt="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>" src="/iconos/js_filtrar.gif" /> </a>
      <a style="cursor:hand" href="javascript:deshacer_filtro();" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-3")%>"> <img alt="<%=Mss_cr.getProperty("msscr.Confirm_ad10-3")%>" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-3")%>" src="/iconos/js_deshacer_filtro.gif" /> </a>
    </td>
  </tr>
</form>

<tr class="tablaestadosceldatitulo">
  <td  colspan="8"><%=Mss_cr.getProperty("msscr.Tabla1-2")%></td>
</tr>
</table>

<m4:dataloop outputdef="EMPLEADOS">

<m4:item m4varname="employee_id" item="SCO_ID_HR" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="role_id" item="SCO_OR_HR_ROLE" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="idx_this_rec" item="IDX_REG" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="PARTIAL_TIME" item="EMPLOYEE_PARTIAL_TIME" htmlsafe="true" outputdef="EMPLEADOS"/>

<% if(!employee_id.equals("")) { %>
  <table class="tablaestados" width="100%" cellspacing="0">

    <% if(!idx_this_rec.equals("0")) { %>
      <tr>
        <td colspan="9" class="fuentevalor"><hr class="barramenu" /></td>
      </tr>
    <%}%>
    <tr>
      <td class="fuentecampo" width="10%"><%=Mss_cr.getProperty("msscr.Tabla2-2")%></td>
      <td class="fuentevalor" colspan="6"><b><m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="EMPLEADOS"/> - <m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="EMPLEADOS"/> - <m4:item item="SCO_N_ROLE" htmlsafe="true" outputdef="EMPLEADOS"/></b></td>
      <%employee_id = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", employee_id);%>
      <td class="fuentevalor" width="25%"><img src="/iconos/advertencia.gif"/><a href= <%="javascript:view_comment('" + employee_id + "');"%> title="<%=Mss_cr.getProperty("msscr.Pop1-2")%>"><%=Mss_cr.getProperty("msscr.Titulo3-2")%></a></td>
    </tr>
    <tr>
      <td class="fuentecampo" width="10%">&nbsp</td>
      <td class="fuentecampo" colspan="2" width="35%"><%=Mss_cr.getProperty("msscr.Titulo4-2")%></td>
      <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Titulo5-2")%></td>
      <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Titulo6-2")%></td>
      <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Titulo7-2")%></td>
      <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Titulo8-2")%></td>
      <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Periodo")%></td>
    </tr>

<%}else{%>
<m4:item m4varname="state" item="HCO_CR_REVIEW_STATE" htmlsafe="true" outputdef="EMPLEADOS"/>
  <tr>


<% if(state.equals("ACEPTAR")) { %> <td class="fuentevalor_2" width="10%"><img alt="<%=Mss_cr.getProperty("msscr.Pop.Acep")%>" src="/iconos/aceptado.gif"/></td><%}%>
<% if(state.equals("DENEGAR")) { %> <td class="fuentevalor_2" width="10%"><img alt="<%=Mss_cr.getProperty("msscr.Pop.Den")%>" src="/iconos/denegado.gif"/></td><%}%>
<% if(state.equals("PENDING")) { %> <td class="fuentevalor_2" width="10%"><img alt="<%=Mss_cr.getProperty("msscr.Pop.Pen")%>" src="/iconos/pendiente.gif"/></td><%}%>

    <td class="fuentevalor" colspan="2" width="35%"><img src="/iconos/flecha.gif"/>
    <m4:item item="HCO_CR_SALARY_P_NM" htmlsafe="true" outputdef="EMPLEADOS"/> - <m4:item item="HCO_CR_SPLAN_TP_NM" htmlsafe="true" outputdef="EMPLEADOS"/></td>
    <td class="fuentevalor"><m4:item item="HCO_CR_SAL_REV_VALUE" htmlsafe="true" outputdef="EMPLEADOS"/>&nbsp;<m4:item item="ID_CURRENCY" htmlsafe="true" outputdef="EMPLEADOS"/></td>
    <td class="fuentevalor"><m4:item item="PREVIOUS_AMOUNT" htmlsafe="true" outputdef="EMPLEADOS"/>&nbsp;<m4:item item="ID_CURRENCY" htmlsafe="true" outputdef="EMPLEADOS"/></td>
    <td class="fuentevalor_2"><m4:item item="INCREASE_AMOUNT" htmlsafe="true" outputdef="EMPLEADOS"/>&nbsp;<m4:item item="ID_CURRENCY" htmlsafe="true" outputdef="EMPLEADOS"/></td>
    <td class="fuentevalor"><m4:item item="HCO_CR_INC_PERCENTAGE" htmlsafe="true" outputdef="EMPLEADOS"/></td>
    <td class="fuentevalor"><m4:item item="DT_START" htmlsafe="true" outputdef="EMPLEADOS"/><br/><m4:item item="DT_END" htmlsafe="true" outputdef="EMPLEADOS"/></td>
  </tr>

  <% if(PARTIAL_TIME.equals("1")) { %>
    <tr>
      <td class="fuentevalorojo" width="10%">&nbsp</td>
      <td class="fuentevalorojoBold" colspan="2" width="35%"><u><%=Mss_cr.getProperty("msscr.Tabla1284")%>:</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td class="fuentevalor"><b><m4:item item="HCO_CR_SAL_REV_VALUE_REAL" htmlsafe="true" outputdef="EMPLEADOS"/>&nbsp;<m4:item item="ID_CURRENCY" htmlsafe="true" outputdef="EMPLEADOS"/></b></td>
      <td class="fuentevalor"><b><m4:item item="PREVIOUS_AMOUNT_REAL" htmlsafe="true" outputdef="EMPLEADOS"/>&nbsp;<m4:item item="ID_CURRENCY" htmlsafe="true" outputdef="EMPLEADOS"/></b></td>
      <td class="fuentevalor_2"><b><m4:item item="INCREASE_AMOUNT_REAL" htmlsafe="true" outputdef="EMPLEADOS"/>&nbsp;<m4:item item="ID_CURRENCY" htmlsafe="true" outputdef="EMPLEADOS"/><b></td>
      <td class="fuentevalor">&nbsp</td>
      <td class="fuentevalor">&nbsp</td>
    </tr>
  <%}%>
  <tr>
    <td colspan="8" class="fuentevalor">&nbsp;</td>
  </tr>

<%}%>
</m4:dataloop>    
</table>
<%
}else{%>
<div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.Coment1-2")%><br><br>
</div>
<%}%> 


<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</body>
<m4:endpage/>
