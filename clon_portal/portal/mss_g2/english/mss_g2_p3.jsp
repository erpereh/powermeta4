<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title><%=Mss_cr.getProperty("msscr.Link1")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
estado="112";
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>

<%
   String zsubsesion = "SSM_SALARY_REVIEW_PROCESS";
   String zestado = "21";
%>

<script language="JavaScript" xml:space="preserve">


function comprobar_accion()
{

  if (confirm("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad")%>"))
    document.forms["redireccion"].submit();

}

function check_performance(num_reg)
{
    var form = document.forms["sel_rev"];
  var performance_selected = form.elements["SCO_ID_LEVEL"].value;
  var number_of_performace = form.elements["PERFORMANCE_NUMBER"].value;

  var error_text = "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad2")%>";
  var show_error = 0;
  if (num_reg > 0)
    for (var i = 0; i < num_reg; i++)
    {
       var sal_plan_tp = form.elements["HCO_CR_SPLAN_TP_ID_" + i].value; 
       var sal_plan_name = form.elements["HCO_CR_SALARY_P_NM_" + i].value; 

     if ((sal_plan_tp!="BASE")&& (form.elements["SEL_" + i].value=="AVAILABLE"))
     {


          if (form.elements["SEL_" + i].disabled==true)
        form.elements["SEL_" + i].disabled=false

      var level_required = form.elements["SCO_ID_LEVEL_SAL_PLAN_" + i].value;

// Localizamos el nombre correspondiente al nivel requerido

      var selected_item = form.SCO_ID_LEVEL.options.selectedIndex

      for (var located_name = 1; located_name <= number_of_performace; located_name++)
      {

        form.SCO_ID_LEVEL.options.selectedIndex = located_name;
        if (form.SCO_ID_LEVEL.options.value == level_required)
        {
          var level_required_name = document.sel_rev.SCO_ID_LEVEL.options[document.sel_rev.SCO_ID_LEVEL.selectedIndex].text;

        }
      }

// Dejamos la lista seleccionada donde estaba

      form.SCO_ID_LEVEL.options.selectedIndex = selected_item;

      if (level_required!="")
      {

        if (performance_selected=="POOR")
          if ((level_required=="NEEDS_IMP") || (level_required=="SATISFACT") || (level_required=="EXCELLENT") || (level_required=="OUTSTAND"))
        {
           error_text = error_text + "\n" + "<%=Mss_cr.getProperty("msscr.NOHTML_ID16-3")%>" + " " + sal_plan_name 
           error_text = error_text + "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad3")%>"  + " " + level_required_name;
           form.elements["SEL_" + i].checked=false;
           form.elements["SEL_" + i].disabled=true;
           show_error = 1;
        }

        if (performance_selected=="NEEDS_IMP")
          if ((level_required=="SATISFACT") || (level_required=="EXCELLENT") || (level_required=="OUTSTAND"))
        {
           error_text = error_text + "\n" + "<%=Mss_cr.getProperty("msscr.NOHTML_ID16-3")%>" + " " + sal_plan_name 
           error_text = error_text +  "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad3")%>" + " " + level_required_name;
           form.elements["SEL_" + i].checked=false;
           form.elements["SEL_" + i].disabled=true;
           show_error = 1;
        }

        if (performance_selected=="SATISFACT")
          if ((level_required=="EXCELLENT") || (level_required=="OUTSTAND"))
        {
           error_text = error_text + "\n" + "<%=Mss_cr.getProperty("msscr.NOHTML_ID16-3")%>" + " " + sal_plan_name 
           error_text = error_text + "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad3")%>" + " " + level_required_name;
           form.elements["SEL_" + i].checked=false;
           form.elements["SEL_" + i].disabled=true;
           show_error = 1;
        }

        if (performance_selected=="EXCELLENT")
          if (level_required=="OUTSTAND")
        {
           error_text = error_text + "\n" + "<%=Mss_cr.getProperty("msscr.NOHTML_ID16-3")%>" + " " + sal_plan_name 
           error_text = error_text + "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad3")%>" + " " + level_required_name;
           form.elements["SEL_" + i].checked=false;
           form.elements["SEL_" + i].disabled=true;
           show_error = 1;
        }
      }
    }
    }
     if (show_error==1)
    alert(error_text);
}

