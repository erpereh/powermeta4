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
	%>

	<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_SET_EMPLOYEES_FOR_REVIEW" m4object="<%=zsubsesion%>">
		<m4:param name="ARG_INPUT_EMPLOYEES" value='<%= (for_filtering)%>'/>
	</m4:exec>

</m4:job>
<% 
	response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3.jsp?estado=" + zestado); 
%>

</m4:page>

</html>
