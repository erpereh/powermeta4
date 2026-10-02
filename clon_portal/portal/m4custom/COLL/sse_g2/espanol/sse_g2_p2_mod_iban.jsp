<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*, java.text.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Modificar otras cuentas bancarias</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/digitocontrol.js"></script> 
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript">
function comprobar_previo(){
var mensaje = "Los siguientes campos no pueden quedar vacios:" + "\n";
var mensaje1 ="";
var falta_valor=0;
var error_dc=0;
v1 = new m4objvalidacion('_num',4,4,'','Campo oligatorio númerico de 4 caracteres',false);
v2 = new m4objvalidacion('_num',2,2,'','Campo oligatorio númerico de 2 caracteres',false);
v3 = new m4objvalidacion('_num',10,10,'','Campo oligatorio númerico de 2 caracteres',false);
var val_bankbranch = m4valor("NombreFormulario","SCO_ID_BANK_BRANCH","","get");

var val_account = m4valor("NombreFormulario","SCO_ACCOUNT_NUMBER","","get");
var val_cant = m4valor("NombreFormulario","SCO_VALUE","","get");
//var val_start = m4valor("NombreFormulario","SCO_DT_START","","get");
var val_pais = m4valor("NombreFormulario","SCO_IBAN_CODE","","get");
var val_ibankey = m4valor("NombreFormulario","SCO_IBAN_KEY","","get");


//m4valor("NombreFormulario","SCO_ID_BANK_BRANCH",val_branch,"set");
/*if ((null==val_start) || (''== val_start)){
	mensaje+="* Fecha de inicio" + "\n";
	falta_valor=1;
	}*/
if ((null==val_cant) || (''== val_cant)){
	mensaje+="* La Cantidad" + "\n";
	falta_valor=1;
	}
if ((null==val_pais) || (''== val_pais)){
	mensaje+="* Código País" + "\n";
	falta_valor=1;
}else{
	if ('ES'== val_pais.toUpperCase()){
	  mensaje+="* El Código País no puede ser ES" + "\n";
	  falta_valor=1;
	}
var val_paymtype = m4valor("NombreFormulario","SCO_ID_PAYM_TYPE","","get");
if (4==val_paymtype || 5 == val_paymtype){
if (paisSeleccionadoSoportaIBAN()) {
	if ((null==val_ibankey) || (''== val_ibankey)){
		mensaje+="* Clave IBAN" + "\n";
		falta_valor=1;
	}
}
if ((null==val_account) || (''== val_account)){
	mensaje+="* Número de cuenta bancaria" + "\n";
	falta_valor=1;
	}
if ((null==val_bankbranch) || (''== val_bankbranch)){
	mensaje+="* Sucursal bancaria" + "\n";
	falta_valor=1;
	}


	}else {
	// cheque, banco
		m4valor("NombreFormulario","SCO_ID_BANK_BRANCH"," ","set");
		m4valor("NombreFormulario","SCO_ID_BANK1"," ","set");
		m4valor("NombreFormulario","SCO_ID_BANK2"," ","set");
		m4valor("NombreFormulario","SSP_DC"," ","set");
		m4valor("NombreFormulario","SCO_ACCOUNT_NUMBER"," ","set");
		}	
	if (1==falta_valor)alert(mensaje);
	else{
		if (1== error_dc)alert(mensaje1);
	}
	if (1!=falta_valor && 1!=error_dc) m4submit("NombreFormulario");
}
}
//--------------------------------------------------------------------------------------------------------------------------------------
function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSE_OTHER_PDATA",ord,"BORRAR","SSE_OTHER_PDATA");
m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}

//--------------------------------------------------------------------------------------------------------------------------------------

