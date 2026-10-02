<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.* " %>

<%    
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String ztipocarga = "M4T";
String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");
String id_re = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_re");
String zAcc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zAcc");
String hayPrincipal = "0";
String IDPrincipal = "";
String zORDINAL = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal");
String sIDHr_Encr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id");
String zSCOIDHR = "";  
if (sIDHr_Encr == null || sIDHr_Encr.equals("")) {zSCOIDHR="";}
else {zSCOIDHR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", sIDHr_Encr);}
String sOrHr_Encr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal1");
String zSCOORHRPERIOD = "";  
if (sOrHr_Encr == null || sOrHr_Encr.equals("")) {zSCOORHRPERIOD="";}
else {zSCOORHRPERIOD = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", sOrHr_Encr);}
String sDtEval_Encr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"inicioev");
String zSCODTSTARTEVAL = "";  
if (sDtEval_Encr == null || sDtEval_Encr.equals("")) {zSCODTSTARTEVAL="";}
else {zSCODTSTARTEVAL = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", sDtEval_Encr);}
String zIDASSTEC = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tecnica");
String NombreEmpleado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombreper");
String NombreProceso = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso");
NombreEmpleado = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(NombreEmpleado);
NombreProceso = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(NombreProceso);

String valSCO_ID_HR = "";
String valSCO_OR_HR_ROLE ="";
String valSCO_DT_START_EVAL = "";
String valSCO_OR_EVALUATOR="";

String valSCO_GB_NAME = "";
String valSCO_ID_EVALUATOR_Encr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id");
String valSCO_ID_EVALUATOR = "";  
if (valSCO_ID_EVALUATOR_Encr == null || valSCO_ID_EVALUATOR_Encr.equals("")) {valSCO_ID_EVALUATOR="";}
else {valSCO_ID_EVALUATOR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", valSCO_ID_EVALUATOR_Encr);}
String valSCO_DT_START = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"valSCO_DT_START");
String valSCO_EVALUAT_DATE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"valSCO_EVALUAT_DATE");
String valSCO_EVALUATION_DEF = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"valSCO_EVALUATION_DEF");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((id_re==null)||(id_re.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zAcc==null)||(zAcc.equals(""))){zAcc = "";}
if ((mss==null)||(mss.equals(""))){ mss = "0";}
if ((mss==null)||(mss.equals(""))){ mss = "0";}
if (valSCO_ID_EVALUATOR==null){valSCO_ID_EVALUATOR = "";} 
if (valSCO_DT_START==null){valSCO_DT_START = "";} 
if (valSCO_EVALUAT_DATE==null){valSCO_EVALUAT_DATE = "";} 
if ((valSCO_EVALUATION_DEF==null)||(valSCO_EVALUATION_DEF.equals(""))){ valSCO_EVALUATION_DEF = "0";}

String ztitle = "";
String DescriDeleg  = "";
String Delete  = "";
String Alert = "";
String Selec = "";
String EvSeg = "";
String Ev = "";
String sChecked = ""; 
String Datos = "";
String Seleccion = "";
String profData = "";

String zmss="'"+mss+"'";
if (mss.equals("0")==true){
%>   
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
  <%@ include file="../../sse_generico/english/menu_ess.jsp" %>
  <script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>  
  <%@ include file="/sse_g3/sse_ev_trans.jsp"%> 
  <% ztitle = TranEss.getProperty("ev_ess.Delegar");%>
  <% DescriDeleg = TranEss.getProperty("ev_ess.DescriDeleg");%> 
  <% Delete = Tran.getProperty("Button.Delete");%>  
  <% Selec = Tran.getProperty("Link.Selec"); %>   
  <% EvSeg = TranEss.getProperty("ev_ess.LinkEvSeg"); %>  
  <% Ev = TranEss.getProperty("ev_ess.LinkEv"); %>
  <% Datos = TranEss.getProperty("ev_ess.LinkDatos"); %>  
  <% Seleccion = Tran.getProperty("Label.LblEmployee"); %>  
  <% profData = Tran.getProperty("Labelmss.ProfsData"); %>  

<%}else{%>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
  <script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
  <%@ include file="../../mss_generico/english/menu_mss.jsp" %>

  <script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>  
  <%@ include file="/mss_g3/mss_ev_trans.jsp"%>
  <% ztitle = TranMss.getProperty("ev_mss.Delegar");%>
  <% DescriDeleg = TranMss.getProperty("ev_mss.DescriDeleg");%>   
  <% Delete = Tran.getProperty("Button.Delete");%>    
  <% Selec = Tran.getProperty("Link.Selec"); %> 
  <% EvSeg = TranMss.getProperty("ev_mss.LinkEvSeg"); %>  
  <% Ev = TranMss.getProperty("ev_mss.LinkEv"); %>      
  <% Datos = TranMss.getProperty("ev_mss.LinkDatos"); %>  
  <% Seleccion = Tran.getProperty("Label.LblEmployee"); %>  
  <% profData = Tran.getProperty("Labelmss.ProfsData"); %>  
<%}
 
