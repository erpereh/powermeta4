<%-- [=====================================================]   
             
	@(#)FileVersion: 500.000.000       
	@(#)FileDescription: Internal page to allow the user changes his/her password.      
	@(#)CompanyName: Meta4 Spain, S.A.                       
	@(#)LegalCopyright: (c)1998
	@(#)ProductName: Meta4Mind Set
	@(#)ProductVersion: 5.0         
	@(#)InternalName: _change_password_action.jsp
	@(#)Date: 2001/09/27      

[=====================================================] --%>


<%--
This page is included from {language}/change_password_action.jsp file, and use
variables declared in that file.
--%>

<% 
// Creates a log object for these jsp pages.	
M4i18nCategory m_log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");

// In this variable, we save the parameters for the next request.
String sNewRequestParameters = "";

// OPCODE parameter. See _change_password_form.jsp file for more info.
String ai_sOpCode = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"M4_OPCODE");
if ((ai_sOpCode == null) || ai_sOpCode.equals(""))
{
	throw new JspException("Cannot find \"M4_OPCODE\" attribute in request.");
}
sNewRequestParameters += "?M4_OPCODE=" + ai_sOpCode;


// get password values.
String ai_sOldPassword = (String)com.meta4.taglib.util.M4SafeRequest.getParameter(request,"M4_CURRENT_PASSWORD");
String ai_sNewPassword = (String)com.meta4.taglib.util.M4SafeRequest.getParameter(request,"M4_NEW_PASSWORD");

// Get the username and language from Meta4 session.
long iLanguageId = 0;
String sErrorMessage = null;
try
{
	M4SessionManager m4session = M4Context.getSession(request);	
	iLanguageId = m4session.getIdioma();
		
}
catch (Exception e)
{	
	sErrorMessage = "ERROR_EXCEPTION_GETTING_USER_SESSION";
	m_log.fatal("EXCEPTION getting user session: ", e);
}


// change password code.
try
{
	M4Operations oM4op = new M4Operations(request);
	int iReturn = oM4op.changePassword(ai_sOldPassword, ai_sNewPassword);		

	if (iReturn != 0)
	{
		sErrorMessage = "ERROR_CHANGE_PASSWORD";
		m_log.error("Error in changePassword(). RetCode: " + new Integer(iReturn).toString());
	}
}
catch (Exception e)
{
	sErrorMessage = "ERROR_CHANGE_PASSWORD";
	m_log.fatal("Exception: ", e);
}
sNewRequestParameters += "&M4_ERROR_MESSAGE=" + sErrorMessage;

// get login page from configclient.xml file.
String sLoginPage = CheckConfig.setBadLoginLink(new Long(iLanguageId).intValue(), CheckConfig.THCL);

// get Portal page from configclient.xml file.
String sPortalPage = CheckConfig.checkDefPage("");

// get change_password page (the frontend page) from configclient.xml file.
String sChangePasswordForm = CheckConfig.checkPasswordPage(new Long(iLanguageId).intValue(), CheckConfig.THCL);


	
// Set new url.
String sNewUrl = null;
if (sErrorMessage != null)
{
	sNewUrl = sChangePasswordForm + sNewRequestParameters;
}
else if (ai_sOpCode.equals("USER_REQUEST"))
{
	sNewUrl = sPortalPage;
}
else if (ai_sOpCode.equals("PASSWORD_EXPIRED"))
{
%>
	<m4:logout/>
<%
	sNewUrl = sLoginPage;
}
else if (ai_sOpCode.equals("PASSWORD_ABOUT_TO_EXPIRE"))
{
	sNewUrl = sPortalPage + "?M4_LOGIN_ERROR=PASSWORD_ABOUT_TO_EXPIRE";
}
else
{
	throw new JspException("Invalid value for \"OPCODE\" attribute.");
}

%>

