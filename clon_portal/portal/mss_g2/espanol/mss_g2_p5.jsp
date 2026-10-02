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
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
estado="112";
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String zgo_back_plan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"go_back_plan");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zgo_back_plan==null)||(zgo_back_plan.equals(""))){zgo_back_plan = "0";}
%>
</head>
<body>
<%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSM_SALARY_REVIEW_PROCESS";
   String zmeta4object = "SSM_SALARY_REVIEW_PROCESS";
   String zmetodocarga = zsubsesion + "!SSM_SALARY_REVIEW_PROCESS.CR_SALARY_REVIEW_MAIN_PROCESS";
   String zmetodo_set = zsubsesion + "!SSM_SALARY_REVIEW_PROCESS.CR_SET_WORK_UNIT";
   String znodo = "SSM_EMPLOYEES_INFORMATION";

   String zestado = "21";

%>


<script language="JavaScript" xml:space="preserve">

function show_details(this_id)
{
  element = "DETAILS_" + this_id
  control_element = "ACTIVATED_" + this_id
  is_display = document.getElementById(control_element).value;

  if (is_display=="0")
  {
      document.getElementById(element).className="";
    document.getElementById(control_element).value = "1";
  }
  else

  {
      document.getElementById(element).className="invisible2";
    document.getElementById(control_element).value = "0";
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

function comprobar_accion(vaction)
{

  if (confirm("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad")%>")) {
    document.forms["redireccion"].action = vaction;
    document.forms["redireccion"].submit();
  }

}

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
      text_filter = text_filter + form.elements["ID_EMP_" + i].value + "||" + form.elements["ROLE_EMP_" + i].value + ";";
    else
      seleccionado = 1; 
      }

    if (seleccionado == 0)
    {
      for (var i = 0; i < num_reg; i++)
      form.elements["SEL_" + i].disabled = false;

      alert("<%=Mss_cr.getProperty("msscr.NOHTML_Texto6-14")%>");
    return;
    }
    else
    {
    form.elements["FILTER"].value = text_filter;
    form.submit();
    }
  }
}

function show_help(cod_help)
{
  this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=" + cod_help;
  var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=1000";
  this.win= window.open(this.url, 'popup', attr);
}

</script>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_SAL_REVIEW_EMPL_RESUMEN" m4alias="TOTALES" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_SAL_REVIEW_EMPL_RESUMEN" alias="emp_count" method="Count" m4object="<%=zsubsesion%>"/>
<m4:endjob/>

<table border="0" width="100%">
  <tr>
    <td class="titulofuncional" colspan="2" ><%=Mss_cr.getProperty("msscr.Link1")%></td>
    <td><a href="javascript:show_help(5)" title="<%=Mss_cr.getProperty("msscr.Pop2-21")%>"><img alt="<%=Mss_cr.getProperty("msscr.Pop2-21")%>" src="/iconos/ic_help_25_31_0.gif" alt="<%=Mss_cr.getProperty("msscr.Pop3-21")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>
  </tr>

  <tr>
    <td><img alt="<%=Mss_cr.getProperty("msscr.Pop9-20")%>" src="/iconos/noname_salariales_mss_58_100.gif" width="100" height="100" /></td>
    <td><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.Resumen-14")%></div></td>
  </tr>
</table>

<form name="redireccion" action="" method="post" enctype="application/x-www-form-urlencoded">
</form>
<form name="sel_rev" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_p.jsp?" method="post" enctype="application/x-www-form-urlencoded">
<input name="FILTER" type="hidden"/>
<input name="go_back_plan" type="hidden" value="<%=zgo_back_plan%>"/>
<% String count; %>
<% int icount = 0; %>
  <m4:outputexec var="count" alias="emp_count"/>
  <% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%>

