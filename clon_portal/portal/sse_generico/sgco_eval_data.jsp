<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*, java.lang.Math"%>
<%@ page import="com.meta4.m4operations.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("sgco_eval_data.jsp: entry");
  String sNode = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Node");
  if (sNode == null) {sNode="";}
  oM4Log.debug("  iNode: " + sNode);

  String sIdObjective = "";
  String sIdExtdKn = "";
  String sIdMagnitud = "";
  String sDtStart = "4000-01-01";

  if (sNode.equals("1") || sNode.equals("2") || sNode.equals("3") || sNode.equals("6")) {
    sIdObjective = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdObjective");
    if (sIdObjective == null) {sIdObjective="";}

    oM4Log.debug("  IdObjective: " + sIdObjective);
  }
  
  if (sNode.equals("3")) {
    sIdMagnitud = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdMagnitud");
    if (sIdMagnitud == null) {sIdMagnitud="";}

    oM4Log.debug("  IdMagnitud: " + sIdMagnitud);

  } else {

    sDtStart = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DtStart");
    if (sDtStart == null || sDtStart.equals("")) {sDtStart="4000-01-01";}
    oM4Log.debug("  DtStart: " + sDtStart);
    
    if (sNode.equals("4") || sNode.equals("5")) {
      sIdExtdKn = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdExtdKn");
      if (sIdExtdKn == null) {sIdObjective="";}

      oM4Log.debug("  IdExtdKn: " + sIdExtdKn);
    }
  }

  String sSubSession = "SGCO_EVAL_OBJ_TEMPLATE";
  String sMeta4Object = "SGCO_EVAL_OBJ_TEMPLATE";

  String sNodeMain = "SGCO_EVAL_OBJ_MAIN";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";

  String sNodeEvCual = "SGCO_EVAL_CUAL";
  String sDataEvCual = sMeta4Object + "!" + sNodeEvCual;
  String sOutputDefEvCual = sDataEvCual + "[*]";
  String sMoveEvCual = sNodeEvCual + ":" + sNodeEvCual + "[FIRST]";

  String sNodeEvCualFollowup = "SGCO_EVAL_CUAL_FOLLOWUP";
  String sDataEvCualFollowup = sMeta4Object + "!" + sNodeEvCualFollowup;
  String sOutputDefEvCualFollowup = sDataEvCualFollowup + "[*]";
  String sMoveEvCualFollowup = sNodeEvCualFollowup + ":" + sNodeEvCualFollowup + "[FIRST]";
  
  String sNodeEvQuan = "SGCO_EVAL_QUAN";
  String sDataEvQuan = sMeta4Object + "!" + sNodeEvQuan;
  String sOutputDefEvQuan = sDataEvQuan + "[*]";

  String sNodeEvQuanObj = "SGCO_EVAL_QUAN_OBJ";
  String sDataEvQuanObj = sMeta4Object + "!" + sNodeEvQuanObj;
  String sOutputDefEvQuanObj = sDataEvQuanObj + "[*]";
  String sMoveEvQuanObj = sNodeEvQuanObj + ":" + sNodeEvQuanObj + "[FIRST]";

  String sNodeEvQuanMag = "SGCO_EVAL_QUAN_MAGN";
  String sDataEvQuanMag = sMeta4Object + "!" + sNodeEvQuanMag;
  String sOutputDefEvQuanMag = sDataEvQuanMag + "[*]";
  String sMoveEvQuanMag = sNodeEvQuanMag + ":" + sNodeEvQuanMag + "[FIRST]";

  String sNodeEvExtdKn = "SGCO_EVAL_EXTD_KN";
  String sDataEvExtdKn = sMeta4Object + "!" + sNodeEvExtdKn;
  String sOutputDefEvExtdKn = sDataEvExtdKn + "[*]";
  String sMoveEvExtdKn = sNodeEvExtdKn + ":" + sNodeEvExtdKn + "[FIRST]";

  String sNodeEvExtdKnFollowup = "SGCO_EVAL_EXTD_KN_FOLLOWUP";
  String sDataEvExtdKnFollowup = sMeta4Object + "!" + sNodeEvExtdKnFollowup;
  String sOutputDefEvExtdKnFollowup = sDataEvExtdKnFollowup + "[*]";
  String sMoveEvExtdKnFollowup = sNodeEvExtdKnFollowup + ":" + sNodeEvExtdKnFollowup + "[FIRST]";

  String sNodeObj = "SGCO_EVAL_OBJECTIVE";
  String sDataObj = sMeta4Object + "!" + sNodeObj;
  String sOutputDefObj = sDataObj + "[*]";
  String sMoveObj = sNodeObj + ":" + sNodeObj + "[FIRST]";

  String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";
  
  String sCount = "";
  String sNodeAux = "";

  int iCount = 0; 
  
  char cReturn = (char)13;
  char cNewLine = (char)10;
  
  String sReturn = String.valueOf(cReturn);
  String sNewLine = String.valueOf(cNewLine);

  String sClosed = "";
  String sPrev = "";
  String sNext = "";

