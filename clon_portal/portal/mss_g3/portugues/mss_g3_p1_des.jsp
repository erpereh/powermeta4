<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<title>Descri&ccedil;&atilde;o da vaga</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript"  language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_g3_trans.jsp"%>
<%
  Generatablaparametros Parametros = new Generatablaparametros (request);
  
  String zidproceso = Parametros.m4paramvalor ("PRO");
  zidproceso = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zidproceso);
  String zorpuesto = Parametros.m4paramvalor ("ORP");
  String zactualpro = Parametros.m4paramvalor ("ACT");
  String zactual = Parametros.m4paramvalor ("ACV");
  String estado = Parametros.m4paramvalor ("EST");
  String zinicios = Parametros.m4paramvalor ("zinicios");

  if ((estado==null)||(estado.equals(""))){
    estado="0";
  }
  if ((zinicios==null)||(zinicios.equals(""))){
    zinicios = "1";
  }
    
%>
<script type="text/javaScript">
function Volver(proceso, actual){
  m4valor("Vacantes", "PRO", proceso, "set");
  m4valor("Vacantes", "ACT", actual, "set");
  m4valor("Vacantes", "EST", "31", "set");
  m4submit("Vacantes");
}
</script>
</head>
<body>
<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
  String zsubsesion = "SSM_RECRUIT_PRO";
  String zmeta4object = "SSM_RECRUIT_PRO";
  String znodo = "SSM_JOB_POST_PRO";
  String znodofor = "SSM_JOB_POST_ACAD_BACK";
  String znodocer = "SSM_JOB_POST_CERT_LIC";
  String znodoidi = "SSM_JOB_POST_LANG";
  String znodocon = "SSM_JP_POST_COMP";
  String znodoexp = "SSM_JP_PREV_JOB";
  String znodopro = "SSM_RECRUIT_PRO";
    
  // No se modifica en general.

  String zoutputdef = zsubsesion + "!" + znodo + "[*]";
  String zmove = znodo + ":" + znodo + "[" + zactual + "]";
  String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
    
  String zoutputdeffor = zsubsesion + "!" + znodofor + "[*]";
  String zmovefor = znodofor + ":" + znodofor + "[FIRST]";
  String zcomunfor = znodofor + ":" + zsubsesion + "!" + znodofor + "[&VAR.m4lix]" + ".";

  String zoutputdefcer = zsubsesion + "!" + znodocer + "[*]";
  String zmovecer = znodocer + ":" + znodocer + "[FIRST]";
  String zcomuncer = znodocer + ":" + zsubsesion + "!" + znodocer + "[&VAR.m4lix]" + ".";

  String zoutputdefidi = zsubsesion + "!" + znodoidi + "[*]";
  String zmoveidi = znodoidi + ":" + znodoidi + "[FIRST]";
  String zcomunidi = znodoidi + ":" + zsubsesion + "!" + znodoidi + "[&VAR.m4lix]" + ".";

  String zoutputdefcon = zsubsesion + "!" + znodocon + "[*]";
  String zmovecon = znodocon + ":" + znodocon + "[FIRST]";
  String zcomuncon = znodocon + ":" + zsubsesion + "!" + znodocon + "[&VAR.m4lix]" + ".";

  String zoutputdefexp = zsubsesion + "!" + znodoexp + "[*]";
  String zmoveexp = znodoexp + ":" + znodoexp + "[FIRST]";
  String zcomunexp = znodoexp + ":" + zsubsesion + "!" + znodoexp + "[&VAR.m4lix]" + ".";

  String zoutputdefpro = zsubsesion + "!" + znodopro + "[*]";
  String zmovepro = znodopro + ":" + znodopro + "[FIRST]";
  String zcomunpro = znodopro + ":" + zsubsesion + "!" + znodopro + "[&VAR.m4lix]" + ".";
  String zmetodocarga = zsubsesion + "!SSM_RECRUIT_PRO.CARGA";
  String ztipocarga = "DES";
  
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
  
  // Vagas
  String zconsideraciones = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_CONSIDERATIONS";
  String zfechaincorp = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_DT_INCORPORATE";
  String zedadmin = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_MIN_AGE";
  String zedadmax = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_MAX_AGE";  
  String zsalariomin = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_MIN_SALARY";
  String zsalariomax = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_MAX_SALARY";
  String zmoneda = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_SALX_CURTYP";
    

  // Forma&ccedil;&atilde;o
  String ztitulacion = zcomunfor + "STD_N_DIPLOMA";
  String zformacion = zcomunfor + "STD_N_EDU_TYPE";
  String zespecialidad = zcomunfor + "STD_N_EDU_SP";
  
  // Certificados
  String zcertificado = zcomuncer + "STD_N_CERTIFICATION_TYPE";
  String zentidad = zcomuncer + "SCO_N_ISSUE_ENTIT";
  String zpais = zcomuncer + "STD_N_COUNTRY";
  
  // Idiomas
  String zidioma = zcomunidi + "STD_N_LANGUAGE";
  String znivellee = zcomunidi + "STD_N_LANG_LEVEL";
  String znivelhabla = zcomunidi + "STD_N_LANG_LEVEL_1";
  String znivelescribe = zcomunidi + "STD_N_LANG_LEVEL_2";  

  // Conhecimentos
  String zconocimiento = zcomuncon + "SCO_NM_EXTD_KN";
  String znivel = zcomuncon + "SCO_MEANING";
  String zpeso = zcomuncon + "SCO_WEIGHT";

  // Experi&ecirc;ncia
  String zpuesto = zcomunexp + "STD_N_JOB_CODE";
  String zsector = zcomunexp + "STD_N_SECTOR";
  String zinicio = zcomunexp + "DT_START";
  String zfin = zcomunexp + "DT_END"; 
  //Desc Vacante
  String zSTD_JOB_PATH = znodopro + ":" + zsubsesion + "!" + znodopro + ".STD_JOB_PATH";
  //String zpath = zcomunpro + "STD_JOB_PATH";  
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request);
        m.setItem(zsubsesion,znodopro,"","SCO_OR_RECRUIT_PR_ARG",zidproceso);
        m.setItem(zsubsesion,znodopro,"","SCO_OR_JOB_POST_ARG",zorpuesto);        
    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec> 
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodofor%>"><m4:param name="m4name0" value="<%=zoutputdeffor%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocer%>"><m4:param name="m4name0" value="<%=zoutputdefcer%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoidi%>"><m4:param name="m4name0" value="<%=zoutputdefidi%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocon%>"><m4:param name="m4name0" value="<%=zoutputdefcon%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoexp%>"><m4:param name="m4name0" value="<%=zoutputdefexp%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodopro%>"><m4:param name="m4name0" value="<%=zoutputdefpro%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovefor%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovecer%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveidi%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovecon%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveexp%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovepro%>"/></m4:move>

