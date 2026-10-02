<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	
<title> Dar de alta otras cuentas bancarias</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/digitocontrol.js"></script> 
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript">

//--------------------------------------------------------------------------------------------------------------------------------------

function getCheckedValue(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}

//--------------------------------------------------------------------------------------------------------------------------------------

function setCheckedValue(radioObj, newValue) {
	if(!radioObj)
		return;
	var radioLength = radioObj.length;
	if(radioLength == undefined) {
		radioObj.checked = (radioObj.value == newValue.toString());
		return;
	}
	for(var i = 0; i < radioLength; i++) {
		radioObj[i].checked = false;
		if(radioObj[i].value == newValue.toString()) {
			radioObj[i].checked = true;
		}
	}
}

//--------------------------------------------------------------------------------------------------------------------------------------

function habilitar(tipoImporte)
{
	var objCURRENCY = m4elemento('SCO_ID_CURRENCY');
	var objVALUE = m4elemento('SCO_VALUE');
	var objPorcentaje = document.getElementById("texto_porcentaje");
	//tipoImporte toma los valores: 1 (monetario; se muestra la moneda) / 2 (porcentaje; no se muestra la moneda) / otro (no se permite introducir un importe)
	if (tipoImporte == 1) {
		objVALUE.removeAttribute('disabled');	//Habilitar
		objCURRENCY.removeAttribute('disabled');	//Habilitar
		objPorcentaje.innerHTML = "";
	} else if (tipoImporte == 2) {
		objVALUE.removeAttribute('disabled');	//Habilitar
		objCURRENCY.setAttribute('disabled', 'disabled');	//Deshabilitar
		//objPorcentaje.innerHTML = "%";
	} else {
		objVALUE.setAttribute('disabled', 'disabled');	//Dehabilitar
		objCURRENCY.setAttribute('disabled', 'disabled');	//Deshabilitar
		objPorcentaje.innerHTML = "";
	}
}

//--------------------------------------------------------------------------------------------------------------------------------------

function comprobar_previo() {
	var mensaje = "Los siguientes campos no pasan la validación o no están rellenos:" + "\n";
	var mensaje1 =""; 
	var falta_valor=0;
	var error_dc=0;
	v1 = new m4objvalidacion('_num',4,4,'',false);
	v2 = new m4objvalidacion('_num',2,2,'',false);
	v3 = new m4objvalidacion('_num',10,10,'',false);
	var val_bankbranch = m4valor("NombreFormulario","SCO_ID_BANK_BRANCH","","get");
	var val_account = m4valor("NombreFormulario","SCO_ACCOUNT_NUMBER","","get");
	//var val_start = m4valor("NombreFormulario","SCO_DT_START","","get");
	var val_pais = m4valor("NombreFormulario","SCO_IBAN_CODE","","get");
	var val_ibankey = m4valor("NombreFormulario","SCO_IBAN_KEY","","get");
	var val_cant = m4valor("NombreFormulario","SCO_VALUE","","get");
	/*if ((null==val_start) || (''== val_start)){
		mensaje+="* Inicio no está relleno" + "\n";
		falta_valor=1;
		}*/
	if ((null==val_cant) || (''== val_cant)){
		mensaje+="* Importe no está relleno" + "\n";
		falta_valor=1;
		}
var val_benef = m4select("SCO_ID_PERSON","NombreFormulario","value");
var beneselected=m4select("SCO_ID_PERSON","NombreFormulario","text");
	if ((val_benef == null) || (val_benef == "")){
		mensaje+="* Beneficiario no está relleno" + "\n";
		falta_valor=1;
	}else{
		m4valor("NombreFormulario","SCO_ENTITLED",beneselected,"set");
	}
	//var val_paymtype = m4select("SCO_ID_PAYM_TYPE","NombreFormulario","value");
	var val_paymtype = document.getElementById("SCO_ID_PAYM_TYPE").value;
	if ((val_paymtype == null) || (val_paymtype == "")){
		mensaje+="* Forma de pago no está rellena" + "\n";
		falta_valor=1;
	}
	if ('4'==val_paymtype || '5'==val_paymtype){ // tranferencia bancaria / SEPA

		if ((null==val_pais) || (''== val_pais)){
			mensaje+="* Código País no está relleno" + "\n";
			falta_valor=1;
		}else{
			if ('ES'== val_pais.toUpperCase()){
			  mensaje+="* El Código País no puede ser ES" + "\n";
			  falta_valor=1;
			}
		}
		if (paisSeleccionadoSoportaIBAN()) {
			if ((null==val_ibankey) || (''== val_ibankey)){
				mensaje+="* Clave IBAN no está relleno" + "\n";
				falta_valor=1;
			}
		}
		if ((null==val_account) || (''== val_account)){
			mensaje+="* Código cuenta no está relleno" + "\n";
			falta_valor=1;
		}
		if ((null==val_bankbranch) || (''== val_bankbranch)){
			mensaje+="* Banco sucursal no está relleno" + "\n";
			falta_valor=1;
		}
				

	} else {// cheque, banco
		/*m4valor("NombreFormulario","SCO_ID_BANK_BRANCH"," ","set");
		m4valor("NombreFormulario","SCO_ID_BANK1"," ","set");
		m4valor("NombreFormulario","SCO_ID_BANK2"," ","set");
		m4valor("NombreFormulario","SSP_DC"," ","set");
		m4valor("NombreFormulario","SCO_ACCOUNT_NUMBER"," ","set");*/
	}	

	if (1==falta_valor) {
		alert(mensaje);
	} else {
		m4submit("NombreFormulario");
	}
}

