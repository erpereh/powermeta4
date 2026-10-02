<%--
	@(#)FileVersion: 600.015.000
	@(#)FileDescription: Include genérico para páginas sse_g3 para trabajar con propiedades traducibles
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2005
	@(#)ProductName: PeopleNet Ksystem
	@(#)ProductVersion: 7.0
	@(#)InternalName: ssco_iv_trans.jsp
	@(#)Date: 15/04/2008
--%>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>

<%
  com.meta4.redirect.M4PropertiesRedirect tranivESS = new com.meta4.redirect.M4PropertiesRedirect();
  tranivESS.load(pageContext,"/translations/ssco_iv_" + sLangEss + ".properties");
%>
