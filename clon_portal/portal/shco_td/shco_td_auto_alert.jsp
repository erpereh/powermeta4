<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_auto_alert.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/shco_g0/shco_gen_bag.jsp" %>
<%@ include file="/shco_g0/shco_gen_tec_include.jspf" %>
<%@ page import="java.text.*" %>
<%--
	We are assuming that browser, webserver and appserver are in the same
	timezone, so this parameter calculated in the webserver. 
	Changes are needed to set this parameter from the browser.
--%>
<%
	SimpleDateFormat reminderFormatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	String sReminderDate = reminderFormatter.format(new Date()); 

String zm4objectwklist = "SHCO_TD_MT_RMD_WKLIST";	
String zsubsesionwklist = zm4objectwklist;
String znodoReminders = "SHCO_TD_REMINDERS";
String zoutputdefnodoreminders = zsubsesionwklist + "!" + znodoReminders + "[*]";
String zmovenodoreminders = znodoReminders + ":" +znodoReminders + "[BEGIN]";	
String zcountnodoreminders = zsubsesionwklist + "!" + znodoReminders;

String zcomunReminder = znodoReminders + ":" + zsubsesionwklist + "!" + znodoReminders + "[&VAR.m4lix]" + ".";
String zIdTypeitem_c= zcomunReminder + "ID_TYPE";
String zIdworkitem_c= zcomunReminder + "ID_WORKITEM";
String zIdTaskItem_c = zcomunReminder + "ID_TASK";

String zloadremindersmethod = zsubsesionwklist + "!" + znodoReminders + ".LOAD_REMINDERS";	


%>


<m4:beginjob/>
	<m4:datadef m4o="<%=zm4objectwklist%>" m4name="<%=zsubsesionwklist%>"/>
	
	<m4:exec m4method="<%=zloadremindersmethod%>">
		<m4:param name="NOW" value="<%= sReminderDate %>"/>
	</m4:exec>

	<m4:outputdef m4alias="<%=znodoReminders%>">
			<m4:param name="m4name0" value="<%=zoutputdefnodoreminders%>"/>
	</m4:outputdef>
<m4:endjob/>

<%-- Gets the number of registers in the client side --%>
<m4:count outputdef="<%=znodoReminders%>" m4place="local" m4varname="sNumberOfReminders" />
<%
	// Convert to int.
	int iNumberOfReminders = -1;
	try {
		iNumberOfReminders = new Integer(sNumberOfReminders).intValue();
	}
	catch (Exception e)
	{
		//m_log.fatal("EXCEPTION: ", e);
		iNumberOfReminders = -1;
		
	}
	if (iNumberOfReminders > 0)
	{
%>
		<m4:move><m4:param name="<%=zsubsesionwklist%>" value="<%=zmovenodoreminders%>"/></m4:move>
		
		<%-- launch windows --%>
		<m4:loop from="0" to="<%= new Integer(new Integer(sNumberOfReminders).intValue()-1).toString() %>">
		
			<m4:item m4name="<%=zIdworkitem_c%>" m4varname="sWorkItem" htmlsafe="true"/>
			<m4:item m4name="<%=zIdTypeitem_c%>" m4varname="sType" htmlsafe="true"/>
			<m4:item m4name="<%=zIdTaskItem_c%>" m4varname="sIdTask" htmlsafe="true"/>
		
			<%
				// convert sType from double to int.
				sType = new Integer(new Double(sType).intValue()).toString();
			%>
		
			<script type="text/javascript">
				var wkitemid<%=m4lix%> = "<%= URLEncoder.encode(sWorkItem) %>";
				var taskid<%=m4lix%> = "<%=sIdTask%>"
				var zsubsesion
				var sURL = "/servlet/CheckSecurity/JSP/shco_td/shco_td_show_alert.jsp?zsubsesionwklist=" + "<%=zsubsesionwklist%>" + "&wkitemid=" + wkitemid<%=m4lix%> + "&taskid=" + taskid<%=m4lix%> + "&type=" + "<%=sType%>"
				var top<%=m4lix%> = 20 + 30*<%=m4lix%>;
				var left<%=m4lix%> = 20 + 30*<%=m4lix%>; 
		        window.open(sURL,"reminder_details<%=m4lix%>","top="+top<%=m4lix%>+",left="+left<%=m4lix%>+",toolbar=no,scrollbars=no,directories=no,status=yes,menubar=no,resizable=no,width=360,height=250");
			</script>
		</m4:loop>
<%
	}
%>

