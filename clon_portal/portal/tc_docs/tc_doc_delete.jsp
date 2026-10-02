<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_doc_delete.jsp
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

   // -- unsafe+unencrypted: String ztciddoc = request.getParameter("IDDoc");
   String ztciddoc = M4SafeRequest.getParameter(request, "IDDoc");
   if (ztciddoc==null){ztciddoc="";} 
   else {
	try {ztciddoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "tc_docs", ztciddoc);}
	catch (Exception e) {ztciddoc = "";}
   }
   // -- 

   String ztcsubsesionsave = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "subsesion");
   if (ztcsubsesionsave==null){ztcsubsesionsave="";}
   String ztcfile = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "file");
   if (ztcfile==null){ztcfile="";}
   String ztcstylesheet = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "stylesheet");
   if (ztcstylesheet==null){ztcstylesheet="";}
   
   String zsubsesion = "SRTC_VIEW_DOCUMENT";
   String zmeta4object = "SRTC_VIEW_DOCUMENT";
   String znodo = "SRTC_VIEW_DOCUMENT";

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[0].";
   String zmove = znodo + ":" + znodo + "[FIRST]";
   
   String zmetododoc = "DELETE:" + zsubsesion + "!" + znodo + ".SRTC_MTD_DELETE_DOC";

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

</m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<m4:endpage/>

