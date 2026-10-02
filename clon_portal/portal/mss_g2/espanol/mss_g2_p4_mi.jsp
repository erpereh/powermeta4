<html xmlns="http://www.w3.org/1999/xhtml">
<%@taglib uri="M4Tags" prefix="m4"%>

<%
String zsubsesion = "SSM_SALARY_REVIEW_PROCESS";
String rec_to_process = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NUM_SAL_PLANS");
int icount = 0;
try { icount = Integer.parseInt(rec_to_process); } catch(Exception e) { icount = 0; }
%>

<m4:page subsessionid="<%=zsubsesion%>">

<m4:job>
<m4:datadef m4o="SSM_SALARY_REVIEW_PROCESS" m4name="<%=zsubsesion%>"/>
<%
String zbase_id_work_unit = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_WORK_UNIT");
String zbase_id_plan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_BASE_PLAN");
String zbase_num_employees = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_NUM_EMPLOYEES_BASE");
String zbase_id_currency = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_CURRENCY_BASE");
String zbase_dt_start = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_START_BASE");
String zbase_dt_end = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_END_BASE");
String znum_varb_plans = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_NUM_VARB_PLANS");
int zibase_num_employees = 0; try { zibase_num_employees = Integer.parseInt(zbase_num_employees); } catch(Exception e) { zibase_num_employees = 0; }
int zinum_varb_plans = 0; try { zinum_varb_plans = Integer.parseInt(znum_varb_plans); } catch(Exception e) { zinum_varb_plans = 0; }
%>
<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_MSR_IMP_BASE_PLAN" m4object="<%=zsubsesion%>">
	<m4:param name="ARG_SCO_ID_PLAN" value="<%=zbase_id_plan%>"/>
	<m4:param name="ARG_SCO_ID_WORK_UNIT" value="<%=zbase_id_work_unit%>"/>
	<m4:param name="ARG_SCO_NUM_EMPLOYEES" value="<%=zbase_num_employees%>"/>
	<m4:param name="ARG_SCO_ID_CURRENCY" value="<%=zbase_id_currency%>"/>
	<m4:param name="ARG_SCO_DT_START" value="<%=zbase_dt_start%>"/>
	<m4:param name="ARG_SCO_DT_END" value="<%=zbase_dt_end%>"/>
</m4:exec>
<% for (int i = 0; i < zibase_num_employees; i++) {
	String zbase_id_hr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR_BASE_" + i);
	String zbase_or_hr_role = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_ROLE_BASE_" + i);
	String zbase_amt_inc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_AMT_INC_BASE_" + i);
	String zbase_prc_inc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_PRC_INC_BASE_" + i);
	String zbase_comment = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_COMMENT_BASE_" + i);
	%>
	<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_MSR_IMP_EMPLOYEE" m4object="<%=zsubsesion%>">
		<m4:param name="ARG_SCO_ID_HR" value="<%=zbase_id_hr%>"/>
		<m4:param name="ARG_SCO_OR_HR_ROLE" value="<%=zbase_or_hr_role%>"/>
		<m4:param name="ARG_SCO_ID_PLAN" value="<%=zbase_id_plan%>"/>
		<m4:param name="ARG_SCO_AMT_INC" value="<%=zbase_amt_inc%>"/>
		<m4:param name="ARG_SCO_PRC_INC" value="<%=zbase_prc_inc%>"/>
		<m4:param name="ARG_SCO_COMMENT" value="<%=zbase_comment%>"/>
	</m4:exec>
<%}
for (int i = 0; i < zinum_varb_plans; i++) {
	String zvarb_id_plan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_VARB_PLAN_" + i);
	String zvarb_num_employees = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_NUM_EMP_VARB_" + i);
	String zvarb_id_currency = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_CURRENCY_VARB_" + i);
	String zvarb_dt_start = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_START_VARB_" + i);
	String zvarb_dt_end = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_END_VARB_" + i);
	int zivarb_num_employees = 0; try { zivarb_num_employees = Integer.parseInt(zvarb_num_employees); } catch(Exception e) { zivarb_num_employees = 0; }
	%>
	<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_MSR_IMP_VARB_PLAN" m4object="<%=zsubsesion%>">
		<m4:param name="ARG_SCO_ID_PLAN" value="<%=zvarb_id_plan%>"/>
		<m4:param name="ARG_SCO_NUM_EMPLOYEES" value="<%=zvarb_num_employees%>"/>
		<m4:param name="ARG_SCO_ID_CURRENCY" value="<%=zvarb_id_currency%>"/>
		<m4:param name="ARG_SCO_DT_START" value="<%=zvarb_dt_start%>"/>
		<m4:param name="ARG_SCO_DT_END" value="<%=zvarb_dt_end%>"/>
	</m4:exec>
	<%
	for (int k = 0; k < zivarb_num_employees; k++) {
		String zvarb_id_hr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR_VARB_" + i + "_" + k);
		String zvarb_or_hr_role = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_ROLE_VARB_" + i + "_" + k);
		String zvarb_amt_inc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_AMT_INC_VARB_" + i + "_" + k);
		String zvarb_prc_inc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_PRC_INC_VARB_" + i + "_" + k);
		String zvarb_comment = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_COMMENT_VARB_" + i + "_" + k);
		%>
		<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_MSR_IMP_EMPLOYEE" m4object="<%=zsubsesion%>">
			<m4:param name="ARG_SCO_ID_HR" value="<%=zvarb_id_hr%>"/>
			<m4:param name="ARG_SCO_OR_HR_ROLE" value="<%=zvarb_or_hr_role%>"/>
			<m4:param name="ARG_SCO_ID_PLAN" value="<%=zvarb_id_plan%>"/>
			<m4:param name="ARG_SCO_AMT_INC" value="<%=zvarb_amt_inc%>"/>
			<m4:param name="ARG_SCO_PRC_INC" value="<%=zvarb_prc_inc%>"/>
			<m4:param name="ARG_SCO_COMMENT" value="<%=zvarb_comment%>"/>
		</m4:exec>
<%	}
}%>
<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_MSR_IMP_FINISH" m4object="<%=zsubsesion%>">
</m4:exec>
</m4:job>

<script type="text/javascript" language="Javascript1.5">opener.document.forms["go_summary"].submit();window.close()</script>

</m4:page>
</html>
