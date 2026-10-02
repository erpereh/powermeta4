<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page import="com.meta4.configuration.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Link1b-1")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
</head>

<%
String zsubsesion = "SSM_SALARY_REVIEW_PROCESS";
String zmeta4object = "SSM_SALARY_REVIEW_PROCESS";
String id_wu_plan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_wu_plan");
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_MSR_EXPORT" m4object="<%=zsubsesion%>">
  <m4:param name="ARG_ID_WU_PLAN" value="<%=id_wu_plan%>"/>
</m4:exec>
<m4:outputdef node="SSM_MSR_EMPLOYEES_BASE_PLAN" m4alias="SSM_MSR_EMPLOYEES_BASE_PLAN" m4object="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_MSR_VARIABLE_PLANS" m4alias="SSM_MSR_VARIABLE_PLANS" m4object="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_MSR_EMPLOYEES_VAR_PLANS" m4alias="SSM_MSR_EMPLOYEES_VAR_PLANS" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_MSR_EMPLOYEES_BASE_PLAN" alias="base_plan_emp_count" method="Count" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_MSR_VARIABLE_PLANS" alias="varb_plan_count" method="Count" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_MSR_EMPLOYEES_VAR_PLANS" alias="varb_plan_emp_count" method="Count" m4object="<%=zsubsesion%>"/>
<m4:endjob/>

<%
String zsbaseEmpCount;
String zsvarbCount;
String zsvarbEmpCount;
int zibaseEmpCount = 0;
int zivarbCount = 0;
int zivarbEmpCount = 0;
%>
<m4:outputexec var="zsbaseEmpCount" alias="base_plan_emp_count"/>
<m4:outputexec var="zsvarbCount" alias="varb_plan_count"/>
<m4:outputexec var="zsvarbEmpCount" alias="varb_plan_emp_count"/>
<%
try { zibaseEmpCount = Integer.parseInt(zsbaseEmpCount); } catch(Exception e) { zibaseEmpCount = 0; }
try { zivarbCount = Integer.parseInt(zsvarbCount); } catch(Exception e) { zivarbCount = 0; }
try { zivarbEmpCount = Integer.parseInt(zsvarbEmpCount); } catch(Exception e) { zivarbEmpCount = 0; }

//Identify name of user
M4SessionCl zsesion = M4Context.getM4SessionCl(request);
String zminombre = zsesion.getBagEntries("minombre");
zminombre = com.meta4.taglib.util.M4PresentationUtilTaglib.escape(zminombre);

//Identify language folder of session
M4SessionManager zm4session = M4Context.getSession(request);  
long ilanguageId = zm4session.getIdioma();
String zlanguageFolder = CheckConfig.checkFolderLanguage(new Long(ilanguageId).intValue(), CheckConfig.THCL);

Integer ziCurPos;
int ziIndex;

