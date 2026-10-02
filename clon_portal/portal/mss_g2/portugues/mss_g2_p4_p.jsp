<html xmlns="http://www.w3.org/1999/xhtml">
<%@taglib uri="M4Tags" prefix="m4"%>

<%  String zsubsesion = "SSM_SALARY_REVIEW_PROCESS"; 
	String rec_to_process = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NUM_SAL_PLANS");
    String zestado = "21";
	int icount = 0;
	try { icount = Integer.parseInt(rec_to_process); } catch(Exception e) { icount = 0; }
%>

<m4:page subsessionid="<%=zsubsesion%>">

<m4:job>
	<m4:datadef m4o="SSM_SALARY_REVIEW_PROCESS" m4name="<%=zsubsesion%>"/>
	<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_SET_NEW_COMMENTS" m4object="<%=zsubsesion%>"/>
	<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_DEL_SAL_PLANS_REVIEWED" m4object="<%=zsubsesion%>"/>

	<% for(int b = 0; b < icount ; b++) { %>

		<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_UPDATE_ITEMS" m4object="<%=zsubsesion%>">
			<% String field_info = "HCO_CR_SALARY_P_ID=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HCO_CR_SALARY_P_ID_" + b) + ";";
				field_info = field_info + "INC_AMOUNT_MNG=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"INC_AMOUNT_MNG_" + b) + ";" ;
				field_info = field_info + "INC_AMOUNT_MNG_REAL=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"INC_AMOUNT_MNG_REAL_" + b) + ";" ;
				field_info = field_info + "INC_PERCENTAGE_MNG=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"INC_PERCENTAGE_MNG_" + b) + ";";
			%>
			<m4:param name="ARG_ITEM_PAIRS" value='<%= (field_info)%>'/>
		</m4:exec>

	<% } %>

		<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_UPDATE_ITEMS" m4object="<%=zsubsesion%>">
			<% String field_info = "TOTAL_MANAGER_CASH_HD=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TOTAL_MANAGER_CASH_HD") + ";";
				field_info = field_info + "TOTAL_MANAGER_CASH_HD_REAL=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TOTAL_MANAGER_CASH_HD_REAL") + ";";
				field_info = field_info + "START_DATE=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"START_DATE") + ";";
				field_info = field_info + "END_DATE=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"END_DATE") + ";";
			%>
			<m4:param name="ARG_ITEM_PAIRS" value='<%= (field_info)%>'/>
		</m4:exec>
		<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_SET_SAL_REVIEW_EMP_RESUMEN" m4object="<%=zsubsesion%>"/>
		<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_SET_HT_REVIEW_EMP" m4object="<%=zsubsesion%>"/>
		<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_SET_EMPLOYEE_SALARY_PLANS" m4object="<%=zsubsesion%>"/>

		<m4:outputdef node="SSM_SALARY_REVIEW_PROCESS" m4alias="GENERICO" m4object="<%=zsubsesion%>"/>

</m4:job>

	<m4:item m4varname="var_control" item="CR_LAST_EMPLOTYEE_CALCULATED" htmlsafe="true" outputdef="GENERICO"/>

<% if(var_control.equals("1")) { 

	response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5.jsp?estado=" + zestado); 
}else{
	response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3.jsp?estado=" + zestado); 
}
%>

</m4:page>

</html>
