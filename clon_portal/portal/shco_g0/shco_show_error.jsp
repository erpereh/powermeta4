<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: shco_show_error.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%-- this jsp works with shco_show_error_logic.jsp and shco_show_error_paint.jsp ---%>

<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ page import="com.meta4.redirect.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger" %>
<%@ page import="org.apache.log4j.Category" %>
<%@ page import="com.meta4.languages.*" %>

<%-- logic to show the error page --%>
<%@ include file="/shco_g0/shco_show_error_logic.jsp" %>

<%-- visual part for the error page --%>
<%@ include file="/shco_g0/shco_show_error_paint.jsp" %>
