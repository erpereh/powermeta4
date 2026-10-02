<table class = "tablanavegacion" border="1" width="100%" cellspacing="0">
<tr>
<%
	int zintervalo2 = zcount2/zventana;
	int zresto2 = zcount2%zventana;
	int zcontador2 = 0;
	int zsalto2 = 0;
	if (zresto2 > 0) {zintervalo2 = zintervalo2 + 1;}
		// Asi como la iteracion de construccion del contenido de la tabla de intervalos.
		// Dentro de la tabla, hay que hacer referencia a la propia pagina
		// anadiendo obligatoriamente el parametro zinicios2!!!

	for (zcontador2=0; zcontador2 < zintervalo2; zcontador2++) {
		ziniciointervalo2 = String.valueOf(1 + zcontador2*zventana);
		int zfinintervalo3 = zcontador2*zventana + zventana;
		String zfinintervalo2 = String.valueOf(zcontador2*zventana + zventana);
   		if (zfinintervalo3 > zcount2) {
			zfinintervalo2 = String.valueOf(zcontador2*zventana + zresto2);
		}
					
		// Cada n vueltas saltamos de fila:
		if(zsalto2 == zvuelta){
%>
</tr><tr>
<%
			zsalto2 = 0;
		}
		if (zinicios2.equals(ziniciointervalo2) == true){
%>
<td align="center" class="fuentebarraregistrosanulado"><%=ziniciointervalo2%>&nbsp;-&nbsp;<%=zfinintervalo2%>
<script type="text/javascript" language="Javascript1.2">
   m4valor('oculto','zinicios2',<%=ziniciointervalo2%>,'set');
</script> 
</td>
<% 			
		}
		else{
%>
<td align="center" class="fuentebarraregistros">
	<a href="javascript:m4valor('oculto','zinicios2',<%=ziniciointervalo2%>,'set');m4submit('oculto');" title="View Other Data"><%=ziniciointervalo2%>&nbsp;-&nbsp;<%=zfinintervalo2%></a></td>
	
	
<%
		}
		zsalto2 = zsalto2 + 1;
	}
%>
</tr>
</table>
