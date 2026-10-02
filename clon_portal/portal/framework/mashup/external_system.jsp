<%-- =========================================================
	@(#) FileVersion: 822.004.019
	@(#) FileDescription: external_system.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*, java.lang.Math"%>
<%@ page import="com.meta4.session.*, com.meta4.m4operations.*"%>
<%@ page import="com.meta4.websso.*"%>
<%@ page import="com.meta4.session.*, com.meta4.configuration.*" %>
<%@ page import="com.meta4.common.utils.logsystem.*" %>
<%@ page import="com.meta4.utilities.*" %>
<%@ page import="com.meta4.common.m4cred.GenerateRedirectHTML" %>
<%@ page import="com.meta4.common.m4cred.M4Credential" %>
<%@ page import="com.meta4.common.m4cred.LogonConfigHTML" %>
<%@ page import="com.meta4.common.m4cred.ExtendedParamsHTML" %>

<%@ page import="com.meta4.websso.*" %>

<%
  	response.setHeader("Pragma", "no-cache"); 
  	response.setHeader("Cache-Control", "no-store"); 
  	response.setDateHeader("Expires", -1); 

  	M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  	oM4Log.debug("external_system.jsp: begin");

	// Get the navigation parameters from the request
	StringBuffer sbExternalURLQueryString = new StringBuffer();
  	String sExternalURL = PortalMashupParameterReader.getNavigationParams(request, sbExternalURLQueryString);
  	if (oM4Log.isDebugEnabled()) oM4Log.debug("   External URL: " + sExternalURL);
	String sExternalURLQueryString = sbExternalURLQueryString.toString();
	if (oM4Log.isDebugEnabled()) oM4Log.debug("   External URL Query String: " + sExternalURLQueryString);

	// Get the resolution parameters from the request
	HashMap resolutionParams = PortalMashupParameterReader.getResolutionParams(request);
	String org = (String) resolutionParams.get("org");
	if (oM4Log.isDebugEnabled()) oM4Log.debug("   To resolve from org: " + org);
	
 	// Variables
	boolean bError = false;
	String sErrorMessage = "";
	String resolvedOrganization = null;
	String thisHostAndPort = "https://localhost";
	String sFromGenerateRedirectHTML = null;
	String encodedExtSysInfo = null;
	String script = null; 

	// Resolve the external system
	if (sExternalURL != null && !sExternalURL.isEmpty()) {
		HashMap<String, String> externalSystemResolution = new HashMap<>();
		boolean resolved = PortalMashupExternalSystemResolver.resolvePortalExternalSystem(org, externalSystemResolution, request);
		if (oM4Log.isDebugEnabled()) oM4Log.debug("   Is External System Resolved?: " + resolved);
		
		if (resolved) {

			String sUsr = externalSystemResolution.get("ID_APP_USER");
			String sPeriodNumber = externalSystemResolution.get("SCO_OR_HR_PERIOD");

			String sBaseURL = externalSystemResolution.get("PLCO_SS_BASE_URL");
			String sServlet = externalSystemResolution.get("PLCO_SS_SERVLET");
			String sInitURI = externalSystemResolution.get("PLCO_SS_INITIAL_URI");
			String sPathFile12 = externalSystemResolution.get("PLCO_FILE_P12");
			String sPwd12 = externalSystemResolution.get("PLCO_FILE_P12_PASSWORD");

			String sDefaultLanguageID = externalSystemResolution.get("ID_EXTERNAL_LANGUAGE");

			M4SessionManager m4Session = M4Context.getSession(request);
			int iLanguageId = (int) m4Session.getLanguageID(); // first get language from session
			String sLang = String.valueOf(iLanguageId);

			// pass the resolved organization to the HR Framework (if configured)
			resolvedOrganization = externalSystemResolution.get("ID_EXTERNAL_ORGANIZATION");
			if (oM4Log.isDebugEnabled()) oM4Log.debug("    >> Resolved organization: " + resolvedOrganization);
			String extSysInfo = "{\"organization\": \"null\"}";
			if (resolvedOrganization != null && !resolvedOrganization.isEmpty()) {
				extSysInfo = "{\"organization\": \""+ resolvedOrganization + "\"}";
			}
			encodedExtSysInfo = Base64.getEncoder().encodeToString(extSysInfo.getBytes());
			if (oM4Log.isDebugEnabled()) oM4Log.debug("   Encoded external system info: " + encodedExtSysInfo);

			Integer iConnectionOK = new Integer(0);
			if (oM4Log.isDebugEnabled()) oM4Log.debug("  sBaseURL: " + sBaseURL);

			URL url = null; 
			try {
				url = new URL(sBaseURL);
				HttpURLConnection urlConn = (HttpURLConnection) url.openConnection();

				// Uncomment while debugging 
				// urlConn = (HttpURLConnection) overrideHttpsUrlConnectionForTesting(url); 
			
				urlConn.setInstanceFollowRedirects(true); 
				urlConn.connect();
				
				// Check the HTTP response code
				int responseCode = urlConn.getResponseCode();

				if (responseCode == HttpURLConnection.HTTP_OK || responseCode == HttpURLConnection.HTTP_MOVED_TEMP) {
					oM4Log.debug("Connection established with HTTP status: " + responseCode);
					iConnectionOK = 1;
				} else {
					oM4Log.error("Unsuccessful HTTP Connection with status: " + responseCode);
					sErrorMessage = makeMessage("externalSystemStatus", " URL: " + url + " status: " + responseCode);
					iConnectionOK = 0;
				}
			} catch (IOException e) {
				iConnectionOK = 0;
	  			String fullErrorMessage = "URL: " + url + " exception: " + e.getClass().getName() + ": " + e.getMessage();
				sErrorMessage = makeMessage("externalSystemConnectionError", fullErrorMessage);
				oM4Log.error("Connection impossible!", e);
			}

			if (oM4Log.isDebugEnabled()) oM4Log.debug("   External system availability: " + ((iConnectionOK==1)?"true":"false"));

			if (iConnectionOK == 1) {

				// Add period number to Init URI to support employees with multiple periods
				sInitURI = URLEncoder.encode(sInitURI + "?periodNumber=" + com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorpLoginMultiperdiod76", sPeriodNumber), "UTF-8");
				if (oM4Log.isDebugEnabled()) oM4Log.debug("   Init URI: " + sInitURI);
				
				if (oM4Log.isDebugEnabled()) oM4Log.debug("   Default lang: " + sDefaultLanguageID);
				if (sDefaultLanguageID != null && !sDefaultLanguageID.equals("")) {
					// Use if available, otherwise use session value
					sLang = sDefaultLanguageID;
				}
				if (oM4Log.isDebugEnabled()) oM4Log.debug("  Applied lang: " + sLang);

				if (!bError) {

					String sCredential = "";
					try {
						M4SessionCl m4SessionCl = M4Context.getM4SessionCl(request);
						m4SessionCl.putBagEntries("ExternalSystem", sBaseURL + sServlet);

						// Use PLCO_FILE_CREDENTIALS
						sCredential = externalSystemResolution.get("PLCO_FILE_CREDENTIALS");

						//beginning of future code  -----------------------------------------------------
						//sCredential = externalSystemResolution.get("CREDENTIALS"); 
						//end of future code ------------------------------------------------------------

						// NONE
						LogonConfigHTML oLogonConfig = LogonConfigHTML.NONE; 

						ExtendedParamsHTML oExtParams = new ExtendedParamsHTML(); 
						oExtParams.setLogonConfig(oLogonConfig);

						Hashtable htDefaultExtraParams = new Hashtable ();
						String product = M4ConfigClient.getElement(M4VarConfigClient.M4_CFG_MAIN_PRODUCT_ID);
						if (product != null && !product.isEmpty()) {
							if (oM4Log.isDebugEnabled()) oM4Log.debug("   PROD: " + product);
							htDefaultExtraParams.put("PROD", product);
						}
						htDefaultExtraParams.put("PX_MIN_HEIGHT", "600"); 
						htDefaultExtraParams.put("SHOW_TEXT", "0");
						htDefaultExtraParams.put("_REDIRECT", "_externalSystemErrorDestination");
						
						if (sExternalURLQueryString != null){
							sExternalURLQueryString = URLEncoder.encode(sExternalURLQueryString, "UTF-8");
							sExternalURL += sExternalURLQueryString;
						}
						
						if (oM4Log.isDebugEnabled()) oM4Log.debug("   External URL: " + sExternalURL);
						sExternalURL = URLEncoder.encode(sExternalURL, "UTF-8");
						if (oM4Log.isDebugEnabled()) oM4Log.debug("   External URL encoded: " + sExternalURL);

						sFromGenerateRedirectHTML = GenerateRedirectHTML.generateExtended(sCredential, sUsr, sLang, sBaseURL, sServlet, sInitURI, sExternalURL, oExtParams, htDefaultExtraParams);

					} catch (Exception e) {
						bError = true;
						sErrorMessage = "externalSystemException" + "  " + e; 
						String fullErrorMessage = "Organization: " + org + " exception: " + e.getClass().getName() + ": " + e.getMessage();
						sErrorMessage = makeMessage("externalSystemResolveException", fullErrorMessage);
					}

				} else {
					// not enough parameters
					bError = true;
					String resolutionError = externalSystemResolution.get("RESOLUTION_ERROR");
					if (oM4Log.isDebugEnabled()) oM4Log.debug("   external_system.jsp: RESOLUTION_ERROR: " + resolutionError);
					sErrorMessage = makeMessage("externalSystemMissingParameters", resolutionError );
				}
			} else {
				// connection to external system not possible (the error was sent from the error page)
				bError = true;
			}
		
		} else {
			// external system not found, we have no origin session, etc.
			bError = true;
			String resolutionError = externalSystemResolution.get("RESOLUTION_ERROR");
			sErrorMessage = makeMessage("externalSystemNoResolution", resolutionError );
		}
	} else {
		// no external system URI was passed to the page. Before, this was not controlled
		bError = true;
		sErrorMessage = makeMessage("externalSystemMissingParameters", "M4_URL" );
	}

	// Executive area
	boolean bDebugMode = false; 
	
	// Resolve the debug host and port 
	String[] uriParts = PortalMashupHostResolver.resolveDebugPortsFromURI(sExternalURL);
	if (oM4Log.isDebugEnabled()) oM4Log.debug("external_system.jsp: ... origin debug port from URI: " + uriParts[0]);

	if (!bError && encodedExtSysInfo != null && sFromGenerateRedirectHTML != null) {
		// HR Framework will manage the success situation
		oM4Log.debug("external_system.jsp: ... generating success script");
		script = PortalMashupHTMLBuilder.generateSuccessfulMashupHTML(encodedExtSysInfo, sFromGenerateRedirectHTML, bDebugMode, resolvedOrganization, uriParts[0]);
		if (oM4Log.isDebugEnabled()) oM4Log.debug("external_system.jsp: ... success");

	} else {		
		// Resolve the host and port for sending the errors.
		thisHostAndPort = PortalMashupHostResolver.resolveThisHostAndPort(request, thisHostAndPort);
		if (oM4Log.isDebugEnabled()) oM4Log.debug("   Resolved thisHostAndPort: " + thisHostAndPort);

		// HR Framework will manage the error situations
		oM4Log.error("external_system.jsp: ... generating error script for error: " + sErrorMessage);
		script = PortalMashupHTMLBuilder.generateFailedMashupHTML(sErrorMessage, thisHostAndPort, bDebugMode, uriParts[0]);
		if (oM4Log.isDebugEnabled()) oM4Log.debug("external_system.jsp: ... error");
	}

	out.println(script);

	if (oM4Log.isDebugEnabled()) oM4Log.debug("external_system.jsp: end");
	
%>
<%@ include file="/framework/mashup/external_system_functions.jsp"%>