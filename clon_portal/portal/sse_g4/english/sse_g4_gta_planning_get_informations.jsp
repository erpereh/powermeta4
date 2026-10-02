<%///////////////////////////////////////PLANNING GTA : Get General Informations On a Specific Day///////////////////////////////////////%>
<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>

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
Generatablaparametros zobjtabla = new Generatablaparametros(request);

//Portal Side
String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");
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
argHR  = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "gtaEncrypt2012",argHR); 
String argHREncrypt = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", argHR);
String argOrdPeriod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD");
String argOrdPeriodEncrypt = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", argOrdPeriod);
String argsType = "MSS_DET_ALL";
String argTabIndex = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_TAB_INDEX");
String argDispModif = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DISPLAY_MODIF");
String argHoursFormat = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_HOURS_FORMAT");

//Portal Side
if ((mss==null)||(mss.equals(""))){mss = "0";}
if (mss.equals("0")){argsType = "ESS_GTA_PLAN";}
String argsTypeEncrypt = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", argsType );
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
if ((argOrdPeriod==null)||(argOrdPeriod.equals(""))){argOrdPeriod = "0";}
if ((argTabIndex==null)||(argTabIndex.equals(""))){argTabIndex = "0";}
if ((argDispModif==null)||(argDispModif.equals(""))){argDispModif = "";}
if ((argHoursFormat==null)||(argHoursFormat.equals(""))){argHoursFormat = "0";}

String zsubsesion = "SSE_GTA_PLAN";
String zmeta4object = "SSE_GTA_PLAN";  
String znodo = "SSE_GTA_PLAN";
String znodo1 = "SSE_X_DAY_TYPE";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" +znodo + "[FIRST]";
String zlectura = znodo + ":" +zsubsesion + "!" + znodo;
String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";

String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";  
String zlectura1 = znodo1 + ":" +zsubsesion + "!" + znodo1;
String zcomun1 = znodo1 + ":" +zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";

String loadMethod    = "LOAD:"     + zsubsesion + "!SSE_GTA_PLAN.SSE_MAIN_LOAD";
String getInfoMethod = "LOAD_DAY:" + zsubsesion + "!SSE_GTA_PLAN.SSE_GET_DAY_INFORMATIONS";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

String idPerson = zraiz + "STD_ID_HR";
String firstName = zraiz + "STD_N_FIRST_NAME";
String lastName = zraiz + "STD_N_FAMILY_NAME_1";
String dayType = zraiz + "SCO_ID_DAY_TYPE";
String nmdayType = zraiz + "SCO_NM_DAY_TYPE";
String idWeek = zraiz + "SCO_OR_WEEK";
String nmWeek = zraiz + "SCO_NM_WEEK";
String idCycle = zraiz + "SCO_ID_REF_MOD";
String date = zraiz + "DT_START";
String hours = zraiz + "SCO_WORK_THEO_HRS";
String ordinalPeriod = zraiz + "STD_OR_HR_PERIOD";
String weekDay = zraiz + "SSE_GET_DAY_NAME";
String weekType = zraiz + "zzz";
String cycleName = zraiz + "SCO_NM_REF_MOD";
String absence = zraiz + "xxx";
String theoricalTime = zraiz + "CALC_SCO_WORK_THEO_HRS";
String theoricalTimeDay = zraiz + "SCO_WORK_THEO_DAY";
String realTime = zraiz + "CALC_SCO_REAL_WORK_HRS";
String realTimeDay = zraiz + "SCO_REAL_WORK_DAY";
String absenceHours = zraiz + "CALC_SCO_ABS_CAL_HRS";
String absenceDay = zraiz + "SCO_ABS_CAL_DAY";
String absenceHoursInc = zraiz + "CALC_SCO_ABS_HRS";
String absenceDayInc = zraiz + "SCO_ABS_DAY";
String additionalHours = zraiz + "CALC_SCO_SUP_HRS";
String additionalDay= zraiz + "SCO_SUP_DAY";
String realActivityHours = zraiz + "CALC_SCO_REAL_WORK_HRS";
String realActivityDay = zraiz + "SCO_REAL_WORK_DAY";
String nmWorkUnit = zraiz + "STD_N_WORK_UNIT";
String nmWorkLocation = zraiz + "STD_N_WORK_LOCATION";
String nmLegalEntity = zraiz + "STD_N_LEG_ENT";
String mainRole = zraiz + "SCO_N_ROLE";
String mainRoleDate = zraiz + "SCO_DT_START";
String manageDays = zraiz + "SCO_MANAGEMENT_BY_DAYS";
String daysTranslate = zraiz + "DAYS_TRANSLATION";
String hoursTranslate = zraiz + "HOURS_TRANSLATION";
String incNonJustified = zraiz + "INCIDENCE_NON_JUSTIFIED";

 String idDayType = zcomun1 + "SCO_ID_DAY_TYPE";
 String nmDayType = zcomun1 + "SCO_NM_DAY_TYPE";
 String totHoursDayType = zcomun1 + "SCO_WKNG_HRS_DAY";
 String dayTimeSlot = zcomun1 + "GET_TRANSLATED_TIMESLOT_PERIOD";
 String idEnterType = zcomun1 + "SCO_ID_ENTER_TYPE";
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=getInfoMethod%>">
	<m4:param name="ARG_DATE" value="<%=argDate%>"/>
	<m4:param name="ARG_ID_HR" value="<%=argHR%>"/>
	<m4:param name="ARG_OR_PERIOD" value="<%=argOrdPeriod%>"/>
	<m4:param name="ARG_HOURS_FORMAT" value="<%=argHoursFormat%>"/>
