<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<head>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<% String ztitle = TranMss.getProperty("ev_mss.GrafEval");%>
<title><%=ztitle%></title>
<%    
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
String IDRH = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH");
IDRH = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", IDRH);
String RHRole = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole");
RHRole = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", RHRole);
String DTStartEval = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval");
DTStartEval = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", DTStartEval);

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
  sURLxlsTplt = sProtocol + "://" + sWebServerName + ":" + sWebServerPort + "/plantillas/"+zlanguageFolderev+"/eval_g_oeval.xls";
%>

</head>
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
  var llevel=_var_know.length;
  var ini=12;
  for (var i=1; i < llevel; i++){
    sheetObj.Cells(ini,9).Value  = _var_know[i];
    sheetObj.Cells(ini ,11).Value  = _var_evaluator[i];

    sheetObj.Cells(ini ,10).Value  = _var_media[i];
    ini=ini+1;
  }
  var ini=12;
  var llevel2=_var_o.length;
  for (var i=1; i < llevel2; i++){
    sheetObj.Cells(ini,12).Value  = _var_o[i];
    sheetObj.Cells(ini ,14).Value  = _var_evaluator2[i];

    sheetObj.Cells(ini ,13).Value  = _var_media2[i];
    ini=ini+1;
  }

  sheetObj.Cells(6 ,4).Value  = _var_cabec[0];
  sheetObj.Cells(2 ,4).Value  = _var_cabec[1];
  var ini=9;

  var nevaluatorc=_var_evaluatorc.length;
  if (nevaluatorc>1){
    sheetObj.Cells(7 ,3 ).Value  = _var_evaluatorc[0][0];
    sheetObj.Cells(7 ,4 ).Value  = _var_evaluatorc[0][1];

    sheetObj.Cells(7 ,6 ).Value  = _var_evaluatorc[0][3];
    for (var j=1; j < nevaluatorc ; j++){
      sheetObj.Rows(8).Copy;
      sheetObj.Rows(ini).Insert;
      sheetObj.Cells(ini ,3 ).Value  = _var_evaluatorc[j][0];
      sheetObj.Cells(ini ,4 ).Value  = _var_evaluatorc[j][1] +'('+_var_evaluatorc[j][2]+')';
      
      sheetObj.Cells(ini ,6 ).Value  = _var_evaluatorc[j][3]+'('+_var_evaluatorc[j][4]+')';
      ini=ini+1;
    }
    sheetObj.Rows(7).Copy;
    sheetObj.Rows(ini).Insert;
    sheetObj.Cells(ini ,3 ).Value  = _var_evaluatorc[0][8];
    sheetObj.Cells(ini ,4 ).Value  = _var_evaluatorc[0][0];
    sheetObj.Cells(ini ,5 ).Value  = '';
    sheetObj.Cells(ini ,6 ).Value  = '';
    ini=ini+1;
    for (var j=1; j < nevaluatorc ; j++){

      sheetObj.Rows(ini+1).Copy;
      sheetObj.Rows(ini).Insert;
      if(j==1){
      sheetObj.Cells(ini ,3 ).Value  = _var_evaluatorc[0][5];
      }else{
      sheetObj.Cells(ini ,3 ).Value='';
      }
      sheetObj.Cells(ini ,4 ).Value  =_var_evaluatorc[j][0];
      sheetObj.Cells(ini ,5 ).Value  = _var_evaluatorc[j][5];
      sheetObj.Cells(ini ,6 ).Value  ='';
      ini=ini+1;
    }

    for (var j=1; j < nevaluatorc ; j++){
      sheetObj.Rows(ini+1).Copy;
      sheetObj.Rows(ini).Insert;
      if(j==1){
      sheetObj.Cells(ini ,3 ).Value  = _var_evaluatorc[0][6];
      }else{
      sheetObj.Cells(ini ,3 ).Value='';
      }
      sheetObj.Cells(ini ,4 ).Value  =_var_evaluatorc[j][0];
      sheetObj.Cells(ini ,5 ).Value  = _var_evaluatorc[j][6];
      sheetObj.Cells(ini ,6 ).Value  ='';
      ini=ini+1;
    }
    for (var j=1; j < nevaluatorc ; j++){
      sheetObj.Rows(ini+1).Copy;
      sheetObj.Rows(ini).Insert;
      if(j==1){
      sheetObj.Cells(ini ,3 ).Value  = _var_evaluatorc[0][7];
      }else{
      sheetObj.Cells(ini ,3 ).Value='';
      }
      sheetObj.Cells(ini ,4 ).Value  =_var_evaluatorc[j][0];
      sheetObj.Cells(ini ,5 ).Value  = _var_evaluatorc[j][7];
      sheetObj.Cells(ini ,6 ).Value  ='';
      ini=ini+1;
    }
  sheetObj.Rows(ini+1).Hidden = true ;
  ini=ini+2;
  }




  var lcono=_var_cono.length;
  if (lcono>1){
    sheetObj.Rows(7).Copy;
    sheetObj.Rows(ini).Insert;
    sheetObj.Cells(ini ,3 ).Value  = _var_cono[0][0];
    sheetObj.Cells(ini ,4 ).Value  = _var_cono[0][2];
    sheetObj.Cells(ini ,5 ).Value  = _var_cono[0][3] +"("+_var_cono[0][4]+")";
    sheetObj.Cells(ini ,6 ).Value  = _var_cono[0][5];
    ini=ini+1;
    var cono_ant='';
    var cono_act='';
    for (var j=1; j < lcono ; j++){
      sheetObj.Rows(8).Copy;
      sheetObj.Rows(ini).Insert;
      cono_act =_var_cono[j][1];
      if (cono_ant==cono_act){
        sheetObj.Cells(ini ,3 ).Value  =''
      }else{
          sheetObj.Cells(ini ,3 ).Value  =_var_cono[j][1]+'-'+ _var_cono[j][0];
          cono_ant=_var_cono[j][1];
      }
      sheetObj.Cells(ini ,4 ).Value  = _var_cono[j][2];
      sheetObj.Cells(ini ,5 ).Value  = _var_cono[j][3]+"("+_var_cono[j][4]+")";
      sheetObj.Cells(ini ,6 ).Value  = _var_cono[j][5];


      ini=ini+1;
    }
    
  }




  
  var ldatosobj=_var_datosobj.length; 

  if (ldatosobj>1){
  
      sheetObj.Rows(7).Copy;
      sheetObj.Rows(ini).Insert;
        
    sheetObj.Cells(ini ,3 ).Value  = _var_datosobj[0][0];
    sheetObj.Cells(ini ,4 ).Value  = _var_datosobj[0][2];
    sheetObj.Cells(ini ,5 ).Value  = _var_datosobj[0][3] +"("+_var_datosobj[0][4]+")";
    sheetObj.Cells(ini ,6 ).Value  = _var_datosobj[0][5];
    ini=ini+1;
    var obj_ant='';
    var obj_act='';
    for (var j=1; j < ldatosobj ; j++){
      sheetObj.Rows(8).Copy;
      sheetObj.Rows(ini).Insert;
      obj_act = _var_datosobj[j][1]
      if (obj_ant==obj_act){
        sheetObj.Cells(ini ,3 ).Value  =''
      }else{
        sheetObj.Cells(ini ,3 ).Value  =_var_datosobj[j][1]+'-'+ _var_datosobj[j][0];
        obj_ant=_var_datosobj[j][1];
      }
    
      sheetObj.Cells(ini ,4 ).Value  = _var_datosobj[j][2];
      sheetObj.Cells(ini ,5 ).Value  = _var_datosobj[j][3]+"("+_var_datosobj[j][4]+")";
      sheetObj.Cells(ini ,6 ).Value  = _var_datosobj[j][5];
  
      ini=ini+1;
    }
  } 
  
  var ldatosobj2=_var_datosobj2.length; 
  if (ldatosobj2>1){
    sheetObj.Rows(7).Copy;
    sheetObj.Rows(ini).Insert;
    sheetObj.Cells(ini ,3 ).Value  = _var_datosobj2[0][0];
    sheetObj.Cells(ini ,4 ).Value  = _var_datosobj2[0][2];
    sheetObj.Cells(ini ,5 ).Value  = _var_datosobj2[0][3];
    sheetObj.Cells(ini ,6 ).Value  =_var_datosobj2[0][5];

    var obj_ant='';
    var obj_act='';
    ini=ini+1;
    for (var j=1; j < ldatosobj2 ; j++){
      sheetObj.Rows(8).Copy;
      sheetObj.Rows(ini).Insert;
      obj_act = _var_datosobj2[j][1];
      if (obj_ant==obj_act){
        sheetObj.Cells(ini ,3 ).Value  ='';
      }else{
        sheetObj.Cells(ini ,3 ).Value  =_var_datosobj2[j][1]+'-'+ _var_datosobj2[j][0];
        obj_ant=_var_datosobj2[j][1];
      }
    
      sheetObj.Cells(ini ,4 ).Value  = _var_datosobj2[j][2];
      sheetObj.Cells(ini ,5 ).Value  = _var_datosobj2[j][3]+"-"+_var_datosobj2[j][4];
      sheetObj.Cells(ini ,6 ).Value  = _var_datosobj2[j][5];
  
      ini=ini+1;
    }
  } 
  
    sheetObj.Rows(8).Hidden = true ;

