<html>
<head>
<script language="JavaScript">
	
 function padout(number) { return (number < 10) ? '0' + number : number; }
 function y2k(number)    { return (number < 1000) ? number + 1900 : number; }
 
   var now = new Date();
   var day   = now.getDate();
   var month = now.getMonth();
   var year  = y2k(now.getYear());


 function Calendar(Month,Year) {
     
	 var output = '';
     
     output += '<FORM NAME="Cal"><TABLE BGCOLOR="#087AA8"><Tr><Td><TABLE BGCOLOR="#F1F8FC" BORDER=0><TR><TD ALIGN=LEFT WIDTH=50%>';
     output += '<FONT COLOR="#0000BB" FACE="Arial" SIZE=+1>' + names[Month] + ' ' + Year + '<\/FONT><\/TD><TD WIDTH=50% ALIGN=RIGHT>';
     output += '<SELECT NAME="Month" onChange="changeMonth();">';

     for (month=0; month<12; month++) {
         if (month == Month) output += '<OPTION VALUE="' + month + '" SELECTED>' + names[month] + '<\/OPTION>';
         else                output += '<OPTION VALUE="' + month + '">'          + names[month] + '<\/OPTION>';
     }

     output += '<\/SELECT><SELECT NAME="Year" onChange="changeYear();">';

     for (year=1900; year<2101; year++) {
         if (year == Year) output += '<OPTION VALUE="' + year + '" SELECTED>' + year + '<\/OPTION>';
         else              output += '<OPTION VALUE="' + year + '">'          + year + '<\/OPTION>';
     }

     output += '<\/SELECT><\/TD><\/TR><TR><TD ALIGN=CENTER COLSPAN=2>';

     firstDay = new Date(Year,Month,1);
     startDay = firstDay.getDay();

     if (((Year % 4 == 0) && (Year % 100 != 0)) || (Year % 400 == 0))
          days[1] = 29; 
     else
          days[1] = 28;

     output += '<TABLE CALLSPACING=0 CELLPADDING=0 BORDER=1 BORDERCOLORDARK="#FFFFFF" BORDERCOLORLIGHT="#C0C0C0"><TR>';

     for (i=0; i<7; i++)
         output += '<TD WIDTH=50 ALIGN=CENTER VALIGN=MIDDLE><FONT SIZE=-1 COLOR="#000000" FACE="ARIAL"><B>' + dow[i] +'<\/B><\/FONT><\/TD>';

     output += '<\/TR><TR ALIGN=CENTER VALIGN=MIDDLE>';

     var column = 0;
     var lastMonth = Month - 1;
     if (lastMonth == -1) lastMonth = 11;

     for (i=0; i<startDay; i++, column++)
         output += '<TD WIDTH=50 HEIGHT=30><FONT SIZE=-1 COLOR="#808080" FACE="ARIAL">' + (days[lastMonth]-startDay+i+1) + '<\/FONT><\/TD>';

     for (i=1; i<=days[Month]; i++, column++) {
         
		 //output += '<TD WIDTH=50 HEIGHT=30>' + '<A HREF="javascript:changeDay(' + i + ')"><FONT SIZE=-1 FACE="ARIAL" COLOR="#0000FF">' + i + '<\/FONT><\/A>' +'<\/TD>';
         
		 if (i == day ) {
		 output += '<TD WIDTH=50 HEIGHT=30>' + '<A HREF="javascript:changeDay(' + i + ')"><FONT SIZE=-1 FACE="ARIAL" COLOR="red">' + i + '<\/FONT><\/A>' +'<\/TD>';
		 } else 
		 {output += '<TD WIDTH=50 HEIGHT=30>' + '<A HREF="javascript:changeDay(' + i + ')"><FONT SIZE=-1 FACE="ARIAL" COLOR="#0000FF">' + i + '<\/FONT><\/A>' +'<\/TD>';}
		 
		 if (column == 6) {
             output += '<\/TR><TR ALIGN=CENTER VALIGN=MIDDLE>';
             column = -1;
         }
     }

     if (column > 0) {
         for (i=1; column<7; i++, column++)
             output +=  '<TD WIDTH=50 HEIGHT=30><FONT SIZE=-1 COLOR="#808080" FACE="ARIAL">' + i + '<\/FONT><\/TD>';
     }

     output += '<\/TR><\/TABLE><\/TD><\/TR><\/TABLE><\/TD><\/TR><\/TABLE><\/FORM>';

     return output;
 }

 function changeDay(day) {
     window.opener.dialogWin.returnedValue = document.Cal.Year.options[document.Cal.Year.selectedIndex].value + '-' + padout( document.Cal.Month.options[document.Cal.Month.selectedIndex].value - 0 + 1) + '-' + padout( day);
	 //alert(window.opener.dialogWin.returnedValue)
	 //alert(window.opener.dialogWin.objeto);	 
	 window.opener.returnFunc(window.opener.dialogWin.objeto);
	 window.close();
 }

 function changeMonth() {
     opener.dialogWin.month = document.Cal.Month.options[document.Cal.Month.selectedIndex].value + '';
     location.href = '/grupo0/plantillas/calendario.jsp';
 }

 function changeYear() {
     opener.dialogWin.year = document.Cal.Year.options[document.Cal.Year.selectedIndex].value + '';
     location.href = '/grupo0/plantillas/calendario.jsp';
 }

 function makeArray0() {
     for (i = 0; i<makeArray0.arguments.length; i++)
         this[i] = makeArray0.arguments[i];
 }

 // var names     = new makeArray0('January','February','March','April','May','June','July','August','September','October','November','December');
 var names     = new makeArray0('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre')
 var days      = new makeArray0(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
 //var dow       = new makeArray0('Sun','Mon','Tue','Wed','Thu','Fri','Sat');
 var dow       = new makeArray0('Dom','Lun','Mar','Mie','Jue','Vie','Sab');

</script>
</head>
<body bgcolor="#FFFFFF" ONLOAD="opener.blockEvents();" ONUNLOAD="opener.unblockEvents()">
<p><center>
<script language="JavaScript">
	document.write(Calendar(opener.dialogWin.month, opener.dialogWin.year));
</script>
</center>
</body>
</html>
