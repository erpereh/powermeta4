<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: include genérico de las librerias de javascript comunes
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_js.jsp
	@(#)Date: 21/02/2002
--%>
<script type="text/javascript" language="Javascript1.5" src="/translations/m4err_<%=zlanguser%>.js"></script>
<%request.setAttribute("zlanguser",zlanguser);%>

<% if (!zappprod.equals("")){%>
   <jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation(("/shco_g0_" + zappprod + "/shco_gen_load_js_msg.jsp" ), request, pageContext.getServletContext())%>' flush="false" />
<%} else {%>
   <jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation(("/shco_g0/shco_gen_load_js_msg.jsp" ), request, pageContext.getServletContext())%>' flush="false" />
<%}%>

<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4menu.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4help.js"></script>

<%pageContext.setAttribute("zProdFileURI","/shco_g0_" + zappprod + "/shco_gen_js.jsp" );
if (M4FileURIChecker.exists((String)pageContext.getAttribute("zProdFileURI"),pageContext)== true){%>
    <jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation(((String)pageContext.getAttribute("zProdFileURI")), request, pageContext.getServletContext())%>' flush="false" />

<%}%>




