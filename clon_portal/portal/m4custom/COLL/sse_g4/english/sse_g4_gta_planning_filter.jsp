<%///////////////////////////////////////PLANNING GTA : Filter Part///////////////////////////////////////%>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>

<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String color = "";

String estado = zobjtabla.m4paramvalor("estado");
String zinicios = zobjtabla.m4paramvalor("zinicios");
//Portal Side
String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");
//Global Parameters
String dtStart = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START");
String dtEnd = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_END");
String nbDays = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NB_DAYS");
String typeTab = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"typeTab");
String manageUnit = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"manageUnit");
String nbIndivS = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NB_PEOPLE");
//Filter Parameters
String idWuParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WU");
String idLegEntParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_LEGENT");
String idWorkLocParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKLOC");
String idWorkCycleParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKCYCLE");
String idJobParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_JOB");
String idPositionParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_POSITION");
String peopleFilter = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LIST_PEOPLE");
//Sort Parameter
String idSort = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_SORT");
//Counters Parameters
String counterC1 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC1");
String counterC2 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC2");
String counterC3 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC3");
String counterC1Name = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC1Name");
String counterC2Name = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC2Name");
String counterC3Name = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC3Name");
//Affichage Parameters
String infoType = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"infoType");
String checkTotal = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"checkTotal");
String checkTotalCheck ="";
String checkAlert = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"checkAlert");
String checkAlertCheck ="";

//Global Parameters
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((dtStart==null)||(dtStart.equals(""))){dtStart = "";}
if ((dtEnd==null)||(dtEnd.equals(""))){dtEnd = "";}
if ((nbDays==null)||(nbDays.equals(""))){nbDays = "0";}
if ((mss==null)||(mss.equals(""))){mss = "0";}
if ((typeTab==null)||(typeTab.equals(""))){typeTab = "T";}
if ((manageUnit==null)||(manageUnit.equals(""))){manageUnit = "B";}
if ((nbIndivS==null)||(nbIndivS.equals(""))){nbIndivS = "10";}
//Filter Parameters
if ((idWuParam==null)||(idWuParam.equals(""))){idWuParam="All";}
if ((idLegEntParam==null)||(idLegEntParam.equals(""))){idLegEntParam="All";}
if ((idWorkLocParam==null)||(idWorkLocParam.equals(""))){idWorkLocParam="All";}
if ((idWorkCycleParam==null)||(idWorkCycleParam.equals(""))){idWorkCycleParam="All";}
if ((idJobParam==null)||(idJobParam.equals(""))){idJobParam="All";}
if ((idPositionParam==null)||(idPositionParam.equals(""))){idPositionParam="All";}
if ((peopleFilter==null)||(peopleFilter.equals(""))){peopleFilter="";}
//Sort Parameter
if ((idSort==null)||(idSort.equals(""))){idSort="1";}
//Counters Parameters
if ((counterC1==null)||(counterC1.equals(""))){counterC1 = "";}
if ((counterC2==null)||(counterC2.equals(""))){counterC2 = "";}
if ((counterC3==null)||(counterC3.equals(""))){counterC3 = "";}
if ((counterC1Name==null)||(counterC1Name.equals(""))){counterC1Name = "C1";}
if ((counterC2Name==null)||(counterC2Name.equals(""))){counterC2Name = "C2";}
if ((counterC3Name==null)||(counterC3Name.equals(""))){counterC3Name = "C3";}
//Affichage Parameters
if ((infoType==null)||(infoType.equals(""))){infoType = "";}
if ((checkTotal==null)||(checkTotal.equals(""))){checkTotal = "N";}
if (checkTotal.equals("Y")){checkTotalCheck = "checked";}else{checkTotalCheck = "";}
if ((checkAlert==null)||(checkAlert.equals(""))){checkAlert = "N";}
if (checkAlert.equals("Y")){checkAlertCheck = "checked";}else{checkAlertCheck = "";}
%>
<!-- Person Information Datas // Days Datas Reinitialisation -->
<script type="text/javascript"> 
	peopleArray = new Array(); 
	dayArray = new Array();
</script>
<!--Use for Pagination-->
<%
String zventanas = nbDays;
int zvuelta = 5;
String zdireccion = "/sse_generico/sse_gta.jsp";
int zventana  = Integer.valueOf(zventanas).intValue();
int nbIndiv =  Integer.valueOf(nbIndivS).intValue();
zventana = zventana*nbIndiv;
zventanas = String.valueOf(zventana); 
int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zregistrofinal = zregistroinicial + zventana - 1;
 %>
 <!-- Translations -->
