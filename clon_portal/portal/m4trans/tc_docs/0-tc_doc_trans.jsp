<%--
	@(#)FileVersion: 812.000.030
	@(#)FileDescription: documents manager (translations)
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: tc_doc_trans.jsp
	@(#)Date: 18/02/2013
--%>

<%
  com.meta4.redirect.M4PropertiesRedirect transdoc = new com.meta4.redirect.M4PropertiesRedirect();
  transdoc.load(pageContext,"/translations/shco_doc_" + zlanguser + ".properties");
%>
