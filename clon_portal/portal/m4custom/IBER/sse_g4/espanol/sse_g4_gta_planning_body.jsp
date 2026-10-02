<%///////////////////////////////////////PLANNING GTA : Main Part///////////////////////////////////////%>

<!-- Object Loading -->
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String color = "";
String estado = zobjtabla.m4paramvalor("estado");
String zinicios = zobjtabla.m4paramvalor("zinicios");

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

<!-- Translations -->
<%
M4SessionCl zsesionGTA = M4Context.getM4SessionCl(request);
String zlanguser = zsesionGTA.getBagEntries("lang");
if ((zlanguser==null)||(zlanguser.equals(""))){zlanguser = "fr";}
java.util.Properties Tran_mss_g4_gta_planning = new Properties();
Tran_mss_g4_gta_planning.load(application.getResourceAsStream("/translations/mss_g4_gta_planning_"+zlanguser+".properties"));
%>

<!-- Specific Javascripts Functions -->
<script type="text/javascript">

//Controls used when a user try to modify a day (On New value/On Day Format)
function controlHoursDays(hoursDay,dayType,enterType){
	//enterType
	//1 : Hours
	//2 : Days
	var title  = "";
	var texto  = "";
	var title0 = "<%=Tran_mss_g4_gta_planning.getProperty("controlHoursDays.incorrectDayType")%>";
	var title1 = "<%=Tran_mss_g4_gta_planning.getProperty("controlHoursDays.incorrectTheoHoursNb")%>";
	var title2 = "<%=Tran_mss_g4_gta_planning.getProperty("controlHoursDays.incorrectDayValue")%>";
	var textodaytype = "<br/>     "+"<%=Tran_mss_g4_gta_planning.getProperty("controlHoursDays.mandatoryDayType")%>";
	var textovalue =   "<br/>     "+"<%=Tran_mss_g4_gta_planning.getProperty("controlHoursDays.theoHoursMandatory")%>";
	var textoformat =  "<br/>     "+"<%=Tran_mss_g4_gta_planning.getProperty("controlHoursDays.incorrectFormat")%>"; 
	var textohours =   "<br/>     "+"<%=Tran_mss_g4_gta_planning.getProperty("controlHoursDays.incorrectNbHours")%>";
	var textominutes = "<br/>     "+"<%=Tran_mss_g4_gta_planning.getProperty("controlHoursDays.incorrectNbMinutes")%>";
	var textoday =     "<br/>     "+"<%=Tran_mss_g4_gta_planning.getProperty("controlHoursDays.incorrectDayFormat")%>";
	var result = "ok";
	var error = 0;

	//Day Type Missing
	if (dayType == "" || dayType == null)
	{
		error=1;
		title = title0;
		texto = texto + textodaytype;

	}else{
		//Type of day = Theorical on 'Day' (Forfait Jour)
		if (enterType == 2)
		{
			if ( hoursDay != 0 && hoursDay !=0.5 && hoursDay != 1)
			{
				error=1;
				title = title2;
				texto = texto + textoday;
			}
		//Type of day = Theorical on 'Hours'
		}else{
			//Hours number missing
			if (hoursDay == "" || hoursDay == null)
			{
				error=1;
				title = title1;
				texto = texto + textovalue;
			}else{
				indexDecimal = hoursDay.indexOf(".",0);
				indexDecimalbis = hoursDay.indexOf(",",0);
				if (indexDecimalbis != -1){indexDecimal = indexDecimalbis;}
				indexHoursMinute = hoursDay.indexOf(":",0);
				//Decimal Format
				if (indexDecimal != -1 || indexHoursMinute == -1)
				{
					//Format control
					decimal = new m4objvalidacion('_num_decimal','2','2','','<%=Tran_mss_g4_gta_planning.getProperty("controlHoursDays.incorrectDecimalFormat")%>',false);
					decimal.m4validar($('update_select_HoursDay'));
					if (decimal.resultado == false){
						error=1;
						title = title1;
						texto = texto + textoformat;
					}
					hours = hoursDay.substring(0,indexDecimal);
					if (hours > 24 || hours < 0)
					{
						error=1;
						title = title1;
						texto = texto + textohours;
					}
				}
				//Hours Minute Format
				if (indexHoursMinute != -1)
				{
					//Format control
					hourminute = new m4objvalidacion('_hours_minutes','2','2','','<%=Tran_mss_g4_gta_planning.getProperty("controlHoursDays.incorrectHMFormat")%>',false);
					hourminute.m4validar($('update_select_HoursDay'));
					if (hourminute.resultado == false){
						error=1;
						title = title1;
						texto = texto + textoformat;
					}
					hours = hoursDay.substring(0,indexHoursMinute);
					minutes = hoursDay.substring(indexHoursMinute + 1, hoursDay.length);
					if (hours > 24 || hours < 0)
					{
						error=1;
						title = title1;
						texto = texto + textohours;
					}
					if (minutes > 59 || minutes < 0)
					{
						error=1;
						title = title1;
						texto = texto + textominutes;
					}
				}
			}
		}
	}
	
	//Error
	if (error == 1)
	{
		//modifChangeDay(dayType,enterType);//affect origin value
		displayMessage(title,texto);
		result= "ko";
	}
	return(result);
}

