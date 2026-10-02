<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_taglib.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%-- Taglib: Must be before any tag   --%>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%-- Java: imports   --%>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%@ page import="com.meta4.configuration.*,com.meta4.taglib.util.*,com.meta4.savparams.*" %>
<%-- Cache: No Cache   --%>
<% response.setHeader("Pragma", "no-cache"); %>
<% response.setHeader("Cache-Control", "no-store"); %>
<% response.setDateHeader("Expires", -1); %>
<%-- Encoding --%>
<% String sEncoding = M4RequestEncoding.getAppEncoding(); 
   response.setContentType ("text/html; charset="+sEncoding+"");
%> 
<%-- XHTML 1.0. Load Once   --%>
<% if (request.getAttribute("taglib_Loaded")== null)
{ 
   	  	 request.setAttribute("taglib_Loaded","1");
%>
   	  	 <? xml version="1.0" encoding="<%=sEncoding%>" ?>
   	  	 <%-- For CSS compatibility with IE previous to 6 remove the DTD line below --%>
   	  	 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">   	  	 
<%}%>   
<%@ include file="../shco_g0/shco_gen_functions.jsp" %>