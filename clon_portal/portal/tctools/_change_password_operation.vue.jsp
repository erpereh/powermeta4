<%-- =========================================================
	@(#) FileVersion: 822.003.008
	@(#) FileDescription: _change_password_operation.vue.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ page import="com.meta4.common.utils.logsystem.*" %>
<%@ include file="/tctools/tc_login_bag.jsp" %>
<%@ include file="/tctools/tc_login_trans.jsp" %>

<%
  // delete this when it is not a jsp:include
  String zUrlPage ="/tctools/change_password.jsp";
%>

<%-- (Before) Include to change password operation. --%>


<%  String sErrorMessage ="";
	String sExtendedErrorMessage = "";
%>

<% 
	// Creates a log object for these jsp pages.	
	M4Logger m_log = M4Logger.getLogger("com.meta4.jsp");

	// Change Password Action Code
	boolean unframe = false; 

	//In this variable, we save the parameters for the next request.
	String sNewRequestParameters = "";
	
	//	OPCODE parameter. See _change_password_include.jsp file for more info.
	//	String ai_sOpCode = request.getParameter("M4_OPCODE");
	String ai_sOpCode = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_OPCODE");

	if ((ai_sOpCode == null) || ai_sOpCode.equals("")){
		throw new JspException("Cannot find \"M4_OPCODE\" attribute in request.");
	}
	sNewRequestParameters += "M4_OPCODE=" + ai_sOpCode;

	// Get the source page
	// String ai_sM4UrlPage = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_URL_PAGE");
	// Attempt to fix XSS/HTML. Blacklist single quotes, double quotes and backslashes.
	String ai_sM4UrlPage = getRequestValueBlack(request, "M4_URL_PAGE", "");

	if ((ai_sM4UrlPage == null) || ai_sM4UrlPage.equals("")) {
		ai_sM4UrlPage="";
	} 
	else {		
		ai_sM4UrlPage = "/servlet/CheckSecurity/JSP/" + ai_sM4UrlPage;
	}

	//	get password values. cannot do safe request because these parameters will be passed "as is".
	String ai_sOldPassword = (String)request.getParameter("M4_CURRENT_PASSWORD");
	String ai_sNewPassword = (String)request.getParameter("M4_NEW_PASSWORD");   


	int iLanguageId = iLang; // Provide with the include shco_gen_bag.jsp
	String zCPLangUser = CheckConfig.checkLocale(iLanguageId);

	//	change password code.
	//	--------------------------
	try
	{
		M4Operations oM4op = new M4Operations(request);
		int iReturn = oM4op.changePassword(ai_sOldPassword, ai_sNewPassword);
		if (iReturn == 1) {
			sErrorMessage = "ERROR_CHANGE_PASSWORD_EQUAL_TO_USER";
		} else if (iReturn == 2) {
			sErrorMessage = "ERROR_CHANGE_PASSWORD_NOT_STRONG_ENOUGH";
		} else if (iReturn == 3) {
			sErrorMessage = "ERROR_CHANGE_PASSWORD_RECENTLY_USED";
		} else if (iReturn == 4) {
			sErrorMessage = "ERROR_CHANGE_PASSWORD_NO_PERMISSION";
		} else if (iReturn == 5) {
			sErrorMessage = "ERROR_CHANGE_PASSWORD_CONTAINS_NAME_TOKENS";
		} else if (iReturn != 0)
		{	
			sErrorMessage = "ERROR_CHANGE_PASSWORD";
			m_log.error("Error in changePassword(). RetCode: " + new Integer(iReturn).toString());
		}else{
			sErrorMessage = "CHANGE_PASSWORD_OK";
		}	
	}
	catch (Exception e)
	{
		sErrorMessage = "ERROR_CHANGE_PASSWORD";
		m_log.fatal("Exception: ", e);
	}

	sNewRequestParameters += "&M4_ERROR_MESSAGE=" + sErrorMessage;

	//	get login page from configclient.xml file.
	String sLoginPage = CheckConfig.setBadLoginLink(iLanguageId, CheckConfig.THCL);
	//	get Portal page from configclient.xml file.
	String sPortalPage = CheckConfig.checkDefPage("");
	//	get change_password page (the frontend page) from configclient.xml file.
	String sChangePasswordForm = CheckConfig.checkPasswordPage(iLanguageId, CheckConfig.THCL);

	//	Set new url.
	String sNewUrl = null;

	if (!sErrorMessage.equals("CHANGE_PASSWORD_OK"))
	{
		
		// Error cambiando de password, comprobar si tenemos la pagina origen 
		if (ai_sM4UrlPage.equals("")) {
			sNewUrl = sChangePasswordForm;
		} else {
			sNewUrl = ai_sM4UrlPage;
			sNewUrl = sNewUrl;
		}
		
		// no estamos logados por tanto hay que volver a la pagina de cambio de password 
		// sin servlet/CheckSecurity
		// de ahi que no sirve la pagina origen
		if (ai_sOpCode.equals("PASSWORD_EXPIRED")){
			sNewUrl = sChangePasswordForm + "?" + "M4_OPCODE=PASSWORD_EXPIRED";	
		} else if (ai_sOpCode.equals("PASSWORD_ABOUT_TO_EXPIRE")){
			sNewUrl = sNewUrl + "?" + "M4_OPCODE=PASSWORD_ABOUT_TO_EXPIRE&M4_EXPIRES_IN=-1";	
		}
		m_log.debug(" [change_password_operation] situation is not CHANGE_PASSWORD_OK and will redirect to " + sNewUrl);
	} 
	else if (ai_sOpCode.equals("USER_REQUEST")) {
		m_log.debug(" [change_password_operation] finishing a change password requested by USER_REQUEST in " + sPortalPage);
		sNewUrl = sPortalPage;
	} 
	else if (ai_sOpCode.equals("PASSWORD_EXPIRED")) {
		sNewUrl = sLoginPage;
		// see incidence 0160481 for more details
		m_log.debug(" [change_password_operation] finishing a change password requested by PASSWORD_EXPIRED in " + sLoginPage);
		
	}
	else if (ai_sOpCode.equals("PASSWORD_ABOUT_TO_EXPIRE")){
		// sNewUrl = sPortalPage + "?M4_LOGIN_ERROR=PASSWORD_ABOUT_TO_EXPIRE";
		// see incidence 0336556 for more details
		sNewUrl = sLoginPage;
		m_log.debug(" [change_password_operation] finishing a change password requested by PASSWORD_ABOUT_TO_EXPIRE in " + sLoginPage);
	}
	else{
		throw new JspException("Invalid value for \"OPCODE\" attribute.");
	}

%>

<%-- Used to Open window with the change password result message. --%>

<%
// OPCODE parameter. Three values are posible:
//	USER_REQUEST				- The user is changing his/her password after login.
//	PASSWORD_EXPIRED			- The servlet login ask the user for change his/her password.
//  PASSWORD_ABOUT_TO_EXPIRE	- The servler login ...

if ((ai_sOpCode == null) || ai_sOpCode.equals(""))
{
	ai_sOpCode = "USER_REQUEST";
}


// Set the error message when the password is expired.
if ((sErrorMessage == null || sErrorMessage.equals("")) && (ai_sOpCode.equals("PASSWORD_EXPIRED")))
{
	sErrorMessage = Tran_tc_login.getProperty("ChangePwd.Error_PasswordExpired");
}
	
// Translate error message.
if (sErrorMessage != null)
{
	if (sErrorMessage.equals("ERROR_EXCEPTION_GETTING_USER_SESSION"))
	{
		sErrorMessage = Tran_tc_login.getProperty("ChangePwd.Error_ExceptionGettingUserSession");
	}
	else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD"))
	{
		sErrorMessage = Tran_tc_login.getProperty("ChangePwd.Error_ChangePassword");
	}
	
	else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_NOT_STRONG_ENOUGH"))
	{
		// You cant display all msgs since some of those are not ok
		java.util.HashSet ai_messages = new java.util.HashSet();
			ai_messages.add("1572907");
			ai_messages.add("1572915"); 
			sExtendedErrorMessage = com.meta4.taglib.util.M4LogUtils.getFilteredCookedLogMessages (request, ai_messages, true);
		if (sExtendedErrorMessage != null && !sExtendedErrorMessage.equals(""))
		{
			sErrorMessage = sExtendedErrorMessage;   
		}
		else
		{
			sErrorMessage = Tran_tc_login.getProperty("ChangePwd.Error_ChangePasswordNotStrongEnough");
		}		 
	}

	else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_RECENTLY_USED"))
	{
		sErrorMessage =Tran_tc_login.getProperty("ChangePwd.Error_ChangePasswordRecentlyUsed"); 
	}
	else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_NO_PERMISSION"))
	{
		sErrorMessage =Tran_tc_login.getProperty("ChangePwd.Error_ChangePasswordNoPermission"); 
	
	}else if (sErrorMessage.equals("CHANGE_PASSWORD_OK"))	
	{
		sErrorMessage =Tran_tc_login.getProperty("ChangePwd.PasswordChanged");
		unframe = true;
	}
	else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_EQUAL_TO_USER"))	
	{
		sErrorMessage =Tran_tc_login.getProperty("ChangePwd.Error_PasswordEqualUserId");
		
	}else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_CONTAINS_NAME_TOKENS"))	
	{
		sErrorMessage =Tran_tc_login.getProperty("ChangePwd.Error_ChangePasswordContainsNameTokens");
	}
	
	
}
%>

<%-- Code used to redirect to the correct page -- sNewUrl - now this has been displayed as a link above %>

<%-- LogOut if the password is expired and user has already change to a new password --%>
<%if ((ai_sOpCode.equals("PASSWORD_EXPIRED")||ai_sOpCode.equals("PASSWORD_ABOUT_TO_EXPIRE")) && sErrorMessage.equals("CHANGE_PASSWORD_OK")){%>
	<m4:logout/>
<%}%>

<%! 
// getRequestValueBlack: avoids null references and does simple blacklisting of ", ', and \ as characters 
String getRequestValueBlack(HttpServletRequest request, String paramName, String defaultValue) 
{
   String value = M4SafeRequest.getParameter(request, paramName);
   if (defaultValue == null) defaultValue = ""; 
   if (value == null || value.equals("") || value.equals("null")
	  || value.contains("\"") || value.contains("\\") || value.contains("\'")) {
		 return defaultValue; 
   }
   else 
   {
	  return value; 
   }
}
%>

<!DOCTYPE HTML>
<html lang="<%=zCPLangUser%>"><!-- A11y -->
<head>
	<!-- Metadata -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">

	<!-- Vue and Vuetify Styles -->
	<link href="/library/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
	<link href="/library/npm/vuetify@3/dist/vuetify.min.css" rel="stylesheet">

	<!-- CDS Styles -->
	<link href="/style/cds.css" rel="stylesheet">

	<!-- Vue and Vuetify JS -->
	<script src="/library/npm/vue@3/dist/vue.global.prod.js"></script>
	<script src="/library/npm/vuetify@3/dist/vuetify.min.js"></script>


	<!-- Functionality JS -->
	<script type="text/javascript">
		var appVue;
	</script>

	<!-- Title -->
	<title><%=Tran_tc_login.getProperty("ChangePwd.Title")%></title>

</head>

<body id="cds" class="cds-hidden">
	<div id="app">
	</div>

	<!-- Vue.js changePasswordPage (_change_password_operation.vue.js, has H1) -->
	<script type="text/javascript" src="/library/framework/common.vue.js"></script>
	<script type="text/javascript" src="/tctools/_change_password_operation.vue.js"></script>

	<div class="cds-hidden">
		<!-- Literales -->
		<label id="labelChangePasswordSucessButton"><%=Tran_tc_login.getProperty("ChangePwd.CloseButton")%></label>
		<label id="labelChangePasswordSucessTitle"><%=Tran_tc_login.getProperty("ChangePwd.Title")%></label>
		<label id="labelChangePasswordSucessDescription"><%=sErrorMessage%></label>
	</div>

	<script type="text/javascript">
		window.addEventListener("DOMContentLoaded", function () {
			appVue = changePasswordPage();

			appVue.changePasswordSuccessButton = document.querySelector("#labelChangePasswordSucessButton").textContent;
			appVue.changePasswordSuccessTitle= document.querySelector("#labelChangePasswordSucessTitle").textContent;
			appVue.changePasswordSuccessDescription = document.querySelector("#labelChangePasswordSucessDescription").textContent;
			appVue.locationURL = '<%=sNewUrl%>';
			appVue.unframe = '<%=unframe%>';
			document.body.classList.remove("cds-hidden"); // Visualizar el contenido
		});
	</script>

</body>
</html>
 