//--------------------------------------------------------------------------------------------------------------------------------------

function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSE_OTHER_PDATA",ord,"BORRAR","SSE_OTHER_PDATA");
m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}

//--------------------------------------------------------------------------------------------------------------------------------------

function modificarFormulaPago(idFormulaPago,tipoFormulaPago){
	
	if (idFormulaPago != "" && idFormulaPago != null && tipoFormulaPago != null) {
		//modificar el valor del elemento hidden que contendrá la fórmula de pago
		document.getElementById("SCO_ID_PAY_FORMULA").value = idFormulaPago;
		
		//modificar el radio button que indica el tipo de fórmula de pago
		/*if (tipoFormulaPago == 1) {
			setCheckedValue(document.getElementById("SSP_PAY_FORM_TP"),"1");
		} else if (tipoFormulaPago == 2) {
			setCheckedValue(document.getElementById("SSP_PAY_FORM_TP"),"2");
		} else {
			setCheckedValue(document.getElementById("SSP_PAY_FORM_TP"),"0");
		}*/
	} else {
		//setCheckedValue(document.getElementById("SSP_PAY_FORM_TP"),"1");
	}
	
}

//--------------------------------------------------------------------------------------------------------------------------------------

function paisSeleccionadoSoportaIBAN() {
	//Indica si el país seleccionado soporta IBAN (true) o no (false). Si no hay país seleccionado, se devuelve false.
	var selectCodigoISOPaisSeleccionado = document.getElementById("SCO_IBAN_CODE");
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
		document.getElementById("SCO_IBAN_KEY").disabled = false;
		//document.getElementById("SCO_IBAN_KEY").removeAttribute('readonly');
		document.getElementById("SCO_IBAN_KEY").style.backgroundColor = "#FFFFFF";	//Blanco
	} else {
		document.getElementById("SCO_IBAN_KEY").value = "";
		document.getElementById("SCO_IBAN_KEY").disabled = true;
		//document.getElementById("SCO_IBAN_KEY").setAttribute('readOnly','readonly');
		document.getElementById("SCO_IBAN_KEY").style.backgroundColor = "#DDDDDD";	//Gris
	}
	
}


