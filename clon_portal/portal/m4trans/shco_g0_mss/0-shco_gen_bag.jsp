<%@ include file="/m4trans/shco_g0/0-shco_gen_taglib.jsp" %>

<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%

String zlang = "";

M4SessionManager m4session_bag = M4Context.getSession(request);

int iLang = m4session_bag.getLanguageID(); // 2, 3, 4.... 8
String zLangFolder= CheckConfig.checkFolderLanguage(new Long(iLang).intValue(), CheckConfig.THCL);


  zlang="es";
  if (m4session_bag != null) {
  zlang = M4Locale.takeLocale(new String().valueOf(iLang)).toString(); // en, es, fr, de.... 
  }


String zTranslationsPath ="/translations/";


%>
<%
  com.meta4.redirect.M4PropertiesRedirect Tran_shco_g0 = new com.meta4.redirect.M4PropertiesRedirect();
  Tran_shco_g0.load(application.getResourceAsStream(zTranslationsPath + "shco_g0_" +zlang + ".properties"));
  session.setAttribute("Tran_shco_g0",Tran_shco_g0);

%>
