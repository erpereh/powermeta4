<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.* " %>
<%    
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String zcon = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"contador");
String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");
String zOrdinal = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zORDINAL");
String zACC = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ACC");
String zIDCAPABILITY = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCO_ID_CAPABILITY");
String zWEIGHT = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOWEIGHT");
String zID_CAP_REQ_LVL= "";
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
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((mss==null)||(mss.equals(""))){ mss = "0";}
if ((zIDCAPABILITY==null)||(zIDCAPABILITY.equals(""))){zIDCAPABILITY="";}
if ((zWEIGHT==null)||(zWEIGHT.equals(""))){zWEIGHT="";}
if ((zOrdinal==null)||(zOrdinal.equals(""))){zOrdinal="";}

String ztitle = "";
String Datos = "";
String Enviar = "";
String Volver = "";

String profData = "";

String zmss="'"+mss+"'";
if (mss.equals("0")==true){
%>   
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
  <%@ include file="../../sse_generico/english/menu_ess.jsp" %>
  <%@ include file="/sse_g3/sse_ev_trans.jsp"%>
  <script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>  
  <%  ztitle = TranEss.getProperty("ev_mss.DefCono"); %>
  <% Datos = TranEss.getProperty("ev_mss.LinkDatos"); %>      
  <% Enviar = Tran.getProperty("Button.Send"); %>
  <% Volver = TranEss.getProperty("ev_mss.Criterio"); %>  
  <% profData = Tran.getProperty("Labelmss.ProfsData"); %>  

  
<%}else{%>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
  <script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
  <%@ include file="../../mss_generico/english/menu_mss.jsp" %>
  <script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>  
  <%@ include file="/mss_g3/mss_ev_trans.jsp"%>
  <%  ztitle = TranMss.getProperty("ev_mss.DefCono"); %>
  <% Datos = TranMss.getProperty("ev_mss.LinkDatos"); %>      
  <% Enviar = Tran.getProperty("Button.Send"); %>
  <% Volver = TranMss.getProperty("ev_mss.Criterio"); %>  
  <% profData = Tran.getProperty("Labelmss.ProfsData"); %>  
  
<%}%>
<title><%=ztitle%></title>  
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>

</head>

<body>
<%if (mss.equals("0")==true){%>
<%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%}else{%>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%}%>
<%

String zsubsesion = "SSM_DEFINE_CRITERIA";
String zmeta4object = "SSM_DEFINE_CRITERIA";
String znodo = "M4T_H_EVALUATE";
String znodo3 = "M4T_EVAL_CAPAB";  
String znodo10 = "M4T_KNOW_MAP";  
String znodo12 = "M4T_KNOW_LEVEL";
String zconodo13 = "SSCO_EV_CRI_TYPE";
String zcooutputdef13= zsubsesion + "!" + zconodo13 + "[*]";

String zdireccion = "sse_g3/mss_g3_p16_comp.jsp";
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

String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";

String zoutputdef10 = zsubsesion + "!" + znodo10 + "[*]";
String zmove10 = znodo10 + ":" + znodo10 + "[FIRST]";
String zcomun10 = znodo10 + ":" + zsubsesion + "!" + znodo10 + "[&VAR.m4lix]" + ".";

String zoutputdef12 = zsubsesion + "!" + znodo12 + "[*]";
String zmove12 = znodo12 + ":" + znodo12 + "[FIRST]";
String zcomun12 = znodo12 + ":" + zsubsesion + "!" + znodo12 + "[&VAR.m4lix]" + ".";

String zSCO_NM_EXTD_KN = zcomun3 + "SCO_NM_EXTD_KN";
String zSCO_ID_CAPABILITY = zcomun3 + "SCO_ID_CAPABILITY";
String zSCO_WEIGHT = zcomun3 + "SCO_WEIGHT";
String zSCO_ID_CAP_REQ_LVL = zcomun3 + "SCO_ID_CAP_REQ_LVL";
String zSSE_NIVEL_CONO = zcomun3 + "SSE_NIVEL_CONO";
String zSCO_DT_START_REQ = zcomun3 + "SCO_DT_START_REQ";