//--------------------------------------------------------------------------------------------------------------------------------------
</script>
<%   	
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
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
   String znodo6 = "M4T_FAMILY_LIST";
   String znodo7 = "M4T_COUNTRY_LIST";
   
   String ztipocarga = "SSE";   
 // Se parametriza el tamano que se desea para la ventana
	String zventanas = "10";
   int zvuelta = 5;
   String zdireccion = "sse_g2/sse_g2_p2_add_iban.jsp";
   String zestado = "21";
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
	String zmove2 =znodo2 + ":" +  znodo2 + "[FIRST]";
	String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
	
	String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
	String zmove3 =znodo3 + ":" +  znodo3 + "[FIRST]";
	String zlectura3 = zsubsesion + "!" + znodo3;
	String zraiz3 = zsubsesion + "!" + znodo3 + ".";
	String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
	
	String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
	String zmove4 =znodo4 + ":" +  znodo4 + "[FIRST]";
	String zlectura4 = zsubsesion + "!" + znodo4;
	String zraiz4 = zsubsesion + "!" + znodo4 + ".";
	
	String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
	String zmove5 =znodo5 + ":" +  znodo5 + "[FIRST]";
	String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";

	String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
	String zmove6 =znodo6 + ":" +  znodo6 + "[FIRST]";
	String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&VAR.m4lix]" + ".";
	
	String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";
	String zmove7 =znodo7 + ":" +  znodo7 + "[FIRST]";
	String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&VAR.m4lix]" + ".";
   
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
   String zBANCOPEND = zcomun + "SCO_ID_BANK_BRANCH";
   String zCUENTAPEND = zcomun + "SCO_ACCOUNT_NUMBER";
   String zDCPEND = zcomun + "SSP_DC";
   String zSTARTPEND = zcomun + "SCO_DT_START";
   String zPAYMTYPE = zcomun + "SCO_NM_PAYM_TYPE";
   String zIDCURRPEND = zcomun + "SCO_ID_CURRENCY";
   String zNCURRPEND = zcomun + "NM_CURRENCY";
   //String zSCOIDPAYMTYPEPARAMPEND = zcomun + "SCO_ID_PAYM_TYPE_PARAM";
   String zN_FORMULAPEND = zcomun + "SCO_NM_PAYMFORMULA"; 
   String zSSE_PAY_FORM_TP = zcomun + "SSP_PAY_FORM_TP";
   String zentitledpend = zcomun + "SCO_ENTITLED";
   String zcant = zcomun + "SCO_VALUE";
   String zORDINAL = zcomun + "ORDINAL";
   String zNACCION = zcomun + "N_ACCION";
   String zID_FORMULA = zraiz1 + "SCO_ID_PAY_FORMULA";
   String zN_FORMULA = zraiz1 + "SCO_NM_PAYMFORMULA"; 
   String zPAY_FORM_TP = zraiz1 + "SSP_PAY_FORM_TP";
   String zID_FORMA_PAGO = zcomun2 + "SCO_ID_PAYM_TYPE";
   String zN_FORMA_PAGO = zcomun2 + "SCO_NM_PAYM_TYPE";   
   String zID_CURR = zcomun5 + "ID_CURRENCY";
   String zN_CURR = zcomun5 + "NM_CURRENCY"; 
   String zIBANCODEPEND = zcomun + "SCO_IBAN_CODE";
   String zIBANKEYPEND = zcomun + "SCO_IBAN_KEY";
   //Datos de pago de beneficiarios
   String zbID_PAY_FORMULA = zcomun6 + "SSE_ID_PAY_FORMULA"; //fórmula de pago
   String zbPAY_FORM_TP = zcomun6 + "SSE_PAY_FORM_TP";	//tipo de fórmula de pago
   //Fecha de efecto
   String zFEC_EFECTO = zcomun3 + "SSP_FEC_EFECTO";
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo7%>"><m4:param name="m4name0" value="<%=zoutputdef7%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;
	int  zcount2  = 0;
	int  zcounti2  = 0;	
	int  zcount5  = 0;
	int  zcounti5  = 0;		
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
	    zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
	    zcount5 = m.getCount(znodo5,zsubsesion,znodo5);
	    zcounti5 = m.getCountInClient(znodo5,zsubsesion,znodo5);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountv2 = String.valueOf(zcounti2);
	String	zcountv5 = String.valueOf(zcounti5);
%>
<table width="100%">
<tr>
 <td class="titulofuncional" colspan="2">Dar de alta otras cuentas bancarias no nacionales</td>
</tr>
<tr>
 <td valign="top">
	<img src="/iconos/noname_beneficiarios_72_100.gif" width="100" height="100" alt="Dar de alta otras cuentas bancarias">
  </td>
  <td>
	<div class="fuentedescripcion">
	 Agrega una nueva cuenta bancaria no nacional para un beneficiario.<BR>El país al que pertenezca la cuenta debe estar dentro del área <B>SEPA</B> <I>(Single Euro Payments Area)</I> para que la transferencia sea posible. Consulta con el departamento de Recursos Humanos para ampliar cualquier información.
    </div>
    <ul class="listaenlace">
		<li><a class="enlacefuncional" title= "Otras cuentas bancarias"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21">Otras cuentas bancarias</a></li>
	</ul>
  </td>
