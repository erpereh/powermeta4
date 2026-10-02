<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<!-- GTA virtual clock in ESS: sse_g4_gta_virtual_clock.jsp -->
<!-- Librerias Java. Obligatorio -->
<head><%@ page import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.savparams.*" %>
      <%@ page import="com.meta4.valuetables.basic.*, com.meta4.utilities.*,com.meta4.configuration.*,com.meta4.taglib.util.*" %>
<!-- Hoja de Estilo general. Obligatorio-->
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<link href="/css/style_subportal.css" type="text/css" rel="stylesheet" />
<!-- Librerias JavaScript. Obligatorio -->
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/mootools.js"></script>

<!-- Recuperacion de parametros. -->
<!-- estado:	Determina la barra de localizacion. -->
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
if ((estado==null)||(estado.equals(""))){estado="0";}
String sAction = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sAction");
if (sAction==null){sAction="";}
%>
<%@ include file="../../shco_g0/shco_gen_formats.jsp" %>
<!-- Encabezado y barra izquierda -->
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>


<!-- Meta4Object Load -->
<%	//Variables to load the M4O
	String sChannelID   	= "SSE_GTA_VIRTUAL_CLOCK_IN_OUT"; 
	String sMainMethod 		= "";
	String sTimeZone		= "";
	String sMinutesToGMT	= "";
	String sBlockPage		= "";
	String sLabelNode 		= "SHCO_GN_LABEL";
	String sOutDefLabel		= sChannelID + "!" + sLabelNode + "[*]";	
	String sRootNode 		= "SHCO_GN_ROOT";
	String sOutDefRoot		= sChannelID + "!" + sRootNode + "[*]";		
	
	String sLogNode 		= "SHCO_GN_LOGS";
	String sOutDefLog		= sChannelID + "!" + sLogNode + "[*]";	
	String sComunLog 		= sLogNode + ":" + sChannelID + "!" + sLogNode + "[&VAR.m4lix]" + ".";	
	String sLogText			= sComunLog + "SHCO_LOG_TEXT";
	
	String sMainNode 		= "SSE_GTA_VIRTUAL_CLOCK_RWD";
	String sMainDefRoot		= sChannelID + "!" + sMainNode + "[*]";	
	String sComunMain 		= sMainNode + ":" + sChannelID + "!" + sMainNode + "[&VAR.m4lix]" + ".";
	String sComunMainNode	= sMainNode + ":" + sChannelID + "!" + sMainNode + "[0]" + ".";	
	String sDtStart 		= sComunMainNode + "DT_START";
	String sName	 		= sComunMainNode + "SCO_GB_NAME";
	String sGrossClockHrs	= sComunMainNode + "SCO_GROSS_CLOCK_DEC_HOURS_S";
	String sStartOfDay		= sComunMainNode + "SCO_DT_START_OF_DAY";
	String sEndOfDay		= sComunMainNode + "SCO_DT_END_OF_DAY";
	
	String sClockNode		= "SSE_GTA_VIRTUAL_CLOCK_TS";
	String sOutDefClock		= sChannelID + "!" + sClockNode + "[*]";			
	String sComunClock		= sClockNode + ":" + sChannelID + "!" + sClockNode + "[&VAR.m4lix]" + ".";
	String sClockStart		= sComunClock + "SCO_DT_START";
	String sClockEnd		= sComunClock + "SCO_DT_END";
	String sClockDuration	= sComunClock + "SCO_DURATION";
	
	String sAlertsNode		= "SSE_GTA_VIRTUAL_CLOCK_ALERTS";
	String sOutDefAlerts	= sChannelID + "!" + sAlertsNode + "[*]";			
	String sComunAlerts		= sAlertsNode + ":" + sChannelID + "!" + sAlertsNode + "[&VAR.m4lix]" + ".";
	String sText			= sComunAlerts + "SCO_TEXT";
	String sIcon			= sComunAlerts + "SCO_HTML_ICON";
	String sNMSevLevel		= sComunAlerts + "SCO_NM_ALERT_SEVERITY_LEVEL";
	
	String sCountersNode	= "SSE_GTA_VIRTUAL_CLOCK_COUNTERS";
	String sOutDefCounters	= sChannelID + "!" + sCountersNode + "[*]";			
	String sComunCounters	= sCountersNode + ":" + sChannelID + "!" + sCountersNode + "[&VAR.m4lix]" + ".";
	String sNMCounter		= sComunCounters + "SCO_NM_ENTITLEMENT";
	String sValueCounter	= sComunCounters + "SCO_FINAL_VALUE_STRING";	

	%><m4:startpage m4task="<%=sChannelID%>"/><%
