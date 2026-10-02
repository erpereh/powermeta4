<%@ include file="/m4trans/mss_g1/0-smco_prof_cv_trans.jsp" %>

<%
M4SessionManager zsessionmanager_bag = M4Context.getSession(request);
int ijsLang = zsessionmanager_bag.getLanguageID();
String zLangFolder= CheckConfig.checkFolderLanguage(new Long(ijsLang).intValue(), CheckConfig.THCL);
String page_to_send = "/mss_g1/" + zLangFolder + "/mss_g1_cv.jsp"; 
%>
<div class="invisible2" id="EMPLOYEE_CV" name="EMPLOYEE_CV">&nbsp;
<table class="barraregistros" width="100%"><tr><td width="100%">&nbsp;<b><u><%=ProfCv.getProperty("prof_cv.Title11")%></b></u></td></tr></table><br/><br/>
	<table width="100%" cellspacing="0" class="barraregistros">
		<jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation((page_to_send), request, pageContext.getServletContext())%>' flush="true" />
	</table>
</table>
</div>

