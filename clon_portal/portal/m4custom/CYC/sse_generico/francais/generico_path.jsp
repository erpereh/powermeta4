<a class="enlacefuncional" title="Accueil" href="/servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0">Accueil</a>
<%
if ( estado.equals("1")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" />Votre dossier personnel
<%}
	if ( estado.equals("11")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" />
	<a title="Votre dossier personnel" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1">Votre dossier personnel</a>
<%}
if (estado.equals("2")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" />Vos donn&eacute;es financi&egrave;res
<%} 
	if ( estado.equals("21")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" />
	<a title="Vos donn&eacute;es financi&egrave;res" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2">Vos donn&eacute;es financi&egrave;res</a>
<%}
if (estado.equals("3")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" />Votre emploi
<%} 
	if ( estado.equals("31")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" />
	<a title="Votre emploi" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3">Votre emploi</a>
   	<%}
if (estado.equals("4")){%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" />Votre temps de travail
<%} 
	if ( estado.equals("41")) {%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" />
	<a title="Votre temps de travail" class="enlacefuncional" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4">Votre temps de travail</a>
<%}
if (estado.equals("1") || estado.equals("2") || estado.equals("3") || estado.equals("4")) {
}else{%><img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Fl&egrave;che" />
<script type="text/javascript">
var ztitle = document.title;
document.write(ztitle);
</script>
<%}%>
