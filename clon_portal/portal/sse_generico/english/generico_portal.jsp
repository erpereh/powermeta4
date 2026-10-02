<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ page import="com.meta4.configuration.*" %>
<title>ESS Portal</title>
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
<%@ include file="../../sse_generico/english/menu_ess.jsp" %>
<%@ include file="/sse_g3/sse_g3_trans.jsp"%>	
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>	
<%@ include file="/sse_g3/ssco_iv_trans.jsp"%>	
<%@ include file="generico_menusup.jsp" %>
<%@ include file="generico_links.jsp" %>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2">Employee Self-Service</td></tr>
<tr>
	<td class="descripcionfuncional">Use the modules in this application to manage your personal, financial, and professional information.&nbsp;</td>
</tr>
</table>
<br />
<table width="100%" cellspacing="0"><tr><td>
<table width="100%" cellspacing="0">
<tr>
	<td colspan="2" class="fuentetitulomenu">My Tasks</td>
	<td width="30%"></td>
</tr>
<tr>
	<td colspan="2"  class="tablamenuleft"><hr class="barramenu" /></td>
	<td width="30%"></td>
</tr>
<tr>
	<td><img src="/iconos/noname_lista_73_120.gif" width="73" height="120" alt="My Tasks" title="My Tasks" /></td>
	<td class="fuentedescripcion">In this option you can either see and manage the tasks that are pending and the data validation requests made by your employees.
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="My Tasks" href="/servlet/CheckSecurity/JSP/sse_generico/ssegenerico_pendientes.jsp?estado=0">My Tasks</a></li>
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
	<td colspan="2" class="fuentetitulomenu">My Personal Information</td>
	
</tr>
<tr>
	<td width="30%"></td>
	<td colspan="2" ><hr class="barramenu" /></td>
	
</tr>
<tr>
	<td width="30%"></td>
	<td class="fuentedescripcion">Use this module to view or modify your person information, as well as the information on your academic and professional background.
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="My Personal Information" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1">My Personal Information</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="My Person Information" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11">My Person Information</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="My Professional Information" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11">My Professional Information</a></li>
		</ul>
	</td>
	<td><img src="/iconos/noname_hombre_50_100.gif" width="50" height="100" alt="My Personal Information" title="My Personal Information" /></td>
	
</tr>
</table>
</td></tr>
<tr><td>
<table width="100%" cellspacing="0">
<tr>
	
	<td width="70%" colspan="2" class="fuentetitulomenu">My Financial Information</td>
	<td width="30%"></td>
</tr>
<tr>
	
	<td width="70%" colspan="2"><hr class="barramenu" /></td>
	<td width="30%"></td>
</tr>
<tr>
	<td><img src="/iconos/noname_mujer_cajero_73_100.gif" width="73" height="100" alt="My Financial Information"title="My Financial Information" /></td>
	<td class="fuentedescripcion">Use this module to view or modify your bank account number, add additional accounts, or view your payslips. You can also view your loans and request a new one.
	<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="My Financial Information" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2">My Financial Information</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Main Bank Account" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21">Main Bank Account</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Additional Accounts" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21">Additional Accounts</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Most-Recent Payslips" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p4.jsp?estado=21">Most-Recent Payslips</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Loans" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_P.jsp?estado=21">Loans</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=Tran.getProperty("bft_ess.Benefits")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21"><%=Tran.getProperty("bft_ess.Benefits")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="My Compensation" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p10.jsp?estado=21">My Compensation</a></li>
	</ul>
	</td>
	<td width="30%"></td>
	
