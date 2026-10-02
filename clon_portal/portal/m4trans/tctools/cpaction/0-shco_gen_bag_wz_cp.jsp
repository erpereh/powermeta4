<%--
	@(#)FileVersion: 813.001.080
	@(#)FileDescription: Forgotten User/password. Change password
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2015
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP3Q2
	@(#)InternalName: shco_gen_bag_wz_cp.jsp
	@(#)Date: 15/09/2015
--%>

<%@ page import="com.meta4.m4operations.*" %>
<%@ page import="com.meta4.session.*" %>
 
<%-- JavaScript user interface --%>
<script type="text/javascript" src="/library/mootools.js"></script>
<script type="text/javascript" src="/library/meta4calendar.tec.js"></script>


<script type="text/javascript" language="Javascript1.5" src="/translations/tc_login_<%=zlanguser%>.js"></script>
<script type="text/javascript">
	// Changes the cursor to an hourglass
	function cursor_wait() {
		document.body.style.cursor = 'wait';
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
    	oOperationsCPass.createData(sIDChannel, sIDChannel, null);

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
			if (sAux == "" && document.tc_login_wz_cp_send_data.elements[i].name != "SERVER_URL_P"  && document.tc_login_wz_cp_send_data.elements[i].nodeName != "BUTTON" ) {
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
		}else{
			var oobjeto = document.forms["tc_login_wz_cp_send_data"].elements["SERVER_URL_P"];
			oobjeto.value = BuildURL();				   
			cursor_wait();
			document.tc_login_wz_cp_send_data.submit();		
		}
	}

	function BuildURL() {
		return location.protocol + "//" + location.host; 
	}					
</script>
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
	<%@ include file="/m4trans/tctools/0-tc_login_gen_css.jsp" %>
	<title><%=Tran_shco_login_box.getProperty("login.ChangePass")%></title>
	<script type="text/javascript" language="Javascript1.2"src="/library/m4gen.js"></script>
	<script type="text/javascript" language="Javascript1.5"src="/library/m4gen_excep.js"></script>
	<script type="text/javascript" language="Javascript1.5" src="/library/<%=zLangFolder%>/functions_1.js"></script>
</head>


<body>
	<div id="outerDiv">
		<div class="box">
			<div id="loginBox" class="m4-shadow">
				<form id="tc_login_wz_cp_send_data" name="tc_login_wz_cp_send_data" action="/tctools/cpaction/tc_login_wz_cp_send_data.jsp" method="post">
					<input type="hidden" id="SERVER_URL_P" name="SERVER_URL_P" value="">
					<input type="hidden" id="tks" name="tks" value="<%=tks%>">
					<div class="loginRow">
						<h3><%=Tran_shco_login_box.getProperty("login.ChangePassLine1")%></h3>
					</div>
					<div class="loginRow">
						<p><%=Tran_shco_login_box.getProperty("login.ChangePassLine2")%></p>
						<p><%=Tran_shco_login_box.getProperty("login.ChangePassLine3")%></p>
					</div>
					
					<p><% String emailboxdescription = Tran_shco_login_box.getProperty("login.ChangePassEmailLabel"); %></p>
					
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
 								window.addEvent('domready', function() { 	
      								var oCalendar<%=iPosCal%> = new meta4Calendar({<%=sidcampo%>:sformatofechas});      										
    							});
    							</script>									
						<%} // non mobile %>	
						<div class="loginRow labelCont">
							<p><%=snombrecampo%></p>
						</div>	
						<div class="loginRow">						
							<input class="meta4calendar" id="<%=sidcampo%>" name="<%=sidcampo%>" type="date" value="" 
							placeholder="<%=jsIsoDateFormat%>">
						</div>
						<%
						} // end date
					} // end for
					%>
	
					<div class="loginRow">
						<input type="button" class="buttonForm" value="<%=Tran_shco_login_box.getProperty("login.SendSoc")%>" onclick="javascript:CheckAndSubmit();">
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
	}else{    	
    	{
     		sUrlLoginComplete = "/tctools/cprequest/tc_login_wz_client_code.jsp";
     		
    	}
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
