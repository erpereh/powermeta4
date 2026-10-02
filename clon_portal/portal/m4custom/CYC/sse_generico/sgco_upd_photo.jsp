<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*, java.lang.Math"%>
<%@ page import="com.meta4.m4operations.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("sgco_upd_photo.jsp: entry");
  
  String sSubSession = "SGCO_MN_PHOTO_PERSON";
  String sMeta4Object = "SGCO_MN_PHOTO_PERSON";

  String sNodeMain = "SGCO_MN_PHOTO_PERSON";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";

  String sMethodUpd = sDataDefMain + ".SCO_MTD_UPDATE";
  
  String sTitle = "", sPathPhoto = "";

%>

<m4:page subsessionid="<%=sSubSession%>">
<%
  String sPathFile = "";
  sPathFile = (String) pageContext.getAttribute("inputFileMod");
  oM4Log.debug("  PathFile: " + sPathFile);

  //split file name  
  String[] sExts = sPathFile.split("\\.");
  String sExtLwCase = "";

  if (sExts.length > 0) {
    //verify the extension
    sExtLwCase = sExts[sExts.length - 1].toLowerCase();
    oM4Log.debug("  Extension: " + sExtLwCase);
    if (!sExtLwCase.equals("jpg") && !sExtLwCase.equals("gif") && !sExtLwCase.equals("jpeg")) {
      //it's a no valid file
      throw new Exception("Invalid File");
    }
  } else {
    //it's a no valid file
    throw new Exception("Invalid File");
  }
%>

 <m4:job>
    <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>

    <m4:setfile
      m4blob = "SGCO_MN_PHOTO_PERSON!SGCO_MN_PHOTO_PERSON.SCO_PRP_BLOB"
      m4path = "&REQUEST.inputFileMod"
    />
    <m4:exec m4method="<%=sMethodUpd%>"></m4:exec>

    <m4:outputdef m4alias="<%=sNodeMain%>"><m4:param name="M4NAME0" value="<%=sOutputDefMain%>"/></m4:outputdef>

 </m4:job>

   <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_TITLE" var="sTitle"/>
   <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_PHOTO" var="sPathPhoto"/>
   
<%

  out.print("<span id='newTitle'>");
  out.print(sTitle);
  out.print("</span>");

  out.print("<span id='newPathPhoto'>");
  out.print(sPathPhoto);
  out.print("</span>");

  oM4Log.debug("  PathPhoto: " + sPathPhoto);
  oM4Log.debug("sgco_upd_photo.jsp: exit");
%>

</m4:page>
