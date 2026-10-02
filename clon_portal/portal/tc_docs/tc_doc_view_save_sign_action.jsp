<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_doc_view_save_sign_action.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/shco_g0/shco_gen_bag.jsp" %>
<%@ include file="/shco_g0/shco_gen_arg.jsp" %>
<%@ include file="/shco_g0/shco_gen_tec_include.jspf" %>
<%@ include file="/tc_docs/tc_doc_trans.jsp" %>
<%@ include file="/shco_g0/shco_gen_js.jsp" %>
<%
   String ztcUrlDoc = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ztcUrlDoc");
   if ((ztcUrlDoc==null)||(ztcUrlDoc.equals(""))){ztcUrlDoc = "";}
   String ztcTitle = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ztcTitle");
   String ztcAuthor = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ztcAuthor");
   String ztcAbstract = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ztcAbstract");
   String ztcDMS = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ztcDMS");   
   String ztcClass = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ztcClass");
   
   //Take error page. If no one is stablished we use the default error page
   String ztcURL_Error = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ztcURL_Error");   
   String ztcURL_Success = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ztcURL_Success");
   
   //Check if we let sign
   String ztcSignDoc = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ztcSignDoc");
   if ((ztcSignDoc==null)||(ztcSignDoc.equals(""))){ztcSignDoc = "0";} //No firmamos
%>

<head><title></title></head>
<body onclick="setEventCookie();" onkeypress="setEventCookie();">
  
<%  
  String ztcsubsesion = "SRTC_SAVE_AND_SIGN_DOCUMENT";
  String ztcMeta4Object = "SRTC_SAVE_AND_SIGN_DOCUMENT";  
  String ztcnode = "SRTC_SAVE_AND_SIGN_DOCUMENT";
  String ztcnodeSignPlatform = "SRTC_ACTIVE_SIGN_PLATFORM";
  String ztcIDItemBlob = "PROP_BLOB_FILE";
  String ztcmethodsave = "SAVEDOC:" + ztcsubsesion + "!"+ ztcnode + ".SRTC_SAVE_AND_SIGN_DOCUMENT";
  String ztcmethodLoadActiveSignPlatform = "ACTIVE_PLATF:" + ztcsubsesion + "!"+ ztcnode + ".SRTC_LOAD_ACTIVE_SIGN_PLATFORM";
  String ztcItemPropIdDoc = ztcnode + ":" + ztcsubsesion + "!" + ztcnode + ".PROP_ID_DOC";
  String ztcItemPropExternalRef = ztcnode + ":" + ztcsubsesion + "!" + ztcnode + ".PROP_EXTERNAL_REF";
  String ztcItemIsMeta4ActiveSignPlatform = ztcnode + ":" + ztcsubsesion + "!" + ztcnode + ".IS_META4_ACTIVE";   	 
  String ztcoutputdef = ztcsubsesion + "!" + ztcnode + "[*]"; 
  String ztcoutputdefSignPlatform = ztcsubsesion + "!" + ztcnodeSignPlatform + "[*]";
  String ztcError = "0";
  String ztcErrorMsg="";
  String ztcmoveSignPlatform = ztcnodeSignPlatform + ":" + ztcnodeSignPlatform + "[FIRST]";
  String ztcComunNodeSignPlatform= ztcnodeSignPlatform + ":" + ztcsubsesion + "!" + ztcnodeSignPlatform + "[0].";
  String ztcItemSignPlatformURL = ztcComunNodeSignPlatform + "URL";
  String ztcItemSignPlatformVarIdDoc = ztcComunNodeSignPlatform + "PAR_ID_DOC";
  String ztcItemSignPlatformVarURLSucess = ztcComunNodeSignPlatform + "PAR_URL_SUCCESS";
  String ztcItemSignPlatformVarURLError = ztcComunNodeSignPlatform + "PAR_URL_ERROR";
  String sSeparator = System.getProperty("file.separator");
  String sHostName = request.getServerName() ; 
  String sPortName = new Integer( request.getServerPort() ).toString() ; 
  boolean isHttpSecure =  request.isSecure(); 
  String sProtocol = "http";
  if ( isHttpSecure ) sProtocol = "https" ;
  String ztcServerURL = sProtocol + "://"  + sHostName + ":" + sPortName; 
  String ztcUrlRedirectPage ="";
  String ztcIsMeta4ActiveSignPlatform="";
  %>

