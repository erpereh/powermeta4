<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%@ page import="com.meta4.configuration.*" %>
<%
//Portal Side - DYNAMIC CSS CALCULATION
String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");
if ((mss==null)||(mss.equals(""))){mss = "0";}

String zsubsesion = "SSE_GTA_PLAN";
String zmeta4object = "SSE_GTA_PLAN";  
String znodo10 = "GTA_COLOR_CSS";//"GTA_COLOR_GROUP";
String znodo11 = "GTA_ALERT_GROUP";
String znodo12 = "GTA_COLOR_TIMESLOTS";

String zoutputdef10 = zsubsesion + "!" + znodo10 + "[*]";
String zmove10 = znodo10 + ":" +znodo10 + "[FIRST]";
String zlectura10 = znodo10 + ":" +zsubsesion + "!" + znodo10;
String zcomun10 = znodo10 + ":" +zsubsesion + "!" + znodo10 + "[&VAR.m4lix]" + ".";

String zoutputdef11 = zsubsesion + "!" + znodo11 + "[*]";
String zmove11 = znodo11 + ":" +znodo11 + "[FIRST]";
String zlectura11 = znodo11 + ":" +zsubsesion + "!" + znodo11;
String zcomun11 = znodo11 + ":" +zsubsesion + "!" + znodo11 + "[&VAR.m4lix]" + ".";

String zoutputdef12 = zsubsesion + "!" + znodo12 + "[*]";
String zmove12 = znodo12 + ":" +znodo12 + "[FIRST]";
String zlectura12 = znodo12 + ":" +zsubsesion + "!" + znodo12;
String zcomun12 = znodo12 + ":" +zsubsesion + "!" + znodo12 + "[&VAR.m4lix]" + ".";

String zmetodocarga10 = "LOAD10:" + zsubsesion + "!GTA_COLOR_CSS.GTA_LOAD";
//String zmetodocarga10 = "LOAD10:" + zsubsesion + "!GTA_COLOR_GROUP.GTA_LOAD";
String zmetodocarga11 = "LOAD11:" + zsubsesion + "!GTA_ALERT_GROUP.GTA_LOAD";
String zmetodocarga12 = "LOAD12:" + zsubsesion + "!GTA_COLOR_TIMESLOTS.GTA_LOAD";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% 
try {
	M4Operations m = new M4Operations(request); 
	//Side Parameter
	m.setItem(zsubsesion,znodo11,"","PROP_MSS_SIDE",mss);  
}catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga10%>"></m4:exec>
<m4:exec m4method="<%=zmetodocarga11%>"></m4:exec>
<m4:exec m4method="<%=zmetodocarga12%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo10%>"><m4:param name="m4name0" value="<%=zoutputdef10%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo11%>"><m4:param name="m4name0" value="<%=zoutputdef11%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo12%>"><m4:param name="m4name0" value="<%=zoutputdef12%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove10%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove11%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove12%>"/></m4:move>
<%
int  zcounti10  = 0;	
int  zcount10  = 0;
int  zcounti11  = 0;	
int  zcount11  = 0;
int  zcounti12  = 0;	
int  zcount12  = 0;

try {
	M4Operations m = new M4Operations(request);
	
	zcounti10 = m.getCountInClient(znodo10,zsubsesion,znodo10);
	zcount10 =  m.getCount(znodo10,zsubsesion,znodo10);
	zcounti11 = m.getCountInClient(znodo11,zsubsesion,znodo11);
	zcount11 =  m.getCount(znodo11,zsubsesion,znodo11);
	zcounti12 = m.getCountInClient(znodo12,zsubsesion,znodo12);
	zcount12 =  m.getCount(znodo12,zsubsesion,znodo12);
	
	} catch(Exception e) {}