//if we are in load, first we do a transaction to take the TimeZone ID 
//and then calculate the number of minutes to GMT taking into account "Dayligth saiving time"
if (!sAction.equals("SAVE")){
	sMainMethod 		= sChannelID + "!SHCO_GN_ROOT.SSE_CALC_TIME_ZONE";
	String sIP			= request.getRemoteAddr();
%>	<m4:beginjob/>
	<m4:datadef m4o="<%=sChannelID%>" m4name="<%=sChannelID%>"/>
	<m4:exec m4method="<%=sMainMethod%>"><m4:param name="ARG_IP" value="<%=sIP%>"/></m4:exec>
	<m4:outputdef m4alias="<%=sRootNode%>">  <m4:param name="m4name0" value="<%=sOutDefRoot%>"/>  </m4:outputdef>
	<m4:endjob/>
<%
	M4Operations Oper = new M4Operations(request);
	sTimeZone = Oper.getItem(sRootNode,sChannelID,sRootNode,"0","SCO_TIME_ZONE");
	java.util.TimeZone tz = TimeZone.getTimeZone(sTimeZone);
	Calendar calendar = Calendar.getInstance(); 
	long nNow = calendar.getTimeInMillis(); //the current time as UTC milliseconds from the epoch
	int nMinutesToGMT = tz.getOffset(nNow) / 60000 ; // from miliseconds to minutes
	sMinutesToGMT = String.valueOf(nMinutesToGMT);
}

%><m4:beginjob/>
<m4:datadef m4o="<%=sChannelID%>" m4name="<%=sChannelID%>"/><%

//in save and load mode, we execute the method and take the result
if (sAction.equals("SAVE")){
	 sMainMethod 		= sChannelID + "!SHCO_GN_ROOT.SSE_SAVE";
%>	<m4:exec m4method="<%=sMainMethod%>"></m4:exec><%
		 
}else{
	 sMainMethod 		= sChannelID + "!SHCO_GN_ROOT.SSE_LOAD";
%>	<m4:exec m4method="<%=sMainMethod%>"><m4:param name="ARG_MINUTES_TO_GMT" value="<%=sMinutesToGMT%>"/></m4:exec><%		 
}
%><m4:outputdef m4alias="<%=sLabelNode%>"><m4:param name="m4name0" value="<%=sOutDefLabel%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=sLogNode%>">  <m4:param name="m4name0" value="<%=sOutDefLog%>"/>  </m4:outputdef>
<m4:outputdef m4alias="<%=sRootNode%>">  <m4:param name="m4name0" value="<%=sOutDefRoot%>"/>  </m4:outputdef>
<m4:outputdef m4alias="<%=sMainNode%>">  <m4:param name="m4name0" value="<%=sMainDefRoot%>"/>  </m4:outputdef>
<m4:outputdef m4alias="<%=sClockNode%>">  <m4:param name="m4name0" value="<%=sOutDefClock%>"/>  </m4:outputdef>
<m4:outputdef m4alias="<%=sAlertsNode%>">  <m4:param name="m4name0" value="<%=sOutDefAlerts%>"/>  </m4:outputdef>
<m4:outputdef m4alias="<%=sCountersNode%>">  <m4:param name="m4name0" value="<%=sOutDefCounters%>"/>  </m4:outputdef>
<m4:endjob/>
<%
	//we get the logs, labels and counter in java format
	M4Operations Oper = new M4Operations(request);
    AbstractFormater oFmt = new DefaultFormater(request); // new SimpleFormater(null, null, null); //
    OperationsIterator cLogs = new OperationsIterator(Oper, oFmt, sLogNode, sChannelID, sLogNode);
    OperationsIterator cLabels = new OperationsIterator(Oper, oFmt, sLabelNode, sChannelID, sLabelNode);
    OperationsIterator cRoot = new OperationsIterator(Oper, oFmt, sRootNode, sChannelID, sRootNode);	
    OperationsIterator cMain = new OperationsIterator(Oper, oFmt, sMainNode, sChannelID, sMainNode);	
    OperationsData oLabelValues = cLabels.get();
    OperationsData oRootValues = cRoot.get();
	OperationsData oMainValues = cMain.get();
			
    int nCountClock = Oper.getCount(sClockNode,sChannelID,sClockNode);
	String	sCountClock = String.valueOf(nCountClock);		

	int nCountAlerts = Oper.getCount(sAlertsNode,sChannelID,sAlertsNode);
	String	sCountAlerts = String.valueOf(nCountAlerts);		
	
	int nCountCounters = Oper.getCount(sCountersNode,sChannelID,sCountersNode);
	String	sCountCounters = String.valueOf(nCountCounters);	

	int nCountLog = Oper.getCount(sLogNode,sChannelID,sLogNode);
	String	sCountLog = String.valueOf(nCountLog);
	
	String sIsNightDay = Oper.getItem(sMainNode,sChannelID,sMainNode,"0","SCO_IS_NIGHT_DAY");

	sTimeZone = Oper.getItem(sRootNode,sChannelID,sRootNode,"0","SCO_TIME_ZONE");
	java.util.TimeZone tz = TimeZone.getTimeZone(sTimeZone);
	Calendar calendar = Calendar.getInstance(); 
	long nNow = calendar.getTimeInMillis(); //the current time as UTC milliseconds from the epoch
	int nMinutesToGMT = tz.getOffset(nNow) / 60000 ; // from miliseconds to minutes
	
	sMinutesToGMT = String.valueOf(nMinutesToGMT);
	
	sBlockPage = Oper.getItem(sRootNode,sChannelID,sRootNode,"0","SCO_BLOCK_PAGE");
	
	//Translations
	String zlanguser = zlanguser = zsesion.getBagEntries("lang");
	if ((zlanguser==null)||(zlanguser.equals(""))){zlanguser = "es";}
	if (zlanguser.equals("in")) { zlanguser="en";}
	java.util.Properties Tran_mss_g4_inc_val = new Properties();
	Tran_mss_g4_inc_val.load(application.getResourceAsStream("/translations/ess_g4_gta_"+zlanguser+".properties"));
	
