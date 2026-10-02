<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: Include genérico para páginas shco_login para trabajar  con propiedades traducibles
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_login_box_trans.jsp
	@(#)Date: 18/02/2013
--%>

<%
  com.meta4.redirect.M4PropertiesRedirect Tran_shco_login_box = new com.meta4.redirect.M4PropertiesRedirect();
  Tran_shco_login_box.load(pageContext,"/translations/shco_login_box_" + zlanguser + ".properties");
%>
