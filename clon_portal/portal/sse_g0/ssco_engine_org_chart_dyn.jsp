<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*, java.lang.Math"%>
<%@ page import="com.meta4.m4operations.*, com.meta4.utilities.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
  //no cache
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store, no-cache"); 
  response.setDateHeader("Expires", -1); 

  request.setCharacterEncoding("iso-8859-1");

  String sEncoding = M4RequestEncoding.getAppEncoding(); 
  response.setContentType ("text/html; charset=" + sEncoding + "");

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("ssco_engine_org_chart.jsp: entry");

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

  String sSubSession = "SGCO_ORG_CHART";
  String sMeta4Object = "SGCO_ORG_CHART";

  String sNodeMain = "SGCO_ORG_CHART_MAIN";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";
  String sMethodMainLoad = sDataDefMain + ".SCO_MTD_LOAD";
  String sMethodMainRoot = sDataDefMain + ".SCO_MTD_ROOT";;
  
  String sNodeLabel = "SGCO_ORG_CHART_LABEL";
  String sDataDefLabel = sMeta4Object + "!" + sNodeLabel;
  String sOutputDefLabel = sDataDefLabel + "[*]";

  String sNodeLabelTable = "SGCO_ORG_CHART_LABEL_TABLE";
  String sDataDefLabelTable = sMeta4Object + "!" + sNodeLabelTable;
  String sOutputDefLabelTable = sDataDefLabelTable + "[*]";

  String sNodeReturn = "SGCO_ORG_CHART_RETURN";
  String sDataDefReturn = sMeta4Object + "!" + sNodeReturn;
  String sOutputDefReturn = sDataDefReturn + "[*]";
  String sMethodGetPath = sDataDefReturn + ".SCO_MTD_GET_PATH";

  String sNodeSearchEmp = "SGCO_ORG_CHART_SEARCH_EMP";
  String sDataDefSearchEmp = sMeta4Object + "!" + sNodeSearchEmp;
  String sOutputDefSearchEmp = sDataDefSearchEmp + "[*]";
  String sMethodSearchEmp = sDataDefSearchEmp + ".SCO_MTD_SEARCH";

  String sNodeSearchWU = "SGCO_ORG_CHART_SEARCH_WU";
  String sDataDefSearchWU = sMeta4Object + "!" + sNodeSearchWU;
  String sOutputDefSearchWU = sDataDefSearchWU + "[*]";
  String sMethodSearchWU = sDataDefSearchWU + ".SCO_MTD_SEARCH";

  String sNodeListEmp = "SGCO_ORG_CHART_EMPLOYEES";
  String sDataDefListEmp = sMeta4Object + "!" + sNodeListEmp;
  String sOutputDefListEmp = sDataDefListEmp + "[*]";
  String sMethodListEmp = sDataDefListEmp + ".SCO_MTD_LOAD";
  
  String sSortNodeEmp = sMeta4Object + "!" + sNodeListEmp + ".Sort";

  String sNodeListResp = "SGCO_ORG_CHART_RESPONSIBLE";
  String sDataDefListResp = sMeta4Object + "!" + sNodeListResp;
  String sOutputDefListResp = sDataDefListResp + "[*]";
  String sMethodListResp = sDataDefListResp + ".SCO_MTD_LOAD";
  
  String sSortNodeResp = sMeta4Object + "!" + sNodeListResp + ".Sort";

  String sColumn = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column"); 
  if (sColumn == null) {sColumn="SCO_PRP_GB_NAME";}
  if (!sColumn.equals("")) {
    if (sColumn.equals("Name")) {sColumn="SCO_PRP_GB_NAME";}
    if (sColumn.equals("WLoc")) {sColumn="SCO_PRP_N_WORK_LOCATION";}
    oM4Log.debug("  Column: " + sColumn);
  }
  
  String sOrder = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order");
  if (sOrder == null) {sOrder="ASC";}
  if (!sOrder.equals("")) {
    oM4Log.debug("  Order: " + sOrder);
  }

  String sNodeList = "";
  String sOutputDefList = "";
  String sSortNode = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Node");
  if (sSortNode == null) {sSortNode="";}
  if (!sSortNode.equals("")) {
    if (sSortNode.equals("Employee")) {
      sSortNode = sSortNodeEmp;
      sNodeList = sNodeListEmp;
      sOutputDefList = sOutputDefListEmp;
    } else if (sSortNode.equals("Responsible")) {
      sSortNode = sSortNodeResp;
      sNodeList = sNodeListResp;
      sOutputDefList = sOutputDefListResp;
    }
    oM4Log.debug("  Sort: " + sSortNode);
    oM4Log.debug("  Node: " + sNodeList);
    oM4Log.debug("  Output: " + sOutputDefList);
  }

  String sGbName = "", sNameWorkUnit = "", sIdHR = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = "";
  String[] saPhone = null;
  String saEmp = "", saResp = "", saList = "";
  String sCol1 = "", sCol2 = "", sCol3 = "", sCol4 = "", sCol5 = "";
  String sAuxLabel = "";