sheetObj.Cells(1,1).Value  ="";
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
<body>
<%
String zmeta4object = "SMCO_OEVALUATOR_DATA";
String zsubsesion = "SMCO_OEVALUATOR_DATA";
String znodo1 = "SMCO_OEVAL_DATA";
String znodo = "SMCO_OEVALUATOR_DATA";
String znodo2 = "SMCO_OE_CAPAB";
String znodo3 = "SMCO_OE_OCUALI_DATA";
String znodo4 = "SMCO_OE_OCUANTI_DATA";
String znodo5 = "SMCO_CAPAB_G_V";
String znodo6 = "SMCO_OCUALI_G_V";



String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";

String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";

String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";


String zmetodoinit = "INIT:" + zsubsesion + "!SMCO_OEVAL_DATA.SMCO_LOAD_DATA";

String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;
String znamenodo4  = znodo4 + ":" + zsubsesion  + "!" + znodo4;
%>  

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodoinit%>">
  <m4:param name="ARG_DT_START" value="<%=DTStartEval%>"/>
  <m4:param name="ARG_ID_HR" value="<%=IDRH%>"/>
  <m4:param name="ARG_OR_ROLE" value="<%=RHRole%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="M4NAME0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>

<m4:endjob/>

<script type="text/javascript" language="Javascript1.5">
var _var_cabec = new Array();
_var_cabec[0] ='<m4:item item="SCO_GB_NAME" jsafe="true" outputdef="<%=znodo1%>"/>';
_var_cabec[1] ='<m4:item item="SCO_NM_EVAL_PROC" jsafe="true" outputdef="<%=znodo1%>"/>';
var _var_evaluatorc = new Array();
_var_evaluatorc[0] =new Array;
_var_evaluatorc[0][0] ='<m4:label item="SCO_GB_NAME" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[0][1] ='<m4:label item="SCO_NM_LEVEL" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[0][2] ='<m4:label item="SCO_CALCUL_RAT_CAP" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[0][3] ='<m4:label item="SCO_NM_LEVEL_1" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[0][4] ='<m4:label item="SCO_CALCUL_RAT_OBJ" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[0][5] ='<m4:label item="SCO_EVALUATOR_COMM" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[0][6] ='<m4:label item="SCO_AREAS_IMP" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[0][7] ='<m4:label item="SCO_STRENGTHS" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[0][8] ='<m4:label m4name="<%=znamenodo%>" jsafe="true"/>';

