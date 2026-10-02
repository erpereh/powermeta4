<%-- [=====================================================]   
			 
	@(#)FileVersion: 814.002.013
	@(#)FileDescription: Forgotten User/password. Change password  
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2017
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP4
	@(#)InternalName: tc_login_wz_hotc.jsp     
	@(#)Date: 07/08/2015

[=====================================================] --%>

<%@ page import="java.lang.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.taglib.util.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>

<%  // 1 - headers: no cache, no clickjacking 
	response.setHeader("Pragma", "no-cache"); 
	response.setHeader("Cache-Control", "no-store"); 
	response.setDateHeader("Expires", -1); 
	response.setHeader("X-Frame-Options", "SAMEORIGIN"); 
   
	M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
%>

<%  // 2 - configurable values (must have been set in the including page: tc_login.jsp/shco_gen_login_box.jsp or the functional equivalent)
	String zlang = (String)session.getAttribute("LANG_TO_CHANGE_PASS"); 
	String zappprod = (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE"); 
	String sUrlLoginComplete = (String)session.getAttribute("URL_COMPLETE"); 
	
	if (zlang == null || zlang.equals("")) zlang = "2"; 
	if (zappprod == null || zappprod.equals("")) zappprod = "/style/tc_login.css"; 
	if (sUrlLoginComplete == null || sUrlLoginComplete.equals("")) sUrlLoginComplete =  "/";    
%>

<%@ include file="/m4trans/shco_g0/0-shco_gen_taglib.jsp"%>
<%@ include file="/m4trans/shco_g0/0-shco_gen_lang.jsp"%>
<%@ include file="/m4trans/shco_g0/0-shco_login_box_trans.jsp"%>

<%-- JavaScript user interface 
<script type="text/javascript" language="Javascript1.5"
	src="/m4jsapi/m4jsapi.nocache.js"></script>--%>
<script type="text/javascript" language="Javascript1.5"
	src="/translations/tc_login_<%=zlanguser%>.js"></script>

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
<html>
<head>

	<%@ include file="/m4trans/mobile/0-include_mobile_forgetpass.jsp" %>
	
	<% 
	if(prod != null && prod.equals("mobile")){            
	%>
		<link rel="stylesheet" type="text/css" href="/style/tc_portal_fastlane_mobile.css">
	<%} else {%>
		<link rel="stylesheet" type="text/css" href="/style/tc_portal_fastlane.css">
	<%}%>

<%@ include file="/m4trans/tctools/0-tc_login_gen_css.jsp"%>
<script type="text/javascript">
function navigateToClientCode()
{
	window.location.href = '/tctools/cprequest/tc_login_wz_client_code.jsp';
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

    email = validateEmail(email);
	if (email == null) bEmail = false;
	
    if (bFillData == false)
    {
       sErrorMessage += login_NoDataIdU;
       bIsError = true;		
	}
	
	 if (bEmail == false)
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
		cursor_wait();
		document.tc_login_wz_hotc_email_action.submit();		
	}
}
</script>
</head>

<body>
	<div id="outerDiv">
		<div class="box">
			<div id="loginBox" class="m4-shadow">
				<form id="tc_login_wz_hotc_email_action" name="tc_login_wz_hotc_email_action" action="/tctools/cprequest/tc_login_wz_hotc_email_action.jsp" method="post">
					<div class="loginRow">
						<h3><%=Tran_shco_login_box.getProperty("login.ChangePassTitleLine")%></h3>
					</div>
					<div class="loginRow">
						<p><%=Tran_shco_login_box.getProperty("login.ChangePassEmailLine")%></p>
					</div>
					<!-- input send mail -->
					<p><% String emailboxdescription = Tran_shco_login_box.getProperty("login.ChangePassEmailLabel"); %></p>
					<div class="loginRow">
						<input id="email" name="email" maxlength="255" type="text" value="" placeholder="<%=emailboxdescription%>">
					</div>
					<div class="loginRow">
						<input type="button" class="buttonForm" value="<%=Tran_shco_login_box.getProperty("login.SendSoc")%>" onclick="javascript:submitEmail();">
					</div>
					<div class="loginRow">
						<a onclick="javascript:navigateToClientCode();"><%=Tran_shco_login_box.getProperty("login.ChangePassNoEmailLine")%></a>
					</div>
				</form>
			</div>
		</div>
		<div id="ad"></div>
	</div>
</body>
</html>
