<%-- =========================================================
	@(#) FileVersion: 821.002.057
	@(#) FileDescription: tc_logout.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2024
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.lang.*" %>
<%@ page import="java.util.*" %>
<%@ page import="com.meta4.languages.*" %>
<%@ page import="com.meta4.configuration.*" %>
<%@ page import="com.meta4.websso.*" %>
<%@ page import="com.meta4.session.*" %>
<%@ page import="com.meta4.m4operations.*" %>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger" %>

<% // 1 - headers: no cache 
   response.setHeader("Pragma", "no-cache"); 
   response.setHeader("Cache-Control", "no-store"); 
   response.setDateHeader("Expires", -1); 
%>

<% // 2 - main: call the signoff function
   LinkedList<String> asyncPagesToRun = new LinkedList<String>();
   String finalURL = signoff (request, response, asyncPagesToRun);

   // 3 - draw main html
%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>logout</title>
    <script type="text/javascript">
    function logout() {
      location.href="<%=finalURL%>";
    }
    </script>
  </head>
  <body>
  
  <%
  // 4 - call children logout
  ListIterator<String> listIterator = asyncPagesToRun.listIterator();
  while (listIterator.hasNext()) {
    String sAsyncPage = listIterator.next();
  %>
    <iframe title="logout" src="<%=sAsyncPage%>" width=0 height=0></iframe>
  <%}%>
  <script>
  logout();
  </script>
  </body>
</html>

<%! 
public static String signoff (HttpServletRequest request, HttpServletResponse response, LinkedList<String> asyncPagesToRun) 
{

	M4Logger m_log = M4Logger.getLogger("com.meta4.jsp");

	String finalPage = null;
	String originHost = null;
	String logoutEndpoint = null; 
	String childrenExternalSystem = null; 

	M4Operations m = null; 
	HttpSession session = request.getSession();

	int iLang = M4WebLanguages.getLanguageFromCookie(request);
	String loginURL = CheckConfig.setBadLoginLink(iLang);
	String errorURL = CheckConfig.checkErrorPage(iLang);

	try 
	{
		M4SessionManager m4session = M4Context.getSession(request); 
		if (m4session != null) 
		{
			logoutEndpoint = m4session.getSso_logout_endpoint();
			childrenExternalSystem = m4session.getSessionCl().getBagEntries("ExternalSystem");
		}
		else
		{
			String ssoLogoutEndpoint = (String) session.getAttribute("sso_logout_endpoint");
			if (ssoLogoutEndpoint != null && !ssoLogoutEndpoint.equals("")) logoutEndpoint = ssoLogoutEndpoint;
		}
			
		originHost = (String)session.getAttribute("ORIGIN_HOST");

		m_log.trace("|logout.jsp| ------------------------");
		m_log.trace("|logout.jsp| active ->" + m4session);
		m_log.trace("|logout.jsp| sOriginHost ->" + originHost);
		m_log.trace("|logout.jsp| logoutEndpoint ->" + logoutEndpoint);
		m_log.trace("|logout.jsp| childrenExternalSystem ->" + childrenExternalSystem);

		m_log.trace("|logout.jsp| ------------------------");

		// action #1: if parent of tiger, disconnect your child	
		if (childrenExternalSystem != null) asyncPagesToRun.add(childrenExternalSystem + "?_LOGOUT");
	
		// action #2: if son of tiger, disconnect without erasing cookies and redirect to error page
		if (originHost != null && !originHost.equals(""))
		{
			if (m4session != null)
			{
				m = new M4Operations(request);
				m.logout();
				M4Context.destroyContext(request, response, m4session.getId());
			}
			return errorURL;
		} 

		// action #3: erase and logout
		if (m4session != null) M4Context.eraseAndLogout(request, response);

		// action #4: should there be a logout endpoint the final page is this
		if (logoutEndpoint != null && !logoutEndpoint.equals(""))
		{
			finalPage = logoutEndpoint;
			return finalPage;
		}
		// action #5: the exp product goes to the exp page
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

public static boolean isPop2Exp (HttpSession session, HttpServletRequest request) 
{
	String productAttribute = (String)session.getAttribute("_PROD");
	if (productAttribute != null && (productAttribute.equalsIgnoreCase("exp"))) return true;

	String productCookie = com.meta4.request.M4ProductByThreadUpdater.getProductIDFromRequest (request);
	if (productCookie != null && productCookie.equalsIgnoreCase("exp")) return true;

	return false;
}
%>
