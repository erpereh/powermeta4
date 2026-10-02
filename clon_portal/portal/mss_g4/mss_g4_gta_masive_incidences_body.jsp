<script type="text/javascript">

function viewIncidence(thisEmployee)
{
window.open('/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_delete_masive_incidences.jsp?employee_2_filter=' + thisEmployee,'popUpForm','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=950,height=650,top='+(screen.height-600)/2.5+',left='+(screen.width-830)/2.5);		
}

function comprobar(){
var error = 0;
var texto = m4getmessage("_gta_16");

var dtstart = m4valor("NombreFormulario","SCO_DT_START","","get");
var dtstartok = m4fechacomprobacion(m4objeto('SCO_DT_START','NombreFormulario'),"");

var dtend = m4valor("NombreFormulario","SCO_DT_END","","get");
var dtendok = m4fechacomprobacion(m4objeto('SCO_DT_END','NombreFormulario'),"");
var fechasok = m4compfechas(m4objeto('SCO_DT_START','NombreFormulario'),'<=',m4objeto('SCO_DT_END','NombreFormulario'));
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
	texto = texto + m4getmessage("_gta_23") + '<%=zsgcoParamDate%>' + "";
	error = 1;
	}
if (dtend == null || dtend == ""){
	texto = texto + m4getmessage("_gta_24") ;
	error = 1;
	}

if ((dtend != null && dtend != "") && (dtendok == "")){
	texto = texto + m4getmessage("_gta_25") + '<%=zsgcoParamDate%>' + "";
	error = 1;
	}

if ((dtstart != null && dtstart != "") && (dtstartok != "") && (dtend != null && dtend != "") && (dtendok != "") && (fechasok == false)){
	texto = texto + m4getmessage("_gta_26");
	error = 1;
	}

var population_comming_in = document.getElementById('incidencie_population').value;

if (population_comming_in!=""){
	allSelected = population_comming_in ;
	document.getElementById('from_other_page').value = "YES";}
	
else
  {
	document.getElementById('from_other_page').value = "NO";
	var numEmployeeTotal = document.getElementById('numEmployees').value;
	var allSelected = "";
	var idEmpl = "";
	for (var i = 0; i < numEmployeeTotal; i++)
	{
		idEmpl = "";
		var isFromWnit = document.getElementById("CHECHBOX_" + i).value;
		if (isFromWnit != 'NONE')
		{
			if (document.getElementById("CHECHBOX_" + i).checked == true)
				//allSelected =allSelected + document.getElementById("EMPLOYEE_" + i).value + "#" 
				<% //the string will be: lengthOfID,ID, ejample: 3,hji4,jkhu5,jkhui => means = hji + jkhu + jkhui %>
				idEmpl = document.getElementById("EMPLOYEE_" + i).value;
				if (idEmpl!=""){
					allSelected =allSelected + idEmpl.length + "," + idEmpl;
				}
				
		  }
	}
  }

if (allSelected == "")
{
	texto = texto + m4getmessage("_gta_27");
	error = 1;
}
else
	document.getElementById("SET_OF_EMPLOYEES_SELECTED").value = allSelected ;

if (error == 1){
	alert(texto);
	return;}
else {

	m4submit("NombreFormulario") ;
}
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

