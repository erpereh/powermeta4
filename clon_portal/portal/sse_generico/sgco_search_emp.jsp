<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*, java.lang.Math"%>
<%@ page import="com.meta4.m4operations.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("sgco_search_emp.jsp: entry");

  String sName = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name");
  if (sName == null) {sName="";}
  oM4Log.debug("  Name: " + sName);

  String sIdWorkUnit = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWorkUnit");
  if (sIdWorkUnit == null) {sIdWorkUnit="";}
  oM4Log.debug("  IdWorkUnit: " + sIdWorkUnit);

  int iEmployees = 0;

  String sSubSession = "SSCO_WHO_IS_WHO";
  String sMeta4Object = "SSCO_WHO_IS_WHO";

  String sNodeMain = "SSCO_MAIN_WHO";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";
  String sMoveMain = sNodeMain + ":" + sNodeMain + "[FIRST]";
  
  String sMethodLoad = sDataDefMain + ".SCO_MTD_FILTER";

  String sNodePhone = "SSCO_MAIN_WHO_PHONE";
  String sDataDefPhone = sMeta4Object + "!" + sNodePhone;
  String sOutputDefPhone = sDataDefPhone + "[*]";
  String sMovePhone = sNodePhone + ":" + sNodePhone + "[FIRST]";
  String sNodeAuxPhone = "";

  String sNodeEmail = "SSCO_MAIN_WHO_EMAIL";
  String sDataDefEmail = sMeta4Object + "!" + sNodeEmail;
  String sOutputDefEmail = sDataDefEmail + "[*]";
  String sMoveEmail = sNodeEmail + ":" + sNodeEmail + "[FIRST]";
  String sNodeAuxEmail = "";

  int iCount = 0;
  String sCountMain = "";
%>

<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
    <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>
    <m4:exec m4method="<%=sMethodLoad%>">
      <m4:param name="ARG_NAME" value="<%=sName%>"/>
      <m4:param name="ARG_ID_WORK_UNIT" value="<%=sIdWorkUnit%>"/>
    </m4:exec>
    <m4:exec node="<%=sNodeMain%>" alias="countMain" method="COUNT" m4object="<%=sMeta4Object%>"/>
 </m4:job>
 <m4:job>
    <m4:outputdef m4alias="<%=sNodeMain%>"><m4:param name="M4NAME0" value="<%=sOutputDefMain%>"/></m4:outputdef>
    <m4:outputexec var="sCountMain" alias="countMain"/>
  <%
      int i = 0;
      int iCountMain = 0;
      try {
          iCountMain = Integer.parseInt(sCountMain);
          for (i = 0; i < iCountMain; i++) {
             sMoveMain = sNodeMain + ":" + sNodeMain + "[" + String.valueOf(i) + "]";
             sNodeAuxPhone = sNodePhone + String.valueOf(i);
             sNodeAuxEmail = sNodeEmail + String.valueOf(i);
  %>
    <m4:move><m4:param name="<%=sSubSession%>" value="<%=sMoveMain%>"/></m4:move>
    <m4:outputdef m4alias="<%=sNodeAuxPhone%>"><m4:param name="M4NAME0" value="<%=sOutputDefPhone%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeAuxEmail%>"><m4:param name="M4NAME0" value="<%=sOutputDefEmail%>"/></m4:outputdef>
  <%
          }
      } catch(Exception e) {}
  %>
 </m4:job>