//Controls used when a user try to modify a day (On Validation)
function controlValidation(classValidation,id){
	var title  = "";
	var texto  = "";
	var titleL = "<%=Tran_mss_g4_gta_planning.getProperty("controlValidation.forbiddenModification")%>";
	var titleE = "<%=Tran_mss_g4_gta_planning.getProperty("controlValidation.forbiddenModification")%>";
	var titleW = "<%=Tran_mss_g4_gta_planning.getProperty("controlValidation.warningModification")%>";
	var textoL = "<br/>     "+"<%=Tran_mss_g4_gta_planning.getProperty("controlValidation.theoAlreadyValidated")%>";
	var result = "ok";
	var error = 0;

	//Modification not allowed
	if (classValidation == "day_cell_L")
	{
		error=1;
		title = titleL;
		texto = texto + textoL;
		result= "ko";
	}
	//Modification not allowed
	if (classValidation == "day_cell_E")
	{
		error=1;
		title = titleE;
		getControltheoreticalMessage(id);
		texto = buffer;
		result= "ko";
	}
	//Modification  allowed with warning
	if (classValidation == "day_cell_W")
	{
		error=1;
		title = titleW;
		getControltheoreticalMessage(id);
		texto = buffer;
	}
	//Error
	if (error == 1)
	{
		//modifChangeDay(dayType,enterType);//affect origin value
		displayMessage(title,texto);
	}
	return(result);
}

//Called by the "selectAll" checkbox Displayed with Validation Menu.
function controlValidationChecking(obj){
	//Control each person for validation and select it or not (green or red)
	controlAlertSeverity(obj);
	var title  = "";
	var title0 = "<%=Tran_mss_g4_gta_planning.getProperty("controlValidationChecking.impossibleValidation")%> "+obj.id+" / "+obj.lastName+" "+obj.firstName ;  
	var title1 = "";
	var texto  = "<br/>     "+"<%=Tran_mss_g4_gta_planning.getProperty("controlValidationChecking.alertsImpossibleValidation")%> ";
	var texto1 = "<br/>     "+"<%=Tran_mss_g4_gta_planning.getProperty("controlValidationChecking.noValidationDays")%>"+obj.dayAlerts+".";
	var result = "ok";
	var error = 0;
	//Selection not allowed
	if (obj.chosen == "no" && obj.dayAlerts != "" )
	{
		error=1;
		title = title0;
		texto = texto + texto1;
		result= "ko";
	}
	//Error
	if (error == 1)
	{
		//modifChangeDay(dayType,enterType);//affect origin value
		displayMessage(title,texto);
	}
	return(result);
}

