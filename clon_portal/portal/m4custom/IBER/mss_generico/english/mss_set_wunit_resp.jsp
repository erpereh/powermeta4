<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Tabla109")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
estado="01";
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
String idx_tp_filter = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_for_filter"); 
%>
</head>
<body>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>

<%
   String zsubsesion = "SSM_SET_WORK_UNIT_TO_SEE";
   String zmeta4object = "SSM_SET_WORK_UNIT_TO_SEE";
   String zmetodocarga = zsubsesion + "!SSM_SET_WORK_UNIT_TO_SEE.SSM_LOAD_WORK_UNITS";
   String zestado = "01";
%>

<script language="JavaScript" xml:space="preserve">

function m4selec_empleados(num_reg,num_tot_empl)
{

  if (num_tot_empl == 0)
  {
      alert("<%=Mss_cr.getProperty("msscr.Tabla126")%>");
    return;
  }

  if (num_reg > 0)
  {
      var form = document.forms["sel_rev"];
    var text_filter = "";
    var seleccionado = 0;
    for (var i = 0; i < num_reg; i++)
    {
    if (form.elements["SEL_" + i].checked==true)
      {
      text_filter = text_filter + form.elements["SEL_" + i].value + "||";
      seleccionado = 1;
      }
        
      }

    if (seleccionado == 0)
    {
      alert("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad42")%>");
    return;
    }


    form.elements["FILTER"].value = text_filter;
    form.submit();

  }
}

function m4selec_empleados_count(num_reg)
{

  if (num_reg > 0)
  {
      var form = document.forms["sel_rev"]; 
      var form_2 = document.forms["sel_rev_2"];
    var text_filter = "";
    var seleccionado = 0;
    for (var i = 0; i < num_reg; i++)
    {
    if (form.elements["SEL_" + i].checked==true)
      {
      text_filter = text_filter + form.elements["SEL_" + i].value + "||";
      seleccionado = 1;
      }
        
      }

    if (seleccionado == 0)
    {
      alert("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad42")%>");
//    return;
    }


    form_2.elements["FILTER"].value = text_filter;
    form_2.submit();

  }
}