<%if (icount > 0) {%>

<table class="tablaestados" align="center" width="100%" cellspacing="0">
  <tr class="tablaestadosceldatitulo">
    <td align="center" colspan="1"><%=Mss_cr.getProperty("msscr.ID6-3")%></td>
    <td align="center" colspan="1"><%=Mss_cr.getProperty("msscr.Rendimiento-14")%></td>
    <td align="center" colspan="1"><%=Mss_cr.getProperty("msscr.Tabla1297")%> (<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="TOTALES"/>)</td>

    <td align="center" colspan="1" title="<%=Mss_cr.getProperty("msscr.Tabla1285")%>"><b><u><%=Mss_cr.getProperty("msscr.Tabla1281")%> (<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="TOTALES"/>)</b></u></td>

    <td align="center" colspan="1"><%=Mss_cr.getProperty("msscr.Tabla1298")%> (<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="TOTALES"/>)</td>

    <td align="center" colspan="1" title="<%=Mss_cr.getProperty("msscr.Tabla1286")%>"><b><u><%=Mss_cr.getProperty("msscr.Tabla1281")%> (<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="TOTALES"/>)</b></u></td>



    <td align="center" colspan="1"><%=Mss_cr.getProperty("msscr.Tabla1299")%> (<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="TOTALES"/>)</td>

    <td align="center" colspan="1" title="<%=Mss_cr.getProperty("msscr.Tabla1287")%>"><b><u><%=Mss_cr.getProperty("msscr.Tabla1281")%> (<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="TOTALES"/>)</b></u></td>

    <td align="center" colspan="1"><%=Mss_cr.getProperty("msscr.Texto5-14")%></td>
  </tr>

  <m4:dataloop outputdef="TOTALES">

  <% Integer icurrent; %>
  <m4:current var="icurrent" outputdef="TOTALES"/>

  <m4:item m4varname="FULL_TIME" item="EMPLOYEE_PARTIAL_TIME" htmlsafe="true" outputdef="TOTALES"/>
  <tr align="center">
    <td align="center" class="fuentevalor3">

<a href="javascript:show_details(<%=(icurrent)%>)" title="<%=Mss_cr.getProperty("msscr.Tabla1288")%>">

      <m4:item item="HR_ID" htmlsafe="true" outputdef="TOTALES"/> - 
      <m4:item item="HR_NAME" htmlsafe="true" outputdef="TOTALES"/></a></td>
    <td class="fuentevalor3">
      <m4:item item="EMPLOYEE_PERFORMANCE" htmlsafe="true" outputdef="TOTALES"/></td>

    <td align="center" class="fuentevalor3">
      <m4:item item="BASE_MANAGER_CASH" htmlsafe="true" outputdef="TOTALES"/></td>

    <td align="center" class="fuentevalor3">
      <m4:item item="BASE_MANAGER_CASH_REAL" htmlsafe="true" outputdef="TOTALES"/></td>

    <td align="center" class="fuentevalor3">
      <m4:item item="VARIABLE_MANAGER_CASH" htmlsafe="true" outputdef="TOTALES"/></td>

    <td align="center" class="fuentevalor3">
      <m4:item item="VARIABLE_MANAGER_CASH_REAL" htmlsafe="true" outputdef="TOTALES"/></td>

    <td align="center" class="fuentevalor3">
      <m4:item item="TOTAL_MANAGER_CASH" htmlsafe="true" outputdef="TOTALES"/></td>

    <td align="center" class="fuentevalor3">
      <m4:item item="TOTAL_MANAGER_CASH_REAL" htmlsafe="true" outputdef="TOTALES"/></td>


    <td class="fuentevalor3"><input title="<%=Mss_cr.getProperty("msscr.Confirm_ad25")%>" name='<%= "SEL_" + (icurrent)%>' 
    id="<%= "SEL_" + (icurrent)%>"  type="checkbox"/>

    <m4:input name='<%= "ID_EMP_" + (icurrent)%>' size="8" type="hidden" disabled="disabled"><m4:item item="HR_ID" htmlsafe="true" outputdef="TOTALES"/></m4:input>
    <m4:input name='<%= "ROLE_EMP_" + (icurrent)%>' size="8" type="hidden" disabled="disabled"><m4:item item="HR_ROLE_OR" htmlsafe="true" outputdef="TOTALES"/></m4:input>

    </td>
  </tr>

<input id='<%= "ACTIVATED_" + (icurrent)%>' name='<%= "ACTIVATED_" + (icurrent)%>' type="hidden" value="0"/>

<tr><td colspan="11">
<table id='<%= "DETAILS_" + (icurrent)%>' name='<%= "DETAILS_" + (icurrent)%>' class="invisible2" align="center" width="100%" cellspacing="0">


  <tr align="left">

    <td  class="fuentevalor2" colspan="6"><b><br/>&nbsp;&nbsp;&nbsp;&nbsp;<%=Mss_cr.getProperty("msscr.Tabla1289")%></b>&nbsp; <u><m4:item item="HR_ID" htmlsafe="true" outputdef="TOTALES"/> - 
      <m4:item item="HR_NAME" htmlsafe="true" outputdef="TOTALES"/></u><br/><br/><br/></td>

    <td  class="fuentevalor2" colspan="5"><b><br/><%=Mss_cr.getProperty("msscr.Tabla1290")%></b>&nbsp;<u><m4:item item="EMPLOYEE_PART_TIME_PERCENTAGE" htmlsafe="true" outputdef="TOTALES"/> %</u><br/><br/><br/></td>


  </tr>

  <tr align="left">


    <td  class="fuentevalor2" colspan="4"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=Mss_cr.getProperty("msscr.Tabla1291")%></b></td>
    <td align="center" class="fuentevalor2" colspan="2">
      <m4:item item="BASE_GUIDELINE_CASH" htmlsafe="true" outputdef="TOTALES"/></td>
    <td class="fuentevalor2" colspan="4"><b><u><%=Mss_cr.getProperty("msscr.Tabla1292")%></b></u></td>
    <td align="center" class="fuentevalor2" colspan="2"><m4:item item="BASE_GUIDELINE_CASH_REAL" htmlsafe="true" outputdef="TOTALES"/></td>


  </tr>


  <tr align="center">


    <td align="center"   class="fuentevalor2" colspan="4"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=Mss_cr.getProperty("msscr.Tabla1293")%></b></td>
    <td align="center" class="fuentevalor2" colspan="2">
      <m4:item item="VARIABLE_GUIDELINE_CASH" htmlsafe="true" outputdef="TOTALES"/></td>

    <td align="center" class="fuentevalor2" colspan="4"><b><u><%=Mss_cr.getProperty("msscr.Tabla1294")%></b></u></td>

    <td align="center" class="fuentevalor2" colspan="2"><m4:item item="VARIABLE_GUIDELINE_CASH_REAL" htmlsafe="true" outputdef="TOTALES"/></td>

  </tr>

  <tr align="center">


    <td align="center"   class="fuentevalor2" colspan="4"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=Mss_cr.getProperty("msscr.Tabla1295")%></b></td>
    <td align="center" class="fuentevalor2" colspan="2">
      <m4:item item="TOTAL_GUIDELINE_CASH" htmlsafe="true" outputdef="TOTALES"/></td>

    <td align="center" class="fuentevalor2" colspan="4"><b><u><%=Mss_cr.getProperty("msscr.Tabla1296")%></b></u></td>

    <td align="center" class="fuentevalor2" colspan="2"><m4:item item="TOTAL_GUIDELINE_CASH_REAL" htmlsafe="true" outputdef="TOTALES"/></td>

  </tr>

  <tr align="center"><td align="center" colspan="11" class="fuentevalor2">&nbsp;</td></tr>
</table>
</td></tr>


  </m4:dataloop>  



  <tr>
    <td class="fuenteboton" colspan="7">&nbsp;</td>
    <td class="fuenteboton"colspan="2" align="right">
      <a href="javascript:marcar_todos(<%=icount%>);" title="<%=Mss_cr.getProperty("msscr.Texto7-14")%>"><img src="/iconos/icono_aceptar_todas_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Texto7-14")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
      <a href="javascript:desmarcar_todos(<%=icount%>);" title="<%=Mss_cr.getProperty("msscr.Confirm_ad14")%>"><img src="/iconos/icono_deshacer_mss_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad14")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>

  </tr>
  <tr>
  <td class="fuenteboton" colspan="5">
    <% if (zgo_back_plan == "0") {  //Go back to employee list%>
      <a href="javascript:comprobar_accion('/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad16")%>"><img src="/iconos/ic_lis_36_36_2.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad16")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
    <%} else {            //Go back to compensation plan list%>
      <a href="javascript:comprobar_accion('/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_me.jsp?');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad16a")%>"><img src="/iconos/ic_lis_36_36_2.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad16a")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
    <%}%>
  </td>

  <td class="fuenteboton" colspan="5">
    <a href="javascript:m4selec_empleados(<%=icount%>)" title="<%=Mss_cr.getProperty("msscr.Confirm_ad17")%>"><img src="/iconos/icono_siguiente_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad17")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
  </tr>


</table>
<%}%>
<%@ include file="../../mss_generico/espanol/mssgenerico_disclaimer.jsp" %>
</body>
<m4:endpage/>
