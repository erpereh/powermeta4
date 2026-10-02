<%@ page import="com.meta4.m4operations.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 TranMsssitional//EN" "DTD/xhtml1-transitional.dtd">
<html>
<%@ include file="/mss_g4/smco_ab_trans.jsp"%>
<head>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<title><%=tranAB.getProperty("manualAdjust.pageTitle")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%
  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("smco_ab_manual_adjustment: entry");
  oM4Log.debug("# ess request URL: " + request.getRequestURL());

  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zinicios");
  String ai_sFilterIncidence = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "filterIncidence");
  
  String ai_sHrId = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR");
  String sIdHrEnc = ai_sHrId;
  //desencrypt SCO_ID_HR
  ai_sHrId = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", ai_sHrId);
  
  String ai_sPeriodNo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_PERIOD");
  String sOrHrEnc = ai_sPeriodNo;
  //desencrypt SCO_OR_HR_PERIOD
  ai_sPeriodNo = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", ai_sPeriodNo);

  if(zinicios==null || zinicios.equals("")){zinicios = "1";}
  if(ai_sFilterIncidence==null){ai_sFilterIncidence = "";}
  if(ai_sHrId==null){ai_sHrId = "";}
  if(ai_sPeriodNo==null){ai_sPeriodNo = "";}
  oM4Log.debug("#   ai_sFilterIncidence: " + ai_sFilterIncidence);
  oM4Log.debug("#   ai_sHrId: " + ai_sHrId);
  oM4Log.debug("#   ai_sPeriodNo: " + ai_sPeriodNo);

  String ztipocarga = " ";
  String zventanas = "30";
  int zvuelta = 5;
  String zdireccion = "/mss_g4/smco_ab_manual_adjustment.jsp";
  String zlink = "/servlet/CheckSecurity/JSP/mss_g4/smco_ab_manual_adjustment.jsp";
  String zlinkRedirect = zlink + "?filterIncidence="+ ai_sFilterIncidence + "&SCO_ID_HR=" + sIdHrEnc + "&SCO_OR_HR_PERIOD=" + sOrHrEnc;
  int zregistroinicial = Integer.valueOf(zinicios).intValue() - 1;
  int zventana = Integer.valueOf(zventanas).intValue();
  int zregistrofinal = zregistroinicial + zventana - 1;
  String sFirstRegister = String.valueOf(zregistroinicial);

  String sSubSession = "SMCO_AB_MANUAL_ADJUST";
  String sM4Object = "SMCO_AB_MANUAL_ADJUST";
  String sNodeControl = "SSE_PRINCIPAL";
  String sOutputControl = sM4Object + "!" + sNodeControl + "[*]";
  String sNodeDetails = "M4T_H_HRP_ENT_DETAILS";
  String sOutputDefDetails = sM4Object + "!" + sNodeDetails + "[" + zregistroinicial + "-" + zregistrofinal + "]";
  String sNodeSummary = "M4T_H_HRP_ENT_SUMMARY";
  String sOutputDefSummary = sM4Object + "!" + sNodeSummary + "[*]";
  String sNodeIncidenceList = "M4T_INCIDENCE";
  String sOutputDefIncidnceList = sM4Object + "!" + sNodeIncidenceList + "[*]";
  String sNodeReasonList = "M4T_LU_AB_ADJUSTMENT_REASON";
  String sOutputDefReasonList = sM4Object + "!" + sNodeReasonList + "[*]";

  String zxhi = "";

  String sIDPerson = "", sIDOrd = "";
