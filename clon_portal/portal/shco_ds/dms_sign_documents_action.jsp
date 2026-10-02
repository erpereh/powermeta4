<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: dms_sign_documents_action.jsp
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

  //Si estamos filtrando por un documento permitimos parametrizar la url de error y success  
  String ztcIdDocFilter=request.getParameter("ztcIdDocFilter");  
 if ((ztcIdDocFilter==null)||(ztcIdDocFilter.equals(""))){ztcIdDocFilter = "";}
 
  String ztcURL_Error = request.getParameter("ztcURL_Error");
  if ((ztcURL_Error==null)||(ztcURL_Error.equals(""))||(ztcURL_Error.equals("null"))){ztcURL_Error = "";}		  
  String ztcURL_Success = request.getParameter("ztcURL_Success");
  if ((ztcURL_Success==null)||(ztcURL_Success.equals("null"))||(ztcURL_Success.equals(""))){ztcURL_Success = "";} 

  String zdireccion = "shco_ds/dms_sign_documents.jsp";
  String zdireccion_sd = "shco_ds/dms_signature_desktop.jsp";
  String zdireccion_action = "shco_ds/dms_sign_documents_action.jsp";

  String  ztcCertificate = request.getParameter("ztcCertificate");
%>

<%if (zpag.equals("0") == false){%><%@ include file="/shco_g0/shco_gen_menusup.jsp" %><%}%>	

<%@ include file="/shco_g0/shco_gen_js.jsp" %>
<%@ include file="/shco_ds/shco_ds_trans.jsp"%>


<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title><%= Tran_shco_ds.getProperty("SignDocs.Title.shco_dms_sd_ws") %></title>
<script type="text/javascript">m4settitle('<%=Tran_shco_ds.getProperty("SignDocs.Title.shco_dms_sd_ws")%>');</script>
</head>
<body>

     <table align="center" cellpadding="0" cellspacing="0" id="Processing" name="Processing">
     <tr><td class="fuenteactualizar"><%= Tran_shco_ds.getProperty("SignDocs.Label.shco_dms_sd_processing") %></td></tr>
     <tr><td class="fuenteactualizar2"><%= Tran_shco_ds.getProperty("SignDocs.Label.shco_dms_sd_wait")%>.</td></tr>
	 </table>

<%
    // Recogemos las firmas con las posiciones
	  String sOrdinalID = "ordinal"; 
	  Hashtable oSignatureHash = new Hashtable();
      
	  for (Enumeration e = request.getParameterNames(); e.hasMoreElements();) 
    {

	    String sFormField = e.nextElement().toString();
	    String sOrdinalValue = "";
	    String sSignature = ""; 	    
	    String sCurrentIndex = "0"; 

	    // Para los parametros de tipo ordinal
	    int iFinalPos = sFormField.indexOf(sOrdinalID);
	    if ( iFinalPos != -1 ) 
	    {
	      sOrdinalValue = request.getParameter(sFormField); 
	      sCurrentIndex = sFormField.substring(sOrdinalID.length(), sFormField.length());
	      sSignature = request.getParameter("signature"+sCurrentIndex);
	      oSignatureHash.put(sOrdinalValue, sSignature); 
	    }
	  }
%>


