<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>	

<title><%=Tran.getProperty("GTA_Title")%></title><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet"/>
<link href="/css/sse_gta_monthly_view.css" type="text/css" rel="stylesheet"/>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>




<%

	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");	
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");	

	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
	if ((zinicios==null)||(zinicios.equals(""))){
	   zinicios = "1";
	}
%>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
	String zsubsesion = "SCO_GTA_EMPLOYEE_PRESENCE_REPR";
	String zmeta4object = "SCO_GTA_EMPLOYEE_PRESENCE_REPR";
	String znodo = "SCO_GTA_SSE_VISUAL_INTERFACE";

	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zmove = znodo + ":" + znodo + "[FIRST]";
	String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
			
	String LONG_BODY_4_MONTHLY_VW = zraiz + "SCO_GTA_TEXT_2_DISPLAY_ON_ESS";
	String ESS_TOOLTIP_FRAMEWORK = zraiz + "SCO_GTA_ESS_TOOLTIP_FRAMEWORK";
	String ESS_TOOLTIP_FUNCTIONS = zraiz + "SCO_GTA_ESS_TOOLTIP_FUNCTIONS";
	String ALERTS_SHOW_FUNCTIONS = zraiz + "SCO_GTA_ALERTS_SHOW_FUNCTIONS";
	String TP_MONTHLY_VIEW_2_DRAW = zraiz + "SCO_GTA_TP_MONTHLY_VIEW_2_DRAW";
	String THERE_ARE_BLOCKG_ALERT = zraiz + "SCO_GTA_THERE_ARE_BLOCKG_ALERT";

	String tp_execution = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_execution");		
	if ((tp_execution==null)||(tp_execution.equals(""))){
		tp_execution="FIRST_TIME";
	}

	String start_period = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"start_period");		
	if ((start_period==null)||(start_period.equals(""))){
		start_period="1800-01-01";
	}

	String end_period = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"end_period");		
	if ((end_period==null)||(end_period.equals(""))){
		end_period="4000-01-01";
	}

	String SCO_GTA_ARG_DATE_TO_STUDY = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_GTA_ARG_DATE_TO_STUDY");		
	if ((SCO_GTA_ARG_DATE_TO_STUDY==null)||(SCO_GTA_ARG_DATE_TO_STUDY.equals(""))){
		SCO_GTA_ARG_DATE_TO_STUDY="";
	}

	if ((sMonthOrDetail==null)||(sMonthOrDetail.equals(""))){
		sMonthOrDetail="";
	}

	if ((sCommingFrom==null)||(sCommingFrom.equals(""))){
		sCommingFrom="";
	}

	if ((sType==null)||(sType.equals(""))){
		sType="";
	}

	if ((sIdHr==null)||(sIdHr.equals(""))){
		sIdHr="";
	}

	if ((sOrPer==null)||(sOrPer.equals(""))){
		sOrPer="";
	}

	String zmetodocarga = "SCO_GTA_FROM_1_EMPLOYE_2_OTHER:" + zsubsesion + "!SCO_GTA_ORIGINAL_PARAMS_VALUES.SCO_GTA_EXECUTE_FROM_ESS";

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
					
					m.setItem(zsubsesion,"SCO_GTA_MONTHLY_PRESENCE_RPRST","","SCO_GTA_LOAD_INFO_START_PERD_S",start_period);
					m.setItem(zsubsesion,"SCO_GTA_MONTHLY_PRESENCE_RPRST","","SCO_GTA_LOAD_INFO_END_PERIOD_S",end_period);

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
				<m4:param name="SCO_GTA_ARG_TP_EXECUTION" value="<%=tp_execution%>"/></m4:exec>
			<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
		<m4:endjob/>
		<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
		int  zcount  = 0;
		int  zcounti  = 0;	
		try {
			M4Operations m = new M4Operations(request);
			zcount = m.getCount(znodo,zsubsesion,znodo);
			zcounti = m.getCountInClient(znodo,zsubsesion,znodo);			
		} catch(Exception e) {}
		String	zcountv = String.valueOf(zcounti);
		
%>


<script type="text/javascript">
	<m4:item m4name="<%=ESS_TOOLTIP_FRAMEWORK%>"/>
	<m4:item m4name="<%=ESS_TOOLTIP_FUNCTIONS%>"/>

	window.addEvent('domready', function() {
		<m4:item m4name="<%=ALERTS_SHOW_FUNCTIONS%>"/>
		});
</script>

<script type="text/javascript" src="/libreria/funciones_gta_monthly_view_presence.js"></script>

<table width="100%">
<tr>
	<td class="titulofuncional" colspan="2"><%=Tran.getProperty("GTA_Title")%></td>
</tr>
</table>
<%if (zcounti > 0) {

		String sIdHrEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sIdHr);	
		String sOrPerEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sOrPer);	
	%>

		<m4:item m4name="<%=LONG_BODY_4_MONTHLY_VW%>"/>

<form action="<%=sFormAction%>" method="post" name="LoadMonthlyView" id="LoadMonthlyView">
	<input type="hidden" id="Blocking" name="Blocking" value="<m4:item m4name="<%=THERE_ARE_BLOCKG_ALERT%>"/>" />
	<input type="hidden" id="tp_execution" name="tp_execution" value="" />
	<input type="hidden" id="start_period" name="start_period" value="" />
	<input type="hidden" id="end_period" name="end_period" value="" />
	<input type="hidden" id="SCO_GTA_ARG_DATE_TO_STUDY" name="SCO_GTA_ARG_DATE_TO_STUDY" value="" />
	<input type="hidden" id="tp_timesheet" name="tp_timesheet" value="<m4:item m4name="<%=TP_MONTHLY_VIEW_2_DRAW%>"/>" />
<!--	<input type="hidden" id="sIdHr" name="sIdHr" value="<%=sIdHr%>" />
	<input type="hidden" id="sOrPer" name="sOrPer" value="<%=sOrPer%>" />-->

	<input type="hidden" id="sIdHr" name="sIdHr" value="<%=sIdHrEncripted%>" />
	<input type="hidden" id="sOrPer" name="sOrPer" value="<%=sOrPerEncripted%>" />

</form>

<form action="<%=sFormActionRedirect%>" method="post" name="LoadDetailesView" id="LoadDetailesView">
	<input type="hidden" id="date_to_load_detail" name="date_to_load_detail" value="" />

<!--	<input type="hidden" id="sIdHr" name="sIdHr" value="<%=sIdHr%>" />
	<input type="hidden" id="sOrPer" name="sOrPer" value="<%=sOrPer%>" />-->

	<input type="hidden" id="sIdHr" name="sIdHr" value="<%=sIdHrEncripted%>" />
	<input type="hidden" id="sOrPer" name="sOrPer" value="<%=sOrPerEncripted%>" />

</form>


<%}else{%><div class="fuentenodatos"><%=Tran.getProperty("GTA_No_Data")%></div><%}%>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>

</div>

</body>
</html>


