<%-- =========================================================
	@(#) FileVersion: 822.003.008
	@(#) FileDescription: tc_wz_change_pass.vue.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ page import="com.meta4.common.cipher.*" %>
<%@ page import="com.meta4.taglib.util.*"%>
<%@ page import="java.lang.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>

<% // 1 - headers: no cache, no clickjacking 
	 response.setHeader("Pragma", "no-cache"); 
	 response.setHeader("Cache-Control", "no-store"); 
	 response.setDateHeader("Expires", -1); 

	 response.setContentType("text/html;charset=" + com.meta4.utilities.M4RequestEncoding.getAppEncoding());
%>
<%@ include file="/tctools/tc_frame_options.jsp" %>

<% // 2 - token dehash

	String zlang = "-1";
	String sChangePassUs = "-1";
	String sIU = "*";
	String sUrlLoginComplete = "/";
	String sIUN = "";
	String sDesc = "";
	String zappprod = "";
	
	String sTimeEnd = "0";
	long lMinutesEnd = 0;
	boolean bTokenExpired = false;

	String sTokenDate = "";
	boolean bUserPwdAlreadyChanged = false;
	String sOrigin = "";
	 
	String sCampoValue = "";
	Hashtable ht = null; 
	M4HashToken oM4HashToken = new M4HashToken();

	String sLangCode = "en";

	sCampoValue = M4SafeRequest.getParameter(request, "TK");
	if (sCampoValue == null) sCampoValue = "null";
 
	M4Logger logger = M4Logger.getLogger("com.meta4.jsp");
	try 
	{
			ht = oM4HashToken.dehashToken(sCampoValue); 

			sIU = (String)ht.get("IU");
			if (sIU == null) {sIU = "*";}

			sChangePassUs = (String)ht.get("IT");
			if (sChangePassUs == null) {sChangePassUs = "-1";}

			zlang = (String)ht.get("IL");

			if ((zlang==null)||(zlang.equals(""))){zlang = "2";}

			sUrlLoginComplete = (String)ht.get("IURL");
			 
			 
			// bugid 264955: must be compatible with older and newer login page redirection options
			if (!sUrlLoginComplete.equals("/"))
			{
				sLangCode = com.meta4.configuration.CheckConfig.checkLocale(Integer.parseInt(zlang));
				int iLangParamPos = sUrlLoginComplete.indexOf("?lang");
				if (iLangParamPos > 0) sUrlLoginComplete = sUrlLoginComplete.substring(0, iLangParamPos + 5) + "=" + sLangCode;
			}
			
			sIUN = (String)ht.get("INAME");
			
			zappprod = (String)ht.get("IPRO");
			
			sOrigin = (String)ht.get("IORIGIN");
			if (sOrigin==null) { sOrigin = ""; }

			sTokenDate = (String)ht.get("TKDATE");
			// bugid 0336839: Check pwd already changed to avoid use the link more than one time
			if (sTokenDate != null )
			{
				int iCheckResult = checkPwdNotAlreadyChanged(sIU,sTokenDate,zlang,sOrigin);
				if (iCheckResult == -1)
				{
						bUserPwdAlreadyChanged = true;
				}
			}

			sTimeEnd = (String)ht.get("TE");
			long lMinutesNow = System.currentTimeMillis();
			if (sTimeEnd != null) 
			{
				lMinutesEnd = new java.lang.Long(sTimeEnd).longValue() * (1000*60);
				if (lMinutesEnd < lMinutesNow)
				{
					 
					 bTokenExpired = true;
					 
					 // For debugging purposes only
					 // java.util.GregorianCalendar calendar = new java.util.GregorianCalendar(java.util.TimeZone.getTimeZone("GMT"));
					 // calendar.setTimeInMillis(lMinutesEnd);
					 // java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm");
					 // out.println("Token expired at: " +sdf.format(calendar.getTime()));
				}
			}


			// Verification of delegated authentication. 
			// Determine if we are in a delegated authentication system. We then read the endpoint and redirect
			// to the equivalent of this page using the same token (important)
			// The origin must be preserved to return to the global system after the password has been set.
			int authResult = 0;
			StringBuffer resolvedExternalURL = new StringBuffer();

			// This will be used to look the system in the delegated authentication tables.
			String protocol = request.getScheme(); // http or https
			String serverName = request.getServerName(); // e.g., simulate1login.meta4.com
			String sServerURL = protocol + "://" + serverName;

			// We need this to know what to redirect to
			String path = request.getRequestURI(); 
			String query = request.getQueryString(); 
			String pageURL = query != null ? path + "?" + query : path;

			authResult = resolveDelegatedAuthenticationMaster(sServerURL, zlang, resolvedExternalURL);
			if (authResult >= 0 && resolvedExternalURL.toString() != null && !resolvedExternalURL.toString().isEmpty()) {
				logger.debug("Endpoint from master system where auth is delegated " + resolvedExternalURL.toString());
				String sFinalPage = resolvedExternalURL.toString() + pageURL; 
				out.println("<script type='text/javascript'>");
				out.println("window.location.href = '" + sFinalPage + "';");
				out.println("</script>");
		
				bTokenExpired = false;
				bUserPwdAlreadyChanged = false;
			}

		} catch (Exception e){
				 logger.error(e.getMessage());
		}
	
%>
<%-- Java: imports   --%>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%@ page import="com.meta4.configuration.*,com.meta4.taglib.util.*,com.meta4.savparams.*" %>

<%@ include file="/shco_g0/shco_gen_lang.jsp" %>
<% if (zlanguser.equals("-1")) zlanguser = sLangCode; %> 
<%@ include file="/shco_g0/shco_login_box_trans.jsp" %>

<!DOCTYPE HTML>
<html lang ="<%=zlanguser%>">

<head>
	<!-- Title -->
	<script type="text/javascript" language="JavaScript" src="/translations/tc_login_<%=zlanguser%>.js"></script>
	<title><%=Tran_shco_login_box.getProperty("login.ChangePass2")%></title>

	<!-- Metadata -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
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

<% if (bTokenExpired) 
{
%>

	<body id="cds" class="cds-hidden">
		<div id="app">
		</div>
		
		<!-- Vue.js userMessagePage (_user_message_page.vue.js, has H1) -->
		<script type="text/javascript" src="/library/framework/common.vue.js"></script>
		<script type="text/javascript" src="/tctools/_user_message_page.vue.js"></script>

		<script type="text/javascript">
	
			window.addEventListener("DOMContentLoaded", function () {
	
				appVue = userMessagePage();

				// Literals
				appVue.confirmButton = "Ok";

				appVue.alertText=login_ExpiredLink;
				appVue.alertTitle=login_ExpiredLink;
				appVue.url="<%=sUrlLoginComplete%>";

				document.body.classList.remove("cds-hidden");
			}); 
		</script>
	</body>
</html>
<%
} 
else if (bUserPwdAlreadyChanged) 
{
%>
	<body id="cds" class="cds-hidden">
		<div id="app">
		</div>

		<!-- Vue.js userMessagePage (_user_message_page.vue.js, has H1) -->
		<script type="text/javascript" src="/library/framework/common.vue.js"></script>
		<script type="text/javascript" src="/tctools/_user_message_page.vue.js"></script>

		<script type="text/javascript">			
			window.addEventListener("DOMContentLoaded", function () {
								
				appVue = userMessagePage();

				// Literals
				appVue.confirmButton = "Ok";

				appVue.alertText=ChangePwd_InvalidLink;
				appVue.alertTitle=ChangePwd_InvalidLink;
				appVue.url="<%=sUrlLoginComplete%>";

				document.body.classList.remove("cds-hidden");
			}); 
		</script>
	</body>
</html>	
<%
} 
else 
{	
	if ( ((sChangePassUs.equals("1")) || (sChangePassUs.equals("2"))) && (!zlang.equals("-1")) && (!sIU.equals("*")))
	{
			if (sChangePassUs.equals("1"))
			{
				sDesc = Tran_shco_login_box.getProperty("login.DesUCP") + " " + com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sIU) + ".";
			}
			else
			{
				sDesc = Tran_shco_login_box.getProperty("login.DesRRCP") + " '" + com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sIUN) + "'" + Tran_shco_login_box.getProperty("login.DesRRCP2") + " " + com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sIU) + "." + " " + Tran_shco_login_box.getProperty("login.DesEx");
			}

	%>

	<body id="cds" class="cds-hidden">
		<div id="app">
		</div>

		<!-- Vue.js userMessagePage (_user_message_page.vue.js, has H1) -->
		<script type="text/javascript" src="/library/framework/common.vue.js"></script>
		<script type="text/javascript" src="/tctools/cpaction/tc_wz_change_pass.vue.js"></script>

		<div class="cds-hidden">

			<!-- Form -->
			<form id="ChangePs" name="ChangePs" action="/tctools/cpaction/tc_wz_change_pass_action.jsp" method="POST">
		<%
			session.setAttribute("FP_M4T_C", sCampoValue);
			session.setAttribute("FP_M4U_C", sIU);
			session.setAttribute("FP_M4L_C", zlang);
			session.setAttribute("FP_M4IT_C", sChangePassUs);
			session.setAttribute("FP_URL_COMPLETE", sUrlLoginComplete);
			session.setAttribute("FP_URL_INCOMPLETE", "/tctools/cpaction/tc_wz_change_pass.jsp");
		%>
				<!-- Requeridos -->
				<input id="M4_NEW_PASSWORD" tabindex="1" title="" type="password" maxlength="32"  name="M4_NEW_PASSWORD" size="14" placeholder="<%=Tran_shco_login_box.getProperty("login.PassNew")%>" data-cy="M4_NEW_PASSWORD">
				<input id="M4_RETYPE_PASSWORD" tabindex="2" title="" size="14" type="password" maxlength="32"  name="M4_RETYPE_PASSWORD" placeholder="<%=Tran_shco_login_box.getProperty("login.PassNewAgain")%>" data-cy="M4_RETYPE_PASSWORD">
				<input id="send-button" cds-ref="send-button" type="button" class="buttonForm" value="" onclick="javascript:CheckAndSubmit();" data-cy="send-button">
			</form>

			<!-- Literales -->
			<label id="labelFormTitle"><%=sDesc%></label>
			<label id="labelFormInfo"><%=Tran_shco_login_box.getProperty("login.InfoCPass")%></label>
			<label id="labelFormNewPasswd"><%=Tran_shco_login_box.getProperty("login.ToolTipPassNew")%></label> 
			<label id="labelFormReNewPasswd"><%=Tran_shco_login_box.getProperty("login.ToolTipPassNewAgain")%></label>
			<label id="labelButtonsend"><%=Tran_shco_login_box.getProperty("login.SendSoc")%></label>

		</div>

		<script type="text/javascript">

		function CheckAndSubmit()
		{
			document.ChangePs.submit();
		}
		</script>
		
		<script type="text/javascript">
			window.addEventListener("DOMContentLoaded", function () {

				var myDomElements = {
					passwordNew: document.querySelector('#M4_NEW_PASSWORD'),
					passwordNewConfirm: document.querySelector('#M4_RETYPE_PASSWORD'),
					sendButton: document.querySelector('[cds-ref="send-button"]')
				}

				// appVue = new Vue(changePasswordPageReset());
				appVue = changePasswordPageReset(myDomElements);


				// Literals
				appVue.formTitle = document.querySelector("#labelFormTitle").textContent;
				appVue.formInfo = document.querySelector("#labelFormInfo").textContent;
				appVue.formNewPasswd = document.querySelector("#labelFormNewPasswd").textContent;
				appVue.formReNewPasswd = document.querySelector("#labelFormReNewPasswd").textContent;
				appVue.buttonsend = document.querySelector("#labelButtonsend").textContent;
				appVue.error_login_NewIPass = login_NewIPass;
				appVue.error_login_NewIRPass = login_NewIRPass;
				appVue.error_NewPasswordDoesNotMatchRetypePassword = _change_pwd_Error_NewPasswordDoesNotMatchRetypePassword;
			
				document.body.classList.remove("cds-hidden");
			});
		</script>

	</body>
	</html>
	<%
	} else { 
	%>
	<body id="cds" class="cds-hidden">
		<div id="app">
		</div>
		
		<!-- Vue.js userMessagePage (_user_message_page.vue.js, has H1) -->
		<script type="text/javascript" src="/library/framework/common.vue.js"></script>
		<script type="text/javascript" src="/tctools/_user_message_page.vue.js"></script>

		<script type="text/javascript">

			window.addEventListener("DOMContentLoaded", function () {

				appVue = userMessagePage();

				// Literals
				appVue.confirmButton = "Ok";

				appVue.alertText=login_ErrorConnection;
				appVue.alertTitle=login_ErrorConnection;

				document.body.classList.remove("cds-hidden");
			}); 
		</script>
	</body>
	</html>	
	<%
	 }
} // else token expired
%>

