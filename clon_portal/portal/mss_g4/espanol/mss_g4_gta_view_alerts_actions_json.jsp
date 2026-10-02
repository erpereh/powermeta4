<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page  import="java.io.*, java.util.*, java.net.*, com.meta4.session.*, com.meta4.m4operations.*, org.json.simple.*" %>
<%@ page import="com.meta4.valuetables.basic.*, com.meta4.utilities.*,com.meta4.configuration.*,com.meta4.taglib.util.*" %><%  

//************************* Actions in GTA: View alerts page *************************
// mss_g4_gta_view_alerts_actions_json.jsp
// This page can be used in 6 ways (this is the ActionTp parameter)
// 1: Load the alerts that match the filter
// 2: Copy the theoretical for all the alerts selected and realod the alerts (optional)
// 3: Copy the theoretical for one alert and realod the alerts (optional)
// 4: Save the changes in hidde and/or alert comment for all the alerts selected and realod the alerts (optional)
// 5: Save the configuration parameters (here we never reload)
// 6: Load the count of the alerts that match the filter (and the chart data)
// The return values are in JSON format
// Is called by mss_g4_gta_view_alerts.jsp

// Example: 
// http://m4fras1e:8100/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_view_alerts_actions_json.jsp?ActionTp=1&Reload=&NumCurReg=&DtStart=01-01-2012&DtEnd=31-01-2012&ALERT_TYPE=1&ID_ALERT=&AlSevLevel1=&AlSevLevel2=&ID_DISPLAY_CLASIFICATION=&HIDDEN_ALERTS=&ID_HR=&OR_PER=&IdWu=__ALL__
// http://m4fras1e:8100/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_view_alerts_actions_json.jsp?ActionTp=2&Reload=1&NumCurReg=&DtStart=01-01-2012&DtEnd=31-01-2012&ALERT_TYPE=1&ID_ALERT=&AlSevLevel1=&AlSevLevel2=&ID_DISPLAY_CLASIFICATION=&HIDDEN_ALERTS=&ID_HR=M1123&OR_PER=1&IdWu=__ALL__&aRows=[false,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true]

	//we do NOT cache the page
	response.setDateHeader("Expires", -1);

	//parameters
	String sActionTp 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ActionTp") ;
	String sReload 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Reload") ;	
	String sNumCurReg	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NumCurReg") ;	//for copy only the theoretical for one line
	String sRows 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"aRows");		//the rows to save in action 4 or the checks to save in action 5
	String sDefInc 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DefInc");
	sDefInc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan", sDefInc);
	
	//parameters for load/reload
	String sDtStart 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DtStart") ;
	String sDtEnd  		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DtEnd") ;
	String sALERT_TYPE 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ALERT_TYPE") ;
	String sID_ALERT 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_ALERT") ;
	String sAlSevLevel1	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"AlSevLevel1") ;
	String sAlSevLevel2	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"AlSevLevel2") ;
	String sID_DISPLAY_CLASIFICATION = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_DISPLAY_CLASIFICATION") ;
	String sHIDDEN_ALERTS 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HIDDEN_ALERTS") ;	
	String sIDHr	 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_HR") ;	
	String sOrPer 	 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"OR_PER") ;	
	String sIdWu 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWu") ;	
	String sLoadType = "";
	

	//Method to execute depending in the ActionType
	String sMethod = "";
	if (sActionTp.equals("1")){
		sMethod="SSM_LOAD_ALERTS";
		sLoadType = "LOAD";
	}else if (sActionTp.equals("2")){
		sMethod="SSM_COPY_THEO_ALL";
	}else if (sActionTp.equals("3")){
		sMethod="SSM_COPY_THEO";
	}else if (sActionTp.equals("4")){
		sMethod="SSM_SAVE_ALERT";
	}else if (sActionTp.equals("5")){
		sMethod="SSM_SAVE_PARAMS";
	}else if (sActionTp.equals("6")){
		sMethod="SSM_LOAD_ALERTS";
		sLoadType = "COUNT";
	}	
	
	//Variables to load the M4O
	String sChannelID   	= "SCO_GTA_VIEW_ALERTS"; 
	String sChannelAlias 	= sChannelID;
	String sRootNode 		= "SHCO_GN_ROOT";
	String sLogNode 		= "SHCO_GN_LOGS";
	String sLabelNode 		= "SHCO_GN_LABEL";	
	String sMainNode 		= "SCO_GTA_VIEW_ALERTS";	
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
	String  sIdHR      = "";	String  sOrHrPer   = "";	String  sDtStartRet   = "";	String  sNmEmpl    = "";	
	String  sComment   = "";	String  sIdRefMod  = "";	String  sIdWeekModel  = "";	String  sIdDayType = "";
	String  sTheorTS   = "";	String  sWorkTheo  = "";	String  sAbsCal       = "";	String  sAbs       = "";	
	String  sGrosClock = "";	String  sClockTS   = "";	String  sReal         = "";	String  sRealTS    = "";
	String  sIDAlert   = "";	String  sNMProp    = "";	String  sNmAlSevLevel = "";	String  sText      = "";
	String  sHide	   = "";	String  sSup       = "";	String  sCommentAlert = ""; String  sAlertClasification = "";
	
	String 	sWorkTheoString	= "";	String 	sAbsCalString= "";		String 	sAbsString	 = "";
	String 	sSupString	 	= "";	String 	sRealString	 = "";		String  sAlertIcon   = "";
	String sHasRequestInc	= "";	String 	sDtStartFix  = "";		String  sNumRegClock = "";
	String sIsClockChangeable = ""; String 	sIdHRhinc    = "";      String 	sOrHrPerhinc  = "";

	JSONObject objRet 		= new JSONObject();
	JSONArray listRet 		= new JSONArray();
	String sret = "";
	

	
