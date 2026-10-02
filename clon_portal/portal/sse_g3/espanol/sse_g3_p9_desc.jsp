<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>Descripci&oacute;n del puesto</title>

<%
//--------------------------------------------------------  

String empleado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado");
String periodo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo");
String zVis = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis");
if ((zVis==null)||(zVis.equals(""))){
  zVis = "1";
}
//--------------------------------------------------------
if (zVis.equals("1")){%>
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<%}else{%>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%}%>


<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript" src="/library/m4doc_include.js"></script>
<script type="text/javascript">
function volver_prof(){
  document.getElementById("cargando").className = ""
  m4submit("volver") ;
  }

function formacion (extd,lev){
m4valor("oculto","zextd",extd,"set");
m4valor("oculto","zlevel",lev,"set");
m4submit("oculto");}
</script>
<%    
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = zobjtabla.m4paramvalor("estado");
String zinicios = zobjtabla.m4paramvalor("zinicios");  
String zjob = zobjtabla.m4paramvalor("zSJOB");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%> 
</head>
<body>
<%if (zVis.equals("1")){%>
  <%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
  <%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%}%>
<%
   String zsubsesion = "SSE_JOB";
   String zmeta4object = "SSE_JOB";
   String znodo = "SSE_JOB_PRINCIPAL";
   String znodo1 = "SSE_JOB";
   String znodo2 = "SSE_JOB_DUTY";
   String znodo3 = "SSE_JOB_COMPETENCY";
   String znodo4 = "SSE_JOB_ACAD_BACK";
   String znodo5 = "SSE_JOB_LANGUAGE";
   String znodo6 = "SSE_JOB_PREV_JOBS";
   String znodo7 = "SSE_JOB_CERT_LICEN";
   
// Se parametriza el tamano que se desea para la ventana

  String zventanas = "";
  if (zVis.equals("1")){
    zventanas = "20";
  }else{
    zventanas = "2000";
  }


// No se modifica en general.

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   

   String zoutputdef1 = zsubsesion + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove1 = znodo1 + "[" + zregistroinicial + "]";
   String zlectura1 = zsubsesion + "!" + znodo1;  
   String zraiz1 = zsubsesion + "!" + znodo1 + ".";
   String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove2 = znodo2 + "[" + zregistroinicial + "]";
   String zlectura2 = zsubsesion + "!" + znodo2;  
   String zraiz2 = zsubsesion + "!" + znodo2 + ".";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove3 = znodo3 + "[" + zregistroinicial + "]";
   String zlectura3 = zsubsesion + "!" + znodo3;  
   String zraiz3 = zsubsesion + "!" + znodo3 + ".";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";

   String zoutputdef4 = zsubsesion + "!" + znodo4 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove4 = znodo4 + "[" + zregistroinicial + "]";
   String zlectura4 = zsubsesion + "!" + znodo4;  
   String zraiz4 = zsubsesion + "!" + znodo4 + ".";
   String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";

   String zoutputdef5 = zsubsesion + "!" + znodo5 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove5 = znodo5 + "[" + zregistroinicial + "]";
   String zlectura5 = zsubsesion + "!" + znodo5;  
   String zraiz5 = zsubsesion + "!" + znodo5 + ".";
   String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";

   String zoutputdef6 = zsubsesion + "!" + znodo6 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove6 = znodo6 + "[" + zregistroinicial + "]";
   String zlectura6 = zsubsesion + "!" + znodo6;  
   String zraiz6 = zsubsesion + "!" + znodo6 + ".";
   String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&VAR.m4lix]" + ".";

   String zoutputdef7 = zsubsesion + "!" + znodo7 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove7 = znodo6 + "[" + zregistroinicial + "]";
   String zlectura7 = zsubsesion + "!" + znodo7;  
   String zraiz7 = zsubsesion + "!" + znodo7 + ".";
   String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&VAR.m4lix]" + ".";

