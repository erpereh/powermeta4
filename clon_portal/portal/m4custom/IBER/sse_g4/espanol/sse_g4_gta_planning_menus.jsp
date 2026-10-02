<%///////////////////////////////////////PLANNING GTA : Bottom Navigation Menus///////////////////////////////////////%>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!-- Import -->
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%@ page import="com.meta4.configuration.*" %>

<!-- Translations -->
<%
M4SessionCl zsesionGTA = M4Context.getM4SessionCl(request);
String zlanguser = zsesionGTA.getBagEntries("lang");
if ((zlanguser==null)||(zlanguser.equals(""))){zlanguser = "fr";}
if (zlanguser.equals("in")) { zlanguser="en";}
java.util.Properties Tran_mss_g4_gta_planning = new Properties();
Tran_mss_g4_gta_planning.load(application.getResourceAsStream("/translations/mss_g4_gta_planning_"+zlanguser+".properties"));
%>
<%
String mss =			(String) request.getAttribute("gtaPlan_mss");
String hoursFormat =	(String) request.getAttribute("gtaPlan_hoursFormat");
String dtStart =		(String) request.getAttribute("gtaPlan_dtStart");
String dtEnd =			(String) request.getAttribute("gtaPlan_dtEnd");
String typeTab =		(String) request.getAttribute("gtaPlan_typeTab");
String checkTotal =		(String) request.getAttribute("gtaPlan_checkTotal");
String checkTotalCheck =(String) request.getAttribute("gtaPlan_checkTotalCheck");
String checkAlert =		(String) request.getAttribute("gtaPlan_checkAlert");
String checkAlertCheck =(String) request.getAttribute("gtaPlan_checkAlertCheck");
String counterC1Name =	(String) request.getAttribute("gtaPlan_counterC1Name");
String counterC2Name =	(String) request.getAttribute("gtaPlan_counterC2Name");
String counterC3Name =	(String) request.getAttribute("gtaPlan_counterC3Name");
String viewType =		(String) request.getAttribute("gtaPlan_viewType");
String startHourDay =	(String) request.getAttribute("gtaPlan_startHourDay");
String endHourDay =		(String) request.getAttribute("gtaPlan_endHourDay");
String diffHourDay =	(String) request.getAttribute("gtaPlan_diffHourDay");
int displayMenu0 =		Integer.parseInt((String)request.getAttribute("gtaPlan_displayMenu0"));
int displayMenu1 =		Integer.parseInt((String)request.getAttribute("gtaPlan_displayMenu1"));
int displayMenu2 =		Integer.parseInt((String)request.getAttribute("gtaPlan_displayMenu2"));
int displayMenu3 =		Integer.parseInt((String)request.getAttribute("gtaPlan_displayMenu3"));
int displayMenu4 =		Integer.parseInt((String)request.getAttribute("gtaPlan_displayMenu4"));
int displayMenu5 =		Integer.parseInt((String)request.getAttribute("gtaPlan_displayMenu5"));
int displayMenu6 =		Integer.parseInt((String)request.getAttribute("gtaPlan_displayMenu6"));
int displayMenu7 =		Integer.parseInt((String)request.getAttribute("gtaPlan_displayMenu7"));
%>
<%
String zsubsesion   = "SSE_GTA_PLAN";
String zmeta4object = "SSE_GTA_PLAN";

String znodo3 = "SSE_X_WORK_UNIT_RESP";
String znodo4 = "SSE_X_LEGAL_ENTITY";
String znodo5 = "SSE_X_WORK_LOCATION";
String znodo6 = "SSE_X_REF_MOD";
String znodo9 = "SSE_X_DAY_TYPE";
String znodo10 = "GTA_COLOR_CSS";
String znodo11 = "GTA_ALERT_GROUP";
String znodo12 = "SSE_X_VE_ENTITLEMENT_DEF";
String znodo13 = "SSE_X_JOB";
String znodo14 = "SSE_X_POSITION";

String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";
String zlectura3 = znodo3 + ":" +zsubsesion + "!" + znodo3;
String zcomun3 = znodo3 + ":" +zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";

String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
String zmove4 = znodo4 + ":" +znodo4 + "[FIRST]";
String zlectura4 = znodo4 + ":" +zsubsesion + "!" + znodo4;
String zcomun4 = znodo4 + ":" +zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";

String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
String zmove5 = znodo5 + ":" +znodo5 + "[FIRST]";
String zlectura5 = znodo5 + ":" +zsubsesion + "!" + znodo5;
String zcomun5 = znodo5 + ":" +zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";

String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
String zmove6 = znodo6 + ":" +znodo6 + "[FIRST]";
String zlectura6 = znodo6 + ":" +zsubsesion + "!" + znodo6;
String zcomun6 = znodo6 + ":" +zsubsesion + "!" + znodo6 + "[&VAR.m4lix]" + ".";

String zoutputdef9 = zsubsesion + "!" + znodo9 + "[*]";
String zmove9 = znodo9 + ":" +znodo9 + "[FIRST]";
String zlectura9 = znodo9 + ":" +zsubsesion + "!" + znodo9;
String zcomun9 = znodo9 + ":" +zsubsesion + "!" + znodo9 + "[&VAR.m4lix]" + ".";

String zoutputdef10 = zsubsesion + "!" + znodo10 + "[*]";
String zmove10 = znodo10 + ":" +znodo10 + "[FIRST]";
String zlectura10 = znodo10 + ":" +zsubsesion + "!" + znodo10;
String zcomun10 = znodo10 + ":" +zsubsesion + "!" + znodo10 + "[&VAR.m4lix]" + ".";

