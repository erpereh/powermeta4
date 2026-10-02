<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>	
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>

<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="6">&nbsp;<%=Tran.getProperty("Label.Filtro")%></td></tr>
<form name="prueba" id="prueba" action="">
<tr>
	<td class="fuentecampofiltro" colspan="6">&nbsp;<%=Tran.getProperty("Label.Nivel")%>&nbsp;
	<select id="nivel" class="fuenteapartados" onchange="filtrar()"title="<%=Tran.getProperty("Label.NivelSelec")%>">
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
	<form id="motivo" name="motivo" action="">	
	&nbsp;<%=Tran.getProperty("Label.Motivo")%>&nbsp;
	<input title="<%=Tran.getProperty("Label.MotivoGen")%>" size="35" id="motivog" name="motivog" type="text" maxlength="40" onkeyup="m4sincro()" />
	</form>
	</td>
	<td class="fuenteboton"><a href="javascript:m4marcaraceptar();" title="<%=Tran.getProperty("Label.AceptarReg")%>"><img src="/iconos/icono_aceptar_todas_36_36.gif" width="36" height="36" alt="<%=Tran.getProperty("Label.AceptarReg")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
	<td class="fuenteboton"><a href="javascript:m4marcarcancelar();" title="<%=Tran.getProperty("Label.CancelarReg")%>"><img src="/iconos/icono_cancelar_todas_mss_36_36.gif" width="36" height="36" alt="<%=Tran.getProperty("Label.CancelarReg")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
	<td class="fuenteboton"><a href="javascript:m4desmarcar();" title="<%=Tran.getProperty("Label.Deshacer")%>"><img src="/iconos/icono_deshacer_mss_36_36.gif" width="36" height="36" alt="Pressione para desfazer as alterações" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>

</tr>
<tr>
	<td class="fuenteboton" colspan="6"><a href="javascript:m4enviar();" title="<%=Tran.getProperty("Button.Send")%>"><img src="/iconos/icono_enviar_mss_36_36.gif" width="36" height="36" alt="<%=Tran.getProperty("Button.Send")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>
</form>

