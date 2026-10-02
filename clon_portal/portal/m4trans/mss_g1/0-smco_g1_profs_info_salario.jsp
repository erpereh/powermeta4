<%@ include file="/m4trans/mss_g1/0-smco_prof_cv_trans.jsp" %>

<%
M4SessionManager zsessionmanager_bag = M4Context.getSession(request);
int ijsLang = zsessionmanager_bag.getLanguageID();
String zLangFolder= CheckConfig.checkFolderLanguage(new Long(ijsLang).intValue(), CheckConfig.THCL);
String page_to_send = "/sse_g2/" + zLangFolder + "/sse_g2_p10.jsp"; 
%>
<div class="invisible2" id="SMCO_SALARY_DATA" name="SMCO_SALARY_DATA"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
	<table class="barraregistros"><tr><td width="300">&nbsp;<a  href="javascript:uncheck('SMCO_SALARY_DATA');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label20")%></b></u></a></td></tr></table>
	<table width="100%" cellspacing="0" class="barraregistros">
		<jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation((page_to_send), request, pageContext.getServletContext())%>' flush="true" />
	</table>
</div>
