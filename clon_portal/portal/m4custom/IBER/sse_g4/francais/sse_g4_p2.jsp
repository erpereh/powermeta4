<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Cong&eacute;s</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<script type="text/javascript">
oalfanum = new m4objvalidacion('_alfanum','1','10','Veuillez renseigner le champ Numéro à composer (champ obligatoire)',false);		
function comprobar(){
var error = 0;
var texto = "Les erreurs suivantes ont été détectées. Veuillez les corriger afin de pouvoir envoyer votre demande :\n";
var dtstart = m4valor("NombreFormulario","SCO_DT_START","","get");
var dtstartok = m4fechacomprobacion(m4objeto('SCO_DT_START','NombreFormulario'),"");
var dtend = m4valor("NombreFormulario","SCO_DT_END","","get");
var dtendok = m4fechacomprobacion(m4objeto('SCO_DT_END','NombreFormulario'),"");
var fechasok = m4compfechas(m4objeto('SCO_DT_START','NombreFormulario'),'<=',m4objeto('SCO_DT_END','NombreFormulario'));

var dtEmployeeHire = m4valor("NombreFormulario","employeeHireDate","","get");
var fechaInicioOk = m4compfechas(m4objeto('employeeHireDate','NombreFormulario'),'<=',m4objeto('SCO_DT_START','NombreFormulario'));

 if (document.getElementById('SCO_ID_INCIDENCE').value==""){
	texto = texto + m4getmessage("_gta_17");
	error = 1;
}

if (fechaInicioOk == false){
	texto = texto + "\n " + m4getmessage("_gta_31") + " " + dtEmployeeHire;
	error = 1;
	}


if (dtstart == null || dtstart == ""){
	texto = texto + "\n     Le champ Date de début est obligatoire.";
	error = 1;
	}

if ((dtstart != null && dtstart != "") && (dtstartok == "")){
	texto = texto + "\n     Le format de la date de début est incorrect. Veuillez respecter le format "+'<%=zsgcoParamDate%>'+".";
	error = 1;
	}
if (dtend == null || dtend == ""){
	texto = texto + "\n     Le champ Date de fin est obligatoire.";
	error = 1;
	}

if ((dtend != null && dtend != "") && (dtendok == "")){
	texto = texto + "\n     Le format de la date de fin est incorrect. Veuillez respecter le format "+'<%=zsgcoParamDate%>'+".";
	error = 1;
	}
if ((dtstart != null && dtstart != "") && (dtstartok != "") && (dtend != null && dtend != "") && (dtendok != "") && (fechasok == false)){
	texto = texto +"\n     La date de fin doit être ultérieure à la date de début.";
	error = 1;
	}
if (error == 1){
	alert(texto);
	return;}
else{
	m4submit("NombreFormulario");
}
}
function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSE_HOLYDAYS",ord,"BORRAR","SSE_REAL_TIME_PRD");
m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}
function changeEntitlementDetails(ai_oIncidence){
	var 
		oNumEntitlement = document.getElementById('SCO_NUM_ENTITLEMENT'),
		oEntitlementN1 = document.getElementById('SCO_ENTITLEMENT_N1'),
		oNumEntitlementN1 = document.getElementById('SCO_NUM_ENTITLEMENT_N1'),
		oNumRemaining = document.getElementById('SCO_NUM_REMAINING'),
		oNumPending = document.getElementById('SCO_NUM_PENDING'),
		oNumPendingTheoretical = document.getElementById('SCO_NUM_REMAINING_THEORETICAL'),
		sEntitlement = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('m4Entitlement') || '',
		sEntitlementN1 = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('m4EntitlementN1') || '',
		sRemaining = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('m4Remaining') || '',
		sPending = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('m4Pending') || '',
		sPendingTheoretical = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('m4RemainingTheoretical') || '',
		sIndCfwd = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('m4IndCfwd') || '',
		sUnit = ai_oIncidence.options[ai_oIncidence.selectedIndex].getAttribute('m4Unit') || '';

	if(oNumEntitlement){oNumEntitlement.innerHTML = sEntitlement;}
	if(oNumEntitlementN1){oNumEntitlementN1.innerHTML = sEntitlementN1;}
	if(oNumRemaining){oNumRemaining.innerHTML = sRemaining;}
	if(oNumPending){oNumPending.innerHTML = sPending;}
	if(oNumPendingTheoretical){oNumPendingTheoretical.innerHTML = sPendingTheoretical;}
	if(sIndCfwd === '1'){
		oEntitlementN1.style.display = '';
	}else{
		oEntitlementN1.style.display = 'none';
	}
}
</script>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	
<%
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_HOLYDAYS";
   String zmeta4object = "SSE_HOLYDAYS";
   String znodo = "SSE_REAL_TIME_PRD";
   String znodo2 = "M4T_REAL_TIME_PRD";
   String znodo3 = "SSE_INCIDENCE";
   String ztipocarga = "ALL";
   
   String zventanas = "10";
   int zvuelta = 5;
   String zdireccion = "sse_g1/sse_g1_p1_mod3.jsp";
   String zestado = "11";

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zmove = znodo + ":" + znodo + "[FIRST]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String zORDINAL = zcomun + "ORDINAL";
   String zSSEDTSTART = zcomun + "SSE_DT_START";
   String zSSEDTEND = zcomun + "SSE_DT_END";
   String zSCO_UNITS = zcomun + "SCO_UNITS";
   String zNACCION = zcomun + "N_ACCION";
   String zSCONMINCIDENCE1 = zcomun + "SCO_NM_INCIDENCE";
   
   
   String zoutputdef2= zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   
   String zSSEDTSTART2 = zcomun2 + "SCO_DT_START";
   String zSSEDTEND2 = zcomun2 + "SCO_DT_END";
   String zSCO_UNITS2 = zcomun2 + "SCO_UNITS";
   String zSCOORPARTTIME2 = zcomun2 + "SCO_OR_PART_TIME";
   String zSTD_OR_HR_PERIOD2 = zcomun2 + "STD_OR_HR_PERIOD";
   String zSCONMINCIDENCE2 = zcomun2 + "SCO_NM_INCIDENCE";
	String zSCOIDINCIDENCE2= zcomun2 + "SCO_ID_INCIDENCE";

   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   String zSCOIDINCIDENCE = zcomun3 + "SCO_ID_INCIDENCE";
   String zSCONMINCIDENCE = zcomun3 + "SCO_NM_INCIDENCE";
   
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request);
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:item outputdef="<%=znodo3%>" item="SCO_IND_CFWD" m4varname="sIndCfwd"/>
<m4:item outputdef="<%=znodo%>" item="SSE_EMPLOYEE_HIRE_DATE" m4varname="employeeHireDate"/>
<%
	int zcount = 0;
	int  zcounti  = 0;
	int  zcount2  = 0;
	int  zcount3  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
	    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);

	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountv2 = String.valueOf(zcount2);
	String	zcountv3 = String.valueOf(zcount3);
	