function desmarcar_todos(num_reg)
{
    var form = document.forms["sel_rev"];
  if (num_reg > 0)
    for (var i = 0; i < num_reg; i++)
    {
    form.elements["SEL_" + i].checked=false;

// Existe la posibilidad de que hayamos desactivado para revisar casillas pertencencientes a planes salariales que no se pueden revisar
// porque se ha seleccionado para revisar un plan variable denegado que depende de un fijo aprobado en las misma fehcas (mirar función 
// set_base_salary_dependant). Allí desactivamos campos que eran AVAILABLE. A la hora de desmarcar todos, tenemos que activar también 
// estas casillas.
    if (form.elements["SEL_" + i].value == "AVAILABLE")
      form.elements["SEL_" + i].disabled=false;

      }

// Reseteamos las propiedades que pasamos a la otra página para identificar si se presenta una situación como la explicada en el 
// comentario anterior

  form.elements["LAST_BASE_DEPENDANT_REVIEW_VAL"].value="";
  form.elements["LAST_BASE_DEPENDANT_REVIEW_CUR"].value="";
  form.elements["LAST_BASE_DEP_REVIEW_DT_START"].value="";
    form.elements["LAST_BASE_DEP_REVIEW_DT_END"].value="";

  form.elements["SCO_ID_LEVEL"].disabled="disabled";
  form.elements["SCO_ID_LEVEL"].value="0";
  form.elements["SCO_ID_LEVEL"].selectedIndex= 0;
    form.elements["ONLY_BUDGET_SAL_PLANS_TP"].value="0";

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

// Antes de terminar comprobamos si alguno de los planes salariales que tenemos utiliza un tipo de metodología diferente a Budget
// En este caso vamos a activar la lista para seleccionar la performance del empleado

   form.elements["ONLY_BUDGET_SAL_PLANS_TP"].value="0";
    for (var i = 0; i < num_reg; i++)
    {
      if(form.elements["SEL_" + i].checked==true)
      if (form.elements["HCO_CR_INC_TP_ID_" + i].value!="BUD")
      {
        form.elements["ONLY_BUDGET_SAL_PLANS_TP"].value="1";
        form.elements["SCO_ID_LEVEL"].disabled="";
      }
    }
}

