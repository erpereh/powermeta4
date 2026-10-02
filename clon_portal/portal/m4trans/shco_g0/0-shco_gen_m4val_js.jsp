<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: fork the validation if Unicode support
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_m4val_js.jsp
	@(#)Date: 24/01/2007
--%>
<%--                    --%>
<%-- Load validations   --%>
<%--                    --%>
<% if (sEncoding != null && sEncoding.equals("UTF-8")) {%>
   <script type="text/javascript" language="Javascript1.5" src="/library/m4unival.js"></script>
<%} else {%>
   <script type="text/javascript" language="Javascript1.5" src="/library/m4val.js"></script>
<%}%>
