<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>

<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>

<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<link href="/css/style_eval.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>
<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %> 
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<% 
String ztitle = TranMss.getProperty("ev_mss.DefObjEmp");
String pathImgViewComment = "/iconos/lu_hot_info_24.gif";
String zpathVerComentario = "/mss_g3/espanol/smco_viewcomment.jsp?comment=";
String ViewComment = Tran.getProperty("Button.ViewComment");
%>
<title><%=ztitle%></title>
<%  
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");      
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");

String sDtStartEnc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zInicio");
String zInicio = "";  
if (sDtStartEnc == null || sDtStartEnc.equals("")) {sDtStartEnc="";}
else {zInicio = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", sDtStartEnc);}

String sDtEndEnc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zFin");
String zFin = "";  
if (sDtEndEnc == null || sDtEndEnc.equals("")) {sDtEndEnc="";}
else {zFin = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", sDtEndEnc);}

String sIdPersonEnc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_PERSONA");
String zID_PERSONA = "";
if (sIdPersonEnc == null || sIdPersonEnc.equals("")) {sIdPersonEnc="";}
else {zID_PERSONA = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", sIdPersonEnc);}

String sNameEmpEnc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreEmpleado");
String NombreEmpleado = "";
if (sNameEmpEnc == null || sNameEmpEnc.equals("")) {sNameEmpEnc="";}
else {NombreEmpleado = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", sNameEmpEnc);}

String sRoleEnc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zOrdinal_HR");
String zOrdinal_HR = ""; 
if (sRoleEnc == null || sRoleEnc.equals("")) {sRoleEnc="";}
else {zOrdinal_HR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", sRoleEnc);}
String zSCOIDOBJECTIVE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOIDOBJECTIVE");
String zSCOCOMMENT = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOCOMMENT");
String zSCOWEIGHT = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOWEIGHT");
String zSCONAME =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCONAME");
String zSCODESCRIPTION = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCODESCRIPTION");
String zSCODTSTART =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCODTSTART");
String zSCODTEND =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCODTEND");
String zSCOIDMAGNITUD=  com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOIDMAGNITUD");
String zSCOSCHEDVALUE =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOSCHEDVALUE");
String zCualcuant = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zCualcuant");
String zParticular = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zParticular");
String profData = Tran.getProperty("Labelmss.ProfsData");

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zFin==null)||(zFin.equals(""))){zFin = "01/01/4000";}
if ((zCualcuant==null)||(zCualcuant.equals(""))){zCualcuant = "CUANTITATIVE";}
if ((zParticular==null)||(zParticular.equals(""))){zParticular = "PARTICULAR";}
if (zSCOIDOBJECTIVE==null) {zSCOIDOBJECTIVE = "";}
if (zSCOCOMMENT==null) {zSCOCOMMENT = "";}
if (zSCONAME==null) {zSCONAME = "";}
if (zSCODESCRIPTION==null) {zSCODESCRIPTION = "";}
if (zSCOWEIGHT==null) {zSCOWEIGHT = "";}
if (zSCODTSTART==null) {zSCODTSTART = "";}
if (zSCODTEND==null) {zSCODTEND = "";}
if (zSCOIDMAGNITUD==null) {zSCOIDMAGNITUD = "";}
if ((zSCOSCHEDVALUE==null)||(zSCOSCHEDVALUE.equals(""))){zSCOSCHEDVALUE="";}
%>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>


<script type="text/javascript">
oalfanum = new m4objvalidacion('_alfanum','1','40','','Error',false);
fechaesp = new m4objvalidacion('_fechaesp','1','10','','Error',false);
</script>


</head>
<body>
<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
    String zAyuda="/iconos/info_12.gif";   
  String Ver = Tran.getProperty("Label.Ver");

   String zsubsesion = "SSM_EV_ROL_LV_OBJ";
   String zmeta4object = "SSM_EV_ROL_LV_OBJ";
   String znodo = "SSE_EV_ROL_LV_OBJ";
   String znodo2 = "SSM_OBJ_LEVEL";
   String znodo3 = "SSM_X_OBJ_MAGN";
   String znodo4 = "SSM_OBJECTIVE";
   String znodo5 = "M4T_EV_ROL_LV_OBJ";
   String znodo6 = "M4T_DEFAULT_SCALE_LEVELS";
   
   String ztipocarga = "SSE";
   String zventanas = "30";
   int zvuelta = 5;
   String zdireccion = "/mss_g3/mss_g3_p15_1.jsp";
   String zestado="31";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;

   String zlink = "/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15_1.jsp?estado=31&zID_PERSONA=" +  sIdPersonEnc + "&zOrdinal_HR=" + sRoleEnc + "&zInicio=" +  sDtStartEnc + "&zFin=" +  sDtEndEnc + "&NombreEmpleado=" +  sNameEmpEnc;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   
   String zoutputdef2= zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";

   String zoutputdef3= zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";

   String zoutputdef4= zsubsesion + "!" + znodo4 + "[*]";
   String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
   String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";

   String zoutputdef5= zsubsesion + "!" + znodo5 + "[*]";
   String zmove5 = znodo5 + ":" + znodo5 + "[FIRST]";
   String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";
   String zoutputdef6= zsubsesion + "!" + znodo6 + "[*]";
   String zmove6 = znodo6 + ":" + znodo6 + "[FIRST]";
   String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&VAR.m4lix]" + ".";

   String zNACCION = zraiz + "N_ACCION";
   String zORDINAL = zraiz + "ORDINAL";
   String zSCO_ID_HR = zraiz + "SCO_ID_HR";
   String zSCO_OR_HR_ROLE = zraiz + "SCO_OR_HR_ROLE";
   String zSCO_ID_OBJECTIVE = zraiz + "SCO_ID_OBJECTIVE";
   String zSCO_COMMENT = zraiz + "SCO_COMMENT";   
   String zSCO_N_OBJECTIVE = zraiz + "SCO_NM_OBJECTIVE";   
   String zSCO_N_LEVEL = zraiz + "SCO_NM_LEVEL";    
   String zSCO_N_MAGNITUDE = zraiz + "SCO_NM_MAGNITUDE";     
   String zSCO_DT_START = zraiz + "SCO_DT_START";
   String zSCO_DT_END = zraiz + "SCO_DT_END";
   String zSCO_WEIGHT = zraiz + "SCO_WEIGHT";
   String zSCO_SCHED_VALUE = zraiz + "SCO_SCHED_VALUE";
   String zSCO_ID_MAGNITUD = zraiz + "SCO_ID_MAGNITUD";
   String zSCO_ID_LEVEL = zraiz + "SCO_ID_LEVEL";
   String zSCO_ACCOMP_VALUE = zraiz + "SCO_ACCOMP_VALUE";   
   String zSCO_NAME = zraiz + "SCO_NAME";      
   String zSCO_DESCRIPTION = zraiz + "SCO_DESCRIPTION";   
   String zP_TIPO = zraiz + "P_TIPO";   


   String zSCO_ID_LEVEL_AUX = zcomun2 + "SCO_ID_LEVEL";  
   String zSCO_NM_LEVEL = zcomun2 + "SCO_NM_LEVEL";  

   String zSCO_ID_MAGNITUD_AUX = zcomun3 + "SCO_ID_MAGNITUD";  
   String zSCO_NM_MAGNITUDE = zcomun3 + "SCO_NM_MAGNITUDE";  

   String zSCO_ID_OBJECTIVE_AUX = zcomun4 + "SCO_ID_OBJECTIVE";  
   String zSCO_NM_OBJECTIVE = zcomun4 + "SCO_NM_OBJECTIVE";  

   String znodoprincipal = "SSE_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
   String zmetodocarganiveles = zsubsesion + "!" + znodo2 + ".CARGA_NIVELES";

   String zSCO_ID_OBJECTIVE_MT = zcomun5 + "SCO_ID_OBJECTIVE";
   String zSCO_NM_OBJECTIVE_MT = zcomun5 + "SCO_NM_OBJECTIVE";   
   String zSCO_WEIGHT_MT = zcomun5 + "SCO_WEIGHT";
   String zSCO_SCHED_VALUE_MT = zcomun5 + "SCO_SCHED_VALUE";
   String zSCO_NM_LEVEL_MT = zcomun5 + "SCO_NM_LEVEL";    
   String zSCO_NM_MAGNITUDE_MT = zcomun5 + "SCO_NM_MAGNITUDE"; 
   String zSCO_ACCOMP_VALUE_MT = zcomun5 + "SCO_ACCOMP_VALUE";   
   String zSCO_DT_START_MT = zcomun5 + "SCO_DT_START";
   String zSCO_DT_END_MT = zcomun5+ "SCO_DT_END"; 
   String zSCO_COMMENT_MT = zcomun5+ "SCO_COMMENT";    
   String zSCOIDLEVELM4T = zcomun6 + "SCO_ID_LEVEL";  
   String zSCONMLEVELM4T = zcomun6 + "SCO_NM_LEVEL";  

%>


<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request);
      m.setItem(zsubsesion,znodoprincipal,"","ID_HR",zID_PERSONA);
      m.setItem(zsubsesion,znodoprincipal,"","OR_ROLE",zOrdinal_HR);
    m.setItem(zsubsesion,znodo,"","JSP_REDIRECCION",zlink);
    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
  
  } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarganiveles%>"><m4:param name="ARG_ID_OBJETIVO" value="<%=zSCOIDOBJECTIVE%>"/></m4:exec>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>

