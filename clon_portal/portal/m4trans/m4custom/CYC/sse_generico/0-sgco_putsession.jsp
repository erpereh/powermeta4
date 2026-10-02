<%
  String sLang = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lang");
  if (sLang == null) {sLang = "2";}
  
  session.setAttribute("LANG_TO_CHANGE_PASS",sLang);
  session.setAttribute("LANG_TO_CHANGE_PASS_STYLE","ess");

  String sURLLeft = "/sse_generico/";
  String sURLRight = "/generico_login.jsp";
  String sLanguage = "undefined";

  if (sLang.equals("2")) {sLanguage = "english";}
  if (sLang.equals("3")) {sLanguage = "espanol";}
  if (sLang.equals("4")) {sLanguage = "francais";}
  if (sLang.equals("5")) {sLanguage = "portugues";}

  session.setAttribute("URL_COMPLETE", sURLLeft + sLanguage + sURLRight);
%>