if (startHours!=endHours)
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
}else
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

		if (valueSelected=="")
		{
			alert(m4getmessage("_gta_17"))
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

}
</script>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	
<%

  String zfiltro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro");
  String zfiltro2 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro2");
  String zfiltro3 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro3");
  String zfiltro4 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro4");
  String zfiltro5 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro5");
  String profData = Tran.getProperty("Labelmss.ProfsData");

  String WUn = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUt");
  String JOBn = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"JOBt");
  String LOCn = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LOCt");

  if ((zfiltro2==null||zfiltro2.equals(""))  &&  (zfiltro3==null||zfiltro3.equals("")) &&  (zfiltro==null||zfiltro.equals("")) ) {zfiltro2 = "ALL";}
  if ((zfiltro==null)||(zfiltro.equals(""))){zfiltro = "ALL";}  
  if ((zfiltro3==null)||(zfiltro3.equals(""))){zfiltro3 = "ALL";}
  if ((zfiltro4==null)||(zfiltro4.equals(""))){zfiltro4 = "ALL";}
  if ((zfiltro5==null)||(zfiltro5.equals(""))){zfiltro5 = "ALL";}

  if ((WUn==null)||(WUn.equals(""))){WUn = "Todos";}
  if ((JOBn==null)||(JOBn.equals(""))){JOBn = "Todos";}
  if ((LOCn==null)||(LOCn.equals(""))){LOCn = "Todos";}

   String zsubsesion = "SSE_HOLYDAYS";
   String zmeta4object = "SSE_HOLYDAYS";
   String znodo = "SSE_REAL_TIME_PRD";
   String znodo3 = "SSE_INCIDENCE";
   String ztipocarga = "MASSIVE_MSS";
   String zdireccion = "mss_g4/mss_g4_gta_masive_incidences.jsp";
   String zestado = "41";

   String zoutputdef3 = zsubsesion + "!" + znodo3 +"[*]";
   String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";

   String zoutputdef = zsubsesion + "!" + znodo +"[*]";
   String zmove = znodo + ":" +znodo + "[FIRST]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String zSCOIDINCIDENCE = zcomun3 + "SCO_ID_INCIDENCE";
   String zSCONMINCIDENCE = zcomun3 + "SCO_NM_INCIDENCE";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";

   String InventarioMeta4Object = "SSE_INVENTARIO";
   String Inventariozmetodocarga = InventarioMeta4Object + "!SSE_INVENTARIO.CARGA";
   String Inventarioznodo = "SSE_INVENTARIO";
   String Inventarioznodo2 = "SSE_WORK_UNIT";
   String Inventarioznodo3 = "SSE_JOB_CODES";
   String Inventarioznodo4 = "SSE_WORK_LOCATION";


   String Inventariozdireccion = "mss_g4/mss_g4_gta_masive_incidences.jsp";
   String Inventariozoutputdef = InventarioMeta4Object + "!" + Inventarioznodo + "[*]";
   String Inventariozmove = Inventarioznodo + ":" + Inventarioznodo + "[FIRST]";
   String Inventarioziterator = Inventarioznodo + ":" + InventarioMeta4Object + "!" + Inventarioznodo;
   
   String Inventariozoutputdef2 = InventarioMeta4Object + "!" + Inventarioznodo2 + "[*]";
   String Inventariozmove2 = Inventarioznodo2 + ":" + Inventarioznodo2 + "[FIRST]";
   String Inventarioziterator2 = Inventarioznodo2 + ":" + InventarioMeta4Object + "!" + Inventarioznodo2;

   String Inventariozoutputdef3 = InventarioMeta4Object + "!" + Inventarioznodo3 + "[*]";
   String Inventariozmove3 = Inventarioznodo3 + ":" + Inventarioznodo3 + "[FIRST]";
   String Inventarioziterator3 = Inventarioznodo3 + ":" + InventarioMeta4Object + "!" + Inventarioznodo3;

   String Inventariozoutputdef4 = InventarioMeta4Object + "!" + Inventarioznodo4 + "[*]";
   String Inventariozmove4 = Inventarioznodo4 + ":" + Inventarioznodo4 + "[FIRST]";
   String Inventarioziterator4 = Inventarioznodo4 + ":" + InventarioMeta4Object + "!" + Inventarioznodo4;
  
  	String id_incidence = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_incidence");
	if ((id_incidence==null)){id_incidence="";}

	String id_incidence_date = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_incidence_date");
	if ((id_incidence_date==null)){id_incidence_date="";}
	String id_incidence_date_encripted = id_incidence_date;
	//id_incidence_date = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan", id_incidence_date);

	String incidencie_population = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"incidencie_population");
	if ((incidencie_population==null)){incidencie_population="";}
	
   String Inventarioztipocarga = "VIS";
   if (!incidencie_population.equals("")){
	   Inventarioztipocarga = "NONE";}

   String InventarioStyle = "";
   String incidenceEncripted = "";  
   String idPersonEncripted = "";

%>


<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","1");
	    m.setItem(zsubsesion,"SSE_REAL_TIME_PRD","","SCO_GTA_USER_TYPE","MASSIVE_MSS");
	    m.setItem(zsubsesion,"SSE_INCIDENCE","","SCO_GTA_TP_ACTION_FROM_ESS_MSS","MSS");

		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>

<m4:datadef m4o="<%=InventarioMeta4Object%>" m4name="<%=InventarioMeta4Object%>"/>
<%
try {
  M4Operations m = new M4Operations(request);
  m.setItem(InventarioMeta4Object,Inventarioznodo,"","STD_N_FIRST_NAME_PAR",zfiltro);
  m.setItem(InventarioMeta4Object,Inventarioznodo,"","STD_N_FAMILY_NAME_1_PAR",zfiltro2);
  m.setItem(InventarioMeta4Object,Inventarioznodo,"","STD_ID_WORK_UNIT_PAR",zfiltro3);

  m.setItem(InventarioMeta4Object,Inventarioznodo,"","STD_ID_JOB_PAR",zfiltro4);
  m.setItem(InventarioMeta4Object,Inventarioznodo,"","STD_ID_LOC_PAR",zfiltro5);


} catch(Exception e) {}
%>

<m4:exec m4method="<%=Inventariozmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=Inventarioztipocarga%>"/></m4:exec>  
<m4:outputdef m4alias="EMPLEADOS"><m4:param name="m4name0" value="<%=Inventariozoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=Inventarioznodo2%>"><m4:param name="m4name0" value="<%=Inventariozoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=Inventarioznodo3%>"><m4:param name="m4name0" value="<%=Inventariozoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=Inventarioznodo4%>"><m4:param name="m4name0" value="<%=Inventariozoutputdef4%>"/></m4:outputdef>
<m4:exec node="SSE_INVENTARIO" alias="emp_count" method="Count" m4object="<%=InventarioMeta4Object%>"/>
<m4:endjob/>

<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:item outputdef="<%=znodo3%>" item="SCO_IND_CFWD" m4varname="sIndCfwd"/>
<m4:item outputdef="<%=znodo%>" item="SCO_GTA_MASSIVE_ERROR_MESSAGE" m4varname="massiveErrorReturned"/>
<m4:item outputdef="<%=znodo%>" item="SCO_GTA_MASSIVE_TP_ERROR" m4varname="massiveTpErrorReturned"/>

<m4:item outputdef="<%=znodo%>" item="SET_OF_EMPLOYEES_SELECTED" m4varname="OpenMassivesIncidences"/>



<%
int  zcount3  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);

	} catch(Exception e) {}
	String	zcountv3 = String.valueOf(zcount3);
	
%>

