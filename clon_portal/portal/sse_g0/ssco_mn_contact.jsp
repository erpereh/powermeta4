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
  oM4Log.debug("ssco_mn_contact.jsp: entry");

  String sAction = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Action");

  oM4Log.debug("  Action: " + sAction);

  String sIdHR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR");
  if (sIdHR == null) {sIdHR="";}
  if (!sIdHR.equals("")) {
    oM4Log.debug("  IdHR: " + sIdHR);
  }

  String sColumn = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column");
  if (sColumn == null) {sColumn="SCO_PRP_GB_NAME";}
  if (!sColumn.equals("")) {
    oM4Log.debug("  Column: " + sColumn);
    if (sColumn.equals("Name")) {
      sColumn = "SCO_PRP_GB_NAME";
    }
    if (sColumn.equals("WUnit")) {
      sColumn = "SCO_PRP_N_WORK_UNIT";
    }
    if (sColumn.equals("WLoc")) {
      sColumn = "SCO_PRP_N_WORK_LOCATION";
    }
  }

  String sOrder = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order");
  if (sOrder == null) {sOrder="ASC";}
  if (!sOrder.equals("")) {
    oM4Log.debug("  Order: " + sOrder);
  }
  
  String sSubSession = "SGCO_CONTACT";
  String sMeta4Object = "SGCO_CONTACT";

  String sNodeMain = "SGCO_CONTACT_MAIN";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";

  String sNodeData = "SGCO_CONTACT_INFO";
  String sDataDefData = sMeta4Object + "!" + sNodeData;
  String sOutputDefData = sDataDefData + "[*]";

  String sNodeLabel = "SGCO_CONTACT_LABEL";
  String sDataDefLabel = sMeta4Object + "!" + sNodeLabel;
  String sOutputDefLabel = sDataDefLabel + "[*]";

  String sNodeLabelTable = "SGCO_CONTACT_LABEL_TABLE";
  String sDataDefLabelTable = sMeta4Object + "!" + sNodeLabelTable;
  String sOutputDefLabelTable = sDataDefLabelTable + "[*]";

  String sSortNode = sMeta4Object + "!" + sNodeData + ".Sort";

  String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";
  String sMethodDelete = "SCO_MTD_DELETE";
  String sMethodInsert = "SCO_MTD_INSERT";

  String sAuxLabel = "";
  String sGbName = "", sNameWorkUnit = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = "";
  String[] saPhone = null;
  String sCol1 = "", sCol2 = "", sCol3 = "", sCol4 = "", sCol5 = "", sCol6 = "";
  String saContact = "";

  String sResult = "";
  String sAuxData = "";

%>

<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
    <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>

<%
  if (sAction.equals("Delete")) {
%>    
    <m4:exec m4object="<%=sMeta4Object%>" node="<%=sNodeMain%>" method="<%=sMethodDelete%>" alias="methodExec">
      <m4:param name="ARG_ID_HR" value="<%=sIdHR%>"/>
    </m4:exec>

    <m4:outputdef m4alias="<%=sNodeData%>"><m4:param name="M4NAME0" value="<%=sOutputDefData%>"/></m4:outputdef>
<%
  } else if (sAction.equals("Insert")) {
%>
    <m4:exec m4object="<%=sMeta4Object%>" node="<%=sNodeMain%>" method="<%=sMethodInsert%>" alias="methodExec">
      <m4:param name="ARG_ID_HR" value="<%=sIdHR%>"/>
    </m4:exec>
<%
  } else if (sAction.equals("Load")) {
%>
    <m4:exec m4method="<%=sMethodLoad%>"></m4:exec>

    <m4:sortitems m4name="<%=sSortNode%>">
      <m4:param name="<%=sColumn%>" value="<%=sOrder%>"/>
    </m4:sortitems>
    
    <m4:outputdef m4alias="<%=sNodeLabelTable%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabelTable%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeLabel%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabel%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeData%>"><m4:param name="M4NAME0" value="<%=sOutputDefData%>"/></m4:outputdef>
    <m4:removefilter m4name="<%=sSortNode%>"/>
<%
  } else if (sAction.equals("Sort")) {
%>
    <m4:sortitems m4name="<%=sSortNode%>">
      <m4:param name="<%=sColumn%>" value="<%=sOrder%>"/>
    </m4:sortitems>

    <m4:outputdef m4alias="<%=sNodeLabelTable%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabelTable%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeLabel%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabel%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeData%>"><m4:param name="M4NAME0" value="<%=sOutputDefData%>"/></m4:outputdef>
<%
  } 
%>
 </m4:job>
