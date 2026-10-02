<%-- =========================================================
	@(#) FileVersion: 822.003.008
	@(#) FileDescription: tc_login_wz_forget_pwd_email_based_action.vue.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
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

<%  // 2 - configurable values (must have been set in the including page: tc_login.jsp/shco_gen_login_box.jsp or the functional equivalent)
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

<!DOCTYPE html>
<html lang="<%=zlanguser%>"><!-- A11y -->
<head>
	<title><%=Tran_shco_login_box.getProperty("login.SendContinue")%></title>

	<!-- Metadata -->
	<meta http-equiv=" X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">

	<!-- Vue and Vuetify Styles -->
	<link href="/library/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
	<link href="/library/npm/vuetify@3/dist/vuetify.min.css" rel="stylesheet">

	<!-- CDS Styles -->
	<link href="/style/cds.css" rel="stylesheet">

	<!-- Cegid ico -->
	<link rel="shortcut icon" href="/images/cegid/favicon.ico" type="image/gif" />

	<!-- Vue and Vuetify JS -->
	<script src="/library/npm/vue@3/dist/vue.global.prod.js"></script>
	<script src="/library/npm/vuetify@3/dist/vuetify.min.js"></script>

	<!-- Functionality JS -->
	<script type="text/javascript">
		var appVue;
	</script>

</head>
<body id="cds" class="cds-hidden">
	<div id="app">
	</div>
	
	<!-- Vue.js userMessagePage (_user_message_page.vue.js, has H1) -->
	<script type="text/javascript" src="/library/framework/common.vue.js"></script>
	<script type="text/javascript" src="/tctools/_user_message_page.vue.js"></script>

	<script type="text/javascript">
		window.addEventListener("DOMContentLoaded", function () {
			
		// appVue = new Vue(userMessagePage());
		appVue = new userMessagePage();

		// Literals
		appVue.confirmButton = "Ok";

<% 	
// 4 - validate the captcha	
if (!captchaValidation(request, response, "tc_login_wz_hotc_email_action_require", "tc_login_wz_hotc_email_action_retype"))
{
	// remember the email 
	if (email != null) session.setAttribute("tc_login_wz_hotc_email_action_data", email);
	%>
		appVue.alertText = login_NoDataIdU;
		appVue.alertTitle = login_NoDataIdU;
	<%

	// return to the calling page
	String referer = request.getHeader("Referer"); 
	if (referer != null)
	{
		response.sendRedirect(referer);
	}
	else
	{
	 %>
		appVue.url = "<%=sUrlLoginComplete%>";
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
		appVue.alertText = login_ErrorConnection;
		appVue.alertTitle = login_ErrorConnection;
		appVue.url="<%=sUrlLoginComplete%>";
	<%			
	}
	int iRetSend = sendForgetPwdEmail(oSessionManager, email,sServerURL,zlang,zappprod,sUrlLoginComplete);
	%>
		appVue.alertText = login_User;
		appVue.alertTitle = login_User;
		appVue.url="<%=sUrlLoginComplete%>";
	<%
	}
	%>

	document.body.classList.remove("cds-hidden");
	}); 
	</script>

</body>
</html>	
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
