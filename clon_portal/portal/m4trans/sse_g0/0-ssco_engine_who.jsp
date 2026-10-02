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
  oM4Log.debug("ssco_engine_who.jsp: entry");

  String sAction = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Action");

  oM4Log.debug("  Action: " + sAction);

  String sName = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name");
  if (sName == null) {sName="";}
  if (!sName.equals("")) {
    oM4Log.debug("  Name: " + sName);
  }

  String sWUnit = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit");
  if (sWUnit == null) {sWUnit="";}
  if (!sWUnit.equals("")) {
    oM4Log.debug("  Work Unit ID: " + sWUnit);
  }

  String sWLoc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WLoc");
  if (sWLoc == null) {sWLoc="";}
  if (!sWLoc.equals("")) {
    oM4Log.debug("  Work Location ID: " + sWLoc);
  }

  String sSubSession = "SGCO_WHO_IS_WHO";
  String sMeta4Object = "SGCO_WHO_IS_WHO";

  String sNodeMain = "SGCO_WHO_IS_WHO_EMPLOYEES";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";
  String sMethodFilterMain = sDataDefMain + ".SCO_MTD_FILTER";
  
  String sIdHR = "", sGbName = "", sPhone = "", sEmail = "";
  String[] saPhone = null;

  String sNodeLabel = "SGCO_WHO_IS_WHO_LABEL";
  String sDataDefLabel = sMeta4Object + "!" + sNodeLabel;
  String sOutputDefLabel = sDataDefLabel + "[*]";

  String sNodeLabelTable = "SGCO_WHO_IS_WHO_LABEL_TABLE";
  String sDataDefLabelTable = sMeta4Object + "!" + sNodeLabelTable;
  String sOutputDefLabelTable = sDataDefLabelTable + "[*]";

  String sNodeSearchWUnit = "SGCO_WHO_IS_WHO_SEARCH_WU";
  String sDataDefSearchWUnit = sMeta4Object + "!" + sNodeSearchWUnit;
  String sOutputDefSearchWUnit = sDataDefSearchWUnit + "[*]";
  String sMethodSearchWUnit = sDataDefSearchWUnit + ".SCO_MTD_SEARCH";
  
  String sIdWorkUnit = "", sNameWorkUnit = "";

  String sNodeSearchWLoc = "SGCO_WHO_IS_WHO_SEARCH_WLOC";
  String sDataDefSearchWLoc = sMeta4Object + "!" + sNodeSearchWLoc;
  String sOutputDefSearchWLoc = sDataDefSearchWLoc + "[*]";
  String sMethodSearchWLoc = sDataDefSearchWLoc + ".SCO_MTD_SEARCH";
  
  String sIdWorkLoc = "", sNameWorkLoc = "";

  String sSortNode = sMeta4Object + "!" + sNodeMain + ".Sort";
  String sColumn = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column");
  if (sColumn == null) {sColumn="";}
  if (!sColumn.equals("")) {
    oM4Log.debug("  Column: " + sColumn);
    if (sColumn.equals("Name")) {
      sColumn = "SCO_GB_NAME";
    }
    if (sColumn.equals("WUnit")) {
      sColumn = "STD_N_WORK_UNIT";
    }
    if (sColumn.equals("WLoc")) {
      sColumn = "STD_N_WORK_LOCATION";
    }
  }

  String sOrder = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order");
  if (sOrder == null) {sOrder="";}
  if (!sOrder.equals("")) {
    oM4Log.debug("  Order: " + sOrder);
  }
  
  String sAuxLabel = "";
  String sCol1 = "", sCol2 = "", sCol3 = "", sCol4 = "", sCol5 = "", sCol6 = "";
  String saWho = "";

%>

<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
    <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>

<%
  if (sAction.equals("Init")) {
%>
    <m4:outputdef m4alias="<%=sNodeLabel%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabel%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeLabelTable%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabelTable%>"/></m4:outputdef>
<%
  } else if (sAction.equals("SearchEmp")) {
%>
    <m4:exec m4method="<%=sMethodFilterMain%>">
      <m4:param name="ARG_NAME" value="<%=sName%>"/>
      <m4:param name="ARG_ID_WORK_UNIT" value="<%=sWUnit%>"/>
      <m4:param name="ARG_ID_WORK_LOC" value="<%=sWLoc%>"/>
    </m4:exec>

    <m4:sortitems m4name="<%=sSortNode%>">
      <m4:param name="SCO_GB_NAME" value="ASC"/>
    </m4:sortitems>

    <m4:outputdef m4alias="<%=sNodeMain%>"><m4:param name="M4NAME0" value="<%=sOutputDefMain%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeLabelTable%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabelTable%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeLabel%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabel%>"/></m4:outputdef>
    <m4:removefilter m4name="<%=sSortNode%>"/>
<%
  } else if (sAction.equals("Sort")) {
%>
    <m4:sortitems m4name="<%=sSortNode%>">
      <m4:param name="<%=sColumn%>" value="<%=sOrder%>"/>
    </m4:sortitems>

    <m4:outputdef m4alias="<%=sNodeMain%>"><m4:param name="M4NAME0" value="<%=sOutputDefMain%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeLabelTable%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabelTable%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeLabel%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabel%>"/></m4:outputdef>
<%
  } else if (sAction.equals("SearchWU")) {
%>
    <m4:exec m4method="<%=sMethodSearchWUnit%>">
      <m4:param name="ARG_NAME" value="<%=sName%>"/>
    </m4:exec>

    <m4:outputdef m4alias="<%=sNodeSearchWUnit%>"><m4:param name="M4NAME0" value="<%=sOutputDefSearchWUnit%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeLabel%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabel%>"/></m4:outputdef>
<%
  } else if (sAction.equals("SearchWLoc")) {
%>
    <m4:exec m4method="<%=sMethodSearchWLoc%>">
      <m4:param name="ARG_NAME" value="<%=sName%>"/>
    </m4:exec>

    <m4:outputdef m4alias="<%=sNodeSearchWLoc%>"><m4:param name="M4NAME0" value="<%=sOutputDefSearchWLoc%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeLabel%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabel%>"/></m4:outputdef>
<%
  } 