%>

<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
    <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>
    <m4:exec m4method="<%=sMethodLoad%>">
        <m4:param name="ARG_NODE" value="<%=sNode%>"/>
        <m4:param name="ARG_ID_OBJECTIVE" value="<%=sIdObjective%>"/>
        <m4:param name="ARG_ID_EXTD_KN" value="<%=sIdExtdKn%>"/>
        <m4:param name="ARG_ID_MAGNITUD" value="<%=sIdMagnitud%>"/>
        <m4:param name="ARG_DT_START" value="<%=sDtStart%>"/>
    </m4:exec>

    <m4:outputdef m4alias="<%=sNodeMain%>"><m4:param name="M4NAME0" value="<%=sOutputDefMain%>"/></m4:outputdef>

  <%if (sNode.equals("1")) {%>
    <m4:outputdef m4alias="<%=sNodeEvCual%>"><m4:param name="M4NAME0" value="<%=sOutputDefEvCual%>"/></m4:outputdef>
    <m4:move><m4:param name="<%=sSubSession%>" value="<%=sMoveEvCual%>"/></m4:move>
  <%}else if (sNode.equals("2")){%>
    <m4:outputdef m4alias="<%=sNodeEvCualFollowup%>"><m4:param name="M4NAME0" value="<%=sOutputDefEvCualFollowup%>"/></m4:outputdef>
    <m4:move><m4:param name="<%=sSubSession%>" value="<%=sMoveEvCualFollowup%>"/></m4:move>
  <%}else if (sNode.equals("3")){%>
    <m4:outputdef m4alias="<%=sNodeEvQuan%>"><m4:param name="M4NAME0" value="<%=sOutputDefEvQuan%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeEvQuanObj%>"><m4:param name="M4NAME0" value="<%=sOutputDefEvQuanObj%>"/></m4:outputdef>
    <m4:move><m4:param name="<%=sSubSession%>" value="<%=sMoveEvQuanObj%>"/></m4:move>
    <m4:outputdef m4alias="<%=sNodeEvQuanMag%>"><m4:param name="M4NAME0" value="<%=sOutputDefEvQuanMag%>"/></m4:outputdef>
    <m4:move><m4:param name="<%=sSubSession%>" value="<%=sMoveEvQuanMag%>"/></m4:move>
  <%}else if (sNode.equals("4")){%>
    <m4:outputdef m4alias="<%=sNodeEvExtdKn%>"><m4:param name="M4NAME0" value="<%=sOutputDefEvExtdKn%>"/></m4:outputdef>
    <m4:move><m4:param name="<%=sSubSession%>" value="<%=sMoveEvExtdKn%>"/></m4:move>
  <%}else if (sNode.equals("5")){%>
    <m4:outputdef m4alias="<%=sNodeEvExtdKnFollowup%>"><m4:param name="M4NAME0" value="<%=sOutputDefEvExtdKnFollowup%>"/></m4:outputdef>
    <m4:move><m4:param name="<%=sSubSession%>" value="<%=sMoveEvExtdKnFollowup%>"/></m4:move>
  <%}else if (sNode.equals("6")){%>
    <m4:outputdef m4alias="<%=sNodeObj%>"><m4:param name="M4NAME0" value="<%=sOutputDefObj%>"/></m4:outputdef>
    <m4:move><m4:param name="<%=sSubSession%>" value="<%=sMoveObj%>"/></m4:move>
  <%}%>
 </m4:job>

