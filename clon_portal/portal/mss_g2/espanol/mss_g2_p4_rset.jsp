<html xmlns="http://www.w3.org/1999/xhtml">
<%@taglib uri="M4Tags" prefix="m4"%>

<%  String zsubsesion = "SSM_SALARY_REVIEW_PROCESS"; 
	String rec_to_process = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NUM_SAL_PLANS");
    String zestado = "21";
%>

<m4:page subsessionid="<%=zsubsesion%>">

<m4:job>
	<m4:datadef m4o="SSM_SALARY_REVIEW_PROCESS" m4name="<%=zsubsesion%>"/>
		<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_RESET_EMPLOYEE_SALARY_PLANS" m4object="<%=zsubsesion%>"/>
</m4:job>

<% 
response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3.jsp?estado=" + zestado);
	
%>

</m4:page>

</html>