M4SessionCl zsesionDA = M4Context.getM4SessionCl(request);
String zYO = zsesionDA.getBagEntries("zIdPerson");%>

<title><%=ztitle%></title>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>

</head>

<body>

<% if (mss.equals("0")==true){ %>
  
    <%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
    <%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%  }else { %>

    <%@include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
    <%@include file="../../sse_generico/english/generico_links.jsp" %>
<% } 

String zsubsesion = "SSE_EVALUATOR";
String zmeta4object = "SSE_EVALUATOR";
String znodo = "M4T_EVALUATOR";
String znodo2 = "M4T_PERSON";
String znodo3 = "M4T_HR_PERIOD";

String zdireccion = "sse_g3/mss_g3_p18.jsp";
String zventanas = "6";
int zvuelta = 3;
String zestado = "31";
zestado=zestado+"&mss="+mss;
int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;

String zlink = "/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p18.jsp?estado=31&mss=" + mss + "&id=" +  sIDHr_Encr + "&ordinal1=" +  sOrHr_Encr + "&inicioev=" +  sDtEval_Encr + "&nombreper=" + NombreEmpleado + "&NombreProceso=" + NombreProceso + "&tecnica=" + zIDASSTEC + "&id_re=" + id_re ;  

String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zcomuna = znodo + ":" + zsubsesion + "!" + znodo + "." + "SCO_ID_HR" ;

String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]" ;
String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]"; 
String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";

String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]" ;
String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]"; 
String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";

String zSCO_ID_HR = zcomun + "SCO_ID_HR";
String zSCO_OR_HR_ROLE = zcomun + "SCO_OR_HR_ROLE";
String zSCO_DT_START_EVAL = zcomun + "SCO_DT_START_EVAL";
String zSCO_ID_EVALUATOR = zcomun + "SCO_ID_EVALUATOR";
String zSCO_OR_EVALUATOR = zcomun + "SCO_OR_EVALUATOR";
String zSCO_DT_START = zcomun + "SCO_DT_START";
String zSCO_EVALUAT_DATE = zcomun + "SCO_EVALUAT_DATE";
String zSCO_EVALUATION_DEF = zcomun + "SCO_EVALUATION_DEF";
String zSTD_GB_NAME = zcomun + "STD_GB_NAME";

String zSTD_ID_PERSON = zcomun2 + "STD_ID_PERSON";
String zSCO_GB_NAME = zcomun2 + "SCO_GB_NAME";

String zSTD_OR_HR_PERIOD = zcomun3 + "STD_OR_HR_PERIOD";

String zmetodocarga = zsubsesion + "!SSE_PRINCIPAL.CARGA";
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%    
  try {
    M4Operations m = new M4Operations(request); 
    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
    m.setItem(zsubsesion,znodo,"","FILTRO_SCO_ID_HR",zSCOIDHR);  
    m.setItem(zsubsesion,znodo,"","FILTRO_SCO_OR_HR_PERIOD",zSCOORHRPERIOD);  
    m.setItem(zsubsesion,znodo,"","FILTRO_SCO_DT_START_EVAL",zSCODTSTARTEVAL);  
    m.setItem(zsubsesion,znodo3,"","FILTRO_STD_ID_HR",valSCO_ID_EVALUATOR);  
  } catch(Exception e) {}
%>

<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>


<script type="text/javascript">

function load(empleado)
{
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&person=" + empleado;
  window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');
}

