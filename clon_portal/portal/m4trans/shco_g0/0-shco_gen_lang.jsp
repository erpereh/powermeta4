<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_lang.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ page import="com.meta4.configuration.*" %>

<%

	int iLanguage = new Integer(zlang).intValue();
	String zLangFolder = CheckConfig.checkFolderLanguage(iLanguage);
	String zlanguser = CheckConfig.checkLocale(iLanguage);
%>


<script type="text/javascript">
var slanguser = "<%=zlanguser%>"
</script>
