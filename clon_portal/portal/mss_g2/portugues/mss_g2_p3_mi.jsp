<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page import="com.meta4.configuration.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Link1b-2")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
</head>

<body>
<%
String zsubsesion = "SSM_SALARY_REVIEW_PROCESS";
String zmeta4object = "SSM_SALARY_REVIEW_PROCESS";
String id_wu_plan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_wu_plan");
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_MSR_IMPORT" m4object="<%=zsubsesion%>">
  <m4:param name="ARG_ID_WU_PLAN" value="<%=id_wu_plan%>"/>
</m4:exec>
<m4:outputdef node="SSM_MSR_EMPLOYEES_BASE_PLAN" m4alias="SSM_MSR_EMPLOYEES_BASE_PLAN" m4object="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_MSR_VARIABLE_PLANS" m4alias="SSM_MSR_VARIABLE_PLANS" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_MSR_EMPLOYEES_BASE_PLAN" alias="base_plan_emp_count" method="Count" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_MSR_VARIABLE_PLANS" alias="varb_plan_count" method="Count" m4object="<%=zsubsesion%>"/>
<m4:endjob/>

<%
//Identify language folder of session
M4SessionManager zm4session = M4Context.getSession(request);  
long ilanguageId = zm4session.getIdioma();
String zlanguageFolder = CheckConfig.checkFolderLanguage(new Long(ilanguageId).intValue(), CheckConfig.THCL);

String zsbaseEmpCount;
String zsvarbCount;
int zibaseEmpCount = 0;
int zivarbCount = 0;
%>
<m4:outputexec var="zsbaseEmpCount" alias="base_plan_emp_count"/>
<m4:outputexec var="zsvarbCount" alias="varb_plan_count"/>
<%
try { zibaseEmpCount = Integer.parseInt(zsbaseEmpCount); } catch(Exception e) { zibaseEmpCount = 0; }
try { zivarbCount = Integer.parseInt(zsvarbCount); } catch(Exception e) { zivarbCount = 0; }

Integer ziCurPos;
int ziIndex;

//Variables that indicate the columns of the excel file that contain data
int zbase_idx_id_hr = 1;
int zbase_idx_or_hr_role = 2;
int zbase_idx_amt_rec_inc = 15;
int zbase_idx_prc_rec_inc = 16;
int zbase_idx_comment = 27;

//Variables for basic data to validate excel file
String zbase_id_currency = "";
String zbase_id_base_plan = "";
String zbase_nm_base_plan = "";
String zbase_nm_base_plan_type = "";
String zbase_id_work_unit = "";
String zbase_nm_work_unit = "";
String zbase_num_employees = "";
String zbase_id_base_plan_html = "";
String zbase_id_work_unit_html = "";
%>
<script type="text/javascript" language="Javascript1.5">
<m4:item var="zbase_id_currency" item="SCO_ID_CURRENCY" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_id_base_plan" item="SCO_ID_BASE_PLAN" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_nm_base_plan" item="SCO_NM_BASE_PLAN" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_nm_base_plan_type" item="SCO_NM_PLAN_TYPE" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_id_work_unit" item="SCO_ID_WORK_UNIT" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_nm_work_unit" item="SCO_NM_WORK_UNIT" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_num_employees" item="SCO_NUM_EMPLOYEES" jsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN"/>
<m4:item var="zbase_id_base_plan_html" item="SCO_ID_BASE_PLAN" htmlsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN" jsafe="true"/>
<m4:item var="zbase_id_work_unit_html" item="SCO_ID_WORK_UNIT" htmlsafe="true" outputdef="SSM_MSR_EMPLOYEES_BASE_PLAN" jsafe="true"/>
</script>

<%//Parse variable that contains number of employees of base plan
int zibase_num_employees = 0;
try { zibase_num_employees = Integer.parseInt(zbase_num_employees); } catch(Exception e) { zibase_num_employees = 0; }
//end of base plan data

