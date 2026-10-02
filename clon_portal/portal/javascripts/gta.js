/*///////////////////////////////////////PLANNING GTA : Javascripts Functions///////////////////////////////////////*/

/*-------------------------------- Deactivation on Context Menu (mouse right click) --------------------------------*/
document.oncontextmenu = function(){return false;}
/*-------------------------------- Buffer use for Javascripts request results --------------------------------*/
var buffer ="";
/*-------------------------------- Datas Format for Hours ( Decimal:0 / Hours Minutes:1 ) --------------------------------*/
var hoursFormat ="";
/*-------------------------------- Global Day Informations ID button --------------------------------*/
var infoDayId ="";
/*-------------------------------- Global Document Element --------------------------------*/
var docElmtId ="";

/*-------------------------------- ie9 Bug for Large Table --------------------------------*/
function cleanWhitespace(node)
{
  for (var i=0; i<node.childNodes.length; i++)
  {
    var child = node.childNodes[i];
    if(child.nodeType == 3 && !/\S/.test(child.nodeValue))
    {
      node.removeChild(child);
      i--;
    }
    if(child.nodeType == 1)
    {
      cleanWhitespace(child);
    }
  }
  return node;
}

/*-------------------------------- Special Characters -------------------*/
function escapeHtml(unsafe) {
	unsafe = unsafe.replace(/&/g,"%26");
	return(unsafe);
}

/*-------------------------------- Help Online -------------------*/
function show_help(mss,lang)
{
	if (mss == "0")
	{
		this.page = "GESS_Planification";
	}else{
		this.page = "GMSS_Planification";
		url = "/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning_help.jsp";
	}
	if (lang == "fr"){this.url = "/help/francais/"+this.page+".pdf";}
	if (lang == "en"){this.url = "/help/english/"+this.page+".pdf";}
	if (lang == "es"){this.url = "/help/espanol/"+this.page+".pdf";}
	if (lang == "pt"){this.url = "/help/portugues/"+this.page+".pdf";}

	window.open(this.url,'popUp','toolbar=no,location=no,status=yes,resizable=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=1000,height=500');	
}


/*-------------------------------- Person Datas (Array & Class PeopleData) used for Validation Process -------------------*/
var peopleArray = new Array(); 
function peopleData(id,ordinalPeriod,firstName,lastName,originCss){
	this.id = id;
	this.ordinalPeriod = ordinalPeriod;
	this.firstName = firstName;
	this.lastName = lastName;
	this.chosen = "no";
	this.trRow = "tr"+id+"|"+ordinalPeriod;
	this.tdRow = "td"+id+"|"+ordinalPeriod;
	this.tdRowCheckBox = "check_td"+id+"|"+ordinalPeriod;
	this.tdRowCss =originCss;
	this.dayAlerts = "";
	//weekArray.push(new weekData("<%=currentWeek%>","<%=currentStartWeekDate%>","<%=currentEndWeekDate%>","<%=currentCompleteWeek%>"));
}

/*-------------------------------- Use for Modification Process  -------------------*/
function dateChosen(idHr,ordPeriod,firstDate,firstValue) {
	this.idHr = idHr;
	this.ordPeriod = ordPeriod;
	this.dates = new Array();
	this.dates.push(firstDate);
	this.values = new Array();
	this.values.push(firstValue);
}

/*-------------------------------- Day Datas (Array & Class dayData) used for Modification Process  -------------------*/
var dayArray = new Array(); 
function dayData(id){
	$(id).fireEvent("mouseleave");
	this.id=id;
	/*-- Day Data Origin Values --*/
	this.oldCellValue = "";
	this.oldValue= "";
	this.oldManagementByDay="";
	this.oldDayType= "";
	this.oldTextTS="";
	this.oldValidClass="";
	/*-- Day Data New Pending Values --*/
	this.newValue="";
	this.newDayType="";
	this.newManagementByHours="";
	this.newCellValue="";
	this.newTextTS="";
	/*-- Initialisation --*/
	this.init = function (){
		this.getOldValues();
		this.getModifiedValues();
	}
	/*-- Get Origin Values--*/
	this.getOldValues = function() {
		this.oldCellValue = $(id).innerHTML;
		this.oldValue= $("value|"+id).innerHTML;
		this.oldManagementByDay=$("value|"+id).getAttribute("name");
		if ($("type|"+id)){
			this.oldDayType=$("type|"+id).innerHTML;
		}
		this.oldTextTS="";
		if ($("text|"+id)){
			this.oldTextTS=$("text|"+id).innerHTML;
		}
		this.oldValidClass = $("day|"+id).className;
	}
	/*-- Get Modified Values--*/
	this.getModifiedValues = function() {
		this.newValue=$("update_select_HoursDay").value;
		this.newDayType=$("select_idDayType").value;
		this.newManagementByHours=update_EnterType[$('select_idDayType').value];
		if (this.oldDayType.trim()== "" ){
			this.newCellValue="<div id=\"day|"+this.id+"\" class=\""+this.oldValidClass+"\"> <div id=\"type|"+this.id+"\" class=\"day_type\"></div> <div id=\"value|"+this.id+"\" class=\"day_value\" name=\""+this.oldManagementByDay+"\">"+this.newValue+"</div> </div>";
		}else{
			this.newCellValue="<div id=\"day|"+this.id+"\" class=\""+this.oldValidClass+"\"> <div id=\"type|"+this.id+"\" class=\"day_type\">"+this.newDayType+"</div> <div id=\"value|"+this.id+"\" class=\"day_value\" name=\""+this.oldManagementByDay+"\">"+this.newValue+"</div> </div>";
		}
		this.newTextTS=$("update_select_dayTimeSlot").innerHTML.replace(/,/g,"<br/>");
	}
	/*-- Control if we can affect modified values on current day (And Apply Graphical Change)  --*/
	this.affectModifiedValues = function() {
		$(id).fireEvent("mouseleave");
		dayCss ="dayChosen";
		//Control if new day type and old day type match (Day / Hours / EnterType)
		if ( (this.oldManagementByDay == "1" &&   this.newManagementByHours=="1") || (this.oldManagementByDay != "1" &&  this.newManagementByHours!="1") ) //Day / Hours
		{
			dayCss = $(this.id).getAttribute("name");
		}else{
			//Control Hours/Days value on Modification Panel
			var hoursDayControl = controlHoursDays($('update_select_HoursDay').value,$('update_select_idDayType').value,update_EnterType[$('update_select_idDayType').value]);
			//Control Validation/Modification 
			var validationControl = controlValidation(this.oldValidClass,this.id);
			if (hoursDayControl=="ko" || validationControl=="ko"){
				dayCss = $(this.id).getAttribute("name");
			}else{
				//Affect
				$(this.id).innerHTML = this.newCellValue; 
				if ($("text|"+this.id)){
					$("text|"+this.id).innerHTML = this.newTextTS;
					$("text|"+this.id).className= "timeslotChosen";
				}
				//dayTypeManagement
				if ($("currentViewType").value == "Week"){
					manageDayType($("type|"+this.id));
				}
			}
		}
		return(dayCss);
	}
	/*-- Apply Old Values (Graphical Change)  --*/
	this.affectOldValues = function() {
		$(id).fireEvent("mouseleave");
		$(this.id).innerHTML =  this.oldCellValue; 
		if ($("text|"+this.id)){
			$("text|"+this.id).innerHTML = this.oldTextTS;
			$("text|"+this.id).className= "timeslot";
		}
		//getTooltip($(this.id));
	}
	/*-- Apply Succes for Save Result (Graphical Change)  --*/
	this.completeSave = function() {
		$(this.id).className = "dayComplete";
		if ($("text|"+this.id)){
			$("text|"+this.id).className= "timeslot";
		}
	}
	/*-- Apply Error for Save Result (Graphical Change)  --*/
	this.errorSave = function() {
		$(this.id).className = "dayError"; 
		if ($("text|"+this.id)){
			$("text|"+this.id).className= "timeslotError";
		}
		this.affectOldValues()
	}
}
/*-------------------------------- End : Day Datas (Array & Class dayData) used for Modification Process  -------------------*/

/*-------------------------------- Tab Menus --------------------------------*/
function overTab(elt){
	var current = $(elt).className;
	var currentId = $(elt).id;
	var otherId = "";

	var fxTabTheo = new Fx.Tween($('tabTheo'));
	var fxTabReal = new Fx.Tween($('tabReal'));
	
	if (currentId == "tabTheo" && document.getElementById("tabReal")){
		otherId = "tabReal";
	}
	if (currentId == "tabReal" && document.getElementById("tabTheo")){
		otherId = "tabTheo";
	}
	if (currentId == "tabHours" ){
		otherId = "tabDays";
	}
	if (currentId == "tabDays" ){
		otherId = "tabHours";
	}
	if (current == "tab_main_hidden"){
		$(elt).className = "tab_main_select";
		//myFx = new Fx.Morph($(elt), {duration: 500, transition: Fx.Transitions.Sine.easeOut}).start('.tab_main_select');
		if (otherId != ""){
			$(otherId).className = "tab_main_hidden";
		}
	}
	if (current == "tab_minor_hidden"){
		$(elt).className = "tab_minor_select";
		//myFx = new Fx.Morph($(elt), {duration: 500, transition: Fx.Transitions.Sine.easeOut}).start('.tab_minor_select');
	}
	if (current == "tab_minor_norm"){
		if ($(otherId).className == "tab_minor_unselect"){
				
		}else{
			$(otherId).className = "tab_minor_unselect";	
		}
	}
}

function outTab(elt){
	var current = $(elt).className;
	var currentId = $(elt).id;
	var otherId = "";
	if (currentId == "tabTheo" && document.getElementById("tabReal")){
		otherId = "tabReal";
	}
	if (currentId == "tabReal" && document.getElementById("tabTheo")){
		otherId = "tabTheo";
	}
	if (currentId == "tabHours" ){
		otherId = "tabDays";
	}
	if (currentId == "tabDays" ){
		otherId = "tabHours";
	}
	$(elt).className = $(elt).getAttribute("name");
	$(otherId).className = $(otherId).getAttribute("name");
}

