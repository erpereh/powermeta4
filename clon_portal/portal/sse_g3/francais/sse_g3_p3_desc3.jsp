<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
	<head>
	<title>	Description du stage	</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>	
	<%@ include file="/sse_g3/sse_g3_trans.jsp"%> 
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%      


	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zidtrtb = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb");
	String zSCO_DESCRIPTION = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdescription");

	if ((estado==null)||(estado.equals(""))){
		estado = "0";}%>
</head>
<body>
   <%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
   <%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSM_ENROLLMENT_OVERVIEW";
   String zMeta4Object = "SSM_ENROLLMENT_OVERVIEW";

   String znodo1 = "M4T_DC";
   String ztipocarga = "M4T";
   int zregistroinicial = 0;
   
   int zventana  = 0;
   int zregistrofinal = zregistroinicial + zventana - 1;
 		
   String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
   String zraiz1 =  znodo1 + ":" + zsubsesion  + "!"+ znodo1+"." ;
   String zmove1 =znodo1 + ":" + znodo1 + "[FIRST]";
    
   
   String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";		
   
   String zSCO_NM_DEV_SUBPRODUCT = zraiz1 + "SCO_NM_DEV_SUBPRODUCT";
   String zSCO_ID_DEV_PRO_TYPE = zraiz1 + "SCO_ID_DEV_PRO_TYPE";
   String zSCO_NM_DEV_PRO_TYPE = zraiz1 + "SCO_NM_DEV_PRO_TYPE";
   String zSCO_NM_DEV_PRODUCT = zraiz1 + "SCO_NM_DEV_PRODUCT";
   String zSCO_NM_PRODUCT_TYPE = zraiz1 + "SCO_NM_PRODUCT_TYPE";
   String zSCO_EDUCAT_OBJ = zraiz1 + "SCO_EDUCAT_OBJ";
   String zSCO_HTTP_PATH = zraiz1 + "SCO_HTTP_PATH";

   String  zSCO_HOURS_OTW= zraiz1 + "SCO_HOURS_OTW";
   String  zSCO_HOURS= zraiz1 + "SCO_HOURS";
   String zSCO_DAYS = zraiz1 + "SCO_DAYS";   
   String zSCO_NB_MIN = zraiz1 + "SCO_NB_MIN";
   String zSCO_NB_MAX = zraiz1 + "SCO_NB_MAX";
   String zSCO_NUMBER_OF_UNITS= zraiz1 + "SCO_NUMBER_OF_UNITS";
   String zSCO_NM_TRAINING_LOCATION_TYPE = zraiz1 +  "SCO_NM_TRAINING_LOCATION_TYPE";
   
   
   String zSCO_AUTHOR = zraiz1 + "SCO_AUTHOR";
   String zSCO_CD_DATE = zraiz1 + "SCO_CD_DATE";


   
   
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
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
	<table border="0" width="100%" cellspacing = "0">
	<tr><td class="titulofuncional" colspan="2">Description du stage</tr>
	<tr>
	<td><img src="/iconos/noname_incripciones_formacion_99_100.gif" width="99"  height="100" alt="Inscriptions en formation" border="0"></td>
	<td>
	<div class="descripcionfuncional">Libell&eacute; du stage&nbsp;:&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT%>" htmlsafe="true"/>&nbsp;(&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_PRO_TYPE%>" htmlsafe="true"/>&nbsp;)&nbsp;</div>
	<ul class="listaenlace"><li><a class="enlacefuncional" title = "Inscriptions en formation" href="sse_g3_p7.jsp?estado=31">Inscriptions en formation</a></li></ul>
	</td>
	</tr>
	</table>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr class = "tablaestadosceldatitulo"><td colspan="4">Description du stage</td></tr>
        <tr>
	<td class = "fuentecampo" >Cat&eacute;gorie&nbsp;:</td>
	<td class = "fuentevalor" colspan="3" >&nbsp;<m4:item m4name="<%=zSCO_NM_PRODUCT_TYPE%>" htmlsafe="true"/></td>
	</tr>
	<tr>
	<td class = "fuentecampo" >Produit&nbsp;:</td>
	<td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_PRODUCT%>" htmlsafe="true"/></td>
	<td class = "fuentecampo" >Lieu&nbsp;:</td>
	<td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_TRAINING_LOCATION_TYPE%>" htmlsafe="true"/></td>
	</tr>
	<%if (zSCO_DESCRIPTION.equals("")== false && zSCO_DESCRIPTION.equals(null) == false){%>
	<tr>
		<td class = "fuentecampo" ><%= sse_g3Ess.getProperty("Label.sse_g3_p3_mod1_Desc")%>:</td>
		<td class = "fuentevalor"colspan="3" > &nbsp;<%=zSCO_DESCRIPTION%></td>
	</tr>
<%	}%>
	<m4:item m4varname="zIdTypeC" m4name="<%=zSCO_ID_DEV_PRO_TYPE%>"/>
				<m4:item m4varname="zcoDays" m4name="<%=zSCO_DAYS%>"/>
	<%if (!zcoDays.equals("1")){%>
	<tr>
		<td class = "fuentecampo" >Dur&eacute;e (jours)&nbsp;:		</td>
		<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_DAYS%>" htmlsafe="true"/></td>
	</tr>
	<%}%>

	<tr>	
	<td class = "fuentecampo" >Nb. d'heures TT&nbsp;:</td>
	<td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_HOURS%>" htmlsafe="true"/></td>
	<td class = "fuentecampo" >Nb. d'heures HTT&nbsp;: </td>
	<td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_HOURS_OTW%>" htmlsafe="true"/></td>
	</tr>
	<tr>	
	<td class = "fuentecampo" >Nb. min. de stagiaires&nbsp;: </td>
	<td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NB_MIN%>" htmlsafe="true"/></td>
	<td class = "fuentecampo" >Nb. max. de stagiaires&nbsp;: 	</td>
	<td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NB_MAX%>" htmlsafe="true"/></td>
	</tr>
	</table>
	<%if (zIdTypeC.equals("02")){%>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr>
	<td class = "fuentecampo" width="7%">Auteur&nbsp;:</td>
	<td class = "fuentevalor" width="17%">&nbsp;<m4:item m4name="<%=zSCO_AUTHOR%>" htmlsafe="true"/></td>
	<td class = "fuentecampo" width="25%" >Date de parution&nbsp;: </td>
	<td class = "fuentevalor" width="15%>&nbsp;<m4:item m4name="<%=zSCO_CD_DATE%>" htmlsafe="true"/></td>
	 	
	<td class = "fuentecampo" width="30%">Nb. d'unit&eacute;s disponibles&nbsp;:</td>
	<td class = "fuentevalor" width="15%">&nbsp;<m4:item m4name="<%=zSCO_NUMBER_OF_UNITS%>" htmlsafe="true"/></td>
	</tr>
	</table> 
	<%}%>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr>
	<td class = "fuentecampo" >Objectif p&eacute;dagogique&nbsp;:</td>
	<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_EDUCAT_OBJ%>" htmlsafe="true"/></td>
	</tr>
	<tr>
	<td class = "fuentecampo" >Page Web&nbsp;: </td>
	<td class = "fuentevalor" colspan="3">&nbsp;<a href ="<m4:item m4name="<%=zSCO_HTTP_PATH%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCO_HTTP_PATH%>" htmlsafe="true"/></a></td>
	</tr>
	</table>
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div><m4:endpage/></body></html>
