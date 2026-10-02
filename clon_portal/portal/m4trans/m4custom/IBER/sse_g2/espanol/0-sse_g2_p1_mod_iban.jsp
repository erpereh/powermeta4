<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*, java.text.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	
<title>Modificar cuenta bancaria principal</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js" language="JavaScript1.2"></script>
<script type="text/javascript" src="/libreria/digitocontrol.js"></script>
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-menu_ess.jsp" %>
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
//var val_start = m4valor("NombreFormulario","SCO_DT_START","","get");
var val_pais = m4valor("NombreFormulario","SCO_IBAN_CODE","","get");
var val_ibankey = m4valor("NombreFormulario","SCO_IBAN_KEY","","get");
//m4valor("NombreFormulario","SCO_ID_BANK_BRANCH",val_branch,"set"); 
/*if ((null==val_start) || (''== val_start)){
	mensaje+="* Fecha de inicio" + "\n";
	falta_valor=1;
	}*/
var val_paymtype = m4valor("NombreFormulario","SCO_ID_PAYM_TYPE","","get");
if ((4==val_paymtype) || (5==val_paymtype)){ // tranferencia bancaria
	
	if ((null==val_pais) || (''== val_pais)){
		mensaje+="* Código País" + "\n";
		falta_valor=1;
		}
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
	/*v3.m4validar(m4objeto("SCO_ACCOUNT_NUMBER","NombreFormulario"));
	if (v3.resultado == false){
		mensaje+="* Número de Cuenta , al menos 10 caracteres númericos" + "\n";
		falta_valor=1;
		}*/	
		
	}
	else {// cheque, banco
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
function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSE_PAYMENT_DATA",ord,"BORRAR","SSE_PAYMENT_DATA");
m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
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
		//document.getElementById("SCO_IBAN_KEY").disabled = false;
		document.getElementById("SCO_IBAN_KEY").removeAttribute('readonly');
		document.getElementById("SCO_IBAN_KEY").style.backgroundColor = "#FFFFFF";	//Blanco
	} else {
		document.getElementById("SCO_IBAN_KEY").value = "";
		//document.getElementById("SCO_IBAN_KEY").disabled = true;
		document.getElementById("SCO_IBAN_KEY").setAttribute('readOnly','readonly');
		document.getElementById("SCO_IBAN_KEY").style.backgroundColor = "#DDDDDD";	//Gris
	}
	
}
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
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_links.jsp" %>
<table width="100%">
<tr>
	 <td class="titulofuncional" colspan="2">Modificar cuenta bancaria principal
	</td>
</tr>
<tr>
 <td valign="top">
	<img src="/iconos/noname_banco_79_100.gif" width="79" height="100" alt="Modificar cuenta bancaria principal" ></img>
  </td>
  <td>
	 <a class="fuentedescripcion">Modifica tus datos bancarios. Ten en cuenta que la fecha en que el cambio sera efectivo se calcular&aacute; en funci&oacute;n de los procesos de n&oacute;mina calculados.</a>
    <ul class="listaenlace">
		<li><a class="enlacefuncional" title= "Cuenta bancaria principal" style="cursor:hand" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21">Cuenta bancaria principal</a></li>
	</ul>
  </td>
