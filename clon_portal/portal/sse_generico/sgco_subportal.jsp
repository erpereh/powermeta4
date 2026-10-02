<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ taglib uri = "M4Tags" prefix = "m4"%>
<%@ page import = "java.io.*, java.util.*, java.net.*"%>
<%@ page import = "com.meta4.m4operations.*, com.meta4.session.*, com.meta4.utilities.*, com.meta4.configuration.*"%>
<%@ page import = "com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
  //no cache
  response.setHeader("Pragma", "no-cache");
  response.setHeader("Cache-Control", "no-store");
  response.setDateHeader("Expires", -1);

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  oM4Log.debug("sgco_subportal: entry");

  //Retrieve parameter that identifies sub-tree to be displayed (and to which tree (ess/mss) it belongs
  //String sMenuId = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sMenuId");
  String sMenuId = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sMenuId");
  oM4Log.debug("  sMenuId: " + sMenuId);
  if (sMenuId == null) {sMenuId = "";}
  //white list: only valid characters
  String sPattern = "[a-zA-Z0-9_#\\-]*";
  if (!java.util.regex.Pattern.matches(sPattern, sMenuId)) {
    sMenuId = "";
  }

  //String sESS = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bESS");
  String sESS = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bESS");
  if (sESS.length() > 1) {
    sESS = sESS.substring(0,1);
  }
  oM4Log.debug("  sESS: " + sESS);
%>

<html xmlns="http://www.w3.org/1999/xhtml">
<%
  String sEncoding = M4RequestEncoding.getAppEncoding(); 
  response.setContentType ("text/html; charset=" + sEncoding + "");
%>
 <head>

    <script type="text/javascript" src="/libreria/mootools.js"></script>
    <script type="text/javascript" src="/libreria/meta4ajax.js"></script>
    <script type="text/javascript" src="/libreria/functions_subportal.js"></script>
    <script type="text/javascript" src="/libreria/funciones_doc.js"></script>

    <link href="/css/m4reset.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript">
      if (Browser.ie6) {document.write("<link rel='stylesheet' type='text/css' href='/css/style_subportalIE6.css'/>");}
      else {document.write("<link rel='stylesheet' type='text/css' href='/css/style_subportal.css'/>");}
    </script>

 </head>
 <body id="m4body" m4ESS="<%=sESS%>" m4MenuId="<%=sMenuId%>">
   <!-- Elements used to expand news -->  
   <div id="idbacknews" class="m4hide m4backopacity"></div>
   <div id="idimagenews" class="m4hide m4backimage">
     <img id="idphotonews" class="m4hide" src="/iconos/noimage.png"/>
   </div>
   <img id="idclosenews" class="m4hide" src="/iconos/noimage.png"/>
   <div id="idinfonews" class="m4hide m4backinfo">
     <span id="iddescnews" class="m4hide" ></span>
   </div>
   <div id="idbackdescnews" class="m4hide m4backdesc"></div>
   
   <!-- Subportal main div -->   
   <div id="idcontainersubportal" class="m4table m4container"> 
     <div id="idcontentsubportal" class="m4row m4content">
     <!--[if lte IE 7]>
     <table class="m4container"> <tr class="m4content"> <td class="m4leftside">
     <![endif]-->
       <div id="idleftsubportal" class="m4cell m4leftside">
         <!-- This section has been generated in sgco_engine_subportal.jsp -->
       </div>
       <!--[if lte IE 7]>
       </td> <td class="m4rightside">
       <![endif]-->
       <div id="idrightsubportal" class="m4cell m4rightside">
         <div id="idrighttasks" class="m4subsection">
           <!-- This section has been generated in sgco_engine_tasks.jsp -->
         </div>
         <div id="idrightnews" class="m4subsection">
           <!-- This section has been generated in sgco_engine_news.jsp -->
         </div>
       </div>
       <!--[if lte IE 7]>
       </td> </tr> </table>
       <![endif]-->
     </div>
   </div>     
 </body>
</html>

<%
  oM4Log.debug("sgco_subportal: exit");
%>