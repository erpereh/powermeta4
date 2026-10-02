<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<title>Validar idiomas</title>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = (String) zobjtabla.m4paramvalor("estado");
String zfiltro =(String) zobjtabla.m4paramvalor("zfiltro");
String zinicios =(String) zobjtabla.m4paramvalor("zinicios");	
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
		m4submit("oculto");
	}
	function m4enviar(){
		
		if (typeof(document.forms['a0']) != "undefined"){
			var cadena="";
			var URL = "{TAG=SSE_EMP_LANGUAGES";// VARIABLE
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
		//alert(cadena);
		document.forms["envio"].elements["param"].value=cadena;
		document.forms["envio"].elements["TAG"].value="SSE_EMP_LANGUAGES";
		m4submit("envio");
		}
	}
</script>
</head>
<body>
<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_EMP_LANGUAGES";
   String zmeta4object = "SSE_EMP_LANGUAGES";
   String znodo = "SSE_EMP_LANGUAGES";
   String ztipocarga = "SSE";
// Metodo de carga del Meta4Object generico
   String znodoprincipal = "SSE_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";

   String zventanas = "4";
   int zvuelta = 2;
   String zdireccion = "/mss_g1/mss_g1_p3_val2.jsp";
   String zestado="11";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
 
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "["+zregistroinicial+"]";   
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String znodolista = znodo + "_VAL";
   String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";
   String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
   String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";
   String ziteratorlista = znodolista + ":" + zsubsesion + "!" + znodolista;
   String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";
   
   String znodocom = "SSE_COMUNICACION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zORDINAL = zcomun+ "ORDINAL";
   String zACCIONACEPTADO = zcomun + "ACCION_ACEPTADO";   
   String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";
   String zNACCION = zcomun  + "N_ACCION"; 
   String zSTDNLANGUAGE = zcomun +"STD_N_LANGUAGE";
   String zSTDNLISTENLEVEL = zcomun + "STD_N_LISTEN_LEVEL";
   String zSTDNSPEAKLEVEL = zcomun + "STD_N_SPEAK_LEVEL";
   String zSTDNWRITELEVEL = zcomun + "STD_N_WRITE_LEVEL";
   
   String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";
   
   String zNOMBREEMPLEADOlista = zcomunlista+ "NOMBRE_EMPLEADO";
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
	try{
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcount = m.getCount(znodo,zsubsesion,znodo);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);

	int  zcountlista  = 0;
	try{
	    M4Operations m = new M4Operations(request);
	    zcountlista = m.getCountInClient(znodolista,zsubsesion,znodolista);
	} catch(Exception e) {}
	String	zcountvlista = String.valueOf(zcountlista);
%>
	<table width="100%" cellspacing="0">
		<tr>
			<td class="titulofuncional" colspan="2">Validar idiomas</td>
		</tr>
		<tr>
			<td><img alt="Validar idiomas" src="/iconos/noname_valida_idiomas_104_100.gif" width="104" height="100" /></td>
			<td><div class="descripcionfuncional">Aceite as altera&ccedil;&otilde;es de idioma dos trabalhadores. N&atilde;o se esque&ccedil;a de enviar a aprova&ccedil;&atilde;o ou cancelamento dos pedidos em cada uma das p&aacute;ginas.</div></td>
		</tr>
	</table>
