<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: dynsavefiltergenjob.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ page import="java.util.Properties" %>
<%@ taglib uri="M4Tags" prefix="m4" %>


<%!
	
	private static String getStringValue(String sValue) {
		return ((sValue == null) || sValue.equals("") || sValue.equals("null")) ? null : sValue;
	}
%>


<%	
	String sIdSentence = getStringValue(request.getParameter("txtIdSentence"));    
	String sLanguaje = getStringValue(request.getParameter("txtLanguage"));   
	String sApiSql = getStringValue(request.getParameter("txtApiSql")); 
	String sIdOperation = getStringValue(request.getParameter("txtIdOperation")); 
	String zdynfilteralias = getStringValue(request.getParameter("zdynfilteralias"));
              
%>


<m4:beginjob/>

	<% if (sIdSentence != null) { %>
	   	
	        <m4:exec alias="DynFilterList" m4object="<%=zdynfilteralias%>" node="API_DYN_FILTER" method="API_SAVE_DYN_FILTER">
			<m4:param name="ARG_ID_SENTENCE" value="<%=sIdSentence%>"/> 
			<m4:param name="ARG_LANGUAGE" value="<%=sLanguaje%>"/> 
			<m4:param name="ARG_API_SQL" value="<%=sApiSql%>"/>
			<m4:param name="ARG_ID_SCENARIO" value=""/>  				
	   	</m4:exec>
	<% } %>	
               
     
     
    <%--  Limpiar un filtro dinámico tras la operación de borrado --%>
    <% if (sIdOperation.equals("REMOVE") ){ %>
		
		
		<m4:exec alias="DynFilterList" m4object="<%=zdynfilteralias%>" node="API_DYN_FILTER" method="API_SAVE_DYN_FILTER">
			<m4:param name="ARG_ID_SENTENCE" value=""/> 
			 <m4:param name="ARG_LANGUAGE" value=""/> 
			<m4:param name="ARG_API_SQL" value=""/> 	
	 	</m4:exec>
	<% } %>	 
            

<m4:endjob/>





	



