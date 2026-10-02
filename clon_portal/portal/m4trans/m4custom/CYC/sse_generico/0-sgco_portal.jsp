<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*"%>
<%@ page import="com.meta4.m4operations.*, com.meta4.session.*, com.meta4.utilities.*, com.meta4.configuration.*"%>
<%@ page import="com.meta4.menu.*" %>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
oM4Log.debug("sgco_portal: entry");
oM4Log.debug("  bESS: " + String.valueOf(bESS));
//no cache
response.setHeader("Pragma", "no-cache"); 
response.setHeader("Cache-Control", "no-store"); 
response.setDateHeader("Expires", -1);

String sEncoding = M4RequestEncoding.getAppEncoding(); 
response.setContentType ("text/html; charset=" + sEncoding + "");
M4SessionCl m4SessionCl = M4Context.getM4SessionCl(request);

boolean bHasMSS = false;                        //controls visibility of button "Change to MSS"
String sMenuLevel1 = null;
String sFirstMenuOption = null;                 //null is a valid value for this variable!
String sHomeMenuOption = null;                  //menu option used in home button
String sSectionAux = null;                      //auxiliary sections to be excluded from menu
String scIconPath = "/iconos/";
if (bESS) {     //ESS
    //The following code is only required in ESS (check if options of MSS available to show/hide button "Change to MSS").
    M4Menu oM4Menu = (M4Menu)m4SessionCl.getObject("SCO_MENU");                                     //retrieve menu object
    if (oM4Menu == null) {                                                                          //object not attached to session
        oM4Log.debug("  sco_menu null; create and attach to session");
        oM4Menu = new M4Menu(M4Context.getSession(request));                                        //create new object
        m4SessionCl.putObject("SCO_MENU", oM4Menu);                                                 //attatch object to session
    }
    bHasMSS = oM4Menu.hasMss();                                                                     //controls visibility of button "Change to MSS"	
    oM4Log.debug("  bHasMSS: " + String.valueOf(bHasMSS));

    m4SessionCl.putObject("SCO_ID_PRODUCT", "ESS");
    sMenuLevel1 = "SSCO_MENU";
    sSectionAux = "SSCO_AUX";
    sFirstMenuOption = (String)m4SessionCl.getObject("SCO_CURRENT_URL_ESS");
    M4Context.getSession(request).setProductID("ess");                      //set product id for pages that use this information to determin style sheet
} else {        //MSS
    m4SessionCl.putObject("SCO_ID_PRODUCT", "MSS");
    sMenuLevel1 = "SMCO_MENU";
    sSectionAux = "SMCO_AUX";
    sFirstMenuOption = (String)m4SessionCl.getObject("SCO_CURRENT_URL_MSS");
    M4Context.getSession(request).setProductID("mss");                      //set product id for pages that use this information to determin style sheet
}
oM4Log.debug("  sMenuLevel1: " + sMenuLevel1);
oM4Log.debug("  sSectionAux: " + sSectionAux);
oM4Log.debug("  sFirstMenuOption: " + sFirstMenuOption);
String sLastRequestUrl = (String)m4SessionCl.getObject("SCO_LAST_REQUEST_URL");
oM4Log.debug("  sLastRequestUrl: " + sLastRequestUrl);
if (sLastRequestUrl != null && sLastRequestUrl.equals(sFirstMenuOption)) {      //if url of last request equals first option, restore request attached to session
    sFirstMenuOption = "/servlet/CheckSecurity/JSP/sse_generico/sgco_restore_request.jsp";
    oM4Log.debug("  sFirstMenuOption changed to '/servlet/CheckSecurity/JSP/sse_generico/sgco_restore_request.jsp'");
}
String sMenuSearchCriterion = (String)m4SessionCl.getObject("SCO_SEARCH_CRITERION");                //null is a valid value for this variable!
oM4Log.debug("  sMenuSearchCriterion: " + sMenuSearchCriterion);
if (sMenuSearchCriterion == null) {sMenuSearchCriterion = "";}
String sShowMenu = (String)m4SessionCl.getObject("SGCO_IND_SHOW_MENU");                             //null is a valid value for this variable!
oM4Log.debug("  sShowMenu: " + sShowMenu);
boolean bShowMenu = (sShowMenu == null || sShowMenu.equals("true"));                                //indicates that menu is visible
// CYC : Se oculta el menú inicialmente
bShowMenu = false;

