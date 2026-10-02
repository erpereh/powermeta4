<%
if ( estado != "0" ) {%><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0">In&iacute;cio</a>
<%} 
if ( estado.equals("1")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" />Informa&ccedil;&atilde;o pessoal
<%
}if ( estado.equals("112")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu_comp.jsp?estado=5">
Compensa&ccedil;&atilde;o salarial	
</a>
<%}
	if ( estado.equals("11")){%>
	<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_menu.jsp?estado=1">Informa&ccedil;&atilde;o pessoal</a>
<%}
if ( estado.equals("2")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" />Informa&ccedil;&atilde;o financeira
<%} 
	 if ( estado.equals("21")){%>
	<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu.jsp?estado=2">Informa&ccedil;&atilde;o financeira</a>
<%}
if ( estado.equals("3")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" />Postos de trabalho
<%}
	if ( estado.equals("31")){%>
	<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?estado=3">Postos de trabalho</a>
<%}
if ( estado.equals("4")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" />Tempo de trabalho
<%}
	if ( estado.equals("41")){%>
	<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_menu.jsp?estado=4">Tempo de trabalho</a>
<%}
if (estado.equals("0") || estado.equals("1") || estado.equals("2") || estado.equals("3") || estado.equals("4")) {
	
	}else{%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" />
<script type="text/javascript">
	var ztitle = document.title;
	document.write(ztitle);
</script>
<%}%>

