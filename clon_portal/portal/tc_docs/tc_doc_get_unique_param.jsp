<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: tc_doc_get_unique_param.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*, java.lang.Math"%>
<%@ page import="com.meta4.m4operations.*, com.meta4.session.*, com.meta4.utilities.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>
<%@ page import="com.meta4.taglib.util.*"%>

<%
	M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
	oM4Log.debug("tc_doc_get_unique_param.jsp: entry");

	//no cache
	response.setHeader("Pragma", "no-cache"); 
	response.setHeader("Cache-Control", "no-store"); 
	response.setDateHeader("Expires", -1); 
		
	//create m4session
	M4SessionManager m4Session = M4Context.getSession(request);	
	M4Operations m = new M4Operations(request);
	
	String encryptID;
	
	if (m4Session != null)
	{		
		
		String sUUID = M4SafeRequest.getParameter(request,"uuID");
		oM4Log.debug("tc_doc_get_unique_param: receive: " + sUUID);
		  		
		String sSubSession = "M4JSAPI_SESSION";
			  	    
		String sAlias = "SRTC_DMS_GET_UNIQUE_PARAMS";
		String sMeta4Object = "SRTC_DMS_GET_UNIQUE_PARAMS";
		String sNode  = "SRTC_DMS_GET_UNIQUE_PARAMS"; 
		String sMethod = "GET";
		
	    m.initTask("M4JSAPI_SESSION");
			
		m.beginJob();
		
		m.createData(sAlias, sMeta4Object, null);
		
		//m.load(sMeta4Object);
		Hashtable<String, String> htArgs = new Hashtable<String, String>();
		htArgs.put("ARG_UUID", sUUID);
				
		
		m.method(sMethod, sAlias, sNode, sMethod, htArgs );
		
		//sNode:: alias del outputdef
		m.outputDef(sNode, sAlias + "!" + sNode+"[*]" );
		
		m.endJob("");
		
		//m.moveData(sNode, sAlias, sNode, "0");
		
		String id = m.getItem(sNode, sAlias, sNode, "", "PK");
			    			
		encryptID = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "tc_docs", id);											
		
		oM4Log.debug("tc_doc_get_unique_param.jsp: encryptID:"+encryptID);				
		
		out.print("{");
		out.print("\"encryptID\":\"" + encryptID + "\"");  
		out.print("}");
		oM4Log.debug("tc_doc_get_unique_param.jsp: exit");
		
	}
%>

<%--  <jsp:forward page="/servlet/CheckSecurity/JSP/sse_g0/pmco_get_unique_params2.jsp"> 
      <jsp:param name="IDDoc" value="he llegado"/>
</jsp:forward>  --%>