<%
M4SessionCl zsesionGTA = M4Context.getM4SessionCl(request);
String zlanguser = zsesionGTA.getBagEntries("lang");
if ((zlanguser==null)||(zlanguser.equals(""))){zlanguser = "fr";}
if (zlanguser.equals("in")) { zlanguser="en";}
java.util.Properties Tran_mss_g4_gta_planning = new Properties();
Tran_mss_g4_gta_planning.load(application.getResourceAsStream("/translations/mss_g4_gta_planning_"+zlanguser+".properties"));
%>

<!--*************************Main Load***********************-->
<%
String zsubsesion = "SSE_GTA_PLAN";
String zmeta4object = "SSE_GTA_PLAN";  
String znodo = "SSE_GTA_PLAN";
String znodo1 = "SSE_GTA_PLAN_CONSTRUCTOR";
String znodo2 = "SSE_GTA_PERIOD";
String znodo15 = "SSE_GTA_PLAN_CONSTRUCTOR_ROW";
String znodo16 = "SSE_GTA_PLAN_CONSTRUCTOR_POP";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" +znodo + "[FIRST]";
String zlectura = znodo + ":" +zsubsesion + "!" + znodo;
String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

String zoutputdef1 = zsubsesion + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
String zmove1 = znodo1 + ":" + znodo1 + "["+zregistroinicial+"]";  
String zlectura1 = znodo1 + ":" +zsubsesion + "!" + znodo1;
String zcomun1 = znodo1 + ":" +zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
String zraiz1   = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".";

String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";
String zlectura2 = znodo2 + ":" +zsubsesion + "!" + znodo2;
String zcomun2 = znodo2 + ":" +zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";

String zoutputdef15 = zsubsesion + "!" + znodo15 + "[*]";
String zmove15 = znodo15 + ":" + znodo15 + "[FIRST]";
String zlectura15 = znodo15 + ":" +zsubsesion + "!" + znodo15;
String zcomun15 = znodo15 + ":" +zsubsesion + "!" + znodo15 + "[&VAR.m4lix]" + ".";

String zoutputdef16 = zsubsesion + "!" + znodo16 + "[*]";
String zmove16 = znodo16 + ":" +znodo16 + "[FIRST]";
String zlectura16 = znodo16 + ":" +zsubsesion + "!" + znodo16;
String zcomun16 = znodo16 + ":" +zsubsesion + "!" + znodo16 + "[&VAR.m4lix]" + ".";

String zmetodocarga = "LOAD:" + zsubsesion + "!SSE_GTA_PLAN.SSE_MAIN_LOAD";
	
// Loading Items 
String idPerson = zcomun1 + "STD_ID_HR";
String firstName = zcomun1 + "STD_N_FIRST_NAME";
String lastName = zcomun1 + "STD_N_FAMILY_NAME_1";
String day = zcomun1 + "SCO_ID_DAY_TYPE";
String idWeek = zcomun1 + "SCO_OR_WEEK";
String idCycle = zcomun1 + "SCO_ID_REF_MOD";
String date = zcomun1 + "DT_START";
String hours = zcomun1 + "SSE_GET_DAY_DATA";
String ordinalPeriod = zcomun1 + "STD_OR_HR_PERIOD";
String ordinalCycle = zcomun1 + "SSE_REF_MOD_ORDINAL";
String ordinalWeek = zcomun1 + "SSE_WE_ORDINAL";
String idDay = zcomun1 + "SSE_DAY_NAME_ID";
String mainWU = zcomun1 + "SSE_MAIN_WORK_UNIT";
String mainLegEnt = zcomun1 + "SSE_MAIN_LEG_ENT";
String mainWorkLoc = zcomun1 + "SSE_MAIN_WORK_LOCATION";
String cycleDate = zcomun1 + "SSE_REF_MOD_DATE";
String weekDate = zcomun1 + "SSE_WEEK_DATE";
String mainRole = zcomun1 + "SCO_N_ROLE";
String mainRoleDate = zcomun1 + "SCO_DT_START";
String timeSlotText = zcomun1 + "SSE_GET_TRANSLATED_TIMESLOT";
String maxAlertSeverity = zcomun1 + "SCO_MAX_ALERT_SEVERITY_LEVEL";
String counterC1Value = zcomun1 + "SSE_COUNTER_C1";
String counterC2Value = zcomun1 + "SSE_COUNTER_C2";
String counterC3Value = zcomun1 + "SSE_COUNTER_C3";

