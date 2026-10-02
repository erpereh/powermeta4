<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: dynfilterlist.jsp
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
	Properties Tran = new Properties();
	Tran.setProperty("Html.Title", "");
	Tran.setProperty("Html.Header", "RUNTIME FILTER");
	Tran.setProperty("Filter.Header", "");
	Tran.setProperty("Table.Node", "Node");
	Tran.setProperty("Table.LNatural", "Natural Language");
    Tran.setProperty("Button.Aceptar", "OK");
 	Tran.setProperty("Button.Cancelar", "Cancel");
 	
 	String zsubsesion = getStringValue(request.getParameter("zsubsesion"));
    if (zsubsesion == null){
           zsubsesion= "tcdynfilter";
    } 
%>


<m4:startpage m4task="<%=zsubsesion%>"/>
<%@ include file="../dynfilterlistpage.jsp" %>
<m4:endpage/>
