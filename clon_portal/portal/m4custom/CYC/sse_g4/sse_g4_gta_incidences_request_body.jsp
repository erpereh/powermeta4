<%
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

	String id_incidence = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_incidence");
	if ((id_incidence==null)){id_incidence="";}

	String id_incidence_date = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_incidence_date");
	if ((id_incidence_date==null)){id_incidence_date="";}
//    id_incidence_date = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request,"incidencePlan", id_incidence_date);

	String thisOrdinalESS = "";
	String incidenceEncripted = "";
	String incidenceEncriptedM4T = "";	

   String zsubsesion = "SSE_HOLYDAYS";
   String zmeta4object = "SSE_HOLYDAYS";
   String znodo = "SSE_REAL_TIME_PRD";
   String znodo2 = "M4T_REAL_TIME_PRD";
   String znodo3 = "SSE_INCIDENCE";
   String ztipocarga = "ALL";
   
   String zventanas = "10";
   int zvuelta = 5;
   String zdireccion = "sse_g4/sse_g4_gta_incidences_request.jsp";
   String zestado = "11";

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zmove = znodo + ":" +znodo + "[FIRST]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String zORDINAL = zcomun + "ORDINAL";
   String zSSEDTSTART = zcomun + "SSE_DT_START";
   String zSSEDTEND = zcomun + "SSE_DT_END";
   String zSCO_UNITS = zcomun + "SCO_UNITS";
   String zSCO_NM_TIME_UNIT = zcomun + "SCO_NM_TIME_UNIT";
   String zNACCION = zcomun + "N_ACCION";
   String zSCONMINCIDENCE1 = zcomun + "SCO_NM_INCIDENCE";

   String zoutputdef2 = zsubsesion + "!" + znodo2 +"[*]";
   String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   
   String zSSEDTSTART2 = zcomun2 + "SCO_DT_START";
   String zSSEDTEND2 = zcomun2 + "SCO_DT_END";
   String zSCO_UNITS2 = zcomun2 + "SCO_UNITS";
   String zSCO_NM_TIME_UNIT2 = zcomun2 + "SCO_NM_TIME_UNIT";
   String zSCOORPARTTIME2 = zcomun2 + "SCO_OR_PART_TIME";
   String zSTD_OR_HR_PERIOD2 = zcomun2 + "STD_OR_HR_PERIOD";
   String zSCONMINCIDENCE2 = zcomun2 + "SCO_NM_INCIDENCE";
   String zSCOIDINCIDENCE2= zcomun2 + "SCO_ID_INCIDENCE";

   String zSCO_END_TIME2= zcomun2 + "SCO_END_TIME";
   String zSCO_ID_TIME_UNIT2= zcomun2 + "SCO_ID_TIME_UNIT";
   String zSCO_START_TIME2= zcomun2 + "SCO_START_TIME";

   String zoutputdef3 = zsubsesion + "!" + znodo3 +"[*]";
   String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   String zSCOIDINCIDENCE = zcomun3 + "SCO_ID_INCIDENCE";
   String zSCONMINCIDENCE = zcomun3 + "SCO_NM_INCIDENCE";
   
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
	    m.setItem(zsubsesion,"SSE_REAL_TIME_PRD","","SCO_GTA_USER_TYPE","ESS");
	    m.setItem(zsubsesion,"SSE_INCIDENCE","","SCO_GTA_TP_ACTION_FROM_ESS_MSS","ESS");
		} catch(Exception e) {}
%>



<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>

<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove3%>"/></m4:move>
<m4:item outputdef="<%=znodo3%>" item="SCO_IND_CFWD" m4varname="sIndCfwd"/>
<m4:item outputdef="<%=znodo%>" item="SCO_GTA_MASSIVE_ERROR_MESSAGE" m4varname="massiveErrorReturned"/>
<m4:item outputdef="<%=znodo%>" item="SCO_GTA_MASSIVE_TP_ERROR" m4varname="massiveTpErrorReturned"/>
<m4:item outputdef="<%=znodo%>" item="SSE_EMPLOYEE_HIRE_DATE" m4varname="employeeHireDate"/>

<%
	int  zcount  = 0;
	int  zcounti  = 0;
	int  zcount2  = 0;
	int  zcount3  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
	    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);

	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountv2 = String.valueOf(zcount2);
	String	zcountv3 = String.valueOf(zcount3);
	
%>

