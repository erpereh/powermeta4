<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
	<head>
	<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>
	<%@ include file="../../sse_g3/sse_train_trans.jsp"%>		
	<title><%=TrainEss.getProperty("Label.descDevSubproduct")%></title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<%
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zidSubProduct = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidSubProduct");
	String zidCost = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidCost");

	if ((estado==null)||(estado.equals(""))){
		estado = "0";}%>
</head>
<body>
<%
   String zsubsesion = "SGCO_TRAINING_DESC";
   String zMeta4Object = "SGCO_TRAINING_DESC";  

   String znodo = "SGCO_TRA_SUBPRODUCT_DESC";

   int zregistroinicial = 0;
   
   int zventana  = 0;
   int zregistrofinal = zregistroinicial + zventana - 1;

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zraiz = znodo + ":" + zsubsesion  + "!"+ znodo+"." ;
   String zmove = znodo + ":" + znodo + "[FIRST]";
   
	 String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;
   
   String zMETODOCARGA = "CARGA:" + zsubsesion + "!SGCO_TRA_SUBPRODUCT_DESC.SCO_LOAD";		
   
   String zSCO_NM_DEV_SUBPRODUCT = zraiz + "SCO_NM_DEV_SUBPRODUCT";
   String zSCO_ID_DEV_PRO_TYPE = zraiz + "SCO_ID_DEV_PRO_TYPE";
   String zSCO_NM_DEV_PRO_TYPE = zraiz + "SCO_NM_DEV_PRO_TYPE";
   String zSCO_NM_DEV_PRODUCT = zraiz + "SCO_NM_DEV_PRODUCT";
   String zSCO_NM_PRODUCT_TYPE = zraiz + "SCO_NM_PRODUCT_TYPE";
   String zSCO_EDUCAT_OBJ = zraiz + "SCO_EDUCAT_OBJ";
   String zSCO_HTTP_PATH = zraiz + "SCO_HTTP_PATH";

   String zSCO_HOURS_OTW = zraiz + "SCO_HOURS_OTW";
   String zSCO_HOURS = zraiz + "SCO_HOURS";
   String zSCO_DAYS = zraiz + "SCO_DAYS";   
   String zSCO_NB_MIN = zraiz + "SCO_NB_MIN";
   String zSCO_NB_MAX = zraiz + "SCO_NB_MAX";
   String zSCO_NUMBER_OF_UNITS = zraiz + "SCO_NUMBER_OF_UNITS";
   String zSCO_NM_TRAINING_LOCATION_TYPE = zraiz +  "SCO_NM_TRAINING_LOCATION_TYPE";
   
   
   String zSCO_AUTHOR = zraiz + "SCO_AUTHOR";
   String zSCO_CD_DATE = zraiz + "SCO_CD_DATE";   
   
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%= zMeta4Object %>" m4name="<%=zsubsesion%>"/>
	
<m4:exec m4method="<%=zMETODOCARGA%>">
<m4:param name="ARG_ID_DEV_TRA" value="<%=zidSubProduct%>"/>
<m4:param name="ARG_ID_COST" value="<%=zidCost%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
	
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
	int  zcount  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    
	} catch(Exception e) {}

%>
	<table border="0" width="100%" cellspacing = "0">
	<tr><td class="titulofuncional" colspan="2"><m4:label m4name="<%=znamenodo%>" htmlsafe="true"/></td></tr>
	<tr>
	<td><img src="/iconos/noname_incripciones_formacion_99_100.gif" width="99" alt='<m4:label m4name="<%=znamenodo%>" htmlsafe="true"/>' height="100" border="0"></td>
	<td>
<% if (zcount > 0) { %>
	<div class="descripcionfuncional"><m4:label item="SCO_NM_DEV_SUBPRODUCT" htmlsafe="true" outputdef="<%=znodo%>"/>:&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT%>" htmlsafe="true"/>&nbsp;(&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_PRO_TYPE%>" htmlsafe="true"/>&nbsp;)&nbsp;</div>
