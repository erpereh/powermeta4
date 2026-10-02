<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_toserver.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%@ page import="com.meta4.configuration.*,com.meta4.taglib.util.*,com.meta4.savparams.*" %>

<%
  com.meta4.session.M4SessionManager oSessionManager = null;
  com.meta4.session.M4SessionCl oSesion = null;
  
  oSessionManager = M4Context.getSession(request);
  
  if (oSessionManager != null) 
  {
		oSesion = oSessionManager.getSessionCl();
	
		if (oSesion != null)
		{
		
   		    String sIDChannel = "SNTC_TIMEOUT";
			String sIDNode = "SNTC_TIMEOUT";
			String sIDMethod = "PING";		

			M4Operations oOperationsTimeOutServer = new M4Operations(oSessionManager);
			oOperationsTimeOutServer.initTask(sIDChannel);
			oOperationsTimeOutServer.beginJob();
	        		oOperationsTimeOutServer.createData(sIDChannel, sIDChannel, null);
				// hay que llamar a este metodo 
				oOperationsTimeOutServer.method(sIDMethod, sIDChannel, sIDNode, sIDMethod, null);			
			oOperationsTimeOutServer.endJob("");		
		}
	}
%>