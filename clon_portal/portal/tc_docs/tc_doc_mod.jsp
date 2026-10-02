<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: tc_doc_mod.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ page import="java.lang.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.taglib.util.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>
<%@ page import="com.meta4.savparams.*"%>

<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>

<% // 1 - initialize product, language and style.

   M4SessionManager zsessionmanager = M4Context.getSession(request);
   SavParamsInterface oSavParams = zsessionmanager.getSavParamsInstance();
   String zappprod = zsessionmanager.getProductID().toLowerCase();
   String zcssuser = (String) oSavParams.getParameterValue("PORTAL_PARAM", "CSS");
   String zlang = M4Locale.takeLocale(new String().valueOf(zsessionmanager.getLanguageID())).toString();
   String zlanguser = zlang;
   String ztcstylesheet = M4SafeRequest.getParameter(request, "stylesheet");
   if (ztcstylesheet==null){ztcstylesheet="";}
   else { if (!isValidStyleSheetName(ztcstylesheet)) ztcstylesheet = "/css/estilo_sse.css";}
%>

<% // 2 - initialize behavior
   String ztcIdSaveDoc = M4SafeRequest.getParameter(request, "zDOCSave");
   String ztcsubsesionsave = M4SafeRequest.getParameter(request, "subsesion");
   if (ztcsubsesionsave==null){ztcsubsesionsave="";}   

   String ztcNMInputIDDOC = M4SafeRequest.getParameter(request, "NMInputIDDOC");
   if (ztcNMInputIDDOC==null){ztcNMInputIDDOC="";}
   else { if (!isValidItemName(ztcNMInputIDDOC)) ztcNMInputIDDOC = "SCO_ID_DOC";}
      
   String zDoEncrypt = M4SafeRequest.getParameter(request, "DoEncrypt");
   if (zDoEncrypt==null){zDoEncrypt="";}
   
   boolean bShowDigitalSignatureOptions = true; 
   if ( oSavParams != null ) 
   {        	
   	String sShow = oSavParams.getParameterValue("CONFIGURATION", "DIGITAL_SIGNATURE", "SHOW_DIGITAL_SIGNATURE_OPTIONS");
   	try 
	{
		if ( sShow != null )  
		{			
			int iShow = (int)Double.parseDouble(sShow); 
			sShow = new Integer(iShow).toString();
			if (sShow.equals("0")) bShowDigitalSignatureOptions = false;
		}
	} catch (Exception e){}
    }

        	       	
%>


<link href="<%=ztcstylesheet%>" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.5">
var slanguser = "<%=zlanguser%>";
</script>
<%@ include file="/tc_docs/tc_doc_trans.jsp" %>
<script type="text/javascript" language="Javascript1.5"src="/translations/m4err_<%=zlanguser%>.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/library/m4gen.js"></script>
<script type="text/javascript" language="Javascript1.5"src="/library/m4gen_excep.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/library/m4doc_include.js"></script>

<script type="text/javascript">
function savedoc()
{ 
  var error = 0;
  var texto = "";
  var sresulttitle = m4valor("frmsavedoc","zTITLEDOC","","get");
  var sresult = m4valor("frmsavedoc","DOCREQUEST","","get");
 
  texto = m4getmessage("_sl_co_doc_7") + "\n"
  
  if (sresulttitle == null || sresulttitle == "")
  {
    texto = texto + "\n     " + m4getmessage("_sl_co_doc_5");
    error = 1;
  }   
  if (sresult == null || sresult == "")
  {
    texto = texto + "\n     " + m4getmessage("_sl_co_doc_3");
    error = 1;
  }

  var filename = m4valor("frmsavedoc","DOCREQUEST","","get");
  var _invalidFileExtensions = ["exe", "cmd", "jar", "js", "jsp", "bat"]; 
  var extension = "";
  var isvalid = true; 
  var splitparts = filename.split(".");
  if( splitparts.length === 1 || ( splitparts[0] === "" && splitparts.length === 2 ) ) {
  } else {
	extension = splitparts.pop().toLowerCase();
	for (var j = 0; j < _invalidFileExtensions.length; j++) {
    	var sCurExtension = _invalidFileExtensions[j];
        if (extension == sCurExtension.toLowerCase()) {
          isvalid = false;
          break;
        }
    }
  }


  if (isvalid === false)
  {
	      texto = texto + "\n     " + m4getmessage("_sl_co_doc_4");
	      error = 1;
  }
  


  if (document.getElementById("zATTACHFILE") != null) 
  {
	  if (document.getElementById("zATTACHFILE").checked == false) 
	  {  
	    document.getElementById("zCOMMENT").disabled="";
	    document.getElementById("div_DOCSIGNREQUEST").innerHTML =  document.getElementById("div_DOCSIGNREQUEST").innerHTML;
		m4valor("frmsavedoc","zCOMMENT"," ","set");
	  }
	  else
	  {
	    var sresultsign = m4valor("frmsavedoc","DOCSIGNREQUEST","","get");
	    var scomment = m4valor("frmsavedoc","zCOMMENT","","get");
	    if (sresultsign == null || sresultsign == "")
	    {
	      texto = texto + "\n     " + m4getmessage("_sl_co_doc_8");
	      error = 1;
	    }   
	      if (scomment == null || scomment == "")
	    {
	      m4valor("frmsavedoc","zCOMMENT"," ","set");
	    }   
	  }
  }

  if (error == 1)
  {
    alert(texto);
    return;
  }
  else 
  {
	m4submit("frmsavedoc") ;
  }
} 
</script>

