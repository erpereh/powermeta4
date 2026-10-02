<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_doc_delete_include.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


  <%@ include file="/shco_g0/shco_gen_taglib.jsp" %>        
  <%@ page import="com.meta4.security.*" %>
  <%@ page import="com.meta4.session.*" %>
  <%@ page import="com.meta4.Task.*" %>
  <%@ page import="java.util.*" %>

  <%
 
  // -- unsafe+unencrypted: String ztcDeleteDOCID = request.getParameter(sgtc_zNMInputIDDOC);
  String ztcDeleteDOCID = M4SafeRequest.getParameter(request, sgtc_zNMInputIDDOC);
  if (ztcDeleteDOCID==null){ztcDeleteDOCID="";} 
  else {
    try {ztcDeleteDOCID = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "tc_docs", ztcDeleteDOCID);}
    catch (Exception e) {ztcDeleteDOCID = "";}
  }
  // -- 
  
  String ztcmeta4objectview = "SRTC_VIEW_DOCUMENT";  
  String ztcnodeview = "SRTC_VIEW_DOCUMENT";
  String ztcmetodoview = "DELETE:" + ztcmeta4objectview + "!" + ztcnodeview + ".SRTC_MTD_DELETE_DOC";
  
  String ztcoutputdefview = ztcmeta4objectview + "!" + ztcnodeview + "[*]";
  String ztccomunview = ztcnodeview + ":" + ztcmeta4objectview + "!" + ztcnodeview + ".";
  %>
  
  <m4:beginjob/>

  <m4:datadef m4o="<%=ztcmeta4objectview%>" m4name="<%=ztcmeta4objectview%>" m4preserve="true"/>
  
  <m4:exec m4method="<%=ztcmetodoview%>"><m4:param name="ARG_ID_DOC" value="<%=ztcDeleteDOCID%>"/></m4:exec>
  
  <m4:outputdef m4alias="<%=ztcnodeview%>"><m4:param name="M4NAME0" value="<%=ztcoutputdefview%>"/></m4:outputdef>

  <m4:endjob/>
