<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_js.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<script type="text/javascript" language="Javascript1.5" src="/translations/m4err_<%=zlanguser%>.js"></script>
<%request.setAttribute("zlanguser",zlanguser);%>

<% if (!zappprod.equals("")){%>
   <jsp:include page='<%="/shco_g0_" + zappprod + "/shco_gen_load_js_msg.jsp" %>' flush="false" />
<%} else {%>
   <jsp:include page='<%="/shco_g0/shco_gen_load_js_msg.jsp" %>' flush="false" />
<%}%>

<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4menu.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4help.js"></script>

<%pageContext.setAttribute("zProdFileURI","/shco_g0_" + zappprod + "/shco_gen_js.jsp" );
if (M4FileURIChecker.exists((String)pageContext.getAttribute("zProdFileURI"),pageContext)== true){%>
    <jsp:include page='<%=(String)pageContext.getAttribute("zProdFileURI")%>' flush="false" />

<%}%>




