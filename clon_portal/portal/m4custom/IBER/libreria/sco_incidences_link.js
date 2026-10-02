//--------------------------------
// sco_incidences_link.js
// Generic function to link to incidences
// Can be modify in each country
//-------------------------------- 

function openIncidencePageGTA(action,idEmployee,dateUF,dateFF,incidence,ordPeriod){
	//Open a page with the incidence
	//Arguments
	// action: 
	//		0 request of an absence. Global -> mss_g4_p1_val.jsp (France -> mss_g4_p1_listeinc.jsp)
	//		1 request of a presence. Global -> mss_g4_p1_val.jsp (France -> mss_g4_p1_attendance_list.jsp)
	//		2 cancel/delete an existing absence. Global -> ??? (France -> mss_g4_p3_listeinc.jsp)
	//		3 cancel/delete an existing presence. Global -> ??? (France -> mss_g4_p3_listeinc.jsp)
	//		4 create a new incidence. Global -> mss_g4_gta_masive_incidences (France -> mss_g4_gta_masive_incidences.jsp)
	// idEmployee
	// dateUF in user format, for example 20-01-2012
	// dateFF in fixed format format = yyyy-mm-dd
	// incidence
	// ordPeriod

	//Global
	
	var idEmployeeForMassive = idEmployee.length + "," + idEmployee;

	if (action == "0"){//request of an absence			
		window.open('/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val.jsp?estado=41&zfiltro='+idEmployee+'&zfiltroFecha='+dateFF,'popUpForm','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=auto,resizable=yes,width=830,height=450,top='+(screen.height-450)/2.5+',left='+(screen.width-830)/2.5);	
	}else if (action == "1"){//request of a presence
		window.open('/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val.jsp?estado=41&zfiltro='+idEmployee+'&zfiltroFecha='+dateFF,'popUpForm','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=auto,resizable=yes,width=830,height=450,top='+(screen.height-450)/2.5+',left='+(screen.width-830)/2.5);	
	}else if (action == "2") {//cancel/delete an existing absence
		window.open('/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_delete_masive_incidences.jsp?employee_2_filter='+idEmployee+'&start_date_2_filter='+dateFF,'popUpForm','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=950,height=600,top='+(screen.height-600)/2.5+',left='+(screen.width-830)/2.5);
	}else if (action == "3") {//cancel/delete an existing presence
		window.open('/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_delete_masive_incidences.jsp?employee_2_filter='+idEmployee+'&start_date_2_filter='+dateFF,'popUpForm','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=950,height=600,top='+(screen.height-600)/2.5+',left='+(screen.width-830)/2.5);
	}else{ //create a new incidence
		window.open('/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_masive_incidences.jsp?id_incidence_date='+dateFF+'&id_incidence='+incidence+'&incidencie_population='+idEmployeeForMassive,'popUp','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=830,height=600,top='+(screen.height-600)/2.5+',left='+(screen.width-830)/2.5);
	}
	
}