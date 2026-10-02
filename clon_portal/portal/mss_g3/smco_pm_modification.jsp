<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%@ page import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ include file="/sse_generico/sgco_gen_inc.jsp" %>
<%@ include file="/mss_generico/mss_generico_trans.jsp" %>
<%@ include file="/mss_generico/smco_pm_trans.jsp"%>
<%@ include file="/mss_g3/mss_g3_trans.jsp"%>
<head>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<%
  response.setDateHeader("Expires", -1);

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("smco_pm_modification: entry");
  oM4Log.debug("# ess request URL: " + request.getRequestURL());
  oM4Log.debug("#   query string: " + request.getQueryString());
  //PM Type ID
  String ai_sPmTypeId = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pmType");   
  oM4Log.debug("  ai_sPmTypeId: " + ai_sPmTypeId);
  if (ai_sPmTypeId == null) {ai_sPmTypeId = "";}
  //Flag: workflow with pre-validation
  String ai_sPreValidation = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bPreVal");   
  oM4Log.debug("  ai_sPreValidation: " + ai_sPreValidation);
  if (ai_sPreValidation == null || ai_sPreValidation.equals("")) {ai_sPreValidation = "0";}
  //Flag: workflow with post-validation
  String ai_sPostValidation = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bPostVal");   
  oM4Log.debug("  ai_sPostValidation: " + ai_sPostValidation);
  if (ai_sPostValidation == null || ai_sPostValidation.equals("")) {ai_sPostValidation = "0";}
  //Flag: petition can be rejected by HR
  String ai_sDeniable = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bDeniable");   
  oM4Log.debug("  ai_sDeniable: " + ai_sDeniable);
  if (ai_sDeniable == null || ai_sDeniable.equals("")) {ai_sDeniable = "1";}
  //Flag: show all including archived petitions
  String ai_sLoadActive = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bActive");   
  oM4Log.debug("  ai_sLoadActive: " + ai_sLoadActive);
  if (ai_sLoadActive == null || ai_sLoadActive.equals("")) {ai_sLoadActive = "1";}

  //Variables to handle table
  String ai_sTabFirstRecord = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ai_sTabFirstRecord");  
  oM4Log.debug("  ai_sTabFirstRecord: " + ai_sTabFirstRecord);
  if(ai_sTabFirstRecord==null || ai_sTabFirstRecord.equals("")){ai_sTabFirstRecord = "1";}
  int iFirstRecord = Integer.valueOf(ai_sTabFirstRecord).intValue();
  iFirstRecord = iFirstRecord - 1;
  String sTabPageSize = "15";
  int iTabPageSize = Integer.valueOf(sTabPageSize).intValue();
  int iTabPagesPerLine = 5;
  String sTabCurrentUrl = "mss_g3/smco_pm_modification.jsp";
  int iLastRecord = iFirstRecord + iTabPageSize - 1;
  String sThisPage = "/servlet/CheckSecurity/JSP/" + sTabCurrentUrl;
  String sRedirectPage = "/servlet/CheckSecurity/JSP/mss_generico/smco_pm_redirect.jsp?ID_WORKITEM=";

  //Variable to handle M4Object access
  String sSubSession = "SRCO_PA_MODIFICATION";  //Same as M4Object because page generico_actualizar utiliza M4Object ID as subsession and should use this instance!
  String sM4ObjectPM = sSubSession;
  String sNodePmApi = "SRCO_PA_MODIFICATION";
  String sNodePmType = "SRCO_PA_PM_TYPE";
  String sNodePmRequest = "SRCO_PA_PM_H_HRP_REQUEST";
  String sItemPmTypeId = sM4ObjectPM + "!" + sNodePmApi + ".SRCO_ID_PM_TYPE";
  String sMethodLoadType = "SRCO_LOAD_TYPE";
  String sMethodLoadRequest = "SRCO_LOAD_BY_HR_CONNECTED";
  String sResultLoadType;
  String sResultLoadRequest;
  String sOutputDefPmApi = sM4ObjectPM + "!" + sNodePmApi + "[*]";
  String sOutputDefPmType = sM4ObjectPM + "!" + sNodePmType + "[*]";
  String sOutputDefPmRequest = sM4ObjectPM + "!" + sNodePmRequest + "[" + iFirstRecord + "-" + iLastRecord + "]";
  String sFilterPmType = "If SCO_ID_PM_TYPE = \"" + ai_sPmTypeId + "\" Then Return(1)";
  String sFilterPmTypeId = sM4ObjectPM + "!" + sNodePmType + ".Filter";

  String sM4ObjectEeeList = "SMCO_TR_EMPLOYEE";
  String sNodeEeeList = "SMCO_TR_EMPLOYEE";
  String sMethodLoadEeeList = "SCO_LOAD";
  String sOutputDefEeeList = sM4ObjectEeeList + "!" + sNodeEeeList + "[*]";
