<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_show_alert.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<%@ page import="java.text.*" %>
<html><head><title></title>	
<body>

<%!
	
	private static String getStringValue(String sValue) {
		return ((sValue == null) || sValue.equals("") || sValue.equals("null")) ? null : sValue;
	}
%>
<%-- request parameters --%>
<%
	String type = getStringValue(request.getParameter("type")); 
	String wkitemid = getStringValue(request.getParameter("wkitemid"));
	String m4filter = "IF ID_WORKITEM = \""+wkitemid+"\" THEN RETURN(1)";
	String taskid = getStringValue(request.getParameter("taskid"));   
	String sid_wkitem_enc = URLEncoder.encode(wkitemid);
	String zsubsesion = getStringValue(request.getParameter("zsubsesionwklist"));
	String zredireccion = getStringValue(request.getParameter("zredireccion"));
%>
<%
String zm4object =  zsubsesion;
String znodolabel = "SHCO_GN_LABEL";
String znodoReminders = "SHCO_TD_REMINDERS";
String zoutputdefnodolabel = zsubsesion + "!" + znodolabel + "[*]";
String zoutputdefnodoreminders = zsubsesion + "!" + znodoReminders + "[*]";
String zmovenodoreminders = znodoReminders + ":" +znodoReminders + "[BEGIN]";	
String zmovenodolabel = znodolabel + ":" +znodolabel + "[BEGIN]";

String zDtReminder="DT_REMINDER";
String znbpoItem="N_BPO";
String znbpItem="N_BP";
String zreminderItem="AUX_VAL_2";
String zIdTaskItem ="ID_TASK";
String zcomunReminder = znodoReminders + ":" + zm4object + "!" + znodoReminders + "[0]" + ".";
String zraizlabel = znodolabel + ":" + zsubsesion + "!" + znodolabel + ".";
String zIdWorkItemItem = "ID_WORKITEM";		
String zType="ID_TYPE";

String znbpoItem_c=	  zcomunReminder + znbpoItem;
String znbpItem_c= zcomunReminder + znbpItem;
String zreminderItem_c= zcomunReminder + zreminderItem;
String zIdTaskItem_c = zcomunReminder + zIdTaskItem;
String zIdWorkItem_c = zcomunReminder + zIdWorkItemItem;


String zlblWeek = zraizlabel + "SHCO_LB_WEEK";
String zlblFinish = zraizlabel + "SHCO_LB_FINISH";
String zlblPostpone = zraizlabel + "SHCO_LB_POSTPONE";
String zlblMinutes = zraizlabel + "SHCO_LB_MINUTES";
String zlblHours = zraizlabel + "SHCO_LB_HOURS";
String zlblMonth = zraizlabel + "SHCO_LB_MONTH";
String zlblExecute = zraizlabel + "SHCO_LB_EXECUTE";

String zfilterWklist = "FILTERWORKLIST";
String zfilterdef = zsubsesion + "!" +znodoReminders + "." +zfilterWklist;

%>

<%-- javascript code --%>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen.js"></script>
<script language="JavaScript">
	// We must use this auxiliar variable in order to send the 'ID_WORKITEM' encoded.
	// If we use directly the java variable 'sid_wkitem_enc' in the '0penWindow' 
	// function, it decodes de string first, and then it doesn't work :-(	
	js_wkid = "<%= sid_wkitem_enc %>"
	

	  function fun_delay() 
	  {
			// retrieve the delay time (in seconds)
			var iDelay = m4select('NombreFormulario','selDelay','value');
			
			// get the current date.
			var oDate = new Date();
			
			// set the new time.
			var newTimeInMilliseconds = oDate.getTime() + (iDelay*1000);
			oDate.setTime(newTimeInMilliseconds);
			
			// writes the new date in a string en formato ISO
			var newDate = m4ISOTimeStamp(oDate);
			
			// sets the new value in the input control
			m4valor('oculto','<%=zDtReminder%>',newDate,'set');
            m4submit('oculto');
		}
	
	    function fun_finish() {
			// stablish DT_REMINDER = + infinito
					m4valor('oculto','<%=zDtReminder%>','-1','set');
            m4submit('oculto');
	   }
	   
	     function fun_exec(sIdWorkItem,sIdTask,sProcessType){
		    this.close();
  	        var sURL = "/servlet/CheckSecurity/JSP/shco_td/shco_td_exec_process.jsp";
		 	sURL = sURL + "?" + '<%=zIdWorkItemItem%>' + "=" +  sIdWorkItem;
			sURL = sURL + "&" + '<%=zIdTaskItem%>' + "=" +  sIdTask;
			sURL = sURL + "&" + '<%=zType%>' + "=" +  sProcessType;
			var valuesArr=new Array();
			m4window("shco_td_exec_process",sURL,valuesArr,'formexec');
			   
	    }

</script>


