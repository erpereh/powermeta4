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
	oM4Log.debug("smco_pm_wz_transfer: entry");
	oM4Log.debug("# query string: " + request.getQueryString());

	//Identify entry parameters
	//Permanent change - As At Date
	String ai_sAsAtDate = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"date");
	String sAsAtDate = "";	//Value formatted to be passed as argument to LN4
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

	String sTabCurrentUrl = "mss_g3/smco_pm_wz_transfer.jsp";
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
<m4:item outputdef="<%=sNodeHireOrg%>" item="SCO_ID_WORK_UNIT" m4varname="sWorkUnitId"/>
<m4:item outputdef="<%=sNodeHireOrg%>" item="SCO_ID_WORK_LOCATION" m4varname="sWorkLocationId"/>

<head>
	<title><%=tranPM.getProperty("petitionDetails.03.pageTitle")%></title>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
</head>
<body>
	<table id="titleTable" name="titleTable" border="0" width="100%">
		<tr><td class="titulofuncional" colspan="3"><m4:item outputdef="<%=sNodeHireMain%>" item="SRCO_PM_TITLE_SS" htmlsafe="true"/></td></tr>
		<tr>
			<td><img alt="<%=tranPM.getProperty("filter.pageTitle")%>" title="<%=tranPM.getProperty("filter.pageTitle")%>" src="/iconos/noname_solicitar_vacantes_210_100.gif" width="100" height="100" /></td>
			<td>&nbsp;</td>
			<td>
				<div class="descripcionfuncional"><%=tranPM.getProperty("petitionDetails.03.description")%></div>
				<ul class="listaenlace">
					<li><a class="enlacefuncional" title="<%=tranPM.getProperty("filter.pageTitle03")%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_pm_modification.jsp?pmType=03"><%=tranPM.getProperty("filter.pageTitle03")%></a></li>
				</ul>
			</td>
		</tr>
	</table>
	<form action="/servlet/CheckSecurity/JSP/mss_generico/smco_pm_submit_details.jsp" method="post" name="formPetitionDetails" id="formPetitionDetails">
		<input type="hidden" name="SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_UNIT" id="SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_UNIT"/>
		<input type="hidden" name="SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_LOCATION" id="SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_LOCATION"/>
		<table id="mainTable" name="mainTable" class="tablaestados" width="100%" cellspacing="0">
			<tr class="tablaestadosceldatitulo"><td colspan="4"><%=tranPM.getProperty("petitionDetails.petitionDetails")%></td></tr>
			<tr>
				<td class="fuentecampo"><label for="SCO_ID_WORK_UNIT">&nbsp;*&nbsp;<%=tranPM.getProperty("petitionDetails.workUnit")%></label></td>
				<td class="fuentevalor">
					<input class="fuenteformulario" type="text" id="SRCO_OR_QBF_MT_WORK_UNIT.STD_N_WORK_UNIT" title="<%=tranPM.getProperty("petitionDetails.workUnit.tooltip")%>" maxlength="62" size="40"/>
				</td>
				<td class="fuentevalor"><%if(sIdUserTempHire.equals("")){%>&nbsp;<span class="fuentecampo"><%=tranPM.getProperty("petitionDetails.currentSituation")%></span>&nbsp;<m4:gettranslation m4nametranslation="SRCO_PA_HIRE_WIZ_ORG:SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_UNIT"/><%}%></td>
			</tr>
			<tr>
				<td class="fuentecampo"><label for="SCO_ID_WORK_LOCATION">&nbsp;*&nbsp;<%=tranPM.getProperty("petitionDetails.workLocation")%></label></td>
				<td class="fuentevalor">
					<input class="fuenteformulario" type="text" id="SRCO_OR_QBF_MT_WORK_LOCAT.STD_N_WORK_LOCATION" title="<%=tranPM.getProperty("petitionDetails.workLocation.tooltip")%>" maxlength="62" size="40"/>
				</td>
				<td class="fuentevalor"><%if(sIdUserTempHire.equals("")){%>&nbsp;<span class="fuentecampo"><%=tranPM.getProperty("petitionDetails.currentSituation")%></span>&nbsp;<m4:gettranslation m4nametranslation="SRCO_PA_HIRE_WIZ_ORG:SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_LOCATION"/><%}%></td>
			</tr>
			<%if(sInternalRoleType.equals("1")){%><tr>
				<td class="fuentecampo">&nbsp;<%=tranPM.getProperty("petitionDetails.job")%></td>
				<td class="fuentevalor" colspan="2"><m4:gettranslation m4nametranslation="SRCO_PA_HIRE_WIZ_ORG:SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.STD_ID_JOB_CODE"/></td>
			</tr><%}else{%><tr>
				<td class="fuentecampo">&nbsp;<%=tranPM.getProperty("petitionDetails.position")%></td>
				<td class="fuentevalor" colspan="2"><m4:gettranslation m4nametranslation="SRCO_PA_HIRE_WIZ_ORG:SRCO_PA_MN_HIRE!SRCO_PA_HIRE_WIZ_ORG.SCO_ID_POSITION"/></td>
			</tr><%}%>
			<tr>
				<td class="fuenteboton" align="center" colspan="4">&nbsp;<a href="javascript:sendData();"><img alt="<%=tranPM.getProperty("petitionDetails.send.button.tooltip")%>" title="<%=tranPM.getProperty("petitionDetails.send.button.tooltip")%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal(this)" onmouseout="m4oscuridad(this)"/></a></td>
			</tr>
		</table>
	</form>
