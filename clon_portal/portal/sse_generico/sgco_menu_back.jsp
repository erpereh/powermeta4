<%@ page import="java.net.*, java.util.*"%>
<%@ page import="com.meta4.m4operations.*, com.meta4.session.*, com.meta4.menu.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
//Depending on parameters recieved, the following should be done
// If sgcoPortalDestinationUrl: attach request to session (including url)
//  parameters used
//  - sgcoPortalDestinationUrl
//  - sgcoPortalEss
//  objects attached to session
//  - SCO_LAST_REQUEST
//  - SCO_LAST_REQUEST_URL
//
// If ai_sUrl: identify menu option and update SCO_CURRENT_URL_xSS affected
//  parameters used
//  - bEss
//  - sUrl
//  objects (from session) used
//  - SCO_MENU
//  objects attached to session
//  - SCO_MENU (if new)
//  - SCO_CURRENT_URL_ESS or SCO_CURRENT_URL_MSS
// Else if sNextUrl: update SCO_CURRENT_URL_xSS with sNextUrl as indicated in bEss
//  parameters used
//  - sNextUrl
//  objects attached to session
//  - SCO_CURRENT_URL_ESS or SCO_CURRENT_URL_MSS
M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
oM4Log.debug("sgco_menu_back: entry");
M4SessionManager m4Session = M4Context.getSession(request);
M4SessionCl m4SessionCl = M4Context.getM4SessionCl(request);
String sPath = "";
String sError = null;
String sResultSearch = null;
    //- path if item found
    //  path starts with "+" if item located by folder (item not in menu)
    //  path starts with "-" if item located in hidden section (item not in menu) - not implemented
    //- "-1": item found but in oposite tree (attention "-1" not "-1;")
    //- "-2": item found in hidden section w/o path (attention "-2" not "-2;")
    //- ""  : item not found
String sResult = null;
    //- "-1": item found but in oposite tree
    //- ""  : item not found
    //- "1" : item found
    //- "0" : error
