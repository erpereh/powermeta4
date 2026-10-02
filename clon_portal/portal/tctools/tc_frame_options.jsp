<%-- =========================================================
	@(#) FileVersion: 818.005.004
	@(#) FileDescription: tc_frame_options.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%
   response.setHeader("X-Frame-Options", "SAMEORIGIN"); 
   response.setHeader("Content-Security-Policy", "frame-ancestors 'self', object-src 'none'");
%>