<m4:dataloop outputdef="<%=znodo%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo%>"/>
  <% ziIndex = ziCurPos.intValue()+1; %>
  _var_evaluatorc [<%=ziIndex%>]=new Array;
_var_evaluatorc[<%=ziIndex%>][0] ='<m4:item item="SCO_GB_NAME" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[<%=ziIndex%>][1] ='<m4:item item="SCO_NM_LEVEL" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[<%=ziIndex%>][2] ='<m4:item item="SCO_CALCUL_RAT_CAP" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[<%=ziIndex%>][3] ='<m4:item item="SCO_NM_LEVEL_1" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[<%=ziIndex%>][4] ='<m4:item item="SCO_CALCUL_RAT_OBJ" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[<%=ziIndex%>][5] ='<m4:item item="SCO_EVALUATOR_COMM" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[<%=ziIndex%>][6] ='<m4:item item="SCO_AREAS_IMP" jsafe="true" outputdef="<%=znodo%>"/>';
_var_evaluatorc[<%=ziIndex%>][7] ='<m4:item item="SCO_STRENGTHS" jsafe="true" outputdef="<%=znodo%>"/>';
</m4:dataloop>
var _var_cono = new Array();
_var_cono[0] =new Array;
_var_cono [0][0] ='<m4:label item="SCO_NM_EXTD_KN" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_cono [0][2] ='<m4:label item="SCO_GB_NAME" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_cono [0][3] ='<m4:label item="SCO_NM_LEVEL" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_cono [0][4] ='<m4:label item="SCO_VALUE_RAT" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_cono [0][5] ='<m4:label item="SCO_EXPLANATION" jsafe="true" outputdef="<%=znodo2%>"/>';
<m4:dataloop outputdef="<%=znodo2%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo2%>"/>
  <% ziIndex = ziCurPos.intValue()+1; %>
  _var_cono [<%=ziIndex%>]=new Array;
