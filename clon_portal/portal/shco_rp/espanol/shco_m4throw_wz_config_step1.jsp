<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_wz_config_step1.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../../shco_g0/shco_gen_taglib.jsp" %>
<html><head><title></title>
<%@ include file="../../shco_g0/shco_gen_arg.jsp" %>
<%@ include file="../../shco_g0/shco_gen_bag.jsp" %>
<%@ include file="../../shco_g0/shco_gen_css.jsp" %>
<%@ include file="../../shco_g0/shco_gen_tec_include.jspf" %>
<%@ include file="../../shco_rp/shco_m4throw_wz_config_m4def.jsp" %>
<%// Parámetros del M4Object:
zcarril="";
//****************************************************************
// *MODIFICABLE
zventanas = "10";													    
zvuelta = 5;
znivelmenu = request.getParameter("znivelmenu");
if ((znivelmenu==null)||(znivelmenu.equals(""))){znivelmenu = "1";}
															
String zdireccion = "shco_m4throw_wz_config_step1.jsp";	   					
String zredireccion = "shco_m4throw/shco_m4throw_wz_config_step1.jsp";			

//****************************************************************

String zIdParamsInstanceReqVal = request.getParameter(zIdParamsInstance); // Instancia a editar

//Recoge si es nuevo, para habilitar o no la Pk
String znw	= request.getParameter("znw");
if ((znw==null)||(znw.equals(""))){znw = "0";}

String zReOn="class=\"form\"";
if ((znw=="0")||(znw.equals("0"))){zReOn="readonly=\"readonly\" class=\"disabled\"";}

/******************************************************************************************/
// *NO MODIFICABLE
int zLoadTypeStep = 1;         // Tipo de carga 
int zIndexWizard  = 0;         // Indice de control
/******************************************************************************************/                                                     
//*****************************************************************************************/
// *MODIFICABLE
String znodoview  = "SHCO_M4THROW_WZ_OUTPUT_OPTIONS";

/*******************************************************************************************/%>
<%@ include file="../../shco_g0/shco_gen_wz_def.jsp" %>
<%@ include file="../../shco_g0/shco_gen_datadef.jsp" %>

<%try {	
	 M4Operations m = new M4Operations(request);
	 if (zIdParamsInstanceReqVal!="" && (!(zIdParamsInstanceReqVal.equals(""))) && zIdParamsInstanceReqVal!=null){
		m.setItem(zm4object,znodoraiz,"",zIdParamsInstance,zIdParamsInstanceReqVal);
     }
     //Dejar la subsesion guardada en el canal para que sea accesible al resto de pasos
     m.setItem (zm4object,znodoraiz,"",zItemSubsesion,zsubsesion);
     
	
}catch(Exception e) {}
%>


<%@ include file="/shco_g0/shco_gen_wz_act.jsp" %>
<%@ include file="../../shco_rp/shco_m4throw_wz_outputdef_config.jsp" %>
<%
//Identificadores de los items a tratar

String zProcessMode					= "PROCESS_MODE";
String zProcessModeJSExe			= "PROCESS_MODE_JS_EXE_C";
String zProcessModeOnlineExe		= "PROCESS_MODE_ONLINE_EXE_C";
String zProcessModeNotAllowed       = "PROCESS_MODE_NOT_ALLOWED";
String zProcessModeVisible          = "PROCESS_MODE_VISIBLE";