%>
<table width="100%" cellspacing="0">
<tr>
	<td class="titulofuncional" colspan="2">Cong&eacute;s</td>
	
</tr>
<tr>
	<td><img src="/iconos/noname_vacaciones_55_100.gif" width="100" height="100" alt="Cong&eacute;s"></td>
	<td><div class="descripcionfuncional">Faites votre demande en indiquant la p&eacute;riode souhait&eacute;e pour vos cong&eacute;s.
	
	<a class="enlacefuncional" tabindex="1" title="Affichage graphique"
	href=""
	onclick="window.open('/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2_2.jsp?estado=41','Vis','width=800;height=300,resizable,scrollbars');return false;";
	
	>
	Vous pouvez contr&ocirc;ler votre situation de mani&egrave;re graphique (cliquez sur cette phrase-lien).</a>
	</div>
		<ul class="listaenlace"><li><a class="enlacefuncional" tabindex="1" title="Calendrier des jours f&eacute;ri&eacute;s" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p3.jsp?estado=41">Calendrier des jours f&eacute;ri&eacute;s</a></li></ul>
	</td>	
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="javascript:comprobar();">
<input type="hidden" id="TAG" name="TAG" value="SSE_HOLYDAYS" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_REAL_TIME_PRD" />
<input type="hidden" id="employeeHireDate" name="employeeHireDate" value="<%=employeeHireDate%>" />
<input type="hidden" id="SCO_UNITS" name="SCO_UNITS" value="" />
<input type="hidden" id="STD_OR_HR_PERIOD" name="STD_OR_HR_PERIOD" value="" />
<input type="hidden" id="SCO_OR_PART_TIME" name="SCO_OR_PART_TIME" value="" />
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td colspan="2">P&eacute;riode de cong&eacute;s demand&eacute;e</td>
	
