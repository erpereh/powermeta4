<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
	<head>
	<title>	Inscripci&oacute;n en curso	</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>	
	<script type="text/javascript">
    </script>
		
		<!-- Librerias Java. Obligatorio -->
		<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>

		<%@ include file="/sse_g3/sse_g3_trans.jsp"%>  

<script type="text/javascript">

function solicitar_evento(nombre,idtrtb){
var d=m4valor("FormularioEvento","SCO_DAYS","","get");
var h=m4valor("FormularioEvento","SCO_HOURS","","get");
var h_o=m4valor("FormularioEvento","SCO_HOURS_OTW","","get");
h=h*d;
h_o=h_o*d;
m4valor("FormularioEvento","SCO_HOURS",h,"set");
m4valor("FormularioEvento","SCO_HOURS_OTW",h_o,"set");
var bonif =m4valor("NombreFormulario","SCO_ID_TRAINING_DEV","","get");
var colec =m4valor("NombreFormulario","SCO_ID_AVERAGE_AGE","","get");
m4valor("FormularioEvento","SCO_ID_TRAINING_DEV",bonif,"set");
m4valor("FormularioEvento","SCO_ID_AVERAGE_AGE",colec,"set");
m4valor("FormularioEvento","SCO_NM_TRAINING",nombre,"set");
m4valor("FormularioEvento","SCO_ID_TRTBREQ",idtrtb,"set");
m4submit("FormularioEvento");}


function comprobar(zid){
var SCO_DESCRIPTION = m4valor("NombreFormulario","SCO_DESCRIPTION","","get");
var zDescriptionName = document.getElementById("SCO_DESCRIPTION").title;

if ((SCO_DESCRIPTION == null || SCO_DESCRIPTION == "" ) && zid == "99") {
	var sMessage = new String;
	sMessage = sMessage + "\n" + m4getmessage("_sl_co_ess_oc_4"); 
	alert(sMessage);
	return;
}
else
	{ // controlamos que la longitud no exceda de 1000 caracteres
	if ( SCO_DESCRIPTION.length  > 1000) 
		{
			var sMessage = new String;
			sMessage = sMessage + "\n" + m4getmessage("_comentario",zDescriptionName);
			alert(sMessage);
			return;
		}
	}
 m4valor("NombreFormulario","SCO_DESCRIPTION",SCO_DESCRIPTION,"set");


if ((m4valor("NombreFormulario","SCO_ED_PREF","","get")== "") && (m4valor("NombreFormulario","SCO_SD_PREF","","get")== ""))
	{	Days();m4submit("NombreFormulario");
		return;}
if ((m4valor("NombreFormulario","SCO_ED_PREF","","get")== "") && (m4fechacomprobacion(m4objeto('SCO_SD_PREF','NombreFormulario'),"")))
{	Days();m4submit("NombreFormulario");
		return;}
if (m4fechacomprobacion((m4objeto('SCO_SD_PREF','NombreFormulario')),"")&& 	(m4fechacomprobacion((m4objeto('SCO_SD_PREF','NombreFormulario')),""))&& (m4compfechas(m4objeto('SCO_SD_PREF','NombreFormulario'),'<=',m4objeto('SCO_ED_PREF','NombreFormulario'))))
{	Days();m4submit("NombreFormulario");
		return;}
alert ("No se ha realizado la solicitud.Compruebe que la fecha de fin es posterior a la de inicio y que los formatos son correctos.");
}
function Days(){
var d=m4valor("NombreFormulario","SCO_DAYS","","get");
var h=m4valor("NombreFormulario","SCO_HOURS","","get");
var h_o=m4valor("NombreFormulario","SCO_HOURS_OTW","","get");
h=h*d;
h_o=h_o*d;
m4valor("NombreFormulario","SCO_HOURS",h,"set");
m4valor("NombreFormulario","SCO_HOURS_OTW",h_o,"set");
}
</script>
<%      

	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado"); 
	String znombre = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znombre"); 
	String zntipo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zntipo"); 
	String zncu = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zncu");
	String zid = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
	String zidtrtb = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb");
	String zinfosubprod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinfosubp");
	
	if ((estado==null)||(estado.equals(""))){estado = "0";}
	if ((zinfosubprod==null)||(zinfosubprod.equals(""))){zinfosubprod = "0";}
