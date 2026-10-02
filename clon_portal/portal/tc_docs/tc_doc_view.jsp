<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_doc_view.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/shco_g0/shco_gen_bag.jsp" %>

<script type="text/javascript" language="Javascript1.5"src="/translations/m4err_<%=zlanguser%>.js"></script>
<script type="text/javascript" language="Javascript1.5"src="/library/m4gen_excep.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/library/m4doc_include.js"></script>

<%
   
   String ztcsubsesionsave = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "subsesion");
   if (ztcsubsesionsave==null){ztcsubsesionsave="";}


   // -- unsafe+unencrypted: String ztciddoc = request.getParameter("IDDoc");
   String ztciddoc = M4SafeRequest.getParameter(request, "IDDoc");
   if (ztciddoc==null){ztciddoc="";} 
   else {
	try {ztciddoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "tc_docs", ztciddoc);}
	catch (Exception e) {ztciddoc = "";}
   }
   // -- 


   String ztcstylesheet = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "stylesheet");
   if (ztcstylesheet==null){ztcstylesheet="";}
   
   String zsubsesion = "SRTC_VIEW_DOCUMENT";
   String zmeta4object = "SRTC_VIEW_DOCUMENT";
   String znodo = "SRTC_VIEW_DOCUMENT";

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[0].";
   String zmove = znodo + ":" + znodo + "[FIRST]";
   
   String zmetododoc = "DOC:" + zsubsesion + "!" + znodo + ".SRTC_MTD_LOAD_DOC";

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
<%if (ztcsubsesionsave.equals("")){%>
	 <m4:param name="ARG_ID_DOC1" value="<%=zsubsesion%>"/>
<%}else{%>
	 <m4:param name="ARG_ID_DOC1" value="<%=ztcsubsesionsave%>"/>
<%}%>
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<head></head>
<body>

<form action="/servlet/download_blob" method="post" name="oFormDownloadBlob" id="oFormDownloadBlob">
<%if (ztcsubsesionsave.equals("")){%>
	 <input type="hidden" id="task" name="task" value="<%=zsubsesion%>" />
<%}else{%>
	 <input type="hidden" id="task" name="task" value="<%=ztcsubsesionsave%>" /> 
<%}%>
<input type="hidden" id="item" name="item" value="SRTC_VIEW_DOCUMENT!SRTC_VIEW_DOCUMENT[0].PRP_LOAD_DOC" />
<input type="hidden" id="no-cache" name="no-cache" value="true" />
</form>

<script language="javascript" type="text/javascript">
  
  var zTitle = m4getmessage("_sl_co_doc_0");
  var zAtt = m4getmessage("_sl_co_doc_1");
  var zNoDoc = m4getmessage("_sl_co_doc_2");
  document.write("<title>" + zTitle + "</title>");
  urlDoc = "<m4:item m4name="<%=zURL%>" />";
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
	  document.oFormDownloadBlob.submit(); 
	  //window.location=urlDoc;
    }
</script>
</body>

<m4:endpage/>
</html>



