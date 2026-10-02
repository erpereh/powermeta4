<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: ssco_dyn_orgchart_refresh_session.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ page import="com.meta4.m4operations.*, java.util.*, com.meta4.session.*, java.io.*" %>
<%@ page import="com.meta4.taglib.util.M4PresentationUtilTaglib.*" %>
<%@ page import="com.meta4.common.cipher.*" %>
<%@ page import="com.meta4.utilities.*" %>
<%@ page import="com.meta4.configuration.*" %>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>

<%
M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
oM4Log.debug("[*] ssco_dyn_orgchart_refresh_session: enter");
%>

<%

try 
{	

	//no cache
	response.setHeader("Pragma", "no-cache"); 
	response.setHeader("Cache-Control", "no-store, no-cache");
	response.setDateHeader("Expires", -1);

	//create m4session
	M4SessionManager m4session = M4Context.getSession(request);	
	M4Operations m = new M4Operations(request);
	
	if (m4session != null)
	{
	    //refresh ression in web server
	    oM4Log.debug("[*] ssco_dyn_orgchart_refresh_session: refresh session");
	    m4session.putLastAccesed (System.currentTimeMillis());

	    try {
		//get property SCH_SESSION to refresh session in app server.
		//init task and job
		m.initTask("SESSION");  
		m.beginJob();
		m.outputDef("SESSION","SESSION!ROOT_SESSION[FIRST]");      
		m.endJob();
		m.getItem ("SESSION","SESSION","ROOT_SESSION","0","LANGUAGE");	 
	    } catch (OperationException e) {
		oM4Log.error("Exception [*] ssco_dyn_orgchart_refresh_session: ", e);
	    } catch (Exception ee){
		oM4Log.error("Exception [*] ssco_dyn_orgchart_refresh_session: ", ee);
	    }

	}

	
    } catch (Exception e3){
		out.println(e3.getMessage());
		oM4Log.error("[*] ssco_dyn_orgchart_refresh_session: error", e3);
    }
%>
