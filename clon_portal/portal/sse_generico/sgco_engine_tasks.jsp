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
  oM4Log.debug("sgco_engine_tasks.jsp: entry");

  //Identify path of temp map and url
  M4SessionManager m4Session = M4Context.getSession(request);

  String sPathTempMap = m4Session.getPathTempMapping();

  String sSubSession = "SGCO_MENU";
  String sMeta4Object = "SGCO_TASKS";

  String sNodeMain = "SGCO_MAIN_TASKS";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";
  String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";
  
  String sTasksTitle ="", sMore = "", sLinkMore = "", sNone = "";

  String sNodeValida = "SGCO_VALIDATIONS_TASKS";
  String sNodeValidaOutputDef = sMeta4Object + "!" + sNodeValida + "[*]";
  
  String sValidTitle = "", sValidCount = "";
  
  String sNodeTask = "SGCO_TASKS_TASKS";
  String sNodeTaskOutputDef = sMeta4Object + "!" + sNodeTask + "[*]";

  String sTaskTitle = "", sTaskCount = "";
  
  String sNodeValua = "SGCO_VALUATIONS_TASKS";
  String sNodeValuaOutputDef = sMeta4Object + "!" + sNodeValua + "[*]";

  String sValuaTitle = "", sValuaCount = "";
  
%>

<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
   <m4:datadef m4name = "<%=sMeta4Object%>" m4o = "<%=sMeta4Object%>"/>
   <m4:exec m4method = "<%=sMethodLoad%>">
     <m4:param name = "ARG_PATH_TEMP" value = "<%=sPathTempMap%>"/>
   </m4:exec>
   <m4:outputdef m4alias = "<%=sNodeMain%>">
     <m4:param name = "M4NAME0" value = "<%=sOutputDefMain%>"/>
   </m4:outputdef>
   <m4:outputdef m4alias = "<%=sNodeValida%>">
     <m4:param name = "M4NAME0" value = "<%=sNodeValidaOutputDef%>"/>
   </m4:outputdef>
   <m4:outputdef m4alias = "<%=sNodeTask%>">
     <m4:param name = "M4NAME0" value = "<%=sNodeTaskOutputDef%>"/>
   </m4:outputdef>
   <m4:outputdef m4alias = "<%=sNodeValua%>">
     <m4:param name = "M4NAME0" value = "<%=sNodeValuaOutputDef%>"/>
   </m4:outputdef>
</m4:job>

<%
  String sToolTip = "", sLink = "";
  int iReg = 0, iValidCount = 0, iTaskCount  = 0, iValuaCount = 0, iTotalCount = 0;
  try {
      M4Operations m = new M4Operations(request);
      iValidCount = m.getCount(sNodeValida,sMeta4Object,sNodeValida);
      iTaskCount = m.getCount(sNodeTask,sMeta4Object,sNodeTask);
      iValuaCount = m.getCount(sNodeValua,sMeta4Object,sNodeValua);
  } catch(Exception e) {}
  iTotalCount = iValidCount + iTaskCount + iValuaCount;
%>

  <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_TITLE" var="sTasksTitle" htmlsafe="true"/>
  <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_MORE" var="sMore" htmlsafe="true"/>
  <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_LINK_MORE" var="sLinkMore" htmlsafe="true"/>

  <div class="m4subsectionheader m4subsectiontasks">
    <span id="idsubsectiontaskstitle" class="m4title"><%=sTasksTitle%></span>
  </div>

