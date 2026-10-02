<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp"%>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %> 
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>
<%@ include file="/mss_g3/mss_ev_trans.jsp"%> 
<title></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
String zidType = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidType");
String zidhr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr");
zidhr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zidhr);
String zorrole = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zorrole");
zorrole = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zorrole);
String zdtstart = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdtstart");
zdtstart = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zdtstart);
String zidevaluator = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidevaluator");
zidevaluator = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zidevaluator);
String zor_evaluator = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zor_evaluator");
zor_evaluator = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zor_evaluator);
if ((zidType==null)||(zidType.equals(""))){zidType="01";}
if ((zidhr==null)||(zidhr.equals(""))){zidhr="";}
if ((zorrole==null)||(zorrole.equals(""))){zorrole="";}
if ((zdtstart==null)||(zdtstart.equals(""))){zdtstart="";}
if ((zidevaluator==null)||(zidevaluator.equals(""))){zidevaluator="";}
if ((zor_evaluator==null)||(zor_evaluator.equals(""))){zor_evaluator="";}

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
  sURLxlsTplt = sProtocol + "://" + sWebServerName + ":" + sWebServerPort + "/plantillas/"+zlanguageFolderev+"/eval_informe.xls";
%>
</head>
<body>
<script type="text/javascript">
function excel_eval_cabec(varsheetObj) {
  varsheetObj.Cells(1 ,3).Value  = _var_cabec[0];
  varsheetObj.Cells(3 ,3).Value  = _var_cabec[3];
  varsheetObj.Cells(3 ,4).Value  = _var_cabec[2];
  varsheetObj.Cells(2 ,3).Value  = _var_cabec[5];
  varsheetObj.Cells(2 ,4).Value  = _var_cabec[4];
  varsheetObj.Cells(4 ,3).Value  = _var_cabec[7];
  varsheetObj.Cells(4 ,4).Value  = _var_cabec[6];
  varsheetObj.Cells(5 ,3).Value  = _var_cabec[10];
  varsheetObj.Cells(5 ,4).Value  = _var_cabec[8];
  varsheetObj.Cells(5 ,5).Value  = _var_cabec[9];

}

