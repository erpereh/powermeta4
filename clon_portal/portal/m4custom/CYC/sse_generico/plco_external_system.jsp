<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*, java.lang.Math"%>
<%@ page import="com.meta4.session.*, com.meta4.m4operations.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>

<%@ page import="com.meta4.common.m4cred.GenerateRedirectHTML" %>
<%@ page import="com.meta4.common.m4cred.M4Credential" %>
<%@ page import="com.meta4.common.m4cred.LogonConfigHTML" %>
<%@ page import="com.meta4.common.m4cred.ExtendedParamsHTML" %>

<%@ include file="/sse_generico/sse_generico_trans.jsp"%>

<%
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store"); 
  response.setDateHeader("Expires", -1); 

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("plco_external_system.jsp: entry");

  String sExternalURL = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_URL");
  oM4Log.debug("  External URL: " + sExternalURL);

  String sMinHeight = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_MIN_HEIGHT");
  try {
    Long.parseLong(sMinHeight);
    sMinHeight = sMinHeight + "px";
  } catch (NumberFormatException ex) {
    sMinHeight = "600px";
  }
  oM4Log.debug("  Min Height: " + sMinHeight);

  String sExternalURLQueryString = null;
  Enumeration oEnum = request.getParameterNames();
  while(oEnum.hasMoreElements()){
	String sKey = oEnum.nextElement().toString();
	String sValue = request.getParameter(sKey);
    oM4Log.debug("    Key: " + sKey);
    oM4Log.debug("    Value: " + sValue);
	if (!sKey.equals("M4_URL") && !sKey.equals("M4_MIN_HEIGHT")){
		sValue = URLEncoder.encode(sValue, "UTF-8");
		oM4Log.debug("    Value encoded: " + sValue);
		if (sExternalURLQueryString == null){
			sExternalURLQueryString = "?";
		}
		else{
			sExternalURLQueryString += "&";
		}
		sExternalURLQueryString += (sKey + "=" + sValue);
	}
  }
  oM4Log.debug("  sExternalURLQueryString: " + sExternalURLQueryString);

  M4SessionManager m4Session = M4Context.getSession(request);
  %><m4:startpage m4task="SCH_SESSION"/>
    <m4:beginjob/>
      <m4:datadef m4o="SCH_SESSION" m4name="SCH_SESSION"/>
      <m4:outputdef m4alias="ROOT_SESSION" m4object="SCH_SESSION" node="ROOT_SESSION" records="*"/>
    <m4:endjob/>      
    <m4:item m4name="ROOT_SESSION:SCH_SESSION!ROOT_SESSION[0].ID_APP_USER" m4varname="sUsr"/>
    <m4:item m4name="ROOT_SESSION:SCH_SESSION!ROOT_SESSION[0].ID_DEBUG_USER" m4varname="sDebugUsr"/>
  <m4:endpage/><%
  oM4Log.debug("  User APP: " + sUsr);
  oM4Log.debug("  User Debug: " + sDebugUsr);
  if ((sDebugUsr != null) && !sDebugUsr.equals("")){
    sUsr = sDebugUsr;
    oM4Log.debug("  Application User replaced by Debug User!");
  }

  int iLanguageId = (int) m4Session.getLanguageID(); //get language from session
  String sLang = String.valueOf(iLanguageId);
  oM4Log.debug("  Lang: " + sLang);

  String sPathTempMap = m4Session.getPathTempMapping();
  oM4Log.debug("  Path temp Map: " + sPathTempMap);
  
  String sSubSession = "PLCO_SSO_PARAMS";
  String sMeta4Object = "PLCO_SSO_PARAMS";
  String sNodeMain = "PLCO_SSO_PARAMS";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";
  String sMethodLoad = sDataDefMain + ".PLCO_MTD_LOAD";
%>

<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
   <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>
   <m4:exec m4method="<%=sMethodLoad%>"></m4:exec>
   <m4:outputdef m4alias="<%=sNodeMain%>">
     <m4:param name="M4NAME0" value="<%=sOutputDefMain%>"/>
   </m4:outputdef>
</m4:job>

