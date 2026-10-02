<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html  
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Informa&ccedil;&otilde;es sobre o posto</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript"  language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript" src="/library/m4doc_include.js"></script>
<%    
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String zjob = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_job");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_JOB";
   String zmeta4object = "SSE_JOB";
   String znodo = "SSE_JOB_PRINCIPAL";
   String znodojob = "SSE_JOB";
   String znodores = "SSE_JOB_DUTY";
   String znodocon = "SSE_JOB_COMPETENCY";
   String znodohis = "SSE_JOB_ACAD_BACK";
   String znodoidi = "SSE_JOB_LANGUAGE";
   String znodoexp = "SSE_JOB_PREV_JOBS";
   String znodocer = "SSE_JOB_CERT_LICEN";
   
// Parametriza-se o tamanho que se pretende para a janela

   String zventanas = "20";

// Não se modifica em geral.

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdefjob = zsubsesion + "!" + znodojob + "[*]";
   String zmovejob = znodojob + ":" + znodojob + "[FIRST]";
   String zcomunjob = znodojob + ":" + zsubsesion + "!" + znodojob + "[&VAR.m4lix]" + ".";

   String zoutputdefres = zsubsesion + "!" + znodores + "[*]";
   String zmoveres = znodores + ":" + znodores + "[FIRST]";
   String zcomunres = znodores + ":" + zsubsesion + "!" + znodores + "[&VAR.m4lix]" + ".";

   String zoutputdefcon = zsubsesion + "!" + znodocon + "[*]";
   String zmovecon = znodocon + ":" + znodocon + "[FIRST]";
   String zcomuncon = znodocon + ":" + zsubsesion + "!" + znodocon + "[&VAR.m4lix]" + ".";

   String zoutputdefhis = zsubsesion + "!" + znodohis + "[*]";
   String zmovehis = znodohis + ":" + znodohis + "[FIRST]";
   String zcomunhis = znodohis + ":" + zsubsesion + "!" + znodohis + "[&VAR.m4lix]" + ".";

   String zoutputdefidi = zsubsesion + "!" + znodoidi + "[*]";
   String zmoveidi = znodoidi + ":" + znodoidi + "[FIRST]";
   String zcomunidi = znodoidi + ":" + zsubsesion + "!" + znodoidi + "[&VAR.m4lix]" + ".";

   String zoutputdefexp = zsubsesion + "!" + znodoexp + "[*]";
   String zmoveexp = znodoexp + ":" + znodoexp + "[FIRST]";
   String zcomunexp = znodoexp + ":" + zsubsesion + "!" + znodoexp + "[&VAR.m4lix]" + ".";

   String zoutputdefcer = zsubsesion + "!" + znodocer + "[*]";
   String zmovecer = znodocer + ":" + znodocer + "[FIRST]";
   String zcomuncer = znodocer + ":" + zsubsesion + "!" + znodocer + "[&VAR.m4lix]" + ".";

// Metodo de carga del Meta4Object generico

   String zmetodocarga = zsubsesion + "!SSE_JOB_PRINCIPAL.CARGA";

// Itens que vamos carregar. Devem acrecentar-se todos aqueles que se pretenda visualizar
 
   String zpuesto = znodojob + ":" + zsubsesion + "!" + znodojob + ".STD_ID_JOB_CODE";
   String znombrepuesto = znodojob + ":" + zsubsesion + "!" + znodojob + ".STD_N_JOB_CODE";
   String zmision = znodojob + ":" + zsubsesion + "!" + znodojob + ".STD_JOB_DESCR";
   String zresumen = znodojob + ":" + zsubsesion + "!" + znodojob + ".STD_SUMMARY";
   String zsinonimos = znodojob + ":" + zsubsesion + "!" + znodojob + ".SCO_NM_OTHERS";      
   String zdescjobdoc = znodojob + ":" + zsubsesion + "!" + znodojob + ".SCO_JOB_DESC_DOC";      
   
   String zmovilidadnac = znodojob + ":" + zsubsesion + "!" + znodojob + ".MOVILIDAD_NAC";
   String zmovilidadint = znodojob + ":" + zsubsesion + "!" + znodojob + ".MOVILIDAD_INT";
   
   String zresponsabilidad = zcomunres + "SCO_NM_DUTY";
   
   String zconocimiento = zcomuncon + "SCO_NM_EXTD_KN";
   String znivel = zcomuncon + "SCO_NM_LEVEL";
   String zpeso = zcomuncon + "SCO_WEIGHT";
   
   String ztipoformacion = zcomunhis + "STD_N_EDU_TYPE";
   String zespecialidad = zcomunhis + "STD_N_EDU_SP";
   String ztitulacion = zcomunhis + "STD_N_DIPLOMA";
   
   String zidioma = zcomunidi + "STD_N_LANGUAGE";
   String znivelhabla = zcomunidi + "STD_N_LANG_LEVEL_1";
   String znivellee = zcomunidi + "STD_N_LANG_LEVEL";
   String znivelescribe = zcomunidi + "STD_N_LANG_LEVEL_2";
   
   String zpuestoprevio = zcomunexp + "STD_N_JOB_CODE";
   String zperiodo = zcomunexp + "SCO_MIN_PERIOD";
   String zunidadtiempo = zcomunexp + "SCO_NM_TIME_UNIT";
   
   String zcertificado = zcomuncer + "STD_N_CERTIFICATION_TYPE";
   String zentidad = zcomuncer + "SCO_N_ISSUE_ENTIT";
   String zpais = zcomuncer + "STD_N_COUNTRY";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="JOB_ARG" value="<%=zjob%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodojob%>"><m4:param name="m4name0" value="<%=zoutputdefjob%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodores%>"><m4:param name="m4name0" value="<%=zoutputdefres%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocon%>"><m4:param name="m4name0" value="<%=zoutputdefcon%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodohis%>"><m4:param name="m4name0" value="<%=zoutputdefhis%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoidi%>"><m4:param name="m4name0" value="<%=zoutputdefidi%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoexp%>"><m4:param name="m4name0" value="<%=zoutputdefexp%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocer%>"><m4:param name="m4name0" value="<%=zoutputdefcer%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovejob%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveres%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovecon%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovehis%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveidi%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveexp%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovecer%>"/></m4:move>
