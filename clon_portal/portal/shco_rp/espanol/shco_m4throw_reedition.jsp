<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_reedition.jsp
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
<%@ include file="/shco_g0/shco_gen_css.jsp" %>

<%String zIdParamsInstanceVal = request.getParameter(zIdParamsInstance);%>

</head><body>
<%@ include file="/shco_g0/shco_gen_act_body.jsp" %>


<m4:startpage m4task="<%=zsubsesionM4ThrowHtml%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zm4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoGetParamValue%>" alias="<%=zSTR_REEDITION_PAGE_PAR%>">
	<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zID_PARAMS_INSTANCE%>"/>
	<m4:param name="<%=zArgIdParam%>" value="<%=zSTR_REEDITION_PAGE_PAR%>"/>
</m4:exec>
<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoGetParamValue%>" alias="<%=zSTR_ID_RETURN_PAGE%>">
	<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zID_PARAMS_INSTANCE%>"/>
	<m4:param name="<%=zArgIdParam%>" value="<%=zSTR_ID_RETURN_PAGE%>"/>
</m4:exec>
<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoGetParamValue%>" alias="<%=zSTR_M4O_SERIALIZE_PARAMS%>">
	<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zID_PARAMS_INSTANCE%>"/>
	<m4:param name="<%=zArgIdParam%>" value="<%=zSTR_M4O_SERIALIZE_PARAMS%>"/>
</m4:exec>
<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoGetParamValue%>" alias="<%=zSTR_REEDITION_PARAM_VALUE%>">
	<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zID_PARAMS_INSTANCE%>"/>
	<m4:param name="<%=zArgIdParam%>" value="<%=zSTR_REEDITION_PARAM_VALUE%>"/>
</m4:exec>

<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefnodocom%>"/></m4:outputdef>
<m4:endjob/>


<m4:item m4name="<%=zTaskParameterValuer%>" htmlsafe="true"/>
<m4:outputexec m4alias="<%=zSTR_REEDITION_PAGE_PAR%>" m4varname="zReeditionPageVal"/>
<m4:outputexec m4alias="<%=zSTR_ID_RETURN_PAGE%>" m4varname="zIdReturnPageVal"/>
<m4:outputexec m4alias="<%=zSTR_M4O_SERIALIZE_PARAMS%>" m4varname="zM4OSerializeParamsVal"/>
<m4:outputexec m4alias="<%=zSTR_REEDITION_PARAM_VALUE%>" m4varname="zReeditionParamValueVal"/>

<script type="text/javascript">
 window.focus();
</script>
   
   
<%if (zReeditionPageVal == null){ zReeditionPageVal = "";}
if (zIdReturnPageVal == null){ zIdReturnPageVal = "";}
if (zM4OSerializeParamsVal == null){ zM4OSerializeParamsVal = "";}
if (zReeditionParamValueVal == null){ zReeditionParamValueVal = "";}

   
if (zReeditionPageVal.equals(zSTR_M4_ERROR)||zIdReturnPageVal.equals(zSTR_M4_ERROR)||zM4OSerializeParamsVal.equals(zSTR_M4_ERROR)||zReeditionParamValueVal.equals(zSTR_M4_ERROR) ) { %>
	<%@ include file="/shco_rp/shco_m4throw_gen_error.jsp" %>
<%}else{%>

	<form id="NombreFormulario" name="NombreFormulario" action="<%=zReeditionPageVal%>">
		<input type="hidden" id="<%=zSTR_PROCESSMODE%>" name="<%=zSTR_PROCESSMODE%>" value="<%=zSTR_REEDITION%>" />
		<input type="hidden" id="<%=zSTR_ID_RETURN_PAGE%>" name="<%=zSTR_ID_RETURN_PAGE%>" value="<%=zIdReturnPageVal%>" />
		<input type="hidden" id="<%=zSTR_REEDITION_PARAM_VALUE%>" name="<%=zSTR_REEDITION_PARAM_VALUE%>" value="<%=zReeditionParamValueVal%>" />
		<input type="hidden" id="<%=zSTR_M4O_SERIALIZE_PARAMS%>" name="<%=zSTR_M4O_SERIALIZE_PARAMS%>" value="<%=zM4OSerializeParamsVal%>" />
		<input type="hidden" id="<%=zSTR_REEDITION_PROCESS%>" name="<%=zSTR_REEDITION_PROCESS%>" value="<%=zSTR_TRUE%>" />	
	</form>

	<script type="text/javascript">
		m4submit("NombreFormulario");
	</script>
<%}%>
<m4:endpage/>
</body>
</html>