//Control and trigger when user validate population.
function validateDaysInit() {
	//Control Value Type 
	if (!(document.getElementById("tabTheo")) || (document.getElementById("tabTheo") && $("tabTheo").className != "tab_main_norm"))
	{
		//Error
		displayMessage("<%=Tran_mss_g4_gta_planning.getProperty("validateDaysInit.impossibleValidation")%>","<%=Tran_mss_g4_gta_planning.getProperty("validateDaysInit.onlyTheoView")%>");
		
	}else{
		//Get All id - names in confirm box
		var message="";
		var title  ="<%=Tran_mss_g4_gta_planning.getProperty("validateDaysInit.confirm")%> "+$('DT_START').value+ "<%=Tran_mss_g4_gta_planning.getProperty("validateDaysInit.to")%> "+$('DT_END').value+" ?";
		var confirmTarget = "validateDays();";
		for(var peopleDatas in peopleArray){
			if (peopleArray[peopleDatas].id != undefined && peopleArray[peopleDatas].chosen == "yes")
			{
				message = message +"- "+peopleArray[peopleDatas].id+" / "+peopleArray[peopleDatas].lastName+" "+peopleArray[peopleDatas].firstName+"</br>";
			}
		}	confirmMessage(title,message,confirmTarget,"<%=Tran_mss_g4_gta_planning.getProperty("validateDaysInit.validate")%>","<%=Tran_mss_g4_gta_planning.getProperty("validateDaysInit.cancel")%>");
	}
}

//Control for Filter Process.
function filterPage(){
	//nb_days calculation
	nbDays();
	var days = $('NB_DAYS').value;
	var texto = "";
	var error = 0;
	//Period controls
	if (days  >= 32)
	{
		error = 1;
		texto = texto + "<br/>     <%=Tran_mss_g4_gta_planning.getProperty("filterPage.tooLargePeriod")%>";
	}
	var dtstart = m4valor("formb0","DT_START","","get");
	var dtstartok = m4fechacomprobacion(m4objeto('DT_START','formb0'),"");
	var dtend = m4valor("formb0","DT_END","","get");
	var dtendok = m4fechacomprobacion(m4objeto('DT_END','formb0'),"");
	var fechasok = m4compfechas(m4objeto('DT_START','formb0'),'<=',m4objeto('DT_END','formb0'));
	
	if (dtstart == null || dtstart == "") {
		texto = texto + "<br/>     <%=Tran_mss_g4_gta_planning.getProperty("filterPage.mandatoryStartDate")%>";
		error = 1;
	}
	if ((dtstart != null && dtstart != "") && (dtstartok == "")){
		texto = texto + "<br/>     <%=Tran_mss_g4_gta_planning.getProperty("filterPage.formatStartDate")%>";
		error = 1;
	}
	if (dtend == null || dtend == ""){
		texto = texto + "<br/>     <%=Tran_mss_g4_gta_planning.getProperty("filterPage.mandatoryEndDate")%>";
		error = 1;
	}
	if ((dtend != null && dtend != "") && (dtendok == "")){
		texto = texto + "<br/>     <%=Tran_mss_g4_gta_planning.getProperty("filterPage.formatEndDate")%>";
		error = 1;
	}
	if ((dtstart != null && dtstart != "") && (dtstartok != "") && (dtend != null && dtend != "") && (dtendok != "") && (fechasok == false)){
		texto = texto +"<br/>     <%=Tran_mss_g4_gta_planning.getProperty("filterPage.StartEndDate")%>";
		error = 1;
	}
	if (error == 1){
		displayMessage("<%=Tran_mss_g4_gta_planning.getProperty("filterPage.impossibleVisualisation")%>",texto);
		return;
	}
	else {
		//Send Request
		filterPageInit();
	}
}

//Update Days
function updateDays(){
	//Control Value Type 
	if (!(document.getElementById("tabTheo")) || (document.getElementById("tabTheo") && $("tabTheo").className != "tab_main_norm"))
	{
		//Error
		displayMessage("<%=Tran_mss_g4_gta_planning.getProperty("updateDays.impossibleSave")%>","<%=Tran_mss_g4_gta_planning.getProperty("updateDays.saveTheoView")%>");
		
	}else{
		//Update
		modifyStart();
	}
}
</script>