<m4:move><m4:param name="<%=InventarioMeta4Object%>" value="<%=Inventariozmove%>"/></m4:move>
<m4:move><m4:param name="<%=InventarioMeta4Object%>" value="<%=Inventariozmove2%>"/></m4:move>
<m4:move><m4:param name="<%=InventarioMeta4Object%>" value="<%=Inventariozmove3%>"/></m4:move>
<m4:move><m4:param name="<%=InventarioMeta4Object%>" value="<%=Inventariozmove4%>"/></m4:move>

<script type="text/javascript">

function filtrar_direct(id_campo,nombre_campo,campo){

id_campo=m4urlencode(id_campo);
var nombre = m4valor("Filtro","Nombre","","get");
var apellido = m4valor("Filtro","Apellido","","get");

if (campo=="WORK_UNIT")
  {
  var WUvalue = id_campo;
  var WUtext = nombre_campo;

  var LOCvalue = m4select(m4objeto("filtro_loc","Filtro"),"value");
  var LOCtext = m4select(m4objeto("filtro_loc","Filtro"),"text");

  var JOBvalue = m4select(m4objeto("filtro_job","Filtro"),"value");
  var JOBtext = m4select(m4objeto("filtro_job","Filtro"),"text");
  }

if (campo=="JOB")
  {
  var JOBvalue = id_campo;
  var JOBtext = nombre_campo;

  var LOCvalue = m4select(m4objeto("filtro_loc","Filtro"),"value");
  var LOCtext = m4select(m4objeto("filtro_loc","Filtro"),"text");

  var WUvalue = m4select(m4objeto("WU","Filtro"),"value");
  var WUtext = m4select(m4objeto("WU","Filtro"),"text");
  }


if (campo=="LOCATION")
  {
  var LOCvalue = id_campo;
  var LOCtext = nombre_campo;

  var JOBvalue = m4select(m4objeto("filtro_job","Filtro"),"value");
  var JOBtext = m4select(m4objeto("filtro_job","Filtro"),"text");

  var WUvalue = m4select(m4objeto("WU","Filtro"),"value");
  var WUtext = m4select(m4objeto("WU","Filtro"),"text");
  }


var parametros = new Array("estado","zfiltro","zfiltro2","zfiltro3","WUt","zfiltro4","JOBt","zfiltro5","LOCt");
var valores = new Array(<%=zestado%>,nombre,apellido,WUvalue,WUtext,JOBvalue,JOBtext,LOCvalue,LOCtext);
m4navegar("mss_g4/mss_g4_gta_masive_incidences.jsp?",parametros,valores);
}

function filtrar(){
var nombre = m4valor("Filtro","Nombre","","get");
var apellido = m4valor("Filtro","Apellido","","get");

var WUvalue = m4urlencode(m4select(m4objeto("WU","Filtro"),"value"));
var WUtext = m4select(m4objeto("WU","Filtro"),"text");

var JOBvalue = m4urlencode(m4select(m4objeto("filtro_job","Filtro"),"value"));
var JOBtext = m4select(m4objeto("filtro_job","Filtro"),"text");

var LOCvalue = m4urlencode(m4select(m4objeto("filtro_loc","Filtro"),"value"));
var LOCtext = m4select(m4objeto("filtro_loc","Filtro"),"text");

var parametros = new Array("estado","zfiltro","zfiltro2","zfiltro3","WUt","zfiltro4","JOBt","zfiltro5","LOCt");
var valores = new Array(<%=zestado%>,nombre,apellido,WUvalue,WUtext,JOBvalue,JOBtext,LOCvalue,LOCtext);
m4navegar("mss_g4/mss_g4_gta_masive_incidences.jsp?",parametros,valores);
}

function borrar_filtro(){
var nombre = "";
var apellido = "";

//nombre = nombre.toUpperCase();
//apellido = apellido.toUpperCase();

var WUvalue = "";
var WUtext = "";

var JOBvalue = "";
var JOBtext = "";

var LOCvalue = "";
var LOCtext = "";

var parametros = new Array("estado","zfiltro","zfiltro2","zfiltro3","WUt","zfiltro4","JOBt","zfiltro5","LOCt");
var valores = new Array(<%=zestado%>,nombre,apellido,WUvalue,WUtext,JOBvalue,JOBtext,LOCvalue,LOCtext);
m4navegar("mss_g4/mss_g4_gta_masive_incidences.jsp?",parametros,valores);
}

function employeeSelection(tpOperation,numRecords)
{

    for (var i = 0; i < numRecords; i++)
    {

      var isFromWnit = document.getElementById("CHECHBOX_" + i).value;

	  if (isFromWnit != 'NONE')
	  {
		  if (tpOperation == 'SELECT') 
			  document.getElementById("CHECHBOX_" + i).checked = true;
		  else
			  document.getElementById("CHECHBOX_" + i).checked = false;
	  }
    }

}

