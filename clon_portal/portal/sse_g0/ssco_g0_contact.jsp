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
   <script type="text/javascript" src="/libreria/functions_contact.js"></script>
   <link href="/css/style_contact.css" rel="stylesheet" type="text/css" />
   <link href="/css/meta4table.css" rel="stylesheet" type="text/css" />
 </head>

<%

  //no cache
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store"); 
  response.setDateHeader("Expires", -1); 

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("ssco_g0_contact.jsp: entry");

  M4SessionManager m4Session = M4Context.getSession(request);
  String sPathTempMap = m4Session.getPathTempMapping();
  String sPathTempURI = m4Session.getUserTempURI() + '/';

  String sSubSession = "SGCO_CONTACT";
  String sMeta4Object = "SGCO_CONTACT";

  String sNodeLabel = "SGCO_CONTACT_LABEL";
  String sDataDefLabel = sMeta4Object + "!" + sNodeLabel;
  String sOutputDefLabel = sDataDefLabel + "[*]";
  String sMethodLoadLabel = sDataDefLabel + ".SCO_MTD_LOAD_LABEL";

  String sNodeLabelTable = "SGCO_CONTACT_LABEL_TABLE";
  String sDataDefLabelTable = sMeta4Object + "!" + sNodeLabelTable;
  String sOutputDefLabelTable = sDataDefLabelTable + "[*]";
  
  String sDescription = "";
  String sAuxData = "";
  String sAuxLabel = "";
  String sAuxLabelTitle = "";

%>

 <body id='body' m4path='<%=sPathTempMap%>' m4pathURI='<%=sPathTempURI%>'>
 
<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
    <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>
    <m4:exec m4method="<%=sMethodLoadLabel%>">
    </m4:exec>
    <m4:outputdef m4alias="<%=sNodeLabel%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabel%>"/></m4:outputdef>
    <m4:outputdef m4alias="<%=sNodeLabelTable%>"><m4:param name="M4NAME0" value="<%=sOutputDefLabelTable%>"/></m4:outputdef>
 </m4:job>

   <div class='divTotal'>

     <div class='divTitle'>
       <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_TITLE" var="sAuxLabel" htmlsafe="true"/>
       <span id='sHeadTitle'><%=sAuxLabel%></span>
     </div>

     <div>
       <div class='divLeftPhoto'>
         <img src='/iconos/inf_complementaria_empleado_100x100.gif' title='Mis contactos'/>
         <div class='divDesc'>
           <m4:item outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_DESC" var="sDescription" htmlsafe="true"/>
           <span><%=sDescription%></span>
           <div class='divSubtitle'>
              <ul class='unsortedlist'>
                <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_WHO" var="sAuxLabel" htmlsafe="true"/> 
                <li><a class='aLink' href='/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp'><%=sAuxLabel%></a></li>
              </ul>
           </div>
         </div>  
       </div>
       <div class='divPhoto'>
          <img class='nophoto' id='imgPhoto' src=''/>
       </div>
     </div>
     
     <div class='divSep'></div>

     <div class='tblContact'>
        <table id='tblContact' class='m4table'>
        <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_LIST_CONTACT" var="sAuxLabel" htmlsafe="true"/>
        <caption id='tblConCaption'><%=sAuxLabel%></caption>
        <thead id='m4tableHead'>
          <tr>
            <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_NAME" var="sAuxLabel" htmlsafe="true"/>
            <td class='m4tableHead' width=23%><div id='theadTbltd1' m4column='Name' m4sort='ASC' m4sortFnt='m4Contact.table.sortMe(me)'><%=sAuxLabel%></div></td>
            <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_WUNIT" var="sAuxLabel" htmlsafe="true"/>
            <td class='m4tableHead' width=24%><div id='theadTbltd2' m4column='WUnit' m4sort='' m4sortFnt='m4Contact.table.sortMe(me)'><%=sAuxLabel%></div></td>
            <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_PHONE" var="sAuxLabel" htmlsafe="true"/>
            <td class='m4tableHead' width=18%><div id='theadTbltd3'><%=sAuxLabel%></div></td>
            <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_EMAIL" var="sAuxLabel" htmlsafe="true"/>
            <td class='m4tableHead' width=15%><div id='theadTbltd4'><%=sAuxLabel%></div></td>
            <m4:label get="item" outputdef="<%=sNodeLabel%>" item="SCO_PRP_LBL_WLOC" var="sAuxLabel" htmlsafe="true"/>
            <td class='m4tableHead' width=18%><div id='theadTbltd5' m4column='WLoc' m4sort='' m4sortFnt='m4Contact.table.sortMe(me)'><%=sAuxLabel%></div></td>
            <td class='m4tableHead' width=2%><div id='theadTbltd6'></div></td>
          </tr>
        </thead>
        <tbody>
        </tbody>
        <tfoot id='m4tableFoot' class='m4tableFoot'>
          <tr>
            <td colspan='6'>
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

</m4:page>

 </body>

</html>

<%
  oM4Log.debug("ssco_g0_contact.jsp: exit");
%>