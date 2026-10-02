<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<head>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<% String ztitle = TranMss.getProperty("ev_mss.GrafEval");%>
<title><%=ztitle%></title>
<%    
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  

String IDRH = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH");
IDRH = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", IDRH);
String RHRole = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole");
RHRole = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", RHRole);
String DTStartEval = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval");
DTStartEval = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", DTStartEval);
String IDPlan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDPlan");
String DTStartProc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartProc");
String znombre = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre");
String NombreProceso = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso");
String Principal = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Principal");

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

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
  sURLxlsTplt = sProtocol + "://" + sWebServerName + ":" + sWebServerPort + "/plantillas/"+zlanguageFolderev+"/graf_eval2.xls";
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
    sheetObj.Cells(ini ,10).Value  = _var_evaluator[i];
    sheetObj.Cells(ini ,11).Value  = _var_media[i];
    ini=ini+1;
  }
  sheetObj.Cells(6 ,3).Value  = _var_cabec[0];


  var ini=8
  var vcabec=0;
  var ldatos=_var_datos.length;
  if (ldatos>1){
    sheetObj.Cells(7 ,3 ).Value  = _var_datos[0][0];
    sheetObj.Cells(7 ,4 ).Value  = _var_datos[0][1];
    sheetObj.Cells(7 ,5 ).Value  = _var_datos[0][2];
    sheetObj.Cells(7 ,6 ).Value  = _var_datos[0][3];
    vcabec=7;
    for (var j=1; j < ldatos ; j++){
      sheetObj.Rows(8).Copy;
      sheetObj.Rows(ini).Insert;
      sheetObj.Cells(ini ,3 ).Value  = _var_datos[j][0];
      sheetObj.Cells(ini ,4 ).Value  = _var_datos[j][1];
      sheetObj.Cells(ini ,5 ).Value  = _var_datos[j][2];
      sheetObj.Cells(ini ,6 ).Value  = _var_datos[j][3];
      ini=ini+1;
    }
    
  }
  
  var ldatosobj=_var_datosobj.length; 
  
  if (ldatosobj>1){
    if  (vcabec>0){
      sheetObj.Rows(7).Copy;
      sheetObj.Rows(ini).Insert;
    }     
    sheetObj.Cells(ini ,3 ).Value  = _var_datosobj[0][0];
    sheetObj.Cells(ini ,4 ).Value  = _var_datosobj[0][1];
    sheetObj.Cells(ini ,5 ).Value  = _var_datosobj[0][2];
    sheetObj.Cells(ini ,6 ).Value  = _var_datosobj[0][3];
    if  (vcabec>0){ini=ini+1;}
    vcabec=7;
    for (var j=1; j < ldatosobj ; j++){
      sheetObj.Rows(8).Copy;
      sheetObj.Rows(ini).Insert;
      sheetObj.Cells(ini ,3 ).Value  = _var_datosobj[j][0];
      sheetObj.Cells(ini ,4 ).Value  = _var_datosobj[j][1];
      sheetObj.Cells(ini ,5 ).Value  = _var_datosobj[j][2];
      sheetObj.Cells(ini ,6 ).Value  = _var_datosobj[j][3];
      ini=ini+1;
    }
  } 
  
  
  var ldatosobj2=_var_datosobj2.length; 
  if (ldatosobj2>1){
    if  (vcabec>0){
      sheetObj.Rows(7).Copy;
      sheetObj.Rows(ini).Insert;
    }     
    sheetObj.Cells(ini ,3 ).Value  = _var_datosobj2[0][0];
    sheetObj.Cells(ini ,4 ).Value  = _var_datosobj2[0][1];
    sheetObj.Cells(ini ,5 ).Value  = _var_datosobj2[0][2];
    sheetObj.Cells(ini ,5 ).Value  = "";
    if  (vcabec>0){ ini=ini+1;}
    for (var j=1; j < ldatosobj2 ; j++){
      sheetObj.Rows(8).Copy;
      sheetObj.Rows(ini).Insert;
      sheetObj.Cells(ini ,3 ).Value  = _var_datosobj2[j][0];
      sheetObj.Cells(ini ,4 ).Value  = _var_datosobj2[j][1];
      sheetObj.Cells(ini ,5 ).Value  = _var_datosobj2[j][2];
      sheetObj.Cells(ini ,6 ).Value  = "";
      ini=ini+1;
    }
  } 
  sheetObj.Cells(1,1).Value  ="";
    sheetObj.Rows(ini).Hidden = true ;

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

String zmeta4object = "SCO_GR_EVALUATOR_ANALYSIS";
String zmeta4object1 = "SCO_GR_EVALUATE_ANALYSIS";
String zsubsesion = "EVALUATOR_ANALYSIS";
String zsubsesion1 = "EVALUATE_ANALYSIS";
String znodo1 = "SCO_H_EVALUATE";
String znodo = "CRITERIOS_EVALUATOR_RW";
String znodo2 = "CRITERIOS_RW";
String znodo4 = "SCO_CRITERIOS_EVALUATOR_OBJ_RW";
String znodo5 = "SCO_CRITERIOS_EVALUATOR_OBJ_C";

