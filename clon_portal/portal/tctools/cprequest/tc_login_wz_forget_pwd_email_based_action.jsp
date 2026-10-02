<%-- =========================================================
	@(#) FileVersion: 819.005.029
	@(#) FileDescription: tc_login_wz_forget_pwd_email_based_action.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ page import="java.lang.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.taglib.util.*"%>
<%@ page import="com.meta4.security.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>

<% // 1 - headers: no cache, no clickjacking 
   response.setHeader("Pragma", "no-cache"); 
   response.setHeader("Cache-Control", "no-store"); 
   response.setDateHeader("Expires", -1); 
   
   M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
%>

<%@ include file="/tctools/tc_frame_options.jsp" %>

<% // 2 - test for ie11
   boolean isIE = false;
   String userAgent = request.getHeader("User-Agent");
   if (userAgent != null && userAgent.matches(".*Trident/7.*") || userAgent.matches(".*MSIE.*"))
   {
      isIE = true;
   }
   oM4Log.trace("isIE : " + isIE); 
%>

<% if (isIE) { 

    // 2 - configurable values (must have been set in the including page: tc_login.jsp/shco_gen_login_box.jsp or the functional equivalent)
    String zlang = (String)session.getAttribute("LANG_TO_CHANGE_PASS"); 
    String zappprod = (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE"); 
    String sUrlLoginComplete = (String)session.getAttribute("URL_COMPLETE"); 
    
    if (zlang == null || zlang.equals("")) zlang = "2"; 
    if (zappprod == null || zappprod.equals("")) zappprod = "/style/tc_login.css"; 
    if (sUrlLoginComplete == null || sUrlLoginComplete.equals("")) sUrlLoginComplete =  "/";   

    String sServerURL = null;
    String sHostName = request.getServerName() ;
    String sPortName = new Integer( request.getServerPort() ).toString() ;
    boolean isHttpSecure =  request.isSecure(); 
  
    String sProtocol = "http";
    if ( isHttpSecure ) sProtocol = "https" ;
  
	sServerURL = sProtocol + "://" + sHostName + ":" + sPortName ;

	// Avoid SSL-offloading misconfigurations
	String offsite = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "offsite");
	if (offsite != null && !offsite.equals("")) {
		try {
			java.net.URL offsiteURL = new java.net.URL(new String(Base64.getDecoder().decode(offsite)));
			// Without taking the host name from the user. The host name is taken from the virtual host
			sServerURL = offsiteURL.getProtocol() + "://" + sHostName;
			if (offsiteURL.getPort() != -1) sServerURL = sServerURL + ":" + new Integer(offsiteURL.getPort()).toString();
		} catch (Exception e) {
			oM4Log.warn("Ignored offloaded site parameter: " + offsite);
		}
	}

%>

<%  // 3 - read from the box
    String email = M4SafeRequest.getParameter(request, "email"); 
%>


<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/shco_g0/shco_gen_lang.jsp" %>
<%@ include file="/shco_g0/shco_login_box_trans.jsp" %>

<%-- JavaScript user interface --%>
<script type="text/javascript" src="/translations/tc_login_<%=zlanguser%>.js"></script>
<script type="text/javascript" src="/mobile/translation/m4mobile_<%=zlanguser%>.js"></script>

<html>
<head>
  <%@ include file="/mobile/include_mobile_forgetpass.jsp" %>
  <%@ include file="/tctools/tc_login_gen_css.jsp" %>
  				
    				
</head>		     	
<body>

<% 	
// 4 - validate the captcha	
if (!captchaValidation(request, response, "tc_login_wz_hotc_email_action_require", "tc_login_wz_hotc_email_action_retype"))
{
	// remember the email 
	if (email != null) session.setAttribute("tc_login_wz_hotc_email_action_data", email);

	// return to the calling page
	String referer = request.getHeader("Referer"); 
	if (referer != null)
	{
		response.sendRedirect(referer);
	}
	else
	{
	 %>
		<script>window.history.go(-1)</script>
	<%
	}
} 		
else
{
    // 5 - send forget password email	
  	M4SessionManager oSessionManager = M4BootstrapSession.establishBootstrapSession (zlang); 
  	if (oSessionManager == null) 
  	{
  	%>
	<script type="text/javascript">
		alert(login_ErrorConnection);		
		document.location.href="<%=sUrlLoginComplete%>";
	</script>
  	<%			
  	}
  		   
 	 int iRetSend = sendForgetPwdEmail(oSessionManager, email,sServerURL,zlang,zappprod,sUrlLoginComplete);
	%>
	<script type="text/javascript">
		alert(login_UserEmailBased);	
		document.location.href="<%=sUrlLoginComplete%>";
	</script>
	<%
}
%>
</body>	     	   
</html>	

<% } else {	%>
	<jsp:include page="tc_login_wz_forget_pwd_email_based_action.vue.jsp" />
 <% } %>

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


  <%! 
		// if must go back, then return false. if stays in the page, return true.
  		public boolean captchaValidation (HttpServletRequest request, HttpServletResponse response, 
			String requireAttribute, String retypeAttribute) throws IOException {
  	  
		HttpSession session = request.getSession();	
		String captchaReceived = SecurityAutomationControl.getReceivedCaptcha(request);
		String captchaExpected = SecurityAutomationControl.getExpectedCaptcha(request);
		session.removeAttribute(com.google.code.kaptcha.Constants.KAPTCHA_SESSION_KEY);
		if (captchaReceived == null || captchaReceived.equals("")) {
			session.setAttribute(requireAttribute, "true");	
			return false; 		
		}
		else if (!captchaReceived.equals(captchaExpected)) {
			session.setAttribute(retypeAttribute, "true");
			return false; 
		}	
		else return true; 		
      } 
  %>
