<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>Description de l'emploi</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_g3_trans.jsp"%>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript" src="/library/m4doc_include.js"></script>
<script type="text/javascript">
function formacion (extd,lev){
m4valor("oculto","zextd",extd,"set");
m4valor("oculto","zlevel",lev,"set");
m4submit("oculto");}
</script>
<%		
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = zobjtabla.m4paramvalor("estado");
String zinicios = zobjtabla.m4paramvalor("zinicios");
String zjob = zobjtabla.m4paramvalor("zSJOB");

String zVis = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis");   
if ((zVis==null)||(zVis.equals(""))){zVis = "1";}
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%> 
</head>
<body>
<%if (zVis.equals("1")){%>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%}%> 
<%
   String zsubsesion = "SSE_JOB";
   String zmeta4object = "SSE_JOB";
   String znodo = "SSE_JOB_PRINCIPAL";
   String znodo1 = "SSE_JOB";
   String znodo2 = "SSE_JOB_DUTY";
   String znodo3 = "SSE_JOB_COMPETENCY";
   String znodo4 = "SSE_JOB_ACAD_BACK";
   String znodo5 = "SSE_JOB_LANGUAGE";
   String znodo6 = "SSE_JOB_PREV_JOBS";
   String znodo7 = "SSE_JOB_CERT_LICEN";
   
// Se parametriza el tamano que se desea para la ventana

   String zventanas = "20";

// No se modifica en general.

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   

   String zoutputdef1 = zsubsesion + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove1 = znodo1 + "[" + zregistroinicial + "]";
   String zlectura1 = zsubsesion + "!" + znodo1;
   String zraiz1 = zsubsesion + "!" + znodo1 + ".";
   String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef2= zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove2 = znodo2 + "[" + zregistroinicial + "]";
   String zlectura2 = zsubsesion + "!" + znodo2;
   String zraiz2 = zsubsesion + "!" + znodo2 + ".";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove3 = znodo3 + "[" + zregistroinicial + "]";
   String zlectura3 = zsubsesion + "!" + znodo3;
   String zraiz3 = zsubsesion + "!" + znodo3 + ".";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";

   String zoutputdef4 = zsubsesion + "!" + znodo4 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove4 = znodo4 + "[" + zregistroinicial + "]";
   String zlectura4 = zsubsesion + "!" + znodo4;
   String zraiz4 = zsubsesion + "!" + znodo4 + ".";
   String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";

   String zoutputdef5 = zsubsesion + "!" + znodo5 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove5 = znodo5 + "[" + zregistroinicial + "]";
   String zlectura5 = zsubsesion + "!" + znodo5;
   String zraiz5 = zsubsesion + "!" + znodo5 + ".";
   String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";

   String zoutputdef6 = zsubsesion + "!" + znodo6 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove6 = znodo6 + "[" + zregistroinicial + "]";
   String zlectura6 = zsubsesion + "!" + znodo6;
   String zraiz6 = zsubsesion + "!" + znodo6 + ".";
   String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&VAR.m4lix]" + ".";

   String zoutputdef7 = zsubsesion + "!" + znodo7 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove7 = znodo6 + "[" + zregistroinicial + "]";
   String zlectura7 = zsubsesion + "!" + znodo7;
   String zraiz7 = zsubsesion + "!" + znodo7 + ".";
   String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&VAR.m4lix]" + ".";