</tr>
</table>
<table class = "tablaestados" width="100%" cellspacing="0">	
	<tr class = "tablaestadosceldatitulo">
	<td class = "tablaestadosceldatitulo" colspan="4">Otras cuentas bancarias</td>
	<td class="tablaestadosceldatitulo" align="right" width="5px">
		<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21">
		<img alt="Otras cuentas bancarias" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"/>
		</a>
	</td>
	</tr>
	<tr>
		<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
		<input type="hidden" id="TAG" name="TAG" value="SSE_OTHER_PDATA"></input>
		<input type="hidden" id="REC" name="REC" value=""></input>
		<input type="hidden" id="ACC" name="ACC" value="INSERTAR"></input>
		<input type="hidden" id="NOD" name="NOD" value="SSE_OTHER_PDATA"></input>
		<input class="fuenteformulario"  type="hidden" name="SCO_ENTITLED" id="SCO_ENTITLED"></input> 
		<input class="fuenteformulario" type="hidden" id="SCO_OR_ACCOUNT" name="SCO_OR_ACCOUNT"></input>
		<input class="fuenteformulario" type="hidden" id="SCO_OR_PAYMENTDATA" name="SCO_OR_PAYMENTDATA"></input>
		<input class="fuenteformulario" type="hidden" name="SCO_ID_STANDARD" id="SCO_ID_STANDARD" value=""/>
		<input class="fuenteformulario" type="hidden" name="DESDE_NACIONAL" id="DESDE_NACIONAL" value="0"/>

		<%
			//Se calcula la fecha de efecto ------------------------------------------------------------------ 
			String sFechaEfecto = "";
					
			try {
				M4Operations t = new M4Operations(request);
				sFechaEfecto = t.getItem(znodo3,zsubsesion,znodo3,"","SSP_FEC_EFECTO");
			} catch (Exception e) {}
			
			boolean bPuedeCrearCuenta = true;
			if (sFechaEfecto == null || sFechaEfecto.equals("")) {
				bPuedeCrearCuenta = false;
			}
			//------------------------------------------------------------------------------------------------
		%>


		<% String zReglaPagoOriginal = "";
					
			try {
				M4Operations t = new M4Operations(request);
				zReglaPagoOriginal = t.getItem(znodo6,zsubsesion,znodo6,"","SSE_ID_PAY_FORMULA");
			} catch (Exception e) {}
			
			if (/*zReglaPagoOriginal.equals("")*/false) { %>
				<input class="fuenteformulario" type="hidden" id="SCO_ID_PAY_FORMULA" name="SCO_ID_PAY_FORMULA" value="<%=zReglaPagoOriginal%>" htmlsafe="true"></input>
				<input class="fuenteformulario" type="hidden" id="SCO_ID_CURRENCY" name="SCO_ID_CURRENCY" value="EUR"></input>
				<input class="fuenteformulario" type="hidden" name="SCO_ID_BANK_BRANCH" id="SCO_ID_BANK_BRANCH" />	
				<input class="fuenteformulario" type="hidden" name="SCO_ID_STANDARD" id="SCO_ID_STANDARD" value="ES"/>	
				<!-- <input class="fuenteformulario" type="hidden" name="SCO_IBAN_CODE" id="SCO_IBAN_CODE" value="ES"/>	-->
				<input class="fuenteformulario" type="hidden" id="SCO_ID_PAYM_TYPE" name="SCO_ID_PAYM_TYPE" value="4"></input>
			<% } %>

		<td class="fuentecampo">&nbsp;*&nbsp;Inicio</td>   

		<td class="fuentecampo">
				<!-- <input class="fuenteformulario" type="text" name="SCO_DT_START" id="SCO_DT_START" title="Escribe la fecha de inicio" maxlength="10" size="10" tabindex="1"readonly="TRUE" />&nbsp; -->
				<!-- <a href="javascript:m4calendario(m4objeto('SCO_DT_START','NombreFormulario'))"> -->
					<!-- <img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Selecciona la fecha de inicio"></img></input> -->

			<m4:item  item="SSP_FEC_EFECTO" htmlsafe="true" outputdef="<%=znodo3%>"/>
		</td>

		<td class="fuentecampo">&nbsp;*&nbsp;Beneficiario</td> 
		<td class="fuentecampo" align="left">
			<select id="SCO_ID_PERSON" class="fuenteformulario" name="SCO_ID_PERSON" title="Selecciona el beneficiario de la cuenta">
				<option value=""></option>
				<m4:item m4varname="IdPerson" item="SSE_P_ID_PERSON" htmlsafe="true" outputdef="<%=znodo6%>"/>
				<%IdPerson = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", IdPerson);%>
				<option value="<%=IdPerson%>"><%=zminombre%></option>
				<m4:dataloop outputdef="<%=znodo6%>">				
				<m4:item m4varname="IdFamilyP" item="STD_ID_FAMILY_PERSON" htmlsafe="true" outputdef="<%=znodo6%>"/>
				<%IdFamilyP = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", IdFamilyP);%>
				<option value="<%=IdFamilyP%>" onclick="javascript:modificarFormulaPago('<m4:item item="SSE_ID_PAY_FORMULA" htmlsafe="true" outputdef="<%=znodo6%>"/>',	'<m4:item item="SSE_PAY_FORM_TP" htmlsafe="true" outputdef="<%=znodo6%>"/>');"><m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo6%>"/></option>
				</m4:dataloop>
			</select>
		</td>
		<td class="fuentecampo">&nbsp;</td>
	</tr>	

	
	<!-- Transferencia bancaria SEPA -->	
	<input type="hidden" id="SCO_ID_PAYM_TYPE" name="SCO_ID_PAYM_TYPE" value="4"></input>	
		
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
						<input class="fuenteformulario" type="text" name="SCO_ID_BANK_BRANCH" id="SCO_ID_BANK_BRANCH" value="" tabindex="4" />
					</td>
					<td class="fuentecampo" align="center">
						<input class="fuenteformulario" name="SCO_ACCOUNT_NUMBER" type="text" id="SCO_ACCOUNT_NUMBER" size="20" maxlength="20" value="" tabindex="5" title="Escribe el c&oacute;digo identificativo de la cuenta bancaria">
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
		<td class="fuentecampo">
			<!-- <input class="fuenteformulario" name="SCO_IBAN_CODE" type="text" id="SCO_IBAN_CODE" size="2" maxlength="2" value="" tabindex="6" title="Escribe el pais al que pertence la cuenta bancaria" /> -->
			<select onchange="javascript:tratarCampoClaveIBAN(this);" id="SCO_IBAN_CODE" class="fuenteformulario" name="SCO_IBAN_CODE" title="Selecciona el pais al que pertence la cuenta bancaria">
				<option value=""></option>
				<m4:dataloop outputdef="<%=znodo7%>">
					<option value="<m4:item item="SSP_CODIGO_ISO" htmlsafe="true" outputdef="<%=znodo7%>"/>"><m4:item item="STD_N_COUNTRY" htmlsafe="true" outputdef="<%=znodo7%>"/> (<m4:item item="SSP_CODIGO_ISO" htmlsafe="true" outputdef="<%=znodo7%>"/>)</option>
				</m4:dataloop>
				
			</select>
			<m4:dataloop outputdef="<%=znodo7%>">
				<input type="hidden" id="soportaIBAN_<m4:item item="SSP_CODIGO_ISO" htmlsafe="true" outputdef="<%=znodo7%>"/>" value="<m4:item item="SSP_SOPORTA_IBAN" htmlsafe="true" outputdef="<%=znodo7%>"/>">
			</m4:dataloop>
		</td>
		
		<td class="fuentecampo">&nbsp;Clave IBAN&nbsp;</td>
		<td class="fuentecampo" colspan="2">
			<input class="fuenteformulario" name="SCO_IBAN_KEY" type="text" id="SCO_IBAN_KEY" size="2" maxlength="2" value="" tabindex="7" title="Escribe el digito de control del IBAN" />
		</td>
	</tr>
	
	<tr>
		<td class="fuentecampo">&nbsp;Tipo de importe&nbsp;</td>
		<td class="fuentevalor" colspan="4">
				<input checked id="SSP_PAY_FORM_TP" name="SSP_PAY_FORM_TP" class="fuentevalor1" type="radio" title="Tipo de fórmula de pago" onclick="javascript:habilitar(1);" value="1" />&nbsp;Fijo
				<input id="SSP_PAY_FORM_TP" name="SSP_PAY_FORM_TP" class="fuentevalor1" type="radio" title="Tipo de fórmula de pago" onclick="javascript:habilitar(2);" value="2" />&nbsp;Porcentaje
		</td>
	</tr>
	<tr >
		<td class="fuentecampo">&nbsp;*&nbsp;Importe&nbsp;:</td>
		<td class="fuentevalor" colspan="4">
			<table class="fuentecampo">
			 <td>
				<input id="SCO_VALUE" name="SCO_VALUE" size="10" maxlength="20" class="fuenteformulario" type="text" tabindex="10" title="Escribe el importe del pago" />
				<span id="texto_porcentaje" name="texto_porcentaje"></span>
				<select id="SCO_ID_CURRENCY" class="fuenteformulario" name="SCO_ID_CURRENCY" title="Escoge una moneda">
				<option value=""></option>
				<m4:loop from="0" to="<%=new Integer(new Integer(zcountv5).intValue()-1).toString()%>">
				<option value="<m4:item m4name="<%=zID_CURR%>" htmlsafe="true"/>"><m4:item m4name="<%=zN_CURR%>" htmlsafe="true"/></option>
				</m4:loop>
				</select>
			</td>
			</table>	
		</td>
	</tr>
	
	<tr>			
		<td colspan="5" valign="bottom" align="center" class="fuenteboton">
		   &nbsp;
			<a  href="javascript:comprobar_previo();" title="Enviar">
			<img alt="Enviar" title="Enviar" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/>
			</a>
		</td>
		</tr>	
		</tr>
		</form>
	</table>

