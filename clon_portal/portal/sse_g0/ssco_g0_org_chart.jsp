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
   <script type="text/javascript" src="/libreria/meta4table.js"></script>
   <script type="text/javascript" src="/libreria/meta4infpers.js"></script>
   <script type="text/javascript" src="/libreria/functions_orgchart.js"></script>
   <link href="/css/style_orgchart.css" rel="stylesheet" type="text/css" />
   <link href="/css/meta4table.css" rel="stylesheet" type="text/css" />
 </head>

<%
  //no cache
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store"); 
  response.setDateHeader("Expires", -1); 

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("ssco_g0_org_chart.jsp: entry");

  M4SessionManager m4Session = M4Context.getSession(request);
  String sPathTempMap = m4Session.getPathTempMapping();
  String sPathTempURI = m4Session.getUserTempURI() + '/';

  String sSubSession = "SGCO_ORG_CHART";
  String sMeta4Object = "SGCO_ORG_CHART";

  String sNodeMain = "SGCO_ORG_CHART_MAIN";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";
  
  String sIdWorkUnit = "";
  String sNameWorkUnit = "";
  String sLevel = "";
  String sLoaded = "";
  
  String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";

  String sNodeLabel = "SGCO_ORG_CHART_LABEL";
  String sDataDefLabel = sMeta4Object + "!" + sNodeLabel;
  String sOutputDefLabel = sDataDefLabel + "[*]";
  String sMethodLoadLabel = sDataDefLabel + ".SCO_MTD_LOAD_LABEL";

  String sNodeLabelTable = "SGCO_ORG_CHART_LABEL_TABLE";
  String sDataDefLabelTable = sMeta4Object + "!" + sNodeLabelTable;
  String sOutputDefLabelTable = sDataDefLabelTable + "[*]";

  String sDescription = "";
  String sAuxLabel = "";
  String sAuxLabelTitle = "";
  
  String sReset = "0";
  String sIdWUnit = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWUnit");
  if (sIdWUnit == null) {sIdWUnit="";}
  if (!sIdWUnit.equals("")) {
    sReset = "1";
    oM4Log.debug("  Work Unit ID: " + sIdWUnit);
    oM4Log.debug("  Reset: " + sReset);
  }

%>

 <body id='body' m4path='<%=sPathTempMap%>' m4pathURI='<%=sPathTempURI%>' m4idWU='<%=sIdWUnit%>'>
 