</tr>
</table>
<%
   String zsubsesion = "SSE_PAYMENT_DATA";
   String zmeta4object = "SSE_PAYMENT_DATA";
   String znodo = "SSE_PAYMENT_DATA";
   String znodo2 = "M4T_PAYMENT_TYPE";
   String znodo3 = "M4T_PAYMENT_DATA";
   String znodo4 = "M4T_PERSON_BANK";
   String znodo5 = "M4T_RCH_CURRENCY";
   String znodo7 = "M4T_COUNTRY_LIST";
   String ztipocargaPre = "M4T";
   String ztipocarga = "SSE";   
   String zventanas = "10";
   int zvuelta = 5;
   String zdireccion = "sse_g2/sse_g2_p1_mod_iban.jsp";
   String zestado = "21";
	int zregistroinicial = Integer.valueOf(zinicios).intValue();
	zregistroinicial = zregistroinicial - 1;
	int zventana  = Integer.valueOf(zventanas).intValue();
	int zregistrofinal = zregistroinicial + zventana - 1;
	String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
	String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
	
	String zlectura = zsubsesion + "!" + znodo;
	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
			    
	String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
	String zmove2 =znodo2 + ":" +  znodo2 + "[FIRST]";
		
	String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
	String zmove3 =znodo3 + ":" +  znodo3 + "[FIRST]";
	String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + ".";
	
	String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
	String zmove4 =znodo4 + ":" +  znodo4 + "[FIRST]";
		
	String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
	String zmove5 =znodo5 + ":" +  znodo5 + "[FIRST]";
	String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";
    String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
	
	String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";
	String zmove7 =znodo7 + ":" +  znodo7 + "[FIRST]";
	String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&VAR.m4lix]" + ".";

   String zBANCOPEND = zcomun + "SCO_ID_BANK_BRANCH";
   String zCUENTAPEND = zcomun + "SCO_ACCOUNT_NUMBER";
   String zDCPEND = zcomun + "SSP_DC";
   String zSTARTPEND = zcomun + "SCO_DT_START";
   String zPAYMTYPE = zcomun + "SCO_NM_PAYM_TYPE";
   String zNCURRPEND = zcomun + "NM_CURRENCY";
   String zORDINAL = zcomun + "ORDINAL";
   String zNACCION = zcomun + "N_ACCION";
   String zID_CURR = zcomun5 + "ID_CURRENCY";
   String zN_CURR = zcomun5 + "NM_CURRENCY"; 
   String zIBANCODEPEND = zcomun + "SCO_IBAN_CODE";
   String zIBANKEYPEND = zcomun + "SCO_IBAN_KEY";
   String zSSE_DT_START = zraiz3 + "SSE_DT_START"; 
   //fecha de efecto
   String zFEC_EFECTO = zraiz3 + "SSP_FEC_EFECTO";
  
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<!-- Carga previa para el caso en el que se acceda directamente desde el menú -->
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocargaPre%>"/></m4:exec>
<m4:endjob/>
<!-- ------------ -->
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo7%>"><m4:param name="m4name0" value="<%=zoutputdef7%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;	
	int  zcount3  = 0;
	int  zcounti3  = 0;
	int  zcount5  = 0;
	int  zcounti5  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
	    zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
	    zcount5 = m.getCount(znodo5,zsubsesion,znodo5);
	    zcounti5 = m.getCountInClient(znodo5,zsubsesion,znodo5);
	    
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountv3 = String.valueOf(zcounti3);
	String	zcountv5 = String.valueOf(zcounti5);
%>
<%
String zidbanco = "";
String zidaccount = "";
String zoraccount = "";
String zibancode = "";
String zibankey = "";
String zidcurrency = "";
String zdatestart = "";
String znmcurrency = "";
String zidbanco1 = "";
String zidbanco2 = "";
String znmpaymtype = "";
String zidcurr="";
String zidpaym="";
String zpaymdata="";
String zfecefecto = "";
  %>

<% 
	try {
		M4Operations m = new M4Operations(request);
		zidbanco = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_ID_BANK_BRANCH");
		zidaccount = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_ACCOUNT_NUMBER");
		zoraccount = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_OR_ACCOUNT");
		zibancode = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_IBAN_CODE");
		zibankey = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_IBAN_KEY");
		zdatestart = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_DT_START");
		znmcurrency = m.getItem(znodo3,zsubsesion,znodo3,"","NM_CURRENCY");
		znmpaymtype = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_NM_PAYM_TYPE");
		zidcurr = m.getItem(znodo3,zsubsesion,znodo3,"","ID_CURRENCY_DATA");
		zidpaym = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_ID_PAYM_TYPE");
		zpaymdata = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_OR_PAYMENTDATA");
		zfecefecto = m.getItem(znodo3,zsubsesion,znodo3,"","SSP_FEC_EFECTO");
	}
	catch(Exception e){}
	%>		
	<%		
	if ((null==zidaccount)||(""==zidaccount))
		{ zidaccount="";
		}
	if ((null==zidaccount)||(""==zidaccount))
		{ zidaccount="";
		}
		
	if ((zidbanco == null)||(""==zidbanco))
		{	zidbanco1 = "";
			zidbanco2 = "";
		}
	else {
		zidbanco1  = zidbanco.substring(0,4);
		zidbanco2  = zidbanco.substring(4,8);
	} 
	%>			
		