function changeTab(elt){
	//calcul valeurs courantes
	var currentClass = $(elt).getAttribute("name");
	var currentId = $(elt).id;
	//onglet principal
	var typeTab =" ";
	//heures/Jours
	var manageUnit ="B";
	//calcul onglet principal par defaut
	if (document.getElementById("tabTheo")){
		if ($('tabTheo').className == "tab_main_norm"){
			typeTab ="T";
		}
	}
	if (document.getElementById("tabReal")){
		if ($('tabReal').className == "tab_main_norm"){
			typeTab ="R";
		}
	}
	//clique sur onglet théorique
	if (currentId == "tabTheo"){
		//onglet choisi déjà
		if (currentClass == "tab_main_norm"){
			//pas de chgt
		}
		//si onglet non choisi
		if (currentClass == "tab_main_hidden"){
			$('tabReal').className = "tab_main_hidden";
			$('tabReal').setAttribute("name","tab_main_hidden");
			$(elt).className = "tab_main_norm";
			$(elt).setAttribute("name","tab_main_norm");
			typeTab ="T";
			manageUnit = $('manageUnit').value;
		}
	}
	//clique sur onglet réel
	if (currentId == "tabReal"){
		//onglet choisi déjà
		if (currentClass == "tab_main_norm"){
			//pas de chgt
		}
		//si onglet non choisi
		if (currentClass == "tab_main_hidden"){
			$('tabTheo').className = "tab_main_hidden";
			$('tabTheo').setAttribute("name","tab_main_hidden");
			$(elt).className = "tab_main_norm";
			$(elt).setAttribute("name","tab_main_norm");
			typeTab ="R";
			manageUnit = $('manageUnit').value;
		}
	}
	//clique sur onglet heures
	if (currentId == "tabHours"){
		//onglet choisi déjà
		if (currentClass == "tab_minor_norm"){
			//verifier qu on ne decoche pas les deux options
			if ($('tabDays').className != "tab_minor_hidden"){
				$('tabDays').className = "tab_minor_hidden";
				$('tabDays').setAttribute("name","tab_minor_hidden");
			}
			manageUnit = "H";
		}
		//si onglet non choisi
		if (currentClass == "tab_minor_hidden"){
			$(elt).className = "tab_minor_norm";
			$(elt).setAttribute("name","tab_minor_norm");
			manageUnit = "B";
		}
	}
	//clique sur onglet Jours
	if (currentId == "tabDays"){
		//onglet choisi déjà
		if (currentClass == "tab_minor_norm"){
			//verifier qu on ne decoche pas les deux options
			if ($('tabHours').className != "tab_minor_hidden"){
				$('tabHours').className = "tab_minor_hidden";
				$('tabHours').setAttribute("name","tab_minor_hidden");
			}
			manageUnit = "D";
		}

		//si onglet non choisi
		if (currentClass == "tab_minor_hidden"){
			$(elt).className = "tab_minor_norm";
			$(elt).setAttribute("name","tab_minor_norm");
			manageUnit = "B";
		}
	}
	//Apply Filter
	$('typeTab').value = typeTab;
	$('manageUnit').value = manageUnit;
	filterPage();
}
/*-------------------------------- End : Tab Menus --------------------------------*/

/*-------------------------------- ShortCuts / Filter --------------------------------*/
/*Filter on specific week*/
function selectWeek(obj){
	var objID = obj.id;
	index = objID.indexOf("|",0);
	date1 = objID.substring(0, index);
	date2 = objID.substring(index + 1, objID.length);
	$('DT_START').value = date1;
	$('DT_END').value = date2;
	m4valor('oculto','zinicios','1','set');
	filterPage();
}
/*Filter on Previous*/
function selectPrevious(obj){
	var objID = obj;
	index = objID.indexOf("|",0);
	date1 = objID.substring(0, index);
	date2 = objID.substring(index + 1, objID.length);
	$('DT_START').value = date1;
	$('DT_END').value = date2;
	m4valor('oculto','zinicios','1','set');
	filterPage();
}
/*Filter on Next*/
function selectNext(obj){
	var objID = obj;
	index = objID.indexOf("|",0);
	date1 = objID.substring(0, index);
	date2 = objID.substring(index + 1, objID.length);
	$('DT_START').value = date1;
	$('DT_END').value = date2;
	m4valor('oculto','zinicios','1','set');
	filterPage();
}
/*Filter on Current Month*/
function selectMonth(obj){
	var objID = obj;
	index = objID.indexOf("|",0);
	date1 = objID.substring(0, index);
	date2 = objID.substring(index + 1, objID.length);
	$('DT_START').value = date1;
	$('DT_END').value = date2;
	m4valor('oculto','zinicios','1','set');
	filterPage();
}
/*-------------------------------- End : ShortCuts / Filter --------------------------------*/


/************************************** GTA Bottom menu Functions ***************************************/
/*-------------------------------- Constructor --------------------------------*/
function menu(ta,ba,la){

	//for one title you got one block
	this.title=ta;
	this.block=ba;
	this.lang=la;
	this.hide = function() {
		$(this.block).hide(); 
		$(this.title).className= "free";
	}
	this.show = function (){
		//Reset day color
		clearDay(); //YME test on s en sert plus...
		var menus = document.getElementById("nav_menu").getElementsByTagName("li");
		//test if another title is used
		for(i=0;i<menus.length;i++) {
			if (this.title != menus[i].id){
				num = menus[i].id.substring(1,2);
				//ajout maquette
				$("b"+num).hide(); 
				//ajout maquette
				if ($("t"+num).className == "highlight"){
					$("t"+num).className= "free";
					$("b"+num).hide(); 
				}
			}
		 }
		//close menu if it is current
		if ($(this.title).className == "highlight"){
			this.hide();
		}else{
			//block appear
			$(this.block).setStyle('display', 'block');
			$(this.block).show();
			//highlight current title
			$(this.title).className= "highlight";
			//test if you must erase old content
			eraseMenuControl(this.block,this.lang);
			//specific Menu behavior
			processMenuControl(this.block,this.lang);
		}
	}
	this.init = function (){
		//hide block
		//$(this.block).setStyle('display', 'none');
		//$(this.block).hide(); 
		//add an event on title (click)
		$(this.title).addEvent('click', function() {
			  this.show();
		}.bind(this));
	}
}
/*-------------------------------- End : Constructor --------------------------------*/

/*-------------------------------- Particular Case : Menu 7-Validation --------------------------------*/
function processMenuControl(block,lang){
	// Validation Menu
	if (block == "b7"){
		//Checkbox for Validation Activation
		if (document.getElementById("controlAllAlertSeverity")){
			showCheckboxValidation();
			$("controlAllAlertSeverity").checked = true;
			controlAllAlertSeverity();
		}
	}else{
		//Checkbox for Validation Hide
		if (document.getElementById("controlAllAlertSeverity")){
			hideCheckboxValidation();
		}
	}
}
/*-------------------------------- End : Particular Case : Menu 7-Validation --------------------------------*/

/*-------------------------------- Filter (Menu 0-Period / 1-Display / 3-Filter / 4-Sort / 6-Counters) --------------------------------*/
/*-- Calculate number of days between two dates --*/
function dayTime(date){
	var d = new Date(date[2], date[1] - 1, date[0]);
	return d.getTime();
}
/*-- Calculate Number of Days of the period --*/
function nbDays() { 
	/*var date1=$('DT_START').value;
	var date2=$('DT_END').value;
	var debut = dayTime(date1.split("-"));
	var fin = dayTime(date2.split("-"));
	var jourSep= fin-debut;
	nb = Math.round(jourSep/86400000) + 1;
	$('NB_DAYS').value = nb;*/
	sInitDate= $('DT_START').value;
	sLastDate= $('DT_END').value;
	if (sInitDate == null || sInitDate == "" || sLastDate == null || sLastDate == "") 
	{
		nb = 0;
		$('NB_DAYS').value = nb;
	}else{
		nb =  m4daydiff(sInitDate,sLastDate) + 1;
		$('NB_DAYS').value = nb;
	}
	
} 
function filterPageInit(){
	// Toggle visibility for all selects in the common document
	//$$('select').setStyle('visibility', 'hidden'); 
	//Black Screen
	showMask();
	//Spinner
	Site.onRequest();
	//Send Request
	filterPageGo();
	//setTimeout('filterPageGo();',500);
}
function filterPageGo(){
	//raz infoDayId
	infoDayId ="";
	var url = '/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning_filter.jsp'+"?zinicios="+$('zinicios').value+"&DT_START="+$('DT_START').value+"&DT_END="+$('DT_END').value+"&NB_DAYS="+$('NB_DAYS').value+"&mss="+$('mss').value+"&NB_PEOPLE="+$('NB_PEOPLE').value;
	//Filter Values
	url = url+"&ID_WU="+$('ID_WU').value+"&ID_LEGENT="+$('ID_LEGENT').value+"&ID_WORKLOC="+$('ID_WORKLOC').value+"&ID_JOB="+$('ID_JOB').value+"&ID_POSITION="+$('ID_POSITION').value+"&ID_WORKCYCLE="+$('ID_WORKCYCLE').value+"&ID_SORT="+$('ID_SORT').value+"&LIST_PEOPLE="+$('peopleFilter').value+"&typeTab="+$('typeTab').value+"&manageUnit="+$('manageUnit').value;
	//Counters Values
	url = url+"&counterC1="+$('counterC1').value+"&counterC2="+$('counterC2').value+"&counterC3="+$('counterC3').value;
	url = url+"&counterC1Name="+escapeHtml($('counterC1Name').value)+"&counterC2Name="+escapeHtml($('counterC2Name').value)+"&counterC3Name="+escapeHtml($('counterC3Name').value);
	//Affichage Values
	url = url+"&checkTotal="+$('checkTotal').value+"&checkAlert="+$('checkAlert').value;
	elementHTML = document.getElementById('main_container');
	
	var req = new Request.HTML({
	  method: 'post',
	  url: url,
	  async : true,
	  evalScripts : true,
	  update: elementHTML,
	  onRequest: function() {},
	  onComplete: function(response) { Site.onComplete();hideMask();},
	  onFailure: function(response) { Site.onFailure(response);hideMaskFailure();}
	}).send();
}

