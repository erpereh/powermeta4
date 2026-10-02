<%@ include file="/m4trans/m4custom/IBER/mss_g1/0-smco_prof_cv_trans.jsp" %>

<%
M4SessionManager zsessionmanager_bag = M4Context.getSession(request);
int ijsLang = zsessionmanager_bag.getLanguageID();
String zLangFolder= CheckConfig.checkFolderLanguage(new Long(ijsLang).intValue(), CheckConfig.THCL);
String page_to_send = "/sse_g3/" + zLangFolder + "/sse_g3_p21.jsp"; 
String empleado = (String)request.getAttribute("empleado");
String periodo = (String)request.getAttribute("periodo");
String nombre_empleado = (String)request.getAttribute("nombre_empleado");

%>
<div class="invisible2" id="SMCO_TRAINING_COURSES" name="SMCO_TRAINING_COURSES"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
	<table class="barraregistros"><tr><td width="300">&nbsp;<a  href="javascript:uncheck('SMCO_TRAINING_COURSES');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label22")%></b></u></a>

	<a title="<%=ProfCv.getProperty("prof_cv.Label34")%>" href="javascript:document.forms['solicitar_formacion'].submit();" tabindex="6"><img alt="<%=ProfCv.getProperty("prof_cv.Label34")%>" src="/iconos/ic_next_edit_16_16_0.gif" align="right" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>

	</td></tr></table>
	<table width="100%" cellspacing="0" class="barraregistros">
		<jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation((page_to_send), request, pageContext.getServletContext())%>' flush="true" />
	</table>
</table>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=11" method="get" name="solicitar_formacion" id="solicitar_formacion">
	<input type="hidden" id="empleado" name="empleado"  value="<%=empleado%>" />
	<input type="hidden" id="periodo" name="periodo"  value="<%=periodo%>" />
	<input type="hidden" id="nombre_empleado" name="nombre_empleado"  value="<%=nombre_empleado%>" />
	<input type="hidden" id="zVis" name="zVis"  value="0" />
</form>

</div>
