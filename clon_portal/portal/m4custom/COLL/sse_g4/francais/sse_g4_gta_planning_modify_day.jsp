<%///////////////////////////////////////PLANNING GTA : Day Modification///////////////////////////////////////%>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>

<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);

//Filter Parameters
String idHr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR");
idHr  = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "gtaEncrypt2012",idHr);
String orPeriod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD");
String dateParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE");

//Argument Parameters
String idDayTypeParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DAY_TYPE");
String nbHoursParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_NB_HOURS");
String idTimetable = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_TIMETABLE");
			
//Parameters
if ((idHr==null)||(idHr.equals(""))){idHr="";}
if ((orPeriod==null)||(orPeriod.equals(""))){orPeriod = "";}
if ((dateParam==null)||(dateParam.equals(""))){dateParam = "";}
if ((idDayTypeParam==null)||(idDayTypeParam.equals(""))){idDayTypeParam="";}
if ((nbHoursParam==null)||(nbHoursParam.equals(""))){nbHoursParam="";}
if ((idTimetable==null)||(idTimetable.equals(""))){idTimetable="";}

String zsubsesion = "SSE_GTA_PLAN";
String zmeta4object = "SSE_GTA_PLAN";  
String znodo = "SSE_GTA_PLAN";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" +znodo + "[FIRST]";
String zlectura = znodo + ":" +zsubsesion + "!" + znodo;
String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String modifyDay = "modifyDay:" + zsubsesion + "!SSE_GTA_PLAN.SSE_MODIFY_DAY";
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=modifyDay%>">
	<m4:param name="ARG_ID_HR" value="<%=idHr%>"/>
	<m4:param name="ARG_OR_PERIOD" value="<%=orPeriod%>"/>
	<m4:param name="ARG_DATE" value="<%=dateParam%>"/>
	<m4:param name="ARG_DAY_TYPE" value="<%=idDayTypeParam%>"/>
	<m4:param name="ARG_NB_HOURS" value="<%=nbHoursParam%>"/>
	<m4:param name="ARG_ID_TIMETABLE" value="<%=idTimetable%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<%
String executeJavascripts ="";
try {
	M4Operations t = new M4Operations(request);
	executeJavascripts = t.getItem(znodo,zmeta4object,znodo,"","SSE_JAVASCRIPTS"); 	
} catch(Exception e) {}
%>



<script type="text/javascript" language="Javascript1.5">
<%=executeJavascripts%>
</script>


<m4:endpage/>


