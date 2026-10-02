<table class = "tablanavegacion" border="1" width="100%" cellspacing="0">
<tr>
<%
	int zintervalo = zcount/zventana;
	int zresto = zcount%zventana;
	int zcontador = 0;
	int zsalto = 0;
	if (zresto > 0) {zintervalo = zintervalo + 1;}
		// As for the interation to build the content of the interval table.
		// Within the table, you must reference the page itself
		// adding the required zinicios parameter!!!

	for (zcontador=0; zcontador < zintervalo; zcontador++) {
		String	ziniciointervalo = String.valueOf(1 + zcontador*zventana);
		int zfinintervalo2 = zcontador*zventana + zventana;
		String zfinintervalo = String.valueOf(zcontador*zventana + zventana);
   		if (zfinintervalo2 > zcount) {
			zfinintervalo = String.valueOf(zcontador*zventana + zresto);
		}
					
		// Change rows every n intervals:
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
<td class="fuentebarraregistros"><a href="javascript:parametros=['zinicios','estado'];valores=['<%=ziniciointervalo%>','<%=zestado%>'];m4navegar('<%=zdireccion%>',parametros,valores);" title="View Other Data"><%=ziniciointervalo%>&nbsp;-&nbsp;<%=zfinintervalo%></a></td>
<%
		}
		zsalto = zsalto + 1;
	}
%>
</tr>
</table>
