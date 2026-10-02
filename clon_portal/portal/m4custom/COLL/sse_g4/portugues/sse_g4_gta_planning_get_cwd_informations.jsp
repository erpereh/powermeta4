<%///////////////////////////////////////PLANNING GTA : Day Informations (Cycle/Week/Days)///////////////////////////////////////%>
<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>

<!-- Translations -->
<%
M4SessionCl zsesionGTA = M4Context.getM4SessionCl(request);
String zlanguser = zsesionGTA.getBagEntries("lang");
if ((zlanguser==null)||(zlanguser.equals(""))){zlanguser = "fr";}
java.util.Properties Tran_mss_g4_gta_planning = new Properties();
Tran_mss_g4_gta_planning.load(application.getResourceAsStream("/translations/mss_g4_gta_planning_"+zlanguser+".properties"));
%>

<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);

//Global Parameters
String dtStart = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START");
String dtEnd = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_END");
String nbDays = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NB_DAYS");
//Filter Parameters
String idWuParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WU");
String idLegEntParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_LEGENT");
String idWorkLocParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKLOC");
String idWorkCycleParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKCYCLE");
//Information Parameters
String argDate = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE");
String argHR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR");
String argOrdPerid = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD"); 

String argIdDayType = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_DAY_TYPE"); 
String argOrdWeek = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_WEEK"); 

//Global Parameters
if ((dtStart==null)||(dtStart.equals(""))){dtStart = "";}
if ((dtEnd==null)||(dtEnd.equals(""))){dtEnd = "";}
if ((nbDays==null)||(nbDays.equals(""))){nbDays = "0";}
//Filter Parameters
if ((idWuParam==null)||(idWuParam.equals(""))){idWuParam="All";}
if ((idLegEntParam==null)||(idLegEntParam.equals(""))){idLegEntParam="All";}
if ((idWorkLocParam==null)||(idWorkLocParam.equals(""))){idWorkLocParam="All";}
if ((idWorkCycleParam==null)||(idWorkCycleParam.equals(""))){idWorkCycleParam="All";}
//Information Parameters
if ((argDate==null)||(argDate.equals(""))){argDate = "";}
if ((argHR==null)||(argHR.equals(""))){argHR = "";}
if ((argOrdPerid==null)||(argOrdPerid.equals(""))){argOrdPerid = "0";}

if ((argIdDayType==null)||(argIdDayType.equals(""))){argIdDayType = "";}
if ((argOrdWeek==null)||(argOrdWeek.equals(""))){argOrdWeek = "";}

String zsubsesion = "SSE_GTA_PLAN";
String zmeta4object = "SSE_GTA_PLAN";  
String znodo = "SSE_X_DAY_TYPE";
String znodo1 = "SSE_X_WEEK_TYPE";
String znodo2 = "SSE_X_REF_MOD";
String znodo3 = "SSE_REF_MOD_INFOS";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" +znodo + "[FIRST]";
String zlectura = znodo + ":" +zsubsesion + "!" + znodo;
String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";

String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
String zmove1 = znodo1 + ":" +znodo1 + "[FIRST]";
String zlectura1 = znodo1 + ":" +zsubsesion + "!" + znodo1;
String zcomun1 = znodo1 + ":" +zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".";

String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";
String zlectura2 = znodo2 + ":" +zsubsesion + "!" + znodo2;
String zcomun2 = znodo2 + ":" +zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
String zraiz2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + ".";

String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";
String zlectura3 = znodo3 + ":" +zsubsesion + "!" + znodo3;
String zcomun3 = znodo3 + ":" +zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + ".";

String getInfoMethod = "LOAD_DAY:" + zsubsesion + "!SSE_X_DAY_TYPE.SSE_GET_INFOS";
String getInfoMethod2 = "LOAD_WEEK:" + zsubsesion + "!SSE_X_WEEK_TYPE.SSE_GET_INFOS";
String getInfoMethod3 = "LOAD_CYCLE:" + zsubsesion + "!SSE_X_REF_MOD.SSE_GET_INFOS";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

String nmDayType = zraiz + "SCO_NM_DAY_TYPE";
String nbWorkHoursDay = zraiz + "SCO_WKNG_HRS_DAY";
String nmEnterType = zraiz + "SCO_NM_ENTER_TYPE";