%>
<m4:page subsessionid="<%=sSubSession%>">
<m4:job>
  <m4:datadef m4name="<%=sM4ObjectPM%>" m4o="<%=sM4ObjectPM%>"/>
  <m4:setitems>
    <m4:param name="<%=sItemPmTypeId%>" value="<%=ai_sPmTypeId%>"/>
  </m4:setitems>
  <m4:exec m4object="<%=sM4ObjectPM%>" node="<%=sNodePmApi%>" method="<%=sMethodLoadType%>" alias="<%=sMethodLoadType%>"/>
  <m4:outputdef m4alias="<%=sNodePmApi%>"><m4:param name="M4NAME0" value="<%=sOutputDefPmApi%>"/></m4:outputdef>
  <m4:filter m4name="<%=sFilterPmTypeId%>" m4filter="<%=sFilterPmType%>"/>
  <m4:outputdef m4alias="<%=sNodePmType%>"><m4:param name="M4NAME0" value="<%=sOutputDefPmType%>"/></m4:outputdef>
  <m4:removefilter m4name="<%=sFilterPmTypeId%>"/>

  <m4:exec m4object="<%=sM4ObjectPM%>" node="<%=sNodePmRequest%>" method="<%=sMethodLoadRequest%>" alias="<%=sMethodLoadRequest%>">
    <m4:param name="ARG_SCO_ID_PM_TYPE" value="<%=ai_sPmTypeId%>"/>
    <m4:param name="ARG_SCO_IND_LOAD_ACTIVE" value="<%=ai_sLoadActive%>"/>
  </m4:exec>
  <m4:outputdef m4alias="<%=sNodePmRequest%>"><m4:param name="M4NAME0" value="<%=sOutputDefPmRequest%>"/></m4:outputdef>

  <m4:datadef m4name="<%=sM4ObjectEeeList%>" m4o="<%=sM4ObjectEeeList%>"/>
  <m4:exec m4object="<%=sM4ObjectEeeList%>" node="<%=sNodeEeeList%>" method="<%=sMethodLoadEeeList%>" alias="<%=sMethodLoadEeeList%>">
    <m4:param name="ARG_SCO_IND_RELOAD" value="1"/>
  </m4:exec>
  <m4:outputdef m4alias="<%=sNodeEeeList%>"><m4:param name="M4NAME0" value="<%=sOutputDefEeeList%>"/></m4:outputdef>
