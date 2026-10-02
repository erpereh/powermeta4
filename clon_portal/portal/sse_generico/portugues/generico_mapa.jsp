<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<title>Lista de funcionalidades</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>	
<%@ include file="/sse_g3/sse_train_trans.jsp"%>	
<%@ include file="/sse_g3/ssco_iv_trans.jsp"%>	
<%@ include file="/sse_g1/sse_g1_trans.jsp"%>	
<%@ include file="/sse_g3/sse_g3_trans.jsp"%>
<%
        String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
%>
<%
M4SessionCl zsesion1 = M4Context.getM4SessionCl(request);
String Knownet = zsesion1.getBagEntries("IsKnownet");
String aux_provider = zsesion1.getBagEntries("aux_provider");
%>
</head>
<body>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<table border="1" class="tablamapa" width="100%" cellspacing="0">
<tr class="fuentetitulomapa">
	<td colspan="2" nowrap="nowrap">&nbsp;<br /><a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">A minha informa&ccedil;&atilde;o pessoal</a><br />&nbsp;</td>
	<td colspan="2" nowrap="nowrap"><a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Os meus dados financeiros&nbsp;</a></td>
	<td colspan="2" nowrap="nowrap"><a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">O meu posto de trabalho</a></td>
	<td colspan="2" nowrap="nowrap"><a href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">O meu tempo de trabalho</a></td>
	<%if(Knownet.equals("0")){%>
<td colspan="2" nowrap="nowrap"><a href="/servlet/CheckSecurity/JSP/sse_g5/sse_g5_menu.jsp?estado=5" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">O meu conhecimento</a></td>
<%}%>
</tr>
<tr>
	<td colspan="2" class="fuentemapa" valign="top">
		&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Os meus dados pessoais</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=12" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Morada fiscal</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=12" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">N&uacute;mero de telefone</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=12" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">E-mail</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=12" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Outras moradas</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod5.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod5Des")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod6.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod6Des")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod7.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod7Des")%></a>		
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Os meus dados profissionais</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod.jsp?estado=11" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">T&iacute;tulos</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Idiomas</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod3.jsp?estado=11" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Experi&ecirc;ncia profissional</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod4.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4Des")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod5.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod6.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod7.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod7Des")%></a>

	</td>
	<td colspan="2" class="fuentemapa" valign="top">
		&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Conta banc&aacute;ria principal</a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Outras contas banc&aacute;rias</a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p4.jsp?estado=21" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">&Uacute;ltimos recibos</a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_P.jsp?estado=21" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Empr&eacute;stimos</a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=Tran.getProperty("bft_ess.Benefits")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21&vista=0" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=Tran.getProperty("bft_ess.SimulBenef")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21&vista=1" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=Tran.getProperty("bft_ess.SolicBenef")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p11.jsp?estado=21&vista=1" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=Tran.getProperty("bft_ess.HistBenef")%></a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p10.jsp?estado=21" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=Tran.getProperty("bft_ess.BenefitsSal")%></a>
	</td>
	<td colspan="2" class="fuentemapa" valign="top">
		&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Historial de postos</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Plano de carreira</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p22.jsp?estado=31" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Os meus conhecimentos</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23.jsp?estado=31" title="<%=sse_g3Ess.getProperty("Link.ssco_g3_p23")%>"><%=sse_g3Ess.getProperty("Link.ssco_g3_p23")%></a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranEss.getProperty("ev_ess.Val")%></a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_1.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Avaliadores para os seus processos</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Objectivos</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranEss.getProperty("ev_ess.TitValObj")%></a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Historial de avalia&ccedil;&atilde;o</a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranEss.getProperty("ev_ess.TitleProc")%></a>

		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranEss.getProperty("ev_ess.EvSeg")%></a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Cat&aacute;logo de forma&ccedil;&atilde;o</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p7.jsp?estado=31" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Inscri&ccedil;&otilde;es em cursos</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Avalia&ccedil;&atilde;o de cursos</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p21.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TrainEss.getProperty("Label.HistTrain")%></a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Mobilidade interna</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2_vis.jsp?estado=31" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Pedidos de mobilidade</a>
		<%if(Knownet.equals("0")){%>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=31&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=YES" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">F&oacute;rum</a>
		<br />&nbsp;*&nbsp;<a href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=1" idprovider="<%=aux_provider%>"/>' title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Documenta&ccedil;&atilde;o de forma&ccedil;&atilde;o</a>
		<br />&nbsp;*&nbsp;<a href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>' title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Expertos</a>
		<%}%>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=tranivESS.getProperty("iv_ess.Interview")%></a>
		<%if(Knownet.equals("0")){%>
		<br /><br />&nbsp;*&nbsp;<a href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=2" idprovider="<%=aux_provider%>"/>' title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Comunica&ccedil;&atilde;o interna</a>
		<%}%>
	</td>
	<td colspan="2" class="fuentemapa" valign="top">
		&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2.jsp?estado=41" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">F&eacute;rias</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p3.jsp?estado=41" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Calend&aacute;rio de feriados</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p1.jsp?estado=41" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Faltas ao trabalho</a>
	</td>
	<%if(Knownet.equals("0")){%>
	<td colspan="2" class="fuentemapa" valign="top">
	&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=51&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=NO" title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">F&oacute;rum</a>
	<br /><br />&nbsp;*&nbsp;<a href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_EXTENDED_SEARCH_JAV/LIGHT_EXTENDED_SEARCH.jsp" idprovider="<%=aux_provider%>"/>' title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Pesquisa</a>
	<br /><br />&nbsp;*&nbsp;<a href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_PERS_PREF_JAV/LIGHT_NEW_D_PERS_PREF.jsp" idprovider="<%=aux_provider%>"/>' title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Cria&ccedil;&atilde;o de regras de distribui&ccedil;&atilde;o</a>
	<br /><br />&nbsp;*&nbsp;<a href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=ALL" idprovider="<%=aux_provider%>"/>' title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Distribui&ccedil;&atilde;o personalizada</a>
	<br /><br />&nbsp;*&nbsp;<a href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>' title="Liga&ccedil;&atilde;o directa &agrave; p&aacute;gina">Expertos</a>
	</td>
	<%}%>
</tr>
</table>
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>
