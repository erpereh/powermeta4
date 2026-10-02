<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<title>Lista funcionalidades</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
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
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<table border="1" class="tablamapa" width="100%" cellspacing="0">
<tr class="fuentetitulomapa">
	<td colspan="2" nowrap="nowrap">&nbsp;<br /><a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1" title="Enlace directo a la p&aacute;gina">Mi informaci&oacute;n personal</a><br />&nbsp;</td>
	<td colspan="2" nowrap="nowrap"><a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2" title="Enlace directo a la p&aacute;gina">Mis datos econ&oacute;micos&nbsp;</a></td>
	<td colspan="2" nowrap="nowrap"><a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3" title="Enlace directo a la p&aacute;gina">Mi puesto de trabajo</a></td>
	<td colspan="2" nowrap="nowrap"><a href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4" title="Enlace directo a la p&aacute;gina">Mi tiempo de trabajo</a></td>
	<%if(Knownet.equals("0")){%>
<td colspan="2" nowrap="nowrap"><a href="/servlet/CheckSecurity/JSP/sse_g5/sse_g5_menu.jsp?estado=5" title="Enlace directo a la p&aacute;gina">Mi conocimiento</a></td>
<%}%>
</tr>
<tr>
	<td colspan="2" class="fuentemapa" valign="top">
		&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11" title="Enlace directo a la p&aacute;gina">Mis datos personales</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=12" title="Enlace directo a la p&aacute;gina">Direcci&oacute;n fiscal</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=12" title="Enlace directo a la p&aacute;gina">Tel&eacute;fono</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=12" title="Enlace directo a la p&aacute;gina">E-mail</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=12" title="Enlace directo a la p&aacute;gina">Otras direcciones</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod5.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod5Des")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod6.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod6Des")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod7.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod7Des")%></a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11" title="Enlace directo a la p&aacute;gina">Mis datos profesionales</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod.jsp?estado=11" title="Enlace directo a la p&aacute;gina">Titulaciones</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11" title="Enlace directo a la p&aacute;gina">Idiomas</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod3.jsp?estado=11" title="Enlace directo a la p&aacute;gina">Experiencia profesional</a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod4.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4Des")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod5.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod6.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod7.jsp?estado=11" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod7Des")%></a>
	</td>
	<td colspan="2" class="fuentemapa" valign="top">
		&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21" title="Enlace directo a la p&aacute;gina">Cuenta bancaria principal</a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21" title="Enlace directo a la p&aacute;gina">Otras cuentas</a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p4.jsp?estado=21" title="Enlace directo a la p&aacute;gina">&Uacute;ltimos recibos</a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab.jsp?estado=21" title="Enlace directo a la p&aacute;gina">Certificado de Haberes</a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_P.jsp?estado=21" title="Enlace directo a la p&aacute;gina">Pr&eacute;stamos</a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=Tran.getProperty("bft_ess.Benefits")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21&vista=0" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=Tran.getProperty("bft_ess.SimulBenef")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21&vista=1" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=Tran.getProperty("bft_ess.SolicBenef")%></a>
		<br />&nbsp;&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p11.jsp?estado=21&vista=1" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=Tran.getProperty("bft_ess.HistBenef")%></a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p10.jsp?estado=21" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=Tran.getProperty("bft_ess.BenefitsSal")%></a>
	</td>
	<td colspan="2" class="fuentemapa" valign="top">
		&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31" title="Enlace directo a la p&aacute;gina">Historial de puestos</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31" title="Enlace directo a la p&aacute;gina">Plan de carrera</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p22.jsp?estado=31" title="Enlace directo a la p&aacute;gina">Mis conocimientos</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23.jsp?estado=31" title="<%=sse_g3Ess.getProperty("Link.ssco_g3_p23")%>"><%=sse_g3Ess.getProperty("Link.ssco_g3_p23")%></a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate.jsp" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranEss.getProperty("ev_ess.Val")%></a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_1.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Evaluadores para tus procesos</a>
					
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Objetivos</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranEss.getProperty("ev_ess.TitValObj")%></a>		
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>">Historial de evaluaci&oacute;n</a>
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranEss.getProperty("ev_ess.TitleProc")%></a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_seg_filter.jsp" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TranEss.getProperty("ev_ess.EvSeg")%></a>	
		<br /><br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31" title="Enlace directo a la p&aacute;gina">Cat&aacute;logo de formaci&oacute;n</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p7.jsp?estado=31" title="Enlace directo a la p&aacute;gina">Inscripci&oacute;n en cursos</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31" title="Enlace directo a la p&aacute;gina">Evaluaci&oacute;n de cursos</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p21.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=TrainEss.getProperty("Label.HistTrain")%></a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31" title="Enlace directo a la p&aacute;gina">Movilidad interna</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2_vis.jsp?estado=31" title="Enlace directo a la p&aacute;gina">Peticiones de movilidad</a>
		<%if(Knownet.equals("0")){%>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=31&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=YES" title="Enlace directo a la p&aacute;gina">Foro</a>
		<br />&nbsp;*&nbsp;<a href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=1" idprovider="<%=aux_provider%>"/>' title="Enlace directo a la p&aacute;gina">Documentaci&oacute;n de formaci&oacute;n</a>
		<br />&nbsp;*&nbsp;<a href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>' title="Enlace directo a la p&aacute;gina">Expertos</a>
		<%}%>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31" title="<%=Tran.getProperty("Label.LblEnlace")%>"><%=tranivESS.getProperty("iv_ess.Interview")%></a>
		<%if(Knownet.equals("0")){%>
		<br /><br />&nbsp;*&nbsp;<a href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=2" idprovider="<%=aux_provider%>"/>' title="Enlace directo a la p&aacute;gina">Comunicaci&oacute;n interna</a>
		<%}%>
	</td>
	<td colspan="2" class="fuentemapa" valign="top">
		&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2.jsp?estado=41" title="Enlace directo a la p&aacute;gina">Vacaciones</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p3.jsp?estado=41" title="Enlace directo a la p&aacute;gina">Calendario de festivos</a>
		<br />&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p1.jsp?estado=41" title="Enlace directo a la p&aacute;gina">Ausencias laborales</a>
	</td>
	<%if(Knownet.equals("0")){%>
	<td colspan="2" class="fuentemapa" valign="top">
	&nbsp;*&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=51&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=NO" title="Enlace directo a la p&aacute;gina">Foro</a>
	<br /><br />&nbsp;*&nbsp;<a href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_EXTENDED_SEARCH_JAV/LIGHT_EXTENDED_SEARCH.jsp" idprovider="<%=aux_provider%>"/>' title="Enlace directo a la p&aacute;gina">B&uacute;squeda</a>
	<br /><br />&nbsp;*&nbsp;<a href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_PERS_PREF_JAV/LIGHT_NEW_D_PERS_PREF.jsp" idprovider="<%=aux_provider%>"/>' title="Enlace directo a la p&aacute;gina">Creaci&oacute;n de reglas de distribuci&oacute;n</a>
	<br /><br />&nbsp;*&nbsp;<a href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=ALL" idprovider="<%=aux_provider%>"/>' title="Enlace directo a la p&aacute;gina">Distribuci&oacute;n personalizada</a>
	<br /><br />&nbsp;*&nbsp;<a href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>' title="Enlace directo a la p&aacute;gina">Expertos</a>
	</td>
	<%}%>
</tr>
</table>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>
