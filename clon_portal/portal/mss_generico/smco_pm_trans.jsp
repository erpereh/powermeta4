<%@ include file="/sse_generico/sse_generico_taglib.jsp" %>
<%
  java.util.Properties tranPM = new Properties();
  tranPM.load(application.getResourceAsStream("/translations/smco_pm_" + sLangEss + ".properties"));
%>