%>
<m4:page subsessionid="<%=sSubSession%>">
<m4:job>
  <m4:datadef m4o="<%=sM4Object%>" m4name="<%=sM4Object%>"/>
  <m4:exec m4object="<%=sM4Object%>" node="<%=sNodeControl%>" method="SMCO_AB_MANUAL_ADJUST_LOAD">
    <m4:param name="ARG_SCO_ID_INCIDENCE" value="<%=ai_sFilterIncidence%>"/>
    <m4:param name="ARG_SCO_ID_HR" value="<%=ai_sHrId%>"/>
    <m4:param name="ARG_SCO_OR_HR_PERIOD" value="<%=ai_sPeriodNo%>"/>
    <m4:param name="ARG_SCO_YEAR" value=""/>
    <m4:param name="ARG_REDIRECT" value="<%=zlinkRedirect%>"/>
    
  </m4:exec>
  <m4:outputdef m4alias="<%=sNodeDetails%>"><m4:param name="m4name0" value="<%=sOutputDefDetails%>"/></m4:outputdef>
  <m4:outputdef m4alias="<%=sNodeSummary%>"><m4:param name="m4name0" value="<%=sOutputDefSummary%>"/></m4:outputdef>
  <m4:outputdef m4alias="<%=sNodeIncidenceList%>"><m4:param name="m4name0" value="<%=sOutputDefIncidnceList%>"/></m4:outputdef>
  <m4:outputdef m4alias="<%=sNodeReasonList%>"><m4:param name="m4name0" value="<%=sOutputDefReasonList%>"/></m4:outputdef>
</m4:job>
<%
  int zcounti = 0;
  int zcount = 0;
  int iIncidenceInList = 0;
  int iReasonList = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(sNodeDetails, sM4Object, sNodeDetails);
    zcounti = m.getCountInClient(sNodeDetails, sM4Object, sNodeDetails);
    iIncidenceInList = m.getCountInClient(sNodeIncidenceList, sM4Object, sNodeIncidenceList);
    iReasonList = m.getCountInClient(sNodeReasonList, sM4Object, sNodeReasonList);
  } catch(Exception e) {}
  String sIncidenceInList = String.valueOf(iIncidenceInList - 1);
  String sReasonList = String.valueOf(iReasonList - 1);
%>

<script type="text/javascript">
function showEmployeeDetails(ai_sEmployeeId){
  var dir = "/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?&person=" + ai_sEmployeeId;
  window.open(dir, 'Vis', 'width=1015,height=650,left=0,top=50,resizable,scrollbars');
}
function filterDetails(){
  var sIdIncidence = m4select("activeIncidence", "formFilter", "value");
  m4valor("oculto", "filterIncidence", sIdIncidence, "set");
  m4submit("oculto");
}
function newRecord(){
  var sError = "<%=tranAB.getProperty("manualAdjust.error")%>",
    bError = false,
    oValInteger = new RegExp("(^[-]?0$)|(^[-]?[1-9]{1}[0-9]*\\.$)|(^[-]?0\\.$)|(^[-]?[1-9]{1}[0-9]*$)"),
    oUnits = m4objeto("SCO_NUM_UNITS", "formNewAdjustment"),
    oReason = m4objeto("SCO_ID_ADJUSTMENT_REASON", "formNewAdjustment");
  //Units
  if(oUnits.value){
    if(oUnits.value <= -999 || oUnits.value > 999){
      sError = sError + '\n' + "<%=tranAB.getProperty("manualAdjust.error.units.range")%>";
      bError = true;
    }
    if (!oValInteger.test(oUnits.value)){
      sError = sError + '\n' + "<%=tranAB.getProperty("manualAdjust.error.units.decimals")%>";
      bError = true;
    }
  }else{
    //Mandatory
    sError = sError + '\n' + "<%=tranAB.getProperty("manualAdjust.error.units.man")%>";
    bError = true;
  }
  //Reason
  if(!oReason.value){
    sError = sError + '\n' + "<%=tranAB.getProperty("manualAdjust.error.reason.man")%>";
    bError = true;
  }
  if(bError){
    alert(sError);
  }else{
    m4submit('formNewAdjustment');
  }
}
function deleteRecord(ai_sOrdinal){
  m4valor('formNewAdjustment', 'ACC', 'BORRAR', 'set');
  m4valor('formNewAdjustment', 'SCO_OR_DETAIL', ai_sOrdinal, 'set');
  m4submit('formNewAdjustment');
}
</script>
</head>
<body>
<table width="100%" cellspacing="0"> 
  <tr><td class="titulofuncional" colspan="2"><%=tranAB.getProperty("manualAdjust.pageTitle")%></td></tr>
  <tr>
    <td><img alt="<%=tranAB.getProperty("manualAdjust.pageTitle")%>" title="<%=tranAB.getProperty("manualAdjust.pageTitle")%>" src="/iconos/noname_puesto_144_100.gif" width="100" height="100"/></td>
    <td>
      <div class="descripcionfuncional"><%=tranAB.getProperty("manualAdjust.description")%>&nbsp;<a title="<%=tranAB.getProperty("filter.employeeDetails.tooltip")%>" href="javascript:showEmployeeDetails('<%=sIdHrEnc%>','<%=ai_sPeriodNo%>')"><m4:item outputdef="<%=sNodeSummary%>" htmlsafe="true" item="SCO_GB_NAME"/></a></div>
      <ul class="listaenlace">
        <li><a class="enlacefuncional" title="<%=tranAB.getProperty("filter.pageTitle")%>" href="/servlet/CheckSecurity/JSP/mss_g4/smco_ab_vacation_filter.jsp?filterIncidence=<%=ai_sFilterIncidence%>"><%=tranAB.getProperty("filter.pageTitle")%></a></li>
      </ul>
    </td>
  </tr>
