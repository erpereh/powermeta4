<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@taglib uri="M4Tags" prefix="m4"%>

<%  String zsubsesion = "SSM_SALARY_REVIEW_PROCESS"; 
    String zestado = "21";
%>

<m4:page subsessionid="<%=zsubsesion%>">

<m4:job>
	<m4:datadef m4o="SSM_SALARY_REVIEW_PROCESS" m4name="<%=zsubsesion%>"/>

	<%
		String id_employee = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"EMPLOYEE");
		//desencrypt HR
		id_employee = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", id_employee);
		if (id_employee == null) {id_employee="";}

		String id_or_employee = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"EMPLOYEE_OR");
		//desencrypt HR_ORD
		id_or_employee = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", id_or_employee);
		if (id_or_employee == null) {id_or_employee="";}

		String body_text = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"MAIL_TEXT");

	%>

	<m4:exec node="SSM_SALARY_REVIEW_PROCESS" alias="delegate" method="CR_SET_RESP_SALARY_DELEGATE" m4object="<%=zsubsesion%>">

		<m4:param name="ARG_HR" value='<%= (id_employee)%>'/>
		<m4:param name="ARG_OR_HR" value='<%= (id_or_employee)%>'/>
		<m4:param name="ARG_MAIL_TEXT" value='<%= (body_text)%>'/>

	</m4:exec>

</m4:job>


<% String result; %>
<m4:outputexec var="result" alias="delegate"/>

<% 
	String id_work_unit = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WORK_UNIT");
	String resp_tp = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RESP_TYPE");

	if (result.equals("1"))
	{
		response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu_mail.jsp?WORK_UNIT=" + id_work_unit + "&RESP_TYPE=" + resp_tp); 
	}
	else
	{
		response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu.jsp?WU=" + id_work_unit + "&RESP_TYPE=" + resp_tp); 
	}
%>

</m4:page>

</html>