<!-- Title -->
<title><%=Tran_mss_g4_gta_planning.getProperty("page.title")%></title>

</head>

<body id="bodyGTA">

<!--*************************Preload Part***********************-->
<!-- Dynamic CSS Style Calculation -->
<%
 request.setAttribute("mss",mss);
%>
<jsp:include page="/css/gta_planning_dynamic_css.jsp">
	<jsp:param name="mss" value="<%=mss%>" />
</jsp:include>
<!-- Dynamic CSS Style Calculation -->
<%
//General Parameters
String zsubsesion   = "SSE_GTA_PLAN";
String zmeta4object = "SSE_GTA_PLAN";
//Preload Parameters
String znodoPreload = "SSE_GTA_PLAN";
String zoutputdefPreload = zsubsesion + "!" + znodoPreload + "[*]";
String zraizPreload   = znodoPreload + ":" + zsubsesion + "!" + znodoPreload + ".";
String zmovePreload   = znodoPreload + ":" + znodoPreload + "[FIRST]";
String dateDebInit  = zraizPreload + "PROP_START_DATE";
String dateFinInit  = zraizPreload + "PROP_END_DATE";
String nbIndivSInit = zraizPreload + "NB_PEOPLE";
String methodPreload = "PRELOAD:" + zsubsesion + "!SSE_GTA_PLAN.SSE_MAIN_PRE_LOAD";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:exec m4method="<%=methodPreload%>">
	<m4:param name="ARG_MSS" value="<%=mss%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodoPreload%>"><m4:param name="m4name0" value="<%=zoutputdefPreload%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovePreload%>"/></m4:move>
<%
M4SessionManager oSess = (new M4Context()).getSession(request);
com.meta4.format.M4Format oFmt = oSess.getM4Format();
try {
	M4Operations t = new M4Operations(request);
	nbIndivS  = t.getItem(znodoPreload,zmeta4object,znodoPreload,"","NB_PEOPLE"); 
	nbDays  = t.getItem(znodoPreload,zmeta4object,znodoPreload,"","NB_DAYS"); 
	dtStart = t.getItem(znodoPreload,zmeta4object,znodoPreload,"","PROP_DT_START");
	dtStart = oFmt.outFormat(oSess,dtStart,com.meta4.format.M4Format.DATE);
	//dtStart = dtStart.substring(0,10);
	//dtStart = dtStart.substring(8,10)+"-"+dtStart.substring(5,7)+"-"+dtStart.substring(0,4);
	dtEnd   = t.getItem(znodoPreload,zmeta4object,znodoPreload,"","PROP_DT_END");
	dtEnd = oFmt.outFormat(oSess,dtEnd,com.meta4.format.M4Format.DATE);
	//dtEnd = dtEnd.substring(0,10);
	//dtEnd = dtEnd.substring(8,10)+"-"+dtEnd.substring(5,7)+"-"+dtEnd.substring(0,4);
}catch(Exception e) {}%>
<!--*************************Preload Part***********************-->

<!--Use for Filter -->
<form action="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning.jsp" method="get" name="oculto" id="oculto">
	<input type="hidden" id="zinicios" name="zinicios" value=""/>
	<input type="hidden" id="NB_DAYS" name="NB_DAYS" value="<%=nbDays%>"/>
	<input type="hidden" id="mss" name="mss" value="<%=mss%>"/>
	<input type="hidden" id="NB_PEOPLE" name="NB_PEOPLE" value="<%=nbIndivS%>"/>
</form>
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