</table>
<form action="<%=zlink%>" method="post" name="oculto" id="oculto">
  <input type="hidden" id="filterIncidence" name="filterIncidence" value="<%=ai_sFilterIncidence%>"/>
  <input type="hidden" id="zinicios" name="zinicios"/>
  <input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR" value="<%=sIdHrEnc%>"/>
  <input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD" value="<%=sOrHrEnc%>"/>
</form>
<form name="formFilter" id="formFilter">
  <table width="100%" cellspacing="0">
    <tr><td class="tablaestadosceldatitulo"><%=Tran.getProperty("Label.Filter")%></td></tr>
    <tr>
      <td class="fuentecampofiltro">
        &nbsp;<m4:label htmlsafe="true" get="node" outputdef="<%=sNodeIncidenceList%>"/>:&nbsp;
        <select id="activeIncidence" class="fuenteapartados" onchange="javascript:filterDetails();" title="<%=tranAB.getProperty("filter.criterionIncidence")%>">
          <m4:loop from="0" to="<%=sIncidenceInList%>"><m4:item item="SCO_ID_INCIDENCE" record="<%=m4lix%>" m4varname="sCurIncidence" outputdef="<%=sNodeIncidenceList%>"/>
          <option value='<m4:item item="SCO_ID_INCIDENCE" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=sNodeIncidenceList%>"/>'<%if(sCurIncidence.equals(ai_sFilterIncidence)){%> selected="selected"<%}%>><m4:item item="SCO_NM_INCIDENCE" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=sNodeIncidenceList%>"/></option>
          </m4:loop>
        </select>
      </td>
    </tr>
  </table>
