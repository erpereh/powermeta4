<%-- =========================================================
	@(#) FileVersion: 818.000.051
	@(#) FileDescription: shco_gen_menusup.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2020
	@(#) ProductName: PeopleNet
========================================================= --%>

<% request.setAttribute("MENULEVEL",znivelmenu);
   request.setAttribute("TRACK",zcarril);
   request.setAttribute("LOGIN_URL",g_zsLoginURL);
   request.setAttribute("NAV_RC",zNavrc);
%>


<%if (zNavrc.equals("0")){%>
<%-- Gestión de localización por producto. --%>
<%pageContext.setAttribute("zProdFileURI","/shco_g0_" + zappprod + "/shco_gen_menusup.jsp" );
if (M4FileURIChecker.exists((String)pageContext.getAttribute("zProdFileURI"),pageContext)== true){%>
    <jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation(((String)pageContext.getAttribute("zProdFileURI")), request, pageContext.getServletContext())%>' flush="false" />
<%}else{%>
   <jsp:include page="/m4trans/shco_g0/0-shco_gen_menus.jsp" flush="false" />
<%}%>
<%pageContext.setAttribute("zProdFileURI","/shco_g0_" + zappprod + "/shco_gen_menusup2.jsp" );
if (M4FileURIChecker.exists((String)pageContext.getAttribute("zProdFileURI"),pageContext)== true){%>
    <%request.setAttribute("zperson",zperson);%>
	<%request.setAttribute("zappprod",zappprod);%>
	<%request.setAttribute("zlanguser",zlanguser);%>
    <jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation(((String)pageContext.getAttribute("zProdFileURI")), request, pageContext.getServletContext())%>' flush="false" />
<%}%>

<%-- Take top --%>
<%String zsPpalDivTop= (String)request.getAttribute("CAPA_CUERPO_DIV_TOP");
  if (zsPpalDivTop== null) {
     zsPpalDivTop = "85";
  }
%>
<div id="capa_cuerpo" style="position:relative; left:0%; top:<%=zsPpalDivTop%>px; width:100%; z-index:2"> 

<%}else{%>




<div id="capa_cuerpo" style="position:relative; left:%; top:10px; width:100%; z-index:2"> 
<%}%>