//Variables for data to be passed to excel
String zbase_id_currency = "";
String zbase_dt_revision_start = "";
String zbase_dt_revision_end = "";
String zbase_id_base_plan = "";
String zbase_nm_base_plan = "";
String zbase_nm_base_plan_type = "";
String zbase_amt_wu_budget = "";
String zbase_id_work_unit = "";
String zbase_nm_work_unit = "";
if (zibaseEmpCount > 0) {
%>
<script type="text/javascript" language="Javascript1.5">
//Arrays for data to be passed to excel
var _base_id_hr = new Array();
var _base_gb_name = new Array();
var _base_or_hr_role = new Array();
var _base_id_job = new Array();
var _base_nm_job = new Array();
var _base_job_level = new Array();
var _base_nm_salary_grade = new Array();
var _base_nm_evaluation_level = new Array();
var _base_nm_salary_type = new Array();
var _base_amt_base_salary = new Array();
var _base_amt_rec_inc = new Array();
var _base_prc_rec_inc = new Array();
var _base_amt_sug_min = new Array();
var _base_amt_sug_max = new Array();
var _base_prc_sug_cpr = new Array();
var _base_prc_sug_pos = new Array();
var _base_amt_rev_inc = new Array();
var _base_prc_rev_inc = new Array();
var _base_prc_rev_cpr = new Array();
var _base_prc_rev_pos = new Array();
var _base_amt_sal_garde_min = new Array();
var _base_amt_sal_garde_mid = new Array();
var _base_amt_sal_garde_max = new Array();
var _base_emp_change_factor = new Array();

var _base_id_hr_int = 1;
_base_or_hr_role[0] = 2;
_base_amt_sal_garde_min[0] = 3;
_base_amt_sal_garde_mid[0] = 4;
_base_amt_sal_garde_max[0] = 5;
_base_emp_change_factor[0] = 6;
_base_id_hr[0] = 7;
_base_id_job[0] = 8;
_base_job_level[0] = 9;
_base_nm_salary_grade[0] = 10;
_base_nm_evaluation_level[0] = 11;
_base_nm_salary_type[0] = 12;
_base_amt_base_salary[0] = 13;
_base_amt_rec_inc[0] = 15;
_base_prc_rec_inc[0] = 16;
_base_amt_sug_min[0] = 19;
_base_amt_sug_max[0] = 20;
_base_prc_sug_cpr[0] = 21;
_base_prc_sug_pos[0] = 22;
_base_amt_rev_inc[0] = 23;
_base_prc_rev_inc[0] = 24;
_base_prc_rev_cpr[0] = 25;
_base_prc_rev_pos[0] = 26;

//Data to be passed to excel

<m4:item var="zbase_id_currency" item="SCO_ID_CURRENCY" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_dt_revision_start" item="SCO_DT_REVISION_START" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_dt_revision_end" item="SCO_DT_REVISION_END" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_id_base_plan" item="SCO_ID_BASE_PLAN" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_nm_base_plan" item="SCO_NM_BASE_PLAN" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_nm_base_plan_type" item="SCO_NM_PLAN_TYPE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_amt_wu_budget" item="SCO_AMT_WU_BUDGET" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_id_work_unit" item="SCO_ID_WORK_UNIT" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_nm_work_unit" item="SCO_NM_WORK_UNIT" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>

<m4:dataloop outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN">
  <m4:current var="ziCurPos" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
  <% ziIndex = ziCurPos.intValue()+1; %>
  _base_id_hr[<%=ziIndex%>] = '<m4:item item="SCO_ID_HR" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_gb_name[<%=ziIndex%>] = '<m4:item item="SCO_GB_NAME" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_or_hr_role[<%=ziIndex%>] = '<m4:item item="SCO_OR_HR_ROLE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_id_job[<%=ziIndex%>] = '<m4:item item="SCO_ID_JOB" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_nm_job[<%=ziIndex%>] = '<m4:item item="SCO_NM_JOB" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_job_level[<%=ziIndex%>] = '<m4:item item="SCO_JOB_LEVEL" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_nm_salary_grade[<%=ziIndex%>] = '<m4:item item="SCO_NM_SALARY_GRADE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_nm_evaluation_level[<%=ziIndex%>] = '<m4:item item="SCO_NM_LEVEL" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_nm_salary_type[<%=ziIndex%>] = '<m4:item item="SCO_NM_SALARY_TYPE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_amt_base_salary[<%=ziIndex%>] = '<m4:item item="SCO_AMT_BASE_SALARY" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_amt_rec_inc[<%=ziIndex%>] = '<m4:item item="SCO_AMT_REC_INCREASE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_prc_rec_inc[<%=ziIndex%>] = '<m4:item item="SCO_PRC_REC_INCREASE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_amt_sug_min[<%=ziIndex%>] = '<m4:item item="SCO_AMT_SUG_MIN_INC" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_amt_sug_max[<%=ziIndex%>] = '<m4:item item="SCO_AMT_SUG_MAX_INC" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_prc_sug_cpr[<%=ziIndex%>] = '<m4:item item="SCO_PRC_SUG_COMPARATIO" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_prc_sug_pos[<%=ziIndex%>] = '<m4:item item="SCO_PRC_SUG_POSITION" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_amt_rev_inc[<%=ziIndex%>] = '<m4:item item="SCO_AMT_REV_INCREASE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_prc_rev_inc[<%=ziIndex%>] = '<m4:item item="SCO_PRC_REV_INCREASE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_prc_rev_cpr[<%=ziIndex%>] = '<m4:item item="SCO_PRC_REV_COMPARATIO" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_prc_rev_pos[<%=ziIndex%>] = '<m4:item item="SCO_PRC_REV_POSITION" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_amt_sal_garde_min[<%=ziIndex%>] = '<m4:item item="SCO_AMT_SAL_GRADE_MIN" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_amt_sal_garde_mid[<%=ziIndex%>] = '<m4:item item="SCO_AMT_SAL_GRADE_MID" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_amt_sal_garde_max[<%=ziIndex%>] = '<m4:item item="SCO_AMT_SAL_GRADE_MAX" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
  _base_emp_change_factor[<%=ziIndex%>] = '<m4:item item="SCO_EMP_CHANGE_FACTOR" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>';
</m4:dataloop>
</script>
<%}//end of base plan data
//------------------------------------------------------------------------------------------------------------------------
if (zivarbCount > 0) {
%>
<script type="text/javascript" language="Javascript1.5">
//Data depending on plan
var _varb_num_employees = new Array();
var _varb_id_currency = new Array();
var _varb_dt_revision_start = new Array();
var _varb_dt_revision_end = new Array();
var _varb_id_varb_plan = new Array();
var _varb_nm_varb_plan = new Array();
var _varb_nm_plan_type = new Array();
var _varb_amt_wu_budget = new Array();
var _varb_id_work_unit = new Array();
var _varb_nm_work_unit = new Array();

<m4:dataloop outputdef="SSM_MSR_VARIABLE_PLANS">
  <m4:current var="ziCurPos" outputdef="SSM_MSR_VARIABLE_PLANS"/>
  <% ziIndex = ziCurPos.intValue(); %>
  _varb_num_employees[<%=ziIndex%>] = '<m4:item item="SCO_NUM_EMPLOYEES" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_id_currency[<%=ziIndex%>] = '<m4:item item="SCO_ID_CURRENCY" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_dt_revision_start[<%=ziIndex%>] = '<m4:item item="SCO_DT_REVISION_START" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_dt_revision_end[<%=ziIndex%>] = '<m4:item item="SCO_DT_REVISION_END" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_id_varb_plan[<%=ziIndex%>] = '<m4:item item="SCO_ID_VAR_PLAN" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_nm_varb_plan[<%=ziIndex%>] = '<m4:item item="SCO_NM_VAR_PLAN" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_nm_plan_type[<%=ziIndex%>] = '<m4:item item="SCO_NM_PLAN_TYPE" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_amt_wu_budget[<%=ziIndex%>] = '<m4:item item="SCO_AMT_WU_BUDGET" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_id_work_unit[<%=ziIndex%>] = '<m4:item item="SCO_ID_WORK_UNIT" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_nm_work_unit[<%=ziIndex%>] = '<m4:item item="SCO_NM_WORK_UNIT" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
</m4:dataloop>

//Data depending on employee
var _varb_id_hr = new Array();
var _varb_gb_name = new Array();
var _varb_or_hr_role = new Array();
var _varb_id_job = new Array();
var _varb_nm_job = new Array();
var _varb_job_level = new Array();
var _varb_nm_evaluation_level = new Array();
var _varb_nm_salary_type = new Array();
var _varb_amt_current_value = new Array();
var _varb_amt_rec_increase = new Array();
var _varb_prc_rec_increase = new Array();
var _varb_amt_sug_min = new Array();
var _varb_amt_sug_max = new Array();
var _varb_prc_max_base = new Array();
var _varb_id_salary_plan = new Array();
var _varb_num_index_base = new Array();

var _varb_id_hr_int = 1;
_varb_or_hr_role[0] = 2;
_varb_num_index_base[0] = 3;
_varb_id_hr[0] = 7;
_varb_id_job[0] = 8;
_varb_job_level[0] = 9;
_varb_nm_salary_type[0] = 10;
_varb_nm_evaluation_level[0] = 11;
_varb_amt_current_value[0] = 12;
_varb_amt_rec_increase[0] = 14;
_varb_prc_rec_increase[0] = 15;
_varb_amt_sug_min[0] = 19;
_varb_amt_sug_max[0] = 20;
_varb_prc_max_base[0] = 21;

<m4:dataloop outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS">
  <m4:current var="ziCurPos" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>
  <% ziIndex = ziCurPos.intValue()+1; %>
  _varb_id_hr[<%=ziIndex%>] = '<m4:item item="SCO_ID_HR" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_gb_name[<%=ziIndex%>] = '<m4:item item="SCO_GB_NAME" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_or_hr_role[<%=ziIndex%>] = '<m4:item item="SCO_OR_HR_ROLE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_id_job[<%=ziIndex%>] = '<m4:item item="SCO_ID_JOB" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_nm_job[<%=ziIndex%>] = '<m4:item item="SCO_NM_JOB" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_job_level[<%=ziIndex%>] = '<m4:item item="SCO_JOB_LEVEL" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_nm_evaluation_level[<%=ziIndex%>] = '<m4:item item="SCO_NM_LEVEL" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_nm_salary_type[<%=ziIndex%>] = '<m4:item item="SCO_NM_SALARY_TYPE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_amt_current_value[<%=ziIndex%>] = '<m4:item item="SCO_AMT_CURRENT_VALUE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_amt_rec_increase[<%=ziIndex%>] = '<m4:item item="SCO_AMT_REC_INCREASE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_prc_rec_increase[<%=ziIndex%>] = '<m4:item item="SCO_PRC_REC_INCREASE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_amt_sug_min[<%=ziIndex%>] = '<m4:item item="SCO_AMT_SUG_MIN_DIF" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_amt_sug_max[<%=ziIndex%>] = '<m4:item item="SCO_AMT_SUG_MAX_DIF" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_prc_max_base[<%=ziIndex%>] = '<m4:item item="SCO_PRC_MAX_BASE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_num_index_base[<%=ziIndex%>] = '<m4:item item="SCO_NUM_INDEX_BASE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
  _varb_id_salary_plan[<%=ziIndex%>] = '<m4:item item="SCO_ID_VAR_PLAN" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_VAR_PLANS"/>';
</m4:dataloop>

</script>
<%}//end of variable plans
//------------------------------------------------------------------------------------------------------------------------
%>
<script type="text/javascript" language="Javascript1.5">

