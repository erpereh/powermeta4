<%-- =========================================================
	@(#) FileVersion: 822.003.008
	@(#) FileDescription: shco_gen_bag_wz_cp.jsp
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

	function go_back() 
	{
		window.location = '/';
	}

</script>
<%
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

<!DOCTYPE html>
<html lang="<%=zlanguser%>"><!-- A11y -->
<head>

	<%@ include file="/mobile/include_mobile_forgetpass.jsp" %>	
	<% 
		if(prod != null && prod.equals("mobile")){
	%>
		<link rel="stylesheet" type="text/css" href="/style/tc_portal_fastlane_mobile.css">
	<%} else {%>
		<link rel="stylesheet" type="text/css" href="/style/m4reset.css">
		<link rel="stylesheet" type="text/css" href="/style/cds_ie11.css">
	<%}%>

	
		<!-- Metadata -->
		<meta http-equiv=" X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
		<style>
			body {
				background: #eff6fe !important;
			}

			@media screen and (max-width: 1024px) {
				.text-body-2 {
					font-size: 14px !important;
				}
			}

			@media (max-width: 960px) {
				#ad {
					background-repeat: no-repeat !important;
					position: absolute;
					top: 0;
					height: 100vh;
					left: auto;
					right: -178px;
					background-position: right -136px !important;
					width: calc(100% + 178px);
					background-size: 313px;
				}

				#loginBox {
					background-color: transparent;
					box-shadow: none;
				}

				.box {
					width: 100%;
					left: 0;
				}
			}
		</style>
	

	<%@ include file="/tctools/tc_login_gen_css.jsp" %>
	<title><%=Tran_shco_login_box.getProperty("login.ChangePass")%></title>
	<script type="text/javascript" src="/library/m4gen.js"></script>
	<script type="text/javascript" src="/library/m4gen_excep.js"></script>
	<script type="text/javascript" src="/library/<%=zLangFolder%>/functions_1.js"></script>
</head>


<body>
	<h1 id="main-header"><%=Tran_tc_login.getProperty("ChangePwd.Title")%></h1>
	<div id="outerDiv">
		<div class="box">
			<div id="loginBox" class="m4-shadow">
				<div id="logoPeopleNetCloud">
					<img id="imgLogo" alt="cegid" src="/images/cegid/cegid.png">
				</div>
				<form id="tc_login_wz_cp_send_data" name="tc_login_wz_cp_send_data" action="/tctools/cpaction/tc_login_wz_cp_send_data.jsp" method="post">
					<input type="hidden" id="offsite" name="offsite" value="">
					<input type="hidden" id="tks" name="tks" value="<%=tks%>">
					<div class="loginRow">
						<p class="text-h5"><%=Tran_shco_login_box.getProperty("login.ChangePassLine1")%></p>
					</div>
					<div class="loginRow">
						<p class="text-body-2"><%=Tran_shco_login_box.getProperty("login.ChangePassLine2")%></p>
					</div>
					<div class="loginRow">
						<p class="text-body-2"><%=Tran_shco_login_box.getProperty("login.ChangePassLine3")%></p>
					</div>
					
					<div class="loginRow">
						<p class="text-body-2"><% String emailboxdescription = Tran_shco_login_box.getProperty("login.ChangePassEmailLabel"); %></p>
					</div>
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
						<div class="loginRow">
							<input id="<%=sidcampo%>" name="<%=sidcampo%>" maxlength="<%=sprecision%>" type="text" value="" placeholder="<%=snombrecampo%>">
						</div>
						<%
						} else {
						// begin date
						String jsIsoDateFormat = "yyyy-MM-dd";
						if(prod == null || !prod.equals("mobile")){ %>
							<script type="text/javascript">
								var sformatofechas = '<%=jsIsoDateFormat%>';
								var g_ssepfechas = '-';	
								</script>									
						<%} // non mobile %>	
						<div class="loginRow labelCont">
							<p class="text-body-2"><%=snombrecampo%></p>
						</div>	
						<div class="loginRow">						
							<input id="<%=sidcampo%>" name="<%=sidcampo%>" type="date" value="" placeholder="<%=jsIsoDateFormat%>">
						</div>
						<%
						} // end date
					} // end for
					%>
					<!-- back button -->
					<%  
					String paint_back = Tran_shco_login_box.getProperty("login.Back");
					if (Tran_tc_login.getProperty("ChangePwd.BackHome")!= null) {
						paint_back = Tran_tc_login.getProperty("ChangePwd.BackHome");
					}
					%>
					<div class="loginRow text-center">
						<a id="back-button" href="javascript:go_back()" class="buttonForm-link text-body-2" data-cy="back-button"><%=paint_back%></a>
					</div>
					<!-- send button -->
					<div class="loginRow">
						<input id="send-button" type="button" class="buttonForm-primary" value="<%=Tran_shco_login_box.getProperty("login.SendSoc")%>" onclick="javascript:CheckAndSubmit();" data-cy="send-button">
					</div>
				</form>
			</div>
		</div>
		<div id="ad"></div>
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
}else{
%>
	<script type="text/javascript">
		alert(login_ErrorConnectionSession);
		document.location.href="<%=sUrlLoginComplete%>";
	</script>
<%
}
%>