String ai_sEss = null;
String ai_sUrl = null;
String ai_sDestinationUrl = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sgcoPortalDestinationUrl");
if (ai_sDestinationUrl != null) {
    //Attach request and url to session
    m4SessionCl.putObject("SCO_LAST_REQUEST", request.getParameterMap());
    m4SessionCl.putObject("SCO_LAST_REQUEST_URL", ai_sDestinationUrl);      //clean: .removeObject("");
    oM4Log.debug("  @ sco_last_request_url: " + ai_sDestinationUrl);
    oM4Log.debug("  @ sco_last_request: current request attached to session:");
    Enumeration eParameters = request.getParameterNames();
    oM4Log.debug("    request parameters:");
    while (eParameters.hasMoreElements()) {
        String sParameter = (String)eParameters.nextElement();
        String sValue = com.meta4.taglib.util.M4SafeRequest.getParameter(request,sParameter);
        oM4Log.debug("    - " + sParameter + ": " + sValue);
    }
    ai_sEss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sgcoPortalEss");
    ai_sUrl = ai_sDestinationUrl;
} else {
    ai_sEss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bEss");
    ai_sUrl = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sUrl");
    oM4Log.debug("  ai_sEss: " + ai_sEss);
    oM4Log.debug("  ai_sUrl: " + ai_sUrl);
    //Remove request from session, only exception: ai_sUrl == SCO_LAST_REQUEST_URL
    String sDestinationUrl = (String)m4SessionCl.getObject("SCO_LAST_REQUEST_URL");
    oM4Log.debug("  sDestinationUrl: " + sDestinationUrl);
    if (sDestinationUrl != null && !sDestinationUrl.equalsIgnoreCase(ai_sUrl)) {            //if different
        m4SessionCl.removeObject("SCO_LAST_REQUEST");
        m4SessionCl.removeObject("SCO_LAST_REQUEST_URL");
        oM4Log.debug("  @@ sco_last_request and sco_last_request_url removed from session");
        //Check if destination url is last url of ess/mss and remove as well
        String sLastUrlEss = (String)m4SessionCl.getObject("SCO_CURRENT_URL_ESS");
        String sLastUrlMss = (String)m4SessionCl.getObject("SCO_CURRENT_URL_MSS");
        if (sLastUrlEss != null && sDestinationUrl.equalsIgnoreCase(sLastUrlEss)) {
            m4SessionCl.removeObject("SCO_CURRENT_URL_ESS");
            oM4Log.debug("  @@ sco_current_url_ess removed from session");
        }
        if (sLastUrlMss != null && sDestinationUrl.equalsIgnoreCase(sLastUrlMss)) {
            m4SessionCl.removeObject("SCO_CURRENT_URL_MSS");
            oM4Log.debug("  @@ sco_current_url_mss removed from session");
        }
    }
}
String sUrlEncoded = ai_sUrl;                                   //encoded url
boolean bEss = (ai_sEss.compareToIgnoreCase("true") == 0);
if (ai_sUrl != null && !ai_sUrl.equalsIgnoreCase("null")) {
    ai_sUrl = URLDecoder.decode(ai_sUrl, "UTF-8");              //decode url
    oM4Log.debug("  locate url in menu; url after decode: " + ai_sUrl);
    //Retrieve menu object
    M4Menu oM4Menu = (M4Menu)m4SessionCl.getObject("SCO_MENU");
    if (oM4Menu == null) {                                      //object not attached to session
        oM4Log.debug("  sco_menu null; create and attach to session");
        oM4Menu = new M4Menu(m4Session);                        //create new object
        m4SessionCl.putObject("SCO_MENU", oM4Menu);             //attatch object to session
    }
    try {
        if (bEss) {
            sResultSearch = oM4Menu.searchItemEss(ai_sUrl);
            oM4Log.debug("  searchItemEss - result: " + sResultSearch);
        } else {
            sResultSearch = oM4Menu.searchItemMss(ai_sUrl);
            oM4Log.debug("  searchItemMss - result: " + sResultSearch);
        }
        if (sResultSearch.equals("")) {
            sPath = "";                                         //item not found in current tree, path not available
            sResult = "";
        } else if (sResultSearch.equals("-1")) {
            sPath = "";                                         //item found in opposite tree, path not available
            sResult = "-1";
            //Attach url to session (to be used when loading opposite portal) after decoding of url
            if (bEss) {                                         //assign to opposite portal to be used as default after change!!!
                m4SessionCl.putObject("SCO_CURRENT_URL_MSS", sUrlEncoded);
                oM4Log.debug("  @ sco_current_url_mss: " + sUrlEncoded);
            } else {
                m4SessionCl.putObject("SCO_CURRENT_URL_ESS", sUrlEncoded);
                oM4Log.debug("  @ sco_current_url_ess: " + sUrlEncoded);
            }
        } else if (sResultSearch.equals("-2")) {
            sPath = "";                                         //item found in hidden section
            sResult = "1";
            //Attach url to session (to be used when loading opposite portal) after decoding of url
            if (bEss) {
                m4SessionCl.putObject("SCO_CURRENT_URL_ESS", sUrlEncoded);
                oM4Log.debug("  @ sco_current_url_ess: " + sUrlEncoded);
            } else {
                m4SessionCl.putObject("SCO_CURRENT_URL_MSS", sUrlEncoded);
                oM4Log.debug("  @ sco_current_url_mss: " + sUrlEncoded);
            }
        } else {
            sResult = "1";
            if (sResultSearch.startsWith("+")) {
                sPath = sResultSearch.substring(1);             //item found in current tree by folder (not in menu) -> cut "+" and do not "remember"
            } else if (sResultSearch.startsWith("-")) {
                sPath = sResultSearch.substring(1);             //if item located in hidden section -> cut "-"
                //Attach url to session (to be used upon refresh but also when changing back to portal) after decoding of url
                if (bEss) {
                    m4SessionCl.putObject("SCO_CURRENT_URL_ESS", sUrlEncoded);
                    oM4Log.debug("  @ sco_current_url_ess: " + sUrlEncoded);
                } else {
                    m4SessionCl.putObject("SCO_CURRENT_URL_MSS", sUrlEncoded);
                    oM4Log.debug("  @ sco_current_url_mss: " + sUrlEncoded);
                }
            } else {
                sPath = sResultSearch;                          //item found in current tree
                //Attach url to session (to be used upon refresh but also when changing back to portal) after decoding of url
                if (bEss) {
                    m4SessionCl.putObject("SCO_CURRENT_URL_ESS", sUrlEncoded);
                    oM4Log.debug("  @ sco_current_url_ess: " + sUrlEncoded);
                } else {
                    m4SessionCl.putObject("SCO_CURRENT_URL_MSS", sUrlEncoded);
                    oM4Log.debug("  @ sco_current_url_mss: " + sUrlEncoded);
                }
            }
        }
        oM4Log.debug("  sPath: " + sPath);
        oM4Log.debug("  sResult: " + sResult);
    } catch (Exception oMenuException) {
        sError = oMenuException.getMessage();
        sResult = "0";
        oM4Log.error("error when locating url in menu", oMenuException);
        oM4Log.debug("  - sPath: " + sPath);
        oM4Log.debug("  - sResult: " + sResult);
    }
} else {
    String ai_sNextUrl = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sNextUrl");
    if (ai_sNextUrl != null) {                                                  //update SCO_CURRENT_URL_xSS
        oM4Log.debug("  attach url to session, ai_sNextUrl: " + ai_sNextUrl);
        if (bEss) {
            m4SessionCl.putObject("SCO_CURRENT_URL_ESS", ai_sNextUrl);
            oM4Log.debug("  @ sco_current_url_ess: " + ai_sNextUrl);
        } else {
            m4SessionCl.putObject("SCO_CURRENT_URL_MSS", ai_sNextUrl);
            oM4Log.debug("  @ sco_current_url_mss: " + ai_sNextUrl);
        }
    } else {
        sError = "Parameter sUrl must not be empty or 'null'!";
        sResult = "0";
        oM4Log.error(sError);
    }
}
//Generate JSON response (strings (keys and values) within doublequotes)
out.print("{");
out.print("\"result\":\"" + sResult + "\"");
out.print(", \"path\":\"" + sPath + "\"");
if (sError != null) {out.print(", \"error\":\"" + sError + "\"");}              //error message should be cooked depending on its use
out.print("}");
oM4Log.debug("sgco_menu_back: exit");
%>