function paisSeleccionadoSoportaIBAN() {
	//Indica si el país seleccionado soporta IBAN (true) o no (false). Si no hay país seleccionado, se devuelve false.
	var selectCodigoISOPaisSeleccionado = document.getElementById("SCO_IBAN_CODE_aux");
	var codigoISOPaisSeleccionado = selectCodigoISOPaisSeleccionado.options[selectCodigoISOPaisSeleccionado.selectedIndex].value;
	if (codigoISOPaisSeleccionado == null || codigoISOPaisSeleccionado == "") {
		return false;
	}
	var soportaIBAN = document.getElementById("soportaIBAN_" + codigoISOPaisSeleccionado).value;
	if (soportaIBAN == "1") {
		return true;
	} else {
		return false;
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------
function tratarCampoClaveIBAN(listaCountry){
	//En función de si tiene el flag marcado procedente del campo SSP_SOPORTA_IBAN, se habilita/deshabilita el campo.
	var indice = listaCountry.selectedIndex;
	var valor = listaCountry.value;
	var texto = listaCountry.options[indice].text;
	var soportaIBAN = paisSeleccionadoSoportaIBAN();
	//alert(texto + " - " + valor + " - " + soportaIBAN);
	
	if (soportaIBAN) {
		//document.getElementById("SCO_IBAN_KEY").disabled = false;
		document.getElementById("SCO_IBAN_KEY").removeAttribute('readonly');
	} else {
		document.getElementById("SCO_IBAN_KEY").value = "";
		//document.getElementById("SCO_IBAN_KEY").disabled = true;
		document.getElementById("SCO_IBAN_KEY").setAttribute('readOnly','readonly');
	}
	
}

//--------------------------------------------------------------------------------------------------------------------------------------
</script>
<%
		String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
		String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
		String zorden = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_orden");
		
				
		if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
		if ((zinicios==null)||(zinicios.equals(""))){
		 zinicios = "1";
	}
%>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_OTHER_PDATA";
   String zmeta4object = "SSE_OTHER_PDATA";
   String znodo = "SSE_OTHER_PDATA";
   String znodo1 = "M4T_PAYM_FORMULA";
   String znodo2 = "M4T_PAYMENT_TYPE";
   String znodo3 = "M4T_OTHER_PDATA";
   String znodo4 = "M4T_PERSON_BANK";
   String znodo5 = "M4T_RCH_CURRENCY";
   String znodo7 = "M4T_COUNTRY_LIST";
   String ztipocarga = "SSE";   
   String zmoveinicial = znodo4 + "[" + zorden + "]";

// Se parametriza el tamaño que se desea para la ventana

	String zventanas = "10";
	int zvuelta = 5;
	String zdireccion = "sse_g2/sse_g2_p2_mod_iban.jsp";
	String zestado = "21";

// No se modifica en general.

		int zregistroinicial = Integer.valueOf(zinicios).intValue();
		zregistroinicial = zregistroinicial - 1;
		int zventana  = Integer.valueOf(zventanas).intValue();
		int zregistrofinal = zregistroinicial + zventana - 1;
		
		String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
		String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
		String zlectura = zsubsesion + "!" + znodo;
		String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
						
	    String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
	    String zmove1 =znodo1 + ":" +  znodo1 + "[FIRST]";
		String zlectura1 = zsubsesion + "!" + znodo1;
		String zraiz1 =  znodo1 + ":" + zsubsesion  + "!"+ znodo1+"." ;
	    
	    String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
		String zraiz2 = zsubsesion + "!" + znodo2 + ".";
		
		String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
		String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + ".";	
		
		String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
		String zraiz4 = zsubsesion + "!" + znodo4 + ".";
		
		String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
		String zmove5 =znodo5 + ":" +  znodo5 + "[FIRST]";
		String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";
		
	String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";
	String zmove7 =znodo7 + ":" +  znodo7 + "[FIRST]";
	String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&VAR.m4lix]" + ".";
   

// Metodo de carga del Meta4Object generico

   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zBANCOPEND = zcomun  + "SCO_ID_BANK_BRANCH";
   String zCUENTAPEND = zcomun  + "SCO_ACCOUNT_NUMBER";
   String zIBANCODEPEND = zcomun + "SCO_IBAN_CODE";
   String zIBANKEYPEND = zcomun + "SCO_IBAN_KEY";
   String zDCPEND = zcomun  + "SSP_DC";
   String zIDSTANDARDPEND = zcomun + "SCO_ID_STANDARD";
   String zSTARTPEND = zcomun  + "SCO_DT_START";
   String zPAYMTYPE = zcomun  + "SCO_NM_PAYM_TYPE";
   String zIDCURRPEND = zcomun + "SCO_ID_CURRENCY";
   String zNCURRPEND = zcomun  + "NM_CURRENCY";
   String zORDINAL = zcomun  + "ORDINAL";
   String zN_FORMULAPEND = zcomun  + "SCO_NM_PAYMFORMULA"; 
   String zentitledpend = zcomun  + "SCO_ENTITLED";
   String zcant = zcomun  + "SCO_VALUE";
   String zNACCION = zcomun + "N_ACCION";
   String zID_FORMULA = zraiz1 + "SCO_ID_PAY_FORMULA";
   String zN_FORMULA = zraiz1 + "SCO_NM_PAYMFORMULA"; 
   String zPAY_FORM_TP = zcomun + "SSP_PAY_FORM_TP";
   String zID_CURR = zcomun5 + "ID_CURRENCY";
   String zN_CURR = zcomun5 + "NM_CURRENCY"; 
      String zSSE_DT_START = zraiz3 + "SSE_DT_START"; 


%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo7%>"><m4:param name="m4name0" value="<%=zoutputdef7%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="SSE_OTHER_PDATA" value="<%=zmoveinicial%>"/></m4:move>

<%
	//Se calcula la fecha de efecto y se decide si se puede modificar o no ------------------------------------------------- 
	String sFechaEfecto = "";
	String sFechaInicio = "";
			
	try {
		M4Operations t = new M4Operations(request);
		sFechaEfecto = t.getItem(znodo3,zsubsesion,znodo3,zorden,"SSP_FEC_EFECTO");
		sFechaInicio = t.getItem(znodo3,zsubsesion,znodo3,zorden,"SCO_DT_START");
	} catch (Exception e) {}
	
	DateFormat df = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");	//Máscara de fecha/hora larga
	DateFormat dfShort = new SimpleDateFormat("dd-MM-yyyy");	//Máscara de fecha corta
	Date dFechaEfecto = null;
	Date dFechaInicio = null;
	String fechaCorta1 = "";
	String fechaCorta2 = "";
	try {
		dFechaEfecto = df.parse(sFechaEfecto);
		//fechaCorta1 = dfShort.format(dFechaEfecto);
		
		dFechaInicio = df.parse(sFechaInicio);
		//dFechaInicio = new Date();	//hoy
		//fechaCorta2 = dfShort.format(dFechaInicio);
		
	} catch (ParseException e) {}
	
	boolean bPuedeModificarCuenta = true;
	//En el caso de que la fecha de efecto sea posterior a la fecha de inicio de la cuenta, se deberá crear una nueva y no se permitirá modificar.
	if (sFechaEfecto == null || sFechaEfecto.equals("") || dFechaEfecto.after(dFechaInicio)) {
		bPuedeModificarCuenta = false;
	}
	//-----------------------------------------------------------------------------------------------------------------------
%>

<%
String zidbanco = "";
String zidbanco1 = "";
String zidbanco2 = "";
String zibancode = "";
String zibankey = "";
String zformula=""; 
String ziddc="";
String ziddcComplete = "";
String zidaccount="";
String znmcurrency="";
String znmpaymtype="";
String zidcurr="";
String zidpaym="";
String zoraccount="";
String zvalue="";
String zpaymdata="";
String zentitled="";
String zname="";
String zapellidos="";
int zTipoFormPago = -1;

 try {
	M4Operations m = new M4Operations(request);
	zidbanco = m.getItem(znodo3,zsubsesion,znodo3,zorden,"SCO_ID_BANK_BRANCH");
 	zibancode = m.getItem(znodo3,zsubsesion,znodo3,zorden,"SCO_IBAN_CODE");
	zibankey = m.getItem(znodo3,zsubsesion,znodo3,zorden,"SCO_IBAN_KEY");
	zformula = m.getItem(znodo3,zsubsesion,znodo3,zorden,"SCO_ID_PAY_FORMULA");
	String zTipoFormPagoTemp = m.getItem(znodo3,zsubsesion,znodo3,zorden,"SSP_PAY_FORM_TP");
	int i = zTipoFormPagoTemp.indexOf(".");
	zTipoFormPagoTemp = zTipoFormPagoTemp.substring(0,i);
	zTipoFormPago = Integer.parseInt(zTipoFormPagoTemp);
	
	ziddc = m.getItem(znodo3,zsubsesion,znodo3,zorden,"SSP_DC");
	//completar el DC con 0 delante si es necesario
	int j = ziddc.indexOf(".");
	ziddcComplete = ziddc.substring(0,j);
	if (ziddcComplete.length() == 1) {
		ziddcComplete = "0" + ziddcComplete;
	}
	
	zidaccount = m.getItem(znodo3,zsubsesion,znodo3,zorden,"SCO_ACCOUNT_NUMBER");
	zoraccount = m.getItem(znodo3,zsubsesion,znodo3,zorden,"SCO_OR_ACCOUNT");
	znmcurrency = m.getItem(znodo3,zsubsesion,znodo3,zorden,"NM_CURRENCY");
	znmpaymtype = m.getItem(znodo3,zsubsesion,znodo3,zorden,"SCO_NM_PAYM_TYPE");
	zidcurr = m.getItem(znodo3,zsubsesion,znodo3,zorden,"ID_CURRENCY_DATA");
	//zidcurr = m.getItem(znodo3,zsubsesion,znodo3,zorden,"ID_CURRENCY");
	zidpaym = m.getItem(znodo3,zsubsesion,znodo3,zorden,"SCO_ID_PAYM_TYPE");
	zname = m.getItem(znodo3,zsubsesion,znodo3,zorden,"STD_N_FIRST_NAME");
	zapellidos = m.getItem(znodo3,zsubsesion,znodo3,zorden,"STD_N_FAMILY_NAME_1");
	zvalue = m.getItem(znodo3,zsubsesion,znodo3,zorden,"SCO_VALUE");
	zpaymdata = m.getItem(znodo3,zsubsesion,znodo3,zorden,"SCO_OR_PAYMENTDATA");

} catch(Exception e){}

	if ((null==zidbanco)||(""==zidbanco))
	{
		zidbanco = zidbanco1 + zidbanco2;
	}
	else
	{
		zidbanco1  = zidbanco.substring(0,4);
		zidbanco2  = zidbanco.substring(4,8);
	}	
	if ((null==zidaccount)||(""==zidaccount)){
		zidaccount = "";
	}
	if((null==ziddc)||(""==ziddc)){
		ziddc="";
		}
	else{ziddc  = ziddc.substring(0,ziddc.indexOf("."));
		}
	
	if ((zname!=null)||(zapellidos!=null)){
		 zentitled = zname +" "+ zapellidos;
		 }
%>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;	
	int  zcount5  = 0;
	int  zcounti5  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount5 = m.getCount(znodo5,zsubsesion,znodo5);
	    zcounti5 = m.getCountInClient(znodo5,zsubsesion,znodo5);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountv5 = String.valueOf(zcounti5);
%>
<table width="100%">
<tr>
	 <td class="titulofuncional" colspan="2">Modificar otras cuentas bancarias (SEPA)</td>
</tr>
<tr>
	<td><img src="/iconos/noname_beneficiarios_72_100.gif" width="100" height="100" alt="Modificar otras cuentas bancarias"></td>
	<td><div class="fuentedescripcion">Modifica tus otras cuentas bancarias. Ten en cuenta que la fecha en que el cambio ser&aacute; efectivo se calcular&aacute; en funci&oacute;n de los procesos de n&oacute;mina calculados.</div>  
    <ul class="listaenlace">
    <li><a class="enlacefuncional" title="Otras cuentas bancarias" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=2">Otras cuentas bancarias</a></li>
	</ul>
	</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_OTHER_PDATA" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_OTHER_PDATA" />
<input class="fuenteformulario" type="hidden" id="SCO_OR_ACCOUNT" name="SCO_OR_ACCOUNT" value="<%=zoraccount%>" />
<input class="fuenteformulario" type="hidden" id="SCO_OR_PAYMENTDATA" name="SCO_OR_PAYMENTDATA" value="<%=zpaymdata%>" />
<input class="fuenteformulario" type="hidden" id="SCO_ID_PAYM_TYPE" name="SCO_ID_PAYM_TYPE" value="<%=zidpaym%>" />
<input class="fuenteformulario" type="hidden" id="SCO_ID_PAY_FORMULA" name="SCO_ID_PAY_FORMULA" value="<m4:item m4name="<%=zID_FORMULA%>" htmlsafe="true"/>"></input> <!-- Se deberá rellenar seleccionando el beneficiario -->

	<input class="fuenteformulario" type="hidden" id="SCO_VALUE_OLD_PAR" name="SCO_VALUE_OLD_PAR" value="<%=zvalue%>" />
	<input class="fuenteformulario" type="hidden" id="SCO_ID_BANK_BRANCH_OLD_PAR" name="SCO_ID_BANK_BRANCH_OLD_PAR" value="<%=zidbanco%>" />
	<input class="fuenteformulario" type="hidden" id="SSP_DC_OLD_PAR" name="SSP_DC_OLD_PAR" value="<%=ziddc%>" />
	<input class="fuenteformulario" type="hidden" id="SCO_ACCOUNT_NUMBER_OLD_PAR" name="SCO_ACCOUNT_NUMBER_OLD_PAR" value="<%=zidaccount%>" />
	<!-- <input class="fuenteformulario" type="hidden" id="SCO_ID_CURRENCY" name="SCO_ID_CURRENCY" value="<%=zidcurr%>" /> -->
<input class="fuenteformulario" type="hidden" id="SSP_PAY_FORM_TP" name="SSP_PAY_FORM_TP" value="<%=zTipoFormPago%>" />

<input class="fuenteformulario" type="hidden" id="SCO_ID_PAYM" name="SCO_ID_PAYM" value="5"></input> <!-- Transferencia SEPA -->

<input class="fuenteformulario" type="hidden" name="SCO_ID_STANDARD" id="SCO_ID_STANDARD" value=""/>

<table class="tablaestados" width="100%" cellspacing="0" border="0">
<tr class="tablaestadosceldatitulo">
	<td class="tablaestadosceldatitulo" colspan="4">&nbsp;Otras cuentas bancarias</td>
	<td class="tablaestadosceldatitulo" align="right" width="20px">&nbsp;<a title="Otras cuentas bancarias" href="sse_g2_p2.jsp"><img src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;*&nbsp;Inicio</td>
	
	<td class="fuentecampo">
		<!-- <m4:item  item="SSP_FEC_EFECTO" htmlsafe="true" outputdef="<%=znodo3%>"/> -->
		<m4:item  item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodo3%>"/>
	</td>
	
	<td class="fuentecampo">&nbsp;*&nbsp;Titular</td>
	<td class="fuentecampo">&nbsp;
	<input class="fuenteformulario" type="text" name="SCO_ENTITLED" id="SCO_ENTITLED" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zentitled)%>" size="30" title="El titular de la cuenta" readonly="readonly" /></td>
	<td class="fuentecampo">&nbsp;</td> 
