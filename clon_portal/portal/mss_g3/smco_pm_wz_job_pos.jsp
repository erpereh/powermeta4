<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory, com.meta4.m4operations.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>
<script type="text/javascript" src="/libreria/meta4list.js"></script>
<%@ include file="/sse_generico/sgco_gen_inc.jsp" %>
<%@ include file="/mss_generico/mss_generico_trans.jsp" %>
<%@ include file="/mss_generico/smco_pm_trans.jsp"%>
<%@ include file="/mss_g3/mss_g3_trans.jsp"%>
<%
    response.setDateHeader("Expires", -1);

    M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
    oM4Log.debug("srco_pa_pm_wz_job_pos: entry");
    oM4Log.debug("# query string: " + request.getQueryString());

    //Identify entry parameters
    //Permanent change - As At Date
    String ai_sAsAtDate = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"date");
    String sAsAtDate = "";  //Value formatted to be passed as argument to LN4
    oM4Log.debug("# ai_sAsAtDate: " + ai_sAsAtDate);
    if (ai_sAsAtDate == null) {
        sAsAtDate = "";
    }else{
        if(ai_sAsAtDate.charAt(2) == '-'){
            String[] sDateComponents = ai_sAsAtDate.split("-");
            sAsAtDate = sDateComponents[2] + "-" + sDateComponents[1] + "-" + sDateComponents[0];
        }else{
            sAsAtDate = ai_sAsAtDate;
        }
    }
    oM4Log.debug("# sAsAtDate: " + sAsAtDate);

    //Variables to handle M4Object access
    String sSubSession = "SRCO_PA_MODIFICATION";

    // Hire
    String sM4ObjectHire = "SRCO_PA_MN_HIRE";
    String sNodeHireMain = "SRCO_PA_HIRE";
    String sNodeHireOrg = "SRCO_PA_HIRE_WIZ_ORG";
    String sOutputDefHireMain = sM4ObjectHire + "!" + sNodeHireMain + "[*]";
    String sOutputDefHireOrg = sM4ObjectHire + "!" + sNodeHireOrg + "[*]";

    // PM Engine
    String sM4ObjectPM = "SRCO_PA_MODIFICATION";
    String sNodePmApi = "SRCO_PA_MODIFICATION";
    String sOutputDefPmApi = sM4ObjectPM + "!" + sNodePmApi + "[*]";

    String sTabCurrentUrl = "mss_g3/srco_pa_pm_wz_job_pos.jsp";

    String sStyleJob = "";
    String sStylePosition = "";
    String sStyleHidden = " style='display:none'";
%>
<m4:page subsessionid="<%=sSubSession%>">
<m4:job>
    <m4:addtranslation m4translation="SRCO_OR_MT_JOB:SRCO_OR_MT_JOB!SRCO_OR_MT_JOB.VALIDATE#STD_N_JOB_CODE"/> 
    <m4:addtranslation m4translation="SRCO_OR_MT_POSITION:SRCO_OR_MT_POSITION!SRCO_OR_MT_POSITION.VALIDATE#SCO_NM_POSITION"/> 
  <m4:addtranslation m4translation="SRCO_OR_MT_WORK_UNIT:SRCO_OR_MT_WORK_UNIT!SRCO_OR_MT_WORK_UNIT.VALIDATE#STD_N_WORK_UNIT"/> 
    <m4:addtranslation m4translation="SRCO_OR_MT_WORK_LOCAT:SRCO_OR_MT_WORK_LOCAT!SRCO_OR_MT_WORK_LOCAT.VALIDATE#STD_N_WORK_LOCATION"/> 
    <m4:firetranslation> 
        <m4:param name="SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.STD_ID_JOB_CODE" value="SRCO_OR_MT_JOB:ARG_STD_ID_JOB_CODE@SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.STD_ID_JOB_CODE"/>
        <m4:param name="SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.SCO_ID_POSITION" value="SRCO_OR_MT_POSITION:ARG_SCO_ID_POSITION@SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.SCO_ID_POSITION"/>
    <m4:param name="SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_UNIT" value="SRCO_OR_MT_WORK_UNIT:ARG_STD_ID_WORK_UNIT@SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_UNIT"/>
        <m4:param name="SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_LOCATION" value="SRCO_OR_MT_WORK_LOCAT:ARG_STD_ID_WORK_LOCATION@SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_LOCATION"/>
    </m4:firetranslation>

    <m4:datadef m4name="<%=sM4ObjectHire%>" m4o="<%=sM4ObjectHire%>" m4find="TRUE"/>
  <m4:outputdef m4alias="<%=sNodeHireMain%>"><m4:param name="M4NAME0" value="<%=sOutputDefHireMain%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeHireOrg%>"><m4:param name="M4NAME0" value="<%=sOutputDefHireOrg%>"/></m4:outputdef>
    <m4:datadef m4name="<%=sM4ObjectPM%>" m4o="<%=sM4ObjectPM%>"/>
    <m4:outputdef m4alias="<%=sNodePmApi%>"><m4:param name="M4NAME0" value="<%=sOutputDefPmApi%>"/></m4:outputdef>

