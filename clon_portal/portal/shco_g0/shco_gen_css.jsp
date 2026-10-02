<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_css.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%-- Gestión de localización por producto. --%>
<%pageContext.setAttribute("zProdFileURI","/shco_g0_" + zappprod + "/shco_gen_css.jsp" );
if (M4FileURIChecker.exists((String)pageContext.getAttribute("zProdFileURI"),pageContext)== true){
   request.setAttribute("zcssuser",zcssuser);%>
   <jsp:include page='<%=(String)pageContext.getAttribute("zProdFileURI")%>' flush="false" />
<%}else{%>
  <link href="/style/shco_gen<%=zcssuser%>.css" type="text/css" rel="stylesheet" />
<%}%>

