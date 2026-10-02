<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>D&eacute;tail de l'emploi</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<%		
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String zjob = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_job");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_JOB";
   String zmeta4object = "SSE_JOB";
   String znodo = "SSE_JOB_PRINCIPAL";
   String znodojob = "SSE_JOB";
   String znodores = "SSE_JOB_DUTY";
   String znodocon = "SSE_JOB_COMPETENCY";
   String znodohis = "SSE_JOB_ACAD_BACK";
   String znodoidi = "SSE_JOB_LANGUAGE";
   String znodoexp = "SSE_JOB_PREV_JOBS";
   String znodocer = "SSE_JOB_CERT_LICEN";
   
// Se parametriza el tamano que se desea para la ventana

   String zventanas = "20";

// No se modifica en general.

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdefjob = zsubsesion + "!" + znodojob + "[*]";
   String zmovejob = znodojob + ":" + znodojob + "[FIRST]";
   String zcomunjob = znodojob + ":" + zsubsesion + "!" + znodojob + "[&VAR.m4lix]" + ".";

   String zoutputdefres = zsubsesion + "!" + znodores + "[*]";
   String zmoveres = znodores + ":" + znodores + "[FIRST]";
   String zcomunres = znodores + ":" + zsubsesion + "!" + znodores + "[&VAR.m4lix]" + ".";

   String zoutputdefcon = zsubsesion + "!" + znodocon + "[*]";
   String zmovecon = znodocon + ":" + znodocon + "[FIRST]";
   String zcomuncon = znodocon + ":" + zsubsesion + "!" + znodocon + "[&VAR.m4lix]" + ".";

   String zoutputdefhis = zsubsesion + "!" + znodohis + "[*]";
   String zmovehis = znodohis + ":" + znodohis + "[FIRST]";
   String zcomunhis = znodohis + ":" + zsubsesion + "!" + znodohis + "[&VAR.m4lix]" + ".";

   String zoutputdefidi = zsubsesion + "!" + znodoidi + "[*]";
   String zmoveidi = znodoidi + ":" + znodoidi + "[FIRST]";
   String zcomunidi = znodoidi + ":" + zsubsesion + "!" + znodoidi + "[&VAR.m4lix]" + ".";

   String zoutputdefexp = zsubsesion + "!" + znodoexp + "[*]";
   String zmoveexp = znodoexp + ":" + znodoexp + "[FIRST]";
   String zcomunexp = znodoexp + ":" + zsubsesion + "!" + znodoexp + "[&VAR.m4lix]" + ".";

   String zoutputdefcer = zsubsesion + "!" + znodocer + "[*]";
   String zmovecer = znodocer + ":" + znodocer + "[FIRST]";
   String zcomuncer = znodocer + ":" + zsubsesion + "!" + znodocer + "[&VAR.m4lix]" + ".";

// Metodo de carga del Meta4Object generico

   String zmetodocarga = zsubsesion + "!SSE_JOB_PRINCIPAL.CARGA";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
 
   String zpuesto = znodojob + ":" + zsubsesion + "!" + znodojob + ".STD_ID_JOB_CODE";
   String znombrepuesto = znodojob + ":" + zsubsesion + "!" + znodojob + ".STD_N_JOB_CODE";
   String zmision = znodojob + ":" + zsubsesion + "!" + znodojob + ".STD_JOB_DESCR";
   String zmovilidadnac = znodojob + ":" + zsubsesion + "!" + znodojob + ".MOVILIDAD_NAC";
   String zmovilidadint = znodojob + ":" + zsubsesion + "!" + znodojob + ".MOVILIDAD_INT";
   
   String zresponsabilidad = zcomunres + "SCO_NM_DUTY";
   
   String zconocimiento = zcomuncon + "SCO_NM_EXTD_KN";
   String znivel = zcomuncon + "SCO_NM_LEVEL";
   String zpeso = zcomuncon + "SCO_WEIGHT";
   
   String ztipoformacion = zcomunhis + "STD_N_EDU_TYPE";
   String zespecialidad = zcomunhis + "STD_N_EDU_SP";
   String ztitulacion = zcomunhis + "STD_N_DIPLOMA";
   
   String zidioma = zcomunidi + "STD_N_LANGUAGE";
   String znivelhabla = zcomunidi + "STD_N_LANG_LEVEL_1";
   String znivellee = zcomunidi + "STD_N_LANG_LEVEL";
   String znivelescribe = zcomunidi + "STD_N_LANG_LEVEL_2";
   
   String zpuestoprevio = zcomunexp + "STD_N_JOB_CODE";
   String zperiodo = zcomunexp + "SCO_MIN_PERIOD";
   String zunidadtiempo = zcomunexp + "SCO_NM_TIME_UNIT";
   
   String zcertificado = zcomuncer + "STD_N_CERTIFICATION_TYPE";
   String zentidad = zcomuncer + "SCO_N_ISSUE_ENTIT";
   String zpais = zcomuncer + "STD_N_COUNTRY";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="JOB_ARG" value="<%=zjob%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodojob%>"><m4:param name="m4name0" value="<%=zoutputdefjob%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodores%>"><m4:param name="m4name0" value="<%=zoutputdefres%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocon%>"><m4:param name="m4name0" value="<%=zoutputdefcon%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodohis%>"><m4:param name="m4name0" value="<%=zoutputdefhis%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoidi%>"><m4:param name="m4name0" value="<%=zoutputdefidi%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoexp%>"><m4:param name="m4name0" value="<%=zoutputdefexp%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocer%>"><m4:param name="m4name0" value="<%=zoutputdefcer%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovejob%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveres%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovecon%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovehis%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveidi%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveexp%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovecer%>"/></m4:move>
