<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_disclaimer.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<br />
<%if (zNavrc.equals("0")){%>
<%
   request.setAttribute("zsLocalizeHelp",zsLocalizeHelp);
   request.setAttribute("zsHelpFolder",z_gHelpFolder);
%>
<div>

<%-- Gestión de localización por producto. --%>
<%pageContext.setAttribute("zProdFileURI","/shco_g0_" + zappprod + "/shco_gen_disclaimer.jsp" );
if (M4FileURIChecker.exists((String)pageContext.getAttribute("zProdFileURI"),pageContext)== true){%>
   <%request.setAttribute("zcssuser",zcssuser);%>
   <jsp:include page='<%=(String)pageContext.getAttribute("zProdFileURI")%>' flush="false" />
<%}else{%>
   <jsp:include page="/shco_g0/shco_gen_include_disclaimer.jsp" flush="true" />
<%}%>
</div>
<%}%>
<m4:endpage/>