<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>" ><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>" ><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>" ><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>" ><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:endjob/>

<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove6%>"/></m4:move>

<script type="text/javascript">

oalfanum = new m4objvalidacion('_alfanum','1','40','','Error',false);
fechaesp = new m4objvalidacion('_fechaesp','1','10','','Error',false);

function habilitarCualitativo(bool)
{
  var objSCO_ID_LEVEL = m4elemento('SCO_ID_LEVEL');
  var objSCO_ID_MAGNITUD = m4elemento('SCO_ID_MAGNITUD');
  var objSCO_SCHED_VALUE = m4elemento('SCO_SCHED_VALUE');
  if (bool==true){
    objSCO_ID_LEVEL.removeAttribute('disabled');
    document.getElementById("SCO_ID_LEVEL").removeAttribute("disabled",true);    
    objSCO_ID_MAGNITUD.setAttribute('disabled', 'disabled');
    objSCO_SCHED_VALUE.setAttribute('disabled', 'disabled');
    m4valor("oculto","zCualcuant","CUALITATIVE","set");
  } else { 
    objSCO_ID_LEVEL.setAttribute('disabled', 'disabled');
    document.getElementById("SCO_ID_MAGNITUD").removeAttribute("disabled",true);
    document.getElementById("SCO_SCHED_VALUE").removeAttribute("disabled",true);
    m4valor("oculto","zCualcuant","CUANTITATIVE","set");
  }
}