%>

<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
    <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>

<%
  if (sAction.equals("InitSearch")) {
%>
    <m4:outputdef m4alias="<%=sNodeLabel%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabel%>"/></m4:outputdef>
<%
  } else if (sAction.equals("InitOrgChart")) {
%>
    <m4:outputdef m4alias="<%=sNodeLabel%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabel%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeLabelTable%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabelTable%>"/></m4:outputdef>
<%
  } else if (sAction.equals("SearchEmp")) {
%>
    <m4:exec m4method="<%=sMethodSearchEmp%>">
      <m4:param name="ARG_NAME" value="<%=sName%>"/>
    </m4:exec>
    <m4:outputdef m4alias="<%=sNodeSearchEmp%>"><m4:param name="M4NAME0" value="<%=sOutputDefSearchEmp%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeLabel%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabel%>"/></m4:outputdef>
<%
  } else if (sAction.equals("SearchWU")) {
%>
    <m4:exec m4method="<%=sMethodSearchWU%>">
      <m4:param name="ARG_NAME" value="<%=sName%>"/>
    </m4:exec>
    <m4:outputdef m4alias="<%=sNodeSearchWU%>"><m4:param name="M4NAME0" value="<%=sOutputDefSearchWU%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeLabel%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabel%>"/></m4:outputdef>    
<%
  } else if (sAction.equals("Expand")) {
%>
    <m4:exec m4method="<%=sMethodMainLoad%>">
      <m4:param name="ARG_WORK_UNIT" value="<%=sWUnit%>"/>
      <m4:param name="ARG_RESET" value="0"/>
    </m4:exec>
    <m4:outputdef m4alias="<%=sNodeReturn%>"><m4:param name="M4NAME0" value="<%=sOutputDefReturn%>"/></m4:outputdef>
<%
  } else if (sAction.equals("Getpath")) {
%>
    <m4:exec m4method="<%=sMethodGetPath%>">
      <m4:param name="ARG_WORK_UNIT" value="<%=sWUnit%>"/>
    </m4:exec>
    <m4:outputdef m4alias="<%=sNodeReturn%>"><m4:param name="M4NAME0" value="<%=sOutputDefReturn%>"/></m4:outputdef>
<%
  } else if (sAction.equals("List")) {
%>
    <m4:exec m4method="<%=sMethodListEmp%>">
      <m4:param name="ARG_WORK_UNIT" value="<%=sWUnit%>"/>
    </m4:exec>

    <m4:sortitems m4name="<%=sSortNodeEmp%>">
      <m4:param name="<%=sColumn%>" value="<%=sOrder%>"/>
    </m4:sortitems>

    <m4:exec m4method="<%=sMethodListResp%>">
      <m4:param name="ARG_WORK_UNIT" value="<%=sWUnit%>"/>
    </m4:exec>

    <m4:sortitems m4name="<%=sSortNodeResp%>">
      <m4:param name="<%=sColumn%>" value="<%=sOrder%>"/>
    </m4:sortitems>

    <m4:outputdef m4alias="<%=sNodeLabelTable%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabelTable%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeListEmp%>"><m4:param name="M4NAME0" value="<%=sOutputDefListEmp%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeListResp%>"><m4:param name="M4NAME0" value="<%=sOutputDefListResp%>"/></m4:outputdef>
    <m4:removefilter m4name="<%=sSortNodeEmp%>"/>
    <m4:removefilter m4name="<%=sMethodListResp%>"/>
    <m4:removefilter m4name="<%=sSortNodeResp%>"/>
<%
  } else if (sAction.equals("Sort")) {
%>
    <m4:sortitems m4name="<%=sSortNode%>">
      <m4:param name="<%=sColumn%>" value="<%=sOrder%>"/>
    </m4:sortitems>
    <m4:outputdef m4alias="<%=sNodeLabelTable%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabelTable%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeList%>"><m4:param name="M4NAME0" value="<%=sOutputDefList%>"/></m4:outputdef>
<%
  } else if (sAction.equals("Root")) {
%>
    <m4:exec m4method="<%=sMethodMainRoot%>">
      <m4:param name="ARG_WORK_UNIT" value="<%=sWUnit%>"/>
    </m4:exec>
    <m4:outputdef m4alias="<%=sNodeMain%>"><m4:param name="M4NAME0" value="<%=sOutputDefMain%>"/></m4:outputdef>
<%
  }
