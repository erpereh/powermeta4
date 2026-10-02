<%@ page import="com.meta4.m4operations.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 TranMsssitional//EN" "DTD/xhtml1-transitional.dtd">
<html>
<%@ include file="/mss_g4/smco_ab_trans.jsp"%>
<head>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<title><%=tranAB.getProperty("filter.pageTitle")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%
  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("smco_ab_vacation_filter: entry");
  oM4Log.debug("# ess request URL: " + request.getRequestURL());

  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zinicios");
  String ai_sFilterIncidence = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "filterIncidence");
  String ai_sFilterWU = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "filterWU");
  String ai_sFilterJob = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "filterJob");
  oM4Log.debug("#   ai_sFilterIncidence: " + ai_sFilterIncidence);
  oM4Log.debug("#   ai_sFilterWU: " + ai_sFilterWU);
  oM4Log.debug("#   ai_sFilterJob: " + ai_sFilterJob);

  if(zinicios==null || zinicios.equals("")){zinicios = "1";}
  if(ai_sFilterIncidence==null){ai_sFilterIncidence = "";}
  if(ai_sFilterWU==null){ai_sFilterWU = "";}
  if(ai_sFilterJob==null){ai_sFilterJob = "";}
  String sReload = "0";
  if(ai_sFilterWU.equals("") && ai_sFilterJob.equals("")){sReload = "1";};

  String ztipocarga = " ";
  String zventanas = "30";
  int zvuelta = 5;
  String zdireccion = "/mss_g4/smco_ab_vacation_filter.jsp";
  String zlink = "/servlet/CheckSecurity/JSP/mss_g4/smco_ab_vacation_filter.jsp";
  int zregistroinicial = Integer.valueOf(zinicios).intValue() - 1;
  int zventana = Integer.valueOf(zventanas).intValue();
  int zregistrofinal = zregistroinicial + zventana - 1;
  String sFirstRegister = String.valueOf(zregistroinicial);

  String sSubSession = "SMCO_AB_ENT_SUMMARY";
  String sM4Object = "SMCO_AB_ENT_SUMMARY";
  String sNodeEmployee = "SMCO_AB_ES_HR_ROLE";
  String sOutputDefEmployee = sM4Object + "!" + sNodeEmployee + "[" + zregistroinicial + "-" + zregistrofinal + "]";
  String sNodeIncidenceList = "SMCO_AB_ES_INCIDENCE";
  String sOutputDefIncidnceList = sM4Object + "!" + sNodeIncidenceList + "[*]";
  String sNodeWUList = "SMCO_AB_ES_WORK_UNIT";
  String sOutputDefWUList = sM4Object + "!" + sNodeWUList + "[*]";
  String sNodeJobList = "SMCO_AB_ES_JOB";
  String sOutputDefJobList = sM4Object + "!" + sNodeJobList + "[*]";
  
  String sIdHR = "";
  String sOrHrPeriod = "";
%>
<m4:page subsessionid="<%=sSubSession%>">
<m4:job>
  <m4:datadef m4o="<%=sM4Object%>" m4name="<%=sM4Object%>"/>
  <m4:exec m4object="<%=sM4Object%>" node="<%=sNodeEmployee%>" method="SCO_LOAD">
    <m4:param name="ARG_SCO_IND_RELOAD" value="<%=sReload%>"/>
    <m4:param name="ARG_SCO_ID_INCIDENCE" value="<%=ai_sFilterIncidence%>"/>
    <m4:param name="ARG_SCO_ID_JOB_CODE" value="<%=ai_sFilterJob%>"/>
    <m4:param name="ARG_SCO_ID_WORK_UNIT" value="<%=ai_sFilterWU%>"/>
  </m4:exec>
  <m4:outputdef m4alias="<%=sNodeEmployee%>"><m4:param name="m4name0" value="<%=sOutputDefEmployee%>"/></m4:outputdef>
  <m4:outputdef m4alias="<%=sNodeIncidenceList%>"><m4:param name="m4name0" value="<%=sOutputDefIncidnceList%>"/></m4:outputdef>
  <m4:outputdef m4alias="<%=sNodeJobList%>"><m4:param name="m4name0" value="<%=sOutputDefJobList%>"/></m4:outputdef>
  <m4:outputdef m4alias="<%=sNodeWUList%>" ><m4:param name="m4name0" value="<%=sOutputDefWUList%>"/></m4:outputdef>
</m4:job>
<%
  int zcounti = 0;
  int zcount = 0;
  int iIncidenceInList = 0;
  int iWUsInList = 0;
  int iJobsInList = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(sNodeEmployee, sM4Object, sNodeEmployee);
    zcounti = m.getCountInClient(sNodeEmployee, sM4Object, sNodeEmployee);
    iIncidenceInList = m.getCountInClient(sNodeIncidenceList, sM4Object, sNodeIncidenceList);
    iWUsInList = m.getCountInClient(sNodeWUList, sM4Object, sNodeWUList);
    iJobsInList = m.getCountInClient(sNodeJobList, sM4Object, sNodeJobList);
  } catch(Exception e) {}
  String sIncidenceInList = String.valueOf(iIncidenceInList - 1);
  String sWUsInList = String.valueOf(iWUsInList - 1);
  String sJobsInList = String.valueOf(iJobsInList - 1);