String zoutputdef11 = zsubsesion + "!" + znodo11 + "[*]";
String zmove11 = znodo11 + ":" +znodo11 + "[FIRST]";
String zlectura11 = znodo11 + ":" +zsubsesion + "!" + znodo11;
String zcomun11 = znodo11 + ":" +zsubsesion + "!" + znodo11 + "[&VAR.m4lix]" + ".";

String zoutputdef12 = zsubsesion + "!" + znodo12 + "[*]";
String zmove12 = znodo12 + ":" +znodo12 + "[FIRST]";
String zlectura12 = znodo12 + ":" +zsubsesion + "!" + znodo12;
String zcomun12 = znodo12 + ":" +zsubsesion + "!" + znodo12 + "[&VAR.m4lix]" + ".";

String zoutputdef13 = zsubsesion + "!" + znodo13 + "[*]";
String zmove13 = znodo13 + ":" +znodo13 + "[FIRST]";
String zlectura13 = znodo13 + ":" +zsubsesion + "!" + znodo13;
String zcomun13 = znodo13 + ":" +zsubsesion + "!" + znodo13 + "[&VAR.m4lix]" + ".";

String zoutputdef14 = zsubsesion + "!" + znodo14 + "[*]";
String zmove14 = znodo14 + ":" +znodo14 + "[FIRST]";
String zlectura14 = znodo14 + ":" +zsubsesion + "!" + znodo14;
String zcomun14 = znodo14 + ":" +zsubsesion + "!" + znodo14 + "[&VAR.m4lix]" + ".";

String idWu = zcomun3 + "STD_ID_WORK_UNIT";
String nmWu = zcomun3 + "STD_N_WORK_UNIT";

String idLegEnt = zcomun4 + "STD_ID_LEG_ENT";
String nmLegEnt = zcomun4 + "STD_N_LEG_ENT";

String idWorkLoc = zcomun5 + "STD_ID_WORK_LOCATION";
String nmWorkLoc = zcomun5 + "STD_N_WORK_LOCATION";

String idWorkCycle = zcomun6 + "SCO_ID_REF_MOD";
String nmWorkCycle = zcomun6 + "SCO_NM_REF_MOD";

String idDayType = zcomun9 + "SCO_ID_DAY_TYPE";
String nmDayType = zcomun9 + "SCO_NM_DAY_TYPE";
String totHoursDayType = zcomun9 + "GET_HOURS_DAY_FORMAT";
String dayTimeSlot = zcomun9 + "GET_TRANSLATED_TIMESLOT_PERIOD";
String idEnterType = zcomun9 + "SCO_ID_ENTER_TYPE";
String idTimetable = zcomun9 + "SCO_ID_TIMETABLE";

String idColor = zcomun10 + "SCO_ID_COLOR";
String nmGroup = zcomun10 + "SCO_NM_GROUP";
String cssClass = zcomun10 + "CSS_CLASS";

String idAlertGroup= zcomun11 + "SCO_ID_ALERT_SEVERITY_LEVEL";
String nmAlertGroup= zcomun11 + "SCO_NM_ALERT_SEVERITY_LEVEL";
String cssAlertGroup = zcomun11 + "SCO_HTML_ICON";

String nmScope= zcomun12 + "SCO_NM_SCOPE";
String nmCounter= zcomun12 + "SCO_NM_ENTITLEMENT";
String idCounter = zcomun12 + "SCO_ID_ENTITLEMENT";

String idJob= zcomun13 + "STD_ID_JOB_CODE";
String nmJob= zcomun13 + "STD_N_JOB_CODE";

String idPosition= zcomun14 + "SCO_ID_POSITION";
String nmPosition= zcomun14 + "SCO_NM_POSITION";

String methodMenus = "MENUS:" + zsubsesion + "!SSE_GTA_PLAN.SSE_MAIN_MENUS";
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:exec m4method="<%=methodMenus%>">
	<m4:param name="ARG_MSS" value="<%=mss%>"/>
	<m4:param name="ARG_HOURS_FORMAT" value="<%=hoursFormat%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo9%>"><m4:param name="m4name0" value="<%=zoutputdef9%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo10%>"><m4:param name="m4name0" value="<%=zoutputdef10%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo11%>"><m4:param name="m4name0" value="<%=zoutputdef11%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo12%>"><m4:param name="m4name0" value="<%=zoutputdef12%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo13%>"><m4:param name="m4name0" value="<%=zoutputdef13%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo14%>"><m4:param name="m4name0" value="<%=zoutputdef14%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove6%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove9%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove10%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove11%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove12%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove13%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove14%>"/></m4:move>
