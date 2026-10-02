<%
//Identify language id from session and formats current date of client occording language
// 2 = English
// 3 = Spanish
// 4 = French
// 5 = Portugese
int iLanguageId = (int)M4Context.getSession(request).getLanguageID();
%><script type="text/javascript">var oToday = new Date(), asWeekDays = new Array('<%=Tran.getProperty("date.day.01")%>', '<%=Tran.getProperty("date.day.02")%>', '<%=Tran.getProperty("date.day.03")%>', '<%=Tran.getProperty("date.day.04")%>', '<%=Tran.getProperty("date.day.05")%>', '<%=Tran.getProperty("date.day.06")%>', '<%=Tran.getProperty("date.day.07")%>'), asMonths = new Array('<%=Tran.getProperty("date.month.01")%>', '<%=Tran.getProperty("date.month.02")%>', '<%=Tran.getProperty("date.month.03")%>', '<%=Tran.getProperty("date.month.04")%>', '<%=Tran.getProperty("date.month.05")%>', '<%=Tran.getProperty("date.month.06")%>', '<%=Tran.getProperty("date.month.07")%>', '<%=Tran.getProperty("date.month.08")%>', '<%=Tran.getProperty("date.month.09")%>', '<%=Tran.getProperty("date.month.10")%>', '<%=Tran.getProperty("date.month.11")%>', '<%=Tran.getProperty("date.month.12")%>'), sWeekDay = asWeekDays[oToday.getDay()], sMonth = asMonths[oToday.getMonth()];<%
if (iLanguageId == 2) {       //English
%>document.write(sWeekDay + ", " + oToday.getDate() + " " + sMonth);<%
} else if (iLanguageId == 3) { //Spanish
%>document.write(sWeekDay + ", " + oToday.getDate() + " de " + sMonth);<%
} else if (iLanguageId == 4) { //French
%>document.write(sWeekDay + " " + oToday.getDate() + " " + sMonth);<%
} else if (iLanguageId == 5) { //Portugese
%>document.write(sWeekDay + ", " + oToday.getDate() + " de " + sMonth);<%
} else {                        //Default
%>document.write(sWeekDay + ", " + oToday.getDate() + " " + sMonth);<%
}%></script>