<%
  int iCount = 0;
  boolean bError = false;
  String sErrorMessage = "";
  try {
    M4Operations m = new M4Operations(request);
    iCount = m.getCount(sNodeMain, sMeta4Object, sNodeMain);
  } catch(Exception e) {}

  if (iCount > 0) {
    String sPwd12 = ""; 
    String sBaseURL = ""; 
    String sServlet = "";
    String sInitURI = "";
    String sPathFile12 = "";
	String sDefaultLanguageID = "";
	Integer iConnectionOK = new Integer(0);
%>
    <m4:item outputdef="<%=sNodeMain%>" item="PLCO_FILE_P12_PASSWORD" var="sPwd12" htmlsafe="true"/> 
    <m4:item outputdef="<%=sNodeMain%>" item="PLCO_SS_BASE_URL" var="sBaseURL" htmlsafe="true"/> 
    <m4:item outputdef="<%=sNodeMain%>" item="PLCO_SS_SERVLET" var="sServlet" htmlsafe="true"/> 
    <m4:item outputdef="<%=sNodeMain%>" item="PLCO_SS_INITIAL_URI" var="sInitURI" htmlsafe="true"/> 
    <m4:item outputdef="<%=sNodeMain%>" item="PLCO_FILE_P12" var="sPathFile12" htmlsafe="true"/> 
    <m4:item outputdef="<%=sNodeMain%>" item="PLCO_ID_DEFAULT_LANGUAGE" var="sDefaultLanguageID" htmlsafe="true"/> 
    <m4:item outputdef="<%=sNodeMain%>" item="PLCO_IND_CONNECTION_OK" var="iConnectionOK" vartype="Integer"/> 
<%

	if (iConnectionOK == 1) {

		oM4Log.debug("  Path file .p12: " + sPathFile12);
		if (sPathFile12.equals("")) {
		  //error: file not found
		  bError = true;
		}

		if (sPwd12.equals("")) {
		  //error: pwd not found
		  bError = true;
		}

		oM4Log.debug("  Base URL: " + sBaseURL);
		if (sBaseURL.equals("")) {
		  //error: base URL not found
		  bError = true;
		}

		if (sServlet.equals("")) {
		  //default value
		  sServlet = "/servlet/login"; 
		}
		oM4Log.debug("  Servlet: " + sServlet);

		if (sInitURI.equals("")) {
		  //default value
		  sInitURI = "/servlet/CheckSecurity/JSP/sse_generico/generico_invisible.jsp"; 
		}
		oM4Log.debug("  Init URI: " + sInitURI);
		
		oM4Log.debug("  Default lang: " + sDefaultLanguageID);
		if (!sDefaultLanguageID.equals("")) {
			//Use if available, otherwise use session value
			sLang = sDefaultLanguageID;
		}
		oM4Log.debug("  Applied lang: " + sLang);

		if (!bError) {

		  String sCredential = "";
		  String sEncodedCredential = ""; 

		  try {

			M4SessionCl m4SessionCl = M4Context.getM4SessionCl(request);
			m4SessionCl.putBagEntries("ExternalSystem", sBaseURL + sServlet);

			M4Credential oCredGenT= new M4Credential(); 
			sCredential = oCredGenT.GenerateM4Credential(sPathFile12, sPwd12, sUsr, sLang, 60, 600); 

			// NONE  
			LogonConfigHTML oLogonConfig = LogonConfigHTML.NONE; 

			ExtendedParamsHTML oExtParams = new ExtendedParamsHTML(); 
			oExtParams.setLogonConfig(oLogonConfig);

			Hashtable htDefaultExtraParams = new Hashtable ();
			htDefaultExtraParams.put("PX_MIN_HEIGHT", sMinHeight); 
			htDefaultExtraParams.put("SHOW_TEXT", "0");
			
			if (sExternalURLQueryString != null){
			    sExternalURLQueryString = URLEncoder.encode(sExternalURLQueryString, "UTF-8");
				sExternalURL += sExternalURLQueryString;
			}
            oM4Log.debug("  External URL: " + sExternalURL);
		    sExternalURL = URLEncoder.encode(sExternalURL, "UTF-8");
            oM4Log.debug("  External URL encoded: " + sExternalURL);

			String s = GenerateRedirectHTML.generateExtended(sCredential, sUsr, sLang, sBaseURL, sServlet, sInitURI, sExternalURL, oExtParams, htDefaultExtraParams);

			// debug the generated HTML: path must be created
			// --------------------------------------------
			boolean bDebugMode = false; 
			if (bDebugMode) 
			{
			  FileWriter fstream = new FileWriter(sPathTempMap + "/output.htm");
			  BufferedWriter sfout = new BufferedWriter(fstream);
			  sfout.write(s);
			  sfout.flush();
			  sfout.close();    
			}
			// --------------------------------------------
			out.println(s);

		  } catch (Exception e) {
			bError = true;
			sErrorMessage = Tran.getProperty("Lable.es.err.exception") + "  " + e; 
		  }

		} else {
		  // no enough parameters
          bError = true;
		  sErrorMessage = Tran.getProperty("Lable.es.err.parametersMissing");
		}
	} else {
	  // connection to external system no possible
	  bError = true;
	  sErrorMessage = Tran.getProperty("Lable.es.err.noConnection");
	}
  } else {
    //external system not found
    bError = true;
    sErrorMessage = Tran.getProperty("Lable.es.err.noParameters");
  }
  if (bError) {
	//Output error message in user-friendly format
    %>
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">
	<html>
	<head>
	<title><%=Tran.getProperty("Lable.es.error")%></title>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	</head>
	<body>
	<table border="0" width="100%">
	  <tr><td class="titulofuncional"><%=Tran.getProperty("Lable.es.error")%></td></tr>
	  <tr>
		<td>&nbsp;</td>
		<td><div class="fuentedescripcion"><%=sErrorMessage%></div></td>
	  </tr>
	</table>
	</body>
	</html>
<%  }
  oM4Log.debug("plco_external_system.jsp: exit");
%>

</m4:page>