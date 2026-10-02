<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	
<title>Cuenta bancaria principal</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<script type="text/javascript">
function ModificarCuenta(){
	var estandar = m4valor("frmControlPais","ESTANDAR","","get");
	if (estandar=="00"){
	   m4submit("NombreFormularioIBAN");
	} else {
	//if (estandar=="ES"){
	   m4submit("NombreFormulario");
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
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_PAYMENT_DATA";
   String zmeta4object = "SSE_PAYMENT_DATA";  
   String znodo = "M4T_PAYMENT_DATA";
   String ztipocarga = "M4T";
 
   String zventanas = "20";
   
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zmove = znodo + ":" + znodo + "[FIRST]"; 
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";

   String zbanco = zcomun + "SCO_ID_BANK_BRANCH";     
   String zcuenta = zcomun + "SCO_ACCOUNT_NUMBER";
   String zdatestart = zcomun + "SCO_DT_START";
   String zorden = zcomun + "SCO_ORDINAL";
   String zidpaym = zcomun + "SCO_ID_PAYM_TYPE";
   String znpaym = zcomun + "SCO_NM_PAYM_TYPE";
   String zncurr = zcomun + "NM_CURRENCY";
   String zdc = zcomun + "SSP_DC";
   String zidstandard = zcomun + "SCO_ID_STANDARD";
   String zidibancode = zcomun + "SCO_IBAN_CODE";
   String zgbiban = zcomun + "SCO_GB_IBAN";
   String zbanco1 = zcomun + "SCO_ID_BANK1";     
   String zbanco2 = zcomun + "SCO_ID_BANK2";  
	String zoraccount = zcomun + 	"SCO_OR_ACCOUNT";
	String zorpaymentdata = zcomun + "SCO_OR_PAYMENTDATA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
%>
<table width="100%">
<tr>
<td class="titulofuncional" colspan="2">Cuenta bancaria principal
</td>
</tr>
<tr>
<td valign="top">
	<img src="/iconos/noname_banco_79_100.gif" width="79" height="100" alt="Cuenta bancaria principal"/>
</td>
<td>
<div class="fuentedescripcion">
 Consulta tu cuenta bancaria principal.
</div>
<ul class="listaenlace">
<li>
	<a id="linkModificar" class="enlacefuncional" title= "Modificar cuenta bancaria principal" style="cursor:hand" href="javascript:ModificarCuenta();">Modificar cuenta bancaria principal</a>
</li>
</ul>
</td>
</tr>
</table>
<div>

<% 
if (zcounti > 0) {
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
String zposicions = "0";
int zposicion =0;%>
<table class = "tablaestados" cellspacing="0" width="100%">
 <tr>
	<td align="left" class = "tablaestadosceldatitulo">Inicio</td>
	<td align="left" class = "tablaestadosceldatitulo">N&uacute;mero de cuenta</td>
	<td align="left" class = "tablaestadosceldatitulo">Moneda</td>
	<td align="left" class = "tablaestadosceldatitulo">IBAN</td>

	<td class = "tablaestadosceldatitulo" align="right" colspan="2">
		<a style="cursor:hand" href="javascript:ModificarCuenta();">
			<img alt="Modificar cuenta bancaria principal" src="/iconos/icono_flecha_azul1_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
		</a>
	</td>
</tr>

<m4:loop from="<%=zregistroinicials%>" to="<%=zregistroinicials%>">
<%	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue(); 	
%>

<% 	String zidpaympend="";
	String zidstandardvar="";
	String zDC_0 = "";
	try {
		M4Operations t = new M4Operations(request);
		zidpaympend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE");
		zidstandard =  t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_STANDARD");
		
		zDC_0 = t.getItem(znodo,zsubsesion,znodo,"","SSP_DC");
		zDC_0 = zDC_0.split("\\.")[0];	//se divide en torno a la expresión regular \. (punto)
		if (zDC_0.length() == 1) {
			zDC_0 = "0" + zDC_0;
		}
		
	} catch(Exception e) {} 
%>

<tr>
 <td align="left" class="fuentevalor"><m4:item m4name="<%=zdatestart%>" htmlsafe="true"/>
 </td>
<td align="left" class="fuentevalor">&nbsp;
<% 	if (zidpaympend.equals("4")== true){%>
		<a style="cursor:hand" title= "Modificar cuenta bancaria principal" alt ="Modificar cuenta bancaria principal" href="javascript:ModificarCuenta();">
		<%if (zidstandard.equals("00")== true){%>
			<m4:item m4name="<%=zbanco%>"/>/<m4:item m4name="<%=zcuenta%>"/>
		<%} else {%>	
			<!-- <m4:item m4name="<%=zbanco%>" htmlsafe="true"/>/<m4:item m4name="<%=zdc%>" htmlsafe="true"/>/<m4:item m4name="<%=zcuenta%>" htmlsafe="true"/> -->
			<m4:item m4name="<%=zbanco1%>" htmlsafe="true"/>/<m4:item m4name="<%=zbanco2%>" htmlsafe="true"/>/<%=zDC_0%>/<m4:item m4name="<%=zcuenta%>" htmlsafe="true"/>
		<%}%>
		</a>
	<%} else { %>
		N/A
		<script type="text/javascript">
			//deshabilitar enlace a modificar cuenta
			/*var oldA = document.getElementById("linkModificar");
			var newDIV = document.createElement("div");
			newDIV.innerHTML = oldA.innerHTML;
			newDIV.setAttribute("class", "fuentedescripcion");
			oldA.parentNode.replaceChild(newDIV, oldA);*/
		</script>
	<% } %>
</td>
<td align="left" class="fuentevalor"><m4:item m4name="<%=zncurr%>" htmlsafe="true"/>
</td>
<td align="left" class="fuentevalor" colspan="3"><m4:item m4name="<%=zgbiban%>"/></td>
</tr>
<form name="frmControlPais" id="frmControlPais">
	  <input type="hidden" id="ESTANDAR" name="ESTANDAR" value="<%=zidstandard%>" />
</form>
</m4:loop>

</table>
<%} else {%>	
	<div class="fuentenodatos" align="center">
		No tienes ning&uacute;n dato. Consulta con RRHH.
	</div>
<%}	%>				
<form action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod.jsp?&estado=21" method="post" name="NombreFormulario" id="NombreFormulario">
</form>
<form action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod_iban.jsp?&estado=21" method="post" name="NombreFormularioIBAN" id="NombreFormularioIBAN">
</form>
<table>					
<tr>
	<td colspan="2">
		<br></br>
	<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
		</td>
</tr>	
</table>
</div>	
<m4:endpage/>
</body>


