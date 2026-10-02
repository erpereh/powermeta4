<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ page import="com.meta4.configuration.*" %>
<title>Portal SSE</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<%@ include file="../generico_formats.jsp" %>
<%
	String zsubsesion = "SSE_INICIO";
%>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
</head>
<body>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:getapplparam section="CONFIG_CW" key="SERVER_KNOWNET" output="jsp"/>
<%
	String zIS_KNOWNET = "";
	String aux_provider = (String)pageContext.getAttribute("SERVER_KNOWNET");
	if(aux_provider.equals("-1")||aux_provider.equals("NULL")){zIS_KNOWNET="1";
	}else{zIS_KNOWNET="0";}
	String Server_Peoplenet = M4ConfigClient.getElement("M4Client.SERVERWEB");
	String Port_Peoplenet = M4ConfigClient.getElement("M4Client.WEBSERVERPORT");
	String Servlet_local =  M4ConfigClient.getElement("M4Client.ThinClient.ExternalContentProvider.Local");
	String secure = String.valueOf(request.isSecure());
	String protocolo = "";
	if(secure.equals("false")){
		protocolo="http://";
	}else{
		protocolo="https://";
	}
	String Total_Server_Knownet = protocolo+Server_Peoplenet+":"+Port_Peoplenet+Servlet_local+"?_PROVIDER="+aux_provider;
	int zTab=1;
%>
<script type="text/javascript" language="Javascript1.5">
var sIsKnownet = "<%=zIS_KNOWNET%>";
var sTotal_Server_Knownet = "<%=Total_Server_Knownet%>";
</script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<%@ include file="/sse_g3/sse_g3_trans.jsp"%>	
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>	
<%@ include file="/sse_g3/ssco_iv_trans.jsp"%>	
<%@ include file="generico_menusup.jsp" %>
<%@ include file="generico_links.jsp" %>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2">Self Service del empleado</td></tr>
<tr>
	<td class="descripcionfuncional">En los cuatro m&oacute;dulos de la aplicaci&oacute;n puedes gestionar todo lo relacionado con tus datos personales, econ&oacute;micos y laborales.&nbsp;</td>
</tr>
</table>
<br />
<table width="100%" cellspacing="0"><tr><td>
<table width="100%" cellspacing="0">
<tr>
	<td colspan="2" class="fuentetitulomenu">Mis tareas</td>
	<td width="30%"></td>
</tr>
<tr>
	<td colspan="2" class="tablamenuleft"><hr class="barramenu" /></td>
	<td width="30%"></td>
</tr>
<tr>
	<td><img src="/iconos/noname_lista_73_120.gif" width="73" height="120" alt="Mis tareas" title="Mis tareas" /></td>
	<td class="fuentedescripcion">En esta opci&oacute;n las tareas puedes consultar y gestionar las tareas que  tienes pendientes, as&iacute; como las peticiones de validaci&oacute;n de datos que han solicitados tus empleados.
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Mis tareas" href="/servlet/CheckSecurity/JSP/sse_generico/ssegenerico_pendientes.jsp?estado=0">Mis tareas</a></li>
		</ul>
	</td>
	<td width="30%"></td>
</tr>
</table>
</td></tr>
<tr><td>
<table width="100%" cellspacing="0">
<tr>
	<td width="30%"></td>
	<td colspan="2" class="fuentetitulomenu">Mi informaci&oacute;n personal</td>
	
</tr>
<tr>
	<td width="30%"></td>
	<td colspan="2" ><hr class="barramenu" /></td>
	
</tr>
<tr>
	<td width="30%"></td>
	<td class="fuentedescripcion">En este m&oacute;dulo puedes consultar o modificar tus datos personales, as&iacute; como los referentes a tu historial acad&eacute;mico y profesional.
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Mi informaci&oacute;n personal" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1">Mi informaci&oacute;n personal</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Mis datos personales" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11">Mis datos personales</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Mis datos profesionales" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11">Mis datos profesionales</a></li>
		</ul>
	</td>
	<td><img src="/iconos/noname_hombre_50_100.gif" width="50" height="100" alt="Mi informaci&oacute;n personal" title="Mi informaci&oacute;n personal" /></td>
	