function cleanFilter(){
	$('ID_WU').value = 'All';
	$('ID_LEGENT').value = 'All';
	$('ID_WORKLOC').value = 'All';
	$('ID_JOB').value = 'All';
	$('ID_POSITION').value = 'All';
	$('ID_WORKCYCLE').value = 'All';
	$('peopleFilter').value = '';
	$('people').value = '';
	
}
/*-------------------------------- End : Filter (Menu 0-Period / 1-Display / 3-Filter / 4-Sort / 6-Counters) --------------------------------*/

/*-------------------------------- Menu (1-Type of Datas) --------------------------------*/
/*-- Total checkbox Management --*/
function totalCheck() {
	var check = $('checkTotal').checked;
	if (check){
		$('checkTotal').value = "Y";
	}else{
		$('checkTotal').value = "N";
	}
}
/*-- Alert checkbox Management --*/
function alertCheck() {
	var check = $('checkAlert').checked;
	if (check){
		$('checkAlert').value = "Y";
	}else{
		$('checkAlert').value = "N";
	}
}
/*-------------------------------- End : Menu (1-Type of Datas) --------------------------------*/


/*-------------------------------- Menu (4-Update Sort) --------------------------------*/
function changeSort(changeOrder){
	if (changeOrder==true)
	{
		if ($("ID_ORDER").value == 1)
		{
			$("imgSort").innerHTML = "<img src='/iconos/sort-AZ.png' alt='' align='left'/>";
			$("ID_ORDER").value = 0;
		}
		else{
			$("imgSort").innerHTML = "<img src='/iconos/sort-ZA.png' alt='' align='left'/>";
			$("ID_ORDER").value = 1;
		}
	}
	//Update id sort value
	$("ID_SORT").value = parseInt($("ID_SORT_LABEL").value) + parseInt($("ID_ORDER").value);
}
/*-------------------------------- End : Menu (4-Update Sort) --------------------------------*/

/*-------------------------------- Menu (5-Update Days) --------------------------------*/
/*-- Use for Bottom Menu --*/
function modifChangeDay(dayType,enterType){
	//Update Changes
	$('update_select_HoursDay').value = update_HoursDay[dayType];
	$('update_select_dayTimeSlot').innerHTML = update_TimeSlotText[dayType];

	//Autocompletion
	$('update_select_idDayType').value = dayType;

	var test = $("update_HoursDayLabel").style.width;
	if (enterType == 1)//Hours Type
	{
		$("update_HoursDayLabel").innerHTML = "Nb. Heures Théoriques :";
	}else{//Day Type
		$("update_HoursDayLabel").innerHTML = "Valeur associée au jour :";
	}

	//Control for change possibility (readonly)
	var timeSlot = $("update_select_dayTimeSlot").innerHTML;
	var hours = $("update_select_HoursDay");
	if (timeSlot == "" || timeSlot == null)
	{
		hours.disabled = false;
	}
	else{
		hours.disabled = true;
	}
}
/*-- Use for Details (Not Yet - Evolution) --*/
function dayModifChangeDay(dayType,enterType,blockSlide){
	//Update Changes
	$('currentNbDayHour').value = dayTypeHoursVector[dayType];
	$('currentTimeSlot').innerHTML = update_TimeSlotText[dayType];
	//Autocompletion
	$('selectDayType').value = dayType;

	//Control for change possibility (readonly)
	var timeSlot = $("currentTimeSlot").innerHTML;
	var hours = $("currentNbDayHour");
	if (timeSlot == "" || timeSlot == null)
	{
		hours.disabled = false;
	}
	else{
		hours.disabled = true;
	}

	//Timeslots Visualisation
	var url = '/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_get_reference_timeslots.jsp'+"?ARG_ID_DAY_TYPE="+dayType;

	elementHTML = document.getElementById('currentRefTimeSlots');
	
	var req = new Request.HTML({
	  method: 'post',
	  url: url,
	  async : true,
	  evalScripts : true,
	  update: elementHTML,
	  onRequest: function() {Site.onRequest();},
	  onComplete: function(response) { Site.onComplete(); containerSlideIn(blockSlide);},
	  onFailure: function(response) { Site.onFailure(response); }
	}).send();

}
/*-------------------------------- End : Menu (5-Update Days) --------------------------------*/
/************************************** End : GTA Bottom menu Functions ***************************************/

/*-------------------------------- Spinner Management & Black Mask -----------------------------------*/
/*-- Constructor Spinner --*/
var Site = {
	requestCounter : 0,
	'spinnerControl': function(){
		if($('load') && this.requestCounter > 0){//$('loading').show();
			$('load').show();
		}
		if($('load') && this.requestCounter == 0){ 
			setTimeout ("$('load').hide();",10 );
		}
	},
    'onRequest': function() {
		this.requestCounter = this.requestCounter+1;
		this.spinnerControl();
    },
    'onComplete': function() {
       this.requestCounter = this.requestCounter- 1;
	   this.spinnerControl();
    },
    'onFailure': function(xhr) {
        this.requestCounter = this.requestCounter-1;
		this.spinnerControl();
		$('dialogBox_Body').innerHTML = "<table width='100%' cellspacing='0' cellpadding='0'><tr><td class='titleMenu'>Une Erreur s'est produite<br/>"+xhr.status+" : " + xhr.statusText+"<br/>"+xhr.responseText+"</td></tr></table>";
		dialogBox_show('dialogBox', "", "","");
    },
	'run':function() {
		
		this.requestCounter = this.requestCounter + 9999999;
		this.spinnerControl();
    },
	'stop':function() {
		
		this.requestCounter = this.requestCounter - 9999999;
		this.spinnerControl();
    }
}
/*-- Show Mask --*/
function showMask()
{
	//Show Black Mask 
	document.getElementById('transparent').style.display ="block";
}
/*-- Hide Mask --*/
function hideMask()
{
	//Cache l'ecran de masquage
	document.getElementById('transparent').style.display ="none";
	//$$('select').setStyle('visibility', 'visible'); // Toggle visibility for all selects in the common document
}
/*-- Hide Mask --*/
function hideMaskFailure()  
{
	document.getElementById('transparent').style.display ="none";
	//$$('select').setStyle('visibility', 'visible'); // Toggle visibility for all selects in the common document
}
/*---------------------------------- End : Spinner Management & Black Mask ------------------------------------*/


///////////////////////////////////////////////////////////////GESTION DES CASES et couleurs/////////////////////////////////////////////////
/** Fonction pour résoudre le problème d'IE car celui-ci utilise l'attribut ID au lieu de NAME
 * @param tag tag de la balise HTML (ex: input, option, ...)
 * @param name nom de l'élement (<input name="le_nom_cherché" />)
 * @return tableau comprenant tous les éléments trouvés
*/
function getElementsByName_fix(tag, name) {
	var elem=document.getElementsByTagName(tag);
	var arr=new Array();
	for(i=0,iarr=0; i < elem.length; i++) {
		att=elem[i].getAttribute("name");
		if(att == name) {
			arr[iarr]=elem[i];
			iarr++;
		}
	}
	return arr;
}
	
function GetButtonPress(e) {
	
	if ( !e ) {
		var button = window.event.button;
	} else {
		var button = e.which;
	}
	return button;
}
	
function GetClassName( e ) {
	var button = GetButtonPress(e);
	return returnClassName(button);
}	
	
function returnClassName( button ) {
	if ( button == 1 ) {
		var ClassName = 'red';					
	} else {
		var ClassName = 'normal';
	}	
	return ClassName;
}

function disable(idElement) {
	isCycle = idElement.indexOf("cycle",0);
	isWeek  = idElement.indexOf("week",0);
	//Cycle
	if (isCycle != -1)
	{
		index = idElement.indexOf("@",0);
		identifiant = hiddenText.substring(index+1, hiddenText.length);
		currentRow = "tr"+identifiant;
		//alert(currentRow);
		var elements = document.getElementById(currentRow).getElementsByTagName('p');
		//alert(elements.length);
		for(i=0; i < elements.length; i++) {
			attText=elements[i].innerHTML;
			if(attText == hiddenText) {
				var curr = elements[i].parentNode;
				//curr.className = "cycle";
				curr.className = curr.getAttribute("name");
			}
		}
	}
	//Week
	if (isWeek != -1)
	{
		index = idElement.indexOf("@",0);
		identifiant = hiddenText.substring(index+1, hiddenText.length);
		currentRow = "tr"+identifiant;
		//alert(currentRow);
		var elements = document.getElementById(currentRow).getElementsByTagName('del');
		//alert(elements.length);
		for(i=0; i < elements.length; i++) {
			attText=elements[i].innerHTML;
			if(attText == hiddenText) {
				var curr = elements[i].parentNode;
				//curr.className = "week";
				curr.className = curr.getAttribute("name");
			}
		}
	}
	//Day
	if (isWeek == -1 && isCycle == -1)
	{
		//$(idElement).className = "day"; //yme gta0+
		$(idElement).className = $(idElement).getAttribute("name"); //yme gta0+
	}
}
	
