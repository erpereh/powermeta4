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
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
<%@ include file="/sse_g3/sse_g3_trans.jsp"%>	
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>	
<%@ include file="/sse_g3/ssco_iv_trans.jsp"%>	
<%@ include file="generico_menusup.jsp" %>
<%@ include file="generico_links.jsp" %>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2">Self service do empregado</td></tr>
<tr>
	<td class="descripcionfuncional">Nos quatro m&oacute;dulos da aplica&ccedil;&atilde;o pode gerir toda a informa&ccedil;&atilde;o relacionada com os seus dados pessoais, financeiros e laborais.&nbsp;</td>
</tr>
</table>
<br />
<table width="100%" cellspacing="0"><tr><td>
<table width="100%" cellspacing="0">
<tr>
	<td colspan="2" class="fuentetitulomenu">As minhas tarefas</td>
	<td width="30%"></td>
</tr>
<tr>
	<td colspan="2"  class="tablamenuleft"><hr class="barramenu" /></td>
	<td width="30%"></td>
</tr>
<tr>
	<td><img src="/iconos/noname_lista_73_120.gif" width="73" height="120" alt="As minhas tarefas" title="As minhas tarefas" /></td>
	<td class="fuentedescripcion">Nesta op&ccedil;&atilde;o as tarefas pode consultar e gerir as tarefas que tem pendente, ass&iacute;m como os pedidos de valida&ccedil;&atilde;o de dados que t&ecirc;m solicitado os seus empregados.
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="As minhas tarefas" href="/servlet/CheckSecurity/JSP/sse_generico/ssegenerico_pendientes.jsp?estado=0">As minhas tarefas</a></li>
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
	<td colspan="2" class="fuentetitulomenu">A minha informa&ccedil;&atilde;o pessoal</td>
	
</tr>
<tr>
	<td width="30%"></td>
	<td colspan="2" ><hr class="barramenu" /></td>
	
</tr>
<tr>
	<td width="30%"></td>
	<td class="fuentedescripcion">Neste m&oacute;dulo pode consultar ou modificar os seus dados pessoais, bem como todos os elementos relativos ao seu curr&iacute;culo acad&eacute;mico e profissional.
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="A minha informa&ccedil;&atilde;o pessoal" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1">A minha informa&ccedil;&atilde;o pessoal</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Os meus dados pessoais" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11">Os meus dados pessoais</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Os meus dados profissionais" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11">Os meus dados profissionais</a></li>
		</ul>
	</td>
	<td><img src="/iconos/noname_hombre_50_100.gif" width="50" height="100" alt="A minha informa&ccedil;&atilde;o pessoal" title="A minha informa&ccedil;&atilde;o pessoal" /></td>
	
</tr>
</table>
</td></tr>
<tr><td>
<table width="100%" cellspacing="0">
<tr>
	
	<td width="70%" colspan="2" class="fuentetitulomenu">Os meus dados financeiros</td>
	<td width="30%"></td>
</tr>
<tr>
	
	<td width="70%" colspan="2"><hr class="barramenu" /></td>
	<td width="30%"></td>
</tr>
<tr>
	<td><img src="/iconos/noname_mujer_cajero_73_100.gif" width="73" height="100" alt="Os meus dados financeiros"title="Os meus dados financeiros" /></td>
	<td class="fuentedescripcion">Neste m&oacute;dulo pode consultar ou modificar o n&uacute;mero da sua conta banc&aacute;ria, criar outras contas ou consultar os seus recibos de sal&aacute;rio. Tamb&eacute;m pode consultar os seus empr&eacute;stimos, assim como solicitar um novo empr&eacute;stimo.
	<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Os meus dados financeiros" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2">Os meus dados financeiros</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Conta banc&aacute;ria principal" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21">Conta banc&aacute;ria principal</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Outras contas banc&aacute;rias" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21">Outras contas banc&aacute;rias</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="&Uacute;ltimos recibos" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p4.jsp?estado=21">&Uacute;ltimos recibos</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="Empr&eacute;stimos" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_P.jsp?estado=21">Empr&eacute;stimos</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=Tran.getProperty("bft_ess.Benefits")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21"><%=Tran.getProperty("bft_ess.Benefits")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="O meu pacote retributivo" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p10.jsp?estado=21">O meu pacote retributivo</a></li>
	</ul>
	</td>
	<td width="30%"></td>
	
