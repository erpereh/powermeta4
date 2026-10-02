<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*"%>
<%@ page import="com.meta4.m4operations.*, com.meta4.session.*, com.meta4.utilities.*, com.meta4.configuration.*"%>
<%@ page import="com.meta4.menu.*" %>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>

<html xmlns="http://www.w3.org/1999/xhtml">
<%@ include file="../sse_generico/sse_generico_taglib.jsp" %>

 <head>
   <script type="text/javascript" src="/libreria/mootools.js"></script>
   <script type="text/javascript" src="/libreria/meta4ajax.js"></script>
   <script type="text/javascript" src="/libreria/meta4photo.js"></script>
   <script type="text/javascript" src="/libreria/functions_infemp.js"></script>
   <link href="/css/style_infemp.css" rel="stylesheet" type="text/css" />
 </head>

<%
  //no cache
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store"); 
  response.setDateHeader("Expires", -1); 

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("ssco_g0_inf_emp.jsp: entry");

  M4SessionManager m4Session = M4Context.getSession(request);
  String sPathTempMap = m4Session.getPathTempMapping();
  String sPathTempURI = m4Session.getUserTempURI() + '/';

  String sIdHR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR");
  if (sIdHR == null) {sIdHR="";}
  if (!sIdHR.equals("")) {
    oM4Log.debug("  IdHR: " + sIdHR);
  }
  
  String sSubSession = "SGCO_INF_EMPLOYEE";
  String sMeta4Object = "SGCO_INF_EMPLOYEE";

  String sNodeMain = "SGCO_INF_EMPLOYEE";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";
  String sMoveMain = sNodeMain + ":" + sNodeMain + "[FIRST]";

  String sIdPerson = "";
  String sGbName = "";
  String sWorkLoc = "";
  String sIdWorkUnit = "";
  String sWorkUnit = "";

  
  String sNodePhone = "SGCO_INF_PHONE_FAX";
  String sDataDefPhone = sMeta4Object + "!" + sNodePhone;
  String sOutputDefPhone = sDataDefPhone + "[*]";
  String sNodeAuxPhone = "";
  
  String sPhone = "";
  String sIdLine = "";
  String sNameLine = "";

  String sNodeEmail = "SGCO_INF_EMAIL";
  String sDataDefEmail = sMeta4Object + "!" + sNodeEmail;
  String sOutputDefEmail = sDataDefEmail + "[*]";
  String sNodeAuxEmail = "";
  
  String sEmail = "";

  String sNodeJob = "SGCO_INF_JOB";
  String sDataDefJob = sMeta4Object + "!" + sNodeJob;
  String sOutputDefJob = sDataDefJob + "[*]";
  String sNodeAuxJob = "";
  
  String sNameJob = "";

  String sNodeResp = "SGCO_INF_RESPONSIBLE";
  String sDataDefResp = sMeta4Object + "!" + sNodeResp;
  String sOutputDefResp = sDataDefResp + "[*]";
  String sNodeAuxResp = "";
  
  String sIdResp = "";
  String sGbNameResp = "";

  String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";

  int iCount = 0;
  String sCountMain = "";
%>

 <body id='body' path='<%=sPathTempMap%>' pathURI='<%=sPathTempURI%>' idHR='<%=sIdHR%>'>
 
