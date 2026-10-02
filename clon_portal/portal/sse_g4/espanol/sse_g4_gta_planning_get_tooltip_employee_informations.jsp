<%///////////////////////////////////////PLANNING GTA : Tooltip Employee Informations (Role/Work Unit/Legal Entity/Position/Work Location)///////////////////////////////////////%>
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

//Information Parameters
String argDate = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE");
String argHR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR");
argHR  = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "gtaEncrypt2012",argHR);               
String argOrdPerid = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD"); 

//Information Parameters
if ((argDate==null)||(argDate.equals(""))){argDate = "";}
if ((argHR==null)||(argHR.equals(""))){argHR = "";}
if ((argOrdPerid==null)||(argOrdPerid.equals(""))){argOrdPerid = "0";}

String zsubsesion = "SSE_GTA_PLAN";
String zmeta4object = "SSE_GTA_PLAN";  
String znodo = "SSE_GTA_PLAN";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" +znodo + "[FIRST]";
String zlectura = znodo + ":" +zsubsesion + "!" + znodo;
String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";

String getHrInfoMethod = "LOAD_HR_TOOLTIP:" + zsubsesion + "!SSE_GTA_PLAN.SSE_GET_EMPLOYEE_INFOS";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
String mainRole = zraiz + "SCO_N_ROLE";
String mainRoleDate = zraiz + "SCO_DT_START";
String mainWU  = zraiz + "STD_N_WORK_UNIT";
String mainLegEnt  = zraiz + "STD_N_LEG_ENT";
String mainWorkLoc   = zraiz + "STD_N_WORK_LOCATION";
String mainJob  = zraiz + "STD_N_JOB_CODE";
String mainPosition  = zraiz + "SCO_NM_POSITION";
String mainFirstName  = zraiz + "STD_N_FIRST_NAME";
String mainLastName  = zraiz + "STD_N_FAMILY_NAME_1";
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=getHrInfoMethod%>">
	<m4:param name="ARG_DATE" value="<%=argDate%>"/>
	<m4:param name="ARG_ID_HR" value="<%=argHR%>"/>
	<m4:param name="ARG_OR_PERIOD" value="<%=argOrdPerid%>"/>
</m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<%
int  zcount  = 0;
int  zcounti  = 0;	
String zcountv = "0";

try {
	M4Operations m = new M4Operations(request);
	zcount = m.getCount(znodo,zsubsesion,znodo);
	zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	zcountv = String.valueOf(zcount);
} catch(Exception e) {}
%>
</br>

<table cellspacing='1' cellpadding='1' >
	<tr>
		<td class='titleMenu2' colspan='6'><%=Tran_mss_g4_gta_planning.getProperty("tooltipEmp.employeeInfos")%>  <m4:item m4name="<%=mainFirstName%>"/> , <m4:item m4name="<%=mainLastName%>"/> </td>
	</tr>
	<tr class='floating-background'>
		<th colspan='6'></th>
	</tr>
	<tr>
		<td><%=Tran_mss_g4_gta_planning.getProperty("tooltipEmp.role")%>&nbsp;&nbsp;&nbsp;</td>
		<td><%=Tran_mss_g4_gta_planning.getProperty("tooltipEmp.legalEntity")%>&nbsp;&nbsp;&nbsp;</td>
		<td><%=Tran_mss_g4_gta_planning.getProperty("tooltipEmp.workUnit")%>&nbsp;&nbsp;&nbsp;</td>
		<td><%=Tran_mss_g4_gta_planning.getProperty("tooltipEmp.workLocation")%>&nbsp;&nbsp;&nbsp;</td>
		<td><%=Tran_mss_g4_gta_planning.getProperty("tooltipEmp.job")%>&nbsp;&nbsp;&nbsp;</td>
		<td><%=Tran_mss_g4_gta_planning.getProperty("tooltipEmp.position")%>&nbsp;&nbsp;&nbsp;</td>
	</tr>
	<tr>
		<td class='floating-tip-content-nowrap'><m4:item m4name="<%=mainRole%>"/> (<m4:item m4name="<%=mainRoleDate%>"/>) &nbsp;&nbsp;&nbsp;</td>
		<td class='floating-tip-content-nowrap'><m4:item m4name="<%=mainLegEnt%>"/> &nbsp;&nbsp;&nbsp;</td>
		<td class='floating-tip-content-nowrap'><m4:item m4name="<%=mainWU%>"/> &nbsp;&nbsp;&nbsp;</td>
		<td class='floating-tip-content-nowrap'><m4:item m4name="<%=mainWorkLoc%>"/> &nbsp;&nbsp;&nbsp;</td>
		<td class='floating-tip-content-nowrap'><m4:item m4name="<%=mainJob%>"/> &nbsp;&nbsp;&nbsp;</td>
		<td class='floating-tip-content-nowrap'><m4:item m4name="<%=mainPosition%>"/> &nbsp;&nbsp;&nbsp;</td>
	</tr>
	<tr class='floating-background'>
		<th colspan='6'></th>
	</tr>
</table>

<m4:endpage/>