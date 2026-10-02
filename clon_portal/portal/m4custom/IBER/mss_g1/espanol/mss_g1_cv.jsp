<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%
// cadenas para traducir

  M4SessionManager m4Session = M4Context.getSession(request);
  String sPathTempMap = m4Session.getPathTempMapping();

String titulo = "CV del empleado";
String tfuncional = "Curriculum del empleado";
String efuncional = "Consulta otros CVs";
String efuncional2 = "Procesos de selecci&oacute;n";
String ttabla = "Datos personales";
String etiqueta = "Nombre";
String etiqueta2 = "Edad";
String etiqueta3 = "Nacionalidad";
String etiqueta4 = "Puesto";
String etiqueta5 = "Lugar de trabajo";
String etiqueta6 = "Unidad Organizativa";
String etiqueta7 = "Antig&uuml;edad";
String etiqueta8 = "Historial acad&eacute;mico";
String etiqueta9 = "Fecha inicio";
String etiqueta10 = "Fecha prevista/fin";
String etiqueta11 = "Tipo de diploma";
String etiqueta12 = "T&iacute;tulo de la carrera";
String etiqueta13 = "Centro";
String etiqueta14 = "Idiomas";
String etiqueta15 = "Idioma";
String etiqueta16 = "Nivel escrito";
String etiqueta17 = "Nivel comprensi&oacute;n";
String etiqueta18 = "Nivel oral";
String etiqueta19 = "Experiencia profesional";
String etiqueta20 = "Inicio";
String etiqueta21 = "Fin";
String etiqueta22 = "Empresa";
String etiqueta23 = "Sector";
String etiqueta24 = "Funciones";
String etiqueta25 = "No hay informaci&oacute;n para este empleado.";
String etiqueta26 = "Documentos";

request.setAttribute("calling_page", "mss_g1_cv");

//--------------------------------------------------------  