</m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<%
int  zcount  = 0;
int  zcounti  = 0;
int  zcount1  = 0;
int  zcounti1  = 0;	

String zcountv = "0";
String	zcountv1 = "0";
String abs = "";
String byDays ="";
String pendingAbsence = "";
String pendingAttendance = "";
String pendingAbsenceCancelation = "";
String pendingAttendanceCancelation = "";
String incNonJustifiedEncrypt = "";

try {
	M4Operations m = new M4Operations(request);
	zcount = m.getCount(znodo,zsubsesion,znodo);
	zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	zcounti1 = m.getCountInClient(znodo1,zsubsesion,znodo1);
	zcountv = String.valueOf(zcount);
	zcountv1 = String.valueOf(zcounti1);
	byDays  =  m.getItem(znodo,zsubsesion,znodo,"","SCO_MANAGEMENT_BY_DAYS");
	pendingAbsence  =  m.getItem(znodo,zsubsesion,znodo,"","SSE_PENDING_INCIDENCE");
	pendingAttendance  =  m.getItem(znodo,zsubsesion,znodo,"","SSE_PENDING_ATTENDANCE");
	pendingAbsenceCancelation  =  m.getItem(znodo,zsubsesion,znodo,"","SSE_INCIDENCE_CANCELATION");
	pendingAttendanceCancelation  =  m.getItem(znodo,zsubsesion,znodo,"","SSE_ATTENDANCE_CANCELATION");
	incNonJustifiedEncrypt = m.getItem(znodo,zsubsesion,znodo,"","INCIDENCE_NON_JUSTIFIED");
	incNonJustifiedEncrypt = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", incNonJustifiedEncrypt);
} catch(Exception e) {}
%>

<table  width="100%" cellspacing="0" cellpadding="0" >
	<tr>
		<td width="95%" class="titleMenu2">
			<%=Tran_mss_g4_gta_planning.getProperty("dayInfos.dayDetails")%>
		</td>
		<td width="5%" class="titleMenu2">
			<a href ="javascript:containerSlideOut('end|<%=argHR%>|<%=argOrdPeriod%>');"><img src="/iconos/cancel.png" alt="" align="right" tabIndex="-1" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonClose")%>"/></a>
		</td>
	</tr>
	<tr class="background"><th colspan="2"></th></tr>
</table>

