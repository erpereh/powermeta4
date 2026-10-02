<table width="100%" class="tablalink">
<tr>
<td>
<table class="descripcionfuncional" width="100%" cellspacing="0" cellpadding="2">
<tr><td class="fuentelinktitulo" colspan="2">Vaga </td></tr>
<tr><td class="descripcionfuncional"><img width="50" height="50" src="/iconos/noname_mago_43_80.gif" alt="Assistente" /></td></tr>
<%if (OpcionActiva==1){ 
	int  zcount  = 0;
	try {
		M4Operations m = new M4Operations(request);
		zcount = m.getCount("SSM_JOB_POST","SSM_VACANT","SSM_JOB_POST");
	} catch(Exception e) {}
%>
	<% if (zcount != 0) { %>
	<tr><td class="fuentewizardactivo">&nbsp;Defini&ccedil;&atilde;o</td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(2,'mss_g3/mss_g3_p1_wiz2.jsp');">Experi&ecirc;ncia profissional</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(3,'mss_g3/mss_g3_p1_wiz3.jsp');">Certificados\licen&ccedil;as</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(4,'mss_g3/mss_g3_p1_wiz4.jsp');">Historial acad&eacute;mico</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(5,'mss_g3/mss_g3_p1_wiz5.jsp');">Responsabilidades</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(6,'mss_g3/mss_g3_p1_wiz6.jsp');">Idiomas</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(7,'mss_g3/mss_g3_p1_wiz7.jsp');">Compet&ecirc;ncias</a></td></tr>
	<tr><td align="center">
	<a href="javascript:comprobar(0);" ><img alt="Aceitar vaga" title="Aceitar vaga" src="/iconos/icono_guardar_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>&nbsp;
	<a href="javascript:navegar(1,'mss_g3/mss_g3_persist_wiz2.jsp');" ><img alt="Cancelar vaga" title="Cancelar vaga" src="/iconos/icono_eliminar_guardar_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
	</td></tr>
	<% } else { %>
	<tr><td class="fuentewizardactivo">&nbsp;Defini&ccedil;&atilde;o</td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:comprobar(1,'mss_g3/mss_g3_p1_wiz2.jsp');">Experi&ecirc;ncia profissional</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:comprobar(1,'mss_g3/mss_g3_p1_wiz3.jsp');">Certificados\licen&ccedil;as</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:comprobar(1,'mss_g3/mss_g3_p1_wiz4.jsp');">Historial acad&eacute;mico</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:comprobar(1,'mss_g3/mss_g3_p1_wiz5.jsp');">Responsabilidades</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:comprobar(1,'mss_g3/mss_g3_p1_wiz6.jsp');">Idiomas</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:comprobar(1,'mss_g3/mss_g3_p1_wiz7.jsp');">Compet&ecirc;ncias</a></td></tr>
	<tr><td align="center">
	<a href="javascript:comprobar(0);" ><img alt="Aceitar vaga" title="Aceitar vaga" src="/iconos/icono_guardar_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>&nbsp;
	<a href="javascript:NullValue();" ><img alt="Cancelar vaga" title="Cancelar vaga" src="/iconos/icono_eliminar_guardar_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
	</td></tr>
	<%}%>

<% } else { %>
	<tr><td class="fuentewizard"><a href="javascript:navegar(1,'mss_g3/mss_g3_p1_wiz1.jsp');">&nbsp;Defini&ccedil;&atilde;o</a></td></tr>
<%if (OpcionActiva==2){ %>
	<tr><td class="fuentewizardactivo">&nbsp;Experi&ecirc;ncia profissional</td></tr>
<% } else { %>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(2,'mss_g3/mss_g3_p1_wiz2.jsp');">Experi&ecirc;ncia profissional</a></td></tr>
<%}%>

<%if (OpcionActiva==3){ %>
	<tr><td class="fuentewizardactivo">&nbsp;Certificados\licen&ccedil;as</td></tr>
<% } else { %>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(3,'mss_g3/mss_g3_p1_wiz3.jsp');">Certificados\licen&ccedil;as</a></td></tr>
<%}%>
<%if (OpcionActiva==4){ %>
	<tr><td class="fuentewizardactivo">&nbsp;Historial acad&eacute;mico</td></tr>	
<% } else { %>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(4,'mss_g3/mss_g3_p1_wiz4.jsp');">Historial acad&eacute;mico</a></td></tr>
<%}%>
<%if (OpcionActiva==5){ %>
	<tr><td class="fuentewizardactivo">&nbsp;Responsabilidades</td></tr>
<% } else { %>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(5,'mss_g3/mss_g3_p1_wiz5.jsp');">Responsabilidades</a></td></tr>
<%}%>

<%if (OpcionActiva==6){ %>
	<tr><td class="fuentewizardactivo">&nbsp;Idiomas</td></tr>
<% } else { %>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(6,'mss_g3/mss_g3_p1_wiz6.jsp');">Idiomas</a></td></tr>
<%}%>
	
<%if (OpcionActiva==7){ %>
	<tr><td class="fuentewizardactivo">&nbsp;Compet&ecirc;ncias</td></tr>	
<% } else { %>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(7,'mss_g3/mss_g3_p1_wiz7.jsp');">Compet&ecirc;ncias</a></td></tr>
<%}%>	
<tr>
<td align="center">
	<a href="javascript:navegar(1,'mss_g3/mss_g3_persist_wiz1.jsp');" ><img alt="Aceitar vaga" title="Aceitar vaga" src="/iconos/icono_guardar_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>&nbsp;
	<a href="javascript:navegar(1,'mss_g3/mss_g3_persist_wiz2.jsp');" ><img alt="Cancelar vaga" title="Cancelar vaga" src="/iconos/icono_eliminar_guardar_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
</td>
</tr>
<%}%>
</table>
</td>
</tr>
</table>
