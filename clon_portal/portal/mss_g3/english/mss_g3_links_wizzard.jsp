<table width="100%" class="tablalink">
<tr>
<td>
<table class="descripcionfuncional" width="100%" cellspacing="0" cellpadding="2">
<tr><td class="fuentelinktitulo" colspan="2">Vacancy</td></tr>
<tr><td class="descripcionfuncional"><img width="50" height="50" src="/iconos/noname_mago_43_80.gif" alt="Wizard" /></td></tr>
<%if (OpcionActiva==1){ 
	int  zcount  = 0;
	try {
		M4Operations m = new M4Operations(request);
		zcount = m.getCount("SSM_JOB_POST","SSM_VACANT","SSM_JOB_POST");
	} catch(Exception e) {}
%>
	<% if (zcount != 0) { %>
	<tr><td class="fuentewizardactivo">&nbsp;Definition</td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(2,'mss_g3/mss_g3_p1_wiz2.jsp');">Previous Employment</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(3,'mss_g3/mss_g3_p1_wiz3.jsp');">Certificates/Licenses</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(4,'mss_g3/mss_g3_p1_wiz4.jsp');">Academic Background</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(5,'mss_g3/mss_g3_p1_wiz5.jsp');">Duties and Responsibilities</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(6,'mss_g3/mss_g3_p1_wiz6.jsp');">Languages</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(7,'mss_g3/mss_g3_p1_wiz7.jsp');">Extended Knowledge</a></td></tr>
	<tr><td align="center">
	<a href="javascript:comprobar(0);" ><img alt="Approve Vacancy" title="Approve Vacancy" src="/iconos/icono_guardar_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>&nbsp;
	<a href="javascript:navegar(1,'mss_g3/mss_g3_persist_wiz2.jsp');" ><img alt="Reject Vacancy" title="Reject Vacancy" src="/iconos/icono_eliminar_guardar_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
	</td></tr>
	<% } else { %>
	<tr><td class="fuentewizardactivo">&nbsp;Definition</td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:comprobar(1,'mss_g3/mss_g3_p1_wiz2.jsp');">Previous Employment</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:comprobar(1,'mss_g3/mss_g3_p1_wiz3.jsp');">Certificates/Licenses</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:comprobar(1,'mss_g3/mss_g3_p1_wiz4.jsp');">Academic Background</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:comprobar(1,'mss_g3/mss_g3_p1_wiz5.jsp');">Duties and Responsibilities</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:comprobar(1,'mss_g3/mss_g3_p1_wiz6.jsp');">Languages</a></td></tr>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:comprobar(1,'mss_g3/mss_g3_p1_wiz7.jsp');">Extended Knowledge</a></td></tr>
	<tr><td align="center">
	<a href="javascript:comprobar(0);" ><img alt="Approve Vacancy" title="Approve Vacancy" src="/iconos/icono_guardar_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>&nbsp;
	<a href="javascript:NullValue();" ><img alt="Reject Vacancy" title="Reject Vacancy" src="/iconos/icono_eliminar_guardar_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
	</td></tr>
	<%}%>

<% } else { %>
	<tr><td class="fuentewizard"><a href="javascript:navegar(1,'mss_g3/mss_g3_p1_wiz1.jsp');">&nbsp;Definition</a></td></tr>
<%if (OpcionActiva==2){ %>
	<tr><td class="fuentewizardactivo">&nbsp;Previous Employment</td></tr>
<% } else { %>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(2,'mss_g3/mss_g3_p1_wiz2.jsp');">Previous Employment</a></td></tr>
<%}%>

<%if (OpcionActiva==3){ %>
	<tr><td class="fuentewizardactivo">&nbsp;Certificates/Licenses</td></tr>
<% } else { %>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(3,'mss_g3/mss_g3_p1_wiz3.jsp');">Certificates/Licenses</a></td></tr>
<%}%>
<%if (OpcionActiva==4){ %>
	<tr><td class="fuentewizardactivo">&nbsp;Academic Background</td></tr>	
<% } else { %>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(4,'mss_g3/mss_g3_p1_wiz4.jsp');">Academic Background</a></td></tr>
<%}%>
<%if (OpcionActiva==5){ %>
	<tr><td class="fuentewizardactivo">&nbsp;Duties and Responsibilities</td></tr>
<% } else { %>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(5,'mss_g3/mss_g3_p1_wiz5.jsp');">Duties and Responsibilities</a></td></tr>
<%}%>

<%if (OpcionActiva==6){ %>
	<tr><td class="fuentewizardactivo">&nbsp;Languages</td></tr>
<% } else { %>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(6,'mss_g3/mss_g3_p1_wiz6.jsp');">Languages</a></td></tr>
<%}%>
	
<%if (OpcionActiva==7){ %>
	<tr><td class="fuentewizardactivo">&nbsp;Extended Knowledge</td></tr>	
<% } else { %>
	<tr><td class="fuentewizard">&nbsp;<a href="javascript:navegar(7,'mss_g3/mss_g3_p1_wiz7.jsp');">Extended Knowledge</a></td></tr>
<%}%>	
<tr>
<td align="center">
	<a href="javascript:navegar(1,'mss_g3/mss_g3_persist_wiz1.jsp');" ><img alt="Approve Vacancy" title="Approve Vacancy" src="/iconos/icono_guardar_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>&nbsp;
	<a href="javascript:navegar(1,'mss_g3/mss_g3_persist_wiz2.jsp');" ><img alt="Reject Vacancy" title="Reject Vacancy" src="/iconos/icono_eliminar_guardar_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
</td>
</tr>
<%}%>
</table>
</td>
</tr>
</table>
