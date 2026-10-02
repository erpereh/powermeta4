<%///////////////////////////////////////PLANNING GTA : Tooltip Day Informations (Incidences/Alerts)///////////////////////////////////////%>
<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>

<!-- Translations -->
<%
M4SessionCl zsesionGTA = M4Context.getM4SessionCl(request);
String zlanguser = zsesionGTA.getBagEntries("lang");
if ((zlanguser==null)||(zlanguser.equals(""))){zlanguser = "fr";}
if (zlanguser.equals("in")) { zlanguser="en";}
java.util.Properties Tran_mss_g4_gta_planning = new Properties();
Tran_mss_g4_gta_planning.load(application.getResourceAsStream("/translations/mss_g4_gta_planning_"+zlanguser+".properties"));
%>

<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
   
M4SessionCl zsesion = M4Context.getM4SessionCl(request);
String idSessionPerson = zsesion.getBagEntries("zIdPerson");

//Information Parameters
String argDate = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE");
String argHR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR");
String argOrdPerid = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD"); 
String argClassName = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_CLASSNAME"); 
String argMss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_MSS"); 

//Information Parameters
if ((argDate==null)||(argDate.equals(""))){argDate = "";}
if ((argHR==null)||(argHR.equals(""))){argHR = "";}
if ((argOrdPerid==null)||(argOrdPerid.equals(""))){argOrdPerid = "0";}
if ((argClassName==null)||(argClassName.equals(""))){argClassName = "";}
if ((argMss==null)||(argMss.equals(""))){argMss = "0";}

String zsubsesion = "SSE_GTA_PLAN";
String zmeta4object = "SSE_GTA_PLAN";  
String znodo = "SSE_INCIDENCE_REAL";
String znodo1 = "SSE_GTA_ALERTS";
String znodo2 = "SSE_INCIDENCE_WAITING";
String znodo3 = "SSE_ATTENDANCE_WAITING";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" +znodo + "[FIRST]";
String zlectura = znodo + ":" +zsubsesion + "!" + znodo;
String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";

String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
String zmove1 = znodo1 + ":" +znodo1 + "[FIRST]";
String zlectura1 = znodo1 + ":" +zsubsesion + "!" + znodo1;
String zcomun1 = znodo1 + ":" +zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".";

String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";
String zlectura2 = znodo2 + ":" +zsubsesion + "!" + znodo2;
String zcomun2 = znodo2 + ":" +zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
String zraiz2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + ".";

String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";
String zlectura3 = znodo3 + ":" +zsubsesion + "!" + znodo3;
String zcomun3 = znodo3 + ":" +zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + ".";

String getInfoMethod = "LOAD_DAY_TOOLTIP:" + zsubsesion + "!SSE_GTA_PLAN.SSE_GET_DAY_TOOLTIP_INFOS";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

String nmIncidence = zcomun + "SCO_NM_INCIDENCE";
String incColor = zcomun + "SCO_ID_COLOR";

String nmIncidencePending = zcomun2 + "SCO_NM_INCIDENCE";
String incColorPending = zcomun2 + "SCO_ID_COLOR";

String nmIncidencePendingAttendance = zcomun3 + "SCO_NM_INCIDENCE";
String incColorPendingAttendance = zcomun3 + "SCO_ID_COLOR";

String nmAlert = zcomun1 + "SCO_NM_ALERT_SEVERITY_LEVEL";
String descAlert = zcomun1 + "SCO_TEXT";
String imgAlert = zcomun1 + "SCO_HTML_ICON";
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=getInfoMethod%>">
	<m4:param name="ARG_DATE" value="<%=argDate%>"/>
	<m4:param name="ARG_ID_HR" value="<%=argHR%>"/>
	<m4:param name="ARG_OR_PERIOD" value="<%=argOrdPerid%>"/>
</m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<%
int  zcount  = 0;
int  zcounti  = 0;	
String zcountv = "0";
int  zcount1  = 0;
int  zcounti1  = 0;	
String zcountv1 = "0";
int  zcount2  = 0;
int  zcounti2  = 0;	
String zcountv2 = "0";
int  zcount3  = 0;
int  zcounti3  = 0;	
String zcountv3 = "0";
String incidenceType="";

