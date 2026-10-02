<HTML>
   <HEAD>
      <TITLE>Calendario</TITLE>
	  <link href="/estilo/estilo_sse.css" type="text/css" rel="stylesheet">
      <STYLE TYPE="text/css">
         .today {color:red; font-weight:bold}
         .days {font-weight:bold; color:navy}
		 TABLE {WIDTH:35%;}
	  </STYLE>
	  <SCRIPT LANGUAGE="JavaScript">
         // Initialize arrays.
         
		 var months = new Array("Enero", "Febrero", "Marzo",
            "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
            "Octubre", "Noviembre", "Diciembre");
         var daysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31,
            30, 31, 30, 31);
         var days = new Array("Domingo", "Lunes", "Martes",
            "Mi&eacute;rcoles", "Jueves", "Viernes", "S&aacute;bado");

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

         function newCalendar() {
            
			today = new getToday();
            
			var parseYear = parseInt(document.all.year
               [document.all.year.selectedIndex].text);
			
			//var parseYearAnt = parseInt(document.all.year
             //  (document.all.year.selectedIndex - 1 ).text);
			//var parseYearPos = parseInt(document.all.year
              // (document.all.year.selectedIndex + 1).text);
            
			var newCal = new Date(parseYear,
               document.all.month.selectedIndex, 1);
            var Calanterior = new Date(parseYear,document.all.month.selectedIndex-1, 1);
			var CalPosterior = new Date(parseYear,
               document.all.month.selectedIndex+1, 1);
			
			
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
            
			var tableCal = document.all.calendar.tBodies.dayList;
            
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
				cell.innerText = numeropos++;
				cell.style.backgroundColor='white';} 
				 
				if ((daily = 1) && (numero <= intDaysInMonth)){
                     
					 if ((num-startDay) < 0 ){
					 cell.innerText = numeroant++;
					 cell.style.backgroundColor='navajowhite';}
					 else{
					cell.innerText = numero++ ;
					}
				  }
                  
   				num++;	 
				
				
               }
			
			 // Para resaltar el dia actual.
			for (intWeek = 0; intWeek < tableCal.rows.length;
                  intWeek++)
               for (intDay = 0;
                     intDay < tableCal.rows[intWeek].cells.length;
                     intDay++) {
					cell = tableCal.rows[intWeek].cells[intDay];
				   	cell.className = (cell.innerText == today.day && cell.style.backgroundColor != 'navajowhite' && cell.style.backgroundColor != 'white') ? "today" : "";
				   
				}	

}



		 
		 
		 
 
 var color = 'red'
   
   function getDate() {
            // This code executes when the user clicks on a day
            // in the calendar.
            if ("TD" == event.srcElement.tagName){
               // Test whether day is valid.
               //if (('white' != event.srcElement.style.backgroundColor) && ('navajowhite' != event.srcElement.style.backgroundColor)){
                 // alert("Fecha pinchada: " + event.srcElement.innerText + " de " + document.all.month[document.all.month.selectedIndex].text + " del " + document.all.year[document.all.year.selectedIndex].text);
					
					var anio = document.all.year[document.all.year.selectedIndex].text
					var mesnumero = document.all.month[document.all.month.selectedIndex].index +1
					
					if ('navajowhite' == event.srcElement.style.backgroundColor)
					{
					 	if (document.all.month[document.all.month.selectedIndex].index != 0 ){
					         mesnumero = document.all.month[document.all.month.selectedIndex].index;}
					         //alert(document.all.month[document.all.month.selectedIndex].index - 1);}
					    else {
					          mesnumero = '12';
					          if (document.all.year[document.all.year.selectedIndex].text != '1900')
					          anio = document.all.year[document.all.year.selectedIndex - 1].text;
					          else{
					          anio = '1899';}
					         }
					}
					
					
					if ('white' == event.srcElement.style.backgroundColor)
					{
					 	if (document.all.month[document.all.month.selectedIndex].index != 11 ){
					         mesnumero = document.all.month[document.all.month.selectedIndex + 2].index;}
					         //alert(document.all.month[document.all.month.selectedIndex].index );}
					    else {
					          mesnumero = '1';
					          if (document.all.year[document.all.year.selectedIndex].text != '2100')
					          anio = document.all.year[document.all.year.selectedIndex + 1].text;
					          else{
					          anio = '2101';}
					         }
					}
					
							
					
					//Correccion para el dia y mes con una sola cifra, ejemplo: 1=01
					var dianumero = event.srcElement.innerText;
							if (dianumero.length != 2){
							dianumero = '0' + dianumero;
							}
					
					var strmesnumero = new String(mesnumero);
								
							//alert(strmesnumero);
							if (strmesnumero.length != 2){
							strmesnumero = '0' + strmesnumero;
							}
					
					//Fin de la correccion para el dia y mes con una sola cifra
					
//					var fechasec = anio + "-" + strmesnumero + "-" + dianumero;
					var fechasec = dianumero + "-" + strmesnumero + "-" + anio;
		
					fecha.value = fechasec;
					
					for (var i = 0; i < document.all.length; i++){ 
						if (document.all.item(i).tagName == "TD"){
							if (document.all.item(i).style.backgroundColor == 'skyblue')
							{//alert(document.all.item(i).style.backgroundColor);
							document.all.item(i).style.backgroundColor = color;}
							
							//'#E3E4FD'
							
						}
					};
					color = event.srcElement.style.backgroundColor;
					event.srcElement.style.backgroundColor = 'skyblue';
				}



}
      
	  
	  function adios(){
	  window.close();
	  }
	  </SCRIPT>
   </HEAD>
   <BODY ONLOAD="newCalendar()" ONUNLOAD="window.returnValue = document.all.fecha.value;">
      <TABLE ID="calendar"  bgcolor="#808CBF" border ="0" >
         <THEAD>
            <TR bgcolor ="#FFFFFF">
               <TD COLSPAN=7 ALIGN=CENTER>
                  <!-- Month combo box -->
                  <SELECT ID="month" ONCHANGE="newCalendar()">
                     <SCRIPT LANGUAGE="JavaScript">
                        // Output months into the document.
                        // Select current month.
                        for (var intLoop = 0; intLoop < months.length;
                              intLoop++)
                           document.write("<OPTION Class ='FuenteBarra2'" +
                              (today.month == intLoop ?
                                 "Selected" : "") + ">" +
                              months[intLoop]);
                     </SCRIPT>
                  </SELECT>

                  <!-- Year combo box -->
                  <SELECT ID="year" ONCHANGE="newCalendar()">
                     <SCRIPT LANGUAGE="JavaScript">
                        // Output years into the document.
                        // Select current year.
                        for (var intLoop = 1900; intLoop < 2101;
                              intLoop++)
                           document.write("<OPTION Class ='FuenteBarra2'" +
                              (today.year == intLoop ?
                                 "Selected" : "") + ">" +
                              intLoop);
                     </SCRIPT>
                  </SELECT>
               </TD>
            </TR>
            <TR CLASS="days">
               <!-- Generate column for each day. -->
               <SCRIPT LANGUAGE="JavaScript">
                  // Output days.
                  for (var intLoop = 0; intLoop < days.length;
                        intLoop++)
                     document.write("<TD class='FuenteDiasSemana'>" + days[intLoop] + "</TD>");
               </SCRIPT>
            </TR>
         </THEAD>
         <TBODY ID="dayList" ALIGN=CENTER ONCLICK="getDate()" ondblclick="adios()">
            <!-- Generate grid for individual days. -->
            <SCRIPT LANGUAGE="JavaScript">
               for (var intWeeks = 0; intWeeks < 6; intWeeks++) {
                  document.write("<TR class='FuenteDias'>");
                  for (var intDays = 0; intDays < days.length;
                        intDays++)
                     document.write("<TD STYLE='cursor: default' ></TD>");
                  document.write("</TR>");
				
               }
            </SCRIPT>
         </TBODY>
      </TABLE>
   
  <input id = "fecha" type="hidden"></input>

   </BODY>
</HTML>