<%
  if (ztcIdSaveDoc==null)
  {
%>

<title><%=transdoc.getProperty("doc.LblChooseDoc")%></title>

</head>
<body onLoad="set_inputs_sign()">

<table width="100%" cellspacing="0" border="0">
  <tr class = "fuentecalendario">
  	<td colspan="2"><%=transdoc.getProperty("doc.LblSelDoc")%></td>
  </tr>
  <tr>
  </tr>
    <td>&nbsp; 
    </td>
  <tr>
  </tr>
    <td class="fuentecamponombre" colspan="2">&nbsp;
    </td>
  <tr>
    <form enctype="multipart/form-data" action="/servlet/CheckSecurity/JSP/tc_docs/tc_doc_mod.jsp?zDOCSave=Y&subsesion=<%=ztcsubsesionsave%>&stylesheet=<%=ztcstylesheet%>&NMInputIDDOC=<%=ztcNMInputIDDOC%>&DoEncrypt=<%=zDoEncrypt%>" id="frmsavedoc" name="frmsavedoc" method="post">
    <tr>
      <td class="fuentecamponombre"><%=transdoc.getProperty("doc.LblTitle")%></td>
      <td class="fuentecamponombre"><input type="text" name="zTITLEDOC" maxlength="255" size=50></td>
    </tr>
    <tr>
      <td class="fuentecamponombre"><%=transdoc.getProperty("doc.LblDoc")%></td>
      <td class="fuentecamponombre"><input type="file" id="DOCREQUEST" name="DOCREQUEST" size="50"></td>
    </tr>
	 <% if (bShowDigitalSignatureOptions){%>
		<tr>
		  <td class="fuentecamponombre"></td>
	      <td class="fuentecamponombre"><input type="checkbox" id="zATTACHFILE" name="zATTACHFILE" onclick="set_inputs_sign()">
	      <%=transdoc.getProperty("doc.LblAttachFile")%></td>
	    </tr>	  
		<tr>
	      <td class="fuentecamponombre" width="120"><%=transdoc.getProperty("doc.LblFile")%></td>
	      <td class="fuentecamponombre"> <div id="div_DOCSIGNREQUEST"><input type="file" id="DOCSIGNREQUEST" name="DOCSIGNREQUEST" size="50"></div></td>
	    </tr>	    
		<tr>
	      <td class="fuentecamponombre" width="120"><%=transdoc.getProperty("doc.LblComment")%></td>
	      <td class="fuentecamponombre"><textarea id="zCOMMENT" name="zCOMMENT" maxlength="255" cols="38"></textarea></td>
	    </tr>
	
	<%}%>
    </form>
  </tr>
  <tr>
    <td class="fuenteboton" colspan="2">&nbsp;
   	<a title="<%=transdoc.getProperty("doc.LblSend")%>" href="javascript:savedoc();"><img alt="<%=transdoc.getProperty("doc.LblSend")%>" <%@include file="../files_gif/ic_doc_send.jsp"%>/></a>
  </td>
  </tr>
</table>
  
<script language="javascript" type="text/javascript">
  if (document.getElementById("zTITLEDOC")){
  	 document.getElementById("zTITLEDOC").focus();
  }
</script>

<%
  }
  else
  {
%>

<title><%=transdoc.getProperty("doc.LblSending")%></title>

</head>
<body>

<%
  String ztcsubsesion = "SRTC_VIEW_DOCUMENT";
  String ztcMeta4Object = "SRTC_VIEW_DOCUMENT";  
  String ztcnode = "SRTC_VIEW_DOCUMENT";
  String ztcmetodocarga = "CARGA:" + ztcsubsesion + "!SRTC_VIEW_DOCUMENT.SRTC_MTD_SAVE_DOC";
  
  String ztcoutputdef = ztcsubsesion + "!" + ztcnode + "[*]";
  String ztccomun = ztcnode + ":" + ztcsubsesion + "!" + ztcnode + ".";
  
  String ztcSCOIDDOC = ztccomun + "SCO_ID_DOC";
%>

  <%if (ztcsubsesionsave.equals("")){%>
  	 <m4:startpage m4task="<%=ztcsubsesion%>"/>
  <%}else{%>
  	 <m4:startpage m4task="<%=ztcsubsesionsave%>"/>
  <%}%>
  
  
  <%      

  // Campos texto
  String ztcSaveTITLEDOC = (String) pageContext.getAttribute("zTITLEDOC");
  String ztcSaveCOMMENTDOC = (String) pageContext.getAttribute("zCOMMENT");
  
  // Purificar los campos texto ("titulo")
  if (ztcSaveTITLEDOC != null) {
  	ztcSaveTITLEDOC = ztcSaveTITLEDOC.replaceAll("<", "");
  	ztcSaveTITLEDOC = ztcSaveTITLEDOC.replaceAll(">", "");
  }
  
  // Purificar los campos texto ("comentario")
  if (ztcSaveCOMMENTDOC != null) { 
  ztcSaveCOMMENTDOC = ztcSaveCOMMENTDOC.replaceAll("<", "");
  ztcSaveCOMMENTDOC = ztcSaveCOMMENTDOC.replaceAll(">", "");
  }

  // Campos fichero
  String ztcSaveFILEDOC = (String) pageContext.getAttribute("DOCREQUEST");
  String ztcSaveFILESIGNDOC = (String) pageContext.getAttribute("DOCSIGNREQUEST");

  String ztcSaveDOCID = null;
  %>
  
  <% if (ztcSaveFILEDOC == null)
  {
  	out.println(transdoc.getProperty("doc.LblSelDoc"));
  }
  else
  { 
 	// check extensions: cannot be exe, bat, cmd, etc.
    if (isValidExtension(ztcSaveFILEDOC))
  	{ 
	%>
	
	  <m4:beginjob/>
	  <m4:datadef m4o="<%=ztcMeta4Object%>" m4name="<%=ztcsubsesion%>"/>
	  <m4:setfile 
	  		m4blob = "SRTC_VIEW_DOCUMENT!SRTC_VIEW_DOCUMENT.PRP_DOC"
	  		m4path = "&REQUEST.DOCREQUEST" 
	  />
	  <% if (bShowDigitalSignatureOptions){%>
	  <m4:setfile  
	  		m4blob = "SRTC_VIEW_DOCUMENT!SRTC_VIEW_DOCUMENT.PRP_SIGNDOC"
	  		m4path = "&REQUEST.DOCSIGNREQUEST" 
	  /> 
	  <%}%>
	  <%if (ztcSaveCOMMENTDOC == null || ztcSaveCOMMENTDOC.equals(" ")) {ztcSaveCOMMENTDOC = "";}%>
	  <m4:setitems>
	  <m4:param name="SRTC_VIEW_DOCUMENT!SRTC_VIEW_DOCUMENT.PRP_COMMENTDOC" value="<%=ztcSaveCOMMENTDOC%>"/>
	  </m4:setitems>
	   
	  <m4:setitems><m4:param name="SRTC_VIEW_DOCUMENT!SCO_MANAGE_DOCUMENT.ENCRYPT_DOC" value="<%=zDoEncrypt%>"/></m4:setitems>
	  
	  <%if (ztcsubsesionsave.equals("")){%>
		 <m4:exec m4method="<%=ztcmetodocarga%>"><m4:param name="ARG_ID_DOC" value="<%=ztcSaveDOCID%>"/><m4:param name="ARG_TITLE_DOC" value="<%=ztcSaveTITLEDOC%>"/></m4:exec>
	  <%}%>
	
	  <m4:outputdef m4alias="<%=ztcnode%>"><m4:param name="m4name0" value="<%=ztcoutputdef%>"/></m4:outputdef>
	  <m4:endjob/>
	
	  <%if (ztcsubsesionsave.equals("")){%>
	  	<m4:item m4name="<%=ztcSCOIDDOC%>" var="ztcSaveDOCID" htmlsafe = "true"/>
	  	 
	  <%
	  	//aqui se encripta el nuevo DOCID, siempre y cuando no se trate de un error //221742 //274397
		int DOCID = Integer.parseInt(ztcSaveDOCID);
		if (DOCID > -1){
			ztcSaveDOCID = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "tc_docs", ztcSaveDOCID);
		}
	  }
	  %>
	  
	<br><br><br>
	<table align="center" cellpadding="0" cellspacing="0">
	  <tr class="fuenteactualizar">
		<td><%=transdoc.getProperty("doc.LblProcess")%></td>
	  </tr>
	  <tr class="fuenteactualizar2">
		<td><%=transdoc.getProperty("doc.LblWait")%></td>
	  </tr>
	</table> 
	
	<script language="javascript" type="text/javascript">
	  
	  var argsdoc = new Array;
	  var zExtDoc = m4getmessage("_sl_co_doc_4");  
	  var zExtDocNotLoadFile = m4getmessage("_sl_co_doc_9"); 
	  var zExtDocNotValiFile = m4getmessage("_sl_co_doc_10");
	  var zExtDocNotAdapFile = m4getmessage("_sl_co_doc_11");
	  
	  <%if (ztcsubsesionsave.equals("")){%>
	    <%if (ztcSaveDOCID.equals("-1")){%>
	      <%ztcSaveDOCID = "";%>
	  	  <%ztcSaveTITLEDOC = "";%>
		  <%ztcSaveFILESIGNDOC = "";%>
	      <%ztcSaveCOMMENTDOC = "";%>
		  alert(zExtDoc);
	    <%}%>
		<%if (ztcSaveDOCID.equals("-2")){%>
	      <%ztcSaveDOCID = "";%>
	  	  <%ztcSaveTITLEDOC = "";%>
		  <%ztcSaveFILESIGNDOC = "";%>
	      <%ztcSaveCOMMENTDOC = "";%>
		  alert(zExtDocNotLoadFile);
	    <%}%>
		<%if (ztcSaveDOCID.equals("-3")){%>
	      <%ztcSaveDOCID = "";%>
	  	  <%ztcSaveTITLEDOC = "";%>
		  <%ztcSaveFILESIGNDOC = "";%>
	      <%ztcSaveCOMMENTDOC = "";%>
		  alert(zExtDocNotValiFile);
	    <%}%>
		<%if (ztcSaveDOCID.equals("-4")){%>
	      <%ztcSaveDOCID = "";%>
	  	  <%ztcSaveTITLEDOC = "";%>
		  <%ztcSaveFILESIGNDOC = "";%>
	      <%ztcSaveCOMMENTDOC = "";%>
		  alert(zExtDocNotAdapFile);
	    <%}%>
	  <%}%>
	  
	  //argsdoc[0]=<m4:item m4name="<%=ztcSCOIDDOC%>" htmlsafe = "true"/>;
	  argsdoc[0]="<%=ztcSaveDOCID%>";        //identificador del documento  
	  argsdoc[1]="<%=ztcSaveTITLEDOC%>";     //título del documento
	  argsdoc[2]="<%=ztcNMInputIDDOC%>"; 
	  
	  //prefijo para los nombres de los inputs
	  returnvaluesdoc(argsdoc);
	
	</script>
	<m4:endpage/>
	  
	<%
	} 
	else
	{%>

	<%}%>
  <%}%>