String zFormat							= "OUTPUT_FORMAT";
String zFormatVisualize					= "OUTPUT_FORMAT_VIS_DEF";
String zFormatFileClient				= "OUTPUT_FORMAT_FC_DEF";
String zFormatFileServer				= "OUTPUT_FORMAT_FS_DEF";
String zFormatPrinterClient				= "OUTPUT_FORMAT_PC_DEF";
String zFormatPrinterServer				= "OUTPUT_FORMAT_PS_DEF";
String zFormatList						= "FORMAT_LIST";
String zFormatNotAllowForFileClient		= "OUTPUT_FORMAT_NOT_ALLOWED_FC";
String zFormatNotAllowForFileServer		= "OUTPUT_FORMAT_NOT_ALLOWED_FS";
String zFormatNotAllowForVisualize		= "OUTPUT_FORMAT_NOT_ALLOWED_VIS";
String zFormatNotAllowForPrinterClient	= "OUTPUT_FORMAT_NOT_ALLOWED_PC";
String zFormatNotAllowForPrinterServer	= "OUTPUT_FORMAT_NOT_ALLOWED_PS";

String zOutputType					= "OUTPUT_TYPE";
String zOutputTypePrinterClient		= "OUTPUT_TYPE_PRINTER_CLIENT_C";
String zOutputTypePrinterServer		= "OUTPUT_TYPE_PRINTER_SERVER_C";
String zOutputTypeFileClient		= "OUTPUT_TYPE_FILE_CLIENT_C";
String zOutputTypeFileServer		= "OUTPUT_TYPE_FILE_SERVER_C";
String zOutputTypeVisualize			= "OUTPUT_TYPE_VISUALIZE_C";
String zOutputTypeNotAllowed		= "OUTPUT_TYPE_NOT_ALLOWED";
String zOutputTypeNotAllowedForJSExe = "OUTPUT_NA_FOR_JS_EXE";
String zOutputTypeNotAllowedForOLExe = "OUTPUT_NA_FOR_OL_EXE";
String zOutputTypeOnlineExeDef		= "OUTPUT_TYPE_ONLINE_EXE_DEF";
String zOutputTypeJSExeDef			= "OUTPUT_TYPE_JS_EXE_DEF";

String zIdServerPrinter				= "ID_SERVER_PRINTER";
String zNServerPrinter              = "SERVER_PRINTER_N";
String zServerPrinterDefaultFormat  = "SERVER_PRINTER_FORMAT_DEF";
String zFormatNotAllowForSelectedServerPrinter = "SERVER_PRINTER_FORMAT_NA_LIST";

String zFile						= "FILE";

String zOuputTypeToEnableFileOption = "ENABLE_FILE_OPTION";
String zOuputTypeToEnableIdServerPrinter = "ENABLE_ID_PRINTER_SERVER";


//Identificadores items
String zIdParamsInstancer			= zraiz + zIdParamsInstance;
String zM4ThrowExecuter				=zraiz + zM4ThrowExecute;

String zProcessModer				= zraiz + zProcessMode;
String zProcessModeJSExer			= zraiz + zProcessModeJSExe;
String zProcessModeOnlineExer		= zraiz + zProcessModeOnlineExe;
String zProcessModeNotAllowedr      = zraiz + zProcessModeNotAllowed;
String zProcessModeVisibler         = zraiz + zProcessModeVisible;

String zFormatr				            = zraiz + zFormat;
String zFormatVisualizer				= zraiz + zFormatVisualize;
String zFormatFileClientr				= zraiz + zFormatFileClient;
String zFormatFileServerr				= zraiz + zFormatFileServer;
String zFormatPrinterClientr			= zraiz + zFormatPrinterClient;
String zFormatPrinterServerr			= zraiz + zFormatPrinterServer;
String zFormatListr						= zraiz + zFormatList;
String zFormatNotAllowForFileClientr	= zraiz + zFormatNotAllowForFileClient;
String zFormatNotAllowForFileServerr	= zraiz + zFormatNotAllowForFileServer;
String zFormatNotAllowForVisualizer		= zraiz + zFormatNotAllowForVisualize;
String zFormatNotAllowForPrinterClientr		= zraiz + zFormatNotAllowForPrinterClient;
String zFormatNotAllowForPrinterServerr		= zraiz + zFormatNotAllowForPrinterServer;