/*-- Clear Days --*/
var wait = 0;
//reset all day with default colour
function clearDay(){
	if (wait == 0){

		wait=1;
		
		var allBody = getElementsByName_fix('tbody','tbody');
		for ( var h = 0 ; h < allBody.length ; h++ ) {
			var secondBody = allBody[h];
			if ( secondBody != null ) {
				//alert(secondBody.id);
				for ( var i = 0 ; i < secondBody.childNodes.length ; i++ ) {
					var secondRow = secondBody.childNodes[i];
					for ( var j = 0 ; j < secondRow.childNodes.length ; j++ ) {
						var secondCell = secondRow.childNodes[j];
						//gestion des jours
						if ( secondCell.tagName == 'TD' && (secondCell.className.indexOf("day",0) != -1) &&  secondCell.className != "day" &&  secondCell.className != "dayNA" ) {
							//secondCell.className = "day"; //yme gta 0+
							secondCell.className=secondCell.getAttribute("name");
						}
					}
				}
			}
		}
	wait=0;
	}
}
/*-- End : Clear Days --*/

/*---------------------------------- Dialog Box ------------------------------------*/
/*-- Show Dialog Box --*/
function dialogBox_show(dialogBoxId, parentId, posX, posY)
{
	it = document.getElementById(dialogBoxId);
	x = posX;
	y = posY;
	
	if (posX != "" & posX != null & posY != "" & posY != null )
	{
		it.style.top=posY+"px";
		it.style.left=posX+"px";
	}

	if (it.style.visibility == "visible")
	{
		it.style.visibility = "hidden";
	}else{
		it.style.visibility = "visible";
	}
	
	$(dialogBoxId).show(); 
	//$(dialogBoxId).fade('toggle'); // fades 'myElement' out.
	//$(dialogBoxId).fade(0.7);
	//it.style.visibility = 'visible'; 

}
/*-- Hide Dialog Box --*/
function dialogBox_hide(id)
{
	/*it = document.getElementById(id); 
	it.style.visibility = 'hidden'; */
	$(id).hide(); 
	//$(id).fade('toggle');
}

/*-- Display Dialog Box --*/
function displayMessage(title,message){
	elementHTML = document.getElementById('dialogBox_Body');
	var innerHTML ="";
	innerHTML = "<table width='100%' cellspacing='0' cellpadding='0' ><tr><td class='titleMenu'>"+title+"</td></tr><tr class='background'><th colspan='1'></th></tr><tr ><th colspan='1'></th></tr></table>";
	innerHTML = innerHTML + "<table width='100%' cellspacing='0' cellpadding='0' ><tr><td class='labels' align='center'>"+message+"</td></tr></table>";
	elementHTML.innerHTML = innerHTML;
	dialogBox_show('dialogBox', "", "", "");
	//centerMessage('dialogBox');
	//window.event.cancelBubble = true;
}
/*-- Display Dialog Box with confirmation --*/
function confirmMessage(title,message,confirmTarget,confirmText,cancelText){
	elementHTML = document.getElementById('dialogBox_Body');
	var innerHTML ="";
	innerHTML = "<table width='100%' cellspacing='0' cellpadding='0' ><tr><td class='titleMenu'>"+title+"</td></tr><tr class='background'><th colspan='1'></th></tr><tr ><th colspan='1'></th></tr></table>";
	innerHTML = innerHTML + "<table width='100%' cellspacing='0' cellpadding='0' ><tr><td class='labels' align='left'>"+message+"</td>";
	innerHTML = innerHTML + "<td valign='bottom'><table width='100%' cellspacing='0' cellpadding='0' ><tr><td class='titleMenu' align='right'>"+confirmText+"</td><td class='titleMenu' align='right'>"+cancelText+"</td></tr><tr><td class='pointer' ><img id='' src='/iconos/icono_aceptar_todas_36_36.gif' alt='"+confirmText+"' title='"+confirmText+"'onclick=\""+confirmTarget+"\" /></td><td class='pointer' ><img id='' src='/iconos/icono_cancelar_mss_36_36.gif' alt='"+cancelText+"' title='"+cancelText+"' onclick=\"dialogBox_hide('dialogBox');\" /></td></tr></table> </td></tr></table>";
	elementHTML.innerHTML = innerHTML;
	dialogBox_show('dialogBox', "", "", "");
	//centerMessage('dialogBox');
	//window.event.cancelBubble = true;
}
/*---------------------------------- End : Dialog Box ------------------------------------*/

	
/*---------------------------------- Update Days ------------------------------------*/
/*-- Main Request --*/
function modifyDays(){
	var dayChosen = new Array ();
	//Chosen Days Collection
	allBody = getElementsByName_fix('tbody','tbody');
	for ( var h = 0 ; h < allBody.length ; h++ ) {
		var secondBody = allBody[h];
		if ( secondBody != null ) {
			for ( var i = 0 ; i < secondBody.childNodes.length ; i++ ) {
				var secondRow = secondBody.childNodes[i];
				for ( var j = 0 ; j < secondRow.childNodes.length ; j++ ) {
					secondCell = secondRow.childNodes[j];
					//Days Management
					if ( secondCell.tagName == 'TD' && (secondCell.className == "dayChosen")) {
						//Array Creation to store dayChosen cells
						//Day Informations 
						var objID = secondCell.id;
						valueArg = $("value|"+objID).innerHTML;
						index1 = objID.indexOf("|",0);
						index2 = objID.lastIndexOf("|",objID.length);
						dateArg = objID.substring(0, 10);
						peopleArg = objID.substring(index1 + 1,index2);
						orPeriodArg = objID.substring(index2 + 1, objID.length);
						//Check if it exists
						var found = false;
						var count = dayChosen.length
						for (var x = 0; x< count; x++)
						{
							if (dayChosen[x].idHr == peopleArg  && dayChosen[x].ordPeriod == orPeriodArg)
							{
								dayChosen[x].dates.push(dateArg);
								dayChosen[x].values.push(valueArg);
								found = true;
							}
						}
						//First Date for each Person (Initialisation)
						if (found == false)
						{
							dayChosen.push(new dateChosen(peopleArg,orPeriodArg,dateArg,valueArg));
							found = true;
						}
					}
				}
			}
		}
	}
	//Requests for updating
	var elementHTML = document.getElementById('runJavascript');
	for (var x = 0; x< dayChosen.length ; x++)
	{
		var argIdHr=dayChosen[x].idHr;
		var argOrdPeriod=dayChosen[x].ordPeriod;
		//var firstDate = dayChosen[x].dates[0];
		var argIdHrEncrypt = $("td"+argIdHr+"|"+argOrdPeriod).getAttribute("name");
		//var last="no";
		
		var argDateList = "";
		var argDayTypeList = "" ;   
		var argNbValueList = "";
		var argIdTimetableList = "";	
		var sSep = "%23"; //"#";
		
		for (var y = 0; y< dayChosen[x].dates.length ; y++)
		{
		
			var argDate = dayChosen[x].dates[y];
			var dayId = argDate+"|"+argIdHr+"|"+argOrdPeriod;
			var argDayType = dayArray[dayId].newDayType ;   
			var argNbValue = dayArray[dayId].newValue;
			var argIdTimetable = update_IdTimetable[argDayType];		
		
			argDateList += argDate + sSep;
			argDayTypeList += argDayType + sSep;
			argNbValueList += argNbValue + sSep;
			argIdTimetableList += argIdTimetable + sSep;
			
			/*
			if (y == dayChosen[x].dates.length-1)
			{
				last="yes";
			}			
			
			var argDate = dayChosen[x].dates[y];
			var dayId = argDate+"|"+argIdHr+"|"+argOrdPeriod;
			var argDayType = dayArray[dayId].newDayType ;   
			var argNbValue = dayArray[dayId].newValue;
			var argIdTimetable = update_IdTimetable[argDayType];
			var url = '/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning_modify_day.jsp'+"?ARG_ID_HR="+argIdHrEncrypt+"&ARG_OR_PERIOD="+argOrdPeriod+"&ARG_DATE="+argDate+"&ARG_DAY_TYPE="+argDayType+"&ARG_NB_HOURS="+argNbValue+"&ARG_ID_TIMETABLE="+argIdTimetable; 

			var req = new Request.HTML({
			  method: 'post',
			  url: url,
			  async : false,
			  evalScripts : true,
			  update: elementHTML,
			  onRequest: function() {Site.onRequest();},
			  onComplete: function(response) { Site.onComplete();dayArray[dayId].completeSave();refreshAlerts(argIdHr,argOrdPeriod,firstDate,last); },
			  onFailure: function(response) { Site.onFailure();dayArray[dayId].errorSave();}
			}).send();
			*/
		}
		
		var url = '/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning_modify_all_empl_days.jsp'+"?ARG_ID_HR="+argIdHrEncrypt+"&ARG_OR_PERIOD="+argOrdPeriod+"&ARG_DATE="+argDateList+"&ARG_DAY_TYPE="+argDayTypeList+"&ARG_NB_HOURS="+argNbValueList+"&ARG_ID_TIMETABLE="+argIdTimetableList; 
		
		var req = new Request.HTML({
		  method: 'post',
		  url: url,
		  async : false,
		  evalScripts : true,
		  update: elementHTML,
		  onRequest: function() {Site.onRequest();},
		  onComplete: function(response) { 
				Site.onComplete();
				/* //in the M4O now
				for (var yy = 0; yy< dayChosen[x].dates.length ; yy++) {
					var dayId_1 = dayChosen[x].dates[yy]+"|"+argIdHr+"|"+argOrdPeriod;
					dayArray[dayId_1].completeSave();
				};
				*/
				refreshCounters(argIdHr,argOrdPeriod); 
			},
		  onFailure: function(response) { 
				Site.onFailure();
				for (var yyy = 0; yyy< dayChosen[x].dates.length ; yyy++) {
					var dayId_2 = dayChosen[x].dates[yyy]+"|"+argIdHr+"|"+argOrdPeriod;
					dayArray[dayId_2].errorSave();
				};				
			}
		}).send();		

	}
	//Refresh Total if visible
	refreshTotal(dayChosen);
	//Day's data reinitialisation
	dayArray = new Array(); 
	//Show Save Button
	modifyEnd();
}
/*-- Main Request Start --*/
function modifyStart(){
	$("modifyImage").innerHTML="<img src='/iconos/grabarWaiting.gif' alt='' align='middle'/>";
	Site.run();
	setTimeout('modifyDays();',500);
}
/*-- Main Request End --*/
function modifyEnd(){
	$("modifyImage").innerHTML="<a href ='javascript:modifyStart()' title=''><img src='/iconos/grabar.gif' alt='' align='middle'/></a>";
	Site.stop();
}
/*-- Control Modication Rights --*/
function getControltheoreticalMessage(id) {
	var url = "/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning_day_control.jsp";
	index1 = id.indexOf("|",0);
	index2 = id.lastIndexOf("|",id.length);
	dateArg = id.substring(0, 10);
	peopleArg = id.substring(index1 + 1,index2);
	orPeriodArg = id.substring(index2 + 1, id.length);

	newUrl = url+"?ARG_DATE="+dateArg+"&ARG_ID_HR="+peopleArg+"&ARG_OR_PERIOD="+orPeriodArg;
	elementHTML = document.getElementById('runJavascript');

	var req = new Request.HTML({
	  method: 'post',
	  url: newUrl,
	  evalScripts : true,
	  async : false,
	  onRequest: function() {Site.onRequest();},
	  update: elementHTML,
	  onComplete: function(response) {Site.onComplete();},
	  onFailure: function(xhr) {Site.onFailure();}
	}).send();
}
/*---------------------------------- End : Update Days ------------------------------------*/