%>
 </m4:job>
<%
  if (sAction.equals("InitSearch")) {
     out.print("{");
%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_FOUNDED_EMP" var="sAuxLabel" htmlsafe="true"/>
<%   out.print("\"sFoundEmp\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_FOUNDED_EMPS" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sFoundEmps\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_FOUNDED_WU" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sFoundWU\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_FOUNDED_WUS" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sFoundWUs\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_NO_FOUNDED" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sNofound\":\"" + sAuxLabel + "\"");

     out.print("}");
  } else if (sAction.equals("InitOrgChart")) {
     out.print("{");
%>
     <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ORDER_ASC" var="sAuxLabel" htmlsafe="true"/>
<%   out.print("\"sOrderAsc\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ORDER_DESC" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sOrderDesc\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_NO_ORDER" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sNoOrder\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_LOADING_EMP" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sLoadingEmp\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_LOADING_RESP" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sLoadingResp\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ORDERING" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sOrdering\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ADD_CONTACT_OK" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sContactOK\":\"" + sAuxLabel + "\"");%>
     <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ADD_CONTACT_KO" var="sAuxLabel" htmlsafe="true"/>
<%   out.print(",\"sContactKO\":\"" + sAuxLabel + "\"");
     out.print("}");
  } else if (sAction.equals("SearchEmp")) {
%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_CLICK_WU" var="sAuxLabel" htmlsafe="true"/>
     <m4:dataloop outputdef="<%=sNodeSearchEmp%>">
       <m4:item outputdef="<%=sNodeSearchEmp%>" item="SCO_GB_NAME" var="sGbName" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeSearchEmp%>" item="SCO_ID_HR" var="sIdHR" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeSearchEmp%>" item="SCO_ID_WORK_UNIT" var="sIdWorkUnit" htmlsafe="true"/>
       <div>
	   <% String secure_id = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt (request, "tcorgchart", sIdWorkUnit); %> 
         <span id=<%=sIdHR%> idWU=<%=secure_id%> title='<%=sAuxLabel%>' onclick='m4OrgChart.Orgchart.executeDynamicOrgchart(event);'><%=sGbName%></span>
       </div>
     </m4:dataloop>
<%
  } else if (sAction.equals("SearchWU")) {
%>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_CLICK_WU" var="sAuxLabel" htmlsafe="true"/>
     <m4:dataloop outputdef="<%=sNodeSearchWU%>">
       <m4:item outputdef="<%=sNodeSearchWU%>" item="STD_N_WORK_UNIT" var="sNameWorkUnit" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeSearchWU%>" item="STD_ID_WORK_UNIT" var="sIdWorkUnit" htmlsafe="true"/>
       <div>
	   <% String secure_id = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt (request, "tcorgchart", sIdWorkUnit); %>           
         <span id=<%=sIdWorkUnit%> idWU=<%=secure_id%> title='<%=sAuxLabel%>' onclick='m4OrgChart.Orgchart.executeDynamicOrgchart(event);'><%=sNameWorkUnit%></span>
       </div>
     </m4:dataloop>
<%
  } else if (sAction.equals("Expand")) {
%>
     <m4:dataloop outputdef="<%=sNodeReturn%>">
       <m4:item outputdef="<%=sNodeReturn%>" item="SCO_PRP_ID_WORK_UNIT" var="sIdWorkUnit" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeReturn%>" item="SCO_PRP_N_WORK_UNIT" var="sNameWorkUnit" htmlsafe="true"/>
       <div class='levelOrgtree' id='div<%=sIdWorkUnit%>'>
         <div onmouseover="m4OrgChart.Functions.showIconDyn(this);" onmouseout="m4OrgChart.Functions.hideIconDyn(this);" class='divSpanOrgChart closedOrgtree' id='<%=sIdWorkUnit%>' idWU='<%=sIdWorkUnit%>' idParent='div<%=sIdWorkUnit%>' idSons='divSons<%=sIdWorkUnit%>' bLoaded='false' bExpanded='false' bChild onclick='m4OrgChart.Orgchart.clickMe(event);'>
		 <% String secure_id = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt (request, "tcorgchart", sIdWorkUnit); %>
           <span onclick='m4OrgChart.Orgchart.executeDynamicOrgchart(event);' idWU='<%=secure_id%>'><%=sNameWorkUnit%>		   
		   </span>
         </div>
         <div class='sonsOrgtree' id='divSons<%=sIdWorkUnit%>' style='display:none'></div>
       </div>
     </m4:dataloop>
<%
  } else if (sAction.equals("Getpath")) {
%>
     <m4:item outputdef="<%=sNodeReturn%>" item="SCO_PRP_PATH" var="sPath" htmlsafe="true"/>
<%
     out.print("{");
     out.print("\"sPath\":\"" + sPath + "\"");
     out.print("}");
  } else if (sAction.equals("List")) {
%>
     <m4:dataloop outputdef="<%=sNodeListEmp%>">
       <m4:item outputdef="<%=sNodeListEmp%>" item="SCO_PRP_ID_HR" var="sIdHR" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeListEmp%>" item="SCO_PRP_GB_NAME" var="sGbName" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeListEmp%>" item="SCO_PRP_N_WORK_LOCATION" var="sNameWorkLoc" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeListEmp%>" item="SCO_PRP_PHONE" var="sPhone" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeListEmp%>" item="SCO_PRP_EMAIL" var="sEmail" htmlsafe="true"/>
       
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_SHOW_INF_EMP" var="sAuxLabel" htmlsafe="true"/>
<%
       sCol1 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sGbName.trim() + "\"" +"]";
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
         sCol2 = "[" + "\"" + saPhone[0] + "\"" + "," + "\"" + saPhone[2] + "\"" + "," + "\"" + saPhone[1] + "\"" + "]";
       } else {
         sCol2 = "[" + "\"" + "\"" + "]";
       }
