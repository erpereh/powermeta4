<%
String IsKnownet = zsesion.getBagEntries("IsKnownet");
%>
<script type="text/javascript" src="/libreria/dom1.js"></script>	
<table width="100%" class="tablacabecera">
<tr>
	<td><img src="/iconos/english/icono_cabecera_sse_56_404.gif" alt="Title" width="404" height="56" /></td>
	<td align="center"><a href="/servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0" title="MSS"><img width="36" height="36" src="/iconos/icono_mss_36_36.gif" alt="MSS" onmouseover="m4luztotal(this,200,200,200,13,6,15,175,175,255)" onmouseout="m4oscuridad(this)"/></a></td>
	<td align="center"><a href="/servlet/CheckSecurity/JSP/sse_generico/generico_mapa.jsp?estado=0" title="ESS Map"><img width="36" height="36" src="/iconos/icono_mapa_36_36.gif" alt="ESS Map" onmouseover="m4luztotal(this,200,200,200,13,6,15,175,175,255)" onmouseout="m4oscuridad(this)" /></a></td>
	<td align="center"><a href="/servlet/CheckSecurity/JSP/sse_generico/sse_logout.jsp?estado=0" title="Disconnect"><img width="36" height="36" src="/iconos/ic_log_off_36_36.gif" alt="Disconnect" onmouseover="m4luztotal(this,200,200,200,13,6,15,175,175,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>







<table id="tablamenu"class="tablamenu" width="100%">
<tr>									
	<td id="tdmenu" class="fuentemenuprincipal"><a href="/servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0" class="fuentemenuprincipal">Home</a>&nbsp;|&nbsp;
	<a href="/servlet/CheckSecurity/JSP/sse_generico/ssegenerico_pendientes.jsp?estado=0" class="fuentemenuprincipal">My Tasks</a>&nbsp;|&nbsp;
	<a id="g1" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1" class="fuentemenuprincipal" onmouseover="sse_g1.mostrardiv('sse_g1');" onmouseout="sse_g1.ocultardiv('sse_g1');">My Personal Information</a>&nbsp;|&nbsp;
	<a id="g2" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2" class="fuentemenuprincipal"  onmouseover="sse_g2.mostrardiv('sse_g2');" onmouseout="sse_g2.ocultardiv('sse_g2');">My Financial Information</a>&nbsp;|&nbsp;
	<a id="g3" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3" class="fuentemenuprincipal"  onmouseover="sse_g3.mostrardiv('sse_g3');" onmouseout="sse_g3.ocultardiv('sse_g3');">My Job</a>&nbsp;|&nbsp;
	<a id="g4" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4" class="fuentemenuprincipal" onmouseover="sse_g4.mostrardiv('sse_g4');" onmouseout="sse_g4.ocultardiv('sse_g4');">My Work Time</a>
	<%if(IsKnownet.equals("0")){%>
	&nbsp;|&nbsp;
	<a id="g5" href="/servlet/CheckSecurity/JSP/sse_g5/sse_g5_menu.jsp?estado=5" onmouseover="sse_g5.mostrardiv('sse_g5');" onmouseout="sse_g5.ocultardiv('sse_g5');" class="fuentemenuprincipal">My Knowledge</a>
	<%}%>
</td>
</tr>
</table>
<script type="text/javascript">
var sse_g1 = new grupo("sse_g1",240,0,77,mlinks1,mnombres1);
sse_g1.generarcapa();
var sse_g2 = new grupo("sse_g2",240,0,77,mlinks2,mnombres2);
sse_g2.generarcapa();
var sse_g3 = new grupo("sse_g3",240,0,77,mlinks3,mnombres3);
sse_g3.generarcapa();
var sse_g4 = new grupo("sse_g4",240,0,77,mlinks4,mnombres4);
sse_g4.generarcapa();
<%if(IsKnownet.equals("0")){%>
var sse_g5 = new grupo("sse_g5",240,0,77,mlinks5,mnombres5);
sse_g5.generarcapa();
<%}%>
</script>
<table width="100%">
<tr>
	<td class="fuentebarranombre" align="left"><%@ include file="generico_path.jsp" %></td>
	<td class="fuentebarranombre" align="right"><%=zNOMBRE%>&nbsp;-&nbsp;<%@ include file="generico_fecha.jsp" %></td>
</tr>	        
<tr>
	<td colspan="2" class="separador"></td>
</tr>
</table>
