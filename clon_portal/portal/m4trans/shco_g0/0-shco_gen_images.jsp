<%-- =========================================================
	@(#) FileVersion: 818.000.051
	@(#) FileDescription: shco_gen_images.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2020
	@(#) ProductName: PeopleNet
========================================================= --%>

 
   <%@ page  import="com.meta4.session.*,com.meta4.taglib.util.*" %>   
   <%
   String zProdFileURI="/files_gif_" + M4Context.getSession(request).getProductID().toLowerCase() + "/" +zFileName;
   if (M4FileURIChecker.exists(zProdFileURI,pageContext)== false){%>
         <%=zStdFileContent%>
   <%}else{
     request.setAttribute("zcssuser",zcssuser);%>
    <jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation((zProdFileURI), request, pageContext.getServletContext())%>' flush="false" />
   <%}%>

