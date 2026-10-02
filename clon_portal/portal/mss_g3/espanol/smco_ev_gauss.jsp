<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp"%>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %> 
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>
<%@ include file="/mss_g3/mss_ev_trans.jsp"%> 
<%    
  String IDEvaluator = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDEvaluator"); 
  IDEvaluator = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", IDEvaluator);
  String zNivel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNivel"); 
  String DTStartEval = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval"); 
  DTStartEval = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", DTStartEval);
  String IDPlan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDPlan");
  IDPlan = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", IDPlan);
  String DTStartProc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartProc");
  DTStartProc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", DTStartProc);
  if ((zNivel==null)||(zNivel.equals(""))){zNivel="0";}
  if ((IDEvaluator==null)||(IDEvaluator.equals(""))){IDEvaluator="";}
  Integer ziCurPos;
int ziIndex;
  String sWebServerName = "";
  String sWebServerPort = "";
  String sProtocol      = "http";
  String sURLxlsTplt    = "";

//Identify language folder of session
  M4SessionManager zm4sessionev = M4Context.getSession(request);  
  long ilanguageIdev = zm4sessionev.getIdioma();
  String zlanguageFolderev = CheckConfig.checkFolderLanguage(new Long(ilanguageIdev).intValue(), CheckConfig.THCL);

try{
  sWebServerName = request.getServerName( );
  sWebServerPort = new Integer( request.getServerPort() ).toString( );
  if ( request.isSecure() ) 
    sProtocol = "https" ;
  } catch(Exception e) {};    
  sURLxlsTplt = sProtocol + "://" + sWebServerName + ":" + sWebServerPort + "/plantillas/"+zlanguageFolderev+"/ev_gauss.xls";
%>

<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript">
function graf_eval () {
if (!navigator.appMinorVersion)  {
  msg = m4getmessage("_sl_co_ex_5");
  alert(msg);
  window.close();
} else {
try{
  var ExcelApp = new ActiveXObject("Excel.Application");
  var openWb   = ExcelApp.Workbooks.Open ("<%=sURLxlsTplt%>");
  var sheetObj = ExcelApp.Workbooks(1).Worksheets(1);
  
  var sheetObj2 = ExcelApp.Workbooks(1).Worksheets(2);

  sheetObj.Cells(2 ,6).Value  =_var_cabec;
  var llevel=_var_level.length;
  var ini=26;
  for (var i=1; i < llevel; i++){
    sheetObj.Cells(ini ,5).Value  = _var_level[i];
    sheetObj.Cells(ini ,6).Value  = _var_ref[i];
    sheetObj.Cells(ini ,7).Value  = _var_act[i];
    sheetObj.Cells(ini ,8).Value  = _var_acto[i];
    ini=ini+1;
  }
  sheetObj.Activate();
  var levaluate=_var_evaluate.length;
  sheetObj2.Activate();
vindexbody=6;
  var_data_start_row = 6;
  for (var i=1; i < levaluate; i++){
  if (i>1){
    sheetObj2.Rows(vindexbody).Copy;
    sheetObj2.Rows(var_data_start_row).Insert; 
    }   
  sheetObj2.Cells(var_data_start_row ,2).Value  = _var_evaluate[i][0];  
sheetObj2.Cells(var_data_start_row ,3).Value  = _var_evaluate[i][1];
sheetObj2.Cells(var_data_start_row ,4).Value  = _var_evaluate[i][2];
sheetObj2.Cells(var_data_start_row ,5).Value  = _var_evaluate[i][3];
sheetObj2.Cells(var_data_start_row ,6).Value  = _var_evaluate[i][4];
sheetObj2.Cells(var_data_start_row ,7).Value  = _var_evaluate[i][5];
sheetObj2.Cells(var_data_start_row ,8).Value  = _var_evaluate[i][6];
sheetObj2.Cells(var_data_start_row ,9).Value  = _var_evaluate[i][7];  
var_data_start_row = var_data_start_row +1;
    }
      sheetObj.Cells(1,1).Copy;
    sheetObj.Activate();
  window.close();
  ExcelApp.Visible     = true;
}catch(e){

  if (ExcelApp == null) {
    var msg =  m4getmessage("_sl_co_ex_1");
    msg = msg+"\n"+ m4getmessage("_sl_co_ex_2");

    alert(msg);
    window.close();
  
  }else if (openWb == null) {
    var msg =  m4getmessage("_sl_co_ex_1");
    msg = msg+"\n"+ m4getmessage("_sl_co_ex_3");
    msg = msg+ m4getmessage("_sl_co_ex_4");
    alert(msg);
    window.close();
  }else{

    window.close();
  }
}
}
}
</script>
<title><%=TranMss.getProperty("ev_mss.GrafGauss")%></title>
</head>
<body>
<%
String zmeta4object = "SMCO_GRAPH_EVAL_GAUSS";
String zsubsesion = "SMCO_GRAPH_EVAL_GAUSS";
String znodop = "SMCO_GRAPH_EVAL_GAUSS";
String znodo = "SMCO_GRAPH_SCALE";
String znodo1 = "SMCO_EVAL_DATA";
String zoutputdefp = zsubsesion + "!" + znodop + "[*]";
String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove1 = znodo1 + ":" + znodo1 + "[0]";
String zmove = znodo + ":" + znodo + "[0]";
String zmovep = znodo + ":" + znodop + "[0]";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[0]" + ".";