<!--*************************Main Load***********************-->
<%
String znodo = "SSE_GTA_PLAN";
String znodo1 = "SSE_GTA_PLAN_CONSTRUCTOR";
String znodo2 = "SSE_GTA_PERIOD";
String znodo3 = "SSE_X_WORK_UNIT_RESP";
String znodo4 = "SSE_X_LEGAL_ENTITY";
String znodo5 = "SSE_X_WORK_LOCATION";
String znodo6 = "SSE_X_REF_MOD";
String znodo7 = "SSE_X_INCIDENCE";
String znodo8 = "SSE_X_WEEK_TYPE";
String znodo9 = "SSE_X_DAY_TYPE";
String znodo10 = "GTA_COLOR_CSS";
String znodo11 = "GTA_ALERT_GROUP";
String znodo12 = "SSE_X_VE_ENTITLEMENT_DEF";
String znodo13 = "SSE_X_JOB";
String znodo14 = "SSE_X_POSITION";
String znodo15 = "SSE_GTA_PLAN_CONSTRUCTOR_ROW";
String znodo16 = "SSE_GTA_PLAN_CONSTRUCTOR_POP";
String znodo17 = "SSE_GTA_TIMESLOT_CONSTRUCTOR";
String znodo18 = "SSE_GTA_CLOCKING";

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

String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";
String zmove7 = znodo7 + ":" +znodo7 + "[FIRST]";
String zlectura7 = znodo7 + ":" +zsubsesion + "!" + znodo7;
String zcomun7 = znodo7 + ":" +zsubsesion + "!" + znodo7 + "[&VAR.m4lix]" + ".";

String zoutputdef8 = zsubsesion + "!" + znodo8 + "[*]";
String zmove8 = znodo8 + ":" +znodo8 + "[FIRST]";
String zlectura8 = znodo8 + ":" +zsubsesion + "!" + znodo8;
String zcomun8 = znodo8 + ":" +zsubsesion + "!" + znodo8 + "[&VAR.m4lix]" + ".";

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

String zoutputdef15 = zsubsesion + "!" + znodo15 + "[*]";
String zmove15 = znodo15 + ":" +znodo15 + "[FIRST]";
String zlectura15 = znodo15 + ":" +zsubsesion + "!" + znodo15;
String zcomun15 = znodo15 + ":" +zsubsesion + "!" + znodo15 + "[&VAR.m4lix]" + ".";

String zoutputdef16 = zsubsesion + "!" + znodo16 + "[*]";
String zmove16 = znodo16 + ":" +znodo16 + "[FIRST]";
String zlectura16 = znodo16 + ":" +zsubsesion + "!" + znodo16;
String zcomun16 = znodo16 + ":" +zsubsesion + "!" + znodo16 + "[&VAR.m4lix]" + ".";

String zoutputdef17 = zsubsesion + "!" + znodo17 + "[*]";
String zmove17 = znodo17 + ":" +znodo17 + "[FIRST]";
String zlectura17 = znodo17 + ":" +zsubsesion + "!" + znodo17;
String zcomun17 = znodo17 + ":" +zsubsesion + "!" + znodo17 + "[&VAR.m4lix]" + ".";

String zoutputdef18 = zsubsesion + "!" + znodo18 + "[*]";
String zmove18 = znodo18 + ":" +znodo18 + "[FIRST]";
String zlectura18 = znodo18 + ":" +zsubsesion + "!" + znodo18;
String zcomun18 = znodo18 + ":" +zsubsesion + "!" + znodo18 + "[&VAR.m4lix]" + ".";

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
//String manageByDays = zcomun1 + "SCO_MANAGEMENT_BY_DAYS";
String maxAlertSeverity = zcomun1 + "SCO_MAX_ALERT_SEVERITY_LEVEL";
String counterC1Value = zcomun1 + "SSE_COUNTER_C1";
String counterC2Value = zcomun1 + "SSE_COUNTER_C2";
String counterC3Value = zcomun1 + "SSE_COUNTER_C3";

String filterWu         = zraiz1 + "SSE_FILTER_WU";
String filterLegEnt     = zraiz1 + "SSE_FILTER_LEGAL_ENTITY";
String filterWorkLoc    = zraiz1 + "SSE_FILTER_WORK_LOCATION";
String filterWorkCyc    = zraiz1 + "SSE_FILTER_WORK_CYCLE";
String filterJob			= zraiz1 + "SSE_FILTER_JOB";
String filterPosition    = zraiz1 + "SSE_FILTER_POSITION";
String filterPeopleList = zraiz1 + "SSE_FILTER_PERSON_LIST";
String filterSort       = zraiz1 + "SSE_FILTER_SORT";