<%
	int  zcountijob  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcountijob = m.getCountInClient(znodojob,zsubsesion,znodojob);
	} catch(Exception e) {}
	String	zcountvjob = String.valueOf(zcountijob);	
	String ztojob = new Integer(new Integer(zcountvjob).intValue()-1).toString();
	
	int  zcountires  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcountires = m.getCountInClient(znodores,zsubsesion,znodores);
	} catch(Exception e) {}
	String	zcountvres = String.valueOf(zcountires);
	String ztores = new Integer(new Integer(zcountvres).intValue()-1).toString();
	
	int  zcounticon  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcounticon = m.getCountInClient(znodocon,zsubsesion,znodocon);
	} catch(Exception e) {}
	String	zcountvcon = String.valueOf(zcounticon);
	String ztocon = new Integer(new Integer(zcountvcon).intValue()-1).toString();

	int  zcountihis  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcountihis = m.getCountInClient(znodohis,zsubsesion,znodohis);
	} catch(Exception e) {}
	String	zcountvhis = String.valueOf(zcountihis);
	String ztohis = new Integer(new Integer(zcountvhis).intValue()-1).toString();

	int  zcountiidi  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcountiidi = m.getCountInClient(znodoidi,zsubsesion,znodoidi);
	} catch(Exception e) {}
	String	zcountvidi = String.valueOf(zcountiidi);
	String ztoidi = new Integer(new Integer(zcountvidi).intValue()-1).toString();

	int  zcountiexp  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcountiexp = m.getCountInClient(znodoexp,zsubsesion,znodoexp);
	} catch(Exception e) {}
	String	zcountvexp = String.valueOf(zcountiexp);
	String ztoexp = new Integer(new Integer(zcountvexp).intValue()-1).toString();

	int  zcounticer  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcounticer = m.getCountInClient(znodocer,zsubsesion,znodocer);
	} catch(Exception e) {}
	String	zcountvcer = String.valueOf(zcounticer);
	String ztocer = new Integer(new Integer(zcountvcer).intValue()-1).toString();
if (zcountijob > 0) {%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2">&nbsp;<m4:item m4name="<%=znombrepuesto%>" htmlsafe="true"/></td></tr>
<tr>
	<td><img src="/iconos/noname_puesto_144_100.gif" width="100" height="100" alt="Emploi"title="Emploi" /></td>
	<td><div class="fuentedescripcion">Consultez en d&eacute;tails vos emplois.</div>
		<ul class="listaenlace"><li><a class="enlacefuncional" title= "Emplois successifs" style="cursor:hand" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=30Emplois successifs</a></li></ul>
	</td>
</tr>
</table>
<table class="tablaestados" cellspacing="0" width="100%">
<tr><td class="tablaestadosceldatitulo">&nbsp;Mission</td><td class="tablaestadosceldatitulo">&nbsp;Mobilit&eacute; (nat./internat.)</td></tr>
<tr><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zmision%>" htmlsafe="true"/></td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zmovilidadnac%>" htmlsafe="true"/>&nbsp;-&nbsp;<m4:item m4name="<%=zmovilidadint%>" htmlsafe="true"/></td></tr>
</table>		
<%}else{%>
<div class="fuentenodatos">Aucune donn&eacute;e n'est actuellement disponible.</div>
<%}if (zcountires > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr><td class="tablaestadosceldatitulo">&nbsp;T&acirc;ches</td></tr>
<tr>
	<td class="fuentevalor" > 
	<ul>
	<m4:loop from="0" to="<%=ztores%>">
	<li>&nbsp;<m4:item m4name="<%=zresponsabilidad%>" htmlsafe="true"/></li>
	</m4:loop>
	</ul>
	</td>
</tr>
</table>
<%}if (zcounticon > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Connaissances</td>
	<td class="tablaestadosceldatitulo">&nbsp;Niveau</td>
	<td class="tablaestadosceldatitulo">&nbsp;Importance relative</td>
</tr>
<m4:loop from="0" to="<%=ztocon%>">
<tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zconocimiento%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivel%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpeso%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>
<%}if (zcountihis > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Formation</td>
	<td class="tablaestadosceldatitulo">&nbsp;Sp&eacute;cialisation</td>
	<td class="tablaestadosceldatitulo">&nbsp;Dipl&ocirc;me</td>
</tr>
<m4:loop from="0" to="<%=ztohis%>">
<tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=ztipoformacion%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zespecialidad%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=ztitulacion%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>		
<%}if (zcountiidi > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Langue</td>
	<td class="tablaestadosceldatitulo">&nbsp;Niveau lu</td>
	<td class="tablaestadosceldatitulo">&nbsp;Niveau &eacute;crit</td>
	<td class="tablaestadosceldatitulo">&nbsp;Niveau parl&eacute;</td>
</tr>
<m4:loop from="0" to="<%=ztoidi%>">
<tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zidioma%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivellee%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivelescribe%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivelhabla%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>		
<%}if (zcountiexp > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Emplois ant&eacute;rieurs requis</td>
	<td class="tablaestadosceldatitulo">&nbsp;Dur&eacute;e minimale</td>
</tr>
<m4:loop from="0" to="<%=ztoexp%>">
<tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpuestoprevio%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zperiodo%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zunidadtiempo%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>		
<%}if (zcounticer > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Permis et attestations</td>
	<td class="tablaestadosceldatitulo">&nbsp;Organisme &eacute;metteur</td>
	<td class="tablaestadosceldatitulo">&nbsp;Pays &eacute;metteur</td>
</tr>
<m4:loop from="0" to="<%=ztocer%>">
<tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zcertificado%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zentidad%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpais%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>		
<%}%>
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>


