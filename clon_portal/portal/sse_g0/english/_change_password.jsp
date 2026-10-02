<%-- [=====================================================]   
             
	@(#)FileVersion: 500.000.000       
	@(#)FileDescription: Internal page to allow the user to change his/her password.      
	@(#)CompanyName: Meta4 Spain, S.A.                       
	@(#)LegalCopyright: (c)1998
	@(#)ProductName: Meta4Mind Set
	@(#)ProductVersion: 5.0         
	@(#)InternalName: _change_password.jsp      
	@(#)Date: 2001/09/27      

[=====================================================] --%>

<%--
This page is included from {language}/change_password.jsp file, and uses
variables declared in that file.
--%>


<% 
// Creates a log object for these jsp pages.	
M4i18nCategory m_log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");

// In this variable, we save the parameters for the next request.
String sNewRequestParameters = "";


// OPCODE parameter. Three values are posible:
//	USER_REQUEST				- The user is changing his/her password after login.
//	PASSWORD_EXPIRED			- The servlet login asks the user to change his/her password.
//  PASSWORD_ABOUT_TO_EXPIRE	- The servler login ...
String ai_sOpCode = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"M4_OPCODE");
if ((ai_sOpCode == null) || ai_sOpCode.equals(""))
{
	ai_sOpCode = "USER_REQUEST";
}
sNewRequestParameters += "?M4_OPCODE=" + ai_sOpCode;

// Get the error message from request.
String sErrorMessage = null;
sErrorMessage = (String)com.meta4.taglib.util.M4SafeRequest.getParameter(request,"M4_ERROR_MESSAGE");

// Set the error message when the password has expired.
if ((sErrorMessage == null || sErrorMessage.equals("")) && (ai_sOpCode.equals("PASSWORD_EXPIRED")))
{
	sErrorMessage = sError_PasswordExpired;
}

// Get the username and language from Meta4 session.
String ai_UserName = null;
long iLanguageId = 0;
try
{
	M4SessionManager m4session = M4Context.getSession(request);	
	ai_UserName = m4session.getIdUser();
	iLanguageId = m4session.getIdioma();
		
}
catch(Exception e) 
{	
	sErrorMessage = "ERROR_EXCEPTION_GETTING_USER_SESSION";
	m_log.fatal("EXCEPTION getting user session: ", e);
}

	
// Translate error message.
if (sErrorMessage != null)
{
	if (sErrorMessage.equals("ERROR_EXCEPTION_GETTING_USER_SESSION"))
	{
		sErrorMessage = sError_ExceptionGettingUserSession;
	}
	else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD"))
	{
		sErrorMessage = sError_ChangePassword;
	}
}


// The internal change_password page.
String sM4RootFolder = M4ConfigClient.getElement(M4VarConfigClient.M4_CFG_THINCLIENT_ROOT_TC);
String sLanguageFolder = CheckConfig.checkFolderLanguage(new Long(iLanguageId).intValue(), CheckConfig.THCL);
String sChangePasswordPage = "/sse_g0/" + sLanguageFolder + "/change_password_action.jsp";
if ((sM4RootFolder != null) && !sM4RootFolder.equals(""))
{
	sChangePasswordPage = "/" + sM4RootFolder + sChangePasswordPage;
}

	
// Build new url.
String sChangePasswordUrl = sChangePasswordPage + sNewRequestParameters;
%>


