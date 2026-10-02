function showDayDetailles(date)
{

	document.getElementById('date_to_load_detail').value = date	
	m4submit('LoadDetailesView')

//	var dir="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_day_details_redirection.jsp?estado=14&SCO_GTA_ARG_DATE_TO_STUDY=" + date;
//	window.open(dir,'','width=1024;height=780,left=50,top=50,resizable,scrollbars');
}


function GoPrevious()
{
	document.getElementById('tp_execution').value ="GO_PREVIOUS";
	m4submit('LoadMonthlyView')
}

function GoNext()
{

	document.getElementById('tp_execution').value ="GO_NEXT";
	m4submit('LoadMonthlyView')

}

function setStartDate()
{
	this_record_value = document.getElementById('PARAM_START_DATE').value
//			value_year = this_record_value.substring(0,4)	
//			value_month =  this_record_value.substring(5,7)
//			value_day =  this_record_value.substring(8,10)

			value_year = this_record_value.substring(6,10)	
			value_month =  this_record_value.substring(3,5)
			value_day =  this_record_value.substring(0,2)

			built_date = new Date(value_year, value_month, value_day);
			set_error = "N"
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

				var texto = m4getmessage("_gta_1");
				alert(texto)



				document.getElementById('PARAM_START_DATE').value = m4getmessage("_gta_30");
				return;}
}

function setEndtDate()
{

	this_record_value = document.getElementById('PARAM_END_DATE').value

//			value_year = this_record_value.substring(0,4)	
//			value_month =  this_record_value.substring(5,7)
//			value_day =  this_record_value.substring(8,10)

			value_year = this_record_value.substring(6,10)	
			value_month =  this_record_value.substring(3,5)
			value_day =  this_record_value.substring(0,2)

			built_date = new Date(value_year, value_month, value_day);
			set_error = "N"


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
				var texto = m4getmessage("_gta_1");
				alert(texto)
				document.getElementById('PARAM_END_DATE').value = m4getmessage("_gta_30");
				return;}

}

function LoadDataInPeriod()
{
	this_record_value = document.getElementById('PARAM_START_DATE').value
	if (this_record_value=="")
	{	
		var texto = m4getmessage("_gta_1");
		alert(texto)

		return;}

	value_year_start = this_record_value.substring(6,10)	
	value_month_start =  this_record_value.substring(3,5)
	value_day_start =  this_record_value.substring(0,2)
	this_record_value_start = value_year_start + "-" + value_month_start + "-" + value_day_start


	this_record_value = document.getElementById('PARAM_END_DATE').value
	if (this_record_value=="")
	{	
		var texto = m4getmessage("_gta_1");
		alert(texto)
		return;}

	value_year_end = this_record_value.substring(6,10)	
	value_month_end =  this_record_value.substring(3,5)
	value_day_end =  this_record_value.substring(0,2)
	this_record_value_end = value_year_end + "-" + value_month_end + "-" + value_day_end


	document.getElementById('tp_execution').value = "LOAD_DATA_IN_PERIOD";
//	document.getElementById('start_period').value = document.getElementById('PARAM_START_DATE').value;
//	document.getElementById('end_period').value = document.getElementById('PARAM_END_DATE').value;

	document.getElementById('start_period').value = this_record_value_start;
	document.getElementById('end_period').value = this_record_value_end;

	m4submit('LoadMonthlyView')

}