<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
    <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>

    <m4:exec m4method="<%=sMethodLoad%>">
      <m4:param name="ARG_ID_HR" value="<%=sIdHR%>"/>
    </m4:exec>
    <m4:exec node="<%=sNodeMain%>" alias="countMain" method="COUNT" m4object="<%=sMeta4Object%>"/>

    <m4:outputdef m4alias="<%=sNodeMain%>"><m4:param name="M4NAME0" value="<%=sOutputDefMain%>"/></m4:outputdef>

 </m4:job>
 <m4:job>
    <m4:outputdef m4alias="<%=sNodeMain%>"><m4:param name="M4NAME0" value="<%=sOutputDefMain%>"/></m4:outputdef>
    <m4:outputexec var="sCountMain" alias="countMain"/>
  <%
      int i = 0;
      int iCountMain = 0;
      try {
          iCountMain = Integer.parseInt(sCountMain);
          for (i = 0; i < iCountMain; i++) {
             sMoveMain = sNodeMain + ":" + sNodeMain + "[" + String.valueOf(i) + "]";
             sNodeAuxPhone = sNodePhone + String.valueOf(i);
             sNodeAuxEmail = sNodeEmail + String.valueOf(i);
             sNodeAuxJob = sNodeJob + String.valueOf(i);
             sNodeAuxResp = sNodeResp + String.valueOf(i);
  %>
    <m4:move><m4:param name="<%=sSubSession%>" value="<%=sMoveMain%>"/></m4:move>
    <m4:outputdef m4alias="<%=sNodeAuxPhone%>"><m4:param name="M4NAME0" value="<%=sOutputDefPhone%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeAuxEmail%>"><m4:param name="M4NAME0" value="<%=sOutputDefEmail%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeAuxJob%>"><m4:param name="M4NAME0" value="<%=sOutputDefJob%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeAuxResp%>"><m4:param name="M4NAME0" value="<%=sOutputDefResp%>"/></m4:outputdef>
  <%
          }
      } catch(Exception e) {}
  %>
 </m4:job>

  <%
    iCount = Integer.parseInt(sCountMain);
    Integer iCountEmail;
    Integer iCountPhone;
    Integer iCountWLoc;
    Integer iCountWUnit;
    Integer iCountJob;
    Integer iCountResp;
    int i = 0;
    int iCountAux = 0;
    String sAuxLabel = "";
    String sAuxLabelOK = "";
    String sAuxLabelKO = "";
  %>

   <div class='divTotal'>

     <div class='divTitle'>
       <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_LBL_TITLE" var="sAuxLabel" htmlsafe="true"/>
       <span id='sHeadTitle'><%=sAuxLabel%></span>
     </div>

     <div class='divSubtitle'>
        <ul class='unsortedlist'>
          <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_LBL_WHO" var="sAuxLabel" htmlsafe="true"/>
          <li><a class='aLink' href='/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp'><%=sAuxLabel%></a></li>
        </ul>
     </div>

     <div class='divSep'></div>
     <div class='divInfoEmp'>
       <div class='divPhoto'>
          <img class='nophoto' id='imgPhoto'/>
       </div>

       <div class='divInfo'>

         <m4:item outputdef="<%=sNodeMain%>" item="SCO_GB_NAME" var="sGbName" htmlsafe="true"/>
         <m4:item outputdef="<%=sNodeMain%>" item="STD_ID_PERSON" var="sIdPerson" htmlsafe="true"/>
         <div class='divName'>
           <div>
             <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_LBL_NAME" var="sAuxLabel" htmlsafe="true"/>
             <span class='spanTitle'><%=sAuxLabel%>:</span>
             <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_LBL_CONTACT_OK" var="sAuxLabelOK" htmlsafe="true"/>
             <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_LBL_CONTACT_KO" var="sAuxLabelKO" htmlsafe="true"/>
             <span id='spnName' class='spanValue' OK='<%=sAuxLabelOK%>' KO='<%=sAuxLabelKO%>'><%=sGbName%></span>
           </div> 
           <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_LBL_PERS" var="sAuxLabel" htmlsafe="true"/>
           <img id='imgAddContact' idHR=<%=sIdPerson%> class='imgAdd' title='<%=sAuxLabel%>' src='/iconos/lu_add_con_nor_24.png'/>
         </div>
         <div class='divSep'></div>
        
         
         <div class='divPhone'>
        <%
        for (i = 0; i < iCount; i++) {
          sNodeAuxPhone = sNodePhone + String.valueOf(i);
          %><m4:count outputdef="<%=sNodeAuxPhone%>" var="iCountPhone"/>
          <m4:label get="item" outputdef="<%=sNodeAuxPhone%>" item="SCO_PRP_LBL_PHONE" var="sAuxLabel" htmlsafe="true"/>
          <span class='spanTitle'><%=sAuxLabel%>:</span><%
          if (iCountPhone.intValue() > 0) {
            iCountAux = 0;
          %>
           <m4:dataloop outputdef="<%=sNodeAuxPhone%>"><%
             iCountAux += 1;%>
             <m4:item outputdef="<%=sNodeAuxPhone%>" item="SCO_PRP_PHONE" var="sPhone" htmlsafe="true"/> 
             <m4:item outputdef="<%=sNodeAuxPhone%>" item="STD_ID_LINE_TYPE" var="sIdLine" htmlsafe="true"/> 
             <m4:item outputdef="<%=sNodeAuxPhone%>" item="STD_N_LINE_TYPE" var="sNameLine" htmlsafe="true"/><%
             if (sIdLine.equals("001")) {
               sIdLine = "/iconos/lu_nor_phone_32.png";
             } else if (sIdLine.equals("002")) {
               sIdLine = "/iconos/lu_nor_fax_32.png";
             } else if (sIdLine.equals("003")) {
               sIdLine = "/iconos/lu_nor_mobile_32.png";
             } else {
               sIdLine = "/iconos/lu_nor_other_phone_32.png";
             }
             if (iCountAux == 1) {%>
               <div><div><span id='spnPhone1' class='spanValue spanPhone'><%=sPhone%></span></div><img class='typePhone' id='typePhone1' title='<%=sNameLine%>' src='<%=sIdLine%>'/></div>
           <%} else if (iCountAux > 1) {
               if (iCountAux == 2) {  
             %><img id='imgPhone' class='imgMore' src='/iconos/menu_closed.png'/>
                 <div class='divNoVisible' id='divMorePhone'><%
               }
                 %><div><div><span id='spnPhone<%=iCountAux%>' class='spanValue spanPhone'/><%=sPhone%></span></div><img class='typePhone' id='typePhone<%=iCountAux%>' title='<%=sNameLine%>' src='<%=sIdLine%>'/></div><%
             }
          %></m4:dataloop><%
            if (iCountAux > 1) {
                %></div><%
            }
          } else {%>
            <div><span id='spnPhone1' class='spanValue'></span></div>
          <%}
        }%>
         </div>
         <div class='divSep'></div>


         <div class='divEmail'>
        <%
        for (i = 0; i < iCount; i++) {
          sNodeAuxEmail = sNodeEmail + String.valueOf(i);
          %><m4:count outputdef="<%=sNodeAuxEmail%>" var="iCountEmail"/>
          <m4:label get="item" outputdef="<%=sNodeAuxEmail%>" item="SCO_PRP_LBL_EMAIL" var="sAuxLabel" htmlsafe="true"/>
          <span class='spanTitle'><%=sAuxLabel%>:</span><%
          if (iCountEmail.intValue() > 0) {
            iCountAux = 0;
          %><m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_LBL_SEND" var="sAuxLabel" htmlsafe="true"/>
            <m4:dataloop outputdef="<%=sNodeAuxEmail%>"><%
             iCountAux += 1;%>
             <m4:item outputdef="<%=sNodeAuxEmail%>" item="STD_EMAIL" var="sEmail" htmlsafe="true"/><%
             if (iCountAux == 1) {%>
               <div><a id='spnEmail1' class='spanValue spanLink' title='<%=sAuxLabel%>' href='mailto:<%=sEmail%>'><%=sEmail%></a></div>
           <%} else if (iCountAux > 1) {
               if (iCountAux == 2) {  
             %><img id='imgEmail' class='imgMore' src='/iconos/menu_closed.png'/>
                 <div class='divNoVisible' id='divMoreEmail'><%
               }
                 %><div><a id='spnEmail<%=iCountAux%>' class='spanValue spanLink' title='<%=sAuxLabel%>' href='mailto:<%=sEmail%>'><%=sEmail%></a></div><%
             }
          %></m4:dataloop><%
            if (iCountAux > 1) {
                %></div><%
            }
          } else {%>
            <div><span id='spnEmail1' class='spanValue'></span></div>
          <%}
        }%>
         </div>
         <div class='divSep'></div>
         
         <div class='divJob'>
        <%
        for (i = 0; i < iCount; i++) {
          sNodeAuxJob = sNodeJob + String.valueOf(i);
          %><m4:count outputdef="<%=sNodeAuxJob%>" var="iCountJob"/>
          <m4:label get="item" outputdef="<%=sNodeAuxJob%>" item="SCO_PRP_LBL_JOB" var="sAuxLabel" htmlsafe="true"/>
          <span class='spanTitle'><%=sAuxLabel%>:</span><%
          if (iCountJob.intValue() > 0) {
            iCountAux = 0;
          %><m4:dataloop outputdef="<%=sNodeAuxJob%>">
          <%iCountAux += 1;%>
             <m4:item outputdef="<%=sNodeAuxJob%>" item="STD_N_JOB_CODE" var="sNameJob" htmlsafe="true"/>
          <% if (iCountAux == 1) {%>
             <div><span id='spnJob' class='spanValue'><%=sNameJob%></span></div>
          <% }
          %></m4:dataloop><%
          } else {%>
            <div><span id='spnJob' class='spanValue'></span></div>
        <%}
        }%>
         </div>
         <div class='divSep'></div>


         <div class='divWLocation'>
           <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_LBL_WLOC" var="sAuxLabel" htmlsafe="true"/>
           <span class='spanTitle'><%=sAuxLabel%>:</span> 
           <m4:item outputdef="<%=sNodeMain%>" item="STD_N_WORK_LOCATION" var="sWorkLoc" htmlsafe="true"/>
           <div><span id='spnWLoc' class='spanValue'><%=sWorkLoc%></span></div>

         </div>
         <div class='divSep'></div>

         <div class='divWUnit'>
           <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_LBL_WUNIT" var="sAuxLabel" htmlsafe="true"/>
           <span class='spanTitle'><%=sAuxLabel%>:</span>
           <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_LBL_ORG_CHART" var="sAuxLabel" htmlsafe="true"/>
           <m4:item outputdef="<%=sNodeMain%>" item="SCO_ID_WORK_UNIT" var="sIdWorkUnit" htmlsafe="true"/>
           <m4:item outputdef="<%=sNodeMain%>" item="STD_N_WORK_UNIT" var="sWorkUnit" htmlsafe="true"/>
           <a id='spnWUnit' class='spanValue spanLink' title='<%=sAuxLabel%>' href='/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_org_chart.jsp?IdWUnit=<%=sIdWorkUnit%>'><%=sWorkUnit%></a>
         </div>
         <div class='divSep'></div>

         <div class='divResp'>
        <%
        for (i = 0; i < iCount; i++) {
          sNodeAuxResp = sNodeResp + String.valueOf(i);
          %><m4:count outputdef="<%=sNodeAuxResp%>" var="iCountResp"/>
          <m4:label get="item" outputdef="<%=sNodeAuxResp%>" item="SCO_PRP_LBL_RESP" var="sAuxLabel" htmlsafe="true"/>
          <span class='spanTitle'><%=sAuxLabel%>:</span><%
          if (iCountResp.intValue() > 0) {
            iCountAux = 0;
          %><m4:label get="item" outputdef="<%=sNodeAuxResp%>" item="SCO_PRP_LBL_VIEW" var="sAuxLabel" htmlsafe="true"/>
            <m4:dataloop outputdef="<%=sNodeAuxResp%>"><%
             iCountAux = iCountAux + 1;%>
             <m4:item outputdef="<%=sNodeAuxResp%>" item="SCO_PRP_RESP_ID_HR" var="sIdResp" htmlsafe="true"/> 
             <m4:item outputdef="<%=sNodeAuxResp%>" item="SCO_PRP_RESP_GB_NAME" var="sGbNameResp" htmlsafe="true"/> <%
             if (iCountAux == 1) {%>
             <div><a id='spnResp1' class='spanValue spanLink' title='<%=sAuxLabel%>' href='/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_inf_emp.jsp?IdHR=<%=sIdResp%>'><%=sGbNameResp%></a></div>
             <%} else if (iCountAux > 1) {
               if (iCountAux == 2) {  
             %><img id='imgResp' class='imgMore' src='/iconos/menu_closed.png'/>
                 <div class='divNoVisible' id='divMoreResp'><%
               }
                 %><a id='spnResp<%=iCountAux%>' class='spanValue spanLink' title='<%=sAuxLabel%>' href='/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_inf_emp.jsp?IdHR=<%=sIdResp%>'><%=sGbNameResp%></a><%
             }
          %></m4:dataloop><%
            if (iCountAux > 1) {
                %></div><%
            }
          } else {%>
            <div><span id='spnResp1' class='spanValue'></span></div>
          <%}
        }%>
         </div>
         <div class='divSep'></div>


       </div>
     </div>
     
   </div>

</m4:page>

 </body>

</html>

<%
  oM4Log.debug("ssco_g0_inf_emp.jsp: exit");
%>