// Metodo de carga del Meta4Object generico

   String zmetodocarga = zsubsesion + "!SSE_JOB_PRINCIPAL.CARGA";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
 
   String zpuesto = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_ID_JOB_CODE";
   String znombrepuesto = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_N_JOB_CODE";
   String zmision = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_JOB_DESCR";
   String zresumen = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_SUMMARY";
   String zsinonimos = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".SCO_NM_OTHERS";
   String zdescjobdoc = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".SCO_JOB_DESC_DOC";
   String zmovilidadnac = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".MOVILIDAD_NAC";
   String zmovilidadint = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".MOVILIDAD_INT";
   
   String zresponsabilidad =  zcomun2 + "SCO_NM_DUTY";
   
   String zconocimiento =  zcomun3 + "SCO_NM_EXTD_KN";
   String znivel =  zcomun3 + "SCO_MEANING";
   String zpeso =  zcomun3 + "SCO_WEIGHT";
   String zextd =  zcomun3 + "SCO_ID_EXTD_KN";
   String zlevel =  zcomun3 + "SCO_ID_LEVEL";
   
   String ztipoformacion =  zcomun4 + "STD_N_EDU_TYPE";
   String zespecialidad =  zcomun4 + "STD_N_EDU_SP";
   String ztitulacion =  zcomun4 + "STD_N_DIPLOMA";
   
   String zidioma =  zcomun5 + "STD_N_LANGUAGE";
   String znivelhabla =  zcomun5 + "STD_N_LANG_LEVEL_1";
   String znivellee =  zcomun5 + "STD_N_LANG_LEVEL";
   String znivelescribe =  zcomun5 + "STD_N_LANG_LEVEL_2";
   
   String zpuestoprevio =  zcomun6 + "STD_N_JOB_CODE";
   String zperiodo =  zcomun6 + "SCO_MIN_PERIOD";
   String zunidadtiempo =  zcomun6 + "SCO_NM_TIME_UNIT";
   
   String zcertificado =  zcomun7 + "STD_N_CERTIFICATION_TYPE";
   String zentidad =  zcomun7 + "SCO_N_ISSUE_ENTIT";
   String zpais =  zcomun7 + "STD_N_COUNTRY";
   
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="JOB_ARG" value="<%=zjob%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo7%>"><m4:param name="m4name0" value="<%=zoutputdef7%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove6%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove7%>"/></m4:move>
<%
	int  zcountijob  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcountijob = m.getCountInClient(znodo1,zsubsesion,znodo1);
	} catch(Exception e) {}
	String	zcountvjob = String.valueOf(zcountijob);	

	int  zcountires  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcountires = m.getCountInClient(znodo2,zsubsesion,znodo2);
	} catch(Exception e) {}
	String	zcountvres = String.valueOf(zcountires);
	
	int  zcounticon  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcounticon = m.getCountInClient(znodo3,zsubsesion,znodo3);
	} catch(Exception e) {}
	String	zcountvcon = String.valueOf(zcounticon);	

	int  zcountihis  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcountihis = m.getCountInClient(znodo4,zsubsesion,znodo4);
	} catch(Exception e) {}
	String	zcountvhis = String.valueOf(zcountihis);	

	int  zcountiidi  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcountiidi = m.getCountInClient(znodo5,zsubsesion,znodo5);
	} catch(Exception e) {}
	String	zcountvidi = String.valueOf(zcountiidi);	

	int  zcountiexp  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcountiexp = m.getCountInClient(znodo6,zsubsesion,znodo6);
	} catch(Exception e) {}
	String	zcountvexp = String.valueOf(zcountiexp);	

	int  zcounticer  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcounticer = m.getCountInClient(znodo7,zsubsesion,znodo7);
	} catch(Exception e) {}
	String	zcountvcer = String.valueOf(zcounticer);	