<script type="text/javascript">
function comprobar(){
var error = 0;
var texto = m4getmessage("_gta_16");
var dtstart = m4valor("NombreFormulario","SCO_DT_START","","get");
var dtstartok = m4fechacomprobacion(m4objeto('SCO_DT_START','NombreFormulario'),"");
var dtend = m4valor("NombreFormulario","SCO_DT_END","","get");
var dtEmployeeHire = m4valor("NombreFormulario","employeeHireDate","","get");

var dtendok = m4fechacomprobacion(m4objeto('SCO_DT_END','NombreFormulario'),"");
var fechasok = m4compfechas(m4objeto('SCO_DT_START','NombreFormulario'),'<=',m4objeto('SCO_DT_END','NombreFormulario'));
var fechaInicioOk = m4compfechas(m4objeto('employeeHireDate','NombreFormulario'),'<=',m4objeto('SCO_DT_START','NombreFormulario'));

var numHours = m4valor("NombreFormulario","NUM_HOURS","","get");
var numMinutes = m4valor("NombreFormulario","NUM_MINUTES","","get");

 if (document.getElementById('SCO_ID_INCIDENCE').value==""){
	texto = texto + m4getmessage("_gta_17");
	error = 1;
}

if( isNaN(numHours) ) {
	texto = texto + m4getmessage("_gta_18");
	error = 1;
}

if( isNaN(numMinutes) ) {
	texto = texto + m4getmessage("_gta_19");
	error = 1;
}

if ((numHours < 0) || (numHours >12)){
	texto = texto + m4getmessage("_gta_20");
	error = 1;
	}

if ((numMinutes < 0) || (numMinutes >59)){
	texto = texto + m4getmessage("_gta_21");
	error = 1;
	}

if (document.getElementById('MANAGE_IN_HOURS').checked==true)
	{
		if ((numHours == 0) && (numMinutes == 0)){
			texto = texto + m4getmessage("_gta_32");
			error = 1;
			}
	}

if (dtstart == null || dtstart == ""){
	texto = texto + m4getmessage("_gta_22");
	error = 1;
	}

if ((dtstart != null && dtstart != "") && (dtstartok == "")){
	texto = texto + m4getmessage("_gta_23") + '<%=zsgcoParamDate%>';
	error = 1;
	}
if (dtend == null || dtend == ""){
	texto = texto + m4getmessage("_gta_24");
	error = 1;
	}

if ((dtend != null && dtend != "") && (dtendok == "")){
	texto = texto + m4getmessage("_gta_25") + '<%=zsgcoParamDate%>';
	error = 1;
	}
if ((dtstart != null && dtstart != "") && (dtstartok != "") && (dtend != null && dtend != "") && (dtendok != "") && (fechasok == false)){
	texto = texto + m4getmessage("_gta_26");
	error = 1;
	}
if (fechaInicioOk == false){
	texto = texto + m4getmessage("_gta_31") + " " + dtEmployeeHire;
	error = 1;
	}

if (error == 1){
	alert(texto);
	return;}
else {
	m4submit("NombreFormulario") ;
}
}
function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSE_HOLYDAYS",ord,"BORRAR","SSE_REAL_TIME_PRD");

m4navegar('sse_generico/generico_actualizar_incidences_encripted.jsp',parametros,valores);
}
function changeStartDate()
{
//	if (document.getElementById('MANAGE_IN_HOURS').checked==true)
//	{
		document.getElementById('SCO_DT_END').value = document.getElementById('SCO_DT_START').value
//	}
}

function calculateHoursMinutes()
{
	var startTime = m4valor("NombreFormulario","START_TIME","","get");
	var endTime = m4valor("NombreFormulario","END_TIME","","get");
	if ((startTime=="")||(endTime==""))
			return;

	separatorStart = startTime.indexOf(':')
	startHours = startTime.substring(0,separatorStart)
	startMinutes = startTime.substring(separatorStart + 1,startTime.length)

	separatorEnd = endTime.indexOf(':')
	endHours = endTime.substring(0,separatorEnd)
	endMinutes = endTime.substring(separatorEnd + 1,endTime.length)

	firstStringStartHours = startHours.substring(0,1)
	firstStringStartMinutes = startMinutes.substring(0,1)
	firstStringEndHours = endHours.substring(0,1)
	firstStringEndMinutes = endMinutes.substring(0,1)

	if (firstStringStartHours=="0")
		startHours = startHours.substring(1,startHours.length)

	if (firstStringStartMinutes=="0")
		startMinutes = startMinutes.substring(1,startMinutes.length)

	if (firstStringEndHours=="0")
		endHours = endHours.substring(1,endHours.length)

	if (firstStringEndMinutes=="0")
		endMinutes = endMinutes.substring(1,endMinutes.length)

	startHours = parseInt(startHours)
	startMinutes = parseInt(startMinutes)
	endHours = parseInt(endHours)
	endMinutes = parseInt(endMinutes)

if (endHours != startHours)
{

	// En caso lo primero que vamos a comprobar es que la hora de fin sea mayor que la hora de inicio
	if (endHours<startHours)
	{
		var texto = m4getmessage("_gta_39");
		alert(texto)
		document.getElementById('END_TIME').value = ""
		document.getElementById('NUM_HOURS').value = ""
		document.getElementById('NUM_MINUTES').value = ""
		return;
	}

	minutesToCompleteStart = 0
	if (startMinutes > 0)
	{
		minutesToCompleteStart = 60 - startMinutes;
		startHours = startHours + 1;
	}

	if (startHours > endHours)
		totalHours = (24 - startHours) + endHours;

	else
		totalHours = endHours - startHours;


	totalMinutes = minutesToCompleteStart + endMinutes
	if (totalMinutes>=60)
	{
		totalMinutes = totalMinutes - 60
		totalHours = totalHours + 1
	}			
}
else
{
	// En caso de que la hora sea la misma, vamos a comprobar que los minutos de la hora de fin sean menores que los minutos de la hora se inicio
	if (endMinutes<=startMinutes)
	{
		var texto = m4getmessage("_gta_39");
		alert(texto)
		document.getElementById('END_TIME').value = ""
		document.getElementById('NUM_HOURS').value = ""
		document.getElementById('NUM_MINUTES').value = ""
		return;
	}

	totalHours = 0;
	totalMinutes = endMinutes - startMinutes
}
	document.getElementById('NUM_HOURS').value = totalHours;
	document.getElementById('NUM_MINUTES').value = totalMinutes;
}

function checkIfHoursValid(field_to_check)
{
	if (field_to_check == 'START_TIME')
	{
		document.getElementById('END_TIME').value = ""
		document.getElementById('NUM_HOURS').value = ""
		document.getElementById('NUM_MINUTES').value = ""
	}
	var hour_start = document.getElementById(field_to_check).value;

	if (hour_start!="")
	{	separator = hour_start.indexOf(':')
		set_error = "N"
		if (separator<1)
			set_error="Y"
		else
		{
			this_hours = hour_start.substring(0,separator)
			this_minutes = hour_start.substring(separator + 1,hour_start.length)

			if ((this_hours.length>2) || (this_hours.length<1))
				set_error="Y"
			if (this_minutes.length!=2)
				set_error="Y"
			if(isNaN(this_hours) )
				set_error="Y"
			if(isNaN(this_minutes) )
				set_error="Y"
			if ((this_hours<0) || (this_hours>23)) 
				set_error="Y"
			if ((this_minutes<0) || (this_minutes>59)) 
				set_error="Y"
		}

		if(set_error=="Y") {
			document.getElementById(field_to_check).value = ""
			var texto = m4getmessage("_gta_28");
			alert(texto)}
		else
			calculateHoursMinutes()
	}
}

