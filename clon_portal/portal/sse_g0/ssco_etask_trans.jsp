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
<%@ include file="../sse_generico/sse_generico_lang.jsp" %>
<script type="text/javascript" language="Javascript1.5" src="/translations/m4err_<%=sLangEss%>.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/translations/m4err_mss_<%=sLangEss%>.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>


<%
  com.meta4.redirect.M4PropertiesRedirect TranEasytask = new com.meta4.redirect.M4PropertiesRedirect();
  TranEasytask.load(pageContext, "/translations/ssco_etask_" + sLangEss + ".properties");
%>
