<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: parámetros de la bolsa
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_bag.jsp
	@(#)Date: 21/02/2002
--%>
<%

M4SessionManager zsessionmanager = M4Context.getSession(request);
M4SessionCl zsesion = M4Context.getM4SessionCl(request);
SavParamsInterface oSavParams = zsessionmanager.getSavParamsInstance();

String zappprod = zsessionmanager.getProductID().toLowerCase();

// Valores por defecto:
String zbarbot = "1111";
String znivelmenu = "1";
int zvuelta = 5;
String zventanas = "*";

// Para cuando funcione el m4preservelevel="0" del startpage.
String zmemeterno = "0";
String zmemnormal = "2";

// Valores recuperados de la bolsa de parámetros en todas las páginas:
//String zcssuser = zsesion.getBagEntries("SHCO_CSS");
String zcssuser = (String) oSavParams.getParameterValue("PORTAL_PARAM", "CSS");
String zNavrc  = (String) oSavParams.getParameterValue("PORTAL_PARAM", "NAV_RC");
if ((zNavrc==null)||(zNavrc.equals("")) ||(zappprod.equals("tec"))){zNavrc ="0";}
 

String zrole = zsesion.getBagEntries("SHCO_ROLE");
String zbrowser = zsesion.getBagEntries("browser");
String zfilter = zsesion.getBagEntries("SHCO_FILTER");
String zidcur = zsesion.getBagEntries("SHCO_ID_CURRENCY");
String znmcur = zsesion.getBagEntries("SHCO_NM_CURRENCY");
String zextype = zsesion.getBagEntries("SHCO_EX_TYPE");
String zdecnb = zsesion.getBagEntries("SHCO_DEC_NB");
String zzurcurr = zsesion.getBagEntries("SHCO_ZUR_CURR");
String zsco = zsesion.getBagEntries("SHCO_ORGANIZATION");
String g_zsLoginURL = zsesion.getBagEntries("LOGIN_URL");

// Parámetros de compatibilidad hacia atrás con portal PeopleNet
String zstandar = zsesion.getBagEntries("SHCO_STANDAR");
String zjobpost = zsesion.getBagEntries("SHCO_JOB_POST");
String zpop = zsesion.getBagEntries("SHCO_POP");
String zperson = zsesion.getBagEntries("SHCO_PERSON");
String zactivepay = zsesion.getBagEntries("SHCO_ACTIVE_PAY");

// Para la pantalla de errores cuando el m4object se ha generado por nivel 2. Valores posibles: 0 Normal, 1 Nivel2
String zerrornivel2 = "0";
String zTranslationsPath ="/translations/";

String zusertempuri = zsessionmanager.getUserTempURI();  
int iLang = zsessionmanager.getLanguageID(); // 2, 3, 4.... 8

String strbrowser = "";
String zlang = "";
strbrowser = request.getParameter("browser");
zlang = request.getParameter("lang");

if ((zlang==null)||(zlang.equals(""))){
  //si no viene por parámetro tomo la informacion de logado
  zlang="es";
  if (zsessionmanager != null) {
  // not valid for dynamic languages
  // zlang = M4Locale.takeLocale(new String().valueOf(iLang)).toString(); // en, es, fr, de.... 
  // valid for dynamic languages
  zlang = CheckConfig.checkLocale(iLang); // en, es, fr, de.... 9, 10, 11
  }
}
String zlanguser = zlang;
String tiponav = zbrowser;
if (tiponav == null){
	if (strbrowser == null){
		zsesion.putBagEntries("browser","IE");
	}else{
		zsesion.putBagEntries("browser",strbrowser);
	}
}
String zlangvalue = zsesion.getBagEntries("lang");
if (zlangvalue == null){
	zsesion.putBagEntries("lang",zlang);
}
String zLangFolder= CheckConfig.checkFolderLanguage(new Long(iLang).intValue(), CheckConfig.THCL);
String zsLocalizeHelp = "";
String z_gHelpFolder="help";
%>

<jsp:useBean id="Tran_shco_g0" scope="session" class="com.meta4.redirect.M4PropertiesRedirect" />

<%@ include file="/m4trans/shco_g0/0-shco_gen_formats.jsp" %>
<%


String zappmn = (String) oSavParams.getParameterValue("PORTAL_PARAM", "_APP_MN");
String z_gPortal = zsesion.getBagEntries("PORTAL_URL");
%>

<% if (!zappprod.equals("")){%>
<jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation(("/shco_g0_" + zappprod + "/shco_gen_bag.jsp" ), request, pageContext.getServletContext())%>' flush="false" />
<%}%>



<script type="text/javascript" language="Javascript1.5">
var slanguser = "<%=zlanguser%>";
var sfilter = "<%=zfilter%>";
var g_portal = "/servlet/CheckSecurity/JSP/<%=z_gPortal%>";
</script>