function changeEndDate()
{
	if (document.getElementById('SCO_DT_START').value==""){
		var texto = m4getmessage("_gta_29");
		alert(texto)
		document.getElementById('SCO_DT_END').value==""
		return;}
}

function HoursChecked()
{

//	if (document.getElementById('MANAGE_IN_HOURS').disabled == true)
if (document.getElementById('MANAGE_IN_PERIOD').disabled == true)
	{
		document.getElementById('MANAGE_IN_HOURS').checked=true
		return;
	}

	if (document.getElementById('MANAGE_IN_HOURS').checked==true)
	{
		document.getElementById('MANAGE_IN_HOURS').checked=true;
		document.getElementById('MANAGE_IN_PERIOD').checked=false;
		document.getElementById('SCO_DT_END').value = document.getElementById('SCO_DT_START').value
		document.getElementById('SCO_DT_END').disabled = true;
		document.getElementById('SCO_DT_END_IMG').className = "invisible2";
		document.getElementById('TIME_INCIDENCE').className = "";
	}
	else
	{
		document.getElementById('MANAGE_IN_HOURS').checked=false;
		document.getElementById('MANAGE_IN_PERIOD').checked=true;
		document.getElementById('SCO_DT_END').disabled = false;
		document.getElementById('SCO_DT_END_IMG').className = "";
		document.getElementById('TIME_INCIDENCE').className = "invisible2";
	}
	
}

function DaysChecked()
{

//	if (document.getElementById('MANAGE_IN_PERIOD').disabled == true)
if (document.getElementById('MANAGE_IN_HOURS').disabled == true)
	{
		document.getElementById('MANAGE_IN_PERIOD').checked=true
		return;
	}

	if (document.getElementById('MANAGE_IN_PERIOD').checked==true)
	{
		document.getElementById('MANAGE_IN_HOURS').checked=false;
		document.getElementById('MANAGE_IN_PERIOD').checked=true;
		document.getElementById('SCO_DT_END').disabled = false;
		document.getElementById('SCO_DT_END_IMG').className = "";
		document.getElementById('TIME_INCIDENCE').className = "invisible2";

	}
	else
	{
		document.getElementById('MANAGE_IN_HOURS').checked=true;
		document.getElementById('MANAGE_IN_PERIOD').checked=false;
		document.getElementById('SCO_DT_END').value = document.getElementById('SCO_DT_START').value
		document.getElementById('SCO_DT_END').disabled = true;
		document.getElementById('SCO_DT_END_IMG').className = "invisible2";
		document.getElementById('TIME_INCIDENCE').className = "";
	}
}

function changeEntitlementDetails(ai_oIncidence){

	var valueSelected = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('value');
	var tpPeriodManagement = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('GTAHoursOrPeriod')
	var incidenceNeedsBolsa = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('GTANeedsBolsa');

		if (valueSelected=="")
		{
			var texto = m4getmessage("_gta_17");
			alert(texto)

			document.getElementById('SCO_DT_START').value= ""
			document.getElementById('SCO_DT_START').disabled= true
			document.getElementById('SCO_DT_START_IMG').className = "invisible2"
			document.getElementById('MANAGE_IN_HOURS').disabled= true
			document.getElementById('MANAGE_IN_PERIOD').disabled= true
			document.getElementById('MANAGE_IN_HOURS').checked= false
			document.getElementById('MANAGE_IN_PERIOD').checked= false
			document.getElementById('TIME_INCIDENCE').className = "invisible2"
			document.getElementById('SCO_DT_END').value= ""
			document.getElementById('SCO_DT_END').disabled= true
			document.getElementById('SCO_DT_END_IMG').className = "invisible2"
			return;
		}

		if (tpPeriodManagement=="") 
			tpPeriodManagement = "DAYS";


		document.getElementById('TP_PERIOD_ALLOWED').value= tpPeriodManagement;
		document.getElementById('SCO_DT_START').value= ""
		document.getElementById('SCO_DT_END').value= ""
		document.getElementById('START_TIME').value= ""
		document.getElementById('END_TIME').value= ""
		document.getElementById('NUM_HOURS').value= ""
		document.getElementById('NUM_MINUTES').value= ""

		if (tpPeriodManagement == "DAYS")
		{
			document.getElementById('MANAGE_IN_PERIOD').disabled = false;
//			document.getElementById('MANAGE_IN_PERIOD').disabled = true;	// Es la única que estará disponible, chequeada pero no acesible
			document.getElementById('MANAGE_IN_HOURS').disabled = true;
			document.getElementById('MANAGE_IN_PERIOD').checked = true;
			document.getElementById('MANAGE_IN_HOURS').checked = false;
			document.getElementById('TIME_INCIDENCE').className = "invisible2"

			document.getElementById('SCO_DT_START').disabled= false
			document.getElementById('SCO_DT_START_IMG').className = ""
			document.getElementById('SCO_DT_END').disabled= false
			document.getElementById('SCO_DT_END_IMG').className = ""
		}

		if (tpPeriodManagement == "HOURS")
		{
			document.getElementById('MANAGE_IN_PERIOD').disabled = true;
//			document.getElementById('MANAGE_IN_HOURS').disabled = true;	// Es la única que estará disponible, chequeada pero no acesible
			document.getElementById('MANAGE_IN_HOURS').disabled = false;

			document.getElementById('MANAGE_IN_PERIOD').checked = false;
			document.getElementById('MANAGE_IN_HOURS').checked = true;
			document.getElementById('TIME_INCIDENCE').className = "";

			document.getElementById('SCO_DT_START').disabled= false
			document.getElementById('SCO_DT_START_IMG').className = ""
			document.getElementById('SCO_DT_END').disabled= true
			document.getElementById('SCO_DT_END_IMG').className = "invisible2"
		}

		if (tpPeriodManagement == "BOTH")
		{
			document.getElementById('MANAGE_IN_PERIOD').disabled = false;
			document.getElementById('MANAGE_IN_HOURS').disabled = false;
			document.getElementById('MANAGE_IN_PERIOD').checked = true;
			document.getElementById('MANAGE_IN_HOURS').checked = false;
			document.getElementById('TIME_INCIDENCE').className = "invisible2"

			document.getElementById('SCO_DT_START').disabled= false;
			document.getElementById('SCO_DT_START_IMG').className = "";
			document.getElementById('SCO_DT_END').disabled= false;
			document.getElementById('SCO_DT_END_IMG').className = "";
		}

		if (incidenceNeedsBolsa=="Y"){
			oNumEntitlement = document.getElementById('SCO_NUM_ENTITLEMENT'),
			oEntitlementN1 = document.getElementById('SCO_ENTITLEMENT_N1'),
			oNumEntitlementN1 = document.getElementById('SCO_NUM_ENTITLEMENT_N1'),
			oNumRemaining = document.getElementById('SCO_NUM_REMAINING'),
			oNumPending = document.getElementById('SCO_NUM_PENDING'),
			oNumPendingTheoretical = document.getElementById('SCO_NUM_REMAINING_THEORETICAL'),
			sEntitlement = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('m4Entitlement') || '',
			sEntitlementN1 = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('m4EntitlementN1') || '',
			sRemaining = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('m4Remaining') || '',
			sPending = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('m4Pending') || '',
			sPendingTheoretical = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('m4RemainingTheoretical') || '',
			sIndCfwd = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('m4IndCfwd') || '',
			sUnit = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('m4Unit') || '';
	
			document.getElementById('incidenceNeedsBolsa').className = ""
			if(oNumEntitlement){oNumEntitlement.innerHTML = sEntitlement;}
			if(oNumEntitlementN1){oNumEntitlementN1.innerHTML = sEntitlementN1;}
			if(oNumRemaining){oNumRemaining.innerHTML = sRemaining;}
			if(oNumPending){oNumPending.innerHTML = sPending;}
			if(oNumPendingTheoretical){oNumPendingTheoretical.innerHTML = sPendingTheoretical;}
			if(sIndCfwd === '1'){
				oEntitlementN1.style.display = '';
			}else{
				oEntitlementN1.style.display = 'none';
			}
		}

	if (incidenceNeedsBolsa=="N")
		document.getElementById('incidenceNeedsBolsa').className = "invisible2"

}
</script>