function borrar(Ordinal,IDRH){

  var IDPrincipal = m4valor("oculto","IDPrincipal","","get");

  //Autoevaluación, no se puede modificar
  if ("<%=zIDASSTEC%>" == "03") {
    m4setlog("_sl_co_mss_ev_3");
    return;
  }

  if (IDRH == "<%=zYO%>") {

  } else {
     if ("<%=zIDASSTEC%>" != "02") 
     {
      m4setlog("_sl_co_mss_ev_5");
      return;   
     }
  }

  if (("<%=zIDASSTEC%>" == "01") || ("<%=zIDASSTEC%>" == "04")) {
    //Top down, autoevaluación o top down + autoevaluación; No se puede borrar si no soy el principal
    //20-12-2005: No se puede eliminar el evaluador
      m4setlog("_sl_co_mss_ev_8");
      return;

    if (IDPrincipal == "<%=zYO%>") {

    } else {
      m4setlog("_sl_co_mss_ev_2");
      return;
    }
  }

  m4valor("oculto2","ORDINAL",Ordinal,"set");
  m4submit("oculto2");
}

function selectPerson(){
  var miObjeto = new Object();
  var aParametros = new Array(4); 

  aParametros = window.showModalDialog("/servlet/CheckSecurity/JSP/mss_generico/generico_employee.jsp?FILTRO_ID_PERSON=&FILTRO_N_FAMILY_NAME_1=&FILTRO_N_FIRST_NAME=", miObjeto, "dialogHeight:600px;dialogWidth:800px;"); 
  
  if(aParametros != null) { 
    var objSCO_GB_NAME = m4elemento("SCO_GB_NAME");
    objSCO_GB_NAME.setAttribute('value', aParametros[1]);
    objSCO_GB_NAME.setAttribute('disabled', 'disabled');

    var objSCO_OR_EVALUATOR = m4elemento("SCO_OR_EVALUATOR");
    objSCO_OR_EVALUATOR.setAttribute('value', aParametros[2]);
    objSCO_OR_EVALUATOR.setAttribute('disabled', 'disabled');

    var objSCO_OR_EVALUATOR = m4elemento("SCO_OR_EVALUATOR_ENCR");
    objSCO_OR_EVALUATOR.setAttribute('value', aParametros[3]);
  
    var objSCO_ID_EVALUATOR = m4elemento("SCO_ID_EVALUATOR");
    objSCO_ID_EVALUATOR.setAttribute('value', aParametros[0]);
    objSCO_ID_EVALUATOR.setAttribute('disabled', 'disabled');

    
    var varSCO_ID_EVALUATOR = m4valor("NombreFormulario","SCO_ID_EVALUATOR","","get");
  

  }
  
}

function navegar1 () 
{
  m4submit("Ev"); 
}
function navegar2 () 
{
  m4submit("EvSeg");  
}

function modificar(Ordinal,IDRH){
  //alert("<%=zIDASSTEC%>");
  //valores();
  
  
  
  //Autoevaluación, no se puede modificar
  if ("<%=zIDASSTEC%>" == "03") {
    m4setlog("_sl_co_mss_ev_3");
    return;
  }

  m4valor("oculto","zAcc","MOD","set");
  m4valor("oculto","ordinal",Ordinal,"set");
  m4valor("oculto", "valSCO_ID_EVALUATOR", IDRH, "set");
  //alert(IDRH);
  
  m4submit("oculto");
  
}

function limpiar(){
  m4valor("oculto","zAcc","","set");
  m4valor("oculto","ordinal","","set");
  m4submit("oculto");
}


function valores(){
 
  m4valor("oculto", "valSCO_ID_EVALUATOR", m4valor("NombreFormulario", "SCO_ID_EVALUATOR", "", "get"), "set");
  m4valor("oculto", "valSCO_GB_NAME", m4valor("NombreFormulario", "SCO_GB_NAME", "", "get"), "set");
  m4valor("oculto", "valSCO_EVALUATION_DEF", m4valor("NombreFormulario", "SCO_EVALUATION_DEF", "", "get"), "set");
//  m4valor("oculto", "valSCO_DT_START", m4valor("NombreFormulario", "SCO_DT_START", "", "get"), "set");
//  m4valor("oculto", "valSCO_EVALUAT_DATE", m4valor("NombreFormulario", "SCO_EVALUAT_DATE", "", "get"), "set");
  m4valor("oculto","zAcc","NEW","set");
  m4submit("oculto");
}

function checkEval(){
  var objSCO_EVALUATION_DEF = m4elemento("SCO_EVALUATION_DEF");

  if (objSCO_EVALUATION_DEF.checked==true){
    objSCO_EVALUATION_DEF.setAttribute('value', '1');
  } else { 
    objSCO_EVALUATION_DEF.setAttribute('value', '0');
  }
}

