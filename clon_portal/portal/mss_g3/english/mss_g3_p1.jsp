<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Track Open Processes</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript"  language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_g3_trans.jsp"%>
<script type="text/javaScript">
function Enviarproceso(proceso, actual){
  m4valor("Vacantes", "PRO", proceso, "set");
  m4valor("Vacantes", "ACT", actual, "set");
  m4valor("Vacantes", "EST", "31", "set");
  m4submit("Vacantes");
}
</script>
<%
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
  if ((estado==null)||(estado.equals(""))){estado="0";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
   String zsubsesion = "SSM_RECRUIT_PRO";
   String zmeta4object = "SSM_RECRUIT_PRO";
   String zmetodocarga = zsubsesion + "!SSM_RECRUIT_PRO.CARGA";
   String znodo = "SSM_RECRUIT_PRO";
   String znodo2 = "SSM_JOB_POST_PEND";
   String znodo3 = "SSM_JOB_POST_CANC";

   String zventanas = "20";
   int zvuelta = 5;
   String zdireccion = "mss_g3/mss_g3_p1.jsp";
   String zestado = "31";

// Normally not modified.
      
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zmove = znodo + ":" + znodo + "[FIRST]";   
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";   
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";   
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   String ztipocarga = "M4T";
  
// Items to be loaded. You must add all of the ones that you want to view.

  String zSPUESTO = zcomun + "SCO_NM_JOB_POSITION";
  String zSFSOL = zcomun + "SCO_DT_REQUEST";
  String zSFLIM = zcomun + "SCO_DT_LIMIT";
  String zSPROCESO = zcomun + "SCO_OR_RECRUIT_PR";
  String zSNPROCESO = zcomun + "SCO_NM_RECRUITMENT";
  
  String zSSENUMVAC = zcomun2 + "SSE_NUM_VAC";
  String zSTDNJOBCODE = zcomun2 + "STD_N_JOB_CODE";
  String zSTDNWORKLOCATION = zcomun2 + "STD_N_WORK_LOCATION";
  String zSTDNWORKUNIT = zcomun2 + "STD_N_WORK_UNIT";
  
  String zSUELDOMINIMO = zcomun2 + "SUELDO_MINIMO";
  String zSUELDOMAXIMO = zcomun2 + "SUELDO_MAXIMO";
  String zSCODTLIMIT = zcomun2 + "SCO_DT_LIMIT";
  String zSCODTINCORPORATE = zcomun2 + "SCO_DT_INCORPORATE";
  String zNMCURRENCY = zcomun2 + "NM_CURRENCY";
  String zMOVILIDADNAC = zcomun2 + "MOVILIDAD_NAC";
  String zMOVILIDADINT= zcomun2 + "MOVILIDAD_INT";
  String zCONSIDERATIONS = zcomun2 + "SCO_CONSIDERATIONS";
  
  String zSSENUMVAC2 = zcomun3 + "SSE_NUM_VAC";
  String zSTDNJOBCODE2 = zcomun3 + "STD_N_JOB_CODE";
  String zSTDNWORKLOCATION2 = zcomun3 + "STD_N_WORK_LOCATION";
  String zSTDNWORKUNIT2 = zcomun3 + "STD_N_WORK_UNIT";
  
  String zSUELDOMINIMO2 = zcomun3 + "SUELDO_MINIMO";
  String zSUELDOMAXIMO2 = zcomun3 + "SUELDO_MAXIMO";
  String zSCODTLIMIT2 = zcomun3 + "SCO_DT_LIMIT";
  String zSCODTINCORPORATE2 = zcomun3 + "SCO_DT_INCORPORATE";
  String zNMCURRENCY2 = zcomun3 + "NM_CURRENCY";
  String zMOVILIDADNAC2 = zcomun3 + "MOVILIDAD_NAC";
  String zMOVILIDADINT2= zcomun3 + "MOVILIDAD_INT";
  String zCONSIDERATIONS2 = zcomun3 + "SCO_CONSIDERATIONS";
  String zSCOCOMMENT = zcomun3 + "COMMENT";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec> 
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<%
  int  zcount  = 0;
  int  zcounti  = 0;  
  int  zcount2  = 0;
  int  zcounti2  = 0; 
  int  zcount3  = 0;
  int  zcounti3  = 0; 
  try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
    zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
    zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  String  zcountv2 = String.valueOf(zcounti2);
  String  zcountv3 = String.valueOf(zcounti3);
  String zto = new Integer(new Integer(zcountv).intValue()-1).toString();
%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2">Track Open Processes</td></tr>
<tr>
  <td><img alt="Track Open Processes" src="/iconos/nonmae_procesos_selec_abiertos_80_100.gif" width="80" height="100" /></td>
  <td>
  <div class="descripcionfuncional">
  These are the recruitment processes open for the vacancies that have been approved. The status and the applicants included are indicated in the process details.
  Below you can see the vacancies that you have requested, which are pending inclusion in a process.
  </div>
  <ul class="listaenlace">
  <li><a class="enlacefuncional" tabindex="1" title="Go to Jobs" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3">Jobs</a></li>
  </ul>

  </td>
</tr>
</table>
<%  
if (zcounti > 0) {
  String zpos = "0";  
  int zindice = 0;  
%>  
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;Recruitment Process</td>    
  <td>&nbsp;Job Required</td>
  <td>Request Date</td>
  <td>Deadline</td>
</tr>
<m4:loop from="0" to="<%=zto%>">
<%zpos = m4lix;
  zindice = Integer.valueOf(zpos).intValue(); %>

<tr>
  <m4:item m4name="<%=zSPROCESO%>" htmlsafe="true" m4varname="sIdProcSel"/>
  <%sIdProcSel = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdProcSel);%>
  <td class="fuentevalor"><a title = "Process Details" href="javascript:Enviarproceso('<%=sIdProcSel%>', '<%=zindice%>');">&nbsp;<m4:item m4name="<%=zSNPROCESO%>" htmlsafe="true"/></a></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSPUESTO%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSFSOL%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSFLIM%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>
<%@include file="../../sse_generico/english/generico_ventanas.jsp"%>
<%}%>
<br/> <br/>
<% if (zcounti2 > 0) {%>  
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td colspan="4">&nbsp;Requested vacancies pending inclusion in a recruitment process</td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
<tr>
  <td class="fuentecampo">&nbsp;Job Required</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNJOBCODE%>" htmlsafe="true"/></td>
  <td class="fuentecampo">&nbsp;No. of Vacancies</td><td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSSENUMVAC%>" htmlsafe="true"/></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/></td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/></td>
  <td class="fuentecampo">&nbsp;Work Location</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNWORKLOCATION%>" htmlsafe="true"/></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;Min. Salary</td>
  <td class="fuentevalor">
  &nbsp;<m4:item m4name="<%=zSUELDOMINIMO%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zNMCURRENCY%>" htmlsafe="true"/>
  </td>
  <td class="fuentecampo">&nbsp;Max. Salary</td>
  <td class="fuentevalor">
   &nbsp;<m4:item m4name="<%=zSUELDOMAXIMO%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zNMCURRENCY%>" htmlsafe="true"/>
   </td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;Start Date</td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTINCORPORATE%>" htmlsafe="true"/></td>
  <td class="fuentecampo">&nbsp;Deadline</td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTLIMIT%>" htmlsafe="true"/></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;National Mobility</td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zMOVILIDADNAC%>" htmlsafe="true"/></td>
  <td class="fuentecampo">&nbsp;International Mobility</td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zMOVILIDADINT%>" htmlsafe="true"/></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_wiz1Consid")%></td>
  <td class="fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zCONSIDERATIONS%>" htmlsafe="true"/></td>