_var_cono [<%=ziIndex%>][0] ='<m4:item item="SCO_NM_EXTD_KN" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_cono [<%=ziIndex%>][1] ='<m4:item item="SCO_ID_CAPABILITY" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_cono [<%=ziIndex%>][2] ='<m4:item item="SCO_GB_NAME" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_cono [<%=ziIndex%>][3] ='<m4:item item="SCO_NM_LEVEL" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_cono [<%=ziIndex%>][4] ='<m4:item item="SCO_VALUE_RAT" jsafe="true" outputdef="<%=znodo2%>"/>';
_var_cono [<%=ziIndex%>][5] ='<m4:item item="SCO_EXPLANATION" jsafe="true" outputdef="<%=znodo2%>"/>';
</m4:dataloop>

var _var_datosobj = new Array();
_var_datosobj[0] =new Array;
_var_datosobj [0][0] ='<m4:label item="SCO_NM_OBJECTIVE" jsafe="true" outputdef="<%=znodo3%>"/>';
_var_datosobj [0][1] ='<m4:label item="SCO_ID_OBJECTIVE" jsafe="true" outputdef="<%=znodo3%>"/>';
_var_datosobj [0][2] ='<m4:label item="SCO_GB_NAME" jsafe="true" outputdef="<%=znodo3%>"/>';
_var_datosobj [0][3] ='<m4:label item="SCO_NM_LEVEL" jsafe="true" outputdef="<%=znodo3%>"/>';
_var_datosobj [0][4] ='<m4:label item="SCO_PERCENT" jsafe="true" outputdef="<%=znodo3%>"/>';
_var_datosobj [0][5] ='<m4:label item="SCO_EXPLANATION" jsafe="true" outputdef="<%=znodo3%>"/>';
<m4:dataloop outputdef="<%=znodo3%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo3%>"/>
  <% ziIndex = ziCurPos.intValue()+1; %>
  _var_datosobj [<%=ziIndex%>]=new Array;
  _var_datosobj [<%=ziIndex%>][0] ='<m4:item item="SCO_NM_OBJECTIVE" jsafe="true" outputdef="<%=znodo3%>"/>';
  _var_datosobj [<%=ziIndex%>][1] ='<m4:item item="SCO_ID_OBJECTIVE" jsafe="true" outputdef="<%=znodo3%>"/>'
  _var_datosobj [<%=ziIndex%>][2] ='<m4:item item="SCO_GB_NAME" jsafe="true" outputdef="<%=znodo3%>"/>';
  _var_datosobj [<%=ziIndex%>][3] ='<m4:item item="SCO_NM_LEVEL" jsafe="true" outputdef="<%=znodo3%>"/>';
  _var_datosobj [<%=ziIndex%>][4] ='<m4:item item="SCO_PERCENT" jsafe="true" outputdef="<%=znodo3%>"/>';
  _var_datosobj [<%=ziIndex%>][5] ='<m4:item item="SCO_EXPLANATION" jsafe="true" outputdef="<%=znodo3%>"/>';
</m4:dataloop>


