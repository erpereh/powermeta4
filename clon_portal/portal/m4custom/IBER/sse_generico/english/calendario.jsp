<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
   <HEAD>
      <TITLE>Calendar</TITLE>
    <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
    <%@ include file="../../sse_generico/sgco_gen_inc.jsp" %>
       <script type="text/javascript"  language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
       <script type="text/javascript"  language="Javascript1.2" src="/libreria/dom1.js"></script>
       <script type="text/javascript" language="Javascript1.2">
         // Initialise arrays.
         var months = new Array("January", "February", "March",
            "April", "May", "June", "July", "August", "September",
            "October", "November", "December");
         var daysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31,
            30, 31, 30, 31);
		var days = new Array("&nbsp;Sunday&nbsp;", "&nbsp;Monday&nbsp;&nbsp;", "&nbsp;Tuesday&nbsp;",
            "Wednesday", "&nbsp;Thursday&nbsp;", "&nbsp;&nbsp;Friday&nbsp;&nbsp;", "&nbsp;Saturday&nbsp;");
		 var sColorLightGray = '';
		 var sColorWhite = '';
		 var sColorSilver = '';
		 var sColorSkyBlue = '';
		 var sColorRed = '';
		 
function setColor() {
  if (Browser.ie7 || Browser.ie8) {
    sColorLightGray = '#d3d3d3';
    sColorWhite = '#ffffff';
    sColorSilver = '#c0c0c0';
    sColorSkyBlue = '#87ceeb';
    sColorRed = '#ff0000';
  } else {
    sColorLightGray = 'rgb(211, 211, 211)';
    sColorWhite = 'rgb(255, 255, 255)';
    sColorSilver = 'rgb(192, 192, 192)';
    sColorSkyBlue = 'rgb(135, 206, 235)';
    sColorRed = 'rgb(255, 0, 0)';
  }
}
setColor();

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
            //this.year = this.now.getYear(); 
			this.year = this.now.getFullYear();
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
          document.forms["fselect"].elements["month"].selectedIndex = document.forms["fselect"].elements["month"].selectedIndex -1;
      }     
      else{
            //var yeartext = m4select("year","fyear","text");
                    var objyear = document.forms["fselect"].elements["year"];
                    var yeartext = objyear.options[objyear.selectedIndex].text;
                    if (yeartext != 1900){
                document.forms["fselect"].elements["month"].selectedIndex = 11;
                document.forms["fselect"].elements["year"].selectedIndex = document.forms["fselect"].elements["year"].selectedIndex -1;
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
      
      if ((today.year == newCal.getFullYear()) &&
                  (today.month == newCal.getMonth()))
               day = today.day;
               
            // Cache the table's tBody element named dayList.
            
            var tableCal = m4elemento("dayList");
            
      var intDaysInMonth =
               getDays(newCal.getMonth(), newCal.getFullYear());
      
      var intDaysInMonthAnt =
              getDays(Calanterior.getMonth(), Calanterior.getFullYear());
      
      var intDaysInMonthPos =
               getDays(CalPosterior.getMonth(), CalPosterior.getFullYear());
            
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
                  cell.style.backgroundColor=sColorLightGray;
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
						cell.style.backgroundColor=sColorWhite;
        } 
         
        if ((daily = 1) && (numero <= intDaysInMonth)){
          if ((num-startDay) < 0 ){          
           //cell.innerText = numeroant++;
                           if (cell.hasChildNodes() == true) {
                cell.removeChild(cell.firstChild);
                           }
                     var textocelda = document.createTextNode(numeroant++);
                           cell.appendChild(textocelda);
                           cell.style.backgroundColor=sColorSilver;
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
      
       // To highlight the current day.
      for (intWeek = 0; intWeek < tableCal.rows.length; intWeek++)
               for (intDay = 0; intDay < tableCal.rows[intWeek].cells.length; intDay++) {
          cell = tableCal.rows[intWeek].cells[intDay];
				   	cell.className = (cell.firstChild.nodeValue == today.day && cell.style.backgroundColor != sColorSilver && cell.style.backgroundColor != sColorWhite) ? "today" : "";
                                        //alert(today.day);
        } 
}


 var color = sColorRed;
   
function getDate(TD){
            // This code executes when the user clicks on a day
            // in the calendar

    
    var colecciontd = document.getElementsByTagName("TD");
  for (var i = 0; i < colecciontd.length; i++){
		if (colecciontd.item(i).style.backgroundColor == sColorSkyBlue){
    colecciontd.item(i).style.backgroundColor = color;}
    //'#E3E4FD'
  }

    color = TD.style.backgroundColor;
    //alert("color: "+color);
    TD.style.backgroundColor = sColorSkyBlue;
                                        var objanio = document.forms["fselect"].elements["year"];
                                        var anio = objanio.options[objanio.selectedIndex].text;
                                        //var anio = m4select("year","fyear","text");
                                        var objmesnum = document.forms["fselect"].elements["month"];
                                        var mesnumero = objmesnum.options[objmesnum.selectedIndex].index +1;
                                        //alert("mesnumero: "+mesnumero);
					if (color==sColorSilver)                                         
          {        
                                                 var objmesnum = document.forms["fselect"].elements["month"];
                                                 var mesnumero = objmesnum.options[objmesnum.selectedIndex].index;
             if (mesnumero != 0 ){
                                                    var objmesnum = document.forms["fselect"].elements["month"];
                                                    mesnumero = objmesnum.options[objmesnum.selectedIndex].index;
                                                    
                                                 }
                         else{
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

					if (color == sColorWhite)
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
                                               else{
                                                       mesnumero = '1';
                                                       var objyear = document.forms["fselect"].elements["year"];
                                                       var yeartext = objyear.options[objyear.selectedIndex].text;
                                                       //var yeartext = m4select("year","fyear","text");
                                                       if (yeartext != '2100'){
                                                          var objanio = document.forms["fselect"].elements["year"];
                                                          var anio = objanio.options[objanio.selectedIndex + 1].text;
                                                          //anio = document.forms["fyear"].elements["year"].options[anio.selectedIndex + 1].text;
                                                          
                                                       }
                                                          
                                                        else { anio = '2101'}
                                               }
                    }
          //Correction for days and month with just one digit; for example: 1=01
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
          
          //End of the correction for days and months with just one digit.
          
          //var fechasec = anio + "-" + strmesnumero + "-" + dianumero;
          var fechasec = dianumero + "-" + strmesnumero + "-" + anio;
  
  fechasec= m4builtdate(dianumero,strmesnumero,anio);
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
   </head>
   <body onunload="window.returnValue = document.forms['miform'].elements['fecha'].value;">
  <form id="miform" name="miform" action="">
    <input type="hidden"  id = "fecha" name = "fecha" />
  </form>
      <table WIDTH= 30% align= "center" >
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
         </thead>
    </table>
      <table id="calendar" class='calendario' align= "center">
         <thead>
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
      <a onclick="javascript:newCalendar('menos');"><img alt="Previous Month" src="/iconos/icono_anterior_36_36.gif" height="36" width="36"></img></a>
      <a onclick="javascript:adios();"><img src="/iconos/ok.gif" width="36" height="36" alt="Ok"></img></a>
      <a onclick="javascript:newCalendar('mas');"><img alt="Next Month" src="/iconos/icono_siguiente_ess_36_36.gif" height="36" width="36"></img></a>
    </td>
      </tr>
</table>
  <script type="text/javascript">
    newCalendar();
  </script>
  </BODY>
</HTML>
<%
// Do not remove this comment - forces compilation in JRun 4.0!
%>

