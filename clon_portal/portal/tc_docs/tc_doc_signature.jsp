<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_doc_signature.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%
String ztcstylesheet = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "stylesheet");
if (ztcstylesheet==null){ztcstylesheet="";}
else { if (!isValidStyleSheetName(ztcstylesheet)) ztcstylesheet = "/css/estilo_sse.css";}

%>
<link href="<%=ztcstylesheet%>" type="text/css" rel="stylesheet" />

<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/shco_g0/shco_gen_bag.jsp" %>
<%@ include file="/tc_docs/tc_doc_trans.jsp" %>
<%@ include file="/shco_g0/shco_gen_tec_include.jspf" %>

<%		
   String ztciddoc = M4SafeRequest.getParameter(request, "ztciddoc");
   if (ztciddoc == null || ztciddoc.equals("0")){ztciddoc="";} 
   else {
	try {ztciddoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "tc_docs", ztciddoc);}
	catch (Exception e) {ztciddoc = "";}
   }

  String ztciddocversion = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "IDDocVersion");
  if (ztciddocversion=="0" || ztciddocversion=="") {ztciddocversion=null;}
%>

<script type="text/javascript" language="Javascript1.5"src="/translations/m4err_<%=zlanguser%>.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/library/m4gen.js"></script>
<script type="text/javascript" language="Javascript1.5"src="/library/m4gen_excep.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/library/m4doc_include.js"></script>

<script type="text/javascript">document.title='<%=transdoc.getProperty("doc.LblOtherData")%>';</script>
<script type="text/javascript">
   function viewDocWithSign(sIdDoc,sIdDocVersion)
   {
   url ="/servlet/CheckSecurity/JSP/tc_docs/tc_doc_signature_view_sign.jsp?ztciddoc="+sIdDoc + "&ztciddocversion=" + sIdDocVersion;
   msgWindow = window.open(url,"","toolbar=no,scrollbars=yes,directories=no,status=no,menubar=no,resizable=yes,width=800,height=600");
   }
</script>

<title><%=transdoc.getProperty("doc.LblOtherData")%></title>
  
<head></head>  
<body onclick="setEventCookie();" onkeypress="setEventCookie();">

