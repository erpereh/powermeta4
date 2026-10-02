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
  oM4Log.debug("sgco_engine_subportal.jsp: entry");

  String sIsESS = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"isESS");
  oM4Log.debug("  ESS: " + sIsESS);

  String sMenuId = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"MenuId");
  oM4Log.debug("  Menu: " + sMenuId);

  String sSubSession = "SGCO_MENU";
  String sMeta4Object = "MENUS";

  String sNodeMain = "MENU_RECURSIVE";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";
  String sMethodLoad = sDataDefMain + ".SRTC_LOAD_MENU";
  String sMethodFilter = sDataDefMain + ".SRTC_FILTER_MENU";

  String sMenuLevel0 = "SGCO_MENU";
  String sMenuLevel1 = null;
  String sMenuSectionAux = null;                      //auxiliary sections to be excluded from menu
  boolean bESS = ((int)Double.parseDouble(sIsESS) == 1);
  if (bESS) {     //ESS
      sMenuLevel1 = "SSCO_MENU";
      sMenuSectionAux = "SSCO_AUX";
  } else {        //MSS
      sMenuLevel1 = "SMCO_MENU";
      sMenuSectionAux = "SMCO_AUX";
  }

  //Filter menu options:
  // - options that belong to given tree (ESS or MSS)
  // - options that are at level 1 or higher (ignore level 0 which is ESS or MSS)
  // - options that belong to hidden sections (SSCO_AUX... or SMCO_AUX...) including hidden section.
  String sMenuFilter = "If SRTC_ID_ROOT_MENU = \"" + sMenuLevel1 + "\" and SRTC_LEVEL >=  0 and IndexOf(ID_MENU, \"" + sMenuSectionAux + "\", 0) <> 0 and IndexOf(ID_PARENT_MENU, \"" + sMenuSectionAux + "\", 0) <> 0 Then Return(1)";
  String sMenuFilterId = sDataDefMain + ".Filter";
  
  String sIdMenuRead = "", sLevelRead= "";
  String sHeaderId = "", sTitle = "", sDesc = "", sImg = "", sDefaultImg= "", sURL = "", sURLGroup = "";
  int iLevelHeader = -100, iLevelRead = 0;
  boolean bNextLevel = false;
  boolean bOpen = false;
  boolean bEmpty = false;

%>

<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
   <m4:datadef m4name = "<%=sMeta4Object%>" m4o = "<%=sMeta4Object%>"/>
   <m4:exec m4method = "<%=sMethodLoad%>">
     <m4:param name = "ARG_SRTC_ID_MENU" value = "<%=sMenuLevel0%>"/>
   </m4:exec>
   <m4:exec m4method = "<%=sMethodFilter%>">
     <m4:param name = "ARG_SRTC_ID_MENU" value = "<%=sMenuLevel1%>"/>
   </m4:exec>
   <m4:filter m4name = "<%=sMenuFilterId%>" m4filter = "<%=sMenuFilter%>"/>
   <m4:outputdef m4alias = "<%=sNodeMain%>">
     <m4:param name = "M4NAME0" value = "<%=sOutputDefMain%>"/>
   </m4:outputdef>
   <m4:removefilter m4name = "<%=sMenuFilterId%>"/>
