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
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
estado="112";
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

String last_base_vl = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lbv");
String last_base_cr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lbc");
String last_base_fi = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lbfi");
String last_base_ff = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lbff");
if ((last_base_vl==null)||(last_base_vl.equals("")))
{
  last_base_vl = "NOT_DEPENDANT";
}

%>
</head>
<body>
<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
   String zsubsesion = "SSM_SALARY_REVIEW_PROCESS";
%>

<script language="JavaScript" xml:space="preserve">

function comprobar_accion()
{
  if (confirm("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad1")%>"))
    document.forms["redireccion"].submit();
}

function exec_come_back()
{
  if (confirm("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad")%>"))
    document.forms["come_back"].submit();
}


function comprobar_salto(var_salto)
{

  if (confirm("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad33")%>"))
  {
    var form = document.forms["salto_empleado"];
    form.elements["control"].value = var_salto;
    form.submit();
  }
  
}

function set_final_results(num_reg)
{

  var form = document.forms["sel_rev"];
  form.elements["NUM_SAL_PLANS"].value = num_reg;

  var mensaje = "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad23")%>" + "\n";
  var zfechain = m4valor("sel_rev","START_DATE","","get")
  var zfechafin = m4valor("sel_rev","END_DATE","","get")
  var zfechain_role = m4valor("sel_rev","DT_ROLE_START","","get")
  var zfechafin_role = m4valor("sel_rev","DT_ROLE_END","","get")

  var falta_valor;

  if (zfechain != ''){
    if (""==m4fechacomprobacion(m4objeto('START_DATE','sel_rev'),false)){
      mensaje+="<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad24")%>" + "\n";
      falta_valor=1;
    } 
  }

  if (zfechafin != ''){
    if (""==m4fechacomprobacion(m4objeto('END_DATE','sel_rev'),false)){
      mensaje+="<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad24")%>" + "\n";
      falta_valor=1;
    }
    
  } 
  if (m4compfechas(m4objeto('START_DATE','sel_rev'),'>',m4objeto('END_DATE','sel_rev'))){
    mensaje+= "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad25")%>" + "\n";
    falta_valor=1;
  }

  if (m4compfechas(m4objeto('DT_ROLE_START','sel_rev'),'>',m4objeto('START_DATE','sel_rev'))){
    mensaje+= "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad34")%>" + "\n";
    falta_valor=1;
  }

  if (m4compfechas(m4objeto('END_DATE','sel_rev'),'>',m4objeto('DT_ROLE_END','sel_rev'))){
    mensaje+= "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad35")%>" + "\n";
    falta_valor=1;
  }

  var num_salary_plans_check = parseInt(form.elements["num_salary_plans"].value);

    var this_sal_plan_start_date = "";
    var this_sal_plan_end_date = "";

    var this_sal_plan_start_date_value = "";
    var this_sal_plan_end_date_value = "";


  for (var count_1 = 0; count_1 < num_salary_plans_check; count_1++)
  {
    this_sal_plan_start_date = "DT_START_PLAN_" + count_1;
    this_sal_plan_end_date = "DT_END_PLAN_" + count_1;

      this_sal_plan_start_date_value = form.elements["DT_START_PLAN_" + count_1].value;
    this_sal_plan_end_date_value = form.elements["DT_END_PLAN_" + count_1].value;

    if ((this_sal_plan_end_date_value == null)|| (this_sal_plan_end_date_value == ""))
      this_sal_plan_end_date_value = "01-01-4000"

// La fecha de inicio del periodo de revisión no puede ser mayor a la fecha de fin del plan

    if (m4compfechas(m4objeto('START_DATE','sel_rev'),'>',m4objeto(this_sal_plan_end_date,'sel_rev')))
    {
      mensaje+= "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad38_2")%>" + "\n";
      mensaje+= form.elements["HCO_CR_SALARY_P_NM_" + count_1].value + "  " + this_sal_plan_start_date_value + "  -  " + this_sal_plan_end_date_value+ "\n";
      falta_valor=1;
    }

// La fecha de inicio del periodo de revisión no puede ser anterior a la fecha de inicio del plan
// Pero si permitimos que la fecha de fin del periodo de revisión sea mayor que la fecha de fin del plan porque no indica vigencia
// sino que indica condiciones que se aplican a día de hoy para revisar, independientemente de hasta dónde se marche la fecha de fin
// de la revisión

    if (m4compfechas(m4objeto(this_sal_plan_start_date,'sel_rev'),'>',m4objeto('START_DATE','sel_rev')))
    {
      mensaje+= "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad37_1")%>" + "\n";
      mensaje+= form.elements["HCO_CR_SALARY_P_NM_" + count_1].value + "  " + this_sal_plan_start_date_value + "  -  " + this_sal_plan_end_date_value+ "\n";
      falta_valor=1;
    }

  }

    var this_sal_plan_last_start_date = "";
  for (var count = 0; count < num_salary_plans_check; count++)
  {
    this_sal_plan_last_start_date = "LAST_REVIEW_DT_START_" + count
    if (m4compfechas(m4objeto(this_sal_plan_last_start_date,'sel_rev'),'>',m4objeto('START_DATE','sel_rev')))
    {
      mensaje+= "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad26")%>" + "\n";
      mensaje+= "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad27")%>" + "\n";
      mensaje+="<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad28")%>" + " " + "\n";
      mensaje+= form.elements["HCO_CR_SALARY_P_NM_" + count].value + "\n";
      falta_valor=1;
    }
  }

  if (1==falta_valor){
    alert(mensaje)
    return };
  
    for (var i = 0; i < num_reg; i++)
  {
    form.elements["DIF_INC_AMOUNT_" + i].disabled = true;
    form.elements["DIF_INC_PERCENTAGE_" + i].disabled = true;
    form.elements["DIF_INC_AMOUNT_MNG_" + i].disabled = true;
    form.elements["DIF_INC_PERCENTAGE_MNG_" + i].disabled = true;
  }

  form.submit();

}

function set_range_data(value_input,num_reg)
{
    var form = document.forms["sel_rev"];

// Recuperamos el valor correspondiente al factor de conversión del empleado, para ser capaces de convertir el salario del empleado
// en su base de compensaciones, a la base de compensaciones de la estructura de salario y, de esta manera, poder calcular el 
// comparatio y el porcentaje de penetración dentro le grado. En caso de que el factor de conversión sea -1 no vamos a poder hacer
// esta conversión y salimos del método.

    var emp_change_factor = form.elements["CHANGE_FACTOR"].value;
    emp_change_factor = Math.round(parseFloat(emp_change_factor) * 100) / 100;
    if (emp_change_factor==-1)
    return;
    var midpoint = form.elements["SALARY_GRADE_MIDPOINT"].value;
    var maximum = form.elements["SALARY_GRADE_MAX_SALARY"].value;
    var minimum = form.elements["SALARY_GRADE_MIN_SALARY"].value;
    var value_salary = form.elements["BASE_SALARY"].value;
      value_salary = Math.round(parseFloat(value_salary) * 100) / 100;
      value_input = Math.round(parseFloat(value_input + value_salary) * 100) / 100;
    value_input = Math.round(parseFloat(value_input * emp_change_factor) * 100) / 100;
      maximum = Math.round(parseFloat(maximum) * 1) / 1;
      minimum = Math.round(parseFloat(minimum) * 1) / 1;

    var new_comparatio = 100*(value_input/midpoint)
      new_comparatio = Math.round(parseFloat(new_comparatio) * 1) / 1;
    new_comparatio = new_comparatio + " %";
      
    var penetration_num = Math.round(parseFloat(value_input - minimum) * 1) / 1;
    var penetration_den = Math.round(parseFloat(maximum - minimum) * 1) / 1;
    var new_penetration = 100*(penetration_num/penetration_den);
      new_penetration = Math.round(parseFloat(new_penetration) * 1) / 1;
      new_penetration = new_penetration + " %";

    form.elements["NEW_COMPARATIO_MNG_" + num_reg].value = new_comparatio;
    form.elements["NEW_GRADE_PENETRATION_MNG_" + num_reg].value = new_penetration;
}

