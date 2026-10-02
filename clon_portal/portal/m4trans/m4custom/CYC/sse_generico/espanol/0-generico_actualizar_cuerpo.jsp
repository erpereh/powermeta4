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
	if (zerror.equals(compara) == true){

		String zmeta4object_n = zsubsesion;
		String znodo2_n = "SSE_COMUNICACION";
		String zoutputdef_u = zsubsesion + "!" + znodo2_n + "[*]";   
		String zraiz_n = zsubsesion + "!" + znodo2_n + ".";
		String zTEXTOERRORES_n = znodo2_n + ":" + zraiz_n + "TEXTO_ERRORES";
 %>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object_n%>" m4name="<%=zsubsesion%>"/>
<m4:outputdef m4alias="<%=znodo2_n%>"><m4:param name="m4name0" value="<%=zoutputdef_u%>"/></m4:outputdef>
<m4:endjob/>

<script type="text/javascript">
	urlLista = "/servlet/CheckSecurity/JSP/sse_generico/generico_informacion_desarrollador.jsp?_M4TAGLET=<%= zsubsesion %>";
	//msgWindow = window.open(urlLista,"Error","width=600;height=200,resizable,scrollbars");
	var error_salida = '<m4:item m4name="<%=zTEXTOERRORES_n%>" jsafe="true" htmlsafe="true"/>';
	//var aux = error_salida.split(';');
	//var salida = aux[aux.length-1];

	var valor_final = $('<p/>').html(error_salida).text();

	//alert(valor_final);

	var checkhtml = /<\/?[a-z][\s\S]*>/i.test(valor_final);
	if(checkhtml){
		console.log(valor_final);
	}else{
		alert(valor_final);
	}
	
</script>

<%}
	if(zerror.equals(zcomparafuncional) == true){

		String zmeta4object_u = zsubsesion;
		String znodo2_u = "SSE_COMUNICACION";
		String zoutputdef_u = zsubsesion + "!" + znodo2_u + "[*]";   
		String zraiz_u = zsubsesion + "!" + znodo2_u + ".";
		String zTEXTOERRORES_u = znodo2_u + ":" + zraiz_u + "TEXTO_ERRORES_USUARIO";
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object_u%>" m4name="<%=zsubsesion%>"/>
<m4:outputdef m4alias="<%=znodo2_u%>"><m4:param name="m4name0" value="<%=zoutputdef_u%>"/></m4:outputdef>
<m4:endjob/>

<script type="text/javascript">
	urlLista = "/servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=<%= zsubsesion %>";
	//msgWindow = window.open(urlLista,"Error","width=600;height=200,resizable,scrollbars");
	var error_salida = '<m4:item m4name="<%=zTEXTOERRORES_u%>" jsafe="true" htmlsafe="true"/>';
	var aux = error_salida.split(';');
	var salida = aux[aux.length-1];
	alert(salida);
</script>

<%}%>