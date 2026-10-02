<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_update_wkitem.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="../shco_g0/shco_gen_taglib.jsp" %><html><head><title></title>
<%@ include file="../shco_g0/shco_gen_portal_arg.jsp" %><%@ include file="../shco_g0/shco_gen_bag.jsp" %>
<body>

<%!
	
	private static String getStringValue(String sValue) {
		return ((sValue == null) || sValue.equals("") || sValue.equals("null")) ? null : sValue;
	}
%>
<%-- request parameters --%>
<%
	 
	String zIdWorkItem = getStringValue(request.getParameter("ID_WORKITEM"));
	String zTaskType = getStringValue(request.getParameter("ID_TYPE"));
	String zDtReminder = getStringValue(request.getParameter("DT_REMINDER"));
	String m4filter = "IF ID_WORKITEM = \""+zIdWorkItem+"\" THEN RETURN(1)";
	String zsubsesion = getStringValue(request.getParameter("zsubsesion"));
	String zredireccion = getStringValue(request.getParameter("zredireccion"));
	String zdireccion = "shco_td_update_wkitem";
%>

<%-- variables --%>
<%
String zm4object =  zsubsesion;
String znodoReminders = "SHCO_TD_REMINDERS";
String zfilterWklist = "FILTERWORKLIST";
String zfilterdef = zsubsesion + "!" +znodoReminders + "." +zfilterWklist;
String zUpdateRemindermethod = zsubsesion + "!" + znodoReminders + ".UPDATE_REMINDER";	

%>

<%-- start application server transactions --%>
<m4:startpage m4task="<%=zsubsesion%>"/>
	<m4:beginjob/>
		<m4:datadef m4o="<%=zm4object%>" m4name="<%=zsubsesion%>"/>
		<m4:exec m4method="<%=zUpdateRemindermethod%>">
				 <m4:param name="AI_ID_WKITEM" value="<%=zIdWorkItem%>"/>
				 <m4:param name="AI_DT_REMINDER" value="<%=zDtReminder%>"/>
		</m4:exec>
	<m4:endjob/>
	<script type="text/javascript">
  	   this.close();
	</script>
<m4:endpage/>
</body>
</html>