%>
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_SEND_EMAIL" var="sAuxLabel" htmlsafe="true"/>
<%       
       sCol3 = "[" + "\"" + sEmail.trim() + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";
       sCol4 = "[" + "\"" + sNameWorkLoc.trim() + "\"" + "]";
%>       
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ADD_CONTACT" var="sAuxLabel" htmlsafe="true"/>
<%       
       sCol5 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";
       saEmp += ",[" + sCol1 + "," + sCol2 + "," + sCol3 + "," + sCol4 + "," + sCol5 + "]";
%>
     </m4:dataloop>

     <m4:dataloop outputdef="<%=sNodeListResp%>">
       <m4:item outputdef="<%=sNodeListResp%>" item="SCO_PRP_ID_HR" var="sIdHR" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeListResp%>" item="SCO_PRP_GB_NAME" var="sGbName" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeListResp%>" item="SCO_PRP_N_WORK_LOCATION" var="sNameWorkLoc" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeListResp%>" item="SCO_PRP_PHONE" var="sPhone" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeListResp%>" item="SCO_PRP_EMAIL" var="sEmail" htmlsafe="true"/>
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_SHOW_INF_EMP" var="sAuxLabel" htmlsafe="true"/>
<%
       sCol1 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sGbName.trim() + "\"" +"]";
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
         sCol2 = "[" + "\"" + saPhone[0] + "\"" + "," + "\"" + saPhone[2] + "\"" + "," + "\"" + saPhone[1] + "\"" + "]";
       } else {
         sCol2 = "[" + "\"" + "\"" + "]";
       }
