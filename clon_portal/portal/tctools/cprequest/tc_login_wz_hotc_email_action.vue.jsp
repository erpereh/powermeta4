<%-- =========================================================
	@(#) FileVersion: 823.001.041
	@(#) FileDescription: tc_login_wz_hotc_email_action.vue.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2026
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ page import="java.lang.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.taglib.util.*"%>
<%@ page import="com.meta4.security.*"%>
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

<%  // 3 - read from the box
    String email = M4SafeRequest.getParameter(request, "email"); 
%>


<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/shco_g0/shco_gen_lang.jsp" %>
<%@ include file="/shco_g0/shco_login_box_trans.jsp" %>

<%-- JavaScript user interface --%>
<script type="text/javascript" language="Javascript1.5" src="/translations/tc_login_<%=zlanguser%>.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/mobile/translation/m4mobile_<%=zlanguser%>.js"></script>

<html>
<head>
  <%@ include file="/mobile/include_mobile_forgetpass.jsp" %>
  <%@ include file="/tctools/tc_login_gen_css.jsp" %>
  				
    				
</head>		     	
<body>

<% 	// 4 - validate the captcha	
	boolean validation = captchaValidation(request, response, "tc_login_wz_hotc_email_action_require", "tc_login_wz_hotc_email_action_retype");
	if (!validation)
	{
		// remember the email 
		if (email != null) session.setAttribute("tc_login_wz_hotc_email_action_data", email);

		
		/* fix 2062454 */
		%>
		<script type="text/javascript">
			alert(login_NoDataM);
			if (window.history.length > 1) {
				window.history.go(-1);
			} else {
				document.location.href="<%=sUrlLoginComplete%>";
			}
		</script>
		<%
		


		} 		
		else
		{

		

  M4SessionManager oSessionManager = M4BootstrapSession.establishBootstrapSession (zlang); 
  if (oSessionManager == null) 
  {
  %>
	<script type="text/javascript">
		alert(login_ErrorConnection);		
		document.location.href="<%=sUrlLoginComplete%>";
	</script>
  <%			
  }
  		   
  StringBuffer organization = new StringBuffer();
  StringBuffer idperson = new StringBuffer();
  
  String sorganization = ""; 
  String sidperson = ""; 
  
  int iCode = getOrganizationByEmail(oSessionManager, email, organization, idperson);


  //  1 --> Existe una sola persona con ese correo                         --> y sabemos la sociedad -> pasar adelante con email y con persona
  //  2 --> Mas de una persona con ese correo pero de la misma sociedad    --> y sabemos la sociedad -> pasar adelante con email y sin persona
    
  boolean emailOK = false;   
  switch (iCode) {
  	case 1:
    	// +1 Solo existe una persona con ese correo
		sidperson = idperson.toString();
		sorganization = organization.toString();
		emailOK = true; 
		break;
	case 2:
		// +1 Existe mas de una persona con ese correo, pero todas en la misma sociedad
		sorganization = organization.toString();
		emailOK = true;
		break;

	default:
		  // -2 --> Mas de una persona con ese correo pero de distintas sociedades --> mensaje need more info --> preguntar codigo cliente
		  // -1 --> El e-mail no se paso o la persona no tiene sociedad            --> mensaje need more info --> preguntar codigo cliente
		  //  0 --> No existen personas con ese correo                             --> mensaje need more info --> preguntar codigo cliente
		break;
   }
   
   if (emailOK)
   {
		session.setAttribute("SOC_C_PASS", sorganization );
			    			  	
		String strtks = "";
		LinkedHashMap<String,String> themap = new LinkedHashMap<String,String>();
		themap.put("email", email);
		if (sidperson != null)
		{
			themap.put("idperson", sidperson);
		}
		
		try 
		{
	  			strtks =  com.meta4.common.cipher.M4CipherUtil.encryptSecretsMap(themap, sorganization); // todo: some random value in the jsessionid
	  	} catch (Exception e) {}
	 	%>
  	   	<form id="tc_login_wz_person_data" name="tc_login_wz_person_data" action="/tctools/cprequest/tc_login_wz_person_data.jsp" method="post">
			<input type="hidden" id="tks" name="tks" value=""/>
	  	</form>
  	     <script type="text/javascript">
				function CheckAndSubmit()
				{
	  			   var bIsError = false;
	  			   var sErrorMessage = "Unknown error";				   
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
				     var tksObject = document.forms["tc_login_wz_person_data"].elements["tks"];
				     tksObject.value = "<%=strtks%>";				   
				     // cursor_wait();
				     document.tc_login_wz_person_data.submit();		
				     
				   }
				}
			CheckAndSubmit();		
    		</script>

  	    <% 
	}
	else
	{	  		
		%>
		<script type="text/javascript">
				
		document.location.href="/tctools/cprequest/tc_login_wz_client_code.jsp";
		</script>
		<%	  
			  	
			  	 	
	}
}
%>
</body>	     	   
</html>	
<%!  
M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
private int getOrganizationByEmail ( M4SessionManager session, String ai_stEmail, 
		StringBuffer aio_sbOrganization, StringBuffer aio_sbStdIdPerson ) 
{
		
	int iRet = -1; 
	
	if (ai_stEmail == null) 
		return iRet; 
	
	try {
		
		M4Operations m = new M4Operations (session);
		
		String sM4Obj = "SRTC_FORGET_PWD_BY_EMAIL";
		String sNode  = "SRTC_FORGET_PWD_BY_EMAIL"; 		
		String sMethod = "GET_ORGANIZATION_BY_EMAIL";
		
		m.initTask("SESSION");
		m.beginJob();
		m.createData(sM4Obj, sM4Obj, false, null);

		Hashtable<String, String> htArgs = new Hashtable<String, String>();
		htArgs.put("AI_EMAIL", ai_stEmail);

		m.method(sMethod, sM4Obj, sNode, sMethod, htArgs, false); 
		m.outputDef (sNode, sM4Obj + "!" + sNode + "[*]" );
	    
		m.endJob("");

		StringBuffer sbRet = new StringBuffer();
		m.execMethod(sMethod, sbRet); 
		
		iRet = (int)Double.parseDouble(sbRet.toString());	 
		
		if ( iRet == 1 || iRet == 2 )
			aio_sbOrganization.append(m.getItem(sNode, sM4Obj, sNode, "-1", "ID_ORGANIZATION"));
		
		if ( iRet == 1 )
			aio_sbStdIdPerson.append(m.getItem(sNode, sM4Obj, sNode, "-1", "STD_ID_PERSON")); 
		
		return iRet;

	} 
	catch (Exception e) 
	{
		oM4Log.error("Problem in getOrganizationByEmail", e);
	} 
	
	
	return iRet;
}

%>


  <%! 
		// if must go back, then return false. if stays in the page, return true.
  		public boolean captchaValidation (HttpServletRequest request, HttpServletResponse response, 
			String requireAttribute, String retypeAttribute) throws IOException {
  	  
		HttpSession session = request.getSession();	
		String captchaReceived = SecurityAutomationControl.getReceivedCaptcha(request);
		String captchaExpected = SecurityAutomationControl.getExpectedCaptcha(request);
		session.removeAttribute(com.google.code.kaptcha.Constants.KAPTCHA_SESSION_KEY);
		if (captchaReceived == null || captchaReceived.equals("")) {
			session.setAttribute(requireAttribute, "true");	
			return false; 		
		}
		else if (!captchaReceived.equals(captchaExpected)) {
			session.setAttribute(retypeAttribute, "true");
			return false; 
		}	
		else return true; 		
      } 
  %>