function save_declarative()
{

	text_to_send = ""
	this_tp_timesheet = document.getElementById('tp_timesheet').value;

	if ((this_tp_timesheet=="MANAGE_IN_DECLARATIVE_DAYS") || (this_tp_timesheet=="MANAGE_IN_CLOCKING_DAYS"))
	{
		num_of_records = document.getElementById('num_of_records_declarative').value;
		for(i=1;i<=num_of_records;i++)
		{
			take_into_account = document.getElementById('take_into_account_' + i).value
			in_the_morning = document.getElementById('morning_' + i).checked
			in_the_afternoon = document.getElementById('afternoon_' + i).checked
			if (take_into_account=="Y")
				text_to_send = text_to_send + (i-1) + "||" + in_the_morning + "||" + in_the_afternoon + "@@"
		}

		text_to_send = "SAVE_MODIFICATIONS_DECLARATIVE||" + text_to_send
		document.getElementById('tp_execution').value ="SAVE_DECLARATIVE";
		document.getElementById('SCO_GTA_ARG_DATE_TO_STUDY').value = text_to_send;
		m4submit('LoadMonthlyView')
	}

	if (this_tp_timesheet=="MANAGE_HOURS_DECL_NO_CLOCK")
	{
		num_of_records = document.getElementById('num_of_records_declarative').value;
		for(i=1;i<=num_of_records;i++)
		{
			in_the_morning = document.getElementById('morning_' + i).value;
			in_the_afternoon = document.getElementById('afternoon_' + i).value;
			in_the_all_day =  document.getElementById('all_' + i).value;
			if (in_the_all_day!="NO_VALUE")
				text_to_send = text_to_send + (i-1) + "||MORNING" + in_the_morning + "||AFTERNOON" + in_the_afternoon + "||ALL" + in_the_all_day + "@@"
		}


		text_to_send = "SAVE_MODIFICATIONS_DECLARATIVE_IN_HOURS||" + text_to_send
		document.getElementById('tp_execution').value ="SAVE_DECLARATIVE";
		document.getElementById('SCO_GTA_ARG_DATE_TO_STUDY').value = text_to_send;
		m4submit('LoadMonthlyView')
	}

	if(this_tp_timesheet=="MANAGE_HOURS_DECLART_CLOCK")
	{


		num_of_records = document.getElementById('Number_TSlot_Total').value;

		for(i=0;i<=num_of_records-1;i++)
		{
			control_flag = 0
			hour_in = document.getElementById('TSlot_in_' + i).value;
			if (hour_in!="")
			  control_flag = control_flag + 1
			hour_out = document.getElementById('TSlot_out_' + i).value;
			if (hour_out!="")
			  control_flag = control_flag + 1

			if (control_flag==1)
			{
				var texto = m4getmessage("_gta_2");
				alert(texto)
				document.getElementById('processing').className='invisible2';
				return;
			}
			in_out_date = document.getElementById('Date_TSlot_' + i).value;
			text_to_send = text_to_send + in_out_date + "||IN" + hour_in + "||OUT" + hour_out + "@@"
		}

		text_to_send = "SAVE_MODIFICATIONS_DECLARATIVE_IN_TSLOTS||" + text_to_send
		document.getElementById('tp_execution').value ="SAVE_DECLARATIVE";
		document.getElementById('SCO_GTA_ARG_DATE_TO_STUDY').value = text_to_send;
//		document.getElementById('processing').className='divPopUp';
		m4submit('LoadMonthlyView')
	}
}

function executeForThisDate(date)
{
	document.getElementById('tp_execution').value = "NEXT_BLOCK_CHANGED";
	document.getElementById('SCO_GTA_ARG_DATE_TO_STUDY').value = "NEXT_BLOCK_CHANGED||" + date;
	m4submit('LoadMonthlyView')
}


function validate_changes()
{
	if (document.getElementById('Blocking').value == "Y")
	{
		var texto = m4getmessage("_gta_15");
		alert(texto)
		document.getElementById('processing').className='invisible2';
		return;
	}

	if (document.getElementById('is_period_used').value == "Y")
	{
		var texto = m4getmessage("_gta_3");
		alert(texto)
		document.getElementById('processing').className='invisible2';
		return;
	}
	else
	{
		document.getElementById('tp_execution').value ="VALIDATE_CHANGES";
//		document.getElementById('processing').className='divPopUp';
		m4submit('LoadMonthlyView')
	}

}



function Unblock_Employee()
{

	if (document.getElementById('is_period_used').value == "Y")
	{
		var texto = m4getmessage("_gta_3");
		alert(texto)
		document.getElementById('processing').className='invisible2';
		return;
	}
	else
	{
		document.getElementById('tp_execution').value ="UNBLOCK_EMPLOYEE";
//		document.getElementById('processing').className='divPopUp';
		m4submit('LoadMonthlyView')
	}

}


function InvisibilitySet (what)
{
	a = what
	b = "table" + a
	c = b + "Other"
	document.getElementById(a).className='invisible2'
	document.getElementById(b).className='invisible2'
	document.getElementById(c).className='tablabordes'
}


