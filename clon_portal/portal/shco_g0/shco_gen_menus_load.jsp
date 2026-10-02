<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_menus_load.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%-- Gestión de localización por producto. --%>
<%-- Por defecto generación standard de los menus --%>
<% String g_zLoadStdMenus ="1";%>

<%pageContext.setAttribute("zProdFileURI","/shco_g0_" + M4Context.getSession(request).getProductID().toLowerCase() + "/shco_gen_menusup.jsp" );
if (M4FileURIChecker.exists((String)pageContext.getAttribute("zProdFileURI"),pageContext)== true){
   g_zLoadStdMenus="0";
}%>