<%
int  zcounti3  = 0;	
int  zcount3  = 0;
int  zcounti4  = 0;	
int  zcount4  = 0;
int  zcounti5  = 0;	
int  zcount5  = 0;
int  zcounti6  = 0;	
int  zcount6  = 0;
int  zcounti9  = 0;	
int  zcount9  = 0;
int  zcounti10  = 0;	
int  zcount10  = 0;
int  zcounti11  = 0;	
int  zcount11  = 0;
int  zcounti12  = 0;	
int  zcount12  = 0;
int  zcounti13  = 0;	
int  zcount13  = 0;
int  zcounti14  = 0;	
int  zcount14  = 0;
try {
	M4Operations m = new M4Operations(request);
	zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
	zcount3 =  m.getCount(znodo3,zsubsesion,znodo3);
	zcounti4 = m.getCountInClient(znodo4,zsubsesion,znodo4);
	zcount4 =  m.getCount(znodo4,zsubsesion,znodo4);
	zcounti5 = m.getCountInClient(znodo5,zsubsesion,znodo5);
	zcount5 =  m.getCount(znodo5,zsubsesion,znodo5);
	zcounti6 = m.getCountInClient(znodo6,zsubsesion,znodo6);
	zcount6 =  m.getCount(znodo6,zsubsesion,znodo6);
	zcounti9 = m.getCountInClient(znodo9,zsubsesion,znodo9);
	zcount9 =  m.getCount(znodo9,zsubsesion,znodo9);
	zcounti10 = m.getCountInClient(znodo10,zsubsesion,znodo10);
	zcount10 =  m.getCount(znodo10,zsubsesion,znodo10);
	zcounti11 = m.getCountInClient(znodo11,zsubsesion,znodo11);
	zcount11 =  m.getCount(znodo11,zsubsesion,znodo11);
	zcounti12 = m.getCountInClient(znodo12,zsubsesion,znodo12);
	zcount12 =  m.getCount(znodo12,zsubsesion,znodo12);
	zcounti13 = m.getCountInClient(znodo13,zsubsesion,znodo13);
	zcount13 =  m.getCount(znodo13,zsubsesion,znodo13);
	zcounti14 = m.getCountInClient(znodo14,zsubsesion,znodo14);
	zcount14 =  m.getCount(znodo14,zsubsesion,znodo14);
} catch(Exception e) {}
String	zcountv3 = String.valueOf(zcounti3);
String	zcountv4 = String.valueOf(zcounti4);
String	zcountv5 = String.valueOf(zcounti5);
String	zcountv6 = String.valueOf(zcounti6);
String	zcountv9 = String.valueOf(zcounti9);
String	zcountv10 = String.valueOf(zcounti10);
String	zcountv11 = String.valueOf(zcounti11);
String	zcountv12 = String.valueOf(zcounti12);
String	zcountv13 = String.valueOf(zcounti13);
String	zcountv14 = String.valueOf(zcounti14);
%>

<!-- Period -->
<div id="b0" class="affichageShow">
	<div  class="nav"> 
		<table width="100%" cellspacing="0" cellpadding="0" >
			<tr>
				<td width="95%" class="titleMenu">
					<%=Tran_mss_g4_gta_planning.getProperty("menus.period")%>
				</td>
				<td width="5%" class="titleMenu">
					<a href ="javascript:cacheMenu('t0','b0');"><img src="/iconos/cancel.png" alt="" align="right" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonClose")%>"/></a>
				</td>
			</tr>
			<tr class="background"><th colspan="2"></th></tr>
			<tr ><th colspan="2"></th></tr>
		</table>
		<div style="width:100%;height:72px;overflow-Y:auto;overflow-X:hidden;"> 
			<table width="100%" height="100%" cellspacing="1" cellpadding="0">
				<form action="" method="post" name="formb0" id="formb0" target="">
				<tr height="24px">
					<td class="labelMenu2" width="25%">&nbsp;*&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.startDate")%></td>
					<td class="labelMenu">
					<input class="fuenteformulario" type="text" name="DT_START" id="DT_START"  maxlength="10" size="10" tabindex="1" value="<%=dtStart%>" />&nbsp;<a href="javascript:m4calendario(m4objeto('DT_START','formb0'))" ><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18"/></a>
					</td>
					<td rowspan="2">
						<a href ="javascript:m4valor('oculto','zinicios','1','set');filterPage();"><img src="/iconos/ok.gif" alt="" align="right" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonValidation")%>"/></a>
					</td>
				</tr>
				<tr height="24px">
					<td class="labelMenu2">&nbsp;*&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.endDate")%></td>
					<td class="labelMenu"><input class="fuenteformulario" type="text" name="DT_END" id="DT_END" maxlength="10" size="10"  value="<%=dtEnd%>" />&nbsp;<a href="javascript:m4calendario(m4objeto('DT_END','formb0'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" /></a>
					</td>
				</tr>
				</form>
			</table>
		</div>
	</div>
