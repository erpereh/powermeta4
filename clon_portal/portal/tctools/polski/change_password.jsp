<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: change_password.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<html><title></title><head>
<%@ include file="/tctools/tc_login_bag.jsp" %>


<% String prodT = (String) session.getAttribute("_PROD");
   if(prodT!=null && prodT.equals("mobile")){		%>
		<link rel="stylesheet" href="/css/style_login_mobile.css" type="text/css" />
<% }else{%>
		<%@ include file="/shco_g0/shco_gen_css.jsp" %>
<% }%>
<%@ include file="/mobile/include_mobile_chgpass.jsp" %>
<body><center>

<%-- include change password form. --%>
<%String zUrlPage ="/tctools/change_password.jsp";%>

<%@ include file="/tctools/_change_password_include.jsp" %>

</center></body>
</html>
