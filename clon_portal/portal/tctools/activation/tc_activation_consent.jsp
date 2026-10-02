<%-- =========================================================
	@(#) FileVersion: 823.001.038
	@(#) FileDescription: tc_activation_consent.jsp
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
	
	M4Logger logger = M4Logger.getLogger("com.meta4.jsp");
%>

<%// 2 - the language when forwarding variable is used to know the language and deter guessed executions
	
	String zlanguser = "2";
	String languageWhenForwarding = (String) request.getAttribute("languageWhenForwarding"); 
	logger.debug("[tc_activation_consent.jsp] languageWhenForwarding: " + languageWhenForwarding );
	if (languageWhenForwarding != null) zlanguser = languageWhenForwarding; 

%>

<%@ include file="/tctools/tc_login_trans.jsp" %>

<%// 3 - extract information from the request and create the consent parameter

		String sActionPage = "/"; 
		
		String sTitle = Tran_tc_login.getProperty("activationConsent.title"); 
		String sErrorMessage = Tran_tc_login.getProperty("activationConsent.inactiveAccount"); 
		String sButtonName = "";
		
		String consentRequired = setConsentParam(request, zlanguser);

		if (consentRequired != null && languageWhenForwarding != null) { 
			sActionPage = "/tctools/activation/tc_activation_consent_action.jsp" + "?" + "CP=" + consentRequired;

			sTitle = Tran_tc_login.getProperty("activationConsent.activationTitle"); 
			sErrorMessage = Tran_tc_login.getProperty("activationConsent.activationText"); 
			sButtonName = Tran_tc_login.getProperty("activationConsent.button");
		}
%>

<%! // Java functions
		private String setConsentParam (HttpServletRequest request, String sLang) {
	
			boolean hasToConsent = false; 
			String consentParam = null; 

			M4Logger logger = M4Logger.getLogger("com.meta4.jsp");

			String samlDomain;
			String samlUserId;

			try {
				samlDomain = M4SAMLUtils.getDomain(request);
				samlUserId = M4SAMLUtils.getAuthenticatedUser(request);
			} catch (M4SAMLException e) {
				logger.warn("[tc_activation_consent.jsp] No SAML, no consent"); 
				return null;
			}
			
			try {
				LinkedHashMap<String,String> forTheConsent = new LinkedHashMap<String,String>();
				forTheConsent.put("AI_USER", samlUserId);
				forTheConsent.put("AI_DOMAIN", samlDomain);
				consentParam = M4CipherUtil.encryptSecretsMap(forTheConsent, request.getSession().getId());
			} catch (Exception e) {
				logger.error("[tc_activation_consent.jsp] Error generating consent parameter: ", e); 
				return null;
			}
		
		return consentParam;
}
%>

<%-- JavaScript user interface --%>
<!DOCTYPE HTML>
<html lang="<%=zlanguser%>"><!-- A11y -->
<head>
	<!-- Metadata -->
	<meta http-equiv=" X-UA-Compatible" content="IE=edge" />
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

	<title><%=Tran_tc_login.getProperty("activationConsent.title")%></title>
	<script type="text/javascript" src="/translations/tc_login_<%=zlanguser%>.js"></script>

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
			appVue = new changePasswordPage();

			appVue.changePasswordSuccessButton = document.querySelector("#labelChangePasswordSucessButton").textContent;
			appVue.changePasswordSuccessTitle= document.querySelector("#labelChangePasswordSucessTitle").textContent;
			appVue.changePasswordSuccessDescription = document.querySelector("#labelChangePasswordSucessDescription").textContent;
			appVue.locationURL = '<%=sActionPage%>'
			appVue.unframe = false;
			document.body.classList.remove("cds-hidden"); // Visualizar el contenido
		});
	</script>

</body>
</html>