%>

<script type="text/javascript">
function filterEmployees(){
  var sIdIncidence = m4select("activeIncidence", "formFilter", "value"),
    sIdJob =m4select("activeJob", "formFilter", "value"),
    sIdWU = m4select("activeWU", "formFilter", "value");
  m4valor("oculto", "filterIncidence", sIdIncidence, "set");
  m4valor("oculto", "filterWU", sIdWU, "set");
  m4valor("oculto", "filterJob", sIdJob, "set");
  m4submit("oculto");
}
function gotoManualAdjustment(ai_sIdHR, ai_sPeriodNo){
  var sIdIncidence = m4select("activeIncidence", "formFilter", "value");
  m4valor("hiddenNavigate","filterIncidence", sIdIncidence, "set");
  m4valor("hiddenNavigate", "SCO_ID_HR", ai_sIdHR, "set");
  m4valor("hiddenNavigate", "SCO_OR_HR_PERIOD", ai_sPeriodNo, "set");
  m4submit("hiddenNavigate");
}
</script>
</head>
<body>
<table width="100%" cellspacing="0"> 
  <tr><td class="titulofuncional" colspan="2"><%=tranAB.getProperty("filter.pageTitle")%></td></tr>
  <tr>
    <td><img alt="<%=tranAB.getProperty("filter.pageTitle")%>" title="<%=tranAB.getProperty("filter.pageTitle")%>" src="/iconos/noname_puesto_144_100.gif" width="100" height="100"/></td>
    <td><div class="descripcionfuncional"><%=tranAB.getProperty("filter.description")%></div></td>
  </tr>
</table>
<form action="<%=zlink%>" method="post" name="oculto" id="oculto">
  <input type="hidden" id="filterIncidence" name="filterIncidence" value="<%=ai_sFilterIncidence%>"/>
  <input type="hidden" id="filterWU" name="filterWU" value="<%=ai_sFilterWU%>"/>
  <input type="hidden" id="filterJob" name="filterJob" value="<%=ai_sFilterJob%>"/>
  <input type="hidden" id="zinicios" name="zinicios"/>
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g4/smco_ab_manual_adjustment.jsp" method="post" name="hiddenNavigate" id="hiddenNavigate">
  <input type="hidden" id="filterIncidence" name="filterIncidence" value="<%=ai_sFilterIncidence%>"/>
  <input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR"/>
  <input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD"/>
</form>
<form name="formFilter" id="formFilter" action="">
  <table width="100%" cellspacing="0">
    <tr><td class="tablaestadosceldatitulo"><%=Tran.getProperty("Label.Filter")%></td></tr>
    <tr>
      <td class="fuentecampofiltro" >
        &nbsp;<m4:label htmlsafe="true" get="node" outputdef="<%=sNodeIncidenceList%>"/>:&nbsp;
        <select id="activeIncidence" class="fuenteapartados" onchange="javascript:filterEmployees();" title="<%=tranAB.getProperty("filter.criterionIncidence")%>">
          <m4:loop from="0" to="<%=sIncidenceInList%>"><m4:item item="SCO_ID_INCIDENCE" record="<%=m4lix%>" m4varname="sCurIncidence" outputdef="<%=sNodeIncidenceList%>"/>
          <option value='<m4:item item="SCO_ID_INCIDENCE" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=sNodeIncidenceList%>"/>'<%if(sCurIncidence.equals(ai_sFilterIncidence)){%> selected="selected"<%}%>><m4:item item="SCO_NM_INCIDENCE" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=sNodeIncidenceList%>"/></option>
          </m4:loop>
        </select>
      </td>
    </tr>
    <tr>
      <td class="fuentecampofiltro" >
        &nbsp;<m4:label htmlsafe="true" get="node" outputdef="<%=sNodeWUList%>"/>:&nbsp;
        <select id="activeWU" class="fuenteapartados" onchange="javascript:filterEmployees();" title="<%=tranAB.getProperty("filter.criterionWU")%>">
          <option value=""><%=Tran.getProperty("Label.All")%></option>
          <m4:loop from="0" to="<%=sWUsInList%>"><m4:item item="SCO_ID_WORK_UNIT" record="<%=m4lix%>" m4varname="sCurWU" outputdef="<%=sNodeWUList%>"/>
          <option value='<m4:item item="SCO_ID_WORK_UNIT" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=sNodeWUList%>"/>'<%if(sCurWU.equals(ai_sFilterWU)){%> selected="selected"<%}%>><m4:item item="SCO_N_WORK_UNIT" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=sNodeWUList%>"/></option>
          </m4:loop>
        </select>
      </td>
    </tr>
    <tr>
      <td class="fuentecampofiltro">
        &nbsp;<m4:label htmlsafe="true" get="node" outputdef="<%=sNodeJobList%>"/>:&nbsp;
        <select id="activeJob" class="fuenteapartados" onchange="javascript:filterEmployees();" title="<%=tranAB.getProperty("filter.criterionJob")%>"> 
          <option value=""><%=Tran.getProperty("Label.All")%></option>
          <m4:loop from="0" to="<%=sJobsInList%>"><m4:item item="SCO_ID_JOB_CODE" record="<%=m4lix%>" m4varname="sCurJob" outputdef="<%=sNodeJobList%>"/>
          <option value='<m4:item item="SCO_ID_JOB_CODE" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=sNodeJobList%>"/>'<%if(sCurJob.equals(ai_sFilterJob)){%> selected="selected"<%}%>><m4:item item="SCO_N_JOB_CODE" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=sNodeJobList%>"/></option>
          </m4:loop>
        </select>
      </td>
    </tr>
  </table>