<%}%>
</body>
</html>
<%! 
// isValidItemName: simple blacklisting of ", ', and \ as characters 
boolean isValidItemName (String itemName)
{       
  boolean bIsValidItemName = true;
  if (itemName == null
   || itemName.contains("\"")
   || itemName.contains("\'")
   || itemName.contains("\\"))
   {
   	return false;
   }
  return bIsValidItemName;      
}


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


// isValidExtension: uploaded files must not contain the extensions below
boolean isValidExtension (String fileName)
{       
  boolean isValidExtension = true;
  String[] forbiddenExtensions = 
    {
        "exe", "jsp", "jar", "bat", "cmd",   // porque puede introducir código en el servidor que se ejecute
        "js", "html", "htm"  // porque puede introducir código que cause XSS (cross side scripting)
    };

   	if ( fileName != null ) {
		fileName = fileName.toLowerCase();
  		for (String ext : forbiddenExtensions) {
    		if(fileName.endsWith(ext)) {
    			isValidExtension = false;
    		}
    	}

		/*
 		if (fileName.endsWith(".exe")
 		|| fileName.endsWith(".jsp")
 		|| fileName.endsWith(".jar")
 		|| fileName.endsWith(".bat")
 		|| fileName.endsWith(".cmd")
 		|| fileName.endsWith(".js")) 
			*/
	}
    return isValidExtension;
}

%>
