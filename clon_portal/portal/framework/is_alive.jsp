<%-- =========================================================
	@(#) FileVersion: 822.002.041
	@(#) FileDescription: is_alive.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ page import="java.util.*, com.meta4.request.*, com.meta4.session.*, com.meta4.languages.*, com.meta4.session.SessionException" %>
<%	
	response.setHeader("Pragma", "no-cache"); 
	response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
	response.setDateHeader("Expires", -1);
	try {
		M4SessionManager m4session = M4Context.getActiveSession(request);
		if (m4session != null) {
			response.setStatus(HttpServletResponse.SC_NO_CONTENT); // 204
			return;
		}
	} catch (Exception e) {}
	response.setStatus(HttpServletResponse.SC_UNAUTHORIZED); // 401
	response.setContentType("text/plain;charset=UTF-8");
	response.getWriter().write("Peoplenet session not found or invalid.");
%>