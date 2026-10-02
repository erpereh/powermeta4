<%--
	@(#)FileVersion: 600.015.000
	@(#)FileDescription: Include genérico para páginas mss_g3 para trabajar con propiedades traducibles
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2005
	@(#)ProductName: PeopleNet Ksystem
	@(#)ProductVersion: 6.0
	@(#)InternalName: smco_iv_trans.jsp
	@(#)Date: 15/04/2005
--%>
<%@ include file="../sse_generico/sse_generico_taglib.jsp" %>
<%
  com.meta4.redirect.M4PropertiesRedirect tranivMSS = new com.meta4.redirect.M4PropertiesRedirect();
  tranivMSS.load(pageContext, "/translations/smco_iv_" + sLangEss + ".properties");
%>
