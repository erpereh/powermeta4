<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: sso_url_from_email.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ page import="java.util.*, java.lang.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.m4operations.*"%>
<%@ page import="com.meta4.utilities.*"%>
<%@ page import="com.meta4.taglib.util.*"%>
<%@ page import="com.meta4.security.*"%>
<%@ page import="com.google.gson.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>

<% // 1 - headers: no cache, no clickjacking 
   response.setHeader("Pragma", "no-cache"); 
   response.setHeader("Cache-Control", "no-store"); 
   response.setDateHeader("Expires", -1); 
   response.setHeader("X-Frame-Options", "SAMEORIGIN"); 
   
   M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
%>

<%  // 2 - Get parameters  
	String sEmail = M4SafeRequest.getParameter(request, "EMAIL");
%>

<% 	

    // 3 - Get SSO url from email	
    String zlang = "2";
  	M4SessionManager oSessionManager = M4BootstrapSession.establishBootstrapSession (zlang); 
  	if (oSessionManager != null) 
  	{  
		 String sResult = getSsoUrlFromEmail(oSessionManager,sEmail);
		 out.print(sResult);
	}
%>

<%!  
M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
private String getSsoUrlFromEmail(M4SessionManager session, String ai_sEmail)
{
	String sResult = ""; 
	String sSsoUrl = "";
	String methodReturnValue = "-1";

	Map<String, String> resultValues = new HashMap<String, String>();
	
	try 
	{
		oM4Log.error("getSsoUrlFromEmail inicio");
		M4Operations m = new M4Operations (session);
		String sM4Obj = "SRTC_SSO_URL_EMAIL";
		String sNode  = "SRTC_SSO_URL_EMAIL"; 		
		String sMethod = "GET_SSO_URL_BY_EMAIL";

		m.initTask("SESSION");
		m.beginJob();
		m.createData(sM4Obj, sM4Obj, false, null);

		Hashtable aParams = new Hashtable();
		aParams.put("AI_EMAIL", ai_sEmail);

		m.method(sMethod, sM4Obj, sNode, sMethod, aParams); 
		m.outputDef (sNode, sM4Obj + "!" + sNode + "[*]" );
	    
        m.endJob("");
        StringBuffer sbRet = new StringBuffer();
		m.execMethod(sMethod, sbRet); 
		
		methodReturnValue = sbRet.toString();
		int iRet = (int)Double.parseDouble(sbRet.toString());
		methodReturnValue = Integer.toString(iRet);

		if (iRet == 0)
		{
        	sSsoUrl = m.getItem(sNode, sM4Obj, sNode, String.valueOf(0), "SSO_URL");
		}

 		m .endTask();
		m.logout();
		oM4Log.trace("GET_SSO_URL_BY_EMAIL Ret : " + sbRet); 
	} 
	catch (Exception e) 
	{
		oM4Log.error("Problem in getSsoUrlFromEmail", e);
	}
	finally
	{
		resultValues.put("errorCode",methodReturnValue);
		resultValues.put("url",sSsoUrl);

		Gson oGson = new GsonBuilder().disableHtmlEscaping().create();
        sResult = oGson.toJson(resultValues);
	}

	return sResult; 
}

%>