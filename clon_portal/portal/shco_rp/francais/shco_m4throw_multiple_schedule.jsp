<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_multiple_schedule.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<html>
<head><title></title>
<%@ include file="/shco_rp/shco_m4throw_srp_html_m4def.jsp" %>
<%@ include file="/shco_g0/shco_gen_portal_arg.jsp" %>
<%@ include file="/shco_g0/shco_gen_bag.jsp" %>
<%@ include file="/shco_g0/shco_gen_normal_js.jsp" %>

<%String zIdParamsInstanceVal = request.getParameter(zIdParamsInstance);%>

</head><body>
<%@ include file="/shco_g0/shco_gen_act_body.jsp" %>

<m4:startpage m4task="<%=zsubsesionM4ThrowHtml%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zm4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoGetScheduleParams%>" alias="<%=zmetodoGetScheduleParams%>">
	<m4:param name="<%=zIdParamsInstance%>" value="<%=zIdParamsInstanceVal%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodoScheduleOutputParams%>"><m4:param name="m4name0" value="<%=zoutputdefnodoScheduleOutputParams%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefnodocom%>"/></m4:outputdef>
<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoGetParamValue%>" alias="<%=zJsMultipleExecutionDes%>">
	<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zID_PARAMS_INSTANCE%>"/>
	<m4:param name="<%=zArgIdParam%>" value="<%=zJsMultipleExecutionDes%>"/>
</m4:exec>
<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoGetParamValue%>" alias="<%=zJsMultipleExecutionParam%>">
	<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zID_PARAMS_INSTANCE%>"/>
	<m4:param name="<%=zArgIdParam%>" value="<%=zJsMultipleExecutionParam%>"/>
</m4:exec>
<m4:endjob/>

<m4:outputexec m4alias="<%=zJsMultipleExecutionDes%>" m4varname="zJsMultipleExecutionDesVal"/>
<m4:outputexec m4alias="<%=zJsMultipleExecutionParam%>" m4varname="zJsMultipleExecutionParamVal"/>

<m4:outputexec m4alias="<%=zmetodoGetScheduleParams%>" m4varname="zmetodoGetScheduleParamsVal"/>
<%if (zmetodoGetScheduleParamsVal == null){ zmetodoGetScheduleParamsVal = "";}
if (zJsMultipleExecutionDesVal == null){ zJsMultipleExecutionDesVal = "";}
if (zJsMultipleExecutionParamVal == null){ zJsMultipleExecutionParamVal = "";}

if (zmetodoGetScheduleParamsVal.equals(zSTR_M4_ERROR)||zJsMultipleExecutionDesVal.equals(zSTR_M4_ERROR)||zJsMultipleExecutionParamVal.equals(zSTR_M4_ERROR)) { %>
	<%@ include file="/shco_rp/shco_m4throw_gen_error.jsp" %>
<%}else{%>

	<m4:item m4name="<%=zIdTaskParameterr%>" htmlsafe="true"/>
	<m4:item m4name="<%=zIdTaskr%>" htmlsafe="true"/>
	<m4:item m4name="<%=zJSIdRoler%>" htmlsafe="true"/>
	<m4:item m4name="<%=zJSIdSocr%>" htmlsafe="true"/>
	<m4:item m4name="<%=zJSSocAwarer%>" htmlsafe="true"/>
	<m4:item m4name="<%=zJSSocEditr%>" htmlsafe="true"/>
	<m4:item m4name="<%=zJSSocMultiSelr%>" htmlsafe="true"/>
<%}%>
<m4:endpage/>

</body>
</html>

