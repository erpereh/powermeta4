<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: dynfiltereditgenjob.jsp
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
        String zidoperation = getStringValue(request.getParameter("zidoperation"));
      	String zidsentence = getStringValue(request.getParameter("zidsentence"));         
       	String zidescenario = getStringValue(request.getParameter("zidescenario"));      
       	String zidtable = getStringValue(request.getParameter("zidtable"));  
		String zforwardpage = getStringValue(request.getParameter("zforwardpage"));  
        String zreturnpage = getStringValue(request.getParameter("zreturnpage"));  
        String zidrelationtype = getStringValue(request.getParameter("zidrelationtype"));
        String zm4alias = getStringValue(request.getParameter("zm4alias"));        
        String zidnode = getStringValue(request.getParameter("zidnode"));        
        String zdynfilteralias = getStringValue(request.getParameter("zdynfilteralias"));        
        

%>

<m4:beginjob/>

     <%--  Aplicar filtro según el modo establecido --%>
	 <m4:exec alias="DynFilterList" m4object="<%=zdynfilteralias%>" node="API_DYN_FILTER" method="API_SET_DYN_FILTERS_NODE">			
		<m4:param name="ARG_ID_NODE" value="<%=zidnode%>"/>
	 </m4:exec>

<m4:endjob/>





	



