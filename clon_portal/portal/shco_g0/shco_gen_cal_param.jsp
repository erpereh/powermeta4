<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_cal_param.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>



var months = new Array(<%=Tran_shco_g0.getProperty("Arr.Months")%>);
if (slanguser == "en"){
   var days = new Array("&nbsp;&nbsp;<%=Tran_shco_g0.getProperty("Literal.CalSunday")%>&nbsp;","&nbsp;&nbsp;<%=Tran_shco_g0.getProperty("Literal.CalMonday")%>&nbsp;","&nbsp;<%=Tran_shco_g0.getProperty("Literal.CalTuesday")%>&nbsp;","<%=Tran_shco_g0.getProperty("Literal.CalWednesday")%>","&nbsp;<%=Tran_shco_g0.getProperty("Literal.CalThursday")%>","&nbsp;&nbsp;<%=Tran_shco_g0.getProperty("Literal.CalFriday")%>&nbsp;","&nbsp;<%=Tran_shco_g0.getProperty("Literal.CalSaturday")%>");
}else{
   var days = new Array("&nbsp;&nbsp;<%=Tran_shco_g0.getProperty("Literal.CalMonday")%>&nbsp;","&nbsp;<%=Tran_shco_g0.getProperty("Literal.CalTuesday")%>&nbsp;","<%=Tran_shco_g0.getProperty("Literal.CalWednesday")%>","&nbsp;<%=Tran_shco_g0.getProperty("Literal.CalThursday")%>","&nbsp;&nbsp;<%=Tran_shco_g0.getProperty("Literal.CalFriday")%>&nbsp;","&nbsp;<%=Tran_shco_g0.getProperty("Literal.CalSaturday")%>","&nbsp;&nbsp;<%=Tran_shco_g0.getProperty("Literal.CalSunday")%>&nbsp;");
}


var firstletterdays = new Array(<%=Tran_shco_g0.getProperty("Arr.DaysInitialLetter")%>);
var highlightdays= new Array(<%=Tran_shco_g0.getProperty("Arr.Highlightdays")%>);
var g_classActMonthDay = "actmonthday";
var g_classNextMonthDay = "nextmonthday";
var g_classPreviousMonthDay = "previousmonthday";
var g_classBeforeSelection = "";//clase antes de ser seleccionado
var g_classSelection = "selectedday";
var g_classHoy = "hoy";
var g_classSelecteHoy = "selectedhoy";