%><m4:startpage m4task="<%=sChannelAlias%>"/><m4:beginjob/>
<m4:datadef m4o="<%=sChannelID%>" m4name="<%=sChannelAlias%>"/>
<m4:exec m4method="<%=sLoadMethod%>"><%
	//Arguments depending in the ActionType
	if (sActionTp.equals("1")||sActionTp.equals("6")){

	%><m4:param name="ARG_DT_START" value="<%=sDtStart%>"/>
	<m4:param name="ARG_DT_END" value="<%=sDtEnd%>"/>
	<m4:param name="ARG_ALERT_TYPE" value="<%=sALERT_TYPE%>"/>
	<m4:param name="ARG_ID_ALERT" value="<%=sID_ALERT%>"/>	
	<m4:param name="ARG_AL_SEV_LEVEL1" value="<%=sAlSevLevel1%>"/>	
	<m4:param name="ARG_AL_SEV_LEVEL2" value="<%=sAlSevLevel2%>"/>	
	<m4:param name="ARG_ID_DISPLAY_CLASIFICATION" value="<%=sID_DISPLAY_CLASIFICATION%>"/>
	<m4:param name="ARG_HIDDEN_ALERTS" value="<%=sHIDDEN_ALERTS%>"/>
	<m4:param name="ARG_ID_HR" value="<%=sIDHr%>"/>
	<m4:param name="ARG_OR_PER" value="<%=sOrPer%>"/>
	<m4:param name="ARG_ID_WU" value="<%=sIdWu%>"/>
	<m4:param name="ARG_LOAD_TYPE" value="<%=sLoadType%>"/><%	
	
	}else if (sActionTp.equals("2")){
	%><m4:param name="ARG_NUM_REG" value="<%=sNumCurReg%>"/>
	  <m4:param name="ARG_RELOAD" value="<%=sReload%>"/>
	  <m4:param name="ARG_LIST_CHECKED" value="<%=sRows%>"/><%	
	}	else if (sActionTp.equals("3")){
	%><m4:param name="ARG_NUM_REG" value="<%=sNumCurReg%>"/>
	  <m4:param name="ARG_RELOAD" value="<%=sReload%>"/><%	
	}	else if (sActionTp.equals("4")){
	%><m4:param name="ARG_NUM_REG" value="<%=sNumCurReg%>"/>
	  <m4:param name="ARG_RELOAD" value="<%=sReload%>"/>
	  <m4:param name="ARG_LIST_CHECKED" value="<%=sRows%>"/><%	
	}	else if (sActionTp.equals("5")){
	%><m4:param name="ARG_DEF_INC" value="<%=sDefInc%>"/>
	  <m4:param name="ARG_LIST_CHECKS" value="<%=sRows%>"/><%	
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

	if (sActionTp.equals("1")||sReload.equals("1")){
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
				sDtStartFix   	= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"DT_START");
				sNmEmpl  		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_GB_NAME");		
				sText  			= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_TEXT");	
				sComment		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_COMMENT");
				sIdRefMod		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_ID_REF_MOD");
				sIdWeekModel	= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_ID_WEEK_MDL");
				sIdDayType		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_ID_DAY_TYPE");
				sTheorTS		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_TRANSLATED_TIMESLOT_PER_VW");
				sWorkTheo		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_WORK_THEO");
				sAbsCal			= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_ABS_CAL");
				sAbs			= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_ABS");
				sSup			= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_SUP");
				sGrosClock		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SSM_GROSS_CLOCK_DEC_HOURS_S");
				sClockTS		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_TRANSLATED_TS_GROSS_CLOCK");
				sReal			= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_REAL_WORK");
				sRealTS			= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_TRANSLATED_TS_REAL");
				sIDAlert		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_ID_ALERT");
				sNMProp			= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_NM_PROPERTY");
				sNmAlSevLevel	= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_NM_ALERT_SEVERITY_LEVEL");
				sHide 			= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_HIDE");
				sCommentAlert	= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_COMMENT_ALERT");			
				sWorkTheoString	= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_WORK_THEO_STRING");
				sAbsCalString	= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_ABS_CAL_STRING");
				sAbsString		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_ABS_STRING");
				sSupString		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_SUP_STRING");
				sRealString		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_REAL_WORK_STRING");
				sAlertIcon		= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_HTML_ICON");
				sHasRequestInc	= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_HAS_REQUEST_INCIDENCES");
				sNumRegClock	= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_NUM_REG_CLOCK");	
				sIsClockChangeable	= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_IS_CLOCK_DEC_CHANGEABLE");				
				sAlertClasification	= oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,sI,"SCO_NM_DISPLAY_DLASIFICATION");
				
				//int management			
				if (sOrHrPer != ""){
					sOrHrPer     = sOrHrPer.replaceAll(".00000000","");
				}else {sOrHrPer="1";}
				sOrHrPerhinc	= com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sOrHrPer);				
				
				if (sNumRegClock != ""){
					sNumRegClock     = sNumRegClock.replaceAll(".00000000","");
				}else {sNumRegClock="0";}
				
				if (sWorkTheo != ""){
					sWorkTheo     = sWorkTheo.replaceAll("000000","");
				}else {sWorkTheo="0";}

				if (sAbsCal != ""){
					sAbsCal     = sAbsCal.replaceAll("000000","");
				}else {sAbsCal="0";}
				
				if (sAbs != ""){
					sAbs     = sAbs.replaceAll("000000","");
				}else {sAbs="0";}

				if (sSup != ""){
					sSup     = sSup.replaceAll("000000","");
				}else {sSup="0";}		

				if (sGrosClock != ""){
					sGrosClock     = sGrosClock.replaceAll("000000","");
				}else {sGrosClock="0";}	

				if (sReal != ""){
					sReal     = sReal.replaceAll("000000","");
				}else {sReal="0";}	

				if (sHide.equals("Y")){sHide = "1";}else {sHide  = "0";}			

				if (sIsClockChangeable.equals("1.00000000")){sIsClockChangeable = "1";}else {sIsClockChangeable = "0";}	
				
				if (sHasRequestInc.equals("1.00000000")){sHasRequestInc = "1";}else {sHasRequestInc = "0";}	

				sDtStartFix = sDtStartFix.replaceAll(" 00:00:00","");
				
				//variant management
				//if (sIdM4Tp.equals("8") && sValue.indexOf(".")!= -1){ //currency
				//	sValue = sValue.substring(0,sValue.indexOf(".")+nNumDecCurr.intValue()+1);
				//}
				
				Integer nOrHrPer  = Integer.valueOf(sOrHrPer);

				JSONObject objListRow	= new JSONObject();
				objListRow.put("sIdHR",sIdHR);
				objListRow.put("sIdHRhinc",sIdHRhinc);
				objListRow.put("nOrHrPer",nOrHrPer);
				objListRow.put("sOrHrPerhinc",sOrHrPerhinc);
				objListRow.put("sDtStart",sDtStartRet);
				objListRow.put("sDtStartFix",sDtStartFix);
				objListRow.put("sNmEmpl",sNmEmpl);
				objListRow.put("sText",sText);
				objListRow.put("sComment",sComment);
				objListRow.put("sIdRefMod",sIdRefMod);
				objListRow.put("sIdWeekModel",sIdWeekModel);
				objListRow.put("sIdDayType",sIdDayType);
				objListRow.put("sTheorTS",sTheorTS);
				objListRow.put("sWorkTheo",sWorkTheo);
				objListRow.put("sAbsCal",sAbsCal);
				objListRow.put("sAbs",sAbs);
				objListRow.put("sSup",sSup);
				objListRow.put("sGrosClock",sGrosClock);
				objListRow.put("sClockTS",sClockTS);
				objListRow.put("sReal",sReal);
				objListRow.put("sRealTS",sRealTS);
				objListRow.put("sIDAlert",sIDAlert);
				objListRow.put("sNMProp",sNMProp);
				objListRow.put("sNmAlSevLevel",sNmAlSevLevel);			
				objListRow.put("sHide",sHide);		
				objListRow.put("sCommentAlert",sCommentAlert);	
				objListRow.put("sWorkTheoString",sWorkTheoString);
				objListRow.put("sAbsCalString",sAbsCalString);
				objListRow.put("sAbsString",sAbsString);
				objListRow.put("sSupString",sSupString);
				objListRow.put("sRealString",sRealString);	
				objListRow.put("sAlertIcon",sAlertIcon);	
				objListRow.put("sHasRequestInc",sHasRequestInc);	
				objListRow.put("sNumRegClock",sNumRegClock);		
				objListRow.put("sIsClockChangeable",sIsClockChangeable);	
				objListRow.put("sAlertClasification",sAlertClasification);					

				listRet.add(objListRow);			
				
			}//end of: we loop the results

		} catch(Exception e) {except.add("Exception in M4Operations: "+e.getClass() +"\n with message !!!!: " + e.getMessage());}		
	}else if (sActionTp.equals("6")){
	
		String sChartData = oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,"-1","SCO_CHART_DATA");
		objRet.put("aChartData",sChartData);
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