String	zcountv10 = String.valueOf(zcounti10);
String	zcountv10Abs = String.valueOf(zcounti10+1);
String	zcountv10bis = String.valueOf(zcounti10+2);
String	zcountv11 = String.valueOf(zcounti11);
String	zcountv12 = String.valueOf(zcounti12);
//- avant -
String classColor = "";
String className ="";
String classColorAlert = "";
String classColorAlertSeverity = "";
String colorText = "black";
%>
<style type="text/css">
/*-------------------------------Day Generic Style----------------------------*/
.dayNA {
	background-color:white;
	color:white;
	overflow: hidden;
	border:2px solid white;
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
}
.dayNA-We {
	background-color:white;
	color:white;
	overflow: hidden;
	border:2px solid white;
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
	opacity:.50; 
	filter: progid:DXImageTransform.Microsoft.alpha( opacity=50);
}
.dayChosen {
	background-color:white;
	background-repeat: no-repeat;
	background-image:url(/iconos/gtaChoice.png);
	background-position:right center;
	color:black;
	overflow: hidden;
	border: 2px groove #FF6600; 
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
}
.dayComplete {
	background-color:white;
	background-repeat: no-repeat;
	background-image:url(/iconos/gtaComplete.png);
	background-position:right center;
	color:black;
	overflow: hidden;
	border: 2px groove #00C000; 
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
}
.dayDetail {
	background-color:white;
	background-repeat: no-repeat;
	background-image:url(/iconos/gtaDetail.png);
	background-position:right center;
	color:black;
	overflow: hidden;
	border: 2px groove #0099FF;
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
}
.dayError {
	background-color:white;
	color:red;
	overflow: hidden;
	border: 2px groove red; 
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
}
.day-Incidents {
	background-color:#0C4F8A;
	color:white;
	overflow: hidden;
	border: 2px solid white; 
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
}
.day-Absence {
	background-color:#FFE87C;
	color:black;
	overflow: hidden;
	border: 2px solid white; 
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
}
/*-------------------------------Day Particular Style----------------------------*/
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv10bis).intValue()-1).toString()%>">
<%
	//Particuliar case : Plusieurs Incidents and Absences (for ESS)
	if (m4lix.equals(zcountv10) || m4lix.equals(zcountv10Abs)) {
		if (m4lix.equals(zcountv10)) {
			className = "day-Incidents";
			classColor = "0C4F8A";
			colorText = "white";
		}
		if (m4lix.equals(zcountv10Abs)) {
			className = "day-Absence";
			classColor = "FFE87C";
			colorText = "black";
		}
	}else{
		try {
			M4Operations t = new M4Operations(request);
			classColor = t.getItem(znodo10,zmeta4object,znodo10,m4lix,"SCO_ID_COLOR");
			className = t.getItem(znodo10,zmeta4object,znodo10,m4lix,"CSS_CLASS");
		} catch(Exception e) {}
	}
%>