<% if (zcounti3 > 0) {%>
<table class = "tablaestados" cellspacing="0"  border="0" width="100%">
 <tr class = "tablaestadosceldatitulo">
	<td class = "tablaestadosceldatitulo" colspan="6">Datos bancarios
	</td>
	<td  colspan="1" align="right">
		<a href="sse_g2_p1.jsp">
		<img alt="Cuenta bancaria principal" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"   />
		</a>
	</td>
</tr>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_PAYMENT_DATA"></input>
<input type="hidden" id="REC" name="REC" value=""></input>
<input type="hidden" id="ACC" name="ACC" value="INSERTAR"></input>
<input type="hidden" id="NOD" name="NOD" value="SSE_PAYMENT_DATA"></input>
<input class="fuenteformulario" type="hidden" id="SSE_OR_ACCOUNT" name="SSE_OR_ACCOUNT" value="<%=zoraccount%>"></input>
<input class="fuenteformulario" type="hidden" id="SCO_OR_ACCOUNT" name="SCO_OR_ACCOUNT" value="<%=zoraccount%>"></input>
<input class="fuenteformulario" type="hidden" id="SCO_OR_PAYMENTDATA" name="SCO_OR_PAYMENTDATA" value="<%=zpaymdata%>"></input>
<input class="fuenteformulario" type="hidden" id="SCO_ID_PAYM_TYPE" name="SCO_ID_PAYM_TYPE" value="<%=zidpaym%>"></input>
<input class="fuenteformulario" type="hidden" name="SCO_ID_PAYM" id="SCO_ID_PAYM" value="<%=zidpaym%>"></input>
<!-- <input class="fuenteformulario" type="hidden" name="SCO_ID_BANK_BRANCH" id="SCO_ID_BANK_BRANCH" value="<%=(zidbanco1+zidbanco2)%>" tabindex="4"></input> -->
<input class="fuenteformulario" type="hidden" name="SCO_ENTITLED" id="SCO_ENTITLED" value="<%=zminombre%>"></input>
<!-- <input class="fuenteformulario" type="hidden" name="SCO_ID_STANDARD" id="SCO_ID_STANDARD" value="ES"/>	-->
<!-- <input class="fuenteformulario" type="hidden" name="SCO_IBAN_CODE" id="SCO_IBAN_CODE" value="ES"/>	-->
<tr>
<td class="fuentecampo" nowrap>* Inicio 
</td>    
<td class="fuentecampo">
	<!-- <input class="deshabilitado" type="text" name="SCO_DT_START" id="SCO_DT_START" title="Escribe la fecha de inicio" maxlength="10" size="10" tabindex="1"/ readonly="TRUE" disabled="TRUE"> -->
	<!-- <img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Selecciona la fecha de incio"></img> -->
	<m4:item m4name="<%=zFEC_EFECTO%>" htmlsafe="true"/>
	<input class="fuenteformulario" type="hidden" name="SCO_DT_START" id="SCO_DT_START" value="<m4:item m4name="<%=zFEC_EFECTO%>" htmlsafe="true"/>"/>
</td>
<td class="fuentecampo" rowspan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<!-- Forma de pago -->
</td>     
<td class="fuentevalor" align="left" rowspan="2">
	&nbsp;
</td>
<td class="fuentecampo" rowspan="2"><!-- Moneda -->&nbsp;
</td>     
<td class="fuentevalor" align="left" colspan="2" rowspan="2">
  &nbsp;
  <!--
  <select id="SCO_ID_CURRENCY" class="fuenteformulario" name="SCO_ID_CURRENCY" title="Elige una moneda">
	<option value="<%=zidcurr%>" selected="selected"><%=znmcurrency%></option>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv5).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zID_CURR%>" htmlsafe="true"/>"><m4:item m4name="<%=zN_CURR%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	-->
	<input class="fuenteformulario"  type="hidden" name="SCO_ID_CURRENCY" id="SCO_ID_CURRENCY" value="<%=zidcurr%>" />
