<%@ page import="java.util.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
oM4Log.debug("sgco_restore_request: entry");
//Generates form that requests page with parameters post
M4SessionManager m4Session = M4Context.getSession(request);
M4SessionCl m4SessionCl = M4Context.getM4SessionCl(request);
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">
<html>
<head>
</head>
<%
Map mRequest = (Map)m4SessionCl.getObject("SCO_LAST_REQUEST");
if (mRequest != null) {
    oM4Log.debug("  process request:");
    if (mRequest.containsKey("sgcoPortalDestinationUrl")) {
        String sDestinationUrl = ((String[])mRequest.get("sgcoPortalDestinationUrl"))[0];
        oM4Log.debug("  - sDestinationUrl: " + sDestinationUrl);
        %>
        <body onload="document.getElementById('formRestoreRequest').submit();">
        <form id="formRestoreRequest" action="<%=sDestinationUrl%>" method="post">
        <%
        for (Iterator oIterator = mRequest.entrySet().iterator(); oIterator.hasNext(); ) {
            Map.Entry entry = (Map.Entry)oIterator.next();
            String sKey = (String)entry.getKey();
            if (!(sKey.equalsIgnoreCase("sgcoPortalDestinationUrl") || sKey.equalsIgnoreCase("sgcoPortalEss"))) {   //ignore these keys
                String[] sValues = (String[])entry.getValue();
                for (int i = 0; i < sValues.length; i++) {
                    oM4Log.debug("  - " + sKey + ": " + sValues[i]);
                    %><input type="hidden" id="<%=sKey%>" name="<%=sKey%>" value="<%=sValues[i]%>"/><%
                }
            }
        }
        %></form><%
    } else {
        %><body><h1>Page expired</h1><%
        oM4Log.error("sgco_restore_request: key sgcoPortalDestinationUrl missing from sco_last_request");
    }
} else {
    %><body><h1>Page expired</h1><%
    oM4Log.error("sgco_restore_request: no request attached to session");
}
oM4Log.debug("sgco_restore_request: exit");
%>
</body>
</html>