oM4Log.debug("  bShowMenu: " + bShowMenu);
boolean bUseFirstMenuOption = (sFirstMenuOption == null || sFirstMenuOption.equals(""));

M4SessionCl oSession = M4Context.getM4SessionCl(request);
String sNmPerson = oSession.getBagEntries("minombre");
oM4Log.debug("  sNmPerson: " + sNmPerson);

//Menu
String sSubSession = "SGCO_MENU";
String sMeta4Object = "MENUS";
String sNodeApi = "MENU_RECURSIVE";
String sDataDefNode = sMeta4Object + "!" + sNodeApi;
String sMethodApiLoad = sDataDefNode + ".SRTC_LOAD_MENU";
String sMethodApiFilter = sDataDefNode + ".SRTC_FILTER_MENU";
String sOutputDefApi = sDataDefNode + "[*]";

String sMenuLevel0 = "SGCO_MENU";

//Favourites
String sFavM4Object = "SGCO_FAVOURITE";
String sFavNodeApi = "SGCO_FAVOURITE";
String sFavDataDefNode = sFavM4Object + "!" + sFavNodeApi;
String sFavMethodApiLoad = sFavDataDefNode + ".SCO_LOAD";
String sFavOutputDefApi = sFavDataDefNode + "[*]";

//Filter menu options:
// - options that belong to given tree (ESS or MSS)
// - options that are at level 1 or higher (ignore level 0 which is ESS or MSS)
// - options that belong to hidden sections (SSCO_AUX... or SMCO_AUX...) including hidden section.
String sFilterMenu = "If SRTC_ID_ROOT_MENU = \"" + sMenuLevel1 + "\" and SRTC_LEVEL > 0 and IndexOf(ID_MENU, \"" + sSectionAux + "\", 0) <> 0 and IndexOf(ID_PARENT_MENU, \"" + sSectionAux + "\", 0) <> 0 Then Return(1)";
String sFilterMenuId = sDataDefNode + ".Filter";
%>


<m4:page subsessionid="<%=sSubSession%>">
<m4:job>
    <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>
    <m4:exec m4method="<%=sMethodApiLoad%>">
        <m4:param name="ARG_SRTC_ID_MENU" value="<%=sMenuLevel0%>"/>
    </m4:exec>
    <m4:exec m4method="<%=sMethodApiFilter%>">
        <m4:param name="ARG_SRTC_ID_MENU" value="<%=sMenuLevel1%>"/>
    </m4:exec>
    <m4:filter m4name="<%=sFilterMenuId%>" m4filter="<%=sFilterMenu%>"/>
    <m4:outputdef m4alias="<%=sNodeApi%>"><m4:param name="M4NAME0" value="<%=sOutputDefApi%>"/></m4:outputdef>
    <m4:removefilter m4name="<%=sFilterMenuId%>"/>

    <m4:datadef m4name="<%=sFavM4Object%>" m4o="<%=sFavM4Object%>"/>
    <m4:exec m4method="<%=sFavMethodApiLoad%>"></m4:exec>
    <m4:outputdef m4alias="<%=sFavNodeApi%>"><m4:param name="M4NAME0" value="<%=sFavOutputDefApi%>"/></m4:outputdef>
</m4:job>
<%
int iCountOptions = 0;
String sIterationsMenu = "0";
int iCountFavourites = 0;
String sIterationsFavourites = "0";


