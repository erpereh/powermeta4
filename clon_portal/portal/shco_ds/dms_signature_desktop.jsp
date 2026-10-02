<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: dms_signature_desktop.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="/shco_g0/shco_gen_taglib.jsp" %><html><head><title></title>
<%@ include file="/shco_g0/shco_gen_bag.jsp" %>
<%@ include file="/shco_g0/shco_gen_arg.jsp" %>
<%@ include file="/shco_g0/shco_gen_css.jsp" %>
<%@ include file="/shco_g0/shco_gen_tec_include.jspf" %>

<%

// --- Filtros de la página
//Estado de la firma "1": Pendientes de firma "2":Firmados "3":Rechazados
String zSignStatusFilter = request.getParameter("zSignStatusFilter");
if ((zSignStatusFilter==null)||(zSignStatusFilter.equals(""))) zSignStatusFilter = "1";

//Descripción del documento
String zDocTitleFilter = request.getParameter("zDocTitleFilter");
if ((zDocTitleFilter==null)||(zDocTitleFilter.equals(""))) zDocTitleFilter = "";

//Indica si tenemos aplicado un filtro en el nodo
String ztcRemoveFilter = request.getParameter("ztcRemoveFilter");
if ((ztcRemoveFilter==null)||(ztcRemoveFilter.equals(""))) ztcRemoveFilter = "0";

//Recoger la acción a realizar
String zParamAction =request.getParameter("zParamAction");
if ((zParamAction==null)||(zParamAction.equals(""))) zParamAction = "";


//Recoger si tenemos solicitudes de firma
String zExistSignRequest = request.getParameter("zExistSignRequest");
if ((zExistSignRequest==null)||(zExistSignRequest.equals(""))) zExistSignRequest = "";

String zpag = request.getParameter("zpag");
if ((zpag==null)||(zpag.equals(""))){zpag = "0";}// Pongo a uno para que salga el menu

//Recoger el filtro por documento
 String ztcIdDocFilter=request.getParameter("ID_DOC");
 if (ztcIdDocFilter==null){ztcIdDocFilter = "";}
 
 //Recoger si quiere redirigirse directamente a la firma. Sólo si hay documento de filtrado
 String ztcGotoSign=request.getParameter("ztcGotoSign");
 if ((ztcGotoSign==null)||(ztcIdDocFilter.equals(""))){ztcGotoSign = "";} 

 String ztcURL_Error = request.getParameter("URL_ERROR");
 String ztcURL_Success = request.getParameter("URL_SUCCESS");
   
 
//--- Fin filtros de la página	
String zdireccion = "shco_ds/dms_signature_desktop.jsp";
String zredireccion = "dms_signature_desktop.jsp";	
%>
<%if (zpag.equals("0")== false){%><%@ include file="/shco_g0/shco_gen_menusup.jsp" %><%}%>	
<%@ include file="/shco_g0/shco_gen_js.jsp" %>
<%@ include file="/shco_ds/shco_ds_trans.jsp"%>

<%
String zDesktopLbl = Tran_shco_ds.getProperty("Desktop");
String zTitleLbl = Tran_shco_ds.getProperty("Desktop.title"+zSignStatusFilter);
String zDescLbl = Tran_shco_ds.getProperty("Desktop.desc"+zSignStatusFilter);
String zDescLbl3 = Tran_shco_ds.getProperty("Desktop.desc"+zSignStatusFilter+zSignStatusFilter);
String zDescLbl4 = Tran_shco_ds.getProperty("Desktop.descfilter"); 
%>

 

 
<script type="text/javascript">
var gformDocs= "frmDocs";

function m4AddFilter(){
var valor =m4valor("frmfilter","zDocTitleFilter","","get");
m4valor("oculto","zDocTitleFilter",valor,"set");
m4submit("oculto");
}


function m4RemoveFilter(){
m4valor("oculto","zDocTitleFilter","","set");
m4valor("oculto","ztcRemoveFilter","1","set");
m4submit("oculto");
}

