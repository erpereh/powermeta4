<%--
	@(#)FileVersion: 600.015.000
	@(#)FileDescription: Include genérico para páginas sse_g3 del módulo de training para trabajar con propiedades traducibles
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2005
	@(#)ProductName: PeopleNet Ksystem
	@(#)ProductVersion: 7.0
	@(#)InternalName: sse_g3_trans.jsp
	@(#)Date: 12/12/2005
--%>
<%@ include file="../sse_generico/sse_generico_taglib.jsp" %>

<%
  com.meta4.redirect.M4PropertiesRedirect TrainEss = new com.meta4.redirect.M4PropertiesRedirect();
  TrainEss.load(pageContext,"/translations/ess_train_" + sLangEss + ".properties");
%>
