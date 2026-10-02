<a class="enlacefuncional" title="Inicio" href="/servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0">Inicio</a>
<%
if ( estado.equals("1")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" />Mi informaci&oacute;n personal
<%}
	if ( estado.equals("11")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" />
	<a title="Mi informaci&oacute;n personal" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1">Mi informaci&oacute;n personal</a>
<%}
if (estado.equals("2")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" />Mis datos econ&oacute;micos
<%} 
	if (estado.equals("21")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" />
	<a title="Mis datos econ&oacute;micos" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2">Mis datos econ&oacute;micos</a>
<%}
if (estado.equals("3")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" />Mi puesto de trabajo
<%} 
	if (estado.equals("31")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" />
	<a title="Mi puesto de trabajo" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3">Mi puesto de trabajo</a>
   	<%}
if (estado.equals("4")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" />Mi tiempo de trabajo
<%} 
	if (estado.equals("41")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" />
	<a title="Mi tiempo de trabajo" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4">Mi tiempo de trabajo</a>
<%}
if (estado.equals("1") || estado.equals("2") || estado.equals("3") || estado.equals("4")) {
}else{%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" />
<script type="text/javascript">
var ztitle = document.title;
document.write(ztitle);
</script>
<%}%>