function m4ViewDoc (ipos)
{
    var siddoc =  m4valor(gformDocs,"id_doc"+ipos,"","get");	
    var dNow = new Date(); 
	var swindow = "WindowViewDoc" + dNow.getDay() + dNow.getHours() + dNow.getMinutes() + dNow.getSeconds();
	window.open("/servlet/CheckSecurity/JSP/shco_g0/shco_doc_view.jsp?IDDoc=" + siddoc, swindow,'width=800,height=600,resizable=no,toolbar=no,scrollbars=yes,copyhistory=no,directories=no,status=no');
}

//Generar cadena de envío
// {ID_WORKITEM_ORD1*ACC=SIGN{ID_WORKITEM_ORD1*ACC=REJECT{ID_WORKITEM_ORD3*ACC=REJECT*COMENTARIO=comentario{
// iMode = 1 : Sign  0:Reject
function SignRejectAll(iMode){

   var bExistSignRequest = false; // Marcar si hay peticiones de firma para navegar a la página de firma
   var ParamAction="";
   var sepActions = "{{";
   var bAllOk = true;
   var numreg = parseInt(document.forms[gformDocs].elements["num_reg"].value);
   
   //Si no hay datos nos vamos
   if (numreg == 0)
   {  return;
   }
   
   //recoger el comentario
   var comment = m4valor(gformDocs,"comment","","get");	   
   if (comment != ""){	      
        comment = "*" + "COMMENT=" + comment;
   }else if (iMode == 0) {
      m4showmessage("_sl_shco_ds_0");
	  return;
   }
   
   //Establecer la acción a realizar
   var action ="";
   if (iMode == 0) {
     action = "ACC=REJECT";
   }else{
     action = "ACC=SIGN";
   }
   	
   for (var i = 0; i < numreg; i++){   	
       //Comprobar si el documento está seleccionado  	  
       if (document.forms[gformDocs].elements["chkSignReject"+i].checked == true)
	   {	   
  		   ParamAction = ParamAction + m4valor(gformDocs,"witem_ord"+i,"","get") + "*" + action +comment + sepActions;
	   }
		 
   }//for
   

   //Si hay elementos a firmar/rechazar proceder
   if ( ParamAction!="" ){
      m4valor("oculto","zDocTitleFilter","","set");
   	  m4valor("oculto","zParamAction",ParamAction,"set");
      m4valor("oculto","zExistSignRequest",iMode,"set");
	  m4submit("oculto");
	}

}
//Seleccionar o deseleccionar todos los elementos de la página
function SelectUnSelectAll()
{
   var numreg = parseInt(document.forms[gformDocs].elements["num_reg"].value);
   var bChecked = document.forms[gformDocs].elements["chkSignAll"].checked;	  
   for (var i = 0; i < numreg; i++){  
      document.forms[gformDocs].elements["chkSignReject"+i].checked = bChecked;
	}
}

function valores()
{
  m4submit("oculto");
}

function signRequest()
{
 //Ir a firmar
  m4submit("frmSign");
}

</script>

<title> <%=zDesktopLbl%></title>
</head>
<script type="text/javascript">m4settitle('<%=zDesktopLbl%>');</script>
<body onclick="meta4Cookie.Cookie.setEventCookie();" onkeypress="meta4Cookie.Cookie.setEventCookie();">