/*---------------------------------- Refresh Datas Functions ------------------------------------*/
/*-- Refresh Alerts and Counters --*/
function refreshAlerts(argIdHr,argOrdPeriod,firstDate,last){
/*
	if (last =="yes")
	{
		elementHTML = document.getElementById('runJavascript');
		var nextUrl = '/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning_refresh_alerts.jsp'+"?ARG_ID_HR="+argIdHr+"&ARG_OR_PERIOD="+argOrdPeriod+"&DT_START="+firstDate+"&DT_END="+$('DT_END').value;
		var req = new Request.HTML({
		  method: 'post',
		  url: nextUrl,
		  async : true,
		  evalScripts : true,
		  update: elementHTML,
		  onRequest: function() {Site.onRequest();},
		  onComplete: function(response) { Site.onComplete();refreshCounters(argIdHr,argOrdPeriod); },
		  onFailure: function(response) { Site.onFailure(); }
		}).send();
	}
	*/
}
/*-- Refresh Total Part --*/
function refreshTotal(dayChosen){
	var HMFormat="ko";
	//Check if total view is activate
	if (document.getElementById("finalTotal"))
	{
		var finalTotal = $("finalTotal").innerHTML;
		finalTotal = HMtoDecimal(finalTotal);
		finalTotal = parseFloat($("finalTotal").innerHTML,10);

		for (var x = 0; x< dayChosen.length ; x++)
		{
			var argIdHr=dayChosen[x].idHr;
			var argOrdPeriod=dayChosen[x].ordPeriod;

			//Refresh Row Total
			calculateRowTotal($(argIdHr+"|"+argOrdPeriod));

			for (var y = 0; y< dayChosen[x].values.length ; y++)
			{
				var date = dayChosen[x].dates[y];
				var oldValue = HMtoDecimal(dayArray[date+"|"+argIdHr+"|"+argOrdPeriod].oldValue);
				var newValue = HMtoDecimal(dayArray[date+"|"+argIdHr+"|"+argOrdPeriod].newValue);
				indexHoursMinute = dayArray[date+"|"+argIdHr+"|"+argOrdPeriod].newValue.indexOf(":",0);
				if (indexHoursMinute!=-1){HMFormat="ok";}
				
				if (newValue != oldValue)
				{
					//Update the "Big" Total
					finalTotal = finalTotal +(newValue - oldValue);
					//Refresh Column Total
					calculateColumnTotal($(date));
				}
			}
		}
		//Refresh "Big" Total
		bigTotal = Math.round(finalTotal * 100) / 100;
		//Calculation for Hours/Minutes
		if (hoursFormat == 1 && HMFormat == "ok")
		{
			bigTotal = decimaltoHM(bigTotal);
		}
		//Nan Case
		$("finalTotal").innerHTML = bigTotal;
		if ($("finalTotal").innerHTML=="NaN" || $("finalTotal").innerHTML=="NaN:00"){$("finalTotal").innerHTML="...";}
	}
}
/*-- Refresh After Incidence Modification --*/
function filtrewu(argIdHr,argOrdPeriod,firstDate,last){
	//Refresh Alerts / Tooltips for the period 
	refreshAlerts(argIdHr,argOrdPeriod,firstDate,"yes");
	//Refreh Counters Part
	refreshCounters(argIdHr,argOrdPeriod);
	//Close Detail Panel
	containerSlideOut('end|'+argIdHr+'|'+argOrdPeriod);
}
/*-- Refresh Counters Part for a Row --*/
function refreshCounters(argIdHr,argOrdPeriod){

	var c1 = $("counterC1").value;
	var c2 = $("counterC2").value;
	var c3 = $("counterC3").value;

	if (c1 != "" && c1!= null)
	{
		var elementHTML1 = $(argIdHr+"|"+argOrdPeriod+"|C1");
		var url1 = '/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning_refresh_counters.jsp'+"?ARG_ID_HR="+argIdHr+"&ARG_OR_PERIOD="+argOrdPeriod+"&ARG_DATE="+$('DT_END').value+"&ARG_ID_COUNTER="+c1; 
		var req1 = new Request.HTML({
		  method: 'post',
		  url: url1,
		  async : true,
		  evalScripts : true,
		  update: elementHTML1,
		  onRequest: function() {Site.onRequest();},
		  onComplete: function(response) { Site.onComplete();},
		  onFailure: function(response) { Site.onFailure(response);}
		}).send();
	}

	if (c2 != "" && c2!= null)
	{
		var elementHTML2 = $(argIdHr+"|"+argOrdPeriod+"|C2");
		var url2 = '/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning_refresh_counters.jsp'+"?ARG_ID_HR="+argIdHr+"&ARG_OR_PERIOD="+argOrdPeriod+"&ARG_DATE="+$('DT_END').value+"&ARG_ID_COUNTER="+c2; 
		var req2 = new Request.HTML({
		  method: 'post',
		  url: url2,
		  async : true,
		  evalScripts : true,
		  update: elementHTML2,
		  onRequest: function() {Site.onRequest();},
		  onComplete: function(response) { Site.onComplete();},
		  onFailure: function(response) { Site.onFailure(response);}
		}).send();
	}
	
	if (c3 != "" && c3!= null)
	{
		var elementHTML3 = $(argIdHr+"|"+argOrdPeriod+"|C3");
		var url3 = '/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning_refresh_counters.jsp'+"?ARG_ID_HR="+argIdHr+"&ARG_OR_PERIOD="+argOrdPeriod+"&ARG_DATE="+$('DT_END').value+"&ARG_ID_COUNTER="+c3; 
		var req3 = new Request.HTML({
		  method: 'post',
		  url: url3,
		  async : true,
		  evalScripts : true,
		  update: elementHTML3,
		  onRequest: function() {Site.onRequest();},
		  onComplete: function(response) { Site.onComplete();},
		  onFailure: function(response) { Site.onFailure(response);}
		}).send();
	}
}
/*---------------------------------- End : Refresh Datas Functions ------------------------------------*/


/*---------------------------------- Container Panel ------------------------------------*/
/*-- Open Container --*/
function containerSlideIn(element){
	var myVerticalSlide = new Fx.Slide(element);
	myVerticalSlide.slideIn();
}
/*-- Close Container --*/
function containerSlideOut(element){
	if ($(element).innerHTML != "" && $(element).innerHTML != null)
	{
		var myVerticalSlide = new Fx.Slide(element);
		myVerticalSlide.slideOut();
		$(element).innerHTML="";//
		disable(infoDayId);
	}
}
/*---------------------------------- End :Container Panel ------------------------------------*/

/*---------------------------------- Day Informations ------------------------------------*/

/*-- Use When User navigate in the screen with keyboard --*/
function keyPress(event,currentObj,nbDays) {

	if (Site.requestCounter == 0) // pas tant qu un process tourne
	{
		var newPosition = currentObj.tabIndex;
		switch(event.keyCode){
			//Tab
			case 9: if (event.shiftKey){
						/*shift tab*/
						keyAction(newPosition-1);
					}else{
						/*tab*/
						if (currentObj.className != "dayChosen")
						{
							selectDay(currentObj);
						}
					} 
					break;
			//Enter
			case 13: keyAction(newPosition); break;
			//Left
			case 37: keyAction(newPosition-1); break;
			//Right
			case 39: keyAction(newPosition+1); break;
			//Up
			case 38: keyAction(newPosition-nbDays); break;
			//Down
			case 40: keyAction(newPosition+nbDays); break;
		}
	}
}

