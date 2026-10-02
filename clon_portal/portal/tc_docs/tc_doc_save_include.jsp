<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_doc_save_include.jsp
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
  String sExtErrorMessage = "";
  String ztcSaveDOCID = request.getParameter(sgtc_zNMInputIDDOC);
  if (ztcSaveDOCID==null){ztcSaveDOCID="";}
  String ztcSaveTITLEDOC = request.getParameter(sgtc_zNMInputIDDOC + "_TITLE");
  if (ztcSaveTITLEDOC==null){ztcSaveTITLEDOC="";}
  
  if (ztcSaveTITLEDOC.equals(""))
  {ztcSaveDOCID = null;}
  else
  {
  String ztcmeta4objectview = "SRTC_VIEW_DOCUMENT";  
  String ztcnodeview = "SRTC_VIEW_DOCUMENT";
  String ztcmetodoview = "SAVE:" + ztcmeta4objectview + "!" + ztcnodeview + ".SRTC_MTD_SAVE_DOC";
  
  String ztcoutputdefview = ztcmeta4objectview + "!" + ztcnodeview + "[*]";
  String ztccomunview = ztcnodeview + ":" + ztcmeta4objectview + "!" + ztcnodeview + ".";

  String ztcSCOIDDOC = ztccomunview + "SCO_ID_DOC";
  %>

  <m4:beginjob/>

  <m4:datadef m4o="<%=ztcmeta4objectview%>" m4name="<%=ztcmeta4objectview%>" m4preserve="true"/>
  
  <m4:exec m4method="<%=ztcmetodoview%>"><m4:param name="ARG_ID_DOC" value="<%=ztcSaveDOCID%>"/><m4:param name="ARG_TITLE_DOC" value="<%=ztcSaveTITLEDOC%>"/></m4:exec>
  
  <m4:outputdef m4alias="<%=ztcnodeview%>"><m4:param name="M4NAME0" value="<%=ztcoutputdefview%>"/></m4:outputdef>

  <m4:endjob/>

  <m4:item m4name="<%=ztcSCOIDDOC%>" var="ztcSaveDOCID" htmlsafe = "true"/>

  <%        
    com.meta4.m4operations.M4Operations m = null; 
	
    String sDescription = ""; 
    String sLineSeparator = "";

    try
	{ 

		m = new com.meta4.m4operations.M4Operations(request);
		java.util.Vector vMessages = new java.util.Vector();
        byte type = com.meta4.m4operations.M4Operations.ON_EVENT; 

        if (m.checkError(type, vMessages))
        {
			java.util.Enumeration eMessages = vMessages.elements();        
            com.meta4.m4operations.LogMessage oLogMsg;        
            while (eMessages.hasMoreElements())
            {
				oLogMsg = (com.meta4.m4operations.LogMessage) eMessages.nextElement();   
                if (oLogMsg != null && ( oLogMsg.getCode().equals("7867176") || oLogMsg.getCode().equals("7867177") || oLogMsg.getCode().equals("7867174") ))
                {
					sDescription = com.meta4.taglib.util.M4PresentationUtilTaglib.cookLineBreaks(oLogMsg.getDescription(), true);
					sDescription = com.meta4.taglib.util.M4PresentationUtilTaglib.unicodeEscape(sDescription);
                    sExtErrorMessage =  sDescription + sLineSeparator + sExtErrorMessage;         
				}
			}   
		}
	}
	catch (Exception e) { out.println ("Exception");} 
%>


  <script language="javascript" type="text/javascript">
   
  var zExtDoc = m4getmessage("_sl_co_doc_4");
  var zExtDocNotLoadFile = m4getmessage("_sl_co_doc_9"); 
  var zExtDocNotValiFile = m4getmessage("_sl_co_doc_10");
  var zExtDocNotAdapFile = m4getmessage("_sl_co_doc_11");
  var zStackError = '<%= sExtErrorMessage %>';

  if( zStackError != "" )
  {
      alert(zStackError);
  }
  else 
  {
	  if ("<m4:item m4name="<%=ztcSCOIDDOC%>" htmlsafe = "true"/>" == "-1")
		{
		  alert(zExtDoc);
		} 
	  if ("<m4:item m4name="<%=ztcSCOIDDOC%>" htmlsafe = "true"/>" == "-2")
		{
		  alert(zExtDocNotLoadFile);
		} 
	  if ("<m4:item m4name="<%=ztcSCOIDDOC%>" htmlsafe = "true"/>" == "-3")
		{
		  alert(zExtDocNotValiFile);
		} 
	  if ("<m4:item m4name="<%=ztcSCOIDDOC%>" htmlsafe = "true"/>" == "-4")
		{
		  alert(zExtDocNotAdapFile);
		}
  } 
  </script>
  <%}%>
  
<%--
	El identificador del documento asociado quedara en la variable java <%=ztcSaveDOCIDC%>
--%> 
