<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="6">&nbsp;Filtro</td></tr>
<form name="prueba" id="prueba" action="">
<tr>
	<td class="fuentecampofiltro" colspan="3">&nbsp;Empleado&nbsp;
	<select id="filtro" class="fuenteformulario150" onchange="filtrar()">
	<option value="<%=zfiltro%>"><m4:item m4name="<%=zNOMBREPERSON%>" htmlsafe="true"/></option>
	<option value="Todos">Todos</option>
	<m4:iterator m4rows="*" m4node="<%=ziteratorlista%>">
	<m4:param name="m4item0" value="<%=zSTDIDPERSON%>"/>
	<m4:param name="m4item1" value="<%=zNOMBREEMPLEADOlista%>"/>
	<option value="$M4ITEM0$">&nbsp;$M4ITEM1$</option>
	</m4:iterator>
	</select>
	</td>
	<td class="fuentecampofiltro" colspan="3">&nbsp;Nivel de validaci&oacute;n&nbsp;
	<select id="nivel" class="fuenteapartados" onchange="filtrar()">
	<option value="<%=znivel%>"><%=znivel%></option>
<%
String zmaxnivel = "";
int i = 0;
try {
	M4Operations calculo = new M4Operations(request);
	zmaxnivel = calculo.getItem(znodocom,zmeta4object,znodocom,"","MAX_NIVELES");
	int zmaxnivelnum = Integer.valueOf(zmaxnivel).intValue();
	for (i = 1; i <= zmaxnivelnum; i++){
%>
	<option value="<%=i%>"><%=i%></option>
<%
	}
} catch(Exception e) {}
%>
	</select>
	</td>
</tr>	
</form>
<tr>
	<td class="fuentecampo" colspan="3">
	<form id="motivo" name="motivo" action=" ">	
	&nbsp;Motivo de cancelaci&oacute;n&nbsp;
	<input title="Escribe el motivo de cancelaci&oacute;n gen&eacute;rico" size="30" id="motivog" name="motivog" type="text" maxlength="40" onkeyup="m4sincro()" />
	</form>
	</td>
	<td class="fuenteboton"><a href="m4marcaraceptar();" title="Pulse para aceptar todos los registros de esta p&aacute;gina"><img src="/iconos/icono_aceptar_todas_36_36.gif" width="36" height="36" alt="Pulse para aceptar todos los registros de esta p&aacute;gina" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
	<td class="fuenteboton"><a href="javascript:m4marcarcancelar();" title="Pulse para cancelar todos los registros de esta p&aacute;gina"><img src="/iconos/icono_cancelar_todas_mss_36_36.gif" width="36" height="36" alt="Pulse para cancelar todos los registros de esta p&aacute;gina" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
	<td class="fuenteboton"><a href="javascript:m4desmarcar();" title="Pulse para deshacer los cambios"><img src="/iconos/icono_deshacer_mss_36_36.gif" width="36" height="36" alt="Pulse para deshacer los cambios" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>

</tr>
<tr>
	<td class="fuenteboton" colspan="6"><a href="javascript:m4enviar();" title="Enviar"><img src="/iconos/icono_enviar_mss_36_36.gif" width="36" height="36" alt="Enviar" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>
</form>