function load(empleado)
{
//  m4valor("cv","person",empleado,"set");
//  m4valor("cv", "RET", "DAT", "set"); 
//  m4submit("cv");

var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&person=" + empleado;
window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');

}

function deshabilitarNombre() {

  var objSCO_ID_OBJECTIVE = m4elemento('SCO_ID_OBJECTIVE');
  var objSCO_NAME = m4elemento('SCO_NAME');
  var objSCO_DESCRIPTION = m4elemento('SCO_DESCRIPTION'); 

  if (objSCO_ID_OBJECTIVE.value =="") {
    //objSCO_NAME.removeAttribute('disabled');
    //objSCO_DESCRIPTION.removeAttribute('disabled');
    var objCUAL_CUANT = m4elemento('chkCUAL_CUANT');
    objCUAL_CUANT.setAttribute('value', 'CUANTITATIVE');
    m4valor("oculto","zParticular",zCombo,"set");
    var zCombo = 'PARTICULAR'
  } else {
    //objSCO_NAME.setAttribute('disabled', 'disabled');
    //objSCO_DESCRIPTION.setAttribute('disabled', 'disabled');
    //objSCO_NAME.setAttribute('value', '');
    //objSCO_DESCRIPTION.setAttribute('value', '');
    var zCombo = 'GENERAL'

  }
  
m4valor("oculto","zSCOIDOBJECTIVE",objSCO_ID_OBJECTIVE.value,"set");

var zSCOWEIGHT =m4valor("NombreFormulario","SCO_WEIGHT","","get");  
m4valor("oculto","zSCOWEIGHT",zSCOWEIGHT,"set");
//var zSCONAME =m4valor("NombreFormulario","SCO_NAME","","get");  
//m4valor("oculto","zSCONAME",zSCONAME,"set");
var zSCOSCHEDVALUE =m4valor("NombreFormulario","SCO_SCHED_VALUE","","get"); 
m4valor("oculto","zSCOSCHEDVALUE",zSCOSCHEDVALUE,"set");
var zSCODTSTART =m4valor("NombreFormulario","SCO_DT_START","","get"); 
m4valor("oculto","zSCODTSTART",zSCODTSTART,"set");
var zSCODTEND =m4valor("NombreFormulario","SCO_DT_END","","get"); 
m4valor("oculto","zSCODTEND",zSCODTEND,"set");
var zSCOIDMAGNITUD =m4valor("NombreFormulario","SCO_ID_MAGNITUD","","get"); 
m4valor("oculto","zSCOIDMAGNITUD",zSCOIDMAGNITUD,"set");
m4valor("oculto","zParticular",zCombo,"set");
m4submit("oculto");

}

function load(empleado)
{
//  m4valor("cv","person",empleado,"set");
//  m4valor("cv", "RET", "DAT", "set"); 
//  m4submit("cv");

var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp?estado=11&person=" + empleado;
window.open(dir,'Vis','width=800;height=600,resizable,scrollbars');

}

function pendientes(ord)
{
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSM_EV_ROL_LV_OBJ",ord,"BORRAR","SSE_EV_ROL_LV_OBJ");
m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}