function set_base_salary_per(num_reg,num_tot_reg)
{

// Función que se ejecuta en el caso de setear una cantidad de aumento para el salario base. Se van a calcular una serie de valores
// para su visualización en pantalla.

    var form = document.forms["sel_rev"];
    var current_value = form.elements["BASE_SALARY"].value;
    var sal_plan_type = form.elements["HCO_CR_SPLAN_TP_ID_" + num_reg].value;
    var value_manager = form.elements["INC_AMOUNT_MNG_" + num_reg].value;
    var value_manager_old = form.elements["INC_AMOUNT_MNG_HD_" + num_reg].value;
    var total_cash = form.elements["TOTAL_MANAGER_CASH_HD"].value;
    var control_var = form.elements["NO_SAL_BASE"].value;

    var full_time_working = form.elements["BASE_FULL_TIME"].value;
    var working_percentage = form.elements["BASE_WORKING_PERCENTAGE"].value;
    working_percentage = Math.round(parseFloat(working_percentage) * 100) / 100.00;

    if (full_time_working == "0"){
      var current_value_real = form.elements["CURRENT_BASE_SALARY_REAL"].value;}

    value_manager = Math.round(parseFloat(value_manager) * 100) / 100.00;
    value_manager_old = Math.round(parseFloat(value_manager_old) * 100) / 100.00;
    
    if ((isNaN(value_manager)==true) || (value_manager <= 0))
    {

      form.elements["INC_AMOUNT_MNG_" + num_reg].value = form.elements["INC_AMOUNT_MNG_HD_" + num_reg].value
      alert("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad36")%>");
      return;
    }

// En caso de que no tengamos salario base para el empleado, la cantidad propuesta por las guidelines se iguala a cero en cualquier caso

    if (control_var=="0") 
      var total_cash_guideline = form.elements["TOTAL_GUIDELINE_CASH_HD"].value;
    else
      var total_cash_guideline = 0;

    total_cash = Math.round(parseFloat(total_cash) * 100) / 100.00;
      total_cash = Math.round(parseFloat(value_manager + total_cash - value_manager_old) * 100) / 100;
    total_cash_guideline = Math.round(parseFloat(total_cash_guideline) * 100) / 100.00;
      var over_under = Math.round(parseFloat(total_cash - total_cash_guideline) * 100) / 100;

    if (control_var=="0") 
    {
      var new_percentage =  (value_manager/current_value)*100.00
      new_percentage = Math.round(parseFloat(new_percentage) * 100) / 100.00;
      form.elements["INC_PERCENTAGE_MNG_" + num_reg].value = new_percentage;
    }
    else
    {
      var new_percentage = 0
      new_percentage = Math.round(parseFloat(new_percentage) * 100) / 100.00;
      form.elements["INC_PERCENTAGE_MNG_" + num_reg].value = new_percentage;
    }

    form.elements["INC_AMOUNT_MNG_" + num_reg].value = value_manager;
    form.elements["INC_AMOUNT_MNG_HD_" + num_reg].value = value_manager;


    if (full_time_working == "0")
    {
        new_real_value = Math.round(parseFloat(working_percentage * value_manager)) / 100.00;
      form.elements["INC_AMOUNT_MNG_REAL_" + num_reg].value = new_real_value;
      form.elements["INC_AMOUNT_MNG_HD_REAL_" + num_reg].value = new_real_value;
    }

    value_manager = Math.round(parseFloat(value_manager) * 100) / 100.00
    current_value = Math.round(parseFloat(current_value) * 100) / 100.00
    var tot_sum = Math.round(parseFloat(value_manager + current_value) * 100) / 100; 

    if (full_time_working == "0")
    {
      new_real_value = Math.round(parseFloat(new_real_value) * 100) / 100.00
      current_value_real = Math.round(parseFloat(current_value_real) * 100) / 100.00
      var tot_sum_real = Math.round(parseFloat(new_real_value + current_value_real) * 100) / 100; 
    }

    form.elements["VALUE_FOR_CLC"].value = tot_sum;


    for (var i = 0; i < num_tot_reg; i++)
    {
        var sal_plan_type_new = form.elements["HCO_CR_SPLAN_TP_ID_" + i].value;
      if (sal_plan_type_new!="BASE")
      {
        form.elements["INC_PERCENTAGE_MNG_" + i].value = 0;
        form.elements["INC_AMOUNT_MNG_" + i].value = 0;
        form.elements["INC_AMOUNT_MNG_HD_" + i].value = 0;
        form.elements["DIF_INC_PERCENTAGE_MNG_" + i].value = 0;
        form.elements["DIF_INC_AMOUNT_MNG_" + i].value = 0;
      }
    }

    form.elements["TOTAL_MANAGER_CASH_HD"].value = value_manager;
    form.elements["TOTAL_MANAGER_CASH"].value = value_manager + " " + form.elements["BASE_SALARY_CURRENCY"].value;

    total_cash_guideline = Math.round(parseFloat(total_cash_guideline) * 100) / 100.00;
    var over_under_new = Math.round(parseFloat(value_manager - total_cash_guideline) * 100) / 100;
    form.elements["AMOUNT_OVER_UNDER_HD"].value = over_under_new;
    form.elements["AMOUNT_OVER_UNDER"].value = over_under_new + " " + form.elements["BASE_SALARY_CURRENCY"].value;


    if (full_time_working == "0")
    {
        value_manager_real = Math.round(parseFloat(working_percentage * value_manager)) / 100.00;
        over_under_new_real = Math.round(parseFloat(working_percentage * over_under_new)) / 100.00;
    }
    else
    {
        value_manager_real = value_manager;
        over_under_new_real = over_under_new;
    }

    form.elements["TOTAL_MANAGER_CASH_HD_REAL"].value = value_manager_real;
    form.elements["TOTAL_MANAGER_CASH_REAL"].value = value_manager_real + " " + form.elements["BASE_SALARY_CURRENCY"].value;

    form.elements["AMOUNT_OVER_UNDER_HD_REAL"].value = over_under_new_real;
    form.elements["AMOUNT_OVER_UNDER_REAL"].value = over_under_new_real + " " + form.elements["BASE_SALARY_CURRENCY"].value;


// No tenemos total de guideline, por lo que no se setea el porcentaje de aumento/disminución

    if (control_var=="0") 
    {
        var change_percentage_new = Math.round(parseFloat((value_manager/total_cash_guideline) * 100)-100)*100 / 100;
      form.elements["PERCENTAGE_OVER_UNDER"].value = change_percentage_new + " %";
    }

    form.elements["SAL_TOT_BASE"].value = tot_sum + " " + form.elements["BASE_SALARY_CURRENCY"].value;
    if (full_time_working == "0"){
      form.elements["SAL_TOT_BASE_REAL"].value = tot_sum_real + " " + form.elements["BASE_SALARY_CURRENCY"].value;}

    set_range_data(value_manager,num_reg);  
}

function set_base_salary_per_real(num_reg,num_tot_reg)
{

// Función que se ejecuta en el caso de setear una cantidad de aumento para el salario base. Se van a calcular una serie de valores
// para su visualización en pantalla.

    var form = document.forms["sel_rev"];
    var current_value = form.elements["BASE_SALARY"].value;
    var sal_plan_type = form.elements["HCO_CR_SPLAN_TP_ID_" + num_reg].value;
    var value_manager_real = form.elements["INC_AMOUNT_MNG_REAL_" + num_reg].value;
    var working_percentage = form.elements["BASE_WORKING_PERCENTAGE"].value;

    working_percentage = Math.round(parseFloat(working_percentage) * 100) / 100.00;
    value_manager_real = Math.round(parseFloat(value_manager_real) * 100) / 100.00;

    value_manager = Math.round(parseFloat(value_manager_real) * 100) / working_percentage;

    value_manager = Math.round(parseFloat(value_manager) * 100) / 100.00;

    form.elements["INC_AMOUNT_MNG_" + num_reg].value = value_manager;
    set_base_salary_per(num_reg,num_tot_reg)
}

function set_base_salary_amount(num_reg,num_tot_reg)
{
    var form = document.forms["sel_rev"];
    var current_value = form.elements["BASE_SALARY"].value;
    var percent_manager = form.elements["INC_PERCENTAGE_MNG_" + num_reg].value;
    var sal_plan_type = form.elements["HCO_CR_SPLAN_TP_ID_" + num_reg].value;
    var value_manager_old = form.elements["INC_AMOUNT_MNG_HD_" + num_reg].value;
    var total_cash_guideline = form.elements["TOTAL_GUIDELINE_CASH_HD"].value;
    percent_manager = Math.round(parseFloat(percent_manager) * 100) / 100.00;

    var full_time_working = form.elements["BASE_FULL_TIME"].value;

    if ((isNaN(percent_manager)==true) || (percent_manager <= 0))
    {
      alert("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad36")%>");
      var new_value = 0;
    percent_manager = 0;
    }
    else
        var new_value = (current_value*percent_manager)/100.00;

    new_value = Math.round(parseFloat(new_value) * 100) / 100.00;
    value_manager_old = Math.round(parseFloat(value_manager_old) * 100) / 100.00;

    total_cash_guideline = Math.round(parseFloat(total_cash_guideline) * 100) / 100.00;
      var over_under = Math.round(parseFloat(new_value - total_cash_guideline) * 100) / 100;

    form.elements["INC_AMOUNT_MNG_" + num_reg].value = new_value;
    form.elements["INC_PERCENTAGE_MNG_" + num_reg].value = percent_manager;
    form.elements["INC_AMOUNT_MNG_HD_" + num_reg].value = new_value;

    current_value = Math.round(parseFloat(current_value) * 100) / 100.00;
    var tot_sum = Math.round(parseFloat(new_value + current_value) * 100) / 100; 

    form.elements["VALUE_FOR_CLC"].value = tot_sum;

    for (var i = 0; i < num_tot_reg; i++)
    {
        var sal_plan_type_new = form.elements["HCO_CR_SPLAN_TP_ID_" + i].value;
      if (sal_plan_type_new!="BASE")
      {
        form.elements["INC_PERCENTAGE_MNG_" + i].value = 0;
        form.elements["INC_AMOUNT_MNG_" + i].value = 0;
        form.elements["INC_AMOUNT_MNG_HD_" + i].value = 0;
        form.elements["DIF_INC_PERCENTAGE_MNG_" + i].value = 0;
        form.elements["DIF_INC_AMOUNT_MNG_" + i].value = 0;
      }
    }

    form.elements["TOTAL_MANAGER_CASH_HD"].value = new_value;
    form.elements["TOTAL_MANAGER_CASH"].value = new_value + " " + form.elements["BASE_SALARY_CURRENCY"].value;
    form.elements["AMOUNT_OVER_UNDER_HD"].value = over_under;
    form.elements["AMOUNT_OVER_UNDER"].value = over_under + " " + form.elements["BASE_SALARY_CURRENCY"].value;
      var change_percentage = Math.round(parseFloat((new_value/total_cash_guideline) * 100)-100)*100 / 100;
    form.elements["PERCENTAGE_OVER_UNDER"].value = change_percentage + " %";

    form.elements["SAL_TOT_BASE"].value = tot_sum + form.elements["BASE_SALARY_CURRENCY"].value;


    if (full_time_working == "0")
    {
      var working_percentage = form.elements["BASE_WORKING_PERCENTAGE"].value;
      working_percentage = Math.round(parseFloat(working_percentage) * 100) / 100.00;
        new_value_real = Math.round(parseFloat(working_percentage * new_value)) / 100.00;
        over_under_real = Math.round(parseFloat(working_percentage * over_under)) / 100.00;
        tot_sum_real = Math.round(parseFloat(working_percentage * tot_sum)) / 100.00;
    }
    else
    {
        new_value_real = new_value;
        over_under_real = over_under;
        tot_sum_real = tot_sum;
    }

    form.elements["TOTAL_MANAGER_CASH_HD_REAL"].value = new_value_real;
    form.elements["TOTAL_MANAGER_CASH_REAL"].value = new_value_real + " " + form.elements["BASE_SALARY_CURRENCY"].value;

    form.elements["AMOUNT_OVER_UNDER_HD_REAL"].value = over_under_real;
    form.elements["AMOUNT_OVER_UNDER_HD_REAL"].value = over_under_real + " " + form.elements["BASE_SALARY_CURRENCY"].value;


    form.elements["SAL_TOT_BASE_REAL"].value = tot_sum_real + form.elements["BASE_SALARY_CURRENCY"].value;


    if (full_time_working == "0"){
      set_base_salary_per(num_reg,num_tot_reg);}

    set_range_data(new_value,num_reg);
}

function set_base_salary_per_var_real(operation,num_reg)
{

// Función que se ejecuta en el caso de setear una cantidad de aumento para el salario base. Se van a calcular una serie de valores
// para su visualización en pantalla.

    var form = document.forms["sel_rev"];
    var value_manager_real = form.elements["INC_AMOUNT_MNG_REAL_" + num_reg].value;
    var working_percentage = form.elements["BASE_WORKING_PERCENTAGE"].value;

    working_percentage = Math.round(parseFloat(working_percentage) * 100) / 100.00;
    value_manager_real = Math.round(parseFloat(value_manager_real) * 100) / 100.00;
    value_manager = Math.round(parseFloat(value_manager_real) * 100) / working_percentage;
    value_manager = Math.round(parseFloat(value_manager) * 100) / 100.00;
    form.elements["INC_AMOUNT_MNG_" + num_reg].value = value_manager;
    set_base_salary_per_var(operation,num_reg)
}