</m4:job>
<m4:item outputdef="<%=sNodeHireMain%>" item="SRCO_ARG_ID_USER_TMP" m4varname="sIdUserTempHire"/>
<m4:item outputdef="<%=sNodeHireOrg%>" item="SCO_ID_INT_ROLE_TYPE" m4varname="sInternalRoleType"/>
<m4:item outputdef="<%=sNodeHireOrg%>" item="SCO_ID_POSITION" m4varname="sPositionId"/>
<m4:item outputdef="<%=sNodeHireOrg%>" item="STD_ID_JOB_CODE" m4varname="sJobId"/>
<m4:item outputdef="<%=sNodeHireOrg%>" item="SCO_ID_COMPL" m4varname="sMainComplement"/>
<m4:item outputdef="<%=sNodeHireOrg%>" item="SCO_ID_WORK_UNIT" m4varname="sWorkUnitId"/>
<m4:item outputdef="<%=sNodeHireOrg%>" item="SCO_ID_WORK_LOCATION" m4varname="sWorkLocationId"/>

<head>
    <title><%=tranPM.getProperty("petitionDetails.02.pageTitle")%></title>
    <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
</head>
<body>
    <table id="titleTable" name="titleTable" border="0" width="100%">
        <tr><td class="titulofuncional" colspan="3"><m4:item outputdef="<%=sNodeHireMain%>" item="SRCO_PM_TITLE_SS" htmlsafe="true"/></td></tr>
        <tr>
            <td><img alt="<%=tranPM.getProperty("filter.pageTitle")%>" title="<%=tranPM.getProperty("filter.pageTitle")%>" src="/iconos/noname_solicitar_vacantes_210_100.gif" width="100" height="100" /></td>
            <td>&nbsp;</td>
            <td>
                <div class="descripcionfuncional"><%=tranPM.getProperty("petitionDetails.02.description")%></div>
                <ul class="listaenlace">
                    <li><a class="enlacefuncional" title="<%=tranPM.getProperty("filter.pageTitle02")%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_pm_modification.jsp?pmType=02"><%=tranPM.getProperty("filter.pageTitle02")%></a></li>
                </ul>
            </td>
        </tr>
    </table>
    <form action="/servlet/CheckSecurity/JSP/mss_generico/smco_pm_submit_details.jsp" method="post" name="formPetitionDetails" id="formPetitionDetails">
    <input type="hidden" name="SRCO_PA_HIRE_WIZ_ORG.STD_ID_JOB_CODE" id="SRCO_PA_HIRE_WIZ_ORG.STD_ID_JOB_CODE"/>
    <input type="hidden" name="SRCO_PA_HIRE_WIZ_ORG.SCO_ID_POSITION" id="SRCO_PA_HIRE_WIZ_ORG.SCO_ID_POSITION"/>
        <table id="mainTable" name="mainTable" class="tablaestados" width="100%" cellspacing="0">
            <tr class="tablaestadosceldatitulo"><td colspan="4"><%=tranPM.getProperty("petitionDetails.petitionDetails")%></td></tr>
            <tr>
                <td class="fuentecampo">&nbsp;</td>
                <td class="fuentecampo" colspan="2">
                    <input class="fuenteformulario" type="radio" name="SRCO_PA_HIRE_WIZ_ORG.SCO_ID_INT_ROLE_TYPE" id="SCO_ID_INT_ROLE_TYPE" title="<%=tranPM.getProperty("petitionDetails.roleType.tooltip")%>" onclick="javascript:showJob();" value="1"<%if(sInternalRoleType.equals("1")){sStylePosition=sStyleHidden;%> checked="checked"<%}%>/>&nbsp;<%=tranPM.getProperty("petitionDetails.job")%>
                    <input class="fuenteformulario" type="radio" name="SRCO_PA_HIRE_WIZ_ORG.SCO_ID_INT_ROLE_TYPE" id="SCO_ID_INT_ROLE_TYPE" title="<%=tranPM.getProperty("petitionDetails.roleType.tooltip")%>" onclick="javascript:showPosition();" value="0"<%if(sInternalRoleType.equals("0")){sStyleJob=sStyleHidden;%> checked="checked"<%}%>/>&nbsp;<%=tranPM.getProperty("petitionDetails.position")%>
                </td>
            </tr>
            <tr m4JobPos="job"<%=sStyleJob%>>
                <td class="fuentecampo"><label for="STD_ID_JOB_CODE">&nbsp;*&nbsp;<%=tranPM.getProperty("petitionDetails.job")%></label></td>
                <td class="fuentevalor">
          <input class="fuenteformulario" type="text" id="SRCO_OR_QBF_MT_JOB.STD_N_JOB_CODE" title="<%=tranPM.getProperty("petitionDetails.job.tooltip")%>" maxlength="62" size="40"/>
                </td>
                <td class="fuentevalor"><%if(sInternalRoleType.equals("1") && sIdUserTempHire.equals("")){%>&nbsp;<span class="fuentecampo"><%=tranPM.getProperty("petitionDetails.currentSituation")%></span>&nbsp;<m4:gettranslation m4nametranslation="SRCO_PA_HIRE_WIZ_ORG:SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.STD_ID_JOB_CODE"/><%}%></td>
            </tr>
            <tr m4JobPos="pos"<%=sStylePosition%>>
                <td class="fuentecampo"><label for="SCO_ID_POSITION">&nbsp;*&nbsp;<%=tranPM.getProperty("petitionDetails.position")%></label></td>
                <td class="fuentevalor">
          <input class="fuenteformulario" type="text" id="SRCO_OR_QBF_MT_POSITION.SCO_NM_POSITION" title="<%=tranPM.getProperty("petitionDetails.position.tooltip")%>" maxlength="62" size="40"/>
                </td>
        <td class="fuentevalor"><%if(sInternalRoleType.equals("0") && sIdUserTempHire.equals("")){%>&nbsp;<span class="fuentecampo"><%=tranPM.getProperty("petitionDetails.currentSituation")%></span>&nbsp;<m4:gettranslation m4nametranslation="SRCO_PA_HIRE_WIZ_ORG:SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.SCO_ID_POSITION"/><%}%></td>
            </tr>
            <tr>
                <td class="fuentecampo">&nbsp;<%=tranPM.getProperty("petitionDetails.workUnit")%></td>
                <td class="fuentevalor" colspan="2"><m4:gettranslation m4nametranslation="SRCO_PA_HIRE_WIZ_ORG:SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_UNIT"/></td>
            </tr>
            <tr>
                <td class="fuentecampo">&nbsp;<%=tranPM.getProperty("petitionDetails.workLocation")%></td>
                <td class="fuentevalor" colspan="2"><m4:gettranslation m4nametranslation="SRCO_PA_HIRE_WIZ_ORG:SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_LOCATION"/></td>
            </tr>
            <tr m4JobPos="pos"<%=sStylePosition%>>
                <td class="fuentecampo">&nbsp;<m4:label item="SCO_ID_COMPL" htmlsafe="true" outputdef="<%=sNodeHireOrg%>"/></td>
                <td class="fuentevalor" colspan="2">
                    <label m4MainComplement=""><%=tranPM.getProperty("petitionDetails.noMainComplement")%></label>
                    <label m4MainComplement="0"<%=sStyleHidden%>><m4:label item="SCO_HOURS" htmlsafe="true" outputdef="<%=sNodeHireOrg%>"/></label>
                    <label m4MainComplement="1"<%=sStyleHidden%>><m4:label item="SCO_EJC" htmlsafe="true" outputdef="<%=sNodeHireOrg%>"/></label>
                    <label m4MainComplement="2"<%=sStyleHidden%>><m4:label item="SCO_HEADCOUNT" htmlsafe="true" outputdef="<%=sNodeHireOrg%>"/></label>
                    <input type="hidden" name="SRCO_PA_HIRE_WIZ_ORG.SCO_ID_COMPL" id="SCO_ID_COMPL" value="<%=sMainComplement%>"/>
                </td>
            </tr>
            <tr m4JobPos="pos"<%=sStylePosition%>>
                <td class="fuentecampo"><label m4MainComplement="0" for="SCO_NUM_HOURS"<%=sStyleHidden%>>&nbsp;*</label><label for="SCO_NUM_HOURS">&nbsp;<m4:label item="SCO_NUM_HOURS" htmlsafe="true" outputdef="<%=sNodeHireOrg%>"/></label></td>
                <td class="fuentecampo">
                    <input class="fuenteformulario" type="text" name="SRCO_PA_HIRE_WIZ_ORG.SCO_NUM_HOURS" id="SCO_NUM_HOURS" title="<%=tranPM.getProperty("petitionDetails.hours.tooltip")%>" maxlength="9" size="9"/>
                </td>
                <td class="fuentevalor"><%if(sInternalRoleType.equals("0") && sIdUserTempHire.equals("")){%>&nbsp;<span class="fuentecampo"><%=tranPM.getProperty("petitionDetails.currentSituation")%></span>&nbsp;<m4:item item="SCO_NUM_HOURS" htmlsafe="true" outputdef="<%=sNodeHireOrg%>"/><%}%></td>
            </tr>
            <tr m4JobPos="pos"<%=sStylePosition%>>
                <td class="fuentecampo"><label m4MainComplement="1" for="SCO_NUM_EJC"<%=sStyleHidden%>>&nbsp;*</label><label for="SCO_NUM_EJC">&nbsp;<m4:label item="SCO_NUM_EJC" htmlsafe="true" outputdef="<%=sNodeHireOrg%>"/></label></td>
                <td class="fuentecampo">
                    <input class="fuenteformulario" type="text" name="SRCO_PA_HIRE_WIZ_ORG.SCO_NUM_EJC" id="SCO_NUM_EJC" title="<%=tranPM.getProperty("petitionDetails.FTE.tooltip")%>" maxlength="7" size="7"/>
                </td>
                <td class="fuentevalor"><%if(sInternalRoleType.equals("0") && sIdUserTempHire.equals("")){%>&nbsp;<span class="fuentecampo"><%=tranPM.getProperty("petitionDetails.currentSituation")%></span>&nbsp;<m4:item item="SCO_NUM_EJC" htmlsafe="true" outputdef="<%=sNodeHireOrg%>"/><%}%></td>
            </tr>
            <tr m4JobPos="pos"<%=sStylePosition%>>
                <td class="fuentecampo"><label m4MainComplement="2" for="SCO_NUM_HEADCOUNT"<%=sStyleHidden%>>&nbsp;*</label><label for="SCO_NUM_HEADCOUNT">&nbsp;<m4:label item="SCO_NUM_HEADCOUNT" htmlsafe="true" outputdef="<%=sNodeHireOrg%>"/></label></td>
                <td class="fuentecampo">
                    <input class="fuenteformulario" type="text" name="SRCO_PA_HIRE_WIZ_ORG.SCO_NUM_HEADCOUNT" id="SCO_NUM_HEADCOUNT" title="<%=tranPM.getProperty("petitionDetails.headcount.tooltip")%>" maxlength="4" size="4"/>
                </td>
                <td class="fuentevalor"><%if(sInternalRoleType.equals("0") && sIdUserTempHire.equals("")){%>&nbsp;<span class="fuentecampo"><%=tranPM.getProperty("petitionDetails.currentSituation")%></span>&nbsp;<m4:item item="SCO_NUM_HEADCOUNT" htmlsafe="true" outputdef="<%=sNodeHireOrg%>"/><%}%></td>
            </tr>
            <tr>
                <td class="fuenteboton" align="center" colspan="4">&nbsp;<a href="javascript:sendData();"><img alt="<%=tranPM.getProperty("petitionDetails.send.button.tooltip")%>" title="<%=tranPM.getProperty("petitionDetails.send.button.tooltip")%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal(this)" onmouseout="m4oscuridad(this)"/></a></td>
            </tr>
        </table>
    </form>