<m4:item m4varname="zDes" m4name="<%=zSTD_JOB_PATH%>" htmlsafe = "true"/>
<%
  int zcountifor = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcountifor = m.getCountInClient(znodofor,zsubsesion,znodofor);
  } catch(Exception e) {}
  String  zcountvfor = String.valueOf(zcountifor);
  String ztofor = new Integer(new Integer(zcountvfor).intValue()-1).toString();

  int zcounticer = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcounticer = m.getCountInClient(znodocer,zsubsesion,znodocer);
  } catch(Exception e) {}
  String  zcountvcer = String.valueOf(zcounticer);
  String ztocer = new Integer(new Integer(zcountvcer).intValue()-1).toString();
  
  int zcountiidi = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcountiidi = m.getCountInClient(znodoidi,zsubsesion,znodoidi);
  } catch(Exception e) {}
  String  zcountvidi = String.valueOf(zcountiidi);
  String ztoidi = new Integer(new Integer(zcountvidi).intValue()-1).toString();
  
  int zcounticon = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcounticon = m.getCountInClient(znodocon,zsubsesion,znodocon);
  } catch(Exception e) {}
  String  zcountvcon = String.valueOf(zcounticon);
  String ztocon = new Integer(new Integer(zcountvcon).intValue()-1).toString();

  int zcountiexp = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcountiexp = m.getCountInClient(znodoexp,zsubsesion,znodoexp);
  } catch(Exception e) {}
  String  zcountvexp = String.valueOf(zcountiexp);
  String ztoexp = new Integer(new Integer(zcountvexp).intValue()-1).toString();
  
  int zcountipro = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcountipro = m.getCountInClient(znodopro,zsubsesion,znodopro);
  } catch(Exception e) {}
  String  zcountvpro = String.valueOf(zcountipro);
  String ztopro = new Integer(new Integer(zcountvpro).intValue()-1).toString();
  int zdatos = 0;
%>

<table width="100%">
<tr>
  <td class="titulofuncional" colspan="2">Vaga nº&nbsp;<%=zorpuesto%></td>
</tr>
<tr>
  <td><img alt="Informa&ccedil;&otilde;es sobre a vaga" src="/iconos/noname_listado_63_80.gif" width="100" height="100" onmouseover="m4luztotal(this)" onmouseout="m4oscuridad(this)" /></td>
  <td><div class="descripcionfuncional">Descri&ccedil;&atilde;o da informa&ccedil;&atilde;o da vaga.</div>
  <ul class="listaenlace">
    <%zidproceso = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zidproceso);%>
    <li><a class="enlacefuncional" title="Informa&ccedil;&otilde;es sobre o processo de selec&ccedil;&atilde;o" href="javascript:Volver('<%=zidproceso%>','<%=zactualpro%>');">Informa&ccedil;&otilde;es sobre o processo de selec&ccedil;&atilde;o</a></li>
