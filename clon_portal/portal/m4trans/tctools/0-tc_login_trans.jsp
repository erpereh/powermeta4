<%-- [=====================================================]  

	@(#)FileVersion: 814.002.013 
	@(#)FileDescription: Customizable translation unit for tc_login
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2017
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP4
	@(#)InternalName: tc_login_trans.jsp
	@(#)Date: 18/02/2013
	
[=====================================================] --%>

<%
  com.meta4.redirect.M4PropertiesRedirect Tran_tc_login = new com.meta4.redirect.M4PropertiesRedirect();
  Tran_tc_login.load(pageContext,"/translations/tc_login_" + zlanguser + ".properties");
%>
