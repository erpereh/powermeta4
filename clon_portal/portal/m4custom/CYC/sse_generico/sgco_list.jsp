<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.util.*, java.util.Calendar, java.text.SimpleDateFormat"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
//Example: Work Unit
//http://srvcorpxp.meta4.com:8110/servlet/CheckSecurity/JSP/sse_generico/sgco_list.jsp?Meta4Object=SRCO_OR_MT_WORK_UNIT&NodeQBF=SRCO_OR_QBF_MT_WORK_UNIT&NodeTR=SRCO_OR_MT_WORK_UNIT&ListMethod=LIST&ResultItems=STD_ID_WORK_UNIT,STD_N_WORK_UNIT,STD_ID_WU_TYPE,STD_N_WU_TYPE,STD_DT_START,STD_DT_END&SRCO_OR_QBF_MT_WORK_UNIT.STD_N_WORK_UNIT=&ListMethodArguments=ARG_STD_ID_WORK_UNIT

//Example: Work Location
//http://srvcorpxp.meta4.com:8110/servlet/CheckSecurity/JSP/sse_generico/sgco_list.jsp?Meta4Object=SRCO_OR_MT_WORK_LOCAT&NodeQBF=SRCO_OR_QBF_MT_WORK_LOCAT&NodeTR=SRCO_OR_MT_WORK_LOCAT&ListMethod=LIST&ResultItems=STD_ID_WORK_LOCATION,STD_N_WORK_LOCATION&SRCO_OR_QBF_MT_WORK_LOCAT.STD_N_WORK_LOCATION=&ListMethodArguments=ARG_STD_ID_WORK_LOCATION

//Example: Positions of work unit OC025
//http://srvcorpxp.meta4.com:8110/servlet/CheckSecurity/JSP/sse_generico/sgco_list.jsp?Meta4Object=SRCO_OR_MT_POSITION&NodeQBF=SRCO_OR_QBF_MT_POSITION&NodeTR=SRCO_OR_MT_POSITION&ListMethod=SCO_LIST_WITH_WU&ResultItems=SCO_ID_POSITION,SCO_NM_POSITION,SCO_COMPL_POS&SRCO_OR_QBF_MT_POSITION.SCO_ID_POSITION=&ListMethodArguments=ARG_SCO_ID_POSITION,ARG_SCO_ID_WORK_UNIT&ListMethodValues=,OC025&AppStart=*&AppEnd=*

