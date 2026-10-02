<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_wz_config_step2.jsp
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
String zdireccion = "shco_m4throw_wz_config_step2.jsp";	   					
String zredireccion = "shco_m4throw/shco_m4throw_wz_config_step2.jsp";			

//****************************************************************
String zIdParamsInstanceVal = request.getParameter(zIdParamsInstance); // Instancia a editar

//Recoge si es nuevo, para habilitar o no la Pk
String znw	= request.getParameter("znw");
if ((znw==null)||(znw.equals(""))){znw = "0";}

String zReOn="class=\"form\"";
if ((znw=="0")||(znw.equals("0"))){zReOn="readonly=\"readonly\" class=\"disabled\"";}

/******************************************************************************************/
// *NO MODIFICABLE
int zLoadTypeStep = 2;         // Tipo de carga 
int zIndexWizard  = 1;         // Indice de control
/******************************************************************************************/                                                     
//*****************************************************************************************/
// *MODIFICABLE
String znodoview  = "SHCO_M4THROW_WZ_DEVICE_OPTIONS";

/*******************************************************************************************/%>

<%@ include file="../../shco_g0/shco_gen_wz_def.jsp" %>
<%@ include file="../../shco_g0/shco_gen_datadef.jsp" %>
<%@ include file="../../shco_g0/shco_gen_wz_act.jsp" %>
<%@ include file="../../shco_rp/shco_m4throw_wz_outputdef_config.jsp" %>



<%
//Identificadores de los items a tratar
String zBin						= "BIN";
String zBinPCL					= "BINPCL";
String zBinPCLValuesList		= "BINPCL_VALUES_LIST";
String zBinValuesList			= "BIN_VALUES_LIST";
String zCopies					= "COPIES";
String zDuplex					= "DUPLEX";
String zDuplexEscp				= "DUPLEX_ESCP";
String zDuplexValuesList		= "DUPLEX_VALUES_LIST";
String zDuplexValuesListEscp	= "DUPLEX_VALUES_LIST_FOR_ESC";
String zResolution				= "RESOLUTION";
String zResolutionValuesList	= "RESOLUTION_VALUES_LIST";
String zTumble					= "TUMBLE";
String zTumbleValuesList		= "TUMBLE_VALUES_LIST";
String zXFactor					= "FACTOR_X";
String zYFactor					= "FACTOR_Y";
String zApplyColor				= "APPLY_COLOR";
String zApplyColorValuesList	= "APPLYCOLOR_VALUES_LIST";
String zLbEscpOptions			= "LB_ESCP_OPTIONS";
String zLbPclPscOptions 		= "LB_PCL_PSC_OPTIONS";
String zEnableApplyColor	    = "ENABLE_APPLY_COLOR";
String zEnableBin				= "ENABLE_BIN";
String zEnableBinPCL			= "ENABLE_BINPCL";
String zEnableDuplex			= "ENABLE_DUPLEX";
String zEnableDuplexEscp		= "ENABLE_DUPLEX_ESCP";
String zEnableFactorX			= "ENABLE_FACTOR_X";
String zEnableFactorY			= "ENABLE_FACTOR_Y";
String zEnableTumble			= "ENABLE_TUMBLE";
String zEnableResolution		= "ENABLE_RESOLUTION";
String zEnableCopies		    = "ENABLE_COPIES";

//Identificadores items
String zIdParamsInstancer       = zraiz + zIdParamsInstance;
String zBinr					= zraiz + zBin;
String zBinValuesListr			= zraiz + zBinValuesList;
String zBinPCLr					= zraiz + zBinPCL;
String zBinPCLValuesListr		= zraiz + zBinPCLValuesList;
String zCopiesr					= zraiz + zCopies;
String zDuplexr					= zraiz + zDuplex;
String zDuplexEscpr				= zraiz + zDuplexEscp;
String zDuplexValuesListr		= zraiz + zDuplexValuesList;
String zDuplexValuesListEscpr	= zraiz + zDuplexValuesListEscp;
String zResolutionr				= zraiz + zResolution;
String zResolutionValuesListr	= zraiz + zResolutionValuesList;
String zTumbler					= zraiz + zTumble;
String zTumbleValuesListr		= zraiz + zTumbleValuesList;
String zXFactorr				= zraiz + zXFactor;
String zYFactorr				= zraiz + zYFactor;
String zApplyColorr				= zraiz + zApplyColor;
String zApplyColorValuesListr   = zraiz + zApplyColorValuesList;
String zLbEscpOptionsr			= zraiz + zLbEscpOptions;
String zLbPclPscOptionsr		= zraiz + zLbPclPscOptions;
String zEnableApplyColorr	    = zraiz + zEnableApplyColor;
String zEnableBinr				= zraiz + zEnableBin;
String zEnableBinPCLr			= zraiz + zEnableBinPCL;
String zEnableDuplexr			= zraiz + zEnableDuplex;
String zEnableDuplexEscpr		= zraiz + zEnableDuplexEscp;
String zEnableFactorXr			= zraiz + zEnableFactorX;
String zEnableFactorYr			= zraiz + zEnableFactorY;
String zEnableTumbler			= zraiz + zEnableTumble;
String zEnableResolutionr		= zraiz + zEnableResolution;
String zEnableCopiesr			= zraiz + zEnableCopies;


