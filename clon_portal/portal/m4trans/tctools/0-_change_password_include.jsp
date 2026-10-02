<%-- =========================================================
	@(#) FileVersion: 818.005.021
	@(#) FileDescription: _change_password_include.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ page import="com.meta4.configuration.*" %>

<% // 1 - test for ie11
   boolean isIE = false;
   String userAgent = request.getHeader("User-Agent");
   if (userAgent != null && userAgent.matches(".*Trident/7.*") || userAgent.matches(".*MSIE.*"))
   {
      isIE = true;
   }
%>

<% if (isIE) { 

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
<script type="text/javascript" language="Javascript1.5" src="/translations/tc_login_<%=zCPLangUser%>.js"></script>

<script language="JavaScript">
function Exit()
{
	<%if (ai_sOpCode != null && ai_sOpCode.equals("PASSWORD_EXPIRED")) {%>
		var exit = "/servlet/CheckSecurity/JSP/shco_g0/shco_gen_logout.jsp"; 
	<% } else { %>	
		var exit = "/"; 
	<% } %>			
	location.href = exit; 
}

function CheckAndSubmit()
{
	var bIsError = false;
	var sErrorMessage = "";	
	
	if (document.ChangePasswordForm.M4_CURRENT_PASSWORD.value == "")
	{
		sErrorMessage += _change_pwd_Error_CurrentPasswordIsNull + "\n";
		bIsError = true;		
	}
	
	if (document.ChangePasswordForm.M4_NEW_PASSWORD.value == "")
	{
		sErrorMessage += _change_pwd_Error_NewPasswordIsNull + "\n";
		bIsError = true;		
	}
	
	if (document.ChangePasswordForm.M4_RETYPE_PASSWORD.value == "")
	{
		sErrorMessage += _change_pwd_Error_RetypePasswordIsNull + "\n";
		bIsError = true;		
	}
	
	if (document.ChangePasswordForm.M4_NEW_PASSWORD.value != document.ChangePasswordForm.M4_RETYPE_PASSWORD.value)
	{
		sErrorMessage += _change_pwd_Error_NewPasswordDoesNotMatchRetypePassword + "\n";
		bIsError = true;		
	}
	
	if (document.ChangePasswordForm.M4_NEW_PASSWORD.value == document.ChangePasswordForm.M4_CURRENT_PASSWORD.value)
	{
		sErrorMessage += _change_pwd_Error_NewPasswordMatchCurrentPassword+ "\n";
		bIsError = true;		
	}
		
	if (bIsError == true)
	{
		if(typeof(meta4) != "undefined" && typeof(meta4.mobile) != "undefined"){
			meta4.ui.log.showMsg(sErrorMessage);
		}else{
			alert(sErrorMessage);
		}	
		return;
	}
	else
	{ 
		document.ChangePasswordForm.submit();
	}
}

function toogleShowPasword(pwdInput, eyeElement) 
{
	var x = document.getElementById(pwdInput);
	if (x.type === "password") {
		x.type = "text";
		eyeElement.src = "/images/eye.svg";
	} else {
		x.type = "password";
		eyeElement.src = "/images/eye_block.svg";
	}
}
</script>

<link rel="stylesheet" type="text/css" href="/style/m4reset.css">
<link rel="stylesheet" type="text/css" href="/style/cds_ie11.css">

<style type="text/css">
	#capa_cuerpo {
		height: 100%;
	}
</style>

<body>
	<div id="outerDiv">
		<div class="box">
			<div id="loginBox" class="m4-shadow">

			<form method="post" id="ChangePasswordFormAutocomplete" name="ChangePasswordForm" action="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sChangePasswordUrl)%>" autocomplete="off">

				<div id="logoPeopleNetCloud">
					<img id="imgLogo" src="/images/cegid/cegid.png">
				</div>

				<div class="loginRow">
					<p class="text-h5"><%=Tran_tc_login.getProperty("ChangePwd.PageTitle2")%></p>
				</div>

				<div class="loginRow">
					<%if (sErrorMessage != null){%>
					<p class="text-body-2"><%=sErrorMessage%></p>
					<%}%>
					<p class="text-body-2"><%=Tran_tc_login.getProperty("ChangePwd.PageDesc")%></p>
				</div>

				<div class="loginRow">
					<input class="fuenteformulario" type="password" id="M4_CURRENT_PASSWORD" name="M4_CURRENT_PASSWORD" data-cy="M4_CURRENT_PASSWORD" size="32" maxlength="32" title='<%=Tran_tc_login.getProperty("ChangePwd.CurrentPasswdTooltip")%>' placeholder='<%=Tran_tc_login.getProperty("ChangePwd.CurrentPassword")%>' tabindex="1" autocomplete="off"/>
					<img id="showPasswordCurrent" class="eyePassword" src="/images/eye_block.svg" onclick="toogleShowPasword('M4_CURRENT_PASSWORD',this)">
				</div>

				<div class="loginRow">
					<input class="fuenteformulario" type="password" id="M4_NEW_PASSWORD" name="M4_NEW_PASSWORD" data-cy="M4_NEW_PASSWORD" size="32" maxlength="32" title='<%=Tran_tc_login.getProperty("ChangePwd.NewPasswdTooltip")%>' placeholder='<%=Tran_tc_login.getProperty("ChangePwd.NewPasswd")%>' tabindex="2" autocomplete="off"/>
					<img id="showPasswordNew" class="eyePassword" src="/images/eye_block.svg" onclick="toogleShowPasword('M4_NEW_PASSWORD',this)">
				</div>

				<div class="loginRow">
					<input class="fuenteformulario" type="password" id="M4_RETYPE_PASSWORD" name="M4_RETYPE_PASSWORD" data-cy="M4_RETYPE_PASSWORD" size="32" maxlength="32" title='<%=Tran_tc_login.getProperty("ChangePwd.ReNewPasswdTooltip")%>' placeholder='<%=Tran_tc_login.getProperty("ChangePwd.ReNewPasswd")%>' tabindex="3" autocomplete="off"/>
					<img id="showPasswordRetype" class="eyePassword" src="/images/eye_block.svg" onclick="toogleShowPasword('M4_RETYPE_PASSWORD',this)">
				</div>

				<%if (ai_sOpCode != null && ai_sOpCode.equals("PASSWORD_EXPIRED")) {%>
					<div class="loginRow text-center">
						<a href="javascript:Exit()" class="buttonForm-link" data-cy="buttonback"><%=Tran_tc_login.getProperty("ChangePwd.Back")%></a>
					</div>
				<%}%>
				

				<div class="loginRow">
					<input type="button" class="buttonForm-primary" value='<%=Tran_tc_login.getProperty("ChangePwd.SendButton")%>' onclick="javascript:CheckAndSubmit();" data-cy="buttonsend">
				</div>
				
				<input type="hidden" id="M4_URL_PAGE" name="M4_URL_PAGE" value="<%=zUrlPage%>" autocomplete="off"/>
				<input type="hidden" id="M4_OPCODE" name="M4_OPCODE" value="<%=ai_sOpCode%>" autocomplete="off"/>

			</form>

			</div>
		</div>
		<div id="ad"></div>
	</div>		

<% } else {	%>
	<jsp:include page="/m4trans/tctools/0-_change_password_include.vue.jsp" />
<% } %>