<%//Definition of excel (corordinates of columns) (A1 = 1,1; A2 = 2,1...)%>
function definitionExcel(visible) {
  <%//Private variables%>
  var pathTemplate = "/plantillas/<%=zlanguageFolder%>/mss_salary_revision.xlt";

  <%//Public variables%>
  this.reviewSheet = 1;<%//       Index of worksheet%>
  this.offsetColumns = 5;<%//       Offset of columns in worksheet%>
  this.baseRangeStart = 5;<%//      Base plan: start of range%>
  this.baseRangeLines = 14;<%//     Base plan: number of lines (information required to be deleted if there is no base plan)%>
  this.baseTableStart = 11;<%//     Base plan: firts line of table for employees%>
  this.baseTableLines = 3;<%//      Base plan: number of lines of table for employees%>

  this.varbRangeStart = 19;<%//     Variable plan: start of range%>
  this.varbRangeLines = 14;<%//     Variable plan: number of lines (information required to be deleted or copied)%>
  this.varbTableStart = 25;<%//     Variable plan: firts line of table for employees%>
  this.varbTableLines = 3;<%//      Variable plan: number of lines of table for employees%>

  this.varbStandAloneOffset = 14;<%//   Stand-alone variable plan: start of range (rest of values equal to variable plan)%>
  this.varbStandAloneColOffset = 3;<%// Stand-alone variable plan: negative column offset for columns that come after deleted columns%>

  this.recordsBasePlan = 0;<%//     Number of employees in base plan%>
  this.variablePlans = 0;<%//       Number of variable plans%>
  this.recordsVarbPlan = new Array();<%// Number of employees in variable plan%>

  this.errorText = new String();<%//    Error string, no error if null%>
  this.errorCode = 0;<%//         Internal error code%>

  <%//These variables are public but internal!%>
  this.oExcel;
  this.workSheet;
  this.workBook;
  this.statusExcel;<%//         Indicates status of excel: true if excel was already open%>

  <%//Constructor%>
  this.openExcel(pathTemplate, visible);
}