%>
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_SEND_EMAIL" var="sAuxLabel" htmlsafe="true"/>
<%       
       sCol3 = "[" + "\"" + sEmail.trim() + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";
       sCol4 = "[" + "\"" + sNameWorkLoc.trim() + "\"" + "]";
%>       
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ADD_CONTACT" var="sAuxLabel" htmlsafe="true"/>
<%       
       sCol5 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";
       saResp += ",[" + sCol1 + "," + sCol2 + "," + sCol3 + "," + sCol4 + "," + sCol5 + "]";
%>       
     </m4:dataloop>
<%
     if (saEmp.length() > 0) {
       saEmp = saEmp.substring(1, saEmp.length());
     }

     if (saResp.length() > 0) {
       saResp = saResp.substring(1, saResp.length());
     }
     out.print("{");
     out.print("\"saEmp\":[" + saEmp + "]");
     out.print(",\"saResp\":[" + saResp + "]");
     out.print("}");

  } else if (sAction.equals("Sort")) {
%>
     <m4:dataloop outputdef="<%=sNodeList%>">
       <m4:item outputdef="<%=sNodeList%>" item="SCO_PRP_ID_HR" var="sIdHR" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeList%>" item="SCO_PRP_GB_NAME" var="sGbName" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeList%>" item="SCO_PRP_N_WORK_LOCATION" var="sNameWorkLoc" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeList%>" item="SCO_PRP_PHONE" var="sPhone" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeList%>" item="SCO_PRP_EMAIL" var="sEmail" htmlsafe="true"/>
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_SHOW_INF_EMP" var="sAuxLabel" htmlsafe="true"/>
<%
       sCol1 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sGbName.trim() + "\"" +"]";
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
         sCol2 = "[" + "\"" + saPhone[0] + "\"" + "," + "\"" + saPhone[2] + "\"" + "," + "\"" + saPhone[1] + "\"" + "]";
       } else {
         sCol2 = "[" + "\"" + "\"" + "]";
       }
%>
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_SEND_EMAIL" var="sAuxLabel" htmlsafe="true"/>
<%       
       sCol3 = "[" + "\"" + sEmail.trim() + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";
       sCol4 = "[" + "\"" + sNameWorkLoc.trim() + "\"" + "]";
%>       
       <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_ADD_CONTACT" var="sAuxLabel" htmlsafe="true"/>
<%       
       sCol5 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";
       saList += ",[" + sCol1 + "," + sCol2 + "," + sCol3 + "," + sCol4 + "," + sCol5 + "]";
%>       
     </m4:dataloop>
<%
     if (saList.length() > 0) {
       saList = saList.substring(1, saList.length());
     }
     out.print("{");
     out.print("\"saList\":[" + saList + "]");
     out.print("}");

  } else if (sAction.equals("Root")) {
%>
     <m4:dataloop outputdef="<%=sNodeMain%>">
       <m4:item outputdef="<%=sNodeMain%>" item="STD_ID_WORK_UNIT" var="sIdWorkUnit" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeMain%>" item="STD_N_WORK_UNIT" var="sNameWorkUnit" htmlsafe="true"/>
       <div class='rootOrgtree' id='div<%=sIdWorkUnit%>'>
         <div class='divSpanOrgChart closedOrgtree' id='<%=sIdWorkUnit%>' idWU='<%=sIdWorkUnit%>' idParent='div<%=sIdWorkUnit%>' idSons='divSons<%=sIdWorkUnit%>' bLoaded='false' bExpanded='false' bChild onclick='m4OrgChart.Orgchart.clickMe(event);'>
           <span><%=sNameWorkUnit%></span>
         </div>
         <div class='sonsOrgtree' id='divSons<%=sIdWorkUnit%>' style='display:none'></div>
       </div>
     </m4:dataloop>
<%
  }
  oM4Log.debug("ssco_engine_org_chart.jsp: exit");
%>

</m4:page>