String zOutputTyper					= zraiz + zOutputType;
String zOutputTypePrinterClientr	= zraiz + zOutputTypePrinterClient;
String zOutputTypePrinterServerr	= zraiz + zOutputTypePrinterServer;
String zOutputTypeFileClientr		= zraiz + zOutputTypeFileClient;
String zOutputTypeFileServerr		= zraiz + zOutputTypeFileServer;
String zOutputTypeVisualizer		= zraiz + zOutputTypeVisualize;
String zOutputTypeNotAllowedr		= zraiz + zOutputTypeNotAllowed;
String zOutputTypeNotAllowedForJSExer = zraiz + zOutputTypeNotAllowedForJSExe;
String zOutputTypeNotAllowedForOLExer = zraiz + zOutputTypeNotAllowedForOLExe;
String zOutputTypeOnlineExeDefr		= zraiz + zOutputTypeOnlineExeDef;
String zOutputTypeJSExeDefr			= zraiz + zOutputTypeJSExeDef;

String zIdServerPrinterr			= zraiz + zIdServerPrinter;
String zNServerPrinterr				= zraiz + zNServerPrinter;
String zServerPrinterDefaultFormatr = zraiz + zServerPrinterDefaultFormat;
String zFormatNotAllowForSelectedServerPrinterr = zraiz + zFormatNotAllowForSelectedServerPrinter;

String zFiler						= zraiz + zFile;

String zOuputTypeToEnableFileOptionr = zraiz + zOuputTypeToEnableFileOption;
String zOuputTypeToEnableIdServerPrinterr = zraiz + zOuputTypeToEnableIdServerPrinter;

String zNotFormatSelected = "NO_FORMAT";

%>

<%@ include file="../../shco_g0/shco_gen_wz_js.jsp" %>     
<%@ include file="../../shco_rp/shco_m4throw_execute_redirect.jsp" %>
<%@ include file="../../shco_rp/shco_m4throw_js.jsp" %> 

<script type="text/javascript" language="Javascript1.5">

var jsTRUE = "TRUE";
var jsFALSE = "FALSE";
var g_bNotEnableServerPrinterList = true;
var sForm = "NombreFormulario";

//call the click event of the option checked
function callOptionClickEvent (sidform,sidoption){
    var oobjeto = document.forms[sidform].elements[sidoption];		
	var i = 0;
	for (i=0; i<oobjeto.length; i++) {	
	    if (oobjeto[i].checked == true){
	        oobjeto[i].click();
			break;
	    }	     		  
	} 
}

//Inicializar la ventana con las opciones que vienen del meta4object
function initWindow(sProcessModeVisible){

//Set the process-mode
if (sProcessModeVisible == jsTRUE) {
    //Set the process mode
    m4checkradio(sForm,'<%=zProcessMode%>','<m4:item m4name="<%=zProcessModer%>" jsafe="true"/>');
    
    //Disable the not allowed process mode
    m4lockoptions(sForm,'<%=zProcessMode%>','<m4:item m4name="<%=zProcessModeNotAllowedr%>" jsafe="true"/>');
    
   	//Call the click event of the selected process mode, to enable/disable the associated outut-types options	
	callOptionClickEvent(sForm,'<%=zProcessMode%>');
}else{
    //Disable the not allowed outputtype (process mode not allowed included)
    afterProcessModeSelection('','');	
}

//Set the output type	
m4checkradio(sForm,'<%=zOutputType%>','<m4:item m4name="<%=zOutputTyper%>" jsafe="true"/>');	
//Call the click event of the selected output type, to enable/disable the associated options
callOptionClickEvent(sForm,'<%=zOutputType%>');

//Set the output-format
m4checkradio(sForm,'<%=zFormat%>','<m4:item m4name="<%=zFormatr%>" jsafe="true"/>');

window.focus();
}