</body>
<script type="text/javascript">
function showJob(){
    showJobPos(true);
}
function showPosition(){
    showJobPos(false);
}
function showJobPos(ai_bJob){
    var oTableBody = $('mainTable').tBodies[0],
        oTableRow,
        sValue = "",
        i;

    for(i = 0; i < oTableBody.rows.length; i++){
        oTableRow = $(oTableBody.rows[i]);
        if(oTableRow.get('m4JobPos')){
            if(ai_bJob){
                if(oTableRow.get('m4JobPos') === 'job'){
                    //show
                    oTableRow.setStyle('display', '');
                }else{
                    //hide
                    oTableRow.setStyle('display', 'none');
                }
            }else{
                if(oTableRow.get('m4JobPos') === 'pos'){
                    //show
                    oTableRow.setStyle('display', '');
                }else{
                    //hide
                    oTableRow.setStyle('display', 'none');
                }
            }
        }
    }
  window.fireEvent('resize');
}
function sendData(){
    var bError = false,
        i = 0,
        oIntRoleType = $('formPetitionDetails').getElements('input[id=SCO_ID_INT_ROLE_TYPE]'),
        oValDecimal2 = new RegExp("(^[-]?[1-9]{1}[0-9]*\\.\\d{1,2}$)|(^[-]?0\\.\\d{1,2}$)|(^[-]?\\.\\d{1,2}$)|(^[-]?[1-9]{1}[0-9]*\\.$)|(^[-]?0\\.$)|(^[-]?[1-9]{1}[0-9]*$)"),
        oValInteger = new RegExp("(^[-]?0$)|(^[-]?[1-9]{1}[0-9]*\\.$)|(^[-]?0\\.$)|(^[-]?[1-9]{1}[0-9]*$)"),
        oJob = $('SRCO_OR_QBF_MT_JOB.STD_N_JOB_CODE'),
        oJobHidden = $('SRCO_PA_HIRE_WIZ_ORG.STD_ID_JOB_CODE'),
        oPosition = $('SRCO_OR_QBF_MT_POSITION.SCO_NM_POSITION'),
        oPositionHidden = $('SRCO_PA_HIRE_WIZ_ORG.SCO_ID_POSITION'),
        oHours = $('SCO_NUM_HOURS'),
        oFTE = $('SCO_NUM_EJC'),
    oComplId = $('SCO_ID_COMPL'),
        oHeadcount = $('SCO_NUM_HEADCOUNT'),
        sError = "<%=tranPM.getProperty("filter.error")%>",
        sIntRoleType = '',
        sMainComplement = oComplId.get('value') || '';

    //Internal role type (0: position, 1: job)
    for(i = 0; i < oIntRoleType.length; i++){
        if(oIntRoleType[i].get('checked')){
            sIntRoleType = oIntRoleType[i].get('value');
            i = oIntRoleType.length;
        }
    }
    if(sIntRoleType == 0){
        //Position
        if (!oPosition.get('m4SCO_ID_POSITION')){
            sError = sError + '\n' + "<%=tranPM.getProperty("petitionDetails.error.position")%>";
            bError = true;
        }
        //Hours
        if(oHours.get('value')){
            if(oHours.get('value') <= 0 || oHours.get('value') > 168){
                sError = sError + '\n' + "<%=tranPM.getProperty("petitionDetails.error.hours.range")%>";
                bError = true;
            }
            if (!oValDecimal2.test(oHours.get('value'))){
                sError = sError + '\n' + "<%=tranPM.getProperty("petitionDetails.error.hours.decimals")%>";
                bError = true;
            }
        }else{
            if (sMainComplement == 0){
                //Mandatory for this main complement
                sError = sError + '\n' + "<%=tranPM.getProperty("petitionDetails.error.hours.man")%>";
                bError = true;
            }
        }
        //FTE
        if(oFTE.get('value')){
            if(oFTE.get('value') <= 0 || oFTE.get('value') > 9999){
                sError = sError + '\n' + "<%=tranPM.getProperty("petitionDetails.error.FTE.range")%>";
                bError = true;
            }
            if (!oValDecimal2.test(oFTE.get('value'))){
                sError = sError + '\n' + "<%=tranPM.getProperty("petitionDetails.error.FTE.decimals")%>";
                bError = true;
            }
        }else{
            if (sMainComplement == 1){
                //Mandatory for this main complement
                sError = sError + '\n' + "<%=tranPM.getProperty("petitionDetails.error.FTE.man")%>";
                bError = true;
            }
        }
        //Headcount
        if(oHeadcount.get('value')){
            if(oHeadcount.get('value') <= 0 || oHeadcount.get('value') > 9999){
                sError = sError + '\n' + "<%=tranPM.getProperty("petitionDetails.error.headcount.range")%>";
                bError = true;
            }
            if (!oValInteger.test(oHeadcount.get('value'))){
                sError = sError + '\n' + "<%=tranPM.getProperty("petitionDetails.error.headcount.decimals")%>";
                bError = true;
            }
        }else{
            if (sMainComplement == 2){
                //Mandatory for this main complement
                sError = sError + '\n' + "<%=tranPM.getProperty("petitionDetails.error.headcount.man")%>";
                bError = true;
            }
        }
    }else{
        //Job
        if (!oJob.get('m4STD_ID_JOB_CODE')){
            sError = sError + '\n' + "<%=tranPM.getProperty("petitionDetails.error.job")%>";
            bError = true;
        }
    }
    if(bError){
        alert(sError);
    }else{
    oJobHidden.set('value', oJob.get('m4STD_ID_JOB_CODE'));
    oPositionHidden.set('value', oPosition.get('m4SCO_ID_POSITION'))
        m4submit('formPetitionDetails');
    }
}
</script>
<script type="text/javascript">
window.addEvent('domready', function () {
  var oListJob = new M4List({//Initialize Job list
      meta4Object: 'SRCO_OR_MT_JOB',
      nodeQBF: 'SRCO_OR_QBF_MT_JOB',
      nodeTR: 'SRCO_OR_MT_JOB',
      listMethod: 'LIST',
      secondaryTI: '',
      appStart: '<%=sAsAtDate%>',
      appEnd: '<%=sAsAtDate%>',
      listMethodArguments: 'ARG_STD_ID_JOB_CODE',
      resultItems: 'STD_N_JOB_CODE,STD_ID_JOB_CODE',
      mainFilterElement: 'SRCO_OR_QBF_MT_JOB.STD_N_JOB_CODE',
      secondaryFilterElements: undefined,
      maxRecords: 10,
      labelHelp: "<%=tranPM.getProperty("m4list.info.helpJob")%>",
      labelLoading: "<%=tranPM.getProperty("m4list.info.loading")%>",
      labelAndMore: "<%=tranPM.getProperty("m4list.info.andMore")%>",
      labelNoMatch: "<%=tranPM.getProperty("m4list.info.noMatch")%>"
    }),
    oListPosition = new M4List({//Initialize Position list
      meta4Object: 'SRCO_OR_MT_POSITION',
      nodeQBF: 'SRCO_OR_QBF_MT_POSITION',
      nodeTR: 'SRCO_OR_MT_POSITION',
      listMethod: 'SCO_LIST_WITH_WU',
      secondaryTI: '',
      appStart: '<%=sAsAtDate%>',
      appEnd: '<%=sAsAtDate%>',
      listMethodArguments: 'ARG_SCO_ID_WORK_UNIT,ARG_SCO_ID_POSITION',
      secondaryFilterElements: '<m4:item item="SCO_ID_WORK_UNIT" htmlsafe="true" outputdef="<%=sNodeHireOrg%>"/>',
      resultItems: 'SCO_NM_POSITION,SCO_ID_POSITION,SCO_ID_COMPL',
      mainFilterElement: 'SRCO_OR_QBF_MT_POSITION.SCO_NM_POSITION',
      maxRecords: 10,
      eventAttributesChanged: 'm4listchange',
      labelHelp: "<%=tranPM.getProperty("m4list.info.helpPosition")%>",
      labelLoading: "<%=tranPM.getProperty("m4list.info.loading")%>",
      labelAndMore: "<%=tranPM.getProperty("m4list.info.andMore")%>",
      labelNoMatch: "<%=tranPM.getProperty("m4list.info.noMatch")%>"
    });
  $('SRCO_OR_QBF_MT_POSITION.SCO_NM_POSITION').addEvent('m4listchange', function(){
    var i,
      sMainComplement = $(this).get('m4SCO_ID_COMPL'),
      oComplId = $('SCO_ID_COMPL'),
      oLables = $$('label');

    //Update main complement
    if(oComplId){
      oComplId.set('value', sMainComplement);
    }
    //Loop through all lables and show/hide the once related to main complement
    for(i = 0; i < oLables.length; i++){
      if(typeof(oLables[i].getAttribute('m4MainComplement')) === 'string'){
        if(oLables[i].get('m4MainComplement') === sMainComplement){
          oLables[i].setStyle('display', '');
        }else{
          oLables[i].setStyle('display', 'none');
        }
      }
    }
  });
});
</script>
</html>
</m4:page>
<%oM4Log.debug("srco_pa_pm_wz_job_pos: exit");%>