</tr>

<tr>
	<td class="fuentevalor">&nbsp;</td>
	<td class="fuentecampo" colspan="4" rowspan="2">
		<table class = "tablaestados" cellpadding="4"  border="0">
			<tr>
				<td class="fuentecampo" align="center">Banco Sucursal</td>
				<td class="fuentecampo" align="center">N&uacute;mero cuenta</td>
			</tr>
			<tr>
				<td class="fuentecampo" align="center">
					<input readonly="readonly" class="fuenteformulario"  type="text" name="SCO_ID_BANK_BRANCH" id="SCO_ID_BANK_BRANCH" value="<%=zidbanco%>" tabindex="4" />
				</td>
				<td class="fuentecampo" align="center">
					<input readonly="readonly" class="fuenteformulario" name="SCO_ACCOUNT_NUMBER" type="text" id="SCO_ACCOUNT_NUMBER" size="20" maxlength="20" value="<%=zidaccount%>" tabindex="5" title="Escribe el c&oacute;digo identificativo de la cuenta bancaria" />
				</td>
			</tr>
		</table>
	</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;*&nbsp;C&oacute;digo bancario</td>
</tr>


<tr>
	<td class="fuentecampo">&nbsp;*&nbsp;C&oacute;digo Pa&iacute;s&nbsp;</td>
	<td class="fuentevalor">
		<!-- <input class="fuenteformulario" name="SCO_IBAN_CODE" type="text" id="SCO_IBAN_CODE" size="2" maxlength="2" value="<%=zibancode%>" tabindex="6" title="Escribe el pais al que pertence la cuenta bancaria" /> -->
		<select disabled onchange="javascript:tratarCampoClaveIBAN(this);" id="SCO_IBAN_CODE_aux" class="fuenteformulario" name="SCO_IBAN_CODE_aux" title="Selecciona el pais al que pertence la cuenta bancaria">
			<option value=""></option>
			<m4:dataloop outputdef="<%=znodo7%>">
				<option 
				<% 	String codigoISO = "";
					try {
						M4Operations m = new M4Operations(request);
						codigoISO = m.getItem(znodo7,zsubsesion,znodo7,"","SSP_CODIGO_ISO");
					} catch(Exception e) {}
				   if (zibancode.equals(codigoISO)) {%>
					selected="selected"
				<% } %>
				value="<m4:item item="SSP_CODIGO_ISO" htmlsafe="true" outputdef="<%=znodo7%>"/>"><m4:item item="STD_N_COUNTRY" htmlsafe="true" outputdef="<%=znodo7%>"/> (<m4:item item="SSP_CODIGO_ISO" htmlsafe="true" outputdef="<%=znodo7%>"/>)</option>
			</m4:dataloop>
				
		</select>
		
		<!-- Un objeto SELECT con estado disabled no se envía en el formulario. Se crea el hidden correspondiente... -->
		<m4:dataloop outputdef="<%=znodo7%>">
			<% 	String codigoISO = "";
				try {
					M4Operations m = new M4Operations(request);
					codigoISO = m.getItem(znodo7,zsubsesion,znodo7,"","SSP_CODIGO_ISO");
				} catch(Exception e) {}
			   if (zibancode.equals(codigoISO)) {%>
				<input class="fuenteformulario" type="hidden" id="SCO_IBAN_CODE" name="SCO_IBAN_CODE" value="<%=codigoISO%>" />
			<% } %>
		</m4:dataloop>
		
		<m4:dataloop outputdef="<%=znodo7%>">
			<input type="hidden" id="soportaIBAN_<m4:item item="SSP_CODIGO_ISO" htmlsafe="true" outputdef="<%=znodo7%>"/>" value="<m4:item item="SSP_SOPORTA_IBAN" htmlsafe="true" outputdef="<%=znodo7%>"/>">
		</m4:dataloop>
	</td>
	<td class="fuentecampo">&nbsp;Clave IBAN</td>
	<td class="fuentevalor" colspan="2">
		<input readonly="readonly" class="fuenteformulario" name="SCO_IBAN_KEY" type="text" id="SCO_IBAN_KEY" size="2" maxlength="2" value="<%=zibankey%>" tabindex="7" title="Escribe el digito de control del IBAN" />
	</td>