</form>
<table width="100%" cellspacing="0"><m4:item outputdef="<%=sNodeSummary%>" item="SCO_NUM_MAX_CFWD" m4varname="sNumMaxCfwd"/>
  <tr><td class="tablaestadosceldatitulo" colspan="6"><m4:label htmlsafe="true" get="node" outputdef="<%=sNodeSummary%>"/></td></tr>
  <tr>
    <td class="fuentecampo">&nbsp;<m4:label htmlsafe="true" item="SCO_DT_START" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="SCO_DT_START" record="0" htmlsafe="true" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentecampo">&nbsp;<m4:label htmlsafe="true" item="SCO_DT_END" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentevalor" colspan="3">&nbsp;<m4:item item="SCO_DT_END" record="0" htmlsafe="true" outputdef="<%=sNodeSummary%>"/></td>
  </tr>
  <tr>
    <td class="fuentecampo">&nbsp;<m4:label htmlsafe="true" item="SCO_NUM_ENTITLEMENT" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentevalor"<%if(!sNumMaxCfwd.equals("0")){%> colspan="5"<%}%>>&nbsp;<m4:item item="SCO_NUM_ENTITLEMENT" record="0" htmlsafe="true" outputdef="<%=sNodeSummary%>"/></td>
    <%if(sNumMaxCfwd.equals("0")){%>
    <td class="fuentecampo">&nbsp;<m4:label htmlsafe="true" item="SCO_NUM_EXPIRATION_ENTITLEMENT" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="SCO_NUM_EXPIRATION_ENTITLEMENT" record="0" htmlsafe="true" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentecampo">&nbsp;<m4:label htmlsafe="true" item="SCO_DT_EXPIRY_ENTITLEMENT" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="SCO_DT_EXPIRY_ENTITLEMENT" record="0" htmlsafe="true" outputdef="<%=sNodeSummary%>"/></td>
    <%}%>
  </tr>
  <%if(!sNumMaxCfwd.equals("0")){%>
  <tr>
    <td class="fuentecampo">&nbsp;<m4:label htmlsafe="true" item="SCO_NUM_ENTITLEMENT_N1" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="SCO_NUM_ENTITLEMENT_N1" record="0" htmlsafe="true" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentecampo">&nbsp;<m4:label htmlsafe="true" item="SCO_DT_EXPIRY_ENTITLEMENT_N1" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentevalor" colspan="3">&nbsp;<m4:item item="SCO_DT_EXPIRY_ENTITLEMENT_N1" record="0" htmlsafe="true" outputdef="<%=sNodeSummary%>"/></td>
  </tr>
  <%}%>
  <tr>
    <td class="fuentecampo">&nbsp;<m4:label htmlsafe="true" item="SCO_NUM_MANUAL_ADJUSTMENT" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="SCO_NUM_MANUAL_ADJUSTMENT" record="0" htmlsafe="true" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentecampo">&nbsp;<m4:label htmlsafe="true" item="SCO_NUM_USED" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="SCO_NUM_USED" record="0" htmlsafe="true" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentecampo">&nbsp;<m4:label htmlsafe="true" item="SCO_TOT_REMAINING" outputdef="<%=sNodeSummary%>"/></td>
    <td class="fuentevalor">&nbsp;<m4:item item="SCO_TOT_REMAINING" record="0" htmlsafe="true" outputdef="<%=sNodeSummary%>"/></td>
  </tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="formNewAdjustment" id="formNewAdjustment">
  <input type="hidden" id="TAG" name="TAG" value="<%=sM4Object%>"/>
  <input type="hidden" id="ACC" name="ACC" value="INSERTAR"/>
  <input type="hidden" id="NOD" name="NOD" value="SSE_H_HRP_ENT_DETAILS"/>
  <input type="hidden" id="filterIncidence" name="filterIncidence" value="<%=ai_sFilterIncidence%>"/>
  <input type="hidden" id="zinicios" name="zinicios"/>
  <input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR" value="<%=ai_sHrId%>"/>
  <input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD" value="<%=ai_sPeriodNo%>"/>
  <input type="hidden" id="SCO_ID_INCIDENCE" name="SCO_ID_INCIDENCE" value="<%=ai_sFilterIncidence%>"/>
  <input type="hidden" id="SCO_OR_DETAIL" name="SCO_OR_DETAIL"/>
  <table class="tablaestados" width="100%" cellspacing="0">
    <tr class="tablaestadosceldatitulo"><td colspan="4"><%=tranAB.getProperty("manualAdjust.titleNew")%></td></tr>
    <tr>
      <td class="fuentecampo"><label for="SCO_NUM_UNITS">&nbsp;*&nbsp;<m4:label htmlsafe="true" item="SCO_NUM_UNITS" outputdef="<%=sNodeDetails%>"/></label></td>
      <td class="fuentecampo">
        <input class="fuenteformulario" type="text" name="SCO_NUM_UNITS" id="SCO_NUM_UNITS" title='<m4:label htmlsafe="true" item="SCO_NUM_UNITS" outputdef="<%=sNodeDetails%>"/>' maxlength="10" size="10" value=""/>
      </td>
      <td class="fuentecampo"><label for="SCO_ID_ADJUSTMENT_REASON">&nbsp;*&nbsp;<m4:label htmlsafe="true" item="SCO_ID_ADJUSTMENT_REASON" outputdef="<%=sNodeDetails%>"/></label></td>
      <td class="fuentecampo">
        <select class="fuenteformulario" id="SCO_ID_ADJUSTMENT_REASON" name="SCO_ID_ADJUSTMENT_REASON" title='<m4:label htmlsafe="true" item="SCO_ID_ADJUSTMENT_REASON" outputdef="<%=sNodeDetails%>"/>'>
          <option value=""></option>
          <m4:loop from="0" to="<%=sReasonList%>">
          <option value='<m4:item item="SCO_ID_ADJUSTMENT_REASON" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=sNodeReasonList%>"/>'><m4:item item="SCO_NM_ADJUSTMENT_REASON" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=sNodeReasonList%>"/></option>
          </m4:loop>
        </select>
      </td>
    </tr>
    <tr>
      <td class="fuenteboton" align="center" colspan="4">&nbsp;<a href="javascript:newRecord();"><img alt="<%=Tran.getProperty("Button.Send")%>" title="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal(this)" onmouseout="m4oscuridad(this)"/></a></td>
    </tr>
  </table>