%>

 </m4:job>

<% 
  if (sAction.equals("Init")) {
     out.print("{");
%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_FOUNDED_WLOC" var="sAuxLabel" htmlsafe="true"/>
<%   out.print("\"sFoundWLoc\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_FOUNDED_WLOCS" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sFoundWLocs\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_FOUNDED_WU" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sFoundWU\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_FOUNDED_WUS" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sFoundWUs\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_NO_FOUNDED" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sNofound\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ORDER_ASC" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sOrderAsc\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ORDER_DESC" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sOrderDesc\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_NO_ORDER" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sNoOrder\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_LOADING_EMP" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sLoadingEmp\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ORDERING" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sOrdering\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ADD_CONTACT_OK" var="sAuxLabel"/>
<%   out.print(",\"sContactOK\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ADD_CONTACT_KO" var="sAuxLabel"/>
<%   out.print(",\"sContactKO\":\"" + sAuxLabel + "\"");

     out.print("}");

  } else if (sAction.equals("SearchEmp") || sAction.equals("Sort")) {
%>
     <m4:dataloop outputdef="<%=sNodeMain%>">
       <m4:item outputdef="<%=sNodeMain%>" item="STD_ID_PERSON" var="sIdHR" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeMain%>" item="SCO_GB_NAME" var="sGbName" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeMain%>" item="SCO_ID_WORK_UNIT" var="sIdWorkUnit" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeMain%>" item="STD_N_WORK_UNIT" var="sNameWorkUnit" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeMain%>" item="STD_N_WORK_LOCATION" var="sNameWorkLoc" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_PHONE" var="sPhone" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_EMAIL" var="sEmail" htmlsafe="true"/>
       <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_INFO_EMP" var="sAuxLabel" htmlsafe="true"/>
<%
       sCol1 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sGbName.trim() + "\"" +"]";
%>
       <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_ORG_CHART" var="sAuxLabel" htmlsafe="true"/>
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
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_SEND_EMAIL" var="sAuxLabel" htmlsafe="true"/>
<%
       sCol4 = "[" + "\"" + sEmail.trim() + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";
       sCol5 = "[" + "\"" + sNameWorkLoc.trim() + "\"" + "]";
%>       
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ADD_CONTACT" var="sAuxLabel" htmlsafe="true"/>
<%
       sCol6 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";
       saWho += ",[" + sCol1 + "," + sCol2 + "," + sCol3 + "," + sCol4 + "," + sCol5 + "," + sCol6 + "]";
%>
     </m4:dataloop>
<%
     if (saWho.length() > 0) {
       saWho = saWho.substring(1, saWho.length());
     }

     out.print("{");
     out.print("\"saWho\":[" + saWho + "]");
     out.print("}");

  } else if (sAction.equals("SearchWU")) {
%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_CLICK_WU" var="sAuxLabel" htmlsafe="true"/>
     <m4:dataloop outputdef="<%=sNodeSearchWUnit%>">
       <m4:item outputdef="<%=sNodeSearchWUnit%>" item="STD_N_WORK_UNIT" var="sNameWorkUnit" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeSearchWUnit%>" item="STD_ID_WORK_UNIT" var="sIdWorkUnit" htmlsafe="true"/>
       <div>
         <span id=<%=sIdWorkUnit%> idWU=1 title='<%=sAuxLabel%>' onclick='m4WhoisWho.Search.chooseMe(this)'><%=sNameWorkUnit%></span>
       </div>
     </m4:dataloop>
<%
  } else if (sAction.equals("SearchWLoc")) {
%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_CLICK_WLOC" var="sAuxLabel" htmlsafe="true"/>
     <m4:dataloop outputdef="<%=sNodeSearchWLoc%>">
       <m4:item outputdef="<%=sNodeSearchWLoc%>" item="STD_N_WORK_LOCATION" var="sNameWorkLoc" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeSearchWLoc%>" item="STD_ID_WORK_LOCATION" var="sIdWorkLoc" htmlsafe="true"/>
       <div>
         <span id=<%=sIdWorkLoc%> idWLoc=1 title='<%=sAuxLabel%>' onclick='m4WhoisWho.Search.chooseMe(this)'><%=sNameWorkLoc%></span>
       </div>
     </m4:dataloop>
<%
  }

  oM4Log.debug("ssco_engine_who.jsp: exit");
%>

</m4:page>