%>
</head>
<body>
   <%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
   <%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
	String zsubsesion = "SSE_TRAINING_REQUEST";
	String zMeta4Object = "SSE_TRAINING_REQUEST";  
	String znodo1 = "M4T_DESC_CURSO";
	String znodo3 = "M4T_LENGUAJES";
	String znodo4 = "M4T_TRAINING_DEV";
	String znodo5 = "M4T_AVERAGE_AGE";
	String znodo6 = "M4T_EVENTOS";
	String znodo7 = "M4T_EVENTOS_DESC";
	String znodo8 = "M4T_CATG_EVENTOS";
	String znodo9 = "M4T_NATURE_EVENTOS";
	String ztipocarga = "DC";
	String zventanas = "20";
    int zregistroinicial = 0;
    //zregistroinicial = zregistroinicial - 1;
	int zventana  = 0;
	int zregistrofinal = zregistroinicial + zventana - 1;
	String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
   String zmove1 = znodo1 + ":" + znodo1 + "[" + zregistroinicial + "]";
   String zlectura1 = zsubsesion + "!" + znodo1;
   String zraiz1 = zsubsesion + "!" + znodo1 + ".";
   String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;
   
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
   String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
   String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
   String zmove5 = znodo5 + ":" + znodo5 + "[FIRST]";
   String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";
   
   
   String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
   String zmove6 = znodo6 + ":" + znodo6 + "[" + zregistroinicial + "]";
   String zlectura6 = zsubsesion + "!" + znodo6;
   String zraiz6 = zsubsesion + "!" + znodo6 + ".";
   String ziterator6 = znodo6 + ":" + zsubsesion + "!" + znodo6;
   String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";
   String zmove7 = znodo7 + ":" + znodo7 + "[FIRST]";
   String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef8 = zsubsesion + "!" + znodo8 + "[*]";
   String zmove8 = znodo8 + ":" + znodo8 + "[FIRST]";
   String zcomun8 = znodo8 + ":" + zsubsesion + "!" + znodo8 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef9 = zsubsesion + "!" + znodo9 + "[*]";
   String zmove9 = znodo9 + ":" + znodo9 + "[FIRST]";
   String zcomun9 = znodo9 + ":" + zsubsesion + "!" + znodo9 + "[&VAR.m4lix]" + ".";
   
   
	String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";	
		
	String zDAYS = zraiz1 + "SCO_DAYS";
	String zHOURS = zraiz1 + "SCO_HOURS";
	String zHOURSOTW = zraiz1 + "SCO_HOURS_OTW";
	String zNBMAX = zraiz1 + "SCO_NB_MAX";
	String zNBMIN = zraiz1 + "SCO_NB_MIN";
	String zSCO_NUMBER_OF_UNITS = zraiz1 + "SCO_NUMBER_OF_UNITS";

	String zSCO_CD_DATE = zraiz1 + "SCO_CD_DATE";
	String zSCO_AUTHOR = zraiz1 + "SCO_AUTHOR";

	String zSCO_NM_PRODUCT_TYPE = zraiz1 + "SCO_NM_PRODUCT_TYPE";
	String zSCO_NM_DEV_PRODUCT = zraiz1 + "SCO_NM_DEV_PRODUCT";
	String zSCO_NM_DEV_SUBPRODUCT = zraiz1 + "SCO_NM_DEV_SUBPRODUCT";
	String zSCO_NM_DEV_PRO_TYPE = zraiz1 + "SCO_NM_DEV_PRO_TYPE";
	String zSCO_ID_DEV_PRO_TYPE = zraiz1 + "SCO_ID_DEV_PRO_TYPE";
	
	String zSCO_ID_TRAINING_LOCATION_TYPE = zraiz1 + "SCO_ID_TRAINING_LOCATION_TYPE";
	String zSCO_NM_TRAINING_LOCATION_TYPE = zraiz1 + "SCO_NM_TRAINING_LOCATION_TYPE";
	String zSFR_CK_DEDUCTIBLE = zraiz1 + "SFR_CK_DEDUCTIBLE";
	String zSCO_ID_TRAINING_NAT = zraiz1 + "SCO_ID_TRAINING_NAT";
	String zSCO_ID_TRAINING_CATG = zraiz1 + "SCO_ID_TRAINING_CATG";
	String zSCO_ID_DEV_PRODUCT = zraiz1 + "SCO_ID_DEV_PRODUCT";

	String zSCO_EDUCAT_OBJ = zraiz1 + "SCO_EDUCAT_OBJ";
	String zSCO_HTTP_PATH = zraiz1 + "SCO_HTTP_PATH";
	
	String zSTDNMLENGUAGE = zcomun3 + "STD_N_LANGUAGE";
	String zSTDIDLENGUAGE = zcomun3 + "STD_ID_LANGUAGE";
	
	String zSCO_ID_TRAINING_DEV = zcomun4 + "SCO_ID_TRAINING_DEV";
	String zSCO_NM_TRAINING_DEV = zcomun4 + "SCO_NM_TRAINING_DEV";
	
	String zSCO_NM_AVERAGE_AGE = zcomun5 + "SCO_NM_AVERAGE_AGE";
	String zSCO_ID_AVERAGE_AGE = zcomun5 + "SCO_ID_AVERAGE_AGE";
	
	String zSCO_NM_DEV_SUBACTION = zcomun6 + "SCO_NM_DEV_SUBACTION";
	String zIDTRTBEVENTO = zcomun6 + "SCO_ID_TRTBREQ";
	String zDATE = zcomun6 + "SCO_DATE";
	String zDATE1 = zcomun6 + "SCO_DATE_1";
	
	
	String zDAYS7 = zcomun6 + "SCO_DAYS";
	String zHOURS7 = zcomun6 + "SCO_HOURS";
	String zHOURSOTW7 = zcomun6 + "SCO_HOURS_OTW";
	
	String zSFR_CK_DEDUCTIBLE7 = zcomun6 + "SFR_CK_DEDUCTIBLE";
	String zSCO_ID_TRAINING_LOCATION_TYPE7 = zcomun6 + "SCO_ID_TRAINING_LOCATION_TYPE";
	
	String zSCO_ID_TRAINING_CATG8 = zcomun6 + "SCO_ID_TRAINING_CATG";
	String zSCO_ID_TRAINING_NAT9 = zcomun6 + "SCO_ID_TRAINING_NAT";
	
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%= zMeta4Object %>" m4name="<%=zsubsesion%>"/>
<% 	try {
	M4Operations m = new M4Operations(request);
	m.setItem(zsubsesion,znodo1,"","SSE_ID",zid);
		    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
	}catch(Exception e){}