String zSCOIDEXTDKN = zcomun10 + "SCO_ID_EXTD_KN";
String zSCONMEXTDKN = zcomun10 + "SCO_NM_EXTD_KN";
String zChkNoVisKn = "0";

String zSCOIDLEVEL = zcomun12 + "SCO_ID_LEVEL";  
String zSCONMLEVEL = zcomun12 + "SCO_NM_LEVEL";  


String zmetodocarga = "" ;
String disabled = "";

if (zACC.equals("NEW")==true){
  zmetodocarga = "CARGA:" + zsubsesion + "!" + znodo3 + "." + "SSM_NEW";
    zSCOIDCRITERIATYPE="02";
} else if (zACC.equals("MOD")) {
  zmetodocarga = "CARGA:" + zsubsesion + "!" + znodo3 + "." + "SSM_MOVE";
  disabled = "disabled";
}

%>  
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/><m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_POS" value="<%=zOrdinal%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo10%>"><m4:param name="m4name0" value="<%=zoutputdef10%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo12%>"><m4:param name="m4name0" value="<%=zoutputdef12%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=zconodo13%>" ><m4:param name="m4name0" value="<%=zcooutputdef13%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove10%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove12%>"/></m4:move>
<%
  int  zcount  = 0;
  int  zcounti  = 0;
  int  zcount3  = 0;
  int  zcounti3  = 0;
  int  zcount10  = 0;
  int  zcounti10  = 0;
  int  zcount12  = 0;
  int  zcounti12  = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
    zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
    zcount10 = m.getCount(znodo10,zsubsesion,znodo10);
    zcounti10 = m.getCountInClient(znodo10,zsubsesion,znodo10);
    zcount12 = m.getCount(znodo12,zsubsesion,znodo12);
    zcounti12 = m.getCountInClient(znodo12,zsubsesion,znodo12);

  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  String  zcountv3 = String.valueOf(zcounti3-1);
  String  zcountv10 = String.valueOf(zcounti10-1);
  String  zcountv12 = String.valueOf(zcounti12-1);
%>

<% 
int dPeso = 0;
if (zACC.equals("MOD")) {
    try {
    M4Operations t = new M4Operations(request);
    t.moveData(znodo3,zmeta4object,znodo3,zOrdinal);
    zIDCAPABILITY = t.getItem(znodo3,zsubsesion,znodo3,"","SCO_ID_CAPABILITY");
    zWEIGHT = t.getItem(znodo3,zsubsesion,znodo3,"","SCO_WEIGHT");
    zID_CAP_REQ_LVL = t.getItem(znodo3,zsubsesion,znodo3,"","SCO_ID_CAP_REQ_LVL");
    zSCOIDCRITERIATYPE = t.getItem(znodo3,zsubsesion,znodo3,"","SCO_ID_CRITERIA_TYPE");
} catch(Exception e) {}

zWEIGHT = zWEIGHT.toString();
dPeso = Double.valueOf(zWEIGHT).intValue();
}

%>

<script type="text/javascript">

function load(empleado)
{
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&person=" + empleado;
  window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');
}

function searchoption(sform,sidinput,sidoption){
  oselect=document.forms[sform].elements[sidinput];
  for(var ni=0; ni< oselect.options.length; ni++){    
    if (oselect.options[ni].value == sidoption){
    oselect.selectedIndex = ni; 
    break;
    }
  } 

}
function comprobar(){

var error = 0;
var texto = "" ;
var weight = m4valor("NombreFormulario","SCO_WEIGHT","","get");
var IdComp = m4valor("NombreFormulario","SCO_ID_CAPABILITY","","get");
var level = m4valor("NombreFormulario","SCO_ID_CAP_REQ_LVL","","get");

if (IdComp == "") {
  error = 1
  m4setlog("_oblig","<m4:label m4name="<%=zSCO_NM_EXTD_KN%>" jsafe="true"/>");
  
}

if (level == "") {
  error = 1
  m4setlog("_oblig","<m4:label m4name="<%=zSCONMLEVEL%>" jsafe="true"/>");
  
}

if (weight == "") {
  error = 1
  m4setlog("_num_oblig","<m4:label m4name="<%=zSCO_WEIGHT%>" jsafe="true"/>","");
  
} else {
  if ((weight < 0) || (weight > 100)) {
    m4setlog("_sl_co_mss_ev_14");
    
  }
}

if (error == 1){
  
  return;
}else {
    //Esto lo hacemos ya que si el campo está disabled no pasa el valor al M4O
    var objIdComp = m4elemento("SCO_ID_CAPABILITY");
    objIdComp.removeAttribute('disabled');
    m4submit("NombreFormulario") ;
  }
}