function comprobar(){
var error = 0;
var sMessage = new String(eval("_gen_error_msg"));
var a="";
var IdObj = m4valor("NombreFormulario","SCO_ID_OBJECTIVE","","get");
if (IdObj =="") 
{
  var name = m4valor("NombreFormulario","SCO_NAME","","get");
  var description = m4valor("NombreFormulario","SCO_DESCRIPTION","","get");
  a=description.length;
}
var dtStart = m4valor("NombreFormulario","SCO_DT_START","","get");
var dtend = m4valor("NombreFormulario","SCO_DT_END","","get");
var dtStartRol = m4valor("oculto","zInicio","","get");
var dtendRol = m4valor("oculto","zFin","","get");
var ckcualcuant = "";
var level = m4valor("NombreFormulario","SCO_ID_LEVEL","","get");
var magnitud = m4valor("NombreFormulario","SCO_ID_MAGNITUD","","get");
var valor = m4valor("NombreFormulario","SCO_SCHED_VALUE","","get");
var weight = m4valor("NombreFormulario","SCO_WEIGHT","","get");
var Comment = m4valor("NombreFormulario","SCO_COMMENT","","get");
var oobjeto = document.forms["NombreFormulario"].elements["chkCUAL_CUANT"];

if (oobjeto[0].checked == true){   
  ckcualcuant ="CUALITATIVE";
            
}else{
  ckcualcuant ="CUANTITATIVE";      
}  
if (dtStart == ""){    error = 1;
    sMessage = sMessage + "\n" + m4getmessage("_oblig","<m4:label m4name="<%=zSCO_DT_START%>" jsafe="true"/>");
}else{
  if (m4fechacomprobacion(m4objeto('SCO_DT_START','NombreFormulario'),false)==""){
        error = 1;
        sMessage = sMessage + "\n" + m4getmessage("_date_oblig","<m4:label m4name="<%=zSCO_DT_START%>" jsafe="true"/>",'<%=zsgcoParamDate%>');    
  }else{
    if (m4compfechas(m4objeto('SCO_DT_START','NombreFormulario'),'<',m4objeto('zInicio','oculto'))==true){ 
       error = 1;
       sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_0",dtStartRol);
       }
  
  }
}

if (dtend != ""){
  if (m4fechacomprobacion(m4objeto('SCO_DT_END','NombreFormulario'),false)==""){
          error = 1;
          sMessage = sMessage + "\n" + m4getmessage("_date_oblig","<m4:label m4name="<%=zSCO_DT_END%>" jsafe="true"/>",'<%=zsgcoParamDate%>');        
  }else{
    if (m4compfechas(m4objeto('SCO_DT_END','NombreFormulario'),'<',m4objeto('zFin','oculto'))==true){
       error = 1;
          sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_1",dtendRol);
    }
  }
}
if (m4compfechas(m4objeto('SCO_DT_END','NombreFormulario'),'<',m4objeto('SCO_DT_START','NombreFormulario'))==true){
  error = 1;
  sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_10");
}

if ((IdObj == "") && (name== "" || description==""))  
  {   
      if (name== "" & description=="") {
        error = 1;
        sMessage = sMessage + "\n" + m4getmessage("_oblig","<m4:label m4name="<%=zSCO_NM_OBJECTIVE%>" jsafe="true"/>");
      }
      else
      {   
        if (name== "") {
          error = 1;
          sMessage = sMessage + "\n" + m4getmessage("_oblig","<m4:label m4name="<%=zSCO_NAME%>" jsafe="true"/>");
        }
        else {
          error = 1;
          sMessage = sMessage + "\n" + m4getmessage("_oblig","<m4:label m4name="<%=zSCO_DESCRIPTION%>" jsafe="true"/>");
        } 
      }
  }



if ((level == "") && (ckcualcuant == "CUALITATIVE")) {
      error = 1;
  sMessage = sMessage + "\n" + m4getmessage("_oblig","<m4:label m4name="<%=zSCO_N_LEVEL%>" jsafe="true"/>");

}

if ((magnitud == "") && (ckcualcuant == "CUANTITATIVE")) {
      error = 1;
  sMessage = sMessage + "\n" + m4getmessage("_oblig","<m4:label m4name="<%=zSCO_N_MAGNITUDE%>" jsafe="true"/>");
}

if ((valor == "" || m4checknumber(valor,9,2)==false) && (ckcualcuant == "CUANTITATIVE")) {
      error = 1;
      sMessage = sMessage + "\n" + m4getmessage("_int_decimal_oblig","<m4:label m4name="<%=zSCO_SCHED_VALUE%>" jsafe="true"/>",9,2);
}
if (weight == "")
 {
  error = 1;
  sMessage = sMessage + "\n" + m4getmessage("_oblig","<m4:label m4name="<%=zSCO_WEIGHT%>" jsafe="true"/>");
 } 
else 
  {
    if ((weight < 0) || (weight > 100)) 
    {
      error = 1;
      sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_14");
    }
   }
   
if (a > 1000)
 {  error = 1;
  sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_9"); 
 } 

if (error == 1)
 {   
  alert(sMessage);
  return;
} else
 {   
  if (ckcualcuant == "CUALITATIVE"){
    if (IdObj =="") {
    vadtstart=   m4valor('NombreFormulario','SCO_DT_START','','get'); 
     m4valor('NombreFormulario','SCO_DT_START1',vadtstart,'set');  
  }
 }  
  m4submit("NombreFormulario");
 }
 
}
function setTipo0 () 
{
  var tipoObj = m4valor('NombreFormulario','zP_TIPO','0','set');  
}

function setTipo1 () 
{
  var tipoObj = m4valor('NombreFormulario','zP_TIPO','1','set');  
}
function abrirobj(empleado,ordinal)
{
  var dir="/servlet/CheckSecurity/JSP/mss_g3/smco_objetives.jsp?zidhr="+empleado+"&zorrole="+ordinal;
  window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');
}
</script>

<%
  int  zcounti  = 0;  
  int  zcount  = 0;
  int  zcounti2  = 0; 
  int  zcount2  = 0;
  int  zcounti3  = 0; 
  int  zcount3  = 0;
  int  zcounti4  = 0; 
  int  zcount4  = 0;
  int  zcounti5  = 0; 
  int  zcount5  = 0;
  int  zcounti6  = 0; 
  int  zcount6  = 0;
  
  try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
    zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
    zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
    zcount4 = m.getCount(znodo4,zsubsesion,znodo4);
    zcounti4 = m.getCountInClient(znodo4,zsubsesion,znodo4);
    zcount5 = m.getCount(znodo5,zsubsesion,znodo5);
    zcounti5 = m.getCountInClient(znodo5,zsubsesion,znodo5);
    zcount6 = m.getCount(znodo6,zsubsesion,znodo6);
    zcounti6 = m.getCountInClient(znodo6,zsubsesion,znodo6);

  } catch(Exception e) {}

  String  zcountv = String.valueOf(zcounti);
  String  zcountv2 = String.valueOf(zcounti2);
  String  zcountv3 = String.valueOf(zcounti3);
  String  zcountv4 = String.valueOf(zcounti4);
  String  zcountv5 = String.valueOf(zcounti5);
  String  zcountv6 = String.valueOf(zcounti6);
  String zto = new Integer(new Integer(zcountv).intValue()-1).toString();
  String zto5 = new Integer(new Integer(zcountv5).intValue()-1).toString(); 
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2" rowspan="1"> <%=ztitle%> 
<a class="titulofuncional" title="<%=TranMss.getProperty("ev_mss.LinkDatos")%>" </td>
</tr>

