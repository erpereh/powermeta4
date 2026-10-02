<%-- [=====================================================]   
             
	@(#)FileVersion: 811.000.008       
	@(#)FileDescription: Calendar (temporary implementation)
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: calendar.jsp
	@(#)Date: 25/09/2001      

[=====================================================] --%>
<html>
   <head><title>Calendario</title>
	<link href="/style/tech_0.css" type="text/css" rel="stylesheet" />
      	<script type="text/javascript"  language="Javascript1.5" src="/library/espanol/dom_1.js"></script>
        
	<!-- -------------- Start: Calendar  ------------ -->
	<script type="text/javascript" language="Javascript1.5">
         // Initialize arrays.
         var months = new Array("Enero", "Febrero", "Marzo",
            "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
            "Octubre", "Noviembre", "Diciembre");
         var daysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31,
            30, 31, 30, 31);
         var days = new Array("Domingo&nbsp&nbsp&nbsp", "Lunes&nbsp&nbsp&nbsp&nbsp&nbsp", "Martes&nbsp&nbsp&nbsp&nbsp",
            "Mi&eacute;rcoles&nbsp", "Jueves&nbsp&nbsp&nbsp&nbsp", "Viernes&nbsp&nbsp&nbsp", "S&aacute;bado&nbsp&nbsp&nbsp&nbsp");

function getDays(month, year) {
            // Test for leap year when February is selected.
            if (1 == month)
               return ((0 == year % 4) && (0 != (year % 100))) ||
                  (0 == year % 400) ? 29 : 28;
            else
               return daysInMonth[month];
 }
function getToday() {
         // Generate today's date.
            this.now = new Date();
            this.year = this.now.getYear(); 
            this.month = this.now.getMonth();
            this.day = this.now.getDate();
	    // alert(this.now.getYear());
}
// Start with a calendar for today.
         today = new getToday();
function newCalendar(mover) {             
            if (mover == "mas") {
                if (document.forms["fselect"].elements["month"].selectedIndex != 11){
                   document.forms["fselect"].elements["month"].selectedIndex = document.forms["fselect"].elements["month"].selectedIndex + 1;
                }
                else{				    
                  //var yeartext = m4select("year","fyear","text");
                  var objyear = document.forms["fselect"].elements["year"];
                  var yeartext = objyear.options[objyear.selectedIndex].text;
				    if (yeartext != 2100){
				        document.forms["fselect"].elements["month"].selectedIndex = 0;
				        document.forms["fselect"].elements["year"].selectedIndex = document.forms["fselect"].elements["year"].selectedIndex + 1;
				     }				        
					
                 }	
            }
			if (mover == "menos") {
			if (document.forms["fselect"].elements["month"].selectedIndex != 0){
			    document.forms["fselect"].elements["month"].selectedIndex = document.forms["fselect"].elements["month"].selectedIndex - 1;
			}			
			else{
				    //var yeartext = m4select("year","fyear","text");
                    var objyear = document.forms["fselect"].elements["year"];
                    var yeartext = objyear.options[objyear.selectedIndex].text;
                    if (yeartext != 1900){
				        document.forms["fselect"].elements["month"].selectedIndex = 11;
				        document.forms["fselect"].elements["year"].selectedIndex = document.forms["fselect"].elements["year"].selectedIndex - 1;
				    }				     				    
			}
			}
			today = new getToday();
                  //var yeartext = m4select("year","fyear","text");
            var objyear = document.forms["fselect"].elements["year"];
            var yeartext = objyear.options[objyear.selectedIndex].text;
			var parseYear = parseInt(yeartext);
            
            var newCal = new Date(parseYear,document.forms["fselect"].elements["month"].selectedIndex, 1);
            var Calanterior = new Date(parseYear,document.forms["fselect"].elements["month"].selectedIndex-1, 1);
            var CalPosterior = new Date(parseYear,document.forms["fselect"].elements["month"].selectedIndex+1, 1);
            
			var day = -1;
            var startDay = newCal.getDay();
            var daily = 0;
            
			var numero = 1;
			var numeropos = 1;
			var num = 0;
			
			if ((today.year == newCal.getYear()) &&
                  (today.month == newCal.getMonth()))
               day = today.day;
               
            // Cache the table's tBody element named dayList.
            
            var tableCal = m4elemento("dayList");
            
			var intDaysInMonth =
               getDays(newCal.getMonth(), newCal.getYear());
			
			var intDaysInMonthAnt =
              getDays(Calanterior.getMonth(), Calanterior.getYear());
			
			var intDaysInMonthPos =
               getDays(CalPosterior.getMonth(), CalPosterior.getYear());
            
			var numeroant = intDaysInMonthAnt - startDay + 1;
		
			
			for (var intWeek = 0; intWeek < tableCal.rows.length;
                  intWeek++)
               for (var intDay = 0;
                     intDay < tableCal.rows[intWeek].cells.length;
                     intDay++) {
				
                  var cell = tableCal.rows[intWeek].cells[intDay];
                 // Start counting days.
                   if (intDay == startDay){ daily = 1};
				 // Output the day number into the cell.
                  cell.style.backgroundColor='#cdeaee';
				  //#E3E4FD
				 //alert(intDaysInMonth);
				 //alert(num-startDay +1);    
					if ((num-startDay +1) > intDaysInMonth){
                                if (cell.hasChildNodes() == true) {
                                     cell.removeChild(cell.firstChild);
                                 }
                        var textocelda = document.createTextNode(numeropos++);
                         cell.appendChild(textocelda);
                         //cell.innerText = numeropos++;
						cell.style.backgroundColor='white';
				} 
				 
				if ((daily = 1) && (numero <= intDaysInMonth)){
					if ((num-startDay) < 0 ){					 
					 //cell.innerText = numeroant++;
                           if (cell.hasChildNodes() == true) {                                              
								cell.removeChild(cell.firstChild);
                           }
			               var textocelda = document.createTextNode(numeroant++);
                           cell.appendChild(textocelda);
                           cell.style.backgroundColor='navajowhite';
                     }
					 else{
                         if (cell.hasChildNodes() == true) {
                             cell.removeChild(cell.firstChild);
                         }
					var textocelda = document.createTextNode(numero++);
                    cell.appendChild(textocelda);
                    //cell.innerText = numero++;
                }
			}
            num++;	 
		}
			
			 // Para resaltar el dia actual.
			for (intWeek = 0; intWeek < tableCal.rows.length; intWeek++)
               for (intDay = 0; intDay < tableCal.rows[intWeek].cells.length; intDay++) {
					cell = tableCal.rows[intWeek].cells[intDay];
				   	cell.className = (cell.firstChild.nodeValue == today.day && cell.style.backgroundColor != 'navajowhite' && cell.style.backgroundColor != 'white') ? "today" : "";
                                        //alert(today.day);
				}	
}


 var color = 'red';
   
function getDate(TD){
            // This code executes when the user clicks on a day
            // in the calendar

    
    var colecciontd = document.getElementsByTagName("TD");
	for (var i = 0; i < colecciontd.length; i++){ 
		if (colecciontd.item(i).style.backgroundColor == 'skyblue'){
		colecciontd.item(i).style.backgroundColor = color;}
		//'#E3E4FD'
	}

    color = TD.style.backgroundColor;
    //alert("color: "+color);
    TD.style.backgroundColor = 'skyblue';
                                        var objanio = document.forms["fselect"].elements["year"];
                                        var anio = objanio.options[objanio.selectedIndex].text;
                                        //var anio = m4select("year","fyear","text");
                                        var objmesnum = document.forms["fselect"].elements["month"];
                                        var mesnumero = objmesnum.options[objmesnum.selectedIndex].index +1;
                                        //alert("mesnumero: "+mesnumero);
					if ('navajowhite' == color)                                         
					{        
                                                 var objmesnum = document.forms["fselect"].elements["month"];   
                                                 var mesnumero = objmesnum.options[objmesnum.selectedIndex].index;                                     
					 	 if (mesnumero != 0 ){
                                                    var objmesnum = document.forms["fselect"].elements["month"]; 
                                                    mesnumero = objmesnum.options[objmesnum.selectedIndex].index;  
                                                    
                                                 }
                         else {
					          mesnumero = '12';
                                                  var objyear = document.forms["fselect"].elements["year"];
                                                  var yeartext = objyear.options[objyear.selectedIndex].text;
                                                  //var yeartext = m4select("year","fyear","text");
                                                     if (yeartext != '1900'){  
                                                          var objanio = document.forms["fselect"].elements["year"];
                                                          var anio = objanio.options[objanio.selectedIndex-1].text;                                                       
                                                          
                                                          //alert("anio: "+anio);                              
                                                     }        

					                                                               
					       
					          else{
					          anio = '1899';}
					         }
					//alert(mesnumero);
					}

					if ('white' == color)
					{
                                               var objmesnum = document.forms["fselect"].elements["month"];
                                               var mesnumero = objmesnum.options[objmesnum.selectedIndex].index;
                                               if (mesnumero < 10 ){
                                                   var objmesnum = document.forms["fselect"].elements["month"];
                                                   mesnumero = objmesnum.options[objmesnum.selectedIndex+2].index;
                                                   //mesnumero = document.forms["fmonth"].elements["month"].options[mesnumero.selectedIndex + 2].index;                                                   
                                               }           

					 	
					       
					       else 
                                                     if (mesnumero == 10){ 
                                                     mesnumero = '12';}
                                               else  {
                                                       mesnumero = '1';
                                                       var objyear = document.forms["fselect"].elements["year"];
                                                       var yeartext = objyear.options[objyear.selectedIndex].text;
                                                       //var yeartext = m4select("year","fyear","text");
                                                       if (yeartext != '2100'){
                                                          var objanio = document.forms["fselect"].elements["year"];
                                                          var anio = objanio.options[anio.selectedIndex + 1].text;
                                                          //anio = document.forms["fyear"].elements["year"].options[anio.selectedIndex + 1].text;
                                                          
                                                       }
                                                          
                                                        else { anio = '2101'}
                                               }
                    }
					//Correccion para el dia y mes con una sola cifra, ejemplo: 1=01
					//var dianumero = event.srcElement.innerText;
                                        var dianumero = TD.firstChild.nodeValue;
                                        
							if (dianumero.length != 2){
							dianumero = '0' + dianumero;
							}
					
					var strmesnumero = new String(mesnumero);
								
							//alert(strmesnumero);
							if (strmesnumero.length != 2){
							strmesnumero = '0' + strmesnumero;
							}
					
					//Fin de la correccion para el dia y mes con una sola cifra
					
					var fechasec = anio + "-" + strmesnumero + "-" + dianumero;
					//var fechasec = dianumero + "-" + strmesnumero + "-" + anio;
	
	document.forms["miform"].elements["fecha"].value = fechasec;
	
	if (!document.all){
	opener.ventana.returnedValue = fechasec;
	opener.ventana.m4returnfunc();
	}
}
      
	  
	  function adios(){
	  window.close();
	  }

	  </script>
	  <!-- -------------- End: Calendar JavaScript  ------------ -->
   </head>
   <body onunload="window.returnValue = document.forms['miform'].elements['fecha'].value;">
	<form id="miform" name="miform" action="">
		<input type="hidden"  id = "fecha" name = "fecha" />          
	</form>
      <table id="calendar" class='calendario' border=1>
         <thead>
            <tr class='colortabla'>
               <td colspan=7 align="center">
                  <!-- Month combo box -->
                   <form id="fselect" name="fselect" action="">                    
                    <select id="month" onchange="newCalendar()" class="fuenteformulario100">
                     <script type="text/javascript">
                        // Output months into the document.
                        // Select current month.
                        for (var intLoop = 0; intLoop < months.length;
                              intLoop++)
                           document.write("<option class ='enlacefuncional'" +
                              (today.month == intLoop ?
                                 "Selected" : "") + ">" +
                              months[intLoop]);
                     </script>
                  </select>                  
                

                  <!-- Year combo box -->
                                 
                  <select id="year" onchange="newCalendar()"  class="fuenteformulario100">
                     <script type="text/javascript">
                        // Output years into the document.
                        // Select current year.
                        for (var intLoop = 1900; intLoop < 2101;
                              intLoop++)
                           document.write("<option class ='enlacefuncional'" +
                              (today.year == intLoop ?
                                 "Selected" : "") + ">" +
                              intLoop);
                     </script>
                  </select>                  
                 </form>
               </td>              
            </tr>
            <tr class="days">
               <!-- Generate column for each day. -->
               <script type="text/javascript">
                  // Output days.
                  for (var intLoop = 0; intLoop < days.length;
                        intLoop++)
                     document.write("<td class='enlacefuncional'>" + days[intLoop] + "</td>");
               </script>
            </tr>
         </thead>
         <tbody id="dayList" name="dayList" align="center"  ; ondblclick="adios()">
            <!-- Generate grid for individual days. -->
            <script type="text/javascript">              
               for (var intWeeks = 0; intWeeks < 6; intWeeks++) {
                 //alert("intWeeks: "+ intWeeks);
                  document.write("<tr class='enlacefuncional'>");
                  for (var intDays = 0; intDays < days.length;
                        intDays++){  
                        //alert("intDays: "+ intDays);                                            
                     document.write("<td style='cursor: default'; onclick = 'getDate(this)' ></td>");
                   }
                      document.write("</tr>");                                 				
                }             
            </script>
         </tbody>
      </table>
<table width="100%">
	  <tr>
		<td align="center">
			<a onclick="javascript:newCalendar('menos');"><img alt="mes anterior" src="../../images/icono_anterior_36_36.gif" height="36" width="36"></img></a>
			<a onclick="javascript:adios();"><img src="../../images/icono_aceptar_ess_36_36.gif" width="36" height="36" alt="Aceptar"></img></a>
			<a onclick="javascript:newCalendar('mas');"><img alt="mes posterior" src="../../images/icono_siguiente_ess_36_36.gif" height="36" width="36"></img></a>
		</td>  
      </tr>
</table>
  <script type="text/javascript">
    newCalendar();
  </script>
  </BODY>
</HTML>
<% // This comment was inserted for this HTML page to be properly compressed %>