<%
  if (iTotalCount == 0) {
%>
  <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_NONE_TASK" var="sNone" htmlsafe="true"/>
  <span id="idnotask" class="m4notask"><%=sNone%></span>
<% 
  } else {
%>

    <span id="idnotask" class="m4hide m4notask"></span>  
<%
      if (iValidCount > 0) {
        String sValidMaxLines = "";
%>
        <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_TITLE_VALID" var="sValidTitle" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_N_VALID" var="sValidCount" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_N_MAX_VALID" var="sValidMaxLines" htmlsafe="true"/>

   <div id="idvalidation" class="m4subsection">
     <div class="m4subsectionheader m4subsecnottitle">
       <span id="idvalidationtitle" class="m4title"><%=sValidTitle%> (<%=sValidCount%>)</span>
     </div>
     <div id="idsubsecnotice" class="m4subsecnotbox">
<%
        int iValidMaxLines = Integer.parseInt(sValidMaxLines);
        int iPos = 0;
        String sCountLevel = "", sLinkLevel = "", sToolTipLevel = "", sCountLevelLeft = "", sLinkLevelLeft = "", sToolTipLevelLeft = "";
%>
      <m4:dataloop outputdef="<%=sNodeValida%>">
<%
        if (iReg < iValidMaxLines) {
          iReg += 1;
%>
        <m4:item outputdef="<%=sNodeValida%>" item="SCO_PRP_TOOLTIP" var="sToolTip" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeValida%>" item="SCO_PRP_TITLE" var="sValidTitle" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeValida%>" item="SCO_PRP_COUNT_LEVEL" var="sCountLevel" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeValida%>" item="SCO_PRP_LINK_LEVEL" var="sLinkLevel" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeValida%>" item="SCO_PRP_TOOLTIP_LEVEL" var="sToolTipLevel" htmlsafe="true"/>

       <span class="m4list" title="<%=sToolTip%>"><%=sValidTitle%>
<%
          while (!sCountLevel.equals("")) { /* search and count the '|' symbol into sLevel variable */
            iPos = sCountLevel.indexOf("|");
            if (iPos > -1) {
              sCountLevelLeft = sCountLevel.substring(0, iPos);
            } else { 
              sCountLevelLeft = sCountLevel;
              iPos = sCountLevel.length() - 1;
            }
            sCountLevel = sCountLevel.substring(iPos + 1);
            iPos = sLinkLevel.indexOf("|");
            if (iPos > -1) {
              sLinkLevelLeft = sLinkLevel.substring(0, iPos);
            } else { 
              sLinkLevelLeft = sLinkLevel;
              iPos = sLinkLevel.length() - 1;
            }
            sLinkLevel = sLinkLevel.substring(iPos + 1);
            iPos = sToolTipLevel.indexOf("|");
            if (iPos > -1) {
              sToolTipLevelLeft = sToolTipLevel.substring(0, iPos);
            } else  { 
              sToolTipLevelLeft = sToolTipLevel;
              iPos = sToolTipLevel.length() - 1;
            }
            sToolTipLevel = sToolTipLevel.substring(iPos + 1);
%>
          <a class="m4link" title="<%=sToolTipLevelLeft%>" href="<%=sLinkLevelLeft%>"> (<%=sCountLevelLeft%>)</a>
<%
          }
%>
       </span>
<%
        }
%>
     </m4:dataloop>
<%
        if (iValidCount > iValidMaxLines) {
%>
       <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_TOOLTIP_VALID" var="sToolTip" htmlsafe="true"/>
       <span class="m4list"><a class="m4link" title="<%=sToolTip%>" href="<%=sLinkMore%>"><%=sMore%></a></span>
<%
        }
%>
     </div>
   </div>
<%
      }
      if (iTaskCount > 0) {
        String sTaskMaxLines = "";
%>
        <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_TITLE_TASK" var="sTaskTitle" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_N_TASK" var="sTaskCount" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_N_MAX_TASK" var="sTaskMaxLines" htmlsafe="true"/>

   <div id="idtasks" class="m4subsection">
     <div class="m4subsectionheader m4subsecnottitle">
       <span id="idtaskstitle" class="m4title"><%=sTaskTitle%> (<%=sTaskCount%>)</span>
     </div>
     <div id="idsubsecnotice" class="m4subsecnotbox">
<%
        int iTaskMaxLines = Integer.parseInt(sTaskMaxLines);
        iReg = 0;
%>
      <m4:dataloop outputdef="<%=sNodeTask%>">
<%
        if (iReg < iTaskMaxLines) {
          iReg += 1;
%>
        <m4:item outputdef="<%=sNodeTask%>" item="SCO_PRP_TITLE" var="sTaskTitle" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeTask%>" item="SCO_PRP_TOOLTIP" var="sToolTip" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeTask%>" item="SCO_PRP_LINK" var="sLink" htmlsafe="true"/>
<%
        //Decrypt data received. These data were encrypted with LN4 code and need encrypt this with java.
		String[] sElemEncr={"0_zPRP_ID_HR_ENCR_0","0_zPRP_OR_HR_PERIOD_ENCR_0","0_zPRP_DT_REQUEST_ENCR_0","0_zPRP_ID_INTERVIEW_TYPE_ENCR_0"};
		Arrays.sort(sElemEncr); 
		com.meta4.common.cipher.M4CipherUtil oDecrypt = new com.meta4.common.cipher.M4CipherUtil();
		String sKey = ""; String sKeyEncr = ""; String sKeyAux = ""; String sValue = ""; String sValueAux = ""; String sValueEncr = ""; String sValueKey = ""; String sRedirection = "";
		int contador = 0; int nPos = 0;
		//If the link contains a parameter security should be checked
		if ((sLink.indexOf("?") != -1)&&(sLink.indexOf("=") != -1)){
		  try{
		    StringTokenizer tokens = new StringTokenizer(sLink,"=&");
		    while (tokens.hasMoreTokens ()){
		      sKey = tokens.nextToken();	
		      sKeyAux = sKey;
		      sKeyAux = sKeyAux.replace("#38;","");
		      sKeyAux="0_"+sKeyAux+"_0";
		      sValueAux = tokens.nextToken();
		      nPos = Arrays.binarySearch(sElemEncr, sKeyAux);
		      if (nPos >= 0){
	            Hashtable zhash = oDecrypt.dehashToken(sValueAux);
	            Enumeration enumhash = zhash.keys();
	            sKeyEncr = (String) enumhash.nextElement();
	            sValueKey = (String) zhash.get(sKeyEncr);
	            sValueEncr = (String) zhash.get(sKeyEncr); 
	            sValueEncr = sValueEncr.substring(0,sValueEncr.length()-4);
	            sValue = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sValueEncr);
	            zhash.remove(sValueKey);
		      }else{
		      sValue = sValueAux;
		      }		
		      if (contador == 0){
		      sRedirection += sKey + "=" + sValue;
		      }else{
		      sRedirection += "&"+sKey + "=" + sValue;
		      }
		      contador++;
		    }
          }catch(Exception e){
            sRedirection = "../../ERROR";
          }
		}else{
          sRedirection = sLink;
        }
%>		
        <span class="m4list"><a class="m4link" title="<%=sToolTip%>" href="<%=sRedirection%>"><%=sTaskTitle%></a></span>
<%
        }
%>
     </m4:dataloop>
<%
        if (iValidCount > iTaskMaxLines) {
%>
       <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_TOOLTIP_TASK" var="sToolTip" htmlsafe="true"/>
       <span class="m4list"><a class="m4link" title="<%=sToolTip%>" href="<%=sLinkMore%>"><%=sMore%></a></span>
<%
        }
%>
     </div>
   </div>
<%
      }
      if (iValuaCount > 0) {
        String sTaskMaxLines = "";
%>
        <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_TITLE_VALUA" var="sValuaTitle" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_N_VALUA" var="sValuaCount" htmlsafe="true"/>

   <div id="idtasks" class="m4subsection">
     <div class="m4subsectionheader m4subsecnottitle">
       <span id="idtaskstitle" class="m4title"><%=sValuaTitle%> (<%=sValuaCount%>)</span>
     </div>
     <div id="idsubsecnotice" class="m4subsecnotbox">

      <m4:dataloop outputdef="<%=sNodeTask%>">
        <m4:item outputdef="<%=sNodeTask%>" item="SCO_PRP_TITLE" var="sValuaTitle" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeTask%>" item="SCO_PRP_TOOLTIP" var="sToolTip" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeTask%>" item="SCO_PRP_LINK" var="sLink" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeTask%>" item="SCO_PRP_COUNT" var="sValuaCount" htmlsafe="true"/>
        <span class="m4list"><a class="m4link" title="<%=sToolTip%>" href="<%=sLink%>"><%=sTaskTitle%> (<%=sValuaCount%>)</a></span>
     </m4:dataloop>
     </div>
   </div>
<%
      }
  }

  oM4Log.debug("sgco_engine_tasks.jsp: exit");
%>

</m4:page>