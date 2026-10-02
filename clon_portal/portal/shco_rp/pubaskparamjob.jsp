<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: pubaskparamjob.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>



<%!
	private static String getCheckValue(String sValue) {
		return (sValue == null) ? "0" : (sValue.equals("on") ? "1" : "0");
	}

	private static String getStringValue(String sValue) {
		return ((sValue == null) || sValue.equals("") || sValue.equals("null")) ? null : sValue;
	}
%>

<%


	String sID_T3 = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "txtIdT3"));
	String sID_REPORT = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "txtIdReport"));
	String sID_OUTPUT = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "txtIdOutput"));
	String sREPORTPARAM = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "txtReportParam"));		
	String sN_REPORT = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "txtNReport"));		
	String sID_REPORT_TYPE = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "txtIdReportType"));		
	
	String sDYN_FILTER_ALIAS= zsubsesion ;
	String zbackcall = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zbackcall"));
	String znodolabel = "SHCO_GN_LABEL";
    String zraizlabel =  znodolabel + ":" + zsubsesion  + "!" + znodolabel + ".";

	String zHistoricFiltersFilled = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "HistoricFiltersFilled"));
	String zCorrectionFilterFilled = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "CorrectionFilterFilled"));
	String zHistoricFilterStartDate = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "HistoricFilterStartDate"));
	String zHistoricFilterEndDate =  getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "HistoricFilterEndDate"));
	String zCorrectionFilterDate =  getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "CorrectionFilterDate"));
	String zLetterOnlyViewFilled = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "LetterOnlyViewFilled"));
	String zLetterOnlyView =  getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "LetterOnlyView"));
%>

<m4:beginjob/>

   <m4:datadef m4o="<%=zm4object%>" m4name="<%=zsubsesion%>"/>

		<%--  Recoger los parametros solo en la llamada desde fuera --%>
    <% if (zbackcall == null) {%>
	 <m4:exec alias="SetParams" m4object='<%=zsubsesion%>' node="API_PUB_REPORTS_CL" method="API_SET_PARAMS">
		<m4:param name="ARG_ID_T3" value='<%=sID_T3%>'/>
		<m4:param name="ARG_ID_REPORT" value='<%=sID_REPORT%>'/>
        <m4:param name="ARG_ID_OUTPUT" value='<%=sID_OUTPUT%>'/>
		<m4:param name="ARG_REPORT_PARAM" value='<%=sREPORTPARAM%>' />
        <m4:param name="ARG_N_REPORT" value='<%=sN_REPORT%>' />
        <m4:param name="ARG_ID_REPORT_TYPE" value='<%=sID_REPORT_TYPE%>' />		
	 </m4:exec>
   <%}%> 

	<m4:exec alias="AskParam" m4object='<%=zsubsesion%>' node="SHCO_RP_PUB_REPORTS" method="API_LIST_PARAMS"></m4:exec>
	<m4:exec alias="AskLoadT3Filters" m4object='<%=zsubsesion%>' node="API_PUB_REPORTS_CL" method="API_LOAD_T3_FILTERS"></m4:exec>
	


	<%-- David: filtros en ejecución 12/02/2002 --%>
	<% if (zbackcall == null) {%>
	<m4:exec alias="SetAskDynFilterParams" m4object='<%=zsubsesion%>' node="API_DYN_FILTER" method="API_SET_DYN_FILTERS_PARAMS">
		<m4:param name="ARG_ID_T3" value="<%=sID_T3%>" />
		<m4:param name="ARG_RETURN_PAGE" value="DUMMY"/>
		<m4:param name="ARG_APPLY_MODE" value="1" />
		<m4:param name="ARG_ID_T3_ALIAS" value="" />
		<m4:param name="ARG_ID_T3_SESSION" value=""/>
	</m4:exec>
	<%}%>

   <% if (zbackcall == null && zHistoricFiltersFilled != null && Integer.parseInt(zHistoricFiltersFilled) == 1) {%>
		<m4:exec alias="SetHistDates" m4object='<%=zsubsesion%>' node="API_PUB_REPORTS_CL" method="API_SET_HIST_DATES">
		<m4:param name="ARG_DATA_START_DATE" value='<%=zHistoricFilterStartDate%>'/>
		<m4:param name="ARG_DATA_END_DATE" value='<%=zHistoricFilterEndDate%>'/>	
		</m4:exec>
	<%}%>
	<% if (zbackcall == null && zCorrectionFilterFilled != null && Integer.parseInt(zCorrectionFilterFilled) == 1) {%>
		<m4:exec alias="SetCorrDates" m4object='<%=zsubsesion%>' node="API_PUB_REPORTS_CL" method="API_SET_CORR_DATES">
		<m4:param name="ARG_CORRECTION_DATE" value='<%=zCorrectionFilterDate%>'/>	
		</m4:exec>
   <%}%>
   <% if (zbackcall == null && zLetterOnlyViewFilled != null ) {%>
		<m4:exec alias="SetLetterOnlyView" m4object='<%=zsubsesion%>' node="API_PUB_REPORTS_CL" method="API_SET_LETTER_ONLY_VIEW">
		<m4:param name="ARG_LETTER_ONLY_VIEW" value='<%=zLetterOnlyView%>'/>	
		</m4:exec>
   <%}%>
	
	<m4:exec alias="AskDynFilterList" m4object='<%=zsubsesion%>' node="API_DYN_FILTER" method="API_LIST_DYN_FILTERS">
	</m4:exec>
	
	<m4:outputdef m4alias="DataAskParam" m4object='<%=zsubsesion%>' node="SRP_PARAM_LIST" records="*"></m4:outputdef>
	<m4:outputdef m4alias="ApiAskParam" m4object='<%=zsubsesion%>' node="API_PUB_REPORTS_CL" records="*"></m4:outputdef>
	<m4:outputdef m4alias="<%=znodolabel%>" m4object='<%=zsubsesion%>' node="<%=znodolabel%>" records="*"></m4:outputdef>
    <m4:outputdef m4alias="RpPubReports" m4object='<%=zsubsesion%>' node="SHCO_RP_PUB_REPORTS" records="*"></m4:outputdef>		
	<m4:outputdef m4alias="DynFilterNodeList" m4object='<%=zsubsesion%>' node="DYN_FILTER_LIST" records="*"></m4:outputdef>		
	<m4:outputdef m4alias="ApiDynFilterNode" m4object='<%=zsubsesion%>' node="API_DYN_FILTER" records="*"></m4:outputdef>
				
				
<m4:endjob/>


