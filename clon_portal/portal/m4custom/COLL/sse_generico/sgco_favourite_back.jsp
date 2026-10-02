<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*, java.lang.Math"%>
<%@ page import="com.meta4.m4operations.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
oM4Log.debug("sgco_favourite_back.jsp: entry");
String ai_sOperation = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sOperation");
oM4Log.debug("  ai_sOperation: " + ai_sOperation);
String sSubSession = "SGCO_MENU";
String sMeta4Object = "SGCO_FAVOURITE";
String sNodeApi = "SGCO_FAVOURITE";
String sDataDefNode = sMeta4Object + "!" + sNodeApi;
String sOutputDefApi = sDataDefNode + "[*]";
String sMethodApi = sDataDefNode + ".";
String sResult = "";
%><m4:page subsessionid="<%=sSubSession%>"><%
if (ai_sOperation.equalsIgnoreCase("add")) {
    String ai_sName = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sName");
    String ai_sUrl = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sUrl");
    oM4Log.debug("  add item");
    oM4Log.debug("    ai_sName: " + ai_sName);
    oM4Log.debug("    ai_sUrl: " + ai_sUrl);
    sMethodApi += "SCO_ADD";
    // negative ordinal: if item already exists and name changed
    // positive ordinal: new item
    %><m4:job>
        <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>
        <m4:exec m4method="<%=sMethodApi%>">
            <m4:param name="ARG_SCO_NAME" value="<%=ai_sName%>"/>
            <m4:param name="ARG_SCO_URL" value="<%=ai_sUrl%>"/>
        </m4:exec>
        <m4:outputdef m4alias="<%=sNodeApi%>"><m4:param name="M4NAME0" value="<%=sOutputDefApi%>"/></m4:outputdef>
    </m4:job>
    <m4:item outputdef="<%=sNodeApi%>" item="SCO_P_RESULT" record="" var="sResult"/>
<%} else if (ai_sOperation.equalsIgnoreCase("delete")) {
    String ai_sOrdinal = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sOrdinal");
    oM4Log.debug("  delete item");
    oM4Log.debug("    ai_sOrdinal: " + ai_sOrdinal);
    sMethodApi += "SCO_DELETE";
    // 0: item deleted
    // -1: error on persist_tree
    // -2: ordinal does not exist
    %><m4:job>
        <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>
        <m4:exec m4method="<%=sMethodApi%>">
            <m4:param name="ARG_SCO_ORDINAL" value="<%=ai_sOrdinal%>"/>
        </m4:exec>
        <m4:outputdef m4alias="<%=sNodeApi%>"><m4:param name="M4NAME0" value="<%=sOutputDefApi%>"/></m4:outputdef>
    </m4:job>
    <m4:item outputdef="<%=sNodeApi%>" item="SCO_P_RESULT" record="" var="sResult"/>
<%}


oM4Log.debug("  sResult: " + sResult);
//Generate JSON response (strings (keys and values) within doublequotes)
out.print("{");
out.print("\"result\":" + sResult);
out.print("}");
oM4Log.debug("sgco_favourite_back.jsp: exit");
%></m4:page>