String filterWu         = zraiz1 + "SSE_FILTER_WU";
String filterLegEnt     = zraiz1 + "SSE_FILTER_LEGAL_ENTITY";
String filterWorkLoc    = zraiz1 + "SSE_FILTER_WORK_LOCATION";
String filterJob			= zraiz1 + "SSE_FILTER_JOB";
String filterPosition    = zraiz1 + "SSE_FILTER_POSITION";
String filterWorkCyc    = zraiz1 + "SSE_FILTER_WORK_CYCLE";
String filterPeopleList = zraiz1 + "SSE_FILTER_PERSON_LIST";
String filterSort       = zraiz1 + "SSE_FILTER_SORT";

String dateHeader = zcomun2 + "SSE_DATE";
String dayHeader = zcomun2 + "SSE_DAY";
String weekHeader = zcomun2 + "SSE_WEEK";

%>
<!--Set Parameters and Load-->
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% 
M4SessionManager oSess = (new M4Context()).getSession(request);
com.meta4.format.M4Format oFmt = oSess.getM4Format();
try {
	M4Operations m = new M4Operations(request); 
	//Counters Parameters
	m.setItem(zsubsesion,znodo,"","SSE_ID_COUNTER_C1",counterC1);  
	m.setItem(zsubsesion,znodo,"","SSE_ID_COUNTER_C2",counterC2);  
	m.setItem(zsubsesion,znodo,"","SSE_ID_COUNTER_C3",counterC3);
	//Only datas with Alerts Parameter
	m.setItem(zsubsesion,znodo,"","SSE_ONLY_ALERTS",checkAlert);
}catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>">
	<m4:param name="ARG_DT_START" value="<%=dtStart%>"/>
	<m4:param name="ARG_DT_END" value="<%=dtEnd%>"/>
	<m4:param name="ARG_ID_WU" value="<%=idWuParam%>"/>
	<m4:param name="ARG_ID_LEG_ENT" value="<%=idLegEntParam%>"/>
	<m4:param name="ARG_ID_WORK_LOC" value="<%=idWorkLocParam%>"/>
	<m4:param name="ARG_ID_WORK_CYCLE" value="<%=idWorkCycleParam%>"/>
	<m4:param name="ARG_ID_JOB" value="<%=idJobParam%>"/>
	<m4:param name="ARG_ID_POSITION" value="<%=idPositionParam%>"/>
	<m4:param name="ARG_ID_SORT" value="<%=idSort%>"/>
	<m4:param name="ARG_MSS" value="<%=mss%>"/>
	<m4:param name="ARG_PERSON_LIST_FILTER" value="<%=peopleFilter%>"/>
	<m4:param name="ARG_MANAGEMENT_UNIT" value="<%=manageUnit%>"/>
	<m4:param name="ARG_LOAD_TYPE" value="<%=typeTab%>"/>
	<m4:param name="ARG_PAGINATION" value="<%=zinicios%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo15%>"><m4:param name="m4name0" value="<%=zoutputdef15%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo16%>"><m4:param name="m4name0" value="<%=zoutputdef16%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove15%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove16%>"/></m4:move>
