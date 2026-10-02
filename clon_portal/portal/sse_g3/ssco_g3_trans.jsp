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
<%@ include file="../sse_generico/sse_generico_taglib.jsp" %>

<%
  java.util.Properties tranivESS = new Properties();
  tranivESS.load(application.getResourceAsStream("/translations/ssco_iv_" + sLangEss + ".properties"));
%>
