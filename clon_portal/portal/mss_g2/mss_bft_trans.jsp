<%--
	@(#)FileVersion: 600.015.000
	@(#)FileDescription: Include genérico para páginas mss_g3 para trabajar con propiedades traducibles
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2005
	@(#)ProductName: PeopleNet Ksystem
	@(#)ProductVersion: 6.0
	@(#)InternalName: mss_g3_trans.jsp
	@(#)Date: 12/12/2005
--%>
<%@ include file="../sse_generico/sse_generico_taglib.jsp" %>
<%
  com.meta4.redirect.M4PropertiesRedirect TranMss = new com.meta4.redirect.M4PropertiesRedirect();
  TranMss.load(pageContext, "/translations/mss_bft_" + sLangEss + ".properties");
%>