function set_base_salary_per_var(operation,num_reg)
{

    var form = document.forms["sel_rev"];
    var current_value = form.elements["VALUE_FOR_CLC"].value;
    var sal_plan_type = form.elements["HCO_CR_SPLAN_TP_ID_" + num_reg].value;
    var value_manager = form.elements["INC_AMOUNT_MNG_" + num_reg].value;
    var value_manager_dif = form.elements["DIF_INC_AMOUNT_MNG_" + num_reg].value;
    var value_manager_old = form.elements["INC_AMOUNT_MNG_HD_" + num_reg].value;
    var total_cash = form.elements["TOTAL_MANAGER_CASH_HD"].value;
    var control_var = form.elements["NO_SAL_BASE"].value;
    var max_increase_porc = form.elements["HCO_CR_MAX_B_PORC_" + num_reg].value;

    var full_time_working = form.elements["BASE_FULL_TIME"].value;
    var working_percentage = form.elements["BASE_WORKING_PERCENTAGE"].value;
    working_percentage = Math.round(parseFloat(working_percentage) * 100) / 100.00;

    if (full_time_working =="0"){
      var current_value_real = form.elements["CURRENT_BASE_SALARY_REAL"].value;
      var value_manager_old_real = form.elements["INC_AMOUNT_MNG_HD_REAL_" + num_reg].value;
    }

    value_manager = Math.round(parseFloat(value_manager) * 100) / 100.00;
    if (operation == 0)
      if ((isNaN(value_manager)==true) || (value_manager < 0))
      {
      alert("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad36")%>");
      value_manager = 0;
      }

    value_manager_dif = Math.round(parseFloat(value_manager_dif) * 100) / 100.00;
    if (operation != 0)
      if ((isNaN(value_manager_dif)==true) || (value_manager_dif < 0))
      {
      alert("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad36")%>");
      value_manager_dif = 0;
      }

    if (control_var=="0") 
      var total_cash_guideline = form.elements["TOTAL_GUIDELINE_CASH_HD"].value;
    else
      var total_cash_guideline = 0;

//    var this_plan_value = form.elements["CURRENT_REVIEW_VALUE_" + num_reg].value;
    var this_plan_value = form.elements["CURRENT_PAID_VALUE_" + num_reg].value;
    var there_is_sal_base = form.elements["THERE_IS_BASE_SALARY"].value;

    if (there_is_sal_base==1)
    {
    if (current_value == 0)
      {
      alert("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad29")%>");
        form.elements["INC_AMOUNT_MNG_" + num_reg].value = 0;
        form.elements["INC_AMOUNT_MNG_HD_" + num_reg].value = 0;
      return;
      }
    }
    else

// Si no hay salario base, entonces el salario para calcular puede ser, o bien el salario base o bien el salario correspondiente
// a la última revisión de salario base aprobado si es que estoy revisando un variable dependiente que se denegó y el base se aprobó.
// Eso me lo va a decir la variable last_base_vl que es una variable de entrada a esta página

    {
    var base_dependand_approved = form.elements["BASE_SALARY_APRROVED_DEPENDANT"].value;
    if (parseInt(base_dependand_approved) > 0)
        var current_value = base_dependand_approved;
    else
        var current_value = form.elements["BASE_SALARY"].value;
    }
    max_increase_porc = Math.round(parseFloat(max_increase_porc) * 100) / 100.00;
    var text_error ="<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad30")%>" + " " + max_increase_porc;
    text_error = text_error + "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad31")%>";

    if (operation == 0)
    {
      value_manager_old = Math.round(parseFloat(value_manager_old) * 100) / 100.00;
      if (full_time_working=="0"){
        value_manager_old_real = Math.round(parseFloat(value_manager_old_real) * 100) / 100.00;}

      total_cash = Math.round(parseFloat(total_cash) * 100) / 100.00;
      this_plan_value = Math.round(parseFloat(this_plan_value) * 100) / 100.00;

        var this_plan_dif = Math.round(parseFloat(value_manager - this_plan_value) * 100) / 100;

// Comprobamos que no se hagan divisiones por cero

      if (this_plan_value == 0)
        var this_plan_dif_per = 0;
      else
        var this_plan_dif_per = Math.round(parseFloat(((this_plan_dif/this_plan_value))*100) * 100) / 100;

        total_cash = Math.round(parseFloat(this_plan_dif + total_cash - value_manager_old) * 100) / 100;
      total_cash_guideline = Math.round(parseFloat(total_cash_guideline) * 100) / 100.00;

        var over_under = Math.round(parseFloat(total_cash - total_cash_guideline) * 100) / 100;

      if (current_value == 0)
        var new_percentage =  0;
          else
        var new_percentage =  (value_manager/current_value)*100.00;

      new_percentage = Math.round(parseFloat(new_percentage) * 100) / 100.00;

      if ((max_increase_porc >0) && (max_increase_porc!=null) && (max_increase_porc < new_percentage))  
      {
        form.elements["INC_AMOUNT_MNG_" + num_reg].value = value_manager_old;
          if (full_time_working=="0"){
          form.elements["INC_AMOUNT_MNG_REAL_" + num_reg].value = value_manager_old_real;}
          alert(text_error)
        return;
      }

      if (this_plan_value == 0)
      {
        form.elements["DIF_INC_PERCENTAGE_MNG_" + num_reg].value = new_percentage;
        form.elements["INC_AMOUNT_MNG_" + num_reg].value = value_manager;
        form.elements["INC_AMOUNT_MNG_HD_" + num_reg].value = value_manager;
        form.elements["DIF_INC_AMOUNT_MNG_" + num_reg].value = value_manager;
        form.elements["INC_PERCENTAGE_MNG_" + num_reg].value = 0;

        if (full_time_working == "0")
        {
            new_real_value = Math.round(parseFloat(working_percentage * value_manager)) / 100.00;
          form.elements["INC_AMOUNT_MNG_REAL_" + num_reg].value = new_real_value;
          form.elements["INC_AMOUNT_MNG_HD_REAL_" + num_reg].value = new_real_value;
            form.elements["DIF_INC_AMOUNT_MNG_REAL_" + num_reg].value = new_real_value;
        }

      }
      else
      {
        form.elements["DIF_INC_PERCENTAGE_MNG_" + num_reg].value = new_percentage;
        form.elements["INC_AMOUNT_MNG_" + num_reg].value = value_manager;
        form.elements["INC_AMOUNT_MNG_HD_" + num_reg].value = this_plan_dif;
        form.elements["DIF_INC_AMOUNT_MNG_" + num_reg].value = this_plan_dif;
        form.elements["INC_PERCENTAGE_MNG_" + num_reg].value = this_plan_dif_per;

        if (full_time_working == "0")
        {
            new_real_value = Math.round(parseFloat(working_percentage * value_manager)) / 100.00;
          this_plan_dif_real = Math.round(parseFloat(working_percentage * this_plan_dif)) / 100.00;
          form.elements["INC_AMOUNT_MNG_REAL_" + num_reg].value = new_real_value;
          form.elements["INC_AMOUNT_MNG_HD_REAL_" + num_reg].value = this_plan_dif_real;
          form.elements["DIF_INC_AMOUNT_MNG_REAL_" + num_reg].value = this_plan_dif_real;
        }
      }
    }

    if (operation == 1)
    {
      this_plan_value = Math.round(parseFloat(this_plan_value) * 100) / 100.00;
      value_manager = Math.round(parseFloat(value_manager_dif + this_plan_value) * 100) / 100.00;
      value_manager_old = Math.round(parseFloat(value_manager_old) * 100) / 100.00;
      total_cash = Math.round(parseFloat(total_cash) * 100) / 100.00;

      if (this_plan_value==0)
        var this_plan_dif_per = 0;
      else
        var this_plan_dif_per = Math.round(parseFloat(((value_manager_dif/this_plan_value))*100) * 100) / 100;

        total_cash = Math.round(parseFloat(value_manager_dif + total_cash - value_manager_old) * 100) / 100;
      total_cash_guideline = Math.round(parseFloat(total_cash_guideline) * 100) / 100.00;

        var over_under = Math.round(parseFloat(total_cash - total_cash_guideline) * 100) / 100;

      if (current_value==0)
      var new_percentage = 0;
        else
      var new_percentage = (value_manager/current_value)*100.00

      new_percentage = Math.round(parseFloat(new_percentage) * 100) / 100.00;

      if ((max_increase_porc >0) && (max_increase_porc!=null) && (max_increase_porc < new_percentage))  
      {
        var set_value_again = Math.round(parseFloat(value_manager_old - current_value) * 100) / 100;
      form.elements["DIF_INC_AMOUNT_MNG_" + num_reg].value = set_value_again
      if (full_time_working == "0")
      {
        set_value_again_real = Math.round(parseFloat(working_percentage * set_value_again)) / 100.00;
        form.elements["DIF_INC_AMOUNT_MNG_REAL_" + num_reg].value = set_value_again_real;
      }

          alert(text_error)
      return;
      }

      if (this_plan_value == 0)
      {
        form.elements["DIF_INC_PERCENTAGE_MNG_" + num_reg].value = new_percentage;
        form.elements["INC_AMOUNT_MNG_" + num_reg].value = value_manager;
        form.elements["INC_AMOUNT_MNG_HD_" + num_reg].value = value_manager;
        form.elements["DIF_INC_AMOUNT_MNG_" + num_reg].value = value_manager;
        form.elements["INC_PERCENTAGE_MNG_" + num_reg].value = this_plan_dif_per;

        if (full_time_working == "0")
        {
            new_real_value = Math.round(parseFloat(working_percentage * value_manager)) / 100.00;
          form.elements["INC_AMOUNT_MNG_REAL_" + num_reg].value = new_real_value;
          form.elements["INC_AMOUNT_MNG_HD_REAL_" + num_reg].value = new_real_value;
          form.elements["DIF_INC_AMOUNT_MNG_REAL_" + num_reg].value = new_real_value;

        }
      }
      else
        {

        form.elements["DIF_INC_PERCENTAGE_MNG_" + num_reg].value = new_percentage;
        form.elements["INC_AMOUNT_MNG_" + num_reg].value = value_manager;
        form.elements["INC_AMOUNT_MNG_HD_" + num_reg].value = value_manager_dif;
        form.elements["DIF_INC_AMOUNT_MNG_" + num_reg].value = value_manager_dif;
        form.elements["INC_PERCENTAGE_MNG_" + num_reg].value = this_plan_dif_per;

        if (full_time_working == "0")
        {
            value_manager_dif_real = Math.round(parseFloat(working_percentage * value_manager_dif)) / 100.00;
            new_real_value = Math.round(parseFloat(working_percentage * value_manager)) / 100.00;

          form.elements["INC_AMOUNT_MNG_REAL_" + num_reg].value = new_real_value;
          form.elements["INC_AMOUNT_MNG_HD_REAL_" + num_reg].value = value_manager_dif_real;
          form.elements["DIF_INC_AMOUNT_MNG_REAL_" + num_reg].value = value_manager_dif_real;

        }

      }

    }

    set_total_results()

}


