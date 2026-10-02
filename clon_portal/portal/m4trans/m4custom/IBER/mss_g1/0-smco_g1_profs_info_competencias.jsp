<%@ include file="/m4trans/m4custom/IBER/mss_g1/0-smco_prof_cv_trans.jsp" %>

<%
M4SessionManager zsessionmanager_bag = M4Context.getSession(request);
int ijsLang = zsessionmanager_bag.getLanguageID();
String zLangFolder= CheckConfig.checkFolderLanguage(new Long(ijsLang).intValue(), CheckConfig.THCL);
String page_to_send = "/mss_g3/" + zLangFolder + "/mss_g3_p9.jsp"; 
%>
<div class="invisible2" id="SMCO_JOB_COMPENTENCES" name="SMCO_JOB_COMPENTENCES"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a  href="javascript:uncheck('SMCO_JOB_COMPENTENCES');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label24")%></b></u></a></td></tr></table>
	<table width="100%" cellspacing="0" class="barraregistros">
		<jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation((page_to_send), request, pageContext.getServletContext())%>' flush="true" />
	</table>
</table>
</div>
