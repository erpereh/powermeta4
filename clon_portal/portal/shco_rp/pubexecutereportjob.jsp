<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: pubexecutereportjob.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>



<%!
	
	private static String getStringValue(String sValue) {
		return ((sValue == null) || sValue.equals("") || sValue.equals("null")) ? null : sValue;
	}
%>

<%

	String sID_T3 = getStringValue(request.getParameter("txtIdT3"));
	
	String sID_REPORT = getStringValue(request.getParameter("txtIdReport"));
	String sID_OUTPUT = getStringValue(request.getParameter("txtIdOutput"));
	String sREPORTPARAM = getStringValue(request.getParameter("txtReportParam"));		
	String sAllPARAM = getStringValue(request.getParameter("txtAllParam"));
	String sID_REPORT_TYPE  = getStringValue(request.getParameter("txtIdReportType"));
    String sN_REPORT = getStringValue(request.getParameter("txtNReport"));
        
%>


   <m4:beginjob/>
   
	<m4:exec alias="Prepare" m4object="<%=zsubsesion%>" node="SHCO_RP_PUB_REPORTS" method="API_GET_PARAM_STRING">		 
		<m4:param name="P_PARAM_STRING" value="<%=sAllPARAM%>" />
	</m4:exec>
	<m4:outputdef m4alias="DataPrepare" m4object="<%=zsubsesion%>" node="SRP_PARAM_LIST" records="*"/>
				
   <m4:endjob/>

