<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: index.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ page import="com.meta4.languages.*"%>
<%@ page import="com.meta4.configuration.*"%>
<%@ page import="java.util.*"%>
<%@ page import="com.meta4.request.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.session.SessionException"%>
<%@ page import="com.meta4.taglib.util.M4PresentationUtilTaglib.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>

<% // 1 - headers: no cache 
   response.setHeader("Pragma", "no-cache"); 
   response.setHeader("Cache-Control", "no-store"); 
   response.setDateHeader("Expires", -1); 

   M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
%>

<%  // 2 - mobile logon
    String sMobileIndexURL = "/mobile/index.jsp";
    String sMobileHomeHTML = "/mobile/m4home.html";

    // check if we are in a SSO SAML environment
    boolean ssoSAML = isSingleSignOnSAML (request) ;

    // check if a cookie from the persistent session system exists
    boolean persistentSession = existsPersistentSession (request);
    
    // get the deviceFrom parameter
    String deviceFrom = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "deviceFrom");

	// needed for single sign on to set the session storage
	if (deviceFrom != null) sMobileHomeHTML = sMobileHomeHTML + "?" + "deviceFrom=" + deviceFrom;  
    
    // check and get active session
    M4SessionManager m4session = null;    
    try 
    {
        m4session = M4Context.getActiveSession(request);
    } 
    catch (SessionException se) 
    {
      	if (oM4Log.isTraceEnabled()) oM4Log.debug(" [mobile/index.jsp] No active session -> " + se.getMessage());  
        m4session = null;
    }

	// already logged in with an active session 	
	if (m4session != null) 
	{
		// redirect to home
		if (oM4Log.isTraceEnabled()) oM4Log.trace(" [mobile/index.jsp] Already logged in with an active session: redirect to home");
		if (deviceFrom != null) 
		{
			%>
			<html>
				<head>
					<script src="/library/jquery.js"></script>			
					<script src="/library/jquery.mobile.js"></script>							
					<script type="text/javascript">
						jQuery.mobile.autoInitializePage = false;
						jQuery.noConflict();	  
					</script>			
					<script type="text/javascript" src="/mobile/js/meta4.mobile.js"></script>		
					<script type="text/javascript" src="/mobile/js/meta4.mobile.login.js"></script>	
				</head>
				<body></body>
			</html>			
			<%
		}	
		else
		{
			if (oM4Log.isTraceEnabled()) oM4Log.trace(" [mobile/index.jsp] No deviceFrom");
		}
		oM4Log.debug(" [mobile/index.jsp] Case 1 (got session) redirecting to " + sMobileHomeHTML);	
		response.sendRedirect(sMobileHomeHTML);
	}
	else
	{
		
		//we have the persistent cookie 
		if (persistentSession) 
		{
			//redirect to home: the session will be established by m4jsapi
			if (oM4Log.isTraceEnabled()) oM4Log.trace(" [mobile/index.jsp] We have the persistent cookie: redirect to home: the session will be established by m4jsapi");
			setMobileCookie( response ); 
			response.sendRedirect(sMobileHomeHTML);
		}
		else
		{			 
			oM4Log.trace(" [mobile/index.jsp] Not an active session, nor a persistent session cookie...");						
			session.setAttribute("_PROD","mobile"); 
			setMobileCookie( response );
			if ( ssoSAML )
			{
				// new trace to debug sso saml
				Enumeration<String> paramNames = request.getParameterNames();                      
				while (paramNames.hasMoreElements()) {
					String parameterName = (String) paramNames.nextElement();
	    			if (oM4Log.isDebugEnabled()) 
						oM4Log.debug(" [mobile/index.jsp] Scan param -> " + parameterName + "=" + request.getParameter(parameterName)); 
				}

				// it is mandatory to pass the login page. 				
				String sURLValue = "/sse_generico/generico_login.jsp?desturi=/mobile/index.jsp";
				session.setAttribute("loginURL",sURLValue);		
				// bugid 289223
				if (deviceFrom != null && !deviceFrom.equals("") )
				{
					sURLValue+= "&deviceFrom=" + deviceFrom;
				}	
				oM4Log.debug(" [mobile/index.jsp] Case 2 (Single Sign On) " + sURLValue);

				response.sendRedirect(sURLValue);
			}
			else 
			{   
				session.setAttribute("loginURL","/mobile/index.jsp");
				// bugid 271887 (idiomas), bugid 288962 (encodeado)
				int iLang = M4WebLanguages.getLanguageFromCookie(request);
				if (oM4Log.isTraceEnabled()) oM4Log.debug(" [mobile/index.jsp] Language Cookie  -> " + iLang);  				
				String sLoginPage = "/sse_generico/generico_login.jsp"; 
				String sLang = CheckConfig.checkLocale(iLang);
				sLoginPage = sLoginPage + "?lang=" + sLang;
				if (deviceFrom != null && !deviceFrom.equals("") )
				{
					sLoginPage+= "&deviceFrom=" + deviceFrom;
				}
				if (oM4Log.isTraceEnabled()) oM4Log.debug(" [mobile/index.jsp] Case 0 (but no session, go to login)  " + sLoginPage); 
				response.sendRedirect(sLoginPage);			
			}
		}
	}	
%>

<%! 

// isSingleSignOnSAML
boolean isSingleSignOnSAML (HttpServletRequest request)
{   
	M4Logger _oM4Log = M4Logger.getLogger("com.meta4.jsp");
	String sSAMLUser = null;
	try 
	{
		sSAMLUser = com.meta4.websso.M4SAMLUtils.getAuthenticatedUser(request);
		if (_oM4Log.isTraceEnabled()) _oM4Log.trace(" [mobile/index.jsp] SSO SAML ("+sSAMLUser+")");
	}		
	catch (Exception e) 
	{
		if (_oM4Log.isTraceEnabled()) _oM4Log.trace(" [mobile/index.jsp] No SSO SAML (User not logged in SAML environment)");
	}
	if (sSAMLUser == null) return false; 
	return true; 
}

// setMobileCookie: establishes the product cookie
void setMobileCookie (HttpServletResponse response)
{       
	M4ProductReadUtils.createProductCookie (response, "mobile");
	return;
}

// existsPersistentSession: reads whether the persistent session cookie exists
boolean existsPersistentSession (HttpServletRequest request)
{       
	M4Logger _oM4Log = M4Logger.getLogger("com.meta4.jsp");
	String user = null; 
	try 
	{
		user = com.meta4.js.server.M4ServerInterface.getUserFromSessionCookie(request);
		if (_oM4Log.isTraceEnabled()) _oM4Log.trace(" [mobile/index.jsp:existsPersistentSession()] User from persistent cookie -> " + user); 
	} 
	catch (Exception e)
	{
		if (_oM4Log.isTraceEnabled()) _oM4Log.error(" [mobile/index.jsp:existsPersistentSession()] Cannot get persistent cookie -> " + e.getMessage());  
	}
	if (user == null) return false; 
	return true; 
}


%>