function m4selec_salplans(num_reg)
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
      text_filter = text_filter + form.elements["HCO_CR_SALARY_P_ID_" + i].value + ";"
    else
      seleccionado = 1;
      }

    if (seleccionado == 0)
    {
      for (var i = 0; i < num_reg; i++)
    {
        if (form.elements["SEL_" + i].value== "AVAILABLE")
           form.elements["SEL_" + i].disabled = false;
    }

      alert("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad4")%>");
    return;
    }
    else
    {
    form.elements["FILTER"].value = text_filter;

    // Comprobamos si es necesario tener seleccionado una performance para el empleado

    if (form.elements["ONLY_BUDGET_SAL_PLANS_TP"].value!="0")   // Con esto sabemos si es necesario
    if (form.elements["SCO_ID_LEVEL"].value == "0")       // Con esto sabemos si la hemos seleccionado
    {
        for (var i = 0; i < num_reg; i++)
      {
          if (form.elements["SEL_" + i].value== "AVAILABLE")
             form.elements["SEL_" + i].disabled = false;
      }
        alert("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad32")%>");
      return;
    }

    form.submit();
    }
  }
}

  function view_sal_plan(sal_plan_id)
  {
    this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_sal.jsp?ID_SAL_PL=" + sal_plan_id;
    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=600";
    this.win= window.open(this.url, 'popup', attr);

  }

  function view_message()
  {
    this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp";
    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=300,height=350";
    this.win= window.open(this.url, 'popup', attr);
  }

  function view_message_2()
  {
    this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?BASE=4";
    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=550";
    this.win= window.open(this.url, 'popup', attr);
  }

  function view_details(sal_plan_id)
  {
    this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_pending.jsp?ID_SAL_PL=" + sal_plan_id;
    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=500,height=400";
    this.win= window.open(this.url, 'popup', attr);

  }

  function view_details_2()
  {
    this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?BASE=5";
    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=300,height=350";
    this.win= window.open(this.url, 'popup', attr);

  }

  function view_sal_grade()
  {
    this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_grade.jsp";
    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=500,height=250";
    this.win= window.open(this.url, 'popup', attr);
  }

  function set_base_salary_dependant(num_reg,num_tot_reg)
  {

    var form = document.forms["sel_rev"];
    var is_dependant = form.elements["HCO_CR_B_DEPENDANT_" + num_reg].value;
    var this_checked_plan_type = form.elements["HCO_CR_SPLAN_TP_ID_" + num_reg].value;

    if (this_checked_plan_type=="BASE")
    {
      if (form.elements["SEL_" + num_reg].checked==true)
      {
        there_are_only_budget(num_tot_reg);
        return;
      }
      else        
        for (var i = 0; i < num_tot_reg; i++)
        {
          if(form.elements["HCO_CR_B_DEPENDANT_" + i].value==1)
          form.elements["SEL_" + i].checked=false;
        }
    }
    else
    {
      if (is_dependant!=1)
      {
        there_are_only_budget(num_tot_reg);
      return;
        }

      var idx_base_sal_plan = form.elements["THIS_IS_BASE_PLAN"].value;

// En este momento estamos ante un plan salarial variables, que ha sido seleccionado y que es dependiente de un plan salarial base.
// Independientemente de si el plan salarial base del que depende está disponible o no, vamos a comprobar si este plan salarial base
// tiene una petición denegada en las mismas fechas que la última petición aprobada para el base. Para ello vamos a consultar los
// siguientes campos

      var value_dependant = form.elements["LAST_BASE_DEPENDANT_REVIEW_VAL_" + num_reg].value;
      value_dependant = parseInt(value_dependant)
      var value_currency_dependant = form.elements["LAST_BASE_DEPENDANT_REVIEW_CUR_" + num_reg].value;
      var fec_ini_dependant = form.elements["LAST_BASE_DEP_REVIEW_DT_START_" + num_reg].value;
      var fec_fin_dependant = form.elements["LAST_BASE_DEP_REVIEW_DT_END_" + num_reg].value;
      var text_dependant = form.elements["LAST_BASE_DEP_REVIEW_TEXT_" + num_reg].value;

      if (form.elements["SEL_" + num_reg].checked==false)
      {

// Lo primero que vamos a comprobar es si la casilla que hemos desmarcado corresponde a un plan salarial dependiente que tiene una 
// revisión denegada en las misma fechas que una revisión del fijo. En ese caso, volvemos a activar todas las casillas que desactivamos 
// en su momento

      if (value_dependant > 0)
      {
        desmarcar_todos(num_tot_reg);

// Reseteamos las propiedades que se pasan a la siguiente página para identificar la situación

        form.elements["LAST_BASE_DEPENDANT_REVIEW_VAL"].value="";
        form.elements["LAST_BASE_DEPENDANT_REVIEW_CUR"].value="";
        form.elements["LAST_BASE_DEP_REVIEW_DT_START"].value="";
        form.elements["LAST_BASE_DEP_REVIEW_DT_END"].value="";
      }

        there_are_only_budget(num_tot_reg);
      return;
        }


      if (value_dependant > 0)
      {

// Comprobamos si tenemos seleccionado el base correspondiente. En ese caso no vamos a hacer nada porque se van a revisar los dos a la 
// vez

      if (form.elements["SEL_" + idx_base_sal_plan].checked==true)
      {
          there_are_only_budget(num_tot_reg);
        return;
      }

// En caso  contrario, notificamos al usuario. En caso de que pulse aceptar, vamos a desactivar todo lo demás; solo se puede revisar este 
// plan

      if (confirm(text_dependant))
      {

        for (var j = 0; j < num_tot_reg; j++)
        {
          if (j != num_reg)
        { 
          form.elements["SEL_" + j].checked=false;
          form.elements["SEL_" + j].disabled=true;
        }

// Seteamos las propiedades que pasan a la otra pantalla para poder identificar allí que estamos en esta situación y comportarnos de la
// manera apropiada.
        form.elements["LAST_BASE_DEPENDANT_REVIEW_VAL"].value= value_dependant;
        form.elements["LAST_BASE_DEPENDANT_REVIEW_CUR"].value= value_currency_dependant;
        form.elements["LAST_BASE_DEP_REVIEW_DT_START"].value= fec_ini_dependant;
          form.elements["LAST_BASE_DEP_REVIEW_DT_END"].value= fec_fin_dependant;
        }

          there_are_only_budget(num_tot_reg);
        return;
      }

// En caso contrario, desactivamos el plan que acaba de pulsar

        form.elements["SEL_" + num_reg].checked=false;
          there_are_only_budget(num_tot_reg);
        return;
      }

      if (form.elements["SEL_" + idx_base_sal_plan].value== "AVAILABLE")
      form.elements["SEL_" + idx_base_sal_plan].checked=true;

      else
        {
        var name = form.elements["HCO_CR_SALARY_P_NM_" + idx_base_sal_plan].value;
        var name_variable = form.elements["HCO_CR_SALARY_P_NM_" + num_reg].value;
          var text = "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad6")%>" + " " + name;  
        text = text + "." + "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad6")%>";
        text = text + ". " + "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad7")%>" + "'" + name +  "'" + "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad8")%>";
        text = text + name_variable + " " +  "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad9")%>";
          alert(text);
        form.elements["SEL_" + num_reg].checked=false;
            }
    }
    there_are_only_budget(num_tot_reg)
  }

  function there_are_only_budget(num_total_reg)
  {

  // Comprobamos si alguno de los planes salariales que tenemos utiliza un tipo de metodología diferente a Budget
  // En este caso vamos a activar la lista para seleccionar la performance del empleado

   var form = document.forms["sel_rev"];
   form.elements["ONLY_BUDGET_SAL_PLANS_TP"].value="0";
    for (var i = 0; i < num_total_reg; i++)
    {
      if(form.elements["SEL_" + i].checked==true)
      {
      if (form.elements["HCO_CR_INC_TP_ID_" + i].value!="BUD")
      {
        form.elements["ONLY_BUDGET_SAL_PLANS_TP"].value="1";
        form.elements["SCO_ID_LEVEL"].disabled="";
        return;
      }
      }
    }
  
  // Si llegamos aquí es porque en el bucle anterior no se ha salido y, por lo tanto, hay que desactivar la lista.

  form.elements["SCO_ID_LEVEL"].disabled="disabled";
  form.elements["SCO_ID_LEVEL"].value="0";
  form.elements["SCO_ID_LEVEL"].selectedIndex= 0;
  }

  function show_help(cod_help)
  {
    this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=" + cod_help;
    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=1000";
    this.win= window.open(this.url, 'popup', attr);
  }

  function view_message_3(sal_plan)
  {
    this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?salary_plan=" + sal_plan + "&BASE=7";
    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=400,height=350";
    this.win= window.open(this.url, 'popup', attr);
  }
  function abrirFicha(empleado,ordinal,id_plan,fec_proc)
  {
    var dir="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p20.jsp?estado=31&SSM_ID_HR="+empleado+"&SSM_OR_HR_ROLE="+ordinal+"&SSM_ID_EVAL_PLAN="+id_plan+"&SSM_DT_START_PROC="+fec_proc;
    window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');
  }
