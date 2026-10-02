<%@ include file="../sse_generico/sse_generico_taglib.jsp" %>

<%
  com.meta4.redirect.M4PropertiesRedirect smco_dev_plan = new com.meta4.redirect.M4PropertiesRedirect();
  smco_dev_plan.load(pageContext, "/translations/smco_dev_plan_" + sLangEss + ".properties");
%>