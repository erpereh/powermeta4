<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html  
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>

<title>Liste des fonctionnalités</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>	
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<%@ include file="/mss_g3/smco_iv_trans.jsp"%>
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
<%@ include file="/mss_g3/mss_g3_trans.jsp"%>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%

    String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
%>
</head>
<body>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<table border="1" class="tablamapa" width="100%" cellspacing="0">
<tr class="fuentetitulomapa">
	<td colspan="2" nowrap="nowrap">&nbsp;<br /><a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_menu.jsp?estado=1" title="<%=Tran.getProperty("Label.LblEnlace")%>">Dossiers personnels</a><br />&nbsp;</td>
	<td colspan="2" nowrap="nowrap"><a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu.jsp?estado=2" title="<%=Tran.getProperty("Label.LblEnlace")%>">Donn&eacute;es financi&egrave;res</a></td>
	<td colspan="2" nowrap="nowrap"><a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu_comp.jsp?estado=3" title="<%=Tran.getProperty("Label.LblEnlace")%>">R&eacute;vision de la r&eacute;mun&eacute;ration</a></td>
</tr>
<tr>
	<td colspan="2" class="fuentemapa" valign="top">
		&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>">Renseignements personnels</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>">Validez les adresses principales</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>">Validez les t&eacute;l&eacute;phones</a>	
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>">Validez les adresses &eacute;lectroniques</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val4.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>">Validez les autres adresses</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p1_val5.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Label.mss_g1_p1_val5")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p1_val6.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Label.mss_g1_p1_val6")%></a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>">Validez les dipl&ocirc;mes</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>">Validez les langues</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>">Validez les exp&eacute;riences professionnelles</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val4.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Label.mss_g1_p3_val4")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val5.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Label.mss_g1_p3_val5")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val6.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Label.mss_g1_p3_val6")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val7.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Label.mss_g1_p3_val7")%></a>
	</td>
	<td colspan="2" class="fuentemapa" valign="top">
	&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p1_val.jsp?estado=21" title="<%=Tran.getProperty("Label.LblEnlace")%>">Validez les comptes bancaires principaux</a>
	<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_val.jsp?estado=21" title="<%=Tran.getProperty("Label.LblEnlace")%>">Validez les autres comptes</a>	
	<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p10.jsp?estado=21" title="<%=Tran.getProperty("Label.LblEnlace")%>">Donn&eacute;es de r&eacute;mun&eacute;ration</a>
	<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_val.jsp?estado=21" title="<%=Tran.getProperty("Label.LblEnlace")%>">Validez les demandes de pr&ecirc;t financier</a>
	<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_val.jsp?estado=21" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=Tran.getProperty("bft_mss.Benefits")%></a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p9_val.jsp?estado=21" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=Tran.getProperty("bft_mss.BenefitsCanc")%></a>	
	</td>
	<td colspan="2" class="fuentemapa" valign="top">
	&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp" title="<%=Tran.getProperty("Label.LblEnlace")%>">R&eacute;visez la r&eacute;mun&eacute;ration de vos collaborateurs</a>
	<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=21" title="<%=Tran.getProperty("Label.LblEnlace")%>">Suivez vos recommandations d'augmentation</a>
	<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p8.jsp" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=Mss_cr.getProperty("msscr.Link4")%></a>
	</td>
</tr>
</table>
<table border="1" class="tablamapa" width="100%" cellspacing="0">
<tr class="fuentetitulomapa">
<td colspan="2" nowrap="nowrap"><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?estado=3" title="<%=Tran.getProperty("Label.LblEnlace")%>">Emplois</a></td>
<td colspan="2" nowrap="nowrap"><a href="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_menu.jsp?estado=4" title="<%=Tran.getProperty("Label.LblEnlace")%>">Temps de travail</a></td>
</tr>
<tr>
<td colspan="2" class="fuentemapa" valign="top">
	&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16.jsp?estado=31&mss=1" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranMss.getProperty("ev_mss.Criterio")%></a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4.jsp?estado=31&mss=1" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranMss.getProperty("ev_mss.ProcEv")%></a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19.jsp?estado=31&mss=1" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranMss.getProperty("ev_mss.EvSeg")%></a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15.jsp?estado=31&proc=1" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranMss.getProperty("ev_mss.DefObjEmp")%></a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15_val1.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranMss.getProperty("ev_mss.ValObj")%></a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p23.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranMss.getProperty("ev_mss.HistEvmss")%></a>
	<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_val.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranMss.getProperty("ev_mss.Valida")%></a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p19_val.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranMss.getProperty("ev_mss.ValidaSeg")%></a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_1_val.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranMss.getProperty("ev_mss.g3_p4_1_val_title")%></a>
	<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17.jsp?estado=31&mss=1" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranMss.getProperty("ev_mss.Plan")%></a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Demandez des formations</a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Suivez les demandes de formation</a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Validez les demandes de formation</a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">&Eacute;valuation des formations</a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Programme des sessions de formation</a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&zTLoad=FR" title="<%=Tran.getProperty("Label.LblEnlace")%>">Formations suivies</a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32.jsp?estado=21" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=mss_g3.getProperty("Label.mss_g3_p32")%></a>		
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=tranivMSS.getProperty("iv_mss.GestInterview")%></a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_list.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=tranivMSS.getProperty("iv_mss.EmpInterview")%></a>
	
	<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Parcours professionnels</a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Comp&eacute;tences des emplois</a>
	<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p2_val.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Validez les demandes de mobilit&eacute; interne</a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32_val.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=mss_g3.getProperty("Link.smco_g3_p32_val")%></a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_val.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=tranivMSS.getProperty("iv_mss.Validaiv")%></a>	
	<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_wiz1.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Demandez des offres d'emploi</a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Suivez les campagnes de recrutement ouvertes</a>
	<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p31.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Entretiens d'embauche</a>
</td>
<td colspan="2" class="fuentemapa" valign="top">
	&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val.jsp?estado=41" title="<%=Tran.getProperty("Label.LblEnlace")%>">Validez les demandes de cong&eacute;s</a>
	<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41" title="<%=Tran.getProperty("Label.LblEnlace")%>">Absences</a>
</td>
</tr>
</table>
<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</div>
</body>