<%
  String zsubsesion = "SRTC_DMS_SIGNATURES";
  String zmeta4object = "SRTC_DMS_SIGNATURES"; 
 
  String znodedocinfo = "SRTC_DMS_DS_DOC_INFO"; 
  String zoutputdefdocinfo = zsubsesion + "!" + znodedocinfo + "[*]";
 
  String znodeneedes = "SRTC_DMS_DS_NEEEDE_SIGNERS"; 
  String zoutputdefneedes = zsubsesion + "!" + znodeneedes + "[*]";

  String znodesignature = "SRTC_DMS_DS_SIGNATURES"; 
  String zoutputdefsignature = zsubsesion + "!" + znodesignature + "[*]";

  String znodeattach = "SRTC_DMS_DS_DOC_ATTACH"; 
  String zoutputdefattach = zsubsesion + "!" + znodeattach + "[*]";

  String zmetodoLoad = "LOAD_FILTER_BY_ID_DOC:" + zsubsesion + "!" + znodedocinfo + ".LOAD_FILTER_BY_ID_DOC";
  String zmetododestroyblock = "DESTROYBLOCK:" + zsubsesion + "!" + znodesignature + ".DESTROYBLOCK";

  String zmove_nodedocinfo = znodedocinfo + ":" +  znodedocinfo + "[0]";
  String zmove_nodeneedes = znodeneedes + ":" +  znodeneedes + "[0]";
  String zmove_nodesignature = znodesignature + ":" +  znodesignature + "[0]";
  String zmove_nodeattach = znodeattach + ":" +  znodeattach + "[0]";

  String zraiz_nodedocinfo = znodedocinfo + ":" + zsubsesion + "!" + znodedocinfo + ".";
  String znodedocinfocaption = znodedocinfo + ":" + zsubsesion + "!" + znodedocinfo + "[0]";
  String zcomun_nodedocinfo = znodedocinfo + ":" + zsubsesion + "!" + znodedocinfo + "[&VAR.m4lix]" + ".";
  
  String zraiz_nodeneedes = znodeneedes + ":" + zsubsesion + "!" + znodeneedes + ".";
  String znodeneedescaption = znodeneedes + ":" + zsubsesion + "!" + znodeneedes + "[0]";
  String zcomun_nodeneedes = znodeneedes + ":" + zsubsesion + "!" + znodeneedes + "[&VAR.m4lix]" + ".";
  
  String zraiz_nodesignature = znodesignature + ":" + zsubsesion + "!" + znodesignature + ".";
  String znodesignaturecaption = znodesignature + ":" + zsubsesion + "!" + znodesignature + "[0]";
  String zcomun_nodesignature = znodesignature + ":" + zsubsesion + "!" + znodesignature + "[&VAR.m4lix]" + ".";
  
  String zraiz_nodeattach = znodeattach + ":" + zsubsesion + "!" + znodeattach + ".";
  String znodeattachcaption = znodeattach + ":" + zsubsesion + "!" + znodeattach + "[0]";
  String zcomun_nodeattach = znodeattach + ":" + zsubsesion + "!" + znodeattach + "[&VAR.m4lix]" + ".";
 

  String zItemID_DOC = "ID_DOC";
  String zID_DOC = zcomun_nodedocinfo + zItemID_DOC;
  String zLabelID_DOC   = zraiz_nodedocinfo + zItemID_DOC;
  
  String zItem_DOC_TITLE = "PROP_DOC_TITLE";
  String zDOC_TITLE = zcomun_nodedocinfo + zItem_DOC_TITLE;
  String zLabelDOC_TITLE   = zraiz_nodedocinfo + zItem_DOC_TITLE;
  
  String zItemSIGN_MODE = "N_SIGN_MODE";
  String zSIGN_MODE = zcomun_nodedocinfo + zItemSIGN_MODE;
  String zLabelSIGN_MODE   = zraiz_nodedocinfo + zItemSIGN_MODE;
  
  String zItemPROCESS_STATE = "N_SIGN_PROCESS_STATE";
  String zIPROCESS_STATE = zcomun_nodedocinfo + zItemPROCESS_STATE;
  String zLabelPROCESS_STATE   = zraiz_nodedocinfo + zItemPROCESS_STATE;
  
  String zItemIDPROCESS_STATE = "ID_SIGN_PROCESS_STATE";
  String zIDPROCESS_STATE = znodedocinfocaption + "." + zItemIDPROCESS_STATE;
  
  String zItemIS_FACSIMILE = "IS_FACSIMILE";
  String zIS_FACSIMILE = zcomun_nodedocinfo + zItemIS_FACSIMILE;
  String zLabelIS_FACSIMILE   = zraiz_nodedocinfo + zItemIS_FACSIMILE;
  
  String zItemCOPY_STATUS = "PROP_COPY_STATUS";
  String zCOPY_STATUS = zcomun_nodedocinfo + zItemCOPY_STATUS;
  String zLabelCOPY_STATUS   = zraiz_nodedocinfo + zItemCOPY_STATUS;
  
  String zItemID_APP_USER = "ID_APP_USER";
  String zID_APP_USER = zcomun_nodeneedes + zItemID_APP_USER;
  String zLabelID_APP_USER   = zraiz_nodeneedes + zItemID_APP_USER;
  
  String zItemN_APP_USER = "N_APP_USER";
  String zN_APP_USER = zcomun_nodeneedes + zItemN_APP_USER;
  String zLabelN_APP_USER   = zraiz_nodeneedes + zItemN_APP_USER;
  
  String zItemID_PERSON = "ID_PERSON";
  String zID_PERSON = zcomun_nodeneedes + zItemID_PERSON;
  String zLabelID_PERSON   = zraiz_nodeneedes + zItemID_PERSON;
  
  String zItemSCO_GB_NAME = "SCO_GB_NAME";
  String zSCO_GB_NAME = zcomun_nodeneedes + zItemSCO_GB_NAME;
  String zLabelSCO_GB_NAME   = zraiz_nodeneedes + zItemSCO_GB_NAME;
  
  String zItemID_SIGNER_SG = "ID_SIGNER";
  String zID_SIGNER_SG = zcomun_nodesignature + zItemID_SIGNER_SG;
  String zLabelID_SIGNER_SG   = zraiz_nodesignature + zItemID_SIGNER_SG;
  
  String zItemN_APP_USER_SG = "N_APP_USER";
  String zN_APP_USER_SG = zcomun_nodesignature + zItemN_APP_USER_SG;
  String zLabelN_APP_USER_SG   = zraiz_nodesignature + zItemN_APP_USER_SG;
  
  String zItemID_PERSON_SG = "STD_ID_PERSON";
  String zID_PERSON_SG = zcomun_nodesignature + zItemID_PERSON_SG;
  String zLabelID_PERSON_SG   = zraiz_nodesignature + zItemID_PERSON_SG;
  
  String zItemSCO_GB_NAME_SG= "SCO_GB_NAME";
  String zSCO_GB_NAME_SG = zcomun_nodesignature + zItemSCO_GB_NAME_SG;
  String zLabelSCO_GB_NAME_SG   = zraiz_nodesignature + zItemSCO_GB_NAME_SG;
  
  String zItemDT_SIGN_SG= "DT_SIGN";
  String zDT_SIGN_SG = zcomun_nodesignature + zItemDT_SIGN_SG;
  String zLabelDT_SIGN_SG   = zraiz_nodesignature + zItemDT_SIGN_SG;
  
  String zItemN_SIGNATURE_STATE_SG= "N_SIGNATURE_STATE";
  String zN_SIGNATURE_STATE_SG = zcomun_nodesignature + zItemN_SIGNATURE_STATE_SG;
  String zLabelN_SIGNATURE_STATE_SG   = zraiz_nodesignature + zItemN_SIGNATURE_STATE_SG;
  
  String zItemID_CERTIFICATE_SG= "ID_CERTIFICATE";
  String zID_CERTIFICATE_SG = zcomun_nodesignature + zItemID_CERTIFICATE_SG;
  String zLabelID_CERTIFICATE_SG   = zraiz_nodesignature + zItemID_CERTIFICATE_SG;
  
  String zItemCOMMENTS_SG= "COMMENTS";
  String zCOMMENTS_SG = zcomun_nodesignature + zItemCOMMENTS_SG;
  String zLabelCOMMENTS_SG   = zraiz_nodesignature + zItemCOMMENTS_SG;
    
  String zItemSIGNATURE_TYPE_SG ="SIGNATURE_TYPE";
  String zSIGNATURE_TYPE_SG = zcomun_nodesignature + zItemSIGNATURE_TYPE_SG;
  String zLabelSIGNATURE_TYPE_SG   = zraiz_nodesignature + zItemSIGNATURE_TYPE_SG;
 
  String zItemDT_IMPORT_SIGN_SG ="DT_IMPORT_SIGN";
  String zDT_IMPORT_SIGN_SG = zcomun_nodesignature + zItemDT_IMPORT_SIGN_SG;
  String zLabelDT_IMPORT_SIGN_SG   = zraiz_nodesignature + zItemDT_IMPORT_SIGN_SG;
 
 
  String zItemPROP_HAS_FORMAT_PDF  = zraiz_nodedocinfo + "PROP_HAS_FORMAT_PDF";
  String zItemPROP_ID_DOC  = zraiz_nodedocinfo + "PROP_ID_DOC";
  String zItemPROP_DOC_TITLE  = zraiz_nodedocinfo + "PROP_DOC_TITLE";
  String zItemLBL_NO_SIGN_REQUIRED  = zraiz_nodedocinfo + "LBL_NO_SIGN_REQUIRED";
  String zItemLBL_DOCUMENT_OK  = zraiz_nodedocinfo + "LBL_DOCUMENT_OK";
  
  String zItemVALIDITY_STATE = "N_VALIDITY_STATE";
  String zIVALIDITY_STATE = zcomun_nodedocinfo + zItemVALIDITY_STATE;
  String zLabelVALIDITY_STATE   = zraiz_nodedocinfo + zItemVALIDITY_STATE;
  
  String zItemIDVALIDITY_STATE = "ID_VALIDITY_STATE";
  String zIDVALIDITY_STATE = znodedocinfocaption + "." + zItemIDVALIDITY_STATE;
  

  
  String zItemID_DOC_ATTACH ="ID_DOC_ATTACH";
  String zID_DOC_ATTACH = zcomun_nodeattach + zItemID_DOC_ATTACH;
  String zLabelID_DOC_ATTACH   = zraiz_nodeattach + zItemID_DOC_ATTACH;

  String zItemID_DOC_ATTACH_VERSION ="ID_DOC_ATTACH_VERSION";
  String zID_DOC_ATTACH_VERSION = zcomun_nodeattach + zItemID_DOC_ATTACH_VERSION;
  String zLabelID_DOC_ATTACH_VERSION   = zraiz_nodeattach + zItemID_DOC_ATTACH_VERSION;
  
  
  String zItemPROP_DOC_TITLE_ATTACH  = zraiz_nodeattach + "PROP_DOC_TITLE";
