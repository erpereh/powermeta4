<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: Ventana de navegacion
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_vent_post.jsp
	@(#)Date: 21/02/2002
--%>
<table class="navegacion" width="100%" cellspacing="0"><tr>
<%
	int zintervalo = zcount/zventana;
	int zresto = zcount%zventana;
	int zcontador = 0;
	int zsalto = 0;
	if (zresto > 0) {zintervalo = zintervalo + 1;}
		// Asi como la iteracion de construccion del contenido de la tabla de intervalos.
		// Dentro de la tabla, hay que hacer referencia a la propia pagina
		// anadiendo obligatoriamente el parametro zinicio!!!
	int zokvuelta = 0;
	for (zcontador=0; zcontador < zintervalo; zcontador++) {
		String	ziniciointervalo = String.valueOf(1 + zcontador*zventana);
		int zfinintervalo2 = zcontador*zventana + zventana;
		String zfinintervalo = String.valueOf(zcontador*zventana + zventana);
   		if (zfinintervalo2 > zcount) {
			zfinintervalo = String.valueOf(zcontador*zventana + zresto);
		}
					
		// Cada n vueltas saltamos de fila:
		if(zsalto == zvuelta){ zokvuelta = 1;
%><tr><%
			zsalto = 0;
		}
		if (zinicio.equals(ziniciointervalo) == true){
%>
<td class="navegacion"><%=ziniciointervalo%>&nbsp;-&nbsp;<%=zfinintervalo%></td>
<% 			
		}
		else{
%>
<td align="center" class="navegacion2">
	<a href="javascript:m4valor('oculto','zinicio',<%=ziniciointervalo%>,'set');valores();"><%=ziniciointervalo%>&nbsp;-&nbsp;<%=zfinintervalo%></a></td>
	
	
<%
		}
		zsalto = zsalto + 1;
	}
%>
</tr>
<%// Control de corte de datos en el nodo
if (zcount > 299) {
int ztoomuch = 1;
if (zokvuelta == 0){ztoomuch = zsalto;}else{ztoomuch = zvuelta;}
%><%@ include file="/m4trans/shco_g0/0-shco_gen_vent_toomuch.jsp" %><%}%>
</table>