</tr>
</table>
</td></tr>
<tr><td>
<table width="100%" cellspacing="0">
<tr><td width="30%"></td><td colspan="2" class="fuentetitulomenu">O meu posto de trabalho</td></tr>
<tr><td width="30%"></td><td width="70%" colspan="2"><hr class="barramenu" /></td></tr>
<tr>
	<td width="30%">
	<%if(zIS_KNOWNET.equals("0")){%>
	<td class="descripcionfuncional">Neste m&oacute;dulo pode consultar seu hist&oacute;rico de postos, o seu plano de carreira, os seus processos de avalia&ccedil;&atilde;o e a mobilidade interna que h&aacute; na empresa. Tamb&eacute;m pode solicitar cursos de forma&ccedil;&atilde;o, aceder a documenta&ccedil;&atilde;o relacionada com um curso, participar em f&oacute;runs criados para os cursos nos quais est&aacute; inscrito, e encontrar especialistas para um determinado conhecimento. Tamb&eacute;m pode consultar as not&iacute;cias e a pol&iacute;tica da empresa atrav&eacute;s da comunica&ccedil;&atilde;o interna.
	<%}else{%>
	<td class="descripcionfuncional">Neste m&oacute;dulo pode consultar o seu historial de postos, o seu plano de carreira e a mobilidade interna dispon&iacute;vel na sua empresa. Tamb&eacute;m pode solicitar cursos de forma&ccedil;&atilde;o e consultar os seus processos de avalia&ccedil;&atilde;o.
	<%}%>
	<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="O meu posto de trabalho" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3">O meu posto de trabalho</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Historial de postos" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31">Historial de postos</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Plano de carreira" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31">Plano de carreira</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=sse_g3Ess.getProperty("Link.ssco_g3_p23")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23.jsp?estado=31"><%=sse_g3Ess.getProperty("Link.ssco_g3_p23")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.Val")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate.jsp"><%=TranEss.getProperty("ev_ess.Val")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.Obj")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31"><%=TranEss.getProperty("ev_ess.Obj")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.TitValObj")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31"><%=TranEss.getProperty("ev_ess.TitValObj")%></a></li>		
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.LinkHistEv")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31"><%=TranEss.getProperty("ev_ess.LinkHistEv")%></a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.TitleProc")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp"><%=TranEss.getProperty("ev_ess.TitleProc")%></a></li>

		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=TranEss.getProperty("ev_ess.EvSeg")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_seg_filter.jsp"><%=TranEss.getProperty("ev_ess.EvSeg")%></a></li>		
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Cat&aacute;logo de forma&ccedil;&atilde;o" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31">Cat&aacute;logo de forma&ccedil;&atilde;o</a></li>
	<%if(zIS_KNOWNET.equals("0")){%>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "F&oacute;rum" href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=31&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=YES">F&oacute;rum</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Documenta&ccedil;&atilde;o de forma&ccedil;&atilde;o" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=1" idprovider="<%=aux_provider%>"/>'>Documenta&ccedil;&atilde;o de forma&ccedil;&atilde;o</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Expertos" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>'>Expertos</a></li>
	<%};%>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Mobilidade interna" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31">Mobilidade interna</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "<%=tranivESS.getProperty("iv_ess.Interview")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31"><%=tranivESS.getProperty("iv_ess.Interview")%></a></li>
	<%if(zIS_KNOWNET.equals("0")){%>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Comunica&ccedil;&atilde;o interna" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=2" idprovider="<%=aux_provider%>"/>'>Comunica&ccedil;&atilde;o interna</a></li>
	<%};%>	
	</ul>
	</td>
	<td><img src="/iconos/noname_hombre_profesional_48_100.gif" width="48" height="100" alt="O meu posto de trabalho"title="O meu posto de trabalho" /></td>
</tr>
</table>
</td></tr>
<tr><td>
<table width="100%" cellspacing="0">
<tr><td width="70%" colspan="2" class="fuentetitulomenu">O meu tempo de trabalho</td><td width="30%"></td></tr>
<tr><td width="70%" colspan="2"><hr class="barramenu" /></td><td width="30%"></td></tr>
<tr><td><img src="/iconos/noname_tiempo_trabajo_ 73_100.gif" width="73" height="100" alt="O meu tempo de trabalho"title="O meu tempo de trabalho" /></td>
	<td class="fuentedescripcion">Neste m&oacute;dulo pode consultar ou solicitar f&eacute;rias, bem como consultar o calend&aacute;rio de feriados da empresa e verificar as suas aus&ecirc;ncias.
	<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="O meu tempo de trabalho" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4">O meu tempo de trabalho</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title ="F&eacute;rias" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2.jsp?estado=41">F&eacute;rias</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Calend&aacute;rio de feriados" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p3.jsp?estado=41">Calend&aacute;rio de feriados</a></li>
		<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Faltas ao trabalho" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p1.jsp?estado=41">Faltas ao trabalho</a></li>
	</ul>
	</td>
	<td width="30%"></td>
</tr>
</table>
</td></tr>
<%if(zIS_KNOWNET.equals("0")){%>
<tr><td>
<table width="100%" cellspacing="0">
<tr><td width="30%"></td><td colspan="2" class="fuentetitulomenu">O meu conhecimento</td></tr>
<tr><td width="30%"></td><td colspan="2"><hr class="barramenu" /></td></tr>
<tr>
<td width="30%"></td>
<td class="descripcionfuncional">Neste m&oacute;dulo pode consultar a sua distribui&ccedil;&atilde;o pessoal do conhecimento, definir as suas regras de distribui&ccedil;&atilde;o, participar em f&oacute;runs, pesquisar especialistas de uma &aacute;rea de conhecimento, e encontrar um documento usando a pesquisa.
<ul class="listaenlace">
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="O meu conhecimento" href="/servlet/CheckSecurity/JSP/sse_g5/sse_g5_menu.jsp?estado=5">O meu conhecimento</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "F&oacute;rum" href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=51&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=NO">F&oacute;rum</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Pesquisa" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_EXTENDED_SEARCH_JAV/LIGHT_EXTENDED_SEARCH.jsp" idprovider="<%=aux_provider%>"/>'>Pesquisa</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Cria&ccedil;&atilde;o de regras de distribui&ccedil;&atilde;o" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_PERS_PREF_JAV/LIGHT_NEW_D_PERS_PREF.jsp" idprovider="<%=aux_provider%>"/>'>Cria&ccedil;&atilde;o de regras de distribui&ccedil;&atilde;o</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Distribui&ccedil;&atilde;o personalizada" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=ALL" idprovider="<%=aux_provider%>"/>'>Distribui&ccedil;&atilde;o personalizada</a></li>
<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title = "Expertos" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>'>Expertos</a></li>
</ul>
</td>
<td><img src="/iconos/noname_hombre_conocimiento_66_100.gif" width="66" height="100" alt="O meu conhecimento"title="O meu conhecimento" /></td>
</tr>
</table>
</td></tr>
<%}%>
</table>
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
<m4:endpage/>
</body>