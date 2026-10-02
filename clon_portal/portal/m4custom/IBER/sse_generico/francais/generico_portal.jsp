<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html  
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ page import="com.meta4.configuration.*" %>
<title>Portail de l'ESS</title>
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
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
<%@ include file="/sse_g3/sse_g3_trans.jsp"%>	
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>	
<%@ include file="/sse_g3/ssco_iv_trans.jsp"%>	
<%@ include file="generico_menusup.jsp" %>
<%@ include file="generico_links.jsp" %>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2">Employee self-service</td></tr>
<tr>
	<td class="descripcionfuncional">Gr&acirc;ce aux quatre modules qui composent l'application, vous administrez l'ensemble des informations personnelles, &eacute;conomiques et professionnelles vous concernant.&nbsp;</td>
</tr>
</table>
<br/>
<table width="100%" cellspacing="0"><tr><td>
<table width="100%" cellspacing="0">
<tr>
	<td colspan="2" class="fuentetitulomenu">Vos t&acirc;ches</td>
	<td width="30%"></td>
</tr>
<tr>
	<td colspan="2" class="tablamenuleft"><hr class="barramenu" /></td>
	<td width="30%"></td>
</tr>
<tr>
	<td><img src="/iconos/noname_lista_73_120.gif" width="73" height="120" alt="Vos t&acirc;ches" title="Vos t&acirc;ches" /></td>
	<td class="fuentedescripcion">Consultez et administrez ici vos t&acirc;ches en attente, parmi lesquelles figurent les demandes de validation de la part de vos collaborateurs.
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Vos t&acirc;ches" href="/servlet/CheckSecurity/JSP/sse_generico/ssegenerico_pendientes.jsp?estado=0">Vos t&acirc;ches</a></li>
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
	<td colspan="2" class="fuentetitulomenu">Votre dossier personnel</td>
	
</tr>
<tr>
	<td width="30%"></td>
	<td colspan="2" ><hr class="barramenu" /></td>
	
</tr>
<tr>
	<td width="30%"></td>
	<td class="fuentedescripcion">Consultez et modifiez ici les renseignements concernant votre personne, vos &eacute;tudes et votre exp&eacute;rience professionnelle.
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Votre dossier personnel" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1">Votre dossier personnel</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Vos renseignements personnels" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11">Vos renseignements personnels</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Vos donn&eacute;es professionnelles" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11">Vos donn&eacute;es professionnelles</a></li>
		</ul>
	</td>
	<td><img src="/iconos/noname_hombre_50_100.gif" width="50" height="100" alt="Votre dossier personnel" title="Votre dossier personnel" /></td>
	
</tr>
</table>
</td></tr>
<tr><td>
<table width="100%" cellspacing="0">
<tr>
	
	<td width="70%" colspan="2" class="fuentetitulomenu">Vos donn&eacute;es financi&egrave;res</td>
	<td width="30%"></td>
</tr>
<tr>
	
	<td width="70%" colspan="2"><hr class="barramenu" /></td>
	<td width="30%"></td>
</tr>
<tr>
	<td><img src="/iconos/noname_mujer_cajero_73_100.gif" width="73" height="100" alt="Vos donn&eacute;es financi&egrave;res"title="Vos donn&eacute;es financi&egrave;res" /></td>
	<td class="fuentedescripcion">Consultez et modifiez ici vos coordonn&eacute;es bancaires. Indiquez d'autres comptes. Retrouvez vos bulletins de paie. Effectuez des demandes de pr&ecirc;t financier, suivez vos pr&ecirc;ts accord&eacute;s.
	<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Vos donn&eacute;es financi&egrave;res" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2">Vos donn&eacute;es financi&egrave;res</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Compte bancaire principal" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21">Compte bancaire principal</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Autres comptes" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21">Autres comptes</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Derniers bulletins de paie" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p4.jsp?estado=21">Derniers bulletins de paie</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Pr&ecirc;ts financiers" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_P.jsp?estado=21">Pr&ecirc;ts financiers</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=Tran.getProperty("bft_ess.Benefits")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21"><%=Tran.getProperty("bft_ess.Benefits")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Votre r&eacute;mun&eacute;ration totale" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p10.jsp?estado=21">Votre r&eacute;mun&eacute;ration totale</a></li>
	</ul>
	</td>
	<td width="30%"></td>
	
