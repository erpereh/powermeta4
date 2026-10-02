<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_wz_btt.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%
request.setAttribute("zColREQ",Integer.toString(zCol));
request.setAttribute("zTabREQ",Integer.toString(zTab));
%>
<jsp:include page="/shco_g0/shco_gen_wz_btt_inc.jsp" flush="false" />
