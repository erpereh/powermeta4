<html xmlns="http://www.w3.org/1999/xhtml">
<%@taglib uri="M4Tags" prefix="m4"%>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<%  String zsubsesion = "SSM_SALARY_REVIEW_PROCESS"; 
    String zestado = "21";
	String id_operation = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"OPERATION");
	String email_dir = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SEL_DIR");
	String email_text = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"MAIL_TEXT");

	M4SessionCl zsesion = M4Context.getM4SessionCl(request); 
	String zminombre = zsesion.getBagEntries("minombre");

%>
	


<m4:page subsessionid="<%=zsubsesion%>">

<m4:job>
	<m4:datadef m4o="SSM_SALARY_REVIEW_PROCESS" m4name="<%=zsubsesion%>"/>

	<m4:exec node="SSM_SALARY_REVIEW_PROCESS" alias="delegate" method="CR_SEND_DELEGATE_MAIL" m4object="<%=zsubsesion%>">
		<m4:param name="ARG_EMAIL_DIR" value='<%= (email_dir)%>'/>
		<m4:param name="ARG_OPERATION" value='<%= (id_operation)%>'/>
		<m4:param name="ARG_MAIL_TEXT" value='<%= (email_text)%>'/>
		<m4:param name="ARG_MANAGER_NAME" value='<%= (zminombre)%>'/>
	</m4:exec>
</m4:job>

<%

	String id_work_unit = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WORK_UNIT");
	String resp_tp = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RESP_TYPE");
	response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu.jsp?WU=" + id_work_unit + "&RESP_TYPE=" + resp_tp); 

%>

</m4:page>

</html>