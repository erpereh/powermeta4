<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: shco_gen_logout.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="com.meta4.taglib.util.M4SafeRequest" %>
<%@ page import="java.lang.*" %>
<%@ page import="java.util.*" %>
<%@ page import="com.meta4.session.*" %>
<%@ page import="com.meta4.websso.*" %>
<%@ page import="com.meta4.languages.*" %>
<%@ page import="com.meta4.utilities.*" %>
<%@ page import="com.meta4.m4operations.*" %>
<%@ page import="com.meta4.configuration.*" %>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger" %>


<% // 1 - headers: no cache 
   response.setHeader("Pragma", "no-cache"); 
   response.setHeader("Cache-Control", "no-store"); 
   response.setDateHeader("Expires", -1); 
%>

<% // 2 - main: calculate the signoff function  
   M4Logger m_log = M4Logger.getLogger("com.meta4.jsp");
   LinkedList<String> asyncPagesToRun = new LinkedList<String>();
   String finalURL = signoff (request, response, asyncPagesToRun);

   // 3 - draw main html
%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>logout</title>
    <script type="text/javascript" src="../m4jsapi/m4jsapi.nocache.js"></script>
  </head>
  <body>
  
  
  
  <%
	if (asyncPagesToRun.size() > 0)
  	{
		ListIterator<String> listIterator = asyncPagesToRun.listIterator();
  		while (listIterator.hasNext()) {	        
    		String sAsyncPage = listIterator.next();
		%>
			<iframe title="logout" src="<%=sAsyncPage%>" width=0 height=0></iframe>
            
  		<%
		} // end of while 
		%>
    	<script type="text/javascript">
    	function logout() {
		  location.href='<%=finalURL%>';
    	}
  		logout();
  		</script>
		<%
  	}
  	else
  	{
	  response.sendRedirect(finalURL);
 	}

  %>
  </body>
</html>
<%! 
public static String signoff (HttpServletRequest request, HttpServletResponse response, LinkedList<String> asyncPagesToRun) 
{
		
   	M4Logger m_log = M4Logger.getLogger("com.meta4.jsp");
   		
	String finalPage = null;
	String samlUser = null;
	String originHost = null;
	String breadcrumbURL = null; 
	String childrenExternalSystem = null; 
	

	HttpSession session = request.getSession();
	int iLang = M4WebLanguages.getLanguageFromCookie(request);				
	String loginURL = getLoginURL(request, session); 
	String errorURL = CheckConfig.checkErrorPage(iLang);
	String logoutEndpoint = (String) session.getAttribute("sso_logout_endpoint");
				
	try 
	{
		M4SessionManager m4session = M4Context.getSession(request); 
		if (m4session != null) 
		{	childrenExternalSystem = m4session.getSessionCl().getBagEntries("ExternalSystem");
			logoutEndpoint = m4session.getSso_logout_endpoint();
		}
		else
		{
			String ssoLogoutEndpoint = (String) session.getAttribute("sso_logout_endpoint");
			if (ssoLogoutEndpoint != null && !ssoLogoutEndpoint.equals("")) logoutEndpoint = ssoLogoutEndpoint;
		}
	
		try 
		{
			samlUser = M4SAMLUtils.getAuthenticatedUser(request);
		} 
		catch (Exception e) 
		{}
			
		originHost = (String)session.getAttribute("ORIGIN_HOST");

		breadcrumbURL = UtilTaglet.getURLFromBreadcrumb(request);

		m_log.trace("|logout.jsp| ------------------------+++");
		m_log.trace("|logout.jsp| active ->" + m4session);
		m_log.trace("|logout.jsp| samlUser ->" + samlUser);
		m_log.trace("|logout.jsp| sOriginHost ->" + originHost);
		m_log.trace("|logout.jsp| breadcrumbURL ->" + breadcrumbURL);
		m_log.trace("|logout.jsp| logoutEndpoint ->" + logoutEndpoint);
		m_log.trace("|logout.jsp| childrenExternalSystem ->" + childrenExternalSystem);
					
		m_log.trace("|logout.jsp| -----------------------+++");
	

		// action #1: if parent of tiger, disconnect your children
		if (childrenExternalSystem != null) asyncPagesToRun.add(childrenExternalSystem + "?_LOGOUT");
	
		// action #2: if son of tiger, disconnect without erasing cookies and redirect to error page
		if (originHost != null && !originHost.equals(""))
		{		
			if (m4session != null)
			{
				M4Operations m = new M4Operations(request);
				m.logout();		
				M4Context.destroyContext(request, response, m4session.getId());
			}
			return errorURL;				
		} 
		
		// action #3: erase and logout, and clear the bag
		if (m4session != null) 
		{
			m4session.getSessionCl().clearBagEntries ();			
			M4Context.eraseAndLogout(request, response);
		}
		
		// action #4: should there be a logout endpoint the final page is this
		if (samlUser != null && !samlUser.equals("") && logoutEndpoint != null && !logoutEndpoint.equals(""))
		{
			finalPage = logoutEndpoint;
			return finalPage;
		}
		
		// action #5: if this request came from a relay authenticated system, then it is single sign on. 		
		if (breadcrumbURL != null && !breadcrumbURL.equals(""))
		{
			if (logoutEndpoint != null && !logoutEndpoint.equals(""))
			{
				// also invokes the logout in the remote saml system
				asyncPagesToRun.add(breadcrumbURL + "/servlet/login" + "?_LOGOUT");
				finalPage = logoutEndpoint;				
			}
			else
			{
				// we should not be here, because no logout button should be displayed.
				finalPage = breadcrumbURL;
			}
			return finalPage;
		}

		if (isPop2Exp(session, request))
		{
			finalPage = "/exp/index.jsp";
			return finalPage;
		}

		finalPage = loginURL;
			
	}
	catch (Exception e) 
	{			
		m_log.error("|logout.jsp| ------------------------", e);
	}			
	return finalPage; 
}

static String getLoginURL(HttpServletRequest request, HttpSession session)
{

	M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");

	// 1) Passed from parameter
	String sLoginURL = M4SafeRequest.getParameter(request, "loginURL");

	// 2) Stored in the session
	if(sLoginURL == null || sLoginURL.equals("")){
		sLoginURL = (String) session.getAttribute("loginURL");
		oM4Log.debug("[*] override with the session value... =" +sLoginURL);		
	}

	// 3) Available by configuration
	if(sLoginURL == null || sLoginURL.equals("")){
		int iLang = M4WebLanguages.getLanguageFromCookie(request);
		sLoginURL = CheckConfig.setBadLoginLink(iLang);
		oM4Log.debug("[*] override with the default value... =" +sLoginURL);		
	}

	// 4) Not available or tampered with by the user
	if (sLoginURL == null || sLoginURL.charAt(0) != '/' || sLoginURL.charAt(1) == '/'){
		sLoginURL = "/";	
	}
	
	return sLoginURL; 
}

public static boolean isPop2Exp (HttpSession session, HttpServletRequest request) 
{
	String productAttribute = (String)session.getAttribute("_PROD");
	if (productAttribute != null && (productAttribute.equalsIgnoreCase("exp"))) return true;

	String productCookie = com.meta4.request.M4ProductByThreadUpdater.getProductIDFromRequest (request);
	if (productCookie != null && productCookie.equalsIgnoreCase("exp")) return true;

	return false;
}


%>
