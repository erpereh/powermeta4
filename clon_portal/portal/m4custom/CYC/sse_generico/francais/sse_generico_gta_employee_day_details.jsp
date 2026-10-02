<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<html xmlns:v='urn:schemas-microsoft-com:vml' xmlns='http://www.w3.org/TR/REC-html40'>

<head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<script type="text/javaScript">var sformatofechas;</script>

<title></title><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/sse_gta_daily_view.css" type="text/css" rel="stylesheet"/>
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/sse_generico_trans.jsp" %>
<script type="text/javascript" src="/libreria/sco_incidences_link.js"></script>
<script type="text/javascript" src="/libreria/funciones_gta_monthly_view.js"></script>

</head>
<body>
<%
	String zsubsesion = "SCO_GTA_EMPLOYEE_PRESENCE_REPR";
	String zmeta4object = "SCO_GTA_EMPLOYEE_PRESENCE_REPR";
	String znodo = "SCO_GTA_SSE_VISUAL_INTERFACE";

	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zmove = znodo + ":" + znodo + "[FIRST]";
	String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";

	String LONG_BODY_4_DAILY_VW = zraiz + "SCO_GTA_TEXT_2_DISPLAY_ON_ESS";
	String EMPLOYEE_WORKING_WITH = zraiz + "SCO_GTA_PARAM_EMPLOYEE";
	String COMMING_FROM = zraiz + "SCO_GTA_PARAM_COMMING_FROM";


	String sMonthOrDetailEcrpt = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sMonthOrDetail");	
	String sMonthOrDetail = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sMonthOrDetailEcrpt);	
	if ((sMonthOrDetail==null)||(sMonthOrDetail.equals(""))){
		sMonthOrDetail="";
	}

	String sCommingFromEcrpt = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sCommingFrom");
	String sCommingFrom = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sCommingFromEcrpt);
	if ((sCommingFrom==null)||(sCommingFrom.equals(""))){
		sCommingFrom="";
	}

	String sTypeEcrpt = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sType");
	String sType = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sTypeEcrpt);
	if ((sType==null)||(sType.equals(""))){
		sType="";
	}

	String sIdHrEcrpt = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sIdHr");	
	String sIdHr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sIdHrEcrpt);	
	if ((sIdHr==null)||(sIdHr.equals(""))){
		sIdHr="";
	}

	String sOrPerEcrpt = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sOrPer");	
	String sOrPer = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sOrPerEcrpt);	
	if ((sOrPer==null)||(sOrPer.equals(""))){
		sOrPer="";
	}


	String sFormAction = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sFormAction");	
	if ((sFormAction==null)||(sFormAction.equals(""))){
		sFormAction="";
	}

	String sFormActionBack = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sFormActionBack");	
	if ((sFormActionBack==null)||(sFormActionBack.equals(""))){
		sFormActionBack="";
	}

	String SCO_GTA_ARG_DATE_TO_STUDY = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_GTA_ARG_DATE_TO_STUDY");	
	if ((SCO_GTA_ARG_DATE_TO_STUDY==null)||(SCO_GTA_ARG_DATE_TO_STUDY.equals(""))){
		SCO_GTA_ARG_DATE_TO_STUDY="1800-01-01";
	}
	String sDateEcrpt = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan",SCO_GTA_ARG_DATE_TO_STUDY);
	String sDateNOEcrpt = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_GTA_ARG_DATE_TO_STUDY");	
	String id_incidence = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan","DELAY_NJ");
	String id_NOincidence = "DELAY_NJ";


	String tp_execution = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_execution");	
	if ((tp_execution==null)||(tp_execution.equals(""))){
		tp_execution="FIRST_TIME";
	}

	String node_to_save = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"node_to_save");	
	if ((node_to_save==null)){
		node_to_save="";
	}

	String changes_1bis = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_MONTHLY_CONF_4_USER");	
	if ((changes_1bis==null)){
		changes_1bis="";
	}

	String changes_1 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF");	
	if ((changes_1==null)){
		changes_1="";
	}

	String changes_2 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_BADGAGE");	
	if ((changes_2==null)){
		changes_2="";
	}

	String changes_3 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_REAL_DONE");	
	if ((changes_3==null)){
		changes_3="";
	}

	String changes_4 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT");	
	if ((changes_4 ==null)){
		changes_4 ="";
	}

	String changes_5 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY");	
	if ((changes_5 ==null)){
		changes_5 ="";
	}

	String changes_6 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY");	
	if ((changes_6 ==null)){
		changes_6 ="";
	}

	String changes_7 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_ALERTS_4_DAY");	
	if ((changes_7 ==null)){
		changes_7 ="";
	}

	if (changes_1.equals(""))
	{changes_1 = changes_2;}

	if (changes_1.equals(""))
	{changes_1 = changes_3;}

	if (changes_1.equals(""))
	{changes_1 = changes_4;}

	if (changes_1.equals(""))
	{changes_1 = changes_5;}

	if (changes_1.equals(""))
	{changes_1 = changes_6;}

	if (changes_1.equals(""))
	{changes_1 = changes_7;}

	if (changes_1.equals(""))
	{changes_1 = changes_1bis;}


	String zmetodocarga = "SCO_GTA_EXECUTE_FROM_ESS:" + zsubsesion + "!SCO_GTA_MONTHLY_PRESENCE_RPRST.SCO_GTA_EXECUTE_FROM_ESS";