// Metodo de carga del Meta4Object generico

   String zmetodocarga = zsubsesion + "!SSE_JOB_PRINCIPAL.CARGA";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
 
   String zpuesto = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_ID_JOB_CODE";
   String znombrepuesto = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_N_JOB_CODE";
   String zmision = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_JOB_DESCR";
   String zmovilidadnac = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".MOVILIDAD_NAC";
   String zmovilidadint = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".MOVILIDAD_INT";
   String zdescjobdoc = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".SCO_JOB_DESC_DOC";
   
   String zresponsabilidad =  zcomun2 + "SCO_NM_DUTY";
   
   String zconocimiento =  zcomun3 + "SCO_NM_EXTD_KN";
   String znivel =  zcomun3 + "SCO_MEANING";
   String zpeso =  zcomun3 + "SCO_WEIGHT";
   String zextd =  zcomun3 + "SCO_ID_EXTD_KN";
   String zlevel =  zcomun3 + "SCO_ID_LEVEL";
   
   String ztipoformacion =  zcomun4 + "STD_N_EDU_TYPE";
   String zespecialidad =  zcomun4 + "STD_N_EDU_SP";
   String ztitulacion =  zcomun4 + "STD_N_DIPLOMA";
   
   String zidioma =  zcomun5 + "STD_N_LANGUAGE";
   String znivelhabla =  zcomun5 + "STD_N_LANG_LEVEL_1";
   String znivellee =  zcomun5 + "STD_N_LANG_LEVEL";
   String znivelescribe =  zcomun5 + "STD_N_LANG_LEVEL_2";
   
   String zpuestoprevio =  zcomun6 + "STD_N_JOB_CODE";
   String zperiodo =  zcomun6 + "SCO_MIN_PERIOD";
   String zunidadtiempo =  zcomun6 + "SCO_NM_TIME_UNIT";
   
   String zcertificado =  zcomun7 + "STD_N_CERTIFICATION_TYPE";
   String zentidad =  zcomun7 + "SCO_N_ISSUE_ENTIT";
   String zpais =  zcomun7 + "STD_N_COUNTRY";
   
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="JOB_ARG" value="<%=zjob%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo7%>"><m4:param name="m4name0" value="<%=zoutputdef7%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove6%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove7%>"/></m4:move>
<%
  int  zcountijob  = 0; 
  try {
      M4Operations m = new M4Operations(request);
      zcountijob = m.getCountInClient(znodo1,zsubsesion,znodo1);
  } catch(Exception e) {}
  String  zcountvjob = String.valueOf(zcountijob);  

  int  zcountires  = 0; 
  try {
      M4Operations m = new M4Operations(request);
      zcountires = m.getCountInClient(znodo2,zsubsesion,znodo2);
  } catch(Exception e) {}
  String  zcountvres = String.valueOf(zcountires);
  
  int  zcounticon  = 0; 
  try {
      M4Operations m = new M4Operations(request);
      zcounticon = m.getCountInClient(znodo3,zsubsesion,znodo3);
  } catch(Exception e) {}
  String  zcountvcon = String.valueOf(zcounticon);  

  int  zcountihis  = 0; 
  try {
      M4Operations m = new M4Operations(request);
      zcountihis = m.getCountInClient(znodo4,zsubsesion,znodo4);
  } catch(Exception e) {}
  String  zcountvhis = String.valueOf(zcountihis);  

  int  zcountiidi  = 0; 
  try {
      M4Operations m = new M4Operations(request);
      zcountiidi = m.getCountInClient(znodo5,zsubsesion,znodo5);
  } catch(Exception e) {}
  String  zcountvidi = String.valueOf(zcountiidi);  

  int  zcountiexp  = 0; 
  try {
      M4Operations m = new M4Operations(request);
      zcountiexp = m.getCountInClient(znodo6,zsubsesion,znodo6);
  } catch(Exception e) {}
  String  zcountvexp = String.valueOf(zcountiexp);  

  int  zcounticer  = 0; 
  try {
      M4Operations m = new M4Operations(request);
      zcounticer = m.getCountInClient(znodo7,zsubsesion,znodo7);
  } catch(Exception e) {}
  String  zcountvcer = String.valueOf(zcounticer);  
if (zcountijob > 0) {
%>
<%if (zVis.equals("1")){%>
<m4:item m4varname="zDescJob" m4name="<%=zdescjobdoc%>" htmlsafe = "true"/>
<%if (!zDescJob.equals("")) {zDescJob = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "tc_docs", zDescJob);}%>
<table width="100%">
  <tr>
    <td class="titulofuncional" colspan="2">&nbsp;<m4:item m4name="<%=znombrepuesto%>" htmlsafe="true"/></td>
  </tr>
  <tr>
    <td><img src="/iconos/noname_puesto_144_100.gif" width="100" height="100" alt="Puesto de trabajo"/></td>
    <td><div class="fuentedescripcion"><a class="fuentedescripcion">Consulta todos los detalles acerca de los puestos del plan de carrera.</a>
     <ul class="listaenlace"><li><a class="enlacefuncional" title= "Plan de carrera" style="cursor:hand" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=30">Plan de carrera</a>
    <%if (!zDescJob.equals("")) {%>
      <li><a class="enlacefuncional" tabindex="2" title="<m4:label m4name="<%=zdescjobdoc%>" htmlsafe = "true"/>" <a href="javascript:m4opendocument_tech('<%=zDescJob%>')"><m4:label m4name="<%=zdescjobdoc%>" htmlsafe = "true"/></a></li>
    <%}%> 
     </ul>
    </div></td>
  </tr>
  </table>
<%}%>
<%if (zVis.equals("1")){%>
  <table class = "tablaestados" width="100%" cellspacing="0">
<%}else{%>
  <table class = "barraregistros" width="100%" cellspacing="0">
<%}%>

