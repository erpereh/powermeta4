<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: welcome_action.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ page import="com.meta4.request.*, com.meta4.session.*, com.meta4.languages.*, com.meta4.m4operations.*"%>
<%@ page import="java.util.*, java.lang.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>


<% // 1 - headers: no cache 
   response.setHeader("Pragma", "no-cache"); 
   response.setHeader("Cache-Control", "no-store"); 
   response.setDateHeader("Expires", -1); 

   M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
%>
<html>
	<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1" />
	<meta content="yes" name="apple-mobile-web-app-capable" />
	<link rel="apple-touch-icon" href="/mobile/icons/iconHome.png" />
	<link rel="stylesheet" href="/mobile/css/mobile.generic.css" />

	<script type="application/javascript" src="/library/jquery.js"></script>
	<script type="text/javascript">
				// jQuery.mobile.autoInitializePage = false;
				// jQuery.noConflict();					
    </script>
	<script type="application/javascript" src="/mobile/js/meta4.mobile.js"></script>
	<script type="application/javascript" src="/library/jquery.mobile.js"></script>
	<script type="text/javascript">	

			function loadCordova(deviceFrom)
			{	
				if(deviceFrom == 'android' || deviceFrom == 'ios')
				{
					var cordovaOsPath="";
					var cordovaOsPathLog="";
					if(deviceFrom == 'android')
					{
						cordovaOsPath="/mobile/cordova/android/cordova.js";
						var cordovaOsPathLog="Loaded cordova android.";
					}
					else if(deviceFrom == 'ios')
					{
						cordovaOsPath="/mobile/cordova/ios/cordova.js";
						var cordovaOsPathLog="Loaded cordova ios.";
					}
					
					jQuery.getScript(cordovaOsPath, function( data, textStatus, jqxhr )
					{
						console.log(cordovaOsPathLog);
					});	
				}	
			}

			function printMsgAndRedirect(errorCode, pageTo)
			{
				setTimeout(function()
				{
					// hide 
					meta4.mobile.windowLoading.hide();
					
					var translatedCode = meta4.ui.translate.getTranslate(errorCode);	
					meta4.ui.log.showMsg(translatedCode);		  		
				}, 100);	
				
				setTimeout(function()
				{
					// used to show wait icon... 
					window.location.href=pageTo;	 
				}, 6000);												
			}
	
			meta4.getCachedScript('/mobile/translation/select_platform_en.js');  
			meta4.getCachedScript('/mobile/translation/m4mobile_en.js');  

			document.addEventListener("deviceready", onDeviceReady, false);
			function onDeviceReady()
			{ 	
				// used to hide wait icon... 
			}
    </script>

<head>


</head>
<body>
	<div data-role="page" id="settings_page" data-theme="a">
<%  // 2 - read user input

    String sPreviousPage   = "/mobile/m4select_platform.html";
    String sMobileIndexURL = "/mobile/index.jsp";
	
    String clientkey, langid, slang, deviceFrom = null; 

    deviceFrom = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "deviceFrom");

    if (deviceFrom != null && !deviceFrom.equals("") && !deviceFrom.equals("null"))
    {
		if (deviceFrom.equals("android") || deviceFrom.equals("ios"))
		{	
			%>
			<script type="text/javascript">
				loadCordova('<%=deviceFrom%>');
			</script>				
			<%
		}
		else
		{
			deviceFrom = null;
		}

    	sMobileIndexURL = sMobileIndexURL + "?deviceFrom=" + deviceFrom;
		sPreviousPage = sPreviousPage + "?deviceFrom=" + deviceFrom;
    }

    slang = String.valueOf(M4WebLanguages.getLanguageFromCookie(request));           
    langid = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "langid");          
    if (langid != null && !langid.equals(""))
    {
    	slang = langid;
    	if (deviceFrom != null && !deviceFrom.equals("")  && !deviceFrom.equals("null"))
    	{
    		sMobileIndexURL = sMobileIndexURL + "&langid=" + slang;
    	}
    	else
    	{
    		sMobileIndexURL = sMobileIndexURL + "?langid=" + slang;
    	}
    }
	
    oM4Log.debug(" [mobile/welcome_action.jsp] sMobileIndexURL " + sMobileIndexURL);

    clientkey = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "clientkey");	
    
    if (clientkey == null || clientkey.equals(""))
    {
                oM4Log.warn(" [mobile/welcome_action.jsp] Client key was not introduced. Defaulting to production site");
                response.sendRedirect(sMobileIndexURL);
    }
    else
    {
    	
	   // first sanitize the client key by removing all non alphanumeric and converting to upper case.
	   clientkey = clientkey.toUpperCase().trim().replaceAll("[^a-zA-Z0-9]", "");
	   
	   // then look it up in the repository
	   HashMap<String, String> oPlatInfo = new HashMap<String, String>();
	   int iret = getPlatformURL (clientkey, deviceFrom, oPlatInfo, slang); 
	   if (iret != 0) 
	   {
			oM4Log.error(" [mobile/welcome_action.jsp] Cannot resolve the platform URL. Redirecting to this platform. ");			
			%>
			<script type="text/javascript">
				printMsgAndRedirect('cannotResolvePlatformURL', '<%=sPreviousPage%>');
			</script>				
			<%
	   }
	   else
	   {
			if (oPlatInfo.size() == 1) 
			{
				for (Map.Entry<String, String> entry : oPlatInfo.entrySet()) {
				sMobileIndexURL = entry.getValue();
			}
					   
	        oM4Log.trace(" [mobile/welcome_action.jsp] Redirecting!!! to the specified page " + sMobileIndexURL);
			response.sendRedirect(sMobileIndexURL);		   					   
			}
			else
			{
				if (oPlatInfo.size() == 0) 
				{
					oM4Log.error(" [mobile/welcome_action.jsp] There are no URLs for this client code. Returning to previous page "  );						
					%>
					<script type="text/javascript">
					printMsgAndRedirect('incorrectClientCode', '<%=sPreviousPage%>');
					</script>
					<%
				}
				else
				{
					oM4Log.error(" [mobile/welcome_action.jsp] There are multiple URLs for this client code. Please contact your administrator "  );
					%>
					<script type="text/javascript">					
					printMsgAndRedirect('cannotResolvePlatformURL', '<%=sPreviousPage%>');
					</script>					
					<%	
				}
			}
	   } 
}
                