String zVis = "";
zVis = (String)request.getAttribute("zVis");
if ((zVis==null)||(zVis.equals(""))){
  zVis = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis");}

if ((zVis==null)||(zVis.equals(""))){
  zVis = "1";}
//--------------------------------------------------------

%>
<title><%=titulo%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
<script type="text/javaScript">
function Enviarproceso(proceso, actual){
  m4valor("Vacantes", "PRO", proceso, "set");
  m4valor("Vacantes", "ACT", actual, "set");
  m4valor("Vacantes", "EST", "31", "set");
  m4submit("Vacantes");
}
</script>
<%

  Generatablaparametros zobjtabla = new Generatablaparametros(request);

  String person = "";

  person = (String)request.getAttribute("empleado");
  if ((person==null)||(person.equals(""))){
    person = zobjtabla.m4paramvalor("person");
  }
  person = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", person);

  String zinicios = zobjtabla.m4paramvalor ("zinicios");
  String estado =zobjtabla.m4paramvalor("estado");
  if ((estado==null)||(estado.equals(""))){
    estado="0";
  } 
  String zPRO =zobjtabla.m4paramvalor("PRO");
  String zACT =zobjtabla.m4paramvalor("ACT");
  String zretorno =zobjtabla.m4paramvalor("RET");
  String cabecera =zobjtabla.m4paramvalor("cabecera");
  if ((cabecera==null)||(cabecera.equals(""))){
    cabecera="0";
  } 

  if ((zretorno==null)||(zretorno.equals(""))){
    zretorno = "DAT";
  } 
  
%>
</head>
<body>
<%if (zVis.equals("1")){%>
  <%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
  <div id="capa_cuerpo" style="position:absolute; left:2%; top:120px; width:96%; z-index:2">
<%}else{%>
  <div id="capa_cuerpo" style="position:absolute; left:5%; top:15px; width:90%; z-index:1">
<%}%>

<%
   String zsubsesion = "SSE_EMP_CV";
   String zmeta4object = "SSE_EMP_CV";
   String znodo = "M4T_EMP_BACKGROUND";
   String znodo2 = "M4T_EMP_CV_LANGUAGES";
   String znodo3 = "M4T_EMP_CV_PREV_JOBS";
   String znodo4 = "M4T_EMP_CV_PROF_DATA";
   String znodo5 = "M4T_EMP_JOB";
   String znodo6 = "M4T_EMP_PERS_DATA";
   String znodo7 = "SSE_HR_DOC";
   String znodo8 = "SMCO_PERSON_HEADER_CV";
   String znodo9 = "SMCO_PERSON_CERTIF_LICENSE_CV";
   String znodo10 = "SMCO_PERSON_COMP_BACKGROUND_CV";
   String znodo11 = "SMCO_PERSON_COM_INFORMATION_CV";
   String znodo12 = "SMCO_PERSONAL_ASSOCIATION_CV";
   String znodo13 = "SMCO_PERSONAL_KNC_LEVEL_CV";
        
  // Se parametriza el tamano que se desea para la ventana
   
   // No se modifica en general.
   
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zmove = znodo + "[FIRST]";
   String zlectura = zsubsesion + "!" + znodo;
   String zcomun = zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String zvalSTDNDIPLEVEL = "";
   String zvalSTDIDEDUCENTER = "";

   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + "[FIRST]";
   String zlectura2 = zsubsesion + "!" + znodo2;
   String zcomun2 = zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";

   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + "[FIRST]";
   String zlectura3 = zsubsesion + "!" + znodo3;
   String zcomun3 = zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";

   String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
   String zmove4 = znodo4 + "[FIRST]";
   String zlectura4 = zsubsesion + "!" + znodo4;
   String zraiz4 = zsubsesion + "!" + znodo4 + ".";

   String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
   String zmove5 = znodo5 + "[FIRST]";
   String zlectura5 = zsubsesion + "!" + znodo5;
   String zraiz5 = zsubsesion + "!" + znodo5 + ".";

   String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
   String zmove6 = znodo6 + "[FIRST]";
   String zlectura6 = zsubsesion + "!" + znodo6;
   String zraiz6 = zsubsesion + "!" + znodo6 + ".";

   String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";
   String zmove7 = znodo7 + "[FIRST]";
   String zlectura7 = zsubsesion + "!" + znodo7;
   String zraiz7 = zsubsesion + "!" + znodo7 + "[&VAR.m4lix]" + ".";

   String zoutputdef8 = zsubsesion + "!" + znodo8 + "[*]";
   String zoutputdef9 = zsubsesion + "!" + znodo9 + "[*]";
   String zoutputdef10 = zsubsesion + "!" + znodo10 + "[*]";
   String zoutputdef11 = zsubsesion + "!" + znodo11 + "[*]";
   String zoutputdef12 = zsubsesion + "!" + znodo12 + "[*]";
   String zoutputdef13 = zsubsesion + "!" + znodo13 + "[*]";

// Metodo de carga del Meta4Object generico

   String zmetodocarga = zsubsesion + "!SSE_EMP_CV.CARGA";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSTDNDIPLOMA = zcomun + "STD_N_DIPLOMA";
   String zSTDNDIPLEVEL = zcomun + "STD_N_DIP_LEVEL";
   String zSTDNEDUSP = zcomun + "STD_N_EDU_SP";
   String zSTDNEDUTYPE = zcomun + "STD_N_EDU_TYPE";
   String zSTDNEXTORG = zcomun + "STD_N_EXT_ORG";
   String zSTDDTSTART3 = zcomun + "STD_DT_START";
   String zSTDDTENDAUX2 = zcomun + "STD_DT_END_AUX";   
   String zMAINCOMMENT = zcomun + "MAIN_COMMENT";   
   String zSTDDESCEDUCENTER = zcomun + "STD_DESC_EDU_CENTER";
      
   String zSTDNLANGUAGE = zcomun2 + "STD_N_LANGUAGE";
   String zSTDNLISTENLEVEL = zcomun2 + "STD_N_LANG_LEVEL";
   String zSTDNSPEAKLEVEL = zcomun2 + "STD_N_LANG_LEVEL_1";
   String zSTDNWRITELEVEL = zcomun2 + "STD_N_LANG_LEVEL_2";
   
   String zSTDEMPLOYER = zcomun3 + "STD_EMPLOYER";
   String zSTDNSECTOR = zcomun3 + "STD_N_SECTOR";
   String zSTDDEVELOPEDACTIVITIES = zcomun3 + "STD_DEVELOPED_ACTIVITIES";
   String zSTDDTSTART = zcomun3 + "STD_DT_START";
   String zSTDDTENDAUX = zcomun3 + "STD_DT_END_AUX";
   String zMAINCOMMENT2 = zcomun3 + "MAIN_COMMENT";   
   String zSTDINITJOB = zcomun3 + "STD_INITIAL_JOB";
   String zSTDENDJOB = zcomun3 + "STD_FINAL_JOB";

   String zSTDDTSTART2 = zraiz4 + "SCO_DT_START";
   String zSTDNWORKLOCATION = zraiz4 + "STD_N_WORK_LOCATION";
   String zSTDNWORKUNIT = zraiz4 + "STD_N_WORK_UNIT";
   
   String zSTDNJOBCODE = zraiz5 + "STD_N_JOB_CODE";

   String zSCOGBNAME = zraiz6 + "SCO_GB_NAME";
   String zAGE = zraiz6 + "AGE";
   String zSTDNNACIONALITY = zraiz6 + "STD_N_NACIONALITY";
   String zSCOPHOTO = zraiz6 + "SCO_PHOTO";

   String zSCODTEMISION = zraiz7 + "SCO_DT_EMISSION";
   String zSCOTYPEDOC = zraiz7 + "SCO_NM_DOC_TYPE";
   String zSCOIDDOC = zraiz7 + "SCO_ID_DOC";  
   String zSCOORDOC = zraiz7 + "SCO_OR_HR_DOC"; 
   String zSCODTVALID = zraiz7 + "SCO_DT_VALID"; 
   String zSCONMDOCSTATE = zraiz7 + "SCO_NM_DOC_STATE"; 
   String zSCOTITLEDOC = zraiz7 + "SCO_TITLE_DOC"; 
      
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
    M4Operations m = new M4Operations(request);
    m.setItem(zsubsesion,"SSE_EMP_CV","","ID_PERSONA",person);
    }
  catch(Exception e){}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_PATH_TEMP" value="<%=sPathTempMap%>"/></m4:exec>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef7%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef8%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef9%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef10%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef11%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef12%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef13%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove5%>"/></m4:move>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove6%>"/></m4:move>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove7%>"/></m4:move>
