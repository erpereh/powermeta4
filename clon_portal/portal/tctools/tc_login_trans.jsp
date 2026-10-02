<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_login_trans.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%
  com.meta4.redirect.M4PropertiesRedirect Tran_tc_login = new com.meta4.redirect.M4PropertiesRedirect();
  Tran_tc_login.load(pageContext,"/translations/tc_login_" + zlanguser + ".properties");
%>
