<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: dynapplyfilter.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ page import="java.util.Properties" %>
<%@ taglib uri="M4Tags" prefix="m4" %>

<%
	response.setHeader("Cache-Control","no-cache"); //HTTP 1.1
	response.setHeader("Pragma","no-cache"); //HTTP 1.0
	response.setDateHeader ("Expires", 0); //prevents caching at the proxy server
%>

<%
	String zsubsesion = request.getParameter("zsubsesion");
    if (zsubsesion == null){
           zsubsesion= "tcdynfilter";
    } 
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<%@ include file="../dynapplyfilterpage.jsp" %>
<m4:endpage/>



	



