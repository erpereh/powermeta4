<%@ page import="com.meta4.m4operations.*, java.util.*, com.meta4.session.*, java.io.*" %>
<%@ page import="com.meta4.taglib.util.M4PresentationUtilTaglib.*" %>
<%@ page import="com.meta4.common.cipher.*" %>
<%@ page import="com.meta4.utilities.*" %>
<%@ page import="com.meta4.configuration.*" %>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
oM4Log.debug("[*] ssco_dyn_save_type_orgchart: enter");
%>
<%
try 
{	
	
	
	//no cache
	response.setHeader("Pragma", "no-cache"); 
	response.setHeader("Cache-Control", "no-store, no-cache");
	response.setDateHeader("Expires", -1);

	//this param is used to save type orgchart or print pdf.
	String ai_serialize = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ParamSerialize");
		
	// encoding is conditional
	//String encoding = com.meta4.utilities.M4RequestEncoding.getAppEncoding();	
	response.setContentType("text/html;charset=UTF-8");
		 
	//create m4session
	M4SessionManager m4session = M4Context.getSession(request);	
	M4Operations m = new M4Operations(request);
		
	//init task and job
	m.initTask("DYNORGCHART");
	

	//select m4obj
	m.createData("SCO_DYN_CHART", "SCO_DYN_CHART", null);              
	
	//variable for arguments
	java.util.Hashtable htArgs = new java.util.Hashtable();                                                           
               
			                  																						
		int posi = 0;
		int posf = 1800;
		int type = 0;
		String send = "";  
		
		//serialization ship parts to avoid restriction of characters
		while (posi < ai_serialize.length()) {
			if (posf >= ai_serialize.length()) {
				//indicates that there are no more parts to send
				type = 1;
				posf = ai_serialize.length();
			}
			m.beginJob();
			//send to peopleNet		
			String part = "";
			part = ai_serialize.substring(posi, posf);
															
			htArgs.put("ARG_STRING", part); 				
			htArgs.put("ARG_TYPE", ""+type);  				
				 
			//save serializacion in m4obj
			m.method("SCO_SAVE_ANCHOR", "SCO_DYN_CHART", "SCO_DYN_CHART", "SCO_SAVE_ANCHOR", htArgs);
										
			m.outputDef("SCO_DYN_CHART", "SCO_DYN_CHART!SCO_DYN_CHART[*]");
			m.endJob("");
				 
			StringBuffer sb = new StringBuffer();
			//recupera resultado
			m.execMethod("SCO_SAVE_ANCHOR", sb);
			out.print("{sResult:" + "\"" + sb.toString() + "\"}");															
										
			posi = posi + 1800;
			posf = posf + 1800;
					 
		}
	}
	catch (Exception e) 
	{
		out.println(e.getMessage());
		oM4Log.error("[*] ssco_dyn_save_type_orgchart: error", e);
		
	}

%>