String dtStartWeek = zraiz1 + "DT_START";
String dtEndWeek = zraiz1 + "DT_END";
String ordRefMod = zraiz1 + "SCO_OR_REF_MOD";
String ordWeek = zraiz1 + "SCO_OR_WEEK";
String nmWeek = zraiz1 + "SCO_NM_WEEK";
String nmWeekModel = zraiz1 + "SCO_NM_WEEK_MDL";
String totDaysWeek  = zraiz1 + "SCO_TOT_WKNG_DAYS";
String totHourssWeek = zraiz1 + "SCO_TOT_WKNG_HRS";
String nmMondayType = zraiz1 + "SCO_NM_DAY_TYPE_1";
String nmTuesdayType = zraiz1 + "SCO_NM_DAY_TYPE";
String nmWednesdayType = zraiz1 + "SCO_NM_DAY_TYPE_3";
String nmThursdayType = zraiz1 + "SCO_NM_DAY_TYPE_6";
String nmFridayType = zraiz1 + "SCO_NM_DAY_TYPE_2";
String nmSaturdayType = zraiz1 + "SCO_NM_DAY_TYPE_4";
String nmSundayType = zraiz1 + "SCO_NM_DAY_TYPE_5";

String nbHoursMonday = zraiz1 + "SCO_WKNG_HRS_DAY_1";
String nbHoursTuesday = zraiz1 + "SCO_WKNG_HRS_DAY";
String nbHoursWednesday = zraiz1 + "SCO_WKNG_HRS_DAY_3";
String nbHoursThursday = zraiz1 + "SCO_WKNG_HRS_DAY_6";
String nbHoursFriday = zraiz1 + "SCO_WKNG_HRS_DAY_2";
String nbHoursSaturday = zraiz1 + "SCO_WKNG_HRS_DAY_4";
String nbHoursSunday = zraiz1 + "SCO_WKNG_HRS_DAY_5";

String idRefMod = zraiz2 + "SCO_ID_REF_MOD";
String nmRefMod = zraiz2 + "SCO_NM_REF_MOD";
String startDateRefMod = zraiz2 + "DT_START";
String endDateRefMod = zraiz2 + "DT_END";

String ordRefMod3 = zcomun3 + "SCO_OR_REF_MOD";
String ordWeek3 = zcomun3 + "SCO_OR_WEEK";
String nmWeek3 = zcomun3 + "SCO_NM_WEEK";
String nmWeekModel3 = zcomun3 + "SCO_NM_WEEK_MDL";
String totDaysWeek3  = zcomun3 + "SCO_TOT_WKNG_DAYS";
String totHourssWeek3 = zcomun3 + "SCO_TOT_WKNG_HRS";
String nmMondayType3 = zcomun3 + "SCO_NM_DAY_TYPE_1";
String nmTuesdayType3 = zcomun3 + "SCO_NM_DAY_TYPE";
String nmWednesdayType3 = zcomun3 + "SCO_NM_DAY_TYPE_3";
String nmThursdayType3 = zcomun3 + "SCO_NM_DAY_TYPE_6";
String nmFridayType3 = zcomun3 + "SCO_NM_DAY_TYPE_2";
String nmSaturdayType3 = zcomun3 + "SCO_NM_DAY_TYPE_4";
String nmSundayType3 = zcomun3 + "SCO_NM_DAY_TYPE_5";

String nbHoursMonday3 = zcomun3 + "SCO_WKNG_HRS_DAY_1";
String nbHoursTuesday3 = zcomun3 + "SCO_WKNG_HRS_DAY";
String nbHoursWednesday3 = zcomun3 + "SCO_WKNG_HRS_DAY_3";
String nbHoursThursday3 = zcomun3 + "SCO_WKNG_HRS_DAY_6";
String nbHoursFriday3 = zcomun3 + "SCO_WKNG_HRS_DAY_2";
String nbHoursSaturday3 = zcomun3 + "SCO_WKNG_HRS_DAY_4";
String nbHoursSunday3 = zcomun3 + "SCO_WKNG_HRS_DAY_5";
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=getInfoMethod%>">
	<m4:param name="ARG_ID_DAY_TYPE" value="<%=argIdDayType%>"/>
</m4:exec>
<m4:exec m4method="<%=getInfoMethod2%>">
	<m4:param name="ARG_OR_WEEK" value="<%=argOrdWeek%>"/>
	<m4:param name="ARG_DT_START" value="<%=dtStart%>"/>
	<m4:param name="ARG_DT_END" value="<%=dtEnd%>"/>
</m4:exec>	
<m4:exec m4method="<%=getInfoMethod3%>">
	<m4:param name="ARG_DT_START" value="<%=dtStart%>"/>
	<m4:param name="ARG_DT_END" value="<%=dtEnd%>"/>
	<m4:param name="ARG_ID_REF_MOD" value="<%=idWorkCycleParam%>"/>