String zmetodoinitrw = "INIT_RW:" + zsubsesion + "!SMCO_GRAPH_EVAL_GAUSS.SMCO_LOAD";
%>  
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodoinitrw%>">
  <m4:param name="ARG_ID_EVAL_PLAN" value="<%=IDPlan%>"/>
  <m4:param name="ARG_DT_START_PROC" value="<%=DTStartProc%>"/>
  <m4:param name="ARG_NIVEL" value="<%=zNivel%>"/>
  <m4:param name="ARG_ID_EVALUATOR" value="<%=IDEvaluator%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodop%>"><m4:param name="M4NAME0" value="<%=zoutputdefp%>"/></m4:outputdef>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovep%>"/></m4:move>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="M4NAME0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="M4NAME0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<%
int  zcount  = 0;
try {
  M4Operations m = new M4Operations(request);
  zcount = m.getCount(znodo,zsubsesion,znodo);
} catch(Exception e) {}
%>
<script type="text/javascript" language="Javascript1.5">
var _var_cabec= '<m4:item item="SCO_NM_EVAL_PROC" jsafe="true" outputdef="<%=znodop%>"/>';
var _var_level = new Array();
var _var_act= new Array();
var _var_acto= new Array();
var _var_ref = new Array();
<m4:dataloop outputdef="<%=znodo%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo%>"/>
  <% ziIndex = ziCurPos.intValue()+1; %>
  _var_act [<%=ziIndex%>] ='<m4:item item="SMCO_PRC_ACT" jsafe="true" outputdef="<%=znodo%>"/>';
  _var_acto [<%=ziIndex%>] ='<m4:item item="SMCO_PRC_ACT_O" jsafe="true" outputdef="<%=znodo%>"/>';
  _var_ref [<%=ziIndex%>] ='<m4:item item="SMCO_PRC_REF" jsafe="true" outputdef="<%=znodo%>"/>';
  _var_level [<%=ziIndex%>] ='<m4:item item="SCO_NM_LEVEL" jsafe="true" outputdef="<%=znodo%>"/>';
</m4:dataloop>
var _var_evaluate = new Array();
<m4:dataloop outputdef="<%=znodo1%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo1%>"/>
  <% ziIndex = ziCurPos.intValue()+1; %>
    _var_evaluate [<%=ziIndex%>]=new Array;
  _var_evaluate [<%=ziIndex%>][0]  ='<m4:item item="SCO_GB_NAME" jsafe="true" outputdef="<%=znodo1%>"/>';
  _var_evaluate [<%=ziIndex%>][1]  ='<m4:item item="NOMBRE_EMPLEADO" jsafe="true" outputdef="<%=znodo1%>"/>'; 
  _var_evaluate [<%=ziIndex%>][2]  ='<m4:item item="STD_N_JOB_CODE" jsafe="true" outputdef="<%=znodo1%>"/>';  
  _var_evaluate [<%=ziIndex%>][3]  ='<m4:item item="SCO_NM_LEVEL" jsafe="true" outputdef="<%=znodo1%>"/>';  
  _var_evaluate [<%=ziIndex%>][4]  ='<m4:item item="SCO_CALCUL_CAP" jsafe="true" outputdef="<%=znodo1%>"/>';  
    _var_evaluate [<%=ziIndex%>][5]  ='<m4:item item="SCO_NM_LEVEL_1" jsafe="true" outputdef="<%=znodo1%>"/>';  
  _var_evaluate [<%=ziIndex%>][6]  ='<m4:item item="SCO_CALCUL_OBJ" jsafe="true" outputdef="<%=znodo1%>"/>';  
  _var_evaluate [<%=ziIndex%>][7]  ='<m4:item item="SCO_VALUE_OBJ_QUANT" jsafe="true" outputdef="<%=znodo1%>"/>'; 
</m4:dataloop>
graf_eval();</script>
</body>
</html>

