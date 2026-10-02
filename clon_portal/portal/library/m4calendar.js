/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4calendar.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


//Obtener los dias de un mes
function getDays(month, year) {
	if (1 == month) return ((0 == year % 4) && (0 != (year % 100))) || (0 == year % 400) ? 29 : 28;
	else return daysInMonth[month];	
}
function getToday() {
	this.now = new Date();
	this.year = this.now.getFullYear(); 
	this.month = this.now.getMonth();
	this.day = this.now.getDate();
}

//Recoger el día seleccionado en el calendario
function getDate(TD){
try{
	var objanio = document.forms["fselect"].elements["year"];
	var objmesnum = document.forms["fselect"].elements["month"];
	var objday = document.forms["fselect"].elements["day"];
	
	var dianumero = TD.firstChild.nodeValue;
	var mesnumeroinicial = objmesnum.options[objmesnum.selectedIndex].index +1;
	var mesnumero = mesnumeroinicial;
	var anio = objanio.options[objanio.selectedIndex].text;

    //si es una casilla con número
    if (dianumero != ""){
		//Día del mes anterior
		if (g_classPreviousMonthDay == TD.className){
		    mesnumero --;
			if (mesnumero  == 0 ){
				mesnumero = 12;
				if(objanio.options[objanio.selectedIndex].text != '1900'){
					anio = objanio.options[objanio.selectedIndex-1].text;
				}else{
					anio = '1899';
				}
			}
		}else{
			//Día del mes posterior
			
			if (g_classNextMonthDay == TD.className){
				mesnumero ++;
				if ((mesnumero) > 12 ){
					mesnumero = 1;
					if (objanio.options[objanio.selectedIndex].text != '2099'){
						anio = objanio.options[objanio.selectedIndex +1].text;
					}else{
						anio = '2100';
					}
				}
			}
		}
		//Actualizar las select
		m4searchoption(objday,dianumero);
		m4searchoption(objanio,anio);
		if ( mesnumero !=  mesnumeroinicial){
			m4searchoption(objmesnum,mesnumero);
			newCalendar();
		}else{
			selectcellday(dianumero);
		}	
	}
}catch(excepcion){m4err_gen(excepcion);}
}

// Recoger la fecha a devolver
function returndate(){
	var objanio = document.forms["fselect"].elements["year"];
	var objmesnum = document.forms["fselect"].elements["month"];
	var objday = document.forms["fselect"].elements["day"];
	
	var dianumero = objday.options[objday.selectedIndex].text;
	var mesnumero = objmesnum.options[objmesnum.selectedIndex].index +1;
	var anio = objanio.options[objanio.selectedIndex].text;

	var fechasec = m4builtdate(dianumero,mesnumero,anio);
	document.forms["miform"].elements["fecha"].value = fechasec;	
}


//Devolver el valor y cerrar la ventana.
function adios(bemptydate){
	if (bemptydate == false){
		//recoger la fecha
		returndate();
		if (document.forms['miform'].elements['fecha'].value==""){
			var hoy = new getToday();
			document.forms['miform'].elements['fecha'].value = Builtdate(new String(hoy.day),new String(hoy.month + 1),hoy.year);
		}
	}else{
		document.forms['miform'].elements['fecha'].value=="";
	}
    m4returnvalues(new Array(m4valor('miform','fecha','','get')));

}

function changeYear (mover){

var objyear = document.forms["fselect"].elements["year"];
var yeartext = objyear.options[objyear.selectedIndex].text;

	//seleccionar el año siguiente
	if (mover == "mas") {
	    //Seleccionar siguiente año
		if (yeartext != '2099'){
			document.forms["fselect"].elements["year"].selectedIndex = document.forms["fselect"].elements["year"].selectedIndex + 1;		
		}	
	}
	
    //seleccionar el año anterior
	if (mover == "menos") {
		if (yeartext != '1900'){				
			document.forms["fselect"].elements["year"].selectedIndex = document.forms["fselect"].elements["year"].selectedIndex - 1;
		}
	}

	newCalendar();
}

