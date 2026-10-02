<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: dynfilterlistjob.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%!
	
	private static String getStringValue(String sValue) {
		return ((sValue == null) || sValue.equals("") || sValue.equals("null")) ? null : sValue;
	}
	
	String sDYN_FILTER_ALIAS= "DynFilter";
%>


<%
	    String zidt3 = getStringValue(request.getParameter("zidt3"));
	    String zidt3alias = getStringValue(request.getParameter("zidt3alias"));	
        String zreturnpage = getStringValue(request.getParameter("zreturnpage"));
        String zfilterapplymode = getStringValue(request.getParameter("zfilterapplymode"));
        String zbackcall = getStringValue(request.getParameter("zbackcall"));
	    String zt3session = getStringValue(request.getParameter("zt3session"));

%>


<m4:beginjob/>

	<m4:datadef m4o="API_DYN_FILTER_HTML_CL" m4name="<%=sDYN_FILTER_ALIAS%>"/>
	
        <%--  Recoger los parametros solo en la llamada desde fuera --%>
        <% if (zbackcall == null) {%>
	     <m4:exec alias="DynFilterSetParams" m4object="<%=sDYN_FILTER_ALIAS%>" node="API_DYN_FILTER" method="API_SET_DYN_FILTERS_PARAMS">
		<m4:param name="ARG_ID_T3" value="<%=zidt3%>"/>
		<m4:param name="ARG_APPLY_MODE" value="<%=zfilterapplymode%>"/>
        <m4:param name="ARG_ID_T3_ALIAS" value="<%=zidt3alias%>"/>
        <m4:param name="ARG_RETURN_PAGE" value="<%=zreturnpage%>"/>
        <m4:param name="ARG_ID_T3_SESSION" value="<%=zt3session%>"/>

	 </m4:exec>
         <%}%> 

         <%--  Si no hay filtro trae todos --%>
	 <m4:exec alias="DynFilterList" m4object="<%=sDYN_FILTER_ALIAS%>" node="API_DYN_FILTER" method="API_LIST_DYN_FILTERS">
	 </m4:exec>

	<m4:outputdef m4alias="DynFilterNodeList" m4object="<%=sDYN_FILTER_ALIAS%>" node="DYN_FILTER_LIST" records="*"/>		
	<m4:outputdef m4alias="ApiDynFilterNode" m4object="<%=sDYN_FILTER_ALIAS%>" node="API_DYN_FILTER" records="*"/>		

<m4:endjob/>