<%
   String zsubsesion = "SRTC_DS_M4_DESKTOP_HTML";
   String zmeta4object = "SRTC_DS_M4_DESKTOP_HTML";
   String znodoprincipal = "SRTC_DS_M4_DESKTOP_HTML_ROOT";
   String znodoforsigning = "SRTC_DS_FOR_SIGNING_DOC";
   String zmethodname = "SRTC_SIGN_DOC_BY_ORDINAL"; 
   
   String zoutputdef = zsubsesion + "!" + znodoforsigning + "[*]";
   String zmove =znodoforsigning + ":" +  znodoforsigning + "[0]";
   String zmetodoBeginSignProcess = "BEGIN_SIGN_PROCESS:" + zsubsesion + "!" + znodoforsigning + ".BEGIN_SIGN_PROCESS";
   String zmetodoEndSignProcess = "END_SIGN_PROCESS:" + zsubsesion + "!" + znodoforsigning + ".END_SIGN_PROCESS";    
 
   // Transaccion cliente ligero: Ejecuto la notificación de la firma por cada documento que han firmado. 

 %>
     <m4:startpage m4task="<%=zsubsesion%>"/>
	 <m4:beginjob/>
	 <m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	
	 <m4:exec m4method="<%=zmetodoBeginSignProcess%>"></m4:exec>
	 
	   <% // Hago una llamada al metodo por cada documento que tengo pendiente
	   
	   String sWorkItemOrdinal = "0";
	   String sSignature = "0";

       java.util.Enumeration oEnum = oSignatureHash.keys();

      while (oEnum.hasMoreElements()){
        sWorkItemOrdinal = (String)oEnum.nextElement();
        sSignature = (String)oSignatureHash.get(sWorkItemOrdinal);
        String zmetodoeffective = zmethodname + sWorkItemOrdinal + ":" + zsubsesion + "!" + znodoforsigning + "." + zmethodname;
		//Si es vacío es que no hay que firmarlo
		if (sSignature != null && !sSignature.equals("")) {
        %>
              
        <m4:exec m4method="<%=zmetodoeffective%>">
          <m4:param name="ARG_ID_WORKITEM_ORD" value="<%=sWorkItemOrdinal%>"/>
          <m4:param name="ARG_SIGNATURE" value="<%=sSignature%>"/>
		  <m4:param name="ARG_ID_CERTIFICATE" value="<%=ztcCertificate%>"/>
        </m4:exec>
                
      <%}}//while%>
     
	 
	 <m4:exec m4method="<%=zmetodoEndSignProcess%>"></m4:exec>	 
     <m4:outputdef m4alias="<%=znodoforsigning%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
	 <m4:endjob/>	  
	 
	 
	  <%	   
	  // Obtener el número de documentos que quedan , bien porque tienen error o están pendientes de firma	   
	    int  zcounti  = 0;
	    int  zcount  = 0;	
		String zSigningResult = "";
	    try {
		    M4Operations m = new M4Operations(request);
		    zcounti = m.getCountInClient(znodoforsigning,zsubsesion,znodoforsigning);
		    zcount = m.getCount(znodoforsigning,zsubsesion,znodoforsigning);
			zSigningResult = m.getItem(znodoforsigning, zsubsesion, znodoforsigning,"", "SIGNING_RESULT");		 
	     } catch(Exception e) {}	    
      %>
	  
	 <%if  (zcounti >0){%>
 	  <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
	 <%}%>
	 
	 	   
	 <script type="text/javascript">
	   //Ocultar el mensaje de processando	   
       document.getElementById("Processing").style.visibility = "hidden";	
	 </script>  
		   
   
	 <table align="center" cellpadding="0" cellspacing="0" class="tablaestados" >
    
	    <% 
	    
	    // Ya he notificado todas las firmas. Si no me queda ningún documento pendiente 
	    // vuelvo a la página dms_signature_desktop.jsp. Si me queda alguno, puedo volver a dms_sign_documents.jsp
	    
		String zRedirectParams = "?zpag=" + zpag;
		
		// ERROR en firma
		//----------------		
	    if (zSigningResult.equals("-1"))
	    {	   		
		     //Si tenemos URL de error nos redirigimos
			 if (!ztcIdDocFilter.equals("") && !ztcURL_Error.equals("")){
			 if (ztcURL_Error.indexOf("?") != -1){
   		        ztcURL_Error = ztcURL_Error + "&";
		     }else{
  		        ztcURL_Error = ztcURL_Error + "?";
		     }
		     ztcURL_Error = ztcURL_Error + "ID_DOC="+ ztcIdDocFilter + "&error=" +Tran_shco_ds.getProperty("SignDocs.Label.shco_dms_sd_errors");
			 %>      
 		          <script language="javascript" type="text/javascript">	  
              		location.replace("<%=ztcURL_Error%>");
                 </script>
		    <%}else{%>
	              <tr><td class="fuenteactualizar"> <%=Tran_shco_ds.getProperty("SignDocs.Label.shco_dms_sd_errors")%></td></tr>
		          <tr><td class="fuenteactualizar"> &nbsp;</td></tr>
		          <tr><td class="fuenteactualizar2">
		             <form><button title="<%=Tran_shco_ds.getProperty("SignDocs.Label.shco_dms_sd_back_to_desktop")%>" class="" id="btnBack" name="btnBack" type="button" 
   	                  onclick="javascript:location.replace('/servlet/CheckSecurity/JSP/shco_ds/dms_sign_documents.jsp'+ '<%=zRedirectParams%>' );">&nbsp;
		             <%=Tran_shco_ds.getProperty("SignDocs.Label.shco_dms_sd_back_to_desktop")%>&nbsp;</button>&nbsp;&nbsp;	 
	                </form>
	                </td></tr>		  		 
	        <%}%>
	   
   		<%//SUCESS en firma
		//----------------
	   }else{
	      //Si tenemos URL de success nos redirigimos
	      if (!ztcIdDocFilter.equals("") && !ztcURL_Success.equals("")){
		     if (ztcURL_Success.indexOf("?") != -1){
   		        ztcURL_Success = ztcURL_Success + "&";
		     }else{
  		        ztcURL_Success = ztcURL_Success + "?";
		     }
		     ztcURL_Success = ztcURL_Success + "ID_DOC="+ ztcIdDocFilter;
		  %>      
		      <script language="javascript" type="text/javascript">	    
          		location.replace("<%=ztcURL_Success%>" );
              </script>
		  <% }else{%>
		   <tr><td class="descripcionfuncional"> <%=Tran_shco_ds.getProperty("SignDocs.Label.shco_dms_sd_success")%></td></tr>
		   <tr><td class="descripcionfuncional"> &nbsp;</td></tr>
		   <tr><td class="fuenteactualizar2">
		   <form><button title="<%=Tran_shco_ds.getProperty("SignDocs.Label.shco_dms_sd_back_to_desktop")%>" class="tablaestadosceldatitulo" id="btnBack" name="btnBack" type="button" 
   	        <%if  (zcounti ==0){%>
				onclick="javascript:location.replace('/servlet/CheckSecurity/JSP/shco_ds/dms_signature_desktop.jsp'+ '<%=zRedirectParams%>');"
			<%}else{%>
			   onclick="javascript:location.replace('/servlet/CheckSecurity/JSP/shco_ds/dms_sign_documents.jsp'+ '<%=zRedirectParams%>');"
			<%}%>			   			
			>&nbsp;<%=Tran_shco_ds.getProperty("SignDocs.Label.shco_dms_sd_back_to_desktop")%>&nbsp;</button>&nbsp;&nbsp;	 
	        </form>
	        </td></tr>	      
	    <%}}%>
	    </table>
	
<% if (zpag.equals("0")== false){%><%@ include file="/shco_g0/shco_gen_disclaimer.jsp"%><%}%>
</body>
</html>