//------------------------------------------------------------------------------------------------------------------------
int iempVarPlan[];
iempVarPlan = new int[zivarbCount];
String zempVarPlan = "";

//Variables that indicate the columns of the excel file that contain data
int zvarb_idx_id_hr = 1;
int zvarb_idx_or_hr_role = 2;
int zvarb_idx_amt_rec_inc = 13;
int zvarb_idx_prc_rec_inc = 15;
int zvarb_idx_comment = 22;

if (zivarbCount > 0) {
%>
<script type="text/javascript" language="Javascript1.5">
//Data depending on plan
var _varb_num_employees = new Array();
var _varb_id_currency = new Array();
var _varb_id_varb_plan = new Array();
var _varb_nm_varb_plan = new Array();
var _varb_nm_plan_type = new Array();
var _varb_id_work_unit = new Array();
var _varb_nm_work_unit = new Array();
var _varb_id_varb_plan_html = new Array();

<m4:dataloop outputdef="SSM_MSR_VARIABLE_PLANS">
  <m4:current var="ziCurPos" outputdef="SSM_MSR_VARIABLE_PLANS"/>
  <% ziIndex = ziCurPos.intValue(); %>
  <m4:item var="zempVarPlan" item="SCO_NUM_EMPLOYEES" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>
  _varb_num_employees[<%=ziIndex%>] = '<m4:item item="SCO_NUM_EMPLOYEES" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_id_currency[<%=ziIndex%>] = '<m4:item item="SCO_ID_CURRENCY" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_id_varb_plan[<%=ziIndex%>] = '<m4:item item="SCO_ID_VAR_PLAN" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_nm_varb_plan[<%=ziIndex%>] = '<m4:item item="SCO_NM_VAR_PLAN" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_nm_plan_type[<%=ziIndex%>] = '<m4:item item="SCO_NM_PLAN_TYPE" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_id_work_unit[<%=ziIndex%>] = '<m4:item item="SCO_ID_WORK_UNIT" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_nm_work_unit[<%=ziIndex%>] = '<m4:item item="SCO_NM_WORK_UNIT" jsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS"/>';
  _varb_id_varb_plan_html[<%=ziIndex%>] = '<m4:item item="SCO_ID_VAR_PLAN" htmlsafe="true" outputdef="SSM_MSR_VARIABLE_PLANS" jsafe="true"/>';
  <% iempVarPlan[ziIndex] = Integer.parseInt(zempVarPlan); %>
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

  this.recordsBasePlan = 0;<%//     Number of employees in base plan%>
  this.variablePlans = 0;<%//       Number of variable plans%>
  this.recordsVarbPlan = new Array();<%// Number of employees in variable plan%>

  this.errorText = new String();<%//    Error string, no error if null%>
  this.errorCode = 0;<%//         Internal error code%>

  <%//Real values of excel%>
  this.excelWorkUnitId = "";
  this.excelBasePlanId = "";
  this.excelEmpsBasePlan = 0;
  this.excelVarbPlans = 0;
  this.excelVarbPlanId = new Array();
  this.excelEmpsVarbPlan = new Array();

  <%//These variables are public but internal!%>
  this.oExcel;
  this.workSheet;
  this.form;
  this.workBook;
  this.statusExcel;<%//         Indicates status of excel: true if excel was already open%>

  <%//Constructor%>
  this.openExcel(pathTemplate, visible);
}