</script>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_EMPLOYEE_SALARY_PLANS" m4alias="SAL_PLAN" m4object="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_INFO_COMES_FROM_ROLE" m4alias="EMPLEADO" m4object="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_PERFORMANCE_LEVEL_LIST" m4alias="PERFORMANCE" m4object="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_SALARY_REVIEW_PROCESS" m4alias="GENERAL" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_EMPLOYEE_SALARY_PLANS" alias="sal_plan_count" method="Count" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_PERFORMANCE_LEVEL_LIST" alias="performance_count" method="Count" m4object="<%=zsubsesion%>"/>

<m4:endjob/>

<table border="0" width="100%">
<tr>
  <td class="titulofuncional" colspan="2" width="90%"><%=Mss_cr.getProperty("msscr.Link1")%>
  </td>
  
      <td>
<a href="javascript:show_help(3)" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10")%>"><img alt="<%=Mss_cr.getProperty("msscr.Pop2-21")%>" src="/iconos/ic_help_25_31_0.gif" alt="<%=Mss_cr.getProperty("msscr.Pop3-21")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a>
     </td>
</tr>
  <tr>
    <td><img alt="<%=Mss_cr.getProperty("msscr.Pop9-20")%>" src="/iconos/noname_salariales_mss_58_100.gif" width="58" height="100" /></td>
    <td><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.Info-16")%>

    <m4:item m4varname="information" item="PROCESS_USEFUL_INFORMATION" htmlsafe="true" outputdef="EMPLEADO"/>

    <% if(information.equals("")) { %>
      </br>
    <%}else{%>
      </br>
      <u><%=Mss_cr.getProperty("msscr.Info2-16")%></u>&nbsp;
      <a href="javascript:view_message();" title="<%=Mss_cr.getProperty("msscr.Confirm_ad11")%>"><img src="/iconos/admiracion_blanco.gif" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad11")%>"/></a>
    <%}%>
    </div></td>
  </tr>