%>

  
  
  <m4:startpage m4task="<%=zsubsesion%>"/>

 
  <m4:beginjob/>
  <m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>" m4preserve="true"/> 
  <m4:exec m4method="<%=zmetodoLoad%>">
     <m4:param name="ARG_ID_DOC" value="<%=ztciddoc%>"/>
	 <m4:param name="ARG_ID_DOC_VERSION" value="<%=ztciddocversion%>"/>
  </m4:exec>   
     
  <m4:outputdef m4alias="<%=znodedocinfo%>"><m4:param name="m4name0" value="<%=zoutputdefdocinfo%>"/></m4:outputdef>
  <m4:outputdef m4alias="<%=znodeneedes%>"><m4:param name="m4name0" value="<%=zoutputdefneedes%>"/></m4:outputdef>
  <m4:outputdef m4alias="<%=znodesignature%>"><m4:param name="m4name0" value="<%=zoutputdefsignature%>"/></m4:outputdef>
  <m4:outputdef m4alias="<%=znodeattach%>"><m4:param name="m4name0" value="<%=zoutputdefattach%>"/></m4:outputdef>
  <m4:endjob/>
  
  <m4:item m4varname="zHasFormatPDF" m4name="<%=zItemPROP_HAS_FORMAT_PDF%>" m4format="0"/>
  
  
