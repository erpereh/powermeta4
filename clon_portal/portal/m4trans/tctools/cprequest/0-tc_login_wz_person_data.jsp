<%-- [=====================================================]   
             
	@(#)FileVersion: 813.002.104
	@(#)FileDescription: Forgotten User/password. Change password  
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2016
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP3
	@(#)InternalName: tc_login_wz_person_data.jsp     
	@(#)Date: 10/05/2016

[=====================================================] --%>

<%@ page import="java.lang.*"%>
<%@ page import="com.meta4.common.cipher.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.taglib.util.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>

<% // 1 - headers: no cache, no clickjacking 
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
<%@ include file="/m4trans/shco_g0/0-shco_gen_taglib.jsp" %>
<%@ include file="/m4trans/shco_g0/0-shco_gen_lang.jsp" %>
<%@ include file="/m4trans/shco_g0/0-shco_login_box_trans.jsp" %>

<%-- JavaScript user interface --%>
<script type="text/javascript" language="Javascript1.5" src="/translations/tc_login_<%=zlanguser%>.js"></script>

<%  // 3 - obtain a session
    M4SessionManager oSessionManager = M4BootstrapSession.establishBootstrapSession (zlang);
    if (oSessionManager == null) {
    %>
	<script type="text/javascript">
		alert(login_ErrorConnection);
		document.location.href="<%=sUrlLoginComplete%>";
	</script>
    <%	
    }
    %>

<%  
    String sIdSoc = null;

    // Retrieving the token that comes from the email.
    String email =  null;
    String person = null;
    
    LinkedHashMap<String,String> tokenMap = null;
    String encrypted = M4SafeRequest.getParameter(request, "tks"); 
    
    // si vienes del e-mail (bugid 0295714) la sociedad viene por atributo de la sesión
    if (encrypted != null) 
    {
    	// vienes del e-mail
    	sIdSoc = (String)session.getAttribute("SOC_C_PASS");
    }
    else
    {
    	// vienes del código cliente
    	sIdSoc = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "SOC_C");
    	
    	if (sIdSoc == null) 
    	{
    		// vienes de resolución por DNS
    		sIdSoc = (String) session.getAttribute("SOC_DNS");
    	}
    }
     
    // 3 - verify the client code anyway    
    if (sIdSoc != null) 
    {
	// Convert it to upper case, trim the spaces, and remove non alphanumeric chars to avoid users from fiddling around
	sIdSoc = sIdSoc.toUpperCase().trim().replaceAll("[^a-zA-Z0-9]", "");
	
	// Validate (288972)
	int iCodeResult = validateClientCode(sIdSoc, oSessionManager);
	if (iCodeResult == 0) 
	{
		sUrlLoginComplete = "/tctools/cprequest/tc_login_wz_client_code.jsp";
		%>
		<script type="text/javascript">
		
		if (typeof(meta4) != "undefined" && typeof(meta4.mobile) != "undefined")
    		{
	    		meta4.ui.log.showMsg(login_NoDataM);
		} 
		else 
    		{
	    		alert(login_NoDataM);
		}
		document.location.href = "<%=sUrlLoginComplete%>";
		</script>
		<%	
	}
	else
	{	
    		// Memorize (bugid 288805)
    		session.setAttribute("SOC_C_PASS", sIdSoc );
    		session.setMaxInactiveInterval(86400); 
	}
    }

    try 
    {
    	tokenMap =  com.meta4.common.cipher.M4CipherUtil.decryptSecretsMap(encrypted, sIdSoc);
    	if (tokenMap != null) 
    	{
    		email =  tokenMap.get("email");
		person = tokenMap.get("idperson");
    	}
    }
    catch (Exception e){}

%>
<%@ include file="/m4trans/tctools/cpaction/0-shco_gen_bag_wz_cp.jsp" %>
<%!
	
	private int validateClientCode ( String ai_clientCode, M4SessionManager oSessionManager ) 
	{
 		M4i18nCategory _oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
		int iRet = -1;
		try {

			M4Operations m = new M4Operations (oSessionManager);
			
			String sM4Obj = "SRTC_CLIENT_CODE_VALIDATOR";
			String sNode  = "SRTC_CLIENT_CODE_VALIDATOR"; 			
			String sMethod = "VALIDATE";
			
			m.initTask("SESSION");
			m.beginJob();
			m.createData(sM4Obj, sM4Obj, null);
		    
			Hashtable<String, String> htArgs = new Hashtable<String, String>();
			htArgs.put("ID_ORGANIZATION_FILTER", ai_clientCode);

			m.method(sMethod, sM4Obj, sNode, sMethod, htArgs, false); 
			m.outputDef (sNode, sM4Obj + "!" + sNode + "[*]" );
		    
			m.endJob("");
				 
			StringBuffer sbServerRet = new StringBuffer();
			m.execMethod(sMethod, sbServerRet); 				
			iRet = (int)Double.parseDouble(sbServerRet.toString());
						
			return iRet;
	
		} 
		catch (Exception e) 
		{
			_oM4Log.error("°º¤ø,¸¸,ø¤º°` Problem in validateClientCode", e);
		} 
		
		_oM4Log.debug("°º¤ø,¸¸,ø¤º°` Success for " + ai_clientCode + ".");
		return iRet;
	}

%>