function ex_block(varsheetObj,var_data,var_data_start_row,p){
  var lvar_data =var_data.length;
  if (lvar_data>1){
  lvar_data0 =var_data[0].length;

  varsheetObj.Cells(var_data_start_row ,2).Value  = _var_cabec[p];
    var_data_start_row = var_data_start_row +1;
    for (var v=0; v < lvar_data0; v++){
      varsheetObj.Cells(var_data_start_row ,v+2).Value  = var_data[0][v];
    
    }
    vindexbody=var_data_start_row +1;
    for (var i=1; i < lvar_data; i++){
      var lvar_datasub = var_data[i].length;
      DATA_START_COL = 1; 
      var_data_start_row = var_data_start_row +1;
      if (i>1){
        varsheetObj.Rows(vindexbody).Copy;
        varsheetObj.Rows(var_data_start_row).Insert; 
      } 
      for (var j=0; j < lvar_datasub ; j++){
        DATA_START_COL =DATA_START_COL +1;
        varsheetObj.Cells(var_data_start_row ,DATA_START_COL ).Value  = var_data[i][j];
      
      }
    }
    var_data_start_row = var_data_start_row+4;    
  }else{
    var_data_start_row = var_data_start_row+6;  
  }
  return(var_data_start_row);
}
function excel_eval (var_type) {

  if (!navigator.appMinorVersion) {
    msg = m4getmessage("_sl_co_ex_5");
    alert(msg);
    window.close();
  } else {
  
try{

  var ExcelApp = new ActiveXObject("Excel.Application");

  var openWb   = ExcelApp.Workbooks.Open ("<%=sURLxlsTplt%>");

  var sheetObj = ExcelApp.Workbooks(1).Worksheets(1);

  var sheetObj2 = ExcelApp.Workbooks(1).Worksheets(2);

  excel_eval_cabec(sheetObj);
  var lcono=_var_cono.length;

  var lObjcualita=_var_Objcualita.length;
  var lObjcuanti=_var_Objcuan.length;
  
  DATA_START_ROW = 10;  
  DATA_START_COL = 1; 

  DATA_START_ROW =ex_block(sheetObj,_var_cono,DATA_START_ROW,11);
  var vindexCabObjCuali =DATA_START_ROW;
  DATA_START_ROW =ex_block(sheetObj,_var_Objcualita,DATA_START_ROW,12);
  var vindexCabObjCuanti =DATA_START_ROW;
  DATA_START_ROW =ex_block(sheetObj,_var_Objcuan,DATA_START_ROW,13);
  if (_var_cabec[1]=="0"){sheetObj.Columns(6).Hidden = true ; }
  sheetObj2.Activate();
  excel_eval_cabec(sheetObj2);
  if (lcono>1){
    sheetObj2.Cells(11 ,2).Value  = _var_cabec[11]; 
    sheetObj2.Cells(11 ,3).Value  = _var_cabec[14]; 
    sheetObj2.Cells(11 ,4).Value  = _var_cabec[15]; 
  }
  if (lObjcualita>1){
  
    sheetObj2.Cells(12 ,2).Value  = _var_cabec[12]; 
    sheetObj2.Cells(12 ,3).Value  = _var_cabec[17]; 
    sheetObj2.Cells(12 ,4).Value  = _var_cabec[16]; 
  }
  if (lObjcuanti>1){
    sheetObj2.Cells(13 ,2).Value  = _var_cabec[13]; 
    sheetObj2.Cells(13 ,3).Value  = _var_cabec[18]; 
  }
  sheetObj2.Cells(16 ,2).Value  = _var_cabec[20]; 
  sheetObj2.Cells(17 ,2).Value  = _var_cabec[19]; 
  sheetObj2.Cells(25 ,2).Value  = _var_cabec[22]; 
  sheetObj2.Cells(26 ,2).Value  = _var_cabec[21]; 
  sheetObj2.Cells(34 ,2).Value  = _var_cabec[24]; 
  sheetObj2.Cells(35 ,2).Value  = _var_cabec[23]; 
  sheetObj2.Cells(43 ,2).Value  = _var_cabec[26]; 
  sheetObj2.Cells(44 ,2).Value  = _var_cabec[25]; 
  if (var_type=="02"){
  sheetObj2.Rows(52+":"+55).Hidden = true ;
  }
    if (var_type=="03"){
  sheetObj2.Rows(52+":"+55).Hidden = true ;
  }
  if (lcono==1){
    sheetObj2.Rows(11).Hidden = true ;
    sheetObj.Activate();
    sheetObj.Rows(10+":"+15).Hidden = true ;
  }
  if (lObjcualita==1){
    sheetObj2.Rows(12).Hidden = true ;
    sheetObj.Activate();
    var vindexCabObjCualifin =vindexCabObjCuali+6;
    sheetObj.Rows(vindexCabObjCuali+":"+vindexCabObjCualifin).Hidden = true ;
  }
  if (lObjcuanti==1){
    sheetObj2.Rows(13).Hidden = true ;
    sheetObj.Activate();
    var vindexCabObjCuantifin =vindexCabObjCuanti+6;
    sheetObj.Rows(vindexCabObjCuanti+":"+vindexCabObjCuantifin).Hidden = true ;
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
<script type="text/javascript">
function navegarexcell(empleado,ordinal)
{
  m4valor("oculto","zidevaluator",empleado,"set");
  m4valor("oculto","zor_evaluator",ordinal,"set");
  m4submit("oculto");
}
</script>
<%
  String zsubsesion = "SSE_EVAL_DATA";
  String zmeta4object = "SSE_EVAL_DATA";
  String znodo = "SSE_EVAL_DATA";
  String znodo1 = "SSE_EVAL_CAPAB_DATA";
  String znodo2 = "SSE_EVAL_OCUALI_DATA";
  String znodo3 = "SSE_EVAL_OCUANTI_DATA";
  String znodo4 = "SSE_EVALUATOR_FIND";
  
  String zoutputdef = zsubsesion + "!" + znodo + "[*]";
  String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
  String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
  String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
  String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
  
  String zmove = znodo + ":" + znodo + "[FIRST]";
  String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
  
  String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_EVAL_DATA.SSE_LOAD";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>">
<m4:param name="ARG_ID_TYPE" value="<%=zidType%>"/>
<m4:param name="ARG_ID_HR" value="<%=zidhr%>"/>
<m4:param name="ARG_OR_HR" value="<%=zorrole%>"/>
<m4:param name="ARG_DT_START_EVAL" value="<%=zdtstart%>"/>
<m4:param name="ARG_ID_EVALUATOR" value="<%=zidevaluator%>"/>
<m4:param name="ARG_OR_EVALUATOR" value="<%=zor_evaluator%>"/>
</m4:exec>

<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<m4:item m4varname="zAskEvaluator" item="PAR_ASK_EVALUATOR" htmlsafe="true" outputdef="<%=znodo%>"/>
<%
int  zcount  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
} catch(Exception e) {}
if (zAskEvaluator.equals("0") ) {
  if (zcount > 0) {%>


<script type="text/javascript" language="Javascript1.5">

var _var_cabec = new Array();
_var_cabec[0] ='<m4:item item="SCO_NM_EVAL_PROC" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[1] ='<m4:item item="SSE_AUTO" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[2] ='<m4:item item="SCO_GB_NAME" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[3] ='<m4:label item="SCO_GB_NAME" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[4] ='<m4:item item="SSE_EVALUATOR_NAME" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[5] ='<m4:label item="SSE_EVALUATOR_NAME" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[6] ='<m4:item item="STD_N_JOB_CODE" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[7] ='<m4:label item="STD_N_JOB_CODE" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[8] ='<m4:item item="SCO_DT_ST_EV_PER" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[9] ='<m4:item item="SCO_DT_END_EV_PER" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[10] ='<m4:label item="SCO_DT_ST_EV_PER" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[11] ='<m4:label get="node" jsafe="true" outputdef="<%=znodo1%>"/>';
_var_cabec[12] ='<m4:label get="node" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_cabec[13] ='<m4:label get="node" jsafe="true" outputdef="<%=znodo3%>"/>';
_var_cabec[14] ='<m4:item item="SSE_NM_LEVEL_CAP" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[15] ='<m4:item item="SSE_CALCUL_RAT_CAP" jsafe="true" outputdef="<%=znodo%>"/>';

_var_cabec[16] ='<m4:item item="SSE_CALCUL_RAT_OBJ" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[17] ='<m4:item item="SSE_NM_LEVEL_OBJ" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[18] ='<m4:item item="SCO_VALUE_OBJ_QUANT" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[19] ='<m4:item item="SSE_EVALUATOR_COMM" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[20] ='<m4:label item="SSE_EVALUATOR_COMM" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[21] ='<m4:item item="SSE_EMPLOYEE_COMM" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[22] ='<m4:label item="SCO_COMMENT" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[23] ='<m4:item item="SSE_STRENGTHS" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[24] ='<m4:label item="SSE_STRENGTHS" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[25] ='<m4:item item="SSE_AREAS_IMP" jsafe="true" outputdef="<%=znodo%>"/>';
_var_cabec[26] ='<m4:label item="SSE_AREAS_IMP" jsafe="true" outputdef="<%=znodo%>"/>';

var _var_cono = new Array();
_var_cono [0]=new Array;
_var_cono [0][0] ='<m4:label item="SCO_NM_EXTD_KN" jsafe="true" outputdef="<%=znodo1%>"/>';
_var_cono [0][1] ='<m4:label item="SCO_NM_EXTD_KN_TYP" jsafe="true" outputdef="<%=znodo1%>"/>';
_var_cono [0][2] ='<m4:label item="SCO_NM_CRITERIA_TYPE" jsafe="true" outputdef="<%=znodo1%>"/>';
_var_cono [0][3] ='<m4:label item="SCO_NM_LEVEL" jsafe="true" outputdef="<%=znodo1%>"/>';
_var_cono [0][4] ='<m4:label item="SCO_NM_LEVEL_AUTO" jsafe="true" outputdef="<%=znodo1%>"/>';
_var_cono [0][5] ='<m4:label item="SCO_NM_LEVEL_1" jsafe="true" outputdef="<%=znodo1%>"/>';
_var_cono [0][8] ='<m4:label item="SCO_VALUE_RAT" jsafe="true" outputdef="<%=znodo1%>"/>';
_var_cono [0][6] ='<m4:label item="SCO_EXPLANATION" jsafe="true" outputdef="<%=znodo1%>"/>';
_var_cono [0][7] ='<m4:label item="SCO_MEANING" jsafe="true" outputdef="<%=znodo1%>"/>';

<m4:dataloop outputdef="<%=znodo1%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo1%>"/>
  <% ziIndex = ziCurPos.intValue()+1; %>
  _var_cono [<%=ziIndex%>]=new Array;
  _var_cono [<%=ziIndex%>][0] ='<m4:item item="SCO_NM_EXTD_KN" jsafe="true" outputdef="<%=znodo1%>"/>';
  _var_cono [<%=ziIndex%>][1] ='<m4:item item="SCO_NM_EXTD_KN_TYP" jsafe="true" outputdef="<%=znodo1%>"/>';
  _var_cono [<%=ziIndex%>][2] ='<m4:item item="SCO_NM_CRITERIA_TYPE" jsafe="true" outputdef="<%=znodo1%>"/>';
  _var_cono [<%=ziIndex%>][3] ='<m4:item item="SCO_NM_LEVEL" jsafe="true" outputdef="<%=znodo1%>"/>';
  _var_cono [<%=ziIndex%>][4] ='<m4:item item="SCO_NM_LEVEL_AUTO" jsafe="true" outputdef="<%=znodo1%>"/>';
  _var_cono [<%=ziIndex%>][5] ='<m4:item item="SCO_NM_LEVEL_1" jsafe="true" outputdef="<%=znodo1%>"/>';
  _var_cono [<%=ziIndex%>][8] ='<m4:item item="SCO_VALUE_RAT" jsafe="true" outputdef="<%=znodo1%>"/>';
  _var_cono [<%=ziIndex%>][6] ='<m4:item item="SCO_EXPLANATION" jsafe="true" outputdef="<%=znodo1%>"/>';
  _var_cono [<%=ziIndex%>][7] ='<m4:item item="SCO_MEANING" jsafe="true" outputdef="<%=znodo1%>"/>';
  
</m4:dataloop>

var _var_Objcualita = new Array();

_var_Objcualita [0]=new Array;
_var_Objcualita [0][0] ='<m4:label item="SCO_NM_OBJECTIVE" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_Objcualita [0][1] ='<m4:label item="SCO_NM_TYPE" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_Objcualita [0][2] ='<m4:label item="SCO_NM_CRITERIA_TYPE" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_Objcualita [0][3] ='<m4:label item="SCO_NM_LEVEL" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_Objcualita [0][4] ='<m4:label item="SCO_NM_LEVEL_AUTO" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_Objcualita [0][5] ='<m4:label item="SCO_NM_LEVEL_1" jsafe="true" outputdef="<%=znodo2%>"/>';

_var_Objcualita [0][6] ='<m4:label item="SCO_EXPLANATION" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_Objcualita [0][7] ='<m4:label item="SCO_MEANING" jsafe="true" outputdef="<%=znodo2%>"/>';


<m4:dataloop outputdef="<%=znodo2%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo2%>"/>
  <% ziIndex = ziCurPos.intValue()+1; %>
  _var_Objcualita [<%=ziIndex%>]=new Array;
  _var_Objcualita [<%=ziIndex%>][0] ='<m4:item item="SCO_NM_OBJECTIVE" jsafe="true" outputdef="<%=znodo2%>"/>';
  _var_Objcualita [<%=ziIndex%>][1] ='<m4:item item="SCO_NM_TYPE" jsafe="true" outputdef="<%=znodo2%>"/>';
  _var_Objcualita [<%=ziIndex%>][2] ='<m4:item item="SCO_NM_CRITERIA_TYPE" jsafe="true" outputdef="<%=znodo2%>"/>';
  _var_Objcualita [<%=ziIndex%>][3] ='<m4:item item="SCO_NM_LEVEL" jsafe="true" outputdef="<%=znodo2%>"/>';
  _var_Objcualita [<%=ziIndex%>][4] ='<m4:item item="SCO_NM_LEVEL_AUTO" jsafe="true" outputdef="<%=znodo2%>"/>';
  _var_Objcualita [<%=ziIndex%>][5] ='<m4:item item="SCO_NM_LEVEL_1" jsafe="true" outputdef="<%=znodo2%>"/>';
  
  _var_Objcualita [<%=ziIndex%>][6] ='<m4:item item="SCO_EXPLANATION" jsafe="true" outputdef="<%=znodo2%>"/>';
  _var_Objcualita [<%=ziIndex%>][7] ='<m4:item item="SCO_MEANING" jsafe="true" outputdef="<%=znodo2%>"/>';
  
</m4:dataloop>


var _var_Objcuan = new Array();
_var_Objcuan [0]=new Array;
_var_Objcuan [0][0] ='<m4:label item="SCO_NM_OBJECTIVE" jsafe="true" outputdef="<%=znodo3%>"/>';
_var_Objcuan [0][1] ='<m4:label item="SCO_NM_TYPE" jsafe="true" outputdef="<%=znodo3%>"/>';
_var_Objcuan [0][2] ='<m4:label item="SCO_NM_CRITERIA_TYPE" jsafe="true" outputdef="<%=znodo3%>"/>';
_var_Objcuan [0][3] ='<m4:label item="SCO_SCHED_VALUE" jsafe="true" outputdef="<%=znodo3%>"/>';
_var_Objcuan [0][4] ='<m4:label item="SCO_ACCOMP_DEGREE_AUTO" jsafe="true" outputdef="<%=znodo3%>"/>';
_var_Objcuan [0][5] ='<m4:label item="SCO_ACCOMP_DEGREE" jsafe="true" outputdef="<%=znodo3%>"/>';
_var_Objcuan [0][6] ='<m4:label item="SCO_NM_MAGNITUDE" jsafe="true" outputdef="<%=znodo3%>"/>';
_var_Objcuan [0][7] ='<m4:label item="SCO_EXPLANATION" jsafe="true" outputdef="<%=znodo3%>"/>';




<m4:dataloop outputdef="<%=znodo3%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo3%>"/>
  <% ziIndex = ziCurPos.intValue()+1; %>
  _var_Objcuan [<%=ziIndex%>]=new Array;
  _var_Objcuan [<%=ziIndex%>][0] ='<m4:item item="SCO_NM_OBJECTIVE" jsafe="true" outputdef="<%=znodo3%>"/>';
  _var_Objcuan [<%=ziIndex%>][1] ='<m4:item item="SCO_NM_TYPE" jsafe="true" outputdef="<%=znodo3%>"/>';
  _var_Objcuan [<%=ziIndex%>][2] ='<m4:item item="SCO_NM_CRITERIA_TYPE" jsafe="true" outputdef="<%=znodo3%>"/>';
  _var_Objcuan [<%=ziIndex%>][3] ='<m4:item item="SCO_SCHED_VALUE" jsafe="true" outputdef="<%=znodo3%>"/>';
  _var_Objcuan [<%=ziIndex%>][4] ='<m4:item item="SCO_ACCOMP_DEGREE_AUTO" jsafe="true" outputdef="<%=znodo3%>"/>';
  _var_Objcuan [<%=ziIndex%>][5] ='<m4:item item="SCO_ACCOMP_DEGREE" jsafe="true" outputdef="<%=znodo3%>"/>';
  _var_Objcuan [<%=ziIndex%>][6] ='<m4:item item="SCO_NM_MAGNITUDE" jsafe="true" outputdef="<%=znodo3%>"/>';
  _var_Objcuan [<%=ziIndex%>][7] ='<m4:item item="SCO_EXPLANATION" jsafe="true" outputdef="<%=znodo3%>"/>';
  
</m4:dataloop>

</script>
<script type="text/javascript" language="Javascript1.5">excel_eval('<%=zidType%>');</script>
<%}%>
<%}else{%>
<%
  zidhr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zidhr);
  zorrole = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zorrole);
  zdtstart = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zdtstart);
  zidevaluator = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zidevaluator);
  zor_evaluator = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zor_evaluator);