</m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<%
int  zcount  = 0;
int  zcounti  = 0;	
String zcountv = "0";

try {
	M4Operations m = new M4Operations(request);
	zcount = m.getCount(znodo3,zsubsesion,znodo3);
	zcounti = m.getCountInClient(znodo3,zsubsesion,znodo3);
	zcountv = String.valueOf(zcount);
} catch(Exception e) {}
%>
</br>

<!-- Cycle -->
<table width="100%" cellspacing="0" cellpadding="0" >
	<tr>
		<td class="titleCWD" width="30%">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.cycle")%>  
		</td>
		<td  width="1px">
		</td>
		<td class="titleCWD">
			<m4:item m4name="<%=nmRefMod%>"/>
		</td>
	</tr>
	<tr class="background"><th colspan="3"></th></tr>
	<tr ><th colspan="3"></th></tr>
</table>
<table width="100%" cellspacing="0" cellpadding="0" >
	<tr>
		<td class="column" colspan="10" align="center">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.cycleDesc")%>
		</td>
	</tr>
	<tr class="background"><th colspan="10"></th></tr>
	<tr>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.weekModel")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.week")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.monday")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.tuesday")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.wednesday")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.thursday")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.friday")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.saturday")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.sunday")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.total")%>
		</td>
	</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
	<tr>
		<td class="labelCWD">
			<m4:item m4name="<%=nmWeekModel3%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nmWeek3%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nbHoursMonday3%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nbHoursTuesday3%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nbHoursWednesday3%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nbHoursThursday3%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nbHoursFriday3%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nbHoursSaturday3%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nbHoursSunday3%>"/>
		</td>
		<td class="labelTotCWD">
			<m4:item m4name="<%=totHourssWeek3%>"/>
		</td>
	</tr>
</m4:loop>
</table>
<!-- Cycle -->


<!-- Semaine -->
<table width="100%" cellspacing="0" cellpadding="0" >
	<tr>
		<td class="titleCWD" width="30%">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.week")%>  
		</td>
		<td  width="1px">
		</td>
		<td class="titleCWD">
			<m4:item m4name="<%=nmWeek%>"/>
		</td>
	</tr>
	<tr class="background"><th colspan="2"></th></tr>
	<tr ><th colspan="2"></th></tr>
</table>
<table width="100%" cellspacing="0" cellpadding="0" >
	<tr>
		<td class="column" colspan="10" align="center">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.weekDesc")%> 
		</td>
	</tr>
	<tr class="background"><th colspan="9"></th></tr>
	<tr>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.weekModel")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.monday")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.tuesday")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.wednesday")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.thursday")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.friday")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.saturday")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.sunday")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.total")%>
		</td>
	</tr>
	<tr>
		<td class="labelCWD">
			<m4:item m4name="<%=nmWeekModel%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nbHoursMonday%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nbHoursTuesday%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nbHoursWednesday%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nbHoursThursday%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nbHoursFriday%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nbHoursSaturday%>"/>
		</td>
		<td class="labelCWD">
			<m4:item m4name="<%=nbHoursSunday%>"/>
		</td>
		<td class="labelTotCWD">
			<m4:item m4name="<%=totHourssWeek%>"/>
		</td>
	</tr>
</table>
<!-- Semaine -->

<!-- Jour -->
<table width="100%" cellspacing="0" cellpadding="0" >
	<tr>
		<td class="titleCWD" width="30%">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.day")%>  
		</td>
		<td  width="1px">
		</td>
		<td class="titleCWD">
			<m4:item m4name="<%=nmDayType%>"/>
		</td>
	</tr>
	<tr class="background"><th colspan="2"></th></tr>
	<tr ><th colspan="2"></th></tr>
</table>
<table width="100%" cellspacing="0" cellpadding="0" >
	<tr>
		<td class="column" colspan="2" align="center">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.dayDesc")%>  
		</td>
	</tr>
	<tr class="background"><th colspan="10"></th></tr>
	<tr>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.affectType")%>
		</td>
		<td class="headerCWD">
			<%=Tran_mss_g4_gta_planning.getProperty("cwd.totalDay")%>
		</td>
	</tr>
	<tr>
		<td class="labelCWD">
			<m4:item m4name="<%=nmEnterType%>"/>
		</td>
		<td class="labelTotCWD">
			<m4:item m4name="<%=nbWorkHoursDay%>"/>
		</td>
	</tr>
</table>
<!-- Jour -->

<m4:endpage/>

