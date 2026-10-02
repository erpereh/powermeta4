<%
	M4SessionCl sesion = M4Context.getM4SessionCl(request);
	String slanguage = sesion.getBagEntries("lang");
%>
	<script type="text/javascript" language="Javascript1.5">
	var slanguage = "<%=slanguage%>";
	</script>