%>
<!-- End of: Meta4Object Load -->

<!-- javascript functions -->
<script type="text/javascript">

	//global variables
	
	function init(){
		var now = new Date(); 
		var nowInServerTZ = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes()+<%=sMinutesToGMT%>, now.getUTCSeconds());
		var dDate = nowInServerTZ;
		var sDate = dDate.toLocaleTimeString();
		if($('btClockSeconds')) {$('btClockSeconds').innerHTML = sDate;}

		var sDateNoSeconds = sDate.substring(0,sDate.lastIndexOf(":"));
		if($('btClock')) {$('btClock').innerHTML = sDateNoSeconds;}
		
		if(now.toString()!=dDate.toString() && $('btClockTZError') ){$('btClockTZError').innerHTML = "<%=Tran_mss_g4_inc_val.getProperty("TZ.alert1")%><%=sTimeZone%><%=Tran_mss_g4_inc_val.getProperty("TZ.alert2")%>";}
		
		setTimeout("init()",1000);
	}
	
	function clockInOut(){
		m4submit("NombreFormulario");
	}
	
</script>

<title><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel("SHCO_LB_PAGE_TITLE"))%></title>

</head>
<body onload="init()">

<!-- Tabla de Descripcion. Obligatoria. Siempre una 3*2: un titulo de la pagina + un icono + una descripcion + opciones -->
<div id="divDescription" style="overflow:hidden" >


<table width="100%">
	<tr>
		<!-- Titulo funcional de la pagina -->
		<td class="titulofuncional" colspan="2"><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel("SHCO_LB_PAGE_TITLE"))%></td>
	</tr>
	<tr>
		<td><img src="/iconos/noname_calendario_123_100.gif"  alt="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel("SHCO_LB_PAGE_TITLE"))%>" /></td>
		<td>
			<!-- Description -->			
			<div class="descripcionfuncional">
				<%=Tran_mss_g4_inc_val.getProperty("desc.line")%>
				<br/>

			</div>
		</td>	
	</tr>
</table>
</div>
<!-- Fin de Tabla de descripcion. -->	
	
