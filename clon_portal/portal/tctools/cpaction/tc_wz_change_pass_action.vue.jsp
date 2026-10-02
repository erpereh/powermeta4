<%-- =========================================================
	@(#) FileVersion: 822.003.008
	@(#) FileDescription: tc_wz_change_pass_action.vue.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ page import="java.lang.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.taglib.util.*"%>
<%@ page import="com.meta4.security.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>



<% // 2 - new password
	String sNewPassword = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_NEW_PASSWORD");
	String zlang = (String)session.getAttribute("FP_M4L_C");
	if ((zlang == null) || (zlang.equals(""))) { zlang = "2"; }

	M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
%>

<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/shco_g0/shco_gen_lang.jsp" %>
<%@ include file="/shco_g0/shco_login_box_trans.jsp" %>

<%-- JavaScript user interface --%>
<script type="text/javascript" src="/translations/tc_login_<%=zlanguser%>.js"></script>

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
			
			appVue = userMessagePage();

			// Literals
			appVue.confirmButton = "Ok";

<%
	// declare
	StringBuffer code = new StringBuffer(); 
	StringBuffer details = new StringBuffer(); 
	
	// calculate where the results will be
	int iCode = -1;
	String sUrlLoginComplete = (String)session.getAttribute("FP_URL_COMPLETE");
	String sUrlLoginInComplete = "/tctools/cpaction/tc_wz_change_pass.jsp";
	String sCoda = (String)session.getAttribute("FP_M4T_C");
	if (sCoda != null && !sCoda.equals("")) 
	{
		sUrlLoginInComplete = sUrlLoginInComplete + "?TK=" + sCoda;
		
		 // attempt reset only if we can go back in the case of an error
		 M4Resetter resetter = new M4Resetter(session);  
		 iCode = resetter.resetPassword(sNewPassword, code, details);
	}

	// only case where details are relevant is when the password is not strong enough
	String sCode = code.toString();
	String sDetails = details.toString();
	
	// unset session attributes. 
	session.setAttribute("FP_M4T_C", "");
	session.setAttribute("FP_M4U_C", "");
	session.setAttribute("FP_M4L_C", "");
	session.setAttribute("FP_M4IT_C", "");
	session.setAttribute("FP_URL_COMPLETE", "");
	session.setAttribute("FP_URL_INCOMPLETE", "");

	if (oM4Log.isTraceEnabled())
	{
	 oM4Log.trace("iCode : " + iCode); 
	 oM4Log.trace("sDetails : " + sDetails);
	 oM4Log.trace("code : " + code); 
	}
	
	if (iCode == 0)
	{
	%>
		appVue.alertText = login_ChangePDo;
		appVue.alertTitle = login_ChangePDo;
		// "Password changed successfully.";
		appVue.url="<%=sUrlLoginComplete%>";
	<%
	}
	else
	{
		if (sDetails != null && !sDetails.equals(""))
		{
		%>
			var details = '<%=sDetails%>';
			appVue.alertText = details;
			// "You must repeat the new password.";
			appVue.alertTitle = _change_pwd_Error_RetypePasswordIsNull ;

		<%
		} else if (sCode != null && !sCode.equals("")) {
		%>
			var code = <%=sCode%>;
			appVue.alertText = code;
			// "You must repeat the new password.";
			appVue.alertTitle = _change_pwd_Error_RetypePasswordIsNull;
		<%
		} else {
		%>
			appVue.alertText = login_ChangePDoErr;
			// "You must repeat the new password.";
			appVue.alertTitle = _change_pwd_Error_RetypePasswordIsNull;
		<%
		} 
		%>

		appVue.url="<%=sUrlLoginInComplete%>";
	<%
	}
	%>
			document.body.classList.remove("cds-hidden");
	}); 
	</script>

</body>
</html>