%>
<m4:exec m4method="<%=zMETODOCARGA%>">
<m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo7%>"><m4:param name="m4name0" value="<%=zoutputdef7%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo8%>"><m4:param name="m4name0" value="<%=zoutputdef8%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo9%>"><m4:param name="m4name0" value="<%=zoutputdef9%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<%
	int  zcount3  = 0;
	int  zcount4  = 0;
	int  zcount5  = 0;
	int  zcount3i  = 0;	
	int  zcount7  = 0;	
	int  zcounteventos_aux  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
	    zcount3i = m.getCountInClient(znodo3,zsubsesion,znodo3);
	    zcount4 = m.getCount(znodo4,zsubsesion,znodo4);
	    zcount5 = m.getCount(znodo5,zsubsesion,znodo5);
	    zcounteventos_aux = m.getCountInClient(znodo6,zsubsesion,znodo6);
	    zcount7 = m.getCount(znodo7,zsubsesion,znodo7);
	} catch(Exception e) {}
	String	zcount3v = String.valueOf(zcount3i);
	String	zcount4v = String.valueOf(zcount4);
	String	zcount5v = String.valueOf(zcount5);
	String	zcounteventos = String.valueOf(zcounteventos_aux);
	String	zcount7v = String.valueOf(zcount7);
%>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove6%>"/></m4:move>
<table border="0" width="100%" cellspacing = "0">
	<tr><td class="titulofuncional" colspan="2">Inscripci&oacute;n en curso</td><tr>
	<td><img src="/iconos/noname_incripciones_formacion_99_100.gif" width="99"  height="100" alt="Inscripci&oacute;n en curso" border="0"></td>
	<td >
	<div class="descripcionfuncional">Solicita un curso</div>
	<ul class="listaenlace"><li><a class="enlacefuncional" title = "Cat&aacute;logo de formaci&oacute;n" href="sse_g3_p3.jsp?estado=31">Cat&aacute;logo de formaci&oacute;n</a></li></ul>
	</td>
	</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_TRAINING_REQUEST" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_TRAINING_REQUEST" />