<%!


/**
* Resolves the external system URL.
*
* @param url                  The URL to resolve.
* @param language             The language code.
* @param resolvedExternalURL  The buffer to store the resolved external system URL.
* @return                     Status code indicating is not delegated (0) or failure (-1).
*/
private int resolveDelegatedAuthenticationMaster(String url, String language, StringBuffer resolvedExternalURL) {
	int result = -1;
	M4SessionManager sessionManager;
	M4Logger logger = M4Logger.getLogger("com.meta4.jsp");

	try {
		sessionManager = M4BootstrapSession.establishBootstrapSession(language);
	} catch (Exception e) {
		logger.error("Exception while trying to establish a bootstrap session", e);
		return result;
	}

	try {
		M4Operations operations = new M4Operations(sessionManager);
		String object = "SRTC_FORGET_PWD_BY_EMAIL";
		String node = "SRTC_FORGET_PWD_EXTERNAL";
		String method = "_RESOLVE_EXTERNAL_SYSTEM";

		operations.initTask("SESSION");
		operations.beginJob();
		operations.createData(object, object, false, null);

		Hashtable<String, String> arguments = new Hashtable<>();
		arguments.put("AI_URL", url);

		operations.method(method, object, node, method, arguments, false);
		operations.outputDef(node, object + "!" + node + "[*]");
		operations.endJob("");

		StringBuffer serverResponse = new StringBuffer();
		operations.execMethod(method, serverResponse);
		result = (int) Double.parseDouble(serverResponse.toString());
		logger.debug("Is authentication delegated: " + result);
		if (result == 1) {
			String endpoint = operations.getItem(node, object, node, "-1", "ENDPOINT");
			// Make validation
			if (endpoint != null && !endpoint.isEmpty() && !"null".equals(endpoint)) {
				resolvedExternalURL.append(endpoint);
			} else {
				resolvedExternalURL.append(url);
			}
		}
	} catch (Exception e) {
		logger.error("Problem in resolveDelegatedAuthenticationMaster", e);
	} finally {
		try {
			M4BootstrapSession.releaseBootstrapSession(sessionManager, language);
		} catch (Exception e) {
			logger.error("resolveDelegatedAuthenticationMaster: Exception while trying to release a session", e);
		}
	}
	return result;
}