function _openExcel (pathTemplate, visible) {
  <%//Identify status of Excel, if true excel was already open%>
  this.statusExcel = opener._getStatusExcel();
  <%//Get Excel object from opener to be able to import from the open instance%>
  this.oExcel = opener._getExcel();

  this.recordsBasePlan = <%=zbase_num_employees%>;
  this.variablePlans = <%=zivarbCount%>;
  this.form = document.forms["zdata"];
  try {
    if(this.oExcel != null) {
      this.oExcel.Visible = visible;
      var vbValid = false;
      if (this.statusExcel) {
        if (this.oExcel.workBooks.Count > 0) {
          <%//Position on correct worksheet in currently active workbook%>
          this.oExcel.workSheets(this.reviewSheet).Activate;
          this.workSheet = this.oExcel.ActiveSheet;
          <%//Validate that current workbook is valid%>
          this.validateFile();
          if (this.errorCode != 0) {
            <%//Reset error code%>
            this.errorCode = 0;
            <%//If invalid, loop through all workbook and identify the one valid%>
            for (j = 1; (j <= this.oExcel.workBooks.Count) && (!vbValid); j++) {
              this.oExcel.workBooks(j).Activate;
              <%//Position on correct worksheet%>
              this.oExcel.workSheets(this.reviewSheet).Activate;
              this.workSheet = this.oExcel.ActiveSheet;
              <%//Validate file%>
              this.validateFile();
              if (this.errorCode == 0) {
                vbValid = true;
              }else{
                <%//Reset error code%>
                this.errorCode = 0;
              }
            }
          }else{
            vbValid = true;
          }
        }
      }
      <%//Only show open-file dialog if excel instance is new or no valid workbook could be identified%>
      if (!vbValid) {
        if (this.oExcel.Dialogs(1).Show()) {
          <%//Position on correct worksheet%>
          this.oExcel.workSheets(this.reviewSheet).Activate;
          this.workSheet = this.oExcel.ActiveSheet;
          <%//Validate file%>
          this.validateFile();
        }else{
          <%//Open file dialog cancelled%>
          this.closeExcel();
          this.errorCode = 101;
          this.errorText = "<%=Mss_cr.getProperty("msscr.Error2-6")%>";
        }
      }
    }else{
      this.closeExcel();
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

function _validateFile () {
  for (i = 0; i < this.variablePlans; i++) {
    this.recordsVarbPlan[i] = _varb_num_employees[i];
  }
  try {
    <%//Identify data that are used to validate the content of the file%>
    this.excelWorkUnitId = this.workSheet.Cells(1, 1).value;
    this.excelBasePlanId = this.workSheet.Cells(2, 1).value;
    this.excelEmpsBasePlan = this.workSheet.Cells(1, 2).value;
    this.excelVarbPlans = this.workSheet.Cells(2, 2).value;
    if (this.excelVarbPlans > 0) {
      for (i = 0; i < this.excelVarbPlans; i++) {
        this.excelVarbPlanId[i] = this.workSheet.Cells(1, 3 + i).value;
        this.excelEmpsVarbPlan[i] = this.workSheet.Cells(2, 3 + i).value;
      }
    }
    <%//Compare all values%>
    if (this.excelWorkUnitId != "<%=zbase_id_work_unit%>") {this.errorCode = 200;} else {
    if (this.excelBasePlanId != "<%=zbase_id_base_plan%>") {this.errorCode = 200;} else {
    if (this.excelEmpsBasePlan != <%=zbase_num_employees%>) {this.errorCode = 200;} else {
    if (this.excelVarbPlans != <%=zivarbCount%>) {this.errorCode = 200;} else {
    if (this.excelVarbPlans > 0) {
      for (i = 0; i < this.excelVarbPlans; i++) {
        if (this.excelVarbPlanId[i] != _varb_id_varb_plan[i]) {this.errorCode = 200; i = this.excelVarbPlans;}
        if (this.excelEmpsVarbPlan[i] != _varb_num_employees[i]) {this.errorCode = 200; i = this.excelVarbPlans;}
      }
    }
    }}}}
    if (this.errorCode == 200) {
      this.closeExcel();
    }
  }
  catch(e) { 
    this.closeExcel();
    this.errorCode = 201;
    this.errorText = "<%=Mss_cr.getProperty("msscr.Error2-4")%>";
  }
  return this;
}
definitionExcel.prototype.validateFile = _validateFile;

function _importMetaInfo () {
  try {
    this.form.elements["SCO_ID_WORK_UNIT"].value = this.excelWorkUnitId;
    this.form.elements["SCO_ID_BASE_PLAN"].value = this.excelBasePlanId;
    this.form.elements["SCO_NUM_EMPLOYEES_BASE"].value = this.excelEmpsBasePlan;
    this.form.elements["SCO_NUM_VARB_PLANS"].value = this.excelVarbPlans;
    for (i = 0; i < this.excelVarbPlans; i++) {
      this.form.elements["SCO_ID_VARB_PLAN_" + i].value = this.excelVarbPlanId[i];
      this.form.elements["SCO_NUM_EMP_VARB_" + i].value = this.excelEmpsVarbPlan[i];
    }
  }
  catch(e) { 
    this.closeExcel();
    this.errorCode = 300;
    this.errorText = "<%=Mss_cr.getProperty("msscr.Error2-8")%>";
  }
  return this;
}
definitionExcel.prototype.importMetaInfo = _importMetaInfo;

function _importBasePlan () {
  try {
    if (this.recordsBasePlan > 0) {
      var _vvalue = '';
      var _ioffset = this.baseRangeStart;<%//   Offset of variable plan area%>
      <%//Identify general data%>
      this.form.elements["SCO_ID_CURRENCY_BASE"].value = this.workSheet.Cells(_ioffset + 2, this.offsetColumns + 9).value;<%//  Currency%>
      this.form.elements["SCO_DT_START_BASE"].value = this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 9).value;<%//   Revision start%>
      this.form.elements["SCO_DT_END_BASE"].value = this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 11).value;<%//    Revision end%>

      var _iE = 0;
      <%//Identify employee data%>
      for(i = 0; i < this.recordsBasePlan; i++) {
        _iE = this.baseTableStart + i;
        this.form.elements["SCO_ID_HR_BASE_" + i].value = this.workSheet.Cells(_iE, <%=zbase_idx_id_hr%>).value;
        this.form.elements["SCO_OR_HR_ROLE_BASE_" + i].value = this.workSheet.Cells(_iE, <%=zbase_idx_or_hr_role%>).value;
        _vvalue = this.workSheet.Cells(_iE, <%=zbase_idx_amt_rec_inc%>).value; if (_vvalue) this.form.elements["SCO_AMT_INC_BASE_" + i].value = _vvalue;
        _vvalue = this.workSheet.Cells(_iE, <%=zbase_idx_prc_rec_inc%>).value; if (_vvalue) this.form.elements["SCO_PRC_INC_BASE_" + i].value = _vvalue;
        _vvalue = this.workSheet.Cells(_iE, <%=zbase_idx_comment%>).value; if (_vvalue) this.form.elements["SCO_COMMENT_BASE_" + i].value = _vvalue;
      }
    }
  }
  catch(e) { 
    this.closeExcel();
    this.errorCode = 400;
    this.errorText = "<%=Mss_cr.getProperty("msscr.Error2-8")%>";
  }
  return this;
}
definitionExcel.prototype.importBasePlan = _importBasePlan;

function _importVariablePlans () {
  try {
    var _vvalue = '';
    var _ioffsetBase = 0;<%// Additional number of records of base area that have to be added to offset of variable area (can be negative if there are less employees in base plan than line in table)%>
    var _ioffset = 0;<%//   Offset of variable plan area%>
    var _iE = 0;<%//      Index Excel worksheet%>
    var _offsetComment = <%=zvarb_idx_comment%>;<%//  Move 4 columns to the left if no base plan!%>

    if (this.recordsBasePlan == 0) {
      <%//Remove columns of variable plan that are related to base plan%>
      _offsetComment -=4;
    }

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
      <%//Identify general data%>
      this.form.elements["SCO_ID_CURRENCY_VARB_" + i].value = this.workSheet.Cells(_ioffset + 2, this.offsetColumns + 9).value;<%// Currency%>
      this.form.elements["SCO_DT_START_VARB_" + i].value = this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 9).value<%//   Revision start%>
      this.form.elements["SCO_DT_END_VARB_" + i].value = this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 11).value<%//    Revision end%>

      <%//Identify employee data%>
      for(k = 0; k < this.recordsVarbPlan[i]; k++) {
        _iE = _ioffset + (this.varbTableStart-this.varbRangeStart) + k;
        this.form.elements["SCO_ID_HR_VARB_" + i + "_" + k].value = this.workSheet.Cells(_iE, <%=zvarb_idx_id_hr%>).value;
        this.form.elements["SCO_OR_HR_ROLE_VARB_" + i + "_" + k].value = this.workSheet.Cells(_iE, <%=zvarb_idx_or_hr_role%>).value;
        _vvalue = this.workSheet.Cells(_iE, <%=zvarb_idx_amt_rec_inc%>).value; if (_vvalue) this.form.elements["SCO_AMT_INC_VARB_" + i + "_" + k].value = _vvalue;
        _vvalue = this.workSheet.Cells(_iE, <%=zvarb_idx_prc_rec_inc%>).value; if (_vvalue) this.form.elements["SCO_PRC_INC_VARB_" + i + "_" + k].value = _vvalue;
        _vvalue = this.workSheet.Cells(_iE, _offsetComment).value; if (_vvalue) this.form.elements["SCO_COMMENT_VARB_" + i + "_" + k].value = _vvalue;
      }
      <%//Calculate offset for next variable plan%>
      _ioffset += (this.varbRangeLines * (i+1)) + (this.recordsVarbPlan[i] - this.varbTableLines);
    }
  }
  catch(e) { 
    this.closeExcel();
    this.errorCode = 500;
    this.errorText = "<%=Mss_cr.getProperty("msscr.Error2-8")%>";
  }
  return this;
}
definitionExcel.prototype.importVariablePlans = _importVariablePlans;