var _var_datosobj2 = new Array();
_var_datosobj2[0] =new Array;
_var_datosobj2 [0][0] ='<m4:label m4name="<%=znamenodo4%>" jsafe="true"/>';
_var_datosobj2 [0][1] ='<m4:label item="SCO_ID_OBJECTIVE" jsafe="true" outputdef="<%=znodo4%>"/>';
_var_datosobj2 [0][2] ='<m4:label item="SCO_GB_NAME" jsafe="true" outputdef="<%=znodo4%>"/>';
_var_datosobj2 [0][3] ='<m4:label item="SCO_ACCOMP_DEGREE" jsafe="true" outputdef="<%=znodo4%>"/>';
_var_datosobj2 [0][4] ='<m4:label item="SCO_NM_MAGNITUDE" jsafe="true" outputdef="<%=znodo4%>"/>';
_var_datosobj2 [0][5] ='<m4:label item="SCO_EXPLANATION" jsafe="true" outputdef="<%=znodo4%>"/>';


<m4:dataloop outputdef="<%=znodo4%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo4%>"/>

  <% ziIndex = ziCurPos.intValue()+1; %>
  _var_datosobj2 [<%=ziIndex%>]=new Array;
   _var_datosobj2[<%=ziIndex%>][0] ='<m4:item item="SCO_NM_OBJECTIVE" jsafe="true" outputdef="<%=znodo4%>"/>';
  _var_datosobj2 [<%=ziIndex%>][1] ='<m4:item item="SCO_ID_OBJECTIVE" jsafe="true" outputdef="<%=znodo4%>"/>';
  _var_datosobj2 [<%=ziIndex%>][2] ='<m4:item item="SCO_GB_NAME" jsafe="true" outputdef="<%=znodo4%>"/>';
    _var_datosobj2 [<%=ziIndex%>][3] ='<m4:item item="SCO_ACCOMP_DEGREE" jsafe="true" outputdef="<%=znodo4%>"/>';
  _var_datosobj2 [<%=ziIndex%>][4] ='<m4:item item="SCO_NM_MAGNITUDE" jsafe="true" outputdef="<%=znodo4%>"/>';
  _var_datosobj2 [<%=ziIndex%>][5] ='<m4:item item="SCO_EXPLANATION" jsafe="true" outputdef="<%=znodo4%>"/>';
</m4:dataloop>


var _var_know = new Array();
var _var_evaluator= new Array();
var _var_media = new Array();

<m4:dataloop outputdef="<%=znodo5%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo5%>"/>

  <% ziIndex = ziCurPos.intValue()+1; %>
//  _var_know[<%=ziIndex%>] ='<m4:item item="SCO_ID_CAPABILITY" jsafe="true" outputdef="<%=znodo5%>"/>'+' - '+'<m4:item item="SCO_NM_EXTD_KN" jsafe="true" outputdef="<%=znodo5%>"/>';
  _var_know[<%=ziIndex%>] ='<m4:item item="SCO_NM_EXTD_KN" jsafe="true" outputdef="<%=znodo5%>"/>';
  _var_evaluator[<%=ziIndex%>] ='<m4:item item="SCO_VALUE_AUTO" jsafe="true" outputdef="<%=znodo5%>"/>';
  _var_media [<%=ziIndex%>] ='<m4:item item="SCO_VALUE_MEDIA" jsafe="true" outputdef="<%=znodo5%>"/>';
</m4:dataloop>


var _var_o = new Array();
var _var_evaluator2= new Array();
var _var_media2 = new Array();
<m4:dataloop outputdef="<%=znodo6%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo6%>"/>

  <% ziIndex = ziCurPos.intValue()+1; %>
//  _var_o[<%=ziIndex%>] ='<m4:item item="SCO_ID_OBJECTIVE" jsafe="true" outputdef="<%=znodo6%>"/>'+'-'+'<m4:item item="SCO_NM_OBJECTIVE" jsafe="true" outputdef="<%=znodo6%>"/>';
  _var_o[<%=ziIndex%>] ='<m4:item item="SCO_NM_OBJECTIVE" jsafe="true" outputdef="<%=znodo6%>"/>';
  _var_evaluator2[<%=ziIndex%>] ='<m4:item item="SCO_VALUE_AUTO" jsafe="true" outputdef="<%=znodo6%>"/>';

  _var_media2 [<%=ziIndex%>] ='<m4:item item="SCO_VALUE_MEDIA" jsafe="true" outputdef="<%=znodo6%>"/>';
</m4:dataloop>

graf_eval();</script>

</body>
<m4:endpage/> 
</html>


