<%--
	@(#)FileVersion: 600.015.000
	@(#)FileDescription: Include genérico para páginas mss_g3 del módulo de training para trabajar con propiedades traducibles
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2005
	@(#)ProductName: PeopleNet Ksystem
	@(#)ProductVersion: 7.0
	@(#)InternalName: mss_train_trans.jsp
	@(#)Date: 12/12/2005
--%>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>

<%
  com.meta4.redirect.M4PropertiesRedirect TrainMss = new com.meta4.redirect.M4PropertiesRedirect();
  TrainMss.load(pageContext, "/translations/mss_train_" + sLangEss + ".properties");
%>