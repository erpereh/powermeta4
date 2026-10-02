<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_m4val_js.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%--                    --%>
<%-- Load validations   --%>
<%--                    --%>
<% if (sEncoding != null && sEncoding.equals("UTF-8")) {%>
   <script type="text/javascript" language="Javascript1.5" src="/library/m4unival.js"></script>
<%} else {%>
   <script type="text/javascript" language="Javascript1.5" src="/library/m4val.js"></script>
<%}%>