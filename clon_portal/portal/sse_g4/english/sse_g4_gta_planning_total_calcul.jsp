<%///////////////////////////////////////PLANNING GTA : Total Calculation///////////////////////////////////////%>
<script type="text/javascript">
	var columnFinalTotal= parseFloat(0,10);
	var HMFormat="ko";
</script>

<!--Total Columns-->
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
<script type="text/javascript">
	window.addEvent('domready', function() {	
		calculateColumnTotal($("<m4:item m4name='<%=dateHeader%>' />"));
		//var columnTotal = parseFloat($("<m4:item m4name='<%=dateHeader%>' m4format = 'yyyy-MM-dd'/>-Total").innerHTML,10);
		var columnTotal = $("<m4:item m4name='<%=dateHeader%>' />-Total").innerHTML;
		indexHoursMinute = columnTotal.indexOf(":",0);
		if (indexHoursMinute!=-1){HMFormat="ok";}
		columnTotal = HMtoDecimal(columnTotal);
		columnTotal = parseFloat(columnTotal,10);

		columnFinalTotal = columnFinalTotal + parseFloat(columnTotal,10);
		columnFinalTotal = Math.round(columnFinalTotal * 100) / 100;
		$("finalTotal").innerHTML = columnFinalTotal;
	});//domready
</script>
</m4:loop>
<script type="text/javascript">
	//calculation for Hours/Minutes
	if (hoursFormat == 1 && HMFormat == "ok")
	{
		var tot = $("finalTotal").innerHTML;
		tot = decimaltoHM(tot);
		$("finalTotal").innerHTML = tot;
	}
	if ($("finalTotal").innerHTML=="NaN" || $("finalTotal").innerHTML=="NaN:00"){$("finalTotal").innerHTML="...";}
</script>

<!--Total Rows-->
<%
String currentPers ="";
String currentPeriod="";
String rowToCalculate="";
String pers="";
String period="";
String debut = String.valueOf(zregistroinicial);
String fin = String.valueOf(zregistroinicial + zcounti1 - 1);
%>
<m4:loop from="<%=debut%>" to="<%=fin%>">
<%
	try {
		M4Operations t = new M4Operations(request);
		pers = t.getItem(znodo1,zmeta4object,znodo1,m4lix,"STD_ID_HR"); 
		period = String.valueOf((int)Float.parseFloat(t.getItem(znodo1,zmeta4object,znodo1,m4lix,"STD_OR_HR_PERIOD")));

	} catch(Exception e) {}

	if (!currentPers.equals(pers) || !currentPeriod.equals(period)){

		currentPers = pers;
		currentPeriod = period;
		rowToCalculate = currentPers+"|"+currentPeriod;
		%>
		<script type="text/javascript">
	
		window.addEvent('domready', function() {	
			calculateRowTotal($("<%=rowToCalculate%>"));
		});//domready
		</script>
	<%}%>
</m4:loop>