%>
		<m4:startpage m4task="<%=zsubsesion%>"/>
		<m4:beginjob/>
			<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
			<% 
				try {
					M4Operations m = new M4Operations(request);
					m.setItem(zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_FUNCTNLIT_COMMING_FROM",sType);
					m.setItem(zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_COMMING_FROM",sCommingFrom);
					m.setItem(zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_MONTHLY_V_OR_DETAIL_V",sMonthOrDetail);

					m.setItem(zsubsesion,"SCO_GTA_MONTHLY_PRESENCE_RPRST","","SCO_GTA_ARG_DATE_TO_STUDY",SCO_GTA_ARG_DATE_TO_STUDY);

					if (!(sIdHr.equals(""))){
						m.setItem(zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_EMPLOYEE",sIdHr);
					}

					if (!(sOrPer.equals(""))){
						m.setItem(zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_EMPLOYEE_PERIOD",sOrPer);
					}

					if (!(SCO_GTA_ARG_DATE_TO_STUDY.equals(""))){
						m.setItem(zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_DATE_OF_DATA",SCO_GTA_ARG_DATE_TO_STUDY);
					}

				} 
				catch(Exception e) {}
			%>

			<m4:exec m4method="<%=zmetodocarga%>">
				<m4:param name="SCO_GTA_ARG_TP_EXECUTION" value="<%=tp_execution%>"/>
				<m4:param name="SCO_GTA_ARG_TEXT_TO_STUDY" value="<%=changes_1%>"/>
				<m4:param name="SCO_GTA_ARG_NODE_TO_SAVE" value="<%=node_to_save%>"/></m4:exec>
			<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
		<m4:endjob/>
		<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

		<m4:item m4name="<%=SCO_GTA_ARG_DATE_TO_STUDY%>"/>
		<m4:item m4name="<%=LONG_BODY_4_DAILY_VW%>"/>
		<m4:item m4varname="employee_id" item="SCO_GTA_PARAM_EMPLOYEE" htmlsafe="true" outputdef="<%=znodo%>"/>
		<m4:item m4varname="CommingFrom" item="SCO_GTA_PARAM_COMMING_FROM" htmlsafe="true" outputdef="<%=znodo%>"/>

		<% 
			String employee_idEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", employee_id); 
			String CommingFromEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", CommingFrom);	

			String sIdHrEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sIdHr); 
			String sOrPerEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sOrPer);	


		%>
					

		<form action="<%=sFormAction%>" method="post" name="LoadMonthlyView" id="LoadMonthlyView">
			<input type="hidden" id="tp_execution" name="tp_execution" value="" />
			<input type="hidden" id="node_to_save" name="node_to_save" value="" />
			<input type="hidden" id="operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF" name="operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF" value="" />
			<input type="hidden" id="operation_in_SCO_GTA_INTERFACE_4_BADGAGE" name="operation_in_SCO_GTA_INTERFACE_4_BADGAGE" value="" />
			<input type="hidden" id="operation_in_SCO_GTA_INTERFACE_4_REAL_DONE" name="operation_in_SCO_GTA_INTERFACE_4_REAL_DONE" value="" />
			<input type="hidden" id="operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT" name="operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT" value="" />
			<input type="hidden" id="operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY" name="operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY" value="" />
			<input type="hidden" id="operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY" name="operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY" value="" />
			<input type="hidden" id="operation_in_SCO_GTA_LOAD_ALERTS_4_DAY" name="operation_in_SCO_GTA_LOAD_ALERTS_4_DAY" value="" />
			<input type="hidden" id="date_to_study" name="date_to_study" value="<%=SCO_GTA_ARG_DATE_TO_STUDY%>" />
			<input type="hidden" id="operation_in_SCO_GTA_MONTHLY_CONF_4_USER" name="operation_in_SCO_GTA_MONTHLY_CONF_4_USER" value="" />
			<input type="hidden" id="date_to_load_detail" name="date_to_load_detail" value="<%=SCO_GTA_ARG_DATE_TO_STUDY%>" />



<!--			<input type="hidden" id="this_employee_working" name="this_employee_working" value="<m4:item m4name="<%=EMPLOYEE_WORKING_WITH%>"/>" />-->
			<input type="hidden" id="sIdHr" name="sIdHr" value="<%=sIdHrEncripted%>" />
			<input type="hidden" id="sOrPer" name="sOrPer" value="<%=sOrPerEncripted%>" />
			<input type="hidden" id="this_employee_working" name="this_employee_working" value="<%=employee_idEncripted%>"/>

			<input type="hidden" id="sDateEcrpt" name="sDateEcrpt" value="<%=sDateEcrpt%>" />	
			<input type="hidden" id="sDateNOEcrpt" name="sDateNOEcrpt" value="<%=sDateNOEcrpt%>" />	
			<input type="hidden" id="id_NOincidence" name="id_NOincidence" value="<%=id_NOincidence%>" />	
			<input type="hidden" id="sIdHrNoEcrpt" name="sIdHrNoEcrpt" value="<%=sIdHr%>" />	
			<input type="hidden" id="id_incidence" name="id_incidence" value="<%=id_incidence%>" />	

		</form>


<form action="<%=sFormActionBack%>" method="post" name="MainMonthlyView" id="MainMonthlyView">
	<input type="hidden" id="tp_execution" name="tp_execution" value="CLOSE" />

	<input type="hidden" id="sIdHr" name="sIdHr" value="<%=sIdHrEncripted%>" />
	<input type="hidden" id="sOrPer" name="sOrPer" value="<%=sOrPerEncripted%>" />


	<input type="hidden" id="EmployeeEncripted" name="EmployeeEncripted" value="<%=employee_idEncripted%>" />
	<input type="hidden" id="employeeOrManager" name="employeeOrManager" value="<%=CommingFrom%>" />


</form>

</div>



<% if (tp_execution.equals("SAVE_CHANGES")){ //Update Planning if change in details%>
                <script type="text/javascript">               
                               if ( (window.opener) && (window.opener.location) )
{
                                               if (window.parent.opener.document.getElementById('htmlGTA'))
                                               {
                                                               window.parent.opener.refreshAlerts("<%=sIdHr%>","<%=sOrPer%>","<%=SCO_GTA_ARG_DATE_TO_STUDY%>","yes")
                                               }   
                               }           
                </script>
<%}%>
</body>
</html>