</tr>
<tr>
	<td class="fuentecampo">&nbsp;Type de cong&eacute;&nbsp;
	<select id="SCO_ID_INCIDENCE" class="fuenteformulario250" name="SCO_ID_INCIDENCE" title="S&eacute;lectionnez un type de cong&eacute;" onchange="javascript:changeEntitlementDetails(this);">

	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
	<option 
		value="<m4:item m4name="<%=zSCOIDINCIDENCE%>" htmlsafe="true"/>"
		m4Entitlement="<m4:item item="SCO_NUM_ENTITLEMENT" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
		m4EntitlementN1="<m4:item item="SCO_NUM_ENTITLEMENT_N1" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
		m4Remaining="<m4:item item="SCO_NUM_REMAINING" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
		m4Pending="<m4:item item="SCO_NUM_PENDING" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
		m4RemainingTheoretical="<m4:item item="SCO_NUM_REMAINING_THEORETICAL" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
		m4IndCfwd="<m4:item item="SCO_IND_CFWD" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
		m4Unit="<m4:item item="SCO_NM_UNIT" record="<%=m4lix%>" htmlsafe="true" outputdef="<%=znodo3%>"/>"
		><m4:item m4name="<%=zSCONMINCIDENCE%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
	<td class="fuentecampo">
		<table>
			<tr>
				<td class="fuentecampo">&nbsp;<m4:label get="item" item="SCO_LBL_ENTITLEMENT_DETAILS" outputdef="<%=znodo3%>"/>&nbsp;</td>
				<td class="fuentevalor"><span id="SCO_NUM_ENTITLEMENT" class="fuentevalornegrita"><m4:item item="SCO_NUM_ENTITLEMENT" record="0" htmlsafe="true" outputdef="<%=znodo3%>"/></span>&nbsp;<m4:label get="item" item="SCO_NUM_ENTITLEMENT" outputdef="<%=znodo3%>"/><span id="SCO_ENTITLEMENT_N1" <%if(!sIndCfwd.equals("1")){%> style='display:none'<%;}%>>,&nbsp;<span id="SCO_NUM_ENTITLEMENT_N1" class="fuentevalornegrita"><m4:item item="SCO_NUM_ENTITLEMENT_N1" record="0" htmlsafe="true" outputdef="<%=znodo3%>"/></span>&nbsp;<m4:label get="item" item="SCO_NUM_ENTITLEMENT_N1" outputdef="<%=znodo3%>"/></span></td>
			</tr>
			<tr>
				<td class="fuentecampo">&nbsp;<m4:label get="item" item="SCO_NUM_REMAINING" outputdef="<%=znodo3%>"/>&nbsp;</td>
				<td class="fuentevalor fuentevalornegrita"><span id="SCO_NUM_REMAINING"><m4:item item="SCO_NUM_REMAINING" record="0" htmlsafe="true" outputdef="<%=znodo3%>"/></span></td>
			</tr>
			<tr>
				<td class="fuentecampo">&nbsp;<m4:label get="item" item="SCO_NUM_PENDING" outputdef="<%=znodo3%>"/>&nbsp;</td>
				<td class="fuentevalor"><span id="SCO_NUM_PENDING"><m4:item item="SCO_NUM_PENDING" record="0" htmlsafe="true" outputdef="<%=znodo3%>"/></span></td>
			</tr>
			<tr>
				<td class="fuentecampo">&nbsp;<m4:label get="item" item="SCO_NUM_REMAINING_THEORETICAL" outputdef="<%=znodo3%>"/>&nbsp;</td>
				<td class="fuentevalor"><span id="SCO_NUM_REMAINING_THEORETICAL"><m4:item item="SCO_NUM_REMAINING_THEORETICAL" record="0" htmlsafe="true" outputdef="<%=znodo3%>"/></span></td>
			</tr>
		</table>
	</td>
</tr>
<tr>
	<td class="fuentecampo">*&nbsp;Date de d&eacute;but (incluse)
	<input class="fuenteformulario" type="text" name="SCO_DT_START" id="SCO_DT_START" title="Indiquez la date de d&eacute;but" maxlength="10" size="10" tabindex="1" />&nbsp;
	<a href="javascript:m4calendario(m4objeto('SCO_DT_START','NombreFormulario'))" title="Indiquez la date de d&eacute;but"tabindex="2"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Indiquez la date de d&eacute;but" /></a></td>
	</td>
	<td class="fuentecampo">*&nbsp;Date de fin (incluse)
	<input class="fuenteformulario" type="text" name="SCO_DT_END" id="SCO_DT_END" title="Indiquez la date de fin" maxlength="10" size="10" tabindex="3" />&nbsp;
	<a tabindex="4" href="javascript:m4calendario(m4objeto('SCO_DT_END','NombreFormulario'))" title="Indiquez la date de fin"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Indiquez la date de fin" /></a></td>
	</td>
	
</tr>
<tr>
	<td class="fuenteboton" colspan="2">&nbsp;
	<a title="Envoyer"href="javascript:comprobar();" tabindex="5"><img alt="Envoyer"border="0" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
	</td>
