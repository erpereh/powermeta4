<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*, java.lang.Math"%>
<%@ page import="com.meta4.m4operations.*"%>
<%@ include file="/sse_generico/sse_generico_trans.jsp"%>    
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
oM4Log.debug("sgco_menu_search_back: entry");
String ai_sCriterion = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sCriterion");
oM4Log.debug("  ai_sCriterion: " + ai_sCriterion);
if (ai_sCriterion == null) {ai_sCriterion = "";}
M4Context.getM4SessionCl(request).putObject("SCO_SEARCH_CRITERION", ai_sCriterion);     //attach serach criterion to session
oM4Log.debug("  @ sco_search_criterion: " + ai_sCriterion);
if (ai_sCriterion.length() >= 2) {
    oM4Log.debug("  minimum length ok");
    String sSubSession = "SGCO_MENU";
    String sMeta4Object = "SGCO_MENU_SEARCH";
    String sNodeApi = "SGCO_MENU_SEARCH_API";
    String sNodeEee = "SGCO_MS_EMPLOYEES";
    String sNodeMenu = "SGCO_MS_MENU_OPTIONS";
    String sNodeTask = "SGCO_MS_TASKS";
    String sMethod = sMeta4Object + "!" + sNodeApi + ".SCO_NEW_SEARCH";
    String sOutputDefApi = sMeta4Object + "!" + sNodeApi + "[*]";
    String sOutputDefEee = sMeta4Object + "!" + sNodeEee + "[*]";
    String sOutputDefMenu = sMeta4Object + "!" + sNodeMenu + "[*]";
    String sOutputDefTask = sMeta4Object + "!" + sNodeTask + "[*]";
%>
<m4:page subsessionid="<%=sSubSession%>">
<m4:job>
    <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>
    <m4:exec m4method="<%=sMethod%>">
        <m4:param name="ARG_SCO_CRITERION" value="<%=ai_sCriterion%>"/>
    </m4:exec>
    <m4:outputdef m4alias="<%=sNodeApi%>"><m4:param name="M4NAME0" value="<%=sOutputDefApi%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeEee%>"><m4:param name="M4NAME0" value="<%=sOutputDefEee%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeMenu%>"><m4:param name="M4NAME0" value="<%=sOutputDefMenu%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeTask%>"><m4:param name="M4NAME0" value="<%=sOutputDefTask%>"/></m4:outputdef>
</m4:job>
<%
    //Variables
    int iMaxResults = 24;
    int iCountEee = 0;
    int iCountMenu = 0;
    int iCountTask = 0;
    int iMaxEeeAux = 0;
    int iMaxMenuAux = 0;
    int iMaxTaskAux = 0;
    String sMaxEee = "0";
    String sMaxMenu = "0";
    String sMaxTask = "0";
    int iCountAll = 0;

    //Identify number of records in each result node
    try {
        M4Operations m = new M4Operations(request);
        iCountEee = m.getCountInClient(sNodeEee, sMeta4Object, sNodeEee);
        iCountMenu = m.getCountInClient(sNodeMenu, sMeta4Object, sNodeMenu);
        iCountTask = m.getCountInClient(sNodeTask, sMeta4Object, sNodeTask);
    } catch(Exception e) {}
    oM4Log.debug("  iCountEee: " + String.valueOf(iCountEee));
    oM4Log.debug("  iCountMenu: " + String.valueOf(iCountMenu));
    oM4Log.debug("  iCountTask: " + String.valueOf(iCountTask));
    //Identify total number records in result set
    iCountAll = iCountEee + iCountMenu + iCountTask;
    //Check if result set over limit
    if (iCountAll > iMaxResults) {
        oM4Log.debug("  count all greater than max results allowed; iCountAll: " + String.valueOf(iCountAll) + ", iMaxResults: " + String.valueOf(iMaxResults));
        //Identify number of sections with data (total number of lines divided by maximum sections)
        int iLinesPerSection = iMaxResults / 3;
        int iSectionsOverLimit = 0;
        int iBag = 0;
        int iActiveEee = 1;
        int iActiveMenu = 1;
        int iActiveTask = 1;
        //Calculate maximum number of entries for each section
        do {
            iBag = 0;
            iSectionsOverLimit = 0;
            if (iActiveEee == 1) {
                if (iCountEee < iLinesPerSection) {
                    iBag += iLinesPerSection - iCountEee;
                    iMaxEeeAux = iCountEee;
                    iActiveEee = 0;
                }
                else {
                    //Increment number of sections with more records than limit
                    iSectionsOverLimit++;
                    //Maximum is 2 less than actual value because 1 is reserved for section heading and 1 for "... more ..."
                    iMaxEeeAux = iLinesPerSection - 2;
                }
            }
            if (iActiveMenu == 1) {
                if (iCountMenu < iLinesPerSection) {
                    iBag += iLinesPerSection - iCountMenu;
                    iMaxMenuAux = iCountMenu;
                    iActiveMenu = 0;
                }
                else {
                    iSectionsOverLimit++;
                    iMaxMenuAux = iLinesPerSection - 2;
                }
            }
            if (iActiveTask == 1) {
                if (iCountTask < iLinesPerSection) {
                    iBag += iLinesPerSection - iCountTask;
                    iMaxTaskAux = iCountTask;
                    iActiveTask = 0;
                }
                else {
                    iSectionsOverLimit++;
                    iMaxTaskAux = iLinesPerSection - 2;
                }
            }
            if (iSectionsOverLimit > 0) {iLinesPerSection += (iBag / iSectionsOverLimit);}
        } while (iBag != 0);
    }
    else {
        iMaxEeeAux = iCountEee;
        iMaxMenuAux = iCountMenu;
        iMaxTaskAux = iCountTask;
    }
    sMaxEee = String.valueOf(iMaxEeeAux - 1);
    sMaxMenu = String.valueOf(iMaxMenuAux - 1);
    sMaxTask = String.valueOf(iMaxTaskAux - 1);
    oM4Log.debug("  sMaxEee: " + sMaxEee);
    oM4Log.debug("  sMaxMenu: " + sMaxMenu);
    oM4Log.debug("  sMaxTask: " + sMaxTask);

    //Template for search results
    //<ul class="menu-left-ul">
    //    <li>Message</li>
    //    <li class="separator">Section name</li>
    //    <li><a title="Item name" href="URL">Item name</a></li>
    //    <li>... and more ...</li>
    //</ul>
    //<div class='divContentTitle'><span><a href='sURL' title='sItemDescription'>sItemName</a></span></div>
    String sMessageLine = "<div class='divContentTitle'><span>sMessage</span></div>";
    String sSectionLine = "<div class='divContentTitleBold'><span>sSectionName</span></div>";
    String sOptionLine  = "<div class='divContentTitle'><span><a href='sURL' title='sItemDescription'>sItemName</a></span></div>";
    String sAndMoreLine = "<div class='divContentTitle'><span>" + Tran.getProperty("search.info.andMore") + "</span></div>";

    String sLine = "";
    String sName = "";
    String sUrl = "";
    String sDescription = "";
    if(iCountAll > 0){
        if(iCountEee > 0){
            sLine = sSectionLine.replaceAll("sSectionName", Tran.getProperty("search.sep.employee") + " (" + iCountEee + ")");
            out.println(sLine);
            %><m4:loop from="0" to="<%=sMaxEee%>">
                <m4:item outputdef="<%=sNodeEee%>" item="SCO_NAME" record="<%=m4lix%>" var="sName" htmlsafe="true"/>
                <m4:item outputdef="<%=sNodeEee%>" item="SCO_URL" record="<%=m4lix%>" var="sUrl" htmlsafe="true"/>
                <m4:item outputdef="<%=sNodeEee%>" item="SCO_DESCRIPTION" record="<%=m4lix%>" var="sDescription" htmlsafe="true"/><%
                sLine = sOptionLine.replaceAll("sItemName", sName);
                sLine = sLine.replaceAll("sURL", sUrl);
                sLine = sLine.replaceAll("sItemDescription", sDescription);
                out.println(sLine);
            %></m4:loop><%
            if (iCountEee > iMaxEeeAux) {
                out.println(sAndMoreLine);
            }
        }
        if(iCountMenu > 0){
            sLine = sSectionLine.replaceAll("sSectionName", Tran.getProperty("search.sep.menuOptions") + " (" + iCountMenu + ")");
            out.println(sLine);
            %><m4:loop from="0" to="<%=sMaxMenu%>">
                <m4:item outputdef="<%=sNodeMenu%>" item="SCO_NAME" record="<%=m4lix%>" var="sName" htmlsafe="true"/>
                <m4:item outputdef="<%=sNodeMenu%>" item="SCO_URL" record="<%=m4lix%>" var="sUrl" htmlsafe="true"/>
                <m4:item outputdef="<%=sNodeMenu%>" item="SCO_DESCRIPTION" record="<%=m4lix%>" var="sDescription" htmlsafe="true"/><%
                sLine = sOptionLine.replaceAll("sItemName", sName);
                sLine = sLine.replaceAll("sURL", sUrl);
                sLine = sLine.replaceAll("sItemDescription", sDescription);
                out.println(sLine);
            %></m4:loop><%
            if (iCountMenu > iMaxMenuAux) {
                out.println(sAndMoreLine);
            }
        }
        if(iCountTask > 0){
            sLine = sSectionLine.replaceAll("sSectionName", Tran.getProperty("search.sep.pendingTasks") + " (" + iCountTask + ")");
            out.println(sLine);
            %><m4:loop from="0" to="<%=sMaxTask%>">
                <m4:item outputdef="<%=sNodeTask%>" item="SCO_NAME" record="<%=m4lix%>" var="sName" htmlsafe="true"/>
                <m4:item outputdef="<%=sNodeTask%>" item="SCO_URL" record="<%=m4lix%>" var="sUrl" htmlsafe="true"/>
                <m4:item outputdef="<%=sNodeTask%>" item="SCO_DESCRIPTION" record="<%=m4lix%>" var="sDescription" htmlsafe="true"/><%
                sLine = sOptionLine.replaceAll("sItemName", sName);
                sLine = sLine.replaceAll("sURL", sUrl);
                sLine = sLine.replaceAll("sItemDescription", sDescription);
                out.println(sLine);
            %></m4:loop><%
            if (iCountTask > iMaxTaskAux) {
                out.println(sAndMoreLine);
            }
        }
    }
    else {
        %><m4:item outputdef="<%=sNodeApi%>" item="SCO_RESULT" record="" var="sName"/><%
        sLine = sMessageLine.replaceAll("sMessage", sName);
        out.println(sLine);
        oM4Log.debug("  no results found, sName: " + sName);
    }
    %></m4:page><%
}
oM4Log.debug("sgco_menu_search_back: exit");
%>