<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_wz_config_step3.jsp
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
int zLoadTypeStep = 3;         // Tipo de carga 
int zIndexWizard  = 2;         // Indice de control
/******************************************************************************************/                                                     
//*****************************************************************************************/
// *MODIFICABLE
String znodoview  = "SHCO_M4THROW_WZ_ADV_OPTIONS";

/*******************************************************************************************/%>
<%@ include file="../../shco_g0/shco_gen_wz_def.jsp" %>
<%@ include file="../../shco_g0/shco_gen_datadef.jsp" %>
<%@ include file="../../shco_g0/shco_gen_wz_act.jsp" %>
<%@ include file="../../shco_rp/shco_m4throw_wz_outputdef_config.jsp" %>

<%
//Identificadores de los items a tratar
String zIdCurrency			= "ID_CURRENCY";
String zIdCurrencyList		= "ID_CURRENCY_VALUES_LIST";
String zExchangeDate		= "EXCHANGE_DATE";
String zExchangeType		= "EXCHANGE_TYPE";
String zExchangeTypeList	= "EXCHANGE_TYPE_VALUES_LIST";
String zEstablishCurrency   = "STABLISH_CURRENCY";
String zEstablishCurrencyCHECK   = zEstablishCurrency + "_CHECK";
String zEnableCurrency		= "CURRENCY_INF_ENABLED";
String zLbCurrencyOpcionts  = "LB_CURRENCY_OPTIONS";


//Identificadores items
String zIdParamsInstancer   = zraiz + zIdParamsInstance;
String zIdCurrencyr			= zraiz + zIdCurrency;
String zIdCurrencyListr		= zraiz + zIdCurrencyList;
String zExchangeDater		= zraiz + zExchangeDate;
String zExchangeTyper		= zraiz + zExchangeType;
String zExchangeTypeListr	= zraiz + zExchangeTypeList;
String zEstablishCurrencyr	= zraiz + zEstablishCurrency;
String zEnableCurrencyr		= zraiz + zEnableCurrency;
String zLbCurrencyOpciontsr = zraiz + zLbCurrencyOpcionts;
%>

<m4:item m4name="<%=zEnableCurrencyr%>" jsafe="true" m4varname="zEnableCurrencyVAL"/>
<m4:item m4name="<%=zEstablishCurrencyr%>" jsafe="true" m4varname="zEstablishCurrencyVAL"/>

 
<%@ include file="../../shco_rp/shco_m4throw_js.jsp" %> 
<%@ include file="../../shco_g0/shco_gen_wz_js.jsp" %>
<%@ include file="../../shco_rp/shco_m4throw_execute_redirect.jsp" %>
<script type="text/javascript" language="Javascript1.5">

var jsTRUE = "TRUE";
var jsFALSE = "FALSE";
var g_LockCurrency = false;
var sForm = 'NombreFormulario';

//Inicializar la ventana con las opciones que vienen del meta4object
function initWindow(){
        
	m4searchoption(m4objeto(sForm,'<%=zIdCurrency%>'),'<m4:item m4name="<%=zIdCurrencyr%>" jsafe="true"/>');
	m4searchoption(m4objeto(sForm,'<%=zExchangeType%>'),'<m4:item m4name="<%=zExchangeTyper%>" jsafe="true"/>');		
	m4valor(sForm,'<%=zExchangeDate%>','<m4:item m4name="<%=zExchangeDater%>" jsafe="true"/>','set');		
	var sCheckVal = ('<%=zEstablishCurrencyVAL%>' == jsTRUE)?"checked":"";
	m4prop(sForm,'<%=zEstablishCurrencyCHECK%>','checked',sCheckVal,'set');

	if ('<%=zEnableCurrencyVAL%>' == jsTRUE && '<%=zEstablishCurrencyVAL%>' == jsTRUE){
		enableCurrencyOptions(jsTRUE);	
	}else{
		enableCurrencyOptions(jsFALSE);	
	}
	
	if ('<%=zEnableCurrencyVAL%>' == jsFALSE){
	   m4lock(sForm,'<%=zEstablishCurrencyCHECK%>','disabled',"LOCK");
	}
}