</div>
<!-- Type of Datas (Display Options)-->
<div id="b1" class="affichageShow">
	<div  class="nav"> 
		<table width="100%" cellspacing="0" cellpadding="0" >
			<tr>
				<td width="95%" class="titleMenu">
					<%=Tran_mss_g4_gta_planning.getProperty("menus.display")%>
				</td>
				<td width="5%" class="titleMenu">
					<a href ="javascript:cacheMenu('t1','b1');"><img src="/iconos/cancel.png" alt="" align="right" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonClose")%>"/></a>
				</td>
			</tr>
			<tr class="background"><th colspan="2"></th></tr>
			<tr ><th colspan="2"></th></tr>
		</table>
		<div style="width:100%;height:72px;overflow-Y:auto;overflow-X:hidden;"> 
			<table width="100%" height="100%" cellspacing="1" cellpadding="0" border="0">
				<tr>
					<td class="labelMenu2">&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.display")%></td>
					<td class="labelMenu">
						<select id="typeTab" class="fuenteformulario" value="<%=typeTab%>">
							<option value= "T"><%=Tran_mss_g4_gta_planning.getProperty("menus.theoretical")%></option>
							<option value= "R"><%=Tran_mss_g4_gta_planning.getProperty("menus.real")%></option>
							<option value= "TB"><%=Tran_mss_g4_gta_planning.getProperty("menus.theoreticalOrigine")%></option>
							<option value= "PB"><%=Tran_mss_g4_gta_planning.getProperty("menus.clocking")%></option>
							<% 
							String idScope = "";
							String counter = "";
							String counterName = "";
							%>
							<m4:loop from="0" to="<%=new Integer(new Integer(zcountv12).intValue()-1).toString()%>">
							<%
							try {
								M4Operations t = new M4Operations(request);
								idScope = String.valueOf((int)Float.parseFloat(t.getItem(znodo12,zmeta4object,znodo12,m4lix,"SCO_ID_SCOPE"))); 
								counter = t.getItem(znodo12,zmeta4object,znodo12,m4lix,"SCO_ID_ENTITLEMENT");
								counterName = t.getItem(znodo12,zmeta4object,znodo12,m4lix,"SCO_NM_ENTITLEMENT");
							} catch(Exception e) {}
							if (idScope.equals("1")){
							%>
								<option value= "<%=counter%>"> <%=counterName%> </option>
							<%}%>
							</m4:loop>	
						</select>
					</td>
					<td colspan="2"></td>
					<td rowspan="3">
						<a href ="javascript:filterPage();"><img src="/iconos/ok.gif" alt="" align="right" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonValidation")%>"/></a>
					</td>
				</tr>
				<tr>
					<td class="labelMenu2">&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.total")%></td>
					<td class="labelMenu">
						<input title="<%=Tran_mss_g4_gta_planning.getProperty("menus.totalInfos")%>" id="checkTotal" name="checkTotal" type="checkbox" value="<%=checkTotal%>" <%=checkTotalCheck%> onclick="javascript:totalCheck();" /> 
					</td>
					<td class="labelMenu2">&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.onlyAlerts")%></td>
					<td class="labelMenu">
						<input title="<%=Tran_mss_g4_gta_planning.getProperty("menus.onlyAlertsInfos")%>" id="checkAlert" name="checkAlert" type="checkbox" value="<%=checkAlert%>" <%=checkAlertCheck%> onclick="javascript:alertCheck();" /> 
					</td>
				</tr>
				<input  id="checkDayModif" name="checkDayModif" type="hidden" value="" /> 
				<!--
				<tr>
					<td class="labelMenu2">&nbsp;Modification du Théorique dans 'Détails'</td>
					<td class="labelMenu" colspan="">
						<input title="Modification du Théorique dans 'Détails'" id="checkDayModif" name="checkDayModif" type="checkbox" value="" /> 
					</td>
					<td colspan="2"></td>
				</tr>
				-->
			</table>
		</div>
	</div>
</div>
<!-- Key / Caption -->
<div id="b2" class="affichageShow">
	<div class="nav">
		<table width="100%" cellspacing="1" cellpadding="0" >
			<tr>
				<td width="95%" class="titleMenu">
					<%=Tran_mss_g4_gta_planning.getProperty("menus.legend")%>
				</td>
				<td width="5%" class="titleMenu">
					<a href ="javascript:cacheMenu('t2','b2');"><img src="/iconos/cancel.png" alt="" align="right" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonClose")%>"/></a>
				</td>
			</tr>
			<tr class="background"><th colspan="2"></th></tr>
			<tr ><th colspan="2"></th></tr>
		</table>
		<div style="width:100%;height:72px;overflow-Y:auto;overflow-X:hidden;"> 
			<table width="100%"  cellspacing="1" cellpadding="0">
				<%
				String zposicions = "0";
				int zcontrol = 0;
				int zposicion =0;
				%>
				<tr height="0px">
						<td width="30px"><div style="width:30px;height:8px;border: 2px groove #00C000;"></div></td>
						<td >:&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.updatedDay")%></td>
						<td width="30px"><div style="width:30px;height:8px;border:  1px solid black;background-image:url(/iconos/gtaValidation.png);background-repeat: no-repeat;background-position:right bottom;""></div></td>
						<td >:&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.validatedDay")%></td>
						<td width="30px"><div style="width:30px;height:8px;border: 1px solid black;background-image:url(/iconos/Valid.png);background-repeat: no-repeat;background-position:right top;"></div></td>
						<td >:&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.pendingIncident")%></td>
						<td width="30px" class="day-Incidents"></td>
						<td >:&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.moreIncidents")%></td>
				</tr>
				<tr height="0px">

					<m4:loop from="0" to="<%=new Integer(new Integer(zcountv10).intValue()-1).toString()%>">
					<%
						zposicions = m4lix;
						zposicion = Integer.valueOf(zposicions).intValue();
						zcontrol = zposicion%4;
						if (zcontrol == 0 && !zposicions.equals("0")) {
					%>
							</tr><tr height="0px">
						<%}%>
						<td  width="30px" class="<m4:item m4name="<%=cssClass%>"/>">  </td>
						<td >:&nbsp;<m4:item m4name="<%=nmGroup%>"/></td>
					</m4:loop>
				</tr>
				<tr height="0px">
					<m4:loop from="0" to="<%=new Integer(new Integer(zcountv11).intValue()-1).toString()%>">
					<%
						zposicions = m4lix;
						zposicion = Integer.valueOf(zposicions).intValue();
						zcontrol = zposicion%4;
						if (zcontrol == 0) {
					%>
							</tr><tr height="0px">
						<%}%>
						<td  width="30px"> <img  src="/iconos/<m4:item m4name="<%=cssAlertGroup%>"/>.png"/> </td>
						<td >:&nbsp;<m4:item m4name="<%=nmAlertGroup%>"/> </br></td>
					</m4:loop>
				</tr>
			</table>
			
		</div>
	</div>
