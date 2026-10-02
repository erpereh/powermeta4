<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_calendar.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="shco_gen_taglib.jsp" %><html><head><%@ include file="shco_gen_bag.jsp" %><%@ include file="shco_gen_css.jsp" %><%@ include file="shco_gen_js.jsp" %>

<script type="text/javascript" language="Javascript1.5" src="/library/m4calendar.js"></script>
<% 
if (Tran_shco_g0 == null){    
   Tran_shco_g0 = new com.meta4.redirect.M4PropertiesRedirect();
  
}
if (Tran_shco_g0.isEmpty()){
 Tran_shco_g0.load(pageContext, zTranslationsPath + "shco_g0_" + zlang + ".properties");
 }
%>
<title><%=Tran_shco_g0.getProperty("Literal.CalenTitle")%></title>
<script type="text/javascript" language="Javascript1.5">
<%@ include file="../shco_g0/shco_gen_cal_param.jsp" %>
var daysInMonth = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
today = new getToday()
</script>
</head>
<% int zCalTab =1;%>

<body onunload="">
<form id="miform" name="miform" action=""><input type="hidden" id="fecha" name="fecha" /></form>
<script type="text/javascript" language="Javascript1.5"><!--
document.write("<table id='calendario' class='calendario' border='1' width='100%'>");
document.write("<thead>");
document.write("<tr class='filtro'>");
document.write("<td colspan='7'>");
document.write("<form id='fselect' name='fselect' action=''>");
document.write("<select id='day' onchange='selectcellday(this.options[this.selectedIndex].id)' class='fuenteformulario100'  tabindex = '<%=(zCalTab++)%>' >");
for (var intLoop = 0; intLoop < daysInMonth[today.month]; intLoop++)
document.write("<option id= '(intLoop+1)'" + (today.day == (intLoop+1) ? "Selected" : "") + ">" + (intLoop+1) );
document.write("</select>");
document.write("<select id='month' onchange='newCalendar()' class='fuenteformulario100'  tabindex = '<%=(zCalTab++)%>' >");
for (var intLoop = 0; intLoop < months.length; intLoop++)
document.write("<option id = "+ (intLoop +1)+ (today.month == intLoop ? " Selected" : "") + ">" + months[intLoop]);
document.write("</select>");
document.write("<select id='year' onchange='newCalendar()' class='fuenteformulario100' tabindex = '<%=(zCalTab++)%>' >");
for (var intLoop = 1900; intLoop < 2100; intLoop++)
document.write("<option id ="+intLoop +(today.year == intLoop ? " Selected" : "") + ">" + intLoop);
document.write("</select>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
document.write("<a tabindex ='<%=(zCalTab++)%>' href='javascript:setToday();adios(false);' class='button' ><%=Tran_shco_g0.getProperty("Literal.CalToday")%></a>");
document.write("&nbsp;&nbsp;");
document.write("<a tabindex ='<%=(zCalTab++)%>' href='javascript:adios(true);' class='button'><%=Tran_shco_g0.getProperty("Literal.CalWithoutDate")%></a>");

document.write("</form>");
document.write("</td>");
document.write("</tr>");

//Cabecera de los días
document.write("<tr class='calendario'>");
for (var intLoop = 0; intLoop < days.length; intLoop++) document.write("<td >" + days[intLoop] + "</td>");
document.write("</tr>");
document.write("</thead>");

document.write("<tbody id='dayList' name='dayList' ondblclick='adios(false);'>");
//Crear las celdas vacias
for (var intWeeks = 0; intWeeks < 6; intWeeks++) {
	document.write("<tr>");
	for (var intDays = 0; intDays < days.length; intDays++){document.write("<td style='cursor: default'; onclick = 'getDate(this)' ></td>");}
	document.write("</tr>");
}
document.write("</tbody>");
document.write("</table>");
--></script>
<br />
<center>
    <a tabindex ="<%=(zCalTab++)%>" href="javascript:changeYear('menos');"><img alt="<%=Tran_shco_g0.getProperty("Button.CalPreviousYear")%>" <%@ include file="../files_gif/ic_ret_beg.jsp" %> ></img></a>
	<a tabindex ="<%=(zCalTab++)%>" href="javascript:newCalendar('menos');"><img alt="<%=Tran_shco_g0.getProperty("Button.CalPreviousMonth")%>" <%@ include file="../files_gif/ic_ret.jsp" %> ></img></a>
	<a tabindex ="<%=(zCalTab++)%>" href="javascript:adios(false);" ><img  <%@ include file="../files_gif/ic_ace.jsp" %> alt="<%=Tran_shco_g0.getProperty("Button.Ok")%>"></img></a>				
	<a tabindex ="<%=(zCalTab++)%>" href="javascript:newCalendar('mas');" ><img alt="<%=Tran_shco_g0.getProperty("Button.CalNextMonth")%>" <%@ include file="../files_gif/ic_ava.jsp" %> ></img></a>
	<a tabindex ="<%=(zCalTab++)%>" href="javascript:changeYear('mas');" ><img alt="<%=Tran_shco_g0.getProperty("Button.CalNextYear")%>" <%@ include file="../files_gif/ic_ava_end.jsp" %> ></img></a>
	
</center><script type="text/javascript">newCalendar();m4focus("fselect","day");</script>
</body>
</html>