function afterProcessModeSelection(sOutputTypeNotAllowedForProcessModeList, sDefaultOutputType){
    //Add the not allowed selected by the user
	var sOutputTypeNotAllowedList = sOutputTypeNotAllowedForProcessModeList + '<m4:item m4name="<%=zOutputTypeNotAllowedr%>" jsafe="true"/>';
	m4lockoptions(sForm,'<%=zOutputType%>',sOutputTypeNotAllowedList)	
	
	//Stablish the default ouput for the process-mode
	if (sDefaultOutputType != ''){
		m4checkradio(sForm,'<%=zOutputType%>',sDefaultOutputType);	
		callOptionClickEvent(sForm,'<%=zOutputType%>');
	}

}

function afterServerPrinterSelection(){
    
	sDefaultOutputFormat = m4valor (sForm,'<%=zServerPrinterDefaultFormat%>','','get');
	if (sDefaultOutputFormat == ""){
		sDefaultOutputFormat ='<m4:item m4name="<%=zFormatPrinterServerr%>" jsafe="true"/>';	
	}	
	sOutputFormatNotAllowedList = '<m4:item m4name="<%=zFormatNotAllowForPrinterServerr%>" jsafe = "true"/>';	
	sOutputFormatNotAllowedList =  sOutputFormatNotAllowedList + m4valor ('NombreFormulario','<%=zFormatNotAllowForSelectedServerPrinter%>','','get');
	
    actualizeformattype (sOutputFormatNotAllowedList,sDefaultOutputFormat);
}

//Actualize Output format avalaible and set the default output format.
function actualizeformattype(sOutputFormatNotAllowedList, sDefaultOutputFormat){
  m4lockoptions(sForm,'<%=zFormat%>',sOutputFormatNotAllowedList);
  var bAlreadySelected = false;
  //Test that the output format is enable
  if (sOutputFormatNotAllowedList.indexOf(sDefaultOutputFormat)!=-1){
	   var oObjeto = m4objeto (sForm,'<%=zFormat%>');
	   var i =0; 
	   for (i=0; i<oObjeto.length; i++) {		  
   		  if ((sOutputFormatNotAllowedList.indexOf(oObjeto[i].value)==-1)&&(bAlreadySelected==false)){
   			oObjeto[i].checked = true;
   			bAlreadySelected = true;
   		  }else{
   			oObjeto[i].checked = false;
   		  }
   	   }	   
  }else{m4checkradio(sForm,'<%=zFormat%>',sDefaultOutputFormat);}
  
}

//Actualize window actions after selecting an output type
function afterOutputTypeSelection(sIdOutputType, sOutputFormatNotAllowedList, sDefaultOutputFormat){


   // Bloquear el tipo HTML en Planificación Bug: 93312
	var sProcessMode = m4valor ('NombreFormulario','<%=zProcessMode%>','','get');
	if ( sProcessMode=='<m4:item m4name="<%=zProcessModeJSExer%>" jsafe="true"/>'){	
	   sOutputFormatNotAllowedList += "HTML||"; 
	}
  // OutputFormat   
  actualizeformattype(sOutputFormatNotAllowedList,sDefaultOutputFormat)
  
  //File
  var sLockMode = "";
  if (sIdOutputType == '<m4:item m4name="<%=zOuputTypeToEnableFileOptionr%>" jsafe = "true"/>'){
	sLockMode = "UNLOCK";
	sclass = "form";	
  }else{ 
      sLockMode = "LOCK";
      sclass = "disabled";
  }
  m4lock('NombreFormulario','<%=zFile%>','DISABLED',sLockMode,sclass)
  
  //ServerPrinters
  if (sIdOutputType == '<m4:item m4name="<%=zOuputTypeToEnableIdServerPrinterr%>" jsafe = "true"/>'){
	sLockMode = "UNLOCK";
	sclass = "form";
	g_bNotEnableServerPrinterList=false;
  }else{ 
	sLockMode = "LOCK"; 
	sclass = "disabled";
	g_bNotEnableServerPrinterList=true;
  }
  m4lock(sForm,'<%=zIdServerPrinter%>','DISABLED',sLockMode,sclass);  
}


