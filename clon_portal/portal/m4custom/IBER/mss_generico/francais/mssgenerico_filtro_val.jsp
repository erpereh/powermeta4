<m4:item m4varname="sFiltroName" m4name="<%=zNOMBREPERSON%>"/>
<%
String sFiltroNameL="Tous";
if (zfiltro.equals("Todos")){
 sFiltroName=sFiltroNameL;
} 

%>
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="6">&nbsp;Filtre</td></tr>
<form name="prueba" id="prueba" action="">
<tr>
	<td class="fuentecampofiltro" colspan="3">&nbsp;Collaborateur&nbsp;
	<select id="filtro" class="fuenteformulario200" onchange="filtrar()"title="S&eacute;lectionnez un collaborateur">
	<option value="Todos"><%=sFiltroNameL%></option>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountvlista).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDPERSON%>" htmlsafe="true"/>">&nbsp;<m4:item m4name="<%=zNOMBREEMPLEADOlista%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
			<script type="text/javascript" language="Javascript1.5">
         if ('<%=zfiltro%>'!= "Todos"){
           m4searchoptioness('prueba','filtro','<%=zfiltro%>');
         }
         </script>	
	<td class="fuentecampofiltro" colspan="3">&nbsp;Niveau de validation&nbsp;
	<select id="nivel" class="fuenteapartados" onchange="filtrar()"title="S&eacute;lectionnez un niveau de validation">

<%
String zmaxnivel = "";
int i = 0;
try {
	M4Operations calculo = new M4Operations(request);
	zmaxnivel = calculo.getItem(znodocom,zmeta4object,znodocom,"","MAX_NIVELES");
	int zmaxnivelnum = Integer.valueOf(zmaxnivel).intValue();
 if (zmaxnivel.equals("0")){
	%>
		<option value="<%=znivel%>"><%=znivel%></option>
<%
	}for (i = 1; i <= zmaxnivelnum; i++){
%>
	<option value="<%=i%>"><%=i%></option>
<%
	}
} catch(Exception e) {}
%>
	</select>
	</td>
	<% if (zmaxnivel != "1"){%>
			<script type="text/javascript" language="Javascript1.5">
	 m4searchoptioness('prueba','nivel','<%=znivel%>');
</script>
<% } %>


</tr>	
</form>
<tr>
	<td class="fuentecampo" colspan="3">
	<form id="motivo" name="motivo" action="">	
	&nbsp;Motif d'annulation&nbsp;
	<input title="Indiquez le motif g&eacute;n&eacute;rique d'annulation" size="35" id="motivog" name="motivog" type="text" maxlength="40" onkeyup="m4sincro()" />
	</form>
	</td>
	<td class="fuenteboton"><a href="javascript:m4marcaraceptar();" title="Accepter tous les enregistrements de la page"><img src="/iconos/icono_aceptar_todas_36_36.gif" width="36" height="36" alt="Accepter tous les enregistrements de la page" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
	<td class="fuenteboton"><a href="javascript:m4marcarcancelar();" title="Annuler tous les enregistrements de la page"><img src="/iconos/icono_cancelar_todas_mss_36_36.gif" width="36" height="36" alt="Annuler tous les enregistrements de la page" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
	<td class="fuenteboton"><a href="javascript:m4desmarcar();" title="Annuler les changements"><img src="/iconos/icono_deshacer_mss_36_36.gif" width="36" height="36" alt="Annuler les changements" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>

</tr>
<tr>
	<td class="fuenteboton" colspan="6"><a href="javascript:m4enviar();" title="Envoyer"><img src="/iconos/icono_enviar_mss_36_36.gif" width="36" height="36" alt="Envoyer" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>
</form>