</tr>
</table>
</form>
<% 
if ((zcount > 0)||(zcount2>0)) {
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Type</td>
	<td class="tablaestadosceldatitulo">&nbsp;Date de d&eacute;but</td>
	<td class="tablaestadosceldatitulo">&nbsp;Date de fin</td>
	<td class="tablaestadosceldatitulo" >&nbsp;Dur&eacute;e (jours)</td>
	<td class="tablaestadosceldatitulo" >&nbsp;&Eacute;tat</td>
	<td class="tablaestadosceldatitulo" >&nbsp;Annuler</td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcounti).intValue()-1).toString()%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
	if (zcontrol==0){%>
<tr>
	<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCONMINCIDENCE1%>" htmlsafe="true"/></td>
	<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSSEDTSTART%>" htmlsafe="true"/></td>
	<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSSEDTEND%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_UNITS%>" htmlsafe="true"/></td>
	<td class="fuentecampoaccion">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
	<td class="fuentevalor" >
	<a title="Supprimer la demande"href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
	<img class="tablamenuright" alt="Supprimer la demande"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
<%}else{%>
<tr>
	<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSCONMINCIDENCE1%>" htmlsafe="true"/></td>
	<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSSEDTSTART%>" htmlsafe="true"/></td>
	<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSSEDTEND%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCO_UNITS%>" htmlsafe="true"/></td>
	<td class="fuentecampoaccion2">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">
	<a title="Supprimer la demande"href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
	<img class="tablamenuright" alt="Supprimer la demande"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
 <%}%>
</m4:loop>

<m4:loop from="0" to="<%=new Integer(new Integer(zcount2).intValue()-1).toString()%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue()+zcounti;
 	zcontrol = zposicion%2;
	if (zcontrol==0){%>
<tr>
	<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCONMINCIDENCE2%>" htmlsafe="true"/></td>
	<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSSEDTSTART2%>" htmlsafe="true"/></td>
	<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSSEDTEND2%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_UNITS2%>" htmlsafe="true"/></td>
	<td class="fuentecampoaccion">&nbsp;Enregistrement accept&eacute;</td>
	<td class="fuentevalor" >
	<a title="Supprimer la demande"href="javascript:
	m4valor('NombreFormulario','SCO_ID_INCIDENCE','<m4:item m4name="<%=zSCOIDINCIDENCE2%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('NombreFormulario','SCO_DT_START','<m4:item m4name="<%=zSSEDTSTART2%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('NombreFormulario','SCO_DT_END','<m4:item m4name="<%=zSSEDTEND2%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('NombreFormulario','SCO_OR_PART_TIME','<m4:item m4name="<%=zSCOORPARTTIME2%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('NombreFormulario','STD_OR_HR_PERIOD','<m4:item m4name="<%=zSTD_OR_HR_PERIOD2%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('NombreFormulario','SCO_UNITS','<m4:item m4name="<%=zSCO_UNITS2%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('NombreFormulario','ACC','ANULAR','set');
	m4submit('NombreFormulario');
	">
	<img class="tablamenuright" alt="Supprimer la demande"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
	</a>
	</td>
	

   
</tr>
<%}else{%>
<tr>
	<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSCONMINCIDENCE2%>" htmlsafe="true"/></td>
	<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSSEDTSTART2%>" htmlsafe="true"/></td>
	<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSSEDTEND2%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCO_UNITS2%>" htmlsafe="true"/></td>
	<td class="fuentecampoaccion2">&nbsp;Enregistrement accept&eacute;</td>
	<td class="fuentevalor2">
	<a title="Supprimer la demande"href="javascript:
	m4valor('NombreFormulario','SCO_ID_INCIDENCE','<m4:item m4name="<%=zSCOIDINCIDENCE2%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('NombreFormulario','SCO_DT_START','<m4:item m4name="<%=zSSEDTSTART2%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('NombreFormulario','SCO_DT_END','<m4:item m4name="<%=zSSEDTEND2%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('NombreFormulario','SCO_OR_PART_TIME','<m4:item m4name="<%=zSCOORPARTTIME2%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('NombreFormulario','STD_OR_HR_PERIOD','<m4:item m4name="<%=zSTD_OR_HR_PERIOD2%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('NombreFormulario','SCO_UNITS','<m4:item m4name="<%=zSCO_UNITS2%>" jsafe="true" htmlsafe="true"/>','set');
	m4valor('NombreFormulario','ACC','ANULAR','set');
	m4submit('NombreFormulario');
	">
	<img class="tablamenuright" alt="Supprimer la demande"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
 <%}%>
</m4:loop>

</table>

<%}%>	
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div>
<script type="text/javascript">	m4focus("NombreFormulario","SCO_DT_START");</script>
<m4:endpage/>
</body>
</html>


