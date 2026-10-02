<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*, java.lang.Math"%>
<%@ page import="com.meta4.m4operations.*, com.meta4.session.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
  //no cache
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store"); 
  response.setDateHeader("Expires", -1); 

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("sgco_engine_news.jsp: entry");

  //Identify path of temp map and url
  M4SessionManager m4Session = M4Context.getSession(request);
  String sPathTempURI = m4Session.getUserTempURI() + '/';
  oM4Log.debug("  sPathTempURI: " + sPathTempURI);

  String sIsESS = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"isESS");
  boolean bESS = ((int)Double.parseDouble(sIsESS) == 1);
  oM4Log.debug("  ESS: " + sIsESS);

  String sSubSession = "SGCO_MENU";
  String sMeta4Object = "SGCO_TASKS";

  String sNodeMain = "SGCO_MAIN_TASKS";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";

  String sMaxDocs = "", sNDocs = "";
  String sTitleDocs = "";
  String sPrev = "", sNext = "";

  String sNodeNews = "SGCO_HRDOCS_TASKS";
  String sNodeNewsOutputDef = sMeta4Object + "!" + sNodeNews + "[*]";

%>

<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
   <m4:datadef m4name = "<%=sMeta4Object%>" m4o = "<%=sMeta4Object%>"/>
   <m4:outputdef m4alias = "<%=sNodeMain%>">
     <m4:param name = "M4NAME0" value = "<%=sOutputDefMain%>"/>
   </m4:outputdef>
   <m4:outputdef m4alias = "<%=sNodeNews%>">
     <m4:param name = "M4NAME0" value = "<%=sNodeNewsOutputDef%>"/>
   </m4:outputdef>
</m4:job>

  <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_TITLE_DOC" var="sTitleDocs" htmlsafe="true"/>
  <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_N_MAX_NEWS" var="sMaxDocs" htmlsafe="true"/>
<%  
  if (bESS) {
%>
  <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_N_NEWS_E" var="sNDocs" htmlsafe="true"/>
<%
  } else {
%>
  <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_N_NEWS_M" var="sNDocs" htmlsafe="true"/>
<%
  }
  int iMaxNews = Integer.parseInt(sMaxDocs);
  int iTotalNews = Integer.parseInt(sNDocs);
  if (iTotalNews > 0) {
    String sOnlyMSS = "", sMoreInfo = "", sPhoto = "", sDescription = "", sToolTip = "", sDocTitle = "", sIdDoc = ""; 
    int iImage = 0, iNewsCount = 0;
    iMaxNews = Math.min(iMaxNews, iTotalNews);
    sMaxDocs = String.valueOf(iMaxNews);
%>
    <div class="m4subsectionheader m4subsectionnews">
      <span class="m4title"><%=sTitleDocs%> (<%=sNDocs%>)
        <span id="idnewscounter" m4TotalLines=<%=sNDocs%> m4MaxLines=<%=sMaxDocs%>>1..<%=sMaxDocs%></span>
      </span>
    </div>  
    <div class="m4subsecoverflow" style="height:<%=iMaxNews*45%>px;">
      <div id="idsecoverflow">
    <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_MORE_INFO" var="sMoreInfo" htmlsafe="true"/>      
    <m4:dataloop outputdef="<%=sNodeNews%>">
      <m4:item outputdef="<%=sNodeNews%>" item="SCO_CHECK_MSS" var="sOnlyMSS" htmlsafe="true"/> 
<%    
      if (!bESS || (bESS && (sOnlyMSS.equals("0")))) {
        iNewsCount ++;
%>
        <div class="m4subsecnewsbox">
          <div class="m4subsecnewsimg">
            <m4:item outputdef="<%=sNodeNews%>" item="SCO_PRP_NAME_PHOTO" var="sPhoto" htmlsafe="true"/>
<%
             if (sPhoto.equals("")) {
                sPhoto = "/iconos/noimagedoc.png";
                iImage = -1;
             }else {
                sPhoto = sPathTempURI + sPhoto;
                iImage = 0;
             }
%>
            <img src="<%=sPhoto%>"/>
            <m4:item outputdef="<%=sNodeNews%>" item="SCO_DESCRIPTION" var="sDescription" htmlsafe="true"/>
            <m4:item outputdef="<%=sNodeNews%>" item="SCO_PRP_TOOLTIP" var="sToolTip" htmlsafe="true"/>
            <img m4index='<%=iNewsCount%>' class="m4info" title="<%=sMoreInfo%>" src="/iconos/lu_nor_info_24.png" m4Title="<%=sToolTip%>" m4Desc="<%=sDescription%>" m4srcImage="<%=sPhoto%>" m4Image="<%=iImage%>"/>
          </div>
          <div class="m4subsecnewsdesc">
            <m4:item outputdef="<%=sNodeNews%>" item="SCO_PRP_TITLE" var="sDocTitle" htmlsafe="true"/>
            <m4:item outputdef="<%=sNodeNews%>" item="SCO_ID_DOC" var="sIdDoc" htmlsafe="true"/>
            <%if (!sIdDoc.equals("")) {
              sIdDoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdDoc);%>
              <a class="m4link" title="<%=sToolTip%>" href="javascript:ssco_manage_document('view','newsDoc<%=iNewsCount%><%=sIdDoc%>','ID_NEW');"><%=sDocTitle%></a>
              <form name='newsDoc<%=iNewsCount%>' id='newsDoc<%=iNewsCount%><%=sIdDoc%>' action=''>
                <input name="ID_NEW" id="ID_NEW" type="hidden" value="<%=sIdDoc%>"/>
              </form>
            <%} else {%>
              <span><%=sDocTitle%></span>
            <%}%>
          </div>
        </div>
<%
      }
%>
    </m4:dataloop>
      </div>
    </div>
    <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_PREVIOUS" var="sPrev" htmlsafe="true"/>
    <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_NEXT" var="sNext" htmlsafe="true"/>
    <div class="m4subsecfooter">
      <div>
        <span id="idnewsPrv" class="m4disabled" disabled><%=sPrev%></span>
        <span id="idnewsNext" class="m4disabled" disabled><%=sNext%></span>
      </div>
    </div>
<%
  } else {
%>
    <!-- no news founded: #m4hide# -->
<%
  }
  oM4Log.debug("sgco_engine_news.jsp: exit");
%>

</m4:page>