try {
    M4Operations oM4Operations = new M4Operations(request);
    
    iCountOptions = oM4Operations.getCountInClient(sNodeApi, sMeta4Object, sNodeApi);
    sIterationsMenu = String.valueOf(iCountOptions - 1);
    iCountFavourites = oM4Operations.getCountInClient(sFavNodeApi, sFavM4Object, sFavNodeApi);
    sIterationsFavourites = String.valueOf(iCountFavourites - 1);
} catch(Exception e) {
    iCountOptions = -1;
    oM4Log.error("sgco_menu_p1", e);
}
oM4Log.debug("  iCountOptions: " + String.valueOf(iCountOptions));
oM4Log.debug("  iCountFavourites: " + String.valueOf(iCountFavourites));
/* Structure of menu

[title w/o link
<div class='divHeader' title='sToolTip'>
] | [title with link
<div class='divHeader' title='sToolTip' onclick='Meta4.menu.navigate('sUrl');'>
]
 <div class='divHeaderImg'>
   <img src='sIcon'/>
 </div>
 <div class='divHeaderTitle'>
   <span>sTitle</span>
 </div>
</div>
<div class='divSep'></div>

<div class='divContentSubmenuTitle'>
 <span>sTitle</span>
</div>
<div class='divContentSubmenuImg divImgOpen'></div>
<div class='divSep'></div>
*/
String sMenuLeftTitleNoLinkL1= "<div class='divHeader' title=\"sToolTip\"><div class='divHeaderImg'><img src='" + scIconPath + "sIcon'/></div><div class='divHeaderTitle'><span>sTitle</span></div></div><div class='divSep'></div>";
String sMenuLeftTitleLinkL1 = "<div class='divHeader' title=\"sToolTip\" onclick=\"Meta4.menu.navigate('sUrl');\"><div class='divHeaderImg'><img src='" + scIconPath + "sIcon'/></div><div class='divHeaderTitle'><span>sTitle</span></div></div><div class='divSep'></div>";
String sMenuLeftContentOpenL1 = "<div class='divContent'>";
String sMenuLeftMenuNoSubmenu = "<div class='divContentTitle'><span><a href='sUrl' title=\"sToolTip\">sTitle</a></span></div>";
String sMenuLeftContentOpenLnNoLink = "<div class='divContentSubmenuTitle' title=\"sToolTip\"><span>sTitle</span></div><div class='divContentSubmenuImg_sLevel divImgClosed'></div><div class='divSep'></div><div class='divContentSubtitle_sLevel'>";
String sMenuLeftContentOpenLnLink = "<div class='divContentSubmenuTitle'><span><a href='sUrl' title=\"sToolTip\">sTitle</a></span></div><div class='divContentSubmenuImg_sLevel divImgClosed'></div><div class='divSep'></div><div class='divContentSubtitle_sLevel'>";
String sMenuLeftContentCloseL1 = "</div>";
String sMenuLeftContentCloseLn = "</div><div class='divSep'></div>";

String sMenuLeftContentOpenFav = "<div class='divContent' id='menuLeftFavourites'>";
String sMenuLeftLiFavourite = "<div class='divContentFav' id='favouritesOrdinal'><div class='divContentTitle'><span><a title=\"sTitle\" href='sUrl'>sTitle</a></span></div><div class='divContentImg' onclick='Meta4.menu.deleteFavourite(sOrdinal);' title=\"sToolTip\"></div><div class='divSep'></div></div>";
String sMenuLeftLiFavouriteTemplate = "<div class='divContentFav' id='favouriteLiTemplate' style='visibility: hidden;'><div class='divContentTitle'><span><a title=\"sTitle\" href='sUrl'>sTitle</a></span></div><div class='divContentImg' title=\"sGenericToolTip\"></div><div class='divSep'></div></div>";

