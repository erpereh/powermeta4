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
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
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
var val_bank1 = m4valor("NombreFormulario","SCO_ID_BANK1","","get");
var val_bank2 = m4valor("NombreFormulario","SCO_ID_BANK2","","get");
var val_account = m4valor("NombreFormulario","SCO_ACCOUNT_NUMBER","","get");
var val_dc = m4valor("NombreFormulario","SSP_DC","","get");
//var val_start = m4valor("NombreFormulario","SCO_DT_START","","get");
val_branch = val_bank1 + val_bank2;
m4valor("NombreFormulario","SCO_ID_BANK_BRANCH",val_branch,"set"); 
/*if ((null==val_start) || (''== val_start)){
	mensaje+="* Fecha de inicio" + "\n";
	falta_valor=1;
	}*/
var val_paymtype = m4valor("NombreFormulario","SCO_ID_PAYM_TYPE","","get");
if ((4==val_paymtype) || (5==val_paymtype)){ // tranferencia bancaria
	v1.m4validar(m4objeto("SCO_ID_BANK1","NombreFormulario"));
	if (v1.resultado == false){
		mensaje+="*  Entidad, al menos 4 caracteres númericos" + "\n";
		falta_valor=1;
		}
	v1.m4validar(m4objeto("SCO_ID_BANK2","NombreFormulario"));
	if (v1.resultado == false){
		mensaje+="*  Oficina, al menos 4 caracteres númericos" + "\n";
		falta_valor=1;
		}	
	v2.m4validar(m4objeto("SSP_DC","NombreFormulario"));
	if (v2.resultado == false){
		mensaje+="*  Digito de control, al menos 2 caracteres númericos" + "\n";
		falta_valor=1;
		}			
	v3.m4validar(m4objeto("SCO_ACCOUNT_NUMBER","NombreFormulario"));
	if (v3.resultado == false){
		mensaje+="* Número de Cuenta , al menos 10 caracteres númericos" + "\n";
		falta_valor=1;
		}	
	var valordc=calculodc(val_branch,val_account);
	if (valordc!=val_dc){
		 //mensaje1 +="Digito de control incorrecto, debería ser " + valordc+"\n"+"Compruebe sus datos"+"\n";
		 mensaje1 +="Digito de control incorrecto.\n"+"Compruebe sus datos"+"\n";
		 error_dc=1;
		 }		
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
   String ztipocargaPre = "M4T";
   String ztipocarga = "SSE";   
   String zventanas = "10";
   int zvuelta = 5;
   String zdireccion = "sse_g2/sse_g2_p1_mod.jsp";
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
String zidcurrency = "";
String zdatestart = "";
String znmcurrency = "";
String zidbanco1 = "";
String zidbanco2 = "";
String ziddc = "";
String znmpaymtype = "";
String zidcurr="";
String zidpaym="";
String zpaymdata="";
String zfecefecto = "";

String zidstandard = "";
  %>

<% 
	try {
		M4Operations m = new M4Operations(request);
		zidbanco = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_ID_BANK_BRANCH");
		zidbanco1 = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_ID_BANK1");
		zidbanco2 = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_ID_BANK2");
		zidaccount = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_ACCOUNT_NUMBER");
		zoraccount = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_OR_ACCOUNT");
		ziddc = m.getItem(znodo3,zsubsesion,znodo3,"","SSP_DC"); 
		zdatestart = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_DT_START");
		znmcurrency = m.getItem(znodo3,zsubsesion,znodo3,"","NM_CURRENCY");
		znmpaymtype = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_NM_PAYM_TYPE");
		zidcurr = m.getItem(znodo3,zsubsesion,znodo3,"","ID_CURRENCY_DATA");
		zidpaym = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_ID_PAYM_TYPE");
		zpaymdata = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_OR_PAYMENTDATA");
		zfecefecto = m.getItem(znodo3,zsubsesion,znodo3,"","SSP_FEC_EFECTO");
		
		zidstandard = m.getItem(znodo3,zsubsesion,znodo3,"","SCO_ID_STANDARD");
		
	} catch(Exception e){}
	%>		
	<%	
	//Si el campo SCO_ID_STANDARD no es "ES" (cuenta extranjera), se debe redireccionar a la página sse_g2_p1_mod_iban.jsp
	if (!zidstandard.equals("ES")) {
		%>
		<form action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod_iban.jsp?&estado=21" method="post" name="NombreFormularioIBAN" id="NombreFormularioIBAN">
		</form>
		<script type="text/javascript">
			m4submit("NombreFormularioIBAN");
		</script>
		<%
	}
	
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
	if ((ziddc==null)||(""==ziddc))
		{
		ziddc="";
		}
	else {
		ziddc  = ziddc.substring(0,ziddc.indexOf("."));
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
<input class="fuenteformulario" type="hidden" name="SCO_ID_STANDARD" id="SCO_ID_STANDARD" value="ES"/>	
<input class="fuenteformulario" type="hidden" name="SCO_IBAN_CODE" id="SCO_IBAN_CODE" value="ES"/>	
<tr>
<td class="fuentecampo" nowrap>*Inicio 
</td>    
<td class="fuentecampo">
	<!-- <input class="deshabilitado" type="text" name="SCO_DT_START" id="SCO_DT_START" title="Escribe la fecha de inicio" maxlength="10" size="10" tabindex="1"/ readonly="TRUE" disabled="TRUE"> -->
	<!-- <img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Selecciona la fecha de incio"></img> -->
	<m4:item m4name="<%=zFEC_EFECTO%>" htmlsafe="true"/>
	<input class="fuenteformulario" type="hidden" name="SCO_DT_START" id="SCO_DT_START" value="<m4:item m4name="<%=zFEC_EFECTO%>" htmlsafe="true"/>"/>
</td>
<td class="fuentecampo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<!-- Forma de pago -->
</td>     
<td class="fuentevalor" align="left">
	&nbsp;
</td>
<td class="fuentecampo"><!-- Moneda -->&nbsp;
</td>     
<td class="fuentevalor" align="left" colspan="2">
  &nbsp;
  <!--
  <select id="SCO_ID_CURRENCY" class="fuenteformulario" name="SCO_ID_CURRENCY" title="Elige una moneda">
	<option value="<%=zidcurr%>" selected="selected"><%=znmcurrency%></option>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv5).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zID_CURR%>" htmlsafe="true"/>"><m4:item m4name="<%=zN_CURR%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	-->
	<input class="fuenteformulario" type="hidden" name="SCO_ID_CURRENCY" id="SCO_ID_CURRENCY" value="<%=zidcurr%>"/>
</td>
</tr>


<tr>
	<td class="fuentecampo" align="right" colspan="1">&nbsp;</td>
	<td class="fuentecampo" align="right" colspan="6" rowspan="2">
		<table class = "tablaestados" cellpadding="4"  border="0">
			<tr>
				<td class="fuentecampo" align="center">Entidad</td>
				<td class="fuentecampo" align="center">Oficina</td>
				<td class="fuentecampo" align="center">DC</td>
				<td class="fuentecampo" align="center">N&uacute;mero cuenta</td>
			</tr>
			<tr>
				<td class="fuentecampo" align="center">
					<input class="fuenteformulario" id="SCO_ID_BANK1" type="text" name="SCO_ID_BANK1" size="4" maxlength="4" value="<%=zidbanco1%>" tabindex="2" title="Escribe el c&oacute;digo de la entidad" />
				</td>
				<td class="fuentecampo" align="center">
					<input class="fuenteformulario"  id="SCO_ID_BANK2" type="text" name="SCO_ID_BANK2" size="4" maxlength="4" value="<%=zidbanco2%>" tabindex="3" title="Escribe el c&oacute;digo identificativo de la sucursal" />
					<input class="fuenteformulario"  type="hidden" name="SCO_ID_BANK_BRANCH" id="SCO_ID_BANK_BRANCH" value="<%=(zidbanco1+zidbanco2)%>" tabindex="4"></input>
				</td>
				<td class="fuentecampo" align="center">
					<% 
						if (ziddc.length() == 1) {
							ziddc = "0" + ziddc;
						}
					%>
					<input class="fuenteformulario" id="SSP_DC" name="SSP_DC" type="text" size="2" maxlength="2" value="<%=ziddc%>" tabindex="5" title="Escribe los d&iacute;gitos de control"></input>
				</td>
				<td class="fuentecampo" align="center">
					<input class="fuenteformulario" name="SCO_ACCOUNT_NUMBER" type="text" id="SCO_ACCOUNT_NUMBER" size="11" maxlength="10" value="<%=zidaccount%>" tabindex="6" title="Escribe el c&oacute;digo identificativo de la cuenta bancaria"></input>
					<input class="fuenteformulario"  type="hidden" name="SCO_ENTITLED" id="SCO_ENTITLED" value="<%=zminombre%>"></input>
				</td>
			</tr>
		</table>
		
	</td>
</tr>
<tr>
	<td class="fuentecampo" align="right" nowrap>*C&oacute;digo bancario</td>
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
				String zDC_0 = "";
				try {
					M4Operations t = new M4Operations(request);
					zidpaympend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE");
					zidstandardpend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_STANDARD");

					zDC_0 = t.getItem(znodo,zsubsesion,znodo,"","SSP_DC");
					zDC_0 = zDC_0.split("\\.")[0];	//se divide en torno a la expresión regular \. (punto)
					if (zDC_0.length() == 1) {
						zDC_0 = "0" + zDC_0;
					}
				} catch(Exception e) {}
				if (zidpaympend.equals("4")== true){%>
					<% if (zidstandardpend.equals("")== true){%>
						<m4:item m4name="<%=zBANCOPEND%>"/>/<m4:item m4name="<%=zCUENTAPEND%>"/>/<m4:item m4name="<%=zIBANCODEPEND%>"/>/<m4:item m4name="<%=zIBANKEYPEND%>"/>
					<% } else {	%>
						<!-- <m4:item m4name="<%=zBANCOPEND%>" htmlsafe="true"/>/<%=zDC_0%>/<m4:item m4name="<%=zCUENTAPEND%>" htmlsafe="true"/> -->
						<%=zidbanco1%>/<%=zidbanco2%>/<%=zDC_0%>/<m4:item m4name="<%=zCUENTAPEND%>" htmlsafe="true"/>
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
				String zDC_0 = "";
				try {
					M4Operations t = new M4Operations(request);
					zidpaympend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE");
					zidstandardpend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_STANDARD");
					zDC_0 = t.getItem(znodo,zsubsesion,znodo,"","SSP_DC");
					zDC_0 = zDC_0.split("\\.")[0];	//se divide en torno a la expresión regular \. (punto)
					if (zDC_0.length() == 1) {
						zDC_0 = "0" + zDC_0;
					}
				} catch(Exception e) {}
				if (zidpaympend.equals("4")== true){%>
				    <%if (zidstandardpend.equals("")== true){%>
					    <m4:item m4name="<%=zBANCOPEND%>"/>/<m4:item m4name="<%=zCUENTAPEND%>"/>/<m4:item m4name="<%=zIBANCODEPEND%>"/>/<m4:item m4name="<%=zIBANKEYPEND%>"/>
					<%} else { %>
						<!-- <m4:item m4name="<%=zBANCOPEND%>" htmlsafe="true"/>/<%=zDC_0%>/<m4:item m4name="<%=zCUENTAPEND%>" htmlsafe="true"/> -->
						<%=zidbanco1%>/<%=zidbanco2%>/<%=zDC_0%>/<m4:item m4name="<%=zCUENTAPEND%>" htmlsafe="true"/>
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
		<%@include file="../../sse_generico/espanol/generico_ventanas.jsp"%>	

<%}%>					
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
</table>
<m4:endpage/>
</body>