</body>
<script type="text/javascript">
function sendData(){
	var bError = false,
		oWorkUnit =$('SRCO_OR_QBF_MT_WORK_UNIT.STD_N_WORK_UNIT'),
		oWorkUnitHidden =$('SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_UNIT'),
		oWorkLocation = $('SRCO_OR_QBF_MT_WORK_LOCAT.STD_N_WORK_LOCATION'),
		oWorkLocationHidden = $('SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_LOCATION'),
		sError = "<%=tranPM.getProperty("filter.error")%>";

	//Work unit
	if (!oWorkUnit.get('m4STD_ID_WORK_UNIT')){
		sError = sError + '\n' + "<%=tranPM.getProperty("petitionDetails.error.workUnit")%>";
		bError = true;
	}
	//Work location
	if (!oWorkLocation.get('m4STD_ID_WORK_LOCATION')){
		sError = sError + '\n' + "<%=tranPM.getProperty("petitionDetails.error.workLocation")%>";
		bError = true;
	}
	if(bError){
		alert(sError);
	}else{
		oWorkUnitHidden.set('value', oWorkUnit.get('m4STD_ID_WORK_UNIT'));
		oWorkLocationHidden.set('value', oWorkLocation.get('m4STD_ID_WORK_LOCATION'))
		m4submit('formPetitionDetails');
	}
}
</script>
<script type="text/javascript">
window.addEvent('domready', function () {
	var oListWU = new M4List({//Initialize Work Unit list
			meta4Object: 'SRCO_OR_MT_WORK_UNIT',
			nodeQBF: 'SRCO_OR_QBF_MT_WORK_UNIT',
			nodeTR: 'SRCO_OR_MT_WORK_UNIT',
			listMethod: 'LIST',
			secondaryTI: '',
			appStart: '<%=sAsAtDate%>',
			appEnd: '<%=sAsAtDate%>',
			listMethodArguments: 'ARG_STD_ID_WORK_UNIT',
			resultItems: 'STD_N_WORK_UNIT,STD_ID_WORK_UNIT',
			mainFilterElement: 'SRCO_OR_QBF_MT_WORK_UNIT.STD_N_WORK_UNIT',
			secondaryFilterElements: undefined,
			maxRecords: 10,
			labelHelp: "<%=tranPM.getProperty("m4list.info.helpWorkUnit")%>",
			labelLoading: "<%=tranPM.getProperty("m4list.info.loading")%>",
			labelAndMore: "<%=tranPM.getProperty("m4list.info.andMore")%>",
			labelNoMatch: "<%=tranPM.getProperty("m4list.info.noMatch")%>"
		}),
		oListWL = new M4List({//Initialize Work Location list
			meta4Object: 'SRCO_OR_MT_WORK_LOCAT',
			nodeQBF: 'SRCO_OR_QBF_MT_WORK_LOCAT',
			nodeTR: 'SRCO_OR_MT_WORK_LOCAT',
			listMethod: 'LIST',
			secondaryTI: '',
			appStart: '<%=sAsAtDate%>',
			appEnd: '<%=sAsAtDate%>',
			listMethodArguments: 'ARG_STD_ID_WORK_LOCATION',
			resultItems: 'STD_N_WORK_LOCATION,STD_ID_WORK_LOCATION',
			mainFilterElement: 'SRCO_OR_QBF_MT_WORK_LOCAT.STD_N_WORK_LOCATION',
			secondaryFilterElements: undefined,
			maxRecords: 10,
			labelHelp: "<%=tranPM.getProperty("m4list.info.helpWorkLocation")%>",
			labelLoading: "<%=tranPM.getProperty("m4list.info.loading")%>",
			labelAndMore: "<%=tranPM.getProperty("m4list.info.andMore")%>",
			labelNoMatch: "<%=tranPM.getProperty("m4list.info.noMatch")%>"
		});
});
</script>
</html>
</m4:page>
<%oM4Log.debug("smco_pm_wz_transfer: exit");%>
