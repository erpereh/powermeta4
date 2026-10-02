<%///////////////////////////////////////PLANNING GTA : Refresh Alerts///////////////////////////////////////%>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>

<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);

//Filter Parameters
String idHr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR");
String orPeriod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD");
String dtStart = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START");
String dtEnd = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_END");
					
//Parameters
if ((idHr==null)||(idHr.equals(""))){idHr="";}
if ((orPeriod==null)||(orPeriod.equals(""))){orPeriod = "";}
if ((dtStart==null)||(dtStart.equals(""))){dtStart = "";}
if ((dtEnd==null)||(dtEnd.equals(""))){dtEnd = "";}

String zsubsesion = "SSE_GTA_PLAN";
String zmeta4object = "SSE_GTA_PLAN";  
String znodo = "SSE_GTA_PLAN";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" +znodo + "[FIRST]";
String zlectura = znodo + ":" +zsubsesion + "!" + znodo;
String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

String refreshMethod = "refreshAlerts:" + zsubsesion + "!SSE_GTA_PLAN.SSE_REFRESH_ALERTS";
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=refreshMethod%>">
	<m4:param name="ARG_ID_HR" value="<%=idHr%>"/>
	<m4:param name="ARG_OR_PERIOD" value="<%=orPeriod%>"/>
	<m4:param name="ARG_DT_START" value="<%=dtStart%>"/>
	<m4:param name="ARG_DT_END" value="<%=dtEnd%>"/>
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