function _finish () {
  try {
    <%//Close excel%>
    this.closeExcel();
    this.form.submit();
  }
  catch(e) { 
    this.errorCode = 700;
    this.errorText = "<%=Mss_cr.getProperty("msscr.Error2-7")%>";
  }
  return this;
}
definitionExcel.prototype.finish = _finish;

function _ImportWorkSheet() {
  var _sContent = "";
  var _sResult = "<%=Mss_cr.getProperty("msscr.Aviso6-2")%>";

  var myExcel = new definitionExcel(true);
  if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {
  myExcel.importMetaInfo();
  if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {
  myExcel.importBasePlan();
  if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {
  myExcel.importVariablePlans();
  if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {
  myExcel.finish();
  if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;}
  }}}}
  <%//Special treatment if error code equal 200 (file invalid), in this case a table with the expected and real values is shown%>
  if (myExcel.errorCode == 200) {
    var _vShould;
    var _vIs;
    var _vHeader;
    var _vHeaderEqual = "&nbsp;";
    var _vheaderError = "<img src='/iconos/advertencia_rojo.gif'/>";
    _sContent = "<table class='tablaestados' width='100%' cellspacing='0' border='0'>";
    _sContent += "<tr class='tablaestadosceldatitulo'>";
    _sContent += "<td colspan='4'><%=Mss_cr.getProperty("msscr.Mens-11")%></td>";
    _sContent += "</tr>";
    _sContent += "<tr>";
    _sContent += "<td class='fuentevalor' colspan='4'><%=Mss_cr.getProperty("msscr.Aviso6-3")%></td>";
    _sContent += "</tr>";
    _sContent += "<tr>";
    _sContent += "<td class='fuentevalor' colspan='4'>&nbsp;</td>";
    _sContent += "</tr>";
    _sContent += "<tr class='tablaestadosceldatitulo'>";
    _sContent += "<td>&nbsp;</td>";
    _sContent += "<td><%=Mss_cr.getProperty("msscr.Error2-8a")%></td>";
    _sContent += "<td><%=Mss_cr.getProperty("msscr.Error2-8b")%></td>";
    _sContent += "<td><%=Mss_cr.getProperty("msscr.Error2-8c")%></td>";
    _sContent += "</tr>";

    _vShould = '<%=zbase_id_work_unit_html%>';
    _vIs = myExcel.excelWorkUnitId;
    if (_vShould != _vIs) {_vHeader = _vheaderError;} else {_vHeader = _vHeaderEqual;}
    _sContent += "<tr>";
    _sContent += "<td class='fuentevalor'>" + _vHeader + "</td>";
    _sContent += "<td class='fuentevalor'><%=Mss_cr.getProperty("msscr.Error2-8a1")%></td>";
    _sContent += "<td class='fuentevalor'>" + _vShould + "</td>";
    _sContent += "<td class='fuentevalor'>" + _vIs + "</td>";
    _sContent += "</tr>";

<%if (zibase_num_employees > 0) {%>
    _vShould = '<%=zbase_id_base_plan_html%>';
    _vIs = myExcel.excelBasePlanId;
    if (_vShould != _vIs) {_vHeader = _vheaderError;} else {_vHeader = _vHeaderEqual;}
    _sContent += "<tr>";
    _sContent += "<td class='fuentevalor'>" + _vHeader + "</td>";
    _sContent += "<td class='fuentevalor'><%=Mss_cr.getProperty("msscr.Error2-8a2")%></td>";
    _sContent += "<td class='fuentevalor'>" + _vShould + "</td>";
    _sContent += "<td class='fuentevalor'>" + _vIs + "</td>";
    _sContent += "</tr>";

    _vShould = '<%=zbase_num_employees%>';
    _vIs = myExcel.excelEmpsBasePlan;
    if (_vShould != _vIs) {_vHeader = _vheaderError;} else {_vHeader = _vHeaderEqual;}
    _sContent += "<tr>";
    _sContent += "<td class='fuentevalor'>" + _vHeader + "</td>";
    _sContent += "<td class='fuentevalor'><%=Mss_cr.getProperty("msscr.Error2-8a3")%></td>";
    _sContent += "<td class='fuentevalor'>" + _vShould + "</td>";
    _sContent += "<td class='fuentevalor'>" + _vIs + "</td>";
    _sContent += "</tr>";
<%}%>
    _vShould = myExcel.variablePlans;
    _vIs = myExcel.excelVarbPlans;
    if (_vShould != _vIs) {_vHeader = _vheaderError;} else {_vHeader = _vHeaderEqual;}
    _sContent += "<tr>";
    _sContent += "<td class='fuentevalor'>" + _vHeader + "</td>";
    _sContent += "<td class='fuentevalor'><%=Mss_cr.getProperty("msscr.Error2-8a4")%></td>";
    _sContent += "<td class='fuentevalor'>" + _vShould + "</td>";
    _sContent += "<td class='fuentevalor'>" + _vIs + "</td>";
    _sContent += "</tr>";
<%for (int i = 0; i < zivarbCount; i++) {ziIndex = i + 1;%>
    _vShould = _varb_id_varb_plan_html[<%=i%>];
    _vIs = myExcel.excelVarbPlanId[<%=i%>];
    if (_vShould != _vIs) {_vHeader = _vheaderError;} else {_vHeader = _vHeaderEqual;}
    _sContent += "<tr>";
    _sContent += "<td class='fuentevalor'>" + _vHeader + "</td>";
    _sContent += "<td class='fuentevalor'><%=Mss_cr.getProperty("msscr.Error2-8a5")%> <%=ziIndex%></td>";
    _sContent += "<td class='fuentevalor'>" + _vShould + "</td>";
    _sContent += "<td class='fuentevalor'>" + _vIs + "</td>";
    _sContent += "</tr>";

    if (_vShould == _vIs) {
      _vShould = _varb_num_employees[<%=i%>];
      _vIs = myExcel.excelEmpsVarbPlan[<%=i%>];
      if (_vShould != _vIs) {_vHeader = _vheaderError;} else {_vHeader = _vHeaderEqual;}
      _sContent += "<tr>";
      _sContent += "<td class='fuentevalor'>" + _vHeader + "</td>";
      _sContent += "<td class='fuentevalor'><%=Mss_cr.getProperty("msscr.Error2-8a6")%> <%=ziIndex%></td>";
      _sContent += "<td class='fuentevalor'>" + _vShould + "</td>";
      _sContent += "<td class='fuentevalor'>" + _vIs + "</td>";
      _sContent += "</tr>";
    }
<%}%>
    _sContent += "<tr>";
    _sContent += "<td class='fuentevalor' colspan='4'>&nbsp;</td>";
    _sContent += "</tr>";
    _sContent += "<tr>";
    _sContent += "<td class='fuenteboton' colspan='4'><a href='javascript:window.close()' title='<%=Mss_cr.getProperty("msscr.Pop1-12")%>'><img src='/iconos/entrar_blanco.gif' width='36' height='36' alt='<%=Mss_cr.getProperty("msscr.Pop1-12")%>' onmouseover='m4luztotal (this,245,245,245,50,40,40,100,100,100)' onmouseout='m4oscuridad(this)'/></a></td>";
    _sContent += "</tr>";
    _sContent += "</table>";
  }else{
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
  }
  document.write(_sContent);
}