<m4:startpage m4task="<%=ztcMeta4Object%>"/> 
   <m4:beginjob/>
   <m4:datadef m4o="<%=ztcMeta4Object%>" m4name="<%=ztcMeta4Object%>"/>

    <% //Upload File from WebServer to Appserver
      com.meta4.session.M4SessionCl oSesion = null; 
      com.meta4.session.M4SessionManager oSessionManager = M4Context.getSession(request);  
      if (oSessionManager != null) 
      {		oSesion = oSessionManager.getSessionCl();    	
    		if (oSesion != null)
         	{	 M4Operations oM4Operations = new M4Operations(oSessionManager);	   		    	
                try{			
				   ztcUrlDoc.replace('/',sSeparator.charAt(0));
   			   	   ztcUrlDoc.replace('\\',sSeparator.charAt(0));
				   ztcServerURL.replace('/',sSeparator.charAt(0));
				   ztcServerURL.replace('\\',sSeparator.charAt(0));
					       
				   //Get Web server path
				   String pathReports = (String) oSessionManager.getPathTempMapping();
            	   String stUserTempUri = (String) oSessionManager.getUserTempURI();				  
				   String WebPath="";
				   int index = -1;
				   stUserTempUri = stUserTempUri.replace('/',sSeparator.charAt(0));
            	   stUserTempUri = stUserTempUri.replace('\\',sSeparator.charAt(0));
				   pathReports = pathReports.replace('/',sSeparator.charAt(0));
            	   pathReports = pathReports.replace('\\',sSeparator.charAt(0));
				   index  = pathReports.indexOf(stUserTempUri);				   
				   if( index  != -1){
              	   	   WebPath = pathReports.substring(0,index);
            	   }else{
                       WebPath = sSeparator;
                   }
				     
				   //Take http if it is from our web server else error
				   if (ztcUrlDoc.indexOf("http") != -1){
				   	   index = ztcUrlDoc.indexOf(ztcServerURL);				  					  					  
				       if (index != -1){
				              ztcUrlDoc=ztcUrlDoc.substring(ztcServerURL.length(),ztcUrlDoc.length());				      
				       }else{
					      ztcError = "1";
   					      ztcErrorMsg = transdoc.getProperty("doc.ErrorUploadingFile");
					   }					   
				   }
				   
				   if (!ztcError.equals("1")){			   
				   	   //Add Web server path to the URL				   
				   	   if (ztcUrlDoc.indexOf(WebPath)== -1){
				       	  ztcUrlDoc = WebPath + ztcUrlDoc;
				   	   }
                      //Set the document to the blob item
    			      oM4Operations.setFile(ztcMeta4Object, ztcnode, "", ztcIDItemBlob, ztcUrlDoc);  
    			   }
				  }catch(Exception e){
				    ztcError = "1";
				    ztcErrorMsg = transdoc.getProperty("doc.ErrorUploadingFile");
    				//ztcError =e.getMessage();
    			}
    		}
    	}
    %>
    
