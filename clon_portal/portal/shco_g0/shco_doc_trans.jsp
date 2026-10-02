<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_doc_trans.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%
  com.meta4.redirect.M4PropertiesRedirect transdoc = new com.meta4.redirect.M4PropertiesRedirect();
  transdoc.load(pageContext,"/translations/shco_doc_" + zlanguser + ".properties");
  
%>