%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sgco_gen_inc.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-generico_formats.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_trans.jsp"%>
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/functions_portal.js"></script>
<%if (bESS) {%>
  <link rel="stylesheet" type="text/css" href="/css/estilo_sse.css"/>
  <title><%=Tran.getProperty("Title.PortalESS")%></title>
<%} else {%>
  <link rel="stylesheet" type="text/css" href="/css/estilo_mss.css"/>
  <title><%=Tran.getProperty("Title.PortalMSS")%></title>
<%}%>
<script type="text/javascript">
  if (Meta4.IE6) {document.write("<link rel='stylesheet' type='text/css' href='/css/style_portalIE6.css'/>");}
  else {document.write("<link rel='stylesheet' type='text/css' href='/css/style_portal.css'/>");}
</script>
</head>
<body id="allbody">
<%//Begin: Portal page%>
<div class="scoPortalPage" id="portalPage">
<%//Begin: Page header%>
<div class="scoPageHeader" id="pageHeader"><%
int iLanguageID = M4Context.getSession(request).getLanguageID();                                    //2, 3, 4.... 8
oM4Log.debug("  iLanguageID: " + String.valueOf(iLanguageID));
String sUrlLogin = CheckConfig.setBadLoginLink(iLanguageID, CheckConfig.THCL);
oM4Log.debug("  sUrlLogin: " + sUrlLogin);
%>
        <div class="especificcompanylogoleft" id="pageHeaderespecificcompanylogoleft"></div>
        <div class="especificcompanylogoright" id="pageHeaderespecificcompanylogoright"></div>
    <!-- <div class="logo">  Cambiamos el div del logo para que se comporte como el HOME -->
	<div class="logo"> <a id="idHome" href=""> <img src="/iconos/logo_cyc.jpg" style="Z-INDEX: 0; BACKGROUND-REPEAT: no-repeat; FLOAT: left;" ></a>
        <div class="title">
