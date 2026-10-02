<%-- =========================================================
	@(#) FileVersion: 820.001.041
	@(#) FileDescription: tc_login_service_cp_request.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2023
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ page import="java.lang.*"%>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page import="com.google.gson.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>
<%@ page import="com.meta4.m4operations.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.security.*"%>
<%@ page import="com.meta4.taglib.util.*"%>

<% // 1 - headers: no cache
	response.setHeader("Pragma", "no-cache"); 
	response.setHeader("Cache-Control", "no-store"); 
	response.setDateHeader("Expires", -1); 
	
	// 2 - call the function
	out.println(executeSendForgetPasswordEmail(request));
%>

<%! M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");

private String executeSendForgetPasswordEmail (HttpServletRequest request) {

	String sEmail = M4SafeRequest.getParameter(request, "EMAIL");
	String zlang = M4SafeRequest.getParameter(request,"LANG_TO_CHANGE_PASS"); 
	String zappprod = M4SafeRequest.getParameter(request,"LANG_TO_CHANGE_PASS_STYLE"); 	
	String sServerURL = M4SafeRequest.getParameter(request,"SOURCE_URL"); // link
	String sUrlLoginComplete = M4SafeRequest.getParameter(request,"TARGET_URL"); // origin
	String sVerifiedDomain = M4SafeRequest.getParameter(request,"VERIFIED_DOMAIN");

	M4Logger _oM4Log = M4Logger.getLogger("com.meta4.jsp");

	int iRetSend = -1;
	String operationCode = "ERROR";
	M4SessionManager oSessionManager = null;
	Map<String, String> resultValues = new HashMap<String, String>();
	Gson oGson = new GsonBuilder().disableHtmlEscaping().create();

	try 
	{
		// EMAIL: bounce back no e-mail requests
		if (sEmail == null) {
			resultValues.put("operationCode", "NO_EMAIL");
			return oGson.toJson(resultValues);
		}

		// LANG_TO_CHANGE_PASS && LANG_TO_CHANGE_PASS_STYLE: sanitize parameters
		if (zlang == null || zlang.equals("")) zlang = "2";
		try { Integer.parseInt(zlang); } catch (Exception e) { zlang = "2"; }
		if (zappprod == null || zappprod.equals("")) zappprod = "ess";
	
		// SOURCE_URL: make sure the same host name
		String sHostName = request.getServerName() ;
		String sPortName = new Integer( request.getServerPort() ).toString() ;
		boolean isHttpSecure =  request.isSecure(); 
	  
		String sProtocol = "http";
		if ( isHttpSecure ) sProtocol = "https" ;
		String sHostServerURL = sProtocol + "://" + sHostName + ":" + sPortName ;

		if ((sServerURL==null)||(sServerURL.equals(""))){ sServerURL = sHostServerURL; }
		try { 
			URL oURL = new URL(sServerURL);
			if (!oURL.getHost().equalsIgnoreCase(sHostName))
			{
				_oM4Log.warn("From URL does not match parameter, correcting:  " + oURL.getHost() + " != "  +sHostName);
				sServerURL = sHostServerURL;
			}
		} catch (Exception e) { 
			_oM4Log.error("Exception parsing the URL: ",  e);
			sServerURL = sHostServerURL; 
		}

		// TARGET_URL: not verified
		if (sUrlLoginComplete == null || sUrlLoginComplete.equals("")) sUrlLoginComplete =  "/";

		oSessionManager = M4BootstrapSession.establishBootstrapSession (zlang); 
		if (oSessionManager != null) 
		{
			// if (com.meta4.security.LoginAttemptCacheManager.isAddressInBruteForceZone(request))
			// {
			// 	_oM4Log.warn("Too many requests trying to locate: " +sEmail);
			// 	operationCode = "TOO_MANY_REQUESTS";
			// }
			// else
			// {
				iRetSend = sendForgetPwdEmail(oSessionManager, sEmail, sServerURL, zlang, zappprod, sUrlLoginComplete);
				_oM4Log.debug("Real operationCode for  " + sEmail + " -> " +Integer.toString(iRetSend));
				// if (iRetSend == -2) {
				//	com.meta4.security.LoginAttemptCacheManager.notifyWrongAttempt(request);
				// } else {
				// 	com.meta4.security.LoginAttemptCacheManager.notifyRightAttempt(request);
				// }
				if (iRetSend != -1) operationCode = "DONE";
				resultValues.put("operationCode", operationCode);
			// }
		}
		else 
		{
			resultValues.put("operationCode", "NO_SESSION");
		}
	} 
	catch (Exception e) 
	{
		_oM4Log.error("EXCEPTION", e);
		resultValues.put("operationCode", "EXCEPTION: " + e.getMessage());
	}
	finally 
	{
		if (oSessionManager != null)
		try {
			M4BootstrapSession.releaseBootstrapSession ( oSessionManager, zlang ) ;
		} 
		catch (Exception e) 
		{
			oM4Log.error("Session not released ", e);
		} 
	}
	return oGson.toJson(resultValues);
}

private int sendForgetPwdEmail(M4SessionManager session, String ai_stEmail, String ai_stServerURL, String ai_stLang, String ai_stAppProd, String ai_stUrlLoginComplete)
{
	int iRet = -1; 
	
	if (ai_stEmail == null) return iRet; 
	try 
	{
		M4Operations m = new M4Operations (session);
		String sM4Obj = "SRTC_FORGET_PWD_BY_EMAIL";
		String sNode  = "SRTC_FORGET_PWD_BY_EMAIL";
		String sMethod = "SEND_FORGET_PWD_EMAIL";

		m.initTask("SESSION");
		m.beginJob();
		m.createData(sM4Obj, sM4Obj, false, null);

		Hashtable aParams = new Hashtable();
		aParams.put("AI_EMAIL", ai_stEmail);
		aParams.put("AI_PATHESS", ai_stServerURL);
		aParams.put("AI_LANG", ai_stLang);
		aParams.put("AI_URL_COMPLETE", ai_stUrlLoginComplete);
		aParams.put("AI_PRODUCT", ai_stAppProd);

		m.method(sMethod, sM4Obj, sNode, sMethod, aParams, false); 
		m.outputDef (sNode, sM4Obj + "!" + sNode + "[*]" );
		m.endJob("");
		
		StringBuffer sbRet = new StringBuffer();
		m.execMethod(sMethod, sbRet); 
		
		iRet = (int)Double.parseDouble(sbRet.toString());
		m .endTask();
		m.logout();
		oM4Log.trace("SEND_FORGET_PWD_EMAIL Ret : " + sbRet); 
		
		return iRet;

	} 
	catch (Exception e) 
	{
		oM4Log.error("Problem in sendForgetPwdEmail", e);
	} 
	return iRet; 
	
}
%>