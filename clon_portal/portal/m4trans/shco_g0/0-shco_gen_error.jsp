<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: Ventana genérica para mensajes de error
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_error.jsp
	@(#)Date: 21/02/2002
--%>
<% response.setDateHeader("Expires", -1); %>
<%
	String compara = "1";
	if (zerror.equals(compara) == true){%>
<script type="text/javascript">
	urlLista = "/servlet/CheckSecurity/JSP/shco_g0/shco_gen_inf.jsp?_M4TAGLET=<%=zsubsesion %>&_M4OBJECT=<%=zm4object%>&ERROR=<%=zerrornivel2%>";
	msgWindow = window.open(urlLista,"Error","width=600;height=500,resizable,scrollbars");
</script>
<%}%>