<%-- start application server transactions --%>
<m4:startpage m4task="<%=zsubsesion%>"/>
	<m4:beginjob/>
		<m4:datadef m4o="<%=zm4object%>" m4name="<%=zsubsesion%>"/>
		<m4:filter m4name="<%=zfilterdef%>" m4filter="<%=m4filter%>" />
		<m4:outputdef m4alias="<%=znodoReminders%>">
			<m4:param name="m4name0" value="<%=zoutputdefnodoreminders%>"/>
		</m4:outputdef>
  	   <m4:outputdef m4alias="<%=znodolabel%>">
			<m4:param name="m4name0" value="<%=zoutputdefnodolabel%>"/>
		</m4:outputdef>

		<m4:removefilter m4name="<%=zfilterdef%>" />
	<m4:endjob/>
   <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovenodoreminders%>"/></m4:move>
   <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovenodolabel%>"/></m4:move>

	<%-- presentation layer --%>

	<%-- form de actualizacion del workitem/borrado --%>
	<form method="POST" name="oculto" action="/servlet/CheckSecurity/JSP/shco_td/shco_td_update_wkitem.jsp">
		<input type="hidden" id="<%=zDtReminder%>" name="<%=zDtReminder%>" value="-1">
		<input type="hidden" id="<%=zIdWorkItemItem%>" name="<%=zIdWorkItemItem%>" value="<%= wkitemid %>">
		<input type="hidden" id="<%=zType%>" name="<%=zType%>" value="<%= type %>">
		<input type="hidden" id="zredireccion" name="zredireccion" value="<%=zredireccion%>" />
		<input type="hidden" id="zsubsesion" name="zsubsesion" value="<%=zsubsesion%>" />
	</form>
	
	<%-- form de ejecucion del workitem --%>
	<form action="/servlet/CheckSecurity/JSP/shco_td/shco_td_exec_process.jsp" method="post" name="formexec" id="formexec" >
		<input type="hidden" id="<%=zIdWorkItemItem%>" name="<%=zIdWorkItemItem%>" value=""  />
		<input type="hidden" id="<%=zIdTaskItem%>" name="<%=zIdTaskItem%>" value=""  />
		<input type="hidden" id="<%=zType%>" name="<%=zType%>" value=""  />
	</form>
		
	<form method="POST" class="form" name="NombreFormulario" action="shco_td_update_wkitem.jsp">
		<table class="form" width="100%" cellspacing="2" border="0">
		<thead><tr class="titulo"><th colspan="8">&nbsp;</th></tr></thead>
		<tbody>
		
			<tr><td colspan="2">
			</td></tr>	
		
			<tr>
				<td class="campo" align="center">
					<% if (type.equals("4")) { // TIpo recordatorio %>
						<textarea rows="5" name="description" cols="20"><m4:item m4name="<%=zreminderItem_c%>" htmlsafe="true"/></textarea>
					<% } else { // Tipo proceso %>
						<textarea align="right" rows="5" name="desc" cols="20"><m4:item m4name="<%=znbpoItem_c%>" htmlsafe="true"/>.<m4:item m4name="<%=znbpItem_c%>" htmlsafe="true"/></textarea>
				    <% } %>		    
				</td>
				<td class="" align="left">
					<table>
						<tr><td>
							<p align="center"><input type="button" onClick="fun_finish()" id="finish" name="finish" value="<m4:label m4name="<%=zlblFinish%>" htmlsafe = "true"/>"</p>
                        </td></tr>
						<tr><td>
                            <p align="center"><input type="button" onClick="fun_delay()" id="delay"name="delay" value="<m4:label m4name="<%=zlblPostpone%>" htmlsafe = "true"/>"></p>
                        </td></tr>
						<% if (type.equals("2")) { // 2 = Agenda %>
						<tr><td>
							<p align="center"><input type="button" onClick="fun_exec('<%=wkitemid%>','<%=taskid%>','<%=type%>')" id="execute" name="execute" value="<m4:label m4name="<%=zlblExecute%>" htmlsafe = "true"/>"</p>
						</td></tr>
						<% } %>
                    </table>
                </td>
			</tr>
			<tr>
				<td class="form" align="right"></td>
				<td class="form" align="center">
					<select id="selDelay" name="selDelay" size="1" class="selectform30">
                        <option selected value="300">5 <m4:label m4name="<%=zlblMinutes%>" htmlsafe = "true"/></option>
                        <option value="600">10 <m4:label m4name="<%=zlblMinutes%>" htmlsafe = "true"/> </option>
                        <option value="900">15 <m4:label m4name="<%=zlblMinutes%>" htmlsafe = "true"/></option>
                        <option value="1800">30 <m4:label m4name="<%=zlblMinutes%>" htmlsafe = "true"/></option>
                        <option value="3600">1 <m4:label m4name="<%=zlblHours%>" htmlsafe = "true"/></option>
                        <option value="7200">2 <m4:label m4name="<%=zlblHours%>" htmlsafe = "true"/></option>
                        <option value="14400">4 <m4:label m4name="<%=zlblHours%>" htmlsafe = "true"/></option>
                        <option value="28800">8 <m4:label m4name="<%=zlblHours%>" htmlsafe = "true"/></option>
                        <option value="86400">1 <m4:label m4name="<%=zlblWeek%>" htmlsafe = "true"/></option>
                        <option value="172800">2 <m4:label m4name="<%=zlblWeek%>" htmlsafe = "true"/></option>
                        <option value="259200">3 <m4:label m4name="<%=zlblWeek%>" htmlsafe = "true"/></option>
                        <option value="345600">4 <m4:label m4name="<%=zlblWeek%>" htmlsafe = "true"/></option>
                        <option value="604800">1 <m4:label m4name="<%=zlblMonth%>" htmlsafe = "true"/></option>
					</select>
				</td>
			</tr>
		   </tbody>	
		</table>
	</form>

<m4:endpage/>
</body>
</html>
