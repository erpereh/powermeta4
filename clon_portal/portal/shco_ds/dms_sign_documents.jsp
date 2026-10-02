<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: dms_sign_documents.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/shco_g0/shco_gen_bag.jsp" %>
<%@ include file="/shco_g0/shco_gen_arg.jsp" %>
<%@ include file="/shco_g0/shco_gen_css.jsp" %>
<%@ include file="/shco_g0/shco_gen_tec_include.jspf" %>

<%
  String zpag = request.getParameter("zpag");
  if ((zpag==null)||(zpag.equals(""))){zpag = "1";} // 1 = menu appears
  String zdireccion = "shco_ds/dms_sign_documents.jsp?zpag=" + zpag;
  String zdireccion_sd = "shco_ds/dms_signature_desktop.jsp?zpag=" + zpag;
  String zdireccion_action = "shco_ds/dms_sign_documents_action.jsp?zpag=" + zpag;
  //Recoger el identificador de documento de filtrado
  String ztcIdDocFilter=request.getParameter("ztcIdDocFilter");
  String ztcURL_Error = request.getParameter("ztcURL_Error");
  String ztcURL_Success = request.getParameter("ztcURL_Success");
 
%>

<%if (zpag.equals("0") == false){%><%@ include file="/shco_g0/shco_gen_menusup.jsp" %><%}%>	

<%@ include file="/shco_g0/shco_gen_js.jsp" %>
<%@ include file="/shco_ds/shco_ds_trans.jsp"%>


<%-- Signature Component Management --%>
<% 
 
  Properties oSignatureCompProperties = new Properties();
  oSignatureCompProperties.load(application.getResourceAsStream("/shco_ds/dms_sign_documents.properties"));  
  String sImplementationPage  = oSignatureCompProperties.getProperty("SignatureImplementationPage");

 if (M4FileURIChecker.exists(sImplementationPage, pageContext) == true){
 %>
   <jsp:include page='<%=sImplementationPage%>' flush="false" />
 <%}else{%>
   <jsp:include page="/shco_ds/dms_sign_docs_impl_none.jsp" flush="false" />
 <%}
 %>


<script type="text/javascript">

 
  // Check for Valid Certificates
	function checkExistValidCertificates(){
	   breturn = true;
     if (document.formData.validCertificates.options.length == 0){
		   m4showmessage("_sl_shco_ds_2");
          breturn = false;
	   }
	   return(breturn)
	}
	
  
	// Sign the chosen documents
	function signAll() {
	
	   var formDocuments = "formDocuments";
	   var numregtotal = parseInt(document.forms[formDocuments].elements["num_reg"].value);
	   var numregtosign = 0;
	   var numregselected = 0; 
	   var numregtosignerror =0;
	   
	   var signature="";
	   var ParamAction="";
       var sepActions = "{{";
       var bGotoSign = true;
     
	   
     if (checkExistValidCertificates() == true){
	      m4valor(formDocuments,"ztcCertificate",document.formData.validCertificates.options[document.formData.validCertificates.selectedIndex].text,"set");
     	   // Para todos los elementos pendientes
          for (var i = 0; i < numregtotal; i++)
          {
           if (bGotoSign == true) {
             // Comprobar si el documento está marcado para firmar
             var errorSignImage = document.getElementById("errorSign"+i);

             if (document.forms[formDocuments].elements["chkSign"+i].checked == true)
             {
                  numregselected = numregselected + 1;     		                 
                  var url_doc = m4valor(formDocuments,"doc"+i,"","get");
                  var sign_mode = m4valor(formDocuments,"sign_mode"+i,"","get");
                  if (url_doc != null && url_doc != "")
                  {
                    signature= signOne (url_doc, document.formData.validCertificates.options[document.formData.validCertificates.selectedIndex].value,sign_mode)
                    if (signature != "")
                    {
                      m4valor(formDocuments,"signature"+i,signature,"set");
					  
                      // bGotoSign=true;
                      numregtosign = numregtosign + 1;
                    } 
                    else 
                    {
                      errorSignImage.style.visibility = "visible";
                      numregtosignerror = numregtosignerror +1;
                                            
                    } //(signature != "")
                   }//url_doc
              }//checked == true
            }//bGotoSign == true
          }//for
		  
          if (numregselected == 0) {
          m4showmessage("_sl_shco_ds_3");
      }else{
        if (numregtosignerror > 0) {
        m4showmessage("_sl_shco_ds_1");
      }else{
          // Si ninguno de los seleccionados ha quedado con firma vacía
          // entonces vamos a la página de notificación. 
               if (numregtosign == numregselected) 
               {          
                  m4valor(formDocuments,"zredireccion",'<%=zdireccion_sd%>',"set");
               }
                  m4submit(formDocuments);
               }
       } 
	  }
   }//function
 
   function setErrorFile(iPosition)
   {
	   var checkSign = document.getElementById("chkSign"+iPosition);
	   checkSign.disabled= "true";
	
   }
   
   function fillValidCertificates()
   {
   //getValidCertificates : función que debe esar definida en la página dms_sign_docs_impl_xxx.jsp    
    var arrValidCertificates = getValidCertificates();
    if (arrValidCertificates != null){
       for (var i = 0; i < arrValidCertificates.length; i++) {
        if (arrValidCertificates[i]!=null && arrValidCertificates[i]!=""){
            document.formData.validCertificates.options[i] = new Option(arrValidCertificates[i][1],arrValidCertificates[i][0]);        
         }
       }//For
	   document.formData.validCertificates.options.length=arrValidCertificates.length;
    }//if
   } 
   
