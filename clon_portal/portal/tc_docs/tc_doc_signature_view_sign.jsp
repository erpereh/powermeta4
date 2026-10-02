<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_doc_signature_view_sign.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%
String ztcstylesheet = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "stylesheet");
%>
<link href="<%=ztcstylesheet%>" type="text/css" rel="stylesheet" />

<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/shco_g0/shco_gen_bag.jsp" %>
<%@ include file="/tc_docs/tc_doc_trans.jsp" %>


<script type="text/javascript" language="Javascript1.5"src="/translations/m4err_<%=zlanguser%>.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/library/m4gen.js"></script>
<script type="text/javascript" language="Javascript1.5"src="/library/m4gen_excep.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/library/m4doc_include.js"></script>

<script type="text/javascript">document.title='<%=transdoc.getProperty("doc.LblOtherData")%>';</script>
<title><%=transdoc.getProperty("doc.LblOtherData")%></title>
  
<head></head>  
<body>


<%

   // -- unsafe+unencrypted: String ztciddoc = request.getParameter("ztciddoc");
   // -- previous check: if (ztciddoc=="0" || ztciddoc=="") {ztciddoc=null;}
   
   String ztciddoc = M4SafeRequest.getParameter(request, "ztciddoc");
   if (ztciddoc == null || ztciddoc.equals("0")){ztciddoc="";} 
   else {
	try {ztciddoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "tc_docs", ztciddoc);}
	catch (Exception e) {ztciddoc = "";}
   }
   // -- 
  
  
  String ztciddocversion = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ztciddocversion");
  if (ztciddocversion=="0" || ztciddocversion=="") {ztciddocversion=null;}


  String zsubsesion = "SRTC_DMS_SIGNATURES" + System.currentTimeMillis();
  String zmeta4object = "SRTC_DMS_SIGNATURES"; 
 
  String znodedocinfo = "SRTC_DMS_DS_DOC_INFO"; 
  String zoutputdefdocinfo = zsubsesion + "!" + znodedocinfo + "[*]";
  String zmetodoLoad = "LOAD_FILTER_BY_ID_DOC:" + zsubsesion + "!" + znodedocinfo + ".LOAD_FILTER_BY_ID_DOC";
  String zmetodoGenDocWithSignInfo = "GEN_DOC_WITH_SIGN_INFO:" + zsubsesion + "!" + znodedocinfo + ".GEN_DOC_WITH_SIGN_INFO";
 
  String zmove_nodedocinfo = znodedocinfo + ":" +  znodedocinfo + "[0]";
  String zraiz_nodedocinfo = znodedocinfo + ":" + zsubsesion + "!" + znodedocinfo + ".";
  String znodedocinfocaption = znodedocinfo + ":" + zsubsesion + "!" + znodedocinfo + "[0]";
  String zcomun_nodedocinfo = znodedocinfo + ":" + zsubsesion + "!" + znodedocinfo + "[&VAR.m4lix]" + ".";
  
  String zItemBlobDocWithSignInfo   = zraiz_nodedocinfo + "BLOB_DOC_WITH_SIGN_INFO";
  
  int itcLanguageId =iLang; // Provide with the include shco_gen_bag.jsp 
  String ztcURL_Error = CheckConfig.checkErrorPage(itcLanguageId);
  
%>
<head></head> 
  <m4:startpage m4task="<%=zsubsesion%>"/>
  <m4:beginjob/>
  <m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

     <m4:exec m4method="<%=zmetodoLoad%>">
     <m4:param name="ARG_ID_DOC" value="<%=ztciddoc%>"/>
	 <m4:param name="ARG_ID_DOC_VERSION" value="<%=ztciddocversion%>"/>
  </m4:exec>   
  
  <m4:exec m4method="<%=zmetodoGenDocWithSignInfo%>"></m4:exec>           
  <m4:outputdef m4alias="<%=znodedocinfo%>"><m4:param name="m4name0" value="<%=zoutputdefdocinfo%>"/></m4:outputdef>
  <m4:endjob/>  	
  <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove_nodedocinfo%>"/></m4:move>
  <m4:outputexec m4alias="GEN_DOC_WITH_SIGN_INFO" m4varname="ztcResultMergeDocWithSignInfo" m4format="0"></m4:outputexec>	
    <% 
  if (ztcResultMergeDocWithSignInfo.equals("1")) {%>
       <script language="javascript" type="text/javascript">
		   location.replace("/servlet/download_blob?task=<%=zsubsesion%>&item=<%=zsubsesion%>!SRTC_DMS_DS_DOC_INFO[0].BLOB_DOC_WITH_SIGN_INFO&no-cache=true");
      </script>	
     
  <%}else{%>     
      <script language="javascript" type="text/javascript">	  
		  location.replace("/servlet/CheckSecurity/<%=ztcURL_Error%>?zopenmode=1&error=<%=transdoc.getProperty("doc.ErrorGeneratingFile")%>" );
        </script>
    </script>
  <%}%>


<body>

  
<m4:endpage/>

</body>
</html>
