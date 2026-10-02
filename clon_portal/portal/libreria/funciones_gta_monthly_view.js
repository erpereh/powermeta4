var genNumber = m4getmessage("_gta_10");
var genString = m4getmessage("_gta_11");
var genDate = m4getmessage("_gta_12");
var genHour = m4getmessage("_gta_13");
var genInerval = m4getmessage("_gta_14");
var sformatofechas;

function OpenIncidences()
{
	is_save_allowed = document.getElementById('is_save_allowed_or_not').value
	if (is_save_allowed=="N")
	{
		var texto = m4getmessage("_gta_5");
		alert(texto)
		return;
	}

//	idEmployee =  document.getElementById('this_employee_working').value;

	// Antes de saber qué tipo de llamada tenemos que hacer, vamos a comprobar si el empleado o el manager el que está pidiendo las ausencias

	IsemployeeOrManager = document.getElementById('employeeOrManager').value;

	var incidence = document.getElementById('id_incidence').value;
	var incidence_date = document.getElementById('sDateEcrpt').value;

	var incidenceNo = document.getElementById('id_NOincidence').value;
	var incidence_dateNo = document.getElementById('sDateNOEcrpt').value;


	if (IsemployeeOrManager=="E")
//		window.open('/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_incidences_request.jsp?id_incidence=' + incidence +'&id_incidence_date=' + incidence_date,'popUp','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=830,height=600,top='+(screen.height-600)/2.5+',left='+(screen.width-830)/2.5);	
		window.open('/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_incidences_request.jsp?id_incidence=' + incidence +'&id_incidence_date=' + incidence_dateNo,'popUp','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=830,height=600,top='+(screen.height-600)/2.5+',left='+(screen.width-830)/2.5);	

	else
	{
		var popullationIds = document.getElementById('sIdHrNoEcrpt').value + "#";
		idEmployee =  document.getElementById('EmployeeEncripted').value;

		dateUF = document.getElementById('date_to_study').value;

		value_year = dateUF.substring(0,4)	
		value_month =  dateUF.substring(5,7)
		value_day =  dateUF.substring(8,10)
		dateUF = value_day + "-" + value_month + "-" + value_year
			
		openIncidencePageGTA("4",idEmployee,incidence_dateNo,incidence_dateNo,incidence,"");
		
//		incidence = "A3";
//		window.open('/servlet/CheckSecurity/JSP/mss_g4/mss_g4_focus.jsp?argHR='+idEmployee+'&argDateDeb='+dateUF+'&argIncidence='+incidence+'&argFunction=load','popUpForm','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=830,height=600,top='+(screen.height-600)/2.5+',left='+(screen.width-830)/2.5);	
//		window.open('/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_masive_incidences.jsp?id_incidence=' + incidence + '&id_incidence_date=' + incidence_date + '&incidencie_population=' + popullationIds,'popUp','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=830,height=600,top='+(screen.height-600)/2.5+',left='+(screen.width-830)/2.5);	

//		window.open('/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_masive_incidences.jsp?id_incidence=' + incidenceNo + '&id_incidence_date=' + incidence_dateNo + '&incidencie_population=' + idEmployee,'popUp','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=830,height=600,top='+(screen.height-600)/2.5+',left='+(screen.width-830)/2.5);	
		}
}


function addNewRecord(this_node)
{

	records_visibles = document.getElementById('THEORETICAL_RECORS_VISIBLES').value;
	new_records_visibles = parseInt(records_visibles) + 1
	document.getElementById('THEORETICAL_RECORS_VISIBLES').value = new_records_visibles
	document.getElementById('RECORD_' + new_records_visibles).className="tablaestadosceldatitulolitle";
}

function addNewRecordBadgage()
{

	records_visibles = document.getElementById('BADGAGE_RECORS_VISIBLES').value;
	new_records_visibles = parseInt(records_visibles) + 1
	document.getElementById('BADGAGE_RECORS_VISIBLES').value = new_records_visibles
	document.getElementById('RECORD_BADGAGE_' + new_records_visibles).className="tablaestadosceldatitulolitle";
}

function addNewRecordRealDone()
{

	records_visibles = document.getElementById('REAL_DONE_RECORS_VISIBLES').value;
	new_records_visibles = parseInt(records_visibles) + 1
	document.getElementById('REAL_DONE_RECORS_VISIBLES').value = new_records_visibles
	document.getElementById('RECORD_REAL_DONE_' + new_records_visibles).className="tablaestadosceldatitulolitle";
}