function selectAllEmployees(numRecords,wUnit)
{
	var valueToCompare = "#" + wUnit + "#"
	var tpOperation = document.getElementById('TP_OPERATION_' + wUnit).value;

	if (tpOperation == 'UNCHECKED')
	{
		tpOperation = 'CHECKED'
		document.getElementById('TP_OPERATION_' + wUnit).value = 'CHECKED'
		document.getElementById('unselectEmployees_' + wUnit).className = ''
		document.getElementById('selectEmployees_' + wUnit).className = 'invisible2'
		
	}
	else
	{
		tpOperation = 'UNCHECKED'
		document.getElementById('TP_OPERATION_' + wUnit).value = 'UNCHECKED'
		document.getElementById('unselectEmployees_' + wUnit).className = 'invisible2'
		document.getElementById('selectEmployees_' + wUnit).className = ''

	}

    for (var i = 0; i < numRecords; i++)
    {

      var isFromWnit = document.getElementById("CHECHBOX_" + i).value;

	  if (isFromWnit == valueToCompare)
	  {
		  if (tpOperation == 'UNCHECKED') 
			  document.getElementById("CHECHBOX_" + i).checked = false;
		  else
			  document.getElementById("CHECHBOX_" + i).checked = true;
	  }
    }
}
</script>

<table width="100%" cellspacing="0">
<tr>
	<td class="titulofuncional" colspan="2"><%=Tran.getProperty("GTA_1")%></td>
	
</tr>
<tr>
	<td><img src="/iconos/noname_vacaciones_55_100.gif" width="100" height="100" alt="<%=Tran.getProperty("GTA_2")%>"></td>
	<td><div class="descripcionfuncional"><%=Tran.getProperty("GTA_3")%>
	</div>
	</td>	
</tr>
</table>


<%if (massiveTpErrorReturned.equals("N")) {%>
<!--
Mejora 238144
	<table width="100%" cellspacing="0">
		<tr>
			<td width="70%">&nbsp;</td>
			<td width="30%">&nbsp;<a href="javascript:collapseMessageSection.slideit()"><img src="/iconos/ic_ord_15_15.gif" alt="<%=Tran.getProperty("GTA_4")%>" title="<%=Tran.getProperty("GTA_4")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />&nbsp;<%=Tran.getProperty("GTA_4")%></a></td>
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
			<td><div class="descripcionfuncionalVerde"><br/><br/><%=massiveErrorReturned%></div><br/><br/><br/>
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
			<td width="30%">&nbsp;<a href="javascript:collapseMessageSection.slideit()"><img src="/iconos/ic_ord_15_15.gif" alt="<%=Tran.getProperty("GTA_4")%>" title="<%=Tran.getProperty("GTA_4")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />&nbsp;<%=Tran.getProperty("GTA_4")%></a></td>
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
				<td><div class="descripcionfuncionalRojo"><%=massiveErrorReturned%></div><br/><br/>
				</td>	
			</tr>
		</table>
	</div>
	<table width="100%" cellspacing="0"><tr><td>&nbsp;</td></tr></table>
-->
<%}%>

<!-- Pintamos la sección solo si no se llama desde otra página con una población ya seteada -->

<input type="hidden" id="incidencie_population" name = "incidencie_population" value="<%=incidencie_population%>">

<%if (incidencie_population.equals("")){%>

<table width="100%" class="tablaestados" cellspacing="0">
	<tr><td class="titulofuncional"><a href="javascript:collapseInventarioInfo.slideit()"><img src="/iconos/ic_ord_15_15.gif" alt="<%=Tran.getProperty("GTA_7")%>" title="<%=Tran.getProperty("GTA_7")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>&nbsp;
		<B><%=Tran.getProperty("GTA_8")%></B></td></tr>
</table>
<br/>

<div id="InventarioInfo" name="InventarioInfo">

	<script type="text/javascript">
		document.getElementById('InventarioInfo').className="";
		var collapseInventarioInfo=new animatedcollapse('InventarioInfo', 800,1);
	</script>

	<form id="Filtro" name="Filtro">
		<table width="100%" class="tablaestados" cellspacing="0">
			<tr><td WIDTH="1%">&nbsp;</td><td class="tablaestadosceldatitulo">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla95")%></td></tr>
			<tr><td WIDTH="1%">&nbsp;</td><td class="fuentevalor">&nbsp;</td></tr>
		</TABLE>
		<table width="100%" class="tablaestados" cellspacing="0">
			<tr>
			  <%
			    if ((zfiltro=="ALL")){
				     zfiltro = "";
					}
			    if ((zfiltro2=="ALL")){
				     zfiltro2 = "";
			    } 
			    if ((zfiltro3=="ALL")){
				     zfiltro3 = "";
			    } 
			  %>
			  <td WIDTH="1%">&nbsp;</td>
			  <td WIDTH="20%" class="fuentevalor">&nbsp;<%=Mss_cr.getProperty("msscr.Titulo5-5")%></td>
			  <td WIDTH="25%" class="fuentevalor"><input title="<%=Mss_cr.getProperty("msscr.Tabla96")%>" type="text" id="Nombre" class="fuenteformulario" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfiltro)%>" /></td>
			  <td WIDTH="20%" class="fuentevalor">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla97")%></td>
			  <td WIDTH="25%" class="fuentevalor"><input title="<%=Mss_cr.getProperty("msscr.Tabla98")%>" type="text" id="Apellido" class="fuenteformulario" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfiltro2)%>" /></td>
			  <td class="fuentevalor" WIDTH="9%">
			</tr>
