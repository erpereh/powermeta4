<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
	<head>
	<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  <%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
	<%@ include file="../../sse_g3/sse_train_trans.jsp"%>		
	<title><%=TrainEss.getProperty("Label.descDevSubaction")%></title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<%      


	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zidSubAction = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidSubAction");
	String zidCost = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidCost");

	if ((estado==null)||(estado.equals(""))){
		estado = "0";}%>
</head>
<body>
<%
   String zsubsesion = "SGCO_TRAINING_DESC";
   String zMeta4Object = "SGCO_TRAINING_DESC";  

   String znodo = "SGCO_TRA_SUBACTION_DESC";
   String znodo1 = "SGCO_TRA_SUBACT_CALENDAR_DESC";
   int zregistroinicial = 0;
   
   int zventana  = 0;
   int zregistrofinal = zregistroinicial + zventana - 1;
 		
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zraiz =  znodo + ":" + zsubsesion  + "!"+ znodo+"." ;
   String zmove = znodo + ":" + znodo + "[FIRST]";
	 String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;
    
   String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
   String zmove1 = znodo1 + "[FIRST]";
	 String znamenodo1  = znodo1 + ":" + zsubsesion  + "!" + znodo1;
   String zlectura1 = zsubsesion + "!" + znodo1;  
   String zraiz1 = zsubsesion + "!" + znodo1 + ".";
   String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";

   String zMETODOCARGA = "CARGA:" + zsubsesion + "!SGCO_TRA_SUBACTION_DESC.SCO_LOAD";		
   
   String zSCO_NM_DEV_SUBPRODUCT = zraiz + "SCO_NM_DEV_SUBPRODUCT";
   String zSCO_NM_DEV_SUBACTION = zraiz + "SCO_NM_DEV_SUBACTION";
   
   String zSCO_NM_DEV_ACT_TYPE = zraiz + "SCO_NM_DEV_ACT_TYPE";

   String zSCO_HOURS_OTW = zraiz + "SCO_HOURS_OTW";
   String zSCO_HOURS = zraiz + "SCO_HOURS";
   String zSCO_DAYS = zraiz + "SCO_DAYS";   
   String zSCO_NM_TRAINING_LOCATION_TYPE = zraiz +  "SCO_NM_TRAINING_LOCATION_TYPE";
	 String zSCO_NM_SUBACTION_STATUS = zraiz + "SCO_NM_SUBACTION_STATUS";
   
   String zSCO_DATE = zcomun1 + "SCO_DATE";
   String zSCO_HOUR_START = zcomun1 + "SCO_HOUR_START";  
   String zSCO_HOUR_END = zcomun1 + "SCO_HOUR_END";
   String zSCO_HOUR_START_PAUSE = zcomun1 + "SCO_HOUR_START_PAUSE";   
   String zSCO_HOUR_END_PAUSE = zcomun1 + "SCO_HOUR_END_PAUSE"; 
   String zSCO_REAL_HOURS = zcomun1 + "SCO_REAL_HOURS"; 
   String zSCO_NM_TRAIN_LOCATION = zcomun1 + "SCO_NM_TRAIN_LOCATION"; 
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%= zMeta4Object %>" m4name="<%=zsubsesion%>"/>

<m4:exec m4method="<%=zMETODOCARGA%>">
<m4:param name="ARG_ID_DEV_TRA" value="<%=zidSubAction%>"/>
<m4:param name="ARG_ID_COST" value="<%=zidCost%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
	int  zcount  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    
	} catch(Exception e) {}

	int  zcount1  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
	    
	} catch(Exception e) {}

	String	zcount1v = String.valueOf(zcount1);
	
%>
	<table border="0" width="100%" cellspacing = "0">
	<tr><td class="titulofuncional" colspan="2"><m4:label m4name="<%=znamenodo%>" htmlsafe="true"/></td></tr>
	<tr>
	<td><img src="/iconos/noname_incripciones_formacion_99_100.gif" width="99" alt='<m4:label m4name="<%=znamenodo%>" htmlsafe="true"/>' height="100" border="0"></td>
	<td>
<% if (zcount > 0) { %>
	<div class="descripcionfuncional"><m4:label item="SCO_NM_DEV_SUBPRODUCT" htmlsafe="true" outputdef="<%=znodo%>"/>:&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT%>" htmlsafe="true"/>&nbsp;(&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_ACT_TYPE%>" htmlsafe="true"/>&nbsp;)&nbsp;</div>
<%} else {%>
	<div class="fuentenodatos"><%=TrainEss.getProperty("Label.NoDataDevSubaction")%></div>
<% } %>
	</td>
	</tr>
	</table>
<% if (zcount > 0) { %>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr class = "tablaestadosceldatitulo"><td colspan="4"><m4:label m4name="<%=znamenodo%>" htmlsafe="true"/></td></tr>
	<tr>
	<td class = "fuentecampo"><m4:label item="SCO_NM_DEV_SUBACTION" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_SUBACTION%>" htmlsafe="true"/></td>
	</tr>
	<tr>
	<td class = "fuentecampo"><m4:label item="SCO_NM_TRAINING_LOCATION_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_NM_TRAINING_LOCATION_TYPE%>" htmlsafe="true"/></td>
	</tr>
	<tr>
	<td class = "fuentecampo"><m4:label item="SCO_DAYS" htmlsafe="true" outputdef="<%=znodo%>"/>:	</td>
	<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_DAYS%>" htmlsafe="true"/></td>
	</tr>
	<tr>
	<td class = "fuentecampo"><m4:label item="SCO_HOURS" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_HOURS%>" htmlsafe="true"/></td>
	</tr>
	<tr>
	<td class = "fuentecampo"><m4:label item="SCO_HOURS_OTW" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_HOURS_OTW%>" htmlsafe="true"/></td>
	</tr>
	<tr>
	<td class = "fuentecampo"><m4:label item="SCO_NM_SUBACTION_STATUS" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_NM_SUBACTION_STATUS%>" htmlsafe="true"/></td>
	</tr>
	</table>


<%if (zcount1 > 0) {%>
<br />
<div class="descripcionfuncional">&nbsp;<m4:label m4name="<%=znamenodo1%>" htmlsafe="true"/></div>
<table class="TablaEstados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label item="SCO_DATE" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label item="SCO_HOUR_START" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label item="SCO_HOUR_END" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label item="SCO_HOUR_START_PAUSE" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label item="SCO_HOUR_END_PAUSE" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label item="SCO_REAL_HOURS" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label item="SCO_NM_TRAIN_LOCATION" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
</tr>
<%String zpos="";
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcount1v).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%>
<tr>
	<td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zSCO_DATE%>" htmlsafe="true"/></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zSCO_HOUR_START%>" htmlsafe="true"/></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zSCO_HOUR_END%>" htmlsafe="true"/></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zSCO_HOUR_START_PAUSE%>" htmlsafe="true"/></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zSCO_HOUR_END_PAUSE%>" htmlsafe="true"/></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zSCO_REAL_HOURS%>" htmlsafe="true"/></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zSCO_NM_TRAIN_LOCATION%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>
<%}%>
<% } %>
	
</div><m4:endpage/></body></html>