</tr>


<tr>
	<td class="fuentecampo">&nbsp;Tipo de importe</td>
	<td class="fuentevalor" colspan="4">
		<input disabled id="SSP_PAY_FORM_TP_fijo" name="SSP_PAY_FORM_TP_fijo" class="fuentevalor1" type="radio" title="Tipo de fórmula de pago" 
			<% if (zTipoFormPago == 1 && zformula != null && zformula != "") { %>checked<% } %>
		/>&nbsp;Fijo
		<input disabled id="SSP_PAY_FORM_TP_porc" name="SSP_PAY_FORM_TP_porc" class="fuentevalor1" type="radio" title="Tipo de fórmula de pago" 
			<% if (zTipoFormPago == 2 && zformula != null && zformula != "") { %>checked<% } %>
		/>&nbsp;Porcentaje
	</td>
</tr>

<% if (zTipoFormPago == 1 || zTipoFormPago == 2) { %> <!-- Si es importe fijo o porcentaje -->
<tr>
	<td class="fuentecampo">&nbsp;*&nbsp;Importe</td>
	<td class="fuentevalor" colspan="4">&nbsp;<input id="SCO_VALUE" name="SCO_VALUE" size="10" maxlength="20" class="fuenteformulario" type="text" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zvalue)%>" tabindex="5" title="Escoge una cantidad" />
	&nbsp;
	<% if (zTipoFormPago == 1) { %>
		<select id="SCO_ID_CURRENCY" class="fuenteformulario" name="SCO_ID_CURRENCY" title="Escoge una moneda">
		<option value="">&nbsp;</option>
		<m4:dataloop outputdef="<%=znodo5%>">
		<option 
				<% 	String idCurrency = "";
					try {
						M4Operations m = new M4Operations(request);
						idCurrency = m.getItem(znodo5,zsubsesion,znodo5,"","ID_CURRENCY");
					} catch(Exception e) {}
				   if (idCurrency.equals(zidcurr)) {%>
					selected="selected"
				<% } %>
		value="<m4:item item="ID_CURRENCY" htmlsafe="true" outputdef="<%=znodo5%>"/>"><m4:item item="NM_CURRENCY" htmlsafe="true" outputdef="<%=znodo5%>"/></option>
		</m4:dataloop>
		</select>
	<% } else if (zTipoFormPago == 2) { %>
		<b>%</b>
	<% } %>
	</td>
