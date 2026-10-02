<%@ page import="com.meta4.session.*, com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
oM4Log.debug("sgco_put_object: entry");
String ai_sId = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sId");
oM4Log.debug("  ai_sId: " + ai_sId);
String ai_sValue = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sValue");
oM4Log.debug("  ai_sValue: " + ai_sValue);
if (ai_sId != null && !ai_sId.equals("") && ai_sValue != null && !ai_sValue.equals("")) {
    M4Context.getM4SessionCl(request).putObject(ai_sId, ai_sValue);
    oM4Log.debug("  Object attached to session.");
}
oM4Log.debug("sgco_put_object: exit");
%>