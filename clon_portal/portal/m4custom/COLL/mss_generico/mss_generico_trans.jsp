<%@ include file="../sse_generico/sse_generico_taglib.jsp" %>
<%@ include file="../sse_generico/sse_generico_lang.jsp" %>

<script type="text/javascript" language="Javascript1.5" src="/translations/m4err_<%=sLangEss%>.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/translations/m4err_mss_<%=sLangEss%>.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>

<%
  com.meta4.redirect.M4PropertiesRedirect Tran = new com.meta4.redirect.M4PropertiesRedirect();
  Tran.load(pageContext, "/translations/ess_mss_gen_" + sLangEss + ".properties");
%>