</tr>
</table>
</td></tr>
<tr><td>
<table width="100%" cellspacing="0">
<tr>
	
	<td width="70%" colspan="2" class="fuentetitulomenu">Mis datos econ&oacute;micos</td>
	<td width="30%"></td>
</tr>
<tr>
	
	<td width="70%" colspan="2"><hr class="barramenu" /></td>
	<td width="30%"></td>
</tr>
<tr>
	<td><img src="/iconos/noname_mujer_cajero_73_100.gif" width="73" height="100" alt="Mis datos econ&oacute;micos"title="Mis datos econ&oacute;micos" /></td>
	<td class="fuentedescripcion">En este m&oacute;dulo puedes consultar o modificar el n&uacute;mero de tu cuenta bancaria, agregar otras o consultar tus recibos de n&oacute;mina. Tambi&eacute;n puedes consultar tus pr&eacute;stamos, as&iacute; como solicitar uno nuevo.
	<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Mis datos econ&oacute;micos" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2">Mis datos econ&oacute;micos</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Cuenta bancaria principal" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21">Cuenta bancaria principal</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Otras cuentas" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21">Otras cuentas</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="&Uacute;ltimos recibos" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p4.jsp?estado=21">&Uacute;ltimos recibos</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Certificado de Haberes" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab.jsp?estado=21">Certificado de Haberes</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Pr&eacute;stamos" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_P.jsp?estado=21">Pr&eacute;stamos</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=Tran.getProperty("bft_ess.Benefits")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21"><%=Tran.getProperty("bft_ess.Benefits")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Mi paquete retributivo" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p10.jsp?estado=21">Mi paquete retributivo</a></li>
	</ul>
	</td>
	<td width="30%"></td>
	
</tr>
</table>
</td></tr>
<tr><td>
<table width="100%" cellspacing="0">
<tr><td width="30%"></td><td colspan="2" class="fuentetitulomenu">Mi puesto de trabajo</td></tr>
<tr><td width="30%"></td><td width="70%" colspan="2"><hr class="barramenu" /></td></tr>
<tr>
	<td width="30%">
	<%if(zIS_KNOWNET.equals("0")){%>
	<td class="descripcionfuncional">En este m&oacute;dulo puedes consultar tu historial de puestos, tu plan de carrera, tus procesos de  evaluaci&oacute;n y la movilidad interna que hay en la empresa. Tambi&eacute;n puedes solicitar cursos de formaci&oacute;n ,acceder  a documentaci&oacute;n relacionada con un curso, participar en foros creados para los cursos en los que estas inscrito, y encontrar expertos para un determinado conocimiento. Tambi&eacute;n puedes consultar las noticias y la pol&iacute;tica de la empresa a trav&eacute;s de la comunicaci&oacute;n interna.
	<%}else{%>
	<td class="descripcionfuncional">En este m&oacute;dulo puedes consultar tu historial de puestos, tu plan de carrera y la movilidad interna que hay en tu empresa; tambi&eacute;n puedes solicitar cursos de formaci&oacute;n y consultar tus procesos de evaluaci&oacute;n.
	<%}%>
	<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Mi puesto de trabajo" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3">Mi puesto de trabajo</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Historial de puestos" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31">Historial de puestos</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Plan de carrera" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31">Plan de carrera</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=sse_g3Ess.getProperty("Link.ssco_g3_p23")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23.jsp?estado=31"><%=sse_g3Ess.getProperty("Link.ssco_g3_p23")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.Val")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate.jsp"><%=TranEss.getProperty("ev_ess.Val")%></a></li>		
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.Obj")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31"><%=TranEss.getProperty("ev_ess.Obj")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.TitValObj")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31"><%=TranEss.getProperty("ev_ess.TitValObj")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.LinkHistEv")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31"><%=TranEss.getProperty("ev_ess.LinkHistEv")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.TitleProc")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp"><%=TranEss.getProperty("ev_ess.TitleProc")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.EvSeg")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_seg_filter.jsp"><%=TranEss.getProperty("ev_ess.EvSeg")%></a></li>		
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Cat&aacute;logo de formaci&oacute;n" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31">C&aacute;talogo de formaci&oacute;n</a></li>
	<%if(zIS_KNOWNET.equals("0")){%>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Foro" href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=31&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=YES">Foro</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Documentaci&oacute;n de formaci&oacute;n" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=1" idprovider="<%=aux_provider%>"/>'>Documentaci&oacute;n de formaci&oacute;n</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Expertos" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>'>Expertos</a></li>
	<%};%>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Movilidad interna" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31">Movilidad interna</a></li>		
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "<%=tranivESS.getProperty("iv_ess.Interview")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31"><%=tranivESS.getProperty("iv_ess.Interview")%></a></li>
	<%if(zIS_KNOWNET.equals("0")){%>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Comunicaci&oacute;n interna" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=2" idprovider="<%=aux_provider%>"/>'>Comunicaci&oacute;n interna</a></li>
	<%};%>	
	</ul>
	</td>
	<td><img src="/iconos/noname_hombre_profesional_48_100.gif" width="48" height="100" alt="Mi puesto de trabajo"title="Mi puesto de trabajo" /></td>