<%
  iCount = Integer.parseInt(sCountMain);

  //Generate JSON response (strings (keys and values) within doublequotes)
  out.print("{");
  
  String slblFound = "";

  %><m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_FOUND" var="slblFound"/><%
  
  int i = 0;

  String sIdHR = "", sGbName = "", sNmWorkUnit = "";
  String saIdHR = "", saGbName = "", saNmWorkUnit = "";
  String sIdPersonPhone = "", sIntCountry= "", sIntRegion = "", sNatRegion = "", sPhone = ""; 
  String saIdPersonPhone = "", saPhone = ""; 
  String sIdPersonEmail = "", sEmail = "";
  String saIdPersonEmail = "", saEmail = "";
  String sPhoneAux = "";
  Integer iCountPhone;
  Integer iCountEmail;
  
  if (iCount > 0) {
    %><m4:dataloop outputdef="<%=sNodeMain%>">
     <m4:item outputdef="<%=sNodeMain%>" item="SCO_ID_HR" var="sIdHR"/> 
     <m4:item outputdef="<%=sNodeMain%>" item="SCO_GB_NAME" var="sGbName"/>
     <m4:item outputdef="<%=sNodeMain%>" item="STD_N_WORK_UNIT" var="sNmWorkUnit"/>
    <%

     saIdHR += "," + "\"" + sIdHR + "\"";
     saGbName += "," + "\"" + sGbName + "\"";
     saNmWorkUnit += "," + "\"" + sNmWorkUnit + "\"";
     
    %></m4:dataloop><%

    saIdHR = saIdHR.substring(1, saIdHR.length());
    saGbName = saGbName.substring(1, saGbName.length());
    saNmWorkUnit = saNmWorkUnit.substring(1, saNmWorkUnit.length());

    for (i = 0; i < iCount; i++) {
      sNodeAuxPhone = sNodePhone + String.valueOf(i);
      %><m4:count outputdef="<%=sNodeAuxPhone%>" var="iCountPhone"/><%
      if (iCountPhone.intValue() > 0) {

    %><m4:dataloop outputdef="<%=sNodeAuxPhone%>">
       <m4:item outputdef="<%=sNodeAuxPhone%>" item="STD_ID_PERSON" var="sIdPersonPhone"/> 
       <m4:item outputdef="<%=sNodeAuxPhone%>" item="STD_INT_COUNTRY_CODE" var="sIntCountry"/> 
       <m4:item outputdef="<%=sNodeAuxPhone%>" item="STD_INT_REGION_CODE" var="sIntRegion"/> 
       <m4:item outputdef="<%=sNodeAuxPhone%>" item="STD_NAT_REGION_CODE" var="sNatRegion"/> 
       <m4:item outputdef="<%=sNodeAuxPhone%>" item="STD_PHONE" var="sPhone"/> 
    <%

       saIdPersonPhone += "," + "\"" + sIdPersonPhone + "\"";
       sPhoneAux = "";
       if (!sIntCountry.equals("")) {sPhoneAux = sIntCountry.trim();}
       if (!sIntRegion.equals("")) {
         sPhoneAux += " " + sIntRegion.trim();
         sPhoneAux = sPhoneAux.trim();
         }
       if (!sNatRegion.equals("")) {
         sPhoneAux += " " + sNatRegion.trim();
         sPhoneAux = sPhoneAux.trim();
         }
       if (!sPhone.equals("")) {
         sPhoneAux += " " + sPhone.trim();
         sPhoneAux = sPhoneAux.trim();
         }
     
       saPhone += "," + "\"" + sPhoneAux + "\"";
    %></m4:dataloop><%
      }
    }

    if (saIdPersonPhone.length() > 0) {
      saIdPersonPhone = saIdPersonPhone.substring(1, saIdPersonPhone.length());
      saPhone = saPhone.substring(1, saPhone.length());
    }

    for (i = 0; i < iCount; i++) {
      sNodeAuxEmail = sNodeEmail + String.valueOf(i);
      %><m4:count outputdef="<%=sNodeAuxEmail%>" var="iCountEmail"/><%
      if (iCountEmail.intValue() > 0) {

      %><m4:dataloop outputdef="<%=sNodeAuxEmail%>">
         <m4:item outputdef="<%=sNodeAuxEmail%>" item="STD_ID_PERSON" var="sIdPersonEmail"/>
         <m4:item outputdef="<%=sNodeAuxEmail%>" item="STD_EMAIL" var="sEmail"/> 
      <%

       saIdPersonEmail += "," + "\"" + sIdPersonEmail + "\"";
       saEmail += "," + "\"" + sEmail + "\"";
     
    %></m4:dataloop><%
      }
    }

    if (saIdPersonEmail.length() > 0) {
      saIdPersonEmail = saIdPersonEmail.substring(1, saIdPersonEmail.length());
      saEmail = saEmail.substring(1, saEmail.length());
    }

  }
  
  out.print("\"iCount\":" + String.valueOf(iCount));
  out.print(",\"slblFound\":\"" + slblFound + "\"");
  out.print(",\"saIdHR\":[" + saIdHR + "]");
  out.print(",\"saGbName\":[" + saGbName + "]");
  out.print(",\"saNmWorkUnit\":[" + saNmWorkUnit + "]");
  
  out.print(",\"saIdPersonPhone\":[" + saIdPersonPhone + "]");
  out.print(",\"saPhone\":[" + saPhone + "]");
  out.print(",\"saIdPersonEmail\":[" + saIdPersonEmail + "]");
  out.print(",\"saEmail\":[" + saEmail + "]");

  out.print("}");
  oM4Log.debug("sgco_search_emp.jsp: exit");
%>
</m4:page>