<a class="enlacefuncional" title="In&iacute;cio" href="/servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0">In&iacute;cio</a>
<%
if ( estado.equals("1")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" />A minha informa&ccedil;&atilde;o pessoal
<%}
	if ( estado.equals("11")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" />
	<a title="A minha informa&ccedil;&atilde;o pessoal" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1">A minha informa&ccedil;&atilde;o pessoal</a>
<%}
if (estado.equals("2")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" />Os meus dados financeiros
<%} 
	if ( estado.equals("21")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" />
	<a title="Os meus dados financeiros" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2">Os meus dados financeiros</a>
<%}
if (estado.equals("3")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" />O meu posto de trabalho
<%} 
	if ( estado.equals("31")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" />
	<a title="O meu posto de trabalho" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3">O meu posto de trabalho</a>
   	<%}
if (estado.equals("4")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" />O meu tempo de trabalho
<%} 
	if ( estado.equals("41")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" />
	<a title="O meu tempo de trabalho" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4">O meu tempo de trabalho</a>
<%}
if (estado.equals("1") || estado.equals("2") || estado.equals("3") || estado.equals("4")) {
}else{%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Seta" />
<script type="text/javascript">
var ztitle = document.title;
document.write(ztitle);
</script>
<%}%>
