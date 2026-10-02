<%-- =========================================================
	@(#) FileVersion: 821.001.001
	@(#) FileDescription: show_origin_host.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2023
	@(#) ProductName: Peoplenet
========================================================= --%>

<%
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
  response.setDateHeader("Expires", -1);
  String originHost = (String)session.getAttribute("ORIGIN_HOST");
  if (originHost != null && !originHost.equals("")) out.println(originHost);
%>