<%
   String zsubsesion = "SRTC_DS_M4_DESKTOP_HTML";
   String zmeta4object = "SRTC_DS_M4_DESKTOP_HTML";
   String znodoprincipal = "SRTC_DS_M4_DESKTOP_HTML_ROOT";
   String zmetodocarga = "SRTC_LOAD:" + zsubsesion + "!" + znodoprincipal + ".SRTC_LOAD";
   String zmetodoAction = "SRTC_ACTION:" + zsubsesion + "!" + znodoprincipal + ".SRTC_ACTION";
   String znodosignpending = "SRTC_DS_SIGN_PENDING_DOC";
   String znodosignrejected = "SRTC_DS_REJECTED_DOC";
   String znodosigned= "SRTC_DS_SIGNED_DOC";
   
   zventanas = "10";												
   zvuelta = 5;	
   int zregistroinicial = Integer.valueOf(zinicio).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodosignpending + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodosignpending + ":" +  znodosignpending + "[" + zregistroinicial + "]";
   String zraiz = znodosignpending + ":" + zsubsesion + "!" + znodosignpending + ".";
   String zcomun = znodosignpending + ":" + zsubsesion + "!" + znodosignpending + "[&VAR.m4lix]" + ".";

   String zID_WORKITEM_ORD = zcomun + "ID_WORKITEM_ORD";
        
   String zItemSIGN_SEND_DATE = "DT_INSTANTIATION";
   String zSIGN_SEND_DATE = zcomun + zItemSIGN_SEND_DATE; 
   String zLabelSIGN_SEND_DATE = zraiz + zItemSIGN_SEND_DATE;
   
   String zItemSIGN_LIMIT_DATE = "DT_DEADLINE";
   String zSIGN_LIMIT_DATE = zcomun + zItemSIGN_LIMIT_DATE;
   String zLabelSIGN_LIMIT_DATE   = zraiz + zItemSIGN_LIMIT_DATE;
    
   String zItemDOC_TITLE = "DOC_TITLE";
   String zDOC_TITLE = zcomun + zItemDOC_TITLE;   
   String zLabelDOC_TITLE   = zraiz + zItemDOC_TITLE; 
   
   String zItemID_DOC = "ID_MANAGE_DOCUMENT";
   String zID_DOC = zcomun + zItemID_DOC;   
   
   String zMeta4PlataformActive = "1";
   String zCheckPlataformActive ="1";  

 %>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
     <m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
     
     <%try {
     	    M4Operations m = new M4Operations(request); 
     		m.setItem(zsubsesion,znodoprincipal,"","SIGN_STATUS_FILTER",zSignStatusFilter);
     		m.setItem(zsubsesion,znodoprincipal,"","DOC_ID_FILTER",ztcIdDocFilter);
     		} catch(Exception e) {}
        %>

     <%//*** Filtrar por documento y solicitar firma sin mostrar portafirmas
     //******************************************************************** 
     // Si estamos filtrando por un documento y queremos redirección sin mostrar el portafirmas
     // Cargamos filtrando por el documento y luego se ejecuta la acción
     if ((ztcGotoSign.equals("1"))&& (!ztcIdDocFilter.equals(""))){
	      	 zParamAction = "1*ACC=SIGN{{";
             zExistSignRequest="1"; %>	
             <m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
     <%}%>	  	         
     <%//*** Ya se ha solicitado firma de documentos
     //********************************************************************      
     // si tenemos firmas pendientes ejecutamos la acción 
	 // Sólo hay que recargar si estamos rechazando (zExistSignRequest="0")
	 String ztcReloadData = "1"; 
     if (!zParamAction.equals("")){	    
	     zCheckPlataformActive = "0";
		  //No recargar si se va a firmar en la siguinete ventana 
		  if (zExistSignRequest.equals("1")){
		     ztcReloadData="0";			 
		  }%>
		 <m4:exec m4method="<%=zmetodoAction%>"><m4:param name="PARAM_ACTION" value="<%=zParamAction%>"/></m4:exec>
     <%}
	 if (ztcReloadData.equals("1")){
	    //** Carga de los documentos pendientes de firma con posible filtro de título
        String strFilterPendingDocs =zsubsesion + "!" + znodosignpending + ".DOC_TITLE_FILTER";
        String strM4Filter="";%>
        <m4:exec m4method="<%=zmetodocarga%>">/></m4:exec>
		<%if (ztcRemoveFilter.equals("1")){%>   
           <m4:removefilter m4name="<%=strFilterPendingDocs%>"/>		
    		<%ztcRemoveFilter="0";%>
		<%}%>
		
       <%if (zSignStatusFilter.equals("1") && !zDocTitleFilter.equals("")){
            strM4Filter="IF strin(ConvertCase(DOC_TITLE,lowercase), ConvertCase(\"" + zDocTitleFilter + "\" ,lowercase))<> M4_ERROR THEN RETURN(1)";  
        %>		
           <m4:filter m4name="<%=strFilterPendingDocs%>" m4filter="<%=strM4Filter%>"/>
	       <%ztcRemoveFilter="1";%>                       
       <%}%>	   
	 <%}%>
	 <m4:outputdef m4alias="<%=znodosignpending%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>  
<m4:endjob/>

<%if (zCheckPlataformActive.equals("1")){%>
 <m4:outputexec m4alias="SRTC_LOAD" var="zMeta4PlataformActive"/>
<%}