<table width="100%" cellspacing="0">
<tr>
	<td class="titulofuncional" colspan="2"><%=Tran.getProperty("GTA_2")%></td>
	
</tr>
<tr>
	<td><img src="/iconos/noname_vacaciones_55_100.gif" width="100" height="100" alt="Vacaciones"></td>
	<td><div class="descripcionfuncional"><%=Tran.getProperty("GTA_40")%>
		<a class="enlacefuncional" tabindex="1" title="<%=Tran.getProperty("GTA_41")%>" 
	href=""
	onclick="window.open('/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2_2.jsp?estado=41','Vis','width=800;height=300,resizable,scrollbars');return false;";
	
	>
	<%=Tran.getProperty("GTA_42")%></a>
	</div>
		<ul class="listaenlace"><li><a class="enlacefuncional" tabindex="1" title="Ir a calendario de festivos" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p3.jsp?estado=41"><%=Tran.getProperty("GTA_43")%></a></li></ul>
	</td>	
</tr>
</table>


<%if (massiveTpErrorReturned.equals("N")) {%>

<!--
Mejora 238144
	<table width="100%" cellspacing="0">
		<tr>
			<td width="70%">&nbsp;</td>
			<td width="30%" class="descripcionfuncional">&nbsp;<a href="javascript:collapseMessageSection.slideit()"><img src="/iconos/ic_ord_15_15.gif" alt="<%=Tran.getProperty("GTA_4")%>" title="<%=Tran.getProperty("GTA_4")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />&nbsp;<%=Tran.getProperty("GTA_4")%></a></td>
		</tr>
	</table>

	<div id="MessageSection" name="MessageSection">

		<script type="text/javascript">
			document.getElementById('MessageSection').className="";
			var collapseMessageSection=new animatedcollapse('MessageSection', 800,1);
		</script>

		<table width="100%" cellspacing="0">
		<tr>
			<td width="10%">&nbsp;</td>
			<td><img src="/iconos/exito.gif" alt="<%=Tran.getProperty("GTA_5")%>"></td>
			<td><div class="descripcionfuncionalVerde"><br/><br/><br/><%=massiveErrorReturned%></div><br/><br/>
			</td>	
		</tr>
		</table>
	</div>
	<table width="100%" cellspacing="0"><tr><td>&nbsp;</td></tr></table>
-->

<%}
if (massiveTpErrorReturned.equals("Y")) {%>
<!--
Mejora 238144
	<table width="100%" cellspacing="0">
		<tr>
			<td width="70%">&nbsp;</td>
			<td width="30%" class="descripcionfuncional">&nbsp;<a href="javascript:collapseMessageSection.slideit()"><img src="/iconos/ic_ord_15_15.gif" alt="<%=Tran.getProperty("GTA_4")%>" title="<%=Tran.getProperty("GTA_4")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />&nbsp;<%=Tran.getProperty("GTA_4")%></a></td>
		</tr>
	</table>

	<div id="MessageSection" name="MessageSection">

		<script type="text/javascript">
			document.getElementById('MessageSection').className="";
			var collapseMessageSection=new animatedcollapse('MessageSection', 800,1);
		</script>

		<table width="100%" cellspacing="0">
			<tr>
				<td width="10%">&nbsp;</td>
				<td><img src="/iconos/admiracion_grandeazul.gif" alt="<%=Tran.getProperty("GTA_6")%>"></td>
				<td><div class="descripcionfuncionalRojo"><br/><br/><br/><%=massiveErrorReturned%></div><br/><br/>
				</td>	
			</tr>
		</table>
	</div>
	<table width="100%" cellspacing="0"><tr><td>&nbsp;</td></tr></table>
-->
<%}%>

