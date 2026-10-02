<%
	//mss_g4_gta_timesheet_employee.jsp
	String sMonthOrDetail = "M"; //month
	String sCommingFrom = "M"; //manager
	String sType = "MSS";	

	String sFormAction = "/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_employee.jsp";	
	String sFormActionRedirect  = "/servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp";	

	String sIdHrEcrpt = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sIdHr");
	String sIdHr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sIdHrEcrpt);	
	if (sIdHr==null){
		sIdHr="";
	}

	String sOrPerEcrpt = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sOrPer");
	String sOrPer = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sOrPerEcrpt);	
	if ((sOrPer==null)||(sOrPer.equals(""))){
		sOrPer="1";
	}
	
%><%@ include file="../../sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp" %>