<% if (ztcError.equals("0")){%>    
    <%if (ztcSignDoc.equals("1")){%>
		 		<m4:exec m4method="<%=ztcmethodLoadActiveSignPlatform%>"></m4:exec>		
    <m4:outputdef m4alias="<%=ztcnodeSignPlatform%>"><m4:param name="m4name0" value="<%=ztcoutputdefSignPlatform%>"/></m4:outputdef>
	<%}%>
    <m4:exec m4method="<%=ztcmethodsave%>">
       <m4:param name="ARG_TITLE" value="<%=ztcTitle%>"/>   
       <m4:param name="ARG_ABSTRACT" value="<%=ztcAbstract%>"/>
       <m4:param name="ARG_AUTHOR" value="<%=ztcAuthor%>"/>
       <m4:param name="ARG_DMS" value="<%=ztcDMS%>"/>
       <m4:param name="ARG_CLASS" value="<%=ztcClass%>"/>
       <m4:param name="ARG_SIGN_DOC" value="<%=ztcSignDoc%>"/>	   
    </m4:exec>			
	
	<m4:outputdef m4alias="<%=ztcnode%>"><m4:param name="m4name0" value="<%=ztcoutputdef%>"/></m4:outputdef>
	
    <m4:endjob/>
	<m4:move><m4:param name="<%=ztcsubsesion%>" value="<%=ztcmoveSignPlatform%>"/></m4:move>
	<m4:outputexec m4alias="SAVEDOC" m4varname="ztcResultSaveAndSign" m4format="0"></m4:outputexec>	
	<m4:item m4name="<%=ztcItemSignPlatformURL%>" m4varname="ztcSignPlatformURL"/>
    <m4:item m4name="<%=ztcItemSignPlatformVarIdDoc%>" m4varname="ztcSignPlatformVarIdDoc"/>
	<m4:item m4name="<%=ztcItemSignPlatformVarURLSucess%>" m4varname="ztcSignPlatformVarURLSucess"/>
	<m4:item m4name="<%=ztcItemSignPlatformVarURLError%>" m4varname="ztcSignPlatformVarURLError"/>
	<m4:item m4name="<%=ztcItemPropIdDoc%>" m4varname="ztcIdDocSaved"/>
	<m4:item m4name="<%=ztcItemPropExternalRef%>" m4varname="ztcIdDocSavedExtRef"/>
	<m4:item m4name="<%=ztcItemIsMeta4ActiveSignPlatform%>" var="ztcIsMeta4ActiveSignPlatform"/>

    <br><br><br>
		   
  <%--   Error and Redirect management   --%>
   <%       
   if (!ztcResultSaveAndSign.equals("0")){
  	 ztcError = "1";
	 if (ztcResultSaveAndSign.equals("-1")){
   	    ztcErrorMsg = transdoc.getProperty("doc.ErrorSavingFile");
	 }
	 else{ //Error de firma
	   ztcErrorMsg = transdoc.getProperty("doc.ErrorRequestSignature");
	 }
   }else{
       if (ztcSignDoc.equals("1")){	   
          //Take the url para el portafirmas activo %>		  
		  <%
		  
		  if ((ztcSignPlatformVarIdDoc==null)||(ztcSignPlatformVarIdDoc.equals(""))){ztcSignPlatformVarIdDoc = "ID_DOC";}
		  if ((ztcSignPlatformVarURLSucess==null)||(ztcSignPlatformVarURLSucess.equals(""))){ztcSignPlatformVarURLSucess = "URL_SUCCESS";}
		  if ((ztcSignPlatformVarURLError==null)||(ztcSignPlatformVarURLError.equals(""))){ztcSignPlatformVarURLError = "URL_ERROR";}
		  
		  ztcUrlRedirectPage = ztcSignPlatformURL;
		  //Check if it is an url with http (extern), in this case add http to all the URL
		  int index  = ztcUrlRedirectPage.indexOf("http");
		  if( index  != -1){  			
			 ztcURL_Error = ztcServerURL+ztcURL_Error;
			 ztcURL_Success =ztcServerURL+ztcURL_Success;
		  }
		  
   	     if ((ztcIdDocSavedExtRef!=null)&&(!ztcIdDocSavedExtRef.equals(""))){
  		    ztcIdDocSaved = ztcIdDocSavedExtRef;
		 }
		 
	  }else{
	     ztcUrlRedirectPage = ztcURL_Success;
		 if (ztcUrlRedirectPage.indexOf("?") != -1)
		 {
		    ztcUrlRedirectPage = ztcUrlRedirectPage + "&";
		 }else{
  		    ztcUrlRedirectPage = ztcUrlRedirectPage + "?";
		 }		 		 
		 ztcUrlRedirectPage = ztcUrlRedirectPage + "ID_DOC=" + ztcIdDocSaved;
	  }
   }   
 %>	   
   <form name="frmRedirect" id="frmRedirect" action="<%=ztcUrlRedirectPage%>" method="post">
       <input type="hidden" id="<%=ztcSignPlatformVarIdDoc%>" name="<%=ztcSignPlatformVarIdDoc%>" value="<%=ztcIdDocSaved%>">
 	   <input type="hidden" id="ztcGotoSign" name="ztcGotoSign" value="1">
       <input type="hidden" id="<%=ztcSignPlatformVarURLError%>" name="<%=ztcSignPlatformVarURLError%>" value="<%=ztcURL_Error%>">
       <input type="hidden" id="<%=ztcSignPlatformVarURLSucess%>" name="<%=ztcSignPlatformVarURLSucess%>" value="<%=ztcURL_Success%>">
  </form>	
<%}%>
  
<%if (ztcError.equals("1")){%>
     <script language="javascript" type="text/javascript">	    	    
		location.replace("<%=ztcURL_Error%>?error=<%=ztcErrorMsg%>" );		
     </script>
<%}else{%>

		<% if ( ztcSignDoc.equals("0") || (ztcSignDoc.equals("1") && ztcIsMeta4ActiveSignPlatform.equals("1")) ){%>           	   
           <script language="javascript" type="text/javascript">	              
               m4submit("frmRedirect");
           </script>
		<%}else{%>
		   <script language="javascript" type="text/javascript">	              
		      // If the active platform is not from Meta4 another window will be open          	 
			 var hoy = new Date(); 
			 var sNewWindow = "Wnd" + hoy.getDay() + hoy.getHours() + hoy.getMinutes() + hoy.getSeconds();
             window.open("",sNewWindow,"top=20,left=20,toolbar=no,scrollbars=yes,directories=no,status=yes,menubar=no,resizable=yes,width=850,height=560");
			 document.forms.frmRedirect.target = sNewWindow ;			  
   		     m4settarget("frmRedirect",sNewWindow);
			 m4submit("frmRedirect"); 
			 location.replace("<%=CheckConfig.checkDefPage("")%>");      			 
           </script>
		<%}%>    
<%}%>
</body>
<m4:endpage/>
</html>