function desmarcar_todos(num_reg)
{
    var form = document.forms["sel_rev"];
  if (num_reg > 0)
  {
    for (var i = 0; i < num_reg; i++)
    form.elements["SEL_" + i].checked=false;
      var form_2 = document.forms["sel_rev_2"];
    var text_filter = "||";
    form_2.elements["FILTER"].value = text_filter;
    form_2.submit();
  }
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


  function view_details(work_u)
  {

  work_u=m4urlencode(work_u);
    this.url = "/servlet/CheckSecurity/JSP/mss_generico/mss_wunit_detail.jsp?WU=" + work_u;

    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=750,height=650";
    this.win= window.open(this.url, 'popup', attr);
  }


  function set_work_unit(registro)
  {

      var form = document.forms["sel_rev"];

    if (form.elements["SEL_" + registro].checked==true)
    {form.elements["SEL_" + registro].checked=false;}
    else
    {form.elements["SEL_" + registro].checked=true;}

  }

  function view_employees(work_u,employee_number)
  {
    if (employee_number >= 300)
    {
        alert("<%=Mss_cr.getProperty("msscr.Tabla123")%>");
      return;
    }
work_u=m4urlencode(work_u);
    this.url = "/servlet/CheckSecurity/JSP/mss_generico/mss_list_employees.jsp?WU=" + work_u;

    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=900,height=550";
    this.win= window.open(this.url, 'popup', attr);
  }

  function view_all_employees(num_reg,num_tot_empl)
  {
    if (num_tot_empl >= 300)
    {
        alert("<%=Mss_cr.getProperty("msscr.Tabla123")%>");
      return;
    }

    if (num_reg > 0)
    {
        var form = document.forms["sel_rev"];
      var text_filter = "";
      var seleccionado = 0;
      for (var i = 0; i < num_reg; i++)
      {
      if (form.elements["SEL_" + i].checked==true)
        {
        text_filter = text_filter + m4urlencode(form.elements["SEL_" + i].getAttribute('m4EncIdWU') )+ ".";
        seleccionado = 1;
        }
        
        }
  
      if (seleccionado == 0)
      {
        alert("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad42")%>");
      return;
      }

    this.url = "/servlet/CheckSecurity/JSP/mss_generico/mss_list_all_employees.jsp?wunits=" + text_filter;
  
    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=900,height=550";
    this.win= window.open(this.url, 'popup', attr);

    }

  }

function comprobar_filtro()
{
    var selected_item = document.getElementById("TP_RESP_FILTER").value;
    if (selected_item != 0)
    {
      var form = document.forms["load_with_filter"];
      form.tp_for_filter.value = selected_item;
      form.submit();
    }
}


function checkr(work_u,employee_number){
     work_u=m4urlencode(work_u);
     var parametros = new Array("wu","tp_for_filter");
     var valores = new Array(work_u,employee_number);
     m4navegar('mss_generico/mss_set_wunit_resp_p2.jsp',parametros,valores);
}
function ucheckr(work_u,employee_number){
     work_u=m4urlencode(work_u);
     var parametros = new Array("wu","tp_for_filter");
     var valores = new Array(work_u,employee_number);
     m4navegar('mss_generico/mss_set_wunit_resp_p3.jsp',parametros,valores);

}
</script>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>


<m4:exec node="SSM_SET_WORK_UNIT_TO_SEE" method="SSM_LOAD_WORK_UNITS" m4object="<%=zsubsesion%>">
  <m4:param name="ARG_TP_RESPONSABLE" value='<%= (idx_tp_filter)%>'/>
</m4:exec>


<m4:outputdef node="SSM_RSC_APPUSER_WU" m4alias="WORK_UNIT" m4object="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_LOAD_TP_RESPONSABLES" m4alias="TP_RESPONSABLE" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_RSC_APPUSER_WU" alias="wu_count" method="Count" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_LOAD_TP_RESPONSABLES" alias="tp_count" method="Count" m4object="<%=zsubsesion%>"/>

<m4:endjob/>


<% String count; %>
<% String count_1; %>
<% int icount = 0; %>
<% int icount_1 = 0; %>
  <m4:outputexec var="count" alias="wu_count"/>
  <m4:outputexec var="count_1" alias="tp_count"/>
  <% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%>
  <% try { icount_1 = Integer.parseInt(count_1); } catch(Exception e) { icount_1 = 0; }%>


<table border="0" width="100%">
<tr>
          <td class="titulofuncional" colspan="3" width="90%"><b><%=Mss_cr.getProperty("msscr.Tabla109")%></b></td>

</tr>
<tr>
  <td><img alt="<%=Mss_cr.getProperty("msscr.Link12")%>" src="/iconos/noname_configuracion_98_125.gif" width="100" height="100"/></td>
    <td><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.Info1-12")%><br/><%=Mss_cr.getProperty("msscr.Tabla84")%>&nbsp;<b><u><m4:item item="SSM_TP_RESPONSABLE_NAME" htmlsafe="true" outputdef="WORK_UNIT"/></b></u>
    </div></td>
  <td>&nbsp;</td>
</tr>
</table>

<form name="load_with_filter" action="/servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp.jsp?estado=01" method="get" enctype="application/x-www-form-urlencoded">
  <input name="tp_for_filter" type="hidden" value=""/>
</form>

<form name="select_tp_resp" action="" method="post" enctype="application/x-www-form-urlencoded">
<table border="0" width="100%">
  <tr class="tablaestadosceldatitulo">
    <td  colspan="8"><%=Mss_cr.getProperty("msscr.Tabla85")%></td>
  </tr>
  <tr>
    <td class="fuentecampo" colspan="8">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla86")%>&nbsp;&nbsp;&nbsp;&nbsp;
      <select id="TP_RESP_FILTER" class="fuenteformulario200" name="TP_RESP_FILTER"
        title="<%=Mss_cr.getProperty("msscr.Tabla86")%>" >      
        <option value="<m4:item item="SSM_TP_RESPONSABLE" htmlsafe="true" outputdef="WORK_UNIT"/>"><m4:item item="SSM_TP_RESPONSABLE_NAME" htmlsafe="true" outputdef="WORK_UNIT"/></option>               
        <m4:dataloop outputdef="TP_RESPONSABLE">
          <option value='<m4:item item="SCO_ID_TYPE_RESP" htmlsafe="true" outputdef="TP_RESPONSABLE"/>'><m4:item item="SCO_ID_TYPE_RESP" htmlsafe="true" outputdef="TP_RESPONSABLE"/> - <m4:item item="SCO_N_TYPE_RES" htmlsafe="true" outputdef="TP_RESPONSABLE"/></option>                
        </m4:dataloop>    
      </select>
    </td>
  </tr>
  <tr>
    <td class="fuentevalor_2" colspan="8" width="30%">
      <a style="cursor:hand" href="javascript:comprobar_filtro();" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>">  
        <img alt="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>" src="/iconos/ok.gif" /> </a>
    </td>
  </tr>
</table>
</form>



<form name="sel_rev_2" action="/servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p4.jsp?" method="post" enctype="application/x-www-form-urlencoded">

  <input name="FILTER" type="hidden"/>
  <input name="tp_for_filter" value ="<%=idx_tp_filter%>" type="hidden"/>
</form>

<form name="sel_rev" action="/servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p.jsp?" method="post" enctype="application/x-www-form-urlencoded">

<input name="FILTER" type="hidden"/>

<%if (icount > 0) {%>

<table class="tablaestados" width="100%" cellspacing="0">

<tr class="tablaestadosceldatitulo">
  <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla6")%></td>
  <td colspan="4"><%=Mss_cr.getProperty("msscr.ID3-3")%></td>
  <td align="center"><%=Mss_cr.getProperty("msscr.Tabla75")%></td>
  <td align="center"><%=Mss_cr.getProperty("msscr.Tabla77")%></td>
  <td colspan="4" align="center"><%=Mss_cr.getProperty("msscr.Tabla71")%></td>


</tr>

<m4:item m4varname="num_employees" item="SSM_COUNT_OF_EMPLOYEES" htmlsafe="true" outputdef="WORK_UNIT"/>

<m4:dataloop outputdef="WORK_UNIT">


<m4:item m4varname="work_unit" item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="WORK_UNIT"/>
<m4:item m4varname="wu_num_employees" item="SSM_COUNT_OF_EMPLOYEES_4_EACH" htmlsafe="true" outputdef="WORK_UNIT"/>
<m4:item m4varname="work_unit_name" item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="WORK_UNIT"/>
<m4:item m4varname="visible" item="SCO_MSS_VISIBILITY" htmlsafe="true" outputdef="WORK_UNIT"/>


<tr>
    <%String sIdWU =  com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", work_unit);%>
  <% Integer current; %>
  <m4:current var="current" outputdef="WORK_UNIT"/>

<!-- 
    <td class="fuentevalor">
    <a href= <%="javascript:set_work_unit('" + current + "');"%> title="<%=Mss_cr.getProperty("msscr.Pop2-1")%>"><m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="WORK_UNIT"/></a></td>
 -->

    <td class="fuentevalor">
    <a href= "javascript:view_employees('<%=sIdWU%>','<%=wu_num_employees%>');" title="<%=Mss_cr.getProperty("msscr.Info1-122")%>"><m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="WORK_UNIT"/></a></td>

    <td colspan ="4" class="fuentevalor">&nbsp;<a href= "javascript:view_details('<%=sIdWU%>');" title="<%=Mss_cr.getProperty("msscr.Pop2-1")%>"><m4:item item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="WORK_UNIT"/></a></td>

    <td class="fuentevalorcenter">
    <a href= "javascript:checkr('<%=work_unit%>','<%=idx_tp_filter%>');" title="<%=Mss_cr.getProperty("msscr.Tabla76")%>">
    <img src="/iconos/flecha.gif" width="11" height="9" alt="<%=Mss_cr.getProperty("msscr.Tabla76")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>

    <td class="fuentevalorcenter">
    <a href= "javascript:ucheckr('<%=work_unit%>','<%=idx_tp_filter%>');" title="<%=Mss_cr.getProperty("msscr.Tabla78")%>">
    <img src="/iconos/flecha_azul2_ess_11_9.gif" width="11" height="9" alt="<%=Mss_cr.getProperty("msscr.Tabla78")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>

  <% if(visible.equals("1")) { %>
    <td colspan ="4" class="fuentevalor3">
      <input title="<%=Mss_cr.getProperty("msscr.Confirm_ad122")%>" onclick="javascript:m4selec_empleados_count(<%=icount%>)" checked="true" name='<%= "SEL_" + (current)%>' id="<%= "SEL_" + (current)%>" m4EncIdWU='<%=sIdWU%>' type="checkbox" value="<m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="WORK_UNIT"/>"/>
    </td>

  <% }else { %>
    <td colspan ="4" class="fuentevalor3">
      <input title="<%=Mss_cr.getProperty("msscr.Confirm_ad122")%>" onclick="javascript:m4selec_empleados_count(<%=icount%>)" name='<%= "SEL_" + (current)%>' id="<%= "SEL_" + (current)%>" m4EncIdWU='<%=sIdWU%>' type="checkbox" value="<m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="WORK_UNIT"/>"/>
    </td>
  <% } %>

</tr>


</m4:dataloop>    

<tr class="tablaestadosceldatitulosin">
  <td colspan="9" align="left">&nbsp;&nbsp;&nbsp;</td>

</tr>

<tr class="tablaestadosceldatitulosin">
  <td colspan="11" align="left">&nbsp;&nbsp;&nbsp;<%=Mss_cr.getProperty("msscr.Tabla88")%>&nbsp;&nbsp;&nbsp;<m4:item item="SSM_COUNT_OF_EMPLOYEES" htmlsafe="true" outputdef="WORK_UNIT"/></td>

</tr>


<tr>
  <td class="fuenteboton"colspan="7" align="right">&nbsp;</td>
  <td class="fuenteboton"colspan="2" align="right"><a href="javascript:marcar_todos(<%=icount%>);" title="<%=Mss_cr.getProperty("msscr.Tabla124")%>"><img src="/iconos/icono_aceptar_todas_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Tabla124")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  <a href="javascript:desmarcar_todos(<%=icount%>);" title="<%=Mss_cr.getProperty("msscr.Pop5-21")%>"><img src="/iconos/icono_deshacer_mss_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop5-21")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
  <td class="fuenteboton">&nbsp;</td>

  <td class="fuenteboton" colspan="4">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a id="ppe" href="javascript:view_all_employees(<%=icount%>,<%=num_employees%>)" title="<%=Mss_cr.getProperty("msscr.Tabla79")%>"><img src="/iconos/ic_lis_36_36_2.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Tabla79")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>


  <td class="fuenteboton" colspan="4">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="javascript:m4selec_empleados(<%=icount%>,<%=num_employees%>)" title="<%=Mss_cr.getProperty("msscr.Confirm_ad172")%>"><img src="/iconos/icono_aceptar_mss_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad172")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>

<script language="JavaScript" xml:space="preserve">

  var num_employees = <%=num_employees%>;
  if (num_employees==0)
      alert("<%=Mss_cr.getProperty("msscr.Tabla126")%>");

</script>

<%
}else{%>
<div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.Negar")%><br><br>
</div>
<%}%> 

</form>

<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</body>
<m4:endpage/>

