<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<title>Valida cuenta bancaria principal</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/Javascript1.2" src="/libreria/funciones_sse.js"></script>	
<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>	
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
Hashtable zhash = zobjtabla.getTablaHash();
String estado = (String) zhash.get("estado");
String zfiltro =(String) zhash.get("zfiltro");
String zinicios =(String) zhash.get("zinicios");	
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "Todos";} 
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

String znivel =zobjtabla.m4paramvalor("znivel");
if ((znivel==null)||(znivel.equals(""))){
znivel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel");
if ((znivel==null)||(znivel.equals(""))) znivel = "1";
}

%>
<script type="text/javascript">
function filtrar(){
	var valor =m4select("filtro","prueba","value");
	var nivel =m4select("nivel","prueba","value");
	m4valor("oculto","zfiltro",valor,"set");
	m4valor("oculto","znivel",nivel,"set");
	oculto.submit();
}
</script>
<script type="text/javascript">
function m4enviar(){
	if (typeof(document.forms['a0']) != "undefined"){
		var cadena="";
		var URL = "{TAG=SSE_PAYMENT_DATA";
		var numregistros = parseInt(document.forms['a0'].elements[1].name);
		cadena = cadena + URL;
		for (var i = 0; i < numregistros; i++){
			var formulario = "b" + i;
			if (document.forms[formulario].elements[0].checked == true){
				var formulario1 = "a" + i;
				cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";
				cadena = cadena + document.forms[formulario1].elements[0].value;
			} 
			if (document.forms[formulario].elements[1].checked == true){
				var formulario1 = "a" + i;
				cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";
				cadena = cadena + document.forms[formulario1].elements[0].value;
				var formulario2 = "c" + i;
				cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value;
			}
		}
		document.forms["envio"].elements["param"].value=cadena;
		document.forms["envio"].elements["TAG"].value="SSE_PAYMENT_DATA";
		document.forms["envio"].submit();
	}
}
</script>
</head>
<body>
<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
  String zsubsesion = "SSE_PAYMENT_DATA";
   String zmeta4object = "SSE_PAYMENT_DATA";
   String znodo = "SSE_PAYMENT_DATA";
   String ztipocarga = "SSE";
   String zventanas = "4";
   int zvuelta = 2;
   String zdireccion = "/mss_g2/mss_g2_p1_val.jsp";
   String zestado="21";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
// No se modifica en general.

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
   String zlectura = zsubsesion + "!" + znodo;
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String znodolista = znodo + "_VAL";
   String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";
   String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
   String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";
   String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";
  
   String znodocom = "SSE_COMUNICACION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
   
// Metodo de carga del Meta4Object generico

   String znodoprincipal = "SSE_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zORDINAL = zcomun + "ORDINAL";
   String zNACCION = zcomun + "N_ACCION";   
   String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";
   String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";

   String zfecinicio = zcomun +"SCO_DT_START";
   String zidbanco = zcomun + "SCO_ID_BANK_BRANCH";
   String ziddc = zcomun + "SSP_DC";
   String zidcuenta = zcomun + "SCO_ACCOUNT_NUMBER";
   String zNcurr = zcomun + "NM_CURRENCY";
   String zNformapago = zcomun + "SCO_NM_PAYM_TYPE";  
   String zidstandard = zcomun + "SCO_ID_STANDARD";
   String zibankey = zcomun + "SCO_IBAN_KEY";
   String zibancode = zcomun + "SCO_IBAN_CODE";
   
   String zNOMBREEMPLEADOlista =  zcomunlista +  "NOMBRE_EMPLEADO";
   String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";       
  
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    
	    m.setItem(zsubsesion,znodoprincipal,"","NIVEL",znivel);
	    m.setItem(zsubsesion,znodo,"","ID_PERSON",zfiltro);
	      
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodolista%>"><m4:param name="m4name0" value="<%=zoutputdeflista%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef >
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelista%>"/></m4:move>
<%
	int  zcounti  = 0;
	int  zcount  = 0;
	int  zcountilista  = 0;	
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcount = m.getCount(znodo,zsubsesion,znodo);
		zcountilista = m.getCountInClient(znodolista,zsubsesion,znodolista);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountvlista = String.valueOf(zcountilista);
%>
<table width="100%" cellspacing="0">
<tr>
	<td class="titulofuncional" colspan="2">Valida cuenta bancaria principal</td>
	
</tr>
<tr>
	<td><img alt="Valida cuenta bancaria principal" src="/iconos/noname_valida_bancarios_100_100.gif" width="100" height="100" /></td>
	<td><div class="descripcionfuncional">Valida los cambios de la cuenta bancaria principal de tus empleados. Recuerda enviar la aceptaci&oacute;n o cancelaci&oacute;n de solicitudes por cada una de las p&aacute;ginas.</div></td>
