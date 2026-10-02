<%-- =========================================================
	@(#) FileVersion: 819.005.004
	@(#) FileDescription: tc_login_wz_cp_send_data.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: Peoplenet
========================================================= --%>


<%@ page import="java.lang.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.taglib.util.*"%>
<%@ page import="com.meta4.m4operations.*" %>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>

<% // 1 - headers: no cache, no clickjacking 
   response.setHeader("Pragma", "no-cache"); 
   response.setHeader("Cache-Control", "no-store"); 
   response.setDateHeader("Expires", -1); 
   response.setHeader("X-Frame-Options", "SAMEORIGIN"); 
   
   M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
%>

<% // 2 - read information passed 
  String sServerURL = null;
  String sHostName = request.getServerName() ; 
  String sPortName = new Integer( request.getServerPort() ).toString() ; 

  boolean isHttpSecure =  request.isSecure(); 
  String sProtocol = "http";
  if ( isHttpSecure ) sProtocol = "https" ;
    
  sServerURL = sProtocol + "://" + sHostName + ":" + sPortName ;

  // Avoid SSL-offloading misconfigurations
  String offsite = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "offsite");
  if (offsite != null && !offsite.equals("")) {
	  try {
		  java.net.URL offsiteURL = new java.net.URL(new String(Base64.getDecoder().decode(offsite)));
		  // Without taking the host name from the user. The host name is taken from the virtual host
		  sServerURL = offsiteURL.getProtocol() + "://" + sHostName;
		  if (offsiteURL.getPort() != -1) sServerURL = sServerURL + ":" + new Integer(offsiteURL.getPort()).toString();
	  } catch (Exception e) {
		  oM4Log.warn("Ignored offloaded site parameter: " + offsite);
	  }
  }

  // configurable values
  String zlang = (String)session.getAttribute("LANG_TO_CHANGE_PASS"); 
  String zappprod = (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE"); 
  String sUrlLoginComplete = (String)session.getAttribute("URL_COMPLETE"); 
    
  if (zlang == null || zlang.equals("")) zlang = "2"; 
  if (zappprod == null || zappprod.equals("")) zappprod = "/style/tc_login.css"; 
  if (sUrlLoginComplete == null || sUrlLoginComplete.equals("")) sUrlLoginComplete =  "/";    
    
  // The important part
  String sRespValue = "-1";
  String sIdSocPass = (String)session.getAttribute("SOC_C_PASS");
%>
   
<% // 3 - remember the organization for the next time
  if (sIdSocPass != null && !sIdSocPass.equals(""))
  {  	
	  com.meta4.utilities.UtilTaglet.generatePersistentCookie("M4_ORGANIZATION", sIdSocPass, response);	
  }
%>


<% // 4 - passing the ptk
  String sPersonID = null;
  String sPtk = (String)session.getAttribute("PTK");
  if (sPtk != null && !sPtk.equals(""))
  {  	
	  try 
	  {
	  	sPersonID = M4PresentationUtilTaglib.secureDecrypt(request, sIdSocPass, sPtk);
	  } catch (Exception e){}
  }
%>


<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/shco_g0/shco_gen_lang.jsp" %>
<%@ include file="/shco_g0/shco_login_box_trans.jsp" %>

<script type="text/javascript">

// Returns the cursor to the default pointer
function cursor_clear() {
	document.body.style.cursor = 'default';
}
</script>

<%-- JavaScript user interface --%>
<script type="text/javascript" src="/translations/tc_login_<%=zlanguser%>.js"></script>
<script type="text/javascript" src="/mobile/translation/m4mobile_<%=zlanguser%>.js"></script>

<%
  com.meta4.session.M4SessionManager oSessionManager = null;
  com.meta4.session.M4SessionCl oSesion = null;
  int iTotRegCount = 0;

  // esto establece una sesión con WEBADM.
  oSessionManager = com.meta4.session.M4BootstrapSession.establishBootstrapSession (zlang); 
  if (oSessionManager == null) 
  {
	%>
	<script type="text/javascript">
		// alert("<%=Tran_shco_login_box.getProperty("login.ErrorConnection")%>");
		alert(login_ErrorConnection);		
		document.location.href="<%=sUrlLoginComplete%>";
	</script>
	<%	
  }


  if (oSessionManager != null) 
  {
	oSesion = oSessionManager.getSessionCl();

	if (oSesion != null)
	{
		String sIDChannel = "SRTC_FORGET_PWD";
		String sIDNode = "SRTC_FIND_FIELDS";
		String sIDMethod = "LOAD_FIELDS";
		String sIDNodeGen = "SRTC_FORGET_PWD";
		String sIDMethodGen = "GENERATE_INFORMATION";

		M4Operations oOperationsCPass = new M4Operations(oSessionManager);
		oOperationsCPass.initTask(sIDChannel);
		oOperationsCPass.beginJob();
		
		// This is not null if it is a multitenancy environment
		if ( sIdSocPass != null ) 
		{
	        	oOperationsCPass.createData(sIDChannel, sIDChannel, true, null);
	        }
	        else
	        {
	        	// BF0180637
	        	Hashtable htParamsOfCanal = new Hashtable(); 
				htParamsOfCanal.put("ID_ORGANIZATION_TYPE", "0"); 
				htParamsOfCanal.put("ID_ORGANIZATION", "" ); 
	
				oOperationsCPass.createData(sIDChannel, sIDChannel, true, htParamsOfCanal); 
	        }


		Hashtable htArgs = new Hashtable(); 
		if (sIdSocPass != null)
		{
			htArgs.put("ID_ORGANIZATION", sIdSocPass); 
		}
		else
		{
			htArgs.put("ID_ORGANIZATION", "");
		} 
		
		// hay que llamar a este metodo --> LOAD_FIELDS
		oOperationsCPass.method(sIDMethod, sIDChannel, sIDNode, sIDMethod, htArgs);

		oOperationsCPass.outputDef(sIDNode, sIDChannel + "!" + sIDNode + "[*]");
                oOperationsCPass.endJob("");

        String reg; 
		String sidcampo="";
		String sCampoValue = "";

            	iTotRegCount = oOperationsCPass.getCountInClient(sIDNode, sIDChannel, sIDNode);
		String sArrayPosValue [] = new String[iTotRegCount];

		for (int i=0; i<iTotRegCount; i++) 
		{
           		reg = new Integer(i).toString();
            	    	sidcampo = oOperationsCPass.getItem(sIDNode, sIDChannel, sIDNode, reg, "ID_FIELD");
				
				sCampoValue = com.meta4.taglib.util.M4SafeRequest.getParameter(request, sidcampo);
				sArrayPosValue[i] = sCampoValue;
		}
		oOperationsCPass.endTask();

		oOperationsCPass.initTask(sIDChannel);	
		oOperationsCPass.beginJob();
		oOperationsCPass.createData(sIDChannel, sIDChannel, false, null);
		for (int i=0; i<iTotRegCount; i++)
		{
			reg = new Integer(i).toString();
			oOperationsCPass.setItem(sIDChannel, sIDNode, reg, "VALUE_FIELD", sArrayPosValue[i]);
		}

		oOperationsCPass.endJob("");
		oOperationsCPass.endTask();

		oOperationsCPass.initTask(sIDChannel);	
		oOperationsCPass.beginJob();
		
		Hashtable aPriorityParams = new Hashtable();
		aPriorityParams.put("PATHESS", sServerURL);
		aPriorityParams.put("LANG", zlang);
		aPriorityParams.put("URL_COMPLETE", sUrlLoginComplete);
		aPriorityParams.put("PRODUCT", zappprod);
		
		// e-mail check
		if (sPersonID!= null) aPriorityParams.put("STD_ID_PERSON", sPersonID);

		oOperationsCPass.method(sIDMethodGen, sIDChannel, sIDNodeGen, sIDMethodGen, aPriorityParams);

		oOperationsCPass.endJob("");
		
		StringBuffer sb = new StringBuffer();

		oOperationsCPass.execMethod(sIDMethodGen, sb);
		sRespValue = sb.toString();

		oOperationsCPass.endTask();
		oOperationsCPass.logout();
		
			%>
	<script type="text/javascript">
		cursor_clear();
	</script>
	<%

		if (sRespValue.equals("2"))
		{
			%>
			<script type="text/javascript">
				alert(login_UserHHRR);	
				document.location.href="<%=sUrlLoginComplete%>";
			</script>
			<%
		}
		else
		{
		  if (sRespValue.equals("1"))
		  {
			%>
			<script type="text/javascript">
				alert(login_User);	
				document.location.href="<%=sUrlLoginComplete%>";
			</script>
			<%
		  }
		  else
		  {
			%>
			<script type="text/javascript">
				alert(login_NoDataM);	
				document.location.href="<%=sUrlLoginComplete%>";
			</script>
			<%
		  }
		}
	}
  }
%>
