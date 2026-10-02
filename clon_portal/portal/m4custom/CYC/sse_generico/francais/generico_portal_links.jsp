<script type="text/javascript">
function Enviar(){
var URL = m4url();
var titulo = m4titulo();
m4valor ("Favoritos", "TIT", titulo, "set");
m4valor ("Favoritos", "URL", URL, "set");
m4submit("Favoritos");
}
</script>
<table width="100%" class="tablalink"><tr><td>
<table width="100%" class="tablalink" cellspacing="0">
<tr>
	<td class="fuentelinktitulo">&nbsp;Contacts&nbsp;:</td>
	<td><a href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_p1.jsp?estado=0" title="Vos contacts"><img width="20" height="20" src="/iconos/icono_contactos_20_20.gif" alt="Vos contacts" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
	<td><a href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_buscar_contactos.jsp?estado=0" title="Qui est qui&nbsp;?"><img width="20" height="20" src="/iconos/icono_inventario_20_20.gif" alt="Qui est qui&nbsp;?" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>
</td></tr></table>
<table width="100%" class="tablalink"><tr><td>
<table width="100%" class="tablalink" cellspacing="0">
<tr>
	<td><form action="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_actualizar_links.jsp?estado=0" method="post" name="Favoritos" id="Favoritos"><input type="hidden" id="TIT" name="TIT" value="" /><input type="hidden" id="URL" name="URL" value="" /></form></td>
	<td class="fuentelinktitulo">&nbsp;Favoris&nbsp;:</td>
	<td><a href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_editar_links.jsp" title="&Eacute;ditez vos favoris"><img width="20" height="20" src="/iconos/icono_editar_20_20.gif" alt="&Eacute;diter vos favoris" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
	<td><a href="Javascript:Enviar();" title="Ajoutez &agrave; vos favoris"><img width="20" height="20" src="/iconos/icono_insertar_20_20.gif" alt="Ajouter &agrave; vos favoris" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>
</td></tr></table>
<table width="100%" class="tablalink"><tr><td>
<table width="100%" class="tablalink" cellspacing="0">
<%
	String strcuentareg = "";
	String zitem = "";
	String zURL = "";
	String nombremio = "";
	try {
		int cuentareg = 0;
		int i = 0;
		M4Operations Introduccion = new M4Operations(request);
		cuentareg = Introduccion.getCountInClient(znodo,zMeta4Object,znodo);
		for (i = 0; i < cuentareg; i++){
			String stri =String.valueOf(i);
			zitem = Introduccion.getItem(znodo,zMeta4Object,znodo,stri,"N_ENLACE");
			zURL = Introduccion.getItem(znodo,zMeta4Object,znodo,stri,"ENLACE");
			String s = zitem + "{|&|}" + zURL;
			zsesion.putBagEntries("key" + stri,s);
%>
<tr><td colspan="4" class="fuentelinkcampo">&nbsp;<a class="fuentelinkcampo" title="Lien direct" href="<%=zURL%>"><%=zitem%></a></td></tr>
<%
	}
	strcuentareg = String.valueOf(cuentareg);
	zsesion.putBagEntries("totalfavoritos",strcuentareg);
} catch(Exception e) {}
%>
<tr><td></td></tr>
</table>
</td></tr></table>
<table width="100%" class="tablalink"><tr><td>
<form action="http://www.google.com/search" method="get" name="f" id="f">
<table width="100%" class="tablalink" cellspacing="0">
<tr>
	<td class="fuentelinktitulo">&nbsp;Recherche&nbsp;:</td>
</tr>
<tr>
	<td class="fuentelinkcampo">&nbsp;Texte&nbsp;:</td>
</tr>
<tr>
	<td class="fuentelinkcampo">&nbsp;&nbsp;<input title="&Eacute;crivez le ou les termes &agrave; rechercher" type="text" value="" name="q" id="q" size="15" maxlength="256" /></td>
</tr>
<tr>
	<td class="fuentelinkcampo" align="center"><input title="Rechercher sur Internet" value="Rechercher" name="btnI" id="btnI" type="image" src="/iconos/icono_buscar_ess_36_36.gif" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></td>
</tr>
</table>
</form>
</td></tr></table>
<table width="100%" class="tablalink"><tr><td>
<table width="100%" class="tablalink" cellspacing="0">
<tr>
	<td class="fuentelinktitulo">&nbsp;Mot de passe&nbsp;:</td>
</tr>
<tr>
	<td colspan="3" class="fuentelinkcampo">&nbsp;<a title="Changer de mot de passe" href="/servlet/CheckSecurity/JSP/sse_g0/change_password.jsp?estado=01">Modifier</a></td>
</tr>

<tr>
	<td class="fuentelinktitulo">&nbsp;Contacter&nbsp;:</td>
</tr>
<tr>
	<td colspan="3" class="fuentelinkcampo">&nbsp;<a title="Envoyer un courriel au Webmestre" href="mailto:<%=zMAILWEBMASTER%>">Webmestre</a></td>
</tr>
<tr>
	<td colspan="3" class="fuentelinkcampo">&nbsp;<a title="Envoyer un courriel &agrave; la DRH" href="mailto:<%=zMAILRRHH%>">DRH</a></td>
</tr>
</table>
</td></tr></table>
