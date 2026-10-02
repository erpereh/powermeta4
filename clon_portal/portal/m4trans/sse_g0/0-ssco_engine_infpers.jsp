<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*, java.lang.Math"%>
<%@ page import="com.meta4.m4operations.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
  //no cache
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store"); 
  response.setDateHeader("Expires", -1); 

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("ssco_engine_infpers.jsp: entry");

  String sIdHR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR");
  if (sIdHR == null) {sIdHR="";}
  if (!sIdHR.equals("")) {
    oM4Log.debug("  IdHR: " + sIdHR);
  }

  String sSubSession = "SGCO_INF_EMPLOYEE";
  String sMeta4Object = "SGCO_INF_EMPLOYEE";

  String sNodeMain = "SGCO_INF_EMPLOYEE";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";
  String sMoveMain = sNodeMain + ":" + sNodeMain + "[FIRST]";
  String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";
  
  String sLabelName = "", sGbName = "";
  String sLabelWLoc = "", sWLoc = "";
  String sLabelWUnit = "", sWUnit = "";

  String sNodePhone = "SGCO_INF_PHONE_FAX";
  String sDataDefPhone = sMeta4Object + "!" + sNodePhone;
  String sOutputDefPhone = sDataDefPhone + "[*]";
  String sNodeAuxPhone = "";
  
  String sLabelPhone = "", sLabelMorePhone = "", sPhone = "" , sIdLine = "", sNameLine = "";
  String saPhone = "";

  String sNodeEmail = "SGCO_INF_EMAIL";
  String sDataDefEmail = sMeta4Object + "!" + sNodeEmail;
  String sOutputDefEmail = sDataDefEmail + "[*]";
  String sNodeAuxEmail = "";

  String sLabelEmail = "", sLabelMoreEmail = "", sEmail = "";
  String saEmail = "";

  String sNodeJob = "SGCO_INF_JOB";
  String sDataDefJob = sMeta4Object + "!" + sNodeJob;
  String sOutputDefJob = sDataDefJob + "[*]";
  String sNodeAuxJob = "";

  String sLabelJob = "", sJob = "";
  String saJob = "";

  String sNodeResp = "SGCO_INF_RESPONSIBLE";
  String sDataDefResp = sMeta4Object + "!" + sNodeResp;
  String sOutputDefResp = sDataDefResp + "[*]";
  String sNodeAuxResp = "";

  String sLabelResp = "", sLabelMoreResp = "", sResp = "";
  String saResp = "";

  int iCount = 0;
  String sCountMain = "";

%>

<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
    <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>

    <m4:exec m4method="<%=sMethodLoad%>">
      <m4:param name="ARG_ID_HR" value="<%=sIdHR%>"/>
    </m4:exec>
    <m4:exec node="<%=sNodeMain%>" alias="countMain" method="COUNT" m4object="<%=sMeta4Object%>"/>

    <m4:outputdef m4alias="<%=sNodeMain%>"><m4:param name="M4NAME0" value="<%=sOutputDefMain%>"/></m4:outputdef>

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
             sNodeAuxJob = sNodeJob + String.valueOf(i);
             sNodeAuxResp = sNodeResp + String.valueOf(i);
  %>
    <m4:move><m4:param name="<%=sSubSession%>" value="<%=sMoveMain%>"/></m4:move>
    <m4:outputdef m4alias="<%=sNodeAuxPhone%>"><m4:param name="M4NAME0" value="<%=sOutputDefPhone%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeAuxEmail%>"><m4:param name="M4NAME0" value="<%=sOutputDefEmail%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeAuxJob%>"><m4:param name="M4NAME0" value="<%=sOutputDefJob%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeAuxResp%>"><m4:param name="M4NAME0" value="<%=sOutputDefResp%>"/></m4:outputdef>
  <%
          }
      } catch(Exception e) {}
  %>
 </m4:job>

 <%
  iCount = Integer.parseInt(sCountMain);
  Integer iCountEmail;
  Integer iCountPhone;
  Integer iCountWLoc;
  Integer iCountWUnit;
  Integer iCountJob;
  Integer iCountResp;
  int i = 0;
  int iCountAux = 0;
  String sAuxLabel = "";
  String sAuxLabelOK = "";
  String sAuxLabelKO = "";
 %>

<%
   out.print("{");
%>

 <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_LBL_NAME" var="sLabelName"/>
 <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_LBL_WLOC" var="sLabelWLoc"/>
 <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_LBL_WUNIT" var="sLabelWUnit"/>
 <m4:item outputdef="<%=sNodeMain%>" item="SCO_GB_NAME" var="sGbName"/>
 <m4:item outputdef="<%=sNodeMain%>" item="STD_N_WORK_LOCATION" var="sWLoc"/>
 <m4:item outputdef="<%=sNodeMain%>" item="STD_N_WORK_UNIT" var="sWUnit"/>

