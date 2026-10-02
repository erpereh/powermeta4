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
<title>Mi conocimiento</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>

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
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<table>
<tr>
<td class="titulofuncional" colspan="2">Mi conocimiento</td>
<td width="25" height="31"><a href="javascript:openWinHelpPres('/help/espanol/output/wwhelp/wwhimpl/js/html/frames.htm?href=SSE_G5_MENU.htm')" class="nav2" onmouseover="help.src='/iconos/helpyou_b.gif'"	onmouseout="help.src='/iconos/helpyou_a.gif'"><img src="/iconos/helpyou_a.gif" name="help" border="0"></a></td>
</tr>
<tr><td><div class="descripcionfuncional">
En este m&oacute;dulo puedes consultar tu distribuci&oacute;n personal del conocimiento, definir tus reglas de distribuci&oacute;n, participar en foros, buscar expertos de un area de conocimiento,y encontrar un documento usando la busqueda.
</div></td></tr>
</table>
<br />
<table width="100%" cellspacing="0">
<tr>
	<td class="tablamenuleft">
	<table>
	<tr>
		<td colspan="2" class="fuentetitulomenu">Foro</td>
		<td width="30%"></td>
	</tr>
	<tr><td colspan="2" class="tablamenuleft"><hr class="barramenu" /></td><td width="30%"></td></tr>
	<tr>
		<td><img src="/iconos/noname_foro_150_100.gif" width="150" height="100" alt="Foro"title="Foro" /></td>
		<td><div class="fuentedescripcion">En esta secci&oacute;n puedes acceder a foros que te interesan, y participar en ellos activamente si lo deseas.
		</div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="1" title ="Foro" href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=51&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=NO">Foro</a></li>
		</ul>
		</td>
	</tr>
	</table>
	</td>
</tr>
<tr>
	<td class="tablamenuright">
	<table>
	<tr  class="fuentetitulomenu">
		<td width="30%"></td>
		<td colspan="2" class="tablamenuleft">B&uacute;squeda</td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td colspan="2" class="tablamenuleft" width="70%"><hr class="barramenu" /></td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td><div class="fuentedescripcion">En esta secci&oacute;n puedes localizar la documentaci&oacute;n que buscas.</div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="2" title="B&uacute;squeda" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_EXTENDED_SEARCH_JAV/LIGHT_EXTENDED_SEARCH.jsp" idprovider="<%=aux_provider%>"/>'>B&uacute;squeda</a></li>
		</ul>
		</td>
		<td><img src="/iconos/noname_busqueda_59_100.gif" width="59" height="100" alt="B&uacute;squeda"title="B&uacute;squeda" /></td>
	</tr>
	</table>
	</td>
</tr>
<tr>
	<td class="tablamenuleft">
	<table>
	<tr>
		<td colspan="2" class="fuentetitulomenu">Distribuci&oacute;n del conocimiento</td>
		<td width="30%"></td>
	</tr>
	<tr><td colspan="2" class="tablamenuleft"><hr class="barramenu" /></td><td width="30%"></td></tr>
	<tr>
		<td><img src="/iconos/noname_distribucion_86_100.gif" width="86" height="100" alt="Distribuci&oacute;n del conocimiento"title="Distribuci&oacute;n del conocimiento" /></td>
		<td><div class="fuentedescripcion">En esta secci&oacute;n puedes  consultar tu distribuci&oacute;n personal del conocimiento o definir nuevas reglas personales de distribuci&oacute;n.</div>
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="3" title="Creaci&oacute;n de reglas de distribuci&oacute;n" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_PERS_PREF_JAV/LIGHT_NEW_D_PERS_PREF.jsp" idprovider="<%=aux_provider%>"/>'>Creaci&oacute;n de reglas de distribuci&oacute;n</a></li>
		<li><a class="enlacefuncional" tabindex="4" title="Distribuci&oacute;n personalizada" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=ALL" idprovider="<%=aux_provider%>"/>'>Distribuci&oacute;n personalizada</a></li>
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
	<tr  class="fuentetitulomenu">
		<td width="30%"></td>
		<td colspan="2" class="tablamenuleft">Expertos</td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td colspan="2" class="tablamenuleft" width="70%"><hr class="barramenu" /></td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td><div class="fuentedescripcion">	En esta secci&oacute;n puedes buscar gente experta en un conocimiento.</div>
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
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>