<input type="hidden" id="SCO_ID_TRTBREQ" name="SCO_ID_TRTBREQ" value="<%=zidtrtb%>" />
<input type="hidden" id="SCO_NM_TRAINING" name="SCO_NM_TRAINING" value = "<m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT%>" htmlsafe="true"/>"/>
<input type="hidden" id="SCO_ID_TYPE" name="SCO_ID_TYPE" value="11" />
<input type="hidden" id="SCO_ID_TRAINING_NAT" name="SCO_ID_TRAINING_NAT" value="<m4:item  m4name="<%=zSCO_ID_TRAINING_NAT%>" htmlsafe="true"/>" />
<input type="hidden" id="SCO_ID_TRAINING_CATG" name="SCO_ID_TRAINING_CATG" value="<m4:item  m4name="<%=zSCO_ID_TRAINING_CATG%>" htmlsafe="true"/>" />
<input type="hidden" id="SCO_DAYS" name="SCO_DAYS" value="<m4:item  m4name="<%=zDAYS%>" htmlsafe="true"/>" />
<input type="hidden" id="SCO_HOURS" name="SCO_HOURS" value="<m4:item m4name="<%=zHOURS%>" htmlsafe="true"/>" />
<input type="hidden" id="SCO_HOURS_OTW" name="SCO_HOURS_OTW" value="<m4:item  m4name="<%=zHOURSOTW%>" htmlsafe="true"/>" />
<input type="hidden" id="SCO_ID_TRAINING_LOCATION_TYPE" name="SCO_ID_TRAINING_LOCATION_TYPE" value="<m4:item m4name="<%=zSCO_ID_TRAINING_LOCATION_TYPE%>" htmlsafe="true"/>" />
<input type="hidden" id="SCO_CK_DEDUCTIBLE" name="SCO_CK_DEDUCTIBLE" value="<m4:item m4name="<%=zSFR_CK_DEDUCTIBLE%>" htmlsafe="true"/>" />
<table class = "tablaestados" cellspacing = "0" width="100%">
	<tr class = "tablaestadosceldatitulo">
		<td colspan="3" >	Descripci&oacute;n del curso de formaci&oacute;n</td>
		<td class="tablaestadosceldatitulo" align="right"><a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31"><img alt="Cat&aacute;logo de formaci&oacute;n" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
	</tr>				
	<tr class = "tablaestadosceldatitulo"></tr>
	<tr>
	<td class = "fuentecampo" >Tipo de formaci&oacute;n:</td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_NM_PRODUCT_TYPE%>" htmlsafe="true"/></td>
	<td class = "fuentecampo" >Producto:</td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_PRODUCT%>" htmlsafe="true"/></td>
	</tr>
	<tr>
	<td class = "fuentecampo" >Curso:</td>
	<td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT%>" htmlsafe="true"/> &nbsp;(&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_PRO_TYPE%>" htmlsafe="true"/> &nbsp;)&nbsp;</td>
	<td class = "fuentecampo" >Lugar:	</td>
	<td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_TRAINING_LOCATION_TYPE%>" htmlsafe="true"/> </td>

	<m4:item m4varname="zDays" m4name="<%=zDAYS%>"/>
	<%if (!zDays.equals("1")){%>
	<tr>
		<td class = "fuentecampo" >D&iacute;as:	</td>
		<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zDAYS%>" htmlsafe="true"/></td>
	</tr>
	<%}%>
	<tr>
		<td class = "fuentecampo" >N&uacute;mero de horas:</td>
		<td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zHOURS%>" htmlsafe="true"/></td>
		<td class = "fuentecampo" >	N&uacute;mero de horas extras: </td>
		<td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zHOURSOTW%>" htmlsafe="true"/></td>
	</tr>
	<tr>	
		<td class = "fuentecampo" >N&uacute;mero m&iacute;nimo de asistentes: </td>
		<td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zNBMIN%>" htmlsafe="true"/></td>
		<td class = "fuentecampo" >N&uacute;mero m&aacute;ximo de asistentes: 	</td>
		<td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zNBMAX%>" htmlsafe="true"/></td>
	</tr>
	<m4:item m4varname="zIdTypeC" m4name="<%=zSCO_ID_DEV_PRO_TYPE%>"/>
	<%if (zIdTypeC.equals("02")){%>
	<tr>
		<td class = "fuentecampo" >Autor:</td>
		<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_AUTHOR%>" htmlsafe="true"/></td>
		<td class = "fuentecampo">Fecha del cd: </td>
		<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_CD_DATE%>" htmlsafe="true"/></td>
	</tr>
	<tr>
		<td class = "fuentecampo">Unidades disponibles:</td>
		<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_NUMBER_OF_UNITS%>" htmlsafe="true"/></td>
	</tr>
	<%}%>
	<tr>	
		<td class = "fuentecampo" >Objetivo formativo : </td>
		<td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_EDUCAT_OBJ%>" htmlsafe="true"/></td>
	</tr>
	<tr>	
		<td class = "fuentecampo" >Ruta internet : </td>
		<td class = "fuentevalor" colspan="3">&nbsp; <a href ="<m4:item m4name="<%=zSCO_HTTP_PATH%>" htmlsafe="true"/>"><m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_CURSO.SCO_HTTP_PATH" htmlsafe="true"/></a></td>
	</tr>