<%if (zDes.equals("")){

}else{%>
    <li><a class="enlacefuncional" tabindex="2" title="<m4:label m4name="<%=zSTD_JOB_PATH%>" htmlsafe = "true"/>" <a href='<%=zDes%>' target="" onClick="window.open(this.href, this.target,'width=700,height=700,resizable,scrollbars');return false;"><m4:label m4name="<%=zSTD_JOB_PATH%>" htmlsafe = "true"/></a></li>
                                                                  
<%}%>     
  </ul>
  </td>
</tr>
<tr>
  <td>
    <form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp" method="post" name="Vacantes" id="Vacantes">
      <input type="hidden" id="PRO" name="PRO" value="" />
      <input type="hidden" id="ACT" name="ACT" value="" />
      <input type="hidden" id="EST" name="EST" value="" />
      <input type="hidden" id="zinicios" name="zinicios" value="<%=zinicios%>" />
    </form>
  </td>
</tr>
</table>
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Idade(m&iacute;n/m&aacute;x)</td>
  <td class="tablaestadosceldatitulo">&nbsp;Sal&aacute;rio(m&iacute;n/m&aacute;x)</td>
  <td class="tablaestadosceldatitulo">&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_DtIncorp")%></td>
</tr>
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zedadmin%>"/>&nbsp;-&nbsp;<m4:item m4name="<%=zedadmax%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zsalariomin%>"/>&nbsp;-&nbsp;<m4:item m4name="<%=zsalariomax%>"/>&nbsp;<m4:item m4name="<%=zmoneda%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zfechaincorp%>"/></td>
</tr>
</table>
<% if (zcountiexp > 0) {%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Posto</td>
  <td class="tablaestadosceldatitulo">&nbsp;Sector</td>
  <td class="tablaestadosceldatitulo">&nbsp;In&iacute;cio</td>
  <td class="tablaestadosceldatitulo">&nbsp;Fim</td>
</tr>
<m4:loop from="0" to="<%=ztoexp%>">
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpuesto%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zsector%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zinicio%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zfin%>"/></td>
</tr>
</m4:loop>
</table>
<%} if (zcountifor > 0) {%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;N&iacute;vel t&iacute;tulo</td>
  <td class="tablaestadosceldatitulo">&nbsp;Tipo de forma&ccedil;&atilde;o</td>
  <td class="tablaestadosceldatitulo">&nbsp;Especialidade</td>
</tr>
<m4:loop from="0" to="<%=ztofor%>">
<m4:item m4varname="zSTDNDIPLEVEL" item="STD_N_DIP_LEVEL" htmlsafe="true" outputdef="<%=znodofor%>" />
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=ztitulacion%>"/>
  <%if ((zSTDNDIPLEVEL==null)||(zSTDNDIPLEVEL.equals(""))){ %>  
    </td>
  <%} else {%>
    &nbsp;(<%=zSTDNDIPLEVEL%>)</td>
  <%}%>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zformacion%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zespecialidad%>"/></td>
</tr>
</m4:loop>
</table>
<% }if (zcounticer > 0) {%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Certificado</td>
  <td class="tablaestadosceldatitulo">&nbsp;Entidade emissora</td>
  <td class="tablaestadosceldatitulo">&nbsp;Pa&iacute;s</td>
</tr>
<m4:loop from="0" to="<%=ztocer%>">
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zcertificado%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zentidad%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpais%>"/></td>
</tr>
</m4:loop>
</table>
<%} if (zcountiidi > 0) {%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Idioma</td>
  <td class="tablaestadosceldatitulo">&nbsp;N&iacute;vel de leitura</td>
  <td class="tablaestadosceldatitulo">&nbsp;N&iacute;vel de escrita</td>
  <td class="tablaestadosceldatitulo">&nbsp;N&iacute;vel de express&atilde;o oral</td>
</tr>
<m4:loop from="0" to="<%=ztoidi%>">
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zidioma%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivellee%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivelescribe%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivelhabla%>"/></td>
</tr>
</m4:loop>
</table>
<%} if (zcounticon > 0) {%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Conhecimentos</td>
  <td class="tablaestadosceldatitulo">&nbsp;N&iacute;vel</td>
  <td class="tablaestadosceldatitulo">&nbsp;Peso</td>
</tr>
<m4:loop from="0" to="<%=ztocon%>">
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zconocimiento%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivel%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpeso%>"/></td>
</tr>
</m4:loop>
</table>
<%}%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_wiz1Consid")%></td>
</tr>
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zconsideraciones%>"/></td>
</tr>
</table>
<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>