function VisibilitySet (what)
{
	a = what
	b = "table" + a
	c = b + "Other"
	document.getElementById(a).className=''
	document.getElementById(b).className='tablabordes'
	document.getElementById(c).className='invisible2'
}

function RemonterAll()
{
	document.getElementById('tp_execution').value ="REMONTER_ALL";
	document.getElementById('processing').className='divPopUp';
	m4submit('LoadMonthlyView')
}

function checkIfHoursValid(field_to_check,idx)
{
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
			var texto = m4getmessage("_gta_4");
			alert(texto)}
	}

 // Vamos acomprobar si tenemos dos valores, para rellenar automáticamene el tercero
 // si tenemos valor en mañana --> indicador = 1
 // si tenemos valor en tarde --> indicador = 3
 // si tenemos valor en todo el día --> indicador = 5
 // Posibles valores al sumar todos los idicadores:

 // valor 0 --> No tenemos nada, no hacemos nada
 // Valor 1 --> Solo tenemos un valor, no hacemos nada
 // Valor 3 --> Solo tenemos un valor, no hacemos nada
 // Valor 5 --> Solo tenemos un valor, no hacemos nada

 // Valor 4 --> Tenemos mañana y tarde ---> Calculamos todo
 // Valor 6 --> Tenemos mañana y todo ---> Calculamos tarde
 // Valor 8 --> Tenemos tarde y todo ---> Calculamos mañana
 // Valor 9 --> Tenemos mañana, tarde y todo ---> Comprobamos que mañana + tarde = todo

	var morning_value = document.getElementById('morning_' + idx).value
	var afternoon_value = document.getElementById('afternoon_' + idx).value
	var all_value = document.getElementById('all_' + idx).value


//*******************************************************************************************************
// Para cada uno de ellos, eliminamos, si los hay carácteres en blanco

	morning_value = morning_value.replace(" ","")
	document.getElementById('morning_' + idx).value = morning_value

	afternoon_value = afternoon_value.replace(" ","")
	document.getElementById('afternoon_' + idx).value = afternoon_value

	all_value = all_value.replace(" ","")
	document.getElementById('all_' + idx).value = all_value

// Ahora, para cada valor, vamos a comprobar si el primer número es un cero (para horas y minutos). En ese caso, lo eliminamos.
// Por ejemplo, un 04:05 lo convertimos en 4:5 

	separator_morning = morning_value.indexOf(':')
	first_in_morning_value_hours = morning_value.substring(0,1)
	first_in_morning_value_minutes = morning_value.substring(separator_morning + 1,separator_morning + 2)

	if (first_in_morning_value_hours=="0")
	{
		morning_value = morning_value.substring(1,morning_value.length)
		separator_morning = separator_morning - 1
//		document.getElementById('morning_' + idx).value = morning_value
	}

	if (first_in_morning_value_minutes=="0")
		morning_value = morning_value.substring(0,separator_morning + 1) + morning_value.substring(separator_morning+2,morning_value.length)


	separator_afternoon = afternoon_value.indexOf(':')
	first_in_afternoon_value_hours = afternoon_value.substring(0,1)
	first_in_afternoon_value_minutes = afternoon_value.substring(separator_afternoon + 1,separator_afternoon + 2)

	if (first_in_afternoon_value_hours=="0")
	{
		afternoon_value = afternoon_value.substring(1,afternoon_value.length)
		separator_afternoon = separator_afternoon - 1
//		document.getElementById('afternoon_' + idx).value = afternoon_value
	}

	if (first_in_afternoon_value_minutes=="0")
		afternoon_value = afternoon_value.substring(0,separator_afternoon + 1) + afternoon_value.substring(separator_afternoon + 2,afternoon_value.length)

	separator_all = all_value.indexOf(':')
	first_in_all_value_hours = all_value.substring(0,1)
	first_in_all_value_minutes = all_value.substring(separator_all + 1,separator_all + 2)

	if (first_in_all_value_hours=="0")
	{
		all_value = all_value.substring(1,all_value.length)
		separator_all = separator_all - 1
//		document.getElementById('all_' + idx).value = all_value
	}

	if (first_in_all_value_minutes=="0")
		all_value = all_value.substring(0,separator_all + 1) + all_value.substring(separator_all + 2,all_value.length)