<%
  int  zcounti_nodedocinfo  = 0;
  int  zcount_nodedocinfo  = 0;	
  try {
  	M4Operations m = new M4Operations(request);
  	zcounti_nodedocinfo = m.getCountInClient(znodedocinfo,zsubsesion,znodedocinfo);
  	zcount_nodedocinfo = m.getCount(znodedocinfo,zsubsesion,znodedocinfo);		
  } catch(Exception e) {}
  
  int  zcounti_nodesigners  = 0;
  int  zcount_nodesigners  = 0;	
  try {
  	M4Operations m = new M4Operations(request);
  	zcounti_nodesigners = m.getCountInClient(znodeneedes,zsubsesion,znodeneedes);
  	zcount_nodesigners = m.getCount(znodeneedes,zsubsesion,znodeneedes);		
  } catch(Exception e) {}
  
  int  zcounti_nodesignature  = 0;
  int  zcount_nodesignature  = 0;	
  int  zcount_znodedocinfo = 0;
  try {
  	M4Operations m = new M4Operations(request);
  	zcounti_nodesignature = m.getCountInClient(znodesignature,zsubsesion,znodesignature);
  	zcount_nodesignature = m.getCount(znodesignature,zsubsesion,znodesignature);
	zcount_znodedocinfo = 	m.getCount(znodedocinfo,zsubsesion,znodedocinfo);	
  } catch(Exception e) {}
  
   int  zcounti_nodeattach  = 0;
  int  zcount_nodeattach  = 0;	
  try {
  	M4Operations m = new M4Operations(request);
  	zcounti_nodeattach = m.getCountInClient(znodeattach,zsubsesion,znodeattach);
  	zcount_nodeattach = m.getCount(znodeattach,zsubsesion,znodeattach);	
  } catch(Exception e) {}
  
  String zsindex = "0";
  int zdiv = 0;
  int zindex = 0;
  String zpos = "";
