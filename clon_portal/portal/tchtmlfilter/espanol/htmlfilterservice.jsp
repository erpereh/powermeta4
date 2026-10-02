<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: htmlfilterservice.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ page import="java.util.Properties" %>
<%@ taglib uri="M4Tags" prefix="m4" %>


<%
    String zsubsesion = getStringValue(request.getParameter("zsubsesion"));
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<%@ include file="../htmlfilterjob.jsp" %>
<%@ include file="../htmlfilterservicepage.jsp" %>
<m4:endpage/>
