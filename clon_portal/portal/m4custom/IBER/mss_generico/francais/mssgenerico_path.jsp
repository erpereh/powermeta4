<%
if ( estado != "0" ) {%><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0">Accueil</a>
<%} 
if ( estado.equals("1")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" />Dossiers personnels
<%
}if ( estado.equals("112")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu_comp.jsp?estado=5">
R&eacute;mun&eacute;ration	
</a>
<%}
	if ( estado.equals("11")){%>
	<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_menu.jsp?estado=1">Dossiers personnels</a>
<%}
if ( estado.equals("2")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" />Donn&eacute;es financi&egrave;res
<%} 
	 if ( estado.equals("21")){%>
	<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu.jsp?estado=2">Donn&eacute;es financi&egrave;res</a>
<%}
if ( estado.equals("3")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" />Emplois
<%}
	if ( estado.equals("31")){%>
	<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?estado=3">Emplois</a>
<%}
if ( estado.equals("4")){%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" />Temps de travail
<%}
	if ( estado.equals("41")){%>
	<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" /><a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_menu.jsp?estado=4">Temps de travail</a>
<%}
if (estado.equals("0") || estado.equals("1") || estado.equals("2") || estado.equals("3") || estado.equals("4")) {
	
	}else{%>
<img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" />
<script type="text/javascript">
	var ztitle = document.title;
	document.write(ztitle);
</script>
<%}%>