.<%=className%> {
	background-color:#<%=classColor%>;
	color:<%=colorText%>;
	overflow: hidden;
	border:2px solid white;
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
}
.<%=className%>-We {
	background-color:#<%=classColor%>;
	color:<%=colorText%>;
	overflow: hidden;
	border:2px solid white;
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
	opacity:.50; 
	filter: progid:DXImageTransform.Microsoft.alpha( opacity=50); 
}
.<%=className%>-Valid {
	background-color:#<%=classColor%>;
	color:<%=colorText%>;
	overflow: hidden;
	background-repeat: no-repeat;
	background-image:url(/iconos/Valid.png);
	background-position:right center;
	border:2px solid white;
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
}
.<%=className%>-Valid-We {
	background-color:#<%=classColor%>;
	color:<%=colorText%>;
	overflow: hidden;
	background-repeat: no-repeat;
	background-image:url(/iconos/Valid.png);
	background-position:right center;
	border:2px solid white;
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
	opacity:.50; 
	filter: progid:DXImageTransform.Microsoft.alpha( opacity=50); 
}
.<%=className%>-Modification {
	background-color:#<%=classColor%>;
	color:<%=colorText%>;
	overflow: hidden;
	border: 2px groove #00C000;
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
}
.<%=className%>-Modification-We {
	background-color:#<%=classColor%>;
	color:<%=colorText%>;
	overflow: hidden;
	border: 2px groove #00C000;
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
	opacity:.50; 
	filter: progid:DXImageTransform.Microsoft.alpha( opacity=50); 
}
.<%=className%>-Valid-Modification {
	background-color:#<%=classColor%>;
	color:<%=colorText%>;
	overflow: hidden;
	background-repeat: no-repeat;
	background-image:url(/iconos/Valid.png);
	background-position:right center;
	border: 2px groove #00C000;
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
}
.<%=className%>-Valid-Modification-We {
	background-color:#<%=classColor%>;
	color:<%=colorText%>;
	overflow: hidden;
	background-repeat: no-repeat;
	background-image:url(/iconos/Valid.png);
	background-position:right center;
	border: 2px groove #00C000;
	vertical-align:middle;
    text-align: -moz-center; /*firefox*/
    text-align:center; /*IE*/
	padding:0px 0px 0px 0px; /*a ajouter si on veut que le div prenne tout le td*/
	opacity:.50; 
	filter: progid:DXImageTransform.Microsoft.alpha( opacity=50); 
}
.<%=className%>-complete {
	background-color:#<%=classColor%>;
}
.<%=className%>-error {
	background-color:#<%=classColor%>;
}
	/*-------------------------------Day Particular Style with Alerts----------------------------*/
	<%
	//For Blocking Alerts
	int blockAlert = 0;
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv11).intValue()-1).toString()%>">
	<%
		try {
			M4Operations t = new M4Operations(request);
			classColorAlert = t.getItem(znodo11,zmeta4object,znodo11,m4lix,"SCO_HTML_ICON");
			classColorAlertSeverity = String.valueOf((int)Float.parseFloat(t.getItem(znodo11,zmeta4object,znodo11,m4lix,"SCO_ID_ALERT_SEVERITY_LEVEL"))); 
			
		} catch(Exception e) {}
		blockAlert = 0;
		// we double it for blocking Alerts
		while (blockAlert < 2){
	%>


			.<%=className%>-AlertSeverity<%=classColorAlertSeverity%> {
				background-color:#<%=classColor%>;
				color:<%=colorText%>;
				overflow: hidden;
				background-repeat: no-repeat;
				background-image:url(/iconos/<%=classColorAlert%>.png);
				background-position:right center;
				text-align: center;
				vertical-align:middle;
				text-align:center; /*IE*/
				padding:0px 0px 0px 0px;
				border:2px solid white;
			}
			
			.<%=className%>-AlertSeverity<%=classColorAlertSeverity%>-We {
				background-color:#<%=classColor%>;
				color:<%=colorText%>;
				overflow: hidden;
				background-repeat: no-repeat;
				background-image:url(/iconos/<%=classColorAlert%>.png);
				background-position:right center;
				text-align: center;
				vertical-align:middle;
				border:2px solid white;
				text-align: -moz-center; /*firefox*/
				text-align:center; /*IE*/
				padding:0px 0px 0px 0px;
				opacity:.50; 
				filter: progid:DXImageTransform.Microsoft.alpha( opacity=50); 
				border:2px solid white;
			}
			.<%=className%>-AlertSeverity<%=classColorAlertSeverity%>-Valid {
				background-color:#<%=classColor%>;
				color:<%=colorText%>;
				overflow: hidden;
				background-repeat: no-repeat;
				background-image:url(/iconos/<%=classColorAlert%>-Valid.png);
				background-position:right center;
				text-align: center;
				vertical-align:middle;
				border:2px solid white;
				text-align: -moz-center; /*firefox*/
				text-align:center; /*IE*/
				padding:0px 0px 0px 0px;
			}
			.<%=className%>-AlertSeverity<%=classColorAlertSeverity%>-Valid-We {
				background-color:#<%=classColor%>;
				color:<%=colorText%>;
				overflow: hidden;
				background-repeat: no-repeat;
				background-image:url(/iconos/<%=classColorAlert%>-Valid.png);
				background-position:right center;
				text-align: center;
				vertical-align:middle;
				border:2px solid white;
				text-align: -moz-center; /*firefox*/
				text-align:center; /*IE*/
				padding:0px 0px 0px 0px;
				opacity:.50; 
				filter: progid:DXImageTransform.Microsoft.alpha( opacity=50); 
			}
			.<%=className%>-AlertSeverity<%=classColorAlertSeverity%>-Modification {
				background-color:#<%=classColor%>;
				color:<%=colorText%>;
				overflow: hidden;
				background-repeat: no-repeat;
				background-image:url(/iconos/<%=classColorAlert%>.png);
				background-position:right center;
				text-align: center;
				vertical-align:middle;
				border: 2px groove #00C000;
				text-align: -moz-center; /*firefox*/
				text-align:center; /*IE*/
				padding:0px 0px 0px 0px;
			}
			.<%=className%>-AlertSeverity<%=classColorAlertSeverity%>-Modification-We {
				background-color:#<%=classColor%>;
				color:<%=colorText%>;
				overflow: hidden;
				background-repeat: no-repeat;
				background-image:url(/iconos/<%=classColorAlert%>.png);
				background-position:right center;
				text-align: center;
				vertical-align:middle;
				border: 2px groove #00C000;
				text-align: -moz-center; /*firefox*/
				text-align:center; /*IE*/
				padding:0px 0px 0px 0px;
				opacity:.50; 
				filter: progid:DXImageTransform.Microsoft.alpha( opacity=50); 
			}
			.<%=className%>-AlertSeverity<%=classColorAlertSeverity%>-Valid-Modification {
				background-color:#<%=classColor%>;
				color:<%=colorText%>;
				overflow: hidden;
				background-repeat: no-repeat;
				background-image:url(/iconos/<%=classColorAlert%>-Valid.png);
				background-position:right center;
				text-align: center;
				vertical-align:middle;
				border: 2px groove #00C000;
				text-align: -moz-center; /*firefox*/
				text-align:center; /*IE*/
				padding:0px 0px 0px 0px;
			}
			.<%=className%>-AlertSeverity<%=classColorAlertSeverity%>-Valid-Modification-We {
				background-color:#<%=classColor%>;
				color:<%=colorText%>;
				overflow: hidden;
				background-repeat: no-repeat;
				background-image:url(/iconos/<%=classColorAlert%>-Valid.png);
				background-position:right center;
				text-align: center;
				vertical-align:middle;
				border: 2px groove #00C000;
				text-align: -moz-center; /*firefox*/
				text-align:center; /*IE*/
				padding:0px 0px 0px 0px;
				opacity:.50; 
				filter: progid:DXImageTransform.Microsoft.alpha( opacity=50); 
			}
			<%
			blockAlert = blockAlert + 1;
			classColorAlertSeverity = classColorAlertSeverity+"Block";
		}
		%>
		
	</m4:loop>

