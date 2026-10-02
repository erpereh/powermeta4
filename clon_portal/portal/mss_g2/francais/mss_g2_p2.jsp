<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Link1")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
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
   String zmeta4object = "SSM_SALARY_REVIEW_PROCESS";
   String zmetodocarga = zsubsesion + "!SSM_SALARY_REVIEW_PROCESS.CR_SALARY_REVIEW_MAIN_PROCESS";
   String zmetodo_set = zsubsesion + "!SSM_SALARY_REVIEW_PROCESS.CR_SET_WORK_UNIT";
   String znodo = "SSM_EMPLOYEES_INFORMATION";
   String zestado = "21";
   String idx_wu = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"wu");
   idx_wu = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", idx_wu);
%>

<script language="JavaScript" xml:space="preserve">

function m4selec_empleados(num_reg)
{
  if (num_reg > 0)
  {
      var form = document.forms["sel_rev"];
    var text_filter = "";
    var seleccionado = 0;
    for (var i = 0; i < num_reg; i++)
    {
    form.elements["SEL_" + i].disabled = true;
    if (form.elements["SEL_" + i].checked==false)
      text_filter = text_filter + form.elements["ID_" + i].value + "||" + form.elements["ROLE_" + i].value + ";";
    else
      seleccionado = 1; 
      }

    if (seleccionado == 0)
    {
      for (var i = 0; i < num_reg; i++)
    {
        if (form.elements["SEL_" + i].value== "NOT_AVAILABLE")
           form.elements["SEL_" + i].disabled = false;
    }

      alert("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad4")%>");
    return;
    }
    else
    {
    form.elements["FILTER"].value = text_filter;
    form.submit();
    }
  }
}

function desmarcar_todos(num_reg)
{
    var form = document.forms["sel_rev"];
  if (num_reg > 0)
    for (var i = 0; i < num_reg; i++)
    form.elements["SEL_" + i].checked=false;
}

function marcar_todos(num_reg)
{
    var form = document.forms["sel_rev"];
  if (num_reg > 0)
    for (var i = 0; i < num_reg; i++)
    {
      if(form.elements["SEL_" + i].disabled==false)
      form.elements["SEL_" + i].checked=true;
    }
}

function view_message(employee,employee_job)
{
  this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?HR=" + employee + "&HR_JOB=" + employee_job;
  var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=300,height=350";
  this.win= window.open(this.url, 'popup', attr);
}

function show_help(cod_help)
{
  this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=" + cod_help;
  var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=800";
  this.win= window.open(this.url, 'popup', attr);
}

function edit_history(id_hr,role_id_hr)
{
  this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_ht.jsp?HR=" + id_hr + "&HR_ROLE=" + role_id_hr;
  var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=400";
  this.win= window.open(this.url, 'popup', attr);
}

function view_general_info(id_hr,role_id_hr)
{
  this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_info.jsp?HR=" + id_hr + "&HR_ROLE=" + role_id_hr;
  var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=400";
  this.win= window.open(this.url, 'popup', attr);
}

</script>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_SET_WORK_UNIT" m4object="<%=zsubsesion%>">
  <m4:param name="ARG_SAL_PLAN_ID" value='<%= (idx_wu)%>'/>
</m4:exec>

<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>

<m4:outputdef node="SSM_EMPLOYEES_INFORMATION" m4alias="EMPLEADOS" m4object="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_SALARY_REVIEW_PROCESS" m4alias="GENERAL" m4object="<%=zsubsesion%>"/>

<m4:exec node="SSM_EMPLOYEES_INFORMATION" alias="emp_count" method="Count" m4object="<%=zsubsesion%>"/>

<m4:endjob/>

<table border="0" width="100%">
<tr>
       <td class="titulofuncional" colspan="2"><%=Mss_cr.getProperty("msscr.Link1")%>
     </td>
      <td><a href="javascript:show_help(2)" title="<%=Mss_cr.getProperty("msscr.Pop2-21")%>"><img alt="<%=Mss_cr.getProperty("msscr.Pop2-21")%>" src="/iconos/ic_help_25_31_0.gif" alt="<%=Mss_cr.getProperty("msscr.Pop3-21")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a>
     </td>
