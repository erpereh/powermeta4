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
	<td class="fuentelinktitulo">&nbsp;Contactos:</td>
	<td><a href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_p1.jsp?estado=0" title="Mis contactos"><img width="20" height="20" src="/iconos/icono_contactos_20_20.gif" alt="Mis contactos" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
	<td><a href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_buscar_contactos.jsp?estado=0" title="Qui&eacute;n es qui&eacute;n"><img width="20" height="20" src="/iconos/icono_inventario_20_20.gif" alt="Qui&eacute;n es qui&eacute;n" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"/></a></td>
</tr>
</table>
</td></tr></table>
<table width="100%" class="tablalink"><tr><td>
<table width="100%" class="tablalink" cellspacing="0">
<tr>
	<td><form action="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_actualizar_links.jsp?estado=0" method="post" name="Favoritos" id="Favoritos"><input type="hidden" id="TIT" name="TIT" value="" /><input type="hidden" id="URL" name="URL" value="" /></form></td>
	<td class="fuentelinktitulo">&nbsp;Favoritos:</td>
	<td><a href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_editar_links.jsp" title="Edita tus favoritos"><img width="20" height="20" src="/iconos/icono_editar_20_20.gif" alt="Edita tus favoritos" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
	<td><a href="Javascript:Enviar();" title="Agrega a favoritos"><img width="20" height="20" src="/iconos/icono_insertar_20_20.gif" alt="Agrega a favoritos" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
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
<tr><td colspan="4" class="fuentelinkcampo">&nbsp;<a class="fuentelinkcampo" title="enlace directo" href="<%=zURL%>"><%=zitem%></a></td></tr>
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
	<td class="fuentelinktitulo">&nbsp;B&uacute;squeda:</td>
</tr>
<tr>
	<td class="fuentelinkcampo">&nbsp;Texto:</td>
</tr>
<tr>
	<td class="fuentelinkcampo">&nbsp;&nbsp;<input title="Introduce el texto de la b&uacute;squeda" type="text" value="" name="q" id="q" size="15" maxlength="256" /></td>
</tr>
<tr>
	<td class="fuentelinkcampo" align="center"><input title="Busca en internet" value="Buscar" name="btnI" id="btnI" type="image" src="/iconos/icono_buscar_ess_36_36.gif" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></td>
</tr>
</table>
</form>
</td></tr></table>
<table width="100%" class="tablalink"><tr><td>
<table width="100%" class="tablalink" cellspacing="0">
<tr>
	<td class="fuentelinktitulo">&nbsp;Contraseña:</td>
</tr>
<tr>
	<td colspan="3" class="fuentelinkcampo">&nbsp;<a title="Desde aquí puedes actualizar tu contraseña" href="/servlet/CheckSecurity/JSP/sse_g0/change_password.jsp?estado=01">Actualizar</a></td>
</tr>

<tr>
	<td class="fuentelinktitulo">&nbsp;E-Mail:</td>
</tr>
<tr>
	<td colspan="3" class="fuentelinkcampo">&nbsp;<a title="Env&iacute;a un E-Mail al WebMaster" href="mailto:<%=zMAILWEBMASTER%>">WebMaster</a></td>
</tr>
<tr>
	<td colspan="3" class="fuentelinkcampo">&nbsp;<a title="Env&iacute;a un E-Mail a RRHH" href="mailto:<%=zMAILRRHH%>">RRHH</a></td>
</tr>
</table>
</td></tr></table>