<%
// averiguo si tiene registros en el nodo de Titulaciones (M4T_EMP_BACKGROUND), el nodo de Idiomas (M4T_EMP_CV_LANGUAGES),
// el nodo de Experiencia Previa (M4T_EMP_CV_PREV_JOBS), el nodo de datos profesionales (M4T_EMP_CV_PROF_DATA),
// el nodo de la funcion del empleado (M4T_EMP_JOB), el nodo de datos personales (M4T_EMP_PERS_DATA), 
// el nodo de documentos asociados (SSE_HR_DOC)

  int  zcounti  = 0;  
  int  zcount2i  = 0; 
  int  zcount3i  = 0; 
  int  zcount4i  = 0; 
  int  zcount5i  = 0; 
  int  zcount6i  = 0; 
  int  zcount7i  = 0; 
  int  zcount8i  = 0; 
  int  zcount9i  = 0; 
  int  zcount10i  = 0;  
  int  zcount11i  = 0;  
  int  zcount12i  = 0;  
  int  zcount13i  = 0;  
  try {
      M4Operations m = new M4Operations(request);
      zcounti = m.getCountInClient("",zsubsesion,znodo);
      zcount2i = m.getCountInClient("",zsubsesion,znodo2);
      zcount3i = m.getCountInClient("",zsubsesion,znodo3);
      zcount4i = m.getCountInClient("",zsubsesion,znodo4);
      zcount5i = m.getCountInClient("",zsubsesion,znodo5);
      zcount6i = m.getCountInClient("",zsubsesion,znodo6);
      zcount7i = m.getCountInClient("",zsubsesion,znodo7);
      zcount8i = m.getCountInClient("",zsubsesion,znodo8);
      zcount9i = m.getCountInClient("",zsubsesion,znodo8);
      zcount10i = m.getCountInClient("",zsubsesion,znodo10);
      zcount11i = m.getCountInClient("",zsubsesion,znodo11);
      zcount12i = m.getCountInClient("",zsubsesion,znodo12);
      zcount13i = m.getCountInClient("",zsubsesion,znodo13);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  String  zcount2v = String.valueOf(zcount2i);
  String  zcount3v = String.valueOf(zcount3i);
  String  zcount4v = String.valueOf(zcount4i);
  String  zcount5v = String.valueOf(zcount5i);
  String  zcount6v = String.valueOf(zcount6i);
  String  zcount7v = String.valueOf(zcount7i);
  int zcounttot = zcounti + zcount2i + zcount3i + zcount4i + zcount5i + zcount6i + zcount7i;

%>
<br />

<%if (cabecera.equals("1")){%>
  <jsp:include page="/mss_g1/smco_g1_profs_info_cabecera.jsp" flush="true"/>
<%}%>

<br />
<%if (zcount4i > 0){%>
<table class="barraregistros"><tr><td width="300">&nbsp;<b><u>Puesto en la compa&ntilde;&iacute;a</b></u></td></tr></table>
<table class="barraregistros" width="100%" cellspacing="0">
  <tr>
    <td class="tablaestadosceldatitulo" width="25%">&nbsp;<b><%=etiqueta4%></b></td>
    <td class="tablaestadosceldatitulo" width="25%">&nbsp;<b><%=etiqueta5%></b></td>
    <td class="tablaestadosceldatitulo" width="25%">&nbsp;<b><%=etiqueta6%></b></td>
    <td class="tablaestadosceldatitulo" width="25%">&nbsp;<b><%=etiqueta7%></b></td>
  </tr>
  <tr>
    <td class="fuentevalor" width="25%">&nbsp;<m4:item m4name="<%=zSTDNJOBCODE%>" htmlsafe="true"/></td>
    <td class="fuentevalor" width="25%">&nbsp;<m4:item m4name="<%=zSTDNWORKLOCATION%>" htmlsafe="true"/></td>
    <td class="fuentevalor" width="25%">&nbsp;<m4:item m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/></td>
    <td class="fuentevalor" width="25%">&nbsp;<m4:item m4name="<%=zSTDDTSTART2%>" htmlsafe="true"/></td>
  </tr>
</table>
<br/>
<%}if (zcount2i > 0) {%>
<table class="barraregistros"><tr><td  width="300">&nbsp;<b><u><%=etiqueta14%></b></u></td></tr></table>
<table class = "barraregistros" width="100%" cellspacing="0">
  <tr>
    <td class="tablaestadosceldatitulo" width="25%">&nbsp;<%=etiqueta15%></td>
    <td class="tablaestadosceldatitulo" width="25%">&nbsp;<%=etiqueta16%></td>
    <td class="tablaestadosceldatitulo" width="25%">&nbsp;<%=etiqueta17%></td>
    <td class="tablaestadosceldatitulo" width="25%">&nbsp;<%=etiqueta18%></td>
  </tr>
  <%
    String zposicions2 = "0";
    int zcontrol2 = 0;
    int zposicion2 =0;
  %>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcount2v).intValue()-1).toString()%>">
  <%
    zposicions2 = m4lix;
    zposicion2 = Integer.valueOf(zposicions2).intValue();
    zcontrol2 = zposicion2%2;
  %>
  <%if (zcontrol2==0){%>
    <tr>
      <td class="fuentevalor" width="25%">&nbsp;<m4:item m4name="<%=zSTDNLANGUAGE%>" htmlsafe="true"/></td>
      <td class="fuentevalor" width="25%">&nbsp;<m4:item m4name="<%=zSTDNWRITELEVEL%>" htmlsafe="true"/></td>
      <td class="fuentevalor" width="25%">&nbsp;<m4:item m4name="<%=zSTDNLISTENLEVEL%>" htmlsafe="true"/></td>
      <td class="fuentevalor" width="25%">&nbsp;<m4:item m4name="<%=zSTDNSPEAKLEVEL%>" htmlsafe="true"/></td>
    </tr>
  <%}else{%>
    <tr>
      <td class="fuentevalor2" width="25%">&nbsp;<m4:item m4name="<%=zSTDNLANGUAGE%>" htmlsafe="true"/></td>
      <td class="fuentevalor2" width="25%">&nbsp;<m4:item m4name="<%=zSTDNWRITELEVEL%>" htmlsafe="true"/></td>
      <td class="fuentevalor2" width="25%">&nbsp;<m4:item m4name="<%=zSTDNLISTENLEVEL%>" htmlsafe="true"/></td>
      <td class="fuentevalor2" width="25%">&nbsp;<m4:item m4name="<%=zSTDNSPEAKLEVEL%>" htmlsafe="true"/></td>
    </tr>
  <%}%>
  </m4:loop>  