function comprobar(){
  //valores();
  m4valor("oculto", "valSCO_ID_EVALUATOR", m4valor("NombreFormulario", "SCO_ID_EVALUATOR", "", "get"), "set");
  m4valor("oculto", "valSCO_GB_NAME", m4valor("NombreFormulario", "SCO_GB_NAME", "", "get"), "set");
  m4valor("oculto", "valSCO_EVALUATION_DEF", m4valor("NombreFormulario", "SCO_EVALUATION_DEF", "", "get"), "set");
  m4valor("oculto","zAcc","NEW","set");
  var IDPrincipal = m4valor("oculto","IDPrincipal","","get");
  //alert(IDPrincipal);
  if ("<%=zIDASSTEC%>" == "03") {
    m4setlog("_sl_co_mss_ev_3");
    return;
  }
  //alert("<%=zIDASSTEC%>" );

  if (("<%=zIDASSTEC%>" == "01") || ("<%=zIDASSTEC%>" == "04")) {
    //alert(m4valor("NombreFormulario","SCO_EVALUATION_DEF","","get"));
    if (m4valor("NombreFormulario","SCO_EVALUATION_DEF","","get")!="1") {
      m4setlog("_sl_co_mss_ev_2");
      return;   
    }

    //alert("<%=zYO%>");
    //alert(IDPrincipal);
    
    if (IDPrincipal != "<%=zYO%>") {
      m4setlog("_sl_co_mss_ev_4");
      return;   
    }
  }
  //alert("5");
  var error = 0;
  var varSCO_ID_EVALUATOR = m4valor("NombreFormulario","SCO_ID_EVALUATOR","","get");
  var varaa = m4valor("NombreFormulario","SCO_GB_NAME","","get");
  var objSCO_ID_EVALUATOR = m4elemento("SCO_ID_EVALUATOR");
  var varSCO_OR_EVALUATOR = m4valor("NombreFormulario","SCO_OR_EVALUATOR","","get");
  var objSCO_OR_EVALUATOR = m4elemento("SCO_OR_EVALUATOR");
  var objSCO_OR_EVALUATOR_Encr = m4elemento("SCO_OR_EVALUATOR_ENCR");
//  var varSCO_DT_START = m4valor("NombreFormulario","SCO_DT_START","","get");
//  var varSCO_EVALUAT_DATE = m4valor("NombreFormulario","SCO_EVALUAT_DATE","","get");
  
  if (varSCO_ID_EVALUATOR == "") {
    error = 1
    m4setlog("_oblig","<m4:label m4name="<%=zSCO_GB_NAME%>" jsafe="true"/>");
    return;
  }

  if (varSCO_OR_EVALUATOR == "") {
    error = 1;
    m4setlog("_oblig","<m4:label m4name="<%=zSCO_OR_EVALUATOR%>" jsafe="true"/>");
    return;
  }
/*
  if (varSCO_DT_START == "") {
    error = 1
    m4setlog("_oblig","<m4:label m4name="<%=zSCO_DT_START%>" jsafe="true"/>");
    return;
  }

*/
  if (error == 1){
    return;
  } else {
    objSCO_OR_EVALUATOR.value = objSCO_OR_EVALUATOR_Encr.value;
    //Esto lo hacemos ya que si el campo está disabled no pasa el valor al M4O
    objSCO_ID_EVALUATOR.removeAttribute('disabled');
    objSCO_OR_EVALUATOR.removeAttribute('disabled');
    //alert("submit");
    m4submit("NombreFormulario") ;
  }
}






</script>

<%
String sORDINAL = String.valueOf(zORDINAL);
String disabled = "" ;
String disabled1 = "" ;
String valSCO_OR_EVALUATOR2="";
String valSCO_OR_EVALUATOR_Encr ="";