if ((zMeta4PlataformActive==null)||(zMeta4PlataformActive.equals(""))) zMeta4PlataformActive = "1"; 
if (zMeta4PlataformActive.equals("-2")){%>

      <div id="capa_cuerpo" style="position:relative; left:1%; top:80%; width:100%; height:0%; z-index:2">
      <table cellpadding="0" cellspacing="0" height="100%" width="100%">
      <tr><td align="center">
  	    <table cellpadding="0" cellspacing="0" >
        <tr class="fuenteactualizar"><td align="center"></td> </tr>
        <tr class="fuenteactualizar2"><td align="center"> <%=Tran_shco_ds.getProperty("Desktop.Meta4SignPlatformNotActive")%></td></tr>
        </table>
	  </td></tr>	
      </table>
  
	  </div>

<%}else{%>
	  
  <form id="frmSign" name="frmSign" action="/servlet/CheckSecurity/JSP/shco_ds/dms_sign_documents.jsp" method="post">
  <input type="hidden" id="zsubsesion" name="zsubsesion" value="<%=zsubsesion%>" />
  <input type="hidden" id="zpag" name="zpag"  value="<%=zpag%>" />
  <input type="hidden" id="ztcURL_Error" name="ztcURL_Error"  value="<%=ztcURL_Error%>" />
  <input type="hidden" id="ztcURL_Success" name="ztcURL_Success"  value="<%=ztcURL_Success%>" />
  <input type="hidden" id="ztcIdDocFilter" name="ztcIdDocFilter"  value="<%=ztcIdDocFilter%>" />
  </form>
  
  <%if (!zParamAction.equals("") && zExistSignRequest.equals("1")){%>  
     <script type="text/javascript">signRequest();</script>     
  <%}else{
  
  
  	int  zcounti  = 0;
  	int  zcount  = 0;	
  	try {
  		M4Operations m = new M4Operations(request);
  		zcounti = m.getCountInClient(znodosignpending,zsubsesion,znodosignpending);
  		zcount = m.getCount(znodosignpending,zsubsesion,znodosignpending);		
  	} catch(Exception e) {}
  	String	zcountv = String.valueOf(zcounti);
	
  %>

    <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
  
  <form id="oculto" name="oculto" action="/servlet/CheckSecurity/JSP/shco_ds/dms_signature_desktop.jsp" method="post">
  <input type="hidden" id="zParamAction" name="zParamAction" value="" />
  <input type="hidden" id="zsubsesion" name="zsubsesion" value="<%=zsubsesion%>" />
  <input type="hidden" id="zinicio" name="zinicio"  value="" />
  <input type="hidden" id="zSignStatusFilter" name="zSignStatusFilter"  value="<%=zSignStatusFilter%>" />
  <input type="hidden" id="zDocTitleFilter" name="zDocTitleFilter"  value="<%=zDocTitleFilter%>" />
  <input type="hidden" id="zpag" name="zpag"  value="<%=zpag%>" />
  <input type="hidden" id="zExistSignRequest" name="zExistSignRequest"  value="" />
  <input type="hidden" id="ztcRemoveFilter" name="ztcRemoveFilter"  value="<%=ztcRemoveFilter%>" />
  <input type="hidden" id="ID_DOC" name="ID_DOC"  value="<%=ztcIdDocFilter%>" />
  <input type="hidden" id="URL_ERROR" name="URL_ERROR"  value="<%=ztcURL_Error%>" />
  <input type="hidden" id="URL_SUCCESS" name="URL_SUCCESS"  value="<%=ztcURL_Success%>" /> 

  </form>
     
     
     
     <table width="100%" cellspacing="0">
     <tr>	<td class="titulofuncional" colspan="2"> <%=zDesktopLbl%></td></tr>
     <tr><td><img alt=<%=zTitleLbl%> <%@include file="../files_gif/img_signature_desktop.jsp"%> /></td>
     	<td>
     	   <table><tr><td>&nbsp;</td></tr>
     	   		  <tr><td><div class="descripcionfuncional"><%=zDescLbl%></div></td></tr>
       	          <tr><td><div class="descripcionfuncional"><%=zDescLbl3%></div></td></tr>	   
        	          <tr><td><div class="descripcionfuncional"><%=zDescLbl4%></div></td></tr>
     			  <tr><td>&nbsp;</td></tr>
     	   </table>
     	</td>
     </tr>
     </table>
     <table width="100%" cellspacing="0">
     <tr><td class="tablaestadosceldatitulo" colspan="6">&nbsp;<%=Tran_shco_ds.getProperty("Desktop.Label.FilterDocs")%> </td></tr>
     <tr><td class="fuentecampo"> &nbsp;</td></tr>
     <tr>
     	<td class="fuentecampo" >
     	<form id="frmfilter" name="frmfilter" action="">	
     	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=Tran_shco_ds.getProperty("Desktop.Label.TitleFilter")%>&nbsp;
     	<input title="<%=Tran_shco_ds.getProperty("Desktop.Label.FilterDesc")%>" size="35" id="zDocTitleFilter" name="zDocTitleFilter" type="text" maxlength="40" value="<%=zDocTitleFilter%>" />
     	<a href="javascript:m4AddFilter();" title="<%=Tran_shco_ds.getProperty("Desktop.Label.Filter")%>"> 
  	   <img alt="<%=Tran_shco_ds.getProperty("Desktop.Button.StablishFilter")%>" <%@include file="../files_gif/ic_new_filter.jsp"%> /></a>
     	<a href="javascript:m4RemoveFilter();" title="<%=Tran_shco_ds.getProperty("Desktop.Label.RemoveFilter")%>">
  	   <img alt="<%=Tran_shco_ds.getProperty("Desktop.Label.RemoveFilter")%>" <%@include file="../files_gif/ic_remove_filter.jsp"%>/></a>	
     	</form>
     	</td>	
     </tr>  
 	  <tr><td class="fuentecampo" >&nbsp;</td></tr>
     </table>  
     </br>	 

     <form name="frmDocs" id="frmDocs" action=" ">	 
	 <table width="100%" cellspacing="0">     
	 <tr><td class="tablaestadosceldatitulo" colspan="5"><%=zTitleLbl%>&nbsp;(&nbsp;<%=String.valueOf(zcounti) + " / " + String.valueOf(zcount)%>&nbsp;)&nbsp;</td></tr>
	  <tr><td class="fuentecampo" >&nbsp;</td></tr>
	  <tr>
	  <td class="fuentecampo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	
      <button title="<%=Tran_shco_ds.getProperty("Desktop.Check.SignAll")%>" class="tablaestadosceldatitulo" id="btnSign" name="btnSign" type="button" 
	     onclick="javascript:SignRejectAll(1);">&nbsp;<%=Tran_shco_ds.getProperty("Desktop.Check.SignAll")%>   &nbsp;</button>&nbsp;&nbsp;
      <button title="<%=Tran_shco_ds.getProperty("Desktop.Check.RejectAll")%>" class="tablaestadosceldatitulo" id="btnSign" name="btnSign" type="button" 
	     onclick="javascript:SignRejectAll(0);">&nbsp;<%=Tran_shco_ds.getProperty("Desktop.Check.RejectAll")%>   &nbsp;</button>&nbsp;&nbsp;	 
	 </td>	   	  	       
     </tr>  
	    
	 <tr><td class="fuentecampo" colspan="2">&nbsp;</td></tr>
	 <tr>
     	<td class="fuentecampo" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=Tran_shco_ds.getProperty("Desktop.Label.Comment")%>
     	<input size="100" id="comment" name="comment" type="text" maxlength="255" title="<%=Tran_shco_ds.getProperty("Desktop.Label.AddComment")%>"/>
     	</td>
     </tr>	
	 <tr><td class="fuentecampo" colspan="2">&nbsp;</td></tr>
	 </table>
	 </br>	   
     <table width="100%" cellspacing="0">     
	 <tr>
	 <td class="tablaestadosceldatitulo" width="5%">&nbsp;&nbsp;&nbsp;		
	   <% if (zcounti > 0){ %>		    
   		<input id="chkSignAll" name="chkSignAll" type="checkbox" value="T"
   		onclick="javascript:SelectUnSelectAll();" title="<%=Tran_shco_ds.getProperty("Desktop.Check.SelectAll")%>"/>
	   <%}%>									 														
     </td>		
 	 <td class="tablaestadosceldatitulo" width="15%"><m4:label m4name="<%=zLabelSIGN_SEND_DATE%>"  htmlsafe="true"/></td>
	 <td class="tablaestadosceldatitulo" width="15%"><m4:label m4name="<%=zLabelSIGN_LIMIT_DATE%>" htmlsafe = "true"/></td>
	 <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zLabelDOC_TITLE%>" htmlsafe="true"/></td> 
	 </tr>	 	   
	 <input id="num_reg" name="num_reg" type="hidden" value="<%=zcountv%>" />
	    
     <% if (zcounti > 0) {
     String zregistroinicials = String.valueOf(zregistroinicial);
   	 String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1); 
     int zposicion = 0;
     String zposicions = "0";
	 String zpos ="";
	 int zdiv = 0;
     %>
     
     <m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
     <% zposicions = m4lix;
     	zposicion = Integer.valueOf(zposicions).intValue();
      	zposicion = zposicion - zregistroinicial;
		zdiv = zposicion%2;zpos="";if (zdiv==0){zpos="2";}	
     %>
        
     <m4:item m4varname="dtSignSendDate" m4name="<%=zSIGN_SEND_DATE%>" m4format="<%=zdateformat%>"/>
     <m4:item m4varname="dtSignLimitDate" m4name="<%=zSIGN_LIMIT_DATE%>" m4format="<%=zdateformat%>"/>
     <m4:item m4varname="zDocTitle" m4name="<%=zDOC_TITLE%>" htmlsafe="true"/>
     <%if (zDocTitle != null && zDocTitle.equals("")) zDocTitle = Tran_shco_ds.getProperty("Desktop.Doc.NoTitle");%>
				   
	
	 <tr>
    	 <input id="witem_ord<%=zposicion%>" name="witem_ord<%=zposicion%>" type="hidden" value="<m4:item m4name="<%=zID_WORKITEM_ORD%>" />" />
		 <input id="id_doc<%=zposicion%>" name="id_doc<%=zposicion%>" type="hidden" value="<m4:item m4name="<%=zID_DOC%>" />" />	     
		 <td class="fuentevalor<%=zpos%>" width="5%">&nbsp;&nbsp;				    
     		<input id="chkSignReject<%=zposicion%>" name="chkSignReject<%=zposicion%>" type="checkbox" value="T"
     		title="<%=Tran_shco_ds.getProperty("Desktop.Check.SignRejectDesc")%>"/>								     														
      	 </td>							
	 	 <td class="fuentevalor<%=zpos%>" width="15%"><%=dtSignSendDate%></td>
		 <td class="fuentevalor<%=zpos%>" width="15%"><%=dtSignLimitDate%></td>	
		 <td class="fuentevalor<%=zpos%>"><a href="javascript:m4ViewDoc('<%=zposicion%>');" title="<%=Tran_shco_ds.getProperty("Desktop.Label.ViewDoc")%>"><%=zDocTitle%></a></td>      	
	 </tr>
	 
	 </m4:loop>
     
    
     <%@ include file="/shco_g0/shco_gen_vent_post.jsp" %>
     <%}else{%>
	   <tr> <td class="fuentenodatos" colspan="4">&nbsp;</td></tr>
  	   <tr> <td class="fuentenodatos" colspan="4">
	   <%if (!zDocTitleFilter.equals("")){ %>
            <%=Tran_shco_ds.getProperty("Desktop.Label.NoDataFoundFilter"+zSignStatusFilter)%>
	   <%}else{%>
	       <%=Tran_shco_ds.getProperty("Desktop.Nodata"+zSignStatusFilter)%>
	   <%}%> 	
	 </td></tr>
     <br/><br/>
     <%}%>
	  </table>
     <%if (zpag.equals("0")== false){%><%@ include file="/shco_g0/shco_gen_disclaimer.jsp"%><%}%>
     </div>
     <m4:endpage/>
     </form>
     
     <form id="frmViewDoc" name="frmViewDoc" action="" method="post">
     <input type="hidden" id="zsubsesion" name="zsubsesion" value="<%=zsubsesion%>" />
     <input type="hidden" id="zIdWkOrd" name="zIdWkOrd" value="" />
     </form>
  
  <%}//-- Hay documentos pendientes%>
 <%} //--- zMeta4PlataformActive ="0"  (Plataforma Meta4 no activa)%>

</body>
</html>





