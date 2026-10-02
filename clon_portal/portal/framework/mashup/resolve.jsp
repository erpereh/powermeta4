<%-- =========================================================
	@(#) FileVersion: 820.002.023
	@(#) FileDescription: resolve.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2023
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ taglib uri="M4Tags" prefix="m4"%>

<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>
<%@ page import="com.meta4.websso.WebSSODelegate"%>

<%
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store"); 
  response.setDateHeader("Expires", -1); 

  WebSSODelegate.resolveMashup(request, response, pageContext.getServletContext());

%>