<div id="IncidenceInfo" name="IncidenceInfo">

	<table width="100%" class="tablaestados" cellspacing="0">
		<tr><td>&nbsp;</td></tr>
	</table>

	<table width="100%" class="tablaestados" cellspacing="0">
		<tr><td class="titulofuncional">&nbsp;<B><%=Tran.getProperty("GTA_44")%></B></td></tr>
	</table>


	<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_incidences_encripted.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="javascript:comprobar();">
		<input type="hidden" id="TAG" name="TAG" value="SSE_HOLYDAYS" />
		<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
		<input type="hidden" id="NOD" name="NOD" value="SSE_REAL_TIME_PRD" />

		<input type="hidden" id="SCO_UNITS" name="SCO_UNITS" value="" />
		<input type="hidden" id="STD_OR_HR_PERIOD" name="STD_OR_HR_PERIOD" value="" />
		<input type="hidden" id="SCO_OR_PART_TIME" name="SCO_OR_PART_TIME" value="" />

		<input type="hidden" id="SET_OF_EMPLOYEES_SELECTED" name="SET_OF_EMPLOYEES_SELECTED" value="" />

		<input type="hidden" id="employeeHireDate" name="employeeHireDate" value="<%=employeeHireDate%>" />

		<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
			<tr><td WIDTH="1%">&nbsp;</td>
				<td colspan="2" class = "tablaestadosceldatitulo"><%=Tran.getProperty("GTA_17")%></td>
			</tr>
			<tr><td WIDTH="1%">&nbsp;</td>
				<input type="hidden" id="TP_PERIOD_ALLOWED" name ="TP_PERIOD_ALLOWED">

				<td class="fuentecampo"><br/>&nbsp;<%=Tran.getProperty("GTA_18")%>
					<select id="SCO_ID_INCIDENCE" class="fuenteformulario350" name="SCO_ID_INCIDENCE" title="<%=Tran.getProperty("GTA_45")%>" onchange="javascript:changeEntitlementDetails(this);">
					<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
											
						<m4:item item="SCO_ID_INCIDENCE" record="<%=m4lix%>" var="incidenceEncripted" htmlsafe="true" outputdef="<%=znodo3%>"/>
						<%
							if ((incidenceEncripted==null)){incidenceEncripted="";}
							if (!incidenceEncripted.equals("")) {
						    incidenceEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request,"incidencePlan", incidenceEncripted);
							  }
						%>
						<option value="<%=incidenceEncripted%>"						
	                        m4Entitlement="<m4:item item="SCO_NUM_ENTITLEMENT" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
					        m4EntitlementN1="<m4:item item="SCO_NUM_ENTITLEMENT_N1" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
			                m4Remaining="<m4:item item="SCO_NUM_REMAINING" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
			                m4Pending="<m4:item item="SCO_NUM_PENDING" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
			                m4RemainingTheoretical="<m4:item item="SCO_NUM_REMAINING_THEORETICAL" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
			                m4IndCfwd="<m4:item item="SCO_IND_CFWD" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
			                m4Unit="<m4:item item="SCO_NM_UNIT" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
			                GTAHoursOrPeriod="<m4:item item="SCO_DAYS_OR_HOURS" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
			                GTANeedsBolsa="<m4:item item="SCO_GTA_NEEDS_BOLSA" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
			                >&nbsp;<m4:item m4name="<%=zSCONMINCIDENCE%>" htmlsafe="true"/>
						</option>
					</m4:loop>
					</select>
				</td>
				<td class="fuentecampo">&nbsp;
					<div id="incidenceNeedsBolsa" name="incidenceNeedsBolsa" class="invisible2">
						<table>
							<tr>
								<td class="fuentecampo">&nbsp;<m4:label get="item" item="SCO_LBL_ENTITLEMENT_DETAILS" outputdef="<%=znodo3%>"/>&nbsp;</td>
								<td class="fuentevalor"><span id="SCO_NUM_ENTITLEMENT" class="fuentevalornegrita"><m4:item item="SCO_NUM_ENTITLEMENT" record="0" 		htmlsafe="true" outputdef="<%=znodo3%>"/></span>&nbsp;<m4:label get="item" item="SCO_NUM_ENTITLEMENT" outputdef="<%=znodo3%>"/><span 	id="SCO_ENTITLEMENT_N1" <%if(!sIndCfwd.equals("1")){%> style='display:none'<%;}%>>,&nbsp;<span id="SCO_NUM_ENTITLEMENT_N1" 		class="fuentevalornegrita"><m4:item item="SCO_NUM_ENTITLEMENT_N1" record="0" htmlsafe="true" outputdef="<%=znodo3%>"/></span>&nbsp;<m4:label get="item" item="SCO_NUM_ENTITLEMENT_N1" outputdef="<%=znodo3%>"/></span></td>
							</tr>
							<tr>
								<td class="fuentecampo">&nbsp;<m4:label get="item" item="SCO_NUM_REMAINING" outputdef="<%=znodo3%>"/>&nbsp;</td>
								<td class="fuentevalor fuentevalornegrita"><span id="SCO_NUM_REMAINING"><m4:item item="SCO_NUM_REMAINING" record="0" htmlsafe="true" 	outputdef="<%=znodo3%>"/></span></td>
							</tr>
							<tr>
								<td class="fuentecampo">&nbsp;<m4:label get="item" item="SCO_NUM_PENDING" outputdef="<%=znodo3%>"/>&nbsp;</td>
								<td class="fuentevalor"><span id="SCO_NUM_PENDING"><m4:item item="SCO_NUM_PENDING" record="0" htmlsafe="true" 	outputdef="<%=znodo3%>"/></span></td>
							</tr>
							<tr>
								<td class="fuentecampo">&nbsp;<m4:label get="item" item="SCO_NUM_REMAINING_THEORETICAL" outputdef="<%=znodo3%>"/>&nbsp;</td>
								<td class="fuentevalor"><span id="SCO_NUM_REMAINING_THEORETICAL"><m4:item item="SCO_NUM_REMAINING_THEORETICAL" record="0" htmlsafe="true" outputdef="<%=znodo3%>"/></span></td>
							</tr>
						</table>
					</div>
					<br/>
				</td>
			</tr>
			<tr><td WIDTH="1%">&nbsp;</td><td colspan="2" class = "fuentecampo">&nbsp;</td></tr>
		</table>

		<table class = "tablaestados" width="100%" cellspacing="0" border="0">
			<tr><td WIDTH="1%">&nbsp;</td>
				<td colspan="5" class = "tablaestadosceldatitulo"><%=Tran.getProperty("GTA_19")%></td>
			</tr>
			<tr><td WIDTH="1%">&nbsp;</td>
				<td class="fuentecampo" colspan="2">*&nbsp;<%=Tran.getProperty("GTA_20")%>
					<input disabled onchange="changeStartDate()" class="fuenteformulario" type="text" name="SCO_DT_START" id="SCO_DT_START" title="<%=Tran.getProperty("GTA_21")%>" maxlength="10" size="10" tabindex="1"/>&nbsp;
					<a href="javascript:m4calendario(m4objeto('SCO_DT_START','NombreFormulario'));changeStartDate()" title="<%=Tran.getProperty("GTA_21")%>"tabindex="2"><img class="invisible2" name="SCO_DT_START_IMG" id="SCO_DT_START_IMG" src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("GTA_21")%>" /></a>
				</td>
			</tr>

			<tr><td WIDTH="1%">&nbsp;</td>
				<td class="fuentevalor" colspan="2">
					<span class="fuentevalornegrita">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;<%=Tran.getProperty("GTA_22")%></span><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input onclick="DaysChecked()" type="checkbox" disabled name="MANAGE_IN_PERIOD" id="MANAGE_IN_PERIOD" title="<%=Tran.getProperty("GTA_23")%>" tabindex="2" /></a><span class="fuentevalornegrita"><%=Tran.getProperty("GTA_24")%><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<input onclick="HoursChecked()" disabled type="checkbox" name="MANAGE_IN_HOURS" id="MANAGE_IN_HOURS" title="<%=Tran.getProperty("GTA_25")%>" tabindex="3" /></a><%=Tran.getProperty("GTA_26")%><br/>

						<div id="TIME_INCIDENCE" name="TIME_INCIDENCE" class="invisible2">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<B><%=Tran.getProperty("GTA_27")%>&nbsp;<input class="fuenteformulario" type="text" onchange="checkIfHoursValid('START_TIME')" onblur="checkIfHoursValid('START_TIME')" name="START_TIME" id="START_TIME" title="<%=Tran.getProperty("GTA_28")%>" maxlength="5" size="5" tabindex="4" />&nbsp;<%=Tran.getProperty("GTA_29")%>&nbsp;</B><input class="fuenteformulario" type="text" onchange="checkIfHoursValid('END_TIME')" onblur="checkIfHoursValid('END_TIME')" name="END_TIME" id="END_TIME" title="<%=Tran.getProperty("GTA_30")%>" maxlength="5" size="5" tabindex="5"/>. <%=Tran.getProperty("GTA_31")%>,&nbsp;<input class="fuenteformulario" type="text" name="NUM_HOURS" id="NUM_HOURS" title="<%=Tran.getProperty("GTA_32")%>" maxlength="2" size="2" tabindex="6" />&nbsp;<%=Tran.getProperty("GTA_33")%>&nbsp;<input class="fuenteformulario" type="text" name="NUM_MINUTES" id="NUM_MINUTES" title="<%=Tran.getProperty("GTA_34")%>" maxlength="2" size="2" tabindex="7" />&nbsp;<%=Tran.getProperty("GTA_35")%></b>
						</div>
					<span>
				</td>
			</tr>
			<tr><td WIDTH="1%">&nbsp;</td>
				<td class="fuentecampo" colspan="2"  colspan="2">*&nbsp;<%=Tran.getProperty("GTA_36")%>
					<input disabled onchange = "changeEndDate()" class="fuenteformulario" type="text" name="SCO_DT_END" id="SCO_DT_END" title="<%=Tran.getProperty("GTA_37")%>" maxlength="10" size="10" tabindex="3"/>&nbsp;
					<a tabindex="4" href="javascript:m4calendario(m4objeto('SCO_DT_END','NombreFormulario'));changeEndDate()" title="<%=Tran.getProperty("GTA_37")%>"><img class="invisible2" name="SCO_DT_END_IMG" id="SCO_DT_END_IMG" src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("GTA_37")%>" /></a>
				</td>
			</tr>
			<tr><td WIDTH="1%">&nbsp;</td>
				<td class="fuenteboton" colspan="2">&nbsp;
					<a title="<%=Tran.getProperty("GTA_46")%>"href="javascript:comprobar();" tabindex="5"><img alt="<%=Tran.getProperty("GTA_46")%>"border="0" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
				</td>
			</tr>
		</table>
	</form>


	<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_incidences_encripted.jsp" method="post" name="AnularPetición" id="AnularPetición" onsubmit="javascript:comprobar();">
		<input type="hidden" id="TAG" name="TAG" value="SSE_HOLYDAYS" />
		<input type="hidden" id="ACC" name="ACC" value="ANULAR" />
		<input type="hidden" id="NOD" name="NOD" value="SSE_REAL_TIME_PRD" />

		<input type="hidden" id="SCO_UNITS" name="SCO_UNITS" value="" />
		<input type="hidden" id="STD_OR_HR_PERIOD" name="STD_OR_HR_PERIOD" value="" />
		<input type="hidden" id="SCO_OR_PART_TIME" name="SCO_OR_PART_TIME" value="" />
		<input type="hidden" id="SCO_ID_INCIDENCE" name="SCO_ID_INCIDENCE" value="" />
		<input type="hidden" id="SCO_DT_START" name="SCO_DT_START" value="" />
		<input type="hidden" id="SCO_DT_END" name="SCO_DT_END" value="" />
		<input type="hidden" id="END_TIME" name="END_TIME" value="" />
		<input type="hidden" id="START_TIME" name="START_TIME" value="" />
		<input type="hidden" id="SCO_ID_TIME_UNIT" name="SCO_ID_TIME_UNIT" value="" />
	</form>

		<% 
			if ((zcount > 0)||(zcount2>0)) {
				String zposicions = "0";
				int zcontrol = 0;
				int zposicion =0;
		%>

	<table width="100%" class="tablaestados" cellspacing="0">
		<tr><td class="titulofuncional">&nbsp;<B> <%=Tran.getProperty("GTA_47")%></B></td></tr>
	</table>

	<div id="IncidencesForOneEmployee" name = id="IncidencesForOneEmployee">

		<br/>
		<table class = "tablaestados" width="100%" cellspacing="0">
			<tr><td width="1">&nbsp;</td>
				<td class="tablaestadosceldatitulo">&nbsp;<%=Tran.getProperty("GTA_18")%></td>
				<td class="tablaestadosceldatitulo">&nbsp;<%=Tran.getProperty("GTA_48")%></td>
				<td class="tablaestadosceldatitulo">&nbsp;<%=Tran.getProperty("GTA_49")%></td>
				<td class="tablaestadosceldatitulo" >&nbsp;<%=Tran.getProperty("GTA_50")%></td>
				<td class="tablaestadosceldatitulo" >&nbsp;<%=Tran.getProperty("GTA_51")%></td>
				<td class="tablaestadosceldatitulo" >&nbsp;<%=Tran.getProperty("GTA_52")%></td>
			</tr>
			<m4:loop from="0" to="<%=new Integer(new Integer(zcounti).intValue()-1).toString()%>">
				<%zposicions = m4lix;
				zposicion = Integer.valueOf(zposicions).intValue();
			 	zcontrol = zposicion%2;%>
				<m4:item item="ORDINAL" record="<%=m4lix%>" var="thisOrdinalESS" htmlsafe="true" outputdef="<%=znodo%>"/>

				<%
					if ((thisOrdinalESS==null)){thisOrdinalESS="";}
					if (!thisOrdinalESS.equals("")) {
					thisOrdinalESS = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request,"incidencePlan", thisOrdinalESS);
					}
				%>

				<%if (zcontrol==0){%>
					<tr>
						<td width="1">&nbsp;</td>
						<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCONMINCIDENCE1%>" htmlsafe="true"/></td>
						<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSSEDTSTART%>" htmlsafe="true"/></td>
						<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSSEDTEND%>" htmlsafe="true"/></td>
						<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_UNITS%>" htmlsafe="true"/>&nbsp;(<m4:item m4name="<%=zSCO_NM_TIME_UNIT%>" htmlsafe="true"/>)</td>
						<td class="fuentecampoaccion">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
						<td class="fuentevalor">
							<a title="<%=Tran.getProperty("GTA_53")%>"href="javascript:pendientes('<%=thisOrdinalESS%>');">
								<img class="tablamenuright" alt="<%=Tran.getProperty("GTA_53")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  />
							</a>
						</td>
					</tr>
				<%}else{%>
					<tr>
						<td width="1">&nbsp;</td>
						<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSCONMINCIDENCE1%>" htmlsafe="true"/></td>
						<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSSEDTSTART%>" htmlsafe="true"/></td>
						<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSSEDTEND%>" htmlsafe="true"/></td>
						<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCO_UNITS%>" htmlsafe="true"/>&nbsp;(<m4:item m4name="<%=zSCO_NM_TIME_UNIT%>" 	htmlsafe="true"/>)</td>
						<td class="fuentecampoaccion2">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
						<td class="fuentevalor2">
							<a title="<%=Tran.getProperty("GTA_53")%>"href="javascript:pendientes('<%=thisOrdinalESS%>');">
								<img class="tablamenuright" alt="<%=Tran.getProperty("GTA_53")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  />
							</a>
						</td>
					</tr>
				 <%}%>
			</m4:loop>

			<m4:loop from="0" to="<%=new Integer(new Integer(zcount2).intValue()-1).toString()%>">
				<%zposicions = m4lix;
				zposicion = Integer.valueOf(zposicions).intValue()+zcounti;
			 	zcontrol = zposicion%2;%>

				<m4:item item="SCO_ID_INCIDENCE" record="<%=m4lix%>" var="incidenceEncriptedM4T" htmlsafe="true" outputdef="<%=znodo2%>"/>

				<%
					if ((incidenceEncriptedM4T==null)){incidenceEncriptedM4T="";}
					if (!incidenceEncriptedM4T.equals("")) {
					incidenceEncriptedM4T = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request,"incidencePlan", incidenceEncriptedM4T);
					}
				%>

				<%if (zcontrol==0){%>
					<tr>
						<td width="1">&nbsp;</td>
						<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCONMINCIDENCE2%>" htmlsafe="true"/></td>
						<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSSEDTSTART2%>" htmlsafe="true"/></td>
						<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSSEDTEND2%>" htmlsafe="true"/></td>
						<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_UNITS2%>" htmlsafe="true"/>&nbsp;(<m4:item m4name="<%=zSCO_NM_TIME_UNIT2%>" 	htmlsafe="true"/>)</td>
						<td class="fuentecampoaccion">&nbsp;<%=Tran.getProperty("GTA_54")%></td>
						<td class="fuentevalor">
							<!-- Para la mejora número 0240908, se elimina la posibilidad de borrar una incidencia aprobada por RRHH -->
							<a title="<%=Tran.getProperty("GTA_53")%>"href="javascript:
								m4valor('AnularPetición','SCO_ID_INCIDENCE','<%=incidenceEncriptedM4T%>','set');
								m4valor('AnularPetición','SCO_DT_START','<m4:item m4name="<%=zSSEDTSTART2%>" jsafe="true" htmlsafe="true"/>','set');
								m4valor('AnularPetición','SCO_DT_END','<m4:item m4name="<%=zSSEDTEND2%>" jsafe="true" htmlsafe="true"/>','set');
								m4valor('AnularPetición','SCO_OR_PART_TIME','<m4:item m4name="<%=zSCOORPARTTIME2%>" jsafe="true" htmlsafe="true"/>','set');
								m4valor('AnularPetición','STD_OR_HR_PERIOD','<m4:item m4name="<%=zSTD_OR_HR_PERIOD2%>" jsafe="true" htmlsafe="true"/>','set');
								m4valor('AnularPetición','SCO_UNITS','<m4:item m4name="<%=zSCO_UNITS2%>" jsafe="true" htmlsafe="true"/>','set');

								m4valor('AnularPetición','END_TIME','<m4:item m4name="<%=zSCO_END_TIME2%>" jsafe="true" htmlsafe="true"/>','set');
								m4valor('AnularPetición','SCO_ID_TIME_UNIT','<m4:item m4name="<%=zSCO_ID_TIME_UNIT2%>" jsafe="true" htmlsafe="true"/>','set');
								m4valor('AnularPetición','START_TIME','<m4:item m4name="<%=zSCO_START_TIME2%>" jsafe="true" htmlsafe="true"/>','set');

								m4submit('AnularPetición');">
								<img class="tablamenuright" alt="<%=Tran.getProperty("GTA_53")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  />
							</a>
						</td>
					</tr>
				<%}else{%>
					<tr>
						<td width="1">&nbsp;</td>
						<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSCONMINCIDENCE2%>" htmlsafe="true"/></td>
						<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSSEDTSTART2%>" htmlsafe="true"/></td>
						<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSSEDTEND2%>" htmlsafe="true"/></td>
						<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCO_UNITS2%>" htmlsafe="true"/>&nbsp;(<m4:item m4name="<%=zSCO_NM_TIME_UNIT2%>" 				htmlsafe="true"/>)</td>
						<td class="fuentecampoaccion2">&nbsp;<%=Tran.getProperty("GTA_54")%></td>
						<td class="fuentevalor2">
							<a title="<%=Tran.getProperty("GTA_53")%>"href="javascript:
								m4valor('AnularPetición','SCO_ID_INCIDENCE','<%=incidenceEncriptedM4T%>','set');
								m4valor('AnularPetición','SCO_DT_START','<m4:item m4name="<%=zSSEDTSTART2%>" jsafe="true" htmlsafe="true"/>','set');
								m4valor('AnularPetición','SCO_DT_END','<m4:item m4name="<%=zSSEDTEND2%>" jsafe="true" htmlsafe="true"/>','set');
								m4valor('AnularPetición','SCO_OR_PART_TIME','<m4:item m4name="<%=zSCOORPARTTIME2%>" jsafe="true" htmlsafe="true"/>','set');
								m4valor('AnularPetición','STD_OR_HR_PERIOD','<m4:item m4name="<%=zSTD_OR_HR_PERIOD2%>" jsafe="true" htmlsafe="true"/>','set');
								m4valor('AnularPetición','SCO_UNITS','<m4:item m4name="<%=zSCO_UNITS2%>" jsafe="true" htmlsafe="true"/>','set');

								m4valor('AnularPetición','END_TIME','<m4:item m4name="<%=zSCO_END_TIME2%>" jsafe="true" htmlsafe="true"/>','set');
								m4valor('AnularPetición','SCO_ID_TIME_UNIT','<m4:item m4name="<%=zSCO_ID_TIME_UNIT2%>" jsafe="true" htmlsafe="true"/>','set');
								m4valor('AnularPetición','START_TIME','<m4:item m4name="<%=zSCO_START_TIME2%>" jsafe="true" htmlsafe="true"/>','set');

								m4submit('AnularPetición');">
								<img class="tablamenuright" alt="<%=Tran.getProperty("GTA_53")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  />
							</a>
						</td>
					</tr>
				 <%}%>
			</m4:loop>
		</table>
	</div>
		<%}%>	
</div>

<script type="text/javascript">	

m4focus("NombreFormulario","SCO_ID_INCIDENCE");

<%if (!id_incidence.equals("")){%>

   var incidencesList = document.getElementById('SCO_ID_INCIDENCE');
   var incidencesNumber = incidencesList.length;
   for (i = 0; i < incidencesNumber; i++) {

      if (incidencesList[i].value == "<%=id_incidence%>") {

        incidencesList[i].selected = true;
		changeEntitlementDetails(incidencesList)
      }   
   }

	dateUF = "<%=id_incidence_date%>";

	value_year = dateUF.substring(0,4)	
	value_month =  dateUF.substring(5,7)
	value_day =  dateUF.substring(8,10)
	dateUF = value_day + "-" + value_month + "-" + value_year

	document.getElementById('SCO_DT_START').value = dateUF;
	document.getElementById('SCO_DT_END').value = dateUF;
   
<%}%>

</script>

<br/><br/><br/><br/><br/>
