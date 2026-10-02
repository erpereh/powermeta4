<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%//Prepares PM engine and redirects request to functional page.
	M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
	oM4Log.debug("smco_pm_redirect: entry");
	oM4Log.debug("  URL: " + request.getRequestURL());
	oM4Log.debug("  query string: " + request.getQueryString());

	//Workitem
	String ai_sWorkitem = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKITEM");   
	oM4Log.debug("  ai_sWorkitem: " + ai_sWorkitem);
	if (ai_sWorkitem == null) {
		ai_sWorkitem = "";
	}

	//URL
	String sUrl = "/servlet/CheckSecurity/JSP";

	//Variable to handle M4Object access
	String sSubSession = "SRCO_PA_MODIFICATION";
	String sM4ObjectPM = "SRCO_PA_MODIFICATION";
	String sNodePmApi = "SRCO_PA_MODIFICATION";
	String sMethodLoadPetition = "SRCO_WF_COMPLETE_PETITION";
	String sResultLoadPetition;
	String sOutputDefPmApi = sM4ObjectPM + "!" + sNodePmApi + "[*]";
%>
<m4:page subsessionid="<%=sSubSession%>">
<m4:job>
	<m4:datadef m4name="<%=sM4ObjectPM%>" m4o="<%=sM4ObjectPM%>"/>
	<m4:exec m4object="<%=sM4ObjectPM%>" node="<%=sNodePmApi%>" method="<%=sMethodLoadPetition%>" alias="<%=sMethodLoadPetition%>">
		<m4:param name="ARG_SCO_ID_WORKITEM" value="<%=ai_sWorkitem%>"/>
	</m4:exec>
	<m4:outputdef m4alias="<%=sNodePmApi%>"><m4:param name="M4NAME0" value="<%=sOutputDefPmApi%>"/></m4:outputdef>
</m4:job>
<m4:outputexec alias="<%=sMethodLoadPetition%>" var="sResultLoadPetition"/>
<%
oM4Log.debug("  sResultLoadPetition: " + sResultLoadPetition);
if(sResultLoadPetition.equals("1")){
	//Identify page of next step and dates%>
	<m4:item outputdef="<%=sNodePmApi%>" item="SRCO_URL" m4varname="sUrlPmType"/>
	<%sUrl += sUrlPmType;%>
	<m4:item outputdef="<%=sNodePmApi%>" item="SRCO_ID_DURATION" m4varname="sIdDuration"/>
	<%if(sIdDuration.equals("1")){
		//Permanent%>
		<m4:item outputdef="<%=sNodePmApi%>" item="SRCO_AS_AT_DATE" m4varname="sAsAtDate" m4format="yyyy-MM-dd"/>
		<%sUrl += "?date=" + sAsAtDate;%>
	<%}else{
		//Temporary%>
		<m4:item outputdef="<%=sNodePmApi%>" item="SRCO_DT_START" m4varname="sStartDate" m4format="yyyy-MM-dd"/>
		<m4:item outputdef="<%=sNodePmApi%>" item="SRCO_DT_END" m4varname="sEndDate" m4format="yyyy-MM-dd"/>
		<%sUrl += "?start=" + sStartDate + "&end=" + sEndDate;%>
	<%}
	sUrl = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sUrl);
	oM4Log.debug("# sUrl: " + sUrl);
}%>
<%if(sResultLoadPetition.equals("1")){
	//Success, redirect message
	response.sendRedirect(sUrl);%>
<%}else{
	//Error%>
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">
	<html>
	<%@ include file="/mss_generico/smco_pm_trans.jsp"%>
	<head>
	<title><%=tranPM.getProperty("redirect.pageTitle")%></title>
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	</head>
	<script type="text/javascript">
		urlList = "/servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=<%=sSubSession%>";
		window.open(urlList, "Error", "width=600, height=200, resizable, scrollbars");
	</script>
	<body>
		<table border="0" width="100%">
			<tr><td class="titulofuncional" colspan="3"><%=tranPM.getProperty("filter.pageTitle")%></td></tr>
			<tr>
				<td><img alt="<%=tranPM.getProperty("filter.pageTitle")%>" title="<%=tranPM.getProperty("filter.pageTitle")%>" src="/iconos/error.gif" width="65" height="65" /></td>
				<td>&nbsp;</td>
				<td><div class="descripcionfuncional"><%=tranPM.getProperty("redirect.descriptionError")%></div></td>
			</tr>
		</table>
	</body>
	</html>
<%}%>
</m4:page>
<%oM4Log.debug("smco_pm_redirect: exit");%>