<!-- Content -->
<form action="" method="post" name="NombreFormulario" id="NombreFormulario" action="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_virtual_clock_redirect.jsp" >
	<input type="hidden" id="sAction" name="sAction"  value="SAVE" />
	
	<% if(sBlockPage.equals("0.00000000")){ %>
	<table id="tableMain" class = "tablaestados" width="100%" cellspacing="0" border="0" >
		<tr class = "tablaestadosceldatitulo" ><td colspan="2"><m4:item m4name="<%=sName%>"/></td></tr>
		<tr class = "fuentecampo" style="font-size:15px" ><td colspan="2"><b><%=Tran_mss_g4_inc_val.getProperty("work.day")%>&nbsp;<m4:item m4name="<%=sDtStart%>" typename="DATETEXT"/></b></td></tr>
		<tr></tr>
		<tr></tr>		

		<%if (sIsNightDay.equals("1.00000000")){%>
		<tr class = "fuentecampo" ><td colspan="2">
			<%=Tran_mss_g4_inc_val.getProperty("night.1")%>&nbsp;<m4:item m4name="<%=sStartOfDay%>" typename="DATETEXT"/> <m4:item m4name="<%=sStartOfDay%>" typename="HOUR"/> 
			<%=Tran_mss_g4_inc_val.getProperty("night.2")%>&nbsp;<m4:item m4name="<%=sEndOfDay%>" typename="DATETEXT"/> <m4:item m4name="<%=sEndOfDay%>" typename="HOUR"/> 
		</td></tr>	
		<%}%>
		
		<tr class = "tablaestadoscelda" >
			<td class = "fuentecampo" style="text-align:center;">
				<a id="textClock" href="javascript:void clockInOut();" class="fuentecampo" style=""><%=Tran_mss_g4_inc_val.getProperty("clock.text")%></a></br>
				<a id="btClock" href="javascript:void clockInOut();" style="font-size:90px" ></a></br>
				<a id="btClockSeconds" href="javascript:void clockInOut();" class="fuentecampo"></a></br>
				<p id="btClockTZError" class="fuentecampo"></p>
			</td>
			
			<td > 
				<table id="tableClock" class = "tablaestados">
				<tr class="tablaestadosceldatitulo"><td colspan="2"><%=Tran_mss_g4_inc_val.getProperty("clock.title")%></td></tr>
				<m4:loop from="0" to="<%=new Integer(new Integer(sCountClock).intValue()-1).toString()%>">
					<tr>
						<td class="fuentecampo"><b><%=Tran_mss_g4_inc_val.getProperty("clock.from")%></b> <m4:item m4name="<%=sClockStart%>" typename="HOUR"/> <b><%=Tran_mss_g4_inc_val.getProperty("clock.to")%></b> <m4:item m4name="<%=sClockEnd%>"  typename="HOUR"/> &nbsp;&nbsp;</td>
						<td class="fuentecampo"><b><%=Tran_mss_g4_inc_val.getProperty("clock.duration")%></b> <m4:item m4name="<%=sClockDuration%>"/></td>
					</tr>
				</m4:loop>		
				<tr></tr>
				<tr></tr>
				<tr><td class="tablaestadosceldatitulo"><%=Tran_mss_g4_inc_val.getProperty("gros.clock")%> </td><td class="fuentecampo"><m4:item m4name="<%=sGrossClockHrs%>"/></td></tr>

				<!-- Counters -->
				<m4:loop from="0" to="<%=new Integer(new Integer(sCountCounters).intValue()-1).toString()%>">
					<tr>
						<td class="tablaestadosceldatitulo"><m4:item m4name="<%=sNMCounter%>"/> :</td>
						<td class="fuentecampo"><m4:item m4name="<%=sValueCounter%>"/></td>
					</tr>
				</m4:loop>					
				</table>
			</td>
		</tr>

	</table>	
	<%}%>

	<%if (nCountAlerts>0){%>
	<!-- Alerts -->
	<table id="tableAlerts" class = "tablaestadoscelda" width="100%" cellspacing="0" border="0">	
		<tr></tr>
		<tr><td class="tablaestadosceldatitulo" colspan="2"><%=Tran_mss_g4_inc_val.getProperty("alerts")%></td></tr>
		<m4:loop from="0" to="<%=new Integer(new Integer(sCountAlerts).intValue()-1).toString()%>">
			<tr>
				<td class="fuentecampo" style="background-repeat:'no-repeat';background-position:'top right';background-image = url('/iconos/<m4:item m4name="<%=sIcon%>" />.png')"> <m4:item m4name="<%=sNMSevLevel%>" /></td>
				<td class="fuentecampo" ><m4:item m4name="<%=sText%>" /></td>
			</tr>
		</m4:loop>		
	</table>	
	<%}%>

	<%if (nCountLog>0){%>
	<!-- Log -->
	<table id="tableLog" class = "tablaestadoscelda" width="100%" cellspacing="0" border="0">	
		<tr></tr>
		<tr><td class="tablaestadosceldatitulo" colspan="2"><%=Tran_mss_g4_inc_val.getProperty("log")%></td></tr>
		<m4:loop from="0" to="<%=new Integer(new Integer(sCountLog).intValue()-1).toString()%>">	
			<tr>
				<td class="fuentecampo"><m4:item m4name="<%=sLogText%>" /></td>
			</tr>
		</m4:loop>		
	</table>	
	<%}%>

</form>

<!-- Pie de pagina -->	


</body>
<m4:endpage/>
	
	