<script>
function m4navegarModal(inicio,estado) {
	m4valor("NombreFormulario","zinicios",inicio,"set");
	m4valor("NombreFormulario","estado",estado,"set");
	m4submit("NombreFormulario");
}
</script>

<table class = "tablanavegacion" border="1" width="100%" cellspacing="0">
<tr>
<%
	int zintervalo = zcount/zventana;
	int zresto = zcount%zventana;
	int zcontador = 0;
	int zsalto = 0;
	if (zresto > 0) {zintervalo = zintervalo + 1;}
		// Asi como la iteracion de construccion del contenido de la tabla de intervalos.
		// Dentro de la tabla, hay que hacer referencia a la propia pagina
		// anadiendo obligatoriamente el parametro zinicios!!!

	for (zcontador=0; zcontador < zintervalo; zcontador++) {
		String	ziniciointervalo = String.valueOf(1 + zcontador*zventana);
		int zfinintervalo2 = zcontador*zventana + zventana;
		String zfinintervalo = String.valueOf(zcontador*zventana + zventana);
   		if (zfinintervalo2 > zcount) {
			zfinintervalo = String.valueOf(zcontador*zventana + zresto);
		}
					
		// Cada n vueltas saltamos de fila:
		if(zsalto == zvuelta){
%>
</tr><tr>
<%
			zsalto = 0;
		}
		if (zinicios.equals(ziniciointervalo) == true){
%>
<td class="fuentebarraregistrosanulado"><%=ziniciointervalo%>&nbsp;-&nbsp;<%=zfinintervalo%></td>
<% 			
		}
		else{
%>
<td class="fuentebarraregistros"><a href="javascript:m4navegarModal('<%=ziniciointervalo%>','<%=zestado%>');" title="Ver otros datos"><%=ziniciointervalo%>&nbsp;-&nbsp;<%=zfinintervalo%></a></td>
<%
		}
		zsalto = zsalto + 1;
	}
%>
</tr>
</table>