function val(){
    //var _sl_sp_m4throw_0 = "El campo '&%0&' es obligatorio.";
	var sfunciones = ""
	// If OutputType = PRINTER_SERVER, the ID_PRINTER_SERVER should be selected
	var sOutputType = m4valor ('NombreFormulario','<%=zOutputType%>','','get');
	if ( sOutputType=='<m4:item m4name="<%=zOutputTypePrinterServerr%>" jsafe="true"/>'){	
		sfunciones =  "m4valinput('_alfanum_oblig',sForm,'<%=zIdServerPrinter%>',1,'<m4:label m4name="<%=zIdServerPrinterr%>" jsafe="true"/>')";
	}
	
	if ( sOutputType=='<m4:item m4name="<%=zOutputTypeFileServerr%>" jsafe="true"/>'){	
		sfunciones = "m4valinput('_comentario',sForm,'<%=zFile%>',255,'<m4:label m4name="<%=zFiler%>" jsafe="true"/>')";	
	}
	
	if (sfunciones != "") {
		var verr=m4valform(sfunciones);
	}else {verr=1;}
	
	if (verr == 1){
	    var sFormat = m4valor(sForm,'<%=zFormat%>','','get');
	    if (sFormat != '<%=zNotFormatSelected%>'){
			m4submit(sForm);
		}else{m4showmessage('_oblig','<m4:label m4name="<%=zFormatr%>" jsafe="true"/>');}
	}
}
</script>

<%@ include file="../../shco_g0/shco_gen_wz_nav.jsp" %>
</head><body>
<%@include file="../../shco_g0/shco_gen_title.jsp" %>
<%@include file="../../shco_g0/shco_gen_wz_error.jsp" %>
<div id="capa_link" style="position:absolute; left:0%; top:0%; width:20%; height:0%; z-index:1">
<%@ include file="../../shco_g0/shco_gen_wz_menu.jsp" %></div>
<div id="capa_cuerpo" style="position:relative; left:21%; top:0%; width:78%; z-index:2">
<%
String zvalue = "";
String zhelp="SHCO_M4THROW_WZ_CONFIG_STEP1.htm";
zCol = 4;
zReOn="readonly=\"readonly\" class=\"disabled\"";
%><%@ include file="../../shco_g0/shco_gen_cab.jsp" %>




<form action="<%=path%><%=links[zIndexWizard]%>" method="post" name="NombreFormulario" id="NombreFormulario" >
<input type="hidden" id="TAG" name="TAG" value="<%=zsubsesion%>" />
<input type="hidden" id="ACC" name="ACC" value="ACT" /> 
<input type="hidden" id="NOD" name="NOD" value="<%=znodoview%>" />
<input type="hidden" id="WZINDEX" name="WZINDEX" value="<%=zIndexWizard%>" />
<input type="hidden" id="LOADTYPE" name="LOADTYPE" value="<%=loadtype[zIndexWizard]%>" />
<input type="hidden" id="zredireccion" name="zredireccion" value="<%=zredireccion%>" />
<input type="hidden" id="SHCO_ORDINAL" name="SHCO_ORDINAL" value="-1" />
<input type="hidden" id="SHCO_STATE" name="SHCO_STATE" value="N" />
<input type="hidden" id="X<%=zIdParamsInstance%>" name="X<%=zIdParamsInstance%>" value="<m4:item m4name="<%=zIdParamsInstancer%>" htmlsafe="true" m4format="0"/>" />
<input type="hidden" id="<%=zIdParamsInstance%>" name="<%=zIdParamsInstance%>" value="<m4:item m4name="<%=zIdParamsInstancer%>" htmlsafe="true" m4format="0"/>" />
<input type="hidden" id ="<%=zM4ThrowExecute%>" name="<%=zM4ThrowExecute%>" value="0" />
<input type="hidden" id ="<%=zsubsesionSTR%>" name="<%=zsubsesionSTR%>" value="<%=zsubsesion%>" />