//Dibujar los días del calendario
function newCalendar(mover) {
today = new getToday();
var objyear = document.forms["fselect"].elements["year"];
var yeartext = objyear.options[objyear.selectedIndex].text;

    //seleccionar el mes siguiente y año si corresponde
	if (mover == "mas") {
	    //Seleccionar siguiente mes y año si corresponde
		if (document.forms["fselect"].elements["month"].selectedIndex != 11){
			document.forms["fselect"].elements["month"].selectedIndex = document.forms["fselect"].elements["month"].selectedIndex + 1;
	    }else{		
			if (yeartext != '2099'){
				document.forms["fselect"].elements["month"].selectedIndex = 0;
				document.forms["fselect"].elements["year"].selectedIndex = document.forms["fselect"].elements["year"].selectedIndex + 1;
			}				        
		}	
	}
	//Seleccionar mes anterior y año si corresponde
	if (mover == "menos") {
		if (document.forms["fselect"].elements["month"].selectedIndex != 0){
			document.forms["fselect"].elements["month"].selectedIndex = document.forms["fselect"].elements["month"].selectedIndex - 1;
		}else{
	        if (yeartext != '1900'){
				document.forms["fselect"].elements["month"].selectedIndex = 11;
				document.forms["fselect"].elements["year"].selectedIndex = document.forms["fselect"].elements["year"].selectedIndex - 1;
			}				     				    
		}
	}

	//recojo denuevo el año por si hubiera cambiado.
    yeartext = objyear.options[objyear.selectedIndex].text;
	var parseYear = parseInt(yeartext,10);
	var newCal = new Date(parseYear,document.forms["fselect"].elements["month"].selectedIndex, 1);
	var Calanterior = new Date(parseYear,document.forms["fselect"].elements["month"].selectedIndex-1, 1);
	var CalPosterior = new Date(parseYear,document.forms["fselect"].elements["month"].selectedIndex+1, 1);
	var day = -1;
	
	//Modificacion para dia de comienzo de la semana
	if (slanguser == "en"){
		var startDay = newCal.getDay();
	}else{
		var startDay = newCal.getDay();
		if (startDay == 0){ startDay = 6}
		else{ startDay = startDay - 1}  
	}
	
	var daily = 0;
	var numero = 1;
	var numeropos = 1;
	var num = 0;
	
	if ((today.year == newCal.getYear()) && (today.month == newCal.getMonth()))	day = today.day;
	
	var tableCal = m4elemento("dayList");
	var intDaysInMonth = getDays(newCal.getMonth(), newCal.getYear());
	var intDaysInMonthAnt = getDays(Calanterior.getMonth(), Calanterior.getYear());
	var intDaysInMonthPos = getDays(CalPosterior.getMonth(), CalPosterior.getYear());
	
	//Calcular los días del mes anterior a mostrar
	var numeroant = intDaysInMonthAnt - startDay + 1;
	
	
	//Para cada semana
	for (var intWeek = 0; intWeek < tableCal.rows.length; intWeek++)
	  for (var intDay = 0; intDay < tableCal.rows[intWeek].cells.length; intDay++) {
		var cell = tableCal.rows[intWeek].cells[intDay];
		if (intDay == startDay){daily = 1};
		cell.className = g_classActMonthDay;
		
		if ((num-startDay +1) > intDaysInMonth){
			//Dias del mes posterior
			if (cell.hasChildNodes() == true) {cell.removeChild(cell.firstChild);}			
			if (yeartext == '2099' && newCal.getMonth()== 11){	
				//No dibujo los días del mes posterior
				var textocelda = document.createTextNode("");
			}	
			else{
				var textocelda = document.createTextNode(numeropos);
			}
			numeropos++;
			cell.appendChild(textocelda);
			//cell.className=color2;		
			cell.className = g_classNextMonthDay;
		} 
		if ((daily = 1) && (numero <= intDaysInMonth)){
			if ((num-startDay) < 0 ){
			   //Dias del mes anterior
			   if (cell.hasChildNodes() == true) {cell.removeChild(cell.firstChild);}
			   if (yeartext == '1900' && newCal.getMonth()== 0){
			        //No dibujo los dias del mes anterior	
					var textocelda = document.createTextNode("");					
				}else{
					var textocelda = document.createTextNode(numeroant);					
				}
				cell.appendChild(textocelda);
				//cell.className=color3;
				cell.className = g_classPreviousMonthDay;
				numeroant++;
			}else{
				//Dia del mes actual
				if (cell.hasChildNodes() == true) {cell.removeChild(cell.firstChild);}
				var textocelda = document.createTextNode(numero++);
	            cell.appendChild(textocelda);
			}
		}
	    num++;	 
	  }
	

	// Reescribir la select de los días y quedarse en el día seleccionado
	var odayselect =document.forms["fselect"].elements["day"];
	sselectedday = odayselect.options[odayselect.selectedIndex].text; 
	iselectedindex = odayselect.selectedIndex;
	odayselect.options.length = 0;
	for (var intLoop = 0; intLoop < intDaysInMonth; intLoop++){
		m4genoption(odayselect,(intLoop+1),(intLoop+1),(intLoop+1));
		if (intLoop == iselectedindex) odayselect.options[intLoop].selected = true;
	}
	
	//seleccionar el día en la tabla
	selectcellday(sselectedday);
	
	// Para resaltar el dia actual si estamos en el mes y añoo actual.
	for (intWeek = 0; intWeek < tableCal.rows.length; intWeek++){
		for (intDay = 0; intDay < tableCal.rows[intWeek].cells.length; intDay++) {
			cell = tableCal.rows[intWeek].cells[intDay];
			if (today.year == m4select("fselect","year","id") && (today.month +1) == m4select("fselect","month","id") && cell.firstChild.nodeValue == today.day && cell.className != g_classPreviousMonthDay && cell.className != g_classNextMonthDay){
			    if (cell.className == g_classSelection || cell.className == g_classSelecteHoy){
					cell.className = g_classSelecteHoy;
			    }else{	cell.className = g_classHoy;}
			    g_classBeforeSelection =g_classHoy;
			}
		}
	}
	
}

