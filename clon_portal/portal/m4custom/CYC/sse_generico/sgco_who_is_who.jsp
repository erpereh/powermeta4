<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="java.io.*, java.util.*, java.net.*, java.lang.Math"%>
<%@ page import="com.meta4.m4operations.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%

  String sSubSession = "SSCO_WHO_IS_WHO";
  String sMeta4Object = "SSCO_WHO_IS_WHO";

  String sNodeMain = "SSCO_LABEL_WHO";
  String sDataDefMain = sMeta4Object + "!" + sNodeMain;
  String sOutputDefMain = sDataDefMain + "[*]";

  String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";

  String sNodeWorkUnit = "SSCO_WORK_UNIT_WHO";
  String sDataWorkUnit = sMeta4Object + "!" + sNodeWorkUnit;
  String sOutputDefWorkUnit = sDataWorkUnit + "[*]";
  String sMoveWorkUnit = sNodeWorkUnit + ":" + sNodeWorkUnit + "[FIRST]";

  String sMethodLoadWorkUnit = sDataWorkUnit + ".SCO_MTD_LOAD";
  
  String sTitle = "", sFilter = "", sName = "", sWorkUnit = "", sSubtitle = "", s2Letters = "", sPhone = "", sEmail = "", sNoData = "";
  String sIdWorkUnit = "", sNmWorkUnit = "";

%>

<head>

 <script type="text/javascript" src="/libreria/mootools.js"></script>
 <script type="text/javascript" src="/libreria/functions_search_emp.raw.js"></script>
 <link rel='stylesheet' type='text/css' href='/css/style_who.css'/> 
  
 <title></title>

</head>

 <body>

<m4:page subsessionid="<%=sSubSession%>">
 <m4:job>
    <m4:datadef m4name="<%=sMeta4Object%>" m4o="<%=sMeta4Object%>"/>
    <m4:exec m4method="<%=sMethodLoad%>"></m4:exec>
    <m4:outputdef m4alias="<%=sNodeMain%>"><m4:param name="M4NAME0" value="<%=sOutputDefMain%>"/></m4:outputdef>

    <m4:exec m4method="<%=sMethodLoadWorkUnit%>"></m4:exec>
    <m4:outputdef m4alias="<%=sNodeWorkUnit%>"><m4:param name="M4NAME0" value="<%=sOutputDefWorkUnit%>"/></m4:outputdef>
    <m4:move><m4:param name="<%=sSubSession%>" value="<%=sMoveWorkUnit%>"/></m4:move>

 </m4:job>

 <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_TITLE" var="sTitle" htmlsafe="true"/>
 <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_FILTER" var="sFilter" htmlsafe="true"/>
 <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_NAME" var="sName" htmlsafe="true"/>
 <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_WORK_UNIT" var="sWorkUnit" htmlsafe="true"/>
 <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_PHONE" var="sPhone" htmlsafe="true"/>
 <m4:label get="item" outputdef="<%=sNodeMain%>" item="SCO_PRP_EMAIL" var="sEmail" htmlsafe="true"/>
 <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_NO_DATA" var="sNoData" htmlsafe="true"/>
 <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_SUBTITLE" var="sSubtitle" htmlsafe="true"/>
 <m4:item outputdef="<%=sNodeMain%>" item="SCO_PRP_2_LETTERS" var="s2Letters" htmlsafe="true"/>

 <div class='dvTitle'>
    <span><%=sTitle%></span></br>
 </div>
 <div class='dvfrm'>
   <form name='sendSearch'>
     <span class='filter'><%=sFilter%></span>
     <span class='subtitle'><%=sSubtitle%></span>
     <label class='label' for='nameEmp'><%=sName%></label><input class='input' maxlength=250 id='nameEmp' type='text'></br>
     <label class='label' for= 'workunit'><%=sWorkUnit%></label>
     <select class='input' id='selWorkUnit'>
       <option value=''></option>
       <m4:dataloop outputdef="<%=sNodeWorkUnit%>">
        <m4:item outputdef="<%=sNodeWorkUnit%>" item="STD_ID_WORK_UNIT" var="sIdWorkUnit" htmlsafe="true"/>
        <m4:item outputdef="<%=sNodeWorkUnit%>" item="STD_N_WORK_UNIT" var="sNmWorkUnit" htmlsafe="true"/> 
        <option value='<%=sIdWorkUnit%>'><%=sNmWorkUnit%></option>
       </m4:dataloop>
     </select>
   </form>
 </div>
 <div id='divResults'>
   <span id='spFound'><%=sNoData%> (<%=s2Letters%>)</span>
   <table id='tableResult'>
     <thead id='theadTblResult'>
       <tr id='trtheadTblResult'>
         <th id='thtrtheadTblResult1'><%=sName%></th>
         <th id='thtrtheadTblResult1'><%=sWorkUnit%></th>
         <th id='thtrtheadTblResult1'><%=sPhone%></th>
         <th id='thtrtheadTblResult1'><%=sEmail%></th>
         <th id='thtrtheadTblResult1'></th>
       </tr>
     </thead>  
   </table>
 </div>

</m4:page>

  </body>
</html>