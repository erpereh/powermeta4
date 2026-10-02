<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: _change_password.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>



<%@ page import="com.meta4.configuration.*" %>
<%

// Get the error message from request.
// String sErrorMessage =(String)request.getParameter("M4_ERROR_MESSAGE");;
String sErrorMessage = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_ERROR_MESSAGE");

//Get OPCODE from request.
//String ai_sOpCode = request.getParameter("M4_OPCODE"); 
String ai_sOpCode = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_OPCODE");

// OPCODE parameter. Three values are posible:
//	USER_REQUEST				- The user is changing his/her password after login.
//	PASSWORD_EXPIRED			- The servlet login ask the user for change his/her password.
//  PASSWORD_ABOUT_TO_EXPIRE	- The servler login ...

if ((ai_sOpCode == null) || ai_sOpCode.equals(""))
{
	ai_sOpCode = "USER_REQUEST";
}


// Get the username and language from Meta4 session.
String ai_UserName = null;
int iLanguage = 3;
String zlanguser ="es";
String zlangfolder ="";
try
{
	M4SessionManager m4session = M4Context.getSession(request);	
	ai_UserName = m4session.getIdUser();
	iLanguage = m4session.getLanguageID(); // 2, 3, 4.... 8
	zlangfolder = CheckConfig.checkFolderLanguage(iLanguage);
	zlanguser = CheckConfig.checkLocale(iLanguage);
}
catch (Exception e)
{	
	sErrorMessage = "ERROR_EXCEPTION_GETTING_USER_SESSION";
}

// Build new url : The internal change_password page.
String sNewRequestParameters = "?M4_OPCODE=" + ai_sOpCode;
String sChangePasswordUrl =  "/tctools/" + zlangfolder  + "/change_password_action.jsp" + sNewRequestParameters;
%>

<%@ include file="/tctools/tc_login_trans.jsp" %>

<%

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
		sErrorMessage = Tran_tc_login.getProperty("ChangePwd.Error_ChangePasswordNotStrongEnough");
	}
	else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_RECENTLY_USED"))
	{
		sErrorMessage =Tran_tc_login.getProperty("ChangePwd.Error_ChangePasswordRecentlyUsed"); 
	}
	else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_CONTAINS_NAME_TOKENS"))
	{
		sErrorMessage =Tran_tc_login.getProperty("ChangePwd.Error_ChangePasswordContainsNameTokens"); 
	}
}
%>

<%-- User interface. --%>
<script type="text/javascript" language="Javascript1.5" src="/translations/tctools/tc_login_<%=zlanguser%>.js"></script>

<script language="JavaScript">
function CheckAndSubmit()
{
	var bIsError = false;
	var sErrorMessage = "";	
	
	if (ChangePasswordForm.M4_CURRENT_PASSWORD.value == "")
	{
		sErrorMessage += _change_pwd_Error_CurrentPasswordIsNull + "\n";
		bIsError = true;		
	}
	
	if (ChangePasswordForm.M4_NEW_PASSWORD.value == "")
	{
		sErrorMessage += _change_pwd_Error_NewPasswordIsNull + "\n";
		bIsError = true;		
	}
	
	if (ChangePasswordForm.M4_RETYPE_PASSWORD.value == "")
	{
		sErrorMessage += _change_pwd_Error_RetypePasswordIsNull + "\n";
		bIsError = true;		
	}
	
	if (ChangePasswordForm.M4_NEW_PASSWORD.value != ChangePasswordForm.M4_RETYPE_PASSWORD.value)
	{
		sErrorMessage += _change_pwd_Error_NewPasswordDoesNotMatchRetypePassword + "\n";
		bIsError = true;		
	}
	
	if (ChangePasswordForm.M4_NEW_PASSWORD.value == ChangePasswordForm.M4_CURRENT_PASSWORD.value)
	{
		sErrorMessage += _change_pwd_Error_NewPasswordMatchCurrentPassword+ "\n";
		bIsError = true;		
	}
		
	if (bIsError == true)
	{
		alert(sErrorMessage);
		return;
	}
	else
	{
		ChangePasswordForm.submit();
	}
}
</script>

<%-- Show error message --%>
<%
	if (sErrorMessage != null)
	{
%>

<tr><td style="padding-top:10px">
	<table class="titulo2" border="0" cellspacing="0">
	<tr><td align="left">Error:&nbsp;<%=sErrorMessage%></td></tr>	
	</table>
	</br>
</td></tr>


<%
	}
%>
<%-- New password form --%>
<!--<tr><td style="padding-top:10px"> -->

    <table width = "100%" cellspacing="0" border = "0">
    <tr><td class="titulofuncional" colspan="2"><%=Tran_tc_login.getProperty("ChangePwd.PageTitle2")%></td></tr>
    <tr><td class="descripcionfuncional"><%=Tran_tc_login.getProperty("ChangePwd.PageDesc")%></td></tr>
    </table>	
	
	<form method="post" name="ChangePasswordForm" action="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sChangePasswordUrl)%>">
	<table class="tablaestados" cellspacing="0" border="0" width = "100%">
	<tr class="tablaestadosceldatitulo"><td colspan="2"><%=Tran_tc_login.getProperty("ChangePwd.Password")%></td></tr>
	<tr><td class="fuentecampo" colspan="2">&nbsp;&nbsp;</td></tr>
	<tr><td class="fuentecampo" width="30%">&nbsp;<%=Tran_tc_login.getProperty("ChangePwd.User")%>&nbsp;:&nbsp;</td>
		<td class="fuentecampo" ><%=ai_UserName%>&nbsp;</td></tr>
	<tr><td class="fuentecampo">&nbsp;<%=Tran_tc_login.getProperty("ChangePwd.CurrentPassword")%>&nbsp;:&nbsp;</td>
		<td class="fuentecampo"><input class="fuenteformulario" type="password" id="M4_CURRENT_PASSWORD" name="M4_CURRENT_PASSWORD" size="14" maxlength="32" title="<%=Tran_tc_login.getProperty("ChangePwd.CurrentPasswdTooltip")%>" tabindex="1" /></td></tr>
	<tr><td class="fuentecampo">&nbsp;<%=Tran_tc_login.getProperty("ChangePwd.NewPasswd")%>&nbsp;:&nbsp;</td>
		<td class="fuentecampo"><input class="fuenteformulario" type="password" id="M4_NEW_PASSWORD" name="M4_NEW_PASSWORD" size="14" maxlength="32" title="<%=Tran_tc_login.getProperty("ChangePwd.NewPasswdTooltip")%>" tabindex="2" /></td></tr>
	<tr><td class="fuentecampo">&nbsp;<%=Tran_tc_login.getProperty("ChangePwd.ReNewPasswd")%>&nbsp;:&nbsp;</td>
		<td class="fuentecampo"><input class="fuenteformulario" type="password" id="M4_RETYPE_PASSWORD" name="M4_RETYPE_PASSWORD" size="14" maxlength="32" title="<%=Tran_tc_login.getProperty("ChangePwd.ReNewPasswdTooltip")%>" tabindex="3" /></td></tr>
	<tr><td class="fuenteboton" colspan="2" align="right">
	    <a title="<%=Tran_tc_login.getProperty("ChangePwd.SendButton")%>" href="javascript:CheckAndSubmit();" tabindex="4">
		<img alt="<%=Tran_tc_login.getProperty("ChangePwd.SendButton")%>" id="enviar"  src="<%=zSendImage%>" width="36" height="36"/></a></td>
	</tr>
	</table>
	</form>
<!--</td></tr> -->