<%//*************************************************************************************************	
// *Tipos de ejecución 
//*************************************************************************************************	%>

<m4:item m4name="<%=zProcessModeVisibler%>" m4varname="g_zProcessModeVisibleVal"/>
<% if (g_zProcessModeVisibleVal.equals("TRUE")){ %>

<table class="form" width="100%" cellspacing="2" border="2">
<thead><tr class="titulo"><th colspan="3">&nbsp;&nbsp;<m4:label m4name="<%=zProcessModer%>" htmlsafe="true"/></th></tr></thead>
<tbody>
 <tr>        
    <td class="campo" colspan="1"><input tabindex="<%=(zTab + 1)%>" type="radio" id="<%=zProcessMode%>" name="<%=zProcessMode%>"    
      value="<m4:item m4name="<%=zProcessModeOnlineExer%>" htmlsafe="true"/>" 
      onclick="afterProcessModeSelection('<m4:item m4name="<%=zOutputTypeNotAllowedForOLExer%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zOutputTypeOnlineExeDefr%>" jsafe="true" htmlsafe="true"/>');" /> 
      &nbsp;<m4:label m4name="<%=zProcessModeOnlineExer%>" htmlsafe="true"/>
    </td>	
    <td class="campo" colspan="2"><input tabindex="<%=(zTab + 1)%>" type="radio" id="<%=zProcessMode%>" name="<%=zProcessMode%>"    
      value="<m4:item m4name="<%=zProcessModeJSExer%>" htmlsafe="true"/>" 
      onclick="afterProcessModeSelection('<m4:item m4name="<%=zOutputTypeNotAllowedForJSExer%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zOutputTypeJSExeDefr%>" jsafe="true" htmlsafe="true"/>');" /> 
      &nbsp;<m4:label m4name="<%=zProcessModeJSExer%>" htmlsafe="true"/>
    </td>	
 </tr>
</tbody>
</table>
<BR/>
<%}%>



<% int zcol=4; %>
<%//*************************************************************************************************	
// *Tipos de salida
//*************************************************************************************************	%>
<table class="form" width="100%"cellspacing="2" border="2">
<thead><tr class="titulo"><th colspan="<%=zcol%>">&nbsp;&nbsp;<m4:label m4name="<%=zOutputTyper%>" htmlsafe="true"/></th></tr></thead>						
<tr>
	<td class="campo" colspan="<%=zcol%>"><input tabindex="<%=(zTab + 1)%>" type="radio" id="<%=zOutputType%>" name="<%=zOutputType%>"    
      value="<m4:item m4name="<%=zOutputTypeVisualizer%>" htmlsafe="true"/>" 
      onclick="afterOutputTypeSelection('<m4:item m4name="<%=zOutputTypeVisualizer%>" htmlsafe="true" jsafe="true"/>','<m4:item m4name="<%=zFormatNotAllowForVisualizer%>" jsafe = "true" htmlsafe="true"/>','<m4:item m4name="<%=zFormatVisualizer%>" jsafe="true" htmlsafe="true"/>');" /> 
      &nbsp;<m4:label m4name="<%=zOutputTypeVisualizer%>" htmlsafe="true"/>
    </td>	
</tr>
<tr>
	<td  colspan="<%=zcol%>"><input tabindex="<%=(zTab + 1)%>" type="radio" id="<%=zOutputType%>" name="<%=zOutputType%>"     
         value="<m4:item m4name="<%=zOutputTypeFileClientr%>" htmlsafe="true"/>" 
         onclick="afterOutputTypeSelection('<m4:item m4name="<%=zOutputTypeFileClientr%>" htmlsafe="true" jsafe="true"/>','<m4:item m4name="<%=zFormatNotAllowForFileClientr%>" jsafe = "true" htmlsafe="true"/>','<m4:item m4name="<%=zFormatFileClientr%>" jsafe="true" htmlsafe="true"/>');" />          
         &nbsp;<m4:label m4name="<%=zOutputTypeFileClientr%>" htmlsafe="true"/></td>	
