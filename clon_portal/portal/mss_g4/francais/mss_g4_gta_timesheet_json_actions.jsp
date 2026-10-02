<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page  import="java.io.*, java.util.*, java.net.*, com.meta4.session.*, com.meta4.m4operations.*, org.json.simple.*" %>
<%@ page import="com.meta4.valuetables.basic.*, com.meta4.utilities.*,com.meta4.configuration.*,com.meta4.taglib.util.*" %><%  

//************************* Actions in GTA: View timesheet of the employees *************************
// mss_g4_gta_timesheet_json_actions.jsp -->
// This page can be used in 3 ways (this is the ActionTp parameter)
// 1: Load the timesheet that match the filter
// 2: Send an email for an employee
// 3: Send an email for all the employees selected
// The return values are in JSON format
// Is called by mss_g4_gta_timesheet.jsp

// Example: 
// http://m4fras1e:8100/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_json_actions.jsp?ActionTp=1&DtStart=06-02-2012&ID_STATUS=&ID_HR=&OR_PER=&IdWu=__ALL__
// /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_json_actions.jsp?ActionTp=1&DtStart=06-02-2012&ID_STATUS=00&ID_HR=&OR_PER=&IdWu=__ALL__

	//we do NOT cache the page
	response.setDateHeader("Expires", -1);

	//parameters
	String sActionTp 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ActionTp") ;
	String sNumCurReg	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NumCurReg") ;	//for send an email for an employee
	String sRows 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"aRows");		//the rows for the checks in action 3
	
	//parameters for load/reload
	String sDtStart 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DtStart") ;
	String sID_STATUS 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_STATUS") ;
	String sIDHr	 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_HR") ;	
	String sOrPer 	 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"OR_PER") ;	
	String sIdWu 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWu") ;	
	

	//Method to execute depending in the ActionType
	String sMethod = "";
	if (sActionTp.equals("1")){
		sMethod="SSM_LOAD_TIMESHEET";
	}else if (sActionTp.equals("2")){
		sMethod="SSM_SEND_EMAIL";
	}else if (sActionTp.equals("3")){
		sMethod="SSM_SEND_EMAIL_ALL";
	}	
	
	//Variables to load the M4O
	String sChannelID   	= "SCO_GTA_GENERATE_EV"; 
	String sChannelAlias 	= sChannelID;
	String sRootNode 		= "SHCO_GN_ROOT";
	String sLogNode 		= "SHCO_GN_LOGS";
	String sLabelNode 		= "SHCO_GN_LABEL";	
	String sMainNode 		= "SRCO_GTA_RWD_PRES_EV";	
    String sRootNodeOutDef  = sChannelAlias + "!" + sRootNode + "[*]";	
	String sLogNodeOutDef   = sChannelAlias + "!" + sLogNode + "[*]";	
	String sOutDefLabel		= sChannelAlias + "!" + sLabelNode + "[*]";		
	String sOutDefMain 		= sChannelAlias + "!" + sMainNode + "[*]";	
	String sLoadMethod		= sChannelAlias + "!" + sRootNode + "." + sMethod;	
	String sComunRoot 		= sRootNode + ":" + sChannelAlias + "!" + sRootNode + "[&VAR.m4lix]" + ".";
	ArrayList except = new ArrayList(); //to store the exceptions catch in the page
	String nullStr = null; //null string

	
	//variables to return
	String  sLogErrorMsg = "";
	String  sIdHR      	 = "";	String  sOrHrPer   = "";	String  sDtStartRet = "";	
	String  sDtStartFilFix  = "";	String  sNmEmpl    = "";	String  sNMStatus    	= "";	
	String  sIDStatus    = "";	String  sIdRefMod  = "";
	String  sIdHRhinc    = "";  String  sOrHrPerhinc    = ""; 

	JSONObject objRet 		= new JSONObject();
	JSONArray listRet 		= new JSONArray();
	String sret = "";
	

	
%><m4:startpage m4task="<%=sChannelAlias%>"/><m4:beginjob/>
<m4:datadef m4o="<%=sChannelID%>" m4name="<%=sChannelAlias%>"/>
<m4:exec m4method="<%=sLoadMethod%>"><%
	//Arguments depending in the ActionType
	if (sActionTp.equals("1")){

	%><m4:param name="ARG_DT_START" value="<%=sDtStart%>"/>
	<m4:param name="ARG_ID_STATUS" value="<%=sID_STATUS%>"/>
	<m4:param name="ARG_ID_HR" value="<%=sIDHr%>"/>
	<m4:param name="ARG_OR_PER" value="<%=sOrPer%>"/>
	<m4:param name="ARG_ID_WU" value="<%=sIdWu%>"/><%	
	
	}else if (sActionTp.equals("2")){
	%><m4:param name="ARG_NUM_REG" value="<%=sNumCurReg%>"/><%	
	}	else if (sActionTp.equals("3")){
	%><m4:param name="ARG_NUM_REG" value="<%=sNumCurReg%>"/>
	  <m4:param name="ARG_LIST_CHECKED" value="<%=sRows%>"/><%	
	}	