//Example: sub geo div
//http://srvcorpxp.meta4.com:8110/servlet/CheckSecurity/JSP/sse_generico/sgco_list.jsp?Meta4Object=SRCO_OR_MT_SUB_GEO_DIV&NodeQBF=SRCO_OR_QBF_MT_SUB_GEO_DIV&NodeTR=SRCO_OR_MT_SUB_GEO_DIV&ListMethod=LIST&ResultItems=STD_ID_SUB_GEO_DIV,STD_N_SUB_GEO_DIV,STD_N_GEO_DIV,STD_N_COUNTRY&ListMethodArguments=ARG_STD_ID_COUNTRY,ARG_STD_ID_GEO_DIV,ARG_STD_ID_SUB_GEO_DIV&ListMethodValues=FR,75

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("ssco_list: entry");

  //Dynamic input parameters
  Enumeration eParameterNames = request.getParameterNames();
  String sParameterName = "";
  String sParameterValue = "";
  String sFullItemName = "";

  //Identify entry parameters
  // - Meta4Object
  // - NodeQBF
  // - NodeTR
  // - ListMethod
  // - SecondaryTI      (optional)
  // - AppStart       (format: yyyy-MM-dd or dd-MM-yyyy; optional)
  // - AppEnd         (format: yyyy-MM-dd or dd-MM-yyyy; optional)
  // - ListMethodArguments  (separated by comma)
  // - ListMethodValues   (separated by comma) - values related to arguments (paired by position, missing values: '', additional values ignored)
  // - ResultItems      (separated by comma)
  // - QBF Items: Dynamic; format "NodeQBF.Item" (e.g. "SRCO_OR_QBF_MT_WORK_UNIT.STD_N_WORK_UNIT")
  // - MaxRecords

  String ai_sMeta4Object = "";
  String ai_sNodeQBF = "";
  String ai_sNodeTR = "";
  String ai_sListMethod = "";
  String ai_sSecondaryTI = "";
  String ai_sAppStart = "";
  String ai_sAppEnd = "";
  String ai_sListMethodArguments = "";
  String ai_sListMethodValues = "";
  String ai_sResultItems = "";
  String ai_sMaxRecords = "";
  boolean bAppStart = false;
  boolean bAppEnd = false;

  //Loop through collection and identify fixed parameters
  while(eParameterNames.hasMoreElements()){
    sParameterName = (String)eParameterNames.nextElement();
    sParameterValue =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,sParameterName);
    oM4Log.debug("# Parameter: " + sParameterName + " = '" + sParameterValue + "'");
    if(sParameterName.equals("Meta4Object")){
      // Meta4Object
      ai_sMeta4Object = sParameterValue;
      oM4Log.debug("# ai_sMeta4Object: " + ai_sMeta4Object);
    }else if(sParameterName.equals("NodeQBF")){
      // QBF Node
      ai_sNodeQBF = sParameterValue;
      oM4Log.debug("# ai_sNodeQBF: " + ai_sNodeQBF);
    }else if(sParameterName.equals("NodeTR")){
      // TR Node
      ai_sNodeTR = sParameterValue;
      oM4Log.debug("# ai_sNodeTR: " + ai_sNodeTR);
    }else if(sParameterName.equals("ListMethod")){
      // List Method
      ai_sListMethod = sParameterValue;
      oM4Log.debug("# ai_sListMethod: " + ai_sListMethod);
    }else if(sParameterName.equals("SecondaryTI")){
      // Secondary TI
      ai_sSecondaryTI = sParameterValue;
      oM4Log.debug("# ai_sSecondaryTI: " + ai_sSecondaryTI);
    }else if(sParameterName.equals("AppStart")){
      // App Start
      ai_sAppStart = sParameterValue;
      bAppStart = true;
      oM4Log.debug("# ai_sAppStart: " + ai_sAppStart);
    }else if(sParameterName.equals("AppEnd")){
      // App End
      ai_sAppEnd = sParameterValue;
      bAppEnd = true;
      oM4Log.debug("# ai_sAppEnd: " + ai_sAppEnd);
    }else if(sParameterName.equals("ListMethodArguments")){
      // List Method Arguments
      ai_sListMethodArguments = sParameterValue;
      oM4Log.debug("# ai_sListMethodArguments: " + ai_sListMethodArguments);
    }else if(sParameterName.equals("ListMethodValues")){
      // List Method Values
      ai_sListMethodValues = sParameterValue;
      oM4Log.debug("# ai_sListMethodValues: " + ai_sListMethodValues);
    }else if(sParameterName.equals("ResultItems")){
      // Result Items
      ai_sResultItems = sParameterValue;
      oM4Log.debug("# ai_sResultItems: " + ai_sResultItems);
    }else if(sParameterName.equals("MaxRecords")){
      // Maximum number of records
      ai_sMaxRecords = sParameterValue;
      oM4Log.debug("# ai_sMaxRecords: " + ai_sMaxRecords);
    }
  }

  //Concert dates to ISO (yyyy-MM-dd); if date is null, full date range applied; if date is *, today's date is used
  Calendar cCalendar = Calendar.getInstance();
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
  String sToday = dateFormat.format(cCalendar.getTime());
  String sAppStart = null;
  String sAppEnd = null;
  if(bAppStart){
    if(ai_sAppStart == null || ai_sAppStart.equals("")){
      sAppStart = "1800-01-01"; //Apply full date reange
    }else{
      if(ai_sAppStart.equals("*")){
        sAppStart = sToday;   //Apply todays date
      }else if(ai_sAppStart.charAt(2) == '-'){
        String[] sDateComponents = ai_sAppStart.split("-");
        sAppStart = sDateComponents[2] + "-" + sDateComponents[1] + "-" + sDateComponents[0];
      }else{
        sAppStart = ai_sAppStart;
      }
    }
    oM4Log.debug("# sAppStart: " + sAppStart);
  }
  if(bAppEnd){
    if(ai_sAppEnd == null || ai_sAppEnd.equals("")){
      sAppEnd = "4000-01-01"; //Apply full date reange
    }else{
      if(ai_sAppEnd.equals("*")){
        sAppEnd = sToday; //Apply todays date
      }else if(ai_sAppEnd.charAt(2) == '-'){
        String[] sDateComponents = ai_sAppStart.split("-");
        sAppEnd = sDateComponents[2] + "-" + sDateComponents[1] + "-" + sDateComponents[0];
      }else{
        sAppEnd = ai_sAppEnd;
      }
    }
    oM4Log.debug("# sAppEnd: " + sAppEnd);
  }

  //Maximum number of records in result
  int iMaxRecords = 20;
  if(!ai_sMaxRecords.equals("")){
    iMaxRecords = Integer.parseInt(ai_sMaxRecords);
  }
  oM4Log.debug("# iMaxRecords: " + iMaxRecords);

  //M4Object access
  String sSubSession = "DynamicList";
  //Filter (QBF)
  String sQBFItem = ai_sMeta4Object + "!" + ai_sNodeQBF + ".STD_N_WORK_UNIT";
  //List (TR)
  String sMethodListAlias = "ListMethod";
  String sResultList = "";
  String sOutputDefList = ai_sMeta4Object + "!" + ai_sNodeTR + "[0-" + ai_sMaxRecords + "]";
  //List method arguments and values
  String[] saListMethodArgument = ai_sListMethodArguments.split(",");
  int iListMethodArguments = saListMethodArgument.length;
  String[] saListMethodValue = ai_sListMethodValues.split(",");
  int iListMethodValues = saListMethodValue.length;
  //Result
  String[] saResultItem = ai_sResultItems.split(",");
  int iResultItems = saResultItem.length;