<%} else {%>
	<div class="fuentenodatos"><%=TrainEss.getProperty("Label.NoDataDevSubproduct")%></div>
<% } %>
	</td>
	</tr>
	</table>
<% if (zcount > 0) { %>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr class = "tablaestadosceldatitulo"><td colspan="4"><m4:label m4name="<%=znamenodo%>" htmlsafe="true"/></td></tr>
	<tr>
	<td class = "fuentecampo"><m4:label item="SCO_NM_PRODUCT_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor"colspan="3"> &nbsp;<m4:item m4name="<%=zSCO_NM_PRODUCT_TYPE%>" htmlsafe="true"/></td></tr>
	<tr>
	<td class = "fuentecampo"><m4:label item="SCO_NM_DEV_PRODUCT" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_PRODUCT%>" htmlsafe="true"/></td>
	<td class = "fuentecampo"><m4:label item="SCO_NM_TRAINING_LOCATION_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_NM_TRAINING_LOCATION_TYPE%>" htmlsafe="true"/></td>
	</tr>

	<m4:item m4varname="zIdTypeC" m4name="<%=zSCO_ID_DEV_PRO_TYPE%>"/>
			<m4:item m4varname="zcoDays" m4name="<%=zSCO_DAYS%>"/>
	<%if (!zcoDays.equals("1")){%>
	<tr>
		<td class = "fuentecampo"><m4:label item="SCO_DAYS" htmlsafe="true" outputdef="<%=znodo%>"/>:	</td>
		<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_DAYS%>" htmlsafe="true"/></td>
	</tr>
	<%}%>

	<tr>
	<td class = "fuentecampo"><m4:label item="SCO_HOURS" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_HOURS%>" htmlsafe="true"/></td>
	<td class = "fuentecampo"><m4:label item="SCO_HOURS_OTW" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_HOURS_OTW%>" htmlsafe="true"/></td>
	</tr>
	<tr>	
	<td class = "fuentecampo"><m4:label item="SCO_NB_MIN" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_NB_MIN%>" htmlsafe="true"/></td>
	<td class = "fuentecampo"><m4:label item="SCO_NB_MAX" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_NB_MAX%>" htmlsafe="true"/></td>
	</tr>
	</table>
	<%if (zIdTypeC.equals("02")){%>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr>
	<td class = "fuentecampo" width="7%"><m4:label item="SCO_AUTHOR" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor"width="17%">&nbsp;<m4:item m4name="<%=zSCO_AUTHOR%>" htmlsafe="true"/></td>
	<td class = "fuentecampo" width="25%"><m4:label item="SCO_CD_DATE" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor"width="15%">&nbsp;<m4:item m4name="<%=zSCO_CD_DATE%>" htmlsafe="true"/></td>
	<td class = "fuentecampo"width="30%"><m4:label item="SCO_NUMBER_OF_UNITS" htmlsafe="true" outputdef="<%=znodo%>"/>:</td>
	<td class = "fuentevalor"width="15%">&nbsp;<m4:item m4name="<%=zSCO_NUMBER_OF_UNITS%>" htmlsafe="true"/></td>
	</tr>
	</table>

	<%}%>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr><td class = "fuentecampo" width="25%"><m4:label item="SCO_EDUCAT_OBJ" htmlsafe="true" outputdef="<%=znodo%>"/>:</td><td class = "fuentevalor" width="75%">&nbsp;<m4:item m4name="<%=zSCO_EDUCAT_OBJ%>" htmlsafe="true"/></td></tr>
	<tr><td class = "fuentecampo" width="25%"><m4:label item="SCO_HTTP_PATH" htmlsafe="true" outputdef="<%=znodo%>"/>:</td><td class = "fuentevalor" width="75%"> &nbsp;<a href ="<m4:item m4name="<%=zSCO_HTTP_PATH%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCO_HTTP_PATH%>" htmlsafe="true"/></a></td></tr>
	</table>
<% } %>
</div><m4:endpage/></body></html>