function set_base_salary_amount_var(operation,num_reg)
{


    var form = document.forms["sel_rev"];
    var current_value = form.elements["VALUE_FOR_CLC"].value;
    var percent_manager = form.elements["DIF_INC_PERCENTAGE_MNG_" + num_reg].value;
    var percent_manager_inc = form.elements["INC_PERCENTAGE_MNG_" + num_reg].value;
    var sal_plan_type = form.elements["HCO_CR_SPLAN_TP_ID_" + num_reg].value;
    var value_manager_old = form.elements["INC_AMOUNT_MNG_HD_" + num_reg].value;
    var control_var = form.elements["NO_SAL_BASE"].value;
    var max_increase_porc = form.elements["HCO_CR_MAX_B_PORC_" + num_reg].value;

    var full_time_working = form.elements["BASE_FULL_TIME"].value;
    var working_percentage = form.elements["BASE_WORKING_PERCENTAGE"].value;
    working_percentage = Math.round(parseFloat(working_percentage) * 100) / 100.00;

    if (full_time_working =="0"){
      var current_value_real = form.elements["CURRENT_BASE_SALARY_REAL"].value;
      var value_manager_old_real = form.elements["INC_AMOUNT_MNG_HD_REAL_" + num_reg].value;
    }

    percent_manager = Math.round(parseFloat(percent_manager) * 100) / 100.00;
    if (operation == 0)
      if ((isNaN(percent_manager)==true) || (percent_manager < 0))
      {
      alert("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad36")%>");
      form.elements["INC_AMOUNT_MNG_" + num_reg].value = 0;

        if (full_time_working =="0"){
        form.elements["INC_AMOUNT_MNG_REAL_" + num_reg].value = 0;
      }
      set_base_salary_per_var(0,num_reg)
      return;
      }

    percent_manager_inc = Math.round(parseFloat(percent_manager_inc) * 100) / 100.00;
    if (operation != 0)
      if ((isNaN(percent_manager_inc)==true) || (percent_manager_inc < 0))
      {
      alert("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad36")%>");
      form.elements["INC_AMOUNT_MNG_" + num_reg].value = 0;

        if (full_time_working =="0"){
        form.elements["INC_AMOUNT_MNG_" + num_reg].value = 0;
      }

      set_base_salary_per_var(0,num_reg)
      return;
      }

    if (control_var=="0") 
      var total_cash_guideline = form.elements["TOTAL_GUIDELINE_CASH_HD"].value;
    else
      var total_cash_guideline = 0;

    var there_is_sal_base = form.elements["THERE_IS_BASE_SALARY"].value;
    var total_cash = form.elements["TOTAL_MANAGER_CASH_HD"].value;
//    var this_plan_value = form.elements["CURRENT_REVIEW_VALUE_" + num_reg].value;
    var this_plan_value = form.elements["CURRENT_PAID_VALUE_" + num_reg].value;

    if (there_is_sal_base==1)
    {
    if (current_value == 0)
      {
      alert("<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad29")%>");
        form.elements["DIF_INC_PERCENTAGE_MNG_" + num_reg].value = 0; 
        form.elements["INC_PERCENTAGE_MNG_" + num_reg].value = 0;
      return;
      }
    }
    else

// Si no hay salario base, entonces el salario para calcular puede ser, o bien el salario base o bien el salario correspondiente
// a la última revisión de salario base aprobado si es que estoy revisando un variable dependiente que se denegó y el base se aprobó.
// Eso me lo va a decir la variable last_base_vl que es una variable de entrada a esta página

    {
    var base_dependand_approved = form.elements["BASE_SALARY_APRROVED_DEPENDANT"].value;
    if (parseInt(base_dependand_approved) > 0)
        var current_value = base_dependand_approved;
    else
        var current_value = form.elements["BASE_SALARY"].value;
    }

    max_increase_porc = Math.round(parseFloat(max_increase_porc) * 100) / 100.00;
    var text_error ="<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad30")%>" + " " + max_increase_porc;
    text_error = text_error + "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad31")%>";

    if (operation == 0)
    {
      if ((max_increase_porc >0) && (max_increase_porc!=null) && (max_increase_porc < percent_manager)) 
      {
        var set_value_again = Math.round(parseFloat(((value_manager_old/current_value))*100) * 100) / 100;
      form.elements["DIF_INC_PERCENTAGE_MNG_" + num_reg].value = set_value_again
          alert(text_error)
      return;
      }

      var new_value =   (current_value*percent_manager)/100.00;
      new_value = Math.round(parseFloat(new_value) * 100) / 100.00;
      value_manager_old = Math.round(parseFloat(value_manager_old) * 100) / 100.00;
      total_cash_guideline = Math.round(parseFloat(total_cash_guideline) * 100) / 100.00;
      this_plan_value = Math.round(parseFloat(this_plan_value) * 100) / 100.00;

      var new_amount_dif = Math.round(parseFloat(new_value - this_plan_value) * 100) / 100.00;

      if (this_plan_value==0)
        var new_percentage_dif = 0;
      else
        var new_percentage_dif = Math.round(parseFloat(((new_amount_dif/this_plan_value))*100) * 100) / 100;

      total_cash = Math.round(parseFloat(total_cash) * 100) / 100.00;
        total_cash = Math.round(parseFloat(new_amount_dif + total_cash - value_manager_old) * 100) / 100;

        var over_under = Math.round(parseFloat(total_cash - total_cash_guideline) * 100) / 100;
      form.elements["INC_AMOUNT_MNG_" + num_reg].value = new_value;
      form.elements["DIF_INC_PERCENTAGE_MNG_" + num_reg].value = percent_manager;
      form.elements["INC_AMOUNT_MNG_HD_" + num_reg].value = new_amount_dif;
      form.elements["DIF_INC_AMOUNT_MNG_" + num_reg].value = new_amount_dif;
      form.elements["INC_PERCENTAGE_MNG_" + num_reg].value = new_percentage_dif;

        if (full_time_working =="0")
      {
          new_real_value = Math.round(parseFloat(working_percentage * new_value)) / 100.00;
        new_amount_dif_real = Math.round(parseFloat(working_percentage * new_amount_dif)) / 100.00;
        form.elements["INC_AMOUNT_MNG_REAL_" + num_reg].value = new_real_value;
        form.elements["INC_AMOUNT_MNG_HD_REAL_" + num_reg].value = new_amount_dif_real;
        form.elements["DIF_INC_AMOUNT_MNG_REAL_" + num_reg].value = new_amount_dif_real;

      }

    }

    if (operation == 1)
    {
      this_plan_value = Math.round(parseFloat(this_plan_value) * 100) / 100.00;
      var new_value_inc = (this_plan_value*percent_manager_inc)/100.00;
      new_value_inc = Math.round(parseFloat(new_value_inc) * 100) / 100.00;
      var new_value = (this_plan_value + new_value_inc);
      new_value = Math.round(parseFloat(new_value) * 100) / 100.00;
      current_value = Math.round(parseFloat(current_value) * 100) / 100.00;

      if (current_value==0)
        var new_percentage_dif = 0;
      else
        var new_percentage_dif = Math.round(parseFloat(((new_value/current_value))*100) * 100) / 100;

      if ((max_increase_porc >0) && (max_increase_porc!=null) && (max_increase_porc < new_percentage_dif))  
      {
      var set_value = Math.round(parseFloat(value_manager_old - current_value) * 100) / 100;
        var set_value_again = Math.round(parseFloat(((set_value/current_value))*100) * 100) / 100;
      form.elements["INC_PERCENTAGE_MNG_" + num_reg].value = set_value_again
          alert(text_error)
      return;
      }

      value_manager_old = Math.round(parseFloat(value_manager_old) * 100) / 100.00;
      total_cash_guideline = Math.round(parseFloat(total_cash_guideline) * 100) / 100.00;
      total_cash = Math.round(parseFloat(total_cash) * 100) / 100.00;
        total_cash = Math.round(parseFloat(new_value_inc + total_cash - value_manager_old) * 100) / 100;

        var over_under = Math.round(parseFloat(total_cash - total_cash_guideline) * 100) / 100;
      form.elements["INC_AMOUNT_MNG_" + num_reg].value = new_value;
      form.elements["DIF_INC_PERCENTAGE_MNG_" + num_reg].value = new_percentage_dif;
      form.elements["INC_AMOUNT_MNG_HD_" + num_reg].value = new_value;
      form.elements["DIF_INC_AMOUNT_MNG_" + num_reg].value = new_value_inc;
      form.elements["INC_PERCENTAGE_MNG_" + num_reg].value = percent_manager_inc;

        if (full_time_working =="0")
      {
          new_real_value = Math.round(parseFloat(working_percentage * new_value)) / 100.00;
        new_value_inc_real = Math.round(parseFloat(working_percentage * new_value_inc)) / 100.00;
        form.elements["INC_AMOUNT_MNG_REAL_" + num_reg].value = new_real_value;
        form.elements["INC_AMOUNT_MNG_HD_REAL_" + num_reg].value = new_real_value;
        form.elements["DIF_INC_AMOUNT_MNG_REAL_" + num_reg].value = new_value_inc_real;
      }
    }

    set_total_results()
}

function view_sal_plan(sal_plan_id)
{
  this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_sal.jsp?ID_SAL_PL=" + sal_plan_id;
  var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=600";
  this.win= window.open(this.url, 'popup', attr);
}

function view_sal_grade()
{
  this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_grade.jsp";
  var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=500,height=250";
  this.win= window.open(this.url, 'popup', attr);
}

function view_comment()
{
  this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_comment.jsp";
  var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=550,height=550";
  this.win= window.open(this.url, 'popup', attr);
}

function view_message(parameter)
{
  this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?BASE="+parameter;
  var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=300,height=350";
  this.win= window.open(this.url, 'popup', attr);
}

function show_help(cod_help)
{
  this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=" + cod_help;
  var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=1000";
  this.win= window.open(this.url, 'popup', attr);
}

function setfocus()
{
    var form = document.forms["sel_rev"];
  form.elements["INC_AMOUNT_MNG_0"].focus();
}

function set_total_results()
{
    var form = document.forms["sel_rev"];
  num_rec = form.elements["num_salary_plans"].value;
  total_guidelines_cash = form.elements["TOTAL_GUIDELINE_CASH_HD"].value;
    total_guidelines_cash = Math.round(parseFloat(total_guidelines_cash) * 100) / 100;
    var full_time_working = form.elements["BASE_FULL_TIME"].value;
    var control_var = form.elements["THERE_IS_BASE_SALARY"].value;
  if (control_var == 1)
    var total_cash = Math.round(parseFloat(form.elements["INC_AMOUNT_MNG_0"].value) * 100) / 100;
    else
    var total_cash = 0;

    total_cash = Math.round(parseFloat(total_cash) * 100) / 100;

  if ((control_var == 1) && (num_rec >1))
  {
    for (var count = 1; count < num_rec; count++)
    {
       total_cash = total_cash + Math.round(parseFloat(form.elements["DIF_INC_AMOUNT_MNG_" + count].value) * 100) / 100;
       total_cash = Math.round(parseFloat(total_cash) * 100) / 100;
      }
  }

  if (control_var != 1)
  {
    for (var count = 0; count < num_rec; count++)
    {
       total_cash = total_cash + Math.round(parseFloat(form.elements["DIF_INC_AMOUNT_MNG_" + count].value) * 100) / 100;
       total_cash = Math.round(parseFloat(total_cash) * 100) / 100;
      }
  }

  form.elements["AMOUNT_OVER_UNDER_HD"].value = total_guidelines_cash - total_cash
  form.elements["AMOUNT_OVER_UNDER"].value = total_guidelines_cash - total_cash + " " + form.elements["BASE_SALARY_CURRENCY"].value;
  form.elements["TOTAL_MANAGER_CASH_HD"].value = total_cash
    form.elements["TOTAL_MANAGER_CASH"].value = total_cash + " " + form.elements["BASE_SALARY_CURRENCY"].value;
    var change_percentage_new = Math.round(parseFloat((total_cash/total_guidelines_cash) * 100)-100)*100 / 100;
  form.elements["PERCENTAGE_OVER_UNDER"].value = change_percentage_new + " %";

    if (full_time_working == "0")
  {
    var working_percentage = form.elements["BASE_WORKING_PERCENTAGE"].value;
    working_percentage = Math.round(parseFloat(working_percentage) * 100) / 100.00;
      total_cash_real = Math.round(parseFloat(working_percentage * total_cash)) / 100.00;
      total_guidelines_cash_real = Math.round(parseFloat(working_percentage * total_guidelines_cash)) / 100.00;
  }
  else
  {
      total_cash_real = total_cash;
      total_guidelines_cash_real = total_guidelines_cash;
  }

  form.elements["TOTAL_MANAGER_CASH_HD_REAL"].value = total_cash_real;
  form.elements["TOTAL_MANAGER_CASH_REAL"].value = total_cash_real + " " + form.elements["BASE_SALARY_CURRENCY"].value;

  form.elements["AMOUNT_OVER_UNDER_HD_REAL"].value = total_guidelines_cash_real - total_cash_real
  form.elements["AMOUNT_OVER_UNDER_REAL"].value = total_guidelines_cash_real - total_cash_real + " " + form.elements["BASE_SALARY_CURRENCY"].value;




}