function _openExcel (pathTemplate, visible) {
  <%//Identify status of Excel, true if excel was already open%>
  this.statusExcel = opener._getStatusExcel();
  <%//Get Excel object from opener to be able to import from the open instance%>
  this.oExcel = opener._getExcel();
  try {
    if(this.oExcel != null) {
      this.oExcel.Visible = visible;
      this.oExcel.Workbooks.Open("http://" + location.host + pathTemplate);
      this.workBook = this.oExcel.ActiveWorkbook;
      this.oExcel.workSheets(this.reviewSheet).Activate;
      this.workSheet = this.oExcel.ActiveSheet;
      <%//Disable automatic calculation of formulas%>
      this.workSheet.EnableCalculation = false;
    }else{
      this.errorCode = 100;
      this.errorText = "<%=Mss_cr.getProperty("msscr.Error2-2")%>";
    }
  }
  catch(e) { 
    this.closeExcel();
    this.errorCode = 101;
    this.errorText = "<%=Mss_cr.getProperty("msscr.Error2-3")%>";
  }
  return this;
}
definitionExcel.prototype.openExcel = _openExcel;

function _closeExcel () {
  <%//Close excel only if it was not already open%>
  if (!this.statusExcel && this.oExcel != null) {
    this.oExcel.Quit();
  }else{
    if (this.workBook != null) {
      <%//Close workbook if open%>
      this.workBook.Close(false);
    }
  }
  return this;
}
definitionExcel.prototype.closeExcel = _closeExcel;

