<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_images.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

 
   <%@ page  import="com.meta4.session.*,com.meta4.taglib.util.*" %>   
   <%
   String zProdFileURI="/files_gif_" + M4Context.getSession(request).getProductID().toLowerCase() + "/" +zFileName;
   if (M4FileURIChecker.exists(zProdFileURI,pageContext)== false){%>
         <%=zStdFileContent%>
   <%}else{
     request.setAttribute("zcssuser",zcssuser);%>
    <jsp:include page='<%=zProdFileURI%>' flush="false" />
   <%}%>