<tr>
  <td><img alt="<%=Tran.getProperty("Label.Image")%>" title=""src="/iconos/noname_evaluaciones_140_125.gif" width="100" height="125"/></td>
  <td>
    <div class="descripcionfuncional"><%=TranMss.getProperty("ev_mss.DescrCargaObj2")%></div>
    <ul class="listaenlace">
    <li><a class="enlacefuncional" tabindex="1" title="<%=Tran.getProperty("Link.Selec")%>" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15.jsp?estado=31&proc=1"><%=Tran.getProperty("Link.Selec")%></a></li>
    <li><a class="enlacefuncional" tabindex="2" title="<%=TranMss.getProperty("ev_mss.smco_objetives_link")%>" href="javascript:abrirobj('<%=sIdPersonEnc%>','<%=sRoleEnc%>')"><%=TranMss.getProperty("ev_mss.smco_objetives_link")%></a></li>
  </td>   
</tr>

</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario" >
<input type="hidden" id="TAG" name="TAG" value="SSM_EV_ROL_LV_OBJ" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_EV_ROL_LV_OBJ" />
<input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR" />
<input type="hidden" id="SCO_OR_HR_ROLE" name="SCO_OR_HR_ROLE" />
<input type="hidden" id="SCO_DT_START1" name="SCO_DT_START1" />
<input type="hidden" id="JSP_REDIRECCION" name="JSP_REDIRECCION" value="<%=zlink%>" />

<table border="0" width="100%">
<tr><td class="fuenteleyenda_big" colspan="2" rowspan="1"> 
<a class="fuenteleyenda_big" title="<%=profData%>" 
<%String sIDPerson = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zID_PERSONA);%>
href="javascript:load('<%=sIDPerson%>')"><%=NombreEmpleado%></a></td>
</tr>
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
  <td colspan="4"><%=TranMss.getProperty("ev_mss.ObjEmp")%></td>
</tr>
<tr>  
  <td class="fuentecampo" colspan="1" width="25%">&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_NM_OBJECTIVE%>"  htmlsafe = "true"/></td>
  <td class="fuentecampo" colspan="3">
  <select id="SCO_ID_OBJECTIVE" class="fuenteformulario" onchange="javascript:deshabilitarNombre();" name="SCO_ID_OBJECTIVE" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zSCOIDOBJECTIVE)%>"  title="<m4:label m4name="<%=zSCO_NM_OBJECTIVE%>"  htmlsafe = "true"/>">  
  <option value=""><%=TranMss.getProperty("ev_mss.ObjPart")%></option>
  <%
  String zselected1 = ""; 
  int i1 = 0;
  String id1 = "";  
  %>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcounti4).intValue()-1).toString()%>">
    <% try {
        M4Operations m = new M4Operations(request); 
        id1 = String.valueOf(i1);
        m.moveData(znodo4,zmeta4object,znodo4,id1);
        i1++;
    if (m.getItem(znodo4,zmeta4object,znodo4,"","SCO_ID_OBJECTIVE").toString().equals(zSCOIDOBJECTIVE.toString())) { 
      zselected1 = "selected"; 
      } else { zselected1 = "" ;} 

    } catch(Exception e) {} 
    %>
    <option <%=zselected1%> value="<m4:item m4name="<%=zSCO_ID_OBJECTIVE_AUX%>"  htmlsafe = "true"/>"><m4:item m4name="<%=zSCO_NM_OBJECTIVE%>"  htmlsafe = "true"/></option>
  </m4:loop>
  </select> 
  <% if (!zSCOIDOBJECTIVE.equals("")) {%>
  <img style='cursor:pointer' IdObjective="<%=zSCOIDOBJECTIVE%>" dtStart="<%=zSCODTSTART%>" IdMagnitud="" IdLevel="" onclick='javascript:m4Eval.evalDetail.show(this);' title="<%=Ver%>" src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <%}%>
  </td>
</tr>
<% String zdisabled1 = "disabled" ;
if (zSCOIDOBJECTIVE.equals("")) {
  zdisabled1 = "";%>
<tr><td class="fuentecampo" colspan="4"><br>&nbsp;<%=TranMss.getProperty("ev_mss.DescrObjPart")%></td></tr>
<tr>  
  <td class="fuentecampo" colspan="1" ><br>&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_NAME%>"  htmlsafe = "true"/></td>
  <td class="fuentecampo" colspan="3"><br><input  class="fuenteformulario" type="text" id="SCO_NAME" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zSCONAME)%>" name="SCO_NAME" <%=zdisabled1%> size="62" maxlength="62" tabindex="1" title="<m4:label m4name="<%=zSCO_NAME%>"  htmlsafe = "true"/>" tabindex="2" /></td>