%>

<%if ( zcounti_nodedocinfo >0){%>
  <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove_nodedocinfo%>"/></m4:move>
<%}%>
<m4:item m4varname="zIDSignProcessState" m4name="<%=zIDPROCESS_STATE%>" m4format="0"/>
<%if ( zcounti_nodeattach >0){%>
	<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove_nodeattach%>"/></m4:move>
<%}%>

<%
  //Gestión de cuando se permite visualizar documento con firma
  //El documento debe estar firmado y tener formato PDF
  int ztcViewDocAngSignEnabled = 1;
  if (zcount_nodesignature == 0 || !zHasFormatPDF.equals("1")){
       ztcViewDocAngSignEnabled= 0;	  
  }else if ( zcount_nodesignature > 0  && !zIDSignProcessState.equals("2")){
         ztcViewDocAngSignEnabled= 0;
  }
%>

 
<table width="100%" cellspacing="0">
     <tr>	<td class="titulofuncional" colspan="2"><m4:label m4name="<%=znodedocinfocaption%>" htmlsafe="true"/></td></tr>
     <tr>
     	<td>
     	   <table>
     	   		  <tr><td><div class="fuentedescripcion"><%=transdoc.getProperty("doc.LblDescriptionSignature")%></div></td></tr>	   
                  <% if (ztcViewDocAngSignEnabled == 1){%> 
				  <tr><td colspan="2"><ul class="listaenlace">
	                     <li><a class="enlacefuncional" title="<%=transdoc.getProperty("doc.ViewDocAndSing")%>" tabindex="1" 
						   href="javascript:viewDocWithSign('<%=ztciddoc%>','<%=ztciddocversion%>')"><%=transdoc.getProperty("doc.ViewDocAndSing")%></a>
						 </li>		
	                     </ul>
                   </td></tr>
				   <%}%>
     	   </table>
     	</td>
     </tr>	 
</table>
	 
