<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: include del css segun el usuario
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_css.jsp
	@(#)Date: 21/02/2002
--%>

<%-- Gestión de localización por producto. --%>
<%pageContext.setAttribute("zProdFileURI","/shco_g0_" + zappprod + "/shco_gen_css.jsp" );
if (M4FileURIChecker.exists((String)pageContext.getAttribute("zProdFileURI"),pageContext)== true){
   request.setAttribute("zcssuser",zcssuser);%>
   <jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation(((String)pageContext.getAttribute("zProdFileURI")), request, pageContext.getServletContext())%>' flush="false" />
<%}else{%>
  <link href="/style/shco_gen<%=zcssuser%>.css" type="text/css" rel="stylesheet" />
<%}%>