</tr>
<tr>
  <td class="fuentecampo" colspan="1" >&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_DESCRIPTION%>"  htmlsafe = "true"/></td>  
  <td class="fuentecampo" colspan="3">
  <textarea rows="3" cols="40" class="fuenteformulario" id="SCO_DESCRIPTION" name="SCO_DESCRIPTION"  <%=zdisabled1%> title="<m4:label m4name="<%=zSCO_DESCRIPTION%>"   htmlsafe = "true"/>"  tabindex="2" ></textarea>
  </td>
</tr> 

<%}%>

<tr><td class="fuentecampo" colspan="4">&nbsp;</td></tr>
<tr>
  <td class="fuentecampo" colspan="1">&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_DT_START%>"  htmlsafe = "true"/></td>
  <td class="fuentecampo" colspan="1" width="45%"><input class="fuenteformulario" type="text" name="SCO_DT_START" id="SCO_DT_START" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zSCODTSTART)%>" tabindex="3" title="<m4:label m4name="<%=zSCO_DT_START%>"  htmlsafe = "true"/>" maxlength="10" size="10" tabindex="4" />&nbsp;
  <a href="javascript:m4calendario(m4objeto('SCO_DT_START','NombreFormulario'))" title="<m4:label m4name="<%=zSCO_DT_START%>"  htmlsafe = "true"/>"tabindex="4"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<m4:label m4name="<%=zSCO_DT_START%>"  htmlsafe = "true"/>" /></a></td>
  <td class="fuentecampo" colspan="1" width="10%"><m4:label m4name="<%=zSCO_DT_END%>"  htmlsafe = "true"/></td>
  <td class="fuentecampo" colspan="1" width="20%"><input class="fuenteformulario" type="text" name="SCO_DT_END" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zSCODTEND)%>" id="SCO_DT_END" tabindex="5" title="<m4:label m4name="<%=zSCO_DT_END%>"  htmlsafe = "true"/>" maxlength="10" size="10" tabindex="5" />&nbsp;
  <a href="javascript:m4calendario(m4objeto('SCO_DT_END','NombreFormulario'))" title="<m4:label m4name="<%=zSCO_DT_END%>"  htmlsafe = "true"/>"tabindex="6"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<m4:label m4name="<%=zSCO_DT_END%>"  htmlsafe = "true"/>" /></a></td>
</tr>

<tr>  
  <td class="fuentecampo" colspan="1">&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_WEIGHT%>"  htmlsafe = "true"/></td>
  <td class="fuentecampo" colspan="3"><input class="fuenteformulario" type="text" name="SCO_WEIGHT" tabindex="7" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zSCOWEIGHT)%>" size="15" maxlength="10" title="<m4:label m4name="<%=zSCO_WEIGHT%>"  htmlsafe = "true"/>" tabindex="6" /></td>
</tr>

<tr>
<% String zchecked1 = "checked" ;
String zchecked2 = "checked"  ;
String zdisabled01 = "disabled"  ;
String zdisabled02 = "disabled"  ;
String zdisabled03 = ""  ;
String zdisabled04 = ""  ;
String zdisabled05 = ""  ;
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
if (zSCOIDOBJECTIVE.equals("")) {
  zdisabled03 = "";
  zdisabled04 = "";
}
else {
  if (zcountv2.equals("0")) {
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
%>  <td class="fuentecampo">&nbsp;</td>
  <td class="fuentecampo" colspan="3" rowspan="1">&nbsp;<input id="chkCUAL_CUANT" name="chkCUAL_CUANT" tabindex="8" type="radio"  <%=zchecked1%>  <%=zdisabled03%> tabindex="7" onclick="javascript:habilitarCualitativo(true);"/><%=TranMss.getProperty("ev_mss.LblCual")%>&nbsp;&nbsp;&nbsp;<input id="chkCUAL_CUANT" name="chkCUAL_CUANT" type="radio" <%=zchecked2%>  <%=zdisabled04%>   tabindex="8" onclick="javascript:habilitarCualitativo(false);"  /><%=TranMss.getProperty("ev_mss.LblCuant")%></td>
</tr>

<tr>
  <td class="fuentecampo" colspan="1">&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_NM_LEVEL%>"  htmlsafe = "true"/></td>
  <td class="fuentecampo" colspan="3"><select id="SCO_ID_LEVEL" class="fuenteformulario150" tabindex="9" name="SCO_ID_LEVEL" <%=zdisabled01%>  tabindex="9" title="<m4:label m4name="<%=zSCO_NM_LEVEL%>"  htmlsafe = "true"/>">
  <option value=""></option>
  <%
  zselected1 = ""; 
  i1 = 0;
  if (zSCOIDOBJECTIVE.equals("")) {
    %>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcountv6).intValue()-1).toString()%>">
    <option value="<m4:item m4name="<%=zSCOIDLEVELM4T%>" htmlsafe = "true"/>"><m4:item m4name="<%=zSCONMLEVELM4T%>" htmlsafe = "true"/></option>
  </m4:loop>    
    <% } else { %>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
    <option value="<m4:item m4name="<%=zSCO_ID_LEVEL_AUX%>"  htmlsafe = "true"/>"><m4:item m4name="<%=zSCO_NM_LEVEL%>"  htmlsafe = "true"/></option>
  </m4:loop>
  <%  } %>
  </select> 
  </td>
</tr>

