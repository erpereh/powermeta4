<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_gen_error2.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<% response.setDateHeader("Expires", -1); %>
<%
	String compara = "1";
	if (zerror.equals(compara) == true){%>
<script type="text/javascript">
	urlLista = "/servlet/CheckSecurity/JSP/shco_rp/shco_m4throw_gen_inf.jsp?_M4TAGLET=<%=zsubsesion %>&_M4OBJECT=<%=zm4object%>&_M4ALIAS=<%=zm4object%>&ERROR=<%=zerrornivel2%>";
	msgWindow = window.open(urlLista,"Error","width=600;height=500,resizable,scrollbars");
</script>
<%}%>