%>


<m4:item m4name="<%=zEnableBinr%>" htmlsafe="true" jsafe="true" m4varname="zEnableBinVAL"/>
<m4:item m4name="<%=zEnableBinPCLr%>" htmlsafe="true" jsafe="true" m4varname="zEnableBinPCLVAL"/>
<m4:item m4name="<%=zEnableDuplexr%>" htmlsafe="true" jsafe="true" m4varname="zEnableDuplexVAL"/>
<m4:item m4name="<%=zEnableTumbler%>" htmlsafe="true" jsafe="true" m4varname="zEnableTumbleVAL"/>
<m4:item m4name="<%=zEnableResolutionr%>" htmlsafe="true" jsafe="true" m4varname="zEnableResolutionVAL"/>
<m4:item m4name="<%=zEnableFactorXr%>" htmlsafe="true" jsafe="true" m4varname="zEnableFactorXVAL"/>
<m4:item m4name="<%=zEnableFactorYr%>" htmlsafe="true" jsafe="true" m4varname="zEnableFactorYVAL"/>
<m4:item m4name="<%=zEnableApplyColorr%>" htmlsafe="true" jsafe="true" m4varname="zEnableApplyColorVAL"/>
<m4:item m4name="<%=zEnableDuplexEscpr%>" htmlsafe="true" jsafe="true" m4varname="zEnableDuplexEscpVAL"/>
<m4:item m4name="<%=zEnableCopiesr%>" htmlsafe="true" jsafe="true" m4varname="zEnableCopiesVAL"/>
<m4:item m4name="<%=zBinr%>" jsafe="true" m4format="0" m4varname="zBinVal"/>
<m4:item m4name="<%=zBinPCLr%>" jsafe="true" m4format="0" m4varname="zBinPCLVal"/>
<m4:item m4name="<%=zBinValuesListr%>" jsafe="true" m4varname= "zBinValuesListVAL"/>
<m4:item m4name="<%=zBinPCLValuesListr%>" jsafe="true" m4varname= "zBinPCLValuesListVAL"/>

<%
String zBinToSearch ="";
String zBinSelectValues = "";
String zBinSelect = "";
if ( zEnableBinPCLVAL.equals("TRUE")){
   zBinSelect = zBinPCL;
   zBinToSearch= zBinPCLVal;
   zBinSelectValues =zBinPCLValuesListVAL;
}else{
   zBinSelect = zBin;
   zBinToSearch= zBinVal;
   zBinSelectValues=zBinValuesListVAL;
}%>   

<%@ include file="../../shco_rp/shco_m4throw_js.jsp" %>
<%@ include file="../../shco_g0/shco_gen_wz_js.jsp" %>
<%@ include file="../../shco_rp/shco_m4throw_execute_redirect.jsp" %>

<script type="text/javascript" language="Javascript1.5">

var jsTRUE = "TRUE";
var jsFALSE = "FALSE";

