<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_doc_view_save_sign.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="/shco_g0/shco_gen_taglib.jsp" %><html><head><title></title>
<%@ include file="/shco_g0/shco_gen_bag.jsp" %>
<%@ include file="/shco_g0/shco_gen_arg.jsp" %>
<%@ include file="/shco_g0/shco_gen_css.jsp" %>
<%@ include file="/shco_g0/shco_gen_tec_include.jspf" %>
<%@ include file="/tc_docs/tc_doc_trans.jsp" %>
<script type="text/javascript" language="Javascript1.5"src="/translations/m4err_<%=zlanguser%>.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/library/m4gen.js"></script>
<script type="text/javascript" language="Javascript1.5"src="/library/m4gen_excep.js"></script>

<%


   String ztcUrlDoc = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "URL_Doc");
   if ((ztcUrlDoc==null)||(ztcUrlDoc.equals(""))){ztcUrlDoc = "";}
   String ztcTitle = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "Title");
   if ((ztcTitle==null)||(ztcTitle.equals(""))){ztcTitle=transdoc.getProperty("doc.DefaultTitle");}
   String ztcAuthor = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "Author");
   if ((ztcAuthor==null)||(ztcAuthor.equals(""))){ztcAuthor = "ESS/MSS";}
   String ztcAbstract = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "Abstract");
   String ztcDMS = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "DMS");      
   if ((ztcDMS==null)||(ztcDMS.equals(""))){ztcDMS = "META4-DMS";}
   String ztcClass = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "Class");
   
   //Take Error page. If there is not page stablished used the default error page
   String ztcURL_Error = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "URL_ERROR");
   int itcLanguageId =iLang; // Provide with the include shco_gen_bag.jsp
   if ((ztcURL_Error==null)||(ztcURL_Error.equals(""))){
      ztcURL_Error = CheckConfig.checkErrorPage(itcLanguageId);
   }
   //Take cancel page. If there is not page stablished used the default page
   String ztcURL_Cancel = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "URL_CANCEL");   
   if ((ztcURL_Cancel==null)|| (ztcURL_Cancel.equals(""))){	   
	   ztcURL_Cancel = CheckConfig.checkDefPage("");
   }
   //Take success page. If there is not page stablished used the default page
   String ztcURL_Success = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "URL_SUCCESS");
   if ((ztcURL_Success==null)|| (ztcURL_Success.equals(""))){	
      ztcURL_Success = CheckConfig.checkDefPage("");
	} 
   
   //Check if we let sign
   String ztcSignNotAllowed = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "SignNotAllowed");
    if ((ztcSignNotAllowed==null)||(ztcSignNotAllowed.equals(""))){ztcSignNotAllowed = "0";} //No estamos grabando


  String ztcTitlePage =   transdoc.getProperty("doc.LblTitleSave"); 
  String ztcTitlePagejs = M4PresentationUtilTaglib.unCookHTML(ztcTitlePage);
  ztcTitlePagejs = M4PresentationUtilTaglib.escape(ztcTitlePagejs) + " - " + M4PresentationUtilTaglib.escape(ztcTitle);
%>


<script type="text/javascript">
m4settitle('<%=ztcTitlePagejs%>');
function cancelSave()
{  
   window.location.href="<%=ztcURL_Cancel%>"; 
}

function saveAndSignDoc()
{
   //indicar que se quiere firmar
   m4valor ("frmsavedoc","ztcSignDoc","1","set");
   m4submit("frmsavedoc");
}

function saveDoc()
{
   //indicar que no se quiere firmar
   m4valor ("frmsavedoc","ztcSignDoc","0","set");
   m4submit("frmsavedoc");
}

</script>
<body>

 
     <table width="100%" cellspacing = "0">
  	<tr><td class="titulofuncional" colspan="2"><%=transdoc.getProperty("doc.LblTitleSave")+ "-" + ztcTitle%></td></tr>			
      <tr><td  class="fuentecampo" colspan="2">
        	

		<% if (ztcUrlDoc.equals("")){
 		  if (ztcURL_Error.indexOf("?") != -1){
   		        ztcURL_Error = ztcURL_Error + "&";
		     }else{
  		        ztcURL_Error = ztcURL_Error + "?";
		     }
		  String ztcURLErrorComplete = ztcURL_Error  + "error=" + transdoc.getProperty("doc.ErrorUrlDocEmpty");
		%>
		 <script language="javascript" type="text/javascript">	    	    
		   location.replace("<%=ztcURLErrorComplete%>" );
        </script>
		<%}else{%>
    		
			  <script language="JavaScript">
             		document.write("<iframe id='Local' src='<%=ztcUrlDoc%>' scrolling=yes frameborder=0  vspace=0 hspace=0 width='100%' height='320%' ></iframe>"); 			
      		    </script>
    		
		<%}%>  	   

  	 </td></tr>  

  	<tr>
  	   <td class="fuentecampo" width = "90%"> &nbsp;</td>
  	   <td class="fuentecampo">
	   <form name="frmsavedoc" id="frmsavedoc" action="/servlet/CheckSecurity/JSP/tc_docs/tc_doc_view_save_sign_action.jsp" method="post">	   
  	   <% if (ztcSignNotAllowed.equals("1")){%>
     	        <button  id="Save" name="Save"  title="<%=transdoc.getProperty("doc.BtnSave")%>" class="tablaestadosceldatitulo" type="button"
  			   onclick="javascript:saveDoc()">
     	        &nbsp;<%=transdoc.getProperty("doc.BtnSave")%>&nbsp; </button>
  	   <%}else{%>	     
              <button  id="SaveAndSign" name="SaveAndSign"  title="<%=transdoc.getProperty("doc.BtnSaveAndSign")%>" class="tablaestadosceldatitulo" type="button"
  			onclick="javascript:saveAndSignDoc()">
  	        &nbsp;<%=transdoc.getProperty("doc.BtnSaveAndSign")%>&nbsp; </button>
  	   <%}%>
  	    <button  id="CancelSave" name="CancelSave"  title="<%=transdoc.getProperty("doc.BtnCancel")%>" class="tablaestadosceldatitulo"  type="button"
  	     onclick="javascript:cancelSave()">
  	     &nbsp;<%=transdoc.getProperty("doc.BtnCancel")%>&nbsp;
  		</button>	
   	    <input type="hidden" id="ztcTitle" name="ztcTitle"  value="<%=ztcTitle%>" />
        <input type="hidden" id="ztcAuthor" name="ztcAuthor"  value="<%=ztcAuthor%>" />
        <input type="hidden" id="ztcAbstract" name="ztcAbstract"  value="<%=ztcAbstract%>" />
        <input type="hidden" id="ztcClass" name="ztcClass"  value="<%=ztcClass%>" />
        <input type="hidden" id="ztcUrlDoc" name="ztcUrlDoc"  value="<%=ztcUrlDoc%>" />
        <input type="hidden" id="ztcDMS" name="ztcDMS"  value="<%=ztcDMS%>" />
		<input type="hidden" id="ztcSignDoc" name="ztcSignDoc"  value="" />
		<input type="hidden" id="ztcURL_Error" name="ztcURL_Error" value="<%=ztcURL_Error%>">
        <input type="hidden" id="ztcURL_Success" name="ztcURL_Success" value="<%=ztcURL_Success%>">						
       </form>				
      </td></tr>			
	</table>
</body>
</html>