<%if (bESS) {%>
           <!--<span class="maintitle"><%=Tran.getProperty("header.ESS.title")%></span>-->
           <!--<span class="subtitle"><%=Tran.getProperty("header.ESS.subtitle")%></span>-->
<%} else {%>
           <!--<span class="maintitle"><%=Tran.getProperty("header.MSS.title")%></span>-->
          <!--<span class="subtitle"><%=Tran.getProperty("header.MSS.subtitle")%></span>-->
<%}%>
        </div>
    </div>
    <div class="fill">
        <div class="right">
            <div class="buttons">
              <%if (bESS) {
                if (bHasMSS) {%><a id="idChangePortal" href=""><span><img src="/iconos/ic_header_mss.png" m4SrcHot="/iconos/ic_header_mss_hot.png" m4SrcNormal="/iconos/ic_header_mss.png" onmouseover="Meta4.header.iconHot(this);" onmouseout="Meta4.header.iconNormal(this);" title="MANAGER" rel="<%=Tran.getProperty("Button.MSS.toolTip")%>"/></span></a><%}%>
              <%} else {%>				
                <a id="idChangePortal" href=""><span><img src="/iconos/ic_header_ess.png" m4SrcHot="/iconos/ic_header_ess_hot.png" m4SrcNormal="/iconos/ic_header_ess.png" onmouseover="Meta4.header.iconHot(this);" onmouseout="Meta4.header.iconNormal(this);" title="EMPLEADO" rel="<%=Tran.getProperty("Button.ESS.toolTip")%>"/></span></a>
              <%}%>
                <!--<a id="idHome" href=""><span><img src="/iconos/ic_header_home.png" m4SrcHot="/iconos/ic_header_home_hot.png" m4SrcNormal="/iconos/ic_header_home.png" onmouseover="Meta4.header.iconHot(this);" onmouseout="Meta4.header.iconNormal(this);" title="<%=Tran.getProperty("Button.Home.title")%>" rel="<%=Tran.getProperty("Button.Home.toolTip")%>"/></span></a>-->
                <a id="idWhoIsWho" href=""><span><img src="/iconos/ic_menu_search.png" m4SrcHot="/iconos/ic_menu_search.png" m4SrcNormal="/iconos/ic_menu_search.png" onmouseover="Meta4.header.iconHot(this);" onmouseout="Meta4.header.iconNormal(this);" title="<%=Tran.getProperty("Button.WhoIsWho.title")%>" rel="<%=Tran.getProperty("Button.WhoIsWho.toolTip")%>"/></span></a>
                <a href="" id="headerButtonAddFavourite"><span><img src="/iconos/ic_header_favourite.png"  m4SrcHot="/iconos/ic_header_favourite_hot.png" m4SrcNormal="/iconos/ic_header_favourite.png" onmouseover="Meta4.header.iconHot(this);" onmouseout="Meta4.header.iconNormal(this);"title="<%=Tran.getProperty("Button.AddFavorite.title")%>" rel="<%=Tran.getProperty("Button.AddFavorite.toolTip")%>"/></span></a>
	      <%if (!bESS) {%><!--<a href="javascript:" onclick="Meta4.header.myQueries();return false;"><span><img src="/iconos/ic_header_my_queries.png" m4SrcHot="/iconos/ic_header_my_queries_hot.png" m4SrcNormal="/iconos/ic_header_my_queries.png" onmouseover="Meta4.header.iconHot(this);" onmouseout="Meta4.header.iconNormal(this);" title="<%=Tran.getProperty("Button.MyQueries.title")%>" rel="<%=Tran.getProperty("Button.MyQueries.toolTip")%>"/></span></a>--><%}%>
                <a id="idLogout" href=""><span><img src="/iconos/ic_header_disconnect.png" m4SrcHot="/iconos/ic_header_disconnect_hot.png" m4SrcNormal="/iconos/ic_header_disconnect.png" onmouseover="Meta4.header.iconHot(this);" onmouseout="Meta4.header.iconNormal(this);" title="<%=Tran.getProperty("Button.Disconnect.title")%>" rel="<%=Tran.getProperty("Button.Disconnect.toolTip")%>"/></span></a>
            </div>
        </div>
    </div>
    <div class="separator"></div>
    <div class="subline">
        <span class="menuSwitchShow<%if (bShowMenu) out.print(" hidden");%>" id="showMenu" onclick="Meta4.portal.toggleMenu();" title="<%=Tran.getProperty("Button.showMenu.toolTip")%>"><%=Tran.getProperty("Button.showMenu.title")%></span>
        <span class="menuSwitchHide<%if (!bShowMenu) out.print(" hidden");%>" id="hideMenu" onclick="Meta4.portal.toggleMenu();" title="<%=Tran.getProperty("Button.hideMenu.toolTip")%>"><%=Tran.getProperty("Button.hideMenu.title")%></span>
        <span class="information"><%=sNmPerson%>&nbsp;-&nbsp;<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sgco_date.jsp"%></span>
    </div>