String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";
String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";

String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
String zmove1 = znodo1 + ":" + znodo1 + "[0]";
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";

String zmove = znodo + ":" + znodo + "[0]";
String zmove4 = znodo4 + ":" + znodo4 + "[0]";
String zmove5 = znodo5 + ":" + znodo5 + "[0]";

String zoutputdef2 = zsubsesion1 + "!" + znodo1 + "[*]";

String zoutputdef3 = zsubsesion1 + "!" + znodo2 + "[*]";
String zmove3 = znodo2 + ":" + znodo2 + "[0]";

String zmetodoinit = "INIT:" + zsubsesion + "!CRITERIOS_EVALUATOR_RW.SCO_INIT_DATA";
String zmetodoinit1 = "INIT1:" + zsubsesion1 + "!CRITERIOS_RW.SCO_INIT_DATA";
String zmetodotransfer = "TRANSFER_EVALUATOR:" + zsubsesion + "!CRITERIOS_EVALUATOR_RW.SCO_TRANSFER_DATA";
String zmetodotransfer1 = "TRANSFER:" + zsubsesion1 + "!CRITERIOS_RW.SCO_TRANSFER_DATA";

%>  

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>

<!--Para tabla-->
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodoinit%>">
  <m4:param name="ARG_START_PROC" value="<%=DTStartProc%>"/>
  <m4:param name="ARG_ID_PLAN" value="<%=IDPlan%>"/>
  <m4:param name="ARG_START_EVAL" value="<%=DTStartEval%>"/>
  <m4:param name="ARG_ID_HR" value="<%=IDRH%>"/>
  <m4:param name="ARG_OR_ROLE" value="<%=RHRole%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="M4NAME0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:exec m4method="<%=zmetodotransfer%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>


<!--Para grafico-->
<m4:datadef m4o="<%=zmeta4object1%>" m4name="<%=zsubsesion1%>"/>
<m4:exec m4method="<%=zmetodoinit1%>">
  <m4:param name="ARG_DATE_PROC" value="<%=DTStartProc%>"/>
  <m4:param name="ARG_DATE_EVAL" value="<%=DTStartEval%>"/>
  <m4:param name="ARG_ID_PLAN" value="<%=IDPlan%>"/>
  <m4:param name="ARG_ID_HR" value="<%=IDRH%>"/>
  <m4:param name="ARG_OR_ROLE" value="<%=RHRole%>"/>
</m4:exec>
<m4:exec m4method="<%=zmetodotransfer1%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="M4NAME0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:move><m4:param name="<%=zsubsesion1%>" value="<%=zmove1%>"/></m4:move>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:move><m4:param name="<%=zsubsesion1%>" value="<%=zmove3%>"/></m4:move>
<not_m4:chartdef chartid="RW_EVALUADO_MEDIA" chartoutputdef ="defi"/>
<m4:endjob/>
<%
  int  zcount  = 0;
  int  zcounti  = 0;
  int  zcount4  = 0;
  int  zcount4i  = 0;
  int  zcount5  = 0;
  int  zcount5i  = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount4 = m.getCount(znodo4,zsubsesion,znodo4);
    zcount4i = m.getCountInClient(znodo4,zsubsesion,znodo4);
    zcount5 = m.getCount(znodo5,zsubsesion,znodo5);
    zcount5i = m.getCountInClient(znodo5,zsubsesion,znodo5);
    
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti-1);
  String  zcount4v = String.valueOf(zcount4i-1);
  String  zcount5v = String.valueOf(zcount5i-1);
  
%>
<script type="text/javascript" language="Javascript1.5">
var _var_cabec = new Array();
_var_cabec[0] ='<%=znombre%>';
var _var_datos = new Array();
_var_datos[0] =new Array;
_var_datos [0][0] ='<m4:label item="SCO_NM_EXTD_KN_AUX" jsafe="true" outputdef="<%=znodo%>"/>';
_var_datos [0][1] ='<m4:label item="SCO_EVALUADOR_RW" jsafe="true" outputdef="<%=znodo%>"/>';
_var_datos [0][2] ='<m4:label item="SCO_NM_LEVEL_RW" jsafe="true" outputdef="<%=znodo%>"/>';
_var_datos [0][3] ='<m4:label item="SCO_PUNTAJE_RW" jsafe="true" outputdef="<%=znodo%>"/>';

<m4:dataloop outputdef="<%=znodo%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo%>"/>
  <% ziIndex = ziCurPos.intValue()+1; %>
  _var_datos [<%=ziIndex%>]=new Array;