/*-- Display Day Informations --*/
function display(obj){
	var url = "/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning_get_informations.jsp";
	//get day informations
	var objID = obj.id;
	index1 = objID.indexOf("|",0);
	index2 = objID.lastIndexOf("|",objID.length);
	dateArg = objID.substring(0, 10);
	peopleArg = objID.substring(index1 + 1,index2);
	orPeriodArg = objID.substring(index2 + 1, objID.length);
	tabIndex = obj.getAttribute("tabindex");
	peopleArgEncrypt = $("td"+peopleArg+"|"+orPeriodArg).getAttribute("name");
	//containers
	newUrl = url+"?ARG_DATE="+dateArg+"&ARG_ID_HR="+peopleArgEncrypt+"&ARG_OR_PERIOD="+orPeriodArg+"&ARG_TAB_INDEX="+tabIndex+"&ARG_DISPLAY_MODIF="+$("checkDayModif").checked+"&mss="+$('mss').value+"&ARG_HOURS_FORMAT="+hoursFormat;
	elementHTML = document.getElementById('end|'+peopleArg+'|'+orPeriodArg);
	//request
	var req = new Request.HTML({
	  method: 'post',
	  url: newUrl,
	  data: { 'do' : '1' },
	  evalScripts : true,
	  onRequest: function() {Site.onRequest();},
	  update: elementHTML,
	  onComplete: function(response) { Site.onComplete();},
	  onFailure: function(xhr) { Site.onFailure(); }
	}).send();
}

/*-- Display Day Advanced Informations --*/
function displayDetails(obj,hrEncrypt,ordPeriodEncrypt,sTypeEncrypt){
	var objID = obj.id;
	index1 = objID.indexOf("|",0);
	index2 = objID.lastIndexOf("|",objID.length);
	dateArg = objID.substring(0, 10);
	peopleArg = objID.substring(index1 + 1,index2);
	orPeriodArg = objID.substring(index2 + 1, objID.length);

	ssSource = $('mss').value;
	if (ssSource == "1"){
		ssSource="M";
	}else{
		ssSource="E"
	}
	//Date Transformation
	adateinfo = new Array(3);
	m4splitdate(dateArg,adateinfo);
	dateArg = adateinfo[2]+"-"+adateinfo[1]+"-"+adateinfo[0];
	
	newPage = "/servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp?sIdHr="+hrEncrypt+"&sOrPer="+ordPeriodEncrypt+"&date_to_load_detail="+dateArg+"&sType="+sTypeEncrypt+"&sCommingFrom="+ssSource;
	window.open(newPage,'popUp','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=830,height=450,top='+(screen.height-450)/2.5+',left='+(screen.width-830)/2.5);		
}

/*-- Display Day Advanced Informations / Cycle-Week-Day Informations --*/
function displayDayAll(id,id2,id3){
	var idDay = id;
	var idWeek = id2;
	var idCycle = id3;
	var startDate = $('DT_START').value;
	var endDate =$('DT_END').value;
	var url = "/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning_get_cwd_informations.jsp";
	var newUrl = url+"?DT_START="+startDate+"&DT_END="+endDate+"&ARG_ID_DAY_TYPE="+idDay+"&ARG_OR_WEEK="+idWeek+"&ID_WORKCYCLE="+idCycle;
	elementHTML = document.getElementById('dialogBox_Body'); 
	//Request
	var req = new Request.HTML({
	  method: 'post',
	  url: newUrl,
	  evalScripts : false,
	  update: elementHTML,
	  onRequest: function() {Site.onRequest();},
	  onComplete: function(response) { Site.onComplete();dialogBox_show('dialogBox', "", "", ""); },
	  onFailure: function(response) { Site.onFailure(response);}
	}).send();
	
}

/*-- Day's Tooltip Informations / Incidence & Alerts --*/
function manageDayType(obj){
	obj.removeEvents('mouseenter');
	obj.removeEvents('mouseleave');
	obj.style.width = "26px";
	obj.addEvents({
    mouseenter: function(){
        obj.morph({
		  'background-color': 'white',
		  'width': '100%'
		});
		},
		mouseleave: function(){
			obj.morph({
			  'background-color': 'transparent',
			  'width': '26px'
			});
		}
	});

}

/*-- Day's Tooltip Informations / Incidence & Alerts --*/
function getTooltip(obj){
	obj.removeEvents('mouseenter');
	obj.removeEvents('mouseleave');
	new FloatingTips(obj, {
		// Content can also be a function of the target element
		content: function(e) {
			var objID = e.id;
			var objClassname = e.className;
			index1 = objID.indexOf("|",0);
			index2 = objID.lastIndexOf("|",objID.length);
			dateArg = objID.substring(0, 10);
			peopleArg = objID.substring(index1 + 1,index2);
			orPeriodArg = objID.substring(index2 + 1, objID.length);
			var result =" ";
			var url = "/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning_get_tooltip_informations.jsp";
			var newUrl = url+"?ARG_DATE="+dateArg+"&ARG_ID_HR="+peopleArg+"&ARG_OR_PERIOD="+orPeriodArg+"&ARG_CLASSNAME="+objClassname+"&ARG_MSS="+$("mss").value;
			elementHTML = document.getElementById('buffer'); 
			var req = new Request.HTML({
			  method: 'post',
			  url: newUrl,
			  async : false,
			  evalScripts : true,
			  update:elementHTML,
			  onRequest: function() {},
			  onComplete: function(response) {},
			  onFailure: function(response) {}
			}).send();
			return $('buffer'); 
		},
		position: 'left', 
		center: true,      
		html: true,
		arrowSize: 11,       
		showDelay : 300
	});
}
/*-- Day's Tooltip Informations for Errors --*/
function getTooltipError(obj,text){
	obj.removeEvents('mouseenter');
	obj.removeEvents('mouseleave');
	new FloatingTips(obj, {
		// Content can also be a function of the target element
		content: function(e) { return (text); },
		position: 'left',
		center: true,      
		html: true,
		arrowSize: 11,      
		showDelay : 100,
		html: true
		
	});
}
/*---------------------------------- End : Day Informations ------------------------------------*/

/*---------------------------------- Tooltip Informations ------------------------------------*/
/*-- TimeSlot Tooltip --*/
function getTooltipTimeSlot(obj,hourStart,hourEnd,timeSlotType){
	new FloatingTips(obj, {
		content: function(e) {
			return ("<table  cellspacing='1' cellpadding='1' ><tr><td width='100px' height='10px' >"+timeSlotType+"</td></tr><tr><td class='floating-tip-content'>"+hourStart + "- " + hourEnd+"</td></tr></table>"); 
		},
		position: 'bottom', 
		center: true,  
		html: true,
		arrowSize: 11,  
		showDelay : 100
	});
}
/*-- Clocking Tooltip --*/
function getTooltipClocking(obj,hourStart,clockingType){
	new FloatingTips(obj, {
		content: function(e) {
			return ("<table  cellspacing='1' cellpadding='1' ><tr><td width='100px' height='10px' >"+clockingType+"</td></tr><tr><td class='floating-tip-content'>"+hourStart+"</td></tr></table>"); 
		},
		position: 'bottom', 
		center: true,      
		html: true,
		arrowSize: 11,       
		showDelay : 100
	});
}
/*-- Header Counter Tooltip --*/
function getTooltipCounterDescription(obj){
	new FloatingTips(obj, {
		content: function(e) {
			var nbCounter = obj.id;
			var selectCounter = "counter"+nbCounter;
			var selectCounterIndex = $(selectCounter).selectedIndex;
			var selectCounterText = $(selectCounter).options[selectCounterIndex].text;
			var selectCounterName = selectCounter+"Name";
			var selectCounterNameValue = $(selectCounterName).value;
			return ("<table  cellspacing='1' cellpadding='1' ><tr><td width='100px' height='10px' >"+selectCounterNameValue+"</td></tr><tr><td class='floating-tip-content'>"+selectCounterText+"</td></tr></table>"); 
		},
		position: 'right', 
		center: true,     
		html: true,
		arrowSize: 11,       
		showDelay : 100
		
	});
}
/*--Employee Tooltip (Row)--*/
function getTooltipHRInfos(obj,cellId,idHrEnc){
	new FloatingTips(obj, {
		content: function(e) {
			var objID = cellId;
			index1 = objID.indexOf("|",0);
			index2 = objID.lastIndexOf("|",objID.length);
			dateArg = objID.substring(0, 10);
			peopleArg = objID.substring(index1 + 1,index2);
			orPeriodArg = objID.substring(index2 + 1, objID.length);
			var result =" ";
			var url = "/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning_get_tooltip_employee_informations.jsp";
			var newUrl = url+"?ARG_DATE="+dateArg+"&ARG_ID_HR="+idHrEnc+"&ARG_OR_PERIOD="+orPeriodArg;
			elementHTML = document.getElementById('buffer'); 
			var req = new Request.HTML({
			  method: 'post',
			  url: newUrl,
			  async : false,
			  evalScripts : true,
			  update:elementHTML,
			  onRequest: function() {},
			  onComplete: function(response) {},
			  onFailure: function(response) {}
			}).send();
			return $('buffer'); 
		},
		position: 'right', 
		center: true,      
		html: true,
		arrowSize: 11,      
		showDelay : 100
	});
}
/*---------------------------------- End : Tooltip Informations ------------------------------------*/