<tr>
  <td class="fuentecampo" >&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_N_MAGNITUDE%>"  htmlsafe = "true"/></td>
  <td class="fuentecampo" ><select id="SCO_ID_MAGNITUD" class="fuenteformulario150" <%=zdisabled02%> tabindex="10" name="SCO_ID_MAGNITUD" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zSCOIDMAGNITUD)%>" tabindex="10" title="<m4:label m4name="<%=zSCO_ID_MAGNITUD%>"  htmlsafe = "true"/>">
  <%
  String zselected = ""; 
  int i = 0;
  %>

  <m4:loop from="0" to="<%=new Integer(new Integer(zcounti3).intValue()-1).toString()%>">

    <% try {
        M4Operations m = new M4Operations(request); 
        String id = String.valueOf(i);
        m.moveData(znodo3,zmeta4object,znodo3,id);
        i++;
    if (m.getItem(znodo3,zmeta4object,znodo3,"","SCO_ID_MAGNITUD").toString().equals(zSCOIDMAGNITUD.toString())) { 
      zselected = "selected"; 
      } else { zselected = "" ;} 

    } catch(Exception e) {} 
    %>
    <option <%=zselected%> value="<m4:item m4name="<%=zSCO_ID_MAGNITUD_AUX%>"  htmlsafe = "true"/>"><m4:item m4name="<%=zSCO_NM_MAGNITUDE%>"  htmlsafe = "true"/>
    </option> 
  </m4:loop>
  </select> 
  </td>
  
  <td class="fuentecampo" >&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_SCHED_VALUE%>"  htmlsafe = "true"/></td>
  <td class="fuentecampo" ><input class="fuenteformulario" type="text" id="SCO_SCHED_VALUE" tabindex="11" name="SCO_SCHED_VALUE" <%=zdisabled02%> tabindex="11" value = "<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zSCOSCHEDVALUE)%>" size="15" maxlength="10" title="<m4:label m4name="<%=zSCO_SCHED_VALUE%>"  htmlsafe = "true"/>" tabindex="1" /></td>
</tr>
<tr>
  <td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSCO_COMMENT%>"  htmlsafe = "true"/></td>   
  <td class="fuentecampo" colspan="3">
    <textarea rows="3" cols="40" class="fuenteformulario" id="SCO_COMMENT" name="SCO_COMMENT" title="<m4:label  item="SCO_COMMENT" htmlsafe="true" outputdef="<%=znodo%>" />" tabindex="12" ><%=zSCOCOMMENT%></textarea>  
  </td>
</tr>

<tr>
  <td class="fuenteboton" colspan="4">  &nbsp;
  <a title="<%=Tran.getProperty("Button.Send")%>" href="javascript:comprobar();" tabindex="12"><img alt="<%=Tran.getProperty("Button.Send")%>" border="0" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  </td>
</tr>

</table>

<% if (zdisabled1=="") { %>

  <script type="text/javascript">m4focus("NombreFormulario","SCO_NAME");</script>

<% } else { %>

  <script type="text/javascript">m4focus("NombreFormulario","SCO_DT_START");</script>

<% } %>

</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15_1.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zSCOIDOBJECTIVE" name="zSCOIDOBJECTIVE"/>
<input type="hidden" id="zSCOWEIGHT" name="zSCOWEIGHT"/>
<input type="hidden" id="zSCOSCHEDVALUE" name="zSCOSCHEDVALUE"/>
<input type="hidden" id="zSCOIDMAGNITUD" name="zSCOIDMAGNITUD"/>
<input type="hidden" id="zSCOIDLEVEL" name="zSCOIDLEVEL"/>
<input type="hidden" id="zSCOACCOMPVALUE" name="zSCOACCOMPVALUE"/>
<input type="hidden" id="zSCONAME" name="zSCONAME"/>
<input type="hidden" id="zSCO_DESCRIPTION" name="zSCO_DESCRIPTION"/>
<input type="hidden" id="zSCODTSTART" name="zSCODTSTART"/>
<input type="hidden" id="zSCODTEND" name="zSCODTEND"/>
<input type="hidden" id="zCualcuant" name="zCualcuant"/>
<input type="hidden" id="zParticular" name="zParticular"/>
<input type="hidden" id="zID_PERSONA" name="zID_PERSONA"/>
<input type="hidden" id="NombreEmpleado" name="NombreEmpleado" value="<%=sNameEmpEnc%>"/>
<input type="hidden" id="zOrdinal_HR" name="zOrdinal_HR"/>
<input type="hidden" id="zInicio" name="zInicio"/>
<input type="hidden" id="zFin" name="zFin"/>
<input type="hidden" id="JSP_REDIRECCION" name="JSP_REDIRECCION" value="<%=zlink%>" />
</form>

<script> 
  m4valor("oculto","zCualcuant","<%=zCualcuant%>","set"); 
  m4valor("oculto","zID_PERSONA","<%=sIdPersonEnc%>","set"); 
  m4valor("oculto","zOrdinal_HR","<%=sRoleEnc%>","set"); 
  m4valor("oculto","zInicio","<%=sDtStartEnc%>","set"); 
  m4valor("oculto","zFin","<%=sDtEndEnc%>","set");   
  m4valor("NombreFormulario","SCO_ID_HR","<%=sIdPersonEnc%>","set"); 
  m4valor("NombreFormulario","SCO_OR_HR_ROLE","<%=sRoleEnc%>","set"); 