<!--			<tr><td WIDTH="1%">&nbsp;</td><td class="fuentevalor" colspan="2">&nbsp;</td></tr>-->
			<tr>
				<%
				  if ((zfiltro4=="ALL")){
				     zfiltro4 = "";
				  } 
				  if ((zfiltro5=="ALL")){
				     zfiltro5 = "";
				  } 
				%>
				<td WIDTH="1%">&nbsp;</td>
				<td WIDTH="20%" class="fuentevalor">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla6")%>
				<td WIDTH="25%" class="fuentevalor">
					<select id="WU" class="fuenteformulario150" name="WU" title="<%=Mss_cr.getProperty("msscr.Tabla99")%>" >
				    <option value="ALL"><%=Mss_cr.getProperty("msscr.Tabla100")%></option> 
				    <m4:dataloop outputdef="SSE_WORK_UNIT">
					    <option value="<m4:item item='STD_ID_WORK_UNIT' htmlsafe='true' outputdef='SSE_WORK_UNIT'/>"><m4:item item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="SSE_WORK_UNIT"/></option>
				    </m4:dataloop>    
				   </select>
				   <script type="text/javascript" language="Javascript1.5">
				      if ('<%=zfiltro3%>'!= "ALL"){
				        m4searchoptioness('Filtro','WU','<%=zfiltro3%>');
				      }
				   </script>
				</td>
				<td WIDTH="20%" class="fuentevalor">&nbsp;<%=Mss_cr.getProperty("msscr.ID9-3")%></td>
				<td WIDTH="25%" class="fuentevalor">
				    <select id="filtro_job" class="fuenteformulario150" name="filtro_job" title="<%=Mss_cr.getProperty("msscr.Tabla121")%>" >
					    <option value="ALL"><%=Mss_cr.getProperty("msscr.Tabla100")%></option> 
					    <m4:dataloop outputdef="SSE_JOB_CODES">
						    <option value="<m4:item item='SCO_ID_JOB' htmlsafe='true' outputdef='SSE_JOB_CODES'/>"><m4:item item="SCO_N_JOB" htmlsafe="true" outputdef="SSE_JOB_CODES"/></option>
					    </m4:dataloop>    
				    </select>
				    <script type="text/javascript" language="Javascript1.5">
				      if ('<%=zfiltro4%>'!= "ALL"){
				        m4searchoptioness('Filtro','filtro_job','<%=zfiltro4%>');
				      }
				   </script>
				</td>
			  <td class="fuentevalor" WIDTH="9%">
			</tr>
			<tr>
				<td WIDTH="1%">&nbsp;</td><td class="fuentevalor" WIDTH="20%">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla110")%>
				<td class="fuentevalor" WIDTH="25%">
					<select id="filtro_loc" class="fuenteformulario150" name="filtro_loc" title="<%=Mss_cr.getProperty("msscr.Tabla122")%>" >
					    <option value="ALL"><%=Mss_cr.getProperty("msscr.Tabla100")%></option> 
					    <m4:dataloop outputdef="SSE_WORK_LOCATION">
						    <option value="<m4:item item='SCO_ID_WORK_LOCATION' htmlsafe='true' outputdef='SSE_WORK_LOCATION'/>"><m4:item item="SCO_N_WORK_LOCATION" htmlsafe="true" outputdef="SSE_WORK_LOCATION"/></option>
					    </m4:dataloop>    
				    </select>
				</td>
				<td class="fuentevalor" WIDTH="45%" colspan="2">
					<a href="javascript:filtrar();" title="<%=Tran.getProperty("GTA_9")%>"><img alt="<%=Tran.getProperty("GTA_9")%>" src="/iconos/js_filtrar.gif" style="cursor:hand" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
					&nbsp;<a href="javascript:borrar_filtro();" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-3")%>"><img alt="<%=Mss_cr.getProperty("msscr.Confirm_ad10-3")%>" src="/iconos/js_deshacer_filtro.gif" style="cursor:hand" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
				</td>
				<td class="fuentevalor" WIDTH="9%">
				 <script type="text/javascript" language="Javascript1.5">
				     if ('<%=zfiltro5%>'!= "ALL"){
				       m4searchoptioness('Filtro','filtro_loc','<%=zfiltro5%>');
				     }
				</script>
			</tr>

			<% String count; %>
			<% int icount = 0; %>
			  <m4:outputexec var="count" alias="emp_count"/>
			  <% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%>

			<tr>
			  <td WIDTH="1%">&nbsp;</td>
			  <td class="fuentevalor" colspan="3">&nbsp;</td>
			  <td class="fuentevalor" colspan="1">&nbsp;<a href="javascript:employeeSelection('SELECT','<%=icount%>');" title="<%=Tran.getProperty("GTA_10")%>"><img alt="<%=Tran.getProperty("GTA_10")%>" src="/iconos/icono_aceptar_todas_36_36.gif" style="cursor:hand" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
				&nbsp;<a href="javascript:employeeSelection('UNSELECT','<%=icount%>');" title="<%=Tran.getProperty("GTA_11")%>"><img alt="<%=Tran.getProperty("GTA_11")%>" src="/iconos/icono_cancelar_todas_mss_36_36.gif" style="cursor:hand" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<!--				<a href="javascript:collapseInventarioInfo.slideit();" title="<%=Tran.getProperty("GTA_12")%>"><img alt="<%=Tran.getProperty("GTA_12")%>" src="/iconos/entrar_blanco.gif" style="cursor:hand" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