%>
	</div>
</body>
</html>
<%! 

	// getPlatformURL
	public static int getPlatformURL(String sClientKey, String deviceFrom, HashMap<String, String> oPlatInfo, String slang)
	{
		M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
		int iReturn = -1;
		
		String sDestURI = null; 

		M4SessionManager m4session = null;
		try {


			m4session = M4BootstrapSession.establishBootstrapSession( slang ) ;
			M4Operations m = new M4Operations( m4session ); 

			String sM4Obj = "SRTC_PLAT_RESOLVE";
			String sNode  = "SRTC_PLAT_RESOLVE"; 
			String sMethod = "GET_URL";

			m.initTask("SESSION");
			m.beginJob();
			m.createData(sM4Obj, sM4Obj, false, null);

			m.load(sM4Obj);
			Hashtable<String, String> htArgs = new Hashtable<String, String>();
			htArgs.put("ARG_CLIENT_KEY", sClientKey);

			m.method(sMethod, sM4Obj, sNode, sMethod, htArgs );

			m.outputDef (sNode, sM4Obj + "!" + sNode+"[*]" );                 
			m.endJob("");

			int iPlatCount = m.getCountInClient(sNode, sM4Obj, sNode);  
			
			String sRealDestURI = null;
			for (int i=0; i<iPlatCount; i++)
			{                              
				String sIdPlatform  = m.getItem(sNode, sM4Obj, sNode, String.valueOf(i), "PLATFORM_TYPE"); 
				String sURLValue  = m.getItem(sNode, sM4Obj, sNode, String.valueOf(i), "URL");     
				
				java.net.URL url = new java.net.URL(sURLValue);
				oM4Log.debug("[mobile/welcome_action.jsp] selector url: " + url);		
		
				String querystring = url.getQuery(); 
				String path = url.getPath();

				String todesturi = null; 
				if (querystring != null)
				{
					todesturi = path + "&deviceFrom=" + deviceFrom; // with query string in the URL
				}
				else
				{
					todesturi = path + "?deviceFrom=" + deviceFrom; // without query string in the URL
				}

				oM4Log.debug("[mobile/welcome_action.jsp] sURIValue to be passed as desturi: " + todesturi);
				
				if (querystring != null)
				{
					sRealDestURI = sURLValue + "&" + "deviceFrom=" + deviceFrom + "&desturi=" + java.net.URLEncoder.encode(todesturi);
				}
				else
				{
					sRealDestURI = sURLValue + "?" + "deviceFrom=" + deviceFrom + "&desturi=" + java.net.URLEncoder.encode(todesturi);
				}
								
				oM4Log.debug("[mobile/welcome_action.jsp] sRealDestURI real redirection: " + sRealDestURI);				
				oPlatInfo.put(sIdPlatform, sRealDestURI); 
			}
			m.endJob();
			iReturn = 0;                               
		} 
		catch (Exception e) 
		{
			oM4Log.error("[Problem resolving platform]", e);
		} 
		
		if (m4session != null)
		{
			try {
				M4BootstrapSession.releaseBootstrapSession ( m4session, slang ) ;
			} 
			catch (Exception e) 
			{
				oM4Log.error("[Problem resolving platform - sessions will not be released]", e);
			} 
		}
		
		return iReturn;
	}

%>