</tr>
<tr>
  <td><img alt="<%=Mss_cr.getProperty("msscr.Pop9-20")%>" src="/iconos/noname_salariales_mss_58_100.gif" width="100" height="100" /></td>
  <td><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.Mitad")%> <u><b><m4:item item="CR_DIFFERENT_WORK_UNIT" htmlsafe="true" outputdef="GENERAL"/></u></b></br> <%=Mss_cr.getProperty("msscr.Mitad3")%>
  <img src="/iconos/advertencia_rojo.gif"/>&nbsp;<%=Mss_cr.getProperty("msscr.Mitad2")%> 
  </div></td>
  
</tr>
</table>

<form name="sel_rev" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_p.jsp?" method="post" enctype="application/x-www-form-urlencoded">

<input name="FILTER" type="hidden"/>

<% String count; %>
<% int icount = 0; %>
  <m4:outputexec var="count" alias="emp_count"/>
  <% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%>

<%if (icount > 0) {%>

<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
<td>&nbsp</td>
<td><%=Mss_cr.getProperty("msscr.Tabla1")%></td>
<td colspan="2"><%=Mss_cr.getProperty("msscr.Tabla2")%></td>
<td colspan="2"><%=Mss_cr.getProperty("msscr.Tabla3")%></td>
<td><%=Mss_cr.getProperty("msscr.ID10-3")%></td>
<td align="center"><%=Mss_cr.getProperty("msscr.Tabla4")%></td>
<td width="8%"><%=Mss_cr.getProperty("msscr.ID12-3")%></td>
</tr>

<m4:dataloop outputdef="EMPLEADOS">


<m4:item m4varname="last_review" item="LAST_REVIEW_BASE_SALARY" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="name_role" item="ROLE_NAME" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="grade" item="SALARY_GRADE_NAME" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="information" item="PROCESS_USEFUL_INFORMATION" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="id_employee" item="HR_ID" htmlsafe="true" outputdef="EMPLEADOS"/>
<%String sIdEmpEnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", id_employee);%>
<m4:item m4varname="employee_job" item="JOB_ID" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="employee_id_role" item="HR_ROLE_OR" htmlsafe="true" outputdef="EMPLEADOS"/>
<%String sIdRoleEnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", employee_id_role);%>

<tr>

  <% Integer current; %>
  <m4:current var="current" outputdef="EMPLEADOS"/>

  <td class="fuenteleyenda_big">
  <% if(information.equals("")) { %>&nbsp;

<!--
    <a href= <%="javascript:view_general_info('" + sIdEmpEnc + "','" + sIdRoleEnc + "');"%>><img alt="<%=Mss_cr.getProperty("msscr.Pop11-20")%>" src="/iconos/icono_seleccionar_11_12.gif"/></a>
-->
  <%}else{%>
    <a href= <%="javascript:view_message('" + id_employee + "','" + employee_job + "');"%>><img alt="<%=Mss_cr.getProperty("msscr.Pop1-20")%>" src="/iconos/advertencia_rojo.gif"/></a>
  <%}%>
  </td>

  <td class="fuentevalor"><a href="<%= "javascript:edit_history('" + (sIdEmpEnc) + "','" + (sIdRoleEnc) + "')"%>" shape="rect" title="<%=Mss_cr.getProperty("msscr.Pop1-21")%>"><%=id_employee%>&nbsp;-&nbsp;<m4:item item="HR_NAME" htmlsafe="true" outputdef="EMPLEADOS"/></a> 
  </td>

<% if(name_role.equals("")) { %><td class="fuenteleyenda" colspan="2"><%=Mss_cr.getProperty("msscr.Tabla5")%></td><%}else{%>
  <td class="fuentevalor" colspan="2"><%=name_role%></td><%}%>

  <td class="fuentevalor" colspan="2"><m4:item item="JOB_ID" htmlsafe="true" outputdef="EMPLEADOS"/> - &nbsp;<m4:item item="JOB_NAME" htmlsafe="true" outputdef="EMPLEADOS"/></td>

<% if(grade.equals("")) { %> <td class="fuenteleyenda"><%=Mss_cr.getProperty("msscr.Tabla5")%></td> <%}else{%>
  <td class="fuentevalor3"><%=grade%></td><%}%>

<% if(last_review.equals("0")) { %> <td align="center" class="fuenteleyenda"><m4:item item="LAST_BASE_SALRY_REVIEW_STATE" htmlsafe="true" outputdef="EMPLEADOS"/></td><%}else{%>
  <td class="fuentevalor_2"><%=last_review%>&nbsp;<m4:item item="LAST_REVIEW_BASE_SALARY_CUR" htmlsafe="true" outputdef="EMPLEADOS"/></td><%}%>

  <td class="fuentevalor3" width="8%">
<% if(information.equals("")) { %>
    <input title="<%=Mss_cr.getProperty("msscr.Confirm_ad12")%>" name='<%= "SEL_" + (current)%>' id="<%= "SEL_" + (current)%>"  type="checkbox" value="NOT_AVAILABLE"/>
<%}else{%>
    <input name='<%= "SEL_" + (current)%>' id="<%= "SEL_" + (current)%>" disabled="disabled" type="checkbox" value="AVAILABLE"/>
<%}%>
    <m4:input name='<%= "ID_" + (current)%>' size="8" type="hidden" disabled="disabled"><m4:item item="HR_ID" htmlsafe="true" outputdef="EMPLEADOS"/></m4:input>
    <m4:input name='<%= "ROLE_" + (current)%>' size="8" type="hidden" disabled="disabled"><m4:item item="HR_ROLE_OR" htmlsafe="true" outputdef="EMPLEADOS"/></m4:input>
  </td>
</tr>
</m4:dataloop>    
<tr>
  <td class="fuenteboton"colspan="7" align="right">&nbsp;</td>
  <td class="fuenteboton"colspan="2" align="right"><a href="javascript:marcar_todos(<%=icount%>);" title="<%=Mss_cr.getProperty("msscr.Pop4-21")%>"><img src="/iconos/icono_aceptar_todas_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop4-21")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  <a href="javascript:desmarcar_todos(<%=icount%>);" title="<%=Mss_cr.getProperty("msscr.Pop5-21")%>"><img src="/iconos/icono_deshacer_mss_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop5-21")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
  <td class="fuenteboton">&nbsp;</td>
  <td class="fuenteboton" colspan="8">
    <a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp" title="<%=Mss_cr.getProperty("msscr.Confirm_ad21")%>"><img src="/iconos/ic_lis_36_36_2.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad21")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="javascript:m4selec_empleados(<%=icount%>)" title="<%=Mss_cr.getProperty("msscr.Confirm_ad17")%>"><img src="/iconos/icono_siguiente_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad17")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>
<%
}else{%>
  <m4:item m4varname="is_max_number_reached" item="MAX_EMPLOYEES_NUMBRE_INDICATOR" htmlsafe="true" outputdef="GENERAL"/>
  <m4:item m4varname="max_number_message" item="MAX_EMPLOYEES_NUMBRE_REACHED" htmlsafe="true" outputdef="GENERAL"/>



  <div class="fuentenodatos">
  <%if (is_max_number_reached.equals("Y")){%>
    <%=max_number_message%>
  <%}else{%>
    <%=Mss_cr.getProperty("msscr.Negar")%>
  <%}%> 

  <br><br><a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp"   title="<%=Mss_cr.getProperty("msscr.Confirm_ad22")%>"><img src="/iconos/icono_anterior_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad22")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  </div>
<%}%> 

</form>

<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</body>
<m4:endpage/>