</div>
<!-- Filters -->
<div id="b3" class="affichageShowBig">
	<div class="nav">
		<table width="100%" cellspacing="0" cellpadding="0" >
			<tr>
				<td width="95%" class="titleMenu">
					<%=Tran_mss_g4_gta_planning.getProperty("menus.filter")%>
				</td>
				<td width="5%" class="titleMenu">
					<a href ="javascript:cacheMenu('t3','b3');"><img src="/iconos/cancel.png" alt="" align="right" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonClose")%>"/></a>
				</td>
			</tr>
			<tr class="background"><th colspan="2"></th></tr>
			<tr ><th colspan="2"></th></tr>
		</table>
		<div style="width:100%;height:92px;overflow-Y:auto;overflow-X:hidden;">  
			<table width="100%" height="100%" cellspacing="1" cellpadding="0">
			<tr height="20px">
					<td class="labelMenu2">
						&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.filterInfo")%>:
					</td>
					<td colspan="3">
						<input type="text" name="people" class="fuenteformulario" id="people" size="120" value="" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.filterInfoTooltip")%>"/>
						<input type="hidden" id="peopleFilter" name="peopleFilter" value=""/>
					</td>
					<td rowspan="2">
						<a href ="javascript:m4valor('oculto','zinicios','1','set');filterPage();"><img src="/iconos/icono_filtrar_36_36.gif" alt="" align="center" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonFilter")%>"/></a>
					</td>
				</tr>
				<tr height="20px">
					<td class="labelMenu2">
						&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.wu")%>:
					</td>
					<td>
						<select id="ID_WU" class="fuenteformulario">
							<option value= "All"><%=Tran_mss_g4_gta_planning.getProperty("menus.allF")%></option>
							<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
								<option value= "<m4:item m4name="<%=idWu%>"/>"> <m4:item m4name="<%=idWu%>"/> - <m4:item m4name="<%=nmWu%>"/></option>
							</m4:loop>
						</select>
					</td>
					<td class="labelMenu2">
						&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.legEntity")%>:
					</td>
					<td>
						<select id="ID_LEGENT" class="fuenteformulario">
							<option value= "All"><%=Tran_mss_g4_gta_planning.getProperty("menus.allF")%></option>
							<m4:loop from="0" to="<%=new Integer(new Integer(zcountv4).intValue()-1).toString()%>">
								<option value= "<m4:item m4name="<%=idLegEnt%>"/>"> <m4:item m4name="<%=nmLegEnt%>"/></option>
							</m4:loop>
						</select>
					</td>
				</tr>
				<tr height="20px">
					<td class="labelMenu2">
						&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.job")%>:
					</td>
					<td>
						<select id="ID_JOB" class="fuenteformulario">
						<option value= "All"><%=Tran_mss_g4_gta_planning.getProperty("menus.allM")%></option>
						<m4:loop from="0" to="<%=new Integer(new Integer(zcountv13).intValue()-1).toString()%>">
							<option value= "<m4:item m4name="<%=idJob%>"/>"> <m4:item m4name="<%=nmJob%>"/></option>
						</m4:loop>
					</select>
					</td>
					<td class="labelMenu2">
						&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.position")%>:
					</td>
					<td>
						<select id="ID_POSITION" class="fuenteformulario">
							<option value= "All"><%=Tran_mss_g4_gta_planning.getProperty("menus.allM")%></option>
							<m4:loop from="0" to="<%=new Integer(new Integer(zcountv14).intValue()-1).toString()%>">
								<option value= "<m4:item m4name="<%=idPosition%>"/>"> <m4:item m4name="<%=nmPosition%>"/></option>
							</m4:loop>
						</select> 
					</td>
					
					<td rowspan="2">
						<a href ="javascript:cleanFilter();"><img src="/iconos/js_deshacer_filtro.gif" alt="" align="center" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonUndoFilter")%>"/></a>
					</td>
					
					
				</tr>
				<tr height="20px">
					<td class="labelMenu2">
						&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.workLoc")%>:
					</td>
					<td>
						<select id="ID_WORKLOC" class="fuenteformulario">
						<option value= "All"><%=Tran_mss_g4_gta_planning.getProperty("menus.allM")%></option>
						<m4:loop from="0" to="<%=new Integer(new Integer(zcountv5).intValue()-1).toString()%>">
							<option value= "<m4:item m4name="<%=idWorkLoc%>"/>"> <m4:item m4name="<%=nmWorkLoc%>"/></option>
						</m4:loop>
					</select>
					</td>
					<td class="labelMenu2">
						&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.workCycle")%>:
					</td>
					<td>
						<select id="ID_WORKCYCLE" class="fuenteformulario">
							<option value= "All"><%=Tran_mss_g4_gta_planning.getProperty("menus.allM")%></option>
							<m4:loop from="0" to="<%=new Integer(new Integer(zcountv6).intValue()-1).toString()%>">
								<option value= "<m4:item m4name="<%=idWorkCycle%>"/>"> <m4:item m4name="<%=nmWorkCycle%>"/></option>
							</m4:loop>
						</select> 
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>
<!-- Sorts -->
<div id="b4" class="affichageShow" >
	<div class="nav">
		<table width="100%" cellspacing="0" cellpadding="0" >
			<tr>
				<td width="95%" class="titleMenu">
					<%=Tran_mss_g4_gta_planning.getProperty("menus.sorts")%>
				</td>
				<td width="5%" class="titleMenu">
					<a href ="javascript:cacheMenu('t4','b4');"><img src="/iconos/cancel.png" alt="" align="right" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonClose")%>"/></a>
				</td>
			</tr>
			<tr class="background"><th colspan="2"></th></tr>
			<tr ><th colspan="2"></th></tr>
		</table>
		<div style="width:98%;height:72px;overflow-Y:auto;">
			<table width="100%" height="100%">
				<tr height="24px">
					<td class="labelMenu2">
						&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.label")%> :
					</td>
					<td class="labelMenu">
						<select id="ID_SORT_LABEL" class="fuenteformulario" onchange="changeSort(false)">
							<option value= "1"><%=Tran_mss_g4_gta_planning.getProperty("menus.sortLastFirstName")%></option>
							<option value= "3"><%=Tran_mss_g4_gta_planning.getProperty("menus.sortLegEnt")%></option>
							<option value= "5"><%=Tran_mss_g4_gta_planning.getProperty("menus.sortWU")%></option>
							<option value= "7"><%=Tran_mss_g4_gta_planning.getProperty("menus.sortWLoc")%></option>
							<option value= "9"><%=Tran_mss_g4_gta_planning.getProperty("menus.sortJob")%></option>
							<option value= "11"><%=Tran_mss_g4_gta_planning.getProperty("menus.sortPosition")%></option>
							<option value= "13"><%=Tran_mss_g4_gta_planning.getProperty("menus.sortCycle")%></option>
							<option value= "-1"><%=Tran_mss_g4_gta_planning.getProperty("menus.sortId")%></option>
						</select>
					</td>
					<td rowspan="2">
						<a href ="javascript:filterPage();"><img src="/iconos/ok.gif" alt="" align="right" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonValidation")%>"/></a>
					</td>
				</tr>
				<tr height="24px">
					<td class="labelMenu2">
						&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.sort")%> :
					</td>
					<td class="labelMenu">
						<div id ="imgSort" align="right" style="cursor: hand;"onmousedown="changeSort(true)"><img src='/iconos/sort-AZ.png' alt='' align='left'/></div>
						<input type="hidden" id="ID_ORDER" name="ID_ORDER" value="0"/>
						<input type="hidden" id="ID_SORT" name="ID_SORT" value="1"/>
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>
<!-- Modifications -->
<div id="b5" class="affichageShow">
	<div class="nav">
		<table width="100%" cellspacing="0" cellpadding="0" >
			<tr>
				<td width="95%" class="titleMenu">
					&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.modification")%>
				</td>
				<td width="5%" class="titleMenu">
					<a href ="javascript:cacheMenu('t5','b5');"><img src="/iconos/cancel.png" alt="" align="right" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonClose")%>"/></a>
				</td>
			</tr>
			<tr class="background"><th colspan="2"></th></tr>
			<tr ><th colspan="2"></th></tr>
		</table>
		<div style="width:100%;height:72px;overflow-Y:auto;"> 
			<table width="100%" height="100%" cellspacing="1" cellpadding="0" border="0">
				<tr height="20px">
					<td class="labelMenu2">
						&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.dayType")%> :
					</td>
					<script type="text/javascript">
						var update_HoursDay= new Array();
						var update_TimeSlotText= new Array();
						var update_EnterType= new Array();
						var update_IdTimetable= new Array();
					</script>
					<td>
						<input type="text" name="update_select_idDayType" class="fuenteformulario" id="update_select_idDayType" size="60" value=""/>
						<select id="select_idDayType" class="fuenteformulario" onchange="modifChangeDay(this.value,update_EnterType[this.value]);">
							<m4:loop from="0" to="<%=new Integer(new Integer(zcountv9).intValue()-1).toString()%>">
								<option value= "<m4:item m4name="<%=idDayType%>"/>"> <m4:item m4name="<%=nmDayType%>"/> </option>
								<script type="text/javascript">
									update_HoursDay['<m4:item m4name="<%=idDayType%>"/>'] = "<m4:item m4name="<%=totHoursDayType%>"/>";
									update_TimeSlotText['<m4:item m4name="<%=idDayType%>"/>'] = "<m4:item m4name="<%=dayTimeSlot%>"/>" ;
									update_EnterType['<m4:item m4name="<%=idDayType%>"/>'] = "<m4:item m4name="<%=idEnterType%>"/>";
									update_IdTimetable['<m4:item m4name="<%=idDayType%>"/>'] = "<m4:item m4name="<%=idTimetable%>"/>";
								</script>
							</m4:loop>
						</select>
					</td>
					<td rowspan="3" id="modifyImage">
						<a href ="javascript:updateDays()"><img src="/iconos/grabar.gif" alt="" align="middle" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonSave")%>"/></a>
					</td>
				</tr>
				<tr  height="20px">
					<td id="update_HoursDayLabel" class="labelMenu2">
						&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.hoursDayLabel")%> :
					</td>
					<td>
						<input title="<%=Tran_mss_g4_gta_planning.getProperty("menus.hoursDayLabelInfo")%>" size="6" id="update_select_HoursDay" name="update_select_HoursDay" type="text" maxlength="6"  />
					</td>
				</tr>
				<tr  height="20px">
					<td class="labelMenu2">
						&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.schedule")%> :
					</td>
					<td  id = "update_select_dayTimeSlot" >
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>
<!-- Counters -->
<div id="b6" class="affichageShow">
	<div  class="nav"> 
		<table width="100%" cellspacing="0" cellpadding="0" >
			<tr>
				<td width="95%" class="titleMenu">
					&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.counters")%>
				</td>
				<td width="5%" class="titleMenu">
					<a href ="javascript:cacheMenu('t6','b6');"><img src="/iconos/cancel.png" alt="" align="right" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonClose")%>"/></a>
				</td>
			</tr>
			<tr class="background"><th colspan="2"></th></tr>
			<tr ><th colspan="2"></th></tr>
		</table>
		<div style="width:100%;height:72px;overflow-Y:auto;overflow-X:hidden;"> 
			<table width="100%" height="100%" cellspacing="1" cellpadding="0">
				<tr>
					<td class="labelMenu2">&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.counter")%> <input class="inputCounter" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.counterInfo")%>" size="5" id="counterC1Name"  type="text" maxlength="3" value="<%=counterC1Name%>" /> </td>
					<td class="labelMenu">
						<select id="counterC1" class="fuenteformulario">
							<option value= ""><%=Tran_mss_g4_gta_planning.getProperty("menus.none")%></option>
							<m4:loop from="0" to="<%=new Integer(new Integer(zcountv12).intValue()-1).toString()%>">
								<option value= "<m4:item m4name="<%=idCounter%>"/>"><m4:item m4name="<%=nmScope%>"/> - <m4:item m4name="<%=nmCounter%>"/></option>
							</m4:loop>
						</select>	
					</td>
					<td rowspan="3">
						<a href ="javascript:filterPage();"><img src="/iconos/ok.gif" alt="" align="right" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonValidation")%>"/></a>
					</td>
				</tr>
				<tr>
					<td class="labelMenu2">&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.counter")%><input class="inputCounter" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.counterInfo")%>" size="5" id="counterC2Name"  type="text" maxlength="3" value="<%=counterC2Name%>" /> </td>
					<td class="labelMenu">
						<select id="counterC2" class="fuenteformulario">
							<option value= ""><%=Tran_mss_g4_gta_planning.getProperty("menus.none")%></option>
							<m4:loop from="0" to="<%=new Integer(new Integer(zcountv12).intValue()-1).toString()%>">
								<option value= "<m4:item m4name="<%=idCounter%>"/>"><m4:item m4name="<%=nmScope%>"/> - <m4:item m4name="<%=nmCounter%>"/></option>
							</m4:loop>
						</select>
					</td>
				</tr>
				<tr>
					<td class="labelMenu2">&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.counter")%><input class="inputCounter" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.counterInfo")%>" size="5" id="counterC3Name"  type="text" maxlength="3" value="<%=counterC3Name%>" /> </td>
					<td class="labelMenu">
						<select id="counterC3" class="fuenteformulario">
							<option value= ""><%=Tran_mss_g4_gta_planning.getProperty("menus.none")%></option>
							<m4:loop from="0" to="<%=new Integer(new Integer(zcountv12).intValue()-1).toString()%>">
								<option value= "<m4:item m4name="<%=idCounter%>"/>"><m4:item m4name="<%=nmScope%>"/> - <m4:item m4name="<%=nmCounter%>"/></option>
							</m4:loop>	
						</select>
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>
<!-- Validation -->
<div id="b7" class="affichageShow">
	<div id="infos_VE" class="nav"> 
		<table width="100%" cellspacing="0" cellpadding="0" >
			<tr>
				<td width="95%" class="titleMenu">
					<%=Tran_mss_g4_gta_planning.getProperty("menus.validation")%>
				</td>
				<td width="5%" class="titleMenu">
					<a href ="javascript:cacheMenu('t7','b7');"><img src="/iconos/cancel.png" alt="" align="right" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonClose")%>"/></a>
				</td>
			</tr>
			<tr class="background"><th colspan="2"></th></tr>
			<tr ><th colspan="2"></th></tr>
		</table>
		<div style="width:100%;height:72px;overflow-Y:auto;overflow-X:hidden;"> 
			<table width="100%" height="100%" cellspacing="1" cellpadding="0">
				<tr>
					<td class="labelMenu2">&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.validationInfo")%></td>
					<td class="labelMenu">	
						<a href ="javascript:validateDaysInit();"><img src="/iconos/grabar.gif" alt="" align="right" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonSave")%>"/></a>
					</td>
					<td class="labelMenu" width="40%"></td>
					<td class="labelMenu2">&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("menus.printer")%></td>
					<td  class="labelMenu">
						<a href ="javascript:parent.pageBodyFrame.focus();window.print();"><img src="/iconos/imprimir.gif" alt="" align="right" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonPrint")%>"/></a>
					</td>
				</tr>
			</table>
		</div>
		
	</div>