</tr>
</table>
</td></tr>
<tr><td>
<table width="100%" cellspacing="0">
<tr><td width="70%" colspan="2" class="fuentetitulomenu">Mi tiempo de trabajo</td><td width="30%"></td></tr>
<tr><td width="70%" colspan="2"><hr class="barramenu" /></td><td width="30%"></td></tr>
<tr><td><img src="/iconos/noname_tiempo_trabajo_ 73_100.gif" width="73" height="100" alt="Mi tiempo de trabajo"title="Mi tiempo de trabajo" /></td>
	<td class="fuentedescripcion">En este m&oacute;dulo puedes consultar o solicitar  vacaciones, as&iacute; como consultar el calendario de festivos de la empresa y comprobar tus ausencias.
	<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Mi tiempo de trabajo" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4">Mi tiempo de trabajo</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title ="Vacaciones" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2.jsp?estado=41">Vacaciones</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Calendario de festivos" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p3.jsp?estado=41">Calendario de festivos</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Ausencias laborales" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p1.jsp?estado=41">Ausencias laborales</a></li>
	</ul>
	</td>
	<td width="30%"></td>
</tr>
</table>
</td></tr>
<%if(zIS_KNOWNET.equals("0")){%>
<tr><td>
<table width="100%" cellspacing="0">
<tr><td width="30%"></td><td colspan="2" class="fuentetitulomenu">Mi conocimiento</td></tr>
<tr><td width="30%"></td><td colspan="2"><hr class="barramenu" /></td></tr>
<tr>
<td width="30%"></td>
<td class="descripcionfuncional">En este m&oacute;dulo puedes consultar tu distribuci&oacute;n personal del conocimiento, definir tus reglas de distribuci&oacute;n, participar en foros, buscar expertos de un &aacute;rea de conocimiento, y encontrar un documento usando la b&uacute;squeda.
<ul class="listaenlace">
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Mi conocimiento" href="/servlet/CheckSecurity/JSP/sse_g5/sse_g5_menu.jsp?estado=5">Mi conocimiento</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Foro" href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=51&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=NO">Foro</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "B&uacute;squeda" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_EXTENDED_SEARCH_JAV/LIGHT_EXTENDED_SEARCH.jsp" idprovider="<%=aux_provider%>"/>'>B&uacute;squeda</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Creaci&oacute;n de reglas de distribuci&oacute;n" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_PERS_PREF_JAV/LIGHT_NEW_D_PERS_PREF.jsp" idprovider="<%=aux_provider%>"/>'>Creaci&oacute;n de reglas de distribuci&oacute;n</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Distribuci&oacute;n personalizada" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=ALL" idprovider="<%=aux_provider%>"/>'>Distribuci&oacute;n personalizada</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Expertos" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>'>Expertos</a></li>
</ul>
</td>
<td><img src="/iconos/noname_hombre_conocimiento_66_100.gif" width="66" height="100" alt="Mi conocimiento"title="Mi conocimiento" /></td>
</tr>
</table>
</td></tr>
<%}%>
</table>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
<m4:endpage/>
</body>