String dateHeader = zcomun2 + "SSE_DATE";
String dayHeader = zcomun2 + "SSE_DAY";
String weekHeader = zcomun2 + "SSE_WEEK";
String rest = zcomun2 + "SSE_WEEK_START_DATE";

String idWu = zcomun3 + "STD_ID_WORK_UNIT";
String nmWu = zcomun3 + "STD_N_WORK_UNIT";

String idLegEnt = zcomun4 + "STD_ID_LEG_ENT";
String nmLegEnt = zcomun4 + "STD_N_LEG_ENT";

String idWorkLoc = zcomun5 + "STD_ID_WORK_LOCATION";
String nmWorkLoc = zcomun5 + "STD_N_WORK_LOCATION";

String idWorkCycle = zcomun6 + "SCO_ID_REF_MOD";
String nmWorkCycle = zcomun6 + "SCO_NM_REF_MOD";

String idIncident = zcomun7 + "SCO_ID_INCIDENCE";
String nmIncident = zcomun7 + "SCO_NM_INCIDENCE";
String nmIncidentIcon = zcomun7 + "SCO_ICON_NAME";

String orWeekType = zcomun8 + "SCO_OR_WEEK";
String nmWeekType = zcomun8 + "SCO_NM_WEEK";

String idDayType = zcomun9 + "SCO_ID_DAY_TYPE";
String nmDayType = zcomun9 + "SCO_NM_DAY_TYPE";
String totHoursDayType = zcomun9 + "GET_HOURS_DAY_FORMAT";
String dayTimeSlot = zcomun9 + "GET_TRANSLATED_TIMESLOT_PERIOD";
String idEnterType = zcomun9 + "SCO_ID_ENTER_TYPE";

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
%>
<!--Set Parameters and Load-->
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% 
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
	<m4:param name="ARG_PERSON_LIST_FILTER" value=""/>
	<m4:param name="ARG_MANAGEMENT_UNIT" value="<%=manageUnit%>"/>
	<m4:param name="ARG_LOAD_TYPE" value="<%=typeTab%>"/>
	<m4:param name="ARG_PAGINATION" value="<%=zinicios%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo7%>"><m4:param name="m4name0" value="<%=zoutputdef7%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo8%>"><m4:param name="m4name0" value="<%=zoutputdef8%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo9%>"><m4:param name="m4name0" value="<%=zoutputdef9%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo10%>"><m4:param name="m4name0" value="<%=zoutputdef10%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo11%>"><m4:param name="m4name0" value="<%=zoutputdef11%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo12%>"><m4:param name="m4name0" value="<%=zoutputdef12%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo13%>"><m4:param name="m4name0" value="<%=zoutputdef13%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo14%>"><m4:param name="m4name0" value="<%=zoutputdef14%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo15%>"><m4:param name="m4name0" value="<%=zoutputdef15%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo16%>"><m4:param name="m4name0" value="<%=zoutputdef16%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove6%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove7%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove8%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove9%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove10%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove11%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove12%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove13%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove14%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove15%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove16%>"/></m4:move>
<%
int  zcounti  = 0;	
int  zcount = 0;
int  zcounti1  = 0;	
int  zcount1  = 0;
int  zcounti2  = 0;	
int  zcount2  = 0;
int  zcounti3  = 0;	
int  zcount3  = 0;
int  zcounti4  = 0;	
int  zcount4  = 0;
int  zcounti5  = 0;	
int  zcount5  = 0;
int  zcounti6  = 0;	
int  zcount6  = 0;
int  zcounti7  = 0;	
int  zcount7  = 0;
int  zcounti8  = 0;	
int  zcount8  = 0;
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
String displayMenus = "";
String startHourDay = "";
String endHourDay = "";
String diffHourDay = "";
int displayMenu0 = 0;
int displayMenu1 = 0;  
int displayMenu2 = 0;  
int displayMenu3 = 0;  
int displayMenu4 = 0;  
int displayMenu5 = 0;  
int displayMenu6 = 0;
int displayMenu7 = 0;  