</script>

<form name="zdata" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_mi.jsp" method="post" enctype="application/x-www-form-urlencoded">
<input name="SCO_ID_WORK_UNIT" type="hidden" value="N/A"/>
<input name="SCO_ID_BASE_PLAN" type="hidden" value="N/A"/>
<input name="SCO_NUM_EMPLOYEES_BASE" type="hidden" value="N/A"/>
<input name="SCO_ID_CURRENCY_BASE" type="hidden" value="N/A"/>
<input name="SCO_DT_START_BASE" type="hidden" value="N/A"/>
<input name="SCO_DT_END_BASE" type="hidden" value="N/A"/>
<input name="SCO_NUM_VARB_PLANS" type="hidden" value="N/A"/>
<%for (int i = 0; i < zibase_num_employees; i++) {%>
<input name="SCO_ID_HR_BASE_<%=i%>" type="hidden" value="N/A"/>
<input name="SCO_OR_HR_ROLE_BASE_<%=i%>" type="hidden" value="N/A"/>
<input name="SCO_AMT_INC_BASE_<%=i%>" type="hidden" value=""/>
<input name="SCO_PRC_INC_BASE_<%=i%>" type="hidden" value=""/>
<input name="SCO_COMMENT_BASE_<%=i%>" type="hidden" value=""/>
<%}
//Variable plans
for (int i = 0; i < zivarbCount; i++) {
%>
<input name="SCO_ID_CURRENCY_VARB_<%=i%>" type="hidden" value="N/A"/>
<input name="SCO_ID_VARB_PLAN_<%=i%>" type="hidden" value="N/A"/>
<input name="SCO_DT_START_VARB_<%=i%>" type="hidden" value="N/A"/>
<input name="SCO_DT_END_VARB_<%=i%>" type="hidden" value="N/A"/>
<input name="SCO_NUM_EMP_VARB_<%=i%>" type="hidden" value="<%=iempVarPlan[i]%>"/>
<%
for (int k = 0; k < iempVarPlan[i]; k++) { %>
<input name="SCO_ID_HR_VARB_<%=i%>_<%=k%>" type="hidden" value="N/A"/>
<input name="SCO_OR_HR_ROLE_VARB_<%=i%>_<%=k%>" type="hidden" value="N/A"/>
<input name="SCO_AMT_INC_VARB_<%=i%>_<%=k%>" type="hidden" value=""/>
<input name="SCO_PRC_INC_VARB_<%=i%>_<%=k%>" type="hidden" value=""/>
<input name="SCO_COMMENT_VARB_<%=i%>_<%=k%>" type="hidden" value=""/>
<%}}%>
</form>

<script type="text/javascript" language="Javascript1.5">_ImportWorkSheet();</script>

</body>
<m4:endpage/>
