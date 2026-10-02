<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp"%>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %> 
<%@ include file="/sse_g0/sgco_gen_trans.jsp"%>
<%    
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  if ((estado==null)||(estado.equals(""))){estado="0";}
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
  
  String zIDhr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIDhr"); 
  if ((zIDhr==null)||(zIDhr.equals(""))){zIDhr="";}
  else {zIDhr=com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zIDhr);}
  String zJob = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zJob"); 
  if ((zJob==null)||(zJob.equals(""))){zJob="";}
  String zWunit = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zWunit"); 
  if ((zWunit==null)||(zWunit.equals(""))){zWunit="";}

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
  sURLxlsTplt = sProtocol + "://" + sWebServerName + ":" + sWebServerPort + "/plantillas/"+zlanguageFolderev+"/sgco_ek_job_hr.xls";
%>

<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript">
function graf_ek(){
try{
  var ExcelApp = new ActiveXObject("Excel.Application");
  var openWb   = ExcelApp.Workbooks.Open ("<%=sURLxlsTplt%>");
  var sheetObj = ExcelApp.Workbooks(1).Worksheets(1);
  
  var_data_start_CC=26;
  var_data_start_row = 26;
  var lDet=_var_detail.length;

sheetObj.Cells(2 ,2).Value  = _var_cabec0;
  sheetObj.Cells(2 ,7).Value  = _var_cabec;
    sheetObj.Cells(4 ,2).Value  = _var_cabec01;
  
sheetObj.Cells(25 ,5).Value  = _var_cabec1;
  sheetObj.Cells(25 ,6).Value  = _var_cabec2;
  sheetObj.Cells(25 ,7).Value  = _var_cabec3;
  for (var i=1; i < lDet; i++){
  if (i>1){
     sheetObj.Rows(var_data_start_CC).Copy;
     sheetObj.Rows(var_data_start_row).Insert; 
  }   
  sheetObj.Cells(var_data_start_row ,7).Value  = _var_detail[i][1];
  sheetObj.Cells(var_data_start_row ,6).Value  = _var_detail[i][2];
  sheetObj.Cells(var_data_start_row ,5).Value  = _var_detail[i][3];
  var_data_start_row = var_data_start_row +1;
}
sheetObj.Cells(1,1).Copy;
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
</script>
<title><%= Transgco_gen.getProperty("sgco_gen.TGap")%></title>
</head>
<body>
<%
String zmeta4object = "SCO_GR_HR_GAP";
String zsubsesion = "SCO_GR_HR_GAP";
String znodop = "SCO_GAP_PARAMS";
String znodo = "SMCO_GRAPH_SCALE";
String znodo1 = "DETAIL";
String zoutputdefp = zsubsesion + "!" + znodop + "[*]";
String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";

String zmove1 = znodo1 + ":" + znodo1 + "[0]";
String zmovep = znodo + ":" + znodop + "[0]";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[0]" + ".";


String zmetodoinitrw = "INIT_RW:" + zsubsesion + "!SCO_GAP_PARAMS.SGCO_CALL_ESS";
%>  
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodoinitrw%>">

  
  <m4:param name="ARG_ID_HR" value="<%=zIDhr%>"/>
  <m4:param name="ARG_ID_JOB" value="<%=zJob%>"/>
  <m4:param name="ARG_ID_WUNIT" value="<%=zWunit%>"/>
  
</m4:exec>
<m4:outputdef m4alias="<%=znodop%>"><m4:param name="M4NAME0" value="<%=zoutputdefp%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="M4NAME0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<%
int  zcount  = 0;
try {
  M4Operations m = new M4Operations(request);
  zcount = m.getCount(znodo,zsubsesion,znodo);
} catch(Exception e) {}
%>
<script type="text/javascript" language="Javascript1.5">

var _var_cabec= '<m4:item item="GAP" jsafe="true" outputdef="<%=znodop%>"/>';
var _var_cabec0 = '<%= Transgco_gen.getProperty("sgco_gen.Label_ex_cabec")%>' ;
if ('<%=zIDhr%>'==""){
var _var_cabec01= '<%= Transgco_gen.getProperty("sgco_gen.Label_ex")%>';
_var_cabec0=_var_cabec0+' :';
}else{
var _var_cabec01= '<%= Transgco_gen.getProperty("sgco_gen.Label_ex1")%>';
_var_cabec0=_var_cabec0+' '+'<%= Transgco_gen.getProperty("sgco_gen.Label_ex_cabec1")%>'+' ' +'<m4:item item="SGCO_GB_NAME" jsafe="true" outputdef="<%=znodop%>"/>'+' :';
}
var _var_detail = new Array();
var _var_detaildesc  = new Array();
var _var_cabec1  = '<%= Transgco_gen.getProperty("sgco_gen.EKnow")%>';
var _var_cabec2  = '<m4:label item="REQUIRED" jsafe="true" outputdef="<%=znodo1%>"/>';
var _var_cabec3  = '<m4:label item="HR_LEVEL" jsafe="true" outputdef="<%=znodo1%>"/>';
<m4:dataloop outputdef="<%=znodo1%>">
  <m4:current var="ziCurPos" outputdef="<%=znodo1%>"/>
  <% ziIndex = ziCurPos.intValue()+1; %>
  _var_detail [<%=ziIndex%>]=new Array;
  _var_detail [<%=ziIndex%>][0]  ='<m4:item item="COMPETENCY" jsafe="true" outputdef="<%=znodo1%>"/>';
  _var_detail [<%=ziIndex%>][1]  ='<m4:item item="HR_LEVEL" jsafe="true" outputdef="<%=znodo1%>"/>';  
  _var_detail [<%=ziIndex%>][2]  ='<m4:item item="REQUIRED" jsafe="true" outputdef="<%=znodo1%>"/>';  
  _var_detail [<%=ziIndex%>][3]  ='<m4:item item="SCO_NM_EXTD_KN" jsafe="true" outputdef="<%=znodo1%>"/>';  
</m4:dataloop>
graf_ek();
</script>
</body>
</html>





