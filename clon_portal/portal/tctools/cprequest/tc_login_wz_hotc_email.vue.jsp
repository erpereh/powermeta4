<%-- =========================================================
	@(#) FileVersion: 822.003.008
	@(#) FileDescription: tc_login_wz_hotc_email.vue.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ page import="java.lang.*"%>
<%@ page import="com.meta4.request.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.taglib.util.*"%>

<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>

<%  // 1 - headers: no cache, no clickjacking 
	response.setHeader("Pragma", "no-cache"); 
	response.setHeader("Cache-Control", "no-store"); 
	response.setDateHeader("Expires", -1); 
	M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
	boolean ismultiEnvironment  = M4BootstrapSession.isMultiEnvironment();
	String sIdSoc_DNS = null;
	// vienes de resolución por DNS
    sIdSoc_DNS = (String) session.getAttribute("SOC_DNS");
%>

<%@ include file="/tctools/tc_frame_options.jsp" %>

<%  // 2 - configurable values (must have been set in the including page: tc_login.jsp/shco_gen_login_box.jsp or the functional equivalent)
	String zlang = (String)session.getAttribute("LANG_TO_CHANGE_PASS"); 
	String zappprod = (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE"); 
	String sUrlLoginComplete = (String)session.getAttribute("URL_COMPLETE"); 
	
	if (zlang == null || zlang.equals("")) zlang = "2"; 
	if (zappprod == null || zappprod.equals("")) zappprod = "/style/tc_login.css"; 
	if (sUrlLoginComplete == null || sUrlLoginComplete.equals("")) sUrlLoginComplete =  "/";    
	boolean forgetPwdBasedOnEmail = false;
	String sforgetPwdBasedOnEmail = GlobalSavParams.getParameterValue("ADMINISTRATION", "FORGET_PWD_EMAIL_BASED");
	oM4Log.trace("sforgetPwdBasedOnEmail : " + sforgetPwdBasedOnEmail); 
	if (sforgetPwdBasedOnEmail != null && sforgetPwdBasedOnEmail.equals("1")) 
	{
		forgetPwdBasedOnEmail = true; 
	}
%>

<%

  // Captcha functionality from the session instead
  String sRequireCaptcha = (String) session.getAttribute("tc_login_wz_hotc_email_action_require");
  String sRetypeCaptcha = (String) session.getAttribute("tc_login_wz_hotc_email_action_retype");     
  String sEmailRetyped = (String) session.getAttribute("tc_login_wz_hotc_email_action_data");                
  if (!isValidEmailAddress(sEmailRetyped)) sEmailRetyped = "";
  session.removeAttribute("tc_login_wz_hotc_email_action_require");
  session.removeAttribute("tc_login_wz_hotc_email_action_retype");
  session.removeAttribute("tc_login_wz_hotc_email_action_data");

%>
<%!
	public boolean isValidEmailAddress(String email) {
   	boolean result = true;
   	try {
	  if (email == null) return false;
      javax.mail.internet.InternetAddress emailAddr = new javax.mail.internet.InternetAddress(email);
      emailAddr.validate();
   } catch (javax.mail.internet.AddressException ex) {
      result = false;
   }
   return result;
}
%>

<%@ include file="/shco_g0/shco_gen_taglib.jsp"%>
<%@ include file="/shco_g0/shco_gen_lang.jsp"%>
<%@ include file="/shco_g0/shco_login_box_trans.jsp"%>

<%
com.meta4.redirect.M4PropertiesRedirect Tran_tc_login = new com.meta4.redirect.M4PropertiesRedirect();
Tran_tc_login.load(pageContext,"/translations/tc_login_" + zlanguser + ".properties");
%>
<title><%=Tran_tc_login.getProperty("ChangePwd.Title")%></title>
<script type="text/javascript" src="/translations/tc_login_<%=zlanguser%>.js"></script>
<script type="text/javascript" src="/mobile/translation/m4mobile_<%=zlanguser%>.js"></script>

<script type="text/javascript">
// Changes the cursor to an hourglass
function cursor_wait() {
	document.body.style.cursor = 'wait';
}
// Default value
function cursor_clear() {
	document.body.style.cursor = 'default';
}
</script>

<%  // 3 - Enter your e-mail %>
<!DOCTYPE HTML>
<html lang="<%=zlanguser%>"><!-- A11y -->
<head>
	<!-- Title -->
	<title><%=Tran_tc_login.getProperty("ChangePwd.Title")%></title>

	<!-- Metadata -->
	<meta http-equiv=" X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"/>

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
	<script type="text/javascript">
		function BuildURL() {
			return btoa(location.protocol + "//" + location.host); 
		}
		function validateEmail(email) {
			var regexp = /^[a-z0-9]([a-z0-9_\-\.]*)@([a-z0-9_\-\.]*)(\.[a-z]{2,24}(\.[a-z]{2}){0,2})$/i;
			email = email.replace(/^\s*/, "");
			email = email.replace(/\s*$/, "");
			email = email.toLowerCase();
			var result = regexp.test(email);
			if (result == true)
			{
				return email;
			}
			else
			{
				return null;
			}
		}
								
		function submitEmail()
		{
			var bIsError = false;
			var sErrorMessage = "";
			var bFillData = true;
			var bEmail = true;

			var email = document.tc_login_wz_hotc_email_action.email.value;

			if (email == "")  
			bFillData = false;

			var kaptcha = document.tc_login_wz_hotc_email_action.kaptcha.value;
			if (kaptcha == "") bFillData = false;

			email = validateEmail(email);
			if (email == null) bEmail = false;
			
			if (bFillData == false)
			{
			sErrorMessage += login_NoDataIdU;
			bIsError = true;		
			}
			else if (bEmail == false)
			{
			sErrorMessage += login_NoDataM;
			bIsError = true;		
			}

			if (bIsError == true)
			{	
				cursor_clear();
				if(typeof(meta4) != "undefined" && typeof(meta4.mobile) != "undefined")
				{
					meta4.ui.log.showMsg(sErrorMessage);
				} else {
					alert(sErrorMessage);
				}
				return;
			}
			else
			{
				document.forms["tc_login_wz_hotc_email_action"].elements["offsite"].value = BuildURL();
				cursor_wait();
				<%if (forgetPwdBasedOnEmail){%>
					document.forms["tc_login_wz_hotc_email_action"].action = '/tctools/cprequest/tc_login_wz_forget_pwd_email_based_action.jsp' ;
				<%}%>
				document.tc_login_wz_hotc_email_action.submit();
			}
		}
	</script>
</head>

<body id="cds" class="cds-hidden">
	<div id="app">
	</div>

	<!-- Vue.js forgotPage (tc_login_wz_hotc_email.vue.js) has h1 -->
	<script type="text/javascript" src="/library/framework/common.vue.js"></script>
	<script type="text/javascript" src="/tctools/cprequest/tc_login_wz_hotc_email.vue.js"></script>

	<div class="cds-hidden">

		<!-- Form -->
		<form id="tc_login_wz_hotc_email_action" name="tc_login_wz_hotc_email_action" action="/tctools/cprequest/tc_login_wz_hotc_email_action.jsp" method="post" class="cds-hidden">
			<input type="hidden" id="offsite" name="offsite" value="">
			<input id="email" name="email" maxlength="255" type="text" value="<%=sEmailRetyped%>" data-cy="email">
			<input id="kaptcha" name="kaptcha" maxlength="255" type="text" value=""><!-- do the end to end when captcha is out -->
			<input cds-ref="send-button" type="button" class="buttonForm" value="" onclick="javascript:submitEmail();" data-cy="send-button">
		</form>

		<!-- Literales -->
		<%if(!isExpProduct(request)){%>
			<label id="labelFormTitle"><%=Tran_shco_login_box.getProperty("login.NotReUsuPass")%></label>
		<%} else { %>
			<label id="labelFormTitle"><%=Tran_shco_login_box.getProperty("login.NotReUsuPassExp")%></label>
		<%}%>
		
		<label id="labelFormInfo"><%=Tran_shco_login_box.getProperty("login.ChangePassEmailLine")%></label>
		<label id="labelEmail"><%=Tran_shco_login_box.getProperty("login.ChangePassEmailLabel")%></label>
		<label id="labelRetypeCaptcha"><%=Tran_shco_login_box.getProperty("login.RetypeCaptcha")%></label>
		<label id="labelRequireCaptcha"><%=Tran_shco_login_box.getProperty("login.RequireCaptcha")%></label>
		<label id="labelCaptcha"><%= Tran_shco_login_box.getProperty("login.CaptchaPlaceHolder")%></label>
		<label id="buttonsend"><%=Tran_shco_login_box.getProperty("login.SendSoc")%></label>
		<%  
		String paint_back = Tran_shco_login_box.getProperty("login.Back");
		if (Tran_tc_login.getProperty("ChangePwd.BackHome")!= null) {
			paint_back = Tran_tc_login.getProperty("ChangePwd.BackHome");
		}
		%>
		<label id="buttonback"><%=paint_back%></label>
		
		<%if(!isExpProduct(request)){%>
		<label id="labelWithoutEmail"><%= Tran_shco_login_box.getProperty("login.ChangePassNoEmailLine")%></label>
		<%} else { %>
		<label id="labelWithoutEmail"></label>
		<%}%>
	</div>

	<script type="text/javascript">
		window.addEventListener("DOMContentLoaded", function () {
			
			var myDomElements = {
				email: document.querySelector("#email"),
				captcha: document.querySelector("#kaptcha"),
				sendButton: document.querySelector('[cds-ref="send-button"]'),
				backButton: document.querySelector('[cds-ref="back-button"]')
			};
			
			// appVue = new Vue(forgotPage(myDomElements));
			appVue = forgotPage(myDomElements);

			// Literals
			appVue.formTitle = document.querySelector("#labelFormTitle").textContent;
			appVue.formInfo = document.querySelector("#labelFormInfo").textContent;
			appVue.labelEmail = document.querySelector("#labelEmail").textContent;
			appVue.labelRetypeCaptcha = document.querySelector("#labelRetypeCaptcha").textContent;
			appVue.labelRequireCaptcha = document.querySelector("#labelRequireCaptcha").textContent;

			appVue.labelCaptcha = document.querySelector("#labelCaptcha").textContent;
			appVue.buttonsend = document.querySelector("#buttonsend").textContent;
			appVue.buttonback = document.querySelector("#buttonback").textContent;

			appVue.labelWithoutEmail = document.querySelector("#labelWithoutEmail").textContent;
			
			appVue.requireCaptcha = "<%=sRequireCaptcha%>";
			appVue.retypeCaptcha = "<%=sRetypeCaptcha%>";
			appVue.dataRetyped = "<%=sEmailRetyped%>"; 

			document.body.classList.remove("cds-hidden");
		}); 
	</script>
</body>
</html>
<%! 
boolean isExpProduct(HttpServletRequest request)
{	
	M4Logger log = M4Logger.getLogger("com.meta4.jsp");
	boolean isExpProduct = false; 
	try {		
		// the two first are for dual environments
		String productFromSession = (String) request.getSession().getAttribute("_PROD");
		String productFromCookie = M4ProductByThreadUpdater.getProductIDFromRequest(request);
		isExpProduct = M4ProductReadUtils.META4_PRODUCT_VALUE_POP2_EXP.equalsIgnoreCase(M4ProductByThreadUpdater.getDefaultProductValue())
				|| M4ProductReadUtils.META4_PRODUCT_VALUE_POP2_EXP.equalsIgnoreCase(productFromSession)
				|| M4ProductReadUtils.META4_PRODUCT_VALUE_POP2_EXP.equalsIgnoreCase(productFromCookie);
		
	} catch ( Exception e ) {
		log.error("Error checking if product is HR Experience ", e);
	}
	return isExpProduct;
}
%>