</tr>
</table>
</td></tr>
<tr><td>
<table width="100%" cellspacing="0">
<tr><td width="30%"></td><td colspan="2" class="fuentetitulomenu">My Job</td></tr>
<tr><td width="30%"></td><td width="70%" colspan="2"><hr class="barramenu" /></td></tr>
<tr>
	<td width="30%">
	<%if(zIS_KNOWNET.equals("0")){%>
	<td class="descripcionfuncional">In this module you can see your Job History, your Career Plan, Your Appraisal Processes and teh Internal Mobility available in the company. You can also access the documentation related to a course, participate in forums created for the courses in which you have enrolled, and find experts in a particular Extended Knowledge.</div> Also by means of internal communication, you can view news and the Company Policy.
	<% } else { %>
	<td class="descripcionfuncional">Use this module to view your job history, check your career plan, and consult the internal mobility available in the company. You can also request training courses and consult your appraisal processes.
	<%}%>
	<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="My Job" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3">My Job</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title ="Job History"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31">Job History</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Career Plan" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31">Career Plan</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=sse_g3Ess.getProperty("Link.ssco_g3_p23")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23.jsp?estado=31"><%=sse_g3Ess.getProperty("Link.ssco_g3_p23")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.Val")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate.jsp"><%=TranEss.getProperty("ev_ess.Val")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.Obj")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31"><%=TranEss.getProperty("ev_ess.Obj")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.TitValObj")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31"><%=TranEss.getProperty("ev_ess.TitValObj")%></a></li>		
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.LinkHistEv")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31"><%=TranEss.getProperty("ev_ess.LinkHistEv")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.TitleProc")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp"><%=TranEss.getProperty("ev_ess.TitleProc")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.EvSeg")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_seg_filter.jsp"><%=TranEss.getProperty("ev_ess.EvSeg")%></a></li>		
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Training Catalogue" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31">Training Catalogue</a></li>
	<%if(zIS_KNOWNET.equals("0")){%>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Forum" href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=31&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=YES">Forum</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Training Documentation" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=1" idprovider="<%=aux_provider%>"/>'>Training Documentation</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Experts" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>'>Experts</a></li>
	<%};%>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Internal Mobility" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31">Internal Mobility</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "<%=tranivESS.getProperty("iv_ess.Interview")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31"><%=tranivESS.getProperty("iv_ess.Interview")%></a></li>
	<%if(zIS_KNOWNET.equals("0")){%>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Internal Communications" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=2" idprovider="<%=aux_provider%>"/>'>Internal Communications</a></li>
	<%};%>	
	</ul>
	</td>
	<td><img src="/iconos/noname_hombre_profesional_48_100.gif" width="48" height="100" alt="My Job"title="My Job" /></td>
</tr>
</table>
</td></tr>
<tr><td>
<table width="100%" cellspacing="0">
<tr><td width="70%" colspan="2" class="fuentetitulomenu">My Work Time</td><td width="30%"></td></tr>
<tr><td width="70%" colspan="2"><hr class="barramenu" /></td><td width="30%"></td></tr>
<tr><td><img src="/iconos/noname_tiempo_trabajo_ 73_100.gif" width="73" height="100" alt="My Work Time"title="My Work Time" /></td>
	<td class="fuentedescripcion">Use this module to view or request holidays, as well as to consult the company holiday calendar and your absences.
	<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="My Work Time" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4">My Work Time</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title ="Holidays" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2.jsp?estado=41">Holidays</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Holiday Calendar" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p3.jsp?estado=41">Holiday Calendar</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Absences" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p1.jsp?estado=41">Absences</a></li>
	</ul>
	</td>
	<td width="30%"></td>
</tr>
</table>
</td></tr>
<%if(zIS_KNOWNET.equals("0")){%>
<tr><td>
<table width="100%" cellspacing="0">
<tr><td width="30%"></td><td colspan="2" class="fuentetitulomenu">My Knowledge</td></tr>
<tr><td width="30%"></td><td colspan="2"><hr class="barramenu" /></td></tr>
<tr>
<td width="30%"></td>
<td class="descripcionfuncional">Use this module to view your personal knowledge distribution, define your distribution rules, participate in forums, find experts in an area of knowledge, and search for a document using the search.
<ul class="listaenlace">
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="My Knowledge" href="/servlet/CheckSecurity/JSP/sse_g5/sse_g5_menu.jsp?estado=5">My Knowledge</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Forum" href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=51&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=NO">Forum</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Search" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_EXTENDED_SEARCH_JAV/LIGHT_EXTENDED_SEARCH.jsp" idprovider="<%=aux_provider%>"/>'>Search</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Distribution Rule Creation" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_PERS_PREF_JAV/LIGHT_NEW_D_PERS_PREF.jsp" idprovider="<%=aux_provider%>"/>'>Distribution Rule Creation</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Personal Distribution" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=ALL" idprovider="<%=aux_provider%>"/>'>Personal Distribution</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Experts" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>'>Experts</a></li>
</ul>
</td>
<td><img src="/iconos/noname_hombre_conocimiento_66_100.gif" width="66" height="100" alt="My Knowledge"title="My Knowledge" /></td>
</tr>
</table>
</td></tr>
<%}%>
</table>
<%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
<m4:endpage/>
</body>