-->

			  </td>
			  <td class="fuentevalor" WIDTH="39%">
			</tr>
		</table>
	</form>



	<%if (icount > 0) {
	  int zposicion =0;
	  int zcontrol = 0;
	%>

	<table width="100%" class = "tablaestados" cellspacing="0">
		<tr>
			<td WIDTH="1%">&nbsp;</td>
			<td class="tablaestadosceldatitulo"><%=Tran.getProperty("GTA_13")%></td>
		</tr>
	</table>


	<table width="100%" class = "tablaestados" cellspacing="0">
	<input type="hidden" id="numEmployees" name = "numEmployees" value="<%=icount%>">
	<m4:dataloop outputdef="EMPLEADOS">

	<m4:item m4varname="is_manager" item="SMCO_THIS_EMPLOYEE_IS_MANAGER" htmlsafe="true" outputdef="EMPLEADOS"/>
	<m4:item m4varname="is_new_layer" item="SMCO_NEW_LAYER_4_WUNIT" htmlsafe="true" outputdef="EMPLEADOS"/>
	<m4:item m4varname="data_break_layer" item="SMCO_LAYERS_BREAK" htmlsafe="true" outputdef="EMPLEADOS"/>
	<m4:item m4varname="break_layer" item="SMCO_LAYERS_BREAK_HEADER" htmlsafe="true" outputdef="EMPLEADOS"/>
	<m4:item m4varname="zero_no_direct_report_employees_selected" item="PLCO_ZERO_NO_DRT_RPRT_SELECTED" htmlsafe="true" outputdef="EMPLEADOS"/>

	
  <% Integer current; %>
  <m4:current var="current" outputdef="EMPLEADOS"/>

	<% if(zero_no_direct_report_employees_selected.equals("N")) { %>
		<% if(data_break_layer.equals("N")) { %>
		  <% if(is_new_layer.equals("Y")) { %>
		    <%  zposicion = current.intValue();
		     if (zposicion > 0) {%>
		      </table></div>
		    <%}%>
			<br/>
		    <table width="100%" class = "tablaestados" cellspacing="0">
			  <tr><td WIDTH="1%">&nbsp;</td>
					<td class="fuentevalor" WIDTH="69%">&nbsp;
						<a href="javascript:collapse<%=current%>.slideit()"><img src="/iconos/ic_ord_15_15.gif" alt="<%=Mss_cr.getProperty("msscr.Tabla1267")%>" title="<%=Mss_cr.getProperty("msscr.Tabla1267")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>&nbsp;  <b><u><m4:item item="SMCO_WHOLE_MANAGER_NAME" htmlsafe="true" outputdef="EMPLEADOS"/></b></u>
					</td>
					<td class="fuentevalor"  WIDTH="30%">&nbsp;
						<div id="selectEmployees_<m4:item item='STD_ID_WORK_UNIT' htmlsafe='true' outputdef='EMPLEADOS'/>" name="selectEmployees_<m4:item item='STD_ID_WORK_UNIT' htmlsafe='true' outputdef='EMPLEADOS'/>">
							<a href="javascript:selectAllEmployees('<%=icount%>','<m4:item item='STD_ID_WORK_UNIT' htmlsafe='true' outputdef='EMPLEADOS'/>')"><img src="/iconos/aceptado.gif" alt="<%=Tran.getProperty("GTA_38")%>" title="<%=Tran.getProperty("GTA_38")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>&nbsp; <b><%=Tran.getProperty("GTA_14")%></b>
						</div>
						<div id="unselectEmployees_<m4:item item='STD_ID_WORK_UNIT' htmlsafe='true' outputdef='EMPLEADOS'/>" name="unselectEmployees_<m4:item item='STD_ID_WORK_UNIT' htmlsafe='true' outputdef='EMPLEADOS'/>" class="invisible2">
							<a href="javascript:selectAllEmployees('<%=icount%>','<m4:item item='STD_ID_WORK_UNIT' htmlsafe='true' outputdef='EMPLEADOS'/>')"><img src="/iconos/icono_eliminar_ess_11_12.gif" alt="<%=Tran.getProperty("GTA_39")%>" title="<%=Tran.getProperty("GTA_39")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>&nbsp;  <b><%=Tran.getProperty("GTA_15")%></b>
						</div>
					</td>
					<input id="CHECHBOX_<%=current%>" name="CHECHBOX_<%=current%>" type="hidden" value="NONE">
					<input id="TP_OPERATION_<m4:item item='STD_ID_WORK_UNIT' htmlsafe='true' outputdef='EMPLEADOS'/>" name="TP_OPERATION_<m4:item item='STD_ID_WORK_UNIT' 
					htmlsafe='true' outputdef='EMPLEADOS'/>" type="hidden" value="UNCHECKED">
					
		      </tr>
		    </table>

		    <div id="<%=current%>" name="<%=current%>" class="">
			  <script type="text/javascript">
				 document.getElementById('<%=current%>').className="";
			      var collapse<%=current%>=new animatedcollapse('<%=current%>', 800,1);
		      </script>
				<br>
		      <table width="100%" class = "tablaestados" cellspacing="0">
			    <tr>
				  <td WIDTH="3%">&nbsp;</td>
			      <td class="tablaestadosceldatitulo" width="23%"><%=Mss_cr.getProperty("msscr.Titulo5-5")%></td>
			      <td class="tablaestadosceldatitulo" width="23%"><%=Mss_cr.getProperty("msscr.Tabla6")%></td>
			      <td class="tablaestadosceldatitulo" width="23%"><%=Mss_cr.getProperty("msscr.ID9-3")%></td>
			      <td class="tablaestadosceldatitulo" width="23%"><%=Mss_cr.getProperty("msscr.Tabla110")%></td>
				  <td class="tablaestadosceldatitulo" width="5%">&nbsp;</td>
			    </tr>
			  <%}else{
			    zposicion = current.intValue();
			      zcontrol = zposicion%2;
				  if (zcontrol==0){
					InventarioStyle="fuentevalor";
				  }else{
					InventarioStyle="fuentevalor2";
			  }%>
					<tr>
					<td WIDTH="3%">&nbsp;</td>
					<td class="<%=InventarioStyle%>">&nbsp;
					<% if(is_manager.equals("Y")) { %>
					      <img alt="<%=Mss_cr.getProperty("msscr.Tabla1266")%>" title="<%=Mss_cr.getProperty("msscr.Tabla1266")%>" src="/iconos/icono_flecha_ocre_mss_11_9.gif"/><b>
					<%}%>

						  <input title="<%=Tran.getProperty("GTA_77")%>" id="CHECHBOX_<%=current%>" name="CHECHBOX_<%=current%>" type="checkbox" value="#<m4:item item='STD_ID_WORK_UNIT' htmlsafe='true' outputdef='EMPLEADOS'/>#">

							<m4:item item="STD_ID_PERSON" var="idPersonEncripted" htmlsafe="true" outputdef="EMPLEADOS"/>
							<%
								if ((idPersonEncripted==null)){idPersonEncripted="";}
								if (!idPersonEncripted.equals("")) {
									idPersonEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request,"incidencePlan", idPersonEncripted);
								}
							%>							  			  
						  <input type="hidden" id="EMPLOYEE_<%=current%>" name="EMPLOYEE_<%=current%>" value="<%=idPersonEncripted%>">

							<m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="EMPLEADOS"/></td><% if(is_manager.equals("Y")) { %></b><%}%>
					<td class="<%=InventarioStyle%>">&nbsp;<a href="javascript:filtrar_direct('<m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="EMPLEADOS"/>','<m4:item item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="EMPLEADOS"/>','WORK_UNIT');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
					<td class="<%=InventarioStyle%>">&nbsp;<a href="javascript:filtrar_direct('<m4:item item="STD_ID_JOB" htmlsafe="true" outputdef="EMPLEADOS"/>','<m4:item item="STD_N_JOB" htmlsafe="true" outputdef="EMPLEADOS"/>','JOB');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item item="STD_N_JOB" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
					<td class="<%=InventarioStyle%>">&nbsp;<a href="javascript:filtrar_direct('<m4:item item="STD_ID_LOCATION" htmlsafe="true" outputdef="EMPLEADOS"/>','<m4:item item="STD_N_LOCATION" htmlsafe="true" outputdef="EMPLEADOS"/>','LOCATION');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item item="STD_N_LOCATION" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
 				    <td class="<%=InventarioStyle%>"><a href="javascript:viewIncidence('<%=idPersonEncripted%>')"><img src="/iconos/icono_calendario_14_18.gif" alt="<%=Tran.getProperty("GTA_55")%>" title="<%=Tran.getProperty("GTA_55")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>


				   </tr>
				  <%}%>
				<%}%>
		   	  <%}%>
			</m4:dataloop>    
		  </table>
		</div>

			<m4:dataloop outputdef="EMPLEADOS">
			<m4:item m4varname="is_manager" item="SMCO_THIS_EMPLOYEE_IS_MANAGER" htmlsafe="true" outputdef="EMPLEADOS"/>
			<m4:item m4varname="data_break_layer" item="SMCO_LAYERS_BREAK" htmlsafe="true" outputdef="EMPLEADOS"/>
			<m4:item m4varname="break_layer" item="SMCO_LAYERS_BREAK_HEADER" htmlsafe="true" outputdef="EMPLEADOS"/>
			<m4:item m4varname="zero_no_direct_report_employees_selected" item="PLCO_ZERO_NO_DRT_RPRT_SELECTED" htmlsafe="true" outputdef="EMPLEADOS"/>

 		    <% Integer current; %>
		    <m4:current var="current" outputdef="EMPLEADOS"/>
			<% if(data_break_layer.equals("Y")) { %>
			  <% if(break_layer.equals("Y")) { %>
			      <table width="100%" class = "tablaestados" cellspacing="0">
					<% if(zero_no_direct_report_employees_selected.equals("N")) { %>
						<hr width="1%"><hr width="99%" class="fuentevalor"> 
					<%}%>
					</td></tr>
			  <%}else{%>
				  <tr><td WIDTH="1%">&nbsp;</td><td
			    <%zposicion = current.intValue();
			     zcontrol = zposicion%2;
			    if (zcontrol==0){
					InventarioStyle="fuentevalor";%>
			    <%}else{
					InventarioStyle="fuentevalor2";%>
			    <%}%>
			      class="<%=InventarioStyle%>">&nbsp;
			      <% if(is_manager.equals("Y")) { %>
				      <img alt="<%=Mss_cr.getProperty("msscr.Tabla1266")%>" title="<%=Mss_cr.getProperty("msscr.Tabla1266")%>" src="/iconos/icono_flecha_ocre_mss_11_9.gif"/>
			      <%}%>

					<m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="EMPLEADOS"/></td>
			      <td class="<%=InventarioStyle%>">&nbsp;<a href="javascript:filtrar_direct('<m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="EMPLEADOS"/>','<m4:item item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="EMPLEADOS"/>','WORK_UNIT');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
			      <td class="<%=InventarioStyle%>">&nbsp;<a href="javascript:filtrar_direct('<m4:item item="STD_ID_JOB" htmlsafe="true" outputdef="EMPLEADOS"/>','<m4:item item="STD_N_JOB" htmlsafe="true" outputdef="EMPLEADOS"/>','JOB');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item item="STD_N_JOB" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
			      <td class="<%=InventarioStyle%>">&nbsp;<a href="javascript:filtrar_direct('<m4:item item="STD_ID_LOCATION" htmlsafe="true" outputdef="EMPLEADOS"/>','<m4:item item="STD_N_LOCATION" htmlsafe="true" outputdef="EMPLEADOS"/>','LOCATION');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item item="STD_N_LOCATION" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
			      <td class="<%=InventarioStyle%>">&nbsp;<m4:item item="STD_N_LOCATION" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
				</tr>
			   <%}%>
			  <%}%>
			</m4:dataloop>  
		<%}else{%>
			<div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.Tabla107")%></div>
		<%}%>