</div>
<!-- Menus Bar -->
<div id="nav_menu_wrapper">
	<div id ="nav_menu" class="nav_menu">
		<ul>
			<% if (displayMenu0 == -1) { %>
			<input class="free" type="hidden" id="t0" name="t0" value=""/> 
			<%}else{%>
			<li id="t0" class="free"><%=Tran_mss_g4_gta_planning.getProperty("menus.tabPeriod")%></li>

			<%} if (displayMenu1 == -1) { %>
			<input class="free" type="hidden" id="t1" name="t1" value=""/> 
			<%}else{%>
			<li id="t1" class="free"><%=Tran_mss_g4_gta_planning.getProperty("menus.tabDisplay")%></li>
			
			<%} if (displayMenu2 == -1) { %>
			<input class="free" type="hidden" id="t2" name="t2" value=""/> 
			<%}else{%>
			<li id="t2" class="free"><%=Tran_mss_g4_gta_planning.getProperty("menus.tabLegend")%></li>

			<%} if (displayMenu3 == -1) { %>
			<input class="free" type="hidden" id="t3" name="t3" value=""/> 
			<%}else{%>
			<li id="t3" class="free"><%=Tran_mss_g4_gta_planning.getProperty("menus.tabFilter")%></li>

			<%} if (displayMenu4 == -1) { %>
			<input class="free" type="hidden" id="t4" name="t4" value=""/> 
			<%}else{%>
			<li id="t4" class="free"><%=Tran_mss_g4_gta_planning.getProperty("menus.tabSort")%></li>

			<%} if (displayMenu5 == -1) { %>
			<input class="free" type="hidden" id="t5" name="t5" value=""/> 
			<%}else{%>
			<li id="t5" class="free"><%=Tran_mss_g4_gta_planning.getProperty("menus.tabModif")%></li>

			<%} if (displayMenu6 == -1) { %>
			<input class="free" type="hidden" id="t6" name="t6" value=""/> 
			<%}else{%>
			<li id="t6" class="free"><%=Tran_mss_g4_gta_planning.getProperty("menus.tabCounter")%></li>

			<%} if (displayMenu7 == -1) { %>
			<input class="free" type="hidden" id="t7" name="t7" value=""/> 
			<%}else{%>
			<li id="t7" class="free"><%=Tran_mss_g4_gta_planning.getProperty("menus.tabValidation")%></li>
			<%}%>
		</ul>
		<div class="loading"><span id='load'><table  width="20px" height="20px"><tr><td  align="center" valign="middle"><img src="/iconos/wait.gif"></td></tr></table></span></div>
	</div>