<table width="100%" cellspacing="0" class="tablaestados">
<tr>
	<td>
		<table width="100%" cellspacing="0" >
			<tr class = "tablaestadosceldatitulo">
				<td colspan="2"><%=transdoc.getProperty("doc.LblGeneralInfo")%></td>
			</tr>
			<%if ( zcounti_nodedocinfo >0){%>

			  <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove_nodedocinfo%>"/></m4:move>
			  <m4:loop from="0" to="<%=String.valueOf(zcounti_nodedocinfo-1)%>">
				 <tr>
					  <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zLabelDOC_TITLE%>" htmlsafe="true"/></td>			            
					  <td class="fuentevalor"><m4:item m4name="<%=zDOC_TITLE%>" htmlsafe="true" /></td>	
				 </tr>
				 <tr>
					  <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zLabelID_DOC%>" htmlsafe="true"/></td>
					  <td class="fuentevalor"><m4:item m4name="<%=zID_DOC%>" htmlsafe="true" m4format="0"/></td>			            
				 </tr>
				 <tr>
					 <td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zLabelVALIDITY_STATE%>" htmlsafe="true"/></td>
					 <td class="fuentevalor"><m4:item m4name="<%=zIVALIDITY_STATE%>" htmlsafe="true"/></td>
				 </tr>
				 <tr>
					</td>
				 </tr>
			  </m4:loop>

			<%}else{%>
				 <tr>
					 <td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zLabelDOC_TITLE%>" htmlsafe="true"/></td>
					 <td class="fuentevalor"><m4:item m4name="<%=zItemPROP_DOC_TITLE%>" htmlsafe="true" /></td>	
				 </tr>
				 <tr>
					 <td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zLabelID_DOC%>" htmlsafe="true"/></td>
					 <td class="fuentevalor"><m4:item m4name="<%=zItemPROP_ID_DOC%>" htmlsafe="true" /></td>	
				 </tr>
				  <tr>
					 <td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zLabelVALIDITY_STATE%>" htmlsafe="true"/></td>
					 <td class="fuentevalor"><m4:label m4name="<%=zItemLBL_DOCUMENT_OK%>" htmlsafe="true"/></td>
				 </tr>
			<%}%>
		</table>
	</td>
	<td>
		<table width="100%" cellspacing="0">
			<tr class = "tablaestadosceldatitulo">
				<td  colspan="2"><%=transdoc.getProperty("doc.LblSignInfo")%></td>
			</tr>
			<%if ( zcounti_nodedocinfo >0){%>

			  <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove_nodedocinfo%>"/></m4:move>
			  <m4:loop from="0" to="<%=String.valueOf(zcounti_nodedocinfo-1)%>">
				 <m4:item m4varname="zIsCopy" m4name="<%=zIS_FACSIMILE%>" m4format="0"/>     
				 <m4:item m4varname="zCopyStatus" m4name="<%=zCOPY_STATUS%>" m4format="0"/>    
				 <tr>
					  <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zLabelPROCESS_STATE%>" htmlsafe="true"/></td>			         
					  <td class="fuentevalor"><m4:item m4name="<%=zIPROCESS_STATE%>" htmlsafe="true" /></td>
				 </tr>
				 <tr>
					  <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zLabelSIGN_MODE%>" htmlsafe="true"/></td>			          
					  <td class="fuentevalor"><m4:item m4name="<%=zSIGN_MODE%>" htmlsafe="true" /></td>	
				 </tr>
				 <tr>
				 <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zLabelIS_FACSIMILE%>" htmlsafe="true"/></td>	
				 <td class="fuentevalor"><input id="CheckIsCopy" disabled="true" name="CheckIsCopy" type="checkbox" 
				  <%if (zIsCopy.equals("1")){%>
					  checked="checked"
				  <%}%>
				  />
				  
				
				  <%if (zIsCopy.equals("1")){
					 if (zCopyStatus.equals("1")){%>		 
					   (<%=transdoc.getProperty("doc.LblUnsignedCopy")%>)
					 <%} else if  (zCopyStatus.equals("2")){%>
					   (<%=transdoc.getProperty("doc.LblSignedCopy")%>)
					 <%} else if  (zCopyStatus.equals("3")){%>
					   (<%=transdoc.getProperty("doc.LblRejectedCopy")%>)
					 <%}%> 			   
					 
				  <%}%>
				 </td>
				 </tr>
				  
				 <tr></td></tr>
			  </m4:loop>

			<%}else{%>
				 <tr>
					 <td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zLabelPROCESS_STATE%>" htmlsafe="true"/></td>
					 <td class="fuentevalor"><m4:label m4name="<%=zItemLBL_NO_SIGN_REQUIRED%>" htmlsafe="true"/></td>
				 </tr>
				 <tr>
					<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zLabelSIGN_MODE%>" htmlsafe="true"/></td><td class="fuentevalor">&nbsp;</td>
				 </tr>	 
				 <tr>
					<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zLabelIS_FACSIMILE%>" htmlsafe="true"/></td><td class="fuentevalor">&nbsp;</td>
				 </tr>
				
			<%}%>
		</table>
	</td>
</tr>

</table>
  