</div>
<%}%>

<div id="IncidenceInfo" name="IncidenceInfo">

	<table width="100%" class="tablaestados" cellspacing="0">
		<tr><td>&nbsp;</td></tr>
	</table>

	<table width="100%" class="tablaestados" cellspacing="0">
		<tr><td class="titulofuncional">&nbsp;<B><%=Tran.getProperty("GTA_16")%></B></td></tr>
	</table>


	<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_incidences_encripted.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="javascript:comprobar();">
		<input type="hidden" id="TAG" name="TAG" value="SSE_HOLYDAYS" />
		<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
		<input type="hidden" id="NOD" name="NOD" value="SSE_REAL_TIME_PRD" />

		<input type="hidden" id="SCO_UNITS" name="SCO_UNITS" value="" />
		<input type="hidden" id="STD_OR_HR_PERIOD" name="STD_OR_HR_PERIOD" value="" />
		<input type="hidden" id="SCO_OR_PART_TIME" name="SCO_OR_PART_TIME" value="" />

		<input type="hidden" id="from_other_page" name="from_other_page" value="NO" />
		<input type="hidden" id="id_incidence_back" name="id_incidence_back" value="<%=id_incidence%>" />
		<input type="hidden" id="id_incidence_date_back" name="id_incidence_date_back" value="<%=id_incidence_date_encripted%>" />
		<input type="hidden" id="incidencie_population_back" name="incidencie_population_back" value="<%=incidencie_population%>" />