<%
  int  zcountijob  = 0; 
  try{
      M4Operations m = new M4Operations(request);
      zcountijob = m.getCountInClient(znodojob,zsubsesion,znodojob);
  } catch(Exception e) {}
  String  zcountvjob = String.valueOf(zcountijob);  
  String ztojob = new Integer(new Integer(zcountvjob).intValue()-1).toString();
  
  int  zcountires  = 0; 
  try{
      M4Operations m = new M4Operations(request);
      zcountires = m.getCountInClient(znodores,zsubsesion,znodores);
  } catch(Exception e) {}
  String  zcountvres = String.valueOf(zcountires);
  String ztores = new Integer(new Integer(zcountvres).intValue()-1).toString();
  
  int zcounticon = 0; 
  try{
      M4Operations m = new M4Operations(request);
      zcounticon = m.getCountInClient(znodocon,zsubsesion,znodocon);
  } catch(Exception e) {}
  String  zcountvcon = String.valueOf(zcounticon);
  String ztocon = new Integer(new Integer(zcountvcon).intValue()-1).toString();

  int  zcountihis  = 0; 
  try{
      M4Operations m = new M4Operations(request);
      zcountihis = m.getCountInClient(znodohis,zsubsesion,znodohis);
  } catch(Exception e) {}
  String  zcountvhis = String.valueOf(zcountihis);
  String ztohis = new Integer(new Integer(zcountvhis).intValue()-1).toString();

  int zcountiidi = 0; 
  try{
      M4Operations m = new M4Operations(request);
      zcountiidi = m.getCountInClient(znodoidi,zsubsesion,znodoidi);
  } catch(Exception e) {}
  String  zcountvidi = String.valueOf(zcountiidi);
  String ztoidi = new Integer(new Integer(zcountvidi).intValue()-1).toString();

  int zcountiexp = 0; 
  try{
      M4Operations m = new M4Operations(request);
      zcountiexp = m.getCountInClient(znodoexp,zsubsesion,znodoexp);
  } catch(Exception e) {}
  String  zcountvexp = String.valueOf(zcountiexp);
  String ztoexp = new Integer(new Integer(zcountvexp).intValue()-1).toString();

  int zcounticer = 0; 
  try{
      M4Operations m = new M4Operations(request);
      zcounticer = m.getCountInClient(znodocer,zsubsesion,znodocer);
  } catch(Exception e) {}
  String  zcountvcer = String.valueOf(zcounticer);
  String ztocer = new Integer(new Integer(zcountvcer).intValue()-1).toString();
  
  
if (zcountijob > 0) {%>

<m4:item m4varname="zDescJob" m4name="<%=zdescjobdoc%>" htmlsafe = "true"/>
<%if (!zDescJob.equals("")) {zDescJob = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "tc_docs", zDescJob);}%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2">&nbsp;<m4:item m4name="<%=znombrepuesto%>" htmlsafe="true" /></td></tr>
<tr>
  <td><img src="/iconos/noname_puesto_144_100.gif" width="100" height="100" alt="Posto de trabalho"title="Posto de trabalho" /></td>
  <td><div class="fuentedescripcion">Consulte todas as informa&ccedil;&otilde;es sobre os postos de trabalho.</div>
    <ul class="listaenlace"><li><a class="enlacefuncional" title= "Historial de postos" style="cursor:hand" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=30">Historial de postos</a></li></ul>
    <%if (!zDescJob.equals("")) {%>
      <li><a class="enlacefuncional" tabindex="2" title="<m4:label m4name="<%=zdescjobdoc%>" htmlsafe = "true"/>" <a href="javascript:m4opendocument_tech('<%=zDescJob%>')"><m4:label m4name="<%=zdescjobdoc%>" htmlsafe = "true"/></a></li>
    <%}%> 
    </ul>
  </td>
