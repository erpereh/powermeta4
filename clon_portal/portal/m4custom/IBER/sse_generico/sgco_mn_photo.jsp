<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*, java.lang.Math"%>
<%@ page import="com.meta4.m4operations.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("sgco_mn_photo.jsp: entry");

  String sAction = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Action");

  oM4Log.debug("  Action: " + sAction);

  String sPath = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Path");
  if (sPath == null) {sPath="";}
  if (!sPath.equals("")) {
    oM4Log.debug("  Path: " + sPath);
  }

  String sPathURI = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PathURI");
  if (sPathURI == null) {sPathURI="";}
  if (!sPathURI.equals("")) {
    oM4Log.debug("  PathURI: " + sPathURI);
  }

  String sIdHR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR");
  if (sIdHR == null) {sIdHR="";}
  if (!sIdHR.equals("")) {
    oM4Log.debug("  IdHR: " + sIdHR);
  }
  
  String sSubSession = "SGCO_MN_PHOTO_PERSON";
  String sMeta4Object = "SGCO_MN_PHOTO_PERSON";

  String sNodeMain = "SGCO_MN_PHOTO_PERSON";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";

  String sTitle = "", sModTitle = "", sDelTitle = "", sPathPhoto = "", sNotify = "";

  String sNodeLabel = "SGCO_MN_PHOTO_LABEL";
  String sDataDefLabel = sMeta4Object + "!" + sNodeLabel;
  String sOutputDefLabel = sDataDefLabel + "[*]";
  
  String sLblOk = "", sLblCancel = "", sLblModify = "";
  String sLblDelTitle = "", sLblDeleted = "", sLblDeling = "", sLblDelPhoto = "";
  String sLblImgSize = "", sLblImgType = "", sLblImgNo = "", sLblImgInvalidSize = "";
  String sLblUpdTitle = "", sLblUpdated = "", sLblUpding = "", sLblUpdPhoto = "", sLblUpdNo = "";

  String sMethodSet = sDataDefMain + ".SCO_MTD_SET_PATH";
  String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";
  String sMethodDel = sDataDefMain + ".SCO_MTD_DELETE";


%>

<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
    <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>

<%
  if (sAction.equals("Set")) {
%>    
    <m4:exec m4method="<%=sMethodSet%>">
      <m4:param name="ARG_PATH" value="<%=sPath%>"/>
      <m4:param name="ARG_PATH_URI" value="<%=sPathURI%>"/>
    </m4:exec>
<%
  } else if (sAction.equals("Load")) {
%>
    <m4:exec m4method="<%=sMethodLoad%>">
      <m4:param name="ARG_ID_HR" value="<%=sIdHR%>"/>
    </m4:exec>
<%
  } else if (sAction.equals("Del")) {
%>
    <m4:exec m4method="<%=sMethodDel%>"></m4:exec>
<%
  } 

  if (sAction.equals("Set")) {
%>
    <m4:outputdef m4alias="<%=sNodeLabel%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabel%>"/></m4:outputdef>
<%
  } else {
%>
    <m4:outputdef m4alias="<%=sNodeMain%>"><m4:param name="M4NAME0" value="<%=sOutputDefMain%>"/></m4:outputdef>
<%
  } 
%>

 </m4:job>

<% 

  //Generate JSON response (strings (keys and values) within doublequotes)
  out.print("{");

  if (sAction.equals("Load") || sAction.equals("Del")) {
%>
     <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_TITLE" var="sTitle" htmlsafe="true"/>
     <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_PHOTO" var="sPathPhoto"/>
     <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_NOTIFY" var="sNotify"/>
<%
     out.print("\"sTitle\":\"" + sTitle + "\"");
     out.print(",\"sPathPhoto\":\"" + sPathPhoto + "\"");
     out.print(",\"sNotify\":\"" + sNotify + "\"");
     out.print(",\"sIdHR\":\"" + sIdHR + "\"");

    oM4Log.debug("  PathPhoto: " + sPathPhoto);

  } else {

%>

     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_OK" var="sLblOk" htmlsafe="true"/>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_CANCEL" var="sLblCancel" htmlsafe="true"/>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_MODIFY" var="sLblModify" htmlsafe="true"/>

     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_DELETED" var="sLblDeleted" htmlsafe="true"/>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_DELING" var="sLblDeling" htmlsafe="true"/>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_DELPHOTO" var="sLblDelPhoto" />
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_IMGNO" var="sLblImgNo" htmlsafe="true"/>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_IMGINVALIDSIZE" var="sLblImgInvalidSize" htmlsafe="true"/>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_IMGSIZE" var="sLblImgSize" htmlsafe="true"/>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_IMGTYPE" var="sLblImgType" htmlsafe="true"/>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_UPDATED" var="sLblUpdated" htmlsafe="true"/>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_UPDING" var="sLblUpding" htmlsafe="true"/>
     <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_UPDPHOTO" var="sLblUpdPhoto"/>

     <m4:item outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_DELTITLE" var="sLblDelTitle"/>
     <m4:item outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_UPDTITLE" var="sLblUpdTitle"/>
     <m4:item outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_UPDNO" var="sLblUpdNo"/>
<%

     out.print("\"sLblOk\":\"" + sLblOk + "\"");
     out.print(",\"sLblCancel\":\"" + sLblCancel + "\"");
     out.print(",\"sLblModify\":\"" + sLblModify + "\"");
     out.print(",\"sLblDeleted\":\"" + sLblDeleted + "\"");
     out.print(",\"sLblDeling\":\"" + sLblDeling + "\"");
     out.print(",\"sLblDelPhoto\":\"" + sLblDelPhoto + "\"");
     out.print(",\"sLblImgNo\":\"" + sLblImgNo + "\"");
     out.print(",\"sLblImgInvalidSize\":\"" + sLblImgInvalidSize + "\"");
     out.print(",\"sLblImgSize\":\"" + sLblImgSize + "\"");
     out.print(",\"sLblImgType\":\"" + sLblImgType + "\"");
     out.print(",\"sLblUpdated\":\"" + sLblUpdated + "\"");
     out.print(",\"sLblUpding\":\"" + sLblUpding + "\"");
     out.print(",\"sLblUpdPhoto\":\"" + sLblUpdPhoto + "\"");

     out.print(",\"sLblDelTitle\":\"" + sLblDelTitle + "\"");
     sLblUpdTitle = sLblUpdTitle.replaceAll("&#60;","<");
     sLblUpdTitle = sLblUpdTitle.replaceAll("&#62;",">");
     out.print(",\"sLblUpdTitle\":\"" + sLblUpdTitle + "\"");
     out.print(",\"sLblUpdNo\":\"" + sLblUpdNo + "\"");

  }
  
  out.print("}");

  oM4Log.debug("sgco_mn_photo.jsp: exit");
%>

</m4:page>