<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Misi&oacute;n</td>
  <td class="tablaestadosceldatitulo">&nbsp;Movilidad nacional</td>
  <td class="tablaestadosceldatitulo">&nbsp;Movilidad internacional</td>
</tr>
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zmision%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zmovilidadnac%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zmovilidadint%>" htmlsafe="true"/></td>
</tr>
</table>    
<%}else{%>
<div class="fuentenodatos" align="center">No existe descripci&oacute;n para este puesto.</div><br /><br />
<%}if (zcountires > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr><td class="tablaestadosceldatitulo">&nbsp;Responsabilidades</td></tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountires).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();%>
<tr><td colspan="2" class="fuentevalor"><li><m4:item m4name="<%=zresponsabilidad%>" htmlsafe="true"/></td></tr>
</m4:loop>
</table>
<%}if (zcounticon > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Conocimientos</td>
  <td class="tablaestadosceldatitulo">&nbsp;Nivel</td>
  <td class="tablaestadosceldatitulo">&nbsp;Peso</td>
</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcounticon).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();%>
<tr>
  <td class="fuentevalor">
  <%if (zVis.equals("1")){%>
    <a href="javascript:formacion('<m4:item m4name="<%=zextd%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zlevel%>" jsafe="true" htmlsafe="true"/>');" title="Formaci&oacute;n disponible"><m4:item m4name="<%=zconocimiento%>" htmlsafe="true"/></a>
  <%}else{%>
    <m4:item m4name="<%=zconocimiento%>" htmlsafe="true"/>
  <%}%>
  </td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivel%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpeso%>" htmlsafe="true"/></td>
</m4:loop>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc4.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zextd" name="zextd"  />
<input type="hidden" id="zlevel" name="zlevel"  />
<input type="hidden" id="znombre" name="znombre"  />
<input type="hidden" id="znivel" name="znivel"  />
</form> 
<%}if (zcountihis > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Formaci&oacute;n</td>
  <td class="tablaestadosceldatitulo">&nbsp;Especialidad</td>
  <td class="tablaestadosceldatitulo">&nbsp;Titulaci&oacute;n</td>
</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountihis).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();%>
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=ztipoformacion%>" htmlsafe="true"/></td>    
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zespecialidad%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=ztitulacion%>" htmlsafe="true"/></td>
<tr>
</m4:loop>
</table>    
<%}if (zcountiidi > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Idioma</td>
  <td class="tablaestadosceldatitulo">&nbsp;Nivel oral</td>
  <td class="tablaestadosceldatitulo">&nbsp;Nivel lectura</td>
  <td class="tablaestadosceldatitulo">&nbsp;Nivel escritura</td>
</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountiidi).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();%>
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zidioma%>" htmlsafe="true"/></td>   
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivelhabla%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivellee%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivelescribe%>" htmlsafe="true"/></td>
<tr>
</m4:loop>
</table>    
<%}if (zcountiexp > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Puestos previos requeridos</td>
  <td class="tablaestadosceldatitulo">&nbsp;Per&iacute;odo m&iacute;nimo</td>
</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountiexp).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();%>
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpuestoprevio%>" htmlsafe="true"/></td>   
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zperiodo%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zunidadtiempo%>" htmlsafe="true"/></td>
<tr>
</m4:loop>
</table>    
<%}if (zcounticer > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Certificados y licencias</td>
  <td class="tablaestadosceldatitulo">&nbsp;Entidad emisora</td>
  <td class="tablaestadosceldatitulo">&nbsp;Pa&iacute;s emisor</td>
</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcounticer).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();%>
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zcertificado%>" htmlsafe="true"/></td>    
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zentidad%>" htmlsafe="true"/></td>    
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpais%>" htmlsafe="true"/></td>   
<tr>
</m4:loop>
</table>
<%}%>

  <% if (zVis.equals("0")){%>
      <a title="Volver a Datos Profesionales del Empleado" href="javascript:volver_prof();" tabindex="6"><img alt="Volver a Datos Profesionales del Empleado" src="/iconos/icono_entrar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>

  <form action="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp" method="post" name="volver" id="volver">
    <input type="hidden" id="person" name="person" value="<%=empleado%>" />
    <input type="hidden" id="person_ord" name="person_ord" value="<%=periodo%>" />
  </form>

  <div id="cargando" name="cargando" class="invisible2"  style="position: relative; top: 0; left: 0">&nbsp;
  <table  class ="cargando">
    <tr><td>&nbsp;<img src="/iconos/cargando.gif" alt='<%=Tran.getProperty("Button.Volver")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></td>
    <td>&nbsp;&nbsp;&nbsp;<%=Tran.getProperty("Button.Volver")%>&nbsp;&nbsp;</td></tr></table> 
  </div>


  <%}%> 

<%if (zVis.equals("1")){%>
  <%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
<%}%>
</div>

</body>
<m4:endpage/>


