<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*" %>

<%
  String sIDEMSS = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sIdEMMS");
  String sIDEMSSDecode = URLDecoder.decode(sIDEMSS,"UTF-8");
  if (sIDEMSSDecode==null){sIDEMSSDecode = "";}

  String sIDMenu = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sIDMenu");
  String sIDMenuDecode = URLDecoder.decode(sIDMenu,"UTF-8");
  if (sIDMenuDecode==null){sIDMenuDecode = "";}

  String sIDParentMenu = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sIDParentMenu");
  String sIDParentMenuDecode = URLDecoder.decode(sIDParentMenu,"UTF-8");
  if (sIDParentMenuDecode==null){sIDParentMenuDecode = "";}

  String sName = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sName");
  String sNameDecode = URLDecoder.decode(sName,"UTF-8");
  if (sNameDecode==null){sNameDecode = "";}

  String sUrl = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sUrl");
  String sUrlDecode = URLDecoder.decode(sUrl,"UTF-8");
  if (sUrlDecode==null){sUrlDecode = "";}
 
  String sSubsession = "SGCO_MIGRATION_MENU";
  String smeta4Obj = "SGCO_MIGRATION_MENU";
  String sNode = "SGCO_MIGRATION_MENU";
  String sMethod = smeta4Obj + "!" + sNode + ".SCO_ADD_MENU";
  String sOutputDefAlias = sNode;
  String sOutputDefResult = smeta4Obj + "!" + sNode + "[*]";
  String sItemResult = sSubsession + ":" + smeta4Obj + "!" + sNode + "[].SCO_PRP_RESULT";
%>

<m4:page subsessionid="<%=sSubsession%>">

<m4:job>
  <m4:datadef m4name="<%=smeta4Obj%>" m4o="<%=smeta4Obj%>"/>
  <m4:exec m4method="<%=sMethod%>">
    <m4:param name="ARG_IND_EMSS" value="<%=sIDEMSSDecode%>"/>
    <m4:param name="ARG_ID_MENU" value="<%=sIDMenuDecode%>"/>
    <m4:param name="ARG_ID_PARENT_MENU" value="<%=sIDParentMenuDecode%>"/>
    <m4:param name="ARG_MENU_NAME" value="<%=sNameDecode%>"/>
    <m4:param name="ARG_URL" value="<%=sUrlDecode%>"/>
  </m4:exec>
  <m4:outputdef m4alias="<%=sOutputDefAlias%>">
    <m4:param name="m4name0" value="<%=sOutputDefResult%>"/>
  </m4:outputdef>
</m4:job>
<m4:item m4varname="vValue" m4name="<%=sItemResult%>"/>

<?xml version='1.0' encoding='ISO-8859-1'?>
<data>
  <result><%=vValue%></result>
</data>
</m4:page>