</div><%//End: Page header%>
<div id="menuLeftWrapper" class="scoMenuLeftWrapper"<%if (!bShowMenu) out.print(" style=\"height: 0;\"");%>><div class="scoMenuLeft" id="menuLeft">
<% //Start: Menu
    String sLine = null;
    String sAux = null;
    Stack oLineClose = new Stack();               //LIFO
    String sNmMenu, sToolTip, sUrl, sUrlAux, sLevel, sHasSubMenu, sIcon;
    String sOrFavourite, sNmFavourite, sUrlFavourite;
    boolean bHasSubMenu;
    int iCurrentLevel, iPreviousLevel = 0;
    if(iCountOptions > 0){
        %><m4:loop from="0" to="<%=sIterationsMenu%>">
        <m4:item outputdef="<%=sNodeApi%>" item="TRANSLATED_MENU" record="<%=m4lix%>" var="sNmMenu" htmlsafe="true" replaceliterals="true"/><m4:item outputdef="<%=sNodeApi%>" item="N_MENU" record="<%=m4lix%>" var="sToolTip" htmlsafe="true" replaceliterals="true"/><m4:item outputdef="<%=sNodeApi%>" item="N_HTTP" record="<%=m4lix%>" var="sUrl" htmlsafe="true"/><m4:item outputdef="<%=sNodeApi%>" item="N_HTTP" record="<%=m4lix%>" var="sUrlAux"/><m4:item outputdef="<%=sNodeApi%>" item="SRTC_LEVEL" record="<%=m4lix%>" var="sLevel" htmlsafe="true"/><m4:item outputdef="<%=sNodeApi%>" item="SRTC_IND_HAS_SUBMENU" record="<%=m4lix%>" var="sHasSubMenu" htmlsafe="true"/><m4:item outputdef="<%=sNodeApi%>" item="ICON" record="<%=m4lix%>" var="sIcon" htmlsafe="true"/><%
            //Identify first menu option with url
            if (sFirstMenuOption == null || sFirstMenuOption.equals("")) {
                sFirstMenuOption = sUrl;
                oM4Log.debug("  sFirstMenuOption: " + sFirstMenuOption);
            }
            //Identify first menu option with url to be used as Home
            if (sHomeMenuOption == null || sHomeMenuOption.equals("")) {
                sHomeMenuOption = sUrlAux;
                oM4Log.debug("  sHomeMenuOption: " + sHomeMenuOption);
            }
            //Init variables for this iteration
            iCurrentLevel = (int)Double.parseDouble(sLevel);
            bHasSubMenu = ((int)Double.parseDouble(sHasSubMenu) == 1);
            //Close tags if required
            if (iCurrentLevel > iPreviousLevel) {
                //Update previous level with current level if current level is higher
                iPreviousLevel = iCurrentLevel;
            } else if (iCurrentLevel < iPreviousLevel) {
                //If current level is less than previous level, close tags have to be added.
                //The corresponding tags are in the stack (LIFO).
                do {
                    if (!oLineClose.empty()) {
                        //Push close tag into output stack
                        out.println(oLineClose.pop());
                    }
                }
                //Decrement level and continue loop until current level reached
                while (--iPreviousLevel > iCurrentLevel);
            }
            //Add option depending on level
            if (iCurrentLevel == 1) {    
                //First level has different syntax than following levels
                if (sUrl != null && sUrl != "") {
                    sLine = sMenuLeftTitleLinkL1.replaceAll("sTitle", sNmMenu);
                    sLine = sLine.replaceAll("sUrl", sUrl);
                    sLine = sLine.replaceAll("sIcon", sIcon);
                } else {
                    sLine = sMenuLeftTitleNoLinkL1.replaceAll("sTitle", sNmMenu);
                    sLine = sLine.replaceAll("sIcon", sIcon);
                }
                sLine = sLine.replaceAll("sToolTip", sToolTip);
                out.println(sLine);
                if (!bHasSubMenu) {
                    sLine = sMenuLeftMenuNoSubmenu.replaceAll("sTitle", sNmMenu);
                    sLine = sLine.replaceAll("sToolTip", sToolTip);
                    sLine = sLine.replaceAll("sUrl", sUrl);
                    out.println(sLine);
                }
                else {
                    out.println(sMenuLeftContentOpenL1);
                    oLineClose.push(sMenuLeftContentCloseL1);
                }
            } else {
                if (bHasSubMenu) {
                    if (sUrl != null && sUrl != "") {
                        sLine = sMenuLeftContentOpenLnLink.replaceAll("sLevel", (String)String.valueOf(iCurrentLevel - 1));
                        sLine = sMenuLeftContentOpenLnLink.replaceAll("sToolTip", sToolTip);
                        sLine = sLine.replaceAll("sUrl", sUrl);
                    } else {
                        sLine = sMenuLeftContentOpenLnNoLink.replaceAll("sLevel", (String)String.valueOf(iCurrentLevel - 1));
                        sLine = sLine.replaceAll("sToolTip", sToolTip);
                    }
                    sLine = sLine.replaceAll("sTitle", sNmMenu);
                    sLine = sLine.replaceAll("iLevel", sLevel.trim());
                    out.println(sLine);
                    oLineClose.push(sMenuLeftContentCloseLn);
                    //don't push sMenuLeftContentClose on stack because it is already included in sMenuLeftLiSubClose
                } else {
                    sLine = sMenuLeftMenuNoSubmenu.replaceAll("sTitle", sNmMenu);
                    sLine = sLine.replaceAll("sToolTip", sToolTip);
                    sLine = sLine.replaceAll("sUrl", sUrl);
                    out.println(sLine);
                }
            }
        %></m4:loop><%
        //Empty stack (close tags)
        while (!oLineClose.empty()) {
            out.println(oLineClose.pop());
        }
    }
    //Favourites
    //Title with link to Edit Favourites
    sAux = Tran.getProperty("favourites.title");
    sLine = sMenuLeftTitleNoLinkL1.replaceAll("sTitle", sAux != null ? sAux : "");
    sLine = sLine.replaceAll("sIcon", "ic_menu_favourites.png");
    sAux = Tran.getProperty("favourites.toolTip");
    sLine = sLine.replaceAll("sToolTip", sAux != null ? sAux : "");
    out.println(sLine);
    //First entry: Edit Favourites
    out.println(sMenuLeftContentOpenFav);
    sAux = Tran.getProperty("favourites.edit.title");
    sLine = sMenuLeftMenuNoSubmenu.replaceAll("sTitle", sAux != null ? sAux : "");
    sLine = sLine.replaceAll("sToolTip", sAux != null ? sAux : "");
    sLine = sLine.replaceAll("sUrl", "/servlet/CheckSecurity/JSP/sse_g0/sse_g0_editar_links.jsp");
    out.println(sLine);
    if (iCountFavourites != 0) {                                                                    //loop through all favourites
        %><m4:loop from="0" to="<%=sIterationsFavourites%>"><m4:item outputdef="<%=sFavNodeApi%>" item="SCO_NM_FAVOURITE" record="<%=m4lix%>" var="sNmFavourite" htmlsafe="true"/><m4:item outputdef="<%=sFavNodeApi%>" item="SCO_URL" record="<%=m4lix%>" var="sUrlFavourite" htmlsafe="true"/><m4:item outputdef="<%=sFavNodeApi%>" item="SCO_OR_FAVOURITE" record="<%=m4lix%>" var="sOrFavourite" htmlsafe="true"/><%
            sLine = sMenuLeftLiFavourite.replaceAll("sTitle", sNmFavourite);
            sLine = sLine.replaceAll("sUrl", sUrlFavourite);
            sLine = sLine.replaceAll("sOrdinal", sOrFavourite);
            sAux = Tran.getProperty("favourites.delete.toolTip");
            sLine = sLine.replaceAll("sToolTip", sAux != null ? sAux : "");
            out.println(sLine);
        %></m4:loop><%
    }
    out.println(sMenuLeftContentCloseL1);
    //Menus-search
    %>
    <div style="display:none;">
        <div class="divHeader" id="togglerMenuSearch" title="<%=Tran.getProperty("search.toolTip")%>"><div class='divHeaderImg'><img src="/iconos/ic_menu_search.png"/></div>
            <form id="formMenuSearch" action="/servlet/CheckSecurity/JSP/sse_generico/sgco_menu_search_back.jsp" method="post">
            <input class="search inactive" type="text" id="criterion" name="sCriterion" onclick="Meta4.menu.search.clear();" onblur="Meta4.menu.search.restore();" onkeyup="Meta4.menu.search.search();"/>
            </form> 
        </div>
        <div class='divContent' id='searchResults'>
            <div class='divContentTitle'><span><%=Tran.getProperty("search.info.noSearch")%></span></div>
        </div>
    </div>
    <%
    sAux = Tran.getProperty("favourites.delete.toolTip");
    sLine = sMenuLeftLiFavouriteTemplate.replaceAll("sGenericToolTip", sAux != null ? sAux : "");
    out.println(sLine);                                                                             //favourite item template (to add items in run-time)