</table>
<br/>
<%}%>
<%if (zcounti > 0) {%>  
<table class="barraregistros"><tr><td  width="300">&nbsp;<b><u><%=etiqueta8%></b></u></td></tr></table>
<table class="barraregistros" width="100%" cellspacing="0">
  <tr>
    <td class="tablaestadosceldatitulo" width="20%">&nbsp;<%=etiqueta9%></td>
    <td class="tablaestadosceldatitulo" width="20%">&nbsp;<%=etiqueta10%></td>
    <td class="tablaestadosceldatitulo" width="20%">&nbsp;<%=etiqueta12%></td>
    <td class="tablaestadosceldatitulo" width="20%">&nbsp;<%=etiqueta11%></td>
    <td class="tablaestadosceldatitulo" width="20%">&nbsp;<%=etiqueta13%></td>
  </tr>
  <%
    String zposicions = "0";
    int zcontrol = 0;
    int zposicion =0;
  %>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
  <%
    zposicions = m4lix;
    zposicion = Integer.valueOf(zposicions).intValue();
    zcontrol = zposicion%2;
    try {
      M4Operations m = new M4Operations(request);
      zvalSTDNDIPLEVEL = m.getItem("",zsubsesion,znodo,zposicions,"STD_N_DIP_LEVEL");
      zvalSTDIDEDUCENTER = m.getItem("",zsubsesion,znodo,zposicions,"STD_ID_EDU_CENTER");
    } catch(Exception e) {}
  %>
  <%if (zcontrol==0){%>
    <tr>
      <td class="fuentevalor" width="20%">&nbsp;<m4:item m4name="<%=zSTDDTSTART3%>" htmlsafe="true"/></td>
      <td class="fuentevalor" width="20%">&nbsp;<m4:item m4name="<%=zSTDDTENDAUX2%>" htmlsafe="true"/></td>
      <td class="fuentevalor" width="20%">&nbsp;<m4:item m4name="<%=zSTDNEDUTYPE%>" htmlsafe="true"/></td>
      <td class="fuentevalor" width="20%">&nbsp;<m4:item m4name="<%=zSTDNDIPLOMA%>" htmlsafe="true"/>
      <%if ((zvalSTDNDIPLEVEL==null)||(zvalSTDNDIPLEVEL.equals(""))){ %>  
        </td>
      <%} else {%>
        &nbsp;(<m4:item m4name="<%=zSTDNDIPLEVEL%>" htmlsafe="true"/>)</td>
      <%}%>
      <% if (zvalSTDIDEDUCENTER.equals("000")) {  %>
        <td class="fuentevalor" width="20%"><m4:item m4name="<%=zSTDDESCEDUCENTER%>" htmlsafe="true"/></td>
      <%} else {%>
        <td class="fuentevalor" width="20%"><m4:item m4name="<%=zSTDNEXTORG%>" htmlsafe="true"/></td>
      <%}%>
    </tr>
  <%}else{%>
    <tr>
      <td class="fuentevalor2" width="20%">&nbsp;<m4:item m4name="<%=zSTDDTSTART3%>" htmlsafe="true"/></td>
      <td class="fuentevalor2" width="20%">&nbsp;<m4:item m4name="<%=zSTDDTENDAUX2%>" htmlsafe="true"/></td>
      <td class="fuentevalor2" width="20%">&nbsp;<m4:item m4name="<%=zSTDNEDUTYPE%>" htmlsafe="true"/></td>
      <td class="fuentevalor2" width="20%">&nbsp;<m4:item m4name="<%=zSTDNDIPLOMA%>" htmlsafe="true"/>
      <%if ((zvalSTDNDIPLEVEL==null)||(zvalSTDNDIPLEVEL.equals(""))){ %>  
        </td>
      <%} else {%>
        &nbsp;(<m4:item m4name="<%=zSTDNDIPLEVEL%>" htmlsafe="true"/>)</td>
      <%}%>
      <% if (zvalSTDIDEDUCENTER.equals("000")) {  %>
        <td class="fuentevalor2" width="20%"><m4:item m4name="<%=zSTDDESCEDUCENTER%>" htmlsafe="true"/></td>
      <%} else {%>
        <td class="fuentevalor2" width="20%"><m4:item m4name="<%=zSTDNEXTORG%>" htmlsafe="true"/></td>
      <%}%>
    </tr>
  <%}%>
  </m4:loop>  
</table>
<br/>
<%}%>