//Seleccionar el día en la tabla
function selectcellday(sselectedday){
var cell= "";
var textocelda = "";
var odayselect =document.forms["fselect"].elements["day"];
var objyear =document.forms["fselect"].elements["year"];
var tableCal = m4elemento("dayList");
var actCal = new Date(parseInt(objyear.options[objyear.selectedIndex].text,10),document.forms["fselect"].elements["month"].selectedIndex, 1);
var intDaysInMonth = getDays( actCal.getMonth(), actCal.getYear());

// Si al dia a seleccionar no existe en este mes coger el ultimo dia del mes
if (parseInt(sselectedday,10) > intDaysInMonth){
     sselectedday =intDaysInMonth.toString();
     m4searchoption(odayselect,sselectedday)
}

//Deseleccionar lo que hubiera seleccionado
var colecciontd = document.getElementsByTagName("TD");
for (var i = 0; i < colecciontd.length; i++){ 
	if (colecciontd[i].className == g_classSelection ||colecciontd[i].className == g_classSelecteHoy ){		
		colecciontd[i].className = g_classBeforeSelection;
	}
}
//Recorrer las celdas en busca del valor seleccionado en la combo
// Tener en cuenta que tiene que ser el del mes actual (lo sabemos por el color)
  for (var intWeek = 0; intWeek < tableCal.rows.length; intWeek++){
	  for (var intDay = 0; intDay < tableCal.rows[intWeek].cells.length; intDay++) {
		cell = tableCal.rows[intWeek].cells[intDay];
		textocelda = cell.firstChild.nodeValue;
		if (sselectedday == textocelda && cell.className != g_classPreviousMonthDay && cell.className != g_classNextMonthDay){
			//Recoger el color para la deseleccion
			g_classBeforeSelection =cell.className; 
 			if (g_classBeforeSelection == g_classHoy) {
				cell.className = g_classSelecteHoy;
			}else{	cell.className = g_classSelection;}
		}
     }//for
  }//for	
}

//Situarse en la fecha de hoy.
function setToday(){
var oselday =m4objeto("fselect","day");
var oselyear =m4objeto("fselect","year");
var oselmonth =m4objeto("fselect","month");
var hoy = new getToday();

	m4searchoption(oselday,new String(hoy.day));
	m4searchoption(oselyear,hoy.year);
	m4searchoption( oselmonth,new String(hoy.month + 1));
	newCalendar();
}