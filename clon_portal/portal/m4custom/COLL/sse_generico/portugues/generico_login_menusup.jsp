<table width="100%" class="tablacabecera">
<tr>
	<td><img src="/iconos/portugues/icono_cabecera_sse_56_404.gif" alt="Self Service do Empregado" width="404" height="56" /></td>
	<td align="right">
	<%if (estado.equals("0") == false){%><a href="/sse_generico/espanol/generico_login.jsp?estado=0" title="Espa&ntilde;ol"><img alt="Espa&ntilde;ol" src="/iconos/icono_espana_58_50.gif" width="58" height="50" /></a><%}%>
	<%if (estado.equals("1") == false){%><a href="/sse_generico/english/generico_login.jsp?estado=1" title="English"><img alt="English" src="/iconos/icono_uk_58_50.gif" width="58" height="50" /></a><%}%>
	<%if (estado.equals("2") == false){%><a href="/sse_generico/francais/generico_login.jsp?estado=2" title="Français"><img alt="Français" src="/iconos/icono_francia_58_50.gif" width="58" height="50" /></a><%}%>
	<%if (estado.equals("3") == false){%><a href="/sse_generico/portugues/generico_login.jsp?estado=3" title="Portug&ecirc;s"><img alt="Portug&ecirc;s" src="/iconos/icono_portugal_58_50.gif" width="58" height="50" /></a><%}%>
	</td>
</tr>
</table>
<table width="100%">
<tr>
	<td class="fuentebarranombre" align="right"><%@ include file="generico_fecha.jsp" %></td>
</tr>	        
<tr>
	<td colspan="2" class="separador"></td>
</tr>
</table>
