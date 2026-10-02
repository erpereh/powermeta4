<html xmlns="http://www.w3.org/1999/xhtml">
<%@taglib uri="M4Tags" prefix="m4"%>

<%  String zsubsesion = "SSM_SALARY_REVIEW_PROCESS"; 
    String zestado = "21";
%>

<m4:page subsessionid="<%=zsubsesion%>">

<m4:job>
	<m4:datadef m4o="SSM_SALARY_REVIEW_PROCESS" m4name="<%=zsubsesion%>"/>

	<%
		String for_filtering = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"FILTER");
 	    String perf_level = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_LEVEL");
	%>

	<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_SET_SAL_PLAN_FOR_REVIEW" m4object="<%=zsubsesion%>">
		<m4:param name="ARG_INPUT_SAL_PLAN" value='<%= (for_filtering)%>'/>
	</m4:exec>

	<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_SET_EMPLOYEE_PERFORMANCE" m4object="<%=zsubsesion%>">
		<m4:param name="ARG_PERFORMANCE" value='<%= (perf_level)%>'/>
	</m4:exec>

</m4:job>
<% 

    String last_base_vl = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LAST_BASE_DEPENDANT_REVIEW_VAL");
    String last_base_cr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LAST_BASE_DEPENDANT_REVIEW_CUR");
    String last_base_fi = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LAST_BASE_DEP_REVIEW_DT_START");
    String last_base_ff = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LAST_BASE_DEP_REVIEW_DT_END");

	response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4.jsp?estado=" + zestado + "&lbv=" + last_base_vl + "&lbc=" + last_base_cr + "&lbfi=" + last_base_fi + "&lbff=" + last_base_ff); 
%>

</m4:page>

</html>