</td>
</tr>
<tr>
	<td class="fuentecampo" align="right">&nbsp;</td>
	
	<td class="fuentecampo" align="right" rowspan="2">
		<table class = "tablaestados" cellpadding="4"  border="0">
			<tr>
				<td class="fuentecampo" align="center">Banco Sucursal</td>
				<td class="fuentecampo" align="center">N&uacute;mero cuenta</td>
			</tr>
			<tr>
				<td class="fuentecampo" align="center">
					<input class="fuenteformulario"  type="text" name="SCO_ID_BANK_BRANCH" id="SCO_ID_BANK_BRANCH" value="<%=zidbanco%>" tabindex="4" />
				</td>
				<td class="fuentecampo" align="center">
					<input class="fuenteformulario" name="SCO_ACCOUNT_NUMBER" type="text" id="SCO_ACCOUNT_NUMBER" size="20" maxlength="20" value="<%=zidaccount%>" tabindex="6" title="Escribe el c&oacute;digo identificativo de la cuenta bancaria" />
					<input class="fuenteformulario"  type="hidden" name="SCO_ENTITLED" id="SCO_ENTITLED" value="<%=zminombre%>"></input>
				</td>
			</tr>
		</table>
	</td>
</tr>

<tr>
	<td class="fuentecampo" align="right" nowrap>* C&oacute;digo bancario</td>
	
	<td class="fuentecampo" align="right" nowrap>* C&oacute;digo Pa&iacute;s</td>
	<td class="fuentecampo" align="left">
		<!-- <input class="fuenteformulario" name="SCO_IBAN_CODE" type="text" id="SCO_IBAN_CODE" size="2" maxlength="2" value="<%=zibancode%>" tabindex="6" title="Escribe el pais al que pertence la cuenta bancaria" /> -->
		<select onchange="javascript:tratarCampoClaveIBAN(this);" id="SCO_IBAN_CODE" class="fuenteformulario" name="SCO_IBAN_CODE" title="Selecciona el pais al que pertence la cuenta bancaria">
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
		
		<m4:dataloop outputdef="<%=znodo7%>">
			<input type="hidden" id="soportaIBAN_<m4:item item="SSP_CODIGO_ISO" htmlsafe="true" outputdef="<%=znodo7%>"/>" value="<m4:item item="SSP_SOPORTA_IBAN" htmlsafe="true" outputdef="<%=znodo7%>"/>">
		</m4:dataloop>
	</td>

	<td class="fuentecampo" align="right" nowrap>Clave IBAN</td>
	<td class="fuentecampo" align="left" colspan="2">
		<input class="fuenteformulario" name="SCO_IBAN_KEY" type="text" id="SCO_IBAN_KEY" size="2" maxlength="2" value="<%=zibankey%>" tabindex="6" title="Escribe el digito de control del IBAN" />
	</td>
 
</tr>
<tr>			
	<td colspan="7" valign="bottom" align="center" class="fuenteboton">
	 &nbsp;
	<a style="cursor:hand" href="javascript:comprobar_previo();" title="Enviar">
	<img alt="Enviar" title="Enviar" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/>
	</a>
	</td>
	</tr>	
</form>
 </tr>
