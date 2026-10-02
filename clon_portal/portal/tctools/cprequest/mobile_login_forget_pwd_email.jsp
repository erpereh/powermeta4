<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: mobile_login_forget_pwd_email.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<html>
<head><title>Cambio contraseña mobile</title></head>

<%@ page import="java.lang.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.taglib.util.*"%>
<%@ page import="com.meta4.security.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>

<% // 1 - headers: no cache, no clickjacking 
   response.setHeader("Pragma", "no-cache"); 
   response.setHeader("Cache-Control", "no-store"); 
   response.setDateHeader("Expires", -1); 
   response.setHeader("X-Frame-Options", "SAMEORIGIN"); 
   
   M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
%>

<%  // 2 - configurable values (must have been set in the including page: tc_login.jsp/shco_gen_login_box.jsp or the functional equivalent)
    String zlang = M4SafeRequest.getParameter(request,"LANG_TO_CHANGE_PASS"); 
	String zappprod = M4SafeRequest.getParameter(request,"LANG_TO_CHANGE_PASS_STYLE"); 	
    String sUrlLoginComplete = M4SafeRequest.getParameter(request,"TARGET_URL"); 
    String sServerURL = M4SafeRequest.getParameter(request,"SOURCE_URL"); 
	String sEmail = M4SafeRequest.getParameter(request, "EMAIL");
    if (zlang == null || zlang.equals("")) zlang = "2"; 
    if (zappprod == null || zappprod.equals("")) zappprod = "/style/tc_login.css"; 
    if (sUrlLoginComplete == null || sUrlLoginComplete.equals("")) sUrlLoginComplete =  "/";  
    if ((sServerURL==null)||(sServerURL.equals(""))){sServerURL = "http://localhost";}

     
%>


<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/shco_g0/shco_gen_lang.jsp" %>


<% 	

    // 4 - send forget password email	
  	M4SessionManager oSessionManager = M4BootstrapSession.establishBootstrapSession (zlang); 
  	if (oSessionManager != null) 
  	{  
 	 int iRetSend = sendForgetPwdEmail(oSessionManager, sEmail,sServerURL,zlang,zappprod,sUrlLoginComplete);
	}
%>

<%!  
M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
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

</html>