</m4:job>


  <m4:dataloop outputdef="<%=sNodeMain%>">

    <m4:item outputdef="<%=sNodeMain%>" item="ID_MENU" var="sIdMenuRead" htmlsafe="true"/>
    <m4:item outputdef="<%=sNodeMain%>" item="SRTC_LEVEL" var="sLevelRead"/>
    <%
      iLevelRead = (int)Double.parseDouble(sLevelRead);
      if (sIdMenuRead.equals(sMenuId)) {
        sHeaderId = sIdMenuRead;
        iLevelHeader = iLevelRead;
    %>
        <m4:item outputdef="<%=sNodeMain%>" item="TRANSLATED_MENU" var="sTitle" htmlsafe="true"/> 
        <m4:item outputdef="<%=sNodeMain%>" item="N_MENU" var="sDesc" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeMain%>" item="ICON_AUX" var="sImg" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeMain%>" item="ICON" var="sDefaultImg" htmlsafe="true"/>
    <%
        if (sImg.equals("")) {
          sImg = "noimage.png";
        }
    %>

        <div id="<%=sHeaderId%>" class="m4table">
          <div id="idrowtableleft" class="m4row"> 
            <!--[if lte IE 7]>
            <table class=""> <tr class=""> <td class="m4header"> 
            <![endif]-->
            <div id="idheadersubportal" class="m4cell m4header">
              <span id="idheadertitle" class="m4headertitle"><%=sTitle%></span>
              <span id="idheaderdescription" class="m4headerdesc"><%=sDesc%></span>
            </div>
            <!--[if lte IE 7]>
            </td> <td class="m4headerimg">
            <![endif]-->
            <div id="" class="m4cell m4headerimg">
              <img id="idheaderimage" title="<%=sTitle%>" src="/iconos/<%=sImg%>">
            </div>
            <!--[if lte IE 7]>
            </td> </tr> </table>
            <![endif]-->
          </div>
        </div>  
    <%
        if (sDefaultImg.equals("")) {
          sDefaultImg = sImg;
        }
      } else if (iLevelRead == iLevelHeader) {
        bNextLevel = true;
      } else if (!bNextLevel) {
         if (iLevelRead == iLevelHeader + 1) {
           if (bEmpty) {
             if (!sURLGroup.equals("")) {
    %>
                    <span class="m4list"><a class="m4link" href="<%=sURLGroup%>"><%=sTitle%></a></span>
    <%
             } else {
    %>
                    <span class="m4list"><%=sTitle%></span>
    <%
             }
           }
           if (bOpen) {
    %> 
                 </div>
               </div>
             </div>  
           </div>
    <%
           }
    %>
           <m4:item outputdef="<%=sNodeMain%>" item="TRANSLATED_MENU" var="sTitle" htmlsafe="true"/> 
           <m4:item outputdef="<%=sNodeMain%>" item="N_MENU" var="sDesc" htmlsafe="true"/> 
           <m4:item outputdef="<%=sNodeMain%>" item="ICON_AUX" var="sImg"/>
           <m4:item outputdef="<%=sNodeMain%>" item="N_HTTP" var="sURLGroup" htmlsafe="true"/>
    <%
           if (sImg.equals("")) {
              sImg = sDefaultImg; 
           }
    %>
           <div id="" class="m4section">
             <div class="m4sectiontitle"> 
               <span><%=sTitle%></span>
             </div>
             <div class="m4sectiondesc">
               <div class="m4sectionbox">
                 <span><%=sDesc%></span>
                 <div class="m4sectionboximg">
                   <img title="<%=sTitle%>" src="/iconos/<%=sImg%>">
                 </div>
                 <div class="m4sectionboxlist">
    <%
           bOpen = true;
           bEmpty = true;
         } else if (iLevelRead == iLevelHeader + 2) {
           bEmpty = false;
    %>
           <m4:item outputdef="<%=sNodeMain%>" item="TRANSLATED_MENU" var="sTitle" htmlsafe="true"/> 
           <m4:item outputdef="<%=sNodeMain%>" item="N_HTTP" var="sURL" htmlsafe="true"/> 
    <%
            if (sURL.equals("") && (!sURLGroup.equals(""))) {
              sURL = sURLGroup + "#" + sIdMenuRead;
            }
            if (!sURL.equals("")) {
    %>
                    <span class="m4list"><a class="m4link" href="<%=sURL%>"><%=sTitle%></a></span>
    <%
            } else {
    %>
                    <span class="m4list"><%=sTitle%></span>
    <%
            }
         }
      }
    %>
  </m4:dataloop>
    <%
       if (bEmpty) {
         if (!sURLGroup.equals("")) {
    %>
                    <span class="m4list"><a class="m4link" href="<%=sURLGroup%>"><%=sTitle%></a></span>
    <%
         } else {
    %>
                    <span class="m4list"><%=sTitle%></span>
    <%
         }
       }
       if (bOpen) {
    %> 
                 </div>
               </div>
             </div>  
           </div>
    <%
       }

  oM4Log.debug("sgco_engine_subportal.jsp: exit");
%>

</m4:page>