</script>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_EMPLOYEE_SALARY_PLANS" m4alias="SAL_PLAN" m4object="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_INFO_COMES_FROM_ROLE" m4alias="EMPLEADO" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_EMPLOYEE_SALARY_PLANS" alias="sal_plan_count" method="Count" m4object="<%=zsubsesion%>"/>

<m4:endjob/>

<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2" width="90%"><%=Mss_cr.getProperty("msscr.Link1")%></td>


  <td><a href="javascript:show_help(4)" title="<%=Mss_cr.getProperty("msscr.Pop2-21")%>"><img alt="<%=Mss_cr.getProperty("msscr.Pop2-21")%>" src="/iconos/ic_help_25_31_0.gif" alt="<%=Mss_cr.getProperty("msscr.Pop3-21")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td></tr>

<tr>
  <td><img alt="<%=Mss_cr.getProperty("msscr.Pop9-20")%>" src="/iconos/noname_salariales_mss_58_100.gif" width="58" height="100" /></td>
  <td><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.Info-20")%>
  
<m4:item m4varname="information" item="EMPLOYEE_BASE_SALARY_NOT_FOUND" htmlsafe="true" outputdef="EMPLEADO"/>
<m4:item m4varname="information_comp_basis" item="EMPLOYEE_CHANGE_FACTOR" htmlsafe="true" outputdef="EMPLEADO"/>
<m4:item m4varname="FULL_TIME" item="EMPLOYEE_PARTIAL_TIME" htmlsafe="true" outputdef="EMPLEADO"/>


<% if(!information.equals("")) { %>
  </br><u><%=Mss_cr.getProperty("msscr.Info2-20")%></u> &nbsp;
  <a href= "javascript:view_message(1);" title="<%=Mss_cr.getProperty("msscr.Pop1-20")%>"><img src="/iconos/admiracion_blanco.gif"  alt="<%=Mss_cr.getProperty("msscr.Pop1-20")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
<%}%>
  </div></td>
</tr>
</table>

<form name="come_back" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_rset.jsp" method="post" enctype="application/x-www-form-urlencoded">
</form>

<form name="redireccion" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?" method="post" enctype="application/x-www-form-urlencoded">
</form>

<form name="salto_empleado" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_salto.jsp?" method="post" enctype="application/x-www-form-urlencoded">
  <input name="control" type="hidden"/>
</form>

<form name="sel_rev" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_p.jsp?" method="post" enctype="application/x-www-form-urlencoded">

<input name="VALUE_FOR_CLC" type="hidden" value="0"/>
<input name="BASE_SALARY_APRROVED_DEPENDANT" type="hidden" value="<%= (last_base_vl)%>"/>

<% if(!information.equals("")) { %>
  <input name="NO_SAL_BASE" type="hidden" value="1"/>
<%}else{%>
  <input name="NO_SAL_BASE" type="hidden" value="0"/>
<%}%>

<table class="tablaestados" width="100%" cellspacing="0">
  <tr class="tablaestadosceldatitulo">
    <td colspan="2"><%=Mss_cr.getProperty("msscr.Info3-20")%></td>
    <td colspan="1"><%=Mss_cr.getProperty("msscr.ID8-3")%></td>
    <td colspan="2"><%=Mss_cr.getProperty("msscr.Info4-20")%></td>
    <td colspan="1"><%=Mss_cr.getProperty("msscr.ID10-3")%></td>

  </tr>

  <tr>
    <td class="fuentevalor" colspan="2"><m4:item item="HR_ID" htmlsafe="true" outputdef="EMPLEADO"/>-<m4:item item="HR_NAME" htmlsafe="true" outputdef="EMPLEADO"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="ROLE_NAME" htmlsafe="true" outputdef="EMPLEADO"/></td>
    <td class="fuentevalor" colspan="2">&nbsp;<m4:item item="JOB_ID" htmlsafe="true" outputdef="EMPLEADO"/>-<m4:item item="JOB_NAME" htmlsafe="true" outputdef="EMPLEADO"/></td>
    <td class="fuentevalor"><a href="javascript:view_sal_grade()" shape="rect"><u><m4:item item="SALARY_GRADE_NAME" htmlsafe="true" outputdef="EMPLEADO"/></u></a></td>
  </tr>

  <tr class="tablaestadosceldatitulo">
    <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla1269")%></td>
    <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla1270")%></td>
    <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla1271")%></td>
    <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla1272")%></td>
    <td colspan="2"><%=Mss_cr.getProperty("msscr.Tabla1273")%></td>
  </tr>
  <tr>
    <td class="fuentevalor">&nbsp;<m4:item item="EMPLOYEE_PARTIAL_TIME_TXT" htmlsafe="true" outputdef="EMPLEADO"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="EMPLOYEE_PART_TIME_PERCENTAGE" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;%</td>
    <td class="fuentevalor">&nbsp;<m4:item item="EMPLOYEE_WORKING_HOURS" htmlsafe="true" outputdef="EMPLEADO"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="BASE_SALARY" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></td>
    <td class="fuentevalor" colspan="2">&nbsp;<m4:item item="BASE_SALARY_REAL" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></td>
  </tr>
  <tr class="tablaestadosceldatitulo">
    <td colspan="6"><%=Mss_cr.getProperty("msscr.Tabla1274")%></td>
  </tr>

</table>

<table class="tablaestados" width="100%" cellspacing="0">

  <tr>
    <td class="fuentecampo" align="center"><%=Mss_cr.getProperty("msscr.Info33-20")%>&nbsp;&nbsp;
      <m4:input name="DT_ROLE_START" maxlength="10" size="10" type="hidden" disabled="disabled"><m4:item item="DT_ROLE_START" outputdef="EMPLEADO" htmlsafe="true"/></m4:input>
      <m4:input name="DT_ROLE_END" maxlength="10" size="10" type="hidden" disabled="disabled"><m4:item item="DT_ROLE_END" outputdef="EMPLEADO" htmlsafe="true"/></m4:input>&nbsp;&nbsp;&nbsp;
      <m4:item item="DT_ROLE_START" outputdef="EMPLEADO" htmlsafe="true"/>&nbsp;&nbsp;-&nbsp;&nbsp;

      <m4:item m4varname="fec_fin_this_role" item="DT_ROLE_END" htmlsafe="true" outputdef="EMPLEADO"/>

      <%if ((fec_fin_this_role==null)||(fec_fin_this_role.equals(""))){%>
        01-01-4000
      <%}else{%>
        <m4:item item="DT_ROLE_END" outputdef="EMPLEADO" htmlsafe="true"/>&nbsp;&nbsp;&nbsp;
      <%}%>
    <br/>
    <br/>
  </tr>
  <tr>

    <%if (!last_base_vl.equals("NOT_DEPENDANT")){%>

      <td class="fuentecampo" align="center"><%=Mss_cr.getProperty("msscr.Info5-20")%>&nbsp;&nbsp;&nbsp;&nbsp;
        <input name="START_DATE" size="10" maxlength="10" type="text" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML( (last_base_fi))%>" onfocus='<%= "setfocus()"%>'/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input name="END_DATE" size="10" maxlength="10" type="text" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML( (last_base_ff))%>" onfocus='<%= "setfocus()"%>'/>
    <%}else{%>
      <td class="fuentecampo" align="center"><%=Mss_cr.getProperty("msscr.Info5-20")%>&nbsp;&nbsp;&nbsp;&nbsp;
        <m4:input name="START_DATE" size="10" maxlength="10" type="text"><m4:item item="START_DATE" outputdef="EMPLEADO" htmlsafe="true"/></m4:input>
        <a href="javascript:m4calendario(m4objeto('START_DATE','sel_rev'))"><img src="/iconos/icono_calendario_14_18.gif" width="12" height="16" alt="<%=Mss_cr.getProperty("msscr.Pop2-20")%>" title="<%=Mss_cr.getProperty("msscr.Pop2-20")%>" /></a>&nbsp;&nbsp;&nbsp;&nbsp;<m4:input name="END_DATE" size="10" maxlength="10" type="text"><m4:item item="END_DATE" outputdef="EMPLEADO" htmlsafe="true"/></m4:input>
        <a href="javascript:m4calendario(m4objeto('END_DATE','sel_rev'))"><img src="/iconos/icono_calendario_14_18.gif" width="12" height="16" alt="<%=Mss_cr.getProperty("msscr.Pop3-20")%>" title="<%=Mss_cr.getProperty("msscr.Pop3-20")%>"/></a>
    <%}%>
      &nbsp;&nbsp;&nbsp;<a href="javascript:view_message(3);" title="<%=Mss_cr.getProperty("msscr.Pop4-20")%>"><%=Mss_cr.getProperty("msscr.Info6-20")%></a>
      </td>
  </tr>
  <tr>
    <td class="fuentevalor" colspan="6">&nbsp;</td>
  </tr>

</table>

<table class="tablaestados" width="100%" cellspacing="0">
  <tr>
    <td class="fuenteleyenda"><p align="justify"><%=Mss_cr.getProperty("msscr.Info28-20")%>&nbsp;&nbsp;<u><m4:item item="EMPLOYEE_SALARY_TYPE_NAME" htmlsafe="true" outputdef="EMPLEADO"/></u>.&nbsp;
    <%=Mss_cr.getProperty("msscr.Info29-20")%>.&nbsp;

    <% if(information_comp_basis.equals("-1")) { %>
      <a href="javascript:view_message(6);" title="<%=Mss_cr.getProperty("msscr.Pop4-20")%>"><%=Mss_cr.getProperty("msscr.Info6-20")%></a>
    <%}%>
    </p>
    </td>
  </tr>

  <tr>
    <td class="fuentevalor" colspan="6">&nbsp;</td>
  </tr>

</table>

  <m4:input name="NUM_SAL_PLANS" type="hidden"></m4:input>
  <m4:input name="THERE_IS_BASE_SALARY" value="0" type="hidden"></m4:input>
  <m4:input name="SALARY_GRADE_MAX_SALARY" type="hidden" disabled="disabled"><m4:item item="SALARY_GRADE_MAX_SALARY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>
  <m4:input name="SALARY_GRADE_MIDPOINT" type="hidden" disabled="disabled"><m4:item item="SALARY_GRADE_MIDPOINT" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>
  <m4:input name="SALARY_GRADE_MIN_SALARY" type="hidden" disabled="disabled"><m4:item item="SALARY_GRADE_MIN_SALARY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>
  <m4:input name="BASE_SALARY" type="hidden" disabled="disabled"><m4:item item="BASE_SALARY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>
  <m4:input name="CHANGE_FACTOR" type="hidden" disabled="disabled"><m4:item item="EMPLOYEE_CHANGE_FACTOR" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>

  <m4:input name="BASE_FULL_TIME" type="hidden" disabled="disabled"><m4:item item="EMPLOYEE_PARTIAL_TIME" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>
  <m4:input name="BASE_WORKING_PERCENTAGE" type="hidden" disabled="disabled"><m4:item item="EMPLOYEE_PART_TIME_PERCENTAGE" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>

  <m4:input name="CURRENT_BASE_SALARY_REAL" type="hidden" disabled="disabled"><m4:item item="BASE_SALARY_REAL" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>


  