//Inicializar la ventana con las opciones que vienen del meta4object
function initWindow(){
    sForm = 'NombreFormulario';
    

	m4searchoption(m4objeto(sForm,'<%=zBinSelect%>'),'<%=zBinToSearch%>');
	m4searchoption(m4objeto(sForm,'<%=zDuplex%>'),'<m4:item m4name="<%=zDuplexr%>" jsafe="true"/>');
	m4searchoption(m4objeto(sForm,'<%=zDuplexEscp%>'),'<m4:item m4name="<%=zDuplexEscpr%>" jsafe="true"/>');
	m4searchoption(m4objeto(sForm,'<%=zTumble%>'),'<m4:item m4name="<%=zTumbler%>" jsafe="true"/>');
	m4searchoption(m4objeto(sForm,'<%=zResolution%>'),'<m4:item m4name="<%=zResolutionr%>" jsafe="true" m4format="0"/>');
	m4searchoption(m4objeto(sForm,'<%=zResolution%>'),'<m4:item m4name="<%=zResolutionr%>" jsafe="true" m4format="0"/>');
	
	m4valor(sForm,'<%=zCopies%>','<m4:item m4name="<%=zCopiesr%>" jsafe="true" m4format="0"/>','set');
	m4valor(sForm,'<%=zXFactor%>','<m4:item m4name="<%=zXFactorr%>" jsafe="true" m4format="0"/>','set');
	m4valor(sForm,'<%=zYFactor%>','<m4:item m4name="<%=zYFactorr%>" jsafe="true" m4format="0"/>','set');
	
	m4checkradio (sForm,'<%=zApplyColor%>','<m4:item m4name="<%=zApplyColorr%>" jsafe="true"/>');
	
}