%>
</div></div><%//End: Menu%>
<style type="text/css">
    .fr{
        height: 800px!important;
    }
</style>
<script type="text/javascript">isIE6();</script>
<div id="pageContentWrapper" class="contentWrapper"<%if (!bShowMenu) out.print(" style=\"margin-left: -10px;\"");%>><%//Begin: Page content wrapper%>
<div id="pageBody" class="scoPageBody"><%//Begin: Page body%>
<div id="pageBodyWait" class="scoSpinner"></div>
<iframe id="pageBodyFrame" class="content fr" src="<%=sFirstMenuOption%>" frameborder=0 onload="Meta4.frameBody.afterLoad();"></iframe>
</div><%//End: Page body%>

<%
    String nombre = "URLANT";
    HttpSession sessionn = request.getSession(true);
    String urlant = (String)sessionn.getAttribute(nombre);
    sessionn.setAttribute(nombre, "");
%>
<script type="text/javascript">

    function getParametrosUrl(url) {
        var vars = {};
        var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    function getvalURL(url,par){
        // Esto sólo funciona en el Chrome
        /*var url_string = new URL(url);
        return url_string.searchParams.get(par);*/

        var parametros = getParametrosUrl(url);
        return (parametros[par]!=undefined) ? parametros[par] : '';
    }

    function showCurse(curso){
        var ele = document.querySelectorAll("a[href='/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp']");
        ele[0].href='/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?formacion='+curso;
        ele[0].click();
        ele[0].href='/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp';
    }

    function getFormacion(){
        var urlant = '<%=urlant%>';
        var urlact = window.location.href; 
        var formacion = getvalURL(urlact,'formacion');
        if( (formacion==null || formacion=='') && urlant!='' ){
            formacion = getvalURL(urlant,'formacion');
        }
        return formacion;
    }

    window.onload = function() { 
        var formacion = getFormacion();
        if( formacion!=null && formacion!='' ) showCurse(formacion);
    };

</script>

<script type="text/javascript">
	Meta4.portal.init($('portalPage'), $('menuLeftWrapper'), $('menuLeft'), $('pageContentWrapper'), '<%=sUrlLogin%>', <%=bESS%>);
    Meta4.frameBody.init($('pageBodyWait'), $('pageBodyFrame'));
	Meta4.menu.init($('pageBodyWait'), <%=bUseFirstMenuOption%>);<%//Init menu after iframe so that request of iframe can be processed and menu is initialized (accordions applied) before showing it.%>
	Meta4.header.init('<%=sHomeMenuOption%>', $('headerButtonAddFavourite'));
	Meta4.menu.search.init($('formMenuSearch'), $('criterion'), $('searchResults'), "<%=com.meta4.taglib.util.M4PresentationUtilTaglib.unCookHTML(Tran.getProperty("search.initialString"))%>", "<div class='divContentTitle'><span><%=Tran.getProperty("search.info.minLength")%></span></div>", "<div class='divContentTitle'><span><%=Tran.getProperty("search.info.noSearch")%></span></div>", "<%=com.meta4.taglib.util.M4PresentationUtilTaglib.escape(sMenuSearchCriterion)%>");
</script>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sgco_footer.jsp"%>
</div><%//End: Page content wrapper%>
</div><%//End: Portal page%>
</body>
</html>
</m4:page><%oM4Log.debug("sgco_portal: exit");%>