private int checkPwdNotAlreadyChanged( String sIdAppUser, String sTokenDate, String sLang , String sOrigin) 
{

		int iRet = -1;
		M4Logger _oM4Log = M4Logger.getLogger("com.meta4.jsp");
		M4SessionManager oSessionManager;
		try 
		{
			oSessionManager = M4BootstrapSession.establishBootstrapSession (sLang);
		}
		catch (Exception e)
		{
			_oM4Log.error("Exception while trying to establish a session" , e );
			return iRet;
		}

		try {

			M4Operations m = new M4Operations (oSessionManager);
			String sM4Obj = "SRTC_FORGET_PWD";
			String sNode  = "SRTC_FORGET_PWD";
			String sMethod = "CHECK_PWD_NOT_ALREADY_CHANGED";

			m.initTask("SESSION");
			m.beginJob();
			m.createData(sM4Obj, sM4Obj, false, null);

			Hashtable<String, String> htArgs = new Hashtable<String, String>();
			htArgs.put("ARG_ID_APPUSER", sIdAppUser);
			htArgs.put("ARG_LINK_DATE", sTokenDate);
			htArgs.put("ARG_LINK_ORIGIN", sOrigin);

			m.method(sMethod, sM4Obj, sNode, sMethod, htArgs, false); 
			m.outputDef (sNode, sM4Obj + "!" + sNode + "[*]" );

			m.endJob("");

			StringBuffer sbServerRet = new StringBuffer();
			m.execMethod(sMethod, sbServerRet);
			iRet = (int)Double.parseDouble(sbServerRet.toString());

		} 
		catch (Exception e) 
		{
			_oM4Log.error("------- Problem in checkPwdNotAlreadyChanged: ", e);
		} 

		// Release the session
		if (oSessionManager != null)
		{
			try {
				M4BootstrapSession.releaseBootstrapSession ( oSessionManager, sLang ) ;
			} 
			catch (Exception e) 
			{
				_oM4Log.error("Problem releasing the session ", e);
			} 
		}

		return iRet;
}
%>