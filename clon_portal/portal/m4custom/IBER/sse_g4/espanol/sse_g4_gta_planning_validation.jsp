<%///////////////////////////////////////PLANNING GTA : Days Validation ///////////////////////////////////////%>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page  import="java.io.*, java.util.*, java.net.*, com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*, org.json.simple.*" %>

<%
//we do NOT cache the page
response.setDateHeader("Expires", -1);

//parameters
String json = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"json") ;

JSONObject objRet = new JSONObject();
String sret = "";
sret = objRet.toString();

String idHr = "";
String orPeriod = "";
String dtStart = "";
String dtEnd = "";

JSONObject mapObj=(JSONObject) JSONValue.parse(json);
dtStart = (String)mapObj.get("startDate");
dtEnd   = (String)mapObj.get("endDate");

String zsubsesion = "SSE_GTA_PLAN";
String zmeta4object = "SSE_GTA_PLAN";  
String znodo = "SSE_GTA_PLAN";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" +znodo + "[FIRST]";
String zlectura = znodo + ":" +zsubsesion + "!" + znodo;
String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

String validateMethod = "validatePeriod:" + zsubsesion + "!SSE_GTA_PLAN.SSE_VALIDATE_PERIOD";
%>

<m4:startpage m4task="<%=zsubsesion%>"/>

<%
//we put the rows in an array and loop it
ArrayList liste = (ArrayList)mapObj.get("liste");
int ttt = liste.size();
for (int i = 0; i < liste.size(); i++ ){
	JSONObject people = (JSONObject) liste.get(i);
	idHr = (String)people.get("idPers");
	idHr  = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "gtaEncrypt2012",idHr);
	orPeriod = (String)people.get("ordPeriod");
%>
	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	<m4:exec m4method="<%=validateMethod%>">
		<m4:param name="ARG_ID_HR" value="<%=idHr%>"/>
		<m4:param name="ARG_OR_PERIOD" value="<%=orPeriod%>"/>
		<m4:param name="ARG_DT_START" value="<%=dtStart%>"/>
		<m4:param name="ARG_DT_END" value="<%=dtEnd%>"/>
	</m4:exec>
	<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
	<m4:endjob/>
	<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%}%>


<m4:endpage/>












	