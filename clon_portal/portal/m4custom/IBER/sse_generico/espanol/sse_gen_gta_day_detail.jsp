<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<html xmlns:v='urn:schemas-microsoft-com:vml' xmlns='http://www.w3.org/TR/REC-html40'>

<head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../sse_generico/sse_generico_trans.jsp" %>

<title><%=Tran.getProperty("GTA_Title")%></title><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet"/>
<link href="/css/sse_gta_daily_view.css" type="text/css" rel="stylesheet"/>
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>


<script type="text/javascript" src="/libreria/funciones_gta_monthly_view.js"></script>

</head>
<body>
<%

	String sActionPath = "";
	if (sCommingFrom.equals("M")){
		sActionPath = "/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_day_details_redirection.jsp";
	}else{
		sActionPath = "/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_day_details_redirection_planning.jsp";	
	}


	String zsubsesion = "SCO_GTA_EMPLOYEE_PRESENCE_REPR";
	String zmeta4object = "SCO_GTA_EMPLOYEE_PRESENCE_REPR";
	String znodo = "SCO_GTA_SSE_VISUAL_INTERFACE";

	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zmove = znodo + ":" + znodo + "[FIRST]";
	String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";

	String LONG_BODY_4_DAILY_VW = zraiz + "SCO_GTA_TEXT_2_DISPLAY_ON_ESS";

	String sIdHrEcrpt = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sIdHr");
	String sIdHr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sIdHrEcrpt);	
	if (sIdHr==null){
		sIdHr="";
	}

	String sOrPerEcrpt = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sOrPer");
	String sOrPer = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sOrPerEcrpt);	
	if (sOrPer==null){
		sOrPer="";
	}

	String sDate = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sDate");
	if ((sDate==null)||(sDate.equals(""))){
		sDate="1800-01-01";
	}

	if ((sType==null)||(sType.equals(""))){
		sType="MSS_DET_ALL";
	}	
	
	//...

	String tp_execution = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_execution");
	if ((tp_execution==null)||(tp_execution.equals(""))){
		tp_execution="FIRST_TIME";
	}

	String node_to_save = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"node_to_save");
	if ((node_to_save==null)){
		node_to_save="";
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
					m.setItem(zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_DATE_OF_DATA",sDate);
					m.setItem(zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_EMPLOYEE",sIdHr);
					m.setItem(zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_EMPLOYEE_PERIOD",sOrPer);

				} 
				catch(Exception e) {}
			%>

			<m4:exec m4method="<%=zmetodocarga%>">
				<m4:param name="SCO_GTA_ARG_TP_EXECUTION" value="<%=tp_execution%>"/>
				<m4:param name="SCO_GTA_ARG_TEXT_TO_STUDY" value="<%=changes_1%>"/>
				<m4:param name="SCO_GTA_ARG_NODE_TO_SAVE" value="<%=node_to_save%>"/>
			</m4:exec>
			<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
		<m4:endjob/>
		<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

		<m4:item m4name="<%=sDate%>"/>
		<m4:item m4name="<%=LONG_BODY_4_DAILY_VW%>"/>

		<% 
			String sIdHrEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sIdHr); 
			String sOrPerEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sOrPer);	
			String sTypeEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sType);	
			String sCommingFromEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sCommingFrom);	

		%>

		<form action="<%=sActionPath%>" method="get" name="LoadMonthlyView" id="LoadMonthlyView">
			<input type="hidden" id="sDate" name="sDate"  value="<%=sDate%>" />
			<input type="hidden" id="tp_execution" name="tp_execution"  value="<%=tp_execution%>" />
			<input type="hidden" id="node_to_save" name="node_to_save" value="<%=node_to_save%>" />
			<input type="hidden" id="operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF" name="operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF" value="" />
			<input type="hidden" id="operation_in_SCO_GTA_INTERFACE_4_BADGAGE" name="operation_in_SCO_GTA_INTERFACE_4_BADGAGE" value="" />
			<input type="hidden" id="operation_in_SCO_GTA_INTERFACE_4_REAL_DONE" name="operation_in_SCO_GTA_INTERFACE_4_REAL_DONE" value="" />
			<input type="hidden" id="operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT" name="operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT" value="" />
			<input type="hidden" id="operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY" name="operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY" value="" />
			<input type="hidden" id="operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY" name="operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY" value="" />
			<input type="hidden" id="operation_in_SCO_GTA_LOAD_ALERTS_4_DAY" name="operation_in_SCO_GTA_LOAD_ALERTS_4_DAY" value="" />

			<input type="hidden" id="sIdHr" name="sIdHr" value="<%=sIdHrEncripted%>" />
			<input type="hidden" id="sOrPer" name="sOrPer" value="<%=sOrPerEncripted%>" />
			<input type="hidden" id="sType" name="sType" value="<%=sTypeEncripted%>" />
			<input type="hidden" id="sCommingFrom" name="node_to_save" value="<%=sCommingFromEncripted%>" />	


<!--			<input type="hidden" id="sIdHr" name="sIdHr" value="<%=sIdHr%>" />
			<input type="hidden" id="sOrPer" name="sOrPer" value="<%=sOrPer%>" />
			<input type="hidden" id="sType" name="sType" value="<%=sType%>" />
			<input type="hidden" id="sCommingFrom" name="node_to_save" value="<%=sCommingFrom%>" />	-->


		</form>

<script type="text/javaScript">


	if ("<%=tp_execution%>"=="CLOSE")
		window.close()



	function OpenIncidences(){
		window.open('/servlet/CheckSecurity/JSP/mss_g4/mss_g4_focus.jsp?argHR=<%=sIdHr%>&argDateDeb=<%=sDate%>&argIncidence=A3&argFunction=load','popUpForm','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=830,height=600,top='+(screen.height-600)/2.5+',left='+(screen.width-830)/2.5);	

	}


</script>


</div>
</body>
</html>