/*---------------------------------- Day Selection ------------------------------------*/
/*-- Day Selection (Left Click) --*/
function selectDay(obj) {
	obj.focus();
	var idObj = obj.id;
	var classNameCurrent = obj.className;
	var classNameOrigin = obj.getAttribute("name");
	
	var chosen = "no";
	if (classNameCurrent.indexOf("dayNA",0) == -1)
	{
		index1 = idObj.indexOf("|",0);
		index2 = idObj.lastIndexOf("|",idObj.length);
		dateArg = idObj.substring(0, 10);
		peopleArg = idObj.substring(index1 + 1,index2);
		orPeriodArg = idObj.substring(index2 + 1, idObj.length);
		box = 'end|'+peopleArg+'|'+orPeriodArg;
		if (classNameCurrent != classNameOrigin){
			chosen = "yes";
		}
		var className = getClassNameForThisDay(chosen,obj,box);
		if ( className != null ) {
			obj.className = className;
		}
	}
}
/*-- Day Unselection (Right Click) --*/
function unSelectDay(obj) {
	var idObj = obj.id;
	var classNameCurrent = obj.className;
	var classNameOrigin = obj.getAttribute("name");
	if (classNameCurrent.indexOf("dayNA",0) == -1){
		index1 = idObj.indexOf("|",0);
		index2 = idObj.lastIndexOf("|",idObj.length);
		dateArg = idObj.substring(0, 10);
		peopleArg = idObj.substring(index1 + 1,index2);
		orPeriodArg = idObj.substring(index2 + 1, idObj.length);
		obj.className = classNameOrigin;
		//check if modifications option is up
		if($('t5').className != "free" ){
			if (dayArray.hasOwnProperty(idObj)) // test if we modified the cell
			{
				//retrieve origins values (no modification)
				 dayArray[idObj].affectOldValues();
			}
		}else{
			containerSlideOut('end|'+peopleArg+'|'+orPeriodArg);
		}
	}
}
/*-- Use for Day Selection (All Cases/Modification...) --*/
function getClassNameForThisDay( chosen , obj, box ) {
	var current = $(obj).id;
	var classNameCurrent = $(obj).className;
	if ( chosen == "no" || $('t5').className != "free") {
		//check if modifications option is up
		if($('t5').className != "free"){
			var ClassName = "dayChosen";
			if (classNameCurrent=="dayNA"){
				ClassName = "dayNA";
			}
			if (dayArray.hasOwnProperty(current)) // test if we modify the cell before
			{
				// save new values (modification)
				dayArray[current].getModifiedValues();
			}else{
				// save origin and new values (modification)
				dayArray[current] = new dayData(current);
				dayArray[current].init();
			}
			//update with new values (modification) and affect day css
			 ClassName = dayArray[current].affectModifiedValues();
			///////////
		}
		else{//default
			if (infoDayId!= ""){
				idHrOrd = infoDayId.substr(10); 
				//hide details container
				detailContainer = "end"+idHrOrd;
				//if current and old chosen day on the same person
				if (current.indexOf(idHrOrd,7) != -1){
					//disable chosen Day
					disable(infoDayId);
				}else{
					//hide details container
					containerSlideOut(detailContainer);
				}
			}
			infoDayId = current;
			var ClassName = "dayDetail";
			display(obj);/*va chercher les infos associées a ce jour*/
		}
	} else {
		//la classe du debut est sauvée dans l'attribut name
		var ClassName = obj.getAttribute("name");
		containerSlideOut(box);
	}	
	return ClassName;
}
/*---------------------------------- End : Day Selection ------------------------------------*/

/*---------------------------------- Column Selection  ------------------------------------*/
/*-- Column Selection (Left Click on Header Day) --*/
function selectColumn(obj) {
	//check if information option is down
	if ($('t5').className == "highlight"){
		var objID = $(obj).id;
		var allBody = getElementsByName_fix('tbody','tbody');
			for ( var h = 0 ; h < allBody.length ; h++ ) {
				var secondBody = allBody[h];
				if ( secondBody != null ) {
					for ( var i = 0 ; i < secondBody.childNodes.length ; i++ ) {
						var secondRow = secondBody.childNodes[i];
						for ( var j = 0 ; j < secondRow.childNodes.length ; j++ ) {
							var secondCell = secondRow.childNodes[j];
							//gestion des jours
							if ( secondCell.tagName == 'TD' && (secondCell.className.indexOf("day",0) != -1) && (secondCell.id.indexOf(objID,0) != -1)  &&  (secondCell.className.indexOf("dayNA",0) == -1) ) {
								if (dayArray.hasOwnProperty(secondCell.id)) // test if we save the cell before
								{
									// save new values (modification)
									dayArray[secondCell.id].getModifiedValues();
								}else{
									// save origin and new values (modification)
									dayArray[secondCell.id] = new dayData(secondCell.id);
									dayArray[secondCell.id].init();
								}
								//update with new values (modification) and affect day css
								 secondCell.className = dayArray[secondCell.id].affectModifiedValues();
							}
						}
					}
				}
			}
	}
	else{//if Modification Menu is not up, Application make a Zoom on the specific Day
		$('DT_START').value = obj.getAttribute("name");
		$('DT_END').value = obj.getAttribute("name");
		m4valor('oculto','zinicios','1','set');
		filterPage();
	}
}
/*-- Column Unselection (Right Click on Header Day) --*/
function unSelectColumn(obj) {
	//check if modification option is up
	if ($('t5').className == "highlight"){
		var objID = $(obj).id;
		var allBody = getElementsByName_fix('tbody','tbody');
			for ( var h = 0 ; h < allBody.length ; h++ ) {
				var secondBody = allBody[h];
				if ( secondBody != null ) {
					for ( var i = 0 ; i < secondBody.childNodes.length ; i++ ) {
						var secondRow = secondBody.childNodes[i];
						for ( var j = 0 ; j < secondRow.childNodes.length ; j++ ) {
							var secondCell = secondRow.childNodes[j];
							//gestion des jours
							if ( secondCell.tagName == 'TD' && (secondCell.id.indexOf(objID,0) != -1)  && secondCell.className == "dayChosen" && secondCell.className != "dayNA") {
								secondCell.className = secondCell.getAttribute("name");
								if (dayArray.hasOwnProperty(secondCell.id)) // test if we modified the cell yet
								{
									//retrieve origins values (no modification)
									 dayArray[secondCell.id].affectOldValues();
								}
							}
						}
					}
				}
			}
	}
}
/*---------------------------------- End : Column Selection  ------------------------------------*/

/*---------------------------------- Row Selection  ------------------------------------*/
/*-- Row Selection (Left Click Icon) --*/
function selectRow(obj) {
	//check if Modification option is up
	if ($('t5').className == "highlight"){
		var objID = $(obj).id;
		var row = "tr"+objID;
		var elem=document.getElementById(row).getElementsByTagName('TD');
		for(i=0; i < elem.length; i++) {
			var att=elem[i].className;
			if(att==null) {att=" ";}
			if(att.indexOf("day",0) != -1) {
				if ( elem[i].className != 'noColor' && (elem[i].className.indexOf("dayNA",0) == -1) ) {
					if (dayArray.hasOwnProperty(elem[i].id)) // test if we save the cell before
					{
						// save new values (modification)
						dayArray[elem[i].id].getModifiedValues();
					}else{
						// save origin and new values (modification)
						dayArray[elem[i].id] = new dayData(elem[i].id);
						dayArray[elem[i].id].init();
					}
					//update with new values (modification) and affect day css
					 elem[i].className = dayArray[elem[i].id].affectModifiedValues();
				}
			}
		}
	}
}
/*-- Row Unselection (Right Click Icon) --*/
function unSelectRow(obj) {
	//check if Modification option is up
	if ($('t5').className == "highlight"){
		var objID = $(obj).id;
		var row = "tr"+objID;
		var elem=document.getElementById(row).getElementsByTagName('TD');
		for(i=0; i < elem.length; i++) {
			att=elem[i].className;
			if(att==null) {att=" ";}
			if(att.indexOf("day",0) != -1) {
				if ( elem[i].className == 'dayChosen') {
					 elem[i].className = elem[i].getAttribute("name");
					if (dayArray.hasOwnProperty(elem[i].id)) // test if we modified the cell
					{
						//retrieve origins values (no modification)
						 dayArray[elem[i].id].affectOldValues();
					}
				}
			}
		}
	}
}
/*---------------------------------- End : Row Selection  ------------------------------------*/

/*---------------------------------- Validate Days ------------------------------------*/