try {
	M4Operations m = new M4Operations(request);
	zcounti1 = m.getCountInClient(znodo1,zsubsesion,znodo1);
	zcount1 =  m.getCount(znodo1,zsubsesion,znodo1);
	zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
	zcount2 =  m.getCount(znodo2,zsubsesion,znodo2);
	zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
	zcount3 =  m.getCount(znodo3,zsubsesion,znodo3);
	zcounti4 = m.getCountInClient(znodo4,zsubsesion,znodo4);
	zcount4 =  m.getCount(znodo4,zsubsesion,znodo4);
	zcounti5 = m.getCountInClient(znodo5,zsubsesion,znodo5);
	zcount5 =  m.getCount(znodo5,zsubsesion,znodo5);
	zcounti6 = m.getCountInClient(znodo6,zsubsesion,znodo6);
	zcount6 =  m.getCount(znodo6,zsubsesion,znodo6);
	zcounti7 = m.getCountInClient(znodo7,zsubsesion,znodo7);
	zcount7 =  m.getCount(znodo7,zsubsesion,znodo7);
	zcounti8 = m.getCountInClient(znodo8,zsubsesion,znodo8);
	zcount8 =  m.getCount(znodo8,zsubsesion,znodo8);
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
	zcounti15 = m.getCountInClient(znodo15,zsubsesion,znodo15);
	zcount15 =  m.getCount(znodo15,zsubsesion,znodo15);
	zcounti16 = m.getCountInClient(znodo16,zsubsesion,znodo16);
	zcount16 =  m.getCount(znodo16,zsubsesion,znodo16);
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
	startHourDay = String.valueOf((int)Float.parseFloat(m.getItem(znodo1,zsubsesion,znodo1,"","SSE_DAY_HEADER_TIMESLOT_MIN")));
	endHourDay = String.valueOf((int)Float.parseFloat(m.getItem(znodo1,zsubsesion,znodo1,"","SSE_DAY_HEADER_TIMESLOT_MAX"))); 
	diffHourDay = String.valueOf((int)Float.parseFloat(m.getItem(znodo1,zsubsesion,znodo1,"","SSE_DAY_HEADER_TIMESLOT_DIFF"))); 
	displayWeek  = m.getItem(znodo1,zsubsesion,znodo1,"","DISPLAY_WEEK");
	displayCycle = m.getItem(znodo1,zsubsesion,znodo1,"","DISPLAY_CYCLE");
	displayMenus = m.getItem(znodo1,zsubsesion,znodo1,"","DISPLAY_MENUS");
	displayMenu0 = displayMenus.indexOf("-0-");
	displayMenu1 = displayMenus.indexOf("-1-");
	displayMenu2 = displayMenus.indexOf("-2-");
	displayMenu3 = displayMenus.indexOf("-3-");
	displayMenu4 = displayMenus.indexOf("-4-");
	displayMenu5 = displayMenus.indexOf("-5-");
	displayMenu6 = displayMenus.indexOf("-6-");
	displayMenu7 = displayMenus.indexOf("-7-");
	} catch(Exception e) {}