</table>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">	
	<tr class = "tablaestadosceldatitulo">
		<td colspan="4" width="100%">Informaci&oacute;n adicional</td>
	</tr>				
	<tr>
		<td class="fuentecampo">Inicio preferido </td>    
		<td class="fuentecampo">
		<input class="fuenteformulario" type="text" name="SCO_SD_PREF" id="SCO_SD_PREF" title="Escribe la fecha de inicio" maxlength="10" size="10"><a href="javascript:m4calendario(m4objeto('SCO_SD_PREF','NombreFormulario'))" /><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Selecciona la fecha de inicio" /></a>
			<script type="text/javascript">
			var valorfec = m4fechahoy();
			m4valor("NombreFormulario","SCO_SD_PREF",valorfec,"set");
			</script>
		</td>
		<td class="fuentecampo"> Fin preferido</td>    
		<td class="fuentecampo"><input class="fuenteformulario" type="text" name="SCO_ED_PREF" id="SCO_ED_PREF" title="Escribe la fecha de fin" maxlength="10" size="10" /><a href="javascript:m4calendario(m4objeto('SCO_ED_PREF','NombreFormulario'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Selecciona la fecha de fin" /></a></td>
	</tr>
		<tr>
		<td class="fuentecampo" colspan="1">Lenguaje</td>
		<td class="fuentevalor" colspan="3" >
		<select id="STD_ID_LANGUAGE" class="Fuenteformulario" name="STD_ID_LANGUAGE">
		<option value="01">Español</option>
		<m4:loop from="0" to="<%=new Integer(new Integer(zcount3v).intValue()-1).toString()%>">
		<option value="<m4:item m4name="<%=zSTDIDLENGUAGE%>" htmlsafe="true"/>">
		<m4:item m4name="<%=zSTDNMLENGUAGE%>" htmlsafe="true"/>
		</option>
		</m4:loop>
		</select>
		</td>
	</tr>
	<tr>
		<td class="fuentecampo" >Bonificaci&oacute;n</td>
		<td class="fuentevalor"  >
		<select id="SCO_ID_TRAINING_DEV" class="Fuenteformulario" name="SCO_ID_TRAINING_DEV">
		<option value=""></option>
		<m4:loop from="0" to="<%=new Integer(new Integer(zcount4v).intValue()-1).toString()%>">
		<option value="<m4:item m4name="<%=zSCO_ID_TRAINING_DEV%>" htmlsafe="true"/>">
		<m4:item m4name="<%=zSCO_NM_TRAINING_DEV%>" htmlsafe="true"/>
		</option>
		</m4:loop>
		</select>
		</td>
		<td class="fuentecampo" >Colectivo prioritario</td>
		<td class="fuentevalor"  >
		<select id="SCO_ID_AVERAGE_AGE" class="Fuenteformulario" name="SCO_ID_AVERAGE_AGE">
		<option value=""></option>
		<m4:loop from="0" to="<%=new Integer(new Integer(zcount5v).intValue()-1).toString()%>">
		<option value="<m4:item m4name="<%=zSCO_ID_AVERAGE_AGE%>" htmlsafe="true"/>">
		<m4:item m4name="<%=zSCO_NM_AVERAGE_AGE%>" htmlsafe="true"/>
		</option>
		</m4:loop>
		</select>
		</td>
	</tr>

