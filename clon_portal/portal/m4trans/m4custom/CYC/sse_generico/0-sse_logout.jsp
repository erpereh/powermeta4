<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<%@ include file="/m4trans/sse_generico/0-sse_generico_taglib_2.jsp" %><%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sgco_gen_inc.jsp" %><%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_trans.jsp" %>
<%
String zp_RequestURI = request.getRequestURI();
M4SessionManager zp_sessionmanager = M4Context.getSession(request);
M4SessionCl m4SessionCl = M4Context.getM4SessionCl(request);
String sExternalSystem = m4SessionCl.getBagEntries("ExternalSystem");
int zp_iLang = zp_sessionmanager.getLanguageID();
String zp_LangFolder= CheckConfig.checkFolderLanguage(new Long(zp_iLang).intValue(), CheckConfig.THCL);

String g_zsLoginURL = CheckConfig.setBadLoginLink(zp_iLang, CheckConfig.THCL);
%>
<head><title><%=Tran.getProperty("Label.Lbllogoff")%></title>
<script type="text/javascript">
  function logout() {
    location.href="<%=g_zsLoginURL%>";
  }
</script>
</head>
<body onload="javascript:logout()">
<m4:clearbag/><m4:logout/>
<iframe src="<%=sExternalSystem%>/?_LOGOUT" frameborder=0 width=0 height=0></iframe>
</body></html>