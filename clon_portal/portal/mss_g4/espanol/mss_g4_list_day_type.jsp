<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
     "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>

<link href="/css/Autocompleter.css" type="text/css" rel="stylesheet" />
<script src="/libreria/mootools-1.2.js" type="text/javascript"></script>
<script src="/javascripts/Autocompleter.js" type="text/javascript"></script>
<script src="/javascripts/Autocompleter.Request.js" type="text/javascript"></script>
<script src="/javascripts/Autocompleter.Local.js" type="text/javascript"></script>
<script src="/javascripts/Observer.js" type="text/javascript"></script>

<head>

<META http-equiv="Cache-Control" content="no-cache">
<META http-equiv="Pragma" content="no-cache">
<META http-equiv="Cache" content="no store">
<META http-equiv="Expires" content="0">

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%@ page import="com.meta4.configuration.*" %>

<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	

<title>test</title>
</head>
<body>

<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String argIdEnterType = zobjtabla.m4paramvalor("ARG_ID_ENTER_TYPE");
String criteria = zobjtabla.m4paramvalor("search");


//Global Parameters
if ((argIdEnterType==null)||(argIdEnterType.equals(""))){argIdEnterType="";}
if ((criteria==null)||(criteria.equals(""))){criteria="";}
%>
<%
String zsubsesion = "SSE_GTA_PLAN";
String zmeta4object = "SSE_GTA_PLAN";  
String znodo = "SSE_X_DAY_TYPE";
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" +znodo + "[FIRST]";
String zlectura = znodo + ":" +zsubsesion + "!" + znodo;
String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";

String loadMethod    = "LoadFilter:"     + zsubsesion + "!SSE_X_DAY_TYPE.SSE_X_LOAD_DAYTYPE_FILTER";


String idDayType = zcomun + "SCO_ID_DAY_TYPE";
String nmDayType = zcomun + "SCO_NM_DAY_TYPE";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
//...
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=loadMethod%>">
	<m4:param name="ARG_ID_ENTER_TYPE" value="<%=argIdEnterType%>"/>
	<m4:param name="ARG_CRITERIA" value="<%=criteria%>"/>
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

<script type="text/javascript" language="Javascript1.5">

</script>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
	<li><m4:item m4name="<%=idDayType%>" htmlsafe="true"/>/ <m4:item m4name="<%=nmDayType%>" htmlsafe="true"/></li>						
</m4:loop>

</body>
<m4:endpage/>
</html>

	
	
	
	
	
	
	