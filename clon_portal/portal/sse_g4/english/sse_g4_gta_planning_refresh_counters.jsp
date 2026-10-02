<%///////////////////////////////////////PLANNING GTA : Refresh Counters///////////////////////////////////////%>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>

<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);

//Parameters
String idHr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR");
String ordPeriod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD");
String date = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE");
String idCounter = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_COUNTER");

//Global Parameters
if ((idHr==null)||(idHr.equals(""))){idHr="";}
if ((ordPeriod==null)||(ordPeriod.equals(""))){ordPeriod = "";}
if ((date==null)||(date.equals(""))){date = "";}
if ((idCounter==null)||(idCounter.equals(""))){idCounter="";}

String zsubsesion = "SSE_GTA_PLAN";
String zmeta4object = "SSE_GTA_PLAN"; 
String znodo = "SSE_GTA_VE";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" +znodo + "[FIRST]";
String zlectura = znodo + ":" +zsubsesion + "!" + znodo;
String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zraiz  = znodo + ":" +zsubsesion + "!" + znodo + ".";

String counterValue = zraiz + "SSE_GET_COUNTER_VALUE";

String refreshCounter = "refreshCounter:" + zsubsesion + "!SSE_GTA_VE.SSE_REFRESH_COUNTER";
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=refreshCounter%>">
	<m4:param name="ARG_DATE" value="<%=date%>"/>
	<m4:param name="ARG_ID_HR" value="<%=idHr%>"/>
	<m4:param name="ARG_OR_PERIOD" value="<%=ordPeriod%>"/>
	<m4:param name="ARG_ID_COUNTER" value="<%=idCounter%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
int  zcounti  = 0;	
try {
	M4Operations m = new M4Operations(request);
	zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
} catch(Exception e) {}
String zcountv = String.valueOf(zcounti);
%>

<m4:item m4name="<%=counterValue%>"/>

<m4:endpage/>
