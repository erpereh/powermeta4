<%
if ( estado != "0" ) {%><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0">Home</a>
<%} 
if ( estado.equals("1")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" />Personal Information
<%
}if ( estado.equals("112")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu_comp.jsp?estado=5">
Cash Compensation	
</a>
<%}
	if ( estado.equals("11")){%>
	<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_menu.jsp?estado=1">Personal Information</a>
<%}
if ( estado.equals("2")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" />Financial Information
<%} 
	 if ( estado.equals("21")){%>
	<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu.jsp?estado=2">Financial Information</a>
<%}
if ( estado.equals("3")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" />Jobs
<%}
	if ( estado.equals("31")){%>
	<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?estado=3">Jobs</a>
<%}
if ( estado.equals("4")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" />Work Time
<%}
	if ( estado.equals("41")){%>
	<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_menu.jsp?estado=4">Work Time</a>
<%}
if (estado.equals("0") || estado.equals("1") || estado.equals("2") || estado.equals("3") || estado.equals("4")) {
	
	}else{%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Arrow" />
<script type="text/javascript">
	var ztitle = document.title;
	document.write(ztitle);
</script>
<%}%>

