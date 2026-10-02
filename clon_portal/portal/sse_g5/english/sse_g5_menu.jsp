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
<title>My Knowledge</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/english/menu_ess.jsp" %>

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
<%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<table>
<tr>
<td class="titulofuncional" colspan="2">My Knowledge</td>
<td width="25" height="31"><a href="javascript:openWinHelpPres('/help/english/output/wwhelp/wwhimpl/js/html/frames.htm?href=SSE_G5_MENU.htm')" class="nav2" onmouseover="help.src='/iconos/helpyou_b.gif'"	onmouseout="help.src='/iconos/helpyou_a.gif'"><img src="/iconos/helpyou_a.gif" name="help" border="0"></a></td>
</tr>
<tr><td><div class="descripcionfuncional">
Use this module to view your personal knowledge distribution, define your distribution rules, participate in forums, search for experts a particular area of knowledge, and find a document using the search.
</div></td></tr>
</table>
<br />
<table width="100%" cellspacing="0">
<tr>
	<td  class="tablamenuleft">
	<table>
	<tr>
		<td colspan="2" class="fuentetitulomenu">Forum</td>
		<td width="30%"></td>
	</tr>
	<tr><td colspan="2" class="tablamenuleft"><hr class="barramenu" /></td><td width="30%"></td></tr>
	<tr>
		<td><img src="/iconos/noname_foro_150_100.gif" width="150" height="100" alt="Forum"title="Forum" /></td>
		<td><div class="fuentedescripcion">Use this section to access forums that interest you, and to participate actively in them if you wish.
		</div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="1" title ="Forum" href="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=51&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=NO">Forum</a></li>
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
		<td colspan="2" class="tablamenuleft">Search</td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td colspan="2" class="tablamenuleft" width="70%"><hr class="barramenu" /></td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td><div class="fuentedescripcion">Use this section to find the documents you are looking for.</div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="2" title="Search" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_EXTENDED_SEARCH_JAV/LIGHT_EXTENDED_SEARCH.jsp" idprovider="<%=aux_provider%>"/>'>Search</a></li>
		</ul>
		</td>
		<td><img src="/iconos/noname_busqueda_59_100.gif" width="59" height="100" alt="Search"title="Search" /></td>
	</tr>
	</table>
	</td>
</tr>
<tr>
	<td  class="tablamenuleft">
	<table>
	<tr>
		<td colspan="2" class="fuentetitulomenu">Knowledge Distribution</td>
		<td width="30%"></td>
	</tr>
	<tr><td colspan="2" class="tablamenuleft"><hr class="barramenu" /></td><td width="30%"></td></tr>
	<tr>
		<td><img src="/iconos/noname_distribucion_86_100.gif" width="86" height="100" alt="Knowledge Distribution"title="Knowledge Distribution" /></td>
		<td><div class="fuentedescripcion">Use this section to view your personal knowledge distribution or to define new personal distribution rules.</div>
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="3" title="Distribution Rule Creation" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_PERS_PREF_JAV/LIGHT_NEW_D_PERS_PREF.jsp" idprovider="<%=aux_provider%>"/>'>Distribution Rule Creation</a></li>
		<li><a class="enlacefuncional" tabindex="4" title="Personal Distribution" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=ALL" idprovider="<%=aux_provider%>"/>'>Personal Distribution</a></li>
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
		<td colspan="2" class="tablamenuleft">Experts</td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td colspan="2" class="tablamenuleft" width="70%"><hr class="barramenu" /></td>
	</tr>
	<tr>
		<td width="30%"></td>
		<td><div class="fuentedescripcion">	Use this section to search for experts in an area of knowledge.</div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="1" title="Experts" href='<m4:crosslink uri="/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp" idprovider="<%=aux_provider%>"/>'>Experts</a></li>
		</ul>
		</td>
		<td><img src="/iconos/noname_experto_61_100.gif" width="61" height="100" alt="Experts"title="Experts" /></td>
	</tr>
	</table>
	</td>
</tr>
</table>
<%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>
