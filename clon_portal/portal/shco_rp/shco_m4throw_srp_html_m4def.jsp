<%-- =========================================================
	@(#) FileVersion: 822.004.046
	@(#) FileDescription: shco_m4throw_srp_html_m4def.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= --%>

<%!
//* Constantes
String zSTR_TRUE = "TRUE";
String zSTR_FALSE = "FALSE";
String zSTR_M4_ERROR = "-1";
String zSTR_ONLINE_EXECUTION = "ONLINE_EXECUTION";
String zSTR_JS_EXECUTION = "JS_EXECUTION";
String zSTR_REEDITION = "REEDITION";
String zSTR_EDITION = "EDITION";
String zSTR_OUTPUT_TYPE_VIS = "VISUALIZE";
String zSTR_OUTPUT_TYPE_FC = "FILE_CLIENT";
String zSTR_OUTPUT_TYPE_FS = "FILE_SERVER";
String zSTR_OUTPUT_TYPE_PC = "PRINTER_CLIENT";
String zSTR_OUTPUT_TYPE_PS = "PRINTER_SERVER";
String zSTR_DYNFILTER = "zdynfiltersinfo";
String zSTR_M4O_SERIALIZE_DYNFILTER = "M4O_SERIALICE_DYNFILTER";

String zSTR_ONLINE_EXECUTION_PAGE = "shco_rp/shco_m4throw_on_line_exe.jsp";
String zSTR_JS_EXECUTION_PAGE = "shco_rp/shco_m4throw_schedule.jsp";
String zSTR_ASKCONFIGPARAM_PAGE = "shco_rp/shco_m4throw_wz_config_step1.jsp";
String zSTR_CONFIG_PAGE = "shco_rp/shco_m4throw_config.jsp";
String zSTR_EDITION_PAGE = "shco_rp/shco_m4throw_edition.jsp";
String zSTR_REEDITION_PAGE = "shco_rp/shco_m4throw_reedition.jsp";
String zSTR_SERVER_EXE_PAGE = "shco_rp/shco_m4throw_server_execution.jsp";

String zSTR_ASKCONFIGPARAM		= "ASKCONFIGPARAM";
String zSTR_ASKDYNFILTER		= "ASKDYNFILTER";
String zSTR_PROCESS_MODE			= "PROCESS_MODE";
String zSTR_OPENMODE                = "zopenmode"; 
String zSTR_OPENMODE_DEF            = "1"; //Abrir con window.open sino con navegar
String zSTR_ALIAS					="zalias";
String zSTR_M4OBJECT				="zm4o";
String zSTR_SUBSESION				= "zsubsesion";
String zSTR_NODE				= "znode";
String zSTR_NEW_PARAM_VALUE				= "znewparamvalue";

String zOutputType					= "OUTPUT_TYPE";
String zJsMultipleExecutionParam	= "JS_MULTIPLE_EXECUTION_PARAM";
String zJsMultipleExecutionDes		= "JS_MULTIPLE_EXECUTION_DES";

String zSTR_M4O_SERIALIZE_PARAMS	= "M4O_SERIALICE_PARAMS";
String zSTR_ID_RETURN_PAGE			= "ID_RETURN_PAGE";
String zSTR_REEDITION_PAGE_PAR		= "REEDITION_PAGE";
String zSTR_REEDITION_PROCESS		= "REEDITION_PROCESS";
String zSTR_REEDITION_PARAM_VALUE	= "REEDITION_PARAM_VALUE";
%>

<%
// Poner la misma subsession que en el Wizard para mantener la instancia de SRP_M4THROW_HTML
String zsubsesionM4ThrowHtml = request.getParameter(zSTR_SUBSESION) ;

// Sanitizar y obligar a que sea alfanumerico y si no lo es, se queda el valor por defecto
String sPattern = "[a-zA-Z0-9_]*";

// Verificar si es null primero
if (zsubsesionM4ThrowHtml != null && !java.util.regex.Pattern.matches(sPattern, zsubsesionM4ThrowHtml)) {
   zsubsesionM4ThrowHtml = null;
}

if (zsubsesionM4ThrowHtml == null){
   zsubsesionM4ThrowHtml ="SHCO_RP_SESSION";
}
String zsubsesion = "SHCO_M4THROW_HTML";
String zm4object = zsubsesion;

//* Nodos
String znodoapi = "SHCO_M4THROW_HTML_API";
String zraiznodoapi = znodoapi + ":" + zsubsesion  + "!" + znodoapi + ".";
String znodoOnLineOutputParams = "SRP_ONLINE_OUTPUT_PARAMS";
String zraiznodoOnLineOutputParams = znodoOnLineOutputParams + ":" + zsubsesion  + "!" + znodoOnLineOutputParams + ".";

String znodoScheduleOutputParams = "SRP_SCHEDULE_OUTPUT_PARAMS";
String zraiznodoScheduleOutputParams = znodoScheduleOutputParams + ":" + zsubsesion  + "!" + znodoScheduleOutputParams + ".";

String znodocom= "SHCO_GN_COMUNICATION";
String zoutputdefnodoapi = zsubsesion + "!" + znodoapi + "[0]";		
String zoutputdefnodoOnLineOutputParams = zsubsesion + "!" + znodoOnLineOutputParams + "[*]";
String zoutputdefnodoScheduleOutputParams = zsubsesion + "!" + znodoScheduleOutputParams + "[*]";
String zoutputdefnodocom =  zsubsesion + "!" + znodocom + "[*]";	
				
String znodoexe = "SHCO_M4HTROW_REPORT_EXE";
String zoutputdefnodoexe = zsubsesion + "!" + znodoexe + "[0]";		
String zraiznodoexe = znodoexe + ":" + zsubsesion  + "!" + znodoexe + ".";

String znodoreportlist = "SHCO_M4HTROW_REPORT_LIST";
String zoutputdefreportlist = zsubsesion + "!" + znodoreportlist + "[*]";		
String zraiznodoreportlist = znodoreportlist + ":" + zsubsesion  + "!" + znodoreportlist + ".";


//*Items
String zIdParamsInstance	= "ID_PARAMS_INSTANCE";
String zIdParamsInstancer	= zraiznodoapi + zIdParamsInstance;

String zIdReport			= "IDREPORT";
String zOtherParams			= "OTHERPARAMS";
String zOuputType			= "OUTPUTTYPE";
String zSysSentence			= "SYSSENTENCE";
String zIdReportr			= zraiznodoOnLineOutputParams + zIdReport;
String zOtherParamsr		= zraiznodoOnLineOutputParams + zOtherParams;
String zOuputTyper			= zraiznodoOnLineOutputParams + zOuputType;
String zSysSentencer		= zraiznodoOnLineOutputParams + zSysSentence;


String zIdTaskParameter		= "ID_PARAMETER";
String zTaskParameterValue	= "PARAM_VALUE";
String zIdTask				= "ID_TASK";
String zJSIdRole			= "JS_ID_ROLE";
String zJSIdSoc				= "JS_ID_SOC";
String zJSSocAware			= "JS_SOC_AWARE";
String zJSSocEdit			= "JS_SOC_EDIT";
String zJSSocMultiSel		= "JS_SOC_MULTISEL";
String zNReport				= "N_REPORT";

String zIdTaskParameterr	= zraiznodoScheduleOutputParams + zIdTaskParameter;
String zTaskParameterValuer	= zraiznodoScheduleOutputParams + zTaskParameterValue;
String zIdTaskr				= zraiznodoScheduleOutputParams + zIdTask;
String zJSIdRoler			= zraiznodoScheduleOutputParams + zJSIdRole;
String zJSIdSocr			= zraiznodoScheduleOutputParams + zJSIdSoc;
String zJSSocAwarer			= zraiznodoScheduleOutputParams + zJSSocAware;
String zJSSocEditr			= zraiznodoScheduleOutputParams + zJSSocEdit;
String zJSSocMultiSelr		= zraiznodoScheduleOutputParams + zJSSocMultiSel;
String zNReportr			= zraiznodoScheduleOutputParams + zNReport;


String zcomunreportlist =  znodoreportlist + ":" + zsubsesion + "!" + znodoreportlist + "[&VAR.m4lix]" + ".";
String zContent = "CONTENT";
String zFileName = "FILE_NAME";
String zPath = "PATH";
String zFileNamer =zcomunreportlist + zFileName;
String zPathr =zcomunreportlist + zPath;



String zFilesURL = "FILES_URL";
String zFilesList = "FILES_LIST";

String zFilesURLr =  zraiznodoexe + zFilesURL;
String zFilesListr = zraiznodoexe + zFilesList;


String zmetodoApplyParams	= "APPLY_PARAMS";
String zArgParamValueStr	= "ARG_PARAM_VALUE_STR";
String zArgNewParamValueStr	= "ARG_NEW_PARAM_VALUE";
String zmetodoGetParamValue = "GET_PARAM_VALUE";
String zmetodoSetParamValue = "SET_PARAM_VALUE";
String zArgIdParamsInstance = "ARG_ID_PARAMS_INSTANCE";
String zArgIdParam			= "ARG_ID_PARAMETER";
String zArgParamValue = "ARG_PARAM_VALUE";
String zmetodoApplyReeditionParams	= "APPLY_REEDITION_PARAMS";
String zArgReeditionParamValueStr	="ARG_REEDITION_PARAM_VALUE";
String zmetodoReadAndApplyParams	= "READ_AND_APPLY_PARAMS";
String zmetodoReadAndApplyReeditionParams	= "READ_AND_APPLY_REEDITION_PARAMS";
String zArgAlias	= "ARG_ALIAS";
String zArgNode	= "ARG_NODE";
String zArgM4O	= "ARG_M4O";

String zmetodoGetM4Object = "GET_M4OBJECT";


String zmetodoGetOnlineExeParams	= "GET_ONLINE_EXE_PARAMS";
String zmetodoGetScheduleParams		= "GET_SCHEDULE_PARAMS";

String zmetodoExecuteReport = "EXECUTE_REPORT";
String zmetodoExecuteReportAndNotifyFiles = "EXECUTE_REPORT_FILES_NOTIFY";
String zmetodoExecuteReportFilesBlob = "EXECUTE_REPORT_FILES_BLOB";
String zArgPathTempMapping = "ARG_PATH_TEMP_MAPPING";
String zArgUserTempUri = "ARG_USER_TEMP_URI";
String zArgUserTempURL = "ARG_USER_TEMP_URL"; 

String zTab = "0";
%>