<%if (zcount3i > 0) {%>
<table class="barraregistros"><tr><td  width="300">&nbsp;<b><u><%=etiqueta19%></b></u></td></tr></table>
<table class = "barraregistros" width="100%" cellspacing="0">
  <tr>
    <td class="tablaestadosceldatitulo" width="10%">&nbsp;<%=etiqueta20%></td>
    <td class="tablaestadosceldatitulo" width="10%">&nbsp;<%=etiqueta21%></td>
    <td class="tablaestadosceldatitulo" width="10%">&nbsp;<%=etiqueta22%></td>
    <td class="tablaestadosceldatitulo" width="20%">&nbsp;<%=etiqueta23%></td>
    <td class="tablaestadosceldatitulo" width="20%">&nbsp;<%=etiqueta24%></td>
    <td class="tablaestadosceldatitulo" width="20%">&nbsp;<m4:label m4name="<%=zSTDINITJOB%>"/></td>
    <td class="tablaestadosceldatitulo" width="20%">&nbsp;<m4:label m4name="<%=zSTDENDJOB%>"/></td>

  </tr>
  <%
    String zposicions3 = "0";
    int zcontrol3 = 0;
    int zposicion3 =0;
  %>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcount3v).intValue()-1).toString()%>">
  <%
    zposicions3 = m4lix;
    zposicion3 = Integer.valueOf(zposicions3).intValue();
    zcontrol3 = zposicion3%2;
  %>
  <%if (zcontrol3==0){%>
    <tr>
      <td class="fuentevalor" width="10%">&nbsp;<m4:item m4name="<%=zSTDDTSTART%>" htmlsafe="true"/></td>
      <td class="fuentevalor" width="10%">&nbsp;<m4:item m4name="<%=zSTDDTENDAUX%>" htmlsafe="true"/></td>
      <td class="fuentevalor" width="10%">&nbsp;<m4:item m4name="<%=zSTDEMPLOYER%>" htmlsafe="true"/></td>
      <td class="fuentevalor" width="20%">&nbsp;<m4:item m4name="<%=zSTDNSECTOR%>" htmlsafe="true"/></td>
      <td class="fuentevalor" width="20%"><m4:item m4name="<%=zSTDDEVELOPEDACTIVITIES%>" htmlsafe="true"/></td>
      <td class="fuentevalor" width="20%"><m4:item m4name="<%=zSTDINITJOB%>" htmlsafe="true"/></td>
      <td class="fuentevalor" width="20%"><m4:item m4name="<%=zSTDENDJOB%>" htmlsafe="true"/></td>

    </tr>
  <%}else{%>
    <tr>
      <td class="fuentevalor2" width="10%">&nbsp;<m4:item m4name="<%=zSTDDTSTART%>" htmlsafe="true"/></td>
      <td class="fuentevalor2" width="10%">&nbsp;<m4:item m4name="<%=zSTDDTENDAUX%>" htmlsafe="true"/></td>
      <td class="fuentevalor2" width="10%">&nbsp;<m4:item m4name="<%=zSTDEMPLOYER%>" htmlsafe="true"/></td>
      <td class="fuentevalor2" width="20%">&nbsp;<m4:item m4name="<%=zSTDNSECTOR%>" htmlsafe="true"/></td>
      <td class="fuentevalor2" width="20%"><m4:item m4name="<%=zSTDDEVELOPEDACTIVITIES%>" htmlsafe="true"/></td>
      <td class="fuentevalor2" width="20%"><m4:item m4name="<%=zSTDINITJOB%>" htmlsafe="true"/></td>
      <td class="fuentevalor2" width="20%"><m4:item m4name="<%=zSTDENDJOB%>" htmlsafe="true"/></td>

    </tr>
  <%}%>
  </m4:loop>  