</tr>
<tr>
	<td  colspan="<%=zcol%>"><input tabindex="<%=(zTab + 1)%>" type="radio" id="<%=zOutputType%>" name="<%=zOutputType%>"    
         value="<m4:item m4name="<%=zOutputTypeFileServerr%>" htmlsafe="true"/>" 
         onclick="afterOutputTypeSelection('<m4:item m4name="<%=zOutputTypeFileServerr%>" htmlsafe="true" jsafe="true"/>','<m4:item m4name="<%=zFormatNotAllowForFileServerr%>" jsafe = "true" htmlsafe="true"/>','<m4:item m4name="<%=zFormatFileServerr%>" jsafe="true" htmlsafe="true"/>');" /> 
         &nbsp;<m4:label m4name="<%=zOutputTypeFileServerr%>" htmlsafe="true"/></td>	
</tr>
<tr>
    <td>&nbsp;</td>
	<td class="campo" colspan="<%=(zcol-3)%>">&nbsp;<m4:label m4name="<%=zFiler%>" htmlsafe="true"/></td>	        
    <td class="valor" colspan="<%=(zcol-2)%>"><input class="form" tabindex="<%=(zTab + 1)%>" type="text" id="<%=zFile%>" name="<%=zFile%>" size="60" maxlength="255" title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/> <m4:label m4name="<%=zFiler%>" htmlsafe="true"/>" value="<m4:item m4name="<%=zFiler%>" htmlsafe="true"/>" /></td>	        
</tr>    	    
 <tr>
	<td  colspan="<%=zcol%>"><input tabindex="<%=(zTab + 1)%>" type="radio" id="<%=zOutputType%>" name="<%=zOutputType%>"    
       value="<m4:item m4name="<%=zOutputTypePrinterClientr%>" htmlsafe="true"/>" 
       onclick="afterOutputTypeSelection('<m4:item m4name="<%=zOutputTypePrinterClientr%>" htmlsafe="true" jsafe="true"/>','<m4:item m4name="<%=zFormatNotAllowForPrinterClientr%>" jsafe = "true" htmlsafe="true"/>','<m4:item m4name="<%=zFormatPrinterClientr%>" jsafe="true" htmlsafe="true"/>');" /> 
       &nbsp<m4:label m4name="<%=zOutputTypePrinterClientr%>" htmlsafe="true"/></td>
 </tr>
<tr>	
	<td class="campo" colspan="<%=zcol%>"><input tabindex="<%=(zTab + 1)%>" type="radio" id="<%=zOutputType%>" name="<%=zOutputType%>"   
    value="<m4:item m4name="<%=zOutputTypePrinterServerr%>" htmlsafe="true"/>" 
    onclick="afterOutputTypeSelection('<m4:item m4name="<%=zOutputTypePrinterServerr%>" htmlsafe="true" jsafe="true"/>','<m4:item m4name="<%=zFormatNotAllowForPrinterServerr%>" jsafe = "true" htmlsafe="true"/><m4:item m4name="<%=zFormatNotAllowForSelectedServerPrinterr%>" jsafe = "true" htmlsafe="true"/>','<m4:item m4name="<%=zFormatPrinterServerr%>" jsafe="true" htmlsafe="true"/>' );afterServerPrinterSelection();" /> 
    &nbsp;<m4:label m4name="<%=zOutputTypePrinterServerr%>" htmlsafe="true"/></td>	
