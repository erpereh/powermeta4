<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_delete_cache.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%String zm4_sDeleteCache = request.getParameter("DELETE_CACHE");
if ("1".equals(zm4_sDeleteCache)){
	M4Operations oM4Operations = new M4Operations(request);
	oM4Operations.runCommand("Alias","refreshmdcache",null); 
}%>