<%@ include file="../../mss_generico/portugues/mssgenerico_filtro_val.jsp" %>
	
	<br />
	<!-- Fin de Tabla de validacion. -->
	<!-- ********************************************************************* -->
	<!-- Inicio tabla de datos. -->
	<form action="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11" method="post" name="oculto" id="oculto">
		<input type="hidden" id="zfiltro" name="zfiltro" value="<%=zfiltro%>" />
		<input type="hidden" id="zfiltroemp" name="znivel" value="<%=znivel%>" />
		<input type="hidden" id="zinicios" name="zinicios" value="" />
	</form>
	<% if (zcounti > 0) { %>
	<table width="100%" cellspacing="0">
		<tr>
			<td class = "tablaestadosceldatitulo" colspan="2">Pedidos</td>
		</tr>
		<%
			String zregistroinicials = String.valueOf(zregistroinicial);
			String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
			String zposicions = "0";
			int zcontrol = 0;
			int zposicion =0;
		%>
		<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
		<%
		zposicions = m4lix;
		zposicion = Integer.valueOf(zposicions).intValue();
		zposicion = zposicion - zregistroinicial;
		%>
		<!-- Tabla de datos. Parte constituyente de un registro.-->
		<tr>
			<td class="fuentecampo">
				<table cellspacing="0" width="100%">
					<tr><td class="fuentecamponombre" colspan="3">&nbsp;<m4:item m4name="<%=zNOMBREEMPLEADO%>" htmlsafe="true"/>&nbsp;solicita&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td></tr>
					<tr>
						<td class="fuentecampo" >&nbsp;Idioma:&nbsp;</td>
						<td class = "fuentevalor" ><m4:item m4name="<%=zSTDNLANGUAGE%>" htmlsafe="true"/></td>
					</tr>
					<tr>
						<td class="fuentecampo" >&nbsp;N&iacute;vel de compreens&atilde;o:&nbsp;</td>
						<td class = "fuentevalor" ><m4:item m4name="<%=zSTDNLISTENLEVEL%>" htmlsafe="true"/></td>
						<td class="fuentecampo" >&nbsp;N&iacute;vel de express&atilde;o oral:&nbsp;</td>
						<td class = "fuentevalor" ><m4:item m4name="<%=zSTDNSPEAKLEVEL%>" htmlsafe="true"/></td>
						<td class="fuentecampo" >&nbsp;N&iacute;vel de escrita:&nbsp;</td>
						<td class = "fuentevalor" ><m4:item m4name="<%=zSTDNWRITELEVEL%>" htmlsafe="true"/></td>
					</tr>							
					<tr>
						<td class="fuentecampo">
						<form name="a<%=zposicion%>" id="a<%=zposicion%>">
						<input id="ocultos" name="ocultos" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*REC=<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NOD=SSE_EMP_LANGUAGES{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NIVEL_ACEPTADO=<%=znivel%>" />
						<input name="<%=zcountv%>" type="hidden" value="<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>" />
						</form>
						</td>	
					</tr>
				</table>
			</td>
			<td class="fuentecampo">
			<form name="b<%=zposicion%>" id="b<%=zposicion%>">
				<table cellspacing="0">
					<tr>
						<td class = "fuentecampo"><input title="Aprovar o pedido" id="ac<%=zposicion%>" name="ac<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ca<%=zposicion%>)" />Aceitar</td>
					</tr>
					<tr>
						<td class = "FuenteCampo"><input title="Cancelar o pedido" id="ca<%=zposicion%>" name="ca<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ac<%=zposicion%>)" />Cancelar</td>
					</tr>
				</table>
			</form>
			</td>
		</tr>
		<tr>
			<td class="fuentecampo" colspan="2">
				Motivo do cancelamento	
				<form name="c<%=zposicion%>" id="c<%=zposicion%>">
				<input size="48" title="Indique o motivo do cancelamento" id="mo<%=zposicion%>" name="mo<%=zposicion%>" type="text" maxlength="60" />
				</form>
			</td>
		</tr>
		<tr>
			<td class="separadorlinea" colspan="2"><hr /></td>
		</tr>
		</m4:loop>
		<form id="envio" name="envio" action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp" method="post">
		<input type="hidden" id="param" name="param" value="" />
		<input type="hidden" id="TAG" name="TAG" value="" />
		</form>
	</table>
	<%@include file="../../sse_generico/portugues/generico_ventanas_post.jsp"%>

	<%
	}else{%>	
	<div class="fuentenodatos" align="center">Actualmente n&atilde;o existe nenhum dado para aprovar neste n&iacute;vel.</div>
	<%
	}
	%>		
<m4:endpage/>
</body>
<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
</div>


