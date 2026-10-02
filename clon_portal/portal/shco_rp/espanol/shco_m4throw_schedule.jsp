<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_schedule.jsp
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
<%String zRetmode = request.getParameter("zretmode");%>

</head><body>

<% if (zRetmode != null && zRetmode.equals("js")){ %>
   <%@ include file="/shco_rp/shco_rp_trans.jsp" %>
   <%String zReportExecutionMessage =  Tran_shco_rp.getProperty("Literal.ScheduleReport");%> 
   <%@include file="/shco_rp/shco_m4throw_open_gen_message.jsp"%>
   <%@include file="/shco_rp/shco_m4throw_close_gen_message.jsp"%>
 
<%}else{%>
<%@ include file="/shco_g0/shco_gen_act_body.jsp" %>
<%@ include file="/shco_g0/shco_gen_js.jsp" %>

<script type="text/javascript">
 window.focus();
</script>

<m4:startpage m4task="<%=zsubsesionM4ThrowHtml%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zm4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoGetScheduleParams%>" alias="<%=zmetodoGetScheduleParams%>">
	<m4:param name="<%=zIdParamsInstance%>" value="<%=zIdParamsInstanceVal%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodoScheduleOutputParams%>"><m4:param name="m4name0" value="<%=zoutputdefnodoScheduleOutputParams%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefnodocom%>"/></m4:outputdef>
<m4:endjob/>

<m4:outputexec m4alias="<%=zmetodoGetScheduleParams%>" m4varname="zmetodoGetScheduleParamsVal"/>


<%if (zmetodoGetScheduleParamsVal == null){ zmetodoGetScheduleParamsVal = "";}
if (zmetodoGetScheduleParamsVal.equals(zSTR_M4_ERROR)) { %>
	<%@ include file="/shco_rp/shco_m4throw_gen_error.jsp" %>
	
<%}else{%>
	<m4:item m4name="<%=zIdTaskParameterr%>"  m4varname="zIdTaskParameter_var" />
	<m4:item m4name="<%=zTaskParameterValuer%>" m4varname="zTaskParameterValue_var" jsafe="true"/>
	<m4:item m4name="<%=zIdTaskr%>" m4varname="zIdTask_var"/>
	<m4:item m4name="<%=zJSIdRoler%>" m4varname="zJSIdRole_var"/>
	<m4:item m4name="<%=zJSIdSocr%>" m4varname="zJSIdSoc_var"/>
	<m4:item m4name="<%=zJSSocAwarer%>" m4varname="zJSSocAware_var"/>
    <m4:item m4name="<%=zJSSocEditr%>" m4varname="zJSSocEdit_var"/>
	<m4:item m4name="<%=zJSSocMultiSelr%>" m4varname="zJSSocMultiSelr_var"/>
	<m4:item m4name="<%=zNReportr%>" m4varname="zNReport_var" jsafe="true"/>

    <%@ include file="/shco_g0/shco_gen_schedule_include.jsp" %>
	<script type="text/javascript">
	
	   sTaskGroupDesc = m4getmessage('_shco_rp_report') + ":" + "<%=zNReport_var%>" + " " + m4getmessage('_shco_rp_schedule')+ ":" + m4today() + " " + m4now() ;
	  
	   m4valor('<%=zfrmscheduleparams%>','<%=zsh_TaskGroupName%>','<%=zNReport_var%>','set');
	   m4valor('<%=zfrmscheduleparams%>','<%=zsh_TaskGroupDesc%>',sTaskGroupDesc,'set');
	   m4valor('<%=zfrmscheduleparams%>','<%=zsh_IdTask%>','<%=zIdTask_var%>','set');
	   m4valor('<%=zfrmscheduleparams%>','<%=zsh_OrgList%>','<%= "1*" + zJSIdSoc_var%>','set');
	   m4valor('<%=zfrmscheduleparams%>','<%=zsh_OrgAware%>','<%=zJSSocAware_var%>','set');
	   m4valor('<%=zfrmscheduleparams%>','<%=zsh_OrgMultiselection%>','<%=zJSSocMultiSelr_var%>','set');
	   m4valor('<%=zfrmscheduleparams%>','<%=zsh_OrgEditable%>','<%=zJSSocEdit_var%>','set');
	   m4valor('<%=zfrmscheduleparams%>','<%=zsh_ParamNameList%>','<%=zIdTaskParameter_var%>','set');
	   m4valor('<%=zfrmscheduleparams%>','<%=zsh_ParamValueList%>','<%=zTaskParameterValue_var%>','set');
       m4valor('<%=zfrmscheduleparams%>','<%=zsh_ret_page%>','shco_rp/shco_m4throw_schedule.jsp?zretmode=js','set');
	   window.resizeTo(800,600);
	   m4JobScheduler();
	   
	</script>
<m4:endpage/>
<%}}%>
</body>
</html>