function enableCurrencyOptions(sEnableCurrencyOptions){
var sLockMode = "";

   //Comming from the check onClick event
    if (typeof(sEnableCurrencyOptions)=="undefined"){
		var bChecked= m4prop(sForm,'<%=zEstablishCurrencyCHECK%>','checked','','get');
		if (bChecked == true){
			sEnableCurrencyOptions = jsTRUE
		}else{
			sEnableCurrencyOptions = jsFALSE
		}
    }

    if (sEnableCurrencyOptions == jsTRUE){
		sLockMode = "UNLOCK";
		g_LockCurrency=false;
	}else{
		sLockMode = "LOCK";
		g_LockCurrency=true;
	}	
    m4lock(sForm,'<%=zIdCurrency%>','disabled',sLockMode);
    m4lock(sForm,'<%=zExchangeType%>','disabled',sLockMode);
    m4lock(sForm,'<%=zExchangeDate%>','disabled',sLockMode);
    m4valor (sForm,'<%=zEstablishCurrency%>',sEnableCurrencyOptions,'set');
}


function val(){
	verr = 1;
    var bChecked = m4prop(sForm,'<%=zEstablishCurrency%>','checked','','get');
    if (bChecked == true){ 
		var sfunciones = "m4valinput('_date',sForm,'<%=zExchangeDate%>',1,'<m4:label m4name="<%=zExchangeDater%>" jsafe="true"/>',sformatofechas)";
		var verr=m4valform(sfunciones);
	}
	if (verr == 1){m4submit(sForm);}
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
String zhelp="SHCO_M4THROW_WZ_CONFIG_STEP3.htm";
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
		<th colspan="2" id="m4tit">&nbsp<m4:label m4name="<%=zLbCurrencyOpciontsr%>" htmlsafe="true"/></th>
	</tr>
</thead>
<tbody>
<tr>
  <td colspan="2" class="campo"> <input type="checkbox" id="<%=zEstablishCurrencyCHECK%>" name="<%=zEstablishCurrencyCHECK%>" 
     tabindex="<%=(zTab + 1)%>" onclick="enableCurrencyOptions();"/>&nbsp;<m4:label m4name="<%=zEstablishCurrencyr%>" htmlsafe="true"/>     
     <input type="hidden" id='<%=zEstablishCurrency%>' name='<%=zEstablishCurrency%>' value="<m4:item m4name="<%=zEstablishCurrencyr%>" htmlsafe="true"/>"/>
  </td>
<tr>
<tr>
   <td class="campo">&nbsp;&nbsp;<m4:label m4name="<%=zIdCurrencyr%>" htmlsafe="true"/></td>      
   <td>
        <script type="text/javascript" language="Javascript1.5">
            m4createselect("<m4:item m4name="<%=zIdCurrencyListr%>" jsafe="true"/>","<%=zIdCurrency%>","<%=(zTab + 1)%>","select90");
        </script>      
        
        
   </td>      
</tr>
<tr>
   <td class="campo">&nbsp;&nbsp;<m4:label m4name="<%=zExchangeTyper%>" htmlsafe="true"/></td>      
   <td>
        <script type="text/javascript" language="Javascript1.5">
            m4createselect("<m4:item m4name="<%=zExchangeTypeListr%>" jsafe="true"/>","<%=zExchangeType%>","<%=(zTab + 1)%>","select90");
        </script>      
   </td>      
</tr>
<tr>
    <td class="campo">&nbsp;&nbsp;<m4:label m4name="<%=zExchangeDater%>" htmlsafe="true"/></td>                        
	<td class="campo">&nbsp;<input type="text" class="form" tabindex="<%=(zTab + 1)%>" type="text" id="<%=zExchangeDate%>" name="<%=zExchangeDate%>"  title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/> <m4:label m4name="<%=zExchangeDater%>" htmlsafe="true"/>" 	    
	   maxlength="10" size="10"/>
	<a tabindex="<%=(zTab + 1)%>" href="javascript:if (g_LockCurrency== true) {m4nothing();}else{m4calendar(m4objeto('NombreFormulario','<%=zExchangeDate%>'));}" >
	<img <%@ include file="../../files_gif/ic_cal.jsp" %> alt="<m4:label m4name="<%=zExchangeDater%>" htmlsafe="true"/>" />
	</a>
      
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