<tr>
	<td class="fuentecampo"><%= sse_g3Ess.getProperty("Label.sse_g3_p3_mod1_Desc")%></td>
	<td class="fuentecampo" colspan = "3"><textarea class="fuenteformulario"  title=<%=sse_g3Ess.getProperty("Label.sse_g3_p3_mod1_Desc")%> id="SCO_DESCRIPTION" name="SCO_DESCRIPTION" cols="40" rows="4" maxlength="1000"  /></textarea></td>
</tr>

</table>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">	
<tr>
<td class="fuentevalor">&nbsp;</td>
</tr>
<%if(zinfosubprod.equals("0")){%>
<tr class = "tablaestadosceldatitulo"><td align="center" colspan="4" class = "fuenteboton"><a  href="javascript:comprobar('<m4:item m4name='<%=zSCO_ID_DEV_PRODUCT%>' htmlsafe='true'/>')"  title="Enviar"><img alt="Enviar" title="Enviar" border="0" src="/iconos/icono_enviar_ess_36_36.gif" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td></tr>		
<%}%>

</table>
</form>	
<% 	if (zcounteventos_aux != 0 ) { 	%>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="FormularioEvento" id="FormularioEvento">
<input type="hidden" id="TAG" name="TAG" value="SSE_TRAINING_REQUEST" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_TRAINING_REQUEST" />
<input type="hidden" id="SCO_ID_TYPE" name="SCO_ID_TYPE" value="21" value="" />
<input type="hidden" id="SCO_ID_TRTBREQ" name="SCO_ID_TRTBREQ"  value="" />
<input type="hidden" id="SCO_NM_TRAINING" name="SCO_NM_TRAINING" value="" />
<input type="hidden" id="SCO_ID_TRAINING_NAT" name="SCO_ID_TRAINING_NAT" value="" />
<input type="hidden" id="SCO_ID_TRAINING_CATG" name="SCO_ID_TRAINING_CATG" value="" />
<input type="hidden" id="SCO_DAYS" name="SCO_DAYS" value="" />
<input type="hidden" id="SCO_HOURS" name="SCO_HOURS" value="" />
<input type="hidden" id="SCO_HOURS_OTW" name="SCO_HOURS_OTW" value="" />
<input type="hidden" id="SCO_ID_TRAINING_LOCATION_TYPE" name="SCO_ID_TRAINING_LOCATION_TYPE" value="" />
<input type="hidden" id="SCO_CK_DEDUCTIBLE" name="SCO_CK_DEDUCTIBLE" value="" />
<input type="hidden" id="SCO_ID_TRAINING_DEV" name="SCO_ID_TRAINING_DEV" value="" />
<input type="hidden" id="SCO_ID_AVERAGE_AGE" name="SCO_ID_AVERAGE_AGE" value="" />
<div class="descripcionfuncional">Si quieres apuntarte a un curso ya programado, seleccionalo.<br /></div>
<table class="tablaestados" cellspacing="0" width="100%" >
<tr><td class = "tablaestadosceldatitulo" colspan="7" align="center">Cursos programados</td></tr>
<tr>
<td class = "fuentecampo"  align="center">Nombre</td>
<td class = "fuentecampo"  align="center">Inicio</td>
<td class = "fuentecampo"  align="center">Fin</td>
<td class = "fuentecampo"  align="center">Días</td>
<td class = "fuentecampo"  align="center">Número de horas</td>
<td class = "fuentecampo"  align="center" >Núm. de horas extras</td>
<td class = "fuentecampo"  align="center" >&nbsp;</td>
</tr>
<%
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcount7 - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
	String zpos=""; 
%>

<m4:loop from="0" to="<%=new Integer(new Integer(zcounteventos_aux).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%>

<tr>
	
	<td class = "fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_SUBACTION%>" htmlsafe="true"/></td>
	<td class = "fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zDATE1%>" htmlsafe="true"/> </td>
	<td class = "fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zDATE%>" htmlsafe="true"/> </td>
	<td class = "fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zDAYS7%>" htmlsafe="true"/> </td>
	<td class = "fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zHOURS7%>" htmlsafe="true"/> </td>
	<td class = "fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zHOURSOTW7%>" htmlsafe="true"/> </td>
	<td align="center" class = "fuentevalor<%=zpos%>">
	<a   href="javascript:
	m4valor('FormularioEvento','SCO_CK_DEDUCTIBLE','<m4:item m4name="<%=zSFR_CK_DEDUCTIBLE7%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('FormularioEvento','SCO_DAYS','<m4:item m4name="<%=zDAYS7%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('FormularioEvento','SCO_HOURS','<m4:item m4name="<%=zHOURS7%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('FormularioEvento','SCO_HOURS_OTW','<m4:item m4name="<%=zHOURSOTW7%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('FormularioEvento','SCO_ID_TRAINING_LOCATION_TYPE','<m4:item m4name="<%=zSCO_ID_TRAINING_LOCATION_TYPE7%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('FormularioEvento','SCO_ID_TRAINING_CATG','<m4:item m4name="<%=zSCO_ID_TRAINING_CATG8%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('FormularioEvento','SCO_ID_TRAINING_NAT','<m4:item m4name="<%=zSCO_ID_TRAINING_NAT9%>" jsafe="true" htmlsafe="true"/>','set');
	solicitar_evento('<m4:item m4name="<%=zSCO_NM_DEV_SUBACTION%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zIDTRTBEVENTO%>" jsafe="true" htmlsafe="true"/>');" >	
	<img alt="Enviar" title="Enviar" border="0" src="/iconos/icono_seleccionar_11_12.gif" />
	</a>
	</td>
	</tr>
	
</m4:loop>
</table>
</form>	
<% }%>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>


