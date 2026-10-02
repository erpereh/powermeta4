<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_today.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<script type="text/javascript" language="Javascript1.4">
var Today = new Date();	
var WeekDays = new Array(<%=Tran_shco_g0.getProperty("Arr.Days")%>);
var Months = new Array(<%=Tran_shco_g0.getProperty("Arr.Months")%>);
var WeekDay = WeekDays[Today.getDay()];			
var Month = Months[Today.getMonth()];
document.write(WeekDay + ", " + Today.getDate() + " " + "<%=Tran_shco_g0.getProperty("Literal.Of")%>" +" " + Month);
</script>