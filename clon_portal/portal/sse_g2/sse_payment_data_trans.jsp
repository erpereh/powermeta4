<%--
	@(#)FileVersion: 600.015.000
	@(#)FileDescription: Include genérico para páginas sse_g3 para trabajar con propiedades traducibles
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2005
	@(#)ProductName: PeopleNet Ksystem
	@(#)ProductVersion: 7.0
	@(#)InternalName: sse_g2_trans.jsp
	@(#)Date: 04/04/2006
--%>
<%@ include file="../sse_generico/sse_generico_taglib.jsp" %>

<%
  com.meta4.redirect.M4PropertiesRedirect g2_paymentdata = new com.meta4.redirect.M4PropertiesRedirect();
  g2_paymentdata.load(pageContext, "/translations/ess_payment_data_" + sLangEss + ".properties");
%>
