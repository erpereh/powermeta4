<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_portal_bag.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%
// Particular del Portal

String zSHCO_DATE_FORMAT = "";
String zSHCO_CSS = "";
String zSHCO_FILTER = "";
String zSHCO_JOB_POST = "";
String zSHCO_ID_APP_ROLE = "";
String zSHCO_STANDAR = "";
String zSHCO_ID_CURRENCY = "";
String zSHCO_NM_CURRENCY = "";
String zSHCO_EX_TYPE = "";

String zSHCO_DEC_NB = "";
String zSHCO_ZUR_CURR = "";

String zSHCO_POP = "";
String zSHCO_PERSON = "";

String zSHCO_ACTIVE_PAY = "";
String zSHCO_ORGANIZATION ="";
try {
		M4Operations Introduccion2 = new M4Operations(request);
		zSHCO_DATE_FORMAT = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_DATE_FORMAT");
		zSHCO_CSS = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_CSS");
		zSHCO_FILTER = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_FILTER");
		zSHCO_JOB_POST = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_JOB_POST");
		zSHCO_ID_APP_ROLE = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_ID_APP_ROLE");
		zSHCO_STANDAR = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_STANDAR");
		zSHCO_ID_CURRENCY = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_ID_CURRENCY");
		zSHCO_NM_CURRENCY = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_NM_CURRENCY");
		zSHCO_EX_TYPE = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_EX_TYPE");
		zSHCO_DEC_NB = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_DEC_NB");
		zSHCO_ZUR_CURR = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_ZUR_CURR");
		zSHCO_POP = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_POP");
		zSHCO_PERSON = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_PERSON");
		zSHCO_ACTIVE_PAY = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_ACTIVE_PAY");
		zSHCO_ORGANIZATION = Introduccion2.getItem(znodo,zm4object,znodo,"","SHCO_ORGANIZATION");
} catch(Exception e) {}

String strbrowser = "";
String zlang = "";
M4SessionCl zsesion2 = M4Context.getM4SessionCl(request);
strbrowser = request.getParameter("browser");
zlang = request.getParameter("lang");

M4SessionManager m4session = M4Context.getSession(request);
int iLang = m4session.getLanguageID(); // 2, 3, 4.... 8
String zLangFolder= CheckConfig.checkFolderLanguage(new Long(iLang).intValue(), CheckConfig.THCL);

if ((zlang==null)||(zlang.equals(""))){
  //si no viene por parámetro tomo la informacion de logado
  zlang="es";
  if (m4session != null) {
	zlang = CheckConfig.checkLocale(iLang);
  }
}
String tiponav = zsesion2.getBagEntries("browser");
if (tiponav == null){
	if (strbrowser == null){
		zsesion2.putBagEntries("browser","IE");
	}else{
		zsesion2.putBagEntries("browser",strbrowser);
	}
}
String zlangvalue = zsesion2.getBagEntries("lang");
if (zlangvalue == null){
	zsesion2.putBagEntries("lang",zlang);
}
zsesion2.putBagEntries("SHCO_DATE_FORMAT",zSHCO_DATE_FORMAT);
zsesion2.putBagEntries("SHCO_CSS",zSHCO_CSS);
zsesion2.putBagEntries("SHCO_FILTER",zSHCO_FILTER);
zsesion2.putBagEntries("SHCO_JOB_POST",zSHCO_JOB_POST);
zsesion2.putBagEntries("SHCO_ROLE",zSHCO_ID_APP_ROLE);
zsesion2.putBagEntries("SHCO_STANDAR",zSHCO_STANDAR);
zsesion2.putBagEntries("SHCO_ID_CURRENCY",zSHCO_ID_CURRENCY);
zsesion2.putBagEntries("SHCO_NM_CURRENCY",zSHCO_NM_CURRENCY);
zsesion2.putBagEntries("SHCO_EX_TYPE",zSHCO_EX_TYPE);
zsesion2.putBagEntries("SHCO_DEC_NB",zSHCO_DEC_NB);
zsesion2.putBagEntries("SHCO_ZUR_CURR",zSHCO_ZUR_CURR);

