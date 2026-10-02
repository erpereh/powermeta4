<%--
	@(#)FileVersion: 811.000.008
	@(#)FileDescription: include del css segun el usuario
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: tc_login_gen_css.jsp
	@(#)Date: 21/02/2002
--%>

<%-- Gestión de localización por producto. --%>
<%
String prodMob = (String) session.getAttribute("_PROD");
if(prodMob!=null && prodMob.equals("mobile")){
	%><link href="/css/style_login_mobile.css" type="text/css" rel="stylesheet"/><%
}else{
pageContext.setAttribute("zProdFileURI","/shco_g0_" + zappprod + "/shco_gen_css.jsp" );
if (M4FileURIChecker.exists((String)pageContext.getAttribute("zProdFileURI"),pageContext)== true){
%>
<jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation(((String)pageContext.getAttribute("zProdFileURI")), request, pageContext.getServletContext())%>' flush="false" />
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





