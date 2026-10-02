<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>

<%
  String sIdRoot = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idRoot");
  String sIdRootDecode = URLDecoder.decode(sIdRoot,"UTF-8");
  if (sIdRootDecode==null){sIdRootDecode = "";}

  String sSubsession = "SGCO_MIGRATION_MENU";
  String smeta4Obj = "SGCO_MIGRATION_MENU";
  String sNode = "SGCO_MM_FIRST_MENU";
  String sMethod = smeta4Obj + "!" + sNode + ".SCO_LOAD_TREE_LEVEL";
  String sOutputDefResult = sSubsession + "!" + sNode + "[*]";
  String sOutputDefAlias = sNode;
  
  String sCommon = sNode + ":" + sSubsession + "!" + sNode + "[&VAR.m4lix]" + ".";
  String sID_MENU = sCommon+ "ID_MENU"; 
  String sN_MENU = sCommon+ "TRANSLATED_MENU"; 
  String sN_HTTP = sCommon+ "N_HTTP"; 
  String sSCO_PRP_N_SUBMENUS = sCommon+ "SCO_PRP_N_SUBMENUS"; 
  
%>

<m4:page subsessionid="<%=sSubsession%>">

<m4:job>
  <m4:datadef m4name="<%=smeta4Obj%>" m4o="<%=smeta4Obj%>"/>
  <m4:exec m4method="<%=sMethod%>">
     <m4:param name="ARG_ID_ROOT" value="<%=sIdRootDecode%>"/>
  </m4:exec>
  <m4:outputdef m4alias="<%=sOutputDefAlias%>">
    <m4:param name="m4name0" value="<%=sOutputDefResult%>"/>
  </m4:outputdef>
</m4:job>

<%
    int iCountOptions  = 0;
    String sIterations = "0";
    try {
        M4Operations m = new M4Operations(request);
        iCountOptions = m.getCountInClient(sNode, smeta4Obj, sNode);
        sIterations = String.valueOf(iCountOptions - 1);
    } catch(Exception e) {iCountOptions=-1;}
%>

<?xml version='1.0' encoding='ISO-8859-1'?>
<data>
<m4:loop from="0" to="<%=sIterations%>">
  <menu>
    <idmenu><m4:item m4name="<%=sID_MENU%>" htmlsafe="true"/></idmenu>
    <nmmenu><m4:item m4name="<%=sN_MENU%>" htmlsafe="true"/></nmmenu>
    <nmHTTP><m4:item m4name="<%=sN_HTTP%>" htmlsafe="true"/></nmHTTP>
    <nsubmenu><m4:item m4name="<%=sSCO_PRP_N_SUBMENUS%>" htmlsafe="true"/></nsubmenu>
  </menu>  
</m4:loop>
</data>
</m4:page>