function val(){
	var sfunciones = "m4valinput('_decimal','NombreFormulario','<%=zCopies%>',3,0,'<m4:label m4name="<%=zCopiesr%>" jsafe="true"/>',3,0)";
	sfunciones = sfunciones + "*" + "m4valinput('_decimal','NombreFormulario','<%=zXFactor%>',3,0,'<m4:label m4name="<%=zXFactorr%>" jsafe="true"/>',3,0)";
	sfunciones = sfunciones + "*" + "m4valinput('_decimal','NombreFormulario','<%=zYFactor%>',3,0,'<m4:label m4name="<%=zYFactorr%>" jsafe="true"/>',3,0)";	
	var verr=m4valform(sfunciones);
	if (verr == 1){m4submit('NombreFormulario');}
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
String zhelp="SHCO_M4THROW_WZ_CONFIG_STEP2.htm";
zCol = 4;
String zDisabled ="disabled=\"disabled\" class=\"disabled\"";
String zEnabled="class=\"form\"";
String zClass="";


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


<table class="form" width="100%" cellspacing="2" border="2">
<thead>
	<tr class="titulo">
		<th colspan="3" id="m4tit">&nbsp;<m4:label m4name="<%=zLbPclPscOptionsr%>" htmlsafe="true"/></th>
	</tr>
</thead>
<tbody>
<tr>

   <td class="campo">&nbsp;&nbsp;<m4:label m4name="<%=zBinr%>" htmlsafe="true"/></td>      
   <td colspan="2">
        <script type="text/javascript" language="Javascript1.5">
            m4createselect("<%=zBinSelectValues%>","<%=zBinSelect%>","<%=(zTab + 1)%>","select90");
        </script>
         <%if (zEnableBinVAL.equals("FALSE") && zEnableBinPCLVAL.equals("FALSE")){%>
			<script type="text/javascript" language="text/javascript">
			  m4lock('NombreFormulario','<%=zBin%>','disabled','LOCK');
			</script>
        <%}%>
   </td>   
   
</tr>
<tr>
   <td class="campo">&nbsp;&nbsp;<m4:label m4name="<%=zDuplexr%>" htmlsafe="true"/></td>   
   <td colspan="2">
    <script type="text/javascript" language="Javascript1.5">
        m4createselect("<m4:item m4name="<%=zDuplexValuesListr%>" jsafe="true"/>","<%=zDuplex%>","<%=(zTab + 1)%>","select90");
    </script>
    </td>
     <%if (zEnableDuplexVAL.equals("FALSE")){%>
		<script type="text/javascript" language="text/javascript">
		  m4lock('NombreFormulario','<%=zDuplex%>','disabled','LOCK');
		</script>
    <%}%>
   
 </tr>
<tr>
   <td class="campo">&nbsp;&nbsp;<m4:label m4name="<%=zCopiesr%>" htmlsafe="true"/></td>
     <%if (zEnableCopiesVAL.equals("FALSE")){
		zClass=zDisabled;
    }else{
		zClass=zEnabled;
    }    
    %>
   <td colspan="2"> <input  id="<%=zCopies%>"  name="<%=zCopies%>" size = "10" <%=zClass%> maxlength="3"  value=""></td>	
</tr>
<tr>
	<td class="campo">&nbsp;&nbsp;<m4:label m4name="<%=zTumbler%>" htmlsafe="true"/></td>
	<td colspan="2">
		<script type="text/javascript" language="Javascript1.5">
		     m4createselect("<m4:item m4name="<%=zTumbleValuesListr%>" jsafe="true"/>","<%=zTumble%>","<%=(zTab + 1)%>","select90");
		 </script>
    </td>
     <%if (zEnableTumbleVAL.equals("FALSE")){%>
	 	<script type="text/javascript" language="text/javascript">
	 	  m4lock('NombreFormulario','<%=zTumble%>','disabled','LOCK');
	 	</script>
     <%}%>
</tr>
<tr>
	<td class="campo">&nbsp;&nbsp;<m4:label m4name="<%=zResolutionr%>" htmlsafe="true"/></td>  
	<td colspan="2">
		<script type="text/javascript" language="Javascript1.5">
		    m4createselect("<m4:item m4name="<%=zResolutionValuesListr%>" jsafe="true"/>","<%=zResolution%>","<%=(zTab + 1)%>","select90");
		</script>
	</td>
	 <%if (zEnableResolutionVAL.equals("FALSE")){%>
		<script type="text/javascript" language="text/javascript">
		  m4lock('NombreFormulario','<%=zResolution%>','disabled','LOCK');
		</script>
	<%}%>
	  
</tr>
<tr>
    <td class="campo">&nbsp;&nbsp;<m4:label m4name="<%=zApplyColorr%>" htmlsafe="true"/></td>
    <script type="text/javascript">
	  // Crear las opciones de color
      m4createoptions("<m4:item m4name="<%=zApplyColorValuesListr%>" jsafe="true"/>","<%=zApplyColor%>","<%=(zTab + 1)%>");                              
     </script>       
      <%if (zEnableApplyColorVAL.equals("FALSE")){%>
			<script type="text/javascript" language="text/javascript">
			  m4lock('NombreFormulario','<%=zApplyColor%>','disabled','LOCK');
			</script>
       <%}%>

    
</tr>


</tbody></table>
<BR/>
<table class="form" width="100%" cellspacing="2" border="2">
<thead>
	<tr class="titulo">
		<th colspan="2" id="m4tit">&nbsp;<m4:label m4name="<%=zLbEscpOptionsr%>" htmlsafe="true"/></th>
	</tr>
</thead>
<tbody>
<tr>
   <td class="campo">&nbsp;&nbsp;<m4:label m4name="<%=zDuplexr%>" htmlsafe="true"/></td>       
   <td>
    <script type="text/javascript" language="Javascript1.5">
        m4createselect("<m4:item m4name="<%=zDuplexValuesListEscpr%>" jsafe="true"/>","<%=zDuplexEscp%>","<%=(zTab + 1)%>","select90");
    </script>
    </td>
    <%if (zEnableDuplexEscpVAL.equals("FALSE")){%>
		<script type="text/javascript" language="text/javascript">
		  m4lock('NombreFormulario','<%=zDuplexEscp%>','disabled','LOCK');
		</script>
    <%}%>
		
   
 </tr>
<tr>
  <td class="campo">&nbsp;&nbsp;<m4:label m4name="<%=zYFactorr%>" htmlsafe="true"/></td>
  
    <%if (zEnableFactorYVAL.equals("FALSE")){
		zClass=zDisabled;
    }else{
		zClass=zEnabled;
    }    
    %>
	<td class="valor">&nbsp;<input id="<%=zXFactor%>" name="<%=zXFactor%>" tabindex="1" maxlength="3" <%=zClass%> size="10" value = "180" >
    </td>
</tr>
<tr>
  <td class="campo">&nbsp;&nbsp;<m4:label m4name="<%=zXFactorr%>" htmlsafe="true"/></td>  
  <%if (zEnableFactorXVAL.equals("FALSE")){
		zClass=zDisabled;
    }else{
		zClass=zEnabled;
    }    
  %>
	<td class="valor">&nbsp;<input id="<%=zYFactor%>"' name="<%=zYFactor%>" tabindex="1" <%=zClass%> maxlength="3" size="10" value="60"  >
    </td>
</tr>

<%//***********************************
//Inicializar la ventana
//*************************************
%>
<script type = "text/javascript">	
	initWindow();
</script>

<%@ include file="../shco_m4throw_wz_btt.jsp" %>
</tbody></table></form>
<%@ include file="../../shco_g0/shco_gen_error.jsp" %><%}%>
</body></html>