</table>
<%} else { %>
	<div class="fuentenodatos" align="center">
	     Actualmente no tienes ning&uacute;n dato. Consulta con RRHH
	  </div>
	  <br/> <br/> 
<%}%>	
<% 
  if (zcounti > 0){ 
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
	%>
	
	<table class = "tablaestados" cellspacing="0"  border="0" width="100%">
		<tr>
		<td colspan="10">
			 <br />
		</td>
		</tr>
		<tr>
		<td class="tablaestadosceldatitulo">&nbsp;</td>
		<td align="left" class = "tablaestadosceldatitulo">Inicio</td>
		<td align="left"class = "tablaestadosceldatitulo" colspan="3">N&uacute;mero de cuenta</td>
		<td align="left" class = "tablaestadosceldatitulo">Moneda</td>
		<td align="left"class = "tablaestadosceldatitulo" colspan="5">Forma de pago</td>
		</tr>
		<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
		<%	zposicions = m4lix;
			zposicion = Integer.valueOf(zposicions).intValue();
		 	zcontrol = zposicion%2;
		%>
		<%if (zcontrol==0){%>
			<tr class="fuentevalor">
				<td class="fuentecampoaccion">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
			   <td align="left" class="fuentevalor" colspan="1"><m4:item m4name="<%=zSTARTPEND%>" htmlsafe="true"/>
				</td>
				<td align="left" class="fuentevalor"  colspan="3">
				<%
				String zidpaympend="";
				String zidstandardpend="";
				try {
				M4Operations t = new M4Operations(request);
				zidpaympend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE");
				zidstandardpend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_STANDARD");
				} catch(Exception e) {}
				if (zidpaympend.equals("4")== true){%>
					   <%if (zidstandardpend.equals("")== true){%>
					   	   <m4:item m4name="<%=zBANCOPEND%>"/>/<m4:item m4name="<%=zCUENTAPEND%>"/>/<m4:item m4name="<%=zIBANCODEPEND%>"/>/<m4:item m4name="<%=zIBANKEYPEND%>"/>
					   <%} else {%>	
				<m4:item m4name="<%=zBANCOPEND%>" htmlsafe="true"/>/<m4:item m4name="<%=zDCPEND%>" htmlsafe="true"/>/<m4:item m4name="<%=zCUENTAPEND%>" htmlsafe="true"/>
				<% } %>
				<% } %>
				</td>
				
				<td align="left" class="fuentevalor" colspan="1"><m4:item m4name="<%=zNCURRPEND%>" htmlsafe="true"/>
				</td>
				<td align="left" class="fuentevalor" colspan="4"><m4:item m4name="<%=zPAYMTYPE%>" htmlsafe="true"/>
				</td>
				<td align="right">
					<a title = "Eliminar la petici&oacute;n" style="CURSOR: hand" href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
                         <img alt="Eliminar la petici&oacute;n"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
					</a>
				</td>
			</tr>
		<% } else{%>
			<tr class="fuentevalor2">
				<td class="fuentecampoaccion2">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
			   <td align="left" class="fuentevalor2" colspan="1"><m4:item m4name="<%=zSTARTPEND%>" htmlsafe="true"/>
				</td>
				<td align="left" class="fuentevalor2"  colspan="3">
				<%
				String zidpaympend="";
				String zidstandardpend="";
				try {
				M4Operations t = new M4Operations(request);
				zidpaympend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE");
				zidstandardpend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_STANDARD");
				} catch(Exception e) {}
				if (zidpaympend.equals("4")== true){%>
					   <%if (zidstandardpend.equals("")== true){%>
					   	   <m4:item m4name="<%=zBANCOPEND%>"/>/<m4:item m4name="<%=zCUENTAPEND%>"/>/<m4:item m4name="<%=zIBANCODEPEND%>"/>/<m4:item m4name="<%=zIBANKEYPEND%>"/>
					   <%} else {%>	
				<m4:item m4name="<%=zBANCOPEND%>" htmlsafe="true"/>/<m4:item m4name="<%=zDCPEND%>" htmlsafe="true"/>/<m4:item m4name="<%=zCUENTAPEND%>" htmlsafe="true"/>
				<%}%>
				<% } %>
				<td align="left" class="fuentevalor2" colspan="1"><m4:item m4name="<%=zNCURRPEND%>" htmlsafe="true"/>
				</td>
				<td align="left" class="fuentevalor2" colspan="4"><m4:item m4name="<%=zPAYMTYPE%>" htmlsafe="true"/>
				</td>
				<td align="right">
					<a title = "Eliminar la petici&oacute;n" style="CURSOR: hand" href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
                         <img alt="Eliminar la petici&oacute;n"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
					</a>
				</td>
			</tr>

		 <%}%>
		</m4:loop>
		</table>	
		<%@include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_ventanas.jsp"%>	

<%}%>					
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_disclaimer.jsp" %>
</div>
</table>
<m4:endpage/>
</body>