</script>
<% 
if (zcount > 0) {
  String zposicions = "0";  
%>
<br/>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
<td colspan="8"><%=TranMss.getProperty("ev_mss.LblObjPend")%> </td>
</tr>
<tr>
  <td class="tablaestadosceldatitulo"></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_NM_OBJECTIVE%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_DT_START%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_DT_END%>"  htmlsafe = "true"/></td>    
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_WEIGHT%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_NM_LEVEL%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_SCHED_VALUE%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ></td>
</tr>
<m4:loop from="0" to="<%=zto%>">
<%
  zposicions = m4lix;
  try {
    M4Operations m = new M4Operations(request); 
    m.moveData(znodo,zmeta4object,znodo,zposicions);
  } catch(Exception e) {} 

%>
<form name="b<%=zposicions%>" id="b<%=zposicions%>" action=" "onSubmit="return false">
<input id="SCO_COMMENT<%=zposicions%>" name="SCO_COMMENT<%=zposicions%>" type="hidden" value="<m4:item m4name="<%=zSCO_COMMENT%>"  htmlsafe = "true"/>" />
<tr>
  <td class="fuentevalor"><m4:item m4name="<%=zNACCION%>" htmlsafe = "true"/> </td>
  <td class="fuentevalor">
  <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('SCO_COMMENT<%=zposicions%>','b<%=zposicions%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>  
  <img style='cursor:pointer' IdObjective="<m4:item item="SCO_ID_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo%>"/>" DtStart="<m4:item item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/>" IdMagnitud="<m4:item item="SCO_ID_MAGNITUD" htmlsafe="true" outputdef="<%=znodo%>"/>" IdLevel="<m4:item item="SCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znodo%>"/>" onclick='javascript:m4Eval.evalDetail.show(this);' title="<%=Ver%>" src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <m4:item m4name="<%=zSCO_N_OBJECTIVE%>"  htmlsafe = "true"/>
  </td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_DT_START%>"  htmlsafe = "true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_DT_END%>"  htmlsafe = "true"/></td>    
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_WEIGHT%>"  htmlsafe = "true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_N_LEVEL%>"  htmlsafe = "true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_SCHED_VALUE%>"  htmlsafe = "true"/> - <m4:item m4name="<%=zSCO_N_MAGNITUDE%>"  htmlsafe = "true"/></td>
  <td class="fuentebotonright"><a title="<%=Tran.getProperty("Button.Delete2")%>" href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>"  htmlsafe = "true" jsafe="true"/>');"><img class="tablamenuright" alt="<%=Tran.getProperty("Button.Delete2")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</form>
</m4:loop>
</table>
<%@include file="../../sse_generico/portugues/generico_ventanas_post.jsp"%>
<%}else{%>
<br/>
<div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound4")%></div>
<%}%>
<% 
if (zcount5 > 0) {
  String zposicions5 = "0"; 
%>
<br/>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
<td colspan="6"><%=TranMss.getProperty("ev_mss.LblObjVig")%> </td>
</tr>
<tr>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_NM_OBJECTIVE_MT%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_DT_START_MT%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_DT_END_MT%>"  htmlsafe = "true"/></td>   
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_WEIGHT_MT%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCO_NM_LEVEL_MT%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCO_SCHED_VALUE_MT%>"  htmlsafe = "true"/></td>   
</tr>
<m4:loop from="0" to="<%=zto5%>">
<%
  zposicions5 = m4lix;
  try {
    M4Operations m = new M4Operations(request); 
    m.moveData(znodo5,zmeta4object,znodo5,zposicions5);
  } catch(Exception e) {} 
%>
<form name="c<%=zposicions5%>" id="c<%=zposicions5%>" action=" "onSubmit="return false">
<input id="SCO_COMMENT_MT<%=zposicions5%>" name="SCO_COMMENT_MT<%=zposicions5%>" type="hidden" value="<m4:item m4name="<%=zSCO_COMMENT_MT%>"  htmlsafe = "true"/>" />
<tr>
  <td class="fuentevalor">  
  <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('SCO_COMMENT_MT<%=zposicions5%>','c<%=zposicions5%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>  
  <img style='cursor:pointer' IdObjective="<m4:item item="SCO_ID_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo5%>"/>" IdMagnitud="<m4:item item="SCO_ID_MAGNITUD" htmlsafe="true" outputdef="<%=znodo5%>"/>" IdLevel="<m4:item item="SCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znodo5%>"/>" onclick='javascript:m4Eval.evalDetail.show(this);' title="<%=Ver%>" src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <m4:item m4name="<%=zSCO_NM_OBJECTIVE_MT%>"  htmlsafe = "true"/>  
  </td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_DT_START_MT%>"  htmlsafe = "true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_DT_END_MT%>"  htmlsafe = "true"/></td>   
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_WEIGHT_MT%>"  htmlsafe = "true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_NM_LEVEL_MT%>"  htmlsafe = "true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_SCHED_VALUE_MT%>"  htmlsafe = "true"/> - <m4:item m4name="<%=zSCO_NM_MAGNITUDE_MT%>"  htmlsafe = "true"/></td>   
</tr>
</form>
</m4:loop>
</table>
<%}else{%>
<br/>
<div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound5")%></div>
<%}%>
<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>