</tr>
</table>
<%@ include file="../../mss_generico/portugues/mssgenerico_filtro_val.jsp" %>
<br />
	<form action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p1_val.jsp?estado=21" method="post" name="oculto" id="oculto">
	<input type="hidden" id="zfiltro" name="zfiltro"  value="<%=zfiltro%>" />
	<input type="hidden" id="zfiltroemp" name="znivel"  value="<%=znivel%>" />
	<input type="hidden" id="zinicios" name="zinicios"  value="" />
	</form>
	<% if (zcounti > 0) { 
		String zregistroinicials = String.valueOf(zregistroinicial);
		String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
		String zposicions = "0";
		int zposicion =0;%>	
		<table width="100%" cellspacing="0">
		<tr>
			<td class = "tablaestadosceldatitulo" colspan="2">
				Peticiones
			</td>
		</tr>
		<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
		<%	zposicions = m4lix;
			zposicion = Integer.valueOf(zposicions).intValue();
		 	zposicion = zposicion - zregistroinicial;%>
		<tr>
			<td class="fuentecampo">
			<table cellspacing="0" width="100%" border="0">
				<td class="fuentecamponombre" colspan="4">&nbsp;<m4:item m4name="<%=zNOMBREEMPLEADO%>" htmlsafe="true"/>&nbsp;solicita&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
							    <tr>
					<td class = "fuentecampo" colspan="1">&nbsp;Inicio:&nbsp;</td>
					<td class = "fuentevalor" colspan="2"><m4:item m4name="<%=zfecinicio%>" htmlsafe="true"/></td>
				</tr>
				<tr>
					<td class = "fuentecampo" colspan="1">&nbsp;C&oacute;digo bancario:&nbsp;</td>
					<td class = "fuentevalor" colspan="3">
					<%
					String zidpaympend="";
					String zidstandardpend="";
					String zDC_0 = "";
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
						zDC_0 = t.getItem(znodo,zsubsesion,znodo,"","SSP_DC");
						zDC_0 = zDC_0.split("\\.")[0];	//se divide en torno a la expresión regular \. (punto)
						if (zDC_0.length() == 1) {
							zDC_0 = "0" + zDC_0;
						}
					} catch(Exception e) {}
					if ((zidpaympend.equals("4")== true)){%>
					   <%if (zidstandardpend.equals("")== true){%>
						<m4:item m4name="<%=zidbanco%>" htmlsafe="true"/>/<m4:item m4name="<%=zidcuenta%>" htmlsafe="true"/>/<m4:item m4name="<%=zibancode%>" htmlsafe="true"/>/<m4:item m4name="<%=zibankey%>" htmlsafe="true"/>
					   <%} else {%>	
					   	<!-- <m4:item m4name="<%=zidbanco%>" htmlsafe="true"/>/<%=zDC_0%>/<m4:item m4name="<%=zidcuenta%>" htmlsafe="true"/> -->
						<%=zidbank1TEMP%>/<%=zidbank2TEMP%>/<%=zDC_0%>/<m4:item m4name="<%=zidcuenta%>" htmlsafe="true"/>
					   <%}%>
					<%}%>
					</td>
				</tr>
				<tr>
					<td class = "fuentecampo" colspan="1">&nbsp;Moneda:&nbsp;</td>
					<td class = "fuentevalor" colspan="2"><m4:item m4name="<%=zNcurr%>" htmlsafe="true"/></td>
				</tr>
				<tr>
					<td class = "fuentecampo" colspan="1">&nbsp;Forma de pago:&nbsp;</td>
					<td class = "fuentevalor" colspan="2"><m4:item m4name="<%=zNformapago%>" htmlsafe="true"/></td>
				</tr>
				<tr>
					<td class="fuentecampo" colspan="4">
					<form name="a<%=zposicion%>" id="a<%=zposicion%>">
						&nbsp;<input id="ocultos" name="ocultos" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*REC=<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NOD=SSE_PAYMENT_DATA{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NIVEL_ACEPTADO=<%=znivel%>" />
								 <input size="1" name="<%=zcountv%>" type="hidden" value="<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>" />
					</form>
					</td>	
				</tr>
				</table>
			</td>
			<td class="fuentecampo">
				<form name="b<%=zposicion%>" id="b<%=zposicion%>">
				<table cellspacing="0">
				<tr>
					<td class="fuentecampo">
						<input title="Acepta la petic&oacute;n" id="ac<%=zposicion%>" name="ac<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ca<%=zposicion%>)" />
						Aceptar
					</td>
				</tr>
				<tr>
					<td class="fuentecampo">
						<input title="Cancela la petic&oacute;n" id="ca<%=zposicion%>" name="ca<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ac<%=zposicion%>)" />
						Cancelar
					</td>
				</tr>
				</table>
				</form>
			</td>
		</tr>
		<tr>
			<td class="fuentecampo" colspan="2">
				Motivo de cancelaci&oacute;n			
				<form name="c<%=zposicion%>" id="c<%=zposicion%>">
				<input size="48" title="Escribe el motivo de cancelaci&oacute;n" id="mo<%=zposicion%>" name="mo<%=zposicion%>" type="text" maxlength="60" />
				</form>
			</td>
		</tr>
		<tr><td class="separadorlinea" colspan="2">	<hr /></td></tr>
		</m4:loop>
		<form id="envio" name="envio" action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp" method="post">
		<input type="hidden" id="param" name="param" value="" />
		<input type="hidden" id="TAG" name="TAG" value="" />
		</form>
	</table>
	</td>
</tr>
</table>
	<%@include file="../../sse_generico/portugues/generico_ventanas_post.jsp"%>
<%}else 
 {%>	
	  <div class="fuentenodatos" align="center">Actualmente no tienes ning&uacute;n dato que validar en este nivel.</div>
	  <br/> <br/> 
 <%	}%>		
<m4:endpage/>
</body>
<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
</div>
</body>