</br>
<table width="100%" cellspacing="0" class="tablaestados"> 
     <tr class = "tablaestadosceldatitulo"><td colspan="4"><m4:label m4name="<%=znodeneedescaption%>" htmlsafe="true"/></td></tr>
	<tr><td colspan="4"></TR>
	 <tr class = "tablaestadosceldatitulo">
	 	 <td ><m4:label m4name="<%=zLabelID_APP_USER%>" htmlsafe="true"/></td>
		 <td ><m4:label m4name="<%=zLabelN_APP_USER%>" htmlsafe="true"/></td>
		 <td ><m4:label m4name="<%=zLabelID_PERSON%>" htmlsafe="true"/></td>
		 <td ><m4:label m4name="<%=zLabelSCO_GB_NAME%>" htmlsafe="true"/></td>
	 </tr>
	 <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove_nodeneedes%>"/></m4:move>
	 <m4:loop from="0" to="<%=String.valueOf(zcounti_nodesigners-1)%>">
     <%
	 zsindex = m4lix;
	 zindex = Integer.valueOf(zsindex).intValue();
 	 zdiv = zindex%2;zpos="";if (zdiv==0){zpos="2";}
     %>
	 <tr>
	     <td class="fuentevalor<%=zpos%>"><m4:item m4name="<%=zID_APP_USER%>" htmlsafe="true" /></td>	
	 	 <td class="fuentevalor<%=zpos%>"><m4:item m4name="<%=zN_APP_USER%>" htmlsafe="true" /></td>	
		 <td class="fuentevalor<%=zpos%>"><m4:item m4name="<%=zID_PERSON%>" htmlsafe="true" /></td>	
		 <td class="fuentevalor<%=zpos%>"><m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe="true" /></td>	
	 </tr>
	 </m4:loop>

</table>
</br>


<table width="100%" cellspacing="0" class="tablaestados">
     <tr class = "tablaestadosceldatitulo"><td colspan="7"><m4:label m4name="<%=znodesignaturecaption%>" htmlsafe="true"/></td></tr>
	<tr><td colspan="4"></TR>
	 <tr class = "tablaestadosceldatitulo">
	 	 <td><m4:label m4name="<%=zLabelID_SIGNER_SG%>" htmlsafe="true"/></td>
		 <td><m4:label m4name="<%=zLabelN_APP_USER_SG%>" htmlsafe="true"/></td>
		 <td><m4:label m4name="<%=zLabelID_PERSON_SG%>" htmlsafe="true"/></td>
		 <td><m4:label m4name="<%=zLabelSCO_GB_NAME_SG%>" htmlsafe="true"/></td>
		 <% String ztimeformat = zdateformat + " HH:mm:ss"; %>
		 <m4:item m4varname="zDT_IMPORT_SIGN" m4name="<%=zLabelDT_IMPORT_SIGN_SG%>" m4format="<%=ztimeformat%>"/>
		 <td class="tablaestadosceldatitulo">
		 <%if (zDT_IMPORT_SIGN.equals("")){%>		 
			<m4:label m4name="<%=zLabelDT_SIGN_SG%>" htmlsafe="true"/>
				
		 <%}else {%>
			<m4:label m4name="<%=zLabelDT_IMPORT_SIGN_SG%>" htmlsafe="true"/>
			
		 <%}%> 		 
		 </td> 
		 <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zLabelN_SIGNATURE_STATE_SG%>" htmlsafe="true"/></td>
		 <!--
		 <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zLabelCOMMENTS_SG%>" htmlsafe="true"/></td>
		 -->
		 <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zLabelSIGNATURE_TYPE_SG%>" htmlsafe="true"/></td>	 		  
	 </tr>
	 <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove_nodesignature%>"/></m4:move>
	
	 <m4:loop from="0" to="<%=String.valueOf(zcounti_nodesignature-1)%>">
	 <%
	 zsindex = m4lix;
	 zindex = Integer.valueOf(zsindex).intValue();
 	 zdiv = zindex%2;zpos="";if (zdiv==0){zpos="2";}
     %>
	 <tr>
	     <td class="fuentevalor<%=zpos%>"><m4:item m4name="<%=zID_SIGNER_SG%>" htmlsafe="true" /></td>	
	 	 <td class="fuentevalor<%=zpos%>"><m4:item m4name="<%=zN_APP_USER_SG%>" htmlsafe="true" /></td>	
		 <td class="fuentevalor<%=zpos%>"><m4:item m4name="<%=zID_PERSON_SG%>" htmlsafe="true" /></td>	
		 <td class="fuentevalor<%=zpos%>"><m4:item m4name="<%=zSCO_GB_NAME_SG%>" htmlsafe="true" /></td>	
		 <td class="fuentevalor<%=zpos%>">
		 <%if (zDT_IMPORT_SIGN.equals("")){%>		 
			<m4:item m4name="<%=zDT_SIGN_SG%>" htmlsafe="true" m4format="<%=ztimeformat%>"/></td>
		 <%}else {%>
			<m4:item m4name="<%=zDT_IMPORT_SIGN_SG%>" htmlsafe="true" m4format="<%=ztimeformat%>"/></td>	
		 <%}%> 		
		 </td>
		 <td class="fuentevalor<%=zpos%>"><m4:item m4name="<%=zN_SIGNATURE_STATE_SG%>" htmlsafe="true" /></td>
		 <!--	
		 <td class="fuentevalor<%=zpos%>"><m4:item m4name="<%=zCOMMENTS_SG%>" htmlsafe="true" /></td>
		 -->
		 <td class="fuentevalor<%=zpos%>"><m4:item m4name="<%=zSIGNATURE_TYPE_SG%>" htmlsafe="true" /></td>
	 </tr>
	 
	 </m4:loop>
