<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<title>Informa&ccedil;&otilde;es sobre processos de selec&ccedil;&atilde;o</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript"  language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>
<%
  Generatablaparametros Parametros = new Generatablaparametros (request); 
  String zidproceso = Parametros.m4paramvalor ("PRO");
  zidproceso = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zidproceso);
  String zactual = Parametros.m4paramvalor ("ACT");
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
function Enviarvacante(proceso, orpuesto, actual, actualvac){
  m4valor("Vacante", "PRO", proceso, "set");
  m4valor("Vacante", "ORP", orpuesto, "set");
  m4valor("Vacante", "ACT", actual, "set");
  m4valor("Vacante", "ACV", actualvac, "set");
  m4valor("Vacante", "EST", "31", "set");
  m4valor("Vacante", "zinicios", "<%=zinicios%>", "set");
  m4submit("Vacante");
}
function load_cv(empleado){
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&cabecera=1&zVis=0&person=" + empleado + "&RET=DAT";
  window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');
}
</script>
</head>
<body>

<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>

<%
  String zsubsesion = "SSM_RECRUIT_PRO";
  String zmeta4object = "SSM_RECRUIT_PRO";
  String znodo = "SSM_RECRUIT_PRO";
  String znodovac = "SSM_JOB_POST_PRO";
  String znodocan = "SSM_APP_RECRUIT_PRO";

  String zventanas = "10";
  int zvuelta = 5;
  String zdireccion = "mss_g3/mss_g3_p1_det.jsp";
  String zestado = "31";

  // No se modifica en general.

  int zregistroinicial = Integer.valueOf(zinicios).intValue();
  zregistroinicial = zregistroinicial - 1;
  int zventana  = Integer.valueOf(zventanas).intValue();
  int zregistrofinal = zregistroinicial + zventana - 1;
  
  String zoutputdef = zsubsesion + "!" + znodo + "[*]";
  String zmove = znodo + ":" + znodo + "[" + zactual + "]";
    
  String zoutputdefvac = zsubsesion + "!" + znodovac + "[*]";
  String zmovevac = znodovac + ":" + znodovac + "[FIRST]";
  String zcomunvac = znodovac + ":" + zsubsesion + "!" + znodovac + "[&VAR.m4lix]" + ".";

  String zoutputdefcan = zsubsesion + "!" + znodocan + "[" + zregistroinicial + "-" + zregistrofinal + "]";
  String zmovecan = znodocan + ":" + znodocan + "[" + zregistroinicial + "]";
  String zcomuncan = znodocan + ":" + zsubsesion + "!" + znodocan + "[&VAR.m4lix]" + ".";

  String zmetodocarga = zsubsesion + "!SSM_RECRUIT_PRO.CARGA";
  String ztipocarga = "DET";
  
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

  String zproceso = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_NM_RECRUITMENT";
  String zarea = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_N_AREA";
  String znombre = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_GB_NAME";
  
  String zpuesto = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_NM_JOB_POSITION";
  
  String zorpuesto = zcomunvac + "SCO_OR_JOB_POST";
  String zlugartrabajo = zcomunvac + "STD_N_WORK_LOCATION";
  String zunidadorganiz = zcomunvac + "STD_N_WORK_UNIT";
  String zmovilidadnac = zcomunvac + "MOVILIDAD_NAC";
  String zmovilidadint = zcomunvac + "MOVILIDAD_INT";
  String zsalariomax = zcomunvac + "SCO_MAX_SALARY";
  String zsalariomin = zcomunvac + "SCO_MIN_SALARY";
  String zedadmax = zcomunvac + "SCO_MAX_AGE";
  String zedadmin = zcomunvac + "SCO_MIN_AGE";
  
  String zidcandidato = zcomuncan + "SCO_ID_APP";
  String znombreglobalcandidato = zcomuncan + "SCO_GB_NAME";
  //String zapellidoscandidato = zcomuncan + "STD_N_FAMILY_NAME_1";
  String znmestado = zcomuncan + "SCO_NM_APP_STATUS";
  String ztipo = zcomuncan + "SCO_NM_APP_TYPE";
  String zfechainicio = zcomuncan + "SCO_DT_START_APP";

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request);
        m.setItem(zsubsesion,znodo,"","SCO_OR_RECRUIT_PR_ARG",zidproceso);
    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec> 
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodovac%>"><m4:param name="m4name0" value="<%=zoutputdefvac%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocan%>"><m4:param name="m4name0" value="<%=zoutputdefcan%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovevac%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovecan%>"/></m4:move>
<%

    int zcountivac = 0;
    try {
      M4Operations m = new M4Operations(request);
      zcountivac = m.getCountInClient(znodovac,zsubsesion,znodovac);
    } catch(Exception e) {}
    String  zcountvvac = String.valueOf(zcountivac);    
    String ztovac = new Integer(new Integer(zcountvvac).intValue()-1).toString();

    int  zcountcan = 0;
    int  zcountican = 0;
    try {
      M4Operations m = new M4Operations(request);
      zcountcan = m.getCount(znodocan,zsubsesion,znodocan);
    } catch(Exception e) {}
    
    try {
      M4Operations m = new M4Operations(request);
      zcountican = m.getCountInClient(znodocan,zsubsesion,znodocan);
    } catch(Exception e) {}
    String  zcountvcan = String.valueOf(zcountican);
    String ztocan = new Integer(new Integer(zcountvcan).intValue()-1).toString();
    int zcount = zcountcan;
    