</table>
<br/>
<%}%>

<jsp:include page="/mss_g1/smco_g1_profs_info_afiliacion_cv.jsp" flush="true"/>
<jsp:include page="/mss_g1/smco_g1_profs_info_certificados_cv.jsp" flush="true"/>
<jsp:include page="/mss_g1/smco_g1_profs_info_complementario_cv.jsp" flush="true"/>
<jsp:include page="/mss_g1/smco_g1_profs_info_complementaria_cv.jsp" flush="true"/>
<jsp:include page="/mss_g1/smco_g1_profs_info_conocimientos_cv.jsp" flush="true"/>

<%if (zcount7i > 0) {
%>
<table class="barraregistros"><tr><td  width="300">&nbsp;<b><u><%=etiqueta26%></b></u></td></tr></table>
<table class = "barraregistros" width="100%" cellspacing="0">
  <tr>
    <td class="tablaestadosceldatitulo" width="10%">&nbsp; <m4:label m4name="<%=zSCODTEMISION%>" htmlsafe="true" /></td>
    <td class="tablaestadosceldatitulo" width="10%">&nbsp;<m4:label m4name="<%=zSCODTVALID%>" htmlsafe="true" /></td>
    <td class="tablaestadosceldatitulo" width="10%">&nbsp;<m4:label m4name="<%=zSCONMDOCSTATE%>" htmlsafe="true" /></td>
    <td class="tablaestadosceldatitulo" width="15%">&nbsp;<m4:label m4name="<%=zSCOTYPEDOC%>" htmlsafe="true" /></td>
    <td class="tablaestadosceldatitulo" width="15%">&nbsp;<m4:label m4name="<%=zSCOIDDOC%>" htmlsafe="true" /></td>
  </tr>
  <%
    String zposicions7 = "0";
    int zcontrol7 = 0;
    int zposicion7 =0;
  %>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcount7v).intValue()-1).toString()%>">
  <%
    zposicions7 = m4lix;
    zposicion7 = Integer.valueOf(zposicions7).intValue();
    zcontrol7 = zposicion7%2;
  %>

  <%@ include file="../../tc_docs/tc_doc_initialize_include.jsp" %>
        <%
          //0:modo formulario 1:modo tabla
          sgtc_zShowMode = "1";
          //0:modo readonly 1:modo readwrite
          sgtc_zReadWrite = "0";
          sgtc_zstylesheet = "/css/estilo_mss.css"; 
          sgtc_zIDCSSRow = "fuentevalor";
        %>   
         
  <%if (zcontrol7==0){%>
    <tr>
      <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTEMISION%>" htmlsafe="true"/></td>
      <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTVALID%>" htmlsafe="true"/></td>
      <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONMDOCSTATE%>" htmlsafe="true"/></td>    
      <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCOTYPEDOC%>" htmlsafe="true"/></td>
      <m4:item m4name="<%=zSCOIDDOC%>" var="sgtc_zIDDOC" htmlsafe="true"/>
      <%sgtc_zIDDOC = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "tc_docs", sgtc_zIDDOC);%>
      <m4:item m4name="<%=zSCOTITLEDOC%>" var="sgtc_zTITLEDOC" htmlsafe="true"/>
      <%sgtc_zNMInputIDDOC = sgtc_zIDInputIDDOC;%>
      <input type="hidden" id="<%=sgtc_zNMInputIDDOC%>" name="<%=sgtc_zNMInputIDDOC%>" value="<%=sgtc_zIDDOC%>"/>
      <td class="fuentevalor"><%@ include file="../../tc_docs/tc_doc_include.jsp" %></td>
    </tr>
  <%}else{%>
    <tr>
      <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCODTEMISION%>" htmlsafe="true"/></td>
      <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCODTVALID%>" htmlsafe="true"/></td>
      <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONMDOCSTATE%>" htmlsafe="true"/></td>   
      <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCOTYPEDOC%>" htmlsafe="true"/></td>
      <m4:item m4name="<%=zSCOIDDOC%>" var="sgtc_zIDDOC" htmlsafe="true"/>
      <%sgtc_zIDDOC = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "tc_docs", sgtc_zIDDOC);%>
      <m4:item m4name="<%=zSCOTITLEDOC%>" var="sgtc_zTITLEDOC" htmlsafe="true" />
      <%sgtc_zNMInputIDDOC = sgtc_zIDInputIDDOC;%>
      <input type="hidden" id="<%=sgtc_zNMInputIDDOC%>" name="<%=sgtc_zNMInputIDDOC%>" value="<%=sgtc_zIDDOC%>"/>
      <td class="fuentevalor2"><%@ include file="../../tc_docs/tc_doc_include.jsp" %></td>
    </tr>
  <%}%>
  </m4:loop>  

</table>
</br>
<%}if (zcounttot > 0){}else{%>
<div class="fuentenodatos"><%=etiqueta25%></div><br /> <br /> 
<%}%>
</br></br>
<%if (zVis.equals("1")){%>
  <%@ include file="../../mss_generico/espanol/mssgenerico_disclaimer.jsp" %>
<%}%>
</div>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp" method="post" name="Vacantes" id="Vacantes">
  <input type="hidden" id="PRO" name="PRO" value="" />
  <input type="hidden" id="ACT" name="ACT" value="" />
  <input type="hidden" id="EST" name="EST" value="" />
  <input type="hidden" id="zinicios" name="zinicios" value="<%=zinicios%>" />
</form>
</body>
<m4:endpage/>
</html>