</tr>
<% } %>
<tr>
	<td class="fuenteboton" colspan="5">
		<% if (bPuedeModificarCuenta) { %>
			<% if (zformula != null && zformula != "") { %>
				&nbsp;
				<a href="javascript:comprobar_previo();" title="Enviar">
					<img src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
				</a>
			<% } else { %>
				<br />
				<div class="fuentenodatos" align="center">Póngase en contacto con el departamento de Recursos Humanos para asignarle un importe a este beneficiario.</div>
				<br />
			<% } %>
		<% } else { %>
			<br />
			<div class="fuentenodatos" align="center">No es posible modificar los datos de la cuenta bancaria. Por favor, consulte con el departamento de Recursos Humanos.</div>
			<br />
		<% } %>
	</td>
</tr>	
</table>														
</form>
<% if (zcounti > 0) {
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0; %>
<table class = "tablaestados" cellspacing="0"  border="0" width="100%">
 <tr>
	<td class="tablaestadosceldatitulo">&nbsp;</td>
	<td align="left" class = "tablaestadosceldatitulo">Titular</td>
	<td align="left" class = "tablaestadosceldatitulo">Inicio</td>
	<td align="left"class = "tablaestadosceldatitulo" colspan="3">N&uacute;mero de cuenta</td>
	<td align="left" class = "tablaestadosceldatitulo">Tipo de importe</td>
	<td align="left"class = "tablaestadosceldatitulo" colspan="3">Importe</td>
	<td class="tablaestadosceldatitulo">&nbsp;</td>
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
	zcontrol = zposicion%2;
%>
<%if (zcontrol==0){%>
<tr class="fuentevalor">
	<td class="fuentecampoaccion"><m4:item m4name="<%=zNACCION%>" htmlsafe="true"/>&nbsp;</td>	
   <td align="left" class="fuentevalor"><m4:item m4name="<%=zentitledpend%>" htmlsafe="true"/></td>
	<td align="left" class="fuentevalor"><m4:item m4name="<%=zSTARTPEND%>" htmlsafe="true"/></td>
	<td align="left" class="fuentevalor"colspan="3">&nbsp;
	<%
	  	String zidpaympend="";
		String zidstandardpend="";
		String zidbankbranchTEMP = "";
		String zidbank1TEMP = "";
		String zidbank2TEMP = "";
		try {
			M4Operations t = new M4Operations(request);
			zidpaympend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE");
			zidstandardpend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_STANDARD");
			zidbankbranchTEMP = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_BANK_BRANCH");
			zidbank1TEMP = zidbankbranchTEMP.substring(0, 4);
			zidbank2TEMP = zidbankbranchTEMP.substring(4, 8);
		} catch(Exception e) {}
	   if (zidpaympend.equals("4")== true){%>
	   	   <%if (zidstandardpend.equals("")== true){%>
			<!-- <m4:item m4name="<%=zBANCOPEND%>" htmlsafe="true"/>/<m4:item m4name="<%=zDCPEND%>" htmlsafe="true"/>/<m4:item m4name="<%=zCUENTAPEND%>" htmlsafe="true"/> -->
	   	   	   <m4:item m4name="<%=zBANCOPEND%>"/>/<m4:item m4name="<%=zCUENTAPEND%>"/>/<m4:item m4name="<%=zIBANCODEPEND%>"/>/<m4:item m4name="<%=zIBANKEYPEND%>"/>
		   <%} else {%>	
	   	   	   <!-- <m4:item m4name="<%=zBANCOPEND%>"/>/<m4:item m4name="<%=zDCPEND%>"/>/<m4:item m4name="<%=zCUENTAPEND%>"/> -->
			   <%=zidbank1TEMP%>/<%=zidbank2TEMP%>/<m4:item m4name="<%=zDCPEND%>"/>/<m4:item m4name="<%=zCUENTAPEND%>"/>
		   <%}%>
	   <%}%>
	</td>
	<td align="left" class="fuentevalor">
		<% int ztipoimporte = -1;
			
			try {
				M4Operations t = new M4Operations(request);
				String ztipoimporteTEMP = t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP");
				int i = ztipoimporteTEMP.indexOf(".");
				ztipoimporteTEMP = ztipoimporteTEMP.substring(0,i);
				ztipoimporte = Integer.parseInt(ztipoimporteTEMP);
			} catch (Exception e) {}
			
			if (ztipoimporte == 1) { %>
				Fijo
			<% } else if (ztipoimporte == 2) { %>
				Porcentaje
			<% } else { %>
				Otro
			<% } %>
	</td>
	<!-- <td align="left" class="fuentevalor"><m4:item m4name="<%=zN_FORMULAPEND%>"/></td> -->
	<td align="left" class="fuentevalor" colspan="3"><m4:item m4name="<%=zcant%>" htmlsafe="true"/>
		<% if (ztipoimporte == 1) { %>
			<m4:item m4name="<%=zIDCURRPEND%>" htmlsafe="true"/>
		<% } else if (ztipoimporte == 2) { %>
			%
		<% } %>
	</td>
	<td align="right"><a title = "Eliminar la petici&oacute;n" style="CURSOR: hand" href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
	<img alt="Eliminar la petici&oacute;n"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)"/>
	</a></td>
</tr>
<%}else{%>
<tr class="fuentevalor2">
	<td class="fuentecampoaccion2"><m4:item m4name="<%=zNACCION%>" htmlsafe="true"/>&nbsp;</td>
   <td align="left" class="fuentevalor2"><m4:item m4name="<%=zentitledpend%>" htmlsafe="true"/></td>
	<td align="left" class="fuentevalor2"><m4:item m4name="<%=zSTARTPEND%>" htmlsafe="true"/></td>
	<td align="left" class="fuentevalor2"colspan="3">&nbsp;
	<%
	  	String zidpaympend="";
		String zidstandardpend="";
		String zidbankbranchTEMP = "";
		String zidbank1TEMP = "";
		String zidbank2TEMP = "";
		try {
			M4Operations t = new M4Operations(request);
			zidpaympend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE");
			zidstandardpend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_STANDARD");
			zidbankbranchTEMP = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_BANK_BRANCH");
			zidbank1TEMP = zidbankbranchTEMP.substring(0, 4);
			zidbank2TEMP = zidbankbranchTEMP.substring(4, 8);
		} catch(Exception e) {}
	   if (zidpaympend.equals("4")== true){%>
	   	   <%if (zidstandardpend.equals("")== true){%>
			<!-- <m4:item m4name="<%=zBANCOPEND%>" htmlsafe="true"/>/<m4:item m4name="<%=zDCPEND%>" htmlsafe="true"/>/<m4:item m4name="<%=zCUENTAPEND%>" htmlsafe="true"/> -->
			   <m4:item m4name="<%=zBANCOPEND%>"/>/<m4:item m4name="<%=zCUENTAPEND%>"/>/<m4:item m4name="<%=zIBANCODEPEND%>"/>/<m4:item m4name="<%=zIBANKEYPEND%>"/>
		   <%} else {%>	
	   	   	   <!-- <m4:item m4name="<%=zBANCOPEND%>"/>/<m4:item m4name="<%=zDCPEND%>"/>/<m4:item m4name="<%=zCUENTAPEND%>"/> -->
			   <%=zidbank1TEMP%>/<%=zidbank2TEMP%>/<m4:item m4name="<%=zDCPEND%>"/>/<m4:item m4name="<%=zCUENTAPEND%>"/>
		   <%}%>
	   <%}%>
	</td>
	<td align="left" class="fuentevalor2">
		<% int ztipoimporte = -1;
			
			try {
				M4Operations t = new M4Operations(request);
				String ztipoimporteTEMP = t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP");
				int i = ztipoimporteTEMP.indexOf(".");
				ztipoimporteTEMP = ztipoimporteTEMP.substring(0,i);
				ztipoimporte = Integer.parseInt(ztipoimporteTEMP);
			} catch (Exception e) {}
			
			if (ztipoimporte == 1) { %>
				Fijo
			<% } else if (ztipoimporte == 2) { %>
				Porcentaje
			<% } else { %>
				Otro
			<% } %>
	</td>
	<!-- <td align="left" class="fuentevalor2"><m4:item m4name="<%=zN_FORMULAPEND%>"/></td> -->
	<td align="left" class="fuentevalor2" colspan="3"><m4:item m4name="<%=zcant%>" htmlsafe="true"/>
		<% if (ztipoimporte == 1) { %>
			<m4:item m4name="<%=zIDCURRPEND%>" htmlsafe="true"/>
		<% } else if (ztipoimporte == 2) { %>
			%
		<% } %>
	</td>
	<td align="right">
	<a title = "Eliminar la petici&oacute;n" style="CURSOR: hand" href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
	<img alt="Eliminar la petici&oacute;n"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)"/>
	</a></td>
</tr>
<%}%>
</m4:loop>
</table>			
<%@include file="../../sse_generico/espanol/generico_ventanas.jsp"%>
<%}%>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>


