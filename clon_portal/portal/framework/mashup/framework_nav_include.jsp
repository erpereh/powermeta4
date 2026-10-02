<%-- =========================================================
	@(#) FileVersion: 823.001.018
	@(#) FileDescription: framework_nav_include.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2026
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ page import="com.meta4.common.utils.logsystem.M4Logger" %>
<%@ page import="com.google.gson.Gson" %>
<%@ page import="com.meta4.utilities.M4PresentationEncodeUtil" %>
<%@ page import="com.meta4.websso.PortalMashupParameterReader" %>
<%@ page import="com.meta4.websso.PortalMashupParameterReader.ParameterTokenResult" %>
<%! 

 
/**
  * A generic function to navigate by context
  * @param screenId             mandatory context to navigate to the given screen
  * @param parameterContext     optional context. 
  * @param space                optional space. if none is passed, the previous space will be used.
  * @param request              the request
  * @return
  */
  String createNavigationToHRFramework(String screenId, Map parameterContext, String space, HttpServletRequest request)
    {
        if (screenId == null) return null; 

        Hashtable<String, String> contextURL = new Hashtable<>();
        if (parameterContext != null) contextURL.put("parameterContext", generateParameterContextB64(parameterContext));
        if (space != null) contextURL.put("spaceId", space);
        
        String queryString = hastableToQuerystring(contextURL);
        return "/pop2/screenRunTime" + "?screenId=" + screenId + queryString;
    }


/**
 * A function to create a mashup link to HR Experience
 * @param request              the request
 * @param linkURL              mandatory link 
 * @param screenId             mandatory parameter to navigate to the given screen
 * @param spaceId              optional space
 * @param role                 optional role
 * @param organization         optional organization
 * @return                     the links
 */
String navigateToMashup(HttpServletRequest request, String linkURL, String screenId, String spaceId, String role, String organization) {
             
        M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");

        // 1) Name of the mashup screen must be passed
        if (screenId == null) return null; 
  
        // 2) The mashup link should not contain this page itself and must be nonced
        int posInternalLink = linkURL.indexOf("_URL="); 
        if (posInternalLink > 0) {
          linkURL = linkURL.substring(posInternalLink + 5, linkURL.length());
        }
        if (M4PresentationEncodeUtil.isActive()) {
            linkURL = M4PresentationEncodeUtil.concatNonce(linkURL, request, request.getSession().getServletContext());
        }

        // 3) Role and organization are provided by default in the case of mashup
        if (role == null) role = M4Context.getSession(request).getRoleLogin();
        if (organization == null) organization = M4Context.getSession(request).getIdOrganization();

        Map<String,String> parameterMap = new HashMap<String,String>();
        parameterMap.put("ID_ORGANIZATION", organization);
        parameterMap.put("ID_ROLE", role);
        parameterMap.put("MENU_URL", linkURL);

        if (oM4Log.isDebugEnabled()) oM4Log.debug("--  object context --" + parameterMap);
        return createNavigationToHRFramework(screenId, parameterMap, spaceId, request); 
    }

 /**
 * A function to create the parameter context in base64, from a Map
 * @param parameterContextMap The map with key value to put in the context
 * @return  The parameter context in base64
 */
 String generateParameterContextB64(Map parameterContextMap) { 

        M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");

        String parameterContext = new Gson().toJson(parameterContextMap);
        if (oM4Log.isDebugEnabled()) oM4Log.debug("--  begin parameter context from map --");
        if (oM4Log.isDebugEnabled()) oM4Log.debug(parameterContext);
        if (oM4Log.isDebugEnabled()) oM4Log.debug("--  end parameter context from map --");
        String parameterContextB64 = Base64.getEncoder().encodeToString(parameterContext.getBytes());
        return parameterContextB64;
    }

    /**
     * Navigates to a task by processing parameter tokens and writing the localStorage setter HTML.
     * This method not only generates the token-based URI but also outputs HTML content that sets
     * the token data in the browser's localStorage for later retrieval by the frontend application.
     * 
     * @param request   The HttpServletRequest object containing request information
     * @param out       The JspWriter to output the localStorage setter HTML content
     * @param slinkURL  The original URL that may contain parameters to be tokenized
     * @return          A new URI with parameters replaced by a token identifier (pt parameter),
     *                  or the original URL if no valid token processing is needed
     * @throws IOException if an error occurs while writing the HTML content to the output stream
     */
    String navigateToTaskEnd(HttpServletRequest request, JspWriter out, String slinkURL) {
        M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");

        try {
            PortalMashupParameterReader.ParameterTokenResult result = PortalMashupParameterReader.processParameterToken(slinkURL);
            if (result != null) {
                oM4Log.info("navigateToTaskEnd -- writing token to local storage: id=" + result.tokenId + ", value=" + result.tokenValue + " and changing URL to: " + result.newURI);
                out.print(result.htmlContent);
                return result.newURI;
            } else {
                if (oM4Log.isDebugEnabled()) oM4Log.debug("No valid parameter token found in slinkURL");
                return slinkURL;
            }
        } catch (IOException e) {
            oM4Log.error("Error writing parameter token HTML content", e);
            return slinkURL;
        }
    }

%>