//*******************************************************************************************************

	indicador = 0

	if (morning_value!="")
		indicador = indicador + 1

	if (afternoon_value!="")
		indicador = indicador + 3

	if (all_value!="")
		indicador = indicador + 5

	if ((indicador == 0) || (indicador == 1) || (indicador == 3) || (indicador == 5))
		return true;



	if (indicador==4)
	{
		separator_morning = morning_value.indexOf(':')
		morning_hours = parseInt(morning_value.substring(0,separator_morning))
		morning_minutes = parseInt(morning_value.substring(separator_morning + 1,morning_value.length))

		separator_afternoon = afternoon_value.indexOf(':')
		afternoon_hours = parseInt(afternoon_value.substring(0,separator_afternoon))
		afternoon_minutes = parseInt(afternoon_value.substring(separator_afternoon + 1,afternoon_value.length))

		aditional_hour = 0
		all_minutes = morning_minutes + afternoon_minutes
		if (all_minutes >59)
		{
			all_minutes = all_minutes - 60
			aditional_hour = 1
		}
		if (String(all_minutes).length==1)
			all_minutes = "0" + String(all_minutes)

		all_hours = morning_hours + afternoon_hours + aditional_hour

		if (String(all_hours).length==1)
			all_hours = "0" + String(all_hours)

		all_value = all_hours + ":" + all_minutes
		document.getElementById('all_' + idx).value = all_value

	}



	if (indicador==6)
	{
		separator_morning = morning_value.indexOf(':')
		morning_hours = parseInt(morning_value.substring(0,separator_morning))
		morning_minutes = parseInt(morning_value.substring(separator_morning + 1,morning_value.length))

		separator_all = all_value.indexOf(':')
		all_hours = parseInt(all_value.substring(0,separator_all))
		all_minutes = parseInt(all_value.substring(separator_all + 1,all_value.length))

		if ((all_minutes==0) && (morning_minutes==0))
		{

			afternoon_hours = all_hours - morning_hours

			if (String(afternoon_hours).length==1)
				afternoon_hours = "0" + String(afternoon_hours)

			afternoon_value = afternoon_hours + ":00"
			document.getElementById('afternoon_' + idx).value = afternoon_value
		}
		else
		{
			aditional_hour = 0
			afternoon_minutes = all_minutes - morning_minutes
			if (afternoon_minutes <= 0)
			{
				afternoon_minutes = (60 - morning_minutes) + all_minutes
				aditional_hour = - 1
				afternoon_hours = all_hours - morning_hours + aditional_hour
			}
			else
			{
				afternoon_minutes = all_minutes - morning_minutes
				afternoon_hours = all_hours - morning_hours
			}
	
			if (String(afternoon_minutes).length==1)
				afternoon_minutes = "0" + String(afternoon_minutes)

			if (String(afternoon_hours).length==1)
				afternoon_hours = "0" + String(afternoon_hours)
	
			afternoon_value = afternoon_hours + ":" + afternoon_minutes
			document.getElementById('afternoon_' + idx).value = afternoon_value
		}

	}


	if (indicador==8)
	{
		separator_afternoon = afternoon_value.indexOf(':')
		afternoon_hours = parseInt(afternoon_value.substring(0,separator_afternoon))
		afternoon_minutes = parseInt(afternoon_value.substring(separator_afternoon + 1,afternoon_value.length))

		separator_all = all_value.indexOf(':')
		all_hours = parseInt(all_value.substring(0,separator_all))
		all_minutes = parseInt(all_value.substring(separator_all + 1,all_value.length))

		aditional_hour = 0

		if ((all_minutes==0) &&(afternoon_minutes==0))
		{
			morning_hours = all_hours - afternoon_hours

			if (String(morning_hours).length==1)
				morning_hours = "0" + String(morning_hours)

			morning_value = morning_hours + ":00"
			document.getElementById('morning_' + idx).value = morning_value
		}
		else
		{
			morning_minutes = all_minutes - afternoon_minutes
			if (morning_minutes <= 0)
			{
				morning_minutes = (60 - afternoon_minutes) + all_minutes
				aditional_hour = - 1
				morning_hours = all_hours - afternoon_hours - 1
			}
			else
			{
				morning_minutes = all_minutes - afternoon_minutes
				morning_hours = all_hours - afternoon_hours
			}
	
			if (String(morning_minutes).length==1)
				morning_minutes = "0" + String(morning_minutes)
	
			if (String(morning_hours).length==1)
				morning_hours = "0" + String(morning_hours)

			morning_value = morning_hours + ":" + morning_minutes
			document.getElementById('morning_' + idx).value = morning_value
		}	

	}



	if (indicador==9)
	{
		separator_morning = morning_value.indexOf(':')
		morning_hours = parseInt(morning_value.substring(0,separator_morning))
		morning_minutes = parseInt(morning_value.substring(separator_morning + 1,morning_value.length))

		separator_afternoon = afternoon_value.indexOf(':')
		afternoon_hours = parseInt(afternoon_value.substring(0,separator_afternoon))
		afternoon_minutes = parseInt(afternoon_value.substring(separator_afternoon + 1,afternoon_value.length))

		aditional_hour = 0
		all_minutes = morning_minutes + afternoon_minutes
		if (all_minutes >59)
		{
			all_minutes = all_minutes - 60
			aditional_hour = 1
		}
		if (String(all_minutes).length==1)
			all_minutes = "0" + String(all_minutes)

		all_hours = morning_hours + afternoon_hours + aditional_hour

		all_value_compose = all_hours + ":" + all_minutes

		separator_all_compose = all_value_compose.indexOf(':')
		first_in_all_compose_value_hours = all_value_compose.substring(0,1)
		first_in_all_compose_value_minutes = all_value_compose.substring(separator_all_compose + 1,separator_all_compose + 2)

		if (first_in_all_compose_value_hours=="0")
		{
			all_value_compose = all_value_compose.substring(1,all_value_compose.length)
			separator_all_compose = separator_all_compose - 1
		}

		if (first_in_all_compose_value_minutes=="0")
			all_value_compose = all_value_compose.substring(0,separator_all_compose + 1) + all_value_compose.substring(separator_all_compose + 2,all_value_compose.length)

		if (all_value_compose != all_value)
		{
			save_value= document.getElementById(field_to_check).value
			document.getElementById('morning_' + idx).value = ""
			document.getElementById('afternoon_' + idx).value = ""
			document.getElementById('all_' + idx).value = ""
			document.getElementById(field_to_check).value = save_value
//		alert("La valeur saisie n'est pas correcte. La somme des heures de matin et après-midi ne correspond pas à la valeur total pour la journée."))

			return;
		}
	}


}

