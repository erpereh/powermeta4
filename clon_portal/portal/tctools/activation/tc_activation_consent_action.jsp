<%-- =========================================================
	@(#) FileVersion: 823.001.038
	@(#) FileDescription: tc_activation_consent_action.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2026
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ page import="com.meta4.request.*, com.meta4.session.*, com.meta4.languages.*, com.meta4.m4operations.*"%>
<%@ page import="com.meta4.websso.*, com.meta4.common.cipher.* "%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>
<%@ page import="java.util.*, java.lang.*"%>

<%// 1 - headers: no cache, no clickjacking 
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store"); 
  response.setDateHeader("Expires", -1); 

  response.setContentType("text/html;charset=" + com.meta4.utilities.M4RequestEncoding.getAppEncoding());

%>

<% // 2 - the language
String zlanguser = Integer.toString(M4WebLanguages.getLanguageFromCookie(request)); %>
<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/tctools/tc_login_trans.jsp" %>


<%// 3 - extract information from the request and finish the process of activation

	String sActionPage = "/"; 
	String sTitle = Tran_tc_login.getProperty("activationConsent.title"); 
	String sErrorMessage = Tran_tc_login.getProperty("activationConsent.activationError"); 
	String sButtonName = "";

	boolean setActivationConsent = setActivationConsentByAlias(request, zlanguser);
	if (setActivationConsent == true) 
	{ 
		sErrorMessage =  Tran_tc_login.getProperty("activationConsent.activationSuccess"); 
		sButtonName = Tran_tc_login.getProperty("ChangePwd.Back"); 
	}
%>

<%! // Java functions
private boolean setActivationConsentByAlias (HttpServletRequest request, String sLang) {

	M4Logger logger = M4Logger.getLogger("com.meta4.jsp");

	boolean consentStatus = false;
	M4SessionManager m4session;

	String alias; 
	String domain; 

	String samlDomain;
	String samlUserId;

	try {
	  samlDomain = M4SAMLUtils.getDomain(request);
	  samlUserId = M4SAMLUtils.getAuthenticatedUser(request);
	} catch (M4SAMLException e) {
	  logger.warn("[tc_activation_consent_action.jsp] No SAML, no consent"); 
	  return false;
	}

	String consentParam = M4SafeRequest.getParameter(request, "CP");
	if (consentParam == null) {
		logger.warn("[tc_activation_consent_action.jsp] Missing content parameter"); 
		return false; 
	}

	try {
		LinkedHashMap<String,String> forTheConsent = M4CipherUtil.decryptSecretsMap(consentParam, request.getSession().getId());
		alias = forTheConsent.get("AI_USER");
		domain = forTheConsent.get("AI_DOMAIN");

		if (alias == null || !alias.equals(samlUserId)) {
			logger.error("[tc_activation_consent_action.jsp] Request for mismatched users: " + alias); 
			return false;
		}
		
		if (domain == null || !domain.equals(samlDomain)) {
			logger.error("[tc_activation_consent_action.jsp] Request for mismatched domains: " + domain); 
			return false;
		}

	} catch (Exception e) {
		logger.error("Exception while trying to decrypt the consent param: ", e);
		return consentStatus;
	}

	try {
		m4session = M4BootstrapSession.establishBootstrapSession(sLang);
	} catch (Exception e) {
		logger.error("Exception while trying to establish a session: ", e);
		return consentStatus;
	}

	String sM4Obj = "SRTC_ACTIVATION_CONSENT";
	String sNode = "SRTC_ACTIVATION_CONSENT";
	String sMethod = "SET_ACTIVATION_CONSENT";

	M4Operations m = null;
	try {
		m = new M4Operations(m4session);
		m.initTask("SESSION");
		m.beginJob();
		Hashtable<String, String> argsCreateData = null;
		m.createData(sM4Obj, sM4Obj, false, argsCreateData);
		Map<String, String> htArgs = new Hashtable<String, String>();
		htArgs.put("AI_ALIAS", alias);
		htArgs.put("AI_DOMAIN", domain);
		m.method(sMethod, sM4Obj, sNode, sMethod, htArgs);
		m.outputDef(sNode, sM4Obj + "!" + sNode + "[*]");
		m.endJob(sM4Obj);

		StringBuffer methodResult = new StringBuffer();
		byte type = m.execMethod(sMethod, methodResult);
		if (type == M4Operations.M4_TYPE_NUMBER && ((int) Double.parseDouble(methodResult.toString())) == 0) {
			consentStatus = true;
		}
		if (logger.isDebugEnabled()) logger.debug("[tc_activation_consent_action.jsp] Activation done for: " + alias); 

	} catch (Exception e) {
		logger.error("setActivationConsentByAlias: ", e);
	} finally {
		if (m != null) {
			try {
				m.endTask();
			} catch (Exception e) {
				logger.error("setActivationConsentByAlias: ", e);
			}
		}
		try {
			M4BootstrapSession.releaseBootstrapSession(m4session, sLang);
		} catch (Exception e) {
			logger.error("setActivationConsentByAlias: ", e);
		}
	}
	  return consentStatus;
  }
	
%>
<%-- JavaScript user interface --%>
<!DOCTYPE HTML>
<html lang="<%=zlanguser%>"><!-- A11y -->
<head>
 	<!-- Metadata -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">

	<!-- Vue and Vuetify Styles -->
	<link href="/library/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
	<link href="/library/npm/vuetify@3/dist/vuetify.min.css" rel="stylesheet">

	<!-- CDS Styles -->
	<link href="/style/cds.css" rel="stylesheet">

	<!-- Cegid ico -->
	<link rel="shortcut icon" href="/images/cegid/favicon.ico" type="image/gif" />

	<!-- Vue and Vuetify JS -->
	<script src="/library/npm/vue@3/dist/vue.global.prod.js"></script>
	<script src="/library/npm/vuetify@3/dist/vuetify.min.js"></script>

	<!-- Functionality JS -->
	<script type="text/javascript">
		var appVue;
	</script>

	<!-- Title -->
	<title><%=Tran_tc_login.getProperty("activationConsent.title")%></title>

	</head>

	<body id="cds" class="cds-hidden">
	<div id="app">
	</div>

	<!-- Vue.js fake changePasswordPage change_password_operation.vue.js, has H1) -->
	<script type="text/javascript" src="/library/framework/common.vue.js"></script>
	<script type="text/javascript" src="/tctools/_change_password_operation.vue.js"></script>

	<div class="cds-hidden">
		<!-- Literales -->
		<label id="labelChangePasswordSucessButton"><%=sButtonName%></label>
		<label id="labelChangePasswordSucessTitle"><%=sTitle%></label>
		<label id="labelChangePasswordSucessDescription"><%=sErrorMessage%></label>
	</div>

	<script type="text/javascript">
		window.addEventListener("DOMContentLoaded", function () {
			appVue = changePasswordPage();

			appVue.changePasswordSuccessButton = document.querySelector("#labelChangePasswordSucessButton").textContent; // la etiqueta tiene que ser continuar, no puede ser cerrar o volver.
			appVue.changePasswordSuccessTitle= document.querySelector("#labelChangePasswordSucessTitle").textContent;
			appVue.changePasswordSuccessDescription = document.querySelector("#labelChangePasswordSucessDescription").textContent;
			appVue.locationURL = '<%=sActionPage%>'
			appVue.unframe = false;
			document.body.classList.remove("cds-hidden"); // Visualizar el contenido
		});
	</script>

</body>
</html>