try {
  M4Operations t = new M4Operations(request);

  if (zAcc.equals("MOD")) {
    t.moveData(znodo,zmeta4object,znodo,sORDINAL);
    valSCO_ID_HR = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_HR");
    valSCO_OR_HR_ROLE = t.getItem(znodo,zsubsesion,znodo,"","SCO_OR_HR_ROLE");
    valSCO_DT_START_EVAL = t.getItem(znodo,zsubsesion,znodo,"","SCO_DT_START_EVAL");
    valSCO_ID_EVALUATOR = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_EVALUATOR");
    valSCO_OR_EVALUATOR2 = t.getItem(znodo,zsubsesion,znodo,"","SCO_OR_EVALUATOR");
    valSCO_OR_EVALUATOR = valSCO_OR_EVALUATOR2.substring(0,1);
	valSCO_OR_EVALUATOR_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", valSCO_OR_EVALUATOR);
    valSCO_GB_NAME = t.getItem(znodo,zsubsesion,znodo,"","STD_GB_NAME");
    valSCO_DT_START = t.getItem(znodo,zsubsesion,znodo,"","SCO_DT_START");
    valSCO_EVALUAT_DATE = t.getItem(znodo,zsubsesion,znodo,"","SCO_EVALUAT_DATE");
    valSCO_EVALUATION_DEF = t.getItem(znodo,zsubsesion,znodo,"","SCO_EVALUATION_DEF");
    disabled = "disabled" ;
    disabled1 = "disabled" ;
  }

  
  if (valSCO_ID_EVALUATOR.equals("")) {
    disabled1 = "disabled" ;
    }
    
  } catch(Exception e) {}

  int zcounti  = 0;
  int zcount = 0;
  int zcounti2  = 0;
  int zcounti3  = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
    zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti-1);
  String  zcountv2 = String.valueOf(zcounti2-1);
  String  zcountv3 = String.valueOf(zcounti3-1);
%>

<%
//Nos fijamos si hay evaluador principal
try {
    M4Operations t = new M4Operations(request);
    int j = 0;
    String sj = "" ;
    String aux = "";
    for (j = 0; j < zcount ; j++){
      sj = String.valueOf(j);
      t.moveData(znodo,zmeta4object,znodo,sj);
      aux = t.getItem(znodo,zmeta4object,znodo,"","SCO_EVALUATION_DEF");
      
      if (aux.equals("1"))
      {
        hayPrincipal = "1";
        IDPrincipal = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_EVALUATOR");
      }

    }
  } catch(Exception e) {}

%>

<table border="0" width="100%">
<tr><td class="titulofuncional" width="25%" colspan= "2" ><%=ztitle%></td>
</tr>

<tr>
  <td><img alt="<%=ztitle%>"title="<%=ztitle%>" src="/iconos/noname_procesos_evaluacion_ess_114_100.gif"  width="114" height="100" /></td>
  <td>
  <div class="descripcionfuncional"><%=DescriDeleg%></div>
  <%if (id_re.equals("0")==true)
  {%>
    <ul class="listaenlace"><li><a  class="enlacefuncional" title ="<%=Selec%>" href="javascript:history.back();"><%=Selec%></a></li></ul>
  <%}%>
  <%if (id_re.equals("1")==true)
  {%>
    <ul class="listaenlace"><li><a  class="enlacefuncional" title ="<%=Ev%>" href="javascript:navegar1();"><%=Ev%></a></li></ul>
  <%}%>
  <%if (id_re.equals("2")==true)
  {%>
    <ul class="listaenlace"><li><a  class="enlacefuncional" title ="<%=EvSeg%>" href="javascript:navegar2();"><%=EvSeg%></a></li></ul>
  <%}%> 
  
  </td>
</tr>
</table>


<%  //Si la técnia es Autoevaluación(03), ocultamos casi todo
  String ocultar1 = "0";
  if (zIDASSTEC.equals("03") ){
    ocultar1 = "1" ; 
  }

  //Si la técnica es Top Down (01) o Top Down + Autoevaluación(04)   
  //y además no soy evaluador principal, también debo ocultar casi todo
  if (zIDASSTEC.equals("01") || zIDASSTEC.equals("04")) {
    if (!(zYO.equals(IDPrincipal))) {
      ocultar1 = "1" ; 
    }
  }

%>