_var_datos [<%=ziIndex%>][0] ='<m4:item item="SCO_CRITERIO_RW" jsafe="true" outputdef="<%=znodo%>"/>'+"-"+'<m4:item item="SCO_NM_EXTD_KN_AUX" jsafe="true" outputdef="<%=znodo%>"/>';
_var_datos [<%=ziIndex%>][1] ='<m4:item item="STD_N_FIRST_NAME_AUX" jsafe="true" outputdef="<%=znodo%>"/>';
_var_datos [<%=ziIndex%>][2] ='<m4:item item="SCO_NM_LEVEL_RW" jsafe="true" outputdef="<%=znodo%>"/>';
_var_datos [<%=ziIndex%>][3] ='<m4:item item="SCO_PUNTAJE_RW" jsafe="true" outputdef="<%=znodo%>"/>';
</m4:dataloop>

var _var_datosobj = new Array();
_var_datosobj[0] =new Array;
_var_datosobj [0][0] ='<m4:label item="SCO_NM_OBJECTIVE_AUX" jsafe="true" outputdef="<%=znodo4%>"/>';
_var_datosobj [0][1] ='<m4:label item="SCO_EVALUADOR_RW" jsafe="true" outputdef="<%=znodo4%>"/>';
_var_datosobj [0][2] ='<m4:label item="SCO_NM_LEVEL_RW" jsafe="true" outputdef="<%=znodo4%>"/>';
_var_datosobj [0][3] ='<m4:label item="SCO_PUNTAJE_RW" jsafe="true" outputdef="<%=znodo4%>"/>';


<m4:dataloop outputdef="<%=znodo4%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo4%>"/>
  <% ziIndex = ziCurPos.intValue()+1; %>
  _var_datosobj [<%=ziIndex%>]=new Array;
  _var_datosobj [<%=ziIndex%>][0] ='<m4:item item="SCO_CRITERIO_RW" jsafe="true" outputdef="<%=znodo%>"/>'+"-"+'<m4:item item="SCO_NM_OBJECTIVE_AUX" jsafe="true" outputdef="<%=znodo4%>"/>';
  _var_datosobj [<%=ziIndex%>][1] ='<m4:item item="SCO_GB_NAME_AUX" jsafe="true" outputdef="<%=znodo4%>"/>';
  _var_datosobj [<%=ziIndex%>][2] ='<m4:item item="SCO_NM_LEVEL_RW" jsafe="true" outputdef="<%=znodo4%>"/>';
  _var_datosobj [<%=ziIndex%>][3] ='<m4:item item="SCO_PUNTAJE_RW" jsafe="true" outputdef="<%=znodo4%>"/>';
</m4:dataloop>


var _var_datosobj2 = new Array();
_var_datosobj2[0] =new Array;
_var_datosobj2 [0][0] ='<m4:label item="SCO_NM_OBJECTIVE_AUX" jsafe="true" outputdef="<%=znodo5%>"/>';
_var_datosobj2 [0][1] ='<m4:label item="SCO_EVALUADOR_RW" jsafe="true" outputdef="<%=znodo5%>"/>';
_var_datosobj2 [0][2] ='<m4:label item="SCO_PUNTAJE_RW" jsafe="true" outputdef="<%=znodo5%>"/>';
if ('<%=Principal%>'=="1"){

<m4:dataloop outputdef="<%=znodo5%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo5%>"/>

  <% ziIndex = ziCurPos.intValue()+1; %>
   _var_datosobj2[<%=ziIndex%>][0] ='<m4:item item="SCO_CRITERIO_RW" jsafe="true" outputdef="<%=znodo%>"/>'+"-"+'<m4:item item="SCO_NM_OBJECTIVE_AUX" jsafe="true" outputdef="<%=znodo4%>"/>';
  _var_datosobj2 [<%=ziIndex%>][1] ='<m4:item item="SCO_GB_NAME_AUX" jsafe="true" outputdef="<%=znodo5%>"/>';
  _var_datosobj2 [<%=ziIndex%>][2] ='<m4:item item="SCO_PUNTAJE_RW" jsafe="true" outputdef="<%=znodo5%>"/>';
  
</m4:dataloop>
}

var _var_know = new Array();
var _var_evaluator= new Array();
var _var_media = new Array();
<m4:dataloop outputdef="<%=znodo2%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo2%>"/>

  <% ziIndex = ziCurPos.intValue()+1; %>
  _var_know[<%=ziIndex%>] ='<m4:item item="SCO_CRITERIO" jsafe="true" outputdef="<%=znodo2%>"/>';
  _var_evaluator[<%=ziIndex%>] ='<m4:item item="SCO_PUNTAJE_AUTOEVAL" jsafe="true" outputdef="<%=znodo2%>"/>';
  _var_media [<%=ziIndex%>] ='<m4:item item="SCO_PUNTAJE_MEDIO" jsafe="true" outputdef="<%=znodo2%>"/>';
</m4:dataloop>
graf_eval();</script>

</body>
<m4:endpage/> 
</html>


