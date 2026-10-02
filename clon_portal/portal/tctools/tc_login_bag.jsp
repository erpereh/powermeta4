<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_login_bag.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%

M4SessionManager zsessionmanager = M4Context.getSession(request);
SavParamsInterface oSavParams = zsessionmanager.getSavParamsInstance();
String zappprod = zsessionmanager.getProductID().toLowerCase();


// Para cuando funcione el m4preservelevel="0" del startpage.
String zmemeterno = "0";
String zmemnormal = "2";

String zcssuser = "100";
String zNavrc  ="0";
if (oSavParams != null){
   zcssuser = (String) oSavParams.getParameterValue("PORTAL_PARAM", "CSS");
   zNavrc  = (String) oSavParams.getParameterValue("PORTAL_PARAM", "NAV_RC");
   if ((zNavrc==null)||(zNavrc.equals("")) ||(zappprod.equals("tec"))){zNavrc ="0";}
}

String zTranslationsPath ="/translations/";

String zusertempuri = zsessionmanager.getUserTempURI();  
int iLang = zsessionmanager.getLanguageID(); // 2, 3, 4.... 8
String zlang = "";
String strbrowser = request.getParameter("browser");
zlang = request.getParameter("lang");

if ((zlang==null)||(zlang.equals(""))){
  //si no viene por parámetro tomo la informacion de logado
  zlang="es";
  if (zsessionmanager != null) {
  zlang = M4Locale.takeLocale(new String().valueOf(iLang)).toString(); // en, es, fr, de.... 
  }
}
String zlanguser = zlang;
String zLangFolder= CheckConfig.checkFolderLanguage(new Long(iLang).intValue(), CheckConfig.THCL);
String zsLocalizeHelp = "";
String z_gHelpFolder="help";
%>

<script type="text/javascript" language="Javascript1.5">
var slanguser = "<%=zlanguser%>";
</script>

