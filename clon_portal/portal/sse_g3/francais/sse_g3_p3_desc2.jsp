<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
	<head>
	<title>	Description d'un stage programm&eacute;	</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>	
<%@ include file="/sse_g3/sse_train_trans.jsp"%>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%      


	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zidtrtb = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb");

	if ((estado==null)||(estado.equals(""))){
		estado = "0";}%>
</head>
<body>
   <%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
   <%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSM_ENROLLMENT_OVERVIEW";
   String zMeta4Object = "SSM_ENROLLMENT_OVERVIEW";

   String znodo1 = "M4T_DS";
   String znodo2 = "M4T_CAL_DS";
   String ztipocarga = "M4S";
   int zregistroinicial = 0;
   
   int zventana  = 0;
   int zregistrofinal = zregistroinicial + zventana - 1;
 		
   String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
   String zraiz1 =  znodo1 + ":" + zsubsesion  + "!"+ znodo1+"." ;
   String zmove1 =znodo1 + ":" +  znodo1 + "[FIRST]";
    
   String zoutputdef2= zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + "[FIRST]";
   String zlectura2 = zsubsesion + "!" + znodo2;
   String zraiz2 = zsubsesion + "!" + znodo2 + ".";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";

   String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";		
   
   String zSCO_NM_DEV_SUBPRODUCT = zraiz1 + "SCO_NM_DEV_SUBPRODUCT";
   String zSCO_NM_DEV_SUBACTION = zraiz1 + "SCO_NM_DEV_SUBACTION";
   
   
   
   String zSCO_ID_DEV_PRO_TYPE = zraiz1 + "SCO_ID_DEV_PRO_TYPE";
   String zSCO_NM_DEV_PRO_TYPE = zraiz1 + "SCO_NM_DEV_ACT_TYPE";
   String zSCO_NM_DEV_PRODUCT = zraiz1 + "SCO_NM_DEV_PRODUCT";
   String zSCO_NM_PRODUCT_TYPE = zraiz1 + "SCO_NM_PRODUCT_TYPE";
   String zSCO_EDUCAT_OBJ = zraiz1 + "SCO_EDUCAT_OBJ";
   String zSCO_HTTP_PATH = zraiz1 + "SCO_HTTP_PATH";

   String  zSCO_HOURS_OTW= zraiz1 + "SCO_HOURS_OTW";
   String  zSCO_HOURS= zraiz1 + "SCO_HOURS";
   String zSCO_DAYS = zraiz1 + "SCO_DAYS";   
   String zSCO_NM_TRAINING_LOCATION_TYPE = zraiz1 +  "SCO_NM_TRAINING_LOCATION_TYPE";
	 String zSCO_NM_SUBACTION_STATUS = zraiz1 + "SCO_NM_SUBACTION_STATUS";
   
   String zSCO_DATE = zcomun2 + "SCO_DATE";

    String zSCO_HOUR_START = zcomun2 + "SCO_HOUR_START";  
      String zSCO_HOUR_END = zcomun2 + "SCO_HOUR_END";
    String zSCO_HOUR_START_PAUSE = zcomun2 + "SCO_HOUR_START_PAUSE";   
     String zSCO_HOUR_END_PAUSE = zcomun2 + "SCO_HOUR_END_PAUSE"; 
        String zSCO_REAL_HOURS = zcomun2 + "SCO_REAL_HOURS"; 
            String zSCO_NM_TRAIN_LOCATION = zcomun2 + "SCO_NM_TRAIN_LOCATION"; 
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%= zMeta4Object %>" m4name="<%=zsubsesion%>"/>
<% try {
	M4Operations m = new M4Operations(request);
	m.setItem(zsubsesion,znodo1,"","IDTRTB",zidtrtb);
	} catch(Exception e) {} %>
<m4:exec m4method="<%=zMETODOCARGA%>">
<m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<%
	int  zcount2  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
	    
	} catch(Exception e) {}

	String	zcount2v = String.valueOf(zcount2);
	
%>
	<table border="0" width="100%" cellspacing = "0">
	<tr><td class="titulofuncional" colspan="2">Description du stage</tr>
	<tr>
	<td><img src="/iconos/noname_incripciones_formacion_99_100.gif" width="99"  height="100" alt="Inscriptions en formation" border="0"></td>
	<td>
	<div class="descripcionfuncional">Libell&eacute; du stage&nbsp;:&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT%>" htmlsafe="true"/>&nbsp;(&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_PRO_TYPE%>" htmlsafe="true"/>&nbsp;)&nbsp;</div>
	<ul class="listaenlace"><li><a class="enlacefuncional" title = "Inscriptions &agrave; la formation" href="sse_g3_p7.jsp?estado=31">Inscriptions &agrave; la formation</a></li></ul>
	</td>
	</tr>
	</table>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr class = "tablaestadosceldatitulo"><td colspan="4" >Description du stage</td></tr>
	<tr>
	<td class = "fuentecampo" >Session&nbsp;:</td>
	<td class = "fuentevalor" colspan="3" >&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_SUBACTION%>" htmlsafe="true"/></td>
	</tr>
	<tr>	
	<td class = "fuentecampo" >Lieu&nbsp;:</td>
	<td class = "fuentevalor" colspan="3" >&nbsp;<m4:item m4name="<%=zSCO_NM_TRAINING_LOCATION_TYPE%>" htmlsafe="true"/></td>
	</tr>
	<tr>
	<td class = "fuentecampo" >Dur&eacute;e (jours)&nbsp;:	</td>
	<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_DAYS%>" htmlsafe="true"/></td>
	</tr>
	<tr>	
	<td class = "fuentecampo" >Nb. d'heures TT&nbsp;:</td>
	<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_HOURS%>" htmlsafe="true"/></td>
	</tr>
	<tr>	
	<td class = "fuentecampo" >	Nb. d'heures HTT&nbsp;: </td>
	<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_HOURS_OTW%>" htmlsafe="true"/></td>
	</tr>
	<tr>
	<td class = "fuentecampo" ><%=TrainEss.getProperty("Label.State")%>: </td>
	<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_NM_SUBACTION_STATUS%>" htmlsafe="true"/></td>
	</tr>
	</table>


<%if (zcount2 > 0) {%>
<br/>
<div class="descripcionfuncional">&nbsp;Calendrier</div>
<table class="TablaEstados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Jour</td>
	<td class="tablaestadosceldatitulo">&nbsp;Heure de d&eacute;but </td>
	<td class="tablaestadosceldatitulo">&nbsp;Heure de fin </td>
	<td class="tablaestadosceldatitulo">&nbsp;Heure de d&eacute;but de la pause</td>
	<td class="tablaestadosceldatitulo">&nbsp;Heure de fin de la pause</td>
	<td class="tablaestadosceldatitulo">&nbsp;Nb. d'heures</td>
	<td class="tablaestadosceldatitulo">&nbsp;Lieu</td>
</tr>
<%String zpos="";
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcount2v).intValue()-1).toString()%>">
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

	
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div><m4:endpage/></body></html>
