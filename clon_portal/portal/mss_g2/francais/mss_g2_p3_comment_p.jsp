<html xmlns="http://www.w3.org/1999/xhtml">
<%@taglib uri="M4Tags" prefix="m4"%>

<%  String zsubsesion = "SSM_SALARY_REVIEW_PROCESS"; %>

<m4:page subsessionid="<%=zsubsesion%>">

<m4:job>
	<m4:datadef m4o="SSM_SALARY_REVIEW_PROCESS" m4name="<%=zsubsesion%>"/>

	<% 
		String PN_REC_INDEX;
		for(int i = 0; (PN_REC_INDEX = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PN_REC_INDEX_" + i)) != null; i++) {
	%>

			<% if(com.meta4.taglib.util.M4SafeRequest.getParameter(request,"del_" + i).equals("0")) { %>

				<%
					String field_info =
						"HCO_CR_COMMENT=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HCO_CR_COMMENT_" + i);
				%>

					<m4:exec node="SSM_SALARY_REVIEW_COMMENTS" method="CR_UPDATE_ITEMS" m4object="<%=zsubsesion%>">
						<m4:param name="ARG_ITEM_PAIRS" value='<%= (field_info)%>'/>
						<m4:param name="ARG_IDX_RECORD" value='<%= (PN_REC_INDEX)%>'/>
					</m4:exec>

			<%}else{%>

				<!-- Delete record -->

				<m4:exec node="SSM_SALARY_REVIEW_COMMENTS" method="CR_DEL_RECORD" m4object="<%=zsubsesion%>">
					<m4:param name="ARG_IDX_RECORD" value='<%= (PN_REC_INDEX)%>'/>
				</m4:exec>

			<% } %>

	<% } %>

	<%
		String HCO_CR_COMMENT = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HCO_CR_COMMENT");
	%>

	<m4:exec node="SSM_SALARY_REVIEW_COMMENTS" method="CR_CREATE_COMMENT" m4object="<%=zsubsesion%>">
		<m4:param name="ARG_COMMENT" value='<%= (HCO_CR_COMMENT)%>'/>
	</m4:exec>

</m4:job>
<% 
	response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_comment.jsp"); 
%>

</m4:page>

</html>