function SetNoValueTsProperties(num_tslot,num_recor)
{

	var this_record_value = document.getElementById('TSProperties_' + num_tslot + "_" + num_recor).value;
	var m4_value_type = document.getElementById("VAR_TYPE_" + num_tslot + "_" + num_recor).value;

	if ((m4_value_type=="6") && (this_record_value == genNumber))
		document.getElementById('TSProperties_' + num_tslot + "_" + num_recor).value = "";

	if ((m4_value_type=="2") && (this_record_value == genString))
		document.getElementById('TSProperties_' + num_tslot + "_" + num_recor).value = "";

	if ((m4_value_type=="4") && (this_record_value == genDate))
		document.getElementById('TSProperties_' + num_tslot + "_" + num_recor).value = "";

	if ((m4_value_type=="12") && (this_record_value == genHour))
		document.getElementById('TSProperties_' + num_tslot + "_" + num_recor).value = "";

	if ((m4_value_type=="17") && (this_record_value == genInerval))
		document.getElementById('TSProperties_' + num_tslot + "_" + num_recor).value = "";

}

function SetNoValueProperties(id_property)
{

document.getElementById(id_property).value = ""

/*
	var this_record_value = document.getElementById(id_property).value;
	var m4_value_type = document.getElementById("VAR_TYPE_" + id_property).value;

	if ((m4_value_type=="6") && (this_record_value == genNumber))
		document.getElementById(id_property).value = "";

	if ((m4_value_type=="2") && (this_record_value == genString))
		document.getElementById(id_property).value = "";

	if ((m4_value_type=="4") && (this_record_value == genDate))
		document.getElementById(id_property).value = "";

	if ((m4_value_type=="12") && (this_record_value == genHour))
		document.getElementById(id_property).value = "";

	if ((m4_value_type=="17") && (this_record_value == "Intervalle"))
		document.getElementById(id_property).value = "";
*/
}