</div>	
<!-- bottom navigation menu ends here --> 

<input type="hidden" id="currentViewType" name="currentViewType" value="<%=viewType%>"/> 
<input type="hidden" id="startHourDay" name="startHourDay" value="<%=startHourDay%>"/> 
<input type="hidden" id="endHourDay" name="endHourDay" value="<%=endHourDay%>"/> 
<input type="hidden" id="diffHourDay" name="diffHourDay" value="<%=diffHourDay%>"/> 
<!--<input type="hidden" id="hoursFormat" name="hoursFormat" value="<%=hoursFormat%>"/> -->

<script type="text/javascript">
window.addEvent('domready', function() {

	//Add event on window toolbox
	$('dialogBox_Header').addEvent('click', function(){
		dialogBox_hide('dialogBox');
	});

	//Update Affichage in header
	$('textAffichage').innerText = $('typeTab').options[$('typeTab').selectedIndex].text;

	//Spinner Control  
	Site.spinnerControl();

	//Menus Initialisation
	var menu0 = new menu("t0","b0","fr"); 
	menu0.init();

	var menu1 = new menu("t1","b1","fr"); 
	menu1.init();

	var menu2 = new menu("t2","b2","fr");
	menu2.init();

	var menu3 = new menu("t3","b3","fr");
	menu3.init();

	var menu4 = new menu("t4","b4","fr");
	menu4.init();

	var menu5 = new menu("t5","b5","fr");
	menu5.init();

	var menu6 = new menu("t6","b6","fr");
	menu6.init();

	var menu7 = new menu("t7","b7","fr");
	menu7.init();

	//Change the Heigth of the iframe where this page is inserted
	windowHeight = parent.document.documentElement.clientHeight;
	windowHeight = windowHeight - 190;//170/200
	$("htmlGTA").style.height= windowHeight+"px";
	$("bodyGTA").style.height= windowHeight+"px";
});


