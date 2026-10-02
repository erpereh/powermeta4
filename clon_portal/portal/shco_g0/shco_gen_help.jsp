<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_help.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<div>
<%-- Gestión de localización por producto. --%>
<%pageContext.setAttribute("zProdFileURI","/shco_g0_" + zappprod + "/shco_gen_help.jsp" );
if (M4FileURIChecker.exists((String)pageContext.getAttribute("zProdFileURI"),pageContext)== true){%>
   <%
   request.setAttribute("zsLocalizeHelp",zsLocalizeHelp);
   request.setAttribute("zsHelpFolder",z_gHelpFolder);
   request.setAttribute("zhelp",zhelp );
   request.setAttribute("zLangFolder",zLangFolder);
   %>
   <jsp:include page='<%=(String)pageContext.getAttribute("zProdFileURI")%>' flush="false" />
<%}else{
   zsLocalizeHelp= zhelp;
   String znohelp = "0";
   if (zhelp.equals(znohelp) == true){%>
      <img alt="<%=zSHCOLBNOHELP_val%>" <%@ include file="../files_gif/ic_nohelp.jsp" %> />
  <%}else{%>
   <%@ include file="../shco_g0/shco_gen_help_link.jsp" %> 
   <img alt="<%=zSHCOLBHELP_val%>" <%@ include file="../files_gif/ic_help.jsp" %> /></a>
<%}}%>
