<html xmlns="http://www.w3.org/1999/xhtml">
<%@taglib uri="M4Tags" prefix="m4"%>

<%  String zsubsesion = "SSM_SET_WORK_UNIT_TO_SEE"; 
    String zestado = "21";
	String tipo_resp = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_for_filter");
%>

<m4:page subsessionid="<%=zsubsesion%>">

<m4:job>
	<m4:datadef m4o="SSM_SET_WORK_UNIT_TO_SEE" m4name="<%=zsubsesion%>"/>

	<%
		String work_unit = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"wu");
	%>

	<m4:exec node="SSM_SET_WORK_UNIT_TO_SEE" method="SSM_SET_ALL_SUB_TREE" m4object="<%=zsubsesion%>">
		<m4:param name="ARG_WORK_UNIT" value='<%= (work_unit)%>'/>
	</m4:exec>

</m4:job>
<% 
	response.sendRedirect("/servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp.jsp?estado=" + zestado + "&tp_for_filter=" + tipo_resp);
%>

</m4:page>

</html>