<div>
<% 
  if (zcounti > 0) {
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
 %>
 <br />
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
		if (zidpaympend.equals("4") == true) {
			if (zidstandardpend.equals("") == true) { %>
				<m4:item m4name="<%=zBANCOPEND%>" htmlsafe="true"/>/<m4:item m4name="<%=zCUENTAPEND%>" htmlsafe="true"/>/<m4:item m4name="<%=zIBANCODEPEND%>"/>/<m4:item m4name="<%=zIBANKEYPEND%>"/>
		   	<% } else { %>	
	   	   	   	<!-- <m4:item m4name="<%=zBANCOPEND%>"/>/<m4:item m4name="<%=zDCPEND%>"/>/<m4:item m4name="<%=zCUENTAPEND%>"/> -->
				<%=zidbank1TEMP%>/<%=zidbank2TEMP%>/<m4:item m4name="<%=zDCPEND%>"/>/<m4:item m4name="<%=zCUENTAPEND%>"/>
		   	<% } %>
		<% } %>
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
	<td align="left" class="fuentevalor" colspan="3"><m4:item m4name="<%=zcant%>" htmlsafe="true"/>&nbsp;
		<% if (ztipoimporte == 1) { %>
			<m4:item m4name="<%=zIDCURRPEND%>" htmlsafe="true"/>
		<% } else if (ztipoimporte == 2) { %>
			%
		<% } %>
	</td>
	<td align="right"><a title = "Eliminar la petici&oacute;n"  href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
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
		if (zidpaympend.equals("4")== true) {
   	   		if (zidstandardpend.equals("")== true){%>
				<m4:item m4name="<%=zBANCOPEND%>" htmlsafe="true"/>/<m4:item m4name="<%=zCUENTAPEND%>" htmlsafe="true"/>/<m4:item m4name="<%=zIBANCODEPEND%>"/>/<m4:item m4name="<%=zIBANKEYPEND%>"/>
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
	<td align="left" class="fuentevalor2"><m4:item m4name="<%=zN_FORMULAPEND%>"/></td>
	<td align="left" class="fuentevalor2" colspan="3"><m4:item m4name="<%=zcant%>" htmlsafe="true"/>&nbsp;
		<% if (ztipoimporte == 1) { %>
			<m4:item m4name="<%=zIDCURRPEND%>" htmlsafe="true"/>
		<% } else if (ztipoimporte == 2) { %>
			%
		<% } %>
	</td>
	<td align="right">
	<a title = "Eliminar la petici&oacute;n" href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
	<img alt="Eliminar la petici&oacute;n" src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)"/>
	</a></td>
</tr>
<%}%>
</m4:loop>
</table>		

<table>	
<%@include file="../../sse_generico/espanol/generico_ventanas.jsp"%>
<%}%>					
<tr>
<td colspan="2">
<br></br>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</td>
</tr>	
</table>
</div>	
<m4:endpage/>