if (zcountijob > 0) {
%>
<m4:item m4varname="zDescJob" m4name="<%=zdescjobdoc%>" htmlsafe = "true"/>
<table width="100%">
<tr>
	<td class="titulofuncional" colspan="2">&nbsp;<m4:item m4name="<%=znombrepuesto%>" htmlsafe="true"/></td>
</tr>
<tr>

	
	<%if (zVis.equals("1")){%>	

	<td><img src="/iconos/noname_puesto_181_125.gif" width="100" height="100" alt="Votre emploi"/></td>

	<td><div class="fuentedescripcion"><a class="fuentedescripcion">Consultez les d&eacute;tails de chaque emploi composant le parcours professionnel.</a></div>
<%}else{%>
	<td><div class="fuentedescripcion"><a class="fuentedescripcion"><%=mss_g3.getProperty("Label.mss_g3_p8Des_Puesto")%></a></div>
	<%}%>
	<%if (zVis.equals("1")){%>		
		<ul class="listaenlace">
		<li><a class="enlacefuncional" title ="Revenir &agrave; Parcours professionnels individuels" tabindex="1" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31">Parcours professionnels individuels</a></li>
		<%if (zDescJob.equals("")){%>

		<%}else{%>
		<li><a class="enlacefuncional" tabindex="2" title="<m4:label m4name="<%=zdescjobdoc%>" htmlsafe = "true"/>" <a href="javascript:m4opendocument_tech(<%=zDescJob%>)"><m4:label m4name="<%=zdescjobdoc%>" htmlsafe = "true"/></a></li>
		<%}%>	
		</ul>
	<%}else{%>
	<tr colspan="2">
		<td><div class="fuentedescripcion">
	
			<%if (zDescJob.equals("")){%>

			<%}else{%>
			  <ul class="listaenlace">
				<li><a class="enlacefuncional" tabindex="2" title="<m4:label m4name="<%=zdescjobdoc%>" htmlsafe = "true"/>" <a href="javascript:m4opendocument_tech(<%=zDescJob%>)"><m4:label m4name="<%=zdescjobdoc%>" htmlsafe = "true"/></a></li>
		</ul>
	<%}%>
	</td>
</tr>
	<%}%>
	</td>
</tr>
</table>
<table class="tablaestados" cellspacing="0" width="100%">
<%String zvalormision=""; %>
<%String zvalorsinonimos=""; %>
<%String zvalorresumen=""; %>

<m4:item var="zvalormision" item="STD_JOB_DESCR" htmlsafe="true" outputdef="<%=znodo1%>"/>
<m4:item var="zvalorsinonimos" item="SCO_NM_OTHERS" htmlsafe="true" outputdef="<%=znodo1%>"/>
<m4:item var="zvalorresumen" item="STD_SUMMARY" htmlsafe="true" outputdef="<%=znodo1%>"/>

<%if (zvalormision != "" && zvalormision != null && zvalormision != " ") {%>

<tr><td class="tablaestadosceldatitulo" colspan="2">&nbsp;<m4:label  item="STD_JOB_DESCR"  outputdef="<%=znodo1%>"/></td></tr>
<tr><td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zmision%>" htmlsafe="true"/></td></tr>
<%}%>
<%if (zvalorsinonimos != "" && zvalorsinonimos != null && zvalorsinonimos != " ") {%>
<tr><td class="tablaestadosceldatitulo" colspan="2">&nbsp;<m4:label  item="SCO_NM_OTHERS"  outputdef="<%=znodo1%>"/></td></tr>
<tr><td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zsinonimos%>" htmlsafe="true"/></td></tr>
<%}%>
<%if (zvalorresumen != "" && zvalorresumen != null && zvalorresumen != " ") {%>
<tr><td class="tablaestadosceldatitulo" colspan="2">&nbsp;<m4:label  item="STD_SUMMARY"  outputdef="<%=znodo1%>"/></td></tr>
<tr><td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zresumen%>" htmlsafe="true"/></td></tr>
<%}%>


<tr><td class="tablaestadosceldatitulo">&nbsp;Mobilit&eacute; nationale </td>
<td class="tablaestadosceldatitulo">&nbsp;Mobilit&eacute; internationale</td></tr>
<tr><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zmovilidadnac%>" htmlsafe="true"/></td>
<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zmovilidadint%>" htmlsafe="true"/></td></tr>
</table>		
<%}else{%>
<div class="fuentenodatos" align="center">Cet emploi ne dispose pas de description.</div><br /><br />
<%}if (zcountires > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr><td class="tablaestadosceldatitulo">&nbsp;T&acirc;ches</td></tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountires).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();%>
<tr><td colspan="2" class="fuentevalor"><m4:item m4name="<%=zresponsabilidad%>" htmlsafe="true"/></td></tr>
</m4:loop>
</table>
<%}if (zcounticon > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Connaissances</td>
	<td class="tablaestadosceldatitulo">&nbsp;Niveau</td>
	<td class="tablaestadosceldatitulo">&nbsp;Importance relative</td>
</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcounticon).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();%>
<tr>
	<td class="fuentevalor"><a href="javascript:formacion('<m4:item m4name="<%=zextd%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zlevel%>" jsafe="true" htmlsafe="true"/>');" title="Formation disponible"><m4:item m4name="<%=zconocimiento%>" htmlsafe="true"/></a></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivel%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpeso%>" htmlsafe="true"/></td>
</m4:loop>
</table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc2.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zextd" name="zextd"  />
<input type="hidden" id="zlevel" name="zlevel"  />
</form>	
<%}if (zcountihis > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Formation</td>
	<td class="tablaestadosceldatitulo">&nbsp;Sp&eacute;cialisation</td>
	<td class="tablaestadosceldatitulo">&nbsp;Dipl&ocirc;me</td>
</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountihis).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();%>
<tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=ztipoformacion%>" htmlsafe="true"/></td>		
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zespecialidad%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=ztitulacion%>" htmlsafe="true"/></td>
<tr>
</m4:loop>
</table>		
<%}if (zcountiidi > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Langue</td>
	<td class="tablaestadosceldatitulo">&nbsp;Niveau parl&eacute;</td>
	<td class="tablaestadosceldatitulo">&nbsp;Niveau lu</td>
	<td class="tablaestadosceldatitulo">&nbsp;Niveau &eacute;crit</td>
</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountiidi).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();%>
<tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zidioma%>" htmlsafe="true"/></td>		
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivelhabla%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivellee%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=znivelescribe%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>		
<%}if (zcountiexp > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Emplois ant&eacute;rieurs requis</td>
	<td class="tablaestadosceldatitulo">&nbsp;Dur&eacute;e minimale</td>
</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountiexp).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();%>
<tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpuestoprevio%>" htmlsafe="true"/></td>		
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zperiodo%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zunidadtiempo%>" htmlsafe="true"/></td>
<tr>
</m4:loop>
</table>		
<%}if (zcounticer > 0) {%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Permis et attestations</td>
	<td class="tablaestadosceldatitulo">&nbsp;Organisme &eacute;metteur</td>
	<td class="tablaestadosceldatitulo">&nbsp;Pays &eacute;metteur</td>
</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcounticer).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();%>
<tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zcertificado%>" htmlsafe="true"/></td>		
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zentidad%>" htmlsafe="true"/></td>		
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zpais%>" htmlsafe="true"/></td>		
<tr>
</m4:loop>
</table>
<%}%>
<%if (zVis.equals("1")){%>
<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
<%}%>
</div>
</body>
<m4:endpage/>