</table>

<table class="tablaestados" width="100%" cellspacing="0">
  <tr class="tablaestadosceldatitulo">
    <td colspan="1"><%=Mss_cr.getProperty("msscr.Info3-16")%></td>
    <td colspan="1"><%=Mss_cr.getProperty("msscr.Info4-16")%></td>
    <td colspan="1"><%=Mss_cr.getProperty("msscr.ID8-3")%></td>
    <td colspan="1"><%=Mss_cr.getProperty("msscr.Info5-16")%></td>
    <td colspan="1"><%=Mss_cr.getProperty("msscr.ID10-3")%></td>
  </tr>
  <tr>
    <td class="fuentevalor"><m4:item item="HR_ID" htmlsafe="true" outputdef="EMPLEADO"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="HR_NAME" htmlsafe="true" outputdef="EMPLEADO"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="ROLE_NAME" htmlsafe="true" outputdef="EMPLEADO"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="JOB_ID" htmlsafe="true" outputdef="EMPLEADO"/> - &nbsp;<m4:item item="JOB_NAME" htmlsafe="true" outputdef="EMPLEADO"/></td>
    <td class="fuentevalor"><a href="javascript:view_sal_grade()" shape="rect"><u><m4:item item="SALARY_GRADE_NAME" htmlsafe="true" outputdef="EMPLEADO"/></u></a></td>
  </tr>

  <tr class="tablaestadosceldatitulo">
    <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla1269")%></td>
    <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla1270")%></td>
    <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla1271")%></td>
    <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla1272")%></td>
    <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla1273")%></td>
  </tr>
  <tr>
    <td class="fuentevalor">&nbsp;<m4:item item="EMPLOYEE_PARTIAL_TIME_TXT" htmlsafe="true" outputdef="EMPLEADO"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="EMPLOYEE_PART_TIME_PERCENTAGE" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;%</td>
    <td class="fuentevalor">&nbsp;<m4:item item="EMPLOYEE_WORKING_HOURS" htmlsafe="true" outputdef="EMPLEADO"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="BASE_SALARY" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="BASE_SALARY_REAL" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></td>
  </tr>


</table>

<form name="redireccion" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?" method="post" enctype="application/x-www-form-urlencoded">
</form>

