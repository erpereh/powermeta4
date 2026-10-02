<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Valida Préstamos</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>	
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>	
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = zobjtabla.m4paramvalor("estado");
String zfiltro =zobjtabla.m4paramvalor("zfiltro");
String zinicios =zobjtabla.m4paramvalor("zinicios");	
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zfiltro==null)|| (zfiltro.equals(""))){zfiltro = "Todos";} 
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
var cadena="";
var URL = "{TAG=SSE_LOANS";
if (typeof(document.forms['a0']) != "undefined"){
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
document.forms["envio"].elements["TAG"].value="SSE_LOANS";
document.forms["envio"].submit();
}
}
</script>
</head>
<body>
<%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_LOANS";
   String zmeta4object = "SSE_LOANS";
   String znodo = "SSE_LOANS";
   String znodo1 = "M4T_CURRENCY";
   String ztipocarga = "SSE";
   
   String zventanas = "4";
   int zvuelta = 2;
   String zdireccion = "/mss_g2/mss_g2_p5_val.jsp";
   String zestado="21";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   
   String znodolista = znodo + "_VAL";
   String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";
   String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
   String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";
   String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";
   
   String znodocom = "SSE_COMUNICACION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
   
   String znodoprincipal = "SSE_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
   
   String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";
   
   String zORDINAL = zcomun + "ORDINAL";
   String zNACCION =zcomun +  "N_ACCION";   
   String zNOMBREEMPLEADO = zcomun+ "NOMBRE_EMPLEADO";   
   String zSCONMLOAN = zcomun + "SCO_NM_LOAN_1";
   String zSCORATE = zcomun + "SCO_RATE";
   String zSCOAMTLOAN = zcomun + "SCO_AMT_LOAN";
   String zSCODTREQPAYMENT = zcomun + "SCO_DT_REQ_PAYMENT";
   String zSCOAMTQUOTAS = zcomun + "SCO_AMT_QUOTAS";
   String zNMCURRENCY = zcomun + "IDEN_CURRENCY";
   String zSC0NUMQUOTAS = zcomun + "SCO_NUM_QUOTAS";
   
  
   
   String zNOMBREEMPLEADOlista = zcomunlista + "NOMBRE_EMPLEADO";
   String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON"; 
         
 %>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,znodoprincipal,"","NIVEL",znivel);
	    m.setItem(zsubsesion,znodo,"","ID_PERSON",zfiltro);	    
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodolista%>"><m4:param name="m4name0" value="<%=zoutputdeflista%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelista%>"/></m4:move>
<%
	int  zcounti  = 0;
	int  zcountilista  = 0;
	int  zcount  = 0;
		try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcountilista = m.getCountInClient(znodolista,zsubsesion,znodolista);
		zcount = m.getCount(znodo,zsubsesion,znodo);
    } catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountvlista = String.valueOf(zcountilista);
%>


<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2">Valida Pr&eacute;stamos</td></tr>
<tr>
	<td><img alt="Valida Pr&eacute;stamos"title="Valida Pr&eacute;stamos" src="/iconos/noname_banco_79_100.gif" width="103" height="100" /></td>
	<td><div class="descripcionfuncional">Valida las solicitudes de pr&eacute;stamos de tus empleados. Recuerda enviar la aceptaci&oacute;n o cancelaci&oacute;n de solicitudes por cada una de las p&aacute;ginas.</div></td>
</tr>
</table>
<%@ include file="../../mss_generico/espanol/mssgenerico_filtro_val.jsp" %>
<br />
<form action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_val.jsp?estado=21" method="post" name="oculto" id="oculto">
<input type="hidden" id="zfiltro" name="zfiltro"  value="<%=zfiltro%>" />
<input type="hidden" id="zfiltroemp" name="znivel"  value="<%=znivel%>" />
<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>
<% if (zcounti > 0) {
String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1); %>	
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="2">Peticiones</td></tr>
<%
int zposicion = 0;
String zposicions = "0";
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%  zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zposicion = zposicion - zregistroinicial;
%>
<tr>
	<td class="fuentecampo">
	<table cellspacing="0" width="100%">
	<tr><td class="fuentecamponombre" colspan="4">&nbsp;<m4:item m4name="<%=zNOMBREEMPLEADO%>" htmlsafe="true"/>&nbsp;solicita&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td></tr>
	<tr><td class="fuentecamponombre" colspan="4"><br /></td></tr>
	<tr>
		<td class="fuentecampo">Tipo de Pr&eacute;stamo</td>
		<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONMLOAN%>" htmlsafe="true"/></td>
		<td class="fuentecampo">Inter&eacute;s</td>
		<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCORATE%>" htmlsafe="true"/>&nbsp;%</td>		
	</tr>
	<tr>
	</tr>
	<tr>
	   <td class="fuentecampo">Capital</td>
		<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCOAMTLOAN%>" htmlsafe="true"/>&nbsp;&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zNMCURRENCY%>" htmlsafe="true"/></td>							
		 <td class="fuentecampo">Importe Cuota</td>
		 <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCOAMTQUOTAS%>" htmlsafe="true"/></td>		
	</tr>
	<tr>
	    <td class="fuentecampo">Fec.Solicitud 1º Pago</td>
		<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTREQPAYMENT%>" htmlsafe="true"/></td>
		<td class="fuentecampo">Nº Cuotas</td>
		 <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSC0NUMQUOTAS%>" htmlsafe="true"/></td>			    		
	</tr>
	<tr>
		<td class="fuentecampo">
		<form name="a<%=zposicion%>" id="a<%=zposicion%>" action=" ">
		<input id="ocultos<%=zposicion%>" name="ocultos<%=zposicion%>" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*REC=<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NOD=SSE_LOANS{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NIVEL_ACEPTADO=<%=znivel%>" />
		<input id="ocul<%=zposicion%>" name="<%=zcountv%>" type="hidden" value="<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>" />
		</form>
		</td>
	</tr>
	</table>					
	</td>
	<td class="fuentecampo">
	<form name="b<%=zposicion%>" id="b<%=zposicion%>" action=" ">
	<table cellspacing="0" class="fuentecampo">	
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
	<form name="c<%=zposicion%>" id="c<%=zposicion%>" action=" ">
	Motivo de cancelaci&oacute;n			
	<input size="48" title="Escribe el motivo de cancelaci&oacute;n" id="mo<%=zposicion%>" name="mo<%=zposicion%>" type="text" maxlength="60" />
	</form>
	</td>
</tr>
<tr>
	<td class="separadorlinea" colspan="2">	<hr /></td>
</tr>
</m4:loop>
</table>
<%@include file="../../sse_generico/espanol/generico_ventanas_post.jsp"%>
<form id="envio" name="envio" action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp" method="post">
<input type="hidden" id="param" name="param" value="" />
<input type="hidden" id="TAG" name="TAG" value="" />
</form>
<%}else{%><div class="fuentenodatos">Actualmente no tienes ning&uacute;n dato que validar en este nivel.</div><%}%>		
<m4:endpage/>
</body>
<%@ include file="../../mss_generico/espanol/mssgenerico_disclaimer.jsp" %>
</div>
</html>