<!-- Si esta página se llama desde algún sitio con una población ya seteada (empleado1#empleado2#empleado3#...#),incidencie_population tendrá valor -->

		<input type="hidden" id="SET_OF_EMPLOYEES_SELECTED" name="SET_OF_EMPLOYEES_SELECTED" value="<%=incidencie_population%>" />

		<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
			<tr><td WIDTH="1%">&nbsp;</td>
				<td colspan="2" class = "tablaestadosceldatitulo"><%=Tran.getProperty("GTA_17")%></td>
			</tr>
			<tr><td WIDTH="1%">&nbsp;</td>
				<input type="hidden" id="TP_PERIOD_ALLOWED" name ="TP_PERIOD_ALLOWED">

				<td class="fuentecampo"><br/>&nbsp;<%=Tran.getProperty("GTA_18")%>&nbsp;
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
			                GTAHoursOrPeriod="<m4:item item="SCO_DAYS_OR_HOURS" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
			                >&nbsp;<m4:item m4name="<%=zSCONMINCIDENCE%>" htmlsafe="true"/>
						</option>
					</m4:loop>
					</select>
				</td>
				<td class="fuentecampo">&nbsp;<br/></td>
			</tr>
			<tr><td WIDTH="1%">&nbsp;</td><td colspan="2" class = "fuentecampo">&nbsp;</td></tr>
		</table>

		<table class = "tablaestados" width="100%" cellspacing="0" border="0">
			<tr><td WIDTH="1%">&nbsp;</td>
				<td colspan="5" class = "tablaestadosceldatitulo"><%=Tran.getProperty("GTA_19")%></td>
			</tr>
			<tr><td WIDTH="1%">&nbsp;</td>
				<td class="fuentecampo" colspan="2">*&nbsp;<%=Tran.getProperty("GTA_20")%>
					<input disabled onchange="changeStartDate()" class="fuenteformulario" type="text" name="SCO_DT_START" id="SCO_DT_START" title="Escribe la fecha de inicio" maxlength="10" size="10" tabindex="1"/>&nbsp;
					<a href="javascript:m4calendario(m4objeto('SCO_DT_START','NombreFormulario'));changeStartDate()" title="<%=Tran.getProperty("GTA_21")%>"tabindex="2"><img class="invisible2" name="SCO_DT_START_IMG" id="SCO_DT_START_IMG" src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("GTA_21")%>" /></a>
				</td>
			</tr>

			<tr><td WIDTH="1%">&nbsp;</td>
				<td class="fuentevalor" colspan="2">
					<span class="fuentevalornegrita">&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;<%=Tran.getProperty("GTA_22")%></span><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input onclick="DaysChecked()" type="checkbox" disabled name="MANAGE_IN_PERIOD" id="MANAGE_IN_PERIOD" title="<%=Tran.getProperty("GTA_23")%>" tabindex="2" /></a><span class="fuentevalornegrita"><%=Tran.getProperty("GTA_24")%><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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


</div>

<br/><br/><br/><br/><br/>
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


<%if (!(OpenMassivesIncidences.equals(""))) {%>

window.open('/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_delete_masive_incidences.jsp?tp_sort=2&tp_operation=SORT','popUpForm','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=950,height=650,top='+(screen.height-600)/2.5+',left='+(screen.width-830)/2.5);		

<%}%>

</script>