%>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_eval_ex.jsp" method="post" name="oculto" id="oculto">
  <input type="hidden" id="zidType" name="zidType" value="03" />
  <input type="hidden" id="zidhr" name="zidhr" value="<%=zidhr%>" />
  <input type="hidden" id="zorrole" name="zorrole" value="<%=zorrole%>" />
  <input type="hidden" id="zdtstart" name="zdtstart"  value="<%=zdtstart%>" />
  <input type="hidden" id="zidevaluator" name="zidevaluator"  value="<%=zidevaluator%>" />
  <input type="hidden" id="zor_evaluator" name="zor_evaluator"  value="<%=zor_evaluator%>" />
</form>

<table class = "tablaestados" width="100%" cellspacing="0">
<tr>
  <td>
    <div class="descripcionfuncional"><%=TranMss.getProperty("ev_mss.LblEvalExceldesc")%></div>
  
  </td> 
</tr> 
<tr>
<tr class = "tablaestadosceldatitulo " >
<td>
<m4:label item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo4%>"/>
</td>
</tr>
<m4:dataloop outputdef="<%=znodo4%>">
  <m4:item  item="SCO_ID_EVALUATOR" htmlsafe="true" outputdef="<%=znodo4%>" m4varname="sIdEval"/>
  <%sIdEval = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdEval);%>
  <m4:item  item="SCO_OR_EVALUATOR" htmlsafe="true" outputdef="<%=znodo4%>" m4varname="sOrEval"/>  
  <%sOrEval = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sOrEval);%>
<tr><td class="fuentevalor"><a title="<m4:label  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo4%>"/>"  href="javascript:navegarexcell('<%=sIdEval%>','<%=sOrEval%>');"><m4:item  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo4%>"/></a></td></tr>
</m4:dataloop>
<%}%>
</div>
<m4:endpage/>
</body>
</html>