<%@ page import="java.util.Enumeration"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
//generate generic trace (url and prameters of request)
M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
oM4Log.debug("# mss request URL: " + request.getRequestURL());
oM4Log.debug("#   query string: " + request.getQueryString());
Enumeration eGenLogParameters = request.getParameterNames();
if (eGenLogParameters.hasMoreElements()) {
    oM4Log.debug("#   parameters:");
    while (eGenLogParameters.hasMoreElements()) {
        String sGenLogParameter = (String)eGenLogParameters.nextElement();
        String[] sGenLogValues = request.getParameterValues(sGenLogParameter);
        for (int i = 0; i < sGenLogValues.length; i++) {
            oM4Log.debug("#   - " + sGenLogParameter + ": " + sGenLogValues[i]);
        }
    }
} else {
    oM4Log.debug("#   parameters: null");
}
//end of generic trace
response.setDateHeader("Expires", -1);
M4SessionManager zsessionmanagermss = M4Context.getSession(request);
M4SessionCl zsesion = M4Context.getM4SessionCl(request);
zsessionmanagermss.setProductID("mss");
String zVisibility = zsesion.getBagEntries("manager_visibility");
String zminombre = zsesion.getBagEntries("minombre");
String zIdPerson = zsesion.getBagEntries("zIdPerson");
%>
<script type="text/javascript" src="/libreria/dom1.js"></script>