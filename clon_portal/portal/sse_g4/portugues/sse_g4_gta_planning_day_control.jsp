<%///////////////////////////////////////PLANNING GTA : Theoretical Modification Control///////////////////////////////////////%>
<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<!-- Translations -->
<%
M4SessionCl zsesionGTA = M4Context.getM4SessionCl(request);
String zlanguser = zsesionGTA.getBagEntries("lang");
if ((zlanguser==null)||(zlanguser.equals(""))){zlanguser = "fr";}
java.util.Properties Tran_mss_g4_gta_planning = new Properties();
Tran_mss_g4_gta_planning.load(application.getResourceAsStream("/translations/mss_g4_gta_planning_"+zlanguser+".properties"));
%>
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);

//Portal Side
String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");
//Global Parameters
String dtStart = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START");
String dtEnd = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_END");
String nbDays = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NB_DAYS");
//Filter Parameters
String idWuParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WU");
String idLegEntParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_LEGENT");
String idWorkLocParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKLOC");
String idWorkCycleParam = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKCYCLE");
//Information Parameters
String argDate = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE");
String argHR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR");
String argHREncrypt = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", argHR);
String argOrdPeriod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD");
String argTabIndex = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_TAB_INDEX");
String argDispModif = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DISPLAY_MODIF");
String argHoursFormat = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_HOURS_FORMAT");

//Portal Side
if ((mss==null)||(mss.equals(""))){mss = "0";}
//Global Parameters
if ((dtStart==null)||(dtStart.equals(""))){dtStart = "";}
if ((dtEnd==null)||(dtEnd.equals(""))){dtEnd = "";}
if ((nbDays==null)||(nbDays.equals(""))){nbDays = "0";}
//Filter Parameters
if ((idWuParam==null)||(idWuParam.equals(""))){idWuParam="All";}
if ((idLegEntParam==null)||(idLegEntParam.equals(""))){idLegEntParam="All";}
if ((idWorkLocParam==null)||(idWorkLocParam.equals(""))){idWorkLocParam="All";}
if ((idWorkCycleParam==null)||(idWorkCycleParam.equals(""))){idWorkCycleParam="All";}
//Information Parameters
if ((argDate==null)||(argDate.equals(""))){argDate = "";}
if ((argHR==null)||(argHR.equals(""))){argHR = "";}
if ((argOrdPeriod==null)||(argOrdPeriod.equals(""))){argOrdPeriod = "0";}
if ((argTabIndex==null)||(argTabIndex.equals(""))){argTabIndex = "0";}
if ((argDispModif==null)||(argDispModif.equals(""))){argDispModif = "";}
if ((argHoursFormat==null)||(argHoursFormat.equals(""))){argHoursFormat = "0";}

%>
<%
String zsubsesion = "SSE_GTA_PLAN";
String zmeta4object = "SSE_GTA_PLAN";  
String znodo = "SSE_GTA_PLAN";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" +znodo + "[FIRST]";
String zlectura = znodo + ":" +zsubsesion + "!" + znodo;
String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";

String loadMethod    = "LOAD:"     + zsubsesion + "!SSE_GTA_PLAN.SSE_GET_DAY_THEOR_CONTROL";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

String idPerson = zraiz + "STD_ID_HR";
String firstName = zraiz + "STD_N_FIRST_NAME";
String lastName = zraiz + "STD_N_FAMILY_NAME_1";
String dayType = zraiz + "SCO_ID_DAY_TYPE";
String nmdayType = zraiz + "SCO_NM_DAY_TYPE";
String idWeek = zraiz + "SCO_OR_WEEK";
String nmWeek = zraiz + "SCO_NM_WEEK";
String idCycle = zraiz + "SCO_ID_REF_MOD";
String date = zraiz + "DT_START";
String hours = zraiz + "SCO_WORK_THEO_HRS";
String ordinalPeriod = zraiz + "STD_OR_HR_PERIOD";
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=loadMethod%>">
	<m4:param name="ARG_DATE" value="<%=argDate%>"/>
	<m4:param name="ARG_ID_HR" value="<%=argHR%>"/>
	<m4:param name="ARG_OR_PERIOD" value="<%=argOrdPeriod%>"/>
</m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<%
int  zcount  = 0;
int  zcounti  = 0;
String zcountv = "0";
String buffer = "";
try {
	M4Operations m = new M4Operations(request);
	zcount  = m.getCount(znodo,zsubsesion,znodo);
	buffer  =  m.getItem(znodo,zsubsesion,znodo,"","SSE_JAVASCRIPTS");
} catch(Exception e) {}
%>

<script type="text/javascript">

buffer = "<%=buffer%>";
</script>

<m4:endpage/>
	