/*-- Severity Alert Control for Validation (All employees)--*/
function controlAllAlertSeverity() {
	var check = $('controlAllAlertSeverity').checked;
	if (check)
	{
		$('controlAllAlertSeverity').value = "Y";
		for(var peopleDatas in peopleArray){
			if (peopleArray[peopleDatas].id != undefined){
				var tdRow = peopleArray[peopleDatas].tdRow;
				var tdRowCheckBox = peopleArray[peopleDatas].tdRowCheckBox;
				$(tdRowCheckBox).checked = true;
				controlAlertSeverity(peopleArray[peopleDatas]);
			}
	   }
	}else{
		$('controlAllAlertSeverity').value = "N";
		for(var peopleDatas in peopleArray){
			if (peopleArray[peopleDatas].id != undefined){
				var tdRowCss = peopleArray[peopleDatas].tdRowCss;
				var tdRow = peopleArray[peopleDatas].tdRow;
				var tdRowCheckBox = peopleArray[peopleDatas].tdRowCheckBox;
				$(tdRow).className = tdRowCss;
				$(tdRowCheckBox).checked = false;
				peopleArray[peopleDatas].chosen="no";
			}
	   }
	}
}
/*-- Severity Alert Control for Validation --*/
function controlAlertSeverity(obj) {
	var currrentPeople   = obj.id;
	var currentOrd = obj.ordinalPeriod;
	var currentName = obj.lastName + obj.firstName;
	var currentDayAlerts = "";
	var currentControl ="yes";

	var trRow = obj.trRow;
	var tdRow = obj.tdRow;
	var tdRowCheckBox = obj.tdRowCheckBox;
	var tdRowCss = obj.tdRowCss;
	var elem=document.getElementById(trRow).getElementsByTagName('TD');
	for(i=0; i < elem.length; i++) {
		var currentClassname=elem[i].className;
		var currentId = elem[i].id;
		if(currentClassname==null) {currentClassname=" ";}
		indexAlertSeverity = currentClassname.indexOf("AlertSeverity",0);
		if ( indexAlertSeverity != -1 ) {
			//control severity
			indexEnd = currentClassname.indexOf("-",indexAlertSeverity);
			if (indexEnd == -1){indexEnd = currentClassname.length}
			currentAlertSeverity = currentClassname.substring(indexAlertSeverity + 13, indexEnd);
			indexBlockAlert = currentAlertSeverity.indexOf("Block",0);
			if (indexBlockAlert != -1){
				//date information
				adateinfo = new Array(3);
				m4splitdate(currentId.substring(0, 10),adateinfo);
				currentDate = adateinfo[0];
				currentDayAlerts = currentDayAlerts +" "+ currentDate;
				currentControl = "no";
			}
		}
	}
	obj.dayAlerts = currentDayAlerts;
	
	//gestion couleurs rouge/vert
	if (currentControl == "no")
	{
		$(tdRow).className="noColorUnChecked";
		$(tdRowCheckBox).checked = false;
		obj.chosen = "no";
	}else{
		if ($(tdRowCheckBox).checked){
			$(tdRow).className="noColorChecked";
			obj.chosen = "yes";
		}else{
			$(tdRow).className=tdRowCss;
			obj.chosen = "no";
		}
	}
}
/*-- checkBox Management --*/
function hideCheckboxValidation() {
	if ($("controlAllAlertSeverity").style.visibility == "visible"){
		$("controlAllAlertSeverity").hide();
		for(var peopleDatas in peopleArray){
			if (peopleArray[peopleDatas].id != undefined ){
				var tdRowCheckBox = peopleArray[peopleDatas].tdRowCheckBox;
				var tdRowCss = peopleArray[peopleDatas].tdRowCss;
				var tdRow = peopleArray[peopleDatas].tdRow;
				$(tdRow).className = tdRowCss;
				$(tdRowCheckBox).checked = false;
				peopleArray[peopleDatas].chosen="no";
				$(tdRowCheckBox).hide();
			}
	   }
	}
}
/*-- checkBox Management --*/
function showCheckboxValidation() {
	for(var peopleDatas in peopleArray){
		if (peopleArray[peopleDatas].id != undefined ){
			var checkBox = peopleArray[peopleDatas].tdRowCheckBox;
			$(checkBox).show();
			$("controlAllAlertSeverity").show();
		}
   }
}
/*-- Validation Process --*/
function validateDays() {
	//met en place l'ecran de masquage
	showMask();
	//masque le pop-up de confirmation
	dialogBox_hide('dialogBox');

	var validateDatas = new Object();
	var MonTableau = new Array();
	var startDate = $('DT_START').value;
	var endDate =$('DT_END').value;
	for(var peopleDatas in peopleArray){
		if (peopleArray[peopleDatas].id != undefined && peopleArray[peopleDatas].chosen == "yes")
		{
			var idPerson = peopleArray[peopleDatas].id;
			var ordinalPeriod = peopleArray[peopleDatas].ordinalPeriod;
			var idPersonEncrypt = $("td"+idPerson+"|"+ordinalPeriod).getAttribute("name");
			var objet = {
				idPers : idPersonEncrypt,
				ordPeriod : ordinalPeriod
			};
			MonTableau.push(objet);
		}
	}
	validateDatas.startDate = startDate;
	validateDatas.endDate   = endDate;
	validateDatas.liste = MonTableau;
	var dataOnJSON =  JSON.encode(validateDatas);
	var url = "/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_planning_validation.jsp";
	var elementHTML = document.getElementById('infos_VE');

	var jsonRequest = new Request.HTML({
		url: url,
		data: {
			json : dataOnJSON
		},
		onCancel: function(jsonObj) {
		},
		onRequest: function() {
			Site.onRequest();
		},
		onSuccess: function(jsonObj) {
			Site.onComplete();setTimeout('filterPage();',500);
		},
		onFailure: function(xhr) {
			Site.onFailure();
		},
		onException: function(jsonObj) {
			Site.onFailure();
		}			
	});
	jsonRequest.post();
}
/*---------------------------------- End : Validate Days ------------------------------------*/


/*---------------------------------- Total Calculation ------------------------------------*/
/*-- Format Transformation Functions --*/
function decimaltoHM(arg){
	arg = arg.toString();
	indexDecimal = arg.indexOf(".",0);
	if (indexDecimal != -1){
		hours   = arg.substring(0,indexDecimal);
		minutes = arg.substring(indexDecimal + 1,arg.length);
		if (minutes.length == 1)
		{
			minutes = minutes +"0";
		}
		minutesHM = minutes * 60 / 100;
		//minutesHM = Math.round(minutesHM * 100) / 100;
		arg = hours+":"+minutesHM;
	}
	else{
		arg = arg+":00";
	}
	return(arg)
}
/*-- Format Transformation Functions --*/
function HMtoDecimal(arg){
	indexHoursMinute = arg.indexOf(":",0);
	if (indexHoursMinute != -1){
		hours = arg.substring(0,indexHoursMinute);
		minutes = arg.substring(indexHoursMinute + 1, arg.length);
		minutesDecimal = minutes * 100 / 60;
		arg = hours+"."+minutesDecimal;
	}
	return(arg)
}
/*-- Column Total --*/
function calculateColumnTotal(obj) {
	var total = parseFloat(0,10);
	var objID = $(obj).id;
	var totID = objID+"-Total";
	var allBody = getElementsByName_fix('tbody','tbody');
	var firstFormat="first";
	var sameFormatDays="ok";
	for ( var h = 0 ; h < allBody.length ; h++ ) {
		var secondBody = allBody[h];
		if ( secondBody != null ) {
			for ( var i = 0 ; i < secondBody.childNodes.length ; i++ ) {
				var secondRow = secondBody.childNodes[i];
				for ( var j = 0 ; j < secondRow.childNodes.length ; j++ ) {
					var secondCell = secondRow.childNodes[j];
					//gestion des jours
					if ( secondCell.tagName == 'TD' && (secondCell.className.indexOf("day",0) != -1) && (secondCell.id.indexOf(objID,0) != -1)  &&  secondCell.className.indexOf("dayNA",0) == -1) {
						//currentValue = secondCell.innerHTML;
						currentValue = $("value|"+secondCell.id).innerHTML;
						//calculation for Hours/Minutes
						currentIsDayType=$("value|"+secondCell.id).getAttribute("name");//daytype=>hours:0,day:1
						if (firstFormat=="first"){firstFormat=currentIsDayType;}else{if (firstFormat!=currentIsDayType){sameFormatDays="ko";}}
						currentValue = HMtoDecimal(currentValue);
						//calculation for Hours/Minutes
						total = total+parseFloat(currentValue,10);
					}
				}
			}
		}
	}
	
	total = Math.round(total * 100) / 100;

	//calculation for Hours/Minutes
	if (hoursFormat == 1 && sameFormatDays=="ok" && firstFormat==0 )
	{
		total = decimaltoHM(total);
	}
	if (sameFormatDays=="ko")
	{
		total="...";
	}
	//calculation for Hours/Minutes
	
	$(totID).innerHTML = total;
}
/*-- Row Total --*/
function calculateRowTotal(obj) {
	var total = parseFloat(0,10);
	var objID = $(obj).id;
	var totID = objID+"-Total";
	var row = "tr"+objID;
	var elem=document.getElementById(row).getElementsByTagName('TD');
	var firstFormat="first";
	for(i=0; i < elem.length; i++) {
		var att=elem[i].className;
		if(att==null) {att=" ";}
		if(att.indexOf("day",0) != -1) {
			if ( elem[i].className != 'noColor' && elem[i].className != "dayNA") {
				currentValue = $("value|"+elem[i].id).innerHTML;
				//calculation for Hours/Minutes
				currentIsDayType=$("value|"+elem[i].id).getAttribute("name");//daytype=>hours:0,day:1
				if (firstFormat=="first"){firstFormat=currentIsDayType;}
				currentValue = HMtoDecimal(currentValue);
				//calculation for Hours/Minutes
				 total = total+parseFloat(currentValue,10);
			}
		}
	}
	total = Math.round(total * 100) / 100;
	//calculation for Hours/Minutes
	if (hoursFormat == 1 && firstFormat==0)
	{
		total = decimaltoHM(total);
	}
	//calculation for Hours/Minutes
	$(totID).innerHTML = "<div class='totcol'>"+total+"</div>";
}
/*---------------------------------- End : Total Calculation ------------------------------------*/


/*---------------------------------------------------Effects---------------------------------------------------*/
var PulseFade = new Class({
      
  //implements
  Implements: [Options,Events],

  //options
  options: {
    min: 0,
    max: 1,
    duration: 200,
    times: 5
  },
  
  //initialisation
  initialize: function(el,options) {
    //set options
    this.setOptions(options);
    this.element = $(el);
    this.times = 0;
  },
  
  //starts the pulse fade
  start: function(times) {
    if(!times) times = this.options.times * 2;
    this.running = 1;
    this.fireEvent('start').run(times -1);
  },
  
  //stops the pulse fade
  stop: function() {
    this.running = 0;
    this.fireEvent('stop');
  },
  
  //run
  run: function(times) {
    var self = this;
    var to = self.element.get('opacity') == self.options.min ? self.options.max : self.options.min;
    self.fx = new Fx.Tween(self.element,{
      duration: self.options.duration / 2,
      onComplete: function() {
        self.fireEvent('tick');
        if(self.running && times){
          self.run(times-1);
        }
        else{
          self.fireEvent('complete');
        }
      }
    }).start('opacity',to);
  }
});

function pulseFadeDefault(element){
	var pf = new PulseFade(element,{
			min: .50,
			max: 1,
			duration: 400
	 });
	pf.start();
}

function colorDemo(target) { // Animation for menus explanation
	$(target).innerHTML = "<img src=\"/iconos/dayImgChosen.png\"/>";
	 pulseFadeDefault(target);
}

function cacheMenu(tArg,bArg){
	$(bArg).hide();
	$(tArg).className="free";
}

function eraseMenuControl(block,lang){
	
}
/*---------------------------------------------------Effects---------------------------------------------------*/


window.addEvent('domready', function() {
  //Time to implement fancy show / hide (Use for Menus)
  Element.implement({
    //implement show
    show: function() {
      this.fade('in');
    },
    //implement hide
    hide: function() {
      this.fade('out');
    }
  });
});

