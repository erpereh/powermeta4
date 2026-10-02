<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: mobile_version.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%-- [=====================================================]   
             
                @(#)FileVersion: 815.000.000
                @(#)FileDescription: Version JSP for mobile
                @(#)CompanyName: Meta4 Spain, S.A.
                @(#)LegalCopyright: (c)2017
                @(#)ProductName: PeopleNet KSystem
                @(#)ProductVersion: 8.1SP4
                @(#)InternalName: mobile_version.jsp    
                @(#)Date: 20/04/2016      

[=====================================================] --%>
<%@ page import="com.meta4.request.*, com.meta4.session.*, com.meta4.languages.*, com.meta4.m4operations.*"%>
<%@ page import="java.util.*, java.lang.*"%>
<%@ page import="com.google.gson.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>

<% // 1 - headers: no cache 
   response.setHeader("Pragma", "no-cache"); 
   response.setHeader("Cache-Control", "no-store"); 
   response.setDateHeader("Expires", -1); 
   response.setContentType("application/json");
%>

<% // 2 - produced the json
   String slang = String.valueOf(M4WebLanguages.getLanguageFromCookie(request)); 
   String json =  getMobileVersion(slang);
   out.print(json);
%>

<%!
	// getMobileVersion
	public static String getMobileVersion(String slang)
	{
		
		M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
		int iReturn = -1;
		String json = "";
		M4SessionManager m4session = null;
		try {

			m4session = M4BootstrapSession.establishBootstrapSession( slang ) ;
			M4Operations m = new M4Operations( m4session ); 

			String sM4Obj = "SAV_PARAMS";
			String sNode  = "SAV_PARAMS"; 
			String sMethod = "RET_VALUE";
			String sFinalReturnNode  = "FINAL_RETURN"; 

			m.initTask("SESSION_MOBILE");
			m.beginJob();
			
			boolean preserve = false; 
	    	boolean find = false; 	

	    	m.createData(sM4Obj, sM4Obj, null);
	    	Hashtable<String, String> savParamsArgs = new Hashtable<String, String>();
			savParamsArgs.put("ID_APLICATION", "CONFIGURATION");			
			savParamsArgs.put("ID_SECTION", "MOBILE");	
			savParamsArgs.put("ID_KEY", "");	
	    		   	    
			m.method(sMethod, sM4Obj, sNode, sMethod, savParamsArgs);
			m.outputDef(sNode, sM4Obj + "!" + sNode + "[*]");
			m.outputDef(sFinalReturnNode , sM4Obj + "!" + sFinalReturnNode  + "[*]");
    
			m.endJob();

			Hashtable<String, String> results = new Hashtable<String, String>();
			String key ="";
			String value = "";

			int iCountRoot = m.getCountInClient(sNode, sM4Obj, sNode);
			int iCount =  m.getCountInClient(sFinalReturnNode , sM4Obj, sFinalReturnNode);
			if (iCount > 0)
			{
				for (int i=0; i<=iCount -1; i++)
				{
					key = m.getItem(sFinalReturnNode , sM4Obj, sFinalReturnNode , String.valueOf(i), "ID_KEY");
					value = m.getItem(sFinalReturnNode , sM4Obj, sFinalReturnNode , String.valueOf(i), "APP_VALUE");
					if (!key.equals("FIREBASE_SERVER_KEY") && !key.equals("NOTIFICATION_CERT_PASS_IOS") )
					{
						results.put(key, value);
					}
				}
				Gson oGson = new GsonBuilder().disableHtmlEscaping().create();
				json = oGson.toJson(results);
			}						
		} 
		catch (Exception e) 
		{
			oM4Log.error("[Problem getting mobile application parameters]", e);
		} 
		
		if (m4session != null)
		{
			try {
				M4BootstrapSession.releaseBootstrapSession ( m4session, slang ) ;
			} 
			catch (Exception e) 
			{
				oM4Log.error("[Problem resolving version - sessions will not be released]", e);
			} 
		}
		
		return json;
	}
%>
