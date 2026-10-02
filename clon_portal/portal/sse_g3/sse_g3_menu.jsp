<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>O meu posto de trabalho</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>	
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	
<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>


<%      M4SessionManager  m4Session    = M4Context.getSession(request);
   String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
   if ((estado==null)||(estado.equals(""))){estado="0";}
%>
<%
M4SessionCl zsesion1 = M4Context.getM4SessionCl(request);
String Knownet = zsesion1.getBagEntries("IsKnownet");
String aux_provider = zsesion1.getBagEntries("aux_provider");
int zTab=9;%>

</head>
<body>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<table>
<tr><td class="titulofuncional"colspan="2">O meu posto de trabalho</td></tr>
<tr><td>
<%if(Knownet.equals("0")){%>
<div class="descripcionfuncional">Neste m&oacute;dulo pode consultar o seu historial de postos, o seu plano de carreira, os seus processos de avalia&ccedil;&atilde;o e a mobilidade interna que existe na empresa. Tamb&eacute;m pode solicitar cursos de forma&ccedil;&atilde;o, aceder a documenta&ccedil;&atilde;o relacionada com um curso, participar en f&oacute;rums criados para os cursos nos quais est&aacute; inscrito, e encontrar expertos para um determinado conhecimento. Tamb&eacute;m pode consultar as not&iacute;cias e a pol&iacute;tica da empresa atrav&eacute;s da comunica&ccedil;&atilde;o interna.<br /><br />&nbsp;</div>
<% } else { %>
<div class="descripcionfuncional">Neste m&oacute;dulo pode consultar o seu historial de postos, o seu plano de carreira e a mobilidade interna dispon&iacute;vel na empresa. Tamb&eacute;m pode solicitar cursos de forma&ccedil;&atilde;o e consultar os seus processos de avalia&ccedil;&atilde;o.<br /><br />&nbsp;</div>
<%}%>
</td></tr>
</table>
<table>
<tr>
	<td  class="tablamenuleft">
	<table>
	<tr><td colspan="2" class="fuentetitulomenu">Historial de postos</td><td width="30%"></td></tr>
	<tr><td colspan="2" class="tablamenuright"><hr class="barramenu" /></td><td width="30%"></td></tr>
	<tr>
		<td><img src="/iconos/noname_organizacion_ess_115_100.gif" width="115" height="100" alt="Historial de postos"title="Historial de postos" border="0" /></td>
		<td>
			<div class="descripcionfuncional">Nesta sec&ccedil;&atilde;o pode consultar os postos que desempenhou na empresa.</div>
			<ul class="listaenlace">
		    <li><a class="enlacefuncional" tabindex="1" title ="Historial de postos"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31">Historial de postos</a></li>
		    </ul>
		</td>
		<td width="30%"></td>
	</tr>
	</table>
	</td>
</tr>
<tr>
	<td class="tablamenuright">
	<table>
	<tr class="fuentetitulomenu"><td width="30%"></td><td colspan="2" class="tablamenuleft">Mobilidade interna</td></tr>
	<tr>
		<td width="30%"></td>
		<td colspan="2"  class="tablamenuleft"><hr class="barramenu" /></td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td class="descripcionfuncional">
		<div class="descripcionfuncional">Nesta sec&ccedil;&atilde;o pode consultar os postos vagos existentes na empresa e solicitar os que mais lhe interessam, assim como verificar o estado dos pedidos j&aacute; realizados e quais foram as ofertas recebidas.</div>
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="2" title ="Mobilidade interna"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31">Mobilidade interna</a></li>
		</ul>
		</td>
		<td><img src="/iconos/noname_movilidad_interna_izquierda_100_100.gif" width="100" height="100" alt="Mobilidade interna"title="Mobilidade interna" border="0" /></td>
	</tr>
	</table>
	</td>
</tr>
<tr>
	<td  class="tablamenuleft">
	<table>
	<tr><td colspan="2" class="fuentetitulomenu">Planos de avalia&ccedil;&atilde;o</td><td width="30%"></td></td></tr>
	<tr><td colspan="2" class="tablamenuleft"><hr class="barramenu" /></td><td width="30%"></td></td></tr>
	<tr>
		<td><img src="/iconos/noname_planes_evaluacion_88_100.gif" width="88" height="100" alt="Planos de avalia&ccedil;&atilde;o"title="Planos de avalia&ccedil;&atilde;o" border="0" /></td>
		<td>
		<div class="descripcionfuncional">Nesta sec&ccedil;&atilde;o pode consultar os processos de avalia&ccedil;&atilde;o onde participou como avaliador e avaliado, assim como os resultados destes &uacute;ltimos.</div>
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="3" title="<%=TranEss.getProperty("ev_ess.Val")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31"><%=TranEss.getProperty("ev_ess.Val")%></a></li>
		<li><a class="enlacefuncional" tabindex="4" title="<%=TranEss.getProperty("ev_ess.TitleProc")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4.jsp?estado=31"><%=TranEss.getProperty("ev_ess.TitleProc")%></a></li>
		<li><a class="enlacefuncional" tabindex="5" title="Historial de evaluaci&oacute;n"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31">Historial de avalia&ccedil;&atilde;o</a></li>
		<li><a class="enlacefuncional" tabindex="6" title="Objectivos" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31">Objectivos</a></li>
		<li><a class="enlacefuncional" tabindex="7" title="<%=TranEss.getProperty("ev_ess.TitValObj")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31"><%=TranEss.getProperty("ev_ess.TitValObj")%></a></li>		
		<li><a class="enlacefuncional" tabindex="8" title="<%=TranEss.getProperty("ev_ess.EvSeg")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19.jsp?estado=31"><%=TranEss.getProperty("ev_ess.EvSeg")%></a></li>		
		<li><a class="enlacefuncional" tabindex="9" title="<%=TranEss.getProperty("ev_ess.ValEvSeg")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p20.jsp?estado=31"><%=TranEss.getProperty("ev_ess.ValEvSeg")%></a></li>		
		</ul>
		</td>
		<td width="30%"></td>
	</tr>
	</table>
	</td>
