<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_lang.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>

<script type="text/javascript" language="Javascript1.5" src="/translations/m4err_<%=sLangEss%>.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/translations/m4err_ess_<%=sLangEss%>.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>

<%
  com.meta4.redirect.M4PropertiesRedirect Tran = new com.meta4.redirect.M4PropertiesRedirect();
  Tran.load(pageContext, "/translations/ess_mss_gen_" + sLangEss + ".properties");
%>