</form>
<form name="NombreFormulario" id="NombreFormulario">
<%  if(zcounti > 0){
  String sClassSuffix = "";%>
  <table width="100%" cellspacing="0">
    <tr>
      <td class="tablaestadosceldatitulo"><m4:label item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=sNodeEmployee%>"/></td>
      <td class="tablaestadosceldatitulo"><m4:label item="SCO_N_ROLE" htmlsafe="true" outputdef="<%=sNodeEmployee%>"/></td>
      <td class="tablaestadosceldatitulo"><m4:label item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="<%=sNodeEmployee%>"/></td>
      <td class="tablaestadosceldatitulo"><m4:label item="SCO_TOT_ENTITLEMENT" htmlsafe="true" outputdef="<%=sNodeEmployee%>"/></td>
      <td class="tablaestadosceldatitulo"><m4:label item="SCO_NUM_MANUAL_ADJUSTMENT" htmlsafe="true" outputdef="<%=sNodeEmployee%>"/></td>
      <td class="tablaestadosceldatitulo"><m4:label item="SCO_TOT_REMAINING" htmlsafe="true" outputdef="<%=sNodeEmployee%>"/></td>
    </tr>
    <m4:dataloop outputdef="<%=sNodeEmployee%>"><m4:current m4varname="current" outputdef="<%=sNodeEmployee%>"/><%if((Integer.valueOf(current).intValue()%2) == 0){sClassSuffix="";}else{sClassSuffix="2";}%>
    <tr><m4:item item="SCO_ID_INCIDENCE" htmlsafe="true" outputdef="<%=sNodeEmployee%>" m4varname="sIncidenceId"/><m4:item item="SCO_IND_ENT_SUMMARY" htmlsafe="true" outputdef="<%=sNodeEmployee%>" m4varname="sIndEntSummary"/>
      <td class="fuentevalor<%=sClassSuffix%>">
        &nbsp;<%if(sIndEntSummary.equals("0")){%>
        <m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=sNodeEmployee%>"/>
        <%}else{%>
        <m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="<%=sNodeEmployee%>" var="sIdHR" />
        <%sIdHR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHR);%>
        <m4:item item="SCO_OR_HR_PERIOD" htmlsafe="true" outputdef="<%=sNodeEmployee%>" var="sOrHrPeriod" />
        <%sOrHrPeriod = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sOrHrPeriod);%>
        <a class="enlacefuncional" title="<%=tranAB.getProperty("filter.linkDetails")%>" href="javascript:gotoManualAdjustment('<%=sIdHR%>','<%=sOrHrPeriod%>')"><m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=sNodeEmployee%>"/></a>
        <%}%>
      </td>
      <td class="fuentevalor<%=sClassSuffix%>">&nbsp;<m4:item item="SCO_N_ROLE" htmlsafe="true" outputdef="<%=sNodeEmployee%>"/></td>
      <td class="fuentevalor<%=sClassSuffix%>">&nbsp;<m4:item item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="<%=sNodeEmployee%>"/></td>
      <%if(sIndEntSummary.equals("0")){%>
      <td class="fuentevalor<%=sClassSuffix%>" colspan="3">&nbsp;<%=tranAB.getProperty("filter.noVacationDetails")%></td>
      <%}else{%>
      <td class="fuentevalor<%=sClassSuffix%>">&nbsp;<m4:item item="SCO_TOT_ENTITLEMENT" htmlsafe="true" outputdef="<%=sNodeEmployee%>"/></td>
      <td class="fuentevalor<%=sClassSuffix%>">&nbsp;<m4:item item="SCO_NUM_MANUAL_ADJUSTMENT" htmlsafe="true" outputdef="<%=sNodeEmployee%>"/></td>
      <td class="fuentevalor<%=sClassSuffix%>">&nbsp;<m4:item item="SCO_TOT_REMAINING" htmlsafe="true" outputdef="<%=sNodeEmployee%>"/></td>
      <%}%>
    </tr>
    </m4:dataloop>
  </table>
  <%@include file="/sse_generico/generico_ventanas_post.jsp"%>
<%  }else{%>
  <div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound")%></div>
  <br/><br/>
<%}%>
</form>

</body>
</html>
</m4:page>
<%oM4Log.debug("smco_ab_vacation_filter: exit");%>