</tr>
<tr><td class="separadorlinea" colspan="4"><hr /></td></tr>
</m4:loop>
</table>
<%}%>
<br/><br/>
<% if (zcounti3 > 0) {%>  
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td colspan="4">&nbsp;<%=mss_g3.getProperty("Title.mss_g3_p1")%></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
<tr>
  <td class="fuentecampo">&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_Job")%></td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNJOBCODE2%>" htmlsafe="true"/></td>
  <td class="fuentecampo">&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_NumVac")%></td><td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSSENUMVAC2%>" htmlsafe="true"/></td>
</tr>
<tr>
<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTDNWORKUNIT2%>" htmlsafe="true"/></td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNWORKUNIT2%>" htmlsafe="true"/></td>
<td class="fuentecampo">&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_WorkLoc")%></td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNWORKLOCATION2%>" htmlsafe="true"/></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_MinCurr")%> </td>
  <td class="fuentevalor">
  &nbsp;<m4:item m4name="<%=zSUELDOMINIMO2%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zNMCURRENCY2%>" htmlsafe="true"/>
  </td>
  <td class="fuentecampo">&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_MaxCurr")%></td>
  <td class="fuentevalor">
   &nbsp;<m4:item m4name="<%=zSUELDOMAXIMO2%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zNMCURRENCY2%>" htmlsafe="true"/>
   </td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_DtIncorp")%></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTINCORPORATE2%>" htmlsafe="true"/></td>
  <td class="fuentecampo">&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_DtLim")%></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTLIMIT2%>" htmlsafe="true"/></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_NacMov")%></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zMOVILIDADNAC2%>" htmlsafe="true"/></td>
  <td class="fuentecampo">&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_IntMov")%></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zMOVILIDADINT2%>" htmlsafe="true"/></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_wiz1Consid")%></td>
  <td class="fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zCONSIDERATIONS2%>" htmlsafe="true"/></td>
</tr>
<tr>
  <td class="fuentecampo" >&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p1_Comment")%></td><td class="fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCOCOMMENT%>" htmlsafe="true"/></td> 
</tr>


<tr><td class="separadorlinea" colspan="4"><hr /></td></tr>
</m4:loop>
</table>
<%}
if ((zcounti == 0)&&(zcounti2 == 0)){ %>  
<div class="fuentenodatos">You currently have no open recruitment processes, nor vacancies pending inclusion in a recruitment process.</div>
<%}%>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</div>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp" method="post" name="Vacantes" id="Vacantes">
  <input type="hidden" id="PRO" name="PRO" value="" />
  <input type="hidden" id="ACT" name="ACT" value="" />
  <input type="hidden" id="EST" name="EST" value="" />  
</form>
</body>
<m4:endpage/>
</html>


