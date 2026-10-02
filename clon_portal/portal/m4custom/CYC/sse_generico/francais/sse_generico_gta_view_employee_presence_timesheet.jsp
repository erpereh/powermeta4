<%
	//sse_g4_gta_day_detail.jsp
	String sMonthOrDetail = "M"; //Presence file	
	String sCommingFrom = "E"; //employee
	String sType = "EMPLOYEE_SELF_SERVICE";	
	String sIdHr = "";	
	String sOrPer = "";	
	String sFormAction = "/servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_view_employee_presence_timesheet.jsp";	
	String sFormActionRedirect  = "/servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_employee_day_details_redirection.jsp";	

	
%><%@ include file="../../sse_generico/francais/sse_generico_gta_employee_presence_TSheet.jsp" %>

<!-- Tests Resolution -->
<script type="text/javascript">
if ((screen.width<=1024) && (screen.height<=768)){
                var showMLeft = parent.$('showMenu').className;
                if (showMLeft == "menuSwitchShow hidden")
                {
                               parent.Meta4.portal.toggleMenu();
                }
}
</script>
