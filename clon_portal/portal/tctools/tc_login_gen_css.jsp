<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_login_gen_css.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%-- Gestión de localización por producto. --%>
<%
String prodMob = (String) session.getAttribute("_PROD");
if(prodMob!=null && prodMob.equals("mobile")){
	%><link href="/css/style_login_mobile.css" type="text/css" rel="stylesheet"/><%
}else{
pageContext.setAttribute("zProdFileURI","/shco_g0_" + zappprod + "/shco_gen_css.jsp" );
if (M4FileURIChecker.exists((String)pageContext.getAttribute("zProdFileURI"),pageContext)== true){
%>
<jsp:include page='<%=(String)pageContext.getAttribute("zProdFileURI")%>' flush="false" />
<%}
else
{
String stylo = (String) session.getAttribute("LANG_TO_CHANGE_PASS_STYLE") ;
if ((stylo != null) && stylo.equalsIgnoreCase("rich"))
{
%>
  <link href="/style/tc_login_rich.css" type="text/css" rel="stylesheet"/><%
  }
  else
  {
%><link href="/style/tc_login.css" type="text/css" rel="stylesheet"/><%
  }
}
}%>





