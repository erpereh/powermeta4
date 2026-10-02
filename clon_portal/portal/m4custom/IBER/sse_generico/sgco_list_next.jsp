<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.util.*, java.util.Calendar, java.text.SimpleDateFormat"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("sgco_list_next: entry");

  String sSubSession = "DynamicList";
  String sMeta4Object = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Meta4Object");
  oM4Log.debug("#  Meta4Object: " + String.valueOf(sMeta4Object));
  
  String sNodeTR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NodeTR");
  oM4Log.debug("#  NodeTR: " + String.valueOf(sNodeTR));

  String saResultItems = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ResultItems");
  String sDirection = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Direction");
  String saRange = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Range");
  String sMaxRecords = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"MaxRecords");
  String sTotalRecords = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TotalRecords");

  String[] saResultItem = saResultItems.split(",");
  int iResultItems = saResultItem.length;
  oM4Log.debug("#  iResultItems: " + String.valueOf(iResultItems));

  int iDirection = Integer.parseInt(sDirection);
  oM4Log.debug("#  iDirection: " + String.valueOf(iDirection));

  int iTotalRecords = Integer.parseInt(sTotalRecords);
  oM4Log.debug("#  iTotalRecords: " + String.valueOf(iTotalRecords));

  int iMaxRecords = 20;
  if(!sMaxRecords.equals("")){
    iMaxRecords = Integer.parseInt(sMaxRecords);
  }
  oM4Log.debug("#  iMaxRecords: " + String.valueOf(iMaxRecords));
  
  String[] saRangeRec = saRange.split(",");
  int iFRange = Integer.parseInt(saRangeRec[0]);
  int iLRange = Integer.parseInt(saRangeRec[1]);

  int iFirstRecord = 0;
  int iLastRecord = 0;
  if (iDirection == -2) {
    iFRange = 0;
    iLRange = iMaxRecords - 1;
    iFirstRecord = 1;
  }
  if (iDirection == 2) {
    if ((iTotalRecords%iMaxRecords) == 0) {
      iFRange = iTotalRecords - iMaxRecords; 
    } else {
     iFRange = iTotalRecords - (iTotalRecords%iMaxRecords);
    }
    iLRange = iTotalRecords - 1;
    iLastRecord = 1;
  }
  if (iDirection == 1) {
    iFRange = iLRange + 1;
    iLRange = iFRange + iMaxRecords - 1;
    if (iTotalRecords <= iLRange) {
      iLRange = iTotalRecords - 1;
      iLastRecord = 1;
    }
  }
  if (iDirection == -1) {
    iLRange = iFRange - 1;
    iFRange = iLRange - iMaxRecords + 1;
    if (0 >= iFRange) {
      iFRange = 0;
      iFirstRecord = 1;
    }
  }
  oM4Log.debug("#  iFRange: " + String.valueOf(iFRange));
  oM4Log.debug("#  iLRange: " + String.valueOf(iLRange));
  oM4Log.debug("#  iFirstRecord: " + String.valueOf(iFirstRecord));
  oM4Log.debug("#  iLastRecord: " + String.valueOf(iLastRecord));

  String sOutputDefList = sMeta4Object + "!" + sNodeTR + "[" + String.valueOf(iFRange) + "-" + String.valueOf(iLRange) + "]";

  String sValue = "";
%>
<m4:page subsessionid="<%=sSubSession%>">
<m4:job>
   <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>
   <m4:outputdef m4alias="<%=sNodeTR%>"><m4:param name="M4NAME0" value="<%=sOutputDefList%>"/></m4:outputdef>
</m4:job>
<%
out.print("{");
out.print("\"range\":["+ String.valueOf(iFRange) + "," + String.valueOf(iLRange) + "],");
out.print("\"bLastRec\":"+ String.valueOf(iLastRecord) + ",");
out.print("\"bFirstRec\":"+ String.valueOf(iFirstRecord) + ",");
out.print("\"result\":[");
%>
  <m4:loop from="<%=String.valueOf(iFRange)%>" to="<%=String.valueOf(iLRange)%>">
  <%
    String sCurrentObject = m4lix.equals(String.valueOf(iFRange)) ? "" : ",";
    sCurrentObject += "{";
    for(int i = 0; i < iResultItems; i++){
  %>
      <m4:item item="<%=saResultItem[i]%>" record="<%=m4lix%>" jsafe="true" outputdef="<%=sNodeTR%>" var="sValue"/>
  <%
      if(i > 0){sCurrentObject += ",";}
      sCurrentObject += "\"" + saResultItem[i] + "\":\"" + sValue + "\"";
    }
    sCurrentObject += "}";
    out.print(sCurrentObject);
  %>
  </m4:loop>
<%out.print("]}");%>  
</m4:page>
<%oM4Log.debug("sgco_list_next: exit");%>