function checkIfHourIsValid(field_to_check,record)
{

	var this_start_hour = document.getElementById("TSlot_in_" + record).value;
	var this_end_hour = document.getElementById("TSlot_out_" + record).value;

	if (this_start_hour == this_end_hour)
	{
		var texto = m4getmessage("_gta_38");
		alert(texto)
		document.getElementById("TSlot_out_" + record).value = "";
		return;
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
			var texto = m4getmessage("_gta_4");
			alert(texto)}
	}
}

	window.addEvent('domready', function() {

		new FloatingTips('#ImageExit a', {
		content: function() { return $('htmlImageExit'); },html: true, position: 'left'});

		new FloatingTips('#ImageSaveValidate a', {
		content: function() { return $('htmlImageSaveValidate'); },html: true, position: 'left'});

		new FloatingTips('#ImageSaveDeclarative a', {
		content: function() { return $('htmlImageSaveDeclarative'); },html: true, position: 'left'});

		new FloatingTips('#ImagePrint a', {
		content: function() { return $('htmlImagePrint'); },html: true, position: 'left'});

		new FloatingTips('#ImageUnblockEmployee a', {
		content: function() { return $('htmlImageUnblockEmployee'); },html: true, position: 'left'});

		new FloatingTips('#ImageUnblockManager a', {
		content: function() { return $('htmlImageUnblockManager'); },html: true, position: 'left'});

		new FloatingTips('#ImageRemonterAll a', {
		content: function() { return $('htmlImageRemonterAll'); },html: true, position: 'left'});

		new FloatingTips('#ImageSelectPeriod a', {
		content: function() { return $('htmlImageSelectPeriod'); },html: true, position: 'left'});

		});