<% if (ocultar1.equals("0")) { %>
<input type="hidden" id="SCO_OR_EVALUATOR_ENCR" name="SCO_OR_EVALUATOR_ENCR" value="<%=valSCO_OR_EVALUATOR_Encr%>" />
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_EVALUATOR" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_EVALUATOR" />
<input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR" value="<%=sIDHr_Encr%>" />
<input type="hidden" id="SCO_OR_HR_ROLE" name="SCO_OR_HR_ROLE" value="<%=sOrHr_Encr%>" />
<input type="hidden" id="SCO_DT_START_EVAL" name="SCO_DT_START_EVAL" value="<%=sDtEval_Encr%>" />
<input type="hidden" id="JSP_REDIRECCION" name="JSP_REDIRECCION" value="<%=zlink%>" />
<input type="hidden" id="SCO_ID_ASSESSM_TEC" name="SCO_ID_ASSESSM_TEC" value="<%=zIDASSTEC%>" />
<input type="hidden" id="SCO_ID_EVALUATOR" name="SCO_ID_EVALUATOR" value="<%=valSCO_ID_EVALUATOR_Encr%>" />


<table class = "tablaestados" width="100%" cellspacing="0">
<tr>
<td class="fuenteleyenda_big"  colspan = "6"> 
<a title="<%=profData%>" href="javascript:load('<%=sIDHr_Encr%>')"><%=NombreEmpleado%></a> - <%=NombreProceso%></td>
</tr>
<tr class="tablaestadosceldatitulo" >
  <td colspan="2"><%=ztitle%></td>
  <td class="tablamenuright">
  <%if (id_re.equals("0")==true)
  {%>
    <a title="<%=Selec%>"href="javascript:history.back();" >
  <%}%>
  <%if (id_re.equals("1")==true)
  {%>
    <a title="<%=Ev%>"href="javascript:navegar1();" >
  <%}%>
  <%if (id_re.equals("2")==true)
  {%>
    <a title="<%=EvSeg%>"href="javascript:navegar2();" >
  <%}%>   
  <%if (mss.equals("0")==true){%>
        <%if (id_re.equals("0")==true){%>
            <img alt="<%=Selec%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><%}%>
        <%if (id_re.equals("1")==true)  {%>
            <img alt="<%=Ev%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><%}%>
        <%if (id_re.equals("2")==true){%>
            <img alt="<%=EvSeg%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><%}%>  
    
  <%}else{%>
    
      <%if (id_re.equals("0")==true){%>
            <img alt="<%=Selec%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><%}%>
      <%if (id_re.equals("1")==true)  {%>
            <img alt="<%=Ev%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><%}%>
      <%if (id_re.equals("2")==true){%>
            <img alt="<%=EvSeg%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><%}%>  
        
  <%}%>
  </a>
  </td>
</tr>



<tr>
  <td class="fuentecampo" colspan="2">&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/> </td>
  <td class="fuentevalor" colspan="2">
    <input class="fuentecampo" type="text" name="SCO_GB_NAME" id="SCO_GB_NAME" tabindex="3"  size="50" maxlength="255" tabindex="1" value = "<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(valSCO_GB_NAME)%>"  title="<m4:label m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/>"> 
    </input>
    <a  href="javascript:selectPerson();" title="<%=Seleccion%>">
    <img alt="<%=Seleccion%>" title="<%=Seleccion%>" src="/iconos/icono_lista_16_16.gif" width="16" height="16" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/>
    </a>
  </td>
</tr>

<tr>
  <td class="fuentecampo" colspan="2">&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_OR_EVALUATOR%>" htmlsafe = "true"/></td>
  <td class="fuentevalor" colspan="2">
  <input class="fuentevalor" tabindex="2" type="text" id="SCO_OR_EVALUATOR" name="SCO_OR_EVALUATOR" SIZE="10"  value = "<%=valSCO_OR_EVALUATOR%>" TITLE="<m4:label m4name="<%=zSCO_OR_EVALUATOR%>" htmlsafe = "true"/>"  >  </input>
    
</td>

</tr>


<tr>
  <%
  if (valSCO_EVALUATION_DEF.equals("1")) {
    sChecked = "checked";
  } else { sChecked = ""; }
  %>

  <td class="fuentecampo" colspan="2">&nbsp;<m4:label m4name="<%=zSCO_EVALUATION_DEF%>" htmlsafe = "true"/></td>
  <td class="fuentevalor" colspan="2">
  <input type="checkbox" <%=sChecked%> id="SCO_EVALUATION_DEF" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(valSCO_EVALUATION_DEF)%>" name="SCO_EVALUATION_DEF" onclick="javascript:checkEval();" /></td>
</tr>

<tr>
  <td colspan="4" class = "fuenteboton">&nbsp;
  <a title="Limpiar" href="javascript:limpiar();">
  <img alt="Limpiar" src="/iconos/icono_actualizar_mss_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  />
  </a>&nbsp;
  <a title="Enviar"href="javascript:comprobar();">
  <img alt="Enviar" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  />
  </a>
  </td>
</tr>
</table>
</form> 
<br>
<% } %>


<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class="tablaestadosceldatitulo">
  <td><m4:label m4name="<%=zSCO_ID_EVALUATOR%>" htmlsafe = "true"/></td>
  <td><m4:label m4name="<%=zSCO_OR_EVALUATOR%>" htmlsafe = "true"/></td>
  <td><m4:label m4name="<%=zSTD_GB_NAME%>" htmlsafe = "true"/></td>
  <td><m4:label m4name="<%=zSCO_EVALUATION_DEF%>" htmlsafe = "true"/></td>
  <td class="tablamenuright">
  <%if (id_re.equals("0")==true)
  {%>
    <a title="<%=Selec%>"href="javascript:history.back();" >
  <%}%>
  <%if (id_re.equals("1")==true)
  {%>
    <a title="<%=Ev%>"href="javascript:navegar1();" >
  <%}%>
  <%if (id_re.equals("2")==true)
  {%>
    <a title="<%=EvSeg%>"href="javascript:navegar2();" >
  <%}%>   
  <%if (mss.equals("0")==true){%>
        <%if (id_re.equals("0")==true){%>
            <img alt="<%=Selec%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><%}%>
        <%if (id_re.equals("1")==true)  {%>
            <img alt="<%=Ev%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><%}%>
        <%if (id_re.equals("2")==true){%>
            <img alt="<%=EvSeg%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><%}%>  
    
  <%}else{%>
    
      <%if (id_re.equals("0")==true){%>
            <img alt="<%=Selec%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><%}%>
      <%if (id_re.equals("1")==true)  {%>
            <img alt="<%=Ev%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><%}%>
      <%if (id_re.equals("2")==true){%>
            <img alt="<%=EvSeg%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><%}%>  
        
  <%}%>
  </a>
  </td>
  <td/>
</tr>

<% int iOrd = zregistroinicial; 
   String sOrd = "";  
   sChecked = ""; 
   String zregistroinicials = String.valueOf(zregistroinicial);
   String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
   %>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<% 

  try {
    M4Operations m = new M4Operations(request);
    sOrd = String.valueOf(iOrd) ;
      m.moveData(znodo,zmeta4object,znodo,sOrd);
    if (m.getItem(znodo,zmeta4object,znodo,"","SCO_EVALUATION_DEF").equals("1")) { 
      sChecked = "checked"; 
      } else { sChecked = "" ;} 
          
  } catch(Exception e) {}
  %>
<tr>
  <m4:item m4varname="sIdHrEval" m4name="<%=zSCO_ID_EVALUATOR%>" htmlsafe = "true" jsafe = "true"/>
  <%String sIdHrEval_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHrEval);%>
  <% if (ocultar1.equals("0")) { %>
    <td class = "fuentevalor"><a title="<m4:label m4name="<%=zSCO_ID_EVALUATOR%>" htmlsafe = "true"/>"  href="javascript:modificar('<%=iOrd%>','<%=sIdHrEval_Encr%>');"><m4:item m4name="<%=zSCO_ID_EVALUATOR%>" htmlsafe = "true" jsafe = "true"/></a></td>
  <% } else { %>
    <td class = "fuentevalor"><m4:item m4name="<%=zSCO_ID_EVALUATOR%>" htmlsafe = "true"/></td>
  <% } %>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_OR_EVALUATOR%>" htmlsafe = "true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSTD_GB_NAME%>" htmlsafe = "true"/></td>
  <td class="fuentevalor"><input type="checkbox" <%=sChecked%> disabled /></td>
  <% if (ocultar1.equals("0")) { %>
    <td class = "fuentevalor"><a title="<%=Delete%>" href="javascript:borrar('<%=iOrd%>','<%=sIdHrEval%>');"><img align="right" alt="<%=Delete%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
  <% } else { %>
    <td class = "fuentevalor">&nbsp;</td>
  <% } %>

  <% iOrd++ ;%>
</tr>

</m4:loop>

<%//Si no hay evaluador principal mostrarmos un mensaje advirtiendo %>
<% if (hayPrincipal.equals("0")) { %>
  <tr><td class="fuentevalor" colspan="7">&nbsp;&nbsp;</td></tr>
  <tr>
    <td class = "fuentecamponombre" colspan="7" align="center"><%=Alert%></td>
  </tr>
<% } %>


</table>

<%@include file="../../sse_generico/english/generico_ventanas_post.jsp"%>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p18_act.jsp?mss=<%=mss%>" method="post" name="oculto2" id="oculto2">
  <input type="hidden" id="TAG" name="TAG" value="SSE_EVALUATOR" />
  <input type="hidden" id="ACC" name="ACC" value="ANULAR" />
  <input type="hidden" id="NOD" name="NOD" value="SSE_EVALUATOR" />
  <input type="hidden" id="ORDINAL" name="ORDINAL" value="" />
  <input type="hidden" id="zinicios" name="zinicios"  value="" />
  <input type="hidden"  id="id" name="id" value="<%=sIDHr_Encr%>" />
  <input type="hidden"  id="ordinal1" name="ordinal1" value="<%=sOrHr_Encr%>" />
  <input type="hidden"  id="inicioev" name="inicioev" value="<%=sDtEval_Encr%>" />
  <input type="hidden"  id="tecnica" name="tecnica" value="<%=zIDASSTEC%>" />
  <input type="hidden"  id="nombreper" name="nombreper" value="<%=NombreEmpleado%>" />
  <input type="hidden"  id="nombreproc" name="nombreproc" value="<%=NombreProceso%>" /> 
  <input type="hidden"  id="id_re" name="id_re" value="<%=id_re%>" /> 
</form>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p18.jsp?estado=31&mss=<%=mss%>" method="post" name="oculto" id="oculto">
  <input type="hidden" id="zAcc" name="zAcc" value=""/>
  <input type="hidden" id="mss" name="mss" value="<%=mss%>"/>
  <input type="hidden" id="zinicios" name="zinicios"  value="" />
  <input type="hidden" id="ordinal" name="ordinal" value=""/>
  <input type="hidden" id="id" name="id" value="<%=sIDHr_Encr%>"/>
  <input type="hidden" id="tecnica" name="tecnica" value="<%=zIDASSTEC%>"/>
  <input type="hidden" id="id_re" name="id_re" value="<%=id_re%>"/>
  <input type="hidden" id="ordinal1" name="ordinal1" value="<%=sOrHr_Encr%>"/>
  <input type="hidden" id="inicioev" name="inicioev" value="<%=sDtEval_Encr%>"/>
  <input type="hidden" id="nombreper" name="nombreper" value="<%=NombreEmpleado%>"/>
  <input type="hidden" id="NombreProceso" name="NombreProceso" value="<%=NombreProceso%>"/>
  <input type="hidden" id="IDPrincipal" name="IDPrincipal" value="<%=IDPrincipal%>"/>
  <input type="hidden" id="valSCO_ID_EVALUATOR" name="valSCO_ID_EVALUATOR" value=""/>
  <input type="hidden" id="valSCO_OR_EVALUATOR" name="valSCO_OR_EVALUATOR" value=""/>
  <input type="hidden" id="valSCO_EVALUATION_DEF" name="valSCO_EVALUATION_DEF" value=""/>
  <input type="hidden" id="valSCO_DT_START" name="valSCO_DT_START" value=""/>
  <input type="hidden" id="valSCO_EVALUAT_DATE" name="valSCO_EVALUAT_DATE" value=""/>
  <input type="hidden" id="valSCO_GB_NAME" name="valSCO_GB_NAME" value=""/>
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_seg.jsp?estado=31" method="post" name="EvSeg" id="EvSeg">
  <input type="hidden" id="id" name="id" value="<%=sIDHr_Encr%>"/>
  <input type="hidden" id="ord" name="ord" value="<%=sOrHr_Encr%>"/>
  <input type="hidden" id="inicioeval" name="inicioeval" value="<%=sDtEval_Encr%>"/>
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator.jsp?estado=31" method="post" name="Ev" id="Ev">
  <input type="hidden" id="id" name="id" value="<%=sIDHr_Encr%>"/>
  <input type="hidden" id="ord" name="ord" value="<%=sOrHr_Encr%>"/>
  <input type="hidden" id="inicioeval" name="inicioeval" value="<%=sDtEval_Encr%>"/>
</form>
<%if (mss=="0"){%>
  <%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
<%}else{%>
  <%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
<%}%>
</body>
<m4:endpage/> 
</html>