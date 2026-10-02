<%-- =========================================================
	@(#) FileVersion: 819.004.006
	@(#) FileDescription: _change_password_include.vue.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ page import="com.meta4.configuration.*" %>

<%@ include file="/m4trans/shco_g0/0-shco_gen_taglib.jsp" %>
<html><title></title><head>
<%@ include file="/m4trans/tctools/0-tc_login_bag.jsp" %>
<%
  // delete this when it is not a jsp:include
  String zUrlPage ="/tctools/change_password.jsp";
%>

<%

// Get the error message from request.
String sErrorMessage = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_ERROR_MESSAGE");

// Get OPCODE from request.
String ai_sOpCode = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_OPCODE");

// OPCODE parameter. Three values are posible:
//	USER_REQUEST				- The user is changing his/her password after login voluntarily.
//	PASSWORD_EXPIRED			- The user is obliged to change his/her password by the login servlet.
//  	PASSWORD_ABOUT_TO_EXPIRE		- The user has been suggested to change his/her password.

if ((ai_sOpCode == null) || ai_sOpCode.equals("")){
	ai_sOpCode = "USER_REQUEST";
}


// Get the username and language from Meta4 session.
String ai_UserName = null;
String zCPLangUser ="";
String zCPLangFolder ="";
try
{
	M4SessionManager m4session = M4Context.getSession(request);	
	ai_UserName = m4session.getIdUser();
	int iLanguage = m4session.getLanguageID(); // 2, 3, 4.... 8
	zCPLangFolder = CheckConfig.checkFolderLanguage(iLanguage);
	zCPLangUser = CheckConfig.checkLocale(iLanguage);
}
catch (Exception e)
{	
	sErrorMessage = "ERROR_EXCEPTION_GETTING_USER_SESSION";
}


String sNewRequestParameters = "?M4_OPCODE=" + ai_sOpCode;
String sChangePasswordUrl =  "/servlet/CheckSecurity/JSP/tctools/change_password_operation.jsp" + sNewRequestParameters;

%>

<%

  com.meta4.redirect.M4PropertiesRedirect Tran_tc_login = new com.meta4.redirect.M4PropertiesRedirect();
  Tran_tc_login.load(pageContext,"/translations/tc_login_" + zCPLangUser + ".properties");
%>

<%
	// Set the error message when the password is expired.
	if ((sErrorMessage == null || sErrorMessage.equals("")) 
			&& (ai_sOpCode.equals("PASSWORD_EXPIRED"))) {		
		sErrorMessage = Tran_tc_login.getProperty("ChangePwd.Error_PasswordExpired");

	// Set the error message when the password is *about to expire*
	} else if((sErrorMessage == null || sErrorMessage.equals("")) && 
			(ai_sOpCode.equals("PASSWORD_ABOUT_TO_EXPIRE"))) {

		// String ztc_ExpireDays = request.getParameter("M4_EXPIRES_IN");
		String ztc_ExpireDays = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_EXPIRES_IN");
		
		if (ztc_ExpireDays == null) {
			ztc_ExpireDays = "0";
		}

		if (ztc_ExpireDays.equals("-1")) {
			sErrorMessage = null;
		} else { 
			
			if (ztc_ExpireDays.equals("1")) {
				sErrorMessage = Tran_tc_login.getProperty("ChangePwd.Error_PasswordAboutToExpired");
			} 
			else {
				sErrorMessage = Tran_tc_login.getProperty("ChangePwd.Error_PasswordAboutToExpired2");
			}

			String sErrorMessage2 = sErrorMessage.replaceFirst("#N#",ztc_ExpireDays);		 
			sErrorMessage = sErrorMessage2;
		}
	}
%>

<%-- User interface. --%>
<!DOCTYPE HTML>
<html>
<head>
  <!-- Metadata -->
  <meta http-equiv=" X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" />

  <!-- Vue and Vuetify Styles -->
  <link href="/library/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="/library/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">

  <!-- CDS Styles -->
  <link href="/style/cds.css" rel="stylesheet">

  <!-- Cegid ico -->
  <link rel="shortcut icon" href="/images/cegid/favicon.ico" type="image/gif" />
  
  <!-- Vue and Vuetify JS -->
  <script src="/library/npm/vue@2.x/dist/vue.min.js"></script>
  <script src="/library/npm/vuetify@2.x/dist/vuetify.min.js"></script>

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

    <!-- Vue -->
    <script type="text/javascript" src="/tctools/_change_password_include.vue.js"></script>
    
	<script type="text/javascript" language="Javascript1.5" src="/translations/tc_login_<%=zCPLangUser%>.js"></script>

	<script type="text/javascript" language="JavaScript">

function Exit()
{
		<%if (ai_sOpCode != null && ai_sOpCode.equals("PASSWORD_EXPIRED")) {%>
			var exit = "/servlet/CheckSecurity/JSP/shco_g0/shco_gen_logout.jsp"; 
		<% } else { %>	
			var exit = "/"; 
		<% } %>			
			location.href = exit; 
		}

		function CheckAndSubmit() {
			var bIsError = false;
			var sErrorMessage = "";	
			
			if (document.ChangePasswordForm.M4_CURRENT_PASSWORD.value == "") {
				sErrorMessage += _change_pwd_Error_CurrentPasswordIsNull + "\n";
				bIsError = true;		
			}
			
			if (document.ChangePasswordForm.M4_NEW_PASSWORD.value == "") {
				sErrorMessage += _change_pwd_Error_NewPasswordIsNull + "\n";
				bIsError = true;		
			}
			
			if (document.ChangePasswordForm.M4_RETYPE_PASSWORD.value == "") {
				sErrorMessage += _change_pwd_Error_RetypePasswordIsNull + "\n";
				bIsError = true;		
			}
			
			if (document.ChangePasswordForm.M4_NEW_PASSWORD.value != document.ChangePasswordForm.M4_RETYPE_PASSWORD.value) {
				sErrorMessage += _change_pwd_Error_NewPasswordDoesNotMatchRetypePassword + "\n";
				bIsError = true;		
			}
			
			if (document.ChangePasswordForm.M4_NEW_PASSWORD.value == document.ChangePasswordForm.M4_CURRENT_PASSWORD.value) {
				sErrorMessage += _change_pwd_Error_NewPasswordMatchCurrentPassword+ "\n";
				bIsError = true;		
			}
				
			if (bIsError == true) {
				if(typeof(meta4) != "undefined" && typeof(meta4.mobile) != "undefined"){
				meta4.ui.log.showMsg(sErrorMessage);
				//alert(sErrorMessage);
				}else{
				alert(sErrorMessage);
				}	
				return;
			} else { 
				document.ChangePasswordForm.submit();
			}
		}
	</script>

	<div class="cds-hidden">

		<!-- Form -->
		<form method="post" id="ChangePasswordFormAutocomplete" name="ChangePasswordForm" action="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sChangePasswordUrl)%>" autocomplete="off">
			<!-- Required -->
			<input type="password" id="M4_CURRENT_PASSWORD" name="M4_CURRENT_PASSWORD" size="32" maxlength="32" />
			<input type="password" id="M4_NEW_PASSWORD" name="M4_NEW_PASSWORD" size="32" maxlength="32" />
			<input type="password" id="M4_RETYPE_PASSWORD" name="M4_RETYPE_PASSWORD" size="32" maxlength="32" />
			<%if (ai_sOpCode != null && ai_sOpCode.equals("PASSWORD_EXPIRED")) {%>								
			<input cds-ref="back-button" type="button" onclick="javascript:Exit();">
			<%}%>
			<input cds-ref="send-button" type="button" onclick="javascript:CheckAndSubmit();">

			<input type="hidden" id="M4_URL_PAGE" name="M4_URL_PAGE" value="<%=zUrlPage%>" autocomplete="off"/>
			<input type="hidden" id="M4_OPCODE" name="M4_OPCODE" value="<%=ai_sOpCode%>" autocomplete="off"/>
		</form>

		<!-- Literales -->
		<label id="labelFormTitle"><%=Tran_tc_login.getProperty("ChangePwd.PageTitle2")%></label>
		<label id="labelFormDescriptionMessage"><%=sErrorMessage%></label>
		<label id="labelFormDescription"><%=Tran_tc_login.getProperty("ChangePwd.PageDesc")%></label>
		<label id="labelFormCurrentPassword"><%=Tran_tc_login.getProperty("ChangePwd.CurrentPassword")%></label>
		<label id="labelFormCurrentNewPasswd"><%=Tran_tc_login.getProperty("ChangePwd.NewPasswd")%></label> 
		<label id="labelFormCurrentReNewPasswd"><%=Tran_tc_login.getProperty("ChangePwd.ReNewPasswd")%></label>
		<label id="labelButtonsend"><%=Tran_tc_login.getProperty("ChangePwd.SendButton")%></label>
		<label id="labelButtonback"><%=Tran_tc_login.getProperty("ChangePwd.Back")%></label>

	
	</div>

	<script type="text/javascript">
		window.addEventListener("DOMContentLoaded", function () {

			var myDomElements = {
				password: document.querySelector('#M4_CURRENT_PASSWORD'),
				passwordNew: document.querySelector('#M4_NEW_PASSWORD'),
				passwordNewConfirm: document.querySelector('#M4_RETYPE_PASSWORD'),
				sendButton: document.querySelector('[cds-ref="send-button"]'),
				backButton: document.querySelector('[cds-ref="back-button"]')
			}

			appVue = new Vue(passwordPage(myDomElements));

			// Literals
			appVue.formTitle = document.querySelector("#labelFormTitle").textContent;
			appVue.formDescriptionMessage = document.querySelector("#labelFormDescriptionMessage").textContent;
			appVue.formDescription = document.querySelector("#labelFormDescription").textContent;
			appVue.formCurrentPassword = document.querySelector("#labelFormCurrentPassword").textContent;
			appVue.formCurrentNewPasswd = document.querySelector("#labelFormCurrentNewPasswd").textContent;
			appVue.formCurrentReNewPasswd = document.querySelector("#labelFormCurrentReNewPasswd").textContent;
			appVue.buttonsend = document.querySelector("#labelButtonsend").textContent;
			if (document.querySelector('[cds-ref="back-button"]')) {
				appVue.visibleback = true;
				appVue.buttonback = document.querySelector("#labelButtonback").textContent;
			}
			appVue.requiredpass = _change_pwd_Error_CurrentPasswordIsNull;
			appVue.requiredpassNew = _change_pwd_Error_NewPasswordIsNull;
			appVue.samenewpass = _change_pwd_Error_NewPasswordMatchCurrentPassword;
			appVue.samenewpassRep = _change_pwd_Error_NewPasswordDoesNotMatchRetypePassword;
			appVue.exitcode = "/servlet/CheckSecurity/JSP/shco_g0/shco_gen_logout.jsp";

			document.body.classList.remove("cds-hidden"); // Visualizar el contenido
		});
	</script>
</body>
</html>