function deshabilitarNombre() {
  var zSCO_ID_CAPABILITY =m4valor("NombreFormulario","SCO_ID_CAPABILITY","","get");
  m4valor("oculto","zSCO_ID_CAPABILITY",zSCO_ID_CAPABILITY,"set");
  var zSCOWEIGHT =m4valor("NombreFormulario","SCO_WEIGHT","","get");  
  m4valor("oculto","zSCOWEIGHT",zSCOWEIGHT,"set");
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
  <td>
  
  <ul class="listaenlace"><li><a  class="enlacefuncional" title ="<%=Volver%>" href="<%=JSP_REDIRECCION%>"><%=Volver%></a></li></ul>
  </td>
</tr>
</table>


<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSM_DEFINE_CRITERIA" />
<input type="hidden" id="REC" name="REC" value="<%=zOrdinal%>" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_EVAL_CAPAB" />
<input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR" value="<%=sIdHr_Encr%>" />
<input type="hidden" id="SCO_OR_HR_ROLE" name="SCO_OR_HR_ROLE" value="<%=sOrRole_Encr%>" />
<input type="hidden" id="SCO_DT_START_EVAL" name="SCO_DT_START_EVAL" value="<%=sDtStarEval_Encr%>" />
<input type="hidden" id="JSP_REDIRECCION" name="JSP_REDIRECCION" value="<%=JSP_REDIRECCION%>" />

<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
  <td><%=ztitle%></td>
  <td class="tablamenuright">
    <a title="<%=Volver%>" href="<%=JSP_REDIRECCION%>" >
    <%if (mss.equals("0")==true){%>
    <img alt="<%=Volver%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
    <%}else{%>
    <img alt="<%=Volver%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
    <%}%>
    </a>
  </td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_NM_EXTD_KN%>"  htmlsafe = "true"/></td>
  <td class="fuentevalor">
  <select <%=disabled%> id="SCO_ID_CAPABILITY" class="fuenteformulario" name="SCO_ID_CAPABILITY" tabindex="1" title="" onchange="javascript:deshabilitarNombre();">
  <option value=""></option>
  <%
  String zselected1 = ""; 
  int i1 = 0;
  %>

  <m4:loop from="0" to="<%=zcountv10%>">
    <% try {
        M4Operations m = new M4Operations(request); 
        String id1 = String.valueOf(i1);
        m.moveData(znodo10,zmeta4object,znodo10,id1);
        i1++;
    if (m.getItem(znodo10,zmeta4object,znodo10,"","SCO_ID_EXTD_KN").toString().equals(zIDCAPABILITY)) { 
      zselected1 = "selected"; 
      } else { zselected1 = "" ;} 

    } catch(Exception e) {} 
    %>
<m4:item outputdef="<%=znodo10%>" item="SCO_CHK_NO_VIS_MSS" var="zChkNoVisKn" htmlsafe="true"/>
    <%if (zChkNoVisKn.equals("0")==true){%>   
    <option <%=zselected1%> value="<m4:item m4name="<%=zSCOIDEXTDKN%>"  htmlsafe = "true"/>"><m4:item m4name="<%=zSCONMEXTDKN%>"  htmlsafe = "true"/></option>
    <%}%>   
  </m4:loop>
  </select>
  </td>
</tr>

<tr>
<td class="fuentecampo" >&nbsp;<m4:label  item="SCO_NM_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=zconodo13%>"/></td> 
<td class="fuentecampo" >
  <select tabindex="2"id="SCO_ID_CRITERIA_TYPE" class="fuenteformulario" name="SCO_ID_CRITERIA_TYPE" title=" <m4:label  item="SCO_ID_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=zconodo13%>"/>">
      <option value=""></option>
      <m4:dataloop outputdef="<%=zconodo13%>">
      <option value="<m4:item  item="SCO_ID_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=zconodo13%>"/>"><m4:item  item="SCO_NM_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=zconodo13%>"/></option>
      </m4:dataloop>
  </select>
  </td>
    <script type="text/javascript" language="Javascript1.5"><!--
 if ('<%=zSCOIDCRITERIATYPE%>'!= ""){
     searchoption('NombreFormulario','SCO_ID_CRITERIA_TYPE','<%=zSCOIDCRITERIATYPE%>');
  }
--></script>
</tr>
<tr>  
  <td class="fuentecampo" colspan="1">&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_WEIGHT%>"  htmlsafe = "true"/></td>
  <td class="fuentecampo" colspan="3"><input class="fuenteformulario" type="text" id="SCO_WEIGHT" name="SCO_WEIGHT" value="<%=dPeso%>" size="15" maxlength="10" title="<m4:label m4name="<%=zSCO_WEIGHT%>"  htmlsafe = "true"/>" tabindex="6" /></td>
</tr>
<tr>
  <td class="fuentecampo" colspan="1">&nbsp;*&nbsp;<m4:label m4name="<%=zSSE_NIVEL_CONO%>" htmlsafe="true"/></td>
  <td class="fuentecampo" colspan="3"><select id="SCO_ID_CAP_REQ_LVL" class="fuenteformulario150" name="SCO_ID_CAP_REQ_LVL" tabindex="9" title="<m4:label m4name="<%=zSCONMLEVEL%>"  htmlsafe = "true"/>">
  <option value=""></option>
  <%
  zselected1 = ""; 
  i1 = 0;
  %>
  <m4:loop from="0" to="<%=zcountv12%>">
    <% try {
        M4Operations m = new M4Operations(request); 
        String id1 = String.valueOf(i1);
        m.moveData(znodo12,zmeta4object,znodo12,id1);
        i1++;
    if (m.getItem(znodo12,zmeta4object,znodo12,"","SCO_ID_LEVEL").toString().equals(zID_CAP_REQ_LVL)) { 
      zselected1 = "selected"; 
      } else { zselected1 = "" ;} 

    if (m.getItem(znodo12,zmeta4object,znodo12,"","SCO_ID_EXTD_KN").toString().equals(zIDCAPABILITY)) { 

    %>
    <option <%=zselected1%> value="<m4:item m4name="<%=zSCOIDLEVEL%>"  htmlsafe = "true"/>"><m4:item m4name="<%=zSCONMLEVEL%>"  htmlsafe = "true"/></option>
    <% }  } 
    catch(Exception e) {}   
    %>

  </m4:loop>
  </select> 
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

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16_comp.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zSCO_ID_CAPABILITY" name="zSCO_ID_CAPABILITY"/>
<input type="hidden" id="zSCOWEIGHT" name="zSCOWEIGHT"/>
<input type="hidden" id="zORDINAL" name="zORDINAL" value="<%=zOrdinal%>" />
<input type="hidden" id="mss" name="mss"  value="<%=mss%>" />
<input type="hidden" id="ACC" name="ACC"  value="RELOAD" />
<input type="hidden" id="JSP_REDIRECCION" name="JSP_REDIRECCION" value="<%=JSP_REDIRECCION%>" />
<%IDRH = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", IDRH);%>
<input type="hidden" id="zSCOIDHR" name="IDRH" value="<%=IDRH%>"/>
<%RHRole = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", RHRole);%>
<input type="hidden" id="zSCOORHRPERIOD" name="RHRole" value="<%=RHRole%>"/>
<%DTStartEval = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", DTStartEval);%>
<input type="hidden" id="zSCODTSTARTEVAL" name="DTStartEval" value="<%=DTStartEval%>"/>
<input type="hidden" id="NombreProceso" name="NombreProceso" value="<%=NombreProceso%>"/>
<input type="hidden" id="NombreEmpleado" name="NombreEmpleado" value="<%=NombreEmpleado%>"/>
<input type="hidden" id="zSCOIDCRITERIATYPE" name="zSCOIDCRITERIATYPE" value=""/>
</form>
<%if (mss=="0"){%>
<%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
<%}else{%>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
<%}%>
</div>
</body>
<m4:endpage/> 
</html>