function SetNoValueCounters(id_counter)
{

document.getElementById(id_counter).value = ""

/*
	var this_record_value = document.getElementById(id_counter).value;
	var m4_value_type = document.getElementById("VAR_TYPE_" + id_counter).value;

	if ((m4_value_type=="6") && (this_record_value == genNumber))
		document.getElementById(id_counter).value = "";

	if ((m4_value_type=="2") && (this_record_value == genString))
		document.getElementById(id_counter).value = "";

	if ((m4_value_type=="4") && (this_record_value == genDate))
		document.getElementById(id_counter).value = "";

	if ((m4_value_type=="12") && (this_record_value == genHour))
		document.getElementById(id_counter).value = "";

	if ((m4_value_type=="17") && (this_record_value == "Intervalle"))
		document.getElementById(id_counter).value = "";
*/
}



		function SetInvisibility (what)
		{
			a = what
			b = "table" + a
			c = b + "Other"
			document.getElementById(a).className='invisible'
			document.getElementById(b).className='invisible'
			document.getElementById(c).className='tablabordes'
		}

		function SetVisibility (what)
		{
			a = what
			b = "table" + a
			c = b + "other"

			document.getElementById(a).className=''
			document.getElementById(b).className='tablabordes'
			document.getElementById(c).className='invisible'
		}


		function SetTableToModify(IDtable)
		{

			is_save_allowed = document.getElementById('is_save_allowed_or_not').value
			if (is_save_allowed=="N")
			{
				var texto = m4getmessage("_gta_5");
				alert(texto)
				return;
			}

			// Primero ocultamos todas

			CloseTableToModify('Theoretical')
			CloseTableToModify('Badgeage')
			

			document.getElementById('Modification').className='fondoModificacion'
			document.getElementById(IDtable).className='posicionModificacion'
		}

		function CloseTableToModify(IDtable)
		{
			document.getElementById('Modification').className='invisible'
			document.getElementById(IDtable).className='invisible'
		}

	function saveChanges(this_node)
	{

		is_save_allowed = document.getElementById('is_save_allowed_or_not').value
		if (is_save_allowed=="N")
		{
			var texto = m4getmessage("_gta_5");
			alert(texto)
			return;
		}

		document.getElementById('tp_execution').value ="SAVE_CHANGES";
		document.getElementById('node_to_save').value = this_node;
		m4submit('LoadMonthlyView')
//		CloseTableToModify('Theoretical')
	}

	function saveChangesInTSProperties(num_tslot)
	{
		is_save_allowed = document.getElementById('is_save_allowed_or_not').value
		if (is_save_allowed=="N")
		{
			var texto = m4getmessage("_gta_5");
			alert(texto)
			return;
		}

		document.getElementById('tp_execution').value ="SAVE_CHANGES";
		document.getElementById('node_to_save').value = "SCO_GTA_TABLE_DATA_REPRESENTAT";
		m4submit('LoadMonthlyView')
//		CloseTableToModify('TSProperties_' + num_tslot)
	}

	function saveChangesInProperties()
	{
		is_save_allowed = document.getElementById('is_save_allowed_or_not').value
		if (is_save_allowed=="N")
		{
			var texto = m4getmessage("_gta_5");
			alert(texto)
			return;
		}

		document.getElementById('tp_execution').value ="SAVE_CHANGES";
		document.getElementById('node_to_save').value = "SCO_GTA_INTERFACE_4_PROPRTS";
		m4submit('LoadMonthlyView')
	}
	
	function saveChangesInCounters()
	{
		is_save_allowed = document.getElementById('is_save_allowed_or_not').value
		if (is_save_allowed=="N")
		{
			var texto = m4getmessage("_gta_5");
			alert(texto)
			return;
		}

		document.getElementById('tp_execution').value = "SAVE_CHANGES";
		document.getElementById('node_to_save').value = "SCO_GTA_LOAD_COUNTERS_4_DAY";
		m4submit('LoadMonthlyView')
	}

	function saveChangesInAlerts()
	{
		document.getElementById('tp_execution').value ="SAVE_CHANGES";
		document.getElementById('node_to_save').value = "SCO_GTA_LOAD_ALERTS_4_DAY";
		m4submit('LoadMonthlyView')
	}

	function GoPreviousDay()
	{
		is_save_allowed = document.getElementById('is_save_allowed_or_not').value
		if (is_save_allowed=="N")
		{
			var texto = m4getmessage("_gta_5");
			alert(texto)
			return;
		}

		document.getElementById('tp_execution').value ="PREVIOUS";
		m4submit('LoadMonthlyView')
	}

	function GoNextDay()
	{
		document.getElementById('tp_execution').value ="NEXT";
		m4submit('LoadMonthlyView')
	}


	function CloseAndExit()
	{
		document.getElementById('tp_execution').value ="CLOSE";
		m4submit('LoadMonthlyView')
	}

	function transferReferenceTime()
	{
		is_save_allowed = document.getElementById('is_save_allowed_or_not').value
		if (is_save_allowed=="N")
		{
			var texto = m4getmessage("_gta_5");
			alert(texto)
			return;
		}

		document.getElementById('tp_execution').value ="TRANSFER_REFERENCE";
		m4submit('LoadMonthlyView')
	}

	function ViewAllProperties()
	{
		document.getElementById('tp_execution').value ="VIEW_ALL_PROPERTIES";
		m4submit('LoadMonthlyView')
	}

	function noViewAllProperties()
	{
		document.getElementById('tp_execution').value ="NO_VIEW_ALL_PROPERTIES";
		m4submit('LoadMonthlyView')
	}

	function ViewAllCounters()
	{
		document.getElementById('tp_execution').value ="VIEW_ALL_COUNTERS";
		m4submit('LoadMonthlyView')
	}

	function noViewAllCounters()
	{
		document.getElementById('tp_execution').value ="NO_VIEW_ALL_COUNTERS";
		m4submit('LoadMonthlyView')
	}


	function DeleteRecord(idRecord,this_node)
	{ 

		document.getElementById('START_AT_' + idRecord).disabled=true;
		document.getElementById('END_AT_' + idRecord).disabled=true;
		document.getElementById('RESTAURER_' + idRecord).className="";
		document.getElementById('DELETE_' + idRecord).className="invisible";
		current_value = document.getElementById('operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF').value;
		new_text = "NODE##" + this_node + "||RECORD##" + idRecord + "||OPERATION##SET_AS_DELETE"
		document.getElementById('operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF').value = current_value + new_text + "@@"

	}


	function DeleteRecordBadgage(idRecord)
	{ 
		document.getElementById('START_AT_BADGAGE_' + idRecord).disabled=true;
		document.getElementById('END_AT_BADGAGE_' + idRecord).disabled=true;
		document.getElementById('RESTAURER_BADGAGE_' + idRecord).className="";
		document.getElementById('DELETE_BADGAGE_' + idRecord).className="invisible";
		current_value = document.getElementById('operation_in_SCO_GTA_INTERFACE_4_BADGAGE').value;
		new_text = "NODE##SCO_GTA_INTERFACE_4_BADGAGE||RECORD##" + idRecord + "||OPERATION##SET_AS_DELETE"
		document.getElementById('operation_in_SCO_GTA_INTERFACE_4_BADGAGE').value = current_value + new_text + "@@"
	}

	function DeleteRecordrealDone(idRecord)
	{ 
		document.getElementById('START_AT_REAL_DONE_' + idRecord).disabled=true;
		document.getElementById('END_AT_REAL_DONE_' + idRecord).disabled=true;
		document.getElementById('RESTAURER_REAL_DONE_' + idRecord).className="";
		document.getElementById('DELETE_REAL_DONE_' + idRecord).className="invisible";
		current_value = document.getElementById('operation_in_SCO_GTA_INTERFACE_4_REAL_DONE').value;
		new_text = "NODE##SCO_GTA_INTERFACE_4_REAL_DONE||RECORD##" + idRecord + "||OPERATION##SET_AS_DELETE"
		document.getElementById('operation_in_SCO_GTA_INTERFACE_4_REAL_DONE').value = current_value + new_text + "@@"

	}


	function restoreRegsiter(idRecord,this_node)
	{
		document.getElementById('START_AT_' + idRecord).disabled=false;
		document.getElementById('END_AT_' + idRecord).disabled=false;
		document.getElementById('RESTAURER_' + idRecord).className="invisible";
		document.getElementById('DELETE_' + idRecord).className="";
		current_value = document.getElementById('operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF').value;
		new_text = "NODE##" + this_node + "||RECORD##" + idRecord + "||OPERATION##UNSET_AS_DELETE"
		document.getElementById('operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF').value = current_value + new_text + "@@"
	}


	function restoreRegsiterBadgage(idRecord)
	{
		document.getElementById('START_AT_BADGAGE_' + idRecord).disabled=false;
		document.getElementById('END_AT_BADGAGE_' + idRecord).disabled=false;
		document.getElementById('RESTAURER_BADGAGE_' + idRecord).className="invisible";
		document.getElementById('DELETE_BADGAGE_' + idRecord).className="";
		current_value = document.getElementById('operation_in_SCO_GTA_INTERFACE_4_BADGAGE').value;
		new_text = "NODE##SCO_GTA_INTERFACE_4_BADGAGE||RECORD##" + idRecord + "||OPERATION##UNSET_AS_DELETE"
		document.getElementById('operation_in_SCO_GTA_INTERFACE_4_BADGAGE').value = current_value + new_text + "@@"

	}

	function restoreRegsiterRealDone(idRecord)
	{
		document.getElementById('START_AT_REAL_DONE_' + idRecord).disabled=false;
		document.getElementById('END_AT_REAL_DONE_' + idRecord).disabled=false;
		document.getElementById('RESTAURER_REAL_DONE_' + idRecord).className="invisible";
		document.getElementById('DELETE_REAL_DONE_' + idRecord).className="";
		current_value = document.getElementById('operation_in_SCO_GTA_INTERFACE_4_REAL_DONE').value;
		new_text = "NODE##SCO_GTA_INTERFACE_4_REAL_DONE||RECORD##" + idRecord + "||OPERATION##UNSET_AS_DELETE"
		document.getElementById('operation_in_SCO_GTA_INTERFACE_4_REAL_DONE').value = current_value + new_text + "@@"
	}


	function setAsModify(idRecord,this_node)
	{
		is_save_allowed = document.getElementById('is_save_allowed_or_not').value
		if (is_save_allowed=="N")
		{
			var texto = m4getmessage("_gta_5");
			alert(texto)
			return;
		}

		if (this_node=="SCO_GTA_INTERFACE_4_THEOR_MODF")
		{
			hour_start = document.getElementById('START_AT_' + idRecord).value;
			hour_end = document.getElementById('END_AT_' + idRecord).value;
		}
		if (this_node=="SCO_GTA_INTERFACE_4_BADGAGE")
		{
			hour_start = document.getElementById('START_AT_BADGAGE_' + idRecord).value;
			hour_end = document.getElementById('END_AT_BADGAGE_' + idRecord).value;
		}
		if (this_node=="SCO_GTA_INTERFACE_4_REAL_DONE")
		{
			hour_start = document.getElementById('START_AT_REAL_DONE_' + idRecord).value;
			hour_end = document.getElementById('END_AT_REAL_DONE_' + idRecord).value;
		}
		if (hour_start!="")
		{	separator = hour_start.indexOf(':')
			set_error = "N"
			if (separator<1)
				set_error="Y"
			else
			{
				this_hours = hour_start.substring(0,separator)
				this_minutes = hour_start.substring(separator + 1,hour_start.length)
				if (this_hours.length!=2)
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
				var texto2 = m4getmessage("_gta_6");
				alert(texto2)
			    return;}
	}
		if (hour_end!="")
		{	separator = hour_end.indexOf(':')
			set_error = "N"
			if (separator<1)
				set_error="Y"
			else
			{
				this_hours = hour_end.substring(0,separator)
				this_minutes = hour_end.substring(separator + 1,hour_end.length)
				if (this_hours.length!=2)
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
				var texto3 = m4getmessage("_gta_6");
				alert(texto3)
			     return false;}
		}

		if (hour_start=="")
			new_text = "NODE##" + this_node + "||RECORD##" + idRecord + "||OPERATION##SET_AS_MODIFY" + "||SCO_GTA_ENDS_AT_NEW##" + hour_end
		if (hour_end=="")
			new_text = "NODE##" + this_node + "||RECORD##" + idRecord + "||OPERATION##SET_AS_MODIFY" + "||SCO_GTA_STARTS_AT_NEW##" + hour_start
		if ((hour_end!="")&&(hour_start!=""))
			new_text = "NODE##" + this_node + "||RECORD##" + idRecord + "||OPERATION##SET_AS_MODIFY" + "||SCO_GTA_STARTS_AT_NEW##" + hour_start + "||SCO_GTA_ENDS_AT_NEW##" +  hour_end

		if (this_node=="SCO_GTA_INTERFACE_4_THEOR_MODF")
		{
			current_value = document.getElementById('operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF').value;
			document.getElementById('operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF').value = current_value + new_text + "@@"
		}
		if (this_node=="SCO_GTA_INTERFACE_4_BADGAGE")
		{
			current_value = document.getElementById('operation_in_SCO_GTA_INTERFACE_4_BADGAGE').value;
			document.getElementById('operation_in_SCO_GTA_INTERFACE_4_BADGAGE').value = current_value + new_text + "@@"
		}
		if (this_node=="SCO_GTA_INTERFACE_4_REAL_DONE")
		{
			current_value = document.getElementById('operation_in_SCO_GTA_INTERFACE_4_REAL_DONE').value;
			document.getElementById('operation_in_SCO_GTA_INTERFACE_4_REAL_DONE').value = current_value + new_text + "@@"
		}
	}

	function setAsModifyTSProperty(num_tslot,num_recor)
	{
		is_save_allowed = document.getElementById('is_save_allowed_or_not').value
		if (is_save_allowed=="N")
		{
			var texto = m4getmessage("_gta_5");
			alert(texto)
			return;
		}

		var this_record_value = document.getElementById('TSProperties_' + num_tslot + "_" + num_recor).value;
		var m4_value_type = document.getElementById("VAR_TYPE_" + num_tslot + "_" + num_recor).value;
		var check_value = "Y"

		if ((m4_value_type=="6") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById('TSProperties_' + num_tslot + "_" + num_recor).value = genNumber;
			check_value = "N"
		}
		if ((m4_value_type=="2") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById('TSProperties_' + num_tslot + "_" + num_recor).value = genString;
			check_value = "N"
		}

		if ((m4_value_type=="4") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById('TSProperties_' + num_tslot + "_" + num_recor).value = genDate;
			check_value = "N"
		}

		if ((m4_value_type=="12") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById('TSProperties_' + num_tslot + "_" + num_recor).value = genHour;
			check_value = "N"
		}

		if ((m4_value_type=="17") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById('TSProperties_' + num_tslot + "_" + num_recor).value = genInerval;
			check_value = "N"
		}

		if (check_value == "Y")
		{
			if ((m4_value_type=="6") && (this_record_value !=genNumber))
			{
			if( isNaN(this_record_value) ) {
				var texto2 = m4getmessage("_gta_7");
				alert(texto2)
				return false;}
			}
		
			if ((m4_value_type=="4") && (this_record_value !=genDate))
			{
//				value_year = this_record_value.substring(1,4)	
//				value_month =  this_record_value.substring(6,7)
//				value_day =  this_record_value.substring(9,10)

				value_year = this_record_value.substring(7,10)	
				value_month =  this_record_value.substring(4,5)
				value_day =  this_record_value.substring(1,2)
				this_record_value = value_year + "-" + value_month + "-" + value_day

				built_date = new Date(value_year, value_month, value_day);
				if (value_year.length < 4)
					set_error = "Y"
				if (value_month.length < 2)
					set_error = "Y"
				if (value_day.length < 2)
					set_error = "Y"
				if ((value_year < 1900) || (value_year > 2100))
					set_error = "Y"
				if ((value_month < 1) || (value_month > 12))
					set_error = "Y"
				if ((value_day < 1) || (value_day > 31))
					set_error = "Y"
				if (isNaN(built_date)) 
					set_error = "Y"
				if (set_error == "Y")	{
					var texto3 = m4getmessage("_gta_8");
					alert(texto3)
					return false;}
			}
			if ((m4_value_type=="12") && (this_record_value !=genHour))
			{
				separator = this_record_value.indexOf(':')
				set_error = "N"
				if (separator<1)
					set_error="Y"
				else
				{
					this_hours = this_record_value.substring(0,separator)
					this_minutes = this_record_value.substring(separator + 1,this_record_value.length)
					if (this_hours.length!=2)
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
					var texto4 = m4getmessage("_gta_9");
					alert(texto4)
					return false;
				}
			}

			if ((m4_value_type=="17") && (this_record_value !=genInerval))
			{
				separator = this_record_value.indexOf(':')
				set_error = "N"
				if (separator<1)
					set_error="Y"
				else
				{
					this_hours = this_record_value.substring(0,separator)
					this_minutes = this_record_value.substring(separator + 1,this_record_value.length)
//					if (this_hours.length!=2)
//						set_error="Y"

				if (this_hours.length<1)
					set_error="Y"

				if (this_hours.length>4)
					set_error="Y"

					if (this_minutes.length!=2)
						set_error="Y"
					if(isNaN(this_hours) )
						set_error="Y"
					if(isNaN(this_minutes) )
						set_error="Y"
					if ((this_hours<0) || (this_hours>9999)) 
						set_error="Y"
					if ((this_minutes<0) || (this_minutes>59)) 
						set_error="Y"
				}
				if(set_error=="Y") {
					var texto5 = m4getmessage("_gta_9");
					alert(texto5)
					return false;
				}
			}
		}
	
		new_text = "NODE##SCO_GTA_TABLE_DATA_REPRESENTAT||RECORD##" + num_tslot + "||OPERATION##SET_AS_MODIFY" + "||PROPERTY_RECORD##" + num_recor + "||SCO_GTA_NEW_VALUE##" + this_record_value;
		current_value = document.getElementById('operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT').value;
		document.getElementById('operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT').value = current_value + new_text + "@@"
	}

	function setAsModifyProperty(id_property)
	{
		is_save_allowed = document.getElementById('is_save_allowed_or_not').value
		if (is_save_allowed=="N")
		{
			var texto = m4getmessage("_gta_5");
			alert(texto)
			return;
		}

		var IsNoModifiable = document.getElementById("NoModifiable"+id_property).value;

		if (IsNoModifiable == 0)
			return false;

		var this_record_value = document.getElementById(id_property).value;

		var m4_value_type = document.getElementById("VAR_TYPE_" + id_property).value;

		var check_value = "Y"

		if ((m4_value_type=="6") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById(id_property).value = genNumber;
			check_value = "N"
		}
		if ((m4_value_type=="2") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById(id_property).value = genString;
			check_value = "N"
		}
	
		if ((m4_value_type=="4") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById(id_property).value = genDate;
			check_value = "N"
		}
	
		if ((m4_value_type=="12") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById(id_property).value = genHour;
			check_value = "N"
		}

			if ((m4_value_type=="17") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById(id_property).value = genInerval;
			check_value = "N"
		}

		if (check_value == "Y")
		{
	
			if ((m4_value_type=="6") && (this_record_value !=genNumber))
			{
				if( isNaN(this_record_value) ) {
					var texto2 = m4getmessage("_gta_7");
					alert(texto2)
					return false;}
			}
					
			if ((m4_value_type=="4") && (this_record_value !=genDate))
			{
//				value_year = this_record_value.substring(1,4)	
//				value_month =  this_record_value.substring(6,7)
//				value_day =  this_record_value.substring(9,10)

				value_year = this_record_value.substring(7,10)	
				value_month =  this_record_value.substring(4,5)
				value_day =  this_record_value.substring(1,2)
				this_record_value = value_year + "-" + value_month + "-" + value_day

				built_date = new Date(value_year, value_month, value_day);
	
				if (value_year.length < 4)
					set_error = "Y"
				if (value_month.length < 2)
					set_error = "Y"
				if (value_day.length < 2)
					set_error = "Y"
				if ((value_year < 1900) || (value_year > 2100))
					set_error = "Y"
				if ((value_month < 1) || (value_month > 12))
					set_error = "Y"
				if ((value_day < 1) || (value_day > 31))
					set_error = "Y"
				if (isNaN(built_date)) 
					set_error = "Y"
				if (set_error == "Y")	{
					var texto3 = m4getmessage("_gta_8");
					alert(texto3)
					return false;}
			}
	
			if ((m4_value_type=="12") && (this_record_value !=genHour))
			{
				separator = this_record_value.indexOf(':')
				set_error = "N"
	
				if (separator<1)
					set_error="Y"
				else
				{
					this_hours = this_record_value.substring(0,separator)
					this_minutes = this_record_value.substring(separator + 1,this_record_value.length)
					if (this_hours.length!=2)
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
					var texto4 = m4getmessage("_gta_9");
					alert(texto4)
					return false;
				}
			}

			if ((m4_value_type=="17") && (this_record_value !=genInerval))
			{
				separator = this_record_value.indexOf(':')
				set_error = "N"
	
				if (separator<1)
					set_error="Y"
				else
				{
					this_hours = this_record_value.substring(0,separator)
					this_minutes = this_record_value.substring(separator + 1,this_record_value.length)
//					if (this_hours.length!=2)
//						set_error="Y"

				if (this_hours.length<1)
					set_error="Y"

				if (this_hours.length>4)
					set_error="Y"

					if (this_minutes.length!=2)
						set_error="Y"
					if(isNaN(this_hours) )
						set_error="Y"
					if(isNaN(this_minutes) )
						set_error="Y"
					if ((this_hours<0) || (this_hours>9999)) 
						set_error="Y"
					if ((this_minutes<0) || (this_minutes>59)) 
						set_error="Y"
				}
				if(set_error=="Y") {
					var texto5 = m4getmessage("_gta_9");
					alert(texto5)
					return false;
				}
			}
		}
	
		new_text = "NODE##SCO_GTA_LOAD_PROPERTIES_4_DAY||RECORD##" + id_property + "||OPERATION##SET_AS_MODIFY" + "||SCO_NEW_VALUE##" + this_record_value;

		current_value = document.getElementById('operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY').value;

		document.getElementById('operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY').value = current_value + new_text + "@@"

	}

	function setAsModifyCounter(id_counter)
	{
		is_save_allowed = document.getElementById('is_save_allowed_or_not').value
		if (is_save_allowed=="N")
		{
			var texto = m4getmessage("_gta_5");
			alert(texto)
			return;
		}

		var IsNoModifiable = document.getElementById("NoModifiable"+id_counter).value;
		if (IsNoModifiable == "N")
			return false;
	
		var this_record_value = document.getElementById(id_counter).value;
		if (this_record_value == "Vous devez aller supprimer les variables internes associées du noeud %0:s de l'objet %1:s ainsi que leurs DMD associés.")
		{return false;}

		var m4_value_type = document.getElementById("VAR_TYPE_" + id_counter).value;
		var check_value = "Y"
	
		if ((m4_value_type=="6") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById(id_counter).value = genNumber;
			check_value = "N"
		}
		if ((m4_value_type=="2") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById(id_counter).value = genString;
			check_value = "N"
		}
	
		if ((m4_value_type=="4") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById(id_counter).value = genDate;
			check_value = "N"
		}
	
		if ((m4_value_type=="12") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById(id_counter).value = genHour;
			check_value = "N"
		}

			if ((m4_value_type=="17") && ((this_record_value == "") || (this_record_value == null)))
		{
			document.getElementById(id_counter).value = genInerval;
			check_value = "N"
		}

		if (check_value == "Y")
		{
	
			if ((m4_value_type=="6") && (this_record_value !=genNumber))
			{
				if( isNaN(this_record_value) ) {
					var texto6 = m4getmessage("_gta_7");
					alert(texto6)
					return false;}
			}
					
			if ((m4_value_type=="4") && (this_record_value !=genDate))
			{
//				value_year = this_record_value.substring(1,4)	
//				value_month =  this_record_value.substring(6,7)
//				value_day =  this_record_value.substring(9,10)

				value_year = this_record_value.substring(7,10)	
				value_month =  this_record_value.substring(4,5)
				value_day =  this_record_value.substring(1,2)
				this_record_value = value_year + "-" + value_month + "-" + value_day

				built_date = new Date(value_year, value_month, value_day);
	
				if (value_year.length < 4)
					set_error = "Y"
				if (value_month.length < 2)
					set_error = "Y"
				if (value_day.length < 2)
					set_error = "Y"
				if ((value_year < 1900) || (value_year > 2100))
					set_error = "Y"
				if ((value_month < 1) || (value_month > 12))
					set_error = "Y"
				if ((value_day < 1) || (value_day > 31))
					set_error = "Y"
				if (isNaN(built_date)) 
					set_error = "Y"
				if (set_error == "Y")	{
					var texto7 = m4getmessage("_gta_8");
					alert(texto7)
					return false;}
			}
	
			if ((m4_value_type=="12") && (this_record_value !=genHour))
			{
				separator = this_record_value.indexOf(':')
				set_error = "N"
	
				if (separator<1)
					set_error="Y"
				else
				{
					this_hours = this_record_value.substring(0,separator)
					this_minutes = this_record_value.substring(separator + 1,this_record_value.length)
					if (this_hours.length!=2)
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
					var texto8 = m4getmessage("_gta_9");
					alert(texto8)
					return false;
				}
			}

			if ((m4_value_type=="17") && (this_record_value !=genInerval))
			{
				separator = this_record_value.indexOf(':')
				set_error = "N"
	
				if (separator<1)
					set_error="Y"
				else
				{
					this_hours = this_record_value.substring(0,separator)
					this_minutes = this_record_value.substring(separator + 1,this_record_value.length)
//					if (this_hours.length!=2)
//						set_error="Y"

				if (this_hours.length<1)
					set_error="Y"

				if (this_hours.length>4)
					set_error="Y"

					if (this_minutes.length!=2)
						set_error="Y"
					if(isNaN(this_hours) )
						set_error="Y"
					if(isNaN(this_minutes) )
						set_error="Y"
					if ((this_hours<0) || (this_hours>9999)) 
						set_error="Y"
					if ((this_minutes<0) || (this_minutes>59)) 
						set_error="Y"
				}
				if(set_error=="Y") {
					var texto9 = m4getmessage("_gta_9");
					alert(texto9)
					return false;
				}
			}
		}
	
		new_text = "NODE##SCO_GTA_LOAD_COUNTERS_4_DAY||RECORD##" + id_counter + "||OPERATION##SET_AS_MODIFY" + "||SCO_GTA_NEW_VALUE##" + this_record_value;
		current_value = document.getElementById('operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY').value;
		document.getElementById('operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY').value = current_value + new_text + "@@"
}


	function setAsModifyAlert(id_alert)
	{
		is_save_allowed = document.getElementById('is_save_allowed_or_not').value
		if (is_save_allowed=="N")
		{
			var texto = m4getmessage("_gta_5");
			alert(texto)

			return;
		}

		var isChecked = document.getElementById(id_alert).checked;
		if (isChecked==true)
		{
			document.getElementById(id_alert).checked= false;
			this_record_value = "N"
		}
		else
		{
			document.getElementById(id_alert).checked = true;
			this_record_value = "Y"
		}

		new_text = "NODE##SCO_GTA_LOAD_ALERTS_4_DAY||RECORD##" + id_alert + "||OPERATION##SET_AS_MODIFY" + "||SCO_GTA_NEW_VALUE##" + this_record_value
		current_value = document.getElementById('operation_in_SCO_GTA_LOAD_ALERTS_4_DAY').value;
		document.getElementById('operation_in_SCO_GTA_LOAD_ALERTS_4_DAY').value = current_value + new_text + "@@"
	}

	function setAsModifyConfiguration(id_config_property)
	{
		var isChecked = document.getElementById(id_config_property).checked;
		if (isChecked==true)
			this_record_value = "Y"
		else
			this_record_value = "N"

		new_text = "NODE##SCO_GTA_MONTHLY_CONF_4_USER||RECORD##" + id_config_property + "||OPERATION##SET_AS_MODIFY" + "||VALUE_CONFIGURATION_PROPERTY##" + this_record_value
		current_value = document.getElementById('operation_in_SCO_GTA_MONTHLY_CONF_4_USER').value;
		document.getElementById('operation_in_SCO_GTA_MONTHLY_CONF_4_USER').value = current_value + new_text + "@@"
	}

	function saveChangesInConfigurations()
	{

		document.getElementById('tp_execution').value = "SAVE_CHANGES";
		document.getElementById('node_to_save').value = "SCO_GTA_MONTHLY_CONF_4_USER";
		m4submit('LoadMonthlyView')
	}

	function GoToConfiguration()
	{
	document.getElementById('ConfigurationParam').className="";
	}


	function CloseConfigurationParam()
	{
		document.getElementById('ConfigurationParam').className="invisible";
	}

	function BackToMonthly()
	{
		m4submit('MainMonthlyView')
	}