String	zcountv  = String.valueOf(zcounti);
String	zcountv1 = String.valueOf(zcounti1);
String	zcountv2 = String.valueOf(zcounti2);
String	zcountv3 = String.valueOf(zcounti3);
String	zcountv4 = String.valueOf(zcounti4);
String	zcountv5 = String.valueOf(zcounti5);
String	zcountv6 = String.valueOf(zcounti6);
String	zcountv7 = String.valueOf(zcounti7);
String	zcountv8 = String.valueOf(zcounti8);
String	zcountv9 = String.valueOf(zcounti9);
String	zcountv10 = String.valueOf(zcounti10);
String	zcountv10bis = String.valueOf(zcounti10+1);
String	zcountv11 = String.valueOf(zcounti11);
String	zcountv12 = String.valueOf(zcounti12);
String	zcountv13 = String.valueOf(zcounti13);
String	zcountv14 = String.valueOf(zcounti14);
String	zcountv15 = String.valueOf(zcounti15);
String	zcountv16 = String.valueOf(zcounti16);
String  nbCell = String.valueOf(zcounti2+3);



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
<!-- Use for Tooltip -->
<div id="buffer" class="buffer"></div>
<!-- Use for Dialog Box -->
<div id="dialogBox">
	<div id="dialogBox_Header" title="<%=Tran_mss_g4_gta_planning.getProperty("menus.buttonClose")%>"></div>
	<div id="dialogBox_Body"></div>
</div>
<!-- Use for Black Mask Screen -->
<div id="transparent" ></div>
<!-- Use for Javascript Execution -->
<div id ="runJavascript"></div>

<!-- Main Container / Container Used to Import Filter Request -->
<div id ="main_container">
	<!-- Use for Help -->
	<div id="helpGTA" class="helpGTA" title="<%=Tran_mss_g4_gta_planning.getProperty("page.help")%>" onclick="show_help('<%=mss%>','<%=zlanguser%>');"></div>
	<!-- Header Container / Tab Menus And Filter Parameters -->
	<div id="header_container" style="position:relative; width:100%; height=100%" >
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
		<%@ include file="../../sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp" %>
	</div><!-- End : Main Wrapper -->
</div><!--End : Main Container-->

<!-- Bottom Navigation Menus -->
<%
request.setAttribute("gtaPlan_mss",mss);
request.setAttribute("gtaPlan_hoursFormat",hoursFormat);
request.setAttribute("gtaPlan_dtStart",dtStart);
request.setAttribute("gtaPlan_dtEnd",dtEnd);
request.setAttribute("gtaPlan_typeTab",typeTab);
request.setAttribute("gtaPlan_checkTotal",checkTotal);
request.setAttribute("gtaPlan_checkTotalCheck",checkTotalCheck);
request.setAttribute("gtaPlan_checkAlert",checkAlert);
request.setAttribute("gtaPlan_checkAlertCheck",checkAlertCheck);
request.setAttribute("gtaPlan_counterC1Name",counterC1Name);
request.setAttribute("gtaPlan_counterC2Name",counterC2Name);
request.setAttribute("gtaPlan_counterC3Name",counterC3Name);
request.setAttribute("gtaPlan_viewType",viewType);
request.setAttribute("gtaPlan_startHourDay",startHourDay);
request.setAttribute("gtaPlan_endHourDay",endHourDay);
request.setAttribute("gtaPlan_diffHourDay",diffHourDay);
request.setAttribute("gtaPlan_displayMenu0",String.valueOf(displayMenu0));
request.setAttribute("gtaPlan_displayMenu1",String.valueOf(displayMenu1));
request.setAttribute("gtaPlan_displayMenu2",String.valueOf(displayMenu2));
request.setAttribute("gtaPlan_displayMenu3",String.valueOf(displayMenu3));
request.setAttribute("gtaPlan_displayMenu4",String.valueOf(displayMenu4));
request.setAttribute("gtaPlan_displayMenu5",String.valueOf(displayMenu5));
request.setAttribute("gtaPlan_displayMenu6",String.valueOf(displayMenu6));
request.setAttribute("gtaPlan_displayMenu7",String.valueOf(displayMenu7));
%>
<jsp:include page="/sse_g4/espanol/sse_g4_gta_planning_menus.jsp" flush="true" ></jsp:include>

<!-- Total Calculation -->
<%if (checkTotal.equals("Y") ) {%>
	<%@include file="../../sse_g4/espanol/sse_g4_gta_planning_total_calcul.jsp" %>
<%}%>
</body>
<m4:endpage/>