<% 
String count; 
String control = "0";
int icount = 0; %>
  <m4:outputexec var="count" alias="sal_plan_count"/>
  <% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%>

<input name="<%= "num_salary_plans"%>" type="hidden" value="<%= (icount)%>"/>

<%if (icount > 0) {%>

<m4:dataloop outputdef="SAL_PLAN">

  <% Integer current; %>
  <m4:current var="current" outputdef="SAL_PLAN"/>

  <m4:input name='<%= "HCO_CR_SPLAN_TP_ID_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="HCO_CR_SPLAN_TP_ID" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

  <m4:input name='<%= "HCO_CR_SALARY_P_ID_" + (current)%>' type="hidden"><m4:item item="HCO_CR_SALARY_P_ID" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

  <m4:input name='<%= "DT_START_PLAN_" + (current)%>' type="hidden"><m4:item item="DT_START" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

  <m4:input name='<%= "DT_END_PLAN_" + (current)%>' type="hidden"><m4:item item="DT_END" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

  
  <m4:item m4varname="id_plan_sal_var" item="HCO_CR_SPLAN_TP_ID" htmlsafe="true" outputdef="SAL_PLAN"/>
  <m4:item m4varname="id_plan_sal" item="HCO_CR_SALARY_P_ID" htmlsafe="true" outputdef="SAL_PLAN"/>
  <% String id_plan_sal_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", id_plan_sal);%>

  <% if(id_plan_sal_var.equals("BASE")) { %>

    <script language="JavaScript" xml:space="preserve">
      form = document.forms["sel_rev"];
      form.elements["THERE_IS_BASE_SALARY"].value =1;
    </script>

    <m4:input name='<%= "LAST_REVIEW_DT_START_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="LAST_REVIEW_DT_START" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>
    <m4:input name='<%= "HCO_CR_SALARY_P_NM_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="HCO_CR_SALARY_P_NM" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

    <table class="tablaestados" width="100%" cellspacing="0">
      <tr class="tablaestadosceldatitulo">
        <td colspan="5"><%=Mss_cr.getProperty("msscr.ID24-3")%>&nbsp;(&nbsp;<%=Mss_cr.getProperty("msscr.Info13-20")%>:&nbsp;<u><m4:item item="HCO_CR_SALARY_P_NM" htmlsafe="true" outputdef="SAL_PLAN"/> - <m4:item item="HCO_CR_INC_TP_NM" htmlsafe="true" outputdef="SAL_PLAN"/></u>&nbsp;)</td>
      </tr>
      <tr>
        <td class="fuentevalor" align="center" colspan="5">
          <a href="javascript:view_sal_plan('<%=id_plan_sal_Encr%>')" shape="rect"><u><%=Mss_cr.getProperty("msscr.Info25-20")%></u></a></td>
      </tr>
      <tr>
        <td class="fuentecampo">&nbsp;</td>
        <td class="fuentecampo" align="center"><%=Mss_cr.getProperty("msscr.Info7-20")%></td>
        <td class="fuentecampo" align="center"><%=Mss_cr.getProperty("msscr.Titulo8-2")%></td>
        <td class="fuentecampo" align="center"><%=Mss_cr.getProperty("msscr.Info8-20")%></td>
        <td class="fuentecampo" align="center"><%=Mss_cr.getProperty("msscr.Comp-10")%></td>
      </tr>
      <tr>
        <td class="fuentecampo" align="center">&nbsp;<%=Mss_cr.getProperty("msscr.Info23-20")%> </td>
        <td class="fuentevalor" align="center">
          <m4:input name='<%= "CURRENT_REVIEW_VALUE_" + (current)%>' size="20" type="text" disabled="disabled"><m4:item item="CURRENT_REVIEW_VALUE" htmlsafe="true" outputdef="SAL_PLAN"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input></td>
        <td class="fuentevalor" align="center">
          <m4:input name='<%= "CURRENT_INCREASE_PERCENTAGE_" + (current)%>' size="10" type="text" disabled="disabled"><m4:item item="CURRENT_INCREASE_PERCENTAGE" htmlsafe="true" outputdef="SAL_PLAN"/>%</m4:input></td>

        <% if(!information_comp_basis.equals("-1")) { %>
          <td class="fuentevalor" align="center">
            <m4:input name='<%= "GRADE_PENETRATION_LAST_REVIEW_" + (current)%>' size="5" type="text" disabled="disabled"><m4:item item="GRADE_PENETRATION_LAST_REVIEW" htmlsafe="true" outputdef="EMPLEADO"/>%</m4:input></td>
          <td class="fuentevalor" align="center">
            <m4:input name='<%= "COMPARATIO_LAST_REVIEW_" + (current)%>' size="5" type="text" disabled="disabled"><m4:item item="COMPARATIO_LAST_REVIEW" htmlsafe="true" outputdef="EMPLEADO"/>%</m4:input></td>
        <%}else{%>

          <td class="fuentevalor" align="center">
            <m4:input name='<%= "GRADE_PENETRATION_LAST_REVIEW_" + (current)%>' size="5" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info31-20")%></m4:input></td>
          <td class="fuentevalor" align="center">
            <m4:input name='<%= "COMPARATIO_LAST_REVIEW_" + (current)%>' size="5" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info31-20")%></m4:input></td>
        <%}%>
      </tr>
      <tr>
        <td class="fuentecampo" align="center">&nbsp;<%=Mss_cr.getProperty("msscr.Info24-20")%> </td>
      <% if(!information.equals("")) { %>

        <td class="fuentevalor">
          <m4:input name='<%= "INC_AMOUNT_" + (current)%>' size="20" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info30-20")%></m4:input></td>
        <td class="fuentevalor" align="center">
          <m4:input name='<%= "INC_PERCENTAGE_" + (current)%>' size="10" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info30-20")%></m4:input></td>
          <% if(!information_comp_basis.equals("-1")) { %>
            <td class="fuentevalor" align="center">
              <m4:input name='<%= "NEW_GRADE_PENETRATION_" + (current)%>' size="5" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info30-20")%></m4:input></td>
            <td class="fuentevalor" align="center">
              <m4:input name='<%= "NEW_COMPARATIO_" + (current)%>' size="5" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info30-20")%></m4:input></td>
          <%}else{%>
            <td class="fuentevalor" align="center">
              <m4:input name='<%= "NEW_GRADE_PENETRATION_" + (current)%>' size="5"  type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info31-20")%></m4:input></td>
            <td class="fuentevalor" align="center">
              <m4:input name='<%= "NEW_COMPARATIO_" + (current)%>' size="5" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info31-20")%></m4:input></td>
          <%}%>

      <%}else{%>
        <td class="fuentevalor">
          <m4:input name='<%= "INC_AMOUNT_" + (current)%>' size="20" type="text" disabled="disabled"><m4:item item="MINIMUM_INC_AMOUNT" htmlsafe="true" outputdef="SAL_PLAN"/> - <m4:item item="MAXIMUM_INC_AMOUNT" htmlsafe="true" outputdef="SAL_PLAN"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input></td>
        <td class="fuentevalor" align="center">
          <m4:input name='<%= "INC_PERCENTAGE_" + (current)%>' size="10" type="text" disabled="disabled"><m4:item item="MINIMUM_INC_PERCENTAGE" htmlsafe="true" outputdef="SAL_PLAN"/>%-<m4:item item="MAXIMUM_INC_PERCENTAGE" htmlsafe="true" outputdef="SAL_PLAN"/>%</m4:input></td>

          <% if(!information_comp_basis.equals("-1")) { %>
            <td class="fuentevalor" align="center">
              <m4:input name='<%= "NEW_GRADE_PENETRATION_" + (current)%>' size="5" type="text" disabled="disabled"><m4:item item="NEW_GRADE_PENETRATION" htmlsafe="true" outputdef="EMPLEADO"/>%</m4:input></td>
            <td class="fuentevalor" align="center">
              <m4:input name='<%= "NEW_COMPARATIO_" + (current)%>' size="5" type="text" disabled="disabled"><m4:item item="NEW_COMPARATIO" htmlsafe="true" outputdef="EMPLEADO"/>%</m4:input></td>
          <%}else{%>
            <td class="fuentevalor" align="center">
              <m4:input name='<%= "NEW_GRADE_PENETRATION_" + (current)%>' size="5" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info31-20")%></m4:input></td>
            <td class="fuentevalor" align="center">
              <m4:input name='<%= "NEW_COMPARATIO_" + (current)%>' size="5" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info31-20")%></m4:input></td>
          <%}%>
      <%}%>
      </tr>

      <% if(FULL_TIME.equals("0")) { %>
        <tr>
          <td class="fuentecampo" align="center">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla1275")%> </td>
          <td class="fuentevalor" colspan="4">
            <m4:input name='<%= "INC_AMOUNT_REAL_" + (current)%>' size="20" type="text" disabled="disabled"><m4:item item="MINIMUM_INC_AMOUNT_REAL" htmlsafe="true" outputdef="SAL_PLAN"/> - <m4:item item="MAXIMUM_INC_AMOUNT_REAL" htmlsafe="true" outputdef="SAL_PLAN"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>&nbsp;&nbsp;&nbsp;<b> <%=Mss_cr.getProperty("msscr.Tabla1276")%></b></td>
        </tr>
      <%}%>

      <tr>
        <td class="fuentecampo" align="center">&nbsp;<%=Mss_cr.getProperty("msscr.Info9-20")%></td>
        <td class="fuentecampo" align="center">
          <m4:input name='<%= "INC_AMOUNT_MNG_" + (current)%>' size="15" type="text" value="0" onchange='<%= "set_base_salary_per(" + (current) + "," + (icount) +")"%>'></m4:input>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/>
          <m4:input name='<%= "INC_AMOUNT_MNG_HD_" + (current)%>' type="hidden" value="0" disabled="disabled"></m4:input></td>

      <% if(!information.equals("")) { %>
        <td class="fuentecampo" align="center">
          <m4:input name='<%= "INC_PERCENTAGE_MNG_" + (current)%>' size="8" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info30-20")%>&nbsp;%&nbsp;</m4:input></td>
      <%}else{%>
        <td class="fuentecampo" align="center">
          <m4:input name='<%= "INC_PERCENTAGE_MNG_" + (current)%>' size="8" type="text" value="0" onchange='<%= "set_base_salary_amount(" + (current) + "," + (icount) + ")"%>'></m4:input>&nbsp;%&nbsp;</td>
      <%}%>

      <% if(!information_comp_basis.equals("-1")) { %>
        <td class="fuentevalor" align="center">
          <m4:input name='<%= "NEW_GRADE_PENETRATION_MNG_" + (current)%>' size="5" type="text" disabled="disabled">%</m4:input></td>
        <td class="fuentevalor" align="center">
          <m4:input name='<%= "NEW_COMPARATIO_MNG_" + (current)%>' size="5" type="text" disabled="disabled">%</m4:input></td>
      <%}else{%>

        <td class="fuentevalor" align="center">
          <m4:input name='<%= "NEW_GRADE_PENETRATION_MNG_" + (current)%>' size="5" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info31-20")%></m4:input></td>
        <td class="fuentevalor" align="center">
          <m4:input name='<%= "NEW_COMPARATIO_MNG_" + (current)%>' size="5" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info31-20")%></m4:input></td>
      <%}%>

      </tr>

      <% if(FULL_TIME.equals("0")) { %>

        <td class="fuentecampo" align="center">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla1277")%></td>
        <td class="fuentevalor" align="center" colspan="4">
          <m4:input name='<%= "INC_AMOUNT_MNG_REAL_" + (current)%>' size="15" type="text" value="0" onchange='<%= "set_base_salary_per_real(" + (current) + "," + (icount) +")"%>'></m4:input>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/>
          <m4:input name='<%= "INC_AMOUNT_MNG_HD_REAL_" + (current)%>' type="hidden" value="0" disabled="disabled"></m4:input>&nbsp;&nbsp;&nbsp;<b> <%=Mss_cr.getProperty("msscr.Tabla1278")%></b></td>
      <%}%>

      <tr>
        <td class="fuentecampo" align="center">&nbsp;<%=Mss_cr.getProperty("msscr.Info10-20")%></td>
        <td class="fuentevalor" align="center"><m4:input name="SAL_TOT_BASE" size="20" type="text" disabled="disabled"><m4:item item="BASE_SALARY" htmlsafe="true" outputdef="EMPLEADO"/><m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input></td>

      <% if(FULL_TIME.equals("0")) { %>

        <td class="fuentecampo" align="center">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla1279")%> <b>(<m4:item item="EMPLOYEE_PART_TIME_PERCENTAGE" htmlsafe="true" outputdef="EMPLEADO"/>%)</b></td>
        <td class="fuentevalor" align="center"><m4:input name="SAL_TOT_BASE_REAL" size="20" type="text" disabled="disabled"><m4:item item="BASE_SALARY_REAL" htmlsafe="true" outputdef="EMPLEADO"/><m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input></td>


      <% }else{%>

        <td class="fuentevalor" align="center">&nbsp</td>
        <td class="fuentevalor" align="center">&nbsp</td>

      <%}%>
        <td class="fuentevalor" align="center">&nbsp</td>
      </tr>

      <% if(!information.equals("")) { %>
        <tr>
          <td class="fuenteleyenda" colspan="5">
            <%=Mss_cr.getProperty("msscr.Info11-20")%>
          </td>
        </tr>
      <%}%>

      <% if(information_comp_basis.equals("-1")) { %>
        <tr>
          <td class="fuenteleyenda" colspan="5"><%=Mss_cr.getProperty("msscr.Info32-20")%>
          </td>
        </tr>
      <%}%>

      <% if((information.equals(""))&&(!information_comp_basis.equals("-1"))) { %>
        <tr>
          <td class="fuentevalor" colspan="5">&nbsp;</td>
        </tr>
      <%}%>
  
    </table>
    <m4:input name='<%= "DIF_INC_AMOUNT_" + (current)%>' type="hidden" disabled="disabled"/>
    <m4:input name='<%= "DIF_INC_PERCENTAGE_" + (current)%>' type="hidden" disabled="disabled"/>
    <m4:input name='<%= "DIF_INC_AMOUNT_MNG_" + (current)%>' type="hidden" disabled="disabled"/>
    <m4:input name='<%= "DIF_INC_PERCENTAGE_MNG_" + (current)%>' type="hidden" disabled="disabled"/>
  <%
  }else{
    if(control.equals("0"))
       { control= "1";%>

      <table class="tablaestados" width="100%" cellspacing="0">
        <tr class="tablaestadosceldatitulo">
          <td colspan="5">&nbsp;<%=Mss_cr.getProperty("msscr.Info12-20")%>

          <%if (!last_base_vl.equals("NOT_DEPENDANT")){%>
            &nbsp;&nbsp;<%=Mss_cr.getProperty("msscr.Info34-20")%><%=last_base_vl%>&nbsp; <%=last_base_cr%>
          <%}%>
          </td>
        </tr>
      <tr>
        <td class="fuentecampo" colspan="5">&nbsp;</td>
      </tr>
     <%}%>

      <m4:input name='<%= "LAST_REVIEW_DT_START_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="LAST_REVIEW_DT_START" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>
      <m4:input name='<%= "HCO_CR_SALARY_P_NM_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="HCO_CR_SALARY_P_NM" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

      <tr>
        <m4:input name='<%= "CURRENT_REVIEW_VALUE_" + (current)%>' type="hidden"><m4:item item="CURRENT_REVIEW_VALUE" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

        <m4:input name='<%= "CURRENT_PAID_VALUE_" + (current)%>' type="hidden"><m4:item item="CURRENT_PAID_VALUE" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>

        <m4:item m4varname="value_this_plan" item="CURRENT_REVIEW_VALUE" htmlsafe="true" outputdef="SAL_PLAN"/>
        <m4:item m4varname="real_value_this_plan" item="CURRENT_PAID_VALUE" htmlsafe="true" outputdef="SAL_PLAN"/>

        <% float no_value_control = 0; %>
        <% try { no_value_control = Float.parseFloat(value_this_plan); } catch(Exception e) { no_value_control = 0; }%>

        <% float no_real_value_control = 0; %>
        <% try { no_real_value_control = Float.parseFloat(real_value_this_plan); } catch(Exception e) { no_real_value_control = 0; }%>

        <%if(no_value_control >0) { %>
          <td class="fuenteleyenda_oscura" colspan="5">
            <b><%=Mss_cr.getProperty("msscr.Info13-20")%>&nbsp;- &nbsp;<%=Mss_cr.getProperty("msscr.Error2-8c")%>:&nbsp;
            <u><m4:item item="HCO_CR_SALARY_P_NM" htmlsafe="true" outputdef="SAL_PLAN"/> - <m4:item item="HCO_CR_INC_TP_NM" htmlsafe="true" outputdef="SAL_PLAN"/> - <m4:item item="CURRENT_PAID_VALUE" htmlsafe="true" outputdef="SAL_PLAN"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></u>
            </b>&nbsp;<br/></br><%=Mss_cr.getProperty("msscr.ID19-3")%>: <b>
            <u><m4:item item="CURRENT_REVIEW_VALUE" htmlsafe="true" outputdef="SAL_PLAN"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></u>
            </b> % <%=Mss_cr.getProperty("msscr.ID42-3")%>:<b><u><m4:item item="CURRENT_INCREASE_PERCENTAGE" htmlsafe="true" outputdef="SAL_PLAN"/>%</u></b>
          </td>
        <%}else{%>
          <td class="fuenteleyenda_oscura" colspan="4"><b><%=Mss_cr.getProperty("msscr.Info13-20")%>&nbsp;- &nbsp;<%=Mss_cr.getProperty("msscr.Error2-8c")%>:&nbsp; <u><m4:item item="HCO_CR_SALARY_P_NM" htmlsafe="true" outputdef="SAL_PLAN"/> - <m4:item item="HCO_CR_INC_TP_NM" htmlsafe="true" outputdef="SAL_PLAN"/> - <m4:item item="CURRENT_PAID_VALUE" htmlsafe="true" outputdef="SAL_PLAN"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></u></b></td>
          <%if(no_real_value_control >0) { %>
            <td class="fuenteleyenda">&nbsp;</td>
          <%}else{%>
            <td class="fuenteleyenda">&nbsp;<a href= "javascript:view_message(2);" title="Pulse para ver mensaje"><u><%=Mss_cr.getProperty("msscr.Info26-20")%></u><img src="/iconos/advertencia_rojo.gif"  alt="<%=Mss_cr.getProperty("msscr.Pop1-20")%> "/></a></td>
          <%}%>
        <%}%>
      </tr>
      <tr>
        <td class="fuentevalor" colspan="1"><a href="javascript:view_sal_plan('<%=id_plan_sal%>')" shape="rect"><u></br><%=Mss_cr.getProperty("msscr.Info14-20")%></u></a></td>
        <td class="fuentecampo" colspan="4">&nbsp;</td>
      </tr>
      <tr>
        <td class="fuentevalor">&nbsp;</td>
        <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Cantidad-12")%></td>
        <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Info15-20")%></td>
        <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Cantidad3-12")%></td>
        <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Titulo8-2")%></td>
      </tr>
      <tr>
        <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Info16-20")%></td>

      <% if(!information.equals("")) { %>

        <td class="fuentevalor"><m4:input name='<%= "INC_AMOUNT_" + (current)%>' size="20" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info30-20")%></m4:input></td>
        <td class="fuentevalor"><m4:input name='<%= "INC_PERCENTAGE_" + (current)%>' size="15" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info30-20")%></m4:input></td>
        <td class="fuentevalor"><m4:input name='<%= "DIF_INC_AMOUNT_" + (current)%>' size="20" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info30-20")%></m4:input></td>
        <td class="fuentevalor"><m4:input name='<%= "DIF_INC_PERCENTAGE_" + (current)%>' size="15" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info30-20")%></m4:input></td>
      <%}else{%>

        <td class="fuentevalor"><m4:input name='<%= "INC_AMOUNT_" + (current)%>' size="20" type="text" disabled="disabled"><m4:item item="MINIMUM_INC_AMOUNT" htmlsafe="true" outputdef="SAL_PLAN"/> - <m4:item item="MAXIMUM_INC_AMOUNT" htmlsafe="true" outputdef="SAL_PLAN"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input></td>
        <td class="fuentevalor"><m4:input name='<%= "INC_PERCENTAGE_" + (current)%>' size="15" type="text" disabled="disabled"><m4:item item="MINIMUM_INC_PERCENTAGE" htmlsafe="true" outputdef="SAL_PLAN"/>%-<m4:item item="MAXIMUM_INC_PERCENTAGE" htmlsafe="true" outputdef="SAL_PLAN"/>%</m4:input></td>

        <td class="fuentevalor"><m4:input name='<%= "DIF_INC_AMOUNT_" + (current)%>' size="20" type="text" disabled="disabled"><m4:item item="MINIMUM_DIF_AMOUNT" htmlsafe="true" outputdef="SAL_PLAN"/> - <m4:item item="MAXIMUM_DIF_AMOUNT" htmlsafe="true" outputdef="SAL_PLAN"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input></td>
        <td class="fuentevalor"><m4:input name='<%= "DIF_INC_PERCENTAGE_" + (current)%>' size="15" type="text" disabled="disabled"><m4:item item="MINIMUM_DIF_PERCENTAGE" htmlsafe="true" outputdef="SAL_PLAN"/>%-<m4:item item="MAXIMUM_DIF_PERCENTAGE" htmlsafe="true" outputdef="SAL_PLAN"/>%</m4:input></td>
      <%}%>
      </tr>

      <% if(FULL_TIME.equals("0")) { %>
        <tr>
          <td class="fuentecampo" align="center"><%=Mss_cr.getProperty("msscr.Tabla1275")%> </td>
          <td class="fuentevalor" colspan="2" align="center"><m4:input name='<%= "INC_AMOUNT_" + (current)%>' size="20" type="text" disabled="disabled"><m4:item item="MINIMUM_INC_AMOUNT_REAL" htmlsafe="true" outputdef="SAL_PLAN"/> - <m4:item item="MAXIMUM_INC_AMOUNT_REAL" htmlsafe="true" outputdef="SAL_PLAN"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>&nbsp;<b> <%=Mss_cr.getProperty("msscr.Tabla1280")%></b></td>
          <td class="fuentevalor" colspan="2"><m4:input name='<%= "DIF_INC_AMOUNT_" + (current)%>' size="20" type="text" disabled="disabled"><m4:item item="MINIMUM_DIF_AMOUNT_REAL" htmlsafe="true" outputdef="SAL_PLAN"/> - <m4:item item="MAXIMUM_DIF_AMOUNT_REAL" htmlsafe="true" outputdef="SAL_PLAN"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>&nbsp;<b> <%=Mss_cr.getProperty("msscr.Tabla1280")%></b></td>


        </tr>
      <%}%>

      <tr>
        <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Info17-20")%></td>
        <td class=fuentecampo><m4:input name='<%= "INC_AMOUNT_MNG_" + (current)%>' size="15" type="text" value="0" onchange='<%= "set_base_salary_per_var(0," + (current) +")"%>'></m4:input><m4:input name='<%= "INC_AMOUNT_MNG_HD_" + (current)%>' type="hidden" value="0" disabled="disabled"></m4:input>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></td>
        <td class="fuentecampo"><m4:input name='<%= "DIF_INC_PERCENTAGE_MNG_" + (current)%>' size="12" type="text" value="0" onchange='<%= "set_base_salary_amount_var(0," + (current) + ")"%>'></m4:input>&nbsp;%&nbsp;</td>

        <%if(no_real_value_control >0) { %>

          <td class=fuentecampo><m4:input name='<%= "DIF_INC_AMOUNT_MNG_" + (current)%>' size="15" type="text" value="0" onchange='<%= "set_base_salary_per_var(1," + (current) +")"%>'></m4:input>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></td>
          <td class="fuentecampo"><m4:input name='<%= "INC_PERCENTAGE_MNG_" + (current)%>' size="12" type="text" value="0" onchange='<%= "set_base_salary_amount_var(1," + (current) + ")"%>'></m4:input>&nbsp;%&nbsp;</td>
        <%}else{%>
          <td class=fuentecampo><m4:input name='<%= "DIF_INC_AMOUNT_MNG_" + (current)%>' size="15" type="text" value="0" disabled="disabled"/><m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></td>
          <td class="fuentecampo"><m4:input name='<%= "INC_PERCENTAGE_MNG_" + (current)%>' size="12" type="text" value="0" disabled="disabled"/>&nbsp;%&nbsp;</td>
        <%}%>
      </tr>

      <% if(FULL_TIME.equals("0")) { %>
        <tr>
          <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Tabla1283")%></td>
          <td class=fuentevalor colspan="2"><m4:input name='<%= "INC_AMOUNT_MNG_REAL_" + (current)%>' size="15" type="text" value="0" onchange='<%= "set_base_salary_per_var_real(0," + (current) +")"%>'></m4:input><m4:input name='<%= "INC_AMOUNT_MNG_HD_REAL_" + (current)%>' type="hidden" value="0" disabled="disabled"></m4:input>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<b> <%=Mss_cr.getProperty("msscr.Tabla1280")%></b></td>

          <%if(no_real_value_control >0) { %>
            <td class=fuentevalor colspan="2"><m4:input name='<%= "DIF_INC_AMOUNT_MNG_REAL_" + (current)%>' size="15" type="text" value="0" onchange='<%= "set_base_salary_per_var_real(1," + (current) +")"%>'></m4:input>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<b> <%=Mss_cr.getProperty("msscr.Tabla1280")%></b></td>
          <%}else{%>
            <td class=fuentevalor colspan="2"><m4:input name='<%= "DIF_INC_AMOUNT_MNG_REAL_" + (current)%>' size="15" type="text" value="0" disabled="disabled"/><m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<b> <%=Mss_cr.getProperty("msscr.Tabla1280")%></b></td>
          <%}%>
        </tr>
      <%}%>
      <tr>
        <td class="fuentecampo" colspan="5">&nbsp;</td>
        <m4:input name='<%= "HCO_CR_MAX_B_PORC_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="HCO_CR_MAX_B_PORC" htmlsafe="true" outputdef="SAL_PLAN"/></m4:input>
        
      </tr>

      <tr>
        <td class="fuentevalor" colspan="5"><hr></td>
      </tr>


      <%}%>
</m4:dataloop>    

<%if(control.equals("1")){
%>
  <% if(!information.equals("")) { %>
      <tr>
        <td class="fuenteleyenda" colspan="5"><%=Mss_cr.getProperty("msscr.Info11-20")%></td>
      </tr>
    <%}else{%>
      <tr>
        <td class="fuentevalor" colspan="5">&nbsp;</td>
      </tr>
    <%}%>
    </table>
  <%}%>

<table class="tablaestados" width="100%" cellspacing="0" BORDER=1>
  <tr class="tablaestadosceldatitulo">
    <td colspan="4"><%=Mss_cr.getProperty("msscr.Info18-20")%></td>
  </tr>
  <tr>
    <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Info19-20")%></td>

    <% if(!information.equals("")) { %>
      <td class="fuentecampo"><% if(FULL_TIME.equals("0")) { %><b><u><%=Mss_cr.getProperty("msscr.Tabla1282")%></b>:</u><%}%>&nbsp;<m4:input name="TOTAL_GUIDELINE_CASH" size="12" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info30-20")%></m4:input>
      <% if(FULL_TIME.equals("0")) { %>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><u><%=Mss_cr.getProperty("msscr.Tabla1281")%></b>:</u>&nbsp;<m4:input name="TOTAL_GUIDELINE_CASH_REAL" size="12" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info30-20")%></m4:input>
      <%}%>
      </td>
      <m4:input name="TOTAL_GUIDELINE_CASH_HD" type="hidden" disabled="disabled" value="0"></m4:input>
      <% if(FULL_TIME.equals("0")) { %>
        <m4:input name="TOTAL_GUIDELINE_CASH_HD_REAL" type="hidden" disabled="disabled" value="0"></m4:input>
      <%}%>
    <%}else{%>
      <td class="fuentecampo"><% if(FULL_TIME.equals("0")) { %><b><u><%=Mss_cr.getProperty("msscr.Tabla1282")%></b>:</u><%}%>&nbsp;<m4:input name="TOTAL_GUIDELINE_CASH" size="12" type="text" disabled="disabled"><m4:item item="TOTAL_GUIDELINE_CASH" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>

      <% if(FULL_TIME.equals("0")) { %>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><u><%=Mss_cr.getProperty("msscr.Tabla1281")%></b>:</u>&nbsp;<m4:input name="TOTAL_GUIDELINE_CASH_REAL" size="12" type="text" disabled="disabled"><m4:item item="TOTAL_GUIDELINE_CASH_REAL" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>
      <%}%>

      </td>
      <m4:input name="TOTAL_GUIDELINE_CASH_HD" type="hidden" disabled="disabled"><m4:item item="TOTAL_GUIDELINE_CASH" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>

      <% if(FULL_TIME.equals("0")){ %>

        <m4:input name="TOTAL_GUIDELINE_CASH_HD_REAL" type="hidden" disabled="disabled"><m4:item item="TOTAL_GUIDELINE_CASH_REAL" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>
      <%}%>
    <%}%>

    <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Info20-20")%></td>
    <td class="fuentecampo"><% if(FULL_TIME.equals("0")) { %><b><u><%=Mss_cr.getProperty("msscr.Tabla1282")%></b>:</u><%}%>&nbsp;<m4:input name="AMOUNT_OVER_UNDER" size="12" type="text" disabled="disabled">0 &nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>
    <% if(FULL_TIME.equals("0")){ %>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><u><%=Mss_cr.getProperty("msscr.Tabla1281")%></b>:</u>&nbsp;<m4:input name="AMOUNT_OVER_UNDER_REAL" size="12" type="text" disabled="disabled">0 &nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>
    <%}else{%>
      <m4:input name="AMOUNT_OVER_UNDER_REAL" type="hidden"></m4:input>
    <%}%>


    </td>
    <m4:input name="AMOUNT_OVER_UNDER_HD" type="hidden" value="0" disabled="disabled"></m4:input>
    <m4:input name="AMOUNT_OVER_UNDER_HD_REAL" type="hidden" value="0" disabled="disabled"></m4:input>
  </tr>
  <tr>
    <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Info27-20")%></td>
    <td class="fuentecampo"><% if(FULL_TIME.equals("0")) { %><b><u><%=Mss_cr.getProperty("msscr.Tabla1282")%></b>:</u><%}%>&nbsp;<m4:input name="TOTAL_MANAGER_CASH" size="12" type="text" disabled="disabled"><m4:item item="TOTAL_MANAGER_CASH" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>

    <% if(FULL_TIME.equals("0")){ %>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><u><%=Mss_cr.getProperty("msscr.Tabla1281")%></b>:</u>&nbsp;<m4:input name="TOTAL_MANAGER_CASH_REAL" size="12" type="text" disabled="disabled"><m4:item item="TOTAL_MANAGER_CASH_REAL" htmlsafe="true" outputdef="EMPLEADO"/>&nbsp;<m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>
    <%}else{%>
      <m4:input name="TOTAL_MANAGER_CASH_REAL" type="hidden"></m4:input>

    <%}%>
    </td>

    <m4:input name="TOTAL_MANAGER_CASH_HD" type="hidden" value="0"></m4:input>
    <m4:input name="BASE_SALARY_CURRENCY" type="hidden" disabled="disabled"><m4:item item="BASE_SALARY_CURRENCY" htmlsafe="true" outputdef="EMPLEADO"/></m4:input>


      <m4:input name="TOTAL_MANAGER_CASH_HD_REAL" type="hidden" value="0"></m4:input>


    <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Info21-20")%></td>

  <% if(!information.equals("")) { %>
    <td class="fuentecampo">&nbsp;<m4:input name="PERCENTAGE_OVER_UNDER" size="12" type="text" disabled="disabled"><%=Mss_cr.getProperty("msscr.Info30-20")%></m4:input></td>
  <%}else{%>
    <td class="fuentecampo">&nbsp;<m4:input name="PERCENTAGE_OVER_UNDER" size="12" type="text" disabled="disabled">0 %</m4:input></td>
  <%}%>
  </tr>
  <tr>
    <td class="fuentevalor" colspan="4"><a href="javascript:view_comment()" shape="rect"><u><%=Mss_cr.getProperty("msscr.Info22-20")%></u></a></td>
  </tr>
  <tr>

    <td class="fuenteleyenda" colspan="2">

  <% if(!information.equals("")) { %><%=Mss_cr.getProperty("msscr.Info11-20")%>&nbsp;&nbsp;&nbsp;&nbsp;<%}else{%>&nbsp;<%}%></td>
    <td class="fuenteboton">
      <a href="javascript:comprobar_accion();" title="<%=Mss_cr.getProperty("msscr.Pop10-20")%>"><img src="/iconos/ic_lis_36_36_2.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop10-20")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>

    <td class="fuenteleyenda" colspan="1">
      <a href="javascript:exec_come_back();" title="<%=Mss_cr.getProperty("msscr.Pop5-20")%>"><img src="/iconos/icono_anterior_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop5-20")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
      <a href="javascript:set_final_results(<%=icount%>)" title="<%=Mss_cr.getProperty("msscr.Pop6-20")%>"><img src="/iconos/icono_siguiente_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop6-20")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="javascript:comprobar_salto(0)" title="<%=Mss_cr.getProperty("msscr.Pop7-20")%>"><img src="/iconos/user_2_next_32.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop7-20")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
      <a href="javascript:comprobar_salto(1)" title="<%=Mss_cr.getProperty("msscr.Pop8-20")%>"><img src="/iconos/group_next_32.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop8-20")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
  <%
  }else{%>
    <div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.Negar")%></div>
  <%}%> 

  </tr>
</table>
</form>
<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
</body>
<m4:endpage/>
