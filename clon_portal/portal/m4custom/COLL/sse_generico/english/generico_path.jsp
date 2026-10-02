<a class="enlacefuncional" title="Home" href="/servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0">Home</a>
<%
if ( estado.equals("1")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" />My Personal Information
<%}
	if ( estado.equals("11")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" />
	<a title="My Personal Information" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1">My Personal Information</a>
<%}
if (estado.equals("2")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" />My Financial Information
<%} 
	if ( estado.equals("21")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" />
	<a title="My Financial Information" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2">My Financial Information</a>
<%}
if (estado.equals("3")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" />My Job
<%} 
	if ( estado.equals("31")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" />
	<a title="My Job" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3">My Job</a>
   	<%}
if (estado.equals("4")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" />My Work Time
<%} 
	if ( estado.equals("41")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" />
	<a title="My Work Time" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4">My Work Time</a>
<%}
if (estado.equals("1") || estado.equals("2") || estado.equals("3") || estado.equals("4")) {
}else{%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" />
<script type="text/javascript">
var ztitle = document.title;
document.write(ztitle);
</script>
<%}%>