function _prepareBasePlan () {
  this.recordsBasePlan = <%=zibaseEmpCount%>;
  try {
    <%//If number of employees is zero, remove area of base plan from worksheet%>
    if (this.recordsBasePlan > 0) {
      if (this.baseTableLines < this.recordsBasePlan) {
        <%//Insert lines (make sure to copy a line from the center of the table to avoid copying the borders).%>
        var vindex = new String(this.baseTableStart + 1);
        for (i = this.baseTableLines; i < this.recordsBasePlan; i++) {
          this.workSheet.Rows(vindex + ":" + vindex).Copy;
          this.workSheet.Rows(vindex + ":" + vindex).Insert;
        }
      } else if (this.baseTableLines > this.recordsBasePlan) {
        <%//Delete unused lines%>
        var vindexStart = new String(this.baseTableStart + this.recordsBasePlan);
        var vindexEnd = new String(this.baseTableStart + this.baseTableLines - 1);
        this.workSheet.Rows(vindexStart + ":" + vindexEnd).Delete;
      }
    }else{
      <%//Remove block of base plan%>
      var vindexStart = new String(this.baseRangeStart);
      var vindexEnd = new String(this.baseRangeStart + this.baseRangeLines - 1);
      this.workSheet.Rows(vindexStart + ":" + vindexEnd).Delete;
    }
  }
  catch(e) { 
    this.closeExcel();
    this.errorCode = 200;
    this.errorText = "<%=Mss_cr.getProperty("msscr.Error2-4")%>";
  }
  return this;
}
definitionExcel.prototype.prepareBasePlan = _prepareBasePlan;

function _prepareVariablePlans () {
  this.recordsBasePlan = <%=zibaseEmpCount%>;
  this.variablePlans = <%=zivarbCount%>;
  for (i = 0; i < this.variablePlans; i++) {
    this.recordsVarbPlan[i] = _varb_num_employees[i];
  }
  try {
    <%//If number of variable plans is zero, remove area of variable plan from worksheet%>
    if (this.variablePlans < 1) {
      <%//Remove block of variable plans%>
      var vindexStart = new String(this.varbRangeStart);
      var vindexEnd = new String(this.varbRangeStart + this.varbRangeLines + this.varbStandAloneOffset - 1);
      this.workSheet.Rows(vindexStart + ":" + vindexEnd).Delete;
    }else{
      if (this.recordsBasePlan == 0) {
        <%//Remove block of variable plan that depends on base plan%>
        var vindexStart = new String(this.varbRangeStart);
        var vindexEnd = new String(this.varbRangeStart + this.varbRangeLines - 1);
        this.workSheet.Rows(vindexStart + ":" + vindexEnd).Delete;
      }else{
        <%//Remove block of stand-alon variable plan%>
        var vindexStart = new String(this.varbRangeStart + this.varbStandAloneOffset);
        var vindexEnd = new String(this.varbRangeStart + this.varbStandAloneOffset + this.varbRangeLines - 1);
        this.workSheet.Rows(vindexStart + ":" + vindexEnd).Delete;
      }

      if (this.variablePlans > 1) {
        <%//Duplicate area of variable plans%>
        var vindexStart = new String(this.varbRangeStart);
        var vindexEnd = new String(this.varbRangeStart + this.varbRangeLines - 1);
        var vindexDest = new String();
        for (i = 1; i < this.variablePlans; i++) {
          vindexDest = this.varbRangeStart + (this.varbRangeLines * i);
          this.workSheet.Rows(vindexStart + ":" + vindexEnd).Copy;
          this.workSheet.Rows(vindexDest + ":" + vindexDest).Insert;
        }
      }
      var vindexOrg = new String(this.varbTableStart + 1);
      var vindexDest = new String();
      var vindexTab = new String();
      var itableOffset = this.varbTableStart - this.varbRangeStart;
      <%//Loop backwards through the plans to avoid unnecessary calculation related to the position.%>
      for (i = this.variablePlans-1; i >= 0; i--) {
        if (this.varbTableLines < this.recordsVarbPlan[i]) {
          <%//Insert lines (make sure to copy a line from the center of the table to avoid copying the borders).%>
          vindexTab = this.varbRangeStart + (this.varbRangeLines * i) + itableOffset + 1;
          for (k = this.varbTableLines; k < this.recordsVarbPlan[i]; k++) {
            this.workSheet.Rows(vindexOrg + ":" + vindexOrg).Copy;
            this.workSheet.Rows(vindexTab + ":" + vindexTab).Insert;
          }
        } else if (this.varbTableLines > this.recordsVarbPlan[i]) {
          <%//Delete unused lines%>
          var voffset = this.varbRangeStart + (this.varbRangeLines * i) + itableOffset;
          var vindexStart = new String(voffset + parseInt(this.recordsVarbPlan[i]));
          var vindexEnd = new String(voffset + this.varbTableLines - 1);
          this.workSheet.Rows(vindexStart + ":" + vindexEnd).Delete;
        }
      }
    }
  }
  catch(e) { 
    this.closeExcel();
    this.errorCode = 300;
    this.errorText = "<%=Mss_cr.getProperty("msscr.Error2-4")%>";
  }
  return this;
}
definitionExcel.prototype.prepareVariablePlans = _prepareVariablePlans;

