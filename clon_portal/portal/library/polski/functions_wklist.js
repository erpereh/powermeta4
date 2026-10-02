/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: functions_wklist.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


//******************************************************************************************
//FUNCION: Funciones auxiliares para manejar horas y minutos
//FECHA: 
//PARAMETROS DE ENTRADA: 
//COMENTARIOS: Funcion auxiliar usada en las siguientes páginas de la Lista de tareas:
// wkitem_form_agenda, wkitem_form_reminder, wkitem_form_edit_agenda, wkitem_form_edit_reminder
//*************************************************************************************

function prevHour(object_hour) {
   hours = object_hour.value;
   if ( hours > 0) {
	  hours = hours+"-1";
	  hours = eval(hours);
   } else {
	  hours = 23;
   }

   object_hour.value = ((hours < 10) ? '0' + hours: hours);
}
   
function nextHour(object_hour) {
   hours = object_hour.value;
   if ( hours < 23) {
	  hours = hours+"+1";
	  hours = eval(hours);
   } else {
	  hours = 0;
   }

   object_hour.value = ((hours < 10) ? '0' + hours: hours);
}



function prevMinute(object_minutes) {
   minutes = object_minutes.value;
   if ( minutes > 0) {
	  minutes = minutes+"-1";
	  minutes = eval(minutes);
   } else {
	  minutes = 59;
   }

   object_minutes.value = ((minutes < 10) ? '0' + minutes: minutes);
}

function nextMinute(object_minutes) {
   minutes = object_minutes.value;
   if ( minutes < 58) {
	  minutes = minutes+"+1";
	  minutes = eval(minutes);
   } else {
	  minutes = 0;
   }

   object_minutes.value = ((minutes < 10) ? '0' + minutes: minutes);
}

//******************************************************************************************
//FUNCION: Función auxiliar usada en las páginas de la lista de tareas
//FECHA: 
//PARAMETROS DE ENTRADA: 
//COMENTARIOS: Funcion auxiliar usada en las siguientes páginas de la Lista de tareas:
// wkitem_form_agenda, wkitem_form_reminder, wkitem_form_edit_agenda, wkitem_form_edit_reminder
//
// OJO, LOS FORMATOS ESTAN CABLEADOS 
//
//******************************************************************************************
function doWKLISTSubmit(form){
	// Setting the 'full_date' parameter in the oracle format,
	// that is: "yyyy-MM-dd HH:mm:ss"
	// If format is: "dd-MM-yyyy" then =>
	day   = (new String(form.date.value)).substr(0, 2);
	month = (new String(form.date.value)).substr(3, 2);
	year  = (new String(form.date.value)).substr(6, 4);

	// Formatting the data
	form.full_date.value = year+"-"+month+"-"+day+" "+form.hour.value+":"+form.minutes.value+":00";
	form.submit();
}