//Menu 4-Sort Update
changeSort(false);


//Day Update Initialisation (Modification Menu)
$('update_select_HoursDay').value = update_HoursDay[$('select_idDayType').value];
$('update_select_dayTimeSlot').innerHTML = update_TimeSlotText[$('select_idDayType').value];
$('update_select_idDayType').value = $('select_idDayType').value;
//Day Update Initialisation

//Save Hours Format
hoursFormat = "<%=hoursFormat%>";

//R&D Autocompletion People Filter
document.addEvent('domready', function() {
	//AutoCompletion for Filter People
	var filterPeople = $('people');
	new Autocompleter.Request.HTML(filterPeople, 'mss_g4_list_people.jsp', {
		'indicatorClass': 'autocompleter-loading', // class added to the input during request
		'postVar': 'search',
		multiple: true, //permet de mettre plusieurs valeurs
		filterSubset : true, // permet de rechercher dans toute la chaine la suggestion, pas seulement a partir du debut
		delay : 300,
		allowDupes : false, // enleve les doublons dans la suggestion
		autoSubmit : false,
		maxChoices : 4,
		minLength : 3,

		onHide:function() { //Apres que la liste de choix se cache
			var people =  $('people').get('value');
			var tous = people.indexOf("--Todos--",0);
			var index = 0;
			finalList="";
			var testNext=1;
			var end = people.length;
			
			if ((tous != -1) || (end == 0)) 
			{
				//Pas de filtre de population
			}else{
				while (testNext != -1) {
					indexStart = people.indexOf("(",index);
					indexEnd = people.indexOf(")",index);
					if (finalList =="")
					{
						finalList =  "'"+people.substring(indexStart+1,indexEnd)+"'";
					}else{
						finalList =  finalList+",'"+people.substring(indexStart+1,indexEnd)+"'";
					}
					index = indexEnd+1;
					testNext = indexStart = people.indexOf("(",index);
				}
			}
			//employee list filter
			$('peopleFilter').value = finalList;
		},

		onComplete: function() {
		}
	});
	//AutoCompletion on Day Type
	var update_select_idDayType = $('update_select_idDayType');
	new Autocompleter.Request.HTML(update_select_idDayType, 'mss_g4_list_day_type.jsp', {
		'indicatorClass': 'autocompleter-loading', // class added to the input during request
		'postVar': 'search',
		'postData': {
			'ARG_ID_ENTER_TYPE': "" // send additional POST data
		},
		multiple: false, //permet de mettre plusieurs valeurs
		filterSubset : true, // permet de rechercher dans toute la chaine la suggestion, pas seulement a partir du debut
		delay : 300,
		allowDupes : false, // enleve les doublons dans la suggestion
		autoSubmit : false,
		forceSelect: false,
		maxChoices : 4,
		minLength : 3,

		onHide:function() { //Apres que la liste de choix se cache
			var dayType =  $('update_select_idDayType').get('value');
			var finalValue = "";
			var index = 0;
			var end = dayType.length;
			if (end == 0) 
			{
				//Pas de filtre
			}else{
				indexEnd = dayType.indexOf("/",index);
				finalValue = dayType.substring(0,indexEnd);
				$('update_select_idDayType').value = finalValue;

				$('select_idDayType').value = finalValue;
				modifChangeDay($('select_idDayType').value,update_EnterType[$(select_idDayType).value]);
				$('select_idDayType').focus();
			}
		},
		onComplete: function() {
		}
	});//end autocompleter
});
//R&D Autocompletion People Filter

</script>
<m4:endpage/>