try {
	M4Operations m = new M4Operations(request);
	zcount = m.getCount(znodo,zsubsesion,znodo);
	zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	zcountv = String.valueOf(zcount);
	zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
	zcounti1 = m.getCountInClient(znodo1,zsubsesion,znodo1);
	zcountv1 = String.valueOf(zcount1);
	zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
	zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
	zcountv2 = String.valueOf(zcount2);
	zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
	zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
	zcountv3 = String.valueOf(zcount3);
} catch(Exception e) {}
%>
</br>
<table  cellspacing="1" cellpadding="1" >
<%
if (argClassName.indexOf("day-HOLIDAY") != -1){
%>
	<tr>
		 
		<td width="20px" height="10px" class="day-HOLIDAY">
		</td>
		<td >
			&nbsp;:&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("tooltip.publicHoliday")%>
		</td>
	</tr>
<%}%>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
	<tr>
		<%
		try {
		M4Operations m = new M4Operations(request);
		incidenceType  = m.getItem(znodo,zsubsesion,znodo,m4lix,"SCO_ID_INCIDENCE_TP");
		} catch(Exception e) {}
		if (incidenceType.equals("1") && argMss.equals("0") && !idSessionPerson.equals(argHR) ){// Absence Type + ESS Side%>
			<td width="20px" height="10px" bgcolor ="#FFE87C">
			</td>
			<td >
				&nbsp;:&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("tooltip.absence")%> 
			</td>
		<%}else{%>
			<td width="20px" height="10px" bgcolor ="#<m4:item m4name="<%=incColor%>"/>">
			</td>
			<td >
				&nbsp;:&nbsp;<m4:item m4name="<%=nmIncidence%>"/>
			</td>
		<%}%>
	</tr>
	</m4:loop>
	
	<% 
	if (argMss.equals("0") && zcounti2 > 0 && !idSessionPerson.equals(argHR)){// ESS Side
	%>
		<tr>
			
			<td width="20px" height="10px" align="right" valign="top" bgcolor ="#FFE87C" >
				<img  src="/iconos/Valid.png"/>
			</td>
			<td >
				&nbsp;:&nbsp;<%=Tran_mss_g4_gta_planning.getProperty("tooltip.absence")%> 
			</td>
		</tr>
	<%}else{%>
		<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
		<tr>
			
			<td width="20px" height="10px" align="right" valign="top" bgcolor ="#<m4:item m4name="<%=incColorPending%>"/>" >
				<img  src="/iconos/Valid.png"/>
			</td>
			<td >
				&nbsp;:&nbsp;<m4:item m4name="<%=nmIncidencePending%>"/>
			</td>
		</tr>
		</m4:loop>
	<%}%>
	
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
	<tr>
		
		<td width="20px" height="10px" align="right" valign="top" bgcolor ="#<m4:item m4name="<%=incColorPendingAttendance%>"/>" >
			<img  src="/iconos/Valid.png"/>
		</td>
		<td >
			&nbsp;:&nbsp;<m4:item m4name="<%=nmIncidencePendingAttendance%>"/>
		</td>
	</tr>
	</m4:loop>
	<!-- Particuliar case : Holiday / Jour Férié -->
	<%if ( (!zcountv3.equals("0") || !zcountv2.equals("0") || !zcountv.equals("0") || (argClassName.indexOf("day-HOLIDAY") != -1) )&& !zcountv1.equals("0"))   {%>
		<tr class="floating-background"><th colspan="2"></th></tr>
	<%}%>

	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv1).intValue()-1).toString()%>">
	<tr>
		<td width="20px" height="10px">
			<img  src="/iconos/<m4:item m4name="<%=imgAlert%>"/>.png"/>
		</td>
		<td >
			&nbsp;:&nbsp;<m4:item m4name="<%=nmAlert%>"/>
		</td>
	</tr>
	<tr >
		<td width="200px"colspan="2" class="floating-tip-content">
			<m4:item m4name="<%=descAlert%>"/>
		</td>
	</tr>
	</m4:loop>
</table>

<m4:endpage/>

