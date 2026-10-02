<%@ include file="../../mss_g1/smco_prof_cv_trans.jsp" %>

<%
M4SessionManager zsessionmanager_bag = M4Context.getSession(request);
int ijsLang = zsessionmanager_bag.getLanguageID();
String zLangFolder= CheckConfig.checkFolderLanguage(new Long(ijsLang).intValue(), CheckConfig.THCL);
String page_to_send = "../../mss_g3/" + zLangFolder + "/smco_g3_p17_mod_prof.jsp"; 
%>
<div class="invisible2" id="SMCO_ACTION_PLAN" name="SMCO_ACTION_PLAN"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a style="cursor:hand" onclick="javascript:uncheck('SMCO_ACTION_PLAN');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label21")%></b></u></a></td></tr></table>
	<table width="100%" cellspacing="0" class="barraregistros">
		<jsp:include page='<%=page_to_send%>' flush="true" />
	</table>
</table>
</div>