<%
	int  zcounti  = 0;	
	int  zcount = 0;
	int  zcounti1  = 0;	
	int  zcount1  = 0;
	int  zcounti2  = 0;	
	int  zcount2  = 0;
	int  zcounti15  = 0;	
	int  zcount15  = 0;
	int  zcounti16  = 0;	
	int  zcount16  = 0;
	String viewType="";
	String hoursFormat="";
	String startDatePrevious = "";
	String startDateNext = "";
	String startCurrentMonth = "";
	String endDatePrevious = "";
	String endDateNext = "";
	String endCurrentMonth = "";
	String monthTxt ="";
	String yearTxt ="";
	String displayWeek = "";
	String displayCycle = "";
	String startHourDay = "";
	String endHourDay = "";
	String diffHourDay = "";
	try {
		M4Operations m = new M4Operations(request);
		zcounti1 = m.getCountInClient(znodo1,zsubsesion,znodo1);
		zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
		zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
		zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
		zcounti16 = m.getCountInClient(znodo16,zsubsesion,znodo16);
		zcount16 = m.getCount(znodo16,zsubsesion,znodo16);
		viewType  = m.getItem(znodo1,zsubsesion,znodo1,"","TYPE_OF_VIEW");
		hoursFormat = m.getItem(znodo1,zsubsesion,znodo1,"","HOURS_FORMAT");
		startDatePrevious =  m.getItem(znodo1,zsubsesion,znodo1,"","SSE_PREVIOUS_START_DATE");
		startDatePrevious = oFmt.outFormat(oSess,startDatePrevious,com.meta4.format.M4Format.DATE);
		startDateNext =  m.getItem(znodo1,zsubsesion,znodo1,"","SSE_NEXT_START_DATE");
		startDateNext = oFmt.outFormat(oSess,startDateNext,com.meta4.format.M4Format.DATE);
		startCurrentMonth =  m.getItem(znodo1,zsubsesion,znodo1,"","SSE_MONTH_START_DATE");
		startCurrentMonth = oFmt.outFormat(oSess,startCurrentMonth,com.meta4.format.M4Format.DATE);
		endDatePrevious =  m.getItem(znodo1,zsubsesion,znodo1,"","SSE_PREVIOUS_END_DATE");
		endDatePrevious = oFmt.outFormat(oSess,endDatePrevious,com.meta4.format.M4Format.DATE);
		endDateNext =  m.getItem(znodo1,zsubsesion,znodo1,"","SSE_NEXT_END_DATE");
		endDateNext = oFmt.outFormat(oSess,endDateNext,com.meta4.format.M4Format.DATE);
		endCurrentMonth =  m.getItem(znodo1,zsubsesion,znodo1,"","SSE_MONTH_END_DATE");
		endCurrentMonth = oFmt.outFormat(oSess,endCurrentMonth,com.meta4.format.M4Format.DATE);
		monthTxt = m.getItem(znodo1,zsubsesion,znodo1,"","SSE_MONTH_TXT");
		yearTxt = m.getItem(znodo1,zsubsesion,znodo1,"","SSE_YEAR_TXT");
		displayWeek = m.getItem(znodo1,zsubsesion,znodo1,"","DISPLAY_WEEK");
		displayCycle = m.getItem(znodo1,zsubsesion,znodo1,"","DISPLAY_CYCLE");
		startHourDay = String.valueOf((int)Float.parseFloat(m.getItem(znodo1,zsubsesion,znodo1,"","SSE_DAY_HEADER_TIMESLOT_MIN")));
		endHourDay = String.valueOf((int)Float.parseFloat(m.getItem(znodo1,zsubsesion,znodo1,"","SSE_DAY_HEADER_TIMESLOT_MAX"))); 
		diffHourDay = String.valueOf((int)Float.parseFloat(m.getItem(znodo1,zsubsesion,znodo1,"","SSE_DAY_HEADER_TIMESLOT_DIFF"))); 
		} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountv1 = String.valueOf(zcounti1);
	String	zcountv2 = String.valueOf(zcounti2);
	String	zcountv16 = String.valueOf(zcounti16);
	String nbCell = String.valueOf(zcounti2+3);