%></m4:exec>
<m4:outputdef m4alias="<%=sRootNode%>"><m4:param name="m4name0" value="<%=sRootNodeOutDef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=sLogNode%>"><m4:param name="m4name0" value="<%=sLogNodeOutDef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=sLabelNode%>"><m4:param name="m4name0" value="<%=sOutDefLabel%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=sMainNode%>"><m4:param name="m4name0" value="<%=sOutDefMain%>"/></m4:outputdef>
<m4:endjob/><%
	
	//Count the registers
    int nCount = 0;		String sCount = "";
	int nLogCount = 0; 	String sLogCount = "";
	Integer nNumDecCurr;
	M4Operations oOperDef = new M4Operations(request);
	
    AbstractFormater oFmt = new DefaultFormater(request); // new SimpleFormater(null, null, null); //
    OperationsIterator cLabels = new OperationsIterator(oOperDef, oFmt, sLabelNode, sChannelID, sLabelNode);	
    OperationsData oLabelValues = cLabels.get();	
	
	//M4SessionManager oSess = (new M4Context()).getSession(request);
	//com.meta4.format.M4Format oFmt = oSess.getM4Format();

	if (sActionTp.equals("1")){
		try {
			nCount = oOperDef.getCount(sMainNode,sChannelAlias,sMainNode);
			sCount = String.valueOf(nCount);	
		
			//we loop the results
			for (int i = 0; i < nCount; i++ ){
				String sI= String.valueOf(i);
				sIdHR  			= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"STD_ID_HR");
				sIdHRhinc		= com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sIdHR);
				sOrHrPer 		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"STD_OR_HR_PERIOD");
				sDtStartRet	  	= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SSM_DT_START_STRING");
				sDtStartFilFix  = oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"DT_START_P");
				sNmEmpl  		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_GB_NAME");		
				sNMStatus		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_NM_STATUS_TIMESHEET");	
				sIDStatus		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_ID_STATUS_TIMESHEET_1");	
				sIdRefMod		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_ID_REF_MOD");
				
				//int management			
				if (sOrHrPer != ""){
					sOrHrPer     = sOrHrPer.replaceAll(".00000000","");
				}else {sOrHrPer="1";}
				sOrHrPerhinc	= com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sOrHrPer);				
				
				Integer nOrHrPer  = Integer.valueOf(sOrHrPer);

				JSONObject objListRow	= new JSONObject();
				objListRow.put("sIdHR",sIdHR);
				objListRow.put("sIdHRhinc",sIdHRhinc);
				objListRow.put("nOrHrPer",nOrHrPer);
				objListRow.put("sOrHrPerhinc",sOrHrPerhinc);
				objListRow.put("sDtStart",sDtStartRet);
				objListRow.put("sDtStartFilFix",sDtStartFilFix);
				objListRow.put("sNmEmpl",sNmEmpl);
				objListRow.put("sNMStatus",sNMStatus);
				objListRow.put("sIDStatus",sIDStatus);
				objListRow.put("sIdRefMod",sIdRefMod);

				listRet.add(objListRow);			
				
			}//end of: we loop the results

		} catch(Exception e) {except.add("Exception in M4Operations: "+e.getClass() +"\n with message !!!!: " + e.getMessage());}		
	}
	//logs
	nLogCount = oOperDef.getCount(sLogNode,sChannelAlias,sLogNode);
	sLogCount = String.valueOf(nLogCount);	
	sLogErrorMsg = "";
	if (nLogCount>0){
		for (int j = 0; j < nLogCount; j++ ){
			if (j!=0){sLogErrorMsg = "\n" + sLogErrorMsg;}
			String sJ = String.valueOf(j);
			sLogErrorMsg 	= sLogErrorMsg + oOperDef.getItem(sLogNode,sChannelAlias,sLogNode,sJ,"SHCO_LOG_TEXT");
			//sLoadErrorTp 	= oOperDef.getItem(sLogNode,sChannelAlias,sLogNode,"0","SHCO_LOG_TYPE");
		}
	}	
	
	//Final return
	objRet.put("ret",listRet);
	objRet.put("sLogErrorMsg",sLogErrorMsg);	

	sret = objRet.toString();	
%><%= sret %><m4:endpage/>