</form>
<form name="NombreFormulario" id="NombreFormulario">
<%  if(zcounti > 0){
  String sClassSuffix = "";%>
  <table width="100%" cellspacing="0">
    <tr>
      <td class="tablaestadosceldatitulo"><m4:label item="SCO_DT_OPERATION" htmlsafe="true" outputdef="<%=sNodeDetails%>"/></td>
      <td class="tablaestadosceldatitulo"><m4:label item="SCO_NUM_UNITS" htmlsafe="true" outputdef="<%=sNodeDetails%>"/></td>
      <td class="tablaestadosceldatitulo" colspan="2"><m4:label item="SCO_NM_ADJUSTMENT_REASON" htmlsafe="true" outputdef="<%=sNodeDetails%>"/></td>
    </tr>
    <m4:dataloop outputdef="<%=sNodeDetails%>"><m4:current m4varname="current" outputdef="<%=sNodeDetails%>"/><%if((Integer.valueOf(current).intValue()%2) == 0){sClassSuffix="";}else{sClassSuffix="2";}%>
    <tr>
      <td class="fuentevalor<%=sClassSuffix%>">&nbsp;<m4:item item="SCO_DT_OPERATION" htmlsafe="true" outputdef="<%=sNodeDetails%>"/></td>
      <td class="fuentevalor<%=sClassSuffix%>">&nbsp;<m4:item item="SCO_NUM_UNITS" htmlsafe="true" outputdef="<%=sNodeDetails%>"/></td>
      <td class="fuentevalor<%=sClassSuffix%>">&nbsp;<m4:item item="SCO_NM_ADJUSTMENT_REASON" htmlsafe="true" outputdef="<%=sNodeDetails%>"/></td>
      <td class="fuentebotonright<%=sClassSuffix%>">
        <a title="<%=tranAB.getProperty("manualAdjust.deleteRegister")%>" href="javascript:deleteRecord('<m4:item item="SCO_OR_DETAIL" jsafe="true" htmlsafe="true" outputdef="<%=sNodeDetails%>"/>');">
        <img class="tablamenuright" alt="<%=tranAB.getProperty("manualAdjust.deleteRegister")%>" src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"/>
      </a>
      </td>
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
<%oM4Log.debug("smco_ab_manual_adjustment: exit");%>