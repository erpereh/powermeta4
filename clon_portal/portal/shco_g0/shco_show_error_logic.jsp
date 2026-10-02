<%-- =========================================================
	@(#) FileVersion: 823.001.043
	@(#) FileDescription: shco_show_error_logic.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2026
	@(#) ProductName: Peoplenet
========================================================= --%>

<%-- contains the logic to paint the different elements in the error page ---%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger" %>

<%  // 1 - initialize some variables 

	String sOriginHost = "";
	String sStyleSheet= CheckConfig.getStyleSheet();

	String sSAMLUser = null; 
	String lastURL = ""; 
	
	boolean bGoToLogin = false;
	boolean bInactivityError = false;

	M4PropertiesRedirect Tran_error = new M4PropertiesRedirect();
	String zlang = Integer.toString(M4WebLanguages.getLanguageFromCookie(request));
	M4Logger m_log = M4Logger.getLogger("com.meta4.jsp");
	
	String paint_msgError = ""; //-> message to show
	String paint_titleRedirect = ""; //-> message in button
	
	String paint_href = ""; //-> where the button links
	String paint_onclick = ""; //-> code that is run when the button is hit
	
	Boolean sendPostMessage_paint = false;
	Integer image_paint = 0; // if an image must be shown
	Boolean goTologin_paint = false;
%>
<%@ include file="/shco_g0/shco_gen_lang.jsp"%>
<%
	Tran_error.load(pageContext,"/translations/shco_show_error_" + zlanguser + ".properties");
%>
<%  // 2 - drop the mobile client side stuff  %>
<%@ include file="/mobile/include_mobile_nojqm.jsp"%>

<%  // 3 - login page, pop up mode, and error message
	String sLoginURL = CheckConfig.setBadLoginLink (Integer.valueOf(zlang).intValue());

	// Legacy mobile case
	if (prod != null && prod.equals("mobile"))
	{
		String value = (String) session.getAttribute("loginURL");
		/* fixed for oauth */
		if (value != null)
		{
			sLoginURL = value;
		} 
		else
		{
			sLoginURL = "/sse_generico/generico_login.jsp?desturi=/mobile/index.jsp";
		}
	}

	// Cegid ID without MFA or bad mail error cases
	String SSOLogoutEndpoint = (String)request.getAttribute("sso_logout_endpoint");
	if ( SSOLogoutEndpoint != null ) {
		m_log.trace("[error.jsp] LoginURL changed from '" + sLoginURL + "' to '" + SSOLogoutEndpoint + "'");
		sLoginURL = SSOLogoutEndpoint;
	}

	// 4 - is this in pop up mode? 
	String zOpenMode = M4SafeRequest.getParameter(request, "zopenmode");
	if (zOpenMode == null) zOpenMode = "";  

	// 5 - is the message from a) error code b) error parameter c) error attribute d) stack? 
	String stError = null;
	
	String zErrorCode = M4SafeRequest.getParameter(request, "zerrorcode");
	if (zErrorCode != null) 
	{
		stError = Tran_error.getProperty("ErrorPage."+zErrorCode);
	}
	else
	{
		stError = M4SafeRequest.getParameter(request, "error");
		if (stError == null)
		{
			stError = (String)request.getAttribute("error");
		}  
	}
	
	m_log.trace("[error.jsp] The error message when this page was hit is:" + stError);
	
	if (stError == null)
	{
		stError = Tran_error.getProperty("ErrorPage.StrangeError");
		String stTitle, stCode, stDescription;
		Vector vonerror = new Vector();
		try {
			M4SessionManager m4session = M4Context.getSession(request);
			if (m4session == null) 
			{
				stError = Tran_error.getProperty("ErrorPage.NoSesion");
				bGoToLogin = true;
					
				// remove the cookies! endlich! 
				UtilTaglet.removeCookie(UtilHttp.getSessionCookieName(), response);
			} 
			else 
			{
				SavParamsInterface oSavParams = m4session.getSavParamsInstance();
				String debuglevel = (String) oSavParams.getParameterValue("PORTAL_PARAM", "DEBUG");
				if (debuglevel.equals("0") || debuglevel.equals("1"))
				{
					bGoToLogin = true;
				}
				else
				{
					// Show stack errors
					M4Operations req = new M4Operations(request);
					boolean doCheck = true;
					req.checkError(M4Operations.ON_EVENT, vonerror);
					stError = "";
				
					for (int j =0; j< vonerror.size();j++){
						stError=stError + "<b>[" +((LogMessage)vonerror.elementAt(j)).getCode() + "]&nbsp; - &nbsp;";
						stError=stError +((LogMessage)vonerror.elementAt(j)).getTitle() + "</b>&nbsp;<br>";                         
						stError=stError +((LogMessage)vonerror.elementAt(j)).getDescription()+ "<br><br>";                          
					} 
	
					String sRemainingErrors = (String)m4session.getSessionCl().getObject("error_reported_from_page"); 
					if (!sRemainingErrors.equals(null)) 
					{
						m_log.error("[error.jsp] There are other errors reported in the session bag. These errors are:"+sRemainingErrors);
						stError = stError + "<br>[General Errors]:<br>";
						stError = stError + sRemainingErrors;
						m4session.getSessionCl().putObject("error_reported_from_page", null); 
					}
				}
			} 
		}
		catch (Exception e) 
		{
			  m_log.error("[error.jsp] Attempting to read messages from the LogMessage Stack", e);
		}
	}

	// 6 - control the situation when there is no session or the session is inactive
	try 
	{
		sOriginHost = (String)session.getAttribute("ORIGIN_HOST");
		if (sOriginHost != null && !sOriginHost.isEmpty()) {
			boolean isValidURL = isUrlSafeAndValid(sOriginHost);
			if (!isValidURL) {
				m_log.warn("[error.jsp] Ignoring the ORIGIN_HOST value stored in the session as it is not a valid URL: " + sOriginHost);
				sOriginHost = null; // treat it as if it was not there
			} else {
				if (m_log.isDebugEnabled()) m_log.debug("[error.jsp] The destination system thinks the request originated from.... " + sOriginHost);
			}
		}

		M4SessionManager m4session = M4Context.getActiveSession(request);
	} 
	catch (SessionException sessionException) 
	{
		UtilTaglet.removeCookie(UtilHttp.getSessionCookieName(), response); 

		if (sOriginHost != null && !sOriginHost.equals("")) {
			sendPostMessage_paint = true; // #1496893 HR Experience needs this postMessage
		}

		if (sessionException.getType().equalsIgnoreCase(SessionException.INACTIVITY)) {
		if (sOriginHost != null && !sOriginHost.equals("")) {
				stError = Tran_error.getProperty("ErrorPage.RemoteOriginMessage");
				bInactivityError = false;			
			} else {
				bInactivityError = true; 
			}
		} else {
			bGoToLogin = true;
		}
	}
%>

<%  // 7  - final calculations
	if ( zOpenMode.equals("1")) bGoToLogin = false; 
	if ( bInactivityError) bGoToLogin= true;
	
	try 
	{
		sSAMLUser = com.meta4.websso.M4SAMLUtils.getAuthenticatedUser(request);
	}
	catch (Exception e) 
	{
		m_log.trace("[error.jsp] No SSO SAML (User not logged in SAML environment)");
	}
	
	if ( sSAMLUser != null && !bInactivityError )
	{
		m_log.debug("[error.jsp] SAML user .... " + sSAMLUser);
		bGoToLogin = false;
	}
	
	paint_msgError = stError;

	// External system unavailable.
	boolean extSystemDown = false; 
	String sErrorCode = (String)request.getAttribute("code_error");
	if (sErrorCode != null && sErrorCode.equals("LOGIN_GENERAL_ERROR_NOREDIRECT"))
	{
		extSystemDown = true; 
	} 

	// Case when we are in an ABC link and just made a mistake in the password. 
	// Remember: we will not cover the case whereby you change the user. 
	if ( sSAMLUser == null && sOriginHost == null && sErrorCode != null && sErrorCode.equals("STATE_ERR_CREDENTIAL")) {
		String attemptedUser = M4SafeRequest.getParameter(request, "_USER");
		lastURL = preserveLastURL(request, attemptedUser);
	} else {
		m_log.trace("[error.jsp] No need to preserve URL in session");
	}

	// Case when we want to forward the user to another page to make another action
	String forwardTo = null; 
	if ( sSAMLUser != null && sErrorCode != null && sErrorCode.equals("STATE_ERR_ACTIVATION_CONSENT")) 
	{
		request.setAttribute("languageWhenForwarding", zlang); 
		forwardTo = "/tctools/activation/tc_activation_consent.jsp";
		bGoToLogin = false;
	}

	m_log.trace("|error.jsp| ----------------------------");
	m_log.trace("|error.jsp| bGoToLogin:   " + bGoToLogin);
	m_log.trace("|error.jsp| sLoginURL:    " + sLoginURL);
	m_log.trace("|error.jsp| sOriginHost:  " + sOriginHost);
	m_log.trace("|error.jsp| bInactivity:  " + bInactivityError);
	m_log.trace("|error.jsp| extSystemDown:" + extSystemDown);
	m_log.trace("|error.jsp| forwardTo:    " + forwardTo);
	m_log.trace("|error.jsp| lastURL:    "   + lastURL);
	m_log.trace("|error.jsp| ----------------------------");

	// Redirection due to inactivity
	if ( bGoToLogin == true ) {
		if ( sOriginHost == null || sOriginHost.equals("")){
			if (!sLoginURL.equals("")) {
				paint_titleRedirect = Tran_error.getProperty("BackToLogin");
				paint_onclick = "window.location.href='"+ sLoginURL+"'";
				paint_href = "#";
			} else {
				paint_titleRedirect = Tran_error.getProperty("BackToLogin");
				paint_href = "javascript:history.go(-1);";
				paint_onclick = null;
			}
			image_paint = 0;
		} else {
				paint_titleRedirect = Tran_error.getProperty("ErrorPage.Reload");
				image_paint = 1;
		}
	}

	// Redirection due to error, no tiger
	if ( sOriginHost == null || sOriginHost.equals(""))
	{
			if ( bGoToLogin != true ) { 
				if ( zOpenMode.equals("1") ) { // open with window.open 
					paint_titleRedirect = Tran_error.getProperty("ErrorPage.Close");
					paint_href = "javascript:window.close();";
					paint_onclick = "";
				} else {
					paint_titleRedirect = Tran_error.getProperty("ErrorPage.GoBack");
					paint_href = "javascript:history.go(-1);";
					paint_onclick = "";
				}
			} else {
					paint_titleRedirect = Tran_error.getProperty("BackToLogin");
					paint_onclick = "window.location.href='"+ sLoginURL +"'";
					paint_href = "#";
			}
	} 
	else 
	{
			paint_titleRedirect = Tran_error.getProperty("ErrorPage.RemoteOriginMessage");
			image_paint = 1;
			paint_href = null; 
	}
	goTologin_paint = bGoToLogin;

	if (extSystemDown) 
	{
		paint_titleRedirect = stError;
		image_paint = 1;
		paint_href = null; 
	}
	
	m_log.trace("[error.jsp] paint_href: "+paint_href);
	m_log.trace("[error.jsp] paint_titleRedirect: "+paint_titleRedirect);
	m_log.trace("[error.jsp] sendPostMessage_paint: "+sendPostMessage_paint);	
	m_log.trace("[error.jsp] goTologin_paint: "+goTologin_paint);
	m_log.trace("[error.jsp] paint_onclick: "+paint_onclick);
	m_log.trace("[error.jsp] image_paint: "+image_paint);

	//  8  - redirection
	if (!zOpenMode.equals("1") && bInactivityError && forwardTo == null) 
	{
		// remove the cookie
		UtilTaglet.removeCookie(UtilHttp.getSessionCookieName(), response);
		M4Redirect r = new M4Redirect();
		// make <meta http-equiv='refresh' with a refresh interval of 3. 
		if (prod != null && prod.equals("mobile"))
		{
			pageContext.getOut().print(r.getSessionEventString(request, response, "/mobile/index.jsp"));
		} 
		else
		{
			pageContext.getOut().print(r.getSessionEventString(request, response, pageContext.getServletContext()));
		}
	}

	//  9 - forward
	if (forwardTo != null) {
		m_log.trace("[error.jsp] forwarding .... : "+forwardTo);
		RequestDispatcher dispatcher = pageContext.getServletContext().getRequestDispatcher(forwardTo);
		dispatcher.forward(request, response);
		// abort method _jspService
		return;
		
	}
%>

<%!
/**
 * Validates that a URL is safe and not malicious in the context of this page.
 * @param url The URL to validate
 * @return true if the URL is safe, false otherwise
 */
public static boolean isUrlSafeAndValid(String url) {
	if (url == null || url.isEmpty()) {
		return false;
	}
	String escapedUrl = com.meta4.utilities.M4PresentationUtil.escape(url);
	if (!escapedUrl.equals(url)) {
		return false; // URL contains characters that should be escaped, which is suspicious
	}
	return true; 
}

/**
 * This method preserves the last URL in the session with a user-specific key to prevent URL leakage between users.
 * It checks if the last URL and user are valid before storing it in the session.
 * TODO: Validates the URL to prevent malicious content.
 */
public static String preserveLastURL(HttpServletRequest request, String user) {
	String sURL = ""; 
	M4Logger m_log = M4Logger.getLogger("com.meta4.jsp");
	
	String lastURL = request.getParameter("_URL"); 
	if (lastURL != null && user != null && !user.isEmpty()) {
		sURL = lastURL;
		// Store with user-specific key to prevent URL leakage between users
		request.getSession().setAttribute("_RURL_" + user, sURL);
		// Also store a global marker so we can find which user to retrieve for
		request.getSession().setAttribute("_RURL_CTX", user);
		m_log.trace("[error.jsp] Preserving last URL in session for user " + user + ": " + sURL);
	} else {
		m_log.trace("[error.jsp] No URL to preserve or user is null/empty. lastURL: " + lastURL + " user: " + user);
	}
	return sURL;
}
%>