function _exportBasePlan () {
  try {
    var _vvalue = '';
    var _ioffset = this.baseRangeStart;<%//   Offset of variable plan area%>
    <%//Pass general details of base plan to excel%>
    this.workSheet.Cells(_ioffset + 0, this.offsetColumns + 4).value = "<%=zminombre%>";<%//          Name manager%>
    this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 4).value = "<%=zbase_nm_work_unit%>";<%//     Name work unit%>
    this.workSheet.Cells(_ioffset + 2, this.offsetColumns + 4).value = "<%=zbase_amt_wu_budget%>";<%//      WU Budget%>
    this.workSheet.Cells(_ioffset + 0, this.offsetColumns + 9).value = "<%=zbase_id_base_plan%> - <%=zbase_nm_base_plan%> (<%=zbase_nm_base_plan_type%>)";<%//  Plan ID - Name (Type)%>
    this.workSheet.Cells(_ioffset + 2, this.offsetColumns + 9).value = "<%=zbase_id_currency%>";<%//      Currency%>
    <%//Pass dates only if the corresponding cell is empty%>
    _vvalue = this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 9).value;
    if (_vvalue == null || _vvalue == '') {
      this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 9).value = "<%=zbase_dt_revision_start%>";<%//  Revision start%>
    }
    _vvalue = this.workSheet.Cells(_ioffset + 1, this.offsetColumns +11).value;
    if (_vvalue == null || _vvalue == '') {
      this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 11).value = "<%=zbase_dt_revision_end%>";<%// Revision end%>
    }
    
    var _iE = 0;
    var _iA = 0;
    <%//Pass employees of base plan to excel%>
    for(i = 0; i < this.recordsBasePlan; i++) {
      _iE = this.baseTableStart + i;
      _iA = i + 1;
      this.workSheet.Cells(_iE, _base_id_hr_int).value = _base_id_hr[_iA];
      this.workSheet.Cells(_iE, _base_or_hr_role[0]).value = _base_or_hr_role[_iA];
      this.workSheet.Cells(_iE, _base_amt_sal_garde_min[0]).value = _base_amt_sal_garde_min[_iA];
      this.workSheet.Cells(_iE, _base_amt_sal_garde_mid[0]).value = _base_amt_sal_garde_mid[_iA];
      this.workSheet.Cells(_iE, _base_amt_sal_garde_max[0]).value = _base_amt_sal_garde_max[_iA];
      this.workSheet.Cells(_iE, _base_emp_change_factor[0]).value = _base_emp_change_factor[_iA];
      this.workSheet.Cells(_iE, _base_id_hr[0]).value = _base_id_hr[_iA] + " - " + _base_gb_name[_iA];
      this.workSheet.Cells(_iE, _base_id_job[0]).value = _base_id_job[_iA] + " - " + _base_nm_job[_iA];
      this.workSheet.Cells(_iE, _base_job_level[0]).value = _base_job_level[_iA];
      this.workSheet.Cells(_iE, _base_nm_salary_grade[0]).value = _base_nm_salary_grade[_iA];
      this.workSheet.Cells(_iE, _base_nm_evaluation_level[0]).value = _base_nm_evaluation_level[_iA];
      this.workSheet.Cells(_iE, _base_nm_salary_type[0]).value = _base_nm_salary_type[_iA];
      this.workSheet.Cells(_iE, _base_amt_base_salary[0]).value = _base_amt_base_salary[_iA];
      this.workSheet.Cells(_iE, _base_amt_rec_inc[0]).value = _base_amt_rec_inc[_iA];
<%//Calculated in excel: this.workSheet.Cells(_iE, _base_prc_rec_inc[0]).value = _base_prc_rec_inc[_iA];%>
      this.workSheet.Cells(_iE, _base_amt_sug_min[0]).value = _base_amt_sug_min[_iA];
      this.workSheet.Cells(_iE, _base_amt_sug_max[0]).value = _base_amt_sug_max[_iA];
      this.workSheet.Cells(_iE, _base_prc_sug_cpr[0]).value = _base_prc_sug_cpr[_iA];
      this.workSheet.Cells(_iE, _base_prc_sug_pos[0]).value = _base_prc_sug_pos[_iA];
      this.workSheet.Cells(_iE, _base_amt_rev_inc[0]).value = _base_amt_rev_inc[_iA];
      this.workSheet.Cells(_iE, _base_prc_rev_inc[0]).value = _base_prc_rev_inc[_iA];
      this.workSheet.Cells(_iE, _base_prc_rev_cpr[0]).value = _base_prc_rev_cpr[_iA];
      this.workSheet.Cells(_iE, _base_prc_rev_pos[0]).value = _base_prc_rev_pos[_iA];
    }
  }
  catch(e) { 
    this.closeExcel();
    this.errorCode = 400;
    this.errorText = "<%=Mss_cr.getProperty("msscr.Error2-4")%>";
  }
  return this;
}
definitionExcel.prototype.exportBasePlan = _exportBasePlan;