</tr>
<tr>
	<td class="tablamenuright">
	<table>
	<tr class="fuentetitulomenu">
		<td width="30%"></td>
		<td colspan="2"class="tablamenuleft">Plano de forma&ccedil;&atilde;o</td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td colspan="2" class="tablamenuright"><hr class="barramenu" /></td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td> <%if(Knownet.equals("0")){%>
			<div class="descripcionfuncional">Nesta sec&ccedil;&atilde;o pode consultar os cursos dispon&iacute;veis, solicitar os que pretende e avaliar aqueles a que assistiu. Tamb&eacute;m pode aceder a documenta&ccedil;&atilde;o relacionada com um curso, participar em f&oacute;rums criados para os cursos nos quais est&aacute; inscrito, e encontrar expertos para um determinado conhecimento.</div>
			<% } else { %>
			<div class="descripcionfuncional">Nesta sec&ccedil;&atilde;o pode consultar os cursos dispon&iacute;veis, solicitar os que pretende e avaliar aqueles a que assistiu.</div>
			<%}%>
			<ul class="listaenlace">
		    <li><a class="enlacefuncional" tabindex="7"title="Cat&aacute;logo de forma&ccedil;&atilde;o"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31">Cat&aacute;logo de forma&ccedil;&atilde;o</a></li>
		    <li><a class="enlacefuncional" tabindex="8"title ="Inscri&ccedil;&atilde;o em cursos"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p7.jsp?estado=31">Inscri&ccedil;&atilde;o em cursos</a></li>
		    <li><a class="enlacefuncional" tabindex="9"title="Avalia&ccedil;&atilde;o de cursos"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31">Avalia&ccedil;&atilde;o de cursos</a></li>
		    <%if(Knownet.equals("0")){%>
			<li><a class="enlacefuncional" tabindex="<%=(zTab+1)%>"title="F&oacute;rum"  href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=31&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=YES">F&oacute;rum</a></li>
			<li><a class="enlacefuncional" tabindex="<%=(zTab+1)%>"title="Documenta&ccedil;&atilde;o de forma&ccedil;&atilde;o"  href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=1" idprovider="<%=aux_provider%>"/>'>Documenta&ccedil;&atilde;o de forma&ccedil;&atilde;o</a></li>
			<li><a class="enlacefuncional" tabindex="<%=(zTab+1)%>"title="Expertos"  href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>'>Expertos</a></li>
			<%}%>
		    </ul>
		</td>
		<td><img src="/iconos/noname_plan_formacion_43_100.gif" width="43" height="100" alt="Plano de forma&ccedil;&atilde;o"title="Plano de forma&ccedil;&atilde;o"  /></td>
	</tr>
	</table>
	</td>
</tr>
<tr>
	<td  class="tablamenuleft">
	<table>
	<tr><td colspan="2" class="fuentetitulomenu">Plano de carreira</td><td width="30%"></td></tr>
	<tr><td colspan="2" class="tablamenuleft"><hr class="barramenu" /></td><td width="30%"></td></tr>
	<tr>
		<td><img src="/iconos/noname_plan_carrera_133_100.gif" width="133" height="100" alt="Plano de carreira"title="Plano de carreira" /></td>
		<td>
			<div class="descripcionfuncional">Nesta sec&ccedil;&atilde;o pode consultar todas as informa&ccedil;&otilde;es relacionadas com o seu plano de carreira, assim como as descri&ccedil;&otilde;es dos postos que surgem no plano.</div>
			<ul class="listaenlace">
			<li><a class="enlacefuncional"tabindex="<%=(zTab+1)%>"title="Plano de carreira"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31">Plano de carreira</a></li>
			</ul>
		</td>
		<td width="30%"></td>
	</tr>
	</table>
	</td>
</tr>
<%if(Knownet.equals("0")){%>
<tr>
<td class="tablamenuright">
<table>
<tr class="fuentetitulomenu">
<td width="30%"></td>
<td colspan="2"class="tablamenuleft">Comunica&ccedil;&atilde;o interna</td>
</tr>
<tr>
<td width="30%"></td>
<td colspan="2" class="tablamenuright"><hr class="barramenu" /></td>
</tr>
<tr>
<td width="30%"></td>
<td>
<div class="descripcionfuncional">Nesta sec&ccedil;&atilde;o pode consultar as not&iacute;cias e a pol&iacute;tica da empresa atrav&eacute;s da comunica&ccedil;&atilde;o interna.</div>
<ul class="listaenlace">
<li><a class="enlacefuncional" tabindex="<%=(zTab+1)%>"title="Comunica&ccedil;&atilde;o interna"  href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=2" idprovider="<%=aux_provider%>"/>'>Comunica&ccedil;&atilde;o interna</a></li>
</ul>
</td>
<td><img src="/iconos/noname_comunicacion_interna_105_100.gif" width="105" height="100" alt="Comunica&ccedil;&atilde;o interna"title="Comunica&ccedil;&atilde;o interna"  /></td>
</tr>
</table>
</td>
</tr>
<%}%>
</table>
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
</div>
</body>
</html>
