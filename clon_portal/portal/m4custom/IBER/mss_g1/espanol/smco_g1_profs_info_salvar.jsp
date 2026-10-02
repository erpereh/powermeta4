<html xmlns="http://www.w3.org/1999/xhtml">
<%@taglib uri="M4Tags" prefix="m4"%>

<%  String zsubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA"; 
    String zestado = "11";
%>

<m4:page subsessionid="<%=zsubsesion%>">
<m4:datadef m4o="SMCO_EMPLOYEE_PROFESIONAL_DATA" m4name="<%=zsubsesion%>"/>

<m4:job>

	<%
		String string_with_layers = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"layers_visibles");

	%>

	<m4:exec node="SMCO_EMPLOYEE_PROFESIONAL_DATA" alias="delegate" method="SMCO_SAVE_VISIBLITY_CONFIG" m4object="<%=zsubsesion%>">
		<m4:param name="ARG_STRING_WITH_LAYERS" value='<%= (string_with_layers)%>'/>
	</m4:exec>

</m4:job>

<% 
	String empleado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado");
	String periodo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo");

	response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp?person=" + empleado + "&person_ord=" + periodo); 
%>

</m4:page>

</html>