</table>

</br>
<table width="100%" cellspacing="0" class="tablaestados"> 
     <tr class = "tablaestadosceldatitulo">
		<td colspan="4"><m4:label m4name="<%=znodeattachcaption%>" htmlsafe="true"/></td>
	 </tr>
	<tr><td colspan="4"></TR>
	 <tr class = "tablaestadosceldatitulo">
	 	 <td ><m4:label m4name="<%=zLabelID_DOC_ATTACH%>" htmlsafe="true"/></td>
		 <td ><m4:label m4name="<%=zItemPROP_DOC_TITLE_ATTACH%>" htmlsafe="true"/></td>
		 <td ><m4:label m4name="<%=zLabelID_DOC_ATTACH_VERSION%>" htmlsafe="true"/></td>
	 </tr>
	 <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove_nodeattach%>"/></m4:move>
	 <m4:loop from="0" to="<%=String.valueOf(zcounti_nodeattach-1)%>">
     <%
	 zsindex = m4lix;
	 zindex = Integer.valueOf(zsindex).intValue();
 	 zdiv = zindex%2;zpos="";if (zdiv==0){zpos="2";}
     %>
	 <tr>
	     <td class="fuentevalor<%=zpos%>"><m4:item m4name="<%=zID_DOC_ATTACH%>" htmlsafe="true" /></td>	
		  <td class="fuentevalor<%=zpos%>"><m4:item m4name="<%=zItemPROP_DOC_TITLE_ATTACH%>" htmlsafe="true" /></td>	
	 	 <td class="fuentevalor<%=zpos%>"><m4:item m4name="<%=zID_DOC_ATTACH_VERSION%>" htmlsafe="true" /></td>		
	 </tr>
	 </m4:loop>

</table>
</br>

<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>" m4preserve="true"/> 
<m4:exec m4method="<%=zmetododestroyblock%>"></m4:exec>    
<m4:outputdef m4alias="<%=znodesignature%>"><m4:param name="m4name0" value="<%=zoutputdefsignature%>"/></m4:outputdef>
<m4:endjob/>
  
<m4:endpage/>

</body>
</html>


<%! 
// isValidStyleSheetName: stylesheet must be relative, and contain the suffix .css
boolean isValidStyleSheetName (String styleSheetName)
{       
  boolean bIsValidStyleSheetName = true;
  if (styleSheetName == null 
   || (!styleSheetName.startsWith("/"))
   || (!styleSheetName.endsWith(".css")))
  return false;   

  return bIsValidStyleSheetName;
}
%>