<% 
  //Generate JSON response (strings (keys and values) within doublequotes)
  out.print("{");

  if (sAction.equals("Delete") || sAction.equals("Insert")) {
%>
   <m4:outputexec alias="methodExec" var="sResult"/>
<%
    out.print("\"sResult\":" + "\"" + sResult + "\"");

  } else {
    
%>
     <m4:dataloop outputdef="<%=sNodeData%>">
       <m4:item outputdef="<%=sNodeData%>" item="SCO_PRP_ID_HR" var="sIdHR"/>
       <m4:item outputdef="<%=sNodeData%>" item="SCO_PRP_GB_NAME" var="sGbName"/>
       <m4:item outputdef="<%=sNodeData%>" item="SCO_PRP_ID_WORK_UNIT" var="sIdWorkUnit"/>
       <m4:item outputdef="<%=sNodeData%>" item="SCO_PRP_N_WORK_UNIT" var="sNameWorkUnit"/>
       <m4:item outputdef="<%=sNodeData%>" item="SCO_PRP_N_WORK_LOCATION" var="sNameWorkLoc"/>
       <m4:item outputdef="<%=sNodeData%>" item="SCO_PRP_PHONE" var="sPhone"/>
       <m4:item outputdef="<%=sNodeData%>" item="SCO_PRP_EMAIL" var="sEmail"/>
       <m4:item outputdef="<%=sNodeData%>" item="SCO_PRP_DT_INSERTED" var="sAuxData"/>
       
       <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_INFO_EMP" var="sAuxLabel"/>
<%
       sCol1 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sGbName.trim() + "\"" +"]";
%>
       <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_ORG_CHART" var="sAuxLabel"/>
<%
       sCol2 = "[" + "\"" + sIdWorkUnit + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sNameWorkUnit.trim() + "\"" + "]";

       saPhone = sPhone.trim().split(";");
       if (saPhone.length == 3) {
         if (saPhone[1].equals("001")) {
           saPhone[1] = "/iconos/lu_nor_phone_32.png";
         } else if (saPhone[1].equals("002")) {
           saPhone[1] = "/iconos/lu_nor_fax_32.png";
         } else if (saPhone[1].equals("003")) {
           saPhone[1] = "/iconos/lu_nor_mobile_32.png";
         } else {
           saPhone[1] = "/iconos/lu_nor_other_phone_32.png";
         }
         sCol3 = "[" + "\"" + saPhone[0] + "\"" + "," + "\"" + saPhone[2] + "\"" + "," + "\"" + saPhone[1] + "\"" + "]";
       } else {
         sCol3 = "[" + "\"" + "\"" + "]";
       }
%>
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_SEND_EMAIL" var="sAuxLabel"/>
<%
       sCol4 = "[" + "\"" + sEmail.trim() + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";
       sCol5 = "[" + "\"" + sNameWorkLoc.trim() + "\"" + "]";
%>       
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_DEL_CONTACT" var="sAuxLabel"/>
<%
       sCol6 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";
       saContact += ",[" + sCol1 + "," + sCol2 + "," + sCol3 + "," + sCol4 + "," + sCol5 + "," + sCol6 + "]";
%>
     </m4:dataloop>
<%
     if (saContact.length() > 0) {
       saContact = saContact.substring(1, saContact.length());
     }

     out.print("\"saContact\":[" + saContact + "]");
     
     if (sAction.equals("Load")) {
%>
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ORDER_ASC" var="sAuxLabel"/> 
<%
       out.print(",\"sOrderAsc\":" + "\""  + sAuxLabel + "\"");
%>
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ORDER_DESC" var="sAuxLabel"/> 
<%
       out.print(",\"sOrderDesc\":" + "\""  + sAuxLabel + "\"");
%>
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_NO_ORDER" var="sAuxLabel"/> 
<%
       out.print(",\"sNoOrder\":" + "\""  + sAuxLabel + "\"");
%>
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ORDERING" var="sAuxLabel"/> 
<%
       out.print(",\"sOrdering\":" + "\""  + sAuxLabel + "\"");
%>
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_DEL_CONTACT_OK" var="sAuxLabel"/> 
<%
       out.print(",\"sContactOK\":" + "\""  + sAuxLabel + "\"");
%>
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_DEL_CONTACT_KO" var="sAuxLabel"/> 
<%
       out.print(",\"sContactKO\":" + "\""  + sAuxLabel + "\"");
%>
       <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_LOADING_CONTACT" var="sAuxLabel"/> 
<%
       out.print(",\"sLoadingCon\":" + "\""  + sAuxLabel + "\"");
     }
  }

  out.print("}");
  oM4Log.debug("ssco_mn_contact.jsp: exit");
%>

</m4:page>