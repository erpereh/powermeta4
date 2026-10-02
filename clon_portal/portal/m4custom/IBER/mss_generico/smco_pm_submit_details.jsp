<%@ page import="java.util.regex.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory, com.meta4.m4operations.*"%>
<%//Passes details to Hire and triggers workflow on success.
	M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
	oM4Log.debug("smco_pm_submit_details: entry");

	//Input parameters
	String ai_sTempSave = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_IND_TEMP");
	if(ai_sTempSave==null || ai_sTempSave.equals("")){ai_sTempSave = "0";}
	Enumeration eParameterNames = request.getParameterNames();
	String sParameterName = "";
	String sParameterValue = "";
	String sFullItemName = "";
	Pattern pDot = Pattern.compile("[.]+");

	//URL
	String sUrl = "/servlet/CheckSecurity/JSP";
	String sGenericPage = "/mss_g3/smco_pm_modification.jsp?pmType=";
	int iDelay = 0;

	//Variables to handle M4Object access
	String sSubSession = "SRCO_PA_MODIFICATION";

	// Hire
	String sM4ObjectHire = "SRCO_PA_MN_HIRE";
	String sNodeHire = "SRCO_PA_HIRE";
	String sMethodCleanHire = "SRCO_PM_CLEAN_OBJECT";

	// PM Engine
	String sM4ObjectPM = "SRCO_PA_MODIFICATION";
	String sNodePmApi = "SRCO_PA_MODIFICATION";
	String sNodePmCom = "SSE_COMUNICACION";
	String sMethodPetitionCompleted = "SRCO_WF_PETITION_COMPLETED";
	String sResultPetition = "";
	String sOutputDefPmApi = sM4ObjectPM + "!" + sNodePmApi + "[*]";
	String sOutputDefPmCom = sM4ObjectPM + "!" + sNodePmCom + "[*]";
%>
<m4:page subsessionid="<%=sSubSession%>">
<m4:job>
	<m4:datadef m4name="<%=sM4ObjectHire%>" m4o="<%=sM4ObjectHire%>"/>
	<m4:exec m4object="<%=sM4ObjectHire%>" node="<%=sNodeHire%>" method="<%=sMethodCleanHire%>"/>
	<%
	//Loop through collection and look for "AddRegisters"
	while(eParameterNames.hasMoreElements()){
		sParameterName = (String)eParameterNames.nextElement();
		if(sParameterName.indexOf(".AddRegisters") != -1){
			int iNewRegisters = Integer.parseInt(com.meta4.taglib.util.M4SafeRequest.getParameter(request,sParameterName));
			String sNode = sParameterName.substring(0, sParameterName.indexOf(".AddRegisters"));
			oM4Log.debug("#   " + sParameterName);
			oM4Log.debug("#   -> sNode: " + sNode);
			oM4Log.debug("#   -> iNewRegisters: " + iNewRegisters);
			for(int i = 0; i < iNewRegisters; i++){
				%><m4:exec m4object="<%=sM4ObjectHire%>" node="<%=sNode%>" method="AddRegister"/><%
			}
		}
	}
	//Reset collection with input parameters and pass the values to their respective items
	eParameterNames = request.getParameterNames();
	while(eParameterNames.hasMoreElements()){
		sParameterName = (String)eParameterNames.nextElement();
		sParameterValue =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,sParameterName);
		oM4Log.debug("#   Parameter: " + sParameterName + " = '" + sParameterValue + "'");
		//Valiate parameter name (should be node.item)
		String sNodeItem[] = pDot.split(sParameterName);
		if(sNodeItem.length == 2){
			//Ignore "AddRegisters"
			if(!sNodeItem[1].equals("AddRegisters")){
				sFullItemName = sM4ObjectHire + "!" + sParameterName;
				oM4Log.debug("#   -> sFullItemName: " + sFullItemName);
				%><m4:setitems><m4:param name="<%=sFullItemName%>" value="<%=sParameterValue%>"/></m4:setitems><%
			}else{
				oM4Log.debug("#   -> Already processed");
			}
		}else{
			oM4Log.debug("#   -> Not included in job due to invalid format!");
		}
	}%>
	<m4:datadef m4name="<%=sM4ObjectPM%>" m4o="<%=sM4ObjectPM%>"/>
	<m4:exec m4object="<%=sM4ObjectPM%>" node="<%=sNodePmApi%>" method="<%=sMethodPetitionCompleted%>" alias="<%=sMethodPetitionCompleted%>">
		<m4:param name="ARG_SCO_IND_TEMP" value="<%=ai_sTempSave%>"/>
	</m4:exec>
	<m4:outputdef m4alias="<%=sNodePmApi%>"><m4:param name="M4NAME0" value="<%=sOutputDefPmApi%>"/></m4:outputdef>
	<m4:outputdef m4alias="<%=sNodePmCom%>"><m4:param name="M4NAME0" value="<%=sOutputDefPmCom%>"/></m4:outputdef>
</m4:job>
<m4:outputexec alias="<%=sMethodPetitionCompleted%>" var="sResultPetition"/>
<%
if(sResultPetition.equals("0") && ai_sTempSave.equals("0")){
	//Success
	iDelay = 2;
	%><m4:item outputdef="<%=sNodePmApi%>" item="SRCO_ID_PM_TYPE" m4varname="sPmTypeId"/><%
	sUrl += sGenericPage + sPmTypeId;
}else{
	//Error or after temporary save
	iDelay = 0;
	//Identify page of detail step and dates%>
	<m4:item outputdef="<%=sNodePmApi%>" item="SRCO_URL" m4varname="sUrlPmType"/>
	<%sUrl += sUrlPmType;%>
	<m4:item outputdef="<%=sNodePmApi%>" item="SRCO_ID_DURATION" m4varname="sIdDuration"/>
	<%if(sIdDuration.equals("1")){
		//Permanent%>
		<m4:item outputdef="<%=sNodePmApi%>" item="SRCO_AS_AT_DATE" m4varname="sAsAtDate"/>
		<%sUrl += "?date=" + sAsAtDate;
	}else{
		//Temporary%>
		<m4:item outputdef="<%=sNodePmApi%>" item="SRCO_DT_START" m4varname="sStartDate"/>
		<m4:item outputdef="<%=sNodePmApi%>" item="SRCO_DT_END" m4varname="sEndDate"/>
		<%sUrl += "?start=" + sStartDate + "&end=" + sEndDate;
	}
}
sUrl = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sUrl);
oM4Log.debug("# sUrl: " + sUrl);%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">
<html>
<%@ include file="/mss_generico/smco_pm_trans.jsp"%>
<head>
<title><%=tranPM.getProperty("submitDetails.pageTitle")%></title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<meta http-equiv='refresh' content="<%=iDelay%>; URL=<%=sUrl%>">
</head>
<body>
<%if(sResultPetition.equals("-1")){
	//Error%>
	<script type="text/javascript">
		urlList = "/servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=<%=sSubSession%>";
		window.open(urlList, "Error", "width=600, height=200, resizable, scrollbars");
	</script>
<%}else{%>
<br/><br/><br/><br/><br/><br/><br/><br/>
<table align="center" cellpadding="0" cellspacing="0">
	<tr>
		<td class="fuenteactualizar"><%=tranPM.getProperty("submitDetails.title")%></td>
	</tr>
	<tr>
		<td class="fuenteactualizar2"><%=tranPM.getProperty("redirect.description")%></td>
	</tr>
</table>
<%}%>
</body>
</html>
</m4:page>
<%oM4Log.debug("smco_pm_submit_details: exit");%>