<%

   out.print("\"sName\":\"" + sGbName.trim() + "\"");
   out.print(",\"sLabelName\":\"" + sLabelName + "\"");
   out.print(",\"sWLoc\":\"" + sWLoc.trim() + "\"");
   out.print(",\"sLabelWLoc\":\"" + sLabelWLoc + "\"");
   out.print(",\"sWUnit\":\"" + sWUnit.trim() + "\"");
   out.print(",\"sLabelWUnit\":\"" + sLabelWUnit + "\"");

   for (i = 0; i < iCount; i++) {
     sNodeAuxPhone = sNodePhone + String.valueOf(i);
%>
     <m4:count outputdef="<%=sNodeAuxPhone%>" var="iCountPhone"/>
     <m4:label get="item" outputdef="<%=sNodeAuxPhone%>" item="SCO_PRP_LBL_PHONE" var="sLabelPhone"/>
     <m4:label get="item" outputdef="<%=sNodeAuxPhone%>" item="SCO_PRP_LBL_MORE_PHONE" var="sLabelMorePhone"/>
<%
     if (iCountPhone.intValue() > 0) {
%>
       <m4:dataloop outputdef="<%=sNodeAuxPhone%>">
         <m4:item outputdef="<%=sNodeAuxPhone%>" item="SCO_PRP_PHONE" var="sPhone"/> 
         <m4:item outputdef="<%=sNodeAuxPhone%>" item="STD_ID_LINE_TYPE" var="sIdLine"/> 
         <m4:item outputdef="<%=sNodeAuxPhone%>" item="STD_N_LINE_TYPE" var="sNameLine"/>
<%
       if (sIdLine.equals("001")) {
         sIdLine = "/iconos/lu_nor_phone_32.png";
       } else if (sIdLine.equals("002")) {
         sIdLine = "/iconos/lu_nor_fax_32.png";
       } else if (sIdLine.equals("003")) {
         sIdLine = "/iconos/lu_nor_mobile_32.png";
       } else {
         sIdLine = "/iconos/lu_nor_other_phone_32.png";
       }
       
       saPhone += ",[\"" + sPhone.trim() + "\",\"" + sIdLine + "\",\"" + sNameLine.trim() + "\"]";
%>
       </m4:dataloop>
<%
     }
   }
   
   if (saPhone.length() > 0) {
     saPhone = saPhone.substring(1, saPhone.length());
   }

   out.print(",\"saPhone\":[" + saPhone + "]");
   out.print(",\"sLabelPhone\":\"" + sLabelPhone + "\"");
   out.print(",\"sLabelMorePhone\":\"" + sLabelMorePhone + "\"");

   for (i = 0; i < iCount; i++) {
     sNodeAuxEmail = sNodeEmail + String.valueOf(i);
%>
     <m4:count outputdef="<%=sNodeAuxEmail%>" var="iCountEmail"/>
     <m4:label get="item" outputdef="<%=sNodeAuxEmail%>" item="SCO_PRP_LBL_EMAIL" var="sLabelEmail"/>
     <m4:label get="item" outputdef="<%=sNodeAuxEmail%>" item="SCO_PRP_LBL_MORE_EMAIL" var="sLabelMoreEmail"/>
<%
     if (iCountEmail.intValue() > 0) {
%>
       <m4:dataloop outputdef="<%=sNodeAuxEmail%>">
         <m4:item outputdef="<%=sNodeAuxEmail%>" item="STD_EMAIL" var="sEmail"/> 
<%
       saEmail += ",\"" + sEmail.trim() + "\"";
%>
       </m4:dataloop>
<%
     }
   }
   
   if (saEmail.length() > 0) {
     saEmail = saEmail.substring(1, saEmail.length());
   }

   out.print(",\"saEmail\":[" + saEmail + "]");
   out.print(",\"sLabelEmail\":\"" + sLabelEmail + "\"");     
   out.print(",\"sLabelMoreEmail\":\"" + sLabelMoreEmail + "\"");     

   for (i = 0; i < iCount; i++) {
     sNodeAuxJob = sNodeJob + String.valueOf(i);
%>
     <m4:count outputdef="<%=sNodeAuxJob%>" var="iCountWLoc"/>
     <m4:label get="item" outputdef="<%=sNodeAuxJob%>" item="SCO_PRP_LBL_JOB" var="sLabelJob"/>
<%
     if (iCountWLoc.intValue() > 0) {
%>
       <m4:dataloop outputdef="<%=sNodeAuxJob%>">
         <m4:item outputdef="<%=sNodeAuxJob%>" item="STD_N_JOB_CODE" var="sJob"/> 
<%
       saJob += ",\"" + sJob.trim() + "\"";
%>
       </m4:dataloop>
<%
     }
   }
   
   if (saJob.length() > 0) {
     saJob = saJob.substring(1, saJob.length());
   }

   out.print(",\"saJob\":[" + saJob + "]");
   out.print(",\"sLabelJob\":\"" + sLabelJob + "\"");     

   for (i = 0; i < iCount; i++) {
     sNodeAuxResp = sNodeResp + String.valueOf(i);
%>
     <m4:count outputdef="<%=sNodeAuxResp%>" var="iCountWLoc"/>
     <m4:label get="item" outputdef="<%=sNodeAuxResp%>" item="SCO_PRP_LBL_RESP" var="sLabelResp"/>
     <m4:label get="item" outputdef="<%=sNodeAuxResp%>" item="SCO_PRP_LBL_MORE_RESP" var="sLabelMoreResp"/>
<%
     if (iCountWLoc.intValue() > 0) {
%>
       <m4:dataloop outputdef="<%=sNodeAuxResp%>">
         <m4:item outputdef="<%=sNodeAuxResp%>" item="SCO_PRP_RESP_GB_NAME" var="sResp"/> 
<%
       saResp += ",\"" + sResp.trim() + "\"";
%>
       </m4:dataloop>
<%
     }
   }
   
   if (saResp.length() > 0) {
     saResp = saResp.substring(1, saResp.length());
   }

   out.print(",\"saResp\":[" + saResp + "]");
   out.print(",\"sLabelResp\":\"" + sLabelResp + "\"");
   out.print(",\"sLabelMoreResp\":\"" + sLabelMoreResp + "\"");

   out.print("}");

  oM4Log.debug("ssco_engine_infpers.jsp: exit");
%>

</m4:page>