<form name="sel_rev" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_p.jsp?" method="post" enctype="application/x-www-form-urlencoded">

  <input name="FILTER" type="hidden"/>

  <input name="LAST_BASE_DEPENDANT_REVIEW_VAL" type="hidden" value=""/>
  <input name="LAST_BASE_DEPENDANT_REVIEW_CUR" type="hidden" value=""/>
  <input name="LAST_BASE_DEP_REVIEW_DT_START" type="hidden" value=""/>
  <input name="LAST_BASE_DEP_REVIEW_DT_END" type="hidden" value=""/>


  <% String count_2; %>
  <% int icount_2 = 0; %>
  <m4:outputexec var="count_2" alias="performance_count"/>
  <% try { icount_2 = Integer.parseInt(count_2); } catch(Exception e) { icount_2 = 0; }%>

  <input name="PERFORMANCE_NUMBER" type="hidden" disabled="disabled" value="<%=icount_2%>"/>


  <% String count; %>
  <% int icount = 0; %>
  <m4:outputexec var="count" alias="sal_plan_count"/>
  <% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%>

  <%if (icount > 0) {%>

    <table class="tablaestados" width="100%" cellspacing="0">
      <tr class="tablaestadosceldatitulo">
        <td colspan="1"><%=Mss_cr.getProperty("msscr.ID16-3")%></td>
        <td colspan="1"><%=Mss_cr.getProperty("msscr.ID55-3")%></td>
        <td colspan="1"><%=Mss_cr.getProperty("msscr.ID18-3")%></td>
        <td colspan="1"><%=Mss_cr.getProperty("msscr.ID19-3")%></td>
        <td colspan="1"><%=Mss_cr.getProperty("msscr.ID20-3")%></td>
        <td colspan="1"><%=Mss_cr.getProperty("msscr.ID21-3")%></td>
      </tr>

      <m4:dataloop outputdef="SAL_PLAN">

      <tr>

        <% Integer current; %>
        <m4:current var="current" outputdef="SAL_PLAN"/>

        <m4:item m4varname="id_plan_sal_var" item="HCO_CR_SALARY_P_ID" htmlsafe="true" outputdef="SAL_PLAN"/>
        <m4:item m4varname="id_plan_sal_tp" item="HCO_CR_SPLAN_TP_ID" htmlsafe="true" outputdef="SAL_PLAN"/>
        <m4:item m4varname="future_info" item="FUTURE_REVIEWS_INFORMATION" htmlsafe="true" outputdef="SAL_PLAN"/>
		<% String id_plan_sal_var_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", id_plan_sal_var);%>
		
        <% if(id_plan_sal_tp.equals("BASE")) { %>

          <input name="THIS_IS_BASE_PLAN" type="hidden" value='<%=(current)%>'/>

        <%}%>

        <td class="fuentevalor">

        <% if(!future_info.equals("")) {%>
          <a href= <%="javascript:view_message_3('" + id_plan_sal_var + "');"%>><img alt="<%=Mss_cr.getProperty("msscr.Pop1-20")%>" src="/iconos/advertencia_rojo.gif"/></a>
        <%}%>

        <a href="javascript:view_sal_plan('<%=id_plan_sal_var_Encr%>')" shape="rect"><m4:item item="HCO_CR_SALARY_P_ID" htmlsafe="true" outputdef="SAL_PLAN"/> - <m4:item item="HCO_CR_SALARY_P_NM" htmlsafe="true" outputdef="SAL_PLAN"/></a></td>

        <m4:item m4varname="zId_hr" item="HR_ID" htmlsafe="true" outputdef="EMPLEADO"/>
        <m4:item m4varname="zId_Or_hr" item="HR_ROLE_OR" htmlsafe="true" outputdef="EMPLEADO"/>
        <m4:item m4varname="zStartProc" item="SCO_DT_START_PROC" htmlsafe="true" outputdef="SAL_PLAN"/>
        <m4:item m4varname="zIdPlanEval" item="SCO_ID_EVAL_PLAN" htmlsafe="true" outputdef="SAL_PLAN"/>
        <m4:item m4varname="zNmEvalProc" item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="SAL_PLAN"/>
        <% if((zNmEvalProc==null)||(zNmEvalProc.equals(""))) { %>
          <td class="fuentevalor">&nbsp;-&nbsp;-&nbsp;-&nbsp;-</td>
        <%}else{%>
        <%zId_hr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zId_hr);
          zId_Or_hr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zId_Or_hr);
          zStartProc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zStartProc);%>   
        <td class="fuentevalor">&nbsp;<a href="" onclick="abrirFicha('<%=zId_hr%>','<%=zId_Or_hr%>','<%=zIdPlanEval%>','<%=zStartProc%>');return false;" shape="rect"><m4:item item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="SAL_PLAN"/></a></td>
        <%}%>
        <td class="fuentevalor">&nbsp;<m4:item item="HCO_CR_SPLAN_TP_NM" htmlsafe="true" outputdef="SAL_PLAN"/></td>

        <m4:item m4varname="plan_state" item="THIS_PLAN_STATE" htmlsafe="true" outputdef="SAL_PLAN"/>

        <% if(!plan_state.equals("")) { %>

          <% if(plan_state.equals("P")) { %>
            <td class="fuenteleyenda">&nbsp;<a href="javascript:view_details('<%=id_plan_sal_var%>')" shape="rect"><m4:item item="THIS_PLAN_MESSAGE" htmlsafe="true" outputdef="SAL_PLAN"/></a></td>
          <%}else{%>  

            <% if(plan_state.equals("N")) { %>
              <td class="fuenteleyenda">&nbsp;<a href="javascript:view_details_2()" shape="rect"><m4:item item="THIS_PLAN_MESSAGE" htmlsafe="true" outputdef="SAL_PLAN"/></a></td>
            <%}else{%>  
              <td class="fuenteleyenda">&nbsp;<m4:item item="THIS_PLAN_MESSAGE" htmlsafe="true" outputdef="SAL_PLAN"/></td>
            <%}%>

          <%}%>

        <%}else{%>
          <td class="fuentevalor">&nbsp;<m4:item item="CURRENT_REVIEW_VALUE" htmlsafe="true" outputdef="SAL_PLAN"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></td>
        <%}%>

        <m4:item m4varname="last_review_date" item="LAST_REVIEW" htmlsafe="true" outputdef="SAL_PLAN"/>

        <% if((last_review_date==null)||(last_review_date.equals(""))) { %>
          <td class="fuentevalor">&nbsp;-&nbsp;-&nbsp;-&nbsp;-</td>
        <%}else{%>
          <td class="fuentevalor">&nbsp;<m4:item item="LAST_REVIEW" htmlsafe="true" outputdef="SAL_PLAN"/></td>
        <%}%>

        <td class="fuentecampo" align="right">

        <% if((plan_state.equals("P"))||(plan_state.equals("N"))) { %>
          <input title="<%=Mss_cr.getProperty("msscr.Confirm_ad24")%>" name='<%= "SEL_" + (current)%>' id="<%= "SEL_" + (current)%>"  type="checkbox" disabled="disabled" value="NOT_AVAILABLE"/>
        <%}else{%>
          <input title="<%=Mss_cr.getProperty("msscr.Confirm_ad24")%>" name='<%= "SEL_" + (current)%>' id="<%= "SEL_" + (current)%>"  type="checkbox" value="AVAILABLE" onclick='<%= "set_base_salary_dependant(" + (current) + "," + (icount) + ")"%>'/>
        <%}%>

        <m4:input name='<%= "HCO_CR_SALARY_P_ID_"  + (current)%>' type="hidden"  disabled="disabled" ><m4:item item="HCO_CR_SALARY_P_ID"  htmlsafe="true"  outputdef="SAL_PLAN" /></m4:input>

        <m4:input name='<%= "SCO_ID_LEVEL_SAL_PLAN_"  + (current)%>' type="hidden"  disabled="disabled" ><m4:item item="SCO_ID_LEVEL"  htmlsafe="true"  outputdef="SAL_PLAN" /></m4:input>

        <m4:input name='<%= "HCO_CR_SPLAN_TP_ID_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="HCO_CR_SPLAN_TP_ID" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

        <m4:input name='<%= "HCO_CR_SALARY_P_NM_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="HCO_CR_SALARY_P_NM" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

        <m4:input name='<%= "HCO_CR_B_DEPENDANT_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="HCO_CR_B_DEPENDANT" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

        <m4:input name='<%= "HCO_CR_INC_TP_ID_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="HCO_CR_INC_TP_ID" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

        <m4:input name='<%= "LAST_BASE_DEPENDANT_REVIEW_VAL_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="LAST_BASE_DEPENDANT_REVIEW_VAL" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

        <m4:input name='<%= "LAST_BASE_DEPENDANT_REVIEW_CUR_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="LAST_BASE_DEPENDANT_REVIEW_CUR" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

        <m4:input name='<%= "LAST_BASE_DEP_REVIEW_DT_START_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="LAST_BASE_DEP_REVIEW_DT_START" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

        <m4:input name='<%= "LAST_BASE_DEP_REVIEW_DT_END_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="LAST_BASE_DEP_REVIEW_DT_END" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

        <m4:input name='<%= "LAST_BASE_DEP_REVIEW_TEXT_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="LAST_BASE_DEP_REVIEW_TEXT" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>
        </td>
      </tr>
      </m4:dataloop>    
      <input name="ONLY_BUDGET_SAL_PLANS_TP" disabled="disabled" type="hidden" value="0"/>
      <tr>
        <td class="fuentevalor" colspan="6">&nbsp;</td>
      </tr>
      <tr>
        <m4:item m4varname="html_control" item="HTML_SAL_PLANS_NOT_SELECTED" htmlsafe="true" outputdef="GENERAL"/>

        <% if(!html_control.equals("")) { %>

          <td class="fuentevalor" colspan="3">&nbsp;
          <u><%=Mss_cr.getProperty("msscr.Confirm_ad20")%></u>&nbsp;
          <a href="javascript:view_message_2();" title="<%=Mss_cr.getProperty("msscr.Confirm_ad11")%>"><img src="/iconos/advertencia_rojo.gif" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad11")%>"/></a></td>
        <%}else{%>
          <td class="fuentevalor" colspan="3">&nbsp;</td>   
        <%}%>

        <td class="fuenteboton" colspan="3"><a href="javascript:marcar_todos(<%=icount%>);" title="<%=Mss_cr.getProperty("msscr.Confirm_ad13")%>"><img src="/iconos/icono_aceptar_todas_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad13")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
        <a href="javascript:desmarcar_todos(<%=icount%>);" title="<%=Mss_cr.getProperty("msscr.Confirm_ad14")%>"><img src="/iconos/icono_deshacer_mss_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad14")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
      </tr>
      <tr class="tablaestadosceldatitulo">
        <td colspan="6"><%=Mss_cr.getProperty("msscr.Info6-16")%></td>
      </tr>
      <tr>
        <td class="fuentevalor" colspan="6">&nbsp;</td>
      </tr>
      <tr>
        <td class="fuentecampo" colspan="6">&nbsp;<%=Mss_cr.getProperty("msscr.Info7-16")%>&nbsp;&nbsp;&nbsp;&nbsp;
          <select id="SCO_ID_LEVEL" class="fuenteformulario200" name="SCO_ID_LEVEL" disabled = "disabled"
          title="<%=Mss_cr.getProperty("msscr.Confirm_ad15")%>" onchange="javascript:check_performance(<%=icount%>)">     
            <option value="0"><%=Mss_cr.getProperty("msscr.Info7-17")%></option>                
            <m4:dataloop outputdef="PERFORMANCE">
              <option value='<m4:item item="SCO_ID_LEVEL" htmlsafe="true" outputdef="PERFORMANCE"/>'><m4:item item="SCO_NM_LEVEL" htmlsafe="true" outputdef="PERFORMANCE"/></option>                
            </m4:dataloop>    
          </select>
        </td>
      </tr>
      <tr>
        <td class="fuenteboton" colspan="6">&nbsp;</td>
      </tr>
      <tr>
        <td class="fuenteboton"><a href="javascript:comprobar_accion();" title="<%=Mss_cr.getProperty("msscr.Confirm_ad16")%>"><img src="/iconos/ic_lis_36_36_2.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad16")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>

        <td class="fuenteboton"><a href="javascript:m4selec_salplans(<%=icount%>)" title="<%=Mss_cr.getProperty("msscr.Confirm_ad17")%>"><img src="/iconos/icono_siguiente_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad17")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

        <td class="fuenteboton" colspan="4" align="right">
        <a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_salto.jsp?control=0" title="<%=Mss_cr.getProperty("msscr.Confirm_ad18")%>"><img src="/iconos/user_2_next_32.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad18")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
        <a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_salto.jsp?control=1" title="<%=Mss_cr.getProperty("msscr.Confirm_ad19")%>"><img src="/iconos/group_next_32.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Confirm_ad19")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
      </tr>
    </table>
  <%}%>

</form>

<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</body>
<m4:endpage/>
