<%-- =========================================================
	@(#) FileVersion: 819.005.010
	@(#) FileDescription: tc_doc_download.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/shco_g0/shco_gen_bag.jsp" %>
<%@ include file="/shco_g0/shco_gen_arg.jsp" %>

<%!
// To check parameters against a regular expression. It is not a total defense against XSS but at least it's a start.
String getRequestValueWhite(HttpServletRequest request, String paramName, String defaultValue, String positiveRegexp) 
{
   String value = M4SafeRequest.getParameter(request, paramName);
   if (defaultValue == null) defaultValue = ""; 
   if (value == null || value.equals("") || value.equals("null")) return defaultValue; 
   try {
      java.util.regex.Pattern pattern = java.util.regex.Pattern.compile(positiveRegexp);
      java.util.regex.Matcher matcher = pattern.matcher(value);
      boolean isOK = matcher.matches();
      return isOK ? value : defaultValue;
   } catch (Exception e) {
      return defaultValue; 
   }         
}

%>



<script type="text/javascript" src="/translations/m4err_<%=zlanguser%>.js"></script>
<script type="text/javascript" src="/library/m4gen_excep.js"></script>
<script type="text/javascript" src="/library/m4doc_include.js"></script>

<%

   // -- encrypted parameter
   String ztciddoc = M4SafeRequest.getParameter(request, "IDDoc");
   if (ztciddoc==null){ztciddoc="";} 
   else {
    try {ztciddoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "tc_docs", ztciddoc);}
    catch (Exception e) {ztciddoc = "";}
     }
     // --  

   // xss - blacklisting of comma, double comma and backslash
   String ztcsubsesionsave = getRequestValueBlack(request, "subsesion", ""); 
   String ztcfile = getRequestValueBlack(request, "file", ""); 

   // xss - whitelisting of stylesheet pattern
   String ztcstylesheet = getRequestValueWhite(request, "stylesheet", "/style/tech_0.css", "[-a-zA-Z0-9_/\\\\].*.css"); 
   
   String zsubsesion = "SRTC_VIEW_DOCUMENT";
   String zmeta4object = "SRTC_VIEW_DOCUMENT";
   String znodo = "SRTC_VIEW_DOCUMENT";

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[0].";
   String zmove = znodo + ":" + znodo + "[FIRST]";
   
   String zmetododoc = "DOC:" + zsubsesion + "!" + znodo + ".SRTC_MTD_DOWNLOAD_DOC";

   String zURL = zcomun + "SSCO_PRP_URL";

%>
<link href="<%=ztcstylesheet%>" type="text/css" rel="stylesheet" />

<%if (ztcsubsesionsave.equals("")){%>
  	 <m4:startpage m4task="<%=zsubsesion%>"/>
<%}else{%>
	 <m4:startpage m4task="<%=ztcsubsesionsave%>"/>
<%}%>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetododoc%>">
<m4:param name="ARG_ID_DOC" value="<%=ztciddoc%>"/>
<m4:param name="ARG_FILE" value="<%=ztcfile%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<head></head>
<body>

<script language="javascript" type="text/javascript">

  var zTitle = m4getmessage("_sl_co_doc_12");
  var zAtt = m4getmessage("_sl_co_doc_1");
  var zNoDoc = m4getmessage("_sl_co_doc_2");
  var zDLFile = m4getmessage("_sl_co_doc_12");
  var zFile1 = m4getmessage("_sl_co_doc_13");
  var zFile2 = m4getmessage("_sl_co_doc_14");
  var zFile3 = m4getmessage("_sl_co_doc_15");
  document.write("<title>" + zTitle + "</title>");
  
  urlDoc = "<m4:item m4name="<%=zURL%>" />";
  
  //extraigo el nombre del fichero que voy a descargar
  patronposicion1 = urlDoc.indexOf("filename");
  if (patronposicion1 > 0) {
  patronposicion2 = urlDoc.substr(patronposicion1).indexOf("=");
  patronposicion3 = urlDoc.substr(patronposicion1).indexOf("&");
  if (patronposicion3 > 0)
    var sFile = urlDoc.substr(patronposicion1).substr(patronposicion2 + 1,patronposicion3 - patronposicion2 - 1);
  else
    var sFile = urlDoc.substr(patronposicion1).substr(patronposicion2 + 1);
  }
  
  if (urlDoc=="") 
    {
      document.write("<table cellpadding='0' cellspacing='0' height='100%' width='100%'>");
      document.write("<tr>");
      document.write("<td align='center'>");
      document.write("<table cellpadding='0' cellspacing='0' class='table_warning'>");
      document.write("<tr class='fuenteactualizar'>");
      document.write("<td align='center'>");
      document.write(zAtt);
      document.write("</td>");
      document.write("</tr>");
      document.write("<tr class='fuenteactualizar2'>");
      document.write("<td align='center'>");
      document.write(zNoDoc);
      document.write("</td>");
      document.write("</tr>");
      document.write("</table>");
      document.write("</td>");
      document.write("</tr>");
      document.write("</table>");

      setTimeout("window.close()", 2000);
    }
  else
    { 
	  document.write("<form action='/servlet/download_blob' method='post' name='oFormDownloadBlob' id='oFormDownloadBlob'>");
      document.write("<input type='hidden' id='filename' name='filename' value='" + sFile + "' />");
      document.write("<input type='hidden' id='savetodisk' name='savetodisk' value='true' />");
      document.write("<input type='hidden' id='task' name='task' value='SRTC_VIEW_DOCUMENT' />");
      document.write("<input type='hidden' id='item' name='item' value='SRTC_VIEW_DOCUMENT!SRTC_VIEW_DOCUMENT[0].PRP_LOAD_DOC' />");
      document.write("<input type='hidden' id='no-cache' name='no-cache' value='true' />");
      document.write("</form>");
	  
	  document.write("<table width='100%'>");
      document.write("<tr>");
      document.write("<td align='center'>");
      document.write("<table class='table_warning'>");
      document.write("<tr class='fuenteactualizar'>");
      document.write("<td align='center'>");
      document.write(zDLFile);
      document.write("</td>");
      document.write("</tr>");
      document.write("<tr class='fuenteactualizar2'>");
      document.write("<td align='center'>");
	  document.write(zFile1+" <a onmouseover='this.style.cursor=" + String.fromCharCode(34) + "pointer" + String.fromCharCode(34) + ";' onclick='document.oFormDownloadBlob.submit();'>"+zFile2+"</a> "+zFile3);
      //document.write(zFile1+" <a href='"+urlDoc+"'>"+zFile2+"</a> "+zFile3);
	  document.write("</td>");
      document.write("</tr>");
      document.write("</table>");
      document.write("</td>");
      document.write("</tr>");
      document.write("</table>");
	
      document.oFormDownloadBlob.submit(); 
	  //window.location=urlDoc;
    }
</script>

</body>

<m4:endpage/>
</html>