//Control - show/hide Cycle Bar
if ( (viewType.equals("Month")&&displayCycle.indexOf("M") != -1) || (viewType.equals("Week")&&displayCycle.indexOf("W") != -1) || (viewType.equals("Day")&&displayCycle.indexOf("D") != -1) ) {
	displayCycle = "yes";
}
//Control - show/hide Week Bar
if ( (viewType.equals("Month")&&displayWeek.indexOf("M") != -1) || (viewType.equals("Week")&&displayWeek.indexOf("W") != -1) || (viewType.equals("Day")&&displayWeek.indexOf("D") != -1) ) {
	displayWeek = "yes";
}
//Use for TimeSlots
int debutHeure = Integer.valueOf(startHourDay).intValue();
int finHeure = Integer.valueOf(endHourDay).intValue();
int nbHeure = Integer.valueOf(diffHourDay).intValue();
%>
<!-- Use for Help -->
<div id="helpGTA" class="helpGTA" title="<%=Tran_mss_g4_gta_planning.getProperty("page.help")%>" onclick="show_help('<%=mss%>','<%=zlanguser%>');"></div>
<!-- Header Container / Tab Menus And Filter Parameters -->
<div id="header_container">
	<%
	//Management of Tab Menus
	String tabM1="";
	String tabM2="";
	String tabDays="";
	String tabHours="";
	tabM1="tab_main_norm";
	tabM2="tab_main_hidden";
	if (typeTab.equals("T") || typeTab.equals("TB")){
		tabM1="tab_main_norm";
		tabM2="tab_main_hidden";
	}
	if (typeTab.equals("R") || typeTab.equals("PB") ){
		tabM1="tab_main_hidden";
		tabM2="tab_main_norm";
	}
	if (manageUnit.equals("B")){
		tabDays="tab_minor_norm";
		tabHours="tab_minor_norm";
	}
	if (manageUnit.equals("D")){
		tabDays="tab_minor_norm";
		tabHours="tab_minor_hidden";
	}
	if (manageUnit.equals("H")){
		tabDays="tab_minor_hidden";
		tabHours="tab_minor_norm";
	}
	%>
	<table class= "tab_table" width="100%" cellspacing="0" border="0" >
		<!-- Tab Menus -->
		<tr>
			<td class="titulofuncional" colspan="1">
			<input type="hidden" id="manageUnit" name="manageUnit" value="<%=manageUnit%>"/>
			<input type="hidden" id="hoursFormat" name="hoursFormat" value="<%=hoursFormat%>"/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("page.titleHeader")%>
			</td>
			<td id="tabTheo"class="<%=tabM1%>" name="<%=tabM1%>" onclick= "changeTab(this);" onmouseover="overTab(this);" onmouseout="outTab(this);" >
				<%=Tran_mss_g4_gta_planning.getProperty("tab.theoretical")%>
			</td>
			<td id = "tabReal" class="<%=tabM2%>" name="<%=tabM2%>" onclick= "changeTab(this);" onmouseover="overTab(this);" onmouseout="outTab(this);" >
				<%=Tran_mss_g4_gta_planning.getProperty("tab.real")%>
			</td>
			<td class="titulofuncional" width="10px" >
			</td>
			<td id ="tabHours" class="<%=tabHours%>" name="<%=tabHours%>" onclick= "changeTab(this);" onmouseover="overTab(this);" onmouseout="outTab(this);" >
				<%=Tran_mss_g4_gta_planning.getProperty("tab.hour")%>
			</td>
			<td id ="tabDays" class="<%=tabDays%>" name="<%=tabDays%>" onclick= "changeTab(this);" onmouseover="overTab(this);" onmouseout="outTab(this);" >
				<%=Tran_mss_g4_gta_planning.getProperty("tab.day")%>
			</td>
			<td class="titulofuncional" width="20px" >
			</td>
		</tr>
		<!-- Filter Parameters -->
		<tr>
			<td class="header_filter" colspan="7">
				<strong><m4:label m4name="<%=filterWu%>"/></strong> : <m4:item m4name="<%=filterWu%>"/> |
				<strong><m4:label m4name="<%=filterLegEnt%>"/></strong> :  <m4:item m4name="<%=filterLegEnt%>"/> |
				<strong><m4:label m4name="<%=filterWorkLoc%>"/></strong> :  <m4:item m4name="<%=filterWorkLoc%>"/> |
				<strong><m4:label m4name="<%=filterJob%>"/></strong> :  <m4:item m4name="<%=filterJob%>"/> |
				<strong><m4:label m4name="<%=filterPosition%>"/></strong> :  <m4:item m4name="<%=filterPosition%>"/> |
				<strong><m4:label m4name="<%=filterWorkCyc%>"/></strong> :  <m4:item m4name="<%=filterWorkCyc%>"/> |
				<strong><m4:label m4name="<%=filterPeopleList%>"/></strong> :  <m4:item m4name="<%=filterPeopleList%>"/>
			</td>
		</tr>
	</table>
</div>

<!-- Main Wrapper -->
<div id="content_wrapper" class="content_wrapper">
	<%@ include file="../../sse_g4/english/sse_g4_gta_planning_main_wrapper.jsp" %>
</div><!-- End : Main Wrapper -->

<script type="text/javascript">
	//Update Counter
	$('counterC1Name').value = "<%=counterC1Name%>";
	$('counterC2Name').value = "<%=counterC2Name%>";
	$('counterC3Name').value = "<%=counterC3Name%>";
	//Update "Affichage" in Header
	$('textAffichage').innerText = $('typeTab').options[$('typeTab').selectedIndex].text;
	//Update Arguments for menus
	$('currentViewType').value = "<%=viewType%>";
	$('startHourDay').value = "<%=startHourDay%>";
	$('endHourDay').value = "<%=endHourDay%>";
	$('diffHourDay').value = "<%=diffHourDay%>"; 

	//Control Validation
	if ($("t7").className == "highlight")
	{
		showCheckboxValidation();
		$("controlAllAlertSeverity").checked = true;
		controlAllAlertSeverity();
	}
</script>

<!-- Total Calculation -->
<%if (checkTotal.equals("Y") ) {%>
<%@include file="../../sse_g4/english/sse_g4_gta_planning_total_calcul.jsp" %>
<%}%>

<m4:endpage/>
