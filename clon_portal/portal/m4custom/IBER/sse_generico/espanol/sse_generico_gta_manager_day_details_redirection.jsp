<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<body onload="sendRedirect()">
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />

<%

	String sMonthOrDetail = "D"; //detail	
	String sCommingFrom = "M"; //Manager
	String sFormAction = "/servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp";	
	String sFormActionBack = "/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_employee.jsp";	

	String sTypeEcrpt = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sType");
	String sType = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sTypeEcrpt);	
	if (sType==null){
		sType="MSS";
	}

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

	String SCO_GTA_ARG_DATE_TO_STUDY = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"date_to_load_detail");
	if ((SCO_GTA_ARG_DATE_TO_STUDY==null)){
		SCO_GTA_ARG_DATE_TO_STUDY="";
	}

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
	

%>	

<div id="cargando" name="cargando"  style="position: relative; top: 0; left: 0">&nbsp;
<table  class ="cargando" width="950px" height="580px">
	<td align="center"><img src="/iconos/cargando.gif" alt='En chargement des detailles pour la journée <%=SCO_GTA_ARG_DATE_TO_STUDY%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />&nbsp;Cargando datos. Por favor, espere unos segundos...&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> 
</div>
<form action="/servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_employee_day_details.jsp" method="post" name="redireccion" id="redireccion">
	<input type="hidden" id="SCO_GTA_ARG_DATE_TO_STUDY" name="SCO_GTA_ARG_DATE_TO_STUDY"  value="<%=SCO_GTA_ARG_DATE_TO_STUDY%>" />
	<input type="hidden" id="tp_execution" name="tp_execution"  value="<%=tp_execution%>" />
	<input type="hidden" id="node_to_save" name="node_to_save" value="<%=node_to_save%>" />
	<input type="hidden" id="operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF" name="operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF"  value="<%=changes_1%>" />
	<input type="hidden" id="operation_in_SCO_GTA_INTERFACE_4_BADGAGE" name="operation_in_SCO_GTA_INTERFACE_4_BADGAGE"  value="<%=changes_2%>" />
	<input type="hidden" id="operation_in_SCO_GTA_INTERFACE_4_REAL_DONE" name="operation_in_SCO_GTA_INTERFACE_4_REAL_DONE"  value="<%=changes_3%>" />
	<input type="hidden" id="operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT" name="operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT"  value="<%=changes_4%>" />
	<input type="hidden" id="operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY" name="operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY"  value="<%=changes_5%>" />
	<input type="hidden" id="operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY" name="operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY"  value="<%=changes_6%>" />
	<input type="hidden" id="operation_in_SCO_GTA_LOAD_ALERTS_4_DAY" name="operation_in_SCO_GTA_LOAD_ALERTS_4_DAY"  value="<%=changes_7%>" />	
	<input type="hidden" id="operation_in_SCO_GTA_MONTHLY_CONF_4_USER" name="operation_in_SCO_GTA_MONTHLY_CONF_4_USER" value="<%=changes_1bis%>" />
	<input type="hidden" id="sFormAction" name="sFormAction" value="<%=sFormAction%>" />
	<input type="hidden" id="sFormActionBack" name="sFormActionBack" value="<%=sFormActionBack%>" />

<!--	<input type="hidden" id="sMonthOrDetail" name="sMonthOrDetail" value="<%=sMonthOrDetail%>" />
	<input type="hidden" id="sCommingFrom" name="sCommingFrom" value="<%=sCommingFrom%>" />
	<input type="hidden" id="sType" name="sType" value="<%=sType%>" />
	<input type="hidden" id="sIdHr" name="sIdHr" value="<%=sIdHr%>" />
	<input type="hidden" id="sOrPer" name="sOrPer" value="<%=sOrPer%>" />-->


	<% 
		String sIdHrEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sIdHr); 
		String sOrPerEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sOrPer);	
		String sTypeEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sType);	
		String sCommingFromEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sCommingFrom);	
		String sMonthOrDetailEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sMonthOrDetail);	

	%>

	<input type="hidden" id="sMonthOrDetail" name="sMonthOrDetail" value="<%=sMonthOrDetailEncripted%>" />
	<input type="hidden" id="sCommingFrom" name="sCommingFrom" value="<%=sCommingFromEncripted%>" />
	<input type="hidden" id="sType" name="sType" value="<%=sTypeEncripted%>" />
	<input type="hidden" id="sIdHr" name="sIdHr" value="<%=sIdHrEncripted%>" />
	<input type="hidden" id="sOrPer" name="sOrPer" value="<%=sOrPerEncripted%>" />

	
</form>

<script type="text/javaScript">
//	function sendRedirect(){	m4submit("redireccion");}

m4submit("redireccion");
</script>
</body>
</html>