%>

<table width="100%">
<tr>
  <td class="titulofuncional" colspan="2"><m4:item m4name="<%=zproceso%>"/></td>
</tr>
<tr>
  <td><img alt="Descri&ccedil;&atilde;o" src="/iconos/noname_listado_63_80.gif" width="100" height="100" /></td>
  <td><div class="descripcionfuncional">Estas s&atilde;o as vagas do processo de selec&ccedil;&atilde;o e os seus candidatos. Abre a descri&ccedil;&atilde;o da vaga e o CV dos candidatos.</div>
    <ul class="listaenlace">
    <li><a class="enlacefuncional" title="Acompanhar os processos abertos" href="mss_g3_p1.jsp?estado=31">Acompanhar os processos abertos</a></li>
    </ul>
  </td>
</tr>
</table>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;Posto vago</td>
  <td>&nbsp;Respons&aacute;vel</td>
  <td>&nbsp;&Aacute;rea</td>
</tr>
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpuesto%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znombre%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zarea%>"/></td>
</tr>
</table>
<br />
<% 
if (zcountivac > 0) {
  String zpos = "0";  
  int zindice = 0;
%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
  <td>&nbsp;Dados das vagas</td>
  <td>&nbsp;<m4:label m4name="<%=zunidadorganiz%>" htmlsafe="true"/></td>
  <td>&nbsp;Local de trabalho</td>
  <td>&nbsp;Mobilidade(nac/int)</td>
</tr>
<m4:loop from="0" to="<%=ztovac%>">
<%zpos = m4lix;
  zindice = Integer.valueOf(zpos).intValue(); %>

<tr>
  <%zidproceso = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zidproceso);%>
  <td class="fuentevalor"><a title="Descri&ccedil;&atilde;o da vaga" href="javascript:Enviarvacante('<%=zidproceso%>','<m4:item m4name="<%=zorpuesto%>"/>','<%=zactual%>','<%=zindice%>');">&nbsp;Vaga nº&nbsp;<m4:item m4name="<%=zorpuesto%>"/></a></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zunidadorganiz%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zlugartrabajo%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zmovilidadnac%>"/>&nbsp;-&nbsp;<m4:item m4name="<%=zmovilidadint%>"/></td>
</tr>
</m4:loop>
</table>
<br />

<%
if (zcountican > 0) {
  String zregistroinicials = String.valueOf(zregistroinicial);
  String zregistrofinals = String.valueOf(zregistroinicial + zcountican - 1);
  String person = "";
%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;Candidatos</td>
  <td>&nbsp;Estado</td>
  <td>&nbsp;Tipo</td>
  <td>&nbsp;Data de in&iacute;cio</td>
</tr>

<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<tr>
   <m4:item m4name="<%=zidcandidato%>" htmlsafe="true" var="person"/>
<%  
    person = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", person);
%>
  <td class="fuentevalor"><a title="Ver o CV" href="javascript:load_cv('<%=person%>');">&nbsp;<m4:item m4name="<%=znombreglobalcandidato%>"/></a></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znmestado%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=ztipo%>"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zfechainicio%>"/></td>
</tr>
</m4:loop>
</table>

<%@include file="../../sse_generico/portugues/generico_ventanas_post.jsp"%>
<%
}else{%>
<div class="fuentenodatos">Actualmente n&atilde;o existem candidatos para este processo de selec&ccedil;&atilde;o.</div>
<%
}
}else{
%>
<div class="fuentenodatos">Actualmente n&atilde;o existem vagas neste processo de selec&ccedil;&atilde;o.</div>

<%
}
%>
<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
</div>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_des.jsp" method="post" name="Vacante" id="Vacante">
  <input type="hidden" id="PRO" name="PRO" value="" />
  <input type="hidden" id="ORP" name="ORP" value="" />
  <input type="hidden" id="ACT" name="ACT" value="" />
  <input type="hidden" id="ACV" name="ACV" value="" />
  <input type="hidden" id="EST" name="EST" value="" />
  <input type="hidden" id="zinicios" name="zinicios" value="" />
</form>
</body>
<m4:endpage/>
</html>

