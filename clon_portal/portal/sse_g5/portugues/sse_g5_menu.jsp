<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%
	M4SessionCl zsesion1 = M4Context.getM4SessionCl(request);
	String Knownet = zsesion1.getBagEntries("IsKnownet");
	String aux_provider = zsesion1.getBagEntries("aux_provider");
%>

<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><!-- $Revision: 1.1.1.1 $ -->
<title>O meu conhecimento</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%
    String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	if ((estado==null)||(estado.equals(""))){estado="0";}
%>
</head>

<script language="JavaScript">
function openWinHelpPres(pagina){
	var popup = null;
	popup = window.open(pagina,'helpPress','width=765,height=500,resizable=no,toolbar=no,scrollbars=yes,copyhistory=no,directories=no,status=yes');
}

</script>
<body>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<table>
<tr>
<td class="titulofuncional" colspan="2">O meu conhecimento</td>
<td width="25" height="31"><a href="javascript:openWinHelpPres('/help/portugues/output/wwhelp/wwhimpl/js/html/frames.htm?href=SSE_G5_MENU.htm')" class="nav2" onmouseover="help.src='/iconos/helpyou_b.gif'"	onmouseout="help.src='/iconos/helpyou_a.gif'"><img src="/iconos/helpyou_a.gif" name="help" border="0"></a></td>
</tr>
<tr><td><div class="descripcionfuncional">
Neste m&oacute;dulo pode consultar a sua distribui&ccedil;&atilde;o pessoal do conhecimento, definir as suas regras de distribui&ccedil;&atilde;o, participar em f&oacute;rums, pesquisar expertos de uma &aacute;rea de conhecimento, e encontrar um documento usando a pesquisa.
</div></td></tr>
</table>
<br />
<table width="100%" cellspacing="0">
<tr>
	<td  class="tablamenuleft">
	<table>
	<tr>
		<td colspan="2" class="fuentetitulomenu">F&oacute;rum</td>
		<td width="30%"></td>
	</tr>
	<tr><td colspan="2" class="tablamenuleft"><hr class="barramenu" /></td><td width="30%"></td></tr>
	<tr>
		<td><img src="/iconos/noname_foro_150_100.gif" width="150" height="100" alt="F&oacute;rum"title="F&oacute;rum" /></td>
		<td><div class="fuentedescripcion">Nesta sec&ccedil;&atilde;o pode aceder a f&oacute;rums que lhe interessam e participar neles activamente se deseja.
		</div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="1" title ="F&oacute;rum" href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=51&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=NO">F&oacute;rum</a></li>
		</ul>
		</td>
	</tr>
	</table>
	</td>
</tr>
<tr>
	<td class="tablamenuright">
	<table>
	<tr class="fuentetitulomenu">
		<td width="30%"></td>
		<td colspan="2" class="tablamenuleft">Pesquisa</td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td colspan="2" class="tablamenuleft" width="70%"><hr class="barramenu" /></td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td><div class="fuentedescripcion">Nesta sec&ccedil;&atilde;o pode localizar a documenta&ccedil;&atilde;o que procura.</div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="2" title="Pesquisa" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_EXTENDED_SEARCH_JAV/LIGHT_EXTENDED_SEARCH.jsp" idprovider="<%=aux_provider%>"/>'>Pesquisa</a></li>
		</ul>
		</td>
		<td><img src="/iconos/noname_busqueda_59_100.gif" width="59" height="100" alt="Pesquisa"title="Pesquisa" /></td>
	</tr>
	</table>
	</td>
</tr>
<tr>
	<td  class="tablamenuleft">
	<table>
	<tr>
		<td colspan="2" class="fuentetitulomenu">Distribui&ccedil;&atilde;o do conhecimento</td>
		<td width="30%"></td>
	</tr>
	<tr><td colspan="2" class="tablamenuleft"><hr class="barramenu" /></td><td width="30%"></td></tr>
	<tr>
		<td><img src="/iconos/noname_distribucion_86_100.gif" width="86" height="100" alt="Distribui&ccedil;&atilde;o do conhecimento"title="Distribui&ccedil;&atilde;o do conhecimento" /></td>
		<td><div class="fuentedescripcion">Nesta sec&ccedil;&atilde;o pode consultar a sua distribui&ccedil;&atilde;o pessoal do conhecimento ou definir novas regras pessoais de distribui&ccedil;&atilde;o.</div>
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="3" title="Cria&ccedil;&atilde;o de regras de distribui&ccedil;&atilde;o" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_PERS_PREF_JAV/LIGHT_NEW_D_PERS_PREF.jsp" idprovider="<%=aux_provider%>"/>'>Cria&ccedil;&atilde;o de regras de distribui&ccedil;&atilde;o</a></li>
		<li><a class="enlacefuncional" tabindex="4" title="Distribui&ccedil;&atilde;o personalizada" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=ALL" idprovider="<%=aux_provider%>"/>'>Distribui&ccedil;&atilde;o personalizada</a></li>
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
		<td colspan="2" class="tablamenuleft">Expertos</td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td colspan="2" class="tablamenuleft" width="70%"><hr class="barramenu" /></td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td><div class="fuentedescripcion">	Nesta sec&ccedil;&atilde;o pode pesquisar expertos num conhecimento.</div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="1" title="Expertos" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>'>Expertos</a></li>
		</ul>
		</td>
		<td><img src="/iconos/noname_experto_61_100.gif" width="61" height="100" alt="Expertos"title="Expertos" /></td>
	</tr>
	</table>
	</td>
</tr>
</table>
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>
