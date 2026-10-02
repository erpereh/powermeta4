
<%@ page  import="com.meta4.session.*" %>

<script type="text/javascript" src="/libreria/func_sse.js"></script>

<%@ include file="../sse_generico/sse_generico_taglib_2.jsp" %>
<%
M4SessionManager zsessionmanager_bag = M4Context.getSession(request);
int ijsLang = zsessionmanager_bag.getLanguageID(); // 2, 3, 4.... 8
String zLangFolder= CheckConfig.checkFolderLanguage(new Long(ijsLang).intValue(), CheckConfig.THCL);
String zPageDis = "../mss_generico/"+zLangFolder+"/menu_mss.jsp";  	
String zgenerico_menusups = "../mss_generico/"+zLangFolder+"/mssgenerico_menusup2.jsp";	    
%>


<jsp:include page="<%=zgenerico_menusups%>" flush="true" />