function _exportVariablePlans () {
  try {
    var _vvalue = '';
    var _ioffsetBase = 0;<%// Additional number of records of base area that have to be added to offset of variable area (can be negative if there are less employees in base plan than line in table)%>
    var _ioffset = 0;<%//   Offset of variable plan area%>
    var _iE = 0;<%//      Index Excel worksheet%>
    var _iA = 0;<%//      Index data-array%>

    <%//Identify if there is a base plan and if yes if it has more lines than in template defined%>
    if (this.recordsBasePlan > 0) {
      <%//Base plan available, calculate number of lines added to it%>
      _ioffsetBase = this.recordsBasePlan - this.baseTableLines;<%//Max is necessary in case there are less employees than lines%>
    }else{
      <%//No base plan available, identify number of lines to be removed%>
      _ioffsetBase = -this.baseRangeLines;
    }
    _ioffset = this.varbRangeStart + _ioffsetBase;<%//Calculate first offset%>
    //Loop through all plans
    for (i = 0; i < this.variablePlans; i++) {
      <%//Pass general details of variable plan to excel%>
      this.workSheet.Cells(_ioffset + 0, this.offsetColumns + 4).value = "<%=zminombre%>";<%//          Name manager%>
      this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 4).value = _varb_nm_work_unit[i];<%//     Name work unit%>
      this.workSheet.Cells(_ioffset + 2, this.offsetColumns + 4).value = _varb_amt_wu_budget[i];<%//      WU Budget%>
      this.workSheet.Cells(_ioffset + 0, this.offsetColumns + 9).value = _varb_id_varb_plan[i] + " - " + _varb_nm_varb_plan[i] + " (" + _varb_nm_plan_type + ")";<%// Plan ID - Name (Type)%>
      this.workSheet.Cells(_ioffset + 2, this.offsetColumns + 9).value = _varb_id_currency[i];<%//      Currency%>
      <%//Pass dates only if the corresponding cell is empty%>
      _vvalue = this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 9).value;
      if (_vvalue == null || _vvalue == '') {
        this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 9).value = _varb_dt_revision_start[i];<%//  Revision start%>
      }
      _vvalue = this.workSheet.Cells(_ioffset + 1, this.offsetColumns +11).value;
      if (_vvalue == null || _vvalue == '') {
        this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 11).value = _varb_dt_revision_end[i];<%// Revision end%>
      }

      <%//Pass employees of variable plan to excel%>
      for(k = 0; k < this.recordsVarbPlan[i]; k++) {
        _iE = _ioffset + (this.varbTableStart-this.varbRangeStart) + k;
        _iA++;<%//Skip 0 because it contains the position of the column%>
        this.workSheet.Cells(_iE, _varb_id_hr_int).value = _varb_id_hr[_iA];
        this.workSheet.Cells(_iE, _varb_or_hr_role[0]).value = _varb_or_hr_role[_iA];
        this.workSheet.Cells(_iE, _varb_num_index_base[0]).value = _varb_num_index_base[_iA];
        this.workSheet.Cells(_iE, _varb_id_hr[0]).value = _varb_id_hr[_iA] + " - " + _varb_gb_name[_iA];
        this.workSheet.Cells(_iE, _varb_id_job[0]).value = _varb_id_job[_iA] + " - " + _varb_nm_job[_iA];
        this.workSheet.Cells(_iE, _varb_job_level[0]).value = _varb_job_level[_iA];
        this.workSheet.Cells(_iE, _varb_nm_evaluation_level[0]).value = _varb_nm_evaluation_level[_iA];
        this.workSheet.Cells(_iE, _varb_amt_current_value[0]).value = _varb_amt_current_value[_iA];
        this.workSheet.Cells(_iE, _varb_nm_salary_type[0]).value = _varb_nm_salary_type[_iA];
        this.workSheet.Cells(_iE, _varb_amt_rec_increase[0]).value = _varb_amt_rec_increase[_iA];
<%//Calculated in excel: this.workSheet.Cells(_iE, _varb_prc_rec_increase[0]).value = _varb_prc_rec_increase[_iA];%>
        if (this.recordsBasePlan == 0) {
          this.workSheet.Cells(_iE, _varb_amt_sug_min[0] - this.varbStandAloneColOffset).value = _varb_amt_sug_min[_iA];
          this.workSheet.Cells(_iE, _varb_amt_sug_max[0] - this.varbStandAloneColOffset).value = _varb_amt_sug_max[_iA];
        }else{
          this.workSheet.Cells(_iE, _varb_amt_sug_min[0]).value = _varb_amt_sug_min[_iA];
          this.workSheet.Cells(_iE, _varb_amt_sug_max[0]).value = _varb_amt_sug_max[_iA];
          this.workSheet.Cells(_iE, _varb_prc_max_base[0]).value = _varb_prc_max_base[_iA];
        }
      }
      <%//Calculate offset for next variable plan%>
      _ioffset += (this.varbRangeLines * (i+1)) + (this.recordsVarbPlan[i] - this.varbTableLines);
    }
  }
  catch(e) { 
    this.closeExcel();
    this.errorCode = 500;
    this.errorText = "<%=Mss_cr.getProperty("msscr.Error2-4")%>";
  }
  return this;
}
definitionExcel.prototype.exportVariablePlans = _exportVariablePlans;

