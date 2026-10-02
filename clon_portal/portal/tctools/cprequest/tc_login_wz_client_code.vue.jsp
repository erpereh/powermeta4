<%-- =========================================================
	@(#) FileVersion: 822.003.008
	@(#) FileDescription: tc_login_wz_client_code.vue.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ page import="java.lang.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.taglib.util.*"%>
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
%>

<%  // 3 - el problema de este codigo es si tarda mucho entre una ejecucion y otra
	String sIdSoc = (String)session.getAttribute("SOC_C_PASS"); 
	String sOrganization = sIdSoc;
%>

<%  // 4 - organization hint for next executions
	String sIdSocSuggestion = "";
	if (sIdSoc == null)
	{
	Cookie[] cookies = request.getCookies();
	if (cookies != null)
	for (Cookie ck : cookies) {
		if ("M4_ORGANIZATION".equals(ck.getName())) {
			sIdSocSuggestion = ck.getValue().toUpperCase();
		}
	}
	} 
%>

<%@ include file="/shco_g0/shco_gen_taglib.jsp"%>
<%@ include file="/shco_g0/shco_gen_lang.jsp"%>
<%@ include file="/shco_g0/shco_login_box_trans.jsp"%>
<%
com.meta4.redirect.M4PropertiesRedirect Tran_tc_login = new com.meta4.redirect.M4PropertiesRedirect();
Tran_tc_login.load(pageContext,"/translations/tc_login_" + zlanguser + ".properties");
%>

<!DOCTYPE html>
<html lang="<%=zlanguser%>"><!-- A11y -->
<head>
	
	<title><%=Tran_tc_login.getProperty("ChangePwd.Title")%></title>
	<%-- JavaScript user interface --%>
	<script type="text/javascript" src="/translations/tc_login_<%=zlanguser%>.js"></script>
	<script type="text/javascript" src="/mobile/translation/m4mobile_<%=zlanguser%>.js"></script>

	
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
		
		window.addEventListener("DOMContentLoaded", function () {
				
			var myDomElements = {
				idsociedad: document.querySelector('#idsociedad'),
				sendButton: document.querySelector('[cds-ref="send-button"]')
			}
							
			appVue = clientCodePage(myDomElements);

			// Literals
			appVue.clientCode = document.querySelector("#idsociedad").value;
			appVue.formTitle = document.querySelector('#formTitle').textContent;
			appVue.formDescription = document.querySelector('#formDescription').textContent;
			appVue.buttonsend = document.querySelector("#buttonsend").textContent;
			appVue.labelClientCode = document.querySelector("#labelClientCode").textContent;
			appVue.buttonback = document.querySelector("#buttonback").textContent;
							
			document.body.classList.remove("cds-hidden"); // Visualizar el contenido
		});

	</script>
	
	<!-- Title -->
	<title><%=Tran_shco_login_box.getProperty("login.ChangePass")%></title>
	
	<script type="text/javascript">
	function userrequest() {
		var sOrg = "<%=sOrganization%>";
		if (sOrg == "") {
				document.location.href="/tctools/cprequest/tc_login_wz_person_data.jsp";
			} else {
				document.location.href="/tctools/cprequest/tc_login_wz_person_data?SOC_C=" + sOrg;
			}
		}

	function userrequestsoc() {
		var objidsociedad = document.getElementById("idsociedad");
		  var value = new String(objidsociedad.value);
		  var sUrl = "/tctools/cprequest/tc_login_wz_person_data.jsp?SOC_C=" + value;
	
			if (value != "") {
			  document.location.href = sUrl;
		  }else{
			  if(typeof(meta4) != "undefined" && typeof(meta4.mobile) != "undefined"){
				  meta4.ui.log.showMsg(login_WithOutCodeC);
			  }else{
				  alert(login_WithOutCodeC);
			  }
		  }
	  }  
  </script>
</head>

<body id="cds" class="cds-hidden">
	<div id="app">
	</div>

	<!-- Vue.js (clientCode) with H1 -->
	<script type="text/javascript" src="/library/framework/common.vue.js"></script>
	<script type="text/javascript" src="/tctools/cprequest/tc_login_wz_client_code.vue.js"></script>

	<div class="cds-hidden">

		<!-- Form -->
		<form id="tc_login_wz_person_data" name="tc_login_wz_person_data" action="/tctools/cprequest/tc_login_wz_person_data.jsp" method="post" class="cds-hidden">
			<input id="idsociedad" value="<%= sIdSocSuggestion %>" placeholder="<%=Tran_shco_login_box.getProperty("login.Soc")%>">
			<input cds-ref="send-button" type="button" value="javascript:userrequestsoc();">
			<input cds-ref="back-button" type="button" value="javascript:go.history(-1);">
		</form>

		<!-- Literales -->
		<%  
		String paint_back = Tran_shco_login_box.getProperty("login.Back");
		if (Tran_tc_login.getProperty("ChangePwd.BackHome")!= null) {
			paint_back = Tran_tc_login.getProperty("ChangePwd.BackHome");
		}
		%>
		<label id="formTitle"><%=Tran_shco_login_box.getProperty("login.ChangePassLine1")%></label>
		<label id="formDescription"><%=Tran_shco_login_box.getProperty("login.WithOutCodeC")%></label>
		<label id="buttonsend"><%=Tran_shco_login_box.getProperty("login.SendSoc")%></label>
		<label id="buttonback"><%=paint_back%></label>
		<label id="labelClientCode"><%= Tran_shco_login_box.getProperty("login.Soc")%></label>


	</div>
</body>
</html>
