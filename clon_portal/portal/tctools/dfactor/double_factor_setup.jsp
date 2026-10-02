<%-- =========================================================
	@(#) FileVersion: 821.002.048
	@(#) FileDescription: double_factor_setup.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2024
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ page import="com.meta4.common.utils.logsystem.M4Logger" %>
<%@ page import="com.meta4.common.cipher.*" %>
<%@ page import="com.meta4.taglib.util.*"%>
<%@ page import="com.meta4.utilities.*" %>
<%@ page import="java.lang.*"%>
<%@ page import="java.util.*"%>
<% 
// 1 - headers: no cache, no clickjacking 
response.setHeader("Pragma", "no-cache"); 
response.setHeader("Cache-Control", "no-store"); 
response.setDateHeader("Expires", -1); 
response.setHeader("X-Frame-Options", "SAMEORIGIN"); 
	
response.setContentType("text/html; charset="+M4RequestEncoding.getAppEncoding()+"");

// 2 - generate key from ticket
StringBuffer key = new StringBuffer(); 
StringBuffer ticket = new StringBuffer(); 
StringBuffer user = new StringBuffer(); 
StringBuffer lang = new StringBuffer(); 
StringBuffer code = new StringBuffer(); 
StringBuffer details = new StringBuffer(); 

String sQRCodeImg = "";
String sIssuer = "Peoplenet"; 
String sURLComplete = "/";

M4DoubleAuthenticationFactor oauthfactor = new M4DoubleAuthenticationFactor();
int iResult = oauthfactor.generateKeyFromToken ( request, key, ticket, user, lang, code, details ); 

String zlang = lang.toString();
String sTicket = ticket.toString();
String sIdAppUser = user.toString();
String sSecretKey = key.toString();
String sCode = code.toString();
String sDetails = details.toString();
	
if (sSecretKey != null && !sSecretKey.equals("")) sQRCodeImg = oauthfactor.getQRCodeFromKey(sSecretKey, sIdAppUser, sIssuer); 

int iLang = Integer.parseInt(zlang);
String sCompleteURL = CheckConfig.setBadLoginLink(iLang);

%>
<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/shco_g0/shco_gen_lang.jsp" %>
<%
com.meta4.redirect.M4PropertiesRedirect Tran_double_password = new com.meta4.redirect.M4PropertiesRedirect();
Tran_double_password.load(pageContext,"/translations/double_factor_setup_" + zlanguser + ".properties");
%>
<!DOCTYPE html>
<html lang="en">
	<head>
	<meta charset="utf-8">
	<title><%=Tran_double_password.getProperty("setup.title")%></title>
	<script type="text/javascript" src="/translations/double_factor_setup_<%=zlanguser%>.js"></script>
	<script type="text/javascript">
	function finish()
	{
		document.location.href="<%=sCompleteURL%>";
	}
	</script>
	<script type="text/javascript">
	function verifycode()
	{
		var bIsError = false;
		var sErrorMessage = "";

		var inputCode = document.double_password_setup.verificationcode.value; 
	  if (inputCode == "")
	  {
		sErrorMessage += _verify_code_empty + "\n";
		bIsError = true;
	  }
	  
		if (/^\d{6}$/.test(inputCode)) {
		} else {
		sErrorMessage += _verify_code_unverifiable + "\n";
		bIsError = true;
	  }

	  if (bIsError == true)
	  {
		if(typeof(meta4) != "undefined" && typeof(meta4.mobile) != "undefined"){
			meta4.ui.log.showMsg(sErrorMessage);
		}else{
			alert(sErrorMessage);
		}
		return;
	  }
	  else
	  {	  
		document.double_password_setup.submit();
	  }
	}
	</script>
	
	<link href="/library/npm/vuetify@3/dist/vuetify.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="/style/cds.css">
	<link rel="shortcut icon" href="/images/cegid/favicon.ico" type="image/gif" />
	</head>
	<body id="cds" class="">
		<div id="app" data-v-app="">
			<div class="v-application v-theme--light v-layout v-layout--full-height v-locale--is-ltr cds-bg">
				<div class="v-application__wrap">
					<div class="cds-bg-flying"></div>
					<main class="v-main d-flex align-start" style="--v-layout-left: 0px; --v-layout-right: 0px; --v-layout-top: 0px; --v-layout-bottom: 0px;">
						<div class="v-container v-locale--is-ltr cds-container-box-login height-fill-available">
							<div class="height-fill-available d-flex justify-center">
								<div class="text-center mb-8 mt-10">
									<img class="mb-4" alt="cegid" src="/style/images/logo-pn-desktop.svg" />
									
									<p class="text-h4"><%=Tran_double_password.getProperty("setup.title")%></p>
								
									<div class="text-subtitle-1 mb-8">
										<!-- if the ticket was not entered this is not a validation page, it's an error --> 
										<% if (iResult == -1) {%>	
											<p class="text-center"><%=Tran_double_password.getProperty("notverified")%></p>
										<% } else if (iResult == 1) {%>	
										<p><%=Tran_double_password.getProperty("textmain")%></p>
										<p><%=Tran_double_password.getProperty("textgoodsetup")%></p>
									</div>
									<div>
										<p class="text-h6 mb-1"><%=Tran_double_password.getProperty("accountlabel")%>:</p>
										<p class="text-body-1 primary--text"><%=sIdAppUser%></p>
										<p class="text-h6 mb-1"><%=Tran_double_password.getProperty("keylabel")%>:</p>
										<p class="text-body-1 primary--text"><%=sSecretKey%></p>
										<!--<img class="mt-2 mb-16" alt="QRCode" src="<%=sQRCodeImg %>"></img>-->
										<% } else { %>
										<% if (sDetails != null && !sDetails.equals("")){%>
											<p><script>document.write(<%=sDetails%>)</script></p>
										<%} else if (sCode != null && !sCode.equals("")) {%>
											<p><script>document.write(<%=sCode%>)</script></p>
										<p><%=Tran_double_password.getProperty("textbadsetup")%></p>
										<% } %>
									</div>
									<div class="text-center my-4">
										<input type="button" class="text-button primary--text" value="<%=Tran_double_password.getProperty("finish")%>" onclick="javascript:finish();">
									</div>
									<% } %>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	</body>
</html>