</m4:job>
<m4:outputexec alias="<%=sMethodLoadType%>" var="sResultLoadType"/>
<m4:outputexec alias="<%=sMethodLoadRequest%>" var="sResultLoadRequest"/>
<m4:move outputdef="<%=sNodePmType%>" record="0"/>
<m4:item outputdef="<%=sNodePmType%>" item="SCO_ID_BPC" m4varname="sTypeBpcId"/>
<m4:item outputdef="<%=sNodePmType%>" item="SCO_URL" m4varname="sTypeUrl"/>
<%//Validate result of load
if(!sResultLoadType.equals("1") || sTypeBpcId.equals("") || sTypeUrl.equals("")){
  //Load failed, type (ai_sPmTypeId) seems to be invalid
  oM4Log.debug("  Load of type failed, invalid!");%>
  <title><%=tranPM.getProperty("filter.pageTitle")%></title>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <table border="0" width="100%">
      <tr><td class="titulofuncional" colspan="3"><%=tranPM.getProperty("filter.pageTitle")%></td></tr>
      <tr>
        <td><img alt="<%=tranPM.getProperty("filter.pageTitle")%>" title="<%=tranPM.getProperty("filter.pageTitle")%>" src="/iconos/error.gif" width="65" height="65" /></td>
        <td>&nbsp;</td>
        <td><div class="descripcionfuncional"><%=tranPM.getProperty("filter.descriptionError")%></div></td>
      </tr>
    </table>
  </body>
<%}else{
  //Type valid
  int iEmployees = 0;
  String sEmployees = "0";
  String sHrId, sName, sPeriodNo, sRoleNo;
  try {
    M4Operations oM4Operations = new M4Operations(request);
    iEmployees = oM4Operations.getCountInClient(sNodeEeeList, sM4ObjectEeeList, sNodeEeeList);
    sEmployees = String.valueOf(iEmployees - 1);
  } catch(Exception e) {
    oM4Log.error("  error: ", e);
  }%>
  <m4:item outputdef="<%=sNodePmType%>" item="SCO_IND_NEEDS_DATE" m4varname="sNeedsDates"/>
  <m4:item outputdef="<%=sNodePmType%>" item="SCO_IND_PERMANENT" m4varname="sPermanent"/>
  <m4:item outputdef="<%=sNodePmType%>" item="SCO_IND_TEMPORARY" m4varname="sTemporary"/>
  <m4:item outputdef="<%=sNodePmApi%>" item="SRCO_ID_DURATION" m4varname="sDuration"/>
  <title><%=tranPM.getProperty("filter.pageTitle" + ai_sPmTypeId)%></title>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <table border="0" width="100%">
      <tr><td class="titulofuncional" colspan="3"><%=tranPM.getProperty("filter.pageTitle" + ai_sPmTypeId)%></td></tr>
      <tr>
        <td><img alt="<%=tranPM.getProperty("filter.pageTitle" + ai_sPmTypeId)%>" title="<%=tranPM.getProperty("filter.pageTitle" + ai_sPmTypeId)%>" src="/iconos/noname_solicitar_vacantes_210_100.gif" width="100" height="100" /></td>
        <td>&nbsp;</td>
        <td><div class="descripcionfuncional"><%=tranPM.getProperty("filter.description" + ai_sPmTypeId)%></div></td>
      </tr>
    </table>
    <form action="/servlet/CheckSecurity/JSP/mss_g3/smco_pm_gen_act_desencrypt.jsp" method="post" name="formNewPetition" id="formNewPetition">
      <input type="hidden" id="TAG" name="TAG" value="<%=sSubSession%>"/>
      <input type="hidden" id="ACC" name="ACC" value="NEW"/>
      <input type="hidden" id="NOD" name="NOD" value="SRCO_PA_MODIFICATION"/>
      <input type="hidden" id="SRCO_ID_PM_TYPE" name="SRCO_ID_PM_TYPE" value="<%=ai_sPmTypeId%>"/>
      <input type="hidden" id="SCO_REDIRECT" name="SCO_REDIRECT" value="<%=sThisPage%>"/>
      <input type="hidden" id="SCO_IND_PREVALIDATION" name="SCO_IND_PREVALIDATION" value="<%=ai_sPreValidation%>"/>
      <input type="hidden" id="SCO_IND_POSTVALIDATION" name="SCO_IND_POSTVALIDATION" value="<%=ai_sPostValidation%>"/>
      <input type="hidden" id="SCO_IND_DENIABLE" name="SCO_IND_DENIABLE" value="<%=ai_sDeniable%>"/>
      <input type="hidden" id="SCO_IND_LOAD_ACTIVE" name="SCO_IND_LOAD_ACTIVE" value="<%=ai_sLoadActive%>"/>
      <table class="tablaestados" width="100%" cellspacing="0">
        <tr class="tablaestadosceldatitulo"><td colspan="4"><%=tranPM.getProperty("filter.newPetition")%></td></tr>
        <%if(sNeedsDates.equals("1")){
          //Dates required
          if(sPermanent.equals("1") && sTemporary.equals("1")){
            //Permanent and temporary change possible, show radiobuttons to select type (SRCO_ID_DURATION)%>
            <tr>
              <td class="fuentecampo"><label for="SRCO_ID_DURATION"><%=tranPM.getProperty("filter.duration")%></label></td>
              <td class="fuentecampo" colspan="3">
                <input class="fuenteformulario" type="radio" name="SRCO_ID_DURATION" id="SRCO_ID_DURATION" title="<%=tranPM.getProperty("filter.duration.permanent")%>" value"1"/><%=tranPM.getProperty("filter.duration.permanent")%>
                <input class="fuenteformulario" type="radio" name="SRCO_ID_DURATION" id="SRCO_ID_DURATION" title="<%=tranPM.getProperty("filter.duration.temporary")%>" value"2"/><%=tranPM.getProperty("filter.duration.temporary")%>
              </td>
            </tr>
          <%}else{%>
            <input type="hidden" id="SRCO_ID_DURATION" name="SRCO_ID_DURATION" value="<%=sDuration%>"/>
          <%}
          if(sDuration.equals("1")){
            //Permanent change%>
            <tr>
              <td class="fuentecampo"><label for="SRCO_AS_AT_DATE">&nbsp;*&nbsp;<%=tranPM.getProperty("filter.asAtDate")%></label></td>
              <td class="fuentecampo" colspan="3">
                <input class="fuenteformulario" type="text" name="SRCO_AS_AT_DATE" id="SRCO_AS_AT_DATE" title="<%=tranPM.getProperty("filter.asAtDate.input.tooltip")%>" maxlength="10" size="10" value=""/>
                <a href="javascript:m4calendario(m4objeto('SRCO_AS_AT_DATE','formNewPetition'))">
                  <img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=tranPM.getProperty("filter.asAtDate.button.tooltip")%>" title="<%=tranPM.getProperty("filter.asAtDate.button.tooltip")%>"/>
                </a>
              </td>
            </tr>
          <%}else if(sDuration.equals("2")){
            //Temporary change%>
            <tr>
              <td class="fuentecampo"><label for="SRCO_DT_START">&nbsp;*&nbsp;<%=tranPM.getProperty("filter.asStartDate")%></label></td>
              <td class="fuentecampo">
                <input class="fuenteformulario" type="text" name="SRCO_DT_START" id="SRCO_DT_START" title="<%=tranPM.getProperty("filter.asStartDate.input.tooltip")%>" maxlength="10" size="10" value=""/>
                <a href="javascript:m4calendario(m4objeto('SRCO_DT_START','formNewPetition'))">
                  <img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=tranPM.getProperty("filter.asStartDate.button.tooltip")%>" title="<%=tranPM.getProperty("filter.asStartDate.button.tooltip")%>"/>
                </a>
              </td>
              <td class="fuentecampo"><label for="SRCO_DT_END">&nbsp;*&nbsp;<%=tranPM.getProperty("filter.asEndDate")%></label></td>
              <td class="fuentecampo">
                <input class="fuenteformulario" type="text" name="SRCO_DT_END" id="SRCO_DT_END" title="<%=tranPM.getProperty("filter.asEndDate.input.tooltip")%>" maxlength="10" size="10" value=""/>                 <a href="javascript:m4calendario(m4objeto('SRCO_DT_END','formNewPetition'))">
                  <img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=tranPM.getProperty("filter.asEndDate.button.tooltip")%>" title="<%=tranPM.getProperty("filter.asEndDate.button.tooltip")%>"/>
                </a>
              </td>
            </tr>
          <%}
        }%>
        <tr>
          <td class="fuentecampo"><label for="SRCO_ID_HR">&nbsp;*&nbsp;<%=tranPM.getProperty("filter.employee")%></label></td>
          <td class="fuentevalor" colspan="3">
            <select class="fuenteformulario" id="SRCO_ID_HR" name="SRCO_ID_HR" title="<%=tranPM.getProperty("filter.employee.combo.tooltip")%>">
              <option value=""></option>
              <m4:loop from="0" to="<%=sEmployees%>">
              <m4:item outputdef="<%=sNodeEeeList%>" item="SCO_ID_HR" record="<%=m4lix%>" var="sHrId" htmlsafe="true"/>
              <m4:item outputdef="<%=sNodeEeeList%>" item="SCO_GB_NAME" record="<%=m4lix%>" var="sName" htmlsafe="true"/>
              <m4:item outputdef="<%=sNodeEeeList%>" item="SCO_OR_HR_PERIOD" record="<%=m4lix%>" var="sPeriodNo" htmlsafe="true"/>
              <m4:item outputdef="<%=sNodeEeeList%>" item="SCO_OR_HR_ROLE" record="<%=m4lix%>" var="sRoleNo" htmlsafe="true"/>
              <%sHrId = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sHrId);%>
              <option value="<%=sHrId%>{SRCO_OR_HR_PERIOD=<%=sPeriodNo%>{SRCO_OR_HR_ROLE=<%=sRoleNo%>"><%=sName%></option>
              </m4:loop>
            </select>
          </td>
        </tr>
        <tr>
          <td class="fuenteboton" align="center" colspan="4">&nbsp;<a href="javascript:newPetition(<%=sNeedsDates%>);"><img alt="<%=tranPM.getProperty("filter.send.button.tooltip")%>" title="<%=tranPM.getProperty("filter.send.button.tooltip")%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal(this)" onmouseout="m4oscuridad(this)"/></a></td>
        </tr>
      </table>
    </form>
  <%if(!sResultLoadRequest.equals("0")){
    String sClassSuffix = "";%>
    <table class="tablaestados" width="100%" cellspacing="0">
      <tr>
        <td colspan="5" class="descripcionfuncional">
          <img style="margin-top: 2px; visibility:hidden; display: none" id="imgLoadActive" name="imgLoadActive" src="/iconos/spinner.gif" height="16px" width="16px"/>
          <input type="checkbox" name="chkLoadActive" id="chkLoadActive" value="<%=ai_sLoadActive%>" title="<%=tranPM.getProperty("filter.table.showAll.tooltip")%>" onclick="javascript:filterActive(<%=ai_sLoadActive%>)" <%if(!ai_sLoadActive.equals("1")){%>checked<%}%>/><%=tranPM.getProperty("filter.table.showAll")%>
        </td>
      </tr>
      <tr>
        <td class="tablaestadosceldatitulo"><m4:label item="SRCO_N_STATE" htmlsafe="true" outputdef="<%=sNodePmRequest%>"/></td>
        <td class="tablaestadosceldatitulo"><m4:label item="SRCO_DT_LAST_ACTION" htmlsafe="true" outputdef="<%=sNodePmRequest%>"/></td>
        <%if(sNeedsDates.equals("1")){%><td class="tablaestadosceldatitulo"><m4:label item="SCO_DT_START" htmlsafe="true" outputdef="<%=sNodePmRequest%>"/></td><%}%>
        <td class="tablaestadosceldatitulo" colspan="2"><m4:label item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=sNodePmRequest%>"/></td>
      </tr>
      <m4:dataloop outputdef="<%=sNodePmRequest%>"><m4:current m4varname="current" outputdef="<%=sNodePmRequest%>"/>
        <m4:item outputdef="<%=sNodePmRequest%>" item="ID_BPO_STATUS" m4varname="sIdBpoStatus"/>
        <m4:item outputdef="<%=sNodePmRequest%>" item="SRCO_ICON_KEY" m4varname="sIconKey"/>
        <m4:item outputdef="<%=sNodePmRequest%>" item="SCO_IND_ARCHIVE" m4varname="sIndArchive"/>
        <m4:item outputdef="<%=sNodePmRequest%>" item="SRCO_IND_CANCEL" m4varname="sIndCancel"/>
        <m4:item outputdef="<%=sNodePmRequest%>" item="SRCO_ID_WORKITEM" m4varname="sWorkitem"/>
        <m4:item outputdef="<%=sNodePmRequest%>" item="SRCO_ID_TASK" m4varname="sTaskId"/><%
        boolean bMyTask = (sTaskId.equals("SMCO_WF_PM_COMPLETE_PETITION")&&!sWorkitem.equals(""));
        String sStatusIcon = "";
        if(sIconKey.equals("7")){ //ok
          sStatusIcon = "lu_ok_16.png";
        }else if(sIconKey.equals("8")){ //cancelled
          sStatusIcon = "lu_close_1_16.png";
        }else{
          sStatusIcon = (sIdBpoStatus.equals("")) ? "lu_trash_16.png" : ((bMyTask) ? "lu_gear_1_16.png" : "lu_gear_2_16.png");
        }
        if((Integer.valueOf(current).intValue()%2) == 0){sClassSuffix="";}else{sClassSuffix="2";}%>
        <tr>
          <td class="fuentevalor<%=sClassSuffix%>">&nbsp;<%if(!sStatusIcon.equals("")){%><img class="tablamenuright" alt="<m4:item item="SRCO_N_STATE" htmlsafe="true" outputdef="<%=sNodePmRequest%>"/>" src="/iconos/<%=sStatusIcon%>" height="16" width="16"/><%}%>
            <%if(sTaskId.equals("SMCO_WF_PM_COMPLETE_PETITION")&&!sWorkitem.equals("")){
              String sUrl = sRedirectPage + URLEncoder.encode(sWorkitem, "UTF-8");%>
              <a href="<%=sUrl%>" title="<m4:item item="SRCO_STATE_DESC" htmlsafe="true" outputdef="<%=sNodePmRequest%>"/>">
                <m4:item item="SRCO_N_STATE" htmlsafe="true" outputdef="<%=sNodePmRequest%>"/>
              </a><%}
            else{%>
              <m4:item item="SRCO_N_STATE" htmlsafe="true" outputdef="<%=sNodePmRequest%>"/>
            <%}%>
          </td>
          <td class="fuentevalor<%=sClassSuffix%>">&nbsp;<m4:item item="SRCO_DT_LAST_ACTION" htmlsafe="true" outputdef="<%=sNodePmRequest%>"/></td>
          <%if(sNeedsDates.equals("1")) {%><td class="fuentevalor<%=sClassSuffix%>" >&nbsp;<m4:item item="SCO_DT_START" htmlsafe="true" outputdef="<%=sNodePmRequest%>"/></td><%}%>
          <td class="fuentevalor<%=sClassSuffix%>">&nbsp;<m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=sNodePmRequest%>"/></td>
          <td class="fuentebotonright<%=sClassSuffix%>"><%
            if(sIndCancel.equals("1")){%>
              <a title="<%=tranPM.getProperty("filter.table.cancel.tooltip")%>" href="javascript:cancelPetition(<m4:item item="SCO_OR_REQUEST" htmlsafe="true" outputdef="<%=sNodePmRequest%>" jsafe="true"/>);">
                <img class="tablamenuright" alt="<%=tranPM.getProperty("filter.table.cancel.tooltip")%>" src="/iconos/lu_cancel_16.png" height="16" width="16" onmouseover="javascript:this.src='/iconos/lu_cancel_16_hot.png';" onmouseout="javascript:this.src='/iconos/lu_cancel_16.png';"/>
              </a><%
            }else if(!sIdBpoStatus.equals("1") && !sIndArchive.equals("1")) {%>
              <a title="<%=tranPM.getProperty("filter.table.archive.tooltip")%>" href="javascript:archivePetition(<m4:item item="SCO_OR_REQUEST" htmlsafe="true" outputdef="<%=sNodePmRequest%>" jsafe="true"/>);">
                <img class="tablamenuright" alt="<%=tranPM.getProperty("filter.table.archive.tooltip")%>" src="/iconos/lu_diskette_16.png" height="16" width="16" onmouseover="javascript:this.src='/iconos/lu_diskette_16_hot.png';" onmouseout="javascript:this.src='/iconos/lu_diskette_16.png';"/>
              </a>
            <%}%>
          </td>
        </tr>
      </m4:dataloop>
    </table>
    <table class="tablanavegacion" border="1" width="100%" cellspacing="0">
      <tr><%
        int iCount = 0;
        try {
          M4Operations m = new M4Operations(request);
          iCount = m.getCount(sNodePmRequest, sSubSession, sNodePmRequest);
        } catch(Exception e) {}
        int iTabPages = iCount / iTabPageSize;
        int iTabRemainder = iCount % iTabPageSize;
        int iPageCount = 0;
        if (iTabRemainder > 0) {iTabPages = iTabPages + 1;}
        for (int i = 0; i < iTabPages; i++) {
          String sIntervalStart = String.valueOf(1 + i * iTabPageSize);
          int iIntervalEnd = i * iTabPageSize + iTabPageSize;
          String sRealIntevalEnd = String.valueOf(iIntervalEnd);
          if (iIntervalEnd > iCount) {
            sRealIntevalEnd = String.valueOf(i * iTabPageSize + iTabRemainder);
          }
          if(iPageCount == iTabPagesPerLine){%>
            </tr><tr><%
            iPageCount = 0;
          }
          if (ai_sTabFirstRecord.equals(sIntervalStart) == true){%>
            <td class="fuentebarraregistrosanulado"><%=sIntervalStart%>&nbsp;-&nbsp;<%=sRealIntevalEnd%></td>
          <%}else{%>
            <td class="fuentebarraregistros"><a href="javascript:parametros=['ai_sTabFirstRecord','pmType','bPreVal','bPostVal','bDeniable','bActive'];valores=['<%=sIntervalStart%>','<%=ai_sPmTypeId%>','<%=ai_sPreValidation%>','<%=ai_sPostValidation%>','<%=ai_sDeniable%>','<%=ai_sLoadActive%>'];m4navegar('<%=sTabCurrentUrl%>',parametros,valores);" title="Ver otros datos"><%=sIntervalStart%>&nbsp;-&nbsp;<%=sRealIntevalEnd%></a></td>
          <%}
          iPageCount = iPageCount + 1;
        }%>
      </tr>
    </table>
  <%}else{%>
    <table class="tablaestados" width="100%" cellspacing="0">
      <tr>
        <td colspan="5" class="descripcionfuncional">
          <img style="margin-top: 2px; visibility:hidden; display: none" id="imgLoadActive" name="imgLoadActive" src="/iconos/spinner.gif" height="16px" width="16px"/>
          <input type="checkbox" name="chkLoadActive" id="chkLoadActive" value="<%=ai_sLoadActive%>" title="<%=tranPM.getProperty("filter.table.showAll.tooltip")%>" onclick="javascript:filterActive(<%=ai_sLoadActive%>)" <%if(!ai_sLoadActive.equals("1")){%>checked<%}%>/><%=tranPM.getProperty("filter.table.showAll")%>
        </td>
      </tr>
    </table>
  <%}%>
  </body>