<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
    <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>
    <m4:exec m4method="<%=sMethodLoad%>">
      <m4:param name="ARG_WORK_UNIT" value="<%=sIdWUnit%>"/>
      <m4:param name="ARG_RESET" value="<%=sReset%>"/>
    </m4:exec>
    <m4:exec m4method="<%=sMethodLoadLabel%>">
    </m4:exec>
    <m4:outputdef m4alias="<%=sNodeLabel%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabel%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeLabelTable%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabelTable%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeMain%>"><m4:param name="M4NAME0" value="<%=sOutputDefMain%>"/></m4:outputdef>
 </m4:job>

   <div class='divTotal'>

     <div class='divTitle'>
       <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_WU_TREE" var="sAuxLabel" htmlsafe="true"/>
       <span id='sHeadTitle'><%=sAuxLabel%></span>
     </div>

     <div>
       <div class='divLeftPhoto'>
         <img src='/iconos/inf_complementaria_empleado_100x100.gif' title='<%=sAuxLabel%>'/>
         <div class='divDesc'>
           <m4:item outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_DESC" var="sDescription" htmlsafe="true"/>
           <span><%=sDescription%></span>
           <div class='divSubtitle'>
              <ul class='unsortedlist'>
                <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_WHO_IS_WHO" var="sAuxLabel" htmlsafe="true"/> 
                <li><a class='aLink' href='/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp'><%=sAuxLabel%></a></li>
                <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_CONTACT" var="sAuxLabel" htmlsafe="true"/> 
                <li><a class='aLink' href='/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_contact.jsp'><%=sAuxLabel%></a></li>
              </ul>
           </div>
         </div>  
       </div>
       <div class='divPhoto'>
          <img class='nophoto' id='imgPhoto' src=''/>
       </div>
     </div>

     <div class='divSep'>
       <div class='divOrgtree' id='divOrgtree'>
         <% int iOrg = 0;
            String sClassName = "";%>
         <m4:dataloop outputdef="<%=sNodeMain%>">
         <% iOrg += 1;%>
           <m4:item outputdef="<%=sNodeMain%>" item="STD_ID_WORK_UNIT" var="sIdWorkUnit" htmlsafe="true"/>
           <m4:item outputdef="<%=sNodeMain%>" item="STD_N_WORK_UNIT" var="sNameWorkUnit" htmlsafe="true"/>
           <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_LEVEL" var="sLevel" htmlsafe="true"/>
           <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_LOADED" var="sLoaded" htmlsafe="true"/>
         <%if (sLevel.equals("0") && iOrg > 1) {%>
            </div>
         </div>
         <%}
           if (sLevel.equals("0")) {
             if (sLoaded.equals("true")) {sClassName = "divSpanOrgChart openedOrgtree";} else {sClassName = "divSpanOrgChart closedOrgtree";}%>
         <div class='rootOrgtree' id='div<%=sIdWorkUnit%>'>
            <div class='<%=sClassName%>' id='<%=sIdWorkUnit%>' idWU='<%=sIdWorkUnit%>' idParent='div<%=sIdWorkUnit%>' idSons='divSons<%=sIdWorkUnit%>' bLoaded=<%=sLoaded%> bExpanded=<%=sLoaded%> bChild=<%=sLoaded%> onclick='m4OrgChart.Orgchart.clickMe(event);'>
              <span><%=sNameWorkUnit%></span>
            </div>
            <div class='sonsOrgtree' id='divSons<%=sIdWorkUnit%>'>
         <%} else {%>
              <div class='levelOrgtree' id='div<%=sIdWorkUnit%>'>
                <div class='divSpanOrgChart closedOrgtree' id='<%=sIdWorkUnit%>' idWU='<%=sIdWorkUnit%>' idParent='div<%=sIdWorkUnit%>' idSons='divSons<%=sIdWorkUnit%>' bLoaded=<%=sLoaded%> bExpanded='false' bChild onclick='m4OrgChart.Orgchart.clickMe(event);'>
                  <span><%=sNameWorkUnit%></span>
                </div>
                <div class='sonsOrgtree' id='divSons<%=sIdWorkUnit%>' style='display:none'></div>
              </div>
         <%}%>
         </m4:dataloop>
            </div>
         </div>
       </div>
       <div class='divSearch'>
         <div class='divSearchTitle'>
           <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_SEARCH" var="sAuxLabel" htmlsafe="true"/> 
           <span><%=sAuxLabel%></span>
         </div>
         <div class='divSearchEmp'>
           <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_EMPLOYEE" var="sAuxLabel" htmlsafe="true"/> 
           <span class='spanSearchEmp'><%=sAuxLabel%></span>
           <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_2_CAR" var="sAuxLabel" htmlsafe="true"/>
           <input id='inputSearchEmp' type='text' title='<%=sAuxLabel%>'></input>
         </div>
         <div class='divSearchWU'>
           <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_WU" var="sAuxLabel" htmlsafe="true"/> 
           <span class='spanSearchEmp'><%=sAuxLabel%></span>
           <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_2_CAR" var="sAuxLabel" htmlsafe="true"/>
           <input id='inputSearchWU' type='text' title='<%=sAuxLabel%>'></input>
         </div>
         <div class='divSearchTitle'>
           <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_RESULT" var="sAuxLabel" htmlsafe="true"/> 
           <span><%=sAuxLabel%></span>
         </div>  
         <div id='divSearchResult' class='divSearchResult'>
         </div>
         <span id='spanSearchResult' class='spanSearchResult'></span>
       </div>
     </div>
     <div class='tblResults'>
       <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_SHOW_ROOT" var="sAuxLabel" htmlsafe="true"/>
       <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_SHOW_TREE" var="sAuxLabelTitle" htmlsafe="true"/>
       <div class='resulTitle'>
         <img id='imgRoot' class='photo' title='<%=sAuxLabel%>' src='/iconos/wunits_visibility_36_36.gif'>
         <div>
           <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_WU_SHOWED" var="sAuxLabel" htmlsafe="true"/> 
           <span><%=sAuxLabel%>:</span>
           <span id='spnNameWorkUnit' title='<%=sAuxLabelTitle%>'>
           </span>
         </div>
       </div>
       <div class='tblResp'>
          <table id='tblResp' class='m4table'>
          <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_LIST_RESP" var="sAuxLabel" htmlsafe="true"/>
          <caption id='tblRespCaption'><%=sAuxLabel%></caption>
          <thead id='m4tableHead'>
            <tr>
              <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_NAME" var="sAuxLabel" htmlsafe="true"/>
              <td class='m4tableHead' width=36%><div id='theadTbltd1Resp' m4column='Name' m4sort='ASC' m4sortFnt='m4OrgChart.Orgchart.sortMe(me)'><%=sAuxLabel%></div></td>
              <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_PHONE" var="sAuxLabel" htmlsafe="true"/>
              <td class='m4tableHead' width=18%><div id='theadTbltd2Resp'><%=sAuxLabel%></div></td>
              <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_EMAIL" var="sAuxLabel" htmlsafe="true"/>
              <td class='m4tableHead' width=18%><div id='theadTbltd3Resp'><%=sAuxLabel%></div></td>
              <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_WLOC" var="sAuxLabel" htmlsafe="true"/>
              <td class='m4tableHead' width=24%><div id='theadTbltd4Resp' m4column='WLoc' m4sort='' m4sortFnt='m4OrgChart.Orgchart.sortMe(me)'><%=sAuxLabel%></div></td>
              <td class='m4tableHead' width=2%><div id='theadTbltd5Resp'></div></td>
            </tr>
          </thead>
          <tbody>
          </tbody>  
          <tfoot id='m4tableFoot' class='m4tableFoot'>
            <tr>
              <td colspan='5'>
                <div class='m4tableFootPage'>
                   <span>Página <span id='spanCurPageResp' m4page='current' class='spanPage'>0</span> de <span id='spanTotalPageResp' m4page='total' class='spanPage'>0</span><span m4page='showing' class='spanPage'></span></span>
                </div>  
                <div class='m4tableFootGoto'>
                  <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_FIRST_PAGE" var="sAuxLabel" htmlsafe="true"/>
                  <img id='imgFirstPageResp' m4action='first' title='<%=sAuxLabel%>'>
                  <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_PRV_PAGE" var="sAuxLabel" htmlsafe="true"/>
                  <img id='imgPrevPageResp' m4action='prev' title='<%=sAuxLabel%>'>
                  <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_GOTO_PAGE" var="sAuxLabel" htmlsafe="true"/>
                  <input id='inputPageResp' type='text' maxlength=3 title='<%=sAuxLabel%>'/>
                  <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_NEXT_PAGE" var="sAuxLabel" htmlsafe="true"/>
                  <img id='imgNextPageResp' m4action='next' title='<%=sAuxLabel%>'>
                  <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_LAST_PAGE" var="sAuxLabel" htmlsafe="true"/>
                  <img id='imgLastPageResp' m4action='last' title='<%=sAuxLabel%>'>
                </div>  
              </td>
            </tr>
          </tfoot>  
          </table>
       </div>
       <div class='tblEmp'>
          <table id='tblEmp' class='m4table'>
          <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_LIST_EMP" var="sAuxLabel" htmlsafe="true"/>
          <caption id='tblEmpCaption'><%=sAuxLabel%></caption>
          <thead id='m4tableHead'>
            <tr>
              <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_NAME" var="sAuxLabel" htmlsafe="true"/>
              <td class='m4tableHead' width=36%><div id='theadTbltd1Emp' m4column='Name' m4sort='ASC' m4sortFnt='m4OrgChart.Orgchart.sortMe(me)'><%=sAuxLabel%></div></td>
              <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_PHONE" var="sAuxLabel" htmlsafe="true"/>
              <td class='m4tableHead' width=18%><div id='theadTbltd2Emp'><%=sAuxLabel%></div></td>
              <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_EMAIL" var="sAuxLabel" htmlsafe="true"/>
              <td class='m4tableHead' width=18%><div id='theadTbltd3Emp'><%=sAuxLabel%></div></td>
              <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_WLOC" var="sAuxLabel" htmlsafe="true"/>
              <td class='m4tableHead' width=24%><div id='theadTbltd4Emp' m4column='WLoc' m4sort='' m4sortFnt='m4OrgChart.Orgchart.sortMe(me)'><%=sAuxLabel%></div></td>
              <td class='m4tableHead' width=2%><div id='theadTbltd5Emp'></div></td>
            </tr>
          </thead>
          <tbody>
          </tbody>  
          <tfoot id='m4tableFoot' class='m4tableFoot'>
            <tr>
              <td colspan='5'>
                <div class='m4tableFootPage'>
                  <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_PAGE" var="sAuxLabel" htmlsafe="true"/>
                  <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_OF" var="sAuxLabelTitle" htmlsafe="true"/>
                  <span><%=sAuxLabel%> <span id='spanCurPageEmp' m4page='current' class='spanPage'>0</span> <%=sAuxLabelTitle%> <span id='spanTotalPageEmp' m4page='total' class='spanPage'>0</span><span m4page='showing' class='spanPage'></span></span>
                </div>  
                <div class='m4tableFootGoto'>
                  <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_FIRST_PAGE" var="sAuxLabel" htmlsafe="true"/>
                  <img id='imgFirstPageEmp' m4action='first' title='<%=sAuxLabel%>'>
                  <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_PRV_PAGE" var="sAuxLabel" htmlsafe="true"/>
                  <img id='imgPrevPageEmp' m4action='prev' title='<%=sAuxLabel%>'>
                  <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_GOTO_PAGE" var="sAuxLabel" htmlsafe="true"/>
                  <input id='inputPageEmp' type='text' maxlength=3 title='<%=sAuxLabel%>'/>
                  <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_NEXT_PAGE" var="sAuxLabel" htmlsafe="true"/>
                  <img id='imgNextPageEmp' m4action='next' title='<%=sAuxLabel%>'>
                  <m4:label get="item" outputdef="<%=sNodeLabelTable%>" item="SCO_PRP_LBL_LAST_PAGE" var="sAuxLabel" htmlsafe="true"/>
                  <img id='imgLastPageEmp' m4action='last' title='<%=sAuxLabel%>'>
                </div>  
              </td>
            </tr>
          </tfoot>  
          </table>
       </div>
     </div>
   </div>

</m4:page>

 </body>

</html>

<%
  oM4Log.debug("ssco_g0_org_chart.jsp: exit");
%>