zsesion2.putBagEntries("SHCO_POP",zSHCO_POP);
zsesion2.putBagEntries("SHCO_PERSON",zSHCO_PERSON);
zsesion2.putBagEntries("SHCO_ACTIVE_PAY",zSHCO_ACTIVE_PAY);
zsesion2.putBagEntries("SHCO_ORGANIZATION",zSHCO_ORGANIZATION);

// Valores del portal:

String zbarbot = "1000";
String zlanguser = zsesion2.getBagEntries("lang");
String zperson = zsesion2.getBagEntries("SHCO_PERSON");
String zpop = zsesion2.getBagEntries("SHCO_POP");
String zcssuser = zsesion2.getBagEntries("SHCO_CSS");
String zbrowser = zsesion2.getBagEntries("browser");
String zfilter = zsesion2.getBagEntries("SHCO_FILTER");
String zdateformat = zsesion2.getBagEntries("SHCO_DATE_FORMAT");
String zrole = zsesion2.getBagEntries("SHCO_ROLE");
String zzurcurr = zsesion2.getBagEntries("SHCO_ZUR_CURR");
String zsco = zsesion2.getBagEntries("SHCO_ORGANIZATION");
String zTranslationsPath ="/translations/";
M4SessionManager zsessionmanager = M4Context.getSession(request);
String zusertempuri = zsessionmanager.getUserTempURI();  
String zsLocalizeHelp = "";

if ((zlanguser==null)||(zlanguser.equals(""))){zlanguser = "en";}
%>
<%
  com.meta4.redirect.M4PropertiesRedirect Tran_shco_g0 = new com.meta4.redirect.M4PropertiesRedirect();
  Tran_shco_g0.load(application.getResourceAsStream(zTranslationsPath + "shco_g0_" +zlanguser + ".properties"));
  session.setAttribute("Tran_shco_g0",Tran_shco_g0);
  session.setAttribute ("zcssuser",zcssuser);
%>


<%

// Para que funcione con la nueva tecnología se deben leer 
// la url del login, del portal y zappprod 

String zp_QueryString = request.getQueryString();
String zp_RequestURI = request.getRequestURI();
M4SessionManager zp_sessionmanager = M4Context.getSession(request);
int zp_iLang = zp_sessionmanager.getLanguageID();
String zp_LangFolder= CheckConfig.checkFolderLanguage(new Long(zp_iLang).intValue(), CheckConfig.THCL);
int zp_iPos = zp_RequestURI.indexOf(zp_LangFolder);
zp_RequestURI = zp_RequestURI.substring(1,zp_iPos) + zp_RequestURI.substring(zp_iPos + zp_LangFolder.length()+1,zp_RequestURI.length());
String zp_PortalURI = request.getContextPath() +  zp_RequestURI;
if (zp_QueryString !="" && zp_QueryString != null){zp_PortalURI = zp_PortalURI + "?" + zp_QueryString;} 
zsesion2.putBagEntries("PORTAL_URL",zp_PortalURI); 

M4SessionCl zsesion = M4Context.getM4SessionCl(request);
SavParamsInterface oSavParams = zsessionmanager.getSavParamsInstance();

String g_zsLoginURL = CheckConfig.setBadLoginLink(zp_iLang, CheckConfig.THCL);
zsesion2.putBagEntries("LOGIN_URL",g_zsLoginURL);

String zappprod = zp_sessionmanager.getProductID().toLowerCase();

String zappmn = (String) oSavParams.getParameterValue("PORTAL_PARAM", "_APP_MN");
String z_gPortal = zsesion.getBagEntries("PORTAL_URL");
String z_gHelpFolder="help";
String zNavrc  = (String) oSavParams.getParameterValue("PORTAL_PARAM", "NAV_RC");
if (zappprod.equals("tec")){ zNavrc= "0";}
%>

<script type="text/javascript" language="Javascript1.5">
var sformatofechas = "<%=zdateformat%>";
var sfilter = "<%=zfilter%>";
var g_ssepfechas ="-";
var g_ssepdecimal =".";
var g_ssepdig ="";
var g_ssepdecimal_cur =".";
var g_ssepdig_cur ="";
var g_portal = "/servlet/CheckSecurity/JSP/<%=z_gPortal%>";
</script>
