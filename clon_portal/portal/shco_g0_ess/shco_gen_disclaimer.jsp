<%--
	@(#)FileVersion: 720.000.003
	@(#)FileDescription: Disclaimer
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2005
	@(#)ProductName: PeopleNet Ksystem
	@(#)ProductVersion: 6.0
	@(#)InternalName: shco_gen_disclaimer.jsp
	@(#)Date: 21/02/2002
--%>

<%@ include file="../sse_generico/sse_generico_taglib_2.jsp" %>
<%
M4SessionManager zsessionmanager_bag = M4Context.getSession(request);
int ijsLang = zsessionmanager_bag.getLanguageID(); // 2, 3, 4.... 8
String zLangFolder= CheckConfig.checkFolderLanguage(new Long(ijsLang).intValue(), CheckConfig.THCL);
String zPageDis = "../sse_generico/"+zLangFolder+"/generico_disclaimer.jsp";  		    
%>

<jsp:include page="<%=zPageDis%>" flush="true" />
	
<m4:endpage/>