<%}%>
<script type="text/javascript"> 
function newPetition(ai_iNeedsDates){
  var sError = "<%=tranPM.getProperty("filter.error")%>",
    bError = false,
    oAsAtDate,
    oStartDate,
    oEndDate,
    oEmployee = m4objeto('SRCO_ID_HR', 'formNewPetition'),
    iDuration;
  if (ai_iNeedsDates === 1){
    iDuration = +m4objeto('SRCO_ID_DURATION', 'formNewPetition').value;
    if (iDuration === 1){
      oAsAtDate = m4objeto('SRCO_AS_AT_DATE', 'formNewPetition');
      if (oAsAtDate.value){
        if (!m4fechacomprobacion(oAsAtDate, '')){
          sError = sError + '\n' + "<%=tranPM.getProperty("filter.error.asAtDate")%>";
          bError = true;
        }
      }else{
        sError = sError + '\n' + "<%=tranPM.getProperty("filter.error.asAtDate")%>";
        bError = true;
      }
    }else{
      oStartDate = m4objeto('SRCO_DT_START', 'formNewPetition');
      oEndDate = m4objeto('SRCO_DT_END', 'formNewPetition');
      if (oStartDate.value){
        if (!m4fechacomprobacion(oStartDate, '')){
          sError = sError + '\n' + "<%=tranPM.getProperty("filter.error.startDate")%>";
          bError = true;
        }
      }else{
        sError = sError + '\n' + "<%=tranPM.getProperty("filter.error.startDate")%>";
        bError = true;
      }
      if (oEndDate.value){
        if (!m4fechacomprobacion(oEndDate, '')){
          sError = sError + '\n' + "<%=tranPM.getProperty("filter.error.endDate")%>";
          bError = true;
        }
      }else{
        sError = sError + '\n' + "<%=tranPM.getProperty("filter.error.endDate")%>";
        bError = true;
      }
    }
  }
  if (!oEmployee.value){
    sError = sError + '\n' + "<%=tranPM.getProperty("filter.error.employee")%>";
    bError = true;
  }
  if(bError){
    alert(sError);
  }else{
    m4submit('formNewPetition');
  }
}
function cancelPetition(ai_iOrRequest){
  var aParameters = new Array('TAG', 'REC', 'ACC', 'NOD', 'SRCO_ID_PM_TYPE', 'SCO_REDIRECT', 'SCO_IND_PREVALIDATION', 'SCO_IND_POSTVALIDATION', 'SCO_IND_DENIABLE', 'SCO_IND_LOAD_ACTIVE'),
    aValues = new Array('<%=sSubSession%>', ai_iOrRequest, 'DEL', '', '<%=ai_sPmTypeId%>', '<%=sThisPage%>', '<%=ai_sPreValidation%>', '<%=ai_sPostValidation%>', '<%=ai_sDeniable%>', '<%=ai_sLoadActive%>');
  m4navegar('sse_generico/generico_actualizar.jsp', aParameters, aValues);
}
function archivePetition(ai_iOrRequest){
  var aParameters = new Array('TAG', 'REC', 'ACC', 'NOD', 'SRCO_ID_PM_TYPE', 'SCO_REDIRECT', 'SCO_IND_PREVALIDATION', 'SCO_IND_POSTVALIDATION', 'SCO_IND_DENIABLE', 'SCO_IND_LOAD_ACTIVE'),
    aValues = new Array('<%=sSubSession%>', ai_iOrRequest, 'ARC', '', '<%=ai_sPmTypeId%>', '<%=sThisPage%>', '<%=ai_sPreValidation%>', '<%=ai_sPostValidation%>', '<%=ai_sDeniable%>', '<%=ai_sLoadActive%>');
  m4navegar('sse_generico/generico_actualizar.jsp', aParameters, aValues);
}
function filterActive(ai_iLoadActive){
  var aParameters = new Array('pmType', 'bPreVal', 'bPostVal', 'bDeniable', 'bActive'),
    aValues = new Array('<%=ai_sPmTypeId%>', '<%=ai_sPreValidation%>', '<%=ai_sPostValidation%>', '<%=ai_sDeniable%>', 1-ai_iLoadActive),
    oSpinner = document.getElementById('imgLoadActive'),
    oChekbox = document.getElementById('chkLoadActive');
  oChekbox.style.display = 'none';
  oChekbox.style.visibility = 'hidden';
  oSpinner.style.display = 'inline';
  oSpinner.style.visibility = 'visible';
  m4navegar('<%=sTabCurrentUrl%>', aParameters, aValues);
}
</script>
</html>
</m4:page>
<%oM4Log.debug("smco_pm_modification: exit");%>