</script>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title><%= Tran_shco_ds.getProperty("Desktop")%></title>
</head>
<script type="text/javascript">m4settitle('<%= Tran_shco_ds.getProperty("Desktop")%>');</script>

<body onload="initialize();fillValidCertificates();">

<%

   String zsubsesion = "SRTC_DS_M4_DESKTOP_HTML";
   String zmeta4object = "SRTC_DS_M4_DESKTOP_HTML";
   String znodoprincipal = "SRTC_DS_M4_DESKTOP_HTML_ROOT";
   String znodoforsigning = "SRTC_DS_FOR_SIGNING_DOC";
 
   zventanas = "20";
   zvuelta = 5;	
   int zregistroinicial = Integer.valueOf(zinicio).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodoforsigning + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodoforsigning + ":" +  znodoforsigning + "[" + zregistroinicial + "]";
   String zraiz = znodoforsigning + ":" + zsubsesion + "!" + znodoforsigning + ".";
   String zcomun = znodoforsigning + ":" + zsubsesion + "!" + znodoforsigning + "[&VAR.m4lix]" + ".";
   
        
   String zItemID_DOCUMENT = "ID_DOCUMENT";
   String zID_DOCUMENT = zcomun + zItemID_DOCUMENT; 
   String zLabelID_DOCUMENT = zraiz + zItemID_DOCUMENT;
   
   String zItemCOMMENT = "COMMENT";
   String zCOMMENT = zcomun + zItemCOMMENT;
   String zLabelCOMMENT   = zraiz + zItemCOMMENT;
    
   String zItemID_DOC_VERSION = "ID_DOC_VERSION";
   String zID_DOC_VERSION = zcomun + zItemID_DOC_VERSION;   
   String zLabelID_DOC_VERSION   = zraiz + zItemID_DOC_VERSION; 
      
   String zItemDOC_TITLE = "DOC_TITLE";
   String zDOC_TITLE = zcomun + zItemDOC_TITLE;   
   String zLabelDOC_TITLE   = zraiz + zItemDOC_TITLE; 
   
   String zItemDOC_CONTENT = "DOC_CONTENT";
   String zDOC_CONTENT = zcomun + zItemDOC_CONTENT;   
   String zLabelDOC_CONTENT   = zraiz + zItemDOC_CONTENT; 
      
   String zItemID_SIGN_MODE = "ID_SIGN_MODE";
   String zID_SIGN_MODE = zcomun + zItemID_SIGN_MODE;   
   String zLabelID_SIGN_MODE   = zraiz + zItemID_SIGN_MODE; 
   
   String zItemID_WORKITEM_ORD = "ID_WORKITEM_ORD";
   String zID_WORKITEM_ORDINAL = zcomun + zItemID_WORKITEM_ORD;   
   String zLabelID_WORKITEM_ORD   = zraiz + zItemID_WORKITEM_ORD; 
   boolean bSuccessMoveFile = true;
   long lResult=0;
   String zItemSIGNED = "SIGNED";
   String zSIGNED  = zcomun + zItemSIGNED;   
   
 
   // Transaccion cliente ligero: Obtengo todos los items cargados en el nodo SRTC_DS_FOR_SIGNING_DOC
   // Posicionandome en el ultimo

 %>
     <m4:startpage m4task="<%=zsubsesion%>"/>
		 <m4:beginjob/>
	   <m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>	   	   	  

     <m4:outputdef m4alias="<%=znodoforsigning%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
	   <m4:endjob/>
	   
	   <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
	   
	   <%	   
	   // Transaccion cliente ligero: Obtengo la cuenta de items
	   
	    int  zcounti  = 0;
	    int  zcount  = 0;	
	    try {
		    M4Operations m = new M4Operations(request);
		    zcounti = m.getCountInClient(znodoforsigning,zsubsesion,znodoforsigning);
		    zcount = m.getCount(znodoforsigning,zsubsesion,znodoforsigning);		
	     } catch(Exception e) {}
	    String	zcountv = String.valueOf(zcounti);
      %>



    <table width="100%" cellspacing="0">
     <tr>	<td class="titulofuncional" colspan="2"><%= Tran_shco_ds.getProperty("Desktop") %></td></tr>
     <tr><td><img alt=<%= Tran_shco_ds.getProperty("SignDocs.Title.shco_dms_sd_ws") %> <%@include file="../files_gif/img_signature_desktop.jsp"%> /></td>
      <td>
        <table><tr><td>&nbsp;</td></tr>
          <tr><td><div class="descripcionfuncional">&nbsp;<%= Tran_shco_ds.getProperty("SignDocs.Label.shco_dms_sd_ws_des") %></div></td></tr>
          <tr><td>&nbsp;</td></tr>
          <tr><td><ul class="descripcionfuncional">    				
                <li><a class="descripcionfuncional" title= "<%=Tran_shco_ds.getProperty("Desktop")%>" href="/servlet/CheckSecurity/JSP/<%=zdireccion_sd%>"></a><%=Tran_shco_ds.getProperty("Desktop")%></li>			
                </ul></td>
          </tr>
        </table>
      </td>
     </tr>
     </table>

     <table width="100%" cellspacing="0" >	 
      <form name="formData" id="formData" method="POST" action="">
        <tr><td class="tablaestadosceldatitulo" colspan="2"><%= Tran_shco_ds.getProperty("SignDocs.Title.shco_dms_sd_ws_des") %></td></tr>  
        <tr><td class="fuentecampo">&nbsp;</td>
        <td class="fuentecampo"> 
          <table>
            <tr><td class="fuentecampo">&nbsp;</td></tr>
            <tr> <td class="fuentecampo"><%= Tran_shco_ds.getProperty("SignDocs.Label.shco_dms_sd_ws_availcert") %>	</td> </tr>
            <tr><td class="fuentecampo">
            <select class="fuenteformulario200" name="validCertificates" cols="3" id="validCertificates" ></select>
            </td>  	
            </tr>
          </table></td>
         </tr>
      </form>

	  
	 <form name="formDocuments" id="formDocuments" method="POST" action="/servlet/CheckSecurity/JSP/shco_ds/dms_sign_documents_action.jsp">
     <input id="num_reg" name="num_reg" type="hidden" value="<%=zcountv%>" />
     <input id="zredireccion" name="zredireccion" type="hidden" value="<%=zdireccion%>" />
	 <input type="hidden" id="zpag" name="zpag"  value="<%=zpag%>" />	
	 <input type="hidden" id="ztcIdDocFilter" name="ztcIdDocFilter"  value="<%=ztcIdDocFilter%>" />
     <input type="hidden" id="ztcURL_Error" name="ztcURL_Error"  value="<%=ztcURL_Error%>" />
     <input type="hidden" id="ztcURL_Success" name="ztcURL_Success"  value="<%=ztcURL_Success%>" /> 	
     <input type="hidden" id="ztcCertificate" name="ztcCertificate"  value="" />
	 <tr><td class="fuentecampo" colspan="2">&nbsp;</td></tr>
	  <tr><td class="fuentecampo" colspan="2"><center>
      <button title="<%=Tran_shco_ds.getProperty("SignDocs.Label.shco_dms_sd_selected")%>" class="tablaestadosceldatitulo" id="btnSign" name="btnSign" type="button" 
	     onclick="javascript:signAll();"><%=Tran_shco_ds.getProperty("Desktop.Check.SignAll")%> &nbsp;</button>&nbsp;&nbsp;
	 </center></td> </tr>    
 	  <tr><td class="fuentecampo" colspan="2">&nbsp;</td></tr>
	</table>
	
    <% if (zcounti > 0) {
        String zregistroinicials = String.valueOf(zregistroinicial);
        String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1); 
    %>	
    <table width="100%" cellspacing="0"> 
        <tr><td class="tablaestadosceldatitulo" colspan="3">&nbsp;<%=Tran_shco_ds.getProperty("SignDocs.Title.shco_dms_sd_ws")%></td></tr>             	                 
          <%	   
          // Transaccion cliente ligero: Control de la paginación
          int zposicion = 0;
          String zposicions = "0";

          %>

          <m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
          <%  
            zposicions = m4lix;
            zposicion = Integer.valueOf(zposicions).intValue();
            zposicion = zposicion - zregistroinicial;
          %>                                  
              <m4:item m4varname="sTitle" m4name="<%=zDOC_TITLE%>" htmlsafe="true"/>
              <m4:item m4varname="sIdSignMode" m4name="<%=zID_SIGN_MODE%>"/>
              <m4:item m4varname="sIdWkItemOrd" m4name="<%=zID_WORKITEM_ORDINAL%>" m4format="#0.#"/>
              <m4:item m4varname="zSignedResult" m4name="<%=zSIGNED%>" m4format="#0.#"/>

             <%

	    // For each file, transfer a copy to the user temporal URI. 
        String sFileWebServer = "", sFileName = "", sFileClientPath = "", sFileClientURI = "",sFileClientURL="";
        try 
        {
          // Session variables
          M4Operations m = new M4Operations(request);
          M4SessionManager m4session = M4Context.getSession(request);
                       
          String usertempfolder = m4session.getPathTempServerWeb(); 
          String usertempuri = m4session.getUserTempURI();
          sFileWebServer = m.getFile(znodoforsigning,zmeta4object,znodoforsigning,zposicions,zItemDOC_CONTENT);
                               
		  if (sTitle != null && sTitle.equals("")) sTitle = Tran_shco_ds.getProperty("Desktop.Doc.NoTitle");               
          java.text.NumberFormat formatter = new java.text.DecimalFormat("#0.#");
          sIdWkItemOrd = formatter.format(new Double (sIdWkItemOrd).doubleValue());

          sFileClientURL = m4session.publishSessionBlob(request, sFileWebServer, false); 
          
		  if (sFileClientURL != null && !sFileClientURL.equals("/")) 
	      {
			  bSuccessMoveFile = true;   
		  }
  
       
        } //try
        catch(Exception e)
        { out.println("Error" + e);  }

       
            
        %> 


        <tr valign="top">
          <td class="fuentecampo" colspan="3">
          <table cellspacing="0" width="100%">
              <tr>
              <td class="fuentecampo" width="1" >
              <%
                if((!bSuccessMoveFile)||(zSignedResult.equals("-1"))){%>

                <table width="100%"  id="error<%=zposicions%>" name="error<%=zposicions%>"	>
                <tr><td><img src="/iconos/advertencia_rojo.gif" 
                <% if(!bSuccessMoveFile){%>
                  alt="<%=Tran_shco_ds.getProperty("SignDocs.Error.ErrorMovingFile")%>"
                <%}else{%> 
                  alt="<%=Tran_shco_ds.getProperty("SignDocs.Error.ErrorSigningFile")%>"
                <%}%>
                /></td></tr>
                </table>
              <%}%>

             </td>
             <td class="fuentecampo" width="98%">
             <input id="chkSign<%=zposicions%>" name="chkSign<%=zposicions%>" type="checkbox" checked="checked" value="T" title="<%=Tran_shco_ds.getProperty("Desktop.Check.SignDesc")%>"/>
             <%=sTitle %>
             </td>   
             </tr>
          </table>
          <input id="signature<%=zposicions%>" name="signature<%=zposicions%>" type="hidden" value="" />
                <input id="doc<%=zposicions%>" name="doc<%=zposicions%>" type="hidden" value="<%=sFileClientURL%>" />
                <input id="sign_mode<%=zposicions%>" name="sign_mode<%=zposicions%>" type="hidden" value="<%=sIdSignMode%>" />
                <input id="ordinal<%=zposicions%>" name="ordinal<%=zposicions%>" type="hidden" value="<%=sIdWkItemOrd%>" />
          </td>
        </tr> 

        <% if(!bSuccessMoveFile){%>
          <script type="text/javascript">
            setErrorFile('<%=zposicions%>')
          </script>

        <%}%>  

           
  </m4:loop>
  </br></br>
</table>
<%}else{%>
    <div class="fuentenodatos"><%=Tran_shco_g0.getProperty("Msg.FilterWithoutData")%></div>
    <br/><br/>
<%}%>
</table>
<%if (zpag.equals("0")== false){%><%@ include file="/shco_g0/shco_gen_disclaimer.jsp"%><%}%>
</body>
</html>