%>
<m4:page subsessionid="<%=sSubSession%>">
<m4:job>
  <m4:datadef m4name="<%=ai_sMeta4Object%>" m4o="<%=ai_sMeta4Object%>"/>
  <m4:exec m4object="<%=ai_sMeta4Object%>" node="<%=ai_sNodeTR%>" method="Unload"/>
<%  //Reset collection with input parameters and pass the QBF items
  eParameterNames = request.getParameterNames();
  while(eParameterNames.hasMoreElements()){
    sParameterName = (String)eParameterNames.nextElement();
    //Valiate parameter name (should start with "NodeQBF." to be processed)
    if(sParameterName.indexOf(ai_sNodeQBF + ".") == 0){
      sParameterValue = com.meta4.taglib.util.M4SafeRequest.getParameter(request,sParameterName);
      sFullItemName = ai_sMeta4Object + "!" + sParameterName;
      %><m4:setitems><m4:param name="<%=sFullItemName%>" value="<%=sParameterValue%>"/></m4:setitems><%
    }
  }%>
  <m4:exec m4object="<%=ai_sMeta4Object%>" node="<%=ai_sNodeQBF%>" method="APPLY_FILTER"/>
  <m4:exec m4object="<%=ai_sMeta4Object%>" node="<%=ai_sNodeTR%>" method="<%=ai_sListMethod%>" alias="<%=sMethodListAlias%>">
    <m4:param name="ARG_SEC_TI" value="<%=ai_sSecondaryTI%>"/>
    <%if(bAppStart){%><m4:param name="SYS_APP_INI" value="<%=sAppStart%>"/><%}%>
    <%if(bAppEnd){%><m4:param name="SYS_APP_FIN" value="<%=sAppEnd%>"/><%}%>
    <%for(int i = 0; i < iListMethodArguments; i++){//Pass additional LIST arguments w/o value
      String sValueArgument = "";
      if(iListMethodValues > i){
        sValueArgument = saListMethodValue[i];
      }%>
      <m4:param name="<%=saListMethodArgument[i]%>" value="<%=sValueArgument%>"/>
    <%}%>
  </m4:exec>
  <m4:outputdef m4alias="<%=ai_sNodeTR%>"><m4:param name="M4NAME0" value="<%=sOutputDefList%>"/></m4:outputdef>
</m4:job>
<m4:outputexec alias="<%=sMethodListAlias%>" var="sResultList"/>
<%oM4Log.debug("# sResultList: " + sResultList);%>

<%
//Generate JSON response (strings (keys and values) within doublequotes)
// Object with attribute "result" that is an array of objects; one entry per line, attributes correspond to input parameter ResultItems
out.print("{");
int iLastRecord = Integer.parseInt(sResultList);
out.print("\"lTotalRec\":"+ String.valueOf(iLastRecord) + ",");
if(iLastRecord > iMaxRecords){
  //Limit number of records of list to maximum
  iLastRecord = iMaxRecords - 1;
  out.print("\"limited\":true,");
}else{
  //Include all records in list
  iLastRecord -= 1;
  out.print("\"limited\":false,");
}
out.print("\"range\":[0,"+ String.valueOf(iLastRecord) + "],");
out.print("\"result\":[");%>
<m4:loop from="0" to="<%=String.valueOf(iLastRecord)%>"><%
  String sCurrentObject = m4lix.equals("0") ? "" : ",";
  sCurrentObject += "{";
  for(int i = 0; i < iResultItems; i++){
    String sValue = "";
    %><m4:item item="<%=saResultItem[i]%>" record="<%=m4lix%>" jsafe="true" outputdef="<%=ai_sNodeTR%>" var="sValue"/><%
    if(i > 0){sCurrentObject += ",";}
    sCurrentObject += "\"" + saResultItem[i] + "\":\"" + sValue + "\"";
  }
  sCurrentObject += "}";
  out.print(sCurrentObject);
  %>
</m4:loop>
<%out.print("]}");%>
</m4:page>
<%oM4Log.debug("ssco_list: exit");%>