</tr>
</table>
  
<table class="tablaestados" cellspacing="0" width="100%" >
<%String zvalormision=""; %>
<%String zvalorsinonimos=""; %>
<%String zvalorresumen=""; %>

<m4:item var="zvalormision" item="STD_JOB_DESCR" htmlsafe="true" outputdef="<%=znodojob%>"/>
<m4:item var="zvalorsinonimos" item="SCO_NM_OTHERS" htmlsafe="true" outputdef="<%=znodojob%>"/>
<m4:item var="zvalorresumen" item="STD_SUMMARY" htmlsafe="true" outputdef="<%=znodojob%>"/>

<%if (zvalormision != "" && zvalormision != null && zvalormision != " ") {%>
<tr><td class="tablaestadosceldatitulo" colspan="2">&nbsp;<m4:label  item="STD_JOB_DESCR"  outputdef="<%=znodojob%>"/></td></tr>
<tr><td class="fuentevalor"  colspan="2">&nbsp;<m4:item m4name="<%=zmision%>" htmlsafe="true"/></td></tr>
<%}%>
<%if (zvalorsinonimos != "" && zvalorsinonimos != null && zvalorsinonimos != " ") {%>
<tr><td class="tablaestadosceldatitulo" colspan="2">&nbsp;<m4:label  item="SCO_NM_OTHERS"  outputdef="<%=znodojob%>"/></td></tr>
<tr><td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zsinonimos%>" htmlsafe="true"/></td></tr>
<%}%>
<%if (zvalorresumen != "" && zvalorresumen != null && zvalorresumen != " ") {%>
<tr><td class="tablaestadosceldatitulo" colspan="2">&nbsp;<m4:label  item="STD_SUMMARY"  outputdef="<%=znodojob%>"/></td></tr>
<tr><td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zresumen%>" htmlsafe="true"/></td></tr>
<%}%>

<tr><td class="tablaestadosceldatitulo">&nbsp;Mobilidade nacional </td>
<td class="tablaestadosceldatitulo">&nbsp;Mobilidade internacional</td></tr>

<tr><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zmovilidadnac%>" htmlsafe="true"/></td>
<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zmovilidadint%>" htmlsafe="true"/></td></tr>
</table>

<%}else{%>
<div class="fuentenodatos">N&atilde;o est&atilde;o dispon&iacute;veis informa&ccedil;&otilde;es.</div>
<%}if (zcountires > 0) {%>


<table class="tablaestados" cellspacing="0" width="100%" >
<tr><td class="tablaestadosceldatitulo">&nbsp;Responsabilidades</td></tr>
<tr>
  <td  class="fuentevalor">
  <ul>
  <m4:loop from="0" to="<%=ztores%>">
  <li>&nbsp;<m4:item m4name="<%=zresponsabilidad%>" htmlsafe="true"/></li>
  </m4:loop>
  </ul>
  </td>
</tr>
</table>
<%}if (zcounticon > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%" >
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Conhecimentos</td>
  <td class="tablaestadosceldatitulo">&nbsp;N&iacute;vel</td>
  <td class="tablaestadosceldatitulo">&nbsp;Peso</td>
</tr>
<m4:loop from="0" to="<%=ztocon%>">
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zconocimiento%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivel%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpeso%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>
<%}if (zcountihis > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%" >
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Forma&ccedil;&atilde;o</td>
  <td class="tablaestadosceldatitulo">&nbsp;Especialidade</td>
  <td class="tablaestadosceldatitulo">&nbsp;T&iacute;tulo</td>
</tr>
<m4:loop from="0" to="<%=ztohis%>">
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=ztipoformacion%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zespecialidad%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=ztitulacion%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>    
<%}if (zcountiidi > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%" >
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Idioma</td>
  <td class="tablaestadosceldatitulo">&nbsp;N&iacute;vel de leictura</td>
  <td class="tablaestadosceldatitulo">&nbsp;N&iacute;vel de escrita</td>
  <td class="tablaestadosceldatitulo">&nbsp;N&iacute;vel de express&atilde;o oral</td>
</tr>
<m4:loop from="0" to="<%=ztoidi%>">
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zidioma%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivellee%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivelescribe%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivelhabla%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>    
<%}if (zcountiexp > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%" >
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Postos pr&eacute;vios obrigat&oacute;rios</td>
  <td class="tablaestadosceldatitulo">&nbsp;Per&iacute;odo m&iacute;nimo</td>
</tr>
<m4:loop from="0" to="<%=ztoexp%>">
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpuestoprevio%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zperiodo%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zunidadtiempo%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>    
<% }if (zcounticer > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%" >
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Certificados e licen&ccedil;as</td>
  <td class="tablaestadosceldatitulo">&nbsp;Entidade emissora</td>
  <td class="tablaestadosceldatitulo">&nbsp;Pa&iacute;s emissor</td>
</tr>
<m4:loop from="0" to="<%=ztocer%>">
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zcertificado%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zentidad%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpais%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>    
<%}%>
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>