</tr>
</table>
</td></tr>
<tr><td>
<table width="100%" cellspacing="0">
<tr><td width="30%"></td><td colspan="2" class="fuentetitulomenu">Votre emploi</td></tr>
<tr><td width="30%"></td><td width="70%" colspan="2"><hr class="barramenu" /></td></tr>
<tr>
	<td width="30%">
	<%if(zIS_KNOWNET.equals("0")){%>
	<td class="descripcionfuncional">Consultez ici vos emplois successifs ainsi que votre parcours professionnel. Suivez la mobilit&eacute; interne. Acc&eacute;dez &agrave; vos processus d'&eacute;valuation individuelle. Demandez des formations, prenez connaissance des documents relatifs &agrave; la formation souhait&eacute;e, prenez part aux forums relatifs aux formations auxquelles vous &ecirc;tes inscrit(e). Localisez les experts dans les secteurs de connaissance de votre int&eacute;r&ecirc;t. Consultez les derni&egrave;res nouvelles de votre organisation ainsi que les grands axes de sa politique institutionnelle.
	<%}else{%>
	<td class="descripcionfuncional">Consultez ici vos emplois successifs ainsi que votre parcours professionnel. Suivez la mobilit&eacute; interne. Acc&eacute;dez &agrave; vos processus d'&eacute;valuation individuelle. Demandez des formations.
	<%}%>
	<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Votre emploi" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3">Votre emploi</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Emplois successifs" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31">Emplois successifs</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Parcours professionnel" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31">Parcours professionnel</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=sse_g3Ess.getProperty("Link.ssco_g3_p23")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23.jsp?estado=31"><%=sse_g3Ess.getProperty("Link.ssco_g3_p23")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.Val")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate.jsp"><%=TranEss.getProperty("ev_ess.Val")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.Obj")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31"><%=TranEss.getProperty("ev_ess.Obj")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.TitValObj")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31"><%=TranEss.getProperty("ev_ess.TitValObj")%></a></li>		
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.LinkHistEv")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31"><%=TranEss.getProperty("ev_ess.LinkHistEv")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.TitleProc")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp"><%=TranEss.getProperty("ev_ess.TitleProc")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.EvSeg")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_seg_filter.jsp"><%=TranEss.getProperty("ev_ess.EvSeg")%></a></li>		
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Catalogue de formation" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31">Catalogue de formation</a></li>
	<%if(zIS_KNOWNET.equals("0")){%>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Forum" href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=31&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=YES">Forum</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Documentation de formation" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=1" idprovider="<%=aux_provider%>"/>'>Documentation de formation</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Experts" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>'>Experts</a></li>
	<%};%>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Mobilit&eacute; interne" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31">Mobilit&eacute; interne</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "<%=tranivESS.getProperty("iv_ess.Interview")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31"><%=tranivESS.getProperty("iv_ess.Interview")%></a></li>
	<%if(zIS_KNOWNET.equals("0")){%>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Communication interne" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=2" idprovider="<%=aux_provider%>"/>'>Communication interne</a></li>
	<%};%>	
	</ul>
	</td>
	<td><img src="/iconos/noname_hombre_profesional_48_100.gif" width="48" height="100" alt="Votre emploi"title="Votre emploi" /></td>
</tr>
</table>
</td></tr>
<tr><td>
<table width="100%" cellspacing="0">
<tr><td width="70%" colspan="2" class="fuentetitulomenu">Votre temps de travail</td><td width="30%"></td></tr>
<tr><td width="70%" colspan="2"><hr class="barramenu" /></td><td width="30%"></td></tr>
<tr><td><img src="/iconos/noname_tiempo_trabajo_ 73_100.gif" width="73" height="100" alt="Votre temps de travail"title="Votre temps de travail" /></td>
	<td class="fuentedescripcion">Consultez et demandez ici vos cong&eacute;s. Prenez connaissance du calendrier des jours f&eacute;ri&eacute;s. V&eacute;rifiez vos absences.
	<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Votre temps de travail" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4">Votre temps de travail</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title ="Cong&eacute;s" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2.jsp?estado=41">Cong&eacute;s</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Calendrier des jours f&eacute;ri&eacute;s" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p3.jsp?estado=41">Calendrier des jours f&eacute;ri&eacute;s</a></li>
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
<tr><td width="30%"></td><td colspan="2" class="fuentetitulomenu">Vos connaissances</td></tr>
<tr><td width="30%"></td><td colspan="2"><hr class="barramenu" /></td></tr>
<tr>
<td width="30%"></td>
<td class="descripcionfuncional">Relevez ici votre bo&icirc;te personnelle de r&eacute;ception de connaissances. D&eacute;finissez vos propres r&egrave;gles de distribution. Participez aux forums de connaissances. Identifiez les experts. Localisez des documents &agrave; l'aide du moteur de recherche.
<ul class="listaenlace">
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Vos connaissances" href="/servlet/CheckSecurity/JSP/sse_g5/sse_g5_menu.jsp?estado=5">Vos connaissances</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Forum" href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=51&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=NO">Forum</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Recherche" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_EXTENDED_SEARCH_JAV/LIGHT_EXTENDED_SEARCH.jsp" idprovider="<%=aux_provider%>"/>'>Recherche</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Cr&eacute;ation de r&egrave;gles de distribution" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_PERS_PREF_JAV/LIGHT_NEW_D_PERS_PREF.jsp" idprovider="<%=aux_provider%>"/>'>Cr&eacute;ation de r&egrave;gles de distribution</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Distribution personnalis&eacute;e" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=ALL" idprovider="<%=aux_provider%>"/>'>Distribution personnalis&eacute;e</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Experts" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>'>Experts</a></li>
</ul>
</td>
<td><img src="/iconos/noname_hombre_conocimiento_66_100.gif" width="66" height="100" alt="Vos connaissances"title="Vos connaissances" /></td>
</tr>
</table>
</td></tr>
<%}%>
</table>
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
<m4:endpage/>
</body>