function _exportMetaInfo () {
  <%//Pass meta data to excel that are used upon import to identify the data%>
  try {
    <%//Work Unit ID%>
    if (this.recordsBasePlan > 0) {
      this.workSheet.Cells(1, 1).value = "<%=zbase_id_work_unit%>";
    }else{
      this.workSheet.Cells(1, 1).value = _varb_id_work_unit[0];
    }
    <%//Base plan ID%>
    this.workSheet.Cells(2, 1).value = "<%=zbase_id_base_plan%>";
    <%//Number of lines in base plan%>
    this.workSheet.Cells(1, 2).value = this.recordsBasePlan;
    <%//Number of variable plans%>
    this.workSheet.Cells(2, 2).value = this.variablePlans;
    <%//Variable plan IDs and number of lines%>
    for (i = 0; i < this.variablePlans; i++) {
      this.workSheet.Cells(1, 3 + i).value = _varb_id_varb_plan[i];
      this.workSheet.Cells(2, 3 + i).value = this.recordsVarbPlan[i];
    }
  }
  catch(e) { 
    this.closeExcel();
    this.errorCode = 600;
    this.errorText = "<%=Mss_cr.getProperty("msscr.Error2-4")%>";
  }
  return this;
}
definitionExcel.prototype.exportMetaInfo = _exportMetaInfo;

function _finish (save) {
  try {
    <%//Enable automatic calculation of formulas%>
    this.workSheet.EnableCalculation = true;
    <%//Protect worksheet%>
    this.workSheet.Protect();
    this.oExcel.Visible = true;
    if (save) {
      this.oExcel.Dialogs(5).Show("Review 2006 Work Unit aaa");
    }
  }
  catch(e) { 
    this.closeExcel();
    this.errorCode = 700;
    this.errorText = "<%=Mss_cr.getProperty("msscr.Error2-5")%>";
  }
  return this;
}
definitionExcel.prototype.finish = _finish;

function _GenerateWorkSheet() {
  var _sContent = "";
  var _sResult = "<%=Mss_cr.getProperty("msscr.Aviso6-1")%>";

  var myExcel = new definitionExcel(true);
  if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {
  myExcel.prepareVariablePlans();<%//   Must run before prepareBasePlan because of relative positions inside excel!%>
  if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {
  myExcel.prepareBasePlan();
  if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {
  myExcel.exportBasePlan();
  if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {
  myExcel.exportVariablePlans();
  if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {
  myExcel.exportMetaInfo();
  if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {
  myExcel.finish(false);
  if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {
  }}}}}}}

  _sContent = "<table class='tablaestados' width='100%' cellspacing='0' border='0'>";
  _sContent += "<tr class='tablaestadosceldatitulo'>";
  _sContent += "<td><%=Mss_cr.getProperty("msscr.Mens-11")%></td>";
  _sContent += "</tr>";
  _sContent += "<tr>";
  _sContent += "<td class='fuentevalor'>" + _sResult + "</td>";
  _sContent += "</tr>";
  _sContent += "<tr>";
  _sContent += "<td class='fuentevalor'>&nbsp;</td>";
  _sContent += "</tr>";
  _sContent += "<tr>";
  _sContent += "<td class='fuenteboton'><a href='javascript:window.close()' title='<%=Mss_cr.getProperty("msscr.Pop1-12")%>'><img src='/iconos/entrar_blanco.gif' width='36' height='36' alt='<%=Mss_cr.getProperty("msscr.Pop1-12")%>' onmouseover='m4luztotal (this,245,245,245,50,40,40,100,100,100)' onmouseout='m4oscuridad(this)'/></a></td>";
  _sContent += "</tr>";
  _sContent += "</table>";

  document.write(_sContent);

  if (myExcel.errorCode == 0) window.close();
}

</script>

<script type="text/javascript" language="Javascript1.5">_GenerateWorkSheet();</script>
<body>

</body>
<m4:endpage/>