<%

  int i = 0;

  //Generate JSON response (strings (keys and values) within doublequotes)
  out.print("{");

  %><m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_CLOSED" var="sClosed"/> 
  <%

  out.print("\"sClosed\":" + "\"" + sClosed + "\"");
  
  if (sNode.equals("1")) {

    String sTitle = "", sSubTitle1 = "", sSubTitle2 = "", sSubTitle3 = "";

    %><m4:label get="item" outputdef="<%=sNodeEvCual%>" item="SCO_PRP_TITLE" var="sTitle" htmlsafe="true"/>
      <m4:label get="item" outputdef="<%=sNodeEvCual%>" item="SCO_NM_OBJECTIVE" var="sSubTitle1" htmlsafe="true"/>
      <m4:label get="item" outputdef="<%=sNodeEvCual%>" item="SCO_PRP_LEVEL" var="sSubTitle2" htmlsafe="true"/>
      <m4:label get="item" outputdef="<%=sNodeEvCual%>" item="SCO_PRP_MEANING" var="sSubTitle3" htmlsafe="true"/>
    <%

    out.print(",\"sTitle\":" + "\"" + sTitle + "\"");
    out.print(",\"sSubTitle1\":" + "\"" + sSubTitle1 + "\"");
    out.print(",\"sSubTitle2\":" + "\"" + sSubTitle2 + "\"");
    out.print(",\"sSubTitle3\":" + "\"" + sSubTitle3 + "\"");

    String sNmObjective = "", sDescObjective = "";
    String sIdLevel = "", sNmLevel = "", sNmMeaning = "";
    String saIdLevel = "", saNmLevel = "", saNmMeaning = "";

    %>
      <m4:item outputdef="<%=sNodeEvCual%>" item="SCO_NM_OBJECTIVE" var="sNmObjective" htmlsafe="true"/> 
      <m4:item outputdef="<%=sNodeEvCual%>" item="SCO_DESCRIPTION" var="sDescObjective" htmlsafe="true"/> 
      <m4:dataloop outputdef="<%=sNodeEvCual%>">
       <m4:item outputdef="<%=sNodeEvCual%>" item="SCO_ID_LEVEL" var="sIdLevel" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeEvCual%>" item="SCO_NM_LEVEL" var="sNmLevel" htmlsafe="true"/> 
       <m4:item outputdef="<%=sNodeEvCual%>" item="SCO_MEANING" var="sNmMeaning" htmlsafe="true"/>
    <%

      if (sNmLevel.indexOf(sNewLine) > -1) {
        sNmLevel = sNmLevel.replaceAll(sReturn,"");
        sNmLevel = sNmLevel.replaceAll(sNewLine,"<br>");
      }
      if (sNmMeaning.indexOf(sNewLine) > -1) {
        sNmMeaning = sNmMeaning.replaceAll(sReturn,"");
        sNmMeaning = sNmMeaning.replaceAll(sNewLine,"<br>");
      }

      if (sDescObjective.indexOf(sNewLine) > -1) {
        sDescObjective = sDescObjective.replaceAll(sReturn,"");
        sDescObjective = sDescObjective.replaceAll(sNewLine,"<br>");
      }

      saIdLevel += "," + "\"" + sIdLevel + "\"";
      saNmLevel += "," + "\"" + sNmLevel + "\"";
      saNmMeaning += "," + "\"" + sNmMeaning + "\"";
    %></m4:dataloop><%

    out.print(",\"sNmObjective\":" + "\"" + sNmObjective + "\"");
    out.print(",\"sDescObjective\":" + "\"" + sDescObjective + "\"");
    out.print(",\"saIdLevel\":[" + saIdLevel.substring(1, saIdLevel.length()) + "]");
    out.print(",\"saNmLevel\":[" + saNmLevel.substring(1, saNmLevel.length()) + "]");
    out.print(",\"saNmMeaning\":[" + saNmMeaning.substring(1, saNmMeaning.length()) + "]");

  }else if (sNode.equals("2")){

    String sTitle = "", sSubTitle1 = "", sSubTitle2 = "", sSubTitle3 = "";

    %><m4:label get="item" outputdef="<%=sNodeEvCualFollowup%>" item="SCO_PRP_TITLE" var="sTitle" htmlsafe="true"/> 
      <m4:label get="item" outputdef="<%=sNodeEvCualFollowup%>" item="SCO_NM_OBJECTIVE" var="sSubTitle1" htmlsafe="true"/> 
      <m4:label get="item" outputdef="<%=sNodeEvCualFollowup%>" item="SCO_PRP_LEVEL" var="sSubTitle2" htmlsafe="true"/>
      <m4:label get="item" outputdef="<%=sNodeEvCualFollowup%>" item="SCO_PRP_MEANING" var="sSubTitle3" htmlsafe="true"/>
    <%

    out.print(",\"sTitle\":" + "\"" + sTitle + "\"");
    out.print(",\"sSubTitle1\":" + "\"" + sSubTitle1 + "\"");
    out.print(",\"sSubTitle2\":" + "\"" + sSubTitle2 + "\"");
    out.print(",\"sSubTitle3\":" + "\"" + sSubTitle3 + "\"");

    String sNmObjective = "";
    String sIdLevel = "", sNmLevel = "", sNmMeaning = "";
    String saIdLevel = "", saNmLevel = "", saNmMeaning = "";

    %>
      <m4:item outputdef="<%=sNodeEvCualFollowup%>" item="SCO_NM_OBJECTIVE" var="sNmObjective" htmlsafe="true"/> 
      <m4:dataloop outputdef="<%=sNodeEvCualFollowup%>">
       <m4:item outputdef="<%=sNodeEvCualFollowup%>" item="SCO_ID_LEVEL" var="sIdLevel" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeEvCualFollowup%>" item="SCO_NM_LEVEL" var="sNmLevel" htmlsafe="true"/> 
       <m4:item outputdef="<%=sNodeEvCualFollowup%>" item="SCO_MEANING" var="sNmMeaning" htmlsafe="true"/>
    <%

      if (sNmLevel.indexOf(sNewLine) > -1) {
        sNmLevel = sNmLevel.replaceAll(sReturn,"");
        sNmLevel = sNmLevel.replaceAll(sNewLine,"<br>");
      }
      if (sNmMeaning.indexOf(sNewLine) > -1) {
        sNmMeaning = sNmMeaning.replaceAll(sReturn,"");
        sNmMeaning = sNmMeaning.replaceAll(sNewLine,"<br>");
      }

      saIdLevel += "," + "\"" + sIdLevel + "\"";
      saNmLevel += "," + "\"" + sNmLevel + "\"";
      saNmMeaning += "," + "\"" + sNmMeaning + "\"";
    %></m4:dataloop><%

    out.print(",\"sNmObjective\":" + "\"" + sNmObjective + "\"");
    out.print(",\"saIdLevel\":[" + saIdLevel.substring(1, saIdLevel.length()) + "]");
    out.print(",\"saNmLevel\":[" + saNmLevel.substring(1, saNmLevel.length()) + "]");
    out.print(",\"saNmMeaning\":[" + saNmMeaning.substring(1, saNmMeaning.length()) + "]");
    
  }else if (sNode.equals("3")){

    String sTitle = "", sSubTitle1 = "", sSubTitle2 = "";

    %><m4:label get="item" outputdef="<%=sNodeEvQuan%>" item="SCO_PRP_TITLE" var="sTitle" htmlsafe="true"/>
      <m4:label get="item" outputdef="<%=sNodeEvQuanObj%>" item="SCO_NM_OBJECTIVE" var="sSubTitle1" htmlsafe="true"/>
      <m4:label get="item" outputdef="<%=sNodeEvQuanMag%>" item="SCO_NM_MAGNITUDE" var="sSubTitle2" htmlsafe="true"/>
    <%

    out.print(",\"sTitle\":" + "\"" + sTitle + "\"");
    out.print(",\"sSubTitle1\":" + "\"" + sSubTitle1 + "\"");
    out.print(",\"sSubTitle2\":" + "\"" + sSubTitle2 + "\"");
    
    String sNmObjective = "", sDescObjective = "", sNmMagnitude = "", sDescMagnitude = "";
    %>
       <m4:item outputdef="<%=sNodeEvQuanObj%>" item="SCO_NM_OBJECTIVE" var="sNmObjective" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeEvQuanObj%>" item="SCO_DESCRIPTION" var="sDescObjective" htmlsafe="true"/>

       <m4:item outputdef="<%=sNodeEvQuanMag%>" item="SCO_NM_MAGNITUDE" var="sNmMagnitude" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeEvQuanMag%>" item="SCO_COMMENT" var="sDescMagnitude" htmlsafe="true"/>
    <%

    if (sDescObjective.indexOf(sNewLine) > -1) {
      sDescObjective = sDescObjective.replaceAll(sReturn,"");
      sDescObjective = sDescObjective.replaceAll(sNewLine,"<br>");
    }

    if (sDescMagnitude.indexOf(sNewLine) > -1) {
      sDescMagnitude = sDescMagnitude.replaceAll(sReturn,"");
      sDescMagnitude = sDescMagnitude.replaceAll(sNewLine,"<br>");
    }
    
    out.print(",\"sNmObjective\":" + "\"" + sNmObjective + "\"");
    out.print(",\"sDescObjective\":" + "\"" + sDescObjective + "\"");
    out.print(",\"sNmMagnitude\":" + "\"" + sNmMagnitude + "\"");
    out.print(",\"sDescMagnitude\":" + "\"" + sDescMagnitude + "\"");

  }else if (sNode.equals("4")){

    String sTitle = "", sSubTitle1 = "", sSubTitle2 = "", sSubTitle3 = "";

    %><m4:label get="item" outputdef="<%=sNodeEvExtdKn%>" item="SCO_PRP_TITLE" var="sTitle" htmlsafe="true"/>
      <m4:label get="item" outputdef="<%=sNodeEvExtdKn%>" item="SCO_NM_EXTD_KN" var="sSubTitle1" htmlsafe="true"/>
      <m4:label get="item" outputdef="<%=sNodeEvExtdKn%>" item="SCO_PRP_LEVEL" var="sSubTitle2" htmlsafe="true"/>
      <m4:label get="item" outputdef="<%=sNodeEvExtdKn%>" item="SCO_PRP_MEANING" var="sSubTitle3" htmlsafe="true"/>
    <%

    out.print(",\"sTitle\":" + "\"" + sTitle + "\"");
    out.print(",\"sSubTitle1\":" + "\"" + sSubTitle1 + "\"");
    out.print(",\"sSubTitle2\":" + "\"" + sSubTitle2 + "\"");
    out.print(",\"sSubTitle3\":" + "\"" + sSubTitle3 + "\"");

    String sNmObjective = "";
    String sIdLevel = "", sNmLevel = "", sNmMeaning = "";
    String saIdLevel = "", saNmLevel = "", saNmMeaning = "";

    %>
      <m4:item outputdef="<%=sNodeEvExtdKn%>" item="SCO_NM_EXTD_KN" var="sNmObjective" htmlsafe="true"/>
      <m4:dataloop outputdef="<%=sNodeEvExtdKn%>">
       <m4:item outputdef="<%=sNodeEvExtdKn%>" item="SCO_ID_LEVEL" var="sIdLevel" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeEvExtdKn%>" item="SCO_NM_LEVEL" var="sNmLevel" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeEvExtdKn%>" item="SCO_MEANING" var="sNmMeaning" htmlsafe="true"/>
    <%

      if (sNmLevel.indexOf(sNewLine) > -1) {
        sNmLevel = sNmLevel.replaceAll(sReturn,"");
        sNmLevel = sNmLevel.replaceAll(sNewLine,"<br>");
      }
      if (sNmMeaning.indexOf(sNewLine) > -1) {
        sNmMeaning = sNmMeaning.replaceAll(sReturn,"");
        sNmMeaning = sNmMeaning.replaceAll(sNewLine,"<br>");
      }

      saIdLevel += "," + "\"" + sIdLevel + "\"";
      saNmLevel += "," + "\"" + sNmLevel + "\"";
      saNmMeaning += "," + "\"" + sNmMeaning + "\"";
    %></m4:dataloop><%

    out.print(",\"sNmObjective\":" + "\"" + sNmObjective + "\"");
    out.print(",\"saIdLevel\":[" + saIdLevel.substring(1, saIdLevel.length()) + "]");
    out.print(",\"saNmLevel\":[" + saNmLevel.substring(1, saNmLevel.length()) + "]");
    out.print(",\"saNmMeaning\":[" + saNmMeaning.substring(1, saNmMeaning.length()) + "]");

  }else if (sNode.equals("5")){

    String sTitle = "", sSubTitle1 = "", sSubTitle2 = "", sSubTitle3 = "";

    %><m4:label get="item" outputdef="<%=sNodeEvExtdKnFollowup%>" item="SCO_PRP_TITLE" var="sTitle" htmlsafe="true"/> 
      <m4:label get="item" outputdef="<%=sNodeEvExtdKnFollowup%>" item="SCO_NM_EXTD_KN" var="sSubTitle1" htmlsafe="true"/> 
      <m4:label get="item" outputdef="<%=sNodeEvExtdKnFollowup%>" item="SCO_PRP_LEVEL" var="sSubTitle2" htmlsafe="true"/>
      <m4:label get="item" outputdef="<%=sNodeEvExtdKnFollowup%>" item="SCO_PRP_MEANING" var="sSubTitle3" htmlsafe="true"/>
    <%

    out.print(",\"sTitle\":" + "\"" + sTitle + "\"");
    out.print(",\"sSubTitle1\":" + "\"" + sSubTitle1 + "\"");
    out.print(",\"sSubTitle2\":" + "\"" + sSubTitle2 + "\"");
    out.print(",\"sSubTitle3\":" + "\"" + sSubTitle3 + "\"");

    String sNmObjective = "";
    String sIdLevel = "", sNmLevel = "", sNmMeaning = "";
    String saIdLevel = "", saNmLevel = "", saNmMeaning = "";

    %>
      <m4:item outputdef="<%=sNodeEvExtdKnFollowup%>" item="SCO_NM_EXTD_KN" var="sNmObjective" htmlsafe="true"/> 
      <m4:dataloop outputdef="<%=sNodeEvExtdKnFollowup%>">
       <m4:item outputdef="<%=sNodeEvExtdKnFollowup%>" item="SCO_ID_LEVEL" var="sIdLevel" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeEvExtdKnFollowup%>" item="SCO_NM_LEVEL" var="sNmLevel" htmlsafe="true"/> 
       <m4:item outputdef="<%=sNodeEvExtdKnFollowup%>" item="SCO_MEANING" var="sNmMeaning" htmlsafe="true"/>
    <%

      if (sNmLevel.indexOf(sNewLine) > -1) {
        sNmLevel = sNmLevel.replaceAll(sReturn,"");
        sNmLevel = sNmLevel.replaceAll(sNewLine,"<br>");
      }
      if (sNmMeaning.indexOf(sNewLine) > -1) {
        sNmMeaning = sNmMeaning.replaceAll(sReturn,"");
        sNmMeaning = sNmMeaning.replaceAll(sNewLine,"<br>");
      }

      saIdLevel += "," + "\"" + sIdLevel + "\"";
      saNmLevel += "," + "\"" + sNmLevel + "\"";
      saNmMeaning += "," + "\"" + sNmMeaning + "\"";
    %></m4:dataloop><%

    out.print(",\"sNmObjective\":" + "\"" + sNmObjective + "\"");
    out.print(",\"saIdLevel\":[" + saIdLevel.substring(1, saIdLevel.length()) + "]");
    out.print(",\"saNmLevel\":[" + saNmLevel.substring(1, saNmLevel.length()) + "]");
    out.print(",\"saNmMeaning\":[" + saNmMeaning.substring(1, saNmMeaning.length()) + "]");

  }else if (sNode.equals("6")){

    String sTitle = "", sSubTitle1 = "", sSubTitle2 = "", sSubTitle3 = "";

    %><m4:label get="item" outputdef="<%=sNodeObj%>" item="SCO_PRP_TITLE" var="sTitle" htmlsafe="true"/>
      <m4:label get="item" outputdef="<%=sNodeObj%>" item="SCO_NM_OBJECTIVE" var="sSubTitle1" htmlsafe="true"/>
      <m4:label get="item" outputdef="<%=sNodeObj%>" item="SCO_PRP_LEVEL" var="sSubTitle2" htmlsafe="true"/>
      <m4:label get="item" outputdef="<%=sNodeObj%>" item="SCO_PRP_MEANING" var="sSubTitle3" htmlsafe="true"/>
    <%

    out.print(",\"sTitle\":" + "\"" + sTitle + "\"");
    out.print(",\"sSubTitle1\":" + "\"" + sSubTitle1 + "\"");
    out.print(",\"sSubTitle2\":" + "\"" + sSubTitle2 + "\"");
    out.print(",\"sSubTitle3\":" + "\"" + sSubTitle3 + "\"");

    String sNmObjective = "", sDescObjective = "";
    String sIdLevel = "", sNmLevel = "", sNmMeaning = "";
    String saIdLevel = "", saNmLevel = "", saNmMeaning = "";

    %>
      <m4:item outputdef="<%=sNodeObj%>" item="SCO_NM_OBJECTIVE" var="sNmObjective" htmlsafe="true"/> 
      <m4:item outputdef="<%=sNodeObj%>" item="SCO_DESCRIPTION" var="sDescObjective" htmlsafe="true"/> 
      <m4:dataloop outputdef="<%=sNodeObj%>">
       <m4:item outputdef="<%=sNodeObj%>" item="SCO_ID_LEVEL" var="sIdLevel" htmlsafe="true"/>
       <m4:item outputdef="<%=sNodeObj%>" item="SCO_NM_LEVEL" var="sNmLevel" htmlsafe="true"/> 
       <m4:item outputdef="<%=sNodeObj%>" item="SCO_MEANING" var="sNmMeaning" htmlsafe="true"/>
    <%

      if (sNmLevel.indexOf(sNewLine) > -1) {
        sNmLevel = sNmLevel.replaceAll(sReturn,"");
        sNmLevel = sNmLevel.replaceAll(sNewLine,"<br>");
      }
      if (sNmMeaning.indexOf(sNewLine) > -1) {
        sNmMeaning = sNmMeaning.replaceAll(sReturn,"");
        sNmMeaning = sNmMeaning.replaceAll(sNewLine,"<br>");
      }

      if (sDescObjective.indexOf(sNewLine) > -1) {
        sDescObjective = sDescObjective.replaceAll(sReturn,"");
        sDescObjective = sDescObjective.replaceAll(sNewLine,"<br>");
      }

      saIdLevel += "," + "\"" + sIdLevel + "\"";
      saNmLevel += "," + "\"" + sNmLevel + "\"";
      saNmMeaning += "," + "\"" + sNmMeaning + "\"";
    %></m4:dataloop><%

    out.print(",\"sNmObjective\":" + "\"" + sNmObjective + "\"");
    out.print(",\"sDescObjective\":" + "\"" + sDescObjective + "\"");
    out.print(",\"saIdLevel\":[" + saIdLevel.substring(1, saIdLevel.length()) + "]");
    out.print(",\"saNmLevel\":[" + saNmLevel.substring(1, saNmLevel.length()) + "]");
    out.print(",\"saNmMeaning\":[" + saNmMeaning.substring(1, saNmMeaning.length()) + "]");

  }

  out.print("}");
  oM4Log.debug("sgco_eval_data.jsp: exit");
%>
</m4:page>