<table width="100%" cellspacing="0" cellpadding="0" >
	<tr>
		<td class="labelMenu2">
			&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("dayInfos.date")%> :
		</td>
		<td class="labels">
			<m4:item m4name="<%=date%>"/>&nbsp;(<m4:item m4name="<%=weekDay%>"/>)
		</td>
		<td class="labelMenu2">
			&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("dayInfos.theoretical")%> :
		</td>
		<td class="labels">
			<%
			if (byDays.equals("1")) {
			%>
				<m4:item m4name="<%=theoricalTimeDay%>"/> <m4:label m4name="<%=daysTranslate%>"/>
			<%}else{%>
				<m4:item m4name="<%=theoricalTime%>"/> <m4:label m4name="<%=hoursTranslate%>"/>
			<%}%>
		</td>
		<td class="labelMenu2">
			&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("dayInfos.publicHoliday")%> :
		</td>
		<td class="labels">
			<%
			if (byDays.equals("1")) {
			%>
				<m4:item m4name="<%=absenceDay%>"/> <m4:label m4name="<%=daysTranslate%>"/>
			<%}else{%>
				<m4:item m4name="<%=absenceHours%>"/> <m4:label m4name="<%=hoursTranslate%>"/>
			<%}%>
		</td>
	</tr>
	<tr>
		<td class="labelMenu2">
			&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("dayInfos.dayType")%> : 
		</td>
		<td class="labels">
			<img id ="dayInfo" src="/iconos/infos.gif" onclick="displayDayAll('<m4:item m4name="<%=dayType%>"/>','<m4:item m4name="<%=idWeek%>"/>','<m4:item m4name="<%=idCycle%>"/>');" style="cursor:pointer"/>
			<m4:item m4name="<%=nmdayType%>"/>  
		</td>
		<td class="labelMenu2">
			&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("dayInfos.realTime")%> :
		</td>
		<td class="labels">
			<%
			if (byDays.equals("1")) {
			%>
				<m4:item m4name="<%=realActivityDay%>"/> <m4:label m4name="<%=daysTranslate%>"/>
			<%}else{%>
				<m4:item m4name="<%=realActivityHours%>"/> <m4:label m4name="<%=hoursTranslate%>"/>
			<%}%>
		</td>
		<td class="labelMenu2">
			&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("dayInfos.incidentTime")%> :
		</td>
		<td class="labels">
			<%
			if (byDays.equals("1")) {
			%>
				<m4:item m4name="<%=absenceDayInc%>"/> <m4:label m4name="<%=daysTranslate%>"/>
			<%}else{%>
				<m4:item m4name="<%=absenceHoursInc%>"/> <m4:label m4name="<%=hoursTranslate%>"/>
			<%}%>
		</td>
	</tr>
	<tr>
		<td class="labelMenu2">
			&nbsp;
			<%if (mss.equals("1")){//only on mss side%>
				<%=Tran_mss_g4_gta_planning.getProperty("dayInfos.details")%> :
			<%}%>
		</td>
		<td class="labels">
			<%if (mss.equals("1")){//only on mss side%>
				<img id ="details" src="/iconos/infos.gif" onclick="displayDetails($('<%=argDate%>|<%=argHR%>|<%=argOrdPeriod%>'),'<%=argHREncrypt%>','<%=argOrdPeriodEncrypt%>','<%=argsTypeEncrypt%>');" style="cursor:pointer"/>
				<%=Tran_mss_g4_gta_planning.getProperty("dayInfos.dayDetailsDisplay")%>
			<%}%>
		</td>
		<td class="labelMenu2">
			&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("dayInfos.incidents")%> :
		</td>
		<td class="labels">
		<%if (mss.equals("1")){//only on mss side%>
			<img id ="" src="/iconos/lu_nor_more_12.png" width="10px" height="10px" style="cursor:pointer" onclick="openIncidencePageGTA('4','<%=argHREncrypt%>','<m4:item m4name="<%=date%>" />','<m4:item m4name="<%=date%>" m4format = "yyyy-MM-dd"/>','<%=incNonJustifiedEncrypt%>','<%=argOrdPeriod%>');"/> : <%=Tran_mss_g4_gta_planning.getProperty("dayInfos.addIncident")%>&nbsp;&nbsp;
			  
			<%
			if (pendingAbsence.equals("1")){%>
				<img id ="" src="/iconos/aceptado.gif"  width="10px" height="10px" style="cursor:pointer" onclick="openIncidencePageGTA('0','<%=argHREncrypt%>','<m4:item m4name="<%=date%>" />','<m4:item m4name="<%=date%>" m4format = "yyyy-MM-dd"/>','<%=incNonJustifiedEncrypt%>','<%=argOrdPeriod%>');"/> : <%=Tran_mss_g4_gta_planning.getProperty("dayInfos.validAbsence")%>&nbsp;&nbsp;
			<%}%>
			<%
			if (pendingAttendance.equals("1")){%>
				<img id ="" src="/iconos/aceptado.gif"  width="10px" height="10px" style="cursor:pointer" onclick="openIncidencePageGTA('1','<%=argHREncrypt%>','<m4:item m4name="<%=date%>" />','<m4:item m4name="<%=date%>" m4format = "yyyy-MM-dd"/>','<%=incNonJustifiedEncrypt%>','<%=argOrdPeriod%>');"/> : <%=Tran_mss_g4_gta_planning.getProperty("dayInfos.validAttendance")%>&nbsp;&nbsp;
			<%}%>
			<%
			if (pendingAbsenceCancelation.equals("1")){%>
				<img id ="" src="/iconos/lu_nor_less_12.png"  width="10px" height="10px" style="cursor:pointer" onclick="openIncidencePageGTA('2','<%=argHREncrypt%>','<m4:item m4name="<%=date%>" />','<m4:item m4name="<%=date%>" m4format = "yyyy-MM-dd"/>','<%=incNonJustifiedEncrypt%>','<%=argOrdPeriod%>');"/> : <%=Tran_mss_g4_gta_planning.getProperty("dayInfos.cancelAbsence")%>&nbsp;&nbsp;
			<%}%>

			<%
			if (pendingAttendanceCancelation.equals("1")){%>
				<img id ="" src="/iconos/lu_nor_less_12.png"  width="10px" height="10px" style="cursor:pointer" onclick="openIncidencePageGTA('3','<%=argHREncrypt%>','<m4:item m4name="<%=date%>" />','<m4:item m4name="<%=date%>" m4format = "yyyy-MM-dd"/>','<%=incNonJustifiedEncrypt%>','<%=argOrdPeriod%>');"/> : <%=Tran_mss_g4_gta_planning.getProperty("dayInfos.cancelAttendance")%>&nbsp;&nbsp;
			<%}%>
		<%}else{//only on mss side
	
			//Only on ESS
			M4SessionCl zsesion = M4Context.getM4SessionCl(request);
			String idSession = zsesion.getBagEntries("zIdPerson");

			if (idSession.equals(argHR)) {%>
				<!--<img id ="" src="/iconos/lu_nor_more_12.png" width="10px" height="10px" style="cursor:pointer" onclick=""/> : <%=Tran_mss_g4_gta_planning.getProperty("dayInfos.addIncident")%>&nbsp;&nbsp;-->
			<%}
		 }%>
		</td>
	
		<td class="labelMenu2">
			&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("dayInfos.attendanceTime")%> :
		</td>
		<td class="labels">
			<%
			if (byDays.equals("1")) {
			%>
				<m4:item m4name="<%=additionalDay%>"/> <m4:label m4name="<%=daysTranslate%>"/>
			<%}else{%>
				<m4:item m4name="<%=additionalHours%>"/> <m4:label m4name="<%=hoursTranslate%>"/>
			<%}%>
		</td>
	</tr>
	<%
	if (argDispModif.equals("true")){//show modification block - Evolutions %>
		<!--
		<tr class="background"><td class="labelMenu2"></td><th colspan="5"></th></tr>
		<script type="text/javascript">
				var dayTypeHoursVector= new Array();
				var dayTypeTimeSlotVector= new Array();
				var dayEnterType= new Array();
			</script>
		<tr>
			<td class="labelMenu3">
				&nbsp;Modifier le Théorique :
			</td>
			<td class="labels" colspan="3">
				&nbsp;Type de jour :
				<input type="text" name="selectDayType" class="fuenteformulario" id="selectDayType" size="60" value="" tabindex="<%=argTabIndex%>" onfocus="this.morph('yeah2');"/>
				<select id="currentDayType" class="fuenteformulario" onchange="dayModifChangeDay(this.value,dayEnterType[this.value],'end|<%=argHR%>|<%=argOrdPeriod%>');" tabIndex="-1" >
				<m4:loop from="0" to="<%=new Integer(new Integer(zcountv1).intValue()-1).toString()%>">
					<option value= "<m4:item m4name="<%=idDayType%>"/>"> <m4:item m4name="<%=nmDayType%>"/> </option>
					<script type="text/javascript">
						dayTypeHoursVector['<m4:item m4name="<%=idDayType%>"/>'] = "<m4:item m4name="<%=totHoursDayType%>"/>";
						dayTypeTimeSlotVector['<m4:item m4name="<%=idDayType%>"/>'] = "<m4:item m4name="<%=dayTimeSlot%>"/>" ;
						dayEnterType['<m4:item m4name="<%=idDayType%>"/>'] = "<m4:item m4name="<%=idEnterType%>"/>";
					</script>
					
				</m4:loop>
				</select>
			</td>
			<%
			if (byDays.equals("1")) {
			%>
				<td class="labels" colspan="1">
					&nbsp;Valeur associée au jour :
					<input class="labels" id="currentNbDayHour" name="currentNbDayHour" title="Indiquez la valeur associée au jour :" size="6" id="" name="" type="text" maxlength="6" tabindex="<%=argTabIndex%>"/>
				</td>
			<%
			}else{
			%>
				<td class="labels" colspan="1">
					&nbsp;Nb. Heures Théoriques :
					<input class="labels" id="currentNbDayHour" name="currentNbDayHour" title="Indiquez le nombre d'heures théorique" size="6" id="" name="" type="text" maxlength="6" tabindex="<%=argTabIndex%>"  />
				</td>
			<%
			}
			%>
			</td>
			<td class="labels" rowspan="2">
				<a href ="javascript:change(&quot;<%=Tran_mss_g4_gta_planning.getProperty("dayInfos.impossibleModif")%>&quot;,&quot;<%=Tran_mss_g4_gta_planning.getProperty("dayInfos.messTab")%>&quot;,&quot;<%=Tran_mss_g4_gta_planning.getProperty("dayInfos.messNum")%>&quot;,'<%=argDate%>|<%=argHR%>|<%=argOrdPeriod%>')" title="" tabIndex="<%=argTabIndex%>" onkeydown ="keyActionOnSave(event,<%=argTabIndex%>);" onfocus="//effectFocus ($('saveDay'));">
					<img id ="saveDay" src="/iconos/grabar.gif" alt="rtrt" align="right"/>
				</a>
			</td>
		</tr>
		<tr>
			<td class="labelMenu3"></td>
			<td class="labels" colspan="4" id = "currentTimeSlot" ></td>
		</tr>

		<tr>
			<td class="labelMenu3"></td>
			<td class="labels" colspan="4">
				<div  width="100%" height="100%" id="currentRefTimeSlots"></div>
			</td>
		</tr>

		<%
		// Use for AutoCompletion
		String argIdEnterType = "";
		if (byDays.equals("1")){
			argIdEnterType = "2";
		}else{
			argIdEnterType = "1";
		}
		%>
		<script type="text/javascript">
			$("currentDayType").value = "<m4:item m4name="<%=dayType%>"/>";
			dayModifChangeDay($('currentDayType').value,dayEnterType[$('currentDayType').value],'end|<%=argHR%>|<%=argOrdPeriod%>');
			//focus on day cell
			$('<%=argDate%>|<%=argHR%>|<%=argOrdPeriod%>').focus();
			//effectFocus($('<%=argDate%>|<%=argHR%>|<%=argOrdPeriod%>'));
			//$('<%=argDate%>|<%=argHR%>|<%=argOrdPeriod%>').morph('.yeah2');
			
			//yme
			/*var top = calculeOffsetTop($('<%=argDate%>|<%=argHR%>|<%=argOrdPeriod%>'));
			$('testDetail').style.top = top+"px" ;
			dialogBox_show('testDetail', "", "", "");*/
			//


			document.addEvent('domready', function() {

				//$('currentNbDayHour').addEvent('focus', effectFocus($('currentNbDayHour')));
				
				//$('currentNbDayHour').onfocus=effectFocus($('currentNbDayHour'));

				//AutoCompletion on Day Type
				var selectDayType = $('selectDayType');
				new Autocompleter.Request.HTML(selectDayType, 'mss_g4_list_day_type.jsp', {
					'indicatorClass': 'autocompleter-loading', // class added to the input during request
					'postVar': 'search',
					'postData': {
						'ARG_ID_ENTER_TYPE': "<%=argIdEnterType%>" // send additional POST data
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
						var dayType =  $('selectDayType').get('value');
						var finalValue = "";
						var index = 0;
						var end = dayType.length;
						if (end == 0) 
						{
							//Pas de filtre
						}else{
							indexEnd = dayType.indexOf("/",index);
							finalValue = dayType.substring(0,indexEnd);
							$('selectDayType').value = finalValue;

							$('currentDayType').value = finalValue;
							dayModifChangeDay($('currentDayType').value,dayEnterType[$('currentDayType').value],'end|<%=argHR%>|<%=argOrdPeriod%>');
							$('currentDayType').focus();

							
						}
					},

					onComplete: function() {
					}
				});//end autocompleter
			
			});
		</script>
	End show modification block - Evolutions -->
	<%//show modification block
	}else{
	%>
		<script type="text/javascript">
		containerSlideIn('end|<%=argHR%>|<%=argOrdPeriod%>');
		//focus on day cell
		$('<%=argDate%>|<%=argHR%>|<%=argOrdPeriod%>').focus();
		</script>
	<%
	}
	%>
	<tr class="black_background"><th colspan="6"></th></tr>
</table>

<m4:endpage/>