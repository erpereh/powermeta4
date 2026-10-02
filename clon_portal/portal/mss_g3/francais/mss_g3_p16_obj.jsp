<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<head>
<%    
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String zcon = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"contador");
String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");
String zOrdinal = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zORDINAL");
String zACC = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ACC");
String zIDOBJECTIVE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOIDOBJECTIVE");
String zWEIGHT = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOWEIGHT");
String zID_OBJ_REQ_LVL= "";
String zIDMAGNITUD = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOIDMAGNITUD");
String zSCHEDVALUE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOSCHEDVALUE");
String zSCOCOMMENT = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOCOMMENT");
String zCualcuant = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zCualcuant");
String JSP_REDIRECCION = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"JSP_REDIRECCION");
String sIdHr_Encr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH");
String IDRH = "";  
if (sIdHr_Encr == null || sIdHr_Encr.equals("")) {IDRH="";}
else {IDRH = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", sIdHr_Encr);}
String sOrRole_Encr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole");
String RHRole = "";  
if (sOrRole_Encr == null || sOrRole_Encr.equals("")) {RHRole="";}
else {RHRole = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", sOrRole_Encr);}
String sDtStarEval_Encr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval");
String DTStartEval = "";  
if (sDtStarEval_Encr == null || sDtStarEval_Encr.equals("")) {DTStartEval="";}
else {DTStartEval = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", sDtStarEval_Encr);}
String NombreEmpleado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreEmpleado");
String NombreProceso = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso");
NombreEmpleado = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(NombreEmpleado);
NombreProceso = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(NombreProceso);
JSP_REDIRECCION = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(JSP_REDIRECCION);
String zSCOIDCRITERIATYPE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOIDCRITERIATYPE");
zSCOIDCRITERIATYPE = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zSCOIDCRITERIATYPE);
String ztitle = "";
String DescrCritEv = "";
String LblCual = "";
String LblCuant = "";
String Datos= "";
String Enviar = "";
String Volver = "";
String profData = "";

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((mss==null)||(mss.equals(""))){ mss = "0";}
if ((zIDOBJECTIVE==null)||(zIDOBJECTIVE.equals(""))){zIDOBJECTIVE="";}
if ((zWEIGHT==null)||(zWEIGHT.equals(""))){zWEIGHT="";}
if ((zIDMAGNITUD==null)||(zIDMAGNITUD.equals(""))){zIDMAGNITUD="";}
if ((zSCHEDVALUE==null)||(zSCHEDVALUE.equals(""))){zSCHEDVALUE="";}
if ((zSCOCOMMENT==null)||(zSCOCOMMENT.equals(""))){zSCOCOMMENT="";}
if ((zCualcuant==null)||(zCualcuant.equals(""))){zCualcuant="CUANTITATIVE";}

String zmss="'"+mss+"'";
%>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<link href="/css/style_eval.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>

<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>

<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>  
    <% ztitle = TranMss.getProperty("ev_mss.DefObj"); %>
    <% DescrCritEv = TranMss.getProperty("ev_mss.DescrCritEv"); %>  
    <% LblCual = TranMss.getProperty("ev_mss.LblCual"); %>  
    <% LblCuant = TranMss.getProperty("ev_mss.LblCuant"); %>  
    <% Datos = TranMss.getProperty("ev_mss.LinkDatos"); %>      
    <% Enviar = Tran.getProperty("Button.Send"); %>
    <% Volver = TranMss.getProperty("ev_mss.Criterio"); %>
    <% profData = Tran.getProperty("Labelmss.ProfsData"); %>

<title><%=ztitle%></title>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>
</head>
<body>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
  String zAyuda="/iconos/info_12.gif";   
  String Ver = Tran.getProperty("Label.Ver");
String zsubsesion = "SSM_DEFINE_CRITERIA";
String zmeta4object = "SSM_DEFINE_CRITERIA";
String znodo = "M4T_H_EVALUATE";
String znodo3 = "M4T_EVAL_OBJECT";  
String znodo10 = "M4T_OBJETIVE";  
String znodo11 = "M4T_X_OBJ_MAGN";
String znodo12 = "SSM_OBJ_LEVEL";
String zconodo13 = "SSCO_EV_CRI_TYPE";
String zconodo14 = "SSE_EVAL_OBJECT";
String znodo15 = "M4T_DEFAULT_SCALE_LEVELS";
String zcooutputdef13= zsubsesion + "!" + zconodo13 + "[*]";
String zcooutputdef14= zsubsesion + "!" + zconodo14 + "[*]";

String zdireccion = "sse_g3/mss_g3_p16_objective.jsp";
String zventanas = "6";
int zvuelta = 3;
String zestado = "31";
zestado=zestado+"&contador="+zcon+"&mss="+mss;
int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;

String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zSCODTACTUAL = zcomun + "SCO_DT_ACTUAL";
String zSCONMEVALPROC = zcomun + "SCO_NM_EVAL_PROC";

String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";

String zoutputdef10 = zsubsesion + "!" + znodo10 + "[*]";
String zmove10 = znodo10 + ":" + znodo10 + "[FIRST]";
String zcomun10 = znodo10 + ":" + zsubsesion + "!" + znodo10 + "[&VAR.m4lix]" + ".";

String zoutputdef11 = zsubsesion + "!" + znodo11 + "[*]";
String zmove11 = znodo11 + ":" + znodo11 + "[FIRST]";
String zcomun11 = znodo11 + ":" + zsubsesion + "!" + znodo11 + "[&VAR.m4lix]" + ".";

String zoutputdef12 = zsubsesion + "!" + znodo12 + "[*]";
String zmove12 = znodo12 + ":" + znodo12 + "[FIRST]";
String zcomun12 = znodo12 + ":" + zsubsesion + "!" + znodo12 + "[&VAR.m4lix]" + ".";

String zoutputdef15 = zsubsesion + "!" + znodo15 + "[*]";
String zmove15 = znodo15 + ":" + znodo15 + "[FIRST]";
String zcomun15 = znodo15 + ":" + zsubsesion + "!" + znodo15 + "[&VAR.m4lix]" + ".";
String zSCO_NM_OBJECTIVE = zcomun3 + "SCO_NM_OBJECTIVE";
String zSCO_ID_OBJECTIVE = zcomun3 + "SCO_ID_OBJECTIVE";
String zSCO_WEIGHT = zcomun3 + "SCO_WEIGHT";
String zSCO_ID_MAGNITUD = zcomun3 + "SCO_ID_MAGNITUD";
String zSCO_NM_MAGNITUD = zcomun3 + "SCO_NM_MAGNITUDE";
String zSCO_SCHED_VALUE = zcomun3 + "SCO_SCHED_VALUE";
String zSCO_ID_OBJ_REQ_LVL = zcomun3 + "SCO_ID_OBJ_REQ_LVL";
String zSCO_COMMENT = zcomun3 + "SCO_COMMENT";
    
String SCO_NM_LEVEL = zcomun3 + "SCO_NM_LEVEL";
String zSCO_DT_START_REQ = zcomun3 + "SCO_DT_START_REQ";

String zSCONMOBJECTIVE = zcomun10 + "SCO_NM_OBJECTIVE";
String zSCOIDOBJECTIVE = zcomun10 + "SCO_ID_OBJECTIVE";

String zSCOIDMAGNITUD = zcomun11 + "SCO_ID_MAGNITUD";  
String zSCONMMAGNITUDE = zcomun11 + "SCO_NM_MAGNITUDE";  

String zSCOIDLEVEL = zcomun12 + "SCO_ID_LEVEL";  
String zSCONMLEVEL = zcomun12 + "SCO_NM_LEVEL";  

String zSCOIDLEVELM4T = zcomun15 + "SCO_ID_LEVEL";  
String zSCONMLEVELM4T = zcomun15 + "SCO_NM_LEVEL";  

String zmetodocarga = "" ;


String disabled = "";
String zdisabled03 = "";
String zdisabled04 = "";

if (zACC.equals("NEW")==true){
  zmetodocarga = zsubsesion + "!" + znodo3 + "." + "SSM_NEW";
  zSCOIDCRITERIATYPE="02";
} else if (zACC.equals("MOD")) {
  zmetodocarga = zsubsesion + "!" + znodo3 + "." + "SSM_MOVE";
  disabled = "disabled";
  zdisabled03 = "disabled";
  zdisabled04 = "disabled";  
}

%>  
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/><m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_POS" value="<%=zOrdinal%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo10%>"><m4:param name="m4name0" value="<%=zoutputdef10%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo11%>"><m4:param name="m4name0" value="<%=zoutputdef11%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo12%>"><m4:param name="m4name0" value="<%=zoutputdef12%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=zconodo13%>" ><m4:param name="m4name0" value="<%=zcooutputdef13%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=zconodo14%>" ><m4:param name="m4name0" value="<%=zcooutputdef14%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo15%>"><m4:param name="m4name0" value="<%=zoutputdef15%>"/></m4:outputdef>

<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove10%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove11%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove12%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove15%>"/></m4:move>
<%
  int  zcount  = 0;
  int  zcounti  = 0;
  int  zcount3  = 0;
  int  zcounti3  = 0;
  int  zcount10  = 0;
  int  zcounti10  = 0;
  int  zcount11  = 0;
  int  zcounti11  = 0;
  int  zcount12  = 0;
  int  zcounti12  = 0;
  int  zcounti15  = 0;
  int dPeso = 0;
  double dPuntua = 0 ;
  try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
    zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
    zcount10 = m.getCount(znodo10,zsubsesion,znodo10);
    zcounti10 = m.getCountInClient(znodo10,zsubsesion,znodo10);
    zcount11 = m.getCount(znodo11,zsubsesion,znodo11);
    zcounti11 = m.getCountInClient(znodo11,zsubsesion,znodo11);
    zcount12 = m.getCount(znodo12,zsubsesion,znodo12);
    zcounti12 = m.getCountInClient(znodo12,zsubsesion,znodo12);
    zcounti15 = m.getCountInClient(znodo15,zsubsesion,znodo15);

  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  String  zcountv3 = String.valueOf(zcounti3-1);
  String  zcountv10 = String.valueOf(zcounti10-1);
  String  zcountv11 = String.valueOf(zcounti11-1);
  String  zcountv12 = String.valueOf(zcounti12-1);
  String  zcountv15 = String.valueOf(zcounti15-1);

String zNmObjetive="";
  String zselected1 = ""; 
  int i1 = 0;
  String id1 = "";
if (zACC.equals("MOD")) {
    try {
    M4Operations t = new M4Operations(request);
    t.moveData(znodo3,zmeta4object,znodo3,zOrdinal);
    zIDOBJECTIVE = t.getItem(znodo3,zsubsesion,znodo3,"","SCO_ID_OBJECTIVE");
    zNmObjetive = t.getItem(znodo3,zsubsesion,znodo3,"","SCO_NM_OBJECTIVE");
    zWEIGHT = t.getItem(znodo3,zsubsesion,znodo3,"","SCO_WEIGHT");
    zID_OBJ_REQ_LVL = t.getItem(znodo3,zsubsesion,znodo3,"","SCO_ID_OBJ_REQ_LVL");
    zIDMAGNITUD = t.getItem(znodo3,zsubsesion,znodo3,"","SCO_ID_MAGNITUD");
    zSCHEDVALUE = t.getItem(znodo3,zsubsesion,znodo3,"","SCO_SCHED_VALUE");
    zSCOCOMMENT = t.getItem(znodo3,zsubsesion,znodo3,"","SCO_COMMENT");   
    zSCOIDCRITERIATYPE = t.getItem(znodo3,zsubsesion,znodo3,"","SCO_ID_CRITERIA_TYPE");
      if (zID_OBJ_REQ_LVL.equals("")) {
        zCualcuant = "CUANTITATIVE";
      } else { 
        zCualcuant = "CUALITATIVE";
      }

} catch(Exception e) {}
dPeso = Double.valueOf(zWEIGHT).intValue();

if (zIDMAGNITUD.equals("")==false){
  dPuntua = Double.valueOf(zSCHEDVALUE).doubleValue();
}
}
%>

<script type="text/javascript">
function searchoption(sform,sidinput,sidoption){
  oselect=document.forms[sform].elements[sidinput];
  for(var ni=0; ni< oselect.options.length; ni++){    
    if (oselect.options[ni].value == sidoption){
    oselect.selectedIndex = ni; 
    break;
    }
  } 

}
function load(empleado)
{
var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&person=" + empleado;
window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');
}

function comprobar(){

var weight = m4valor("NombreFormulario","SCO_WEIGHT","","get");
var IdObj = m4valor("NombreFormulario","SCO_ID_OBJECTIVE","","get");
var objIdObj = m4elemento("SCO_ID_OBJECTIVE");
var level = m4valor("NombreFormulario","SCO_ID_OBJ_REQ_LVL","","get");
var Magnitud = m4valor("NombreFormulario","SCO_ID_MAGNITUD","","get");
var Valor = m4valor("NombreFormulario","SCO_SCHED_VALUE","","get");
var Comment = m4valor("NombreFormulario","SCO_COMMENT","","get");
var ckcualcuant = "";
var a=0;
if (IdObj ==""){
  var name = m4valor("NombreFormulario","SMCO_NAME_OBJ","","get");
  var description = m4valor("NombreFormulario","SMCO_DESCRIPTION","","get");
  a=description.length;
}
var oobjeto = document.forms["NombreFormulario"].elements["chkCUAL_CUANT"];

if (oobjeto[0].checked == true){   
  ckcualcuant ="CUALITATIVE";
            
}else{
  ckcualcuant ="CUANTITATIVE";      
}  

var error = 0;
var sMessage = new String(eval("_gen_error_msg"));
if ((IdObj == "") && (name== "" || description==""))  
  {   
      if (name== "" && description=="") {
        error = 1;
            sMessage = sMessage + "\n" + m4getmessage("_oblig","<m4:label  item="SMCO_NAME_OBJ" outputdef="<%=zconodo14%>" jsafe="true"/>");
        sMessage = sMessage + "\n" + m4getmessage("_oblig","<m4:label  item="SMCO_DESCRIPTION" outputdef="<%=zconodo14%>" jsafe="true"/>");
      }
      else
      {   
        if (name== "") {
          error = 1;
          sMessage = sMessage + "\n" + m4getmessage("_oblig","<m4:label  item="SMCO_NAME_OBJ" outputdef="<%=zconodo14%>" jsafe="true"/>");
        }
        else {
          error = 1;
          sMessage = sMessage + "\n" + m4getmessage("_oblig","<m4:label  item="SMCO_DESCRIPTION" outputdef="<%=zconodo14%>" jsafe="true"/>");
        } 
      }
  }

if (weight == "") {
  error = 1
  sMessage = sMessage + "\n" + ("_num_oblig","<m4:label m4name="<%=zSCO_WEIGHT%>" jsafe="true"/>","");
} else {
  if ((weight < 0) || (weight > 100)) {
    sMessage = sMessage + "\n" +m4getmessage("_sl_co_mss_ev_14");
    error = 1
  }
}

if ((level == "") && (ckcualcuant == "CUALITATIVE")) {
  error = 1
  sMessage = sMessage + "\n" + m4getmessage("_oblig","<m4:label m4name="<%=zSCONMLEVEL%>" jsafe="true"/>");

}

if ((Magnitud == "") && (ckcualcuant == "CUANTITATIVE")) {
  error = 1
  sMessage = sMessage + "\n" + m4getmessage("_oblig","<m4:label m4name="<%=zSCONMMAGNITUDE%>" jsafe="true"/>");
}

if ((Valor == "" || m4checknumber(Valor,9,2)==false) && (ckcualcuant == "CUANTITATIVE")) {
  error = 1
  sMessage = sMessage + "\n" + m4getmessage("_decimal_oblig","<m4:label m4name="<%=zSCO_SCHED_VALUE%>" jsafe="true"/>","9","2");
}

if (a > 1000)
 {  error = 1;
  sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_9"); 
 } 
if (error == 1){
  alert(sMessage) ;
  return;
} else {
    document.getElementById("SCO_ID_OBJECTIVE").removeAttribute("disabled");
  m4submit("NombreFormulario") ;
  }
}

function habilitarCualitativo(bool)
{
  var objSCO_ID_LEVEL = m4elemento('SCO_ID_OBJ_REQ_LVL');
  var objSCO_ID_MAGNITUD = m4elemento('SCO_ID_MAGNITUD');
  var objSCO_SCHED_VALUE = m4elemento('SCO_SCHED_VALUE');
  if (bool==true){
    objSCO_ID_LEVEL.removeAttribute('disabled');
      document.getElementById("SCO_ID_OBJ_REQ_LVL").removeAttribute("disabled");
    objSCO_ID_MAGNITUD.setAttribute('disabled', 'disabled');
    objSCO_SCHED_VALUE.setAttribute('disabled', 'disabled');
    m4valor("oculto","zCualcuant","CUALITATIVE","set");
  } else { 
    objSCO_ID_LEVEL.setAttribute('disabled', 'disabled');
      document.getElementById("SCO_ID_MAGNITUD").removeAttribute("disabled");
    document.getElementById("SCO_SCHED_VALUE").removeAttribute("disabled");
    m4valor("oculto","zCualcuant","CUANTITATIVE","set");
  }
}

function deshabilitarNombre() {
  var zSCO_ID_OBJECTIVE =m4valor("NombreFormulario","SCO_ID_OBJECTIVE","","get"); 
  if (zSCO_ID_OBJECTIVE=="") {
    var zCombo = 'NEWOBJ'
  } else {
    var zCombo = 'GENERAL'
  }
  m4valor("oculto","zSCOIDOBJECTIVE",zSCO_ID_OBJECTIVE,"set");
  var zSCOWEIGHT =m4valor("NombreFormulario","SCO_WEIGHT","","get");  
  m4valor("oculto","zSCOWEIGHT",zSCOWEIGHT,"set");
  var zSCOSCHEDVALUE =m4valor("NombreFormulario","SCO_SCHED_VALUE","","get"); 
  m4valor("oculto","zSCOSCHEDVALUE",zSCOSCHEDVALUE,"set");
  var zSCOIDMAGNITUD = m4valor("NombreFormulario","SCO_ID_MAGNITUD","","get");  
  m4valor("oculto","zSCOIDMAGNITUD",zSCOIDMAGNITUD,"set");
  var zSCOIDCRITERIATYPE = m4valor("NombreFormulario","SCO_ID_CRITERIA_TYPE","","get"); 
  m4valor("oculto","zSCOIDCRITERIATYPE",zSCOIDCRITERIATYPE,"set");
  m4submit("oculto");
}
</script>
<table border="0" width="100%">
<tr><td class="titulofuncional"  width="25%" colspan= "3" ><%=ztitle%>: 
<a class="titulofuncional" title="<%=profData%>" href="javascript:load('<%=sIdHr_Encr%>')"><%=NombreEmpleado%></a> - <%=NombreProceso%> </td>
</tr> 
<tr>
  <td colspan= "2"><img alt="<%=Volver%>"title="<%=Volver%>" src="/iconos/noname_procesos_evaluacion_ess_114_100.gif"  width="114" height="100" /></td>
  <td><ul class="listaenlace"><li><a  class="enlacefuncional" title ="<%=Volver%>" href="<%=JSP_REDIRECCION%>"><%=Volver%></a></li></ul></td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSM_DEFINE_CRITERIA" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_EVAL_OBJECT" />
<input type="hidden" id="JSP_REDIRECCION" name="JSP_REDIRECCION" value="<%=JSP_REDIRECCION%>" />
<input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR" value="<%=sIdHr_Encr%>" />
<input type="hidden" id="SCO_OR_HR_ROLE" name="SCO_OR_HR_ROLE" value="<%=sOrRole_Encr%>" />
<input type="hidden" id="SCO_DT_START_EVAL" name="SCO_DT_START_EVAL" value="<%=sDtStarEval_Encr%>" />

<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
  <td><%=ztitle%></td>
  <td class="tablamenuright"><a title="<%=Volver%>" href="<%=JSP_REDIRECCION%>" ><img alt="<%=Volver%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_NM_OBJECTIVE%>" htmlsafe = "true"/></td>
  <td class="fuentevalor">
  <%if (zACC.equals("MOD")) {%>
  <select <%=disabled%> id="SCO_ID_OBJECTIVE" class="fuenteformulario" name="SCO_ID_OBJECTIVE" tabindex="1"><option value="<%=zIDOBJECTIVE%>"><%=zNmObjetive%></option> </select>
  <%} else {%>  
  <select <%=disabled%> id="SCO_ID_OBJECTIVE" class="fuenteformulario" name="SCO_ID_OBJECTIVE" tabindex="1" title="" onchange="javascript:deshabilitarNombre();">
  <option value=""><%=TranMss.getProperty("ev_mss.ObjPart")%></option>
  <m4:loop from="0" to="<%=zcountv10%>">
    <option  value="<m4:item m4name="<%=zSCOIDOBJECTIVE%>" htmlsafe = "true"/>"><m4:item m4name="<%=zSCONMOBJECTIVE%>" htmlsafe = "true"/></option>
  </m4:loop>
</select>
  <% if (!zIDOBJECTIVE.equals("")) {%>
  <img style='cursor:pointer' IdObjective="<%=zIDOBJECTIVE%>" IdMagnitud="" IdLevel="" onclick='javascript:m4Eval.evalDetail.show(this);' title="<%=Ver%>" src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <%}%>
<script type="text/javascript" language="Javascript1.5"><!--
 if ('<%=zIDOBJECTIVE%>'!= ""){
     searchoption('NombreFormulario','SCO_ID_OBJECTIVE','<%=zIDOBJECTIVE%>');
  }
--></script>

<%  } %>
  </td>
</tr>
<%if (zIDOBJECTIVE.equals("")) {%>
<tr><td class="fuentecampo" colspan="4"><br>&nbsp;<%=TranMss.getProperty("ev_mss.DescrObjPart")%></td></tr>
<tr>  
  <td class="fuentecampo" colspan="1" ><br>&nbsp;*&nbsp;<m4:label  item="SMCO_NAME_OBJ" htmlsafe="true" outputdef="<%=zconodo14%>" /></td>
  <td class="fuentecampo" colspan="3"><br><input  class="fuenteformulario" type="text" id="SMCO_NAME_OBJ" value="" name="SMCO_NAME_OBJ" size="62" maxlength="62" tabindex="1" title="<m4:label  item="SMCO_NAME_OBJ" htmlsafe="true" outputdef="<%=zconodo14%>" />" tabindex="2" /></td>
</tr>
<tr>
  <td class="fuentecampo" colspan="1" >&nbsp;*&nbsp;<m4:label  item="SMCO_DESCRIPTION" htmlsafe="true" outputdef="<%=zconodo14%>" /></td> 
  <td class="fuentecampo" colspan="3">
  <textarea rows="3" cols="40" class="fuenteformulario" id="SMCO_DESCRIPTION" name="SMCO_DESCRIPTION"  title="<m4:label  item="SMCO_DESCRIPTION" htmlsafe="true" outputdef="<%=zconodo14%>" />"  tabindex="2" ></textarea>
  </td>
</tr> 
<%}%>
<tr>
<td class="fuentecampo" >&nbsp;<m4:label  item="SCO_NM_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=zconodo13%>"/></td> 
<td class="fuentecampo" >
<select tabindex="2"id="SCO_ID_CRITERIA_TYPE" class="fuenteformulario" name="SCO_ID_CRITERIA_TYPE" title=" <m4:label  item="SCO_ID_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=zconodo13%>"/>">
  <option value=""></option>
  <m4:dataloop outputdef="<%=zconodo13%>"><option value="<m4:item  item="SCO_ID_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=zconodo13%>"/>"><m4:item  item="SCO_NM_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=zconodo13%>"/></option></m4:dataloop>
</select>
</td>
<script type="text/javascript" language="Javascript1.5"><!--
 if ('<%=zSCOIDCRITERIATYPE%>'!= ""){
     searchoption('NombreFormulario','SCO_ID_CRITERIA_TYPE','<%=zSCOIDCRITERIATYPE%>');
  }
--></script>
</tr>
<tr>  
  <td class="fuentecampo">&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_WEIGHT%>" htmlsafe = "true"/></td>
  <td class="fuentecampo" colspan="3"><input class="fuenteformulario" type="text" id="SCO_WEIGHT" name="SCO_WEIGHT" value="<%=dPeso%>" size="15" maxlength="10" title="<m4:label m4name="<%=zSCO_WEIGHT%>" htmlsafe = "true"/>" tabindex="6" /></td>
</tr>

<% String zchecked1 = "checked" ;
String zchecked2 = "checked"  ;
String zdisabled01 = "disabled"  ;
String zdisabled02 = "disabled"  ;
if (zCualcuant.equals("CUALITATIVE")) {
  zchecked1 = "checked" ;
  zchecked2 = "" ;
  zdisabled01 = ""  ;
  zdisabled02 = "disabled"  ;
}else {
  zchecked1 = "" ;
  zchecked2 = "checked" ;
  zdisabled01 = "disabled"  ;
  zdisabled02 = ""  ;
}
if (zIDOBJECTIVE.equals("")) {
  zdisabled03 = "";
  zdisabled04 = "";
}
else {
  int zcountScale = 0;
%>
  <m4:loop from="0" to="<%=zcountv12%>">
    <% try {
        M4Operations m = new M4Operations(request); 
        id1 = String.valueOf(i1);
        m.moveData(znodo12,zmeta4object,znodo12,id1);
        i1++;
        if  (m.getItem(znodo12,zmeta4object,znodo12,"","SCO_ID_OBJECTIVE").toString().equals(zIDOBJECTIVE)) { 
          zcountScale = zcountScale + 1;
         }}   
        catch(Exception e) {} %>
  </m4:loop>    

<%
  if (zcountScale == 0) {
    zchecked1 = "" ;
    zchecked2 = "checked" ;
    zdisabled01 = "disabled";
    zdisabled02 = "";
    zdisabled03 = "disabled";
    zdisabled04 = "";
  }
  else{
    zchecked1 = "checked" ;
    zchecked2 = "" ;
    zdisabled01 = "";
    zdisabled02 = "disabled";
    zdisabled03 = "";
    zdisabled04 = "";
  }
}
%>
  <td class="fuentecampo">&nbsp;</td>
  <td class="fuentecampo" colspan="3" rowspan="1">&nbsp;<input id="chkCUAL_CUANT" name="chkCUAL_CUANT" type="radio" <%=zdisabled03%> <%=zchecked1%> tabindex="7" onclick="javascript:habilitarCualitativo(true);"/><%=LblCual%>&nbsp;&nbsp;&nbsp;<input id="chkCUAL_CUANT" name="chkCUAL_CUANT" type="radio" <%=zdisabled04%> <%=zchecked2%>  tabindex="8" onclick="javascript:habilitarCualitativo(false);"  /><%=LblCuant%></td>  
</tr>

<tr>
  <td class="fuentecampo" colspan="1">&nbsp;*&nbsp;<m4:label m4name="<%=zSCONMLEVEL%>" htmlsafe = "true"/></td>
  <td class="fuentecampo" colspan="3"><select id="SCO_ID_OBJ_REQ_LVL" class="fuenteformulario150" name="SCO_ID_OBJ_REQ_LVL" <%=zdisabled01%> tabindex="9" title="<m4:label m4name="<%=zSCONMLEVEL%>" htmlsafe = "true"/>">
  <option value=""></option>
  <%
  zselected1 = ""; 
  i1 = 0;
  if (zIDOBJECTIVE.equals("")){
    %>
  <m4:loop from="0" to="<%=zcountv15%>">
    <option <%=zselected1%> value="<m4:item m4name="<%=zSCOIDLEVELM4T%>" htmlsafe = "true"/>"><m4:item m4name="<%=zSCONMLEVELM4T%>" htmlsafe = "true"/></option>
  </m4:loop>    
    <% } else { %>
  <m4:loop from="0" to="<%=zcountv12%>">
    <% try {
        M4Operations m = new M4Operations(request); 
        id1 = String.valueOf(i1);
        m.moveData(znodo12,zmeta4object,znodo12,id1);
        i1++;
        if (m.getItem(znodo12,zmeta4object,znodo12,"","SCO_ID_LEVEL").toString().equals(zID_OBJ_REQ_LVL)) { 
          zselected1 = "selected"; 
        } 
        else { 
          zselected1 = "" ;
        } 
        if  (m.getItem(znodo12,zmeta4object,znodo12,"","SCO_ID_OBJECTIVE").toString().equals(zIDOBJECTIVE)) { 
    %>
    <option <%=zselected1%> value="<m4:item m4name="<%=zSCOIDLEVEL%>" htmlsafe = "true"/>"><m4:item m4name="<%=zSCONMLEVEL%>" htmlsafe = "true"/></option>
    <% }}   
    catch(Exception e) {} %>
  </m4:loop>    
  <%  } %>
  </select> 
  </td>
</tr>

<tr>
  <td class="fuentecampo" colspan="1">&nbsp;*&nbsp;<m4:label m4name="<%=zSCONMMAGNITUDE%>" htmlsafe = "true"/></td>
  <td class="fuentecampo" colspan="3"><select id="SCO_ID_MAGNITUD" class="fuenteformulario150" <%=zdisabled02%> name="SCO_ID_MAGNITUD" value="<%=zSCOIDMAGNITUD%>" tabindex="10" title="<m4:label m4name="<%=zSCOIDMAGNITUD%>" htmlsafe = "true"/>">
  <option value=""></option>
  <%
  zselected1 = ""; 
  i1 = 0;
  %>
  <m4:loop from="0" to="<%=zcountv11%>">
    <% try {
        M4Operations m = new M4Operations(request); 
        id1 = String.valueOf(i1);
        m.moveData(znodo11,zmeta4object,znodo11,id1);
        i1++;
    if (m.getItem(znodo11,zmeta4object,znodo11,"","SCO_ID_MAGNITUD").toString().equals(zIDMAGNITUD)) { 
      zselected1 = "selected"; 
      } else { zselected1 = "" ;} 

    } catch(Exception e) {} 
    %>
    <option <%=zselected1%> value="<m4:item m4name="<%=zSCOIDMAGNITUD%>" htmlsafe = "true"/>"><m4:item m4name="<%=zSCONMMAGNITUDE%>" htmlsafe = "true"/></option> 
  </m4:loop>
  </select> 
  </td>
</tr>

<tr>  
  <td class="fuentecampo" colspan="1">&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_SCHED_VALUE%>" htmlsafe = "true"/></td>
  <td class="fuentecampo" colspan="3"><input class="fuenteformulario" type="text" id="SCO_SCHED_VALUE" name="SCO_SCHED_VALUE" <%=zdisabled02%> tabindex="11" value = "<%=dPuntua%>" size="15" maxlength="10" title="<m4:label m4name="<%=zSCO_SCHED_VALUE%>" htmlsafe = "true"/>" tabindex="1" /></td>
</tr>

<tr>  
  <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSCO_COMMENT%>" htmlsafe = "true"/></td>
  <td class="fuentecampo" colspan="3">
    <textarea rows="3" cols="40" class="fuenteformulario" id="SCO_COMMENT" name="SCO_COMMENT" title="<m4:label  item="SCO_COMMENT" htmlsafe="true" outputdef="<%=znodo3%>" />" tabindex="12" ><%=zSCOCOMMENT%></textarea>
</td>
</tr>

<tr>
  <td colspan="2" class = "fuenteboton">&nbsp;
  <a title="<%=Enviar%>"href="javascript:comprobar()">
  <img alt="<%=Enviar%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  />
  </a>
  </td>
</tr>
</table>
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16_obj.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zSCOIDOBJECTIVE" name="zSCOIDOBJECTIVE"/>
<input type="hidden" id="zSCOWEIGHT" name="zSCOWEIGHT"/>
<input type="hidden" id="zSCOSCHEDVALUE" name="zSCOSCHEDVALUE"/>
<input type="hidden" id="zSCOIDMAGNITUD" name="zSCOIDMAGNITUD"/>
<input type="hidden" id="zSCOACCOMPVALUE" name="zSCOACCOMPVALUE"/>
<input type="hidden" id="zCualcuant" name="zCualcuant"/>
<input type="hidden" id="zORDINAL" name="zORDINAL" value="<%=zOrdinal%>" />
<input type="hidden" id="mss" name="mss"  value="<%=mss%>" />
<input type="hidden" id="ACC" name="ACC"  value="RELOAD" />
<input type="hidden" id="JSP_REDIRECCION" name="JSP_REDIRECCION" value="<%=JSP_REDIRECCION%>" />
<input type="hidden" id="zSCOIDHR" name="IDRH" value="<%=sIdHr_Encr%>"/>
<input type="hidden" id="zSCOORHRPERIOD" name="RHRole" value="<%=sOrRole_Encr%>"/>
<input type="hidden" id="zSCODTSTARTEVAL" name="DTStartEval" value="<%=sDtStarEval_Encr%>"/>
<input type="hidden" id="NombreProceso" name="NombreProceso" value="<%=NombreProceso%>"/>
<input type="hidden" id="NombreEmpleado" name="NombreEmpleado" value="<%=NombreEmpleado%>"/>
<input type="hidden" id="zSCOIDCRITERIATYPE" name="zSCOIDCRITERIATYPE" value=""/>

</form>
<script>
  m4valor("oculto","zCualcuant","<%=zCualcuant%>","set");
</script>
<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/> 
</html>