</tr>
<tr>
    <td>&nbsp;</td>
    <td class="campo">&nbsp;*<m4:label m4name="<%=zIdServerPrinterr%>" htmlsafe="true"/></td>                        
	<td class="campo"><input <%=zReOn%> type="text" id="<%=zIdServerPrinter%>" name="<%=zIdServerPrinter%>"  title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/> <m4:label m4name="<%=zIdServerPrinterr%>" htmlsafe="true"/>" 
	   readonly="readonly" 
	    onblur="m4translatelist('shco_rp/shco_m4throw_xml_svr_printers.jsp','shco_rp/shco_m4throw_list_svr_printers.jsp',
                new Array('<%=zIdServerPrinter%>'),
                new Array('<%=zNServerPrinter%>','<%=zFormatNotAllowForSelectedServerPrinter%>','<%=zServerPrinterDefaultFormat%>'));"
         value="<m4:item m4name="<%=zIdServerPrinterr%>" htmlsafe="true"/>" 
	   maxlength="30" size="20"/>
	</td><td class="campo">   
    <input type="hidden"id="<%=zFormatNotAllowForSelectedServerPrinter%>" name="<%=zFormatNotAllowForSelectedServerPrinter%>"
	   value="<m4:item m4name="<%=zFormatNotAllowForSelectedServerPrinterr%>" htmlsafe="true" jsafe="true"/>" />
	<input type="hidden" id="<%=zServerPrinterDefaultFormat%>" name="<%=zServerPrinterDefaultFormat%>" 
	   value="<m4:item m4name="<%=zServerPrinterDefaultFormatr%>" htmlsafe="true"/>"/> 
	<input <%=zReOn%> type="text" id="<%=zNServerPrinter%>" name="<%=zNServerPrinter%>"  title="<m4:label m4name="<%=zNServerPrinterr%>" htmlsafe="true"/>" 
	value="<m4:item m4name="<%=zNServerPrinterr%>" htmlsafe="true"/>" maxlength="50" size="30" />	   
	   <A id="<%=zIdServerPrinter%>LIST"  name="<%=zIdServerPrinter%>LIST" title="" tabIndex="<%=(zTab + 1)%>" 
    href="javascript:if (g_bNotEnableServerPrinterList== true) {m4nothing();}else{m4filtrocallback('shco_rp/shco_m4throw_list_svr_printers.jsp','afterServerPrinterSelection()','<%=zIdServerPrinter%>','<%=zNServerPrinter%>','<%=zFormatNotAllowForSelectedServerPrinter%>','<%=zServerPrinterDefaultFormat%>');}" name="">
    <IMG alt="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/> <m4:label m4name="<%=zNServerPrinterr%>" htmlsafe="true"/>" <%@ include file="../../files_gif/ic_list.jsp"%> /></A>
    </td>
   
    
 	        
</tr>
</table>		


<%//*************************************************************************************************	
// *Formatos de salida
//*************************************************************************************************	%>
<table class="form" width="100%" cellspacing="2" border="2">
<thead><tr class="titulo"><th colspan="6">&nbsp;&nbsp;<m4:label m4name="<%=zFormatr%>" htmlsafe="true"/></th></tr></thead>
<tbody>
 <tr>        
	<script type="text/javascript" language="Javascript1.5">          
    // Crear las opciones de los formatos de salida permitidos
    m4createoptions("<m4:item m4name="<%=zFormatListr%>" jsafe="true"/>","<%=zFormat%>","<%=(zTab + 1)%>");                                                                            
    </script> 
    <%//** No format selected ** %>
    <input type="radio" id="<%=zFormat%>" name="<%=zFormat%>" value ='<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zNotFormatSelected)%>' style="visibility:hidden"/>
    </td>
 </tr>
</tbody>
</table>
<BR/>

<%//***********************************
//Inicializar la ventana
//*************************************
%>
<script type = "text/javascript">	
	initWindow('<%=g_zProcessModeVisibleVal%>');
</script>
<%@ include file="/shco_rp/shco_m4throw_wz_btt.jsp" %>

</tbody></table></form>
<%@ include file="../../shco_g0/shco_gen_error.jsp" %><%}%>
</body></html>

