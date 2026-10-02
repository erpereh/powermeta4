<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: double_factor_verification.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ taglib uri="M4Tags" prefix="m4" %>

<%@ page import="com.meta4.common.utils.logsystem.M4Logger" %>

<% // 1 - headers: no cache, no clickjacking 
   response.setHeader("Pragma", "no-cache"); 
   response.setHeader("Cache-Control", "no-store"); 
   response.setDateHeader("Expires", -1); 
   response.setHeader("X-Frame-Options", "SAMEORIGIN"); 
   
   // 2 - validate verification code 

   StringBuffer key = new StringBuffer(); 
   StringBuffer user = new StringBuffer(); 
   StringBuffer lang = new StringBuffer(); 
   StringBuffer code = new StringBuffer(); 
   StringBuffer details = new StringBuffer(); 

   M4DoubleAuthenticationFactor oauthfactor = new M4DoubleAuthenticationFactor();
   int iVerificationStatus = oauthfactor.validateVerificationCode ( request, lang, code, details ); 
   
   String zlang = lang.toString();
   String sCode = code.toString(); 
   String sDetails = details.toString(); 
    
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
<html>
  <head>
    <meta charset="utf-8">
    <title><%=Tran_double_password.getProperty("setup.title")%></title>
   <script type="text/javascript" language="Javascript1.5" src="/translations/double_factor_setup_<%=zlanguser%>.js"></script>
    <script type="text/javascript">
    function finish()
    {
	document.location.href="<%=sCompleteURL%>";
    }
    </script>
    
    </script>
<%@ include file="/mobile/include_mobile_forgetpass.jsp" %>	
	<% if(prod != null && prod.equals("mobile")){ %>
		<link rel="stylesheet" type="text/css" href="/style/tc_portal_fastlane_mobile.css">
	<%} else {%>
		<link rel="stylesheet" type="text/css" href="/style/tc_portal_fastlane.css">
	<%}%>
  </head>
<body>
	<div id="outerDiv">
		<div class="box">
			<div id="loginBox" class="m4-shadow">
				<form id="double_factor_verification" name="double_factor_verification">
				<div class="loginRow">
					<h3><%=Tran_double_password.getProperty("verification.title")%></h3>
				</div>	
				<% if (iVerificationStatus < 1){ %>
				<div class="loginRow">
					<p><%=Tran_double_password.getProperty("notverified")%></p>
				</div>
				<script type="text/javascript">	
				<% if (sDetails != null && !sDetails.equals("")){%>
					var details = '<%=sDetails%>';
					if(typeof(meta4) != "undefined" && typeof(meta4.mobile) != "undefined"){
						meta4.ui.log.showMsg(details);
					} else {
						alert(details);
					}
				<%} else if (sCode != null && !sCode.equals("")) {%>
					var code = <%=sCode%>;
					if(typeof(meta4) != "undefined" && typeof(meta4.mobile) != "undefined"){
						meta4.ui.log.showMsg(<%=sCode%>);
					} else {
						alert(<%=sCode%>);
					}
				<% } %>	
				</script>
				<div class="loginRow">
					<input type="button" class="buttonForm" value="<%=Tran_double_password.getProperty("back")%>" onclick="javascript:history.back()";">
				</div>
				<% } else { %>
				<div class="loginRow">
					<p><%=Tran_double_password.getProperty("verified")%></p>
				</div>
				<div class="loginRow">
					<p><%=Tran_double_password.getProperty("hint")%></p>
				</div>
				<div class="loginRow">
					<input type="button" class="buttonForm" value="<%=Tran_double_password.getProperty("finish")%>" onclick="javascript:finish();">
				</div>
					<%}%>
				</div>
				</form>
			</div>
		</div>
		<div id="ad"></div>
	</div>
</body>
</html>

