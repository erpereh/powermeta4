<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_on_line_exe.jsp
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
<%@ include file="/shco_g0/shco_gen_normal_js.jsp" %>

<%@ include file="/shco_rp/shco_rp_trans.jsp" %>

</head><body>
<%String zIdParamsInstanceVal = request.getParameter(zIdParamsInstance);

 M4SessionManager zsessionmng = M4Context.getSession(request);
 String zArgPathTempMappingVal  = (String) zsessionmng.getPathTempMapping();
 String zArgUserTempUriVal = (String) zsessionmng.getUserTempURI();
 String zArgUserTempURLVal = (String) zsessionmng.getUserTempURL(request);
 
%>

<script type="text/javascript">
 window.focus();
</script>
<m4:startpage m4task="<%=zsubsesionM4ThrowHtml%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zm4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoGetOnlineExeParams%>" alias="<%=zmetodoGetOnlineExeParams%>">
	<m4:param name="<%=zIdParamsInstance%>" value="<%=zIdParamsInstanceVal%>"/>
</m4:exec>
<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoGetParamValue%>" alias="<%=zOutputType%>">
	<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zIdParamsInstanceVal%>"/>
	<m4:param name="<%=zArgIdParam%>" value="<%=zOutputType%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodoOnLineOutputParams%>"><m4:param name="m4name0" value="<%=zoutputdefnodoOnLineOutputParams%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefnodocom%>"/></m4:outputdef>
<m4:endjob/>

<m4:outputexec m4alias="<%=zOutputType%>" m4varname="zOutputTypeVal"/>
<m4:outputexec m4alias="<%=zmetodoGetOnlineExeParams%>" m4varname="zmetodoGetOnlineExeParamsVal"/>

<% 
if (zOutputTypeVal == null){ zOutputTypeVal = "";}
if (zmetodoGetOnlineExeParamsVal == null){ zmetodoGetOnlineExeParamsVal = "";}

if (zmetodoGetOnlineExeParamsVal.equals(zSTR_M4_ERROR) || zOutputTypeVal.equals(zSTR_M4_ERROR)) { %>
   <%@ include file="/shco_rp/shco_m4throw_gen_error.jsp" %>	
<%}else if (zOutputTypeVal.equals(zSTR_OUTPUT_TYPE_FS)|| zOutputTypeVal.equals(zSTR_OUTPUT_TYPE_PS)){  %>
	<%@ include file="/shco_rp/shco_m4throw_server_execution.jsp" %>
<%}else if (zOutputTypeVal.equals(zSTR_OUTPUT_TYPE_FC)){%>
	<%@ include file="/shco_rp/shco_m4throw_fileclient_execution.jsp" %>
<%}else {  %>
	<%@ include file="/shco_rp/shco_m4throw_visualize_execution.jsp" %>
<%}%>
<m4:endpage/>

</body>
</html>