</m4:loop>


/*-------------------------------Timeslots Styles----------------------------*/
.showtimehead{
	width:100%;
	height:26px;
	background-color:#d3e1ec;
	color:black;
	overflow: hidden;
	vertical-align:left;
    text-align:left; 
	position:relative;
	padding:0px 0px 0px 0px;
}
.showtimecell{
	width:100%;
	height:22px;
	background-color:white;
	color:black;
	overflow: hidden;
	vertical-align:left;
    text-align:left; 
	position:relative;
	padding:0px 0px 0px 0px;
}
*+html .hourHeader {
  background-color: #0c4f8a;
  color:white;
  height: 12px;
  position: absolute;
  top:0px;
  width: 40px;
  filter:progid:DXImageTransform.Microsoft.Shadow(color='#0c4f8a', Direction=145, Strength=4);
  zoom: 1;
}
 .hourHeader {
  background-color: #0c4f8a;
  color:white;
  height: 12px;
  position: absolute;
  top:0px;
  width: 40px;
  border-radius: 2px;
  box-shadow: 3px 3px 3px black;
}
.grid {
  background-repeat: no-repeat;
  background-image:url(/iconos/gtaGrid.png);
  background-position:left;
  vertical-align:middle;
  text-align: -moz-center; /*firefox*/
  text-align:center; /*IE*/
  height: 26px;
  position: absolute;
  top:0;
  width:1px;
}
.CLOCKING_IN {
  color:white;
  background-repeat: repeat;
  background-image:url(/iconos/gtaClockIn.png);
  background-position:middle;
  height: 16px;
  position: absolute;
  top:-5px;
  width: 16px;
  cursor:help;
}
.CLOCKING_OUT {
  color:white;
  background-repeat: repeat;
  background-image:url(/iconos/gtaClockOut.png);
  background-position:middle;
  height: 16px;
  position: absolute;
  top:10px;
  width: 16px;
  cursor:help;
}
.REFERENCE {
  background-color: red;
  color:white;
  background-repeat: repeat;
  background-image:url(/iconos/gtaReference.png);
  background-position:middle;
  height: 4px;
  position: absolute;
  top:2px;
  width: 4px;
  cursor:help;
}

<m4:loop from="0" to="<%=new Integer(new Integer(zcountv12).intValue()-1).toString()%>">
<%
	try {
		M4Operations t = new M4Operations(request);
		classColor = t.getItem(znodo12,zmeta4object,znodo12,m4lix,"SCO_TIMESLOT_TYPE_COLOR");
		className = t.getItem(znodo12,zmeta4object,znodo12,m4lix,"SCO_ID_TIMESLOT_TYPE");
	} catch(Exception e) {}
%>
	*+html .<%=className%> {
	  background-color: <%=classColor%>;
	  color:white;
	  height: 4px;
	  position: absolute;
	  top:8px;/*8*/
	  width: 4px;
	  filter:progid:DXImageTransform.Microsoft.Shadow(color='<%=classColor%>', Direction=145, Strength=4);
	  zoom: 1;
	  cursor:help;
	}
	.<%=className%> {
	  background-color: <%=classColor%>;
	  color:white;
	  height: 6px;
	  position: absolute;
	  top:8px;
	  width: 4px;
	  border-radius: 5px;
	  box-shadow: 3px 3px 3px black;
	  cursor:help;
	}
</m4:loop>
/*-------------------------------Timeslots Styles----------------------------*/
</style>

<m4:endpage/>