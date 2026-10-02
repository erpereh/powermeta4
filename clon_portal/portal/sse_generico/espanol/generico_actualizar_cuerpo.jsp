<br /><br /><br /><br /><br /><br /><br /><br />
<table align="center" cellpadding="0" cellspacing="0">
<tr>
	<td class="fuenteactualizar">Procesando datos</td>
</tr>
<tr>
	<td class="fuenteactualizar2">Por favor, espere unos instantes.</td>
</tr>
</table>
<%
	String compara = "N";
	String zcomparafuncional = "U";	
	if (zerror.equals(compara) == false){
 %>
<script type="text/javascript">
	urlLista = "/servlet/CheckSecurity/JSP/sse_generico/generico_informacion_desarrollador.jsp?_M4TAGLET=<%= zsubsesion %>";
	msgWindow = window.open(urlLista,"Error","width=600;height=200,resizable,scrollbars");
</script>
<%}
	if(zerror.equals(zcomparafuncional) == true){%>
<script type="text/javascript">
	urlLista = "/servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=<%= zsubsesion %>";
	msgWindow = window.open(urlLista,"Error","width=600;height=200,resizable,scrollbars");
</script>
<%}%>