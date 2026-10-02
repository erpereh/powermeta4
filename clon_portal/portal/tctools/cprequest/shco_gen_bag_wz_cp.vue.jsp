<%-- =========================================================
	@(#) FileVersion: 822.003.008
	@(#) FileDescription: shco_gen_bag_wz_cp.vue.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= --%>


<%@ page import="com.meta4.m4operations.*" %>
<%@ page import="com.meta4.session.*" %>
 
<%-- JavaScript user interface --%>

<script type="text/javascript" src="/translations/tc_login_<%=zlanguser%>.js"></script>
<script type="text/javascript">
	// Changes the cursor to an hourglass
	function cursor_wait() {
		document.body.style.cursor = 'wait';
	}

</script>
<%
// Comes from redirector for Exp Portal
boolean bisExpPortalLogin = false;
String product = (String)session.getAttribute("_PROD"); 
if(product != null) 
{ 
	if (product.equalsIgnoreCase("exp")) {
	bisExpPortalLogin = true;
	}       
}
String productCookie = com.meta4.request.M4ProductByThreadUpdater.getProductIDFromRequest (request);
if(productCookie != null) 
{ 
	if (productCookie.equalsIgnoreCase("exp")) {
	bisExpPortalLogin = true;
	}
}

int iTotRegCount = 0;
String sFormHtml = "";

// M4SessionManager oSessionManager = M4BootstrapSession.establishBootstrapSession (zlang);
if (oSessionManager == null) {
%>
	<script type="text/javascript">
		alert(login_ErrorConnection);
		document.location.href="<%=sUrlLoginComplete%>";
	</script>
<%	
}

if (oSessionManager != null) {

	// Si se ha llegado a tc_login_wz_person_data.jsp sin indicar la sociedad, se rechaza
	boolean ismultiEnvironment  = M4BootstrapSession.isMultiEnvironment();
	if (!ismultiEnvironment || (ismultiEnvironment && sIdSoc != null && !sIdSoc.equals("")))
	{
	
	// Reading the email for passing it along 
	String tks = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "tks"); 

	
	String sIDChannel = "SRTC_FORGET_PWD";
	String sIDNode = "SRTC_FIND_FIELDS";
	String sIDMethod = "LOAD_FIELDS";

	M4Operations oOperationsCPass = new M4Operations(oSessionManager);
	oOperationsCPass.initTask(sIDChannel);
	oOperationsCPass.beginJob();
		oOperationsCPass.createData(sIDChannel, sIDChannel, false, null);

	Hashtable htArgs = new Hashtable(); 
	if (sIdSoc != null) {
		htArgs.put("ID_ORGANIZATION", sIdSoc); 
	} else {
		htArgs.put("ID_ORGANIZATION", ""); 
	}

	// hay que llamar a este metodo --> LOAD_FIELDS
	oOperationsCPass.method(sIDMethod, sIDChannel, sIDNode, sIDMethod, htArgs);
	oOperationsCPass.outputDef(sIDNode, sIDChannel + "!" + sIDNode + "[*]");
	oOperationsCPass.endJob("");

	String reg; 

	iTotRegCount = oOperationsCPass.getCountInClient(sIDNode, sIDChannel, sIDNode);

	String sidcampo="";
	String snombrecampo="";
	String sprecision="";
	String sescala="";
	String stipoHtml="";
	int itipo = 0 ;
	int iPosCal = 0 ;
%>
<script type="text/javascript">
	function CheckAndSubmit() {
		var bIsError = false;
		var sErrorMessage = "";
		var bFillData = true;
		var sAux = "";

		for (i=0;i<document.tc_login_wz_cp_send_data.elements.length;i++) {
			sAux = document.tc_login_wz_cp_send_data.elements[i].value;
			if (sAux == "" && document.tc_login_wz_cp_send_data.elements[i].name != "offsite"  && document.tc_login_wz_cp_send_data.elements[i].nodeName != "BUTTON" ) {
				bFillData = false;
			}
		}

		if (bFillData == false) {
			sErrorMessage += login_NoDataIdU;
			bIsError = true;		
		}

		if (bIsError == true) {
			if(typeof(meta4) != "undefined" && typeof(meta4.mobile) != "undefined") {
				meta4.ui.log.showMsg(sErrorMessage);
			}else{
				alert(sErrorMessage);
			}		 				   
			return;
		} else {			   
			document.forms["tc_login_wz_cp_send_data"].elements["offsite"].value = BuildURL();
			cursor_wait();
			document.tc_login_wz_cp_send_data.submit();		
		}
	}

	function BuildURL() {
		return btoa(location.protocol + "//" + location.host);
	}					
</script>
<!DOCTYPE HTML>
<html lang="<%=zlanguser%>"><!-- A11y -->
<head>

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
	
	<!-- Title -->
	<title><%=Tran_shco_login_box.getProperty("login.ChangePass")%></title>

	<%@ include file="/mobile/include_mobile_forgetpass.jsp" %>	
	<title><%=Tran_shco_login_box.getProperty("login.ChangePass")%></title>
	<script type="text/javascript" src="/library/m4gen.js"></script>
	<script type="text/javascript" src="/library/m4gen_excep.js"></script>
	<script type="text/javascript" src="/library/<%=zLangFolder%>/functions_1.js"></script>
	<script>
		var appVue;
		var isEXP = "<%=bisExpPortalLogin%>";

		window.addEventListener("DOMContentLoaded", function () {

			var myDomElements = {
				birthDate: document.querySelector("#STD_DT_BIRTH"),
				familyName: document.querySelector("#STD_N_FAMILY_NAME_1"),
				firstName: document.querySelector("#STD_N_FIRST_NAME"),
				sendButton: document.querySelector('[cds-ref="send-button"]')
			}

			// debugger
			
			appVue = new Vue(personDataPage(myDomElements));

			appVue.isEXP = isEXP === "true" 

			var titleProduct = "Peoplenet";

			if (isEXP === "true") {
				titleProduct = "HR Experience"
			}

			appVue.titleProduct = titleProduct;
			appVue.loginChangePassLine1 = document.querySelector("#loginChangePassLine1").textContent;
			appVue.loginChangePassLine2 = document.querySelector("#loginChangePassLine2").textContent;
			appVue.loginChangePassLine3 = document.querySelector("#loginChangePassLine3").textContent;
			appVue.loginChangePassEmailLabel = document.querySelector("#loginChangePassEmailLabel").textContent;
			appVue.birthDateLabel = document.querySelector("#STD_DT_BIRTHLabel").textContent;
			appVue.birthDateHint = document.querySelector("#STD_DT_BIRTH").placeholder;
			appVue.familyNameLabel = document.querySelector("#STD_N_FAMILY_NAME_1").placeholder;
			appVue.firstNameLabel = document.querySelector("#STD_N_FIRST_NAME").placeholder;
			appVue.buttonenter = document.querySelector("#buttonenter").value;
			appVue.buttonback = document.querySelector("#buttonback").value;

			document.body.classList.remove("cds-hidden");

		});
	</script>
</head>


<body id="cds" class="cds-hidden">
	<div id="app">
	</div>

	<!-- Vue.js (unused) -->
	<script type="text/javascript" src="/library/framework/common.vue.js"></script>
	<script type="text/javascript" src="/tctools/cprequest/shco_gen_bag_wz_cp.vue.js"></script>

	<div class="cds-hidden">
		<!-- Form -->
		<form id="tc_login_wz_cp_send_data" name="tc_login_wz_cp_send_data" action="/tctools/cpaction/tc_login_wz_cp_send_data.jsp" method="post">
		
			<input type="hidden" id="offsite" name="offsite" value="">
			<input type="hidden" id="tks" name="tks" value="<%=tks%>">
		
		
			<h3 id="loginChangePassLine1"><%=Tran_shco_login_box.getProperty("login.ChangePassLine1")%></h3>
			<p id="loginChangePassLine2"><%=Tran_shco_login_box.getProperty("login.ChangePassLine2")%></p>
			<p id="loginChangePassLine3"><%=Tran_shco_login_box.getProperty("login.ChangePassLine3")%></p>
			<p id="loginChangePassEmailLabel"><% String emailboxdescription = Tran_shco_login_box.getProperty("login.ChangePassEmailLabel"); %></p>

		
			<%	
			for (int i=0; i<iTotRegCount; i++) {
				reg = new Integer(i).toString();
				sidcampo = oOperationsCPass.getItem(sIDNode, sIDChannel, sIDNode, reg, "ID_FIELD");
				snombrecampo = oOperationsCPass.getItem(sIDNode, sIDChannel, sIDNode, reg, "ID_TRANSLATED_FLD");
				snombrecampo = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(snombrecampo) + ": ";

				sprecision = oOperationsCPass.getItem(sIDNode, sIDChannel, sIDNode, reg, "PREC");
				sescala = oOperationsCPass.getItem(sIDNode, sIDChannel, sIDNode, reg, "SCALE");
				itipo = Double.valueOf(oOperationsCPass.getItem(sIDNode, sIDChannel, sIDNode, reg, "ID_M4_TYPE")).intValue();
				iPosCal = i + 2; // Este numero representa la posición en la cual se recibiría el calendario. 2 es el numero de input que hay antes.


				if ((itipo !=4) && (itipo !=5)) {
				%>
					<input id="<%=sidcampo%>" ref="<%=i%>" name="<%=sidcampo%>" maxlength="<%=sprecision%>" type="text" value="" placeholder="<%=snombrecampo%>">
				<%
				} else {
				// begin date
				String jsIsoDateFormat = "yyyy-MM-dd";
				if(prod == null || !prod.equals("mobile")){ %>
					<script type="text/javascript">
						var sformatofechas = '<%=jsIsoDateFormat%>';
						var g_ssepfechas = '-';
						 window.addEvent('domready', function() { 	
							  var oCalendar<%=iPosCal%> = new meta4Calendar({<%=sidcampo%>:sformatofechas});      										
						});
						</script>
				<%} // non mobile %>	
					<p id="<%=sidcampo%>Label"><%=snombrecampo%></p>
					<input id="<%=sidcampo%>" name="<%=sidcampo%>" type="date" value="" placeholder="<%=jsIsoDateFormat%>">
				<%
				} // end date
			} // end for
			%>
			<input id="buttonback" type="button" class="buttonForm" cds-ref="back-button" value="<%=Tran_shco_login_box.getProperty("login.Back")%>">
			<input id="buttonenter" type="button" class="buttonForm" cds-ref="send-button" value="<%=Tran_shco_login_box.getProperty("login.SendSoc")%>" onclick="javascript:CheckAndSubmit();">
		</form>
	</div>

</body>
</html>
<%
		oOperationsCPass.endTask();
		M4BootstrapSession.releaseBootstrapSession ( oSessionManager, zlang ); 
	} else {
		sUrlLoginComplete = "/tctools/cprequest/tc_login_wz_client_code.jsp";
		%>
		<script type="text/javascript">
			alert(login_NoDataM);
			document.location.href="<%=sUrlLoginComplete%>";
		</script>
	<%
	}
} else {
%>
	<script type="text